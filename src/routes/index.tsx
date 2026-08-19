import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { Dateline } from "@/components/sections/Dateline";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Services } from "@/components/sections/Services";
import { Dashboards } from "@/components/sections/Dashboards";
import { Engagements } from "@/components/sections/Engagements";
import { About } from "@/components/sections/About";
import { Credentials } from "@/components/sections/Credentials";
import { Quote } from "@/components/sections/Quote";
import { Contact } from "@/components/sections/Contact";

const TITLE = "Ryan Levels — Data & AI Consulting";
const DESCRIPTION =
  "Data, AI, and software consulting for nonprofits and mission-driven organizations — reporting systems, case-management and CRM data, and AI worked into the workflow only where it pays.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)" }}
      >
        <Hero />
        <Dateline />
        <CaseStudies />
        <Services />
        <Dashboards />
        <Engagements />
        <About />
        <Credentials />
        <Quote />
        <Contact />
        <SiteFooter />
      </main>
    </div>
  );
}
