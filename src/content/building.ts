import type { TrackContent } from "@/lib/content-types";

export const building: TrackContent = {
  lessons: {
    "how-the-web-works": {
      body: [
        "You type a URL, hit enter, and a page shows up a second later. Most devs use the web every day for years before they actually learn what happens in that second. Once you know it, half the bugs you'll debug in your career (CORS errors, 404s, weird caching issues) stop being magic and start being obvious.",
        "## From keystroke to pixels",
        "First your browser has to figure out where the destination even is. It takes the domain name (like example.com) and asks DNS, essentially the internet's phone book, to translate it into an IP address. That lookup gets cached at multiple levels so it doesn't happen on every single request. Once the browser has an IP, it opens a TCP connection to a server at that address, and if it's HTTPS (it almost always is now) it also does a TLS handshake to set up encryption before any real data moves.",
        "With the connection open, the browser sends an HTTP request. That request has a method describing intent, a path, headers with metadata, and sometimes a body. The server receives it, runs whatever code it needs to (look up a database row, render a template, call another service), and sends back an HTTP response: a status code, headers, and a body, usually HTML, JSON, or some other payload. The browser then parses that response and, if it's HTML, starts fetching everything else the page references — CSS, JS, images, fonts — each of which is its own request/response cycle.",
        "## Requests have a shape",
        "Every HTTP request has a method that signals intent. GET asks for something without changing anything. POST creates something new. PUT and PATCH update existing things. DELETE removes them. These aren't enforced by the universe, they're a convention, but a strong one, and violating it (like using GET to delete a record) will confuse every tool and every other developer who touches your API.",
        "Responses come back with a three-digit status code that tells you, at a glance, what happened. 200s mean success. 300s mean redirect, go look somewhere else. 400s mean you, the client, messed up (bad input, not authenticated, not found). 500s mean the server messed up. Learning to read status codes fast is one of the highest-leverage debugging skills you can build — it immediately narrows down whether the bug is in your request or their handling of it.",
        "## Why this matters day to day",
        "Once this model is in your head, a lot of 'mystery' bugs resolve instantly. A CORS error is the browser refusing to let JavaScript on one origin read a response from another origin unless the server explicitly allows it. A stale page after a deploy is often a caching header telling the browser to reuse an old response. A slow page load is often dozens of sequential requests that could have been batched or parallelized. None of this is exotic — it's just request, response, repeat, understood well enough to reason about.",
      ],
      takeaways: [
        "DNS turns domain names into IP addresses so your browser knows where to connect.",
        "Every page load is a series of HTTP request/response cycles, not one big magic action.",
        "HTTP methods (GET, POST, PUT, PATCH, DELETE) signal intent by convention, not enforcement.",
        "Status codes tell you immediately whether the client or the server is at fault.",
        "Understanding this flow turns 'mystery bugs' like CORS and caching into predictable, debuggable behavior.",
      ],
      resources: [
        { title: "MDN: An overview of HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview", note: "The clearest technical walkthrough of the protocol underneath every web request." },
        { title: "MDN: What happens when you navigate to a URL", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work", note: "Goes deeper into the browser side of the story: parsing, rendering, painting." },
        { title: "Full Stack Open: Fundamentals", url: "https://fullstackopen.com/en/part0", note: "Great diagrams of request/response cycles for both traditional and single-page apps." },
        { title: "The Odin Project: How the Web Works", url: "https://www.theodinproject.com/lessons/foundations-how-does-the-internet-work", note: "A beginner-friendly narrative version of this same story." },
      ],
      tryThis: "Open your browser's Network tab, load any site, and click through five requests to read their method, status code, and headers.",
    },

    "frontend-fundamentals": {
      body: [
        "Frontend gets treated like it's all about which framework you know, but frameworks are just tools for organizing three fundamentally different jobs: structure, presentation, and behavior. If you understand what each one is actually responsible for, you can pick up any framework in a week. If you don't, you'll fight the framework instead of using it.",
        "## Three languages, three jobs",
        "HTML describes structure and meaning: this is a heading, this is a list, this is a form. CSS describes presentation: colors, spacing, layout, what it looks like on a phone versus a monitor. JavaScript describes behavior: what happens when someone clicks, types, or scrolls, and how the page updates in response. Mixing these up is the source of a lot of bad frontend code — using JavaScript to do what CSS should do, or using divs for everything instead of semantic HTML that assistive technology and search engines can actually understand.",
        "## Thinking in components",
        "Modern frontend work is built around components: small, self-contained chunks of UI that own their own markup, styling, and behavior, and that you can reuse and combine like Lego pieces. A button component doesn't need to know anything about the page it lives on. A product card component doesn't care if it's rendered once or a hundred times in a list. This is less a framework feature and more a way of thinking — you'll see the same idea in React, Vue, Svelte, or even plain JavaScript with custom elements.",
        "## State is the hard part",
        "The genuinely hard part of frontend work isn't styling, it's state: the data that changes over time and drives what the user sees. Is the modal open or closed? Has the form been submitted? Is the data still loading? Every visual change on a well-built page is really a reaction to some piece of state changing. Frameworks exist mostly to make that reaction automatic — you update the state, and the UI re-renders to match, instead of you manually finding elements and mutating them by hand. That one shift, from 'find the DOM node and change it' to 'change the state and let it re-render,' is the single biggest mental model jump between old-school jQuery-style code and modern frontend frameworks.",
        "## You don't need to know every framework",
        "Employers care far less about whether you know React or Vue specifically than whether you understand these fundamentals underneath them. Someone who deeply gets components, state, and the separation between structure/presentation/behavior can learn a new framework's syntax in days. Someone who only knows framework syntax without the fundamentals gets stuck the moment something breaks in an unfamiliar way.",
      ],
      takeaways: [
        "HTML is structure, CSS is presentation, JavaScript is behavior — keep them doing their own job.",
        "Components let you build UI out of small, reusable, self-contained pieces.",
        "State is the data that changes over time; UI is just a reflection of current state.",
        "Modern frameworks automate 'update state, re-render UI' instead of manual DOM manipulation.",
        "Fundamentals transfer across frameworks; framework-specific syntax alone does not.",
      ],
      resources: [
        { title: "MDN: Learn web development", url: "https://developer.mozilla.org/en-US/docs/Learn", note: "The definitive free reference for HTML, CSS, and JavaScript fundamentals." },
        { title: "The Odin Project: Foundations", url: "https://www.theodinproject.com/paths/foundations/courses/foundations", note: "A structured, project-based path through HTML/CSS/JS basics." },
        { title: "Full Stack Open: Part 1", url: "https://fullstackopen.com/en/part1", note: "Introduces components and state through React, with the concepts explained plainly." },
        { title: "MDN: Component-based UI thinking", url: "https://developer.mozilla.org/en-US/docs/Glossary/Component", note: "Short primer on what 'component' actually means in frontend architecture." },
      ],
      tryThis: "Pick any webpage you use daily and try to mentally split it into components — what would each reusable piece be?",
    },

    "backend-apis": {
      body: [
        "The backend's job is simple to state and endless to master: receive a request, do something with data, send back a response. Everything else — frameworks, ORMs, message queues — exists to make that loop reliable at scale. If you can design a clean API, you can plug into any backend stack a job throws at you.",
        "## REST is a set of conventions, not a law",
        "REST just means organizing your API around resources (things like users, posts, orders) and using HTTP methods to act on them predictably. GET /posts fetches all posts. GET /posts/42 fetches one. POST /posts creates one. PATCH /posts/42 updates one. DELETE /posts/42 removes one. There's no REST police — you can design it however you want — but following the convention means any other developer, or any tool, can guess how your API behaves without reading your source code first.",
        "## Designing endpoints people won't hate",
        "Good endpoint design is about predictability. Use nouns for resources, not verbs — /createUser is a code smell, POST /users is the idiomatic version. Nest resources when there's a real ownership relationship, like GET /users/42/orders, but don't nest everything three levels deep just because you can. Return consistent shapes: if your list endpoints wrap results in { data: [...] }, do that everywhere, not just sometimes. Consistency is worth more than cleverness here.",
        "## Status codes and JSON are your contract",
        "Your API's status codes and JSON structure are a contract with whoever calls it, including future-you. A 200 with an error message buried in the body is worse than a proper 400 or 404, because it forces every caller to parse the body just to know if something failed. Pick a small, boring set of status codes you use consistently — 200/201 for success, 400 for bad input, 401/403 for auth issues, 404 for missing resources, 500 for your own bugs — and stick to it. JSON should be flat and predictable where possible; deeply nested, inconsistent JSON is a tax every consumer of your API has to pay forever.",
        "## Validate at the edge",
        "A backend that trusts its input is a backend that will eventually get exploited or crash on garbage data. Validate everything coming in at the boundary of your API — types, required fields, ranges — before it touches your business logic or your database. This is unglamorous work, but it's the difference between an API that fails loudly and safely with a clear 400 error, versus one that fails mysteriously three layers deep with a stack trace and a confused user.",
      ],
      takeaways: [
        "REST organizes APIs around resources and uses HTTP methods to express actions on them.",
        "Endpoint design should prioritize predictability and consistency over cleverness.",
        "Status codes and response shape are a contract — pick a small consistent set and stick to it.",
        "Validate input at the API boundary before it reaches your business logic.",
        "A well-designed API is one another developer can guess correctly without reading your code.",
      ],
      resources: [
        { title: "MDN: HTTP response status codes", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status", note: "The full reference — bookmark this, you'll use it constantly." },
        { title: "Full Stack Open: Node.js and Express", url: "https://fullstackopen.com/en/part3", note: "Builds a real REST API from scratch and explains each design decision." },
        { title: "The Odin Project: NodeJS course", url: "https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs", note: "Hands-on backend fundamentals including routing and APIs." },
        { title: "MDN: What is a web API", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction", note: "Good primer if 'API' still feels like a fuzzy term." },
      ],
      tryThis: "Sketch the endpoints (method + path) you'd need for a simple to-do list app, before writing any code.",
    },

    "databases-sql": {
      body: [
        "A spreadsheet works fine until two people try to edit it at once, or you need to look up 'every order placed by every customer who bought this product last month' without going insane. Relational databases exist to solve exactly that: storing structured data reliably and letting you ask precise questions of it, fast, even at massive scale.",
        "## Thinking in tables, not spreadsheets",
        "A spreadsheet is one flat grid. A relational database is many small, focused tables linked together by keys. Instead of one giant sheet with columns for user name, user email, order date, and product name repeated on every row, you'd have a users table, an orders table, and a products table, connected by IDs. This avoids duplicating the same user's email a thousand times across their thousand orders, and it means updating a user's email happens in exactly one place instead of a thousand.",
        "## SELECT and JOIN are 90% of the job",
        "Almost everything you do with a database day to day comes down to SELECT (pick the columns you want), WHERE (filter which rows), and JOIN (combine rows across tables based on a matching key). SELECT name, email FROM users WHERE created_at > '2024-01-01' gets you recent users. Add a JOIN orders ON orders.user_id = users.id and you can pull in each user's order history in the same query. Get comfortable with these three and you can answer the vast majority of real business questions directly in SQL, without writing a line of application code.",
        "## Indexes, briefly",
        "An index is a separate, sorted lookup structure the database keeps next to a table so it doesn't have to scan every single row to find what you're asking for — the same way a book's index lets you jump straight to a page instead of reading cover to cover. Without an index on a column you filter or join on frequently, queries that are instant on a thousand rows can take seconds or minutes on a million. You don't need to master indexing theory on day one, but knowing it exists, and that 'this query got slow as the table grew' usually means 'this column needs an index,' will save you real pain later.",
        "## Why not just use a spreadsheet or a big JSON file",
        "Spreadsheets and flat files fall apart under concurrent writes, complex queries, and scale — two people editing the same row, a query joining across ten thousand rows, a million-row table, all of these are things a real database is built to handle correctly and a spreadsheet is not. Learning SQL isn't about ceremony, it's about giving yourself a tool that stays reliable exactly when your data stops being small and simple.",
      ],
      takeaways: [
        "Relational databases split data into linked tables instead of one flat sheet, avoiding duplication.",
        "SELECT, WHERE, and JOIN cover the vast majority of everyday database work.",
        "An index lets the database find rows without scanning the whole table — critical as data grows.",
        "Databases handle concurrent writes and complex queries far better than spreadsheets or flat files.",
        "SQL fluency lets you answer real questions about your data without writing application code.",
      ],
      resources: [
        { title: "SQLBolt", url: "https://sqlbolt.com/", note: "Interactive SQL exercises — the fastest way to build real query muscle memory." },
        { title: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/", note: "Thorough, practical walkthrough of Postgres from basics to indexing." },
        { title: "Full Stack Open: Databases", url: "https://fullstackopen.com/en/part13", note: "Connects SQL concepts directly to building a real backend." },
        { title: "MDN: Databases", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security#database_security", note: "Short context on where databases fit in a real web app's architecture." },
      ],
      tryThis: "On SQLBolt, write a query that joins two tables and filters the result — no tutorial hand-holding, just the query.",
    },

    "authentication-basics": {
      body: [
        "Authentication answers 'who is this,' and authorization answers 'what are they allowed to do.' They get lumped together as 'auth' constantly, but keeping them mentally separate will save you from a lot of confused bugs and, worse, confused security holes.",
        "## Sessions vs tokens",
        "There are two dominant ways to keep someone 'logged in' across requests, since HTTP itself has no memory between requests. Sessions: the server creates a record of who's logged in and gives the browser a small ID (usually in a cookie) pointing to that record; every request, the server looks up the session by that ID. Tokens (commonly JWTs): the server issues a signed piece of data containing the user's identity, and the client sends it back on every request; the server verifies the signature instead of doing a database lookup. Sessions are simpler to reason about and easy to revoke instantly. Tokens scale better across multiple servers and services but are harder to revoke before they expire. Neither is universally 'better' — they're a tradeoff, and picking one is an architecture decision, not a religious one.",
        "## Never roll your own crypto",
        "This is the one rule in this whole track worth memorizing word for word: never write your own password hashing, encryption, or token-signing logic. Use established libraries (bcrypt or argon2 for passwords, well-maintained JWT libraries for tokens) that have been audited by people who do this for a living. The failure modes of custom crypto are subtle, invisible in normal testing, and catastrophic in production — storing passwords in plain text, using a hash that's fast to brute-force, or signing tokens in a way that can be forged. This isn't a skill issue, it's a 'even world experts get this wrong sometimes' issue, so don't try to be the exception.",
        "## OAuth, in plain English",
        "OAuth is what's happening when you click 'Sign in with Google' on some app and it takes you to an actual Google login page instead of asking the app for your Google password. The app never sees your password at all — you log in on Google's site, Google asks 'do you want to let this app see your email and profile,' you say yes, and Google hands the app a token proving you approved that, scoped to only what you allowed. It exists specifically so third-party apps never have to touch your real credentials, which is a huge security win over the old pattern of typing your password into every random site that wanted to integrate with your account.",
        "## What this means practically",
        "As a junior dev, you'll rarely build auth completely from scratch at a real job — you'll use a library or a hosted service (Auth0, Clerk, Supabase Auth, or your framework's built-in auth) far more often than hand-rolling it. What matters is understanding sessions vs tokens well enough to reason about bugs, and OAuth well enough to wire up a 'sign in with X' button without it feeling like a black box.",
      ],
      takeaways: [
        "Authentication is 'who are you,' authorization is 'what can you do' — different problems.",
        "Sessions are server-side and easy to revoke; tokens are self-contained and scale better across services.",
        "Never write your own password hashing or crypto — use audited libraries like bcrypt or argon2.",
        "OAuth lets apps verify your identity through a trusted provider without ever seeing your password.",
        "Most real jobs use existing auth libraries or hosted services rather than hand-rolled systems.",
      ],
      resources: [
        { title: "MDN: Authentication", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Session", note: "Explains sessions and cookies at the HTTP level." },
        { title: "Full Stack Open: User administration", url: "https://fullstackopen.com/en/part4/token_authentication", note: "Implements token-based auth in a real app, step by step." },
        { title: "The Odin Project: Sessions, Cookies, and JWTs", url: "https://www.theodinproject.com/lessons/nodejs-sessions-cookies-jwts", note: "Directly compares the two dominant auth approaches." },
        { title: "OAuth.net: OAuth 2.0 simplified", url: "https://oauth.net/2/", note: "The go-to plain-language reference for how OAuth actually flows." },
      ],
      tryThis: "Find a 'Sign in with Google/GitHub' button on any app you use and click it slowly, noticing each screen it takes you through.",
    },

    "deploying-your-first-app": {
      body: [
        "'Works on my machine' is the most infamous sentence in software, and it exists because your laptop and a real server are never quite the same environment. Deploying is the skill of making your app run reliably somewhere that isn't your machine, for people who aren't you.",
        "## Environments are not just 'prod'",
        "Most real projects have at least three environments: development (your machine, where you're actively coding), staging (a copy of production used to test changes before they go live), and production (the real thing, real users). Each one might have different databases, different API keys, different feature flags. Bugs that only show up in production and never on your machine are almost always caused by an environment difference you didn't account for — different data, different config, different scale.",
        "## Environment variables exist for exactly this",
        "You never want database passwords, API keys, or environment-specific URLs hardcoded into your source code — partly for security, partly because the same code needs to behave differently in each environment. Environment variables solve this: instead of hardcoding a value, your code reads it from process.env (or the equivalent), and each environment supplies its own value for that variable. Your local .env file has your dev database URL; production has a completely different one, injected by whatever platform is hosting your app. This one habit prevents a huge share of 'it leaked our secret key on GitHub' incidents and 'it pointed at the wrong database' bugs.",
        "## You don't need to manage your own server",
        "Renting and configuring your own server used to be the default first step, and it was a genuine barrier to shipping anything. Now there are free or nearly-free platforms built specifically for deploying small apps in minutes: Vercel and Netlify for frontend and full-stack JS apps, Render and Railway for backends and databases, Fly.io for containerized apps. These platforms handle the server, the networking, HTTPS certificates, and scaling basics for you, so you can connect a GitHub repo and get a live URL in a few clicks. As a student or someone building a portfolio project, there is very little reason to manage raw servers yourself before you actually need to.",
        "## Killing 'works on my machine' for good",
        "The real fix for environment mismatches isn't heroics, it's discipline: keep your dependencies pinned to specific versions, use environment variables instead of hardcoded config, and deploy early and often instead of waiting until the end. A project that's been live on a real URL since week one, even in a rough state, will surface environment issues while they're cheap to fix. A project you only try to deploy the night before a demo will surface them at the worst possible time.",
      ],
      takeaways: [
        "Dev, staging, and production are different environments — bugs often come from differences between them.",
        "Environment variables keep secrets and environment-specific config out of your source code.",
        "Modern platforms (Vercel, Netlify, Render, Railway, Fly.io) handle servers and HTTPS so you don't have to.",
        "Deploying early and often surfaces environment mismatches while they're still cheap to fix.",
        "'Works on my machine' bugs are almost always an environment difference, not bad luck.",
      ],
      resources: [
        { title: "MDN: Environment variables and configuration", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework", note: "Background on server-side config concepts including env vars." },
        { title: "Full Stack Open: Deployment", url: "https://fullstackopen.com/en/part3/deploying_app_to_internet", note: "Walks through deploying a real app to a live platform." },
        { title: "The Odin Project: Deployment", url: "https://www.theodinproject.com/lessons/nodejs-deploying-node-applications", note: "Practical, beginner-friendly deployment guide." },
        { title: "Vercel Docs: Environment Variables", url: "https://vercel.com/docs/projects/environment-variables", note: "Concrete example of how a real platform handles per-environment config." },
      ],
      tryThis: "Take any small project and deploy it to a free platform today, even if it's unfinished — get a real live URL.",
    },

    "building-your-portfolio-project": {
      body: [
        "A portfolio project's job is to prove you can take something from idea to shipped, working software — not to prove you know every technology on the market. One small, finished, well-documented project beats five ambitious half-built ones every single time a recruiter or hiring manager actually looks at your GitHub.",
        "## Scope small on purpose",
        "The single biggest reason student portfolio projects die unfinished is scope: an idea that would take a small team months gets attempted solo in a weekend. Before writing any code, cut your idea down until you're a little embarrassed by how small it is, then build that. A to-do app with accounts and one filter option, fully working and deployed, is worth more than a half-built 'Instagram clone with AI features' that never got past the login page. You can always add features once the core thing actually works end to end.",
        "## Ship it, don't perfect it",
        "Momentum matters more than polish in the first version. Get something ugly but functional deployed to a real URL as early as possible, then iterate. A project that's live and rough is something you can demo in an interview tomorrow. A project that's 90% perfect on your laptop and never deployed is something you can't show anyone at all. Perfectionism during the build phase is usually fear of finishing wearing a productive-looking disguise.",
        "## A great README is not optional",
        "Most people who look at your project, recruiters especially, will read your README before they run your code, and many won't run your code at all. A great README has: a one-line description of what the project does, a screenshot or short GIF of it in action, the live demo link, the tech stack, and clear setup instructions. This is the single highest-leverage thing you can spend an extra hour on, because it's the part almost everyone actually sees.",
        "## What 'one polished project' actually looks like",
        "Polished doesn't mean fancy, it means complete and cared for: it's deployed and actually works when someone clicks the link, it handles obvious edge cases without crashing (empty input, no results, a failed request), it looks intentional even if simple, and the README makes it easy to understand in thirty seconds. That combination signals 'this person can finish things and think about the people who'll use what they build,' which is exactly what employers are trying to figure out when they look at your work.",
      ],
      takeaways: [
        "A portfolio project proves you can ship, not that you know every technology available.",
        "Cut your project idea down in scope before you start, not after you're stuck.",
        "Deploy early and iterate — a live rough version beats a perfect unfinished one.",
        "Your README is often the only part of the project people actually engage with.",
        "One complete, polished, deployed project beats several unfinished ones.",
      ],
      resources: [
        { title: "The Odin Project: Career", url: "https://www.theodinproject.com/paths/foundations/courses/foundations", note: "Includes guidance on picking and scoping capstone-style projects." },
        { title: "Full Stack Open", url: "https://fullstackopen.com/en/", note: "The full curriculum this track draws from — great source of realistic project ideas." },
        { title: "MDN: Understanding client-side web development tools", url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing", note: "Useful when deciding what tooling your project actually needs." },
        { title: "Make a README", url: "https://www.makeareadme.com/", note: "A focused guide specifically on writing READMEs that actually get read." },
      ],
      tryThis: "Take your current project idea and cut its feature list in half — write down what you're deliberately leaving out.",
    },
  },

  quiz: {
    id: "track-quiz",
    title: "Track 4 Quiz",
    questions: [
      {
        q: "What does DNS do when you type a URL into your browser?",
        options: [
          "Encrypts the connection between browser and server",
          "Translates the domain name into an IP address",
          "Compresses the page for faster loading",
          "Validates the server's HTML",
        ],
        answer: 1,
        explanation: "DNS acts like a phone book, converting human-readable domain names into the IP addresses computers use to route traffic.",
      },
      {
        q: "In REST API design, which is the idiomatic way to create a new resource?",
        options: [
          "GET /createUser",
          "POST /users",
          "PUT /getUser",
          "DELETE /users/new",
        ],
        answer: 1,
        explanation: "REST convention uses nouns for resources and HTTP methods for actions — POST to a collection endpoint creates a new item in it.",
      },
      {
        q: "Why do relational databases split data into multiple linked tables instead of one big flat table?",
        options: [
          "It makes queries slower but safer",
          "It avoids duplicating data and keeps updates consistent",
          "It's required by SQL syntax",
          "It reduces the need for indexes entirely",
        ],
        answer: 1,
        explanation: "Splitting data into related tables (normalization) avoids repeating the same information everywhere and means updates only need to happen in one place.",
      },
      {
        q: "What is the main practical difference between session-based auth and token-based auth?",
        options: [
          "Sessions can't be used on mobile apps",
          "Tokens are always more secure than sessions",
          "Sessions require server-side lookups and are easy to revoke; tokens are self-contained and scale better across servers",
          "There is no real difference, they're the same thing",
        ],
        answer: 2,
        explanation: "Sessions rely on server-side state that can be revoked instantly, while tokens carry their own verified identity data and don't need a database lookup, at the cost of being harder to revoke early.",
      },
      {
        q: "Why should you use environment variables instead of hardcoding config values like API keys?",
        options: [
          "Environment variables run faster than hardcoded values",
          "They let the same code behave correctly across dev, staging, and production without exposing secrets in source code",
          "They are required by all deployment platforms",
          "They automatically encrypt your database",
        ],
        answer: 1,
        explanation: "Environment variables keep secrets out of your codebase and let each environment supply its own config without changing any code.",
      },
    ],
  },

  challenge: {
    id: "track-challenge",
    title: "Challenge: Ship a One-Endpoint API",
    brief:
      "Build and deploy a tiny backend with exactly one working API endpoint, then build a simple page that calls it and shows the result. The goal isn't complexity — it's proving you can take something from your machine to a live URL that actually works, end to end.",
    steps: [
      "Pick one small piece of data your endpoint will serve (a joke, a fact, a quote, a to-do item — anything simple).",
      "Build a single backend endpoint (e.g. GET /api/random-fact) that returns that data as JSON with a correct status code.",
      "Test the endpoint locally with a tool like curl or your browser before touching the frontend.",
      "Build one simple HTML/JS page that fetches from your endpoint and displays the result on the page.",
      "Move any secrets or config (if you have any) into environment variables instead of hardcoding them.",
      "Deploy the backend and the page to a free platform (Render, Railway, Vercel, or similar) and get a live URL.",
      "Write a short README with what it does, the live link, and how to run it locally.",
    ],
  },
};
