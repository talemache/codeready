import { DotLeader } from "@/components/DotLeader";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CREDENTIALS } from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-x-[clamp(24px,5vw,96px)] gap-y-7 max-[720px]:grid-cols-1"
      style={{ padding: "0 0 84px" }}
    >
      <figure className="cmyk m-0">
        <div className="print" style={{ aspectRatio: "4/5" }}>
          <ImagePlaceholder
            alt="Portrait of Ryan Levels — headshot placeholder, natural light, seated at his desk, unstaged, no studio backdrop"
            className="h-full w-full"
          />
        </div>
      </figure>

      <div>
        <span className="kicker">About</span>
        <h2 className="m-0 text-4xl leading-[42px] tracking-[-0.015em]">Ryan Levels</h2>
        <p
          className="mt-7 text-[15.5px] leading-7"
          style={{
            maxWidth: "56ch",
            textAlign: "justify",
            hyphens: "auto",
            color: "color-mix(in srgb, var(--color-text) 82%, transparent)",
          }}
        >
          I'm the Data &amp; Evaluation Manager at Community Legal Aid, where I create, collect,
          analyze and share data with the people who have to act on it — boards, funders, program
          directors. I also teach analytics at Kent State. This practice grew out of both:
          organizations kept asking who built their reporting, and eventually I started saying yes.
        </p>
        <p
          className="mt-3.5 text-[15.5px] leading-7"
          style={{
            maxWidth: "56ch",
            textAlign: "justify",
            hyphens: "auto",
            color: "color-mix(in srgb, var(--color-text) 82%, transparent)",
          }}
        >
          Before data, I was a software engineer building front-end mobile apps in Swift and Kotlin
          — which is why "can you also just fix the tool" is a fair question to ask me. My
          background is a strange, useful mix: computer science, psychology, business analytics, and
          a Navy enlistment where I first met systems that couldn't afford to be wrong. Most of my
          work lives in the gap between the people who understand the data and the people who need
          to use it, and I like it there.
        </p>

        <div className="mt-7">
          <hr className="m-0 h-0 border-0 border-t border-[color:var(--color-text)]" />
          {CREDENTIALS.map((credential) => (
            <DotLeader
              key={credential.text}
              variant="index"
              label={credential.text}
              value={credential.meta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
