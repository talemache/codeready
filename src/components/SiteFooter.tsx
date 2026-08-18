import { Logo } from "@/components/Logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--navy)]/10 bg-[color:var(--navy)]">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <Logo mark="cream" />
            <p className="mt-3 max-w-xs text-sm text-[color:var(--cream)]/60 leading-relaxed">
              Data, AI, and software consulting for nonprofits and mission-driven organizations.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/ryanlevels/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ryan Levels on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--cream)]/15 text-[color:var(--cream)]/60 transition hover:border-[color:var(--cream)]/35 hover:text-[color:var(--cream)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:hello@northal.org"
                className="text-sm text-[color:var(--cream)]/60 transition hover:text-[color:var(--cream)]"
              >
                hello@northal.org
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#services" className="text-[color:var(--cream)]/65 transition hover:text-[color:var(--cream)]">
              Services
            </a>
            <a href="#approach" className="text-[color:var(--cream)]/65 transition hover:text-[color:var(--cream)]">
              Approach
            </a>
            <a href="#work" className="text-[color:var(--cream)]/65 transition hover:text-[color:var(--cream)]">
              Selected work
            </a>
            <a href="#about" className="text-[color:var(--cream)]/65 transition hover:text-[color:var(--cream)]">
              About
            </a>
            <a href="#faq" className="text-[color:var(--cream)]/65 transition hover:text-[color:var(--cream)]">
              FAQ
            </a>
            <a href="#contact" className="text-[color:var(--cream)]/65 transition hover:text-[color:var(--cream)]">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-[color:var(--cream)]/10 pt-6 text-xs text-[color:var(--cream)]/40">
          <p>&copy; {year} Ryan Levels. Doing business as Northal LLC.</p>
          <p>Kent, Ohio &middot; Remote-first</p>
        </div>
      </div>
    </footer>
  );
}
