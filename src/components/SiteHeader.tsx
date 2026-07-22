import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="border-b border-[color:var(--forest)]/10 bg-[color:var(--paper)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--forest)] text-[color:var(--paper)] font-serif text-lg leading-none">C</span>
          <span className="font-serif text-xl text-[color:var(--forest)] group-hover:italic">CodeReady</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 text-sm">
          <Link
            to="/dashboard"
            className="rounded-full px-3 py-1.5 text-[color:var(--forest)] hover:bg-[color:var(--forest)]/10"
            activeProps={{ className: "rounded-full px-3 py-1.5 bg-[color:var(--forest)] text-[color:var(--paper)]" }}
          >
            Dashboard
          </Link>
          <a
            href="#tracks"
            className="hidden sm:inline-block rounded-full px-3 py-1.5 text-[color:var(--forest)] hover:bg-[color:var(--forest)]/10"
          >
            Tracks
          </a>
        </nav>
      </div>
    </header>
  );
}
