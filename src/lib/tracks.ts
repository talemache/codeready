export type Module = {
  id: string;
  title: string;
  type: "Lesson" | "Resources" | "Quiz" | "Challenge";
  minutes: number;
};

export type Track = {
  id: string;
  number: number;
  name: string;
  tagline: string;
  description: string;
  icon: string; // doodle svg id
  modules: Module[];
};

const mk = (
  title: string,
  type: Module["type"] = "Lesson",
  minutes = 20,
): Module => ({
  id: title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, ""),
  title,
  type,
  minutes,
});

export const TRACKS: Track[] = [
  {
    id: "programming-foundations",
    number: 1,
    name: "Programming Foundations",
    tagline: "The habits great engineers build early.",
    description:
      "Clean code, debugging, and reading real codebases like a pro.",
    icon: "book",
    modules: [
      mk("Writing Clean Code"),
      mk("Language Mastery (pick your primary language)"),
      mk("Debugging Like a Detective"),
      mk("Reading Other People's Code"),
      mk("Code Review Etiquette"),
    ],
  },
  {
    id: "dsa",
    number: 2,
    name: "Data Structures & Algorithms",
    tagline: "Think in patterns, not puzzles.",
    description: "The core toolkit for interviews and everyday problem solving.",
    icon: "tree",
    modules: [
      mk("Big-O Thinking"),
      mk("Arrays, Strings & Hash Maps"),
      mk("Linked Lists, Stacks & Queues"),
      mk("Trees & Graphs"),
      mk("Sorting & Searching"),
      mk("Dynamic Programming Basics"),
      mk("Interview Problem Patterns", "Challenge", 45),
    ],
  },
  {
    id: "git",
    number: 3,
    name: "Version Control & Collaboration",
    tagline: "Git, without the panic.",
    description: "Work confidently on any team's codebase.",
    icon: "branch",
    modules: [
      mk("Git Fundamentals"),
      mk("Branching & Merging"),
      mk("Pull Requests Done Right"),
      mk("Resolving Conflicts"),
      mk("Working on a Team Codebase"),
    ],
  },
  {
    id: "building",
    number: 4,
    name: "Building Real Software",
    tagline: "From idea to deployed app.",
    description: "Frontend, backend, databases, deploy — the full stack.",
    icon: "hammer",
    modules: [
      mk("How the Web Works"),
      mk("Frontend Fundamentals"),
      mk("Backend & APIs"),
      mk("Databases & SQL"),
      mk("Authentication Basics"),
      mk("Deploying Your First App"),
      mk("Building Your Portfolio Project", "Challenge", 90),
    ],
  },
  {
    id: "testing",
    number: 5,
    name: "Testing & Quality",
    tagline: "Sleep better. Ship safer.",
    description: "Learn to write code that keeps working tomorrow.",
    icon: "shield",
    modules: [
      mk("Why Tests Matter"),
      mk("Unit Testing"),
      mk("Integration & End-to-End Testing"),
      mk("Test-Driven Development Intro"),
      mk("Handling Bugs in Production"),
    ],
  },
  {
    id: "devops",
    number: 6,
    name: "DevOps & Systems Basics",
    tagline: "How software actually runs.",
    description: "The command line, containers, cloud, and system design.",
    icon: "gear",
    modules: [
      mk("The Command Line"),
      mk("CI/CD Pipelines"),
      mk("Docker & Containers Intro"),
      mk("Cloud Fundamentals"),
      mk("Monitoring & Logging Basics"),
      mk("System Design First Principles"),
    ],
  },
  {
    id: "ai-era",
    number: 7,
    name: "AI-Era Engineering",
    tagline: "Work with AI, not against it.",
    description: "The new muscle every modern engineer needs.",
    icon: "spark",
    modules: [
      mk("Coding with AI Assistants Effectively"),
      mk("Prompting for Developers"),
      mk("Evaluating AI Output Critically"),
      mk("Understanding LLM Basics"),
      mk("Where AI Fits in the SDLC"),
    ],
  },
  {
    id: "career",
    number: 8,
    name: "Career Launchpad",
    tagline: "Land the job. Thrive in it.",
    description: "Résumés, interviews, offers, and your first 90 days.",
    icon: "rocket",
    modules: [
      mk("Résumés That Get Interviews"),
      mk("Building a Portfolio & GitHub Profile"),
      mk("Networking Without Being Weird"),
      mk("Technical Interview Prep Strategy"),
      mk("Behavioral Interviews & STAR Stories"),
      mk("Negotiating Your First Offer"),
      mk("Your First 90 Days on the Job"),
    ],
  },
];

// Every track ends with a quiz. Tracks 1-6 also get a hands-on challenge.
const CHALLENGE_TITLES: Record<string, string> = {
  "programming-foundations": "Challenge: Refactor an Old Project",
  dsa: "Challenge: Five Problems, Three Patterns",
  git: "Challenge: Fork, Branch, Pull Request",
  building: "Challenge: Ship a One-Endpoint API",
  testing: "Challenge: Test the Thing You Built",
  devops: "Challenge: Containerize and Automate",
  "ai-era": "Challenge: Build a Developer Prompt Library",
  career: "Challenge: Run Your First Informational Interview",
};

for (const t of TRACKS) {
  const challengeTitle = CHALLENGE_TITLES[t.id];
  if (challengeTitle) {
    t.modules.push({
      id: "track-challenge",
      title: challengeTitle,
      type: "Challenge",
      minutes: 60,
    });
  }
  t.modules.push({
    id: "track-quiz",
    title: `${t.name} Quiz`,
    type: "Quiz",
    minutes: 10,
  });
}

export const getTrack = (id: string) => TRACKS.find((t) => t.id === id);

export const getModule = (trackId: string, moduleId: string) => {
  const t = getTrack(trackId);
  if (!t) return null;
  const idx = t.modules.findIndex((m) => m.id === moduleId);
  if (idx === -1) return null;
  return {
    track: t,
    module: t.modules[idx],
    index: idx,
    prev: t.modules[idx - 1] ?? null,
    next: t.modules[idx + 1] ?? null,
  };
};

export const TOTAL_MODULES = TRACKS.reduce((n, t) => n + t.modules.length, 0);
