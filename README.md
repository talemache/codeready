# Ryan Levels — Data & AI Consulting

A single-page professional consulting site for Ryan Levels: data analytics, AI
implementation, and software engineering consulting, with a focus on
LegalServer and nonprofit/mission-driven organization reporting.

**Live at [northal.org](https://northal.org)** ("Northal LLC" is the business
entity — it's referenced only in the footer, not as the site's brand.)

## What's here

- A single anchor-linked page: hero, services, approach, selected work,
  about, testimonials, FAQ, and a contact form
- Editorial navy / cream / copper design system with serif display type
  (Fraunces) over a clean sans body (Inter)
- A contact form structured to POST to a real backend (Formspree, a
  Cloudflare Worker, etc.) via `VITE_CONTACT_FORM_ENDPOINT`, with a
  functional `mailto:` fallback when that's unset
- Accessibility-first: Lighthouse CI gate enforces a minimum accessibility
  score of 95 on every pull request

## Built with

- TanStack Start (React + TypeScript, SSR)
- Tailwind CSS with a custom navy / cream / copper design system
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

- Replace the photo placeholders (hero, approach, about headshot) with real,
  licensed photography — grounded and unstaged, no stock handshake/skyline
  imagery. Each placeholder in the code names exactly what to shoot.
- Confirm the contact inbox address in `SiteFooter.tsx` and `Contact.tsx`.
- Set `VITE_CONTACT_FORM_ENDPOINT` to a real form backend.
- Swap in real client testimonials and named case studies as they become
  available.
