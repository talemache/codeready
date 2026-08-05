# Northal

A free, no-login learning path that takes people from "knows the basics" to genuinely job-ready — currently covering software engineering fundamentals, with more tracks planned. Free forever, no accounts required, no paywalls.

**Live at [northal.org](https://northal.org)**

## What's here

- **13 learning tracks** across two audiences — a college/adult path (Programming Foundations, Data Structures & Algorithms, Version Control & Collaboration, Building Real Software, Testing & Quality, DevOps & Systems Basics, AI-Era Engineering, Career Launchpad) and a teen path for ages 13–18 (Is Coding For Me?, Programming Foundations, Build Something Real, Git & Working With Others, AI Tools for Students)
- An audience picker on first visit that tailors the dashboard to whichever track set fits
- Original written lessons (not just links) with curated free resources, key takeaways, and a "try this today" action per lesson
- End-of-track quizzes and hands-on challenges
- Full-text search across all lesson content
- Progress tracking saved locally in the browser (no account needed) — with a "reset all progress" option
- Light/dark mode toggle
- Accessibility-first: Lighthouse CI gate enforces a minimum accessibility score of 95 on every pull request

## Built with

- TanStack Start (React + TypeScript, SSR)
- Tailwind CSS with a custom warm cream / forest green design system
- Deployed on Cloudflare Workers

## Local development

```sh
git clone <this-repository-url>
cd northal
npm install
```

Add your Firebase config to `.env.local` (copy `.env.example` as a starting point):

```sh
cp .env.example .env.local
# then fill in your VITE_FIREBASE_* values from the Firebase console
```

```sh
npm run dev
```

## Testing and QA

```sh
npm test
npm run build
```

Run the full accessibility Lighthouse CI gate (mobile + desktop):

```sh
npm run browsers:install
npm run qa:lighthouse
```

This builds the app, audits key pages (`/`, `/dashboard`, a track page, a lesson page, and `/about`), and enforces accessibility ≥ 95, printing a score summary table. To run Lighthouse only (skip the build step): `npm run qa:lighthouse:run`.

A pull request workflow at `.github/workflows/qa-lighthouse.yml` runs this automatically and uploads `.lighthouseci` reports as artifacts.

## Deployment

Deploys automatically to Cloudflare Workers on push to `main`:

```sh
npm run build
npx wrangler deploy --config .output/server/wrangler.json
```

## Project origins

Built with [Lovable](https://lovable.dev) and iterated on with GitHub Copilot. Content and design decisions are human-reviewed before merging — see `.lovable/codeready-SPEC.md` for the original build spec and content voice guide.

## Roadmap

A Data path is planned as a second track family, following the same structure and design system.
