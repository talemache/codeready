import { Logo } from "@/components/Logo";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#engagements", label: "Engagements" },
  { href: "#about", label: "About" },
];

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-40 flex items-center gap-5 py-[15px] backdrop-blur-[6px]"
      style={{
        background: "color-mix(in srgb, var(--color-bg) 94%, transparent)",
        paddingInline:
          "max(clamp(20px,5vw,72px), calc((100% - 1200px) / 2 + clamp(20px,5vw,72px)))",
      }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 rounded bg-[color:var(--color-text)] px-4 py-2 text-[color:var(--color-bg)]"
      >
        Skip to content
      </a>

      <a href="#top" className="mr-auto shrink-0 no-underline">
        <Logo />
      </a>

      <nav aria-label="Primary" className="hidden min-[480px]:flex items-center gap-5">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-sm text-[color:var(--color-text)] no-underline hover:text-[color:var(--color-accent)]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="btn-primary" style={{ color: "var(--color-bg)" }}>
        Start a conversation
      </a>
    </header>
  );
}
