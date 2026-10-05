import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { TabsEnhancer } from "@/components/TabsEnhancer";
import { renderPage } from "@/lib/markdown";
import { findPage, getNav } from "@/lib/nav";

type Props = { params: Promise<{ slug?: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getNav().pages.map((p) => ({ slug: p.url.split("/").filter(Boolean) }));
}

function urlFor(slug?: string[]) {
  return "/" + (slug ?? []).join("/");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = findPage(urlFor((await params).slug));
  if (!page) return {};
  const { description } = await renderPage(page);
  return {
    title: page.url === "/" ? { absolute: page.title } : page.title,
    description,
    alternates: { canonical: page.url },
  };
}

export default async function DocPage({ params }: Props) {
  const url = urlFor((await params).slug);
  const page = findPage(url);
  if (!page) notFound();
  const { html, headings, description } = await renderPage(page);
  const { pages } = getNav();
  const index = pages.indexOf(page);
  const prev = pages[index - 1];
  const next = pages[index + 1];

  return (
    <>
      <Header currentUrl={url} />
      <div className="mx-auto flex max-w-[90rem] px-4 sm:px-6">
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-72 shrink-0 overflow-y-auto border-r border-(--line) py-6 pr-4 lg:block">
          <Sidebar currentUrl={url} />
        </aside>
        <main className="min-w-0 flex-1 px-0 py-8 lg:px-10">
          <article className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl dark:text-white">
              {page.title}
            </h1>
            {description && (
              <p className="mt-3 text-lg text-neutral-500 dark:text-neutral-400">{description}</p>
            )}
            <div
              className="prose prose-neutral dark:prose-invert prose-a:text-accent prose-headings:scroll-mt-20 prose-img:rounded-md mt-8 max-w-none"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <TabsEnhancer />
            <nav className="mt-12 grid gap-4 border-t border-(--line) pt-6 sm:grid-cols-2">
              {prev ? (
                <Link href={prev.url} className="rounded-lg border border-(--line) p-4 hover:border-accent">
                  <div className="text-xs text-neutral-500">Previous</div>
                  <div className="font-medium">{prev.title}</div>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link href={next.url} className="rounded-lg border border-(--line) p-4 text-right hover:border-accent">
                  <div className="text-xs text-neutral-500">Next</div>
                  <div className="font-medium">{next.title}</div>
                </Link>
              )}
            </nav>
          </article>
        </main>
        {headings.length > 1 && (
          <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-60 shrink-0 overflow-y-auto py-8 pl-4 xl:block">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">On this page</div>
            <ul className="space-y-2 text-sm">
              {headings.map((h) => (
                <li key={h.id} className={h.depth === 3 ? "pl-4" : undefined}>
                  <a href={`#${h.id}`} className="text-neutral-600 hover:text-accent dark:text-neutral-400">
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </>
  );
}
