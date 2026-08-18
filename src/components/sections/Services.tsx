import type { ReactNode } from "react";
import { SERVICES } from "@/lib/content";

const SERVICE_ICONS: Record<string, ReactNode> = {
  "data-reporting": (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="12" width="4" height="9" rx="1" />
      <rect x="10" y="7" width="4" height="14" rx="1" />
      <rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
  ),
  "legalserver-nonprofit": (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" strokeLinecap="round" />
    </svg>
  ),
  "ai-workflow": (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 2a4 4 0 0 1 4 4v1h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v1a4 4 0 0 1-8 0v-1H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V6a4 4 0 0 1 4-4Z" />
      <circle cx="9.5" cy="10" r="0.75" fill="currentColor" />
      <circle cx="14.5" cy="10" r="0.75" fill="currentColor" />
      <path d="M9 14s1 1 3 1 3-1 3-1" strokeLinecap="round" />
    </svg>
  ),
  "ad-hoc-analytics": (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" strokeLinecap="round" />
      <path d="M8 11h6M11 8v6" strokeLinecap="round" />
    </svg>
  ),
};

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="max-w-2xl">
        <span className="eyebrow">What I do</span>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
          Four kinds of work, one way of doing it
        </h2>
        <p className="mt-4 text-[color:var(--navy)]/75">
          Specific tools, specific outcomes. If it doesn't fit neatly into one of these, tell me
          what you're stuck on — most engagements start as a conversation, not a package.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <div key={service.id} className="card-editorial group p-7">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--cream-deep)] text-[color:var(--copper)] transition-colors group-hover:bg-[color:var(--copper)] group-hover:text-[color:var(--cream)]">
              {SERVICE_ICONS[service.id]}
            </div>
            <h3 className="font-serif text-xl">{service.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--navy)]/78">
              {service.description}
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-[color:var(--copper-deep)]">
              {service.tools}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
