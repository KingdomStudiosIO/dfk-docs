import Link from "next/link";
import { site } from "@/lib/site";
import { Search } from "./Search";
import { Sidebar } from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ currentUrl }: { currentUrl: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-(--line) bg-(--page)/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center gap-3 px-4 sm:px-6">
        <details className="group lg:hidden">
          <summary
            aria-label="Open navigation"
            className="cursor-pointer list-none rounded-md border border-(--line) px-2.5 py-1.5 text-sm [&::-webkit-details-marker]:hidden"
          >
            ☰
          </summary>
          <div className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-(--page) p-4">
            <Sidebar currentUrl={currentUrl} />
          </div>
        </details>
        <Link href="/" className="flex shrink-0 items-center gap-2 font-semibold text-neutral-950 dark:text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={site.logo ?? site.icon} alt="" className="h-6 w-auto sm:h-8" />
          {!site.logo && <span>{site.name}</span>}
        </Link>
        <div className="ml-auto flex min-w-0 items-center gap-2 sm:gap-4">
          <Search />
          <nav className="hidden items-center gap-4 text-sm md:flex">
            {site.links.map((l) => (
              <a key={l.href} href={l.href} className="text-neutral-600 hover:text-accent dark:text-neutral-400">
                {l.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
