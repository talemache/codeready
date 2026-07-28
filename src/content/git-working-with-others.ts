import type { TrackContent } from "@/lib/content-types";

export const gitWorkingWithOthers: TrackContent = {
  lessons: {
    "why-save-points-matter": {
      body: [
        "Think of Git like save points in a game. Before trying something risky, you save progress. If a change goes badly, you can return to a known working state instead of rebuilding from scratch. That safety makes experimentation much less scary.",
        "## Why teams rely on this",
        "In a shared project, save points are not only for you. They help everyone understand what changed and when. Each commit becomes a checkpoint that can be reviewed, discussed, or restored if needed.",
        "This mindset changes behavior: instead of delaying saves, you make small, clear checkpoints often. Small saves are easier to understand and safer to merge than giant mystery commits.",
        "Visible win: initialize a repo for a tiny file, make two small commits, and use history view to see both checkpoints. You just built your first timeline. Keep a screenshot or short note of what worked so you can show your progress and remind yourself that you can build, debug, and improve real code step by step.",
      ],
      takeaways: [
        "Git commits act like recoverable save points.",
        "Save points support both solo and team work.",
        "Frequent small commits reduce risk.",
        "History view makes project changes traceable.",
      ],
      resources: [
        { title: "Learn Git Branching", url: "https://learngitbranching.js.org/", note: "Interactive visual intro to core Git ideas." },
        { title: "GitHub Docs", url: "https://docs.github.com/", note: "Official beginner Git and GitHub guidance." },
        { title: "Code.org", url: "https://code.org/", note: "Accessible explanations of versioning concepts." },
      ],
      tryThis: "Create one text file, commit it, edit one line, and commit again so you can see two clear save points.",
    },
    "making-a-change-and-saving-it": {
      body: [
        "The basic Git loop is simple: edit, stage, commit. Staging lets you choose exactly what belongs in one save point. Committing records that staged change with a message you can understand later.",
        "## Keep each commit focused",
        "A strong beginner habit is one idea per commit: maybe fix a typo, add a heading, or change one style rule. Mixed commits are harder to review and harder to undo if needed.",
        "Commit messages should explain intent clearly, like `Add profile section heading` instead of `update` or `stuff`. Clear messages make your timeline useful for future-you and teammates.",
        "Visible win: make one clean change in your project, stage only that change, and commit with a clear message. Then show the commit in your history list. Keep a screenshot or short note of what worked so you can show your progress and remind yourself that you can build, debug, and improve real code step by step.",
      ],
      takeaways: [
        "Edit-stage-commit is the core Git workflow.",
        "One logical idea per commit keeps history clean.",
        "Clear commit messages improve collaboration.",
        "Selective staging gives you control over save points.",
      ],
      resources: [
        { title: "GitHub Docs", url: "https://docs.github.com/", note: "Step-by-step guides for add/commit basics." },
        { title: "Learn Git Branching", url: "https://learngitbranching.js.org/", note: "Practice the save loop safely." },
        { title: "W3Schools", url: "https://www.w3schools.com/git/", note: "Quick Git command reference." },
      ],
      tryThis: "Make one tiny project improvement and commit it with a message that explains exactly what changed.",
    },
    "working-on-the-same-project-as-a-friend": {
      body: [
        "Branches let two people work on the same project without stepping on each other. Each branch is like a separate workspace. You can build your part, your friend builds theirs, and both can be merged later.",
        "## Why branching helps",
        "Without branches, everyone edits the same line of history at once, which causes confusion fast. With branches, each person can test safely before sharing. That lowers pressure and improves code quality.",
        "A good branch name describes the work, like `add-header-style` or `fix-button-text`. Small focused branches are easier to review and merge than one branch containing everything.",
        "Visible win: create a branch, add one change, and open the project from that branch. You now have a safe personal workspace inside a shared repo. Keep a screenshot or short note of what worked so you can show your progress and remind yourself that you can build, debug, and improve real code step by step.",
      ],
      takeaways: [
        "Branches create safe parallel workspaces.",
        "Branching prevents teammates from overwriting each other.",
        "Small focused branches are easiest to merge.",
        "Clear branch names improve team clarity.",
      ],
      resources: [
        { title: "Learn Git Branching", url: "https://learngitbranching.js.org/", note: "Best visual branch practice for beginners." },
        { title: "GitHub Docs", url: "https://docs.github.com/", note: "Guides for branch creation and pull requests." },
        { title: "Code.org", url: "https://code.org/", note: "Beginner-friendly collaboration framing." },
      ],
      tryThis: "Create a new branch for one feature and keep all related edits inside it.",
    },
    "when-two-people-change-the-same-thing": {
      body: [
        "Conflicts happen when two branches edit the same part of a file. This is normal teamwork, not a disaster. Git stops and asks for help because it cannot decide the best final version on its own.",
        "## Calm conflict workflow",
        "Read both sides, understand what each change was trying to do, and write a combined version that keeps the right intent. Then remove conflict markers, save, and test before finishing the merge.",
        "If this feels fuzzy, that's normal—keep going. Conflict resolution gets easier fast after two or three real examples. The skill is mostly careful reading and communication, not advanced syntax.",
        "Visible win: create one intentional conflict in a practice repo, resolve it, and run the project successfully afterward. You just handled a real collaboration challenge. Keep a screenshot or short note of what worked so you can show your progress and remind yourself that you can build, debug, and improve real code step by step.",
      ],
      takeaways: [
        "Merge conflicts are normal in active teamwork.",
        "Read intent from both sides before deciding.",
        "Always test after resolving a conflict.",
        "Practice conflicts in safe repos to build confidence.",
      ],
      resources: [
        { title: "GitHub Docs", url: "https://docs.github.com/", note: "Step-by-step conflict resolution guides." },
        { title: "Learn Git Branching", url: "https://learngitbranching.js.org/", note: "Conflict scenarios in a safe sandbox." },
        { title: "W3Schools", url: "https://www.w3schools.com/git/", note: "Reference while resolving markers." },
      ],
      tryThis: "In a test repo, edit the same line on two branches, merge, resolve manually, and confirm the project still works.",
    },
    "showing-your-work": {
      body: [
        "A GitHub profile is a visible timeline of what you are building. It does not need huge projects to be useful. Small consistent commits already show persistence, growth, and real practice.",
        "## Make your work easy to understand",
        "Use clear repo names, short readme notes, and meaningful commit messages. A teacher, parent, or club mentor should be able to open your repo and understand what the project does in under a minute.",
        "You are not trying to look perfect. You are showing a learning journey with real artifacts. Bugs, fixes, and improvements are part of that story.",
        "Visible win: publish your project repo and show someone your commit history plus one feature you added. That's concrete proof of work you can point to. Keep a screenshot or short note of what worked so you can show your progress and remind yourself that you can build, debug, and improve real code step by step.",
      ],
      takeaways: [
        "GitHub profiles can show growth through small consistent work.",
        "Clear repo names and readmes make projects approachable.",
        "Commit history tells a real learning story.",
        "Visible artifacts build confidence and accountability.",
      ],
      resources: [
        { title: "GitHub Docs", url: "https://docs.github.com/", note: "Profile, repository, and README basics." },
        { title: "GitHub Pages Docs", url: "https://docs.github.com/en/pages", note: "Optional publishing path for project visibility." },
        { title: "Learn Git Branching", url: "https://learngitbranching.js.org/", note: "Reinforce branch and merge habits before sharing." },
      ],
      tryThis: "Add a short README to your project and include one sentence about what it does and one thing you plan to improve.",
    },
  },
  quiz: {
    id: "track-quiz",
    title: "Track 4 Quiz",
    questions: [
      {
        q: "What is the best beginner mental model for Git commits?",
        options: ["Temporary notes", "Video-game save points", "Chat messages", "Auto backups you cannot control"],
        answer: 1,
        explanation: "Save points capture working states you can revisit and compare.",
      },
      {
        q: "Why stage changes before committing?",
        options: ["To slow development", "To choose exactly what goes into a commit", "To hide errors", "To skip writing messages"],
        answer: 1,
        explanation: "Staging gives precise control over each commit's contents.",
      },
      {
        q: "What is the main purpose of a branch?",
        options: ["Delete old code", "Work in a safe parallel space", "Replace the main repo", "Avoid testing"],
        answer: 1,
        explanation: "Branches let people work independently before merging.",
      },
      {
        q: "What should you do first during a conflict?",
        options: ["Panic and reset", "Pick random lines", "Read both versions and intent", "Delete the whole file"],
        answer: 2,
        explanation: "Understanding both changes is required for a correct resolution.",
      },
      {
        q: "What makes a GitHub project easier for others to understand quickly?",
        options: ["Long random commits", "No README", "Clear naming and short project description", "Hidden code"],
        answer: 2,
        explanation: "Clear names and brief docs make your work accessible to others.",
      },
    ],
  },
  challenge: {
    id: "track-challenge",
    title: "Challenge: Team Merge Mission",
    brief: "Work with a sibling, friend, or club partner on one shared repo. Both people must create changes, use branches, and merge safely into one final version.",
    steps: [
      "Create a shared repository and decide one small project goal.",
      "Each person creates a separate branch for one feature.",
      "Both people commit at least one clear change with a useful message.",
      "Open or review each other's changes before merging.",
      "Resolve at least one simple conflict together if needed.",
      "Merge both branches and show the combined final project.",
    ],
  },
};
