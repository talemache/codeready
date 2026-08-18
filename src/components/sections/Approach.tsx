export function Approach() {
  return (
    <section
      id="approach"
      className="border-y border-[color:var(--navy)]/10 bg-[color:var(--cream-deep)]"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(12,22,38,0.12)] order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=80&auto=format&fit=crop"
            alt="A focused home workspace with an open laptop, notebook, and coffee in natural window light"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/15 via-transparent to-transparent" />
        </div>

        <div className="order-1 lg:order-2">
          <span className="eyebrow">How I work</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Tool-agnostic, outcome-first</h2>
          <div className="mt-6 space-y-5 text-[color:var(--navy)]/80 leading-relaxed">
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
        </div>
      </div>
    </section>
  );
}
