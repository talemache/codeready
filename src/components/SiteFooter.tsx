import { Logo } from "@/components/Logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--navy)]/10 bg-[color:var(--cream-deep)]">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <Logo />
            <p className="mt-2 max-w-xs text-sm text-[color:var(--navy)]/70">
              Data, AI, and software consulting for nonprofits and mission-driven organizations.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#services" className="text-[color:var(--navy)]/80 hover:underline">
              Services
            </a>
            <a href="#work" className="text-[color:var(--navy)]/80 hover:underline">
              Selected work
            </a>
            <a href="#about" className="text-[color:var(--navy)]/80 hover:underline">
              About
            </a>
            <a href="#faq" className="text-[color:var(--navy)]/80 hover:underline">
              FAQ
            </a>
            <a href="#contact" className="text-[color:var(--navy)]/80 hover:underline">
              Contact
            </a>
          </nav>

          <div className="text-sm text-[color:var(--navy)]/80">
            {/* TODO: confirm the monitored inbox before launch */}
            <a href="mailto:hello@northal.org" className="hover:underline">
              hello@northal.org
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-[color:var(--navy)]/10 pt-6 text-xs text-[color:var(--navy)]/55">
          <p>&copy; {year} Ryan Levels. Doing business as Northal LLC.</p>
          <p>Kent, Ohio &middot; Remote-first</p>
        </div>
      </div>
    </footer>
  );
}
