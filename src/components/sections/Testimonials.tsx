const SLOTS = 3;

export function Testimonials() {
  return (
    <section className="border-y border-[color:var(--navy)]/10 bg-[color:var(--cream-deep)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">What clients say</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Testimonials</h2>
          <p className="mt-4 text-[color:var(--navy)]/75">
            This practice is early — client quotes will populate this section as engagements wrap.
            Ask for references directly in the meantime.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {Array.from({ length: SLOTS }).map((_, i) => (
            <div
              key={i}
              className="flex min-h-40 flex-col justify-between rounded-xl border border-dashed border-[color:var(--navy)]/25 p-6 text-sm text-[color:var(--navy)]/50"
            >
              <p className="font-serif text-lg italic text-[color:var(--navy)]/35">
                &ldquo;&rdquo;
              </p>
              <p>Testimonial coming soon</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
