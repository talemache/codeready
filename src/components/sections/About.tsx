const CREDENTIALS = [
  { icon: "🎓", text: "M.S. Business Analytics — Kent State University" },
  { icon: "💻", text: "B.S. Computer Science" },
  { icon: "🧠", text: "B.S. Psychology" },
  { icon: "⚓", text: "U.S. Navy veteran" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        {/* Headshot placeholder — replace with real <img> when photo is available */}
        <div className="relative mx-auto max-w-xs lg:mx-0">
          <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-[color:var(--cream-deep)]">
            <div className="data-grid h-full w-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[color:var(--navy)]/10">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[color:var(--navy)]/30" aria-hidden>
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="mt-3 px-4 text-xs text-[color:var(--navy)]/40">
                  Photo coming soon
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-xl bg-[color:var(--navy)] p-4 shadow-xl">
            <p className="font-serif text-2xl text-[color:var(--copper)]">M.S.</p>
            <p className="mt-0.5 text-xs text-[color:var(--cream)]/70">Business Analytics</p>
            <p className="text-xs text-[color:var(--cream)]/50">Kent State</p>
          </div>
        </div>

        <div>
          <span className="eyebrow">About</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Ryan Levels</h2>
          <div className="mt-6 space-y-5 text-[color:var(--navy)]/80 leading-relaxed">
            <p>
              I currently work in data and evaluation for a nonprofit, where most days involve
              pulling LegalServer data into something a board, a funder, or a program director can
              actually use. This consulting practice grew out of that work — organizations kept
              asking who built their reporting, and I started saying yes to more of them.
            </p>
            <p>
              My background spans computer science, psychology, and business analytics — I hold a
              B.S. in Computer Science, a B.S. in Psychology, and an M.S. in Business Analytics from
              Kent State University. Before any of that, I served in the U.S. Navy, which is where I
              first got comfortable with systems that can't afford to be wrong.
            </p>
            <p>
              That mix is why I end up translating between two groups often: the people who
              understand the data and the people who need to act on it. Most of my work lives in
              that gap.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {CREDENTIALS.map((credential) => (
              <li
                key={credential.text}
                className="flex items-center gap-3 rounded-xl border border-[color:var(--navy)]/10 bg-[color:var(--cream-deep)] px-4 py-3.5 text-sm text-[color:var(--navy)]/85"
              >
                <span className="text-base" aria-hidden>{credential.icon}</span>
                {credential.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
