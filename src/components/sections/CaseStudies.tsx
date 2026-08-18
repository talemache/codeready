import { CASE_STUDIES } from "@/lib/content";

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
          <article key={study.id} className="card-editorial flex flex-col p-7">
            <span className="tag self-start">{study.org}</span>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-[color:var(--navy)]/80">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--navy)]/50">
                  Problem
                </p>
                <p className="mt-1">{study.problem}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--navy)]/50">
                  Approach
                </p>
                <p className="mt-1">{study.approach}</p>
              </div>
            </div>
            <div className="mt-5 rounded-lg bg-[color:var(--cream-deep)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--copper-deep)]">
                Outcome
              </p>
              <p className="mt-1 font-serif text-base text-[color:var(--navy)]">{study.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
