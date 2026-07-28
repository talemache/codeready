# CodeReady — Full Build Specification (SPEC.md)
### Drop this file in the repo root. It is the single source of truth for any AI agent (Lovable, GitHub Copilot, Claude Code) or human working on this project.

---

## 1. Project Overview

**CodeReady** is a free, no-login learning web app that takes computer science undergraduates from "knows syntax" to "job-ready software engineer." It contains 8 learning tracks (~45 modules) with original lessons, curated free resources, quizzes, and hands-on challenges, with progress tracked locally.

**Non-negotiables:**
- Free forever. No paywalls, no upsells, no ads.
- Usable without an account. localStorage progress in v1; optional Supabase sync is Phase 2.
- Content quality over feature count. A student should trust every lesson.
- Warm editorial design (Section 6). Never generic SaaS styling.

---

## 2. Recommended Workflow (READ FIRST)

**Division of labor:**
- **Lovable** owns app scaffolding, routing, components, and styling.
- **Repo agents (Copilot / Claude Code)** own content generation and refinement, working ONLY in `/src/content/` data files (Section 4). This separation prevents the two tools from fighting over the same files.
- **Human (Ryan)** reviews content per track and merges.

**Phase gates:** Work proceeds in the phases listed in Section 10. An agent running continuously MUST stop and commit at the end of each phase with the specified commit message, then verify the acceptance criteria before continuing. Never combine phases in one commit.

**Golden rules for agents:**
1. Never modify files outside your lane (content agents: `/src/content/` only).
2. Never invent URLs. Only use resource links from the approved list (Section 8.4). If unsure a URL is real, omit it.
3. Match the content voice guide (Section 8.2) exactly.
4. All content must satisfy the lesson schema (Section 5). Build must pass `npm run build` before any commit.
5. If a task is ambiguous, prefer the smaller, simpler interpretation and leave a `TODO:` comment.

---

## 3. Tech Stack

- **Framework:** React 18 + TypeScript + Vite (Lovable default)
- **Styling:** Tailwind CSS with custom design tokens (Section 6); shadcn/ui components allowed but restyled to match tokens
- **Routing:** react-router-dom
- **State:** React context for progress; no external state library
- **Persistence:** localStorage (key: `codeready-progress-v1`)
- **Content:** static TypeScript data files — no CMS, no database in v1
- **Testing:** Vitest for utility functions (progress calculations, search)

---

## 4. File Structure

```
/src
  /components        # UI components (Lovable's lane)
    /layout          # Header, Footer, Nav
    /dashboard       # ProgressRing, TrackCard, ContinueCard
    /lesson          # LessonBody, ResourceBox, TakeawaysList, MarkComplete
    /quiz            # QuizRunner, QuestionCard, ResultsPanel
    /challenge       # ChallengeChecklist
    /shared          # DoodleAccent, SquiggleUnderline, PillButton, Confetti
  /content           # ALL learning content (content agents' lane)
    tracks.ts        # Track + module metadata (ids, titles, order, time estimates)
    /lessons         # One file per track: track1.ts ... track8.ts
    /quizzes         # One file per track: quiz1.ts ... quiz8.ts
    /challenges      # challenges.ts (Tracks 1–6)
    resources.ts     # Approved resource link registry (Section 8.4)
  /lib
    progress.ts      # Progress state, localStorage read/write, percent calcs
    search.ts        # Client-side search across content
  /pages
    Landing.tsx, Dashboard.tsx, TrackPage.tsx, LessonPage.tsx, About.tsx, NotFound.tsx
SPEC.md              # This file
```

---

## 5. Data Model (TypeScript)

