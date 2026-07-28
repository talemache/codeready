import { Link } from "@tanstack/react-router";
import { SearchBar } from "@/components/SearchBar";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { useAudience } from "@/hooks/use-audience";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export function SiteHeader() {
  const { dark, toggle } = useDarkMode();
  const { audience, audienceLoaded, clearAudience } = useAudience();

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
            {audienceLoaded && audience && (
              <button
                onClick={clearAudience}
                aria-label={`Switch learning path from ${audience === "teen" ? "Teen" : "College"}`}
                className="hidden sm:inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium border border-[color:var(--forest)]/30 text-[color:var(--forest)]/80 hover:bg-[color:var(--forest)]/10 transition"
              >
                Path: {audience === "teen" ? "Teen" : "College"}
              </button>
            )}
          </nav>
          <button
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="grid h-9 w-9 place-items-center rounded-full text-[color:var(--forest)] hover:bg-[color:var(--forest)]/10 transition"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
