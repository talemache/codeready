import { Link } from "@tanstack/react-router";
import { SearchBar } from "@/components/SearchBar";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--forest)]/10 bg-[color:var(--paper)]/85 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 rounded-full bg-[color:var(--forest)] px-4 py-2 text-[color:var(--cream-text)]"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:py-4">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--forest)] text-[color:var(--paper)] font-serif text-lg leading-none">C</span>
          <span className="font-serif text-xl text-[color:var(--forest)] group-hover:italic">CodeReady</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <SearchBar />
          <nav aria-label="Primary" className="flex items-center gap-1 text-sm">
            <Link
              to="/dashboard"
              className="rounded-full px-3 py-1.5 min-h-11 sm:min-h-0 inline-flex items-center text-[color:var(--forest)] hover:bg-[color:var(--forest)]/10"
              activeProps={{ className: "rounded-full px-3 py-1.5 inline-flex items-center bg-[color:var(--forest)] text-[color:var(--paper)]" }}
            >
              Dashboard
            </Link>
            <Link
              to="/about"
              className="hidden sm:inline-flex items-center rounded-full px-3 py-1.5 text-[color:var(--forest)] hover:bg-[color:var(--forest)]/10"
              activeProps={{ className: "rounded-full px-3 py-1.5 inline-flex items-center bg-[color:var(--forest)] text-[color:var(--paper)]" }}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
