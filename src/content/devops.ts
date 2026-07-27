import type { TrackContent } from "@/lib/content-types";

export const devops: TrackContent = {
  lessons: {
    "the-command-line": {
      body: [
        "Every engineer eventually meets the terminal, and most treat it like a locked door instead of a superpower. The command line is just a conversation with your machine, minus the mouse. Once you're fluent, tasks that take five clicks in a GUI take one line, and you can automate the whole thing later. That's the actual pitch: speed and repeatability, not gatekeeping.",
        "## Getting around",
        "Start with navigation because everything else builds on it. `pwd` tells you where you are, `ls` shows what's there, `cd` moves you. Learn `cd -` to jump back to your previous directory and `cd ..` to go up a level — these two alone save hundreds of keystrokes a week. `mkdir`, `touch`, `cp`, `mv`, and `rm` cover file management. Rm has no undo, no trash can, no confirmation dialog by default, so respect it before you're grepping Stack Overflow for recovery scripts.",
        "## Pipes are the whole point",
        "The real power move is the pipe, `|`, which takes the output of one command and feeds it as input to the next. `cat access.log | grep 404 | wc -l` reads a log file, filters for lines containing 404, and counts them — three tiny tools chained into one answer, with no code written. This is Unix philosophy in action: small programs that do one thing well, composed together. Once pipes click, you stop asking 'is there a tool for this' and start asking 'which three tools chain together for this.'",
        "`grep` searches text for patterns and is probably the single most-used tool you'll learn here — `grep -r \"TODO\" .` finds every TODO comment in a codebase in one shot. `find` locates files by name, type, size, or modification time, which beats scrolling through a file tree when you're hunting for that one config buried three folders deep. Combine them: `find . -name \"*.log\" | xargs grep \"ERROR\"` searches every log file for errors without you opening a single one manually.",
        "## Building the habit",
        "You don't need to memorize flags. You need to build the reflex of reaching for the terminal first and looking up the exact syntax when you get there. Keep a scratch file of commands you use often, or lean on shell history with `Ctrl+R` to search backward through what you've already typed. The command line rewards repetition more than any other tool in this track — the tenth time you use `grep` you won't need to think about it, and that's when it actually becomes a superpower instead of a chore.",
      ],
      takeaways: [
        "Navigation commands (cd, ls, pwd) are the foundation everything else is built on.",
        "Pipes let you chain small tools into one powerful command instead of writing custom scripts.",
        "grep and find cover the vast majority of 'where is this text/file' questions you'll ever have.",
        "rm has no undo — always double-check the path before you hit enter.",
        "Fluency comes from repetition, not memorizing every flag up front.",
      ],
      resources: [
        {
          title: "MIT Missing Semester — The Shell",
          url: "https://missing.csail.mit.edu/2020/course-shell/",
          note: "The best free intro to the command line, written for CS students specifically.",
        },
        {
          title: "MIT Missing Semester — Data Wrangling",
          url: "https://missing.csail.mit.edu/2020/data-wrangling/",
          note: "Where pipes, grep, and text processing really come together.",
        },
        {
          title: "Explainshell",
          url: "https://explainshell.com/",
          note: "Paste any shell command and get a breakdown of every flag.",
        },
      ],
      tryThis: "Open your terminal and use grep to find every occurrence of a word across every file in a project you have locally.",
    },

    "ci-cd-pipelines": {
      body: [
        "Push your code, and something happens automatically before it ever reaches a real user. That's CI/CD in one sentence: Continuous Integration runs your tests and builds on every change, Continuous Delivery/Deployment ships the result somewhere. Together they replace a very human, very error-prone ritual — someone manually running tests, manually building, manually copying files to a server, usually at the worst possible hour.",
        "## What actually runs on push",
        "When you push to a repo with CI configured, a server you don't own spins up a fresh environment, checks out your code, and runs a script: install dependencies, run the linter, run the test suite, build the project. If any step fails, the pipeline turns red and blocks the merge. This is the whole trick — nothing merges to main without passing the same checks every single time, regardless of who wrote it or how tired they were. GitHub Actions, GitLab CI, and CircleCI are the common tools; they all follow the same shape of 'trigger, run steps, report status.'",
        "A typical GitHub Actions config lives at `.github/workflows/ci.yml` and looks roughly like: trigger on push and pull_request, checkout the code, set up the right language runtime, install dependencies, then run `npm test` or `pytest`. That's it. No magic, just a YAML file describing steps a human would otherwise run by hand.",
        "## Automation prevents 2am deploys",
        "The real value shows up under pressure. Without CI/CD, deploying is a manual event: someone SSHs into a server, pulls the latest code, restarts a process, and prays. It's slow, it's stressful, and it's exactly the kind of task humans get wrong when they're tired or rushed — which is precisely when deploys tend to happen, right before a deadline or right after a hotfix. With a pipeline, deployment is a boring, repeatable script that runs the same way at 2pm or 2am. Boring is the goal. If your deploy process depends on someone remembering the right sequence of commands, it will eventually fail at the worst time.",
        "CD extends this further: once tests pass, the pipeline can automatically push the build to staging or production. Continuous Delivery means it's ready to deploy with one click; Continuous Deployment means it ships with no human click at all. Most teams land somewhere in between — auto-deploy to staging, manual approval for production — because full automation to prod requires serious confidence in your test coverage. That confidence is exactly what Track 5 was building toward.",
      ],
      takeaways: [
        "CI runs your tests and build automatically on every push, catching problems before they merge.",
        "CD automates the deployment step so shipping isn't a manual, error-prone ritual.",
        "A pipeline is just a YAML file describing steps a human would otherwise run by hand.",
        "Automation makes deploys boring and repeatable, which is exactly what you want under pressure.",
        "Full auto-deploy to production requires trusting your test suite — which is why CI and testing go hand in hand.",
      ],
      resources: [
        {
          title: "GitHub Actions Quickstart",
          url: "https://docs.github.com/en/actions/quickstart",
          note: "Get a working pipeline running against a real repo in under 10 minutes.",
        },
        {
          title: "ByteByteGo — CI/CD Explained",
          url: "https://bytebytego.com/",
          note: "Visual, systems-level explanations of pipelines and deployment strategies.",
        },
        {
          title: "MIT Missing Semester — Version Control (CI mentions)",
          url: "https://missing.csail.mit.edu/2020/version-control/",
          note: "Ties CI concepts back to the Git fundamentals from Track 3.",
        },
      ],
      tryThis: "Add a GitHub Actions workflow to any repo you own that runs your test command on every push.",
    },

    "docker-containers-intro": {
      body: [
        "Software works on your machine and breaks on someone else's — different OS, different library version, different everything. Containers exist to end that argument for good. Think of a container like a shipping container: it doesn't matter what's inside or which ship, train, or truck carries it, the box is a standard size and interlocks with standard equipment everywhere in the world. Docker does the same thing for software, packaging your app plus everything it needs to run into one portable unit.",
        "## Images vs containers",
        "An image is the blueprint — a read-only snapshot of your app, its dependencies, and the instructions to run it. A container is a running instance of that image, the same way a class and an object relate in code. You build one image and can spin up as many containers from it as you want, each isolated from the others and from the host machine. This is why 'it works on my machine' stops being an excuse: the image is identical everywhere it runs.",
        "## A real Dockerfile, line by line",
        "`FROM node:20-alpine` — start from a minimal official Node.js image instead of building an OS from scratch.",
        "`WORKDIR /app` — set the working directory inside the container so later commands run from a known place.",
        "`COPY package*.json ./` — copy just the dependency manifests first, before the rest of the code.",
        "`RUN npm install` — install dependencies as their own layer, so Docker can cache this step and skip it if your dependencies haven't changed.",
        "`COPY . .` — now copy the rest of your source code in.",
        "`EXPOSE 3000` — document which port the app listens on.",
        "`CMD [\"node\", \"server.js\"]` — the command that runs when a container starts from this image.",
        "That layer-caching trick with `package*.json` copied before the rest of the code isn't an accident — it's the single most common Docker optimization, because rebuilding `npm install` on every code change is painfully slow otherwise.",
        "## Building and running it",
        "`docker build -t myapp .` reads the Dockerfile and produces an image tagged `myapp`. `docker run -p 3000:3000 myapp` starts a container from that image and maps port 3000 on your machine to port 3000 inside the container. From there, `docker ps` shows running containers, `docker logs <id>` shows what they're printing, and `docker stop <id>` shuts one down. That's genuinely most of what you need for day-to-day container work — the rest is refinement.",
      ],
      takeaways: [
        "Containers package your app and its dependencies so it runs identically everywhere.",
        "An image is the blueprint; a container is a running instance of that image.",
        "Order your Dockerfile so dependency installs are cached separately from source code copies.",
        "docker build creates an image, docker run starts a container from it.",
        "Containers solve 'works on my machine' by making the machine part of the shipment.",
      ],
      resources: [
        {
          title: "Docker Official — Getting Started Guide",
          url: "https://docs.docker.com/get-started/",
          note: "The canonical hands-on walkthrough, straight from Docker.",
        },
        {
          title: "Docker Official — Dockerfile Best Practices",
          url: "https://docs.docker.com/develop/develop-images/dockerfile_best_practices/",
          note: "Layer caching, multi-stage builds, and other things that matter once you go past 'hello world.'",
        },
        {
          title: "Play with Docker",
          url: "https://labs.play-with-docker.com/",
          note: "A free browser-based Docker sandbox — no install required.",
        },
      ],
      tryThis: "Write a Dockerfile for any small project you have, build it, and run the container locally.",
    },

    "cloud-fundamentals": {
      body: [
        "Cloud computing sounds abstract until you realize it's just someone else's computer, rented by the minute. AWS, Google Cloud, and Azure all sell the same basic building blocks — think of them as Lego pieces you snap together instead of one giant pre-molded toy. Learn the pieces once and the specific vendor becomes a detail, not a whole new skill.",
        "## The three core legos",
        "Compute is where your code actually runs — a virtual machine, a container host, or a serverless function that spins up only when called. Storage is where your data lives when nothing's actively computing on it — object storage like S3 for files, block storage for databases, and everything in between. Networking connects the two and connects you to the internet — load balancers, DNS, firewalls, and virtual private networks that decide what can talk to what. Almost everything else offered by a cloud provider is a specialized combination of these three: a managed database is compute plus storage with a nice API, a CDN is storage plus networking optimized for speed.",
        "## Free tiers, and the fine print",
        "Every major provider offers a free tier specifically so students and hobbyists can learn without paying — AWS Free Tier, GCP's $300 credit, Azure's student credits. Use them. But read the fine print: 'free tier' usually means free up to a usage limit, not free forever, and it's shockingly easy to accidentally spin up something that bills by the hour and forget about it. A t2.micro EC2 instance left running for a month can cost real money even on 'free tier' terms if you exceed the included hours.",
        "## Cost awareness as a skill",
        "The number one beginner cloud mistake isn't technical, it's financial: leaving resources running that nobody's using. Set up billing alerts on day one, before you deploy anything — most providers let you get an email at a spending threshold like $5 or $10. Get in the habit of tearing down resources you're not actively using for a project, especially databases and VMs, which bill continuously whether or not you're touching them. Storage is usually cheap; compute running 24/7 is where costs creep up. Treating the cloud like a metered utility instead of a free playground is the difference between a fun learning project and a surprise bill.",
      ],
      takeaways: [
        "Compute, storage, and networking are the three lego pieces almost everything else is built from.",
        "Learning the concepts transfers across AWS, GCP, and Azure — the vendor is a detail.",
        "Free tiers have usage limits, not unlimited free usage — read what you're actually getting.",
        "Set up billing alerts before you deploy anything, not after a surprise bill.",
        "Compute running continuously is usually where costs creep up — tear down what you're not using.",
      ],
      resources: [
        {
          title: "AWS Free Tier",
          url: "https://aws.amazon.com/free/",
          note: "What's actually included, and for how long, before charges kick in.",
        },
        {
          title: "ByteByteGo — System Design & Cloud Concepts",
          url: "https://bytebytego.com/",
          note: "Free newsletter breakdowns of how cloud infrastructure fits together.",
        },
        {
          title: "Google Cloud Skills Boost — Free Labs",
          url: "https://www.cloudskillsboost.google/",
          note: "Hands-on guided labs, several free, covering compute/storage/networking basics.",
        },
      ],
      tryThis: "Set up a billing alert on a free-tier cloud account before you launch anything on it, even for practice.",
    },

    "monitoring-logging-basics": {
      body: [
        "Your code is running in production and something's wrong. Without visibility into what's actually happening inside it, you're debugging blind — guessing based on user reports and hoping you can reproduce the issue locally. Observability is the practice of instrumenting your system so you can answer 'what happened' after the fact, without having to guess.",
        "## Logs, metrics, and traces",
        "Logs are timestamped events — 'user 4521 logged in', 'payment failed: card declined', 'connection timeout after 30s.' They're detailed and specific but can be noisy at scale; a busy service can generate millions of log lines a day. Metrics are numbers tracked over time — request count, error rate, response latency, CPU usage. They're cheap to store and great for dashboards and alerts, but they tell you 'something is wrong' without telling you exactly what or why. Traces follow a single request as it moves through multiple services — useful once your system has more than one moving part, showing you that a slow page load was actually a slow database call three services downstream. Together these three form 'observability': logs for detail, metrics for trends, traces for the path a request took.",
        "## Log like your future 2am self is reading it",
        "The best habit you can build here is writing logs for the version of you who gets paged at 2am with zero context. That means: include enough detail to actually act on (which user, which request ID, what input), avoid logging so much noise that the real signal drowns, and never log sensitive data like passwords or full credit card numbers. A good log line answers 'what happened, to whom, and with what data' in one glance, not 'something happened somewhere.'",
        "## Alerts and dashboards",
        "Monitoring tools like Datadog, Grafana, or even a cloud provider's built-in dashboards turn raw metrics into something a human can act on — a graph of error rate over time, an alert that fires when latency crosses a threshold. The goal isn't collecting data for its own sake, it's collecting exactly enough to be woken up when something actually needs a human, and to hand that human a clear starting point instead of a blank investigation. A system with good observability turns 'the site is down, no idea why' into 'the database connection pool is exhausted, here's the exact log line that shows it' — that difference is the entire point.",
      ],
      takeaways: [
        "Logs, metrics, and traces are three different tools — detail, trends, and request paths respectively.",
        "Metrics tell you something is wrong; logs and traces tell you what and why.",
        "Write logs for your future self debugging at 2am with no context — be specific, not noisy.",
        "Never log sensitive data like passwords or full card numbers.",
        "Good observability turns 'the site is down' into a specific, actionable starting point.",
      ],
      resources: [
        {
          title: "Grafana Fundamentals",
          url: "https://grafana.com/tutorials/",
          note: "Free tutorials on building dashboards from real metrics.",
        },
        {
          title: "ByteByteGo — Observability Explained",
          url: "https://bytebytego.com/",
          note: "System-level breakdowns of logs vs metrics vs traces.",
        },
        {
          title: "Google SRE Book — Monitoring Distributed Systems",
          url: "https://sre.google/sre-book/monitoring-distributed-systems/",
          note: "Free from Google, the industry-standard reference on this topic.",
        },
      ],
      tryThis: "Pick one function in a project you own and add a log line that would actually help you debug it at 2am.",
    },

    "system-design-first-principles": {
      body: [
        "You don't need to design the next Twitter to benefit from system design vocabulary. This lesson isn't about mastery — it's about knowing the words so that when a senior engineer says 'we need a cache in front of this' or 'let's put a load balancer there,' you know roughly what they mean and why.",
        "## Load balancers",
        "A load balancer sits in front of multiple copies of your server and spreads incoming requests across them, instead of one server taking every request alone. This does two things: it lets you handle more traffic by adding more servers behind the balancer, and it gives you resilience — if one server crashes, the balancer routes around it and users barely notice. The core idea is simple: don't have a single point of failure or a single bottleneck if you can spread the load.",
        "## Caches",
        "A cache stores a copy of data somewhere faster to access than its original source, so repeated requests don't have to redo expensive work. Reading from memory is dramatically faster than reading from a database, so a cache like Redis sitting in front of your database can serve the same popular query thousands of times without touching the database at all. The tradeoff is staleness — cached data can go out of date, so systems need a strategy for when to refresh or invalidate it. 'Cache invalidation is one of the two hard problems in computer science' is a genuine engineering joke because getting this timing right is legitimately tricky.",
        "## Scaling databases",
        "A single database server has limits — eventually it runs out of capacity for reads, writes, or both. Read replicas are copies of your database that handle read queries so the main database only has to handle writes, which spreads out load for read-heavy applications. Sharding splits your data across multiple databases based on some key (like user ID), so no single machine holds all the data — this adds complexity but lets you scale beyond what one machine can physically hold or handle.",
        "## Putting the vocabulary together",
        "A typical high-level system might look like: users hit a load balancer, which routes to one of several app servers, which check a cache before querying a database, which itself might have read replicas for scaling. None of these pieces is exotic — they're solutions to specific, recurring problems: too much traffic for one server, repeated expensive queries, and one database running out of room. You'll meet these words constantly in interviews, architecture diagrams, and real production incidents, and now you have a name and a reason for each one.",
      ],
      takeaways: [
        "A load balancer spreads traffic across multiple servers to avoid a single point of failure.",
        "A cache serves fast, repeated reads from memory instead of hitting the database every time.",
        "Cache invalidation — knowing when to refresh cached data — is a genuinely hard problem.",
        "Read replicas offload read traffic from the main database; sharding splits data across machines.",
        "You don't need mastery here — recognizing the vocabulary is enough to follow real design discussions.",
      ],
      resources: [
        {
          title: "System Design Primer (GitHub)",
          url: "https://github.com/donnemartin/system-design-primer",
          note: "The most-starred free resource on this exact topic — vocabulary plus real diagrams.",
        },
        {
          title: "ByteByteGo — System Design Fundamentals",
          url: "https://bytebytego.com/",
          note: "Visual, digestible explanations of load balancers, caching, and scaling.",
        },
        {
          title: "MIT Missing Semester (context on infra tooling)",
          url: "https://missing.csail.mit.edu/",
          note: "Rounds out the practical side that pairs with this theoretical vocabulary.",
        },
      ],
      tryThis: "Sketch a simple diagram of a load balancer, two app servers, a cache, and a database — label what each piece is protecting the system from.",
    },
  },

  quiz: {
    id: "track-quiz",
    title: "Track 6 Quiz",
    questions: [
      {
        q: "What does the pipe operator (|) do in the command line?",
        options: [
          "Deletes the output of a command",
          "Feeds the output of one command as input to the next",
          "Runs two commands at the same time",
          "Saves command output to a file permanently",
        ],
        answer: 1,
        explanation: "Pipes chain commands together, letting the output of one become the input of the next.",
      },
      {
        q: "What's the main purpose of a CI pipeline running on every push?",
        options: [
          "To automatically write new features for you",
          "To catch failing tests and build errors before code merges",
          "To replace the need for a code editor",
          "To delete old branches automatically",
        ],
        answer: 1,
        explanation: "CI runs your tests and build on every push so problems are caught before they reach main.",
      },
      {
        q: "What is the difference between a Docker image and a container?",
        options: [
          "They are the same thing with different names",
          "An image only works on Linux, a container works anywhere",
          "An image is the blueprint, a container is a running instance of it",
          "A container is stored on disk, an image only exists in memory",
        ],
        answer: 2,
        explanation: "An image is a read-only blueprint; a container is a running instance created from that image.",
      },
      {
        q: "Why should you set up billing alerts before deploying anything to a cloud free tier?",
        options: [
          "Free tiers have usage limits and it's easy to accidentally exceed them",
          "Billing alerts are required by law",
          "Free tiers automatically charge you a fixed monthly fee",
          "Cloud providers delete unmonitored accounts",
        ],
        answer: 0,
        explanation: "Free tiers are free up to a limit, not unlimited — alerts catch usage before it turns into a surprise bill.",
      },
      {
        q: "In a system with a load balancer, cache, and database, what problem is the cache primarily solving?",
        options: [
          "Routing traffic to backup servers if one crashes",
          "Serving repeated, expensive reads faster without hitting the database every time",
          "Splitting data across multiple physical machines",
          "Encrypting data in transit between servers",
        ],
        answer: 1,
        explanation: "A cache stores frequently accessed data somewhere faster than the original source, reducing load on the database.",
      },
    ],
  },

  challenge: {
    id: "track-challenge",
    title: "Challenge: Containerize and Automate",
    brief:
      "Take the project you built in Track 4 and the tests you wrote in Track 5, then wrap them in the DevOps habits from this track: a working Dockerfile and a CI pipeline that runs your tests on every push.",
    steps: [
      "Write a Dockerfile for your Track 4 project that installs dependencies and starts the app.",
      "Build the image locally with `docker build` and confirm it runs with `docker run`.",
      "Order your Dockerfile so dependency installation is cached separately from source code copies.",
      "Add a GitHub Actions workflow file that triggers on push and pull_request.",
      "Configure the workflow to install dependencies and run the test suite from Track 5.",
      "Push a small change and confirm the pipeline runs and reports pass/fail correctly.",
      "Break a test on purpose, push it, and confirm the pipeline actually catches it and turns red.",
    ],
  },
};
