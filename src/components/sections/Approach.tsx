export function Approach() {
  return (
    <section
      id="approach"
      className="border-y border-[color:var(--navy)]/10 bg-[color:var(--cream-deep)]"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Pull quote panel — the one place the italic display face is used */}
        <figure className="relative order-2 overflow-hidden bg-[color:var(--navy)] p-9 shadow-[0_8px_32px_rgba(12,22,38,0.14)] sm:p-12 lg:order-1">
          <div className="data-grid-dark pointer-events-none absolute inset-0 opacity-50" />
          <blockquote className="relative">
            <span aria-hidden className="mb-6 block h-px w-10 bg-[color:var(--copper)]" />
            <p className="font-serif text-2xl italic leading-snug text-[color:var(--cream)] sm:text-[1.75rem]">
              The deliverable isn&rsquo;t a dashboard. It&rsquo;s a dashboard someone can open in a
              board meeting and explain without me in the room.
            </p>
          </blockquote>
          <figcaption className="relative mt-7 text-xs font-semibold uppercase tracking-widest copy-invert-muted">
            How I judge finished work
          </figcaption>
        </figure>

        <div className="order-1 lg:order-2">
          <span className="eyebrow">How I work</span>
          <span className="section-rule mt-3" aria-hidden />
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
            Tool-agnostic, outcome-first
          </h2>
          <div className="mt-7 space-y-5 copy-strong leading-relaxed">
            <p>
              I don't sell a platform. If Power BI is the right call, I build in Power BI; if it's a
              Python script that runs once a month, that's what I ship. The tool follows the
              problem, not the other way around.
            </p>
            <p>
              Most of my clients are program directors, executive directors, or development staff —
              not analysts. So the deliverable isn't just a dashboard, it's a dashboard someone can
              open during a board meeting and explain without me in the room.
            </p>
            <p>
              I scope work in plain terms before I start: what question you're trying to answer,
              what data actually exists to answer it, and what "done" looks like. No open-ended
              retainers with vague deliverables.
            </p>
          </div>
          <div className="mt-8">
            <a href="#contact" className="btn-primary inline-flex">
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
