import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";

const CREDENTIALS = [
  "M.S. Business Analytics — Kent State University",
  "B.S. Computer Science",
  "B.S. Psychology",
  "U.S. Navy veteran",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <PhotoPlaceholder
          alt="Professional headshot of Ryan Levels — placeholder to be replaced with a real photograph"
          brief="real professional headshot of Ryan, natural light, neutral background. Replace before launch."
          shape="portrait"
          className="rounded-2xl mx-auto max-w-xs lg:mx-0"
        />

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
                key={credential}
                className="flex items-start gap-2 rounded-lg border border-[color:var(--navy)]/10 bg-[color:var(--cream-deep)] px-4 py-3 text-sm text-[color:var(--navy)]/85"
              >
                <span aria-hidden className="mt-0.5 text-[color:var(--copper)]">
                  &bull;
                </span>
                {credential}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
