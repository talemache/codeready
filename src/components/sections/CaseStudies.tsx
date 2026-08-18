import { CASE_STUDIES } from "@/lib/content";

const OUTCOME_ICONS: Record<string, string> = {
  "legal-aid-reporting": "⏱",
  "evaluation-pipeline": "🔗",
  "intake-triage": "✓",
};

const DEFAULT_OUTCOME_ICON = "★";

export function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="max-w-2xl">
        <span className="eyebrow">Selected work</span>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Representative engagements</h2>
        <p className="mt-4 text-[color:var(--navy)]/75">
          The kind of problems I get called in for, and how they usually resolve. Named case studies
          are added here as engagements wrap and clients sign off on sharing them.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {CASE_STUDIES.map((study) => (
          <article key={study.id} className="card-editorial flex flex-col overflow-hidden">
            {/* Outcome banner at top — the result that earns the click */}
            <div className="bg-[color:var(--navy)] px-6 py-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-xl" aria-hidden>{OUTCOME_ICONS[study.id] ?? DEFAULT_OUTCOME_ICON}</span>
                <p className="font-serif text-base leading-snug text-[color:var(--cream)]">
                  {study.outcome}
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <span className="tag self-start">{study.org}</span>
              <div className="mt-5 flex-1 space-y-4 text-sm leading-relaxed text-[color:var(--navy)]/80">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--navy)]/45">
                    Problem
                  </p>
                  <p className="mt-1.5">{study.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--navy)]/45">
                    Approach
                  </p>
                  <p className="mt-1.5">{study.approach}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
