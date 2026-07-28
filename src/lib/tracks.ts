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
  parentSummary: string;
  icon: string; // doodle svg id
  modules: Module[];
};

const mk = (
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
    id: "is-coding-for-me",
    number: 1,
    name: "Is Coding For Me?",
    tagline: "Start curious, not stressed.",
    description: "A friendly first step that shows what coding really feels like.",
    parentSummary:
      "Teens learn what coding work actually looks like day to day and why mistakes are normal. They finish with three tiny programs they can run, break, and fix on purpose.",
    icon: "book",
    modules: [
      mk("What Coders Actually Do All Day"),
      mk("You Don't Need to Be a Math Person"),
      mk("Your First Program"),
      mk("Mistakes Are Part of the Job"),
      mk("Finding Your Kind of Coding"),
    ],
  },
  {
    id: "programming-foundations-teen",
    number: 2,
    name: "Programming Foundations (Teen Edition)",
    tagline: "Build smart habits early.",
    description: "Core coding habits taught with short lessons and practical wins.",
    parentSummary:
      "Teens practice naming, problem breakdown, testing, and calm debugging habits. They improve an existing program by adding a real new feature.",
    icon: "tree",
    modules: [
      mk("Naming Things Well"),
      mk("Breaking Big Problems Into Small Ones"),
      mk("Reading Error Messages Without Panicking"),
      mk("Testing Your Own Work"),
      mk("Sharing Code Kindly"),
    ],
  },
  {
    id: "build-something-real",
    number: 3,
    name: "Build Something Real",
    tagline: "One project, start to finish.",
    description: "Turn an idea into a personal web page with HTML, CSS, and JavaScript.",
    parentSummary:
      "Teens build a complete personal web page and customize it around their own interests. They learn the web stack in simple steps and end with something concrete to show.",
    icon: "hammer",
    modules: [
      mk("How Websites Actually Work"),
      mk("HTML: The Skeleton"),
      mk("CSS: Making It Yours"),
      mk("A Little Bit of Interactivity"),
      mk("Show It Off"),
    ],
  },
  {
    id: "git-working-with-others",
    number: 4,
    name: "Git & Working With Others",
    tagline: "Save points for code.",
    description: "Learn Git basics and collaborate on a shared project without chaos.",
    parentSummary:
      "Teens learn to save, branch, and merge code changes the same way real teams do. They complete a shared mini-project with another person and combine both sets of edits.",
    icon: "branch",
    modules: [
      mk("Why Save Points Matter"),
      mk("Making a Change and Saving It"),
      mk("Working on the Same Project as a Friend"),
      mk("When Two People Change the Same Thing"),
      mk("Showing Your Work"),
    ],
  },
  {
    id: "ai-tools-for-students",
    number: 5,
    name: "AI Tools for Students",
    tagline: "Use AI to learn, not to skip thinking.",
    description: "Learn to use AI coding tools responsibly with skepticism and clear prompts.",
    parentSummary:
      "Teens learn to treat AI as a helper, not a shortcut, and to verify every output. They build one AI-assisted feature and explain the final code in their own words.",
    icon: "spark",
    modules: [
      mk("What AI Coding Tools Actually Do"),
      mk("Using AI Without Losing the Learning"),
      mk("AI Gets Things Wrong Sometimes"),
      mk("Asking Better Questions"),
      mk("Using AI to Learn a New Topic Fast"),
    ],
  },
];

const CHALLENGE_TITLES: Record<string, string> = {
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
