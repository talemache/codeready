import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DoodleUnderline, DoodleStar } from "@/components/Doodles";

const PORTFOLIO_URL = "https://example.com"; // TODO: Replace with Ryan's real portfolio URL.
const CONTACT_EMAIL = "hello@example.com"; // TODO: Replace with Ryan's real suggestion email.

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CodeReady — Free forever, built by a mentor" },
      {
        name: "description",
        content:
          "CodeReady is a free learning path built by Ryan Levels so the gap between a CS degree and the actual job costs nothing to close.",
      },
      { property: "og:title", content: "About CodeReady — Free forever" },
      {
        property: "og:description",
        content:
          "Why CodeReady exists, who built it, and how to suggest an improvement.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-[color:var(--paper)] flex flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-10 sm:py-14">
        <div className="relative inline-block">
          <h1 className="font-serif text-4xl sm:text-5xl leading-tight">About CodeReady</h1>
          <DoodleUnderline className="absolute -bottom-3 left-0 w-full text-[color:var(--coral)]" />
        </div>

        <div className="card-paper mt-10 p-6 sm:p-10 relative overflow-hidden">
          <DoodleStar className="absolute -top-2 -right-2 w-14 text-[color:var(--periwinkle)]" />
          <p className="font-serif text-2xl leading-snug text-[color:var(--forest)] max-w-[60ch]">
            CodeReady is free forever.
          </p>
          <p className="mt-4 text-[color:var(--forest)]/80 leading-relaxed max-w-[68ch]">
            Built by Ryan Levels — Navy veteran, software engineer turned data &
            evaluation leader, and mentor — because the gap between a CS degree and the
            actual job shouldn't cost anything to close.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visit Ryan's portfolio
          </a>
          <a href={`mailto:${CONTACT_EMAIL}?subject=CodeReady improvement`} className="btn-outline">
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
