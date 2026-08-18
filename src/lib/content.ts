// Central copy/data store for the single-page site. Keeping this separate from
// the section components makes the FAQ/services/contact "area of interest"
// options easy to keep in sync with each other.

export type Service = {
  id: string;
  name: string;
  description: string;
  tools: string;
};

export const SERVICES: Service[] = [
  {
    id: "data-reporting",
    name: "Data & Reporting Systems",
    description:
      "Dashboards and reporting pipelines that replace manual monthly spreadsheets with something your team trusts and funders can read.",
    tools: "Power BI, Tableau, SQL, Python, R",
  },
  {
    id: "legalserver-nonprofit",
    name: "LegalServer & Nonprofit Data Systems",
    description:
      "Custom LegalServer reports, case-outcome tracking, and grant-metric extraction for legal aid and mission-driven organizations.",
    tools: "LegalServer report writer, SQL, Power BI",
  },
  {
    id: "ai-workflow",
    name: "AI & Workflow Integration",
    description:
      "Scoped automation and LLM-assisted workflows for document review, intake triage, and reporting drafts — built to fit how your staff already work.",
    tools: "Python, LLM APIs, Power Automate, Zapier",
  },
  {
    id: "ad-hoc-analytics",
    name: "Ad-hoc Analytics & Data Consulting",
    description:
      "One-off statistical analysis, program evaluation, and data cleanup for a grant deadline, board presentation, or one hard question.",
    tools: "R, Python, SQL, Excel",
  },
];

export type CaseStudy = {
  id: string;
  org: string;
  problem: string;
  approach: string;
  outcome: string;
};

// Named case studies are added here as engagements wrap and clients sign off on sharing them.
// Until then the Selected work section renders the engagement timeline below.
export const CASE_STUDIES: CaseStudy[] = [];

export type EngagementStep = {
  title: string;
  description: string;
  duration: string;
};

// The shape of a typical engagement, used as the Selected work section's
// structure until named case studies are publishable.
export const ENGAGEMENT_STEPS: EngagementStep[] = [
  {
    title: "Scoping call",
    description:
      "One conversation to pin down the question you're actually trying to answer and who needs the answer.",
    duration: "30–45 min",
  },
  {
    title: "Data audit",
    description:
      "I look at what your systems really hold — fields, gaps, and the places the data disagrees with itself.",
    duration: "Week 1",
  },
  {
    title: "Build",
    description:
      "The dashboard, report, or pipeline gets built and reviewed with you in progress, not revealed at the end.",
    duration: "Weeks 2–4",
  },
  {
    title: "Handoff",
    description:
      "Documentation and a walkthrough so your staff can run and explain it without me in the room.",
    duration: "Final week",
  },
];

export type FaqItem = { question: string; answer: string };

export const FAQS: FaqItem[] = [
  {
    question: "Do you work project-based or on an ongoing basis?",
    answer:
      "Both. Most engagements start as a fixed-scope project — a dashboard build, a reporting pipeline, an evaluation. Some organizations keep me on a monthly retainer afterward for maintenance and new reporting requests. I'll recommend whichever fits the work.",
  },
  {
    question: "What's a typical turnaround?",
    answer:
      "A single dashboard or report build usually runs two to four weeks depending on how clean the source data is. Ad-hoc analysis can turn around in days. I'll give you a specific estimate after a short scoping call, not a generic range.",
  },
  {
    question: "Do you work remotely, or on-site?",
    answer:
      "Remote by default — most of this work is data and screens, not a room. I'm open to on-site time for kickoff or training sessions if it's useful and the organization is willing to cover travel.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "Nonprofits, legal aid organizations, and small mission-driven teams — especially ones running LegalServer or similar case management systems and drowning in manual reporting. I also take general data, BI, and software consulting work outside that niche.",
  },
  {
    question: "I don't have clean data. Is that a problem?",
    answer:
      "No — it's the normal starting point. Part of the first phase of most engagements is figuring out what your data actually looks like before building anything on top of it.",
  },
];
