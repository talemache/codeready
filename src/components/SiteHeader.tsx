import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#work", label: "Selected work" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

/**
 * Tracks which anchored section is currently in view so the primary nav can
 * mark it. Uses IntersectionObserver only — no scroll listeners, no motion.
 */
function useActiveSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(
      (element): element is Element => element !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeId;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection();

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--navy)]/10 bg-[color:var(--cream)]/95 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 bg-[color:var(--navy)] px-4 py-2 text-[color:var(--cream)]"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-5">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-0 text-sm md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeId === link.href ? "true" : undefined}
              className="nav-link text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary hidden text-sm sm:inline-flex">
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center text-[color:var(--navy)] hover:bg-[color:var(--navy)]/5 md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {menuOpen ? (
                <path d="M6 6 L18 18 M18 6 L6 18" />
              ) : (
                <path d="M4 7h16 M4 12h16 M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-[color:var(--navy)]/10 px-5 pb-5 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={activeId === link.href ? "true" : undefined}
                  className="block rounded-lg px-2 py-3 text-[color:var(--navy)] aria-[current]:font-semibold aria-[current]:text-[color:var(--copper-deep)] hover:bg-[color:var(--navy)]/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full text-sm"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
