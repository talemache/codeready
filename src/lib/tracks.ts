export type Module = {
  id: string;
  title: string;
  type: "Lesson" | "Resources" | "Quiz" | "Challenge";
  minutes: number;
};

export type AudienceBand = "teen" | "college";

export type Track = {
  id: string;
  number: number;
  audience: AudienceBand;
  name: string;
  tagline: string;
  description: string;
  parentSummary: string;
  icon: string; // doodle svg id
  modules: Module[];
};

const createModule = (
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

const createModuleWithTeenDefaults = (
  title: string,
  type: Module["type"] = "Lesson",
  minutes = 15,
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
    audience: "college",
    name: "Programming Foundations",
    tagline: "The habits great engineers build early.",
    description: "Clean code, debugging, and reading real codebases like a pro.",
    parentSummary:
      "Builds core engineering habits early: readability, debugging discipline, and confidence navigating unfamiliar codebases.",
    icon: "book",
    modules: [
      createModule("Writing Clean Code"),
      createModule("Language Mastery (pick your primary language)"),
      createModule("Debugging Like a Detective"),
      createModule("Reading Other People's Code"),
      createModule("Code Review Etiquette"),
    ],
  },
  {
    id: "dsa",
    number: 2,
    audience: "college",
    name: "Data Structures & Algorithms",
    tagline: "Think in patterns, not puzzles.",
    description: "The core toolkit for interviews and everyday problem solving.",
    parentSummary:
      "Builds practical problem-solving fluency through patterns that transfer to coursework, interviews, and day-to-day engineering work.",
    icon: "tree",
    modules: [
      createModule("Big-O Thinking"),
      createModule("Arrays, Strings & Hash Maps"),
      createModule("Linked Lists, Stacks & Queues"),
      createModule("Trees & Graphs"),
      createModule("Sorting & Searching"),
      createModule("Dynamic Programming Basics"),
      createModule("Interview Problem Patterns", "Challenge", 45),
    ],
  },
  {
    id: "git",
    number: 3,
    audience: "college",
    name: "Version Control & Collaboration",
    tagline: "Git, without the panic.",
    description: "Work confidently on any team's codebase.",
    parentSummary:
      "Teaches the collaboration mechanics real teams rely on: clean commits, branching, pull requests, and conflict resolution.",
    icon: "branch",
    modules: [
      createModule("Git Fundamentals"),
      createModule("Branching & Merging"),
      createModule("Pull Requests Done Right"),
      createModule("Resolving Conflicts"),
      createModule("Working on a Team Codebase"),
    ],
  },
  {
    id: "building",
    number: 4,
    audience: "college",
    name: "Building Real Software",
    tagline: "From idea to deployed app.",
    description: "Frontend, backend, databases, deploy — the full stack.",
    parentSummary:
      "Covers end-to-end product building from browser to database to deployment, with a portfolio-ready shipping focus.",
    icon: "hammer",
    modules: [
      createModule("How the Web Works"),
      createModule("Frontend Fundamentals"),
      createModule("Backend & APIs"),
      createModule("Databases & SQL"),
      createModule("Authentication Basics"),
      createModule("Deploying Your First App"),
      createModule("Building Your Portfolio Project", "Challenge", 90),
    ],
  },
  {
    id: "testing",
    number: 5,
    audience: "college",
    name: "Testing & Quality",
    tagline: "Sleep better. Ship safer.",
    description: "Learn to write code that keeps working tomorrow.",
    parentSummary:
      "Builds confidence and quality habits through unit, integration, and end-to-end testing strategies used in production teams.",
    icon: "shield",
    modules: [
      createModule("Why Tests Matter"),
      createModule("Unit Testing"),
      createModule("Integration & End-to-End Testing"),
      createModule("Test-Driven Development Intro"),
      createModule("Handling Bugs in Production"),
    ],
  },
  {
    id: "devops",
    number: 6,
    audience: "college",
    name: "DevOps & Systems Basics",
    tagline: "How software actually runs.",
    description: "The command line, containers, cloud, and system design.",
    parentSummary:
      "Introduces the operational side of engineering: automation, deployment pipelines, containers, and reliability fundamentals.",
    icon: "gear",
    modules: [
      createModule("The Command Line"),
      createModule("CI/CD Pipelines"),
      createModule("Docker & Containers Intro"),
      createModule("Cloud Fundamentals"),
      createModule("Monitoring & Logging Basics"),
      createModule("System Design First Principles"),
    ],
  },
  {
    id: "ai-era",
    number: 7,
    audience: "college",
    name: "AI-Era Engineering",
    tagline: "Work with AI, not against it.",
    description: "The new muscle every modern engineer needs.",
    parentSummary:
      "Teaches practical AI-assisted engineering workflows with emphasis on verification, judgment, and responsible adoption.",
    icon: "spark",
    modules: [
      createModule("Coding with AI Assistants Effectively"),
      createModule("Prompting for Developers"),
      createModule("Evaluating AI Output Critically"),
      createModule("Understanding LLM Basics"),
      createModule("Where AI Fits in the SDLC"),
    ],
  },
  {
    id: "career",
    number: 8,
    audience: "college",
    name: "Career Launchpad",
    tagline: "Land the job. Thrive in it.",
    description: "Résumés, interviews, offers, and your first 90 days.",
    parentSummary:
      "Bridges technical growth to career outcomes with practical preparation for hiring processes and early-career success.",
    icon: "rocket",
    modules: [
      createModule("Résumés That Get Interviews"),
      createModule("Building a Portfolio & GitHub Profile"),
      createModule("Networking Without Being Weird"),
      createModule("Technical Interview Prep Strategy"),
      createModule("Behavioral Interviews & STAR Stories"),
      createModule("Negotiating Your First Offer"),
      createModule("Your First 90 Days on the Job"),
    ],
  },
  {
    id: "is-coding-for-me",
    number: 9,
    audience: "teen",
    name: "Is Coding For Me?",
    tagline: "Start curious, not stressed.",
    description: "A friendly first step that shows what coding really feels like.",
    parentSummary:
      "Teens learn what coding work actually looks like day to day and why mistakes are normal. They finish with three tiny programs they can run, break, and fix on purpose.",
    icon: "book",
    modules: [
      createModuleWithTeenDefaults("What Coders Actually Do All Day"),
      createModuleWithTeenDefaults("You Don't Need to Be a Math Person"),
      createModuleWithTeenDefaults("Your First Program"),
      createModuleWithTeenDefaults("Mistakes Are Part of the Job"),
      createModuleWithTeenDefaults("Finding Your Kind of Coding"),
    ],
  },
  {
    id: "programming-foundations-teen",
    number: 10,
    audience: "teen",
    name: "Programming Foundations (Teen Edition)",
    tagline: "Build smart habits early.",
    description: "Core coding habits taught with short lessons and practical wins.",
    parentSummary:
      "Teens practice naming, problem breakdown, testing, and calm debugging habits. They improve an existing program by adding a real new feature.",
    icon: "tree",
    modules: [
      createModuleWithTeenDefaults("Naming Things Well"),
      createModuleWithTeenDefaults("Breaking Big Problems Into Small Ones"),
      createModuleWithTeenDefaults("Reading Error Messages Without Panicking"),
      createModuleWithTeenDefaults("Testing Your Own Work"),
      createModuleWithTeenDefaults("Sharing Code Kindly"),
    ],
  },
  {
    id: "build-something-real",
    number: 11,
    audience: "teen",
    name: "Build Something Real",
    tagline: "One project, start to finish.",
    description: "Turn an idea into a personal web page with HTML, CSS, and JavaScript.",
    parentSummary:
      "Teens build a complete personal web page and customize it around their own interests. They learn the web stack in simple steps and end with something concrete to show.",
    icon: "hammer",
    modules: [
      createModuleWithTeenDefaults("How Websites Actually Work"),
      createModuleWithTeenDefaults("HTML: The Skeleton"),
      createModuleWithTeenDefaults("CSS: Making It Yours"),
      createModuleWithTeenDefaults("A Little Bit of Interactivity"),
      createModuleWithTeenDefaults("Show It Off"),
    ],
  },
  {
    id: "git-working-with-others",
    number: 12,
    audience: "teen",
    name: "Git & Working With Others",
    tagline: "Save points for code.",
    description: "Learn Git basics and collaborate on a shared project without chaos.",
    parentSummary:
      "Teens learn to save, branch, and merge code changes the same way real teams do. They complete a shared mini-project with another person and combine both sets of edits.",
    icon: "branch",
    modules: [
      createModuleWithTeenDefaults("Why Save Points Matter"),
      createModuleWithTeenDefaults("Making a Change and Saving It"),
      createModuleWithTeenDefaults("Working on the Same Project as a Friend"),
      createModuleWithTeenDefaults("When Two People Change the Same Thing"),
      createModuleWithTeenDefaults("Showing Your Work"),
    ],
  },
  {
    id: "ai-tools-for-students",
    number: 13,
    audience: "teen",
    name: "AI Tools for Students",
    tagline: "Use AI to learn, not to skip thinking.",
    description: "Learn to use AI coding tools responsibly with skepticism and clear prompts.",
    parentSummary:
      "Teens learn to treat AI as a helper, not a shortcut, and to verify every output. They build one AI-assisted feature and explain the final code in their own words.",
    icon: "spark",
    modules: [
      createModuleWithTeenDefaults("What AI Coding Tools Actually Do"),
      createModuleWithTeenDefaults("Using AI Without Losing the Learning"),
      createModuleWithTeenDefaults("AI Gets Things Wrong Sometimes"),
      createModuleWithTeenDefaults("Asking Better Questions"),
      createModuleWithTeenDefaults("Using AI to Learn a New Topic Fast"),
    ],
  },
];

const CHALLENGE_TITLES: Record<string, string> = {
  "programming-foundations": "Challenge: Refactor an Old Project",
  dsa: "Challenge: Five Problems, Three Patterns",
  git: "Challenge: Fork, Branch, Pull Request",
  building: "Challenge: Ship a One-Endpoint API",
  testing: "Challenge: Test the Thing You Built",
  devops: "Challenge: Containerize and Automate",
  "ai-era": "Challenge: Build a Developer Prompt Library",
  career: "Challenge: Run Your First Informational Interview",
  "is-coding-for-me": "Challenge: Run, Change, Break, Fix",
  "programming-foundations-teen": "Challenge: Add One New Feature",
  "build-something-real": "Challenge: Build Your Personal Web Page",
  "git-working-with-others": "Challenge: Team Merge Mission",
  "ai-tools-for-students": "Challenge: Build With AI, Explain Without It",
};

for (const t of TRACKS) {
  const challengeTitle = CHALLENGE_TITLES[t.id];
  if (challengeTitle) {
    t.modules.push({
      id: "track-challenge",
      title: challengeTitle,
      type: "Challenge",
      minutes: 45,
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
export const getTracksByAudience = (audience: AudienceBand) =>
  TRACKS.filter((t) => t.audience === audience);

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
