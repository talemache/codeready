// Central copy/data store for the single-page site. Keeping this separate from
// the section components makes the contact "what's this about" options easy
// to keep in sync with the services list.

export type Service = {
  num: string;
  name: string;
  description: string;
  tools: string;
};

export const SERVICES: Service[] = [
  {
    num: "01",
    name: "Reporting systems",
    description:
      "Dashboards and pipelines that replace the manual monthly spreadsheet with something your team trusts and your board can read without a translator.",
    tools: "Power BI · Tableau · SQL · Python · R",
  },
  {
    num: "02",
    name: "Systems of record",
    description:
      "Custom reports, outcome tracking, and grant-metric extraction built on whatever system your operation actually runs on — LegalServer, a CRM, a case management platform, or something homegrown.",
    tools: "SQL · Power BI · LegalServer & CRM report tools",
  },
  {
    num: "03",
    name: "AI where it pays",
    description:
      "Scoped automation for document review, intake triage, and first-draft reporting. Narrow, reviewable, and fitted to how your staff already work.",
    tools: "Python · LLM APIs · Power Automate · Zapier",
  },
  {
    num: "04",
    name: "Analysis on demand",
    description:
      "A statistical question, a program evaluation, a data cleanup before a grant deadline or a board meeting. One hard question is a perfectly good project.",
    tools: "R · Python · SQL · Excel",
  },
  {
    num: "05",
    name: "Training your team",
    description:
      "Half-day sessions that leave your staff able to read, question, and maintain their own reporting — and to use AI tools without handing them the wheel.",
    tools: "Workshops · documentation · office hours",
  },
];

export type CaseStudy = {
  slotHint: string;
  sector: string;
  title: string;
  body: string;
  result: string;
};

// Structurally correct, but the facts are placeholders — replace with real,
// anonymized (or named, once cleared) outcomes before launch.
export const CASE_STUDIES: CaseStudy[] = [
  {
    slotHint: "Photo: a legal-aid intake desk or case files in use — grounded, unstaged.",
    sector: "Legal aid · 40 staff",
    title: "Grant reporting that stopped eating a week",
    body: "Monthly funder reports were assembled by hand from case-management exports, in four spreadsheets, by one person who was also running intake. I rebuilt the extraction as a single scheduled query and put the funder metrics on one page.",
    result: "Reporting moved from several days of manual work to a review-and-send.",
  },
  {
    slotHint: "Photo: a small-business ops team at a screen mid-conversation.",
    sector: "Professional services firm",
    title: "One number everyone finally agreed on",
    body: "Sales, delivery, and finance each had their own utilization figure and none of them matched. The work was less dashboard than arbitration: agreeing the definition, then building the one place it lives.",
    result: "A single weekly view leadership now runs their Monday meeting from.",
  },
  {
    slotHint: "Photo: printed program reports on a desk, natural light.",
    sector: "Nonprofit coalition",
    title: "AI used in exactly one place",
    body: "They wanted an AI strategy. What they needed was to stop reading four hundred intake narratives by hand each quarter. I scoped one narrow summarization step, kept a human in the loop, and left the rest alone.",
    result: "Quarterly narrative review cut to a review pass, with staff still signing off.",
  },
];

export type DashboardShot = { hint: string; caption: string };

export const DASHBOARD_SHOTS: DashboardShot[] = [
  {
    hint: "Screenshot: an executive summary dashboard page, client data scrubbed.",
    caption: "Executive summary — one page, no drilling required.",
  },
  {
    hint: "Screenshot: a grant-metrics report page with funder measures.",
    caption: "Funder metrics, mapped to the actual grant language.",
  },
  {
    hint: "Screenshot: pipeline or data-model documentation view.",
    caption: "The documented pipeline your staff inherit at handoff.",
  },
];

export type EngagementTier = {
  name: string;
  best: string;
  price: string;
  unit: string;
  body: string;
};

// Unconfirmed placeholders, deliberately modest for a practice with no
// signed clients yet — revisit as the first few engagements close.
export const ENGAGEMENT_TIERS: EngagementTier[] = [
  {
    name: "Scoping call",
    best: "Start here",
    price: "Free",
    unit: "30–45 minutes",
    body: "One conversation to pin down the question you're really trying to answer and who's waiting on it. You leave with a recommendation whether or not you hire me.",
  },
  {
    name: "Fixed-scope project",
    best: "Most engagements",
    price: "$2k–6k",
    unit: "quoted before work starts",
    body: "A dashboard, a reporting pipeline, an evaluation, an automation. Scoped in plain language, reviewed with you in progress, documented and handed off so it runs without me.",
  },
  {
    name: "Ongoing support",
    best: "After a build",
    price: "from $500",
    unit: "per month",
    body: "Maintenance, new reporting requests, and a standing hour for the questions that come up. Month to month, cancel whenever the work is done.",
  },
];

export type Credential = { text: string; meta: string };

export const CREDENTIALS: Credential[] = [
  { text: "M.S. Business Analytics", meta: "Kent State University" },
  { text: "B.S. Computer Science", meta: "Kent State University" },
  { text: "B.S. Psychology", meta: "University of Maryland (Global Campus)" },
];

export type Certification = { name: string; issuer: string };

export const CERTIFICATIONS: Certification[] = [
  { name: "Agents and Workflows", issuer: "OpenAI · 2026" },
  { name: "Model Context Protocol: Advanced Topics", issuer: "Anthropic · 2026" },
  { name: "AI Fluency for Nonprofits", issuer: "Anthropic · 2026" },
  { name: "AI Capabilities and Limitations", issuer: "Anthropic · 2026" },
  { name: "Google AI for Higher Education", issuer: "Google · 2026" },
  { name: "Supervised Machine Learning", issuer: "Stanford Online · 2022" },
];

export type Membership = { name: string; role: string };

export const MEMBERSHIPS: Membership[] = [
  { name: "Responsible AI in Legal Services (RAILS)", role: "Member, working groups — since 2024" },
  { name: "Access to Justice Network (SRLN/A2J)", role: "Member — since 2025" },
  {
    name: "Legal Services National Technology Assistance Program",
    role: "Community member — since 2024",
  },
  { name: "Data Visualization Society", role: "Peer mentor; former nominations committee" },
  { name: "Toastmasters International", role: "Area 32 Director; past club president" },
];

export const TOOL_LINE =
  "Power BI · Tableau · SQL · Python · R · D3.js · Streamlit · Dash · ArcGIS Pro · Swift · Kotlin";

export const LINKEDIN_URL = "https://www.linkedin.com/in/ryan-l-895b3b126/";