```ts
export type ModuleType = "lesson" | "quiz" | "challenge";
export type ModuleStatus = "not_started" | "in_progress" | "complete";

export interface Track {
  id: string;             // "track-1"
  order: number;
  title: string;
  shortDescription: string;   // <= 120 chars, mentor voice
  doodleIcon: string;         // key into DoodleAccent variants
  moduleIds: string[];        // ordered
}

export interface Module {
  id: string;             // "t1-clean-code"
  trackId: string;
  order: number;
  title: string;
  type: ModuleType;
  estimatedMinutes: number;
}

export interface Lesson {
  moduleId: string;
  body: string;               // 300–500 words, markdown, voice guide §8.2
  keyTakeaways: string[];     // 3–5 items
  resources: ResourceRef[];   // 3–4 items, ids from resources.ts
  tryThisToday: string;       // one actionable sentence
}

export interface ResourceRef { resourceId: string; note?: string }

export interface Resource {
  id: string; label: string; url: string; free: true;
}

export interface QuizQuestion {
  prompt: string;
  choices: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;        // shown after answering
}

export interface Quiz {
  moduleId: string;
  questions: QuizQuestion[];  // exactly 5
  passThreshold: 4;
}

export interface Challenge {
  moduleId: string;
  brief: string;              // 2–4 sentences
  checklist: string[];        // 4–7 concrete steps
}

export interface ProgressState {
  moduleStatus: Record<string, ModuleStatus>;
  quizScores: Record<string, number>;
  lastOpenedModuleId?: string;
}
```

---

## 6. Design System

**Tokens (extend Tailwind config):**
- `--paper: #FAF6EF` (app background)
- `--ink: #1C1B18` (primary text)
- `--forest: #1E3A2C` (panels, primary buttons, headings on paper)
- `--forest-deep: #142A20` (hover states)
- `--coral: #E8836B` (progress bars, active states, accents)
- `--periwinkle: #C7CDEA` (tags, secondary pills)
- `--cream-text: #F7F3E9` (text on forest panels)
- Radii: cards 20px, buttons 999px (pill), inputs 12px
- Shadows: soft, warm, low (`0 2px 12px rgba(28,27,24,0.08)`); increase slightly on hover with 2px lift

**Typography:**
- Headings: Fraunces (Google Fonts), weight 550–650, tight tracking; hero uses optical size 72
- Body: a humanist sans (e.g., Inter or Source Sans 3), 16–18px, line-height 1.65
- Italic serif flourishes on 1–2 key words in section headings

**Signature elements:**
- `SquiggleUnderline`: hand-drawn SVG squiggle under section headings, coral
- `DoodleAccent`: monoline SVG doodles (arrow, star, spiral, underline, laurel) placed sparingly — max 2 per viewport
- Full-width forest panels for: landing "tracks overview," dashboard header, quiz results, About CTA
- Confetti (canvas-confetti, brand colors only) on track completion

**Hard bans:** gradients, glassmorphism, neon, dark mode, stock photos, emoji in UI copy.

---

## 7. Page Specifications & Acceptance Criteria

### 7.1 Landing (`/`)
- Hero: "Everything they don't teach you in class." + subhead + "Start Learning — It's Free" (→ `/dashboard`)
- 8-track overview grid on a forest panel, each with doodle icon + one-liner
- "Why free?" note and footer (About link, "Built by Ryan Levels")
- **AC:** Lighthouse a11y ≥ 95; renders fully with JS content only from `/src/content`

### 7.2 Dashboard (`/dashboard`)
- Overall `ProgressRing` (percent of all modules complete)
- "Continue where you left off" card (hidden if no progress)
- 8 `TrackCard`s: title, description, module count, per-track progress bar
- **AC:** progress math verified by Vitest tests in `progress.test.ts`; keyboard navigable

### 7.3 Track page (`/track/:trackId`)
- Ordered module list: status checkbox, type badge, estimated minutes
- Sticky mini progress bar for the track
- **AC:** clicking a module routes to `/track/:trackId/:moduleId`; unknown ids → NotFound

### 7.4 Lesson page (`/track/:trackId/:moduleId`)
- Renders lesson body (markdown), TakeawaysList, ResourceBox, TryThisToday callout, MarkComplete, prev/next
- Opening a lesson sets status `in_progress` and `lastOpenedModuleId`
- **AC:** external links open in new tab with `rel="noopener"`; MarkComplete persists across refresh

### 7.5 Quiz module
- One question at a time, immediate feedback + explanation, results panel with score
- Pass (≥4/5) → module complete; if it's the track's last incomplete module → confetti
- **AC:** retake allowed; best score stored

### 7.6 Challenge module
- Brief + persistent checklist; all boxes checked → module complete
- **AC:** checklist state survives refresh

