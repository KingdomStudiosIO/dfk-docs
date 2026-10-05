import Link from "next/link";
import { getNav, type NavNode } from "@/lib/nav";

function contains(node: NavNode, url: string): boolean {
  return node.url === url || node.children.some((c) => contains(c, url));
}

function Item({ node, currentUrl }: { node: NavNode; currentUrl: string }) {
  const active = node.url === currentUrl;
  if (node.external) {
    return (
      <li>
        <a
          href={node.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-md px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-500/10 dark:text-neutral-400"
        >
          {node.title} ↗
        </a>
      </li>
    );
  }
  const link = (
    <Link
      href={node.url}
      aria-current={active ? "page" : undefined}
      className={`block flex-1 rounded-md px-3 py-1.5 text-sm ${
        active
          ? "bg-accent/10 font-semibold text-accent"
          : "text-neutral-600 hover:bg-neutral-500/10 dark:text-neutral-400"
      }`}
    >
      {node.title}
    </Link>
  );
  if (!node.children.length) return <li>{link}</li>;
  return (
    <li>
      <details open={contains(node, currentUrl)} className="group">
        <summary className="flex cursor-pointer list-none items-center [&::-webkit-details-marker]:hidden">
          {link}
          <span className="px-2 text-xs text-neutral-400 transition-transform group-open:rotate-90">›</span>
        </summary>
        <ul className="ml-3 mt-0.5 space-y-0.5 border-l border-(--line) pl-2">
          {node.children.map((c) => (
            <Item key={c.url} node={c} currentUrl={currentUrl} />
          ))}
        </ul>
      </details>
    </li>
  );
}

export function Sidebar({ currentUrl }: { currentUrl: string }) {
  return (
    <nav aria-label="Pages" className="space-y-6">
      {getNav().sections.map((section, i) => (
        <div key={section.title ?? i}>
          {section.title && (
            <div className="mb-1.5 px-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              {section.title}
            </div>
          )}
          <ul className="space-y-0.5">
            {section.items.map((node) => (
              <Item key={node.url} node={node} currentUrl={currentUrl} />
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
