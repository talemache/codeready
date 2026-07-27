import type { TrackContent } from "@/lib/content-types";

export const git: TrackContent = {
  lessons: {
    "git-fundamentals": {
      body: [
        "Most people learn Git as a list of commands to memorize. That's why it stays confusing forever. Learn the mental model instead, and the commands start making sense on their own.",
        "## Git stores snapshots, not diffs",
        "A lot of beginners assume Git tracks changes line by line, like a fancy version of 'track changes' in a word processor. It doesn't. Every time you commit, Git takes a full snapshot of every file in your project at that moment. If a file didn't change, Git just points to the previous identical version instead of storing it again — that's why commits are cheap even though they feel like 'whole project photos'. This mental model matters because it explains why checking out an old commit gives you the entire project as it was, not a patch applied on top of something else. Diffs are just a display trick Git computes between two snapshots when you ask `git diff` or `git log -p`. Internally, it's snapshots all the way down.",
        "## The staging area is your rough draft",
        "The staging area (also called the index) is the most misunderstood part of Git for newcomers coming from tools that just 'save'. When you run `git add`, you're not committing — you're building a draft of what the next commit will contain. This lets you make five different changes across three files, then decide to commit them as two separate, logical commits instead of one giant blob. Use `git add -p` to stage specific chunks of a file instead of the whole thing. This one habit alone will make your commit history dramatically more useful, because each commit tells one coherent story instead of 'various fixes'.",
        "## Commit hygiene is a gift to your future self",
        "A commit message like 'fix stuff' is useless six months from now when you're using `git blame` to figure out why a weird line of code exists. Write commit messages that explain *why*, not just *what* — the diff already shows what changed. A good format: a short summary line under 50 characters, a blank line, then a couple of sentences on the reasoning if it's not obvious. Keep commits small and focused on one logical change. If you find yourself writing 'and' in your commit message, it's probably two commits. This isn't busywork — it's documentation that costs you seconds now and saves someone (often you) real debugging time later.",
        "Once snapshots and staging click, everything else in Git — branches, merges, rebases — is just different ways of moving between and combining these snapshots. You've already learned the hard part.",
      ],
      takeaways: [
        "Git commits are full snapshots, not incremental diffs — diffs are just computed for display.",
        "The staging area lets you curate exactly what goes into your next commit.",
        "`git add -p` lets you stage part of a file, which enables cleaner, more logical commits.",
        "Write commit messages that explain why a change was made, not just what changed.",
        "Small, focused commits are easier to review, revert, and understand later.",
      ],
      resources: [
        { title: "Learn Git Branching (interactive)", url: "https://learngitbranching.js.org/", note: "Visual, hands-on way to build the right mental model fast." },
        { title: "Pro Git Book — Chapter 2: Git Basics", url: "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository", note: "Free, definitive reference on committing and the staging area." },
        { title: "GitHub Docs: About Commits", url: "https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits", note: "Short, practical overview from GitHub itself." },
        { title: "Oh Shit, Git!?!", url: "https://ohshitgit.com/", note: "Bookmark this now — you'll need it the first time you panic." },
      ],
      tryThis: "Make three separate changes in a test repo, then use `git add -p` to split them into three clean, well-described commits instead of one.",
    },

    "branching-merging": {
      body: [
        "Branches are Git's superpower: cheap, disposable, parallel lines of work. Used well, they let a whole team ship independently without stepping on each other. Used poorly, they turn into six-month-old zombies nobody wants to merge.",
        "## Keep feature branches short-lived",
        "A branch is meant to be a temporary workspace for one focused piece of work — a bug fix, a small feature, a refactor. The longer a branch lives, the more it drifts from the main branch, and the more painful the eventual merge becomes. Aim for branches that live hours or days, not weeks. If a feature is big, break it into smaller branches that can each be merged independently, even if the full feature isn't 'done' yet — hide unfinished work behind a feature flag if needed. Long-lived branches are usually a sign the work wasn't broken down enough, not that the feature was genuinely too big to split.",
        "## Merge vs rebase, in plain English",
        "A merge takes two branches and creates a new commit that ties their histories together — it's honest about the fact that work happened in parallel, but it can leave a messy, tangled log with lots of 'merge branch main into feature' commits. A rebase instead replays your branch's commits on top of the latest main, one by one, as if you'd started your work right now — the result is a clean, linear history, but it rewrites commit hashes, which is dangerous if anyone else is building on top of your branch. The practical rule: rebase your own local, unpushed work to keep it tidy before opening a PR; merge (via the PR itself) to bring finished work into main. Never rebase a branch other people are actively pulling from.",
        "## Fast-forwards and merge conflicts",
        "If main hasn't moved since you branched off, Git can 'fast-forward' — just slide the branch pointer forward, no real merge needed. If main has moved on, Git has to actually combine histories, and if the same lines were touched in both places, you get a conflict that a human has to resolve. Neither merging nor rebasing is inherently 'safer' regarding conflicts — you'll face the same content conflicts either way. The difference is purely about how the history looks afterward, and rebasing does it commit-by-commit, which can mean resolving the same conflict multiple times on a messy branch.",
      ],
      takeaways: [
        "Short-lived feature branches are easier to merge and review than long-lived ones.",
        "Merging preserves parallel history; rebasing rewrites it into a straight line.",
        "Only rebase branches that are still private to you — never rewrite shared history.",
        "A fast-forward merge is possible only if the target branch hasn't advanced since you branched.",
        "Breaking big features into smaller branches beats one giant branch every time.",
      ],
      resources: [
        { title: "Learn Git Branching — Merging & Rebasing levels", url: "https://learngitbranching.js.org/", note: "Play through the rebase levels until it clicks visually." },
        { title: "Pro Git Book — Branching Chapter", url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell", note: "The canonical explanation of how branches actually work." },
        { title: "GitHub Docs: About Merge Methods", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-merge-methods-on-github", note: "How GitHub's merge, squash, and rebase options differ in practice." },
        { title: "Oh Shit, Git!?! — undoing a bad rebase", url: "https://ohshitgit.com/", note: "For when a rebase goes sideways and you need to recover." },
      ],
      tryThis: "Create a branch, make two commits, then practice rebasing it onto a moved main branch in a throwaway repo before you ever do it on real work.",
    },

    "pull-requests-done-right": {
      body: [
        "A pull request isn't just a mechanism for merging code — it's a conversation. Great PRs make that conversation fast and pleasant; bad ones turn every review into an archaeology dig.",
        "## Small PRs get merged faster",
        "Reviewers can hold maybe 200-400 lines of meaningful change in their head at once. Beyond that, review quality drops fast — people start rubber-stamping instead of actually reading. A PR that does one thing well gets reviewed same-day; a PR that bundles a refactor, a feature, and a drive-by fix sits for a week because nobody wants to be the one to approve it. If you notice your PR touching unrelated files or doing two things at once, split it. Smaller PRs also mean smaller, easier-to-understand diffs if something needs to be reverted later.",
        "## Write descriptions that save the reviewer time",
        "A good PR description answers three questions before anyone asks them: what changed, why it changed, and how you verified it works. Link the ticket or issue. If the change is visual, add a screenshot or short screen recording — it will save five back-and-forth comments. Call out anything you're unsure about yourself ('not 100% sure this handles the empty-array case, wanted a second opinion'). This isn't just politeness — it directly shortens review time, because the reviewer isn't reverse-engineering your intent from a diff.",
        "## Responding to review comments like a professional",
        "Reviews aren't personal attacks on your code, even when a comment feels blunt. Read it as 'here's a risk or improvement,' not 'you did this wrong.' If you disagree, explain your reasoning instead of just pushing back — sometimes you're right and the reviewer learns something, sometimes they have context you don't. Resolve conversations only after you've actually addressed them, not just to clear the list. If a comment applies elsewhere in the codebase too, consider a quick follow-up PR rather than derailing the current one. And always thank people for catching real bugs — it reinforces that review is worth the time it takes.",
      ],
      takeaways: [
        "Keep PRs small and focused on one logical change — reviewers do better work on less.",
        "A great PR description covers what, why, and how it was tested.",
        "Screenshots or recordings dramatically speed up review of visual changes.",
        "Treat review comments as collaboration, not criticism — respond with reasoning, not defensiveness.",
        "Split unrelated fixes into their own PR instead of bundling them in.",
      ],
      resources: [
        { title: "GitHub Docs: About Pull Requests", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests", note: "The mechanics, straight from the source." },
        { title: "GitHub Docs: Best Practices for Reviewing PRs", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request", note: "Useful from both the author and reviewer side." },
        { title: "Pro Git Book — Contributing to a Project", url: "https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project", note: "Covers workflow patterns for proposing changes upstream." },
        { title: "Learn Git Branching (interactive)", url: "https://learngitbranching.js.org/", note: "Solidify the branch mechanics that PRs sit on top of." },
      ],
      tryThis: "Open a small real PR (even a docs typo fix) and write a description that answers what, why, and how it was tested before asking for review.",
    },

    "resolving-conflicts": {
      body: [
        "Merge conflicts feel scarier than they are. Git isn't broken and you didn't do anything wrong — it just genuinely can't decide which version of a line you want, so it's asking you.",
        "## Why conflicts actually happen",
        "A conflict happens when two branches change the same lines (or nearby lines) in a file, and Git can't automatically figure out which change should win. It's not about who's 'right' — it's simply that two people edited overlapping territory in parallel, which is normal and expected on any active codebase. The more people work in the same files, and the longer branches live before merging, the more conflicts you'll see. This is exactly why short-lived branches and small PRs matter: less overlap means fewer conflicts, and the ones you do get are smaller and easier to reason about.",
        "## Resolving conflicts calmly",
        "When Git flags a conflict, it marks the file with `<<<<<<<`, `=======`, and `>>>>>>>` markers showing both versions. Don't panic-delete things. Read both sides, understand what each one was trying to accomplish, and write the version that keeps both intents where possible — sometimes that means taking one side entirely, sometimes it means combining them by hand. Use your editor's merge conflict UI if it has one; it visually separates 'yours' from 'theirs' and speeds this up a lot. After editing, remove the conflict markers completely, stage the file, and continue the merge or rebase. Always re-run tests after resolving — a conflict resolution that compiles can still be logically wrong.",
        "## When to ask for help",
        "If you're resolving a conflict in code you didn't write and don't fully understand, that's exactly the moment to ping the other author instead of guessing. There's no shame in it — guessing wrong in a conflict resolution is how silent bugs get merged straight into main. A two-minute Slack message ('hey, we both touched the pricing function, want to hop on a call to merge this?') is always cheaper than debugging a subtly wrong resolution in production later. If a rebase conflict gets messy across many commits, it's also fine to bail out with `git rebase --abort` and try a plain merge instead — there's no trophy for doing it the hard way.",
      ],
      takeaways: [
        "Conflicts happen because two branches touched overlapping lines — it's normal, not a mistake.",
        "Short-lived branches and small PRs reduce both the frequency and size of conflicts.",
        "Read both sides of a conflict fully before resolving — don't guess.",
        "Always re-run tests after resolving a conflict, since a compiling resolution can still be wrong.",
        "Ask the other author for help when a conflict touches code you don't understand.",
      ],
      resources: [
        { title: "GitHub Docs: Resolving a Merge Conflict on GitHub", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github", note: "Step-by-step for conflicts in the PR UI." },
        { title: "GitHub Docs: Resolving a Merge Conflict Using the Command Line", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line", note: "For when you need to fix it locally." },
        { title: "Oh Shit, Git!?!", url: "https://ohshitgit.com/", note: "Covers aborting bad merges and rebases when things get messy." },
        { title: "Learn Git Branching (interactive)", url: "https://learngitbranching.js.org/", note: "Practice conflict scenarios in a safe sandbox." },
      ],
      tryThis: "Deliberately create a conflict (edit the same line on two branches), resolve it by hand, then run `git rebase --abort` once just to see the escape hatch works.",
    },

    "working-on-a-team-codebase": {
      body: [
        "Working solo, Git is a safety net. Working on a team, Git is the shared language everyone uses to coordinate — and the habits that felt optional solo become non-negotiable.",
        "## Trunk-based vs gitflow, at a high level",
        "Gitflow uses long-lived branches (develop, release, hotfix) with a formal process for promoting code toward production — it can suit teams doing scheduled releases with heavy QA gates. Trunk-based development instead keeps everyone merging small, frequent changes directly into a single main branch, often behind feature flags, and deploying continuously. Most modern, fast-moving teams lean trunk-based because it minimizes the painful long-branch merges gitflow is prone to. You don't need to memorize either as dogma — just recognize which one a team you join is using, because it changes where you branch from and when you're expected to merge.",
        "## Commit messages as documentation",
        "On a team, your commit history is a searchable record of every decision made in the codebase. `git blame` and `git log` are how people answer 'why does this weird line exist?' six months from now, often after the original author has moved to a different team or company entirely. A commit message like 'handle null case for legacy API clients (see INC-4521)' is worth more than any comment left in the code, because it captures the reasoning and links to context that the code itself can't hold. Treat every commit message as if a confused future teammate is reading it at 2am during an incident — because eventually, one will.",
        "## Never force-push a shared branch",
        "Force-pushing rewrites history and can silently delete other people's commits from a branch if you're not careful. On your own private branch, that's fine. On main, or any branch other people are pulling from, it's one of the most disruptive things you can do — teammates' local histories diverge from the remote, their next pull gets tangled, and someone's work can genuinely vanish. If you must clean up a shared branch's history, coordinate with everyone on it first, and prefer `--force-with-lease` over plain `--force` since it at least refuses to overwrite commits you haven't seen yet. When in doubt, don't force-push — open a new branch instead.",
      ],
      takeaways: [
        "Trunk-based development favors small, frequent merges into main; gitflow uses longer-lived release branches.",
        "Commit messages are long-term documentation, not just labels for a diff.",
        "Never force-push a branch that other people are pulling from.",
        "`--force-with-lease` is safer than `--force` because it won't silently overwrite unseen commits.",
        "Knowing which branching model your team uses tells you where to branch from and when to merge.",
      ],
      resources: [
        { title: "GitHub Docs: GitHub Flow", url: "https://docs.github.com/en/get-started/using-github/github-flow", note: "A simple, widely-used trunk-based-style workflow." },
        { title: "Pro Git Book — Distributed Workflows", url: "https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows", note: "Covers different collaboration models teams actually use." },
        { title: "Oh Shit, Git!?! — force-push recovery", url: "https://ohshitgit.com/", note: "For when a force-push goes wrong and you need to recover a teammate's work." },
        { title: "GitHub Docs: About Protected Branches", url: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches", note: "How teams actually prevent accidental force-pushes to main." },
      ],
      tryThis: "Look at the last 10 commit messages in a real project (yours or open source) and rewrite the three worst ones as if you were explaining them to a confused teammate.",
    },
  },

  quiz: {
    id: "track-quiz",
    title: "Track 3 Quiz",
    questions: [
      {
        q: "What does a Git commit actually store?",
        options: [
          "A diff against the previous commit",
          "A full snapshot of the tracked files at that point in time",
          "Only the files that changed, as raw text patches",
          "A pointer to the last commit with no new data",
        ],
        answer: 1,
        explanation: "Git stores full snapshots each commit, reusing unchanged files internally — diffs are just computed for display.",
      },
      {
        q: "What is the main practical difference between merging and rebasing a branch?",
        options: [
          "Merging is always unsafe; rebasing is always safe",
          "Rebasing preserves parallel history; merging rewrites it",
          "Merging creates a commit tying histories together; rebasing replays commits for a linear history",
          "There is no real difference between them",
        ],
        answer: 2,
        explanation: "Merge keeps a record of parallel work with a merge commit; rebase rewrites your commits on top of the latest target branch for a clean, linear log.",
      },
      {
        q: "Why do smaller pull requests generally get reviewed and merged faster?",
        options: [
          "GitHub automatically prioritizes small PRs",
          "Reviewers can meaningfully evaluate a limited amount of change at once",
          "Small PRs never contain bugs",
          "They don't require a description",
        ],
        answer: 1,
        explanation: "Review quality drops sharply past a certain size, so smaller, focused PRs get faster and more thorough feedback.",
      },
      {
        q: "What's the safest response when you hit a merge conflict in code you don't fully understand?",
        options: [
          "Delete the conflicting lines and move on",
          "Pick either side at random since Git will catch mistakes later",
          "Ask the other author for context before resolving it",
          "Force-push over the conflict to make it disappear",
        ],
        answer: 2,
        explanation: "Guessing on unfamiliar code risks silently merging a wrong resolution; asking the original author is quick and far safer.",
      },
      {
        q: "Why is force-pushing to a shared branch risky?",
        options: [
          "It can silently overwrite or remove teammates' commits on that branch",
          "It makes the repository larger",
          "It automatically deletes the branch",
          "It only works on private repositories",
        ],
        answer: 0,
        explanation: "Force-pushing rewrites history; on a shared branch it can strip out commits other people have already built on top of.",
      },
    ],
  },

  challenge: {
    id: "track-challenge",
    title: "Challenge: Fork, Branch, Pull Request",
    brief: "Practice the full collaboration workflow end to end by contributing a small, real change to a public repository: fork it, work on a branch, and open a pull request with a description good enough that a stranger could review it without asking you a single question.",
    steps: [
      "Find a public repository with an easy first contribution (a typo, a small docs fix, or a 'good first issue' label).",
      "Fork the repository to your own GitHub account.",
      "Clone your fork locally and create a new, descriptively named branch for your change.",
      "Make a small, focused change and commit it with a clear message explaining what and why.",
      "Push your branch to your fork on GitHub.",
      "Open a pull request against the original repository with a description covering what changed, why, and how you verified it.",
      "Respond to any review feedback you receive, or if none comes, review your own PR description as if you were a stranger seeing it cold.",
    ],
  },
};