### 7.7 Search
- Header search ("/" to focus), searches module titles + lesson bodies, grouped by track, highlighted matches
- **AC:** results update under 50ms for full content set (precomputed index in `search.ts`)

### 7.8 About (`/about`)
- Mission copy, "Built by Ryan Levels" + portfolio link `[PLACEHOLDER]`, suggestion mailto `[PLACEHOLDER]`
- **AC:** placeholders clearly marked with TODO comments

---

## 8. Content Specification

### 8.1 Lesson schema
Every lesson: 300–500 word body (markdown, short paragraphs, occasional bold key phrases, no headers deeper than h3) + 3–5 takeaways + 3–4 resources from the registry + one "Try This Today."

### 8.2 Voice guide
Friendly, direct mentor who has done the job. Second person. Short sentences. Concrete over abstract — always include a real-world example or mini-scenario. Honest about tradeoffs ("TDD is great here, overkill there"). Never condescending, never academic. Think: the senior engineer you wish you'd had at your first internship.

### 8.3 Tracks, modules, and angle notes
(Angle notes tell the content agent what each lesson must cover.)

**Track 1 — Programming Foundations**
1. Writing Clean Code — naming, small functions, readability > cleverness, "code is read 10x more than written"
2. Language Mastery — depth over breadth, idioms, standard library fluency
3. Debugging Like a Detective — reproduce first, binary-search the bug, stack traces bottom-up, rubber ducking
4. Reading Other People's Code — entry points, trace one feature end-to-end, the #1 underrated junior skill
5. Code Review Etiquette — receiving feedback without ego, giving it kindly, review code not people

**Track 2 — Data Structures & Algorithms**
1. Big-O Thinking — intuition over math, common classes w/ real examples
2. Arrays, Strings & Hash Maps — hash map as the #1 interview tool; two pointers, sliding window
3. Linked Lists, Stacks & Queues — when each shines; classic problems
4. Trees & Graphs — BFS/DFS, recursion mental models, "secretly a graph" problems
5. Sorting & Searching — conceptual command of the big ones; binary search variants
6. Dynamic Programming Basics — memoization first; recognizing DP shapes
7. Interview Problem Patterns — the ~10 patterns; quality over quantity; spaced repetition

**Track 3 — Version Control & Collaboration**
1. Git Fundamentals — snapshot mental model, staging, commit hygiene
2. Branching & Merging — short-lived branches; merge vs. rebase in plain English
3. Pull Requests Done Right — small PRs, descriptions reviewers thank you for
4. Resolving Conflicts — why they happen, calm resolution, when to ask for help
5. Working on a Team Codebase — trunk vs. gitflow overview, commits as documentation, never force-push shared branches

**Track 4 — Building Real Software**
1. How the Web Works — request/response, DNS, HTTP verbs, "what happens when you hit enter"
2. Frontend Fundamentals — HTML/CSS/JS roles, components, state; concepts over frameworks
3. Backend & APIs — REST, endpoint design, status codes, JSON
4. Databases & SQL — relational modeling, SELECT/JOIN fluency, indexes in one paragraph
5. Authentication Basics — sessions vs. tokens, never roll your own crypto, OAuth plainly
6. Deploying Your First App — environments, env vars, free deploys, killing "works on my machine"
7. Building Your Portfolio Project — scope small, ship, great README; one polished > five half-done

**Track 5 — Testing & Quality**
1. Why Tests Matter — safety net for change, confidence-to-refactor loop
2. Unit Testing — arrange/act/assert, behavior not implementation, tests named as sentences
3. Integration & End-to-End — the pyramid and its tradeoffs
4. TDD Intro — red-green-refactor; when it helps, when it's overkill
5. Handling Bugs in Production — severity triage, hotfix flow, blameless postmortems

**Track 6 — DevOps & Systems Basics**
1. The Command Line — navigation, pipes, grep/find
2. CI/CD Pipelines — what runs on push; automation prevents 2am deploys
3. Docker & Containers Intro — shipping-container analogy, images vs. containers, one honest Dockerfile
4. Cloud Fundamentals — compute/storage/networking as legos; free tiers; cost awareness
5. Monitoring & Logging — logs vs. metrics vs. traces; log for your 2am self
6. System Design First Principles — load balancers, caches, scale-out vocabulary

