"use client";

import MiniSearch from "minisearch";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Doc = { id: string; title: string; text: string };
type Hit = { id: string; title: string; snippet: string };

let indexPromise: Promise<{ mini: MiniSearch<Doc>; docs: Map<string, Doc> }> | undefined;

function loadIndex() {
  indexPromise ??= fetch("/search-index.json")
    .then((r) => r.json())
    .then((docs: Doc[]) => {
      const mini = new MiniSearch<Doc>({
        fields: ["title", "text"],
        searchOptions: { boost: { title: 4 }, prefix: true, fuzzy: 0.15 },
      });
      mini.addAll(docs);
      return { mini, docs: new Map(docs.map((d) => [d.id, d])) };
    });
  return indexPromise;
}

function snippet(text: string, query: string) {
  const term = query.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
  const at = Math.max(0, text.toLowerCase().indexOf(term));
  const start = Math.max(0, at - 50);
  return (start > 0 ? "..." : "") + text.slice(start, start + 140).trim() + "...";
}

export function Search() {
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<Hit[]>([]);
  const [open, setOpen] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        input.current?.focus();
      }
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (!box.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  async function search(value: string) {
    setQuery(value);
    setOpen(true);
    if (value.trim().length < 2) return setHits([]);
    const { mini, docs } = await loadIndex();
    setHits(
      mini
        .search(value)
        .slice(0, 8)
        .map((r) => {
          const doc = docs.get(r.id)!;
          return { id: doc.id, title: doc.title, snippet: snippet(doc.text, value) };
        }),
    );
  }

  return (
    <div ref={box} className="relative min-w-0">
      <input
        ref={input}
        type="search"
        value={query}
        onChange={(e) => search(e.target.value)}
        onFocus={() => {
          loadIndex();
          setOpen(true);
        }}
        placeholder="Search..."
        aria-label="Search the docs"
        className="w-24 min-w-0 rounded-md border border-(--line) bg-transparent px-3 py-1.5 text-sm outline-none focus:border-accent sm:w-64"
      />
      {open && query.trim().length >= 2 && (
        <div className="absolute right-0 mt-2 max-h-[70vh] w-[min(28rem,90vw)] overflow-y-auto rounded-lg border border-(--line) bg-(--page) p-1 shadow-xl">
          {hits.length === 0 ? (
            <div className="px-3 py-4 text-sm text-neutral-500">No results for “{query}”.</div>
          ) : (
            hits.map((hit) => (
              <Link
                key={hit.id}
                href={hit.id}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 hover:bg-neutral-500/10"
              >
                <div className="text-sm font-medium">{hit.title}</div>
                <div className="line-clamp-2 text-xs text-neutral-500">{hit.snippet}</div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
