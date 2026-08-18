import type { ReactNode } from "react";
import { SERVICES } from "@/lib/content";

const SERVICE_ICONS: Record<string, ReactNode> = {
  "data-reporting": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <rect x="3" y="12" width="4" height="9" rx="1" />
      <rect x="10" y="7" width="4" height="14" rx="1" />
      <rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
  ),
  "legalserver-nonprofit": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" strokeLinecap="round" />
    </svg>
  ),
  "ai-workflow": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M12 2a4 4 0 0 1 4 4v1h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v1a4 4 0 0 1-8 0v-1H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V6a4 4 0 0 1 4-4Z" />
      <circle cx="9.5" cy="10" r="0.75" fill="currentColor" />
      <circle cx="14.5" cy="10" r="0.75" fill="currentColor" />
      <path d="M9 14s1 1 3 1 3-1 3-1" strokeLinecap="round" />
    </svg>
  ),
  "ad-hoc-analytics": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" strokeLinecap="round" />
      <path d="M8 11h6M11 8v6" strokeLinecap="round" />
    </svg>
  ),
};

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="grid gap-3 lg:grid-cols-[1fr_2fr] lg:items-end lg:gap-16 border-b border-[color:var(--navy)]/10 pb-10 mb-12">
        <div>
          <span className="eyebrow">What I do</span>
          <span className="section-rule mt-3" aria-hidden />
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
            Four kinds of work, one way of doing it
          </h2>
        </div>
        <p className="copy leading-relaxed lg:max-w-xl lg:mb-1">
          Specific tools, specific outcomes. If it doesn't fit neatly into one of these, tell me
          what you're stuck on — most engagements start as a conversation, not a package.
        </p>
      </div>

      <div className="grid gap-px bg-[color:var(--navy)]/8 border border-[color:var(--navy)]/8 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <div key={service.id} className="card-editorial group p-8 bg-[color:var(--card)]">
            <div className="mb-5 text-[color:var(--copper)]">{SERVICE_ICONS[service.id]}</div>
            <h3 className="font-serif text-xl leading-snug">{service.name}</h3>
            <p className="mt-3 text-sm leading-relaxed copy">{service.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {service.tools.split(", ").map((tool) => (
                <li key={tool} className="tag">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
