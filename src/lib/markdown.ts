import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Element, ElementContent, Root } from "hast";
import { toString } from "hast-util-to-string";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { CONTENT_DIR, getNav, type Page } from "./nav";
import { SITE, site } from "./site";

export type Heading = { id: string; text: string; depth: 2 | 3 };
export type RenderedPage = {
  html: string;
  headings: Heading[];
  description?: string;
  /** Plain text of the page body, for the search index. */
  text: string;
};

const PUBLIC_DIR = path.join(process.cwd(), "public");

function escapeAttr(value: string) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function attr(tag: string, name: string) {
  return tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];
}

function embed(url: string) {
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{6,})/);
  if (yt) {
    return `<div class="gb-embed"><iframe src="https://www.youtube-nocookie.com/embed/${yt[1]}" title="Embedded video" loading="lazy" allowfullscreen></iframe></div>`;
  }
  return `<a class="gb-ref" href="${escapeAttr(url)}">${escapeAttr(url)}</a>`;
}

/**
 * GitBook's `{% tag %}` blocks are not markdown. Turn each into plain HTML (with blank lines
 * around the body so the markdown inside is still parsed) before handing the text to remark.
 */
function convertGitbookBlocks(source: string): string {
  const out: string[] = [];
  let fence: string | null = null;
  let inContentRef = false;
  for (const line of source.split("\n")) {
    const fenceMatch = line.match(/^\s*(```+|~~~+)/);
    if (fenceMatch) {
      if (!fence) fence = fenceMatch[1][0];
      else if (fenceMatch[1][0] === fence) fence = null;
      out.push(line);
      continue;
    }
    const tag = fence ? null : line.match(/^(\s*)\{%\s*(\w[\w-]*)\s*(.*?)\s*%\}\s*$/);
    if (!tag) {
      if (inContentRef) {
        const link = line.match(/^\s*\[(.*?)\]\((.*?)\)\s*$/);
        if (link) {
          out.push(`<a class="gb-ref" href="${escapeAttr(link[2])}">${escapeAttr(link[1])}</a>`);
          continue;
        }
      }
      out.push(line);
      continue;
    }
    const [, indent, name, rest] = tag;
    const emit = (html: string) => out.push("", indent + html, "");
    switch (name) {
      case "hint":
        emit(`<div class="gb-hint gb-hint-${attr(rest, "style") ?? "info"}">`);
        break;
      case "endhint":
      case "endtabs":
        emit("</div>");
        break;
      case "tabs":
        emit(`<div class="gb-tabs">`);
        break;
      case "tab":
        emit(`<section class="gb-tab" data-title="${escapeAttr(attr(rest, "title")?.trim() ?? "")}">`);
        break;
      case "endtab":
        emit("</section>");
        break;
      case "code": {
        const title = attr(rest, "title");
        if (title) emit(`<div class="gb-code-title">${escapeAttr(title)}</div>`);
        break;
      }
      case "content-ref":
        inContentRef = true;
        break;
      case "endcontent-ref":
        inContentRef = false;
        break;
      case "embed": {
        const url = attr(rest, "url");
        if (url) emit(embed(url));
        break;
      }
      case "file": {
        const src = attr(rest, "src") ?? "";
        const label = decodeURIComponent(src.split("/").pop() ?? src);
        emit(`<a class="gb-file" href="${escapeAttr(src)}" download>${escapeAttr(label)}</a>`);
        break;
      }
      default:
        // endcode, endembed, endfile and anything unknown: drop the tag, keep the body.
        break;
    }
  }
  return out.join("\n");
}

function publicFileExists(urlPath: string) {
  return fs.existsSync(path.join(PUBLIC_DIR, decodeURIComponent(urlPath)));
}

function encodePath(p: string) {
  return p.split("/").map(encodeURIComponent).join("/");
}

/** Point image/file URLs at the copies in /public instead of GitBook's or the CDN's hosting. */
function localAsset(url: string): string | undefined {
  const gitbookAsset = url.match(/(?:^|\/)\.gitbook\/assets\/(.+)$/);
  if (gitbookAsset) {
    const name = decodeURIComponent(gitbookAsset[1]).replace(/\\(.)/g, "$1");
    return `/assets/${SITE}/${encodeURIComponent(name)}`;
  }
  const upload = url.match(/^https:\/\/\d+-files\.gitbook\.io\/.*?uploads(?:%2F|\/)([^%/]+)(?:%2F|\/)([^?]+)/);
  if (upload) {
    const name = `${upload[1]}_${decodeURIComponent(upload[2])}`;
    for (const dir of ["gitbook", "files"]) {
      const candidate = `/assets/${SITE}/${dir}/${encodeURIComponent(name)}`;
      if (publicFileExists(candidate)) return candidate;
    }
  }
  const cdn = url.match(/^https:\/\/((?:[\w-]+\.b-cdn\.net|game\.defikingdoms\.com)\/[^?#]+)/);
  if (cdn) {
    const candidate = `/assets/${SITE}/cdn/${encodePath(decodeURIComponent(cdn[1]))}`;
    if (publicFileExists(candidate)) return candidate;
  }
  return undefined;
}

function resolveLink(href: string, page: Page, byFile: Map<string, Page>, byUrl: Map<string, Page>) {
  const [target, hash = ""] = href.split("#");
  const suffix = hash ? `#${hash}` : "";
  const own = `${site.url}/`;
  let pathname: string | undefined;
  if (target.startsWith(own)) pathname = "/" + target.slice(own.length);
  else if (target.startsWith("/") && !target.startsWith("//")) pathname = target;
  if (pathname !== undefined) {
    const url = pathname.replace(/\.md$/, "").replace(/\/$/, "") || "/";
    const found = byUrl.get(url) ?? (url === "/readme" || url === "/dfk-developer-docs" ? byUrl.get("/") : undefined);
    return found ? { href: found.url + suffix, page: found } : undefined;
  }
  if (/^[a-z][a-z0-9+.-]*:/i.test(target) || target === "") return undefined;
  // Relative link between markdown files (the Git-Synced docs repo).
  const base = path.posix.dirname(page.file);
  const rel = path.posix.normalize(path.posix.join(base, decodeURIComponent(target)));
  const found = byFile.get(rel) ?? byFile.get(path.posix.join(rel, "README.md"));
  return found ? { href: found.url + suffix, page: found } : undefined;
}

function isElement(node: unknown, tagName?: string): node is Element {
  return (
    !!node &&
    (node as Element).type === "element" &&
    (tagName === undefined || (node as Element).tagName === tagName)
  );
}

function find(node: Element, tagName: string): Element | undefined {
  let hit: Element | undefined;
  visit(node, "element", (el) => {
    if (!hit && el.tagName === tagName) hit = el;
  });
  return hit;
}

/** GitBook "cards" tables: one card per row, with optional cover-image and link columns. */
function cardsFromTable(table: Element): Element {
  const headers: Element[] = [];
  const rows: Element[] = [];
  visit(table, "element", (el) => {
    if (el.tagName === "th") headers.push(el);
    if (el.tagName === "tr" && !find(el, "th")) rows.push(el);
  });
  const has = (i: number, prop: string) => headers[i]?.properties?.[prop] !== undefined;
  const cards: Element[] = rows.map((row) => {
    const cells = row.children.filter((c): c is Element => isElement(c, "td"));
    let href: string | undefined;
    let cover: string | undefined;
    const body: ElementContent[] = [];
    cells.forEach((cell, i) => {
      const link = find(cell, "a");
      const img = find(cell, "img");
      if (has(i, "dataCardTarget")) href = link?.properties?.href as string | undefined;
      else if (has(i, "dataCardCover"))
        cover = (img?.properties?.src ?? link?.properties?.href) as string | undefined;
      else if (!has(i, "dataHidden") && toString(cell).trim())
        body.push({ type: "element", tagName: "div", properties: {}, children: cell.children });
    });
    const children: ElementContent[] = [];
    if (cover)
      children.push({ type: "element", tagName: "img", properties: { src: cover, alt: "" }, children: [] });
    children.push({ type: "element", tagName: "div", properties: { className: ["gb-card-body"] }, children: body });
    return href
      ? { type: "element", tagName: "a", properties: { className: ["gb-card"], href }, children }
      : { type: "element", tagName: "div", properties: { className: ["gb-card"] }, children };
  });
  return { type: "element", tagName: "div", properties: { className: ["gb-cards", "not-prose"] }, children: cards };
}

function rehypeGitbook(page: Page, headings: Heading[], collected: { text: string }) {
  const { pages } = getNav();
  const byFile = new Map(pages.map((p) => [p.file, p]));
  const byUrl = new Map(pages.map((p) => [p.url, p]));
  return () => (tree: Root) => {
    // The page title is rendered by the layout; drop the markdown's own leading h1.
    const firstH1 = tree.children.findIndex((n) => isElement(n, "h1"));
    if (firstH1 !== -1) tree.children.splice(firstH1, 1);
    // The live-site export repeats the page description as the first paragraph.
    const firstEl = tree.children.find((n) => isElement(n));
    if (page.description && isElement(firstEl, "p") && toString(firstEl).trim() === page.description) {
      tree.children.splice(tree.children.indexOf(firstEl), 1);
    }

    visit(tree, "element", (el, index, parent) => {
      if (el.tagName === "table" && el.properties?.dataView === "cards" && parent && index !== undefined) {
        parent.children[index] = cardsFromTable(el);
      }
    });

    visit(tree, "element", (el) => {
      const props = (el.properties ??= {});
      if (el.tagName === "a" && typeof props.href === "string") {
        const asset = localAsset(props.href);
        const resolved = asset ? undefined : resolveLink(props.href, page, byFile, byUrl);
        if (asset) props.href = asset;
        else if (resolved) {
          props.href = resolved.href;
          // content-ref cards in the repo markdown are labelled with the file name.
          const classes = Array.isArray(props.className) ? props.className : [];
          if (classes.includes("gb-ref") && /\.md$|^\s*$/.test(toString(el))) {
            el.children = [{ type: "text", value: resolved.page.title }];
          }
        } else if (/^https?:\/\//.test(props.href)) {
          props.target = "_blank";
          props.rel = ["noopener", "noreferrer"];
        }
      }
      if (el.tagName === "img" && typeof props.src === "string") {
        props.src = localAsset(props.src) ?? props.src;
        props.loading = "lazy";
      }
      if (el.tagName === "source" && typeof props.srcSet === "string") {
        props.srcSet = localAsset(props.srcSet) ?? props.srcSet;
      }
      if (el.tagName === "table") {
        // Wide contract-address tables scroll inside their own box instead of the page.
        const classes = Array.isArray(props.className) ? props.className : [];
        props.className = [...classes, "gb-table"];
      }
      if ((el.tagName === "h2" || el.tagName === "h3") && typeof props.id === "string") {
        headings.push({ id: props.id, text: toString(el), depth: el.tagName === "h2" ? 2 : 3 });
      }
    });
    collected.text = toString(tree).replace(/\s+/g, " ").trim();
  };
}

const cache = new Map<string, Promise<RenderedPage>>();

export function renderPage(page: Page): Promise<RenderedPage> {
  let rendered = cache.get(page.file);
  if (!rendered) {
    rendered = render(page);
    cache.set(page.file, rendered);
  }
  return rendered;
}

async function render(page: Page): Promise<RenderedPage> {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, page.file), "utf8");
  const { content, data } = matter(raw);
  const source = content
    // The live-site export prefixes every page with a pointer to llms.txt.
    .replace(/^\s*> For the complete documentation index, see \[llms\.txt\][^\n]*\n/, "")
    .replace(/&#x20;/g, " ");
  const headings: Heading[] = [];
  const collected = { text: "" };
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeGitbook(page, headings, collected))
    .use(rehypeHighlight, { detect: false })
    .use(rehypeStringify)
    .process(convertGitbookBlocks(source));
  const description = typeof data.description === "string" ? data.description.trim() : page.description;
  return { html: String(file), headings, description: description || undefined, text: collected.text };
}
