import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DoodleUnderline, DoodleStar } from "@/components/Doodles";

// Set this once the portfolio site is live.
const PORTFOLIO_URL: string | null = null;
const CONTACT_EMAIL = "rlevels@outlook.com";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
    { title: "About Northal — Free forever, no login required" },
      {
        name: "description",
        content:
        "Northal is a free, no-login learning path with original software engineering lessons, quizzes, and challenges.",
      },
    { property: "og:title", content: "About Northal — Free forever, no login required" },
      {
        property: "og:description",
        content:
        "Why Northal exists, what it covers today, and how to suggest an improvement.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-[color:var(--paper)] flex flex-col">
      <SiteHeader />
      <main id="main-content" className="mx-auto w-full max-w-3xl flex-1 px-5 py-10 sm:py-14" tabIndex={-1}>
        <div className="relative inline-block">
          <h1 className="font-serif text-4xl sm:text-5xl leading-tight">About Northal</h1>
          <DoodleUnderline className="absolute -bottom-3 left-0 w-full text-[color:var(--coral)]" />
        </div>

        <div className="card-paper mt-10 p-6 sm:p-10 relative overflow-hidden">
          <DoodleStar className="absolute -top-2 -right-2 w-14 text-[color:var(--periwinkle)]" />
          <p className="font-serif text-2xl leading-snug text-[color:var(--forest)] max-w-[60ch]">
            Northal is free forever — no accounts, no paywalls.
          </p>
          <p className="mt-4 text-[color:var(--forest)]/80 leading-relaxed max-w-[68ch]">
            Built by Ryan Levels — Navy veteran, software engineer turned data &
            evaluation leader, and mentor — so learners can turn curiosity into capability
            with practical, project-based learning that stays free forever. Today the focus is
            software engineering fundamentals across college/adult and teen paths, with more
            track families planned over time.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {PORTFOLIO_URL && (
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit Ryan's portfolio
            </a>
          )}
          <a href={`mailto:${CONTACT_EMAIL}?subject=Northal improvement`} className="btn-outline">
            Suggest an improvement
          </a>
        </div>

        <p className="mt-10 text-[color:var(--forest)]/70">
          Ready to start? Head to the{" "}
          <Link to="/dashboard" className="underline decoration-[color:var(--coral)] decoration-2 underline-offset-4">
            dashboard
          </Link>{" "}
          and pick a track.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