**Track 7 — AI-Era Engineering**
1. Coding with AI Assistants Effectively — pair programmer not autopilot; you own the output
2. Prompting for Developers — context, iteration, examples and constraints
3. Evaluating AI Output Critically — invented APIs, subtle logic bugs; test AI code harder
4. Understanding LLM Basics — tokens, context windows, why models confabulate
5. Where AI Fits in the SDLC — scaffolding/tests/docs vs. where judgment stays human

**Track 8 — Career Launchpad**
1. Résumés That Get Interviews — one page, impact bullets, tailoring, ATS reality
2. Portfolio & GitHub Profile — pinned repos, READMEs w/ screenshots, finished > frequent
3. Networking Without Being Weird — curiosity over transactions, informational interviews
4. Technical Interview Prep Strategy — sustainable 8-week plan, mocks, thinking aloud
5. Behavioral Interviews & STAR Stories — 6–8 story bank, quantified outcomes
6. Negotiating Your First Offer — negotiate kindly, total comp, they name numbers first
7. Your First 90 Days — ask questions early, work buddy, small wins, write things down

### 8.4 Approved resource registry (ONLY these; agents must not add others)
CS50 · freeCodeCamp · The Odin Project · MDN Web Docs · roadmap.sh · The Missing Semester (MIT) · Exercism · official language docs (Python/JS/Java) · NeetCode · LeetCode · HackerRank · VisuAlgo · Learn Git Branching · GitHub Docs · Oh Shit Git · Pro Git book · Full Stack Open · SQLBolt · PostgreSQL Tutorial · Test Automation University · Jest docs · pytest docs · Docker Get Started · System Design Primer (GitHub) · ByteByteGo (free) · Anthropic docs/courses · OpenAI docs · 3Blue1Brown NN series · Tech Interview Handbook · levels.fyi · interviewing.io · Pramp

Populate `resources.ts` with exact official URLs for each; if an exact URL is uncertain, use the site's homepage.

---

## 9. Quiz & Challenge Specs
- Quizzes: exactly 5 questions per track, written FROM the shipped lesson content (no outside topics), one correct answer, plausible distractors, explanation ≤ 2 sentences.
- Challenges (Tracks 1–6): chained where possible — Track 4 builds an API, Track 5 tests it, Track 6 containerizes it and adds CI. Checklists are 4–7 concrete, verifiable steps.

---

## 10. Phased Build Plan (with commit gates)

| Phase | Scope | Commit message | Done when |
|---|---|---|---|
| 0 | Tailwind tokens, fonts, shared components (SquiggleUnderline, DoodleAccent, PillButton) | `feat: design system` | Storybook-style demo page renders all shared components |
| 1 | Data model, tracks.ts metadata, progress lib + tests, routing skeleton | `feat: data model and progress` | `npm test` passes; all routes render placeholders |
| 2 | Landing, Dashboard, Track, Lesson pages wired to placeholder content | `feat: core pages` | Full click-through works; progress persists |
| 3 | Content: Tracks 1–2 lessons | `content: tracks 1-2` | Human review checkpoint ✋ |
| 4 | Content: Tracks 3–5 lessons | `content: tracks 3-5` | Human review checkpoint ✋ |
| 5 | Content: Tracks 6–8 lessons | `content: tracks 6-8` | Human review checkpoint ✋ |
| 6 | All quizzes + all challenges | `feat: quizzes and challenges` | Every track completable end-to-end |
| 7 | Search, About page, NotFound | `feat: search and about` | Search AC met |
| 8 | Polish pass + a11y + mobile QA | `chore: polish and QA` | Lighthouse a11y ≥ 95 mobile & desktop |

An autonomous agent may run Phases 0–2 and 6–8 without stopping (beyond commit gates), but MUST pause for human review after each content phase (3, 4, 5).

---

## 11. QA Checklist (final, human)
- [ ] Read all 45 lessons; correct anything inaccurate or outdated
- [ ] Click every resource link in `resources.ts`
- [ ] Take all 8 quizzes; verify answers and explanations
- [ ] Complete one track fully on mobile (confetti fires once, not repeatedly)
- [ ] localStorage survives refresh + works in private browsing
- [ ] Fill About-page placeholders
- [ ] Run `npm run build` clean; deploy
