import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Approach } from "@/components/sections/Approach";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

const TITLE = "Ryan Levels — Data & AI Consulting";
const DESCRIPTION =
  "Data, AI, and software consulting for nonprofits and mission-driven organizations — LegalServer reporting, Power BI and Tableau dashboards, and practical AI-informed workflows.";

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
    <div className="min-h-screen bg-[color:var(--cream)] text-[color:var(--navy)]">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <Approach />
        <CaseStudies />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
