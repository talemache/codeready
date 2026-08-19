# Ryan Levels — Data & AI Consulting

A single-page professional consulting site for Ryan Levels: data analytics, AI
implementation, and software engineering consulting, with a focus on
nonprofit and mission-driven organization reporting.

**Live at [northal.org](https://northal.org)** ("Northal LLC" is the business
entity — it's referenced only in the footer, not as the site's brand.)

## What's here

- A single anchor-linked page: hero, dateline stats, selected work, services,
  dashboards, engagement pricing, about, certifications & memberships, a pull
  quote, and a contact form
- A newsprint/broadsheet design system — paper ground, a single serif face
  (Source Serif 4), cyan/magenta process-ink accents, no cards or boxes
- A four-color separation ("CMYK plate") print treatment reserved for the
  About headshot once a real photo replaces its placeholder; every other
  image slot uses a halftone dot-screen treatment
- A contact form structured to POST to a real backend (Formspree, a
  Cloudflare Worker, etc.) via `VITE_CONTACT_FORM_ENDPOINT`, with a
  functional `mailto:` fallback when that's unset
- Accessibility-first: Lighthouse CI gate enforces a minimum accessibility
  score of 95 on every pull request

## Built with

- TanStack Start (React + TypeScript, SSR)
- Tailwind CSS with a custom paper / ink / cyan / magenta design system
- Deployed on Cloudflare Workers

## Local development

```sh
git clone <this-repository-url>
cd ryan-levels-consulting
npm install
npm run dev
```

To wire the contact form to a real backend, copy `.env.example` to
`.env.local` and set `VITE_CONTACT_FORM_ENDPOINT`.

## Testing and QA

```sh
npm run build
```

Run the full accessibility Lighthouse CI gate (mobile + desktop):

```sh
npm run browsers:install
npm run qa:lighthouse
```

This builds the app, audits `/`, and enforces accessibility ≥ 95, printing a
score summary table. To run Lighthouse only (skip the build step):
`npm run qa:lighthouse:run`.

A pull request workflow at `.github/workflows/qa-lighthouse.yml` runs this
automatically and uploads `.lighthouseci` reports as artifacts.

## Deployment

Deploys automatically to Cloudflare Workers on push to `main`:

```sh
npm run build
npx wrangler deploy --config .output/server/wrangler.json
```

## Before launch

- Replace the seven photo/screenshot placeholders (hero, selected-work cases,
  dashboards, about headshot) with real, licensed photography — grounded and
  unstaged, no stock handshake/skyline imagery. Each placeholder in the code
  names exactly what to shoot.
- Confirm the contact inbox address in `SiteFooter.tsx` and `Contact.tsx`.
- Set `VITE_CONTACT_FORM_ENDPOINT` to a real form backend.
- Confirm the engagement pricing in `src/lib/content.ts` — currently modest,
  unconfirmed placeholders for a practice with no signed clients yet.
- `CASE_STUDIES` in `src/lib/content.ts` are real projects from Ryan's
  current role and prior engineering career, not client work — add real
  independent-client case studies here once the practice has some.
- An "intro film" section and a "writing" section are part of the wider
  design system but aren't built here — there's no video or blog post yet.
  Add them once that content exists.
