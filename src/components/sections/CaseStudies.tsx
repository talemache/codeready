import { CASE_STUDIES, ENGAGEMENT_STEPS } from "@/lib/content";

function EngagementCards() {
  return (
    <div className="grid gap-px border border-[color:var(--navy)]/8 bg-[color:var(--navy)]/8 sm:grid-cols-2 lg:grid-cols-3">
      {CASE_STUDIES.map((study) => (
        <article key={study.id} className="card-editorial bg-[color:var(--card)] p-8">
          <h3 className="font-serif text-xl leading-snug">{study.org}</h3>
          <dl className="mt-5 space-y-4 text-sm leading-relaxed">
            <div>
              <dt className="eyebrow">Situation</dt>
              <dd className="mt-1.5 copy">{study.problem}</dd>
            </div>
            <div>
              <dt className="eyebrow">What I built</dt>
              <dd className="mt-1.5 copy">{study.approach}</dd>
            </div>
            <div>
              <dt className="eyebrow">Result</dt>
              <dd className="mt-1.5 copy-strong">{study.outcome}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}

function EngagementTimeline() {
  return (
    <ol className="grid gap-px border border-[color:var(--navy)]/8 bg-[color:var(--navy)]/8 sm:grid-cols-2 lg:grid-cols-4">
      {ENGAGEMENT_STEPS.map((step, index) => (
        <li key={step.title} className="relative bg-[color:var(--cream)] p-8">
          {/* Copper node dot sitting on the rule that runs across the row */}
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-[color:var(--copper)]"
            />
            <span className="font-serif text-sm copy-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span aria-hidden className="h-px flex-1 bg-[color:var(--navy)]/12" />
          </div>
          <h3 className="mt-5 font-serif text-lg leading-snug">{step.title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed copy">{step.description}</p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[color:var(--copper-deep)]">
            {step.duration}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function CaseStudies() {
  const hasCaseStudies = CASE_STUDIES.length > 0;

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="mb-12 grid gap-3 border-b border-[color:var(--navy)]/10 pb-10 lg:grid-cols-[1fr_2fr] lg:items-end">
        <div>
          <span className="eyebrow">Selected work</span>
          <span className="section-rule mt-3" aria-hidden />
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            {hasCaseStudies ? "Representative engagements" : "What an engagement looks like"}
          </h2>
        </div>
        <p className="leading-relaxed copy lg:mb-1 lg:max-w-xl">
          {hasCaseStudies ? (
            <>
              A few representative engagements, shared with client sign-off. Ask about specific
              experience and I&rsquo;ll point you to the closest match — or{" "}
              <a
                href="#contact"
                className="font-medium text-[color:var(--copper-deep)] underline-offset-2 hover:underline"
              >
                reach out
              </a>{" "}
              directly.
            </>
          ) : (
            <>
              Named case studies get published here as engagements close and clients sign off on
              sharing them. In the meantime, this is the shape every project takes — and you can{" "}
              <a
                href="#contact"
                className="font-medium text-[color:var(--copper-deep)] underline-offset-2 hover:underline"
              >
                ask about specific experience
              </a>{" "}
              any time.
            </>
          )}
        </p>
      </div>

      {hasCaseStudies ? <EngagementCards /> : <EngagementTimeline />}
    </section>
  );
}
