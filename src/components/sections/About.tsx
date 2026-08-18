import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";

const CREDENTIALS = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-4 w-4 shrink-0"
        aria-hidden
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinejoin="round" />
        <path
          d="M12 14l6.16-3.422A12 12 0 0 1 20 15.5c0 3.314-3.582 6-8 6s-8-2.686-8-6a12 12 0 0 1 1.84-1.922L12 14z"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "M.S. Business Analytics — Kent State University",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-4 w-4 shrink-0"
        aria-hidden
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    ),
    text: "B.S. Computer Science",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-4 w-4 shrink-0"
        aria-hidden
      >
        <circle cx="12" cy="8" r="5" />
        <path d="M12 13v3M9 16h6" strokeLinecap="round" />
        <path d="M8 21c0-2.21 1.79-4 4-4s4 1.79 4 4" strokeLinecap="round" />
      </svg>
    ),
    text: "B.S. Psychology",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-4 w-4 shrink-0"
        aria-hidden
      >
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" strokeLinecap="round" />
        <path d="M12 11H6a6 6 0 0 0 6 6 6 6 0 0 0 6-6h-6z" strokeLinejoin="round" />
        <path d="M8 19v2M16 19v2M10 21h4" strokeLinecap="round" />
      </svg>
    ),
    text: "U.S. Navy veteran",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="relative mx-auto max-w-xs lg:mx-0">
          <PhotoPlaceholder
            shape="portrait"
            alt="Portrait of Ryan Levels"
            brief="Headshot: natural light, seated at a desk, unstaged — no studio backdrop."
          />
          <div className="absolute -bottom-4 -right-4 bg-[color:var(--navy)] p-4 shadow-xl">
            <p className="font-serif text-2xl text-[color:var(--copper)]">M.S.</p>
            <p className="mt-0.5 text-xs copy-invert">Business Analytics</p>
            <p className="text-xs copy-invert-muted">Kent State</p>
          </div>
        </div>

        <div>
          <span className="eyebrow">About</span>
          <span className="section-rule mt-3" aria-hidden />
          <h2 className="font-serif text-3xl sm:text-4xl">Ryan Levels</h2>
          <div className="mt-6 space-y-5 copy-strong leading-relaxed">
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

          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {CREDENTIALS.map((credential) => (
              <li
                key={credential.text}
                className="flex items-center gap-3 border-l-2 border-[color:var(--copper)] bg-[color:var(--cream-deep)] pl-4 py-3 pr-4 text-sm copy-strong"
              >
                <span className="text-[color:var(--copper-deep)] shrink-0" aria-hidden>
                  {credential.icon}
                </span>
                {credential.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
