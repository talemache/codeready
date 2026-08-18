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

// Illustrative examples of the shape of this work. Replace with real,
// named engagements as they're completed and cleared for public use.
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "legal-aid-reporting",
    org: "Regional legal aid nonprofit",
    problem:
      "Case managers were exporting LegalServer data into spreadsheets by hand each month to build funder reports — a two-day process prone to copy-paste errors.",
    approach:
      "Built a set of LegalServer custom reports feeding a Power BI dashboard, with automated refresh and role-based views for program directors and funders.",
    outcome: "Reporting time dropped from roughly two days to under an hour per month.",
  },
  {
    id: "evaluation-pipeline",
    org: "Statewide victim services coalition",
    problem:
      "Grant-required outcome metrics lived across three disconnected intake systems, making year-over-year comparison nearly impossible.",
    approach:
      "Wrote a Python pipeline to normalize and merge the three sources into a single warehouse, then built a Tableau dashboard for board and grant reporting.",
    outcome: "Consolidated three systems into one source of truth for annual grant reporting.",
  },
  {
    id: "intake-triage",
    org: "Small nonprofit legal clinic",
    problem:
      "Client intake was a manual bottleneck — staff read every submission before routing it to the right program.",
    approach:
      "Built a lightweight LLM-assisted triage step that pre-classifies intake by case type and urgency, with staff reviewing and confirming every routing decision.",
    outcome: "Cut initial routing time while keeping a human decision on every case.",
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
