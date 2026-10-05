import fs from "node:fs";
import path from "node:path";
import { SITE } from "./site";

export type Page = {
  title: string;
  /** Path on the site, "/" for home. */
  url: string;
  /** Markdown file under the content directory. */
  file: string;
  description?: string;
};

export type NavNode = Page & { children: NavNode[]; /** Sidebar link to another site. */ external?: boolean };
export type NavSection = { title?: string; items: NavNode[] };
export type Nav = { sections: NavSection[]; pages: Page[] };

export const CONTENT_DIR = path.join(process.cwd(), "content", SITE);

type LlmsEntry = { title: string; url: string; description?: string };

/** llms.txt lists every page in sidebar order with its URL. */
function readLlms(origin: string): LlmsEntry[] {
  const text = fs.readFileSync(path.join(CONTENT_DIR, "llms.txt"), "utf8");
  const entries: LlmsEntry[] = [];
  for (const line of text.split("\n")) {
    const m = line.match(/^- \[(.+?)\]\((https?:\/\/[^)]+)\)(?::\s*(.*))?$/);
    if (!m || !m[2].startsWith(origin)) continue;
    const url = m[2].slice(origin.length).replace(/\.md$/, "") || "/";
    entries.push({ title: m[1], url, description: m[3]?.trim() || undefined });
  }
  return entries;
}

function docsNav(): Nav {
  const llms = readLlms("https://docs.defikingdoms.com");
  const summary = fs.readFileSync(path.join(CONTENT_DIR, "SUMMARY.md"), "utf8");
  const sections: NavSection[] = [{ items: [] }];
  const pages: Page[] = [];
  const stack: NavNode[] = [];
  for (const line of summary.split("\n")) {
    const heading = line.match(/^## (.+)$/);
    if (heading || /^\*\*\*\s*$/.test(line)) {
      sections.push({ title: heading?.[1].trim(), items: [] });
      stack.length = 0;
      continue;
    }
    const item = line.match(/^(\s*)\* \[(.+?)\]\((.+?)\)\s*$/);
    if (!item) continue;
    const depth = Math.floor(item[1].length / 2);
    if (/^https?:\/\//.test(item[3])) {
      const link: NavNode = { title: item[2], url: item[3], file: "", children: [], external: true };
      if (depth === 0) sections[sections.length - 1].items.push(link);
      else stack[depth - 1].children.push(link);
      continue;
    }
    const entry = llms[pages.length];
    if (!entry) throw new Error(`SUMMARY.md has more pages than llms.txt (at "${item[2]}")`);
    const node: NavNode = {
      title: item[2].replace(/\\(.)/g, "$1"),
      // First entry is the home page.
      url: pages.length === 0 ? "/" : entry.url,
      file: item[3],
      description: entry.description,
      children: [],
    };
    pages.push(node);
    stack.length = depth;
    if (depth === 0) sections[sections.length - 1].items.push(node);
    else stack[depth - 1].children.push(node);
    stack[depth] = node;
  }
  if (pages.length !== llms.length) {
    throw new Error(`SUMMARY.md lists ${pages.length} pages but llms.txt lists ${llms.length}`);
  }
  return { sections: sections.filter((s) => s.items.length), pages };
}

const SECTION_TITLES: Record<string, string> = {
  api: "API",
  nfts: "NFTs",
  "dfk-chain": "DFK Chain",
};

function titleize(segment: string) {
  return (
    SECTION_TITLES[segment] ??
    segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

function devsNav(): Nav {
  const llms = readLlms("https://devs.defikingdoms.com");
  const byUrl = new Map<string, NavNode>();
  const sections: NavSection[] = [{ items: [] }];
  const sectionBySegment = new Map<string, NavSection>();
  const pages: Page[] = [];
  llms.forEach((entry, i) => {
    const url = i === 0 ? "/" : entry.url;
    const node: NavNode = {
      title: entry.title,
      url,
      file: i === 0 ? "pages/index.md" : `pages${entry.url}.md`,
      description: entry.description,
      children: [],
    };
    pages.push(node);
    byUrl.set(url, node);
    if (url === "/") return void sections[0].items.push(node);
    // Nest under the closest parent path that has a page.
    const segments = url.split("/").filter(Boolean);
    for (let n = segments.length - 1; n > 0; n--) {
      const parent = byUrl.get("/" + segments.slice(0, n).join("/"));
      if (parent) return void parent.children.push(node);
    }
    if (segments.length === 1) return void sections[0].items.push(node);
    // No page at the top-level path, so treat it as a sidebar group.
    let section = sectionBySegment.get(segments[0]);
    if (!section) {
      section = { title: titleize(segments[0]), items: [] };
      sectionBySegment.set(segments[0], section);
      sections.push(section);
    }
    section.items.push(node);
  });
  return { sections: sections.filter((s) => s.items.length), pages };
}

let cached: Nav | undefined;

export function getNav(): Nav {
  cached ??= SITE === "devs" ? devsNav() : docsNav();
  return cached;
}

export function findPage(url: string): Page | undefined {
  return getNav().pages.find((p) => p.url === url);
}
