import type { TrackContent } from "@/lib/content-types";

export const programmingFoundationsTeen: TrackContent = {
  lessons: {
    "naming-things-well": {
      body: [
        "Good names make code easier to understand before anyone reads a full line. Compare `x` to `playerScore`. One is a mystery; one explains itself. Naming is not decoration. It is communication with your future self and anyone else who reads your file.",
        "## Before and after",
        "A line like `x = x + 1` could mean anything. `playerScore = playerScore + 1` instantly shows intent. Clear names reduce mistakes because your brain spends less effort decoding what each variable means.",
        "Strong naming also helps when debugging. If an error says `playerScore` is undefined, you already know the problem area. If it says `x` is undefined, you still have to guess context. Clarity saves time in every stage of coding.",
        "Visible win: rename three vague variables in an old file and read the code again. It should feel easier to follow immediately. That feeling is real progress. Keep a screenshot or short note of what worked so you can show your progress and remind yourself that you can build, debug, and improve real code step by step.",
      ],
      takeaways: [
        "Names are part of code quality, not a cosmetic choice.",
        "Specific names reduce confusion and bugs.",
        "Readable code speeds up debugging.",
        "A small rename can create a big clarity win.",
      ],
      resources: [
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/", note: "Clear examples with readable naming patterns." },
        { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", note: "Practice exercises where naming affects understanding." },
        { title: "W3Schools", url: "https://www.w3schools.com/", note: "Simple references for quick syntax checks." },
      ],
      tryThis: "Find three variable names like `x`, `data`, or `temp` and rename them so someone else could guess their purpose instantly.",
    },
    "breaking-big-problems-into-small-ones": {
      body: [
        "Programming is mostly decomposition: turning one big idea into small actions you can test. Think about planning a trip. You do not solve everything at once. You pick destination, dates, budget, transport, and packing as separate mini-decisions.",
        "## Use the same approach in code",
        "Suppose you want a homework reminder app. Break it into pieces: add a reminder, store a due date, show upcoming tasks, mark one done. Each piece can be built and checked on its own. That makes progress visible and less overwhelming.",
        "When you feel stuck, the task is usually still too big. Ask: what is the smallest useful thing I can build in 15 minutes? Tiny finished pieces create momentum and expose problems early, before you are buried in complexity.",
        "Visible win: write a four-step breakdown for one project idea and complete step one today. You are now building like a real engineer: small chunks, clear sequence, steady progress. Keep a screenshot or short note of what worked so you can show your progress and remind yourself that you can build, debug, and improve real code step by step.",
      ],
      takeaways: [
        "Large projects become manageable when split into small tasks.",
        "Each small task should be testable by itself.",
        "Feeling stuck usually means the step is still too large.",
        "Small completed chunks build momentum.",
      ],
      resources: [
        { title: "Code.org", url: "https://code.org/", note: "Stepwise project flows that model decomposition." },
        { title: "MIT App Inventor", url: "https://appinventor.mit.edu/", note: "Great for breaking app features into blocks." },
        { title: "Khan Academy CS", url: "https://www.khanacademy.org/computing/computer-programming", note: "Short projects you can split into mini-goals." },
      ],
      tryThis: "Pick one project idea and write the smallest first feature you can build in one sitting, then build only that part.",
    },
    "reading-error-messages-without-panicking": {
      body: [
        "Error messages look scary until you treat them like clues. You do not need to understand every word. Start with three basics: where it happened, what kind of issue it is, and what line to inspect first.",
        "## Translate to plain English",
        "If you see something like `Unexpected token on line 12`, translate it to: 'I typed something invalid near line 12.' Then open that area, compare with nearby working lines, and check punctuation or spelling.",
        "Keep your process calm: read, change one thing, rerun. If the message changes, you learned something. If it does not, try the next likely fix. This method works better than random edits that create new problems.",
        "If this feels fuzzy, that's normal—keep going. Nobody is born fluent in errors. Fluency comes from repetition. Visible win: fix one error today using a written three-step process and keep that process as your debugging card. Keep a screenshot or short note of what worked so you can show your progress and remind yourself that you can build, debug, and improve real code step by step.",
      ],
      takeaways: [
        "Errors are clues, not proof you are failing.",
        "Translate technical text into plain English first.",
        "Change one thing at a time when testing fixes.",
        "A repeatable process beats panic.",
      ],
      resources: [
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/", note: "Reference pages for common browser errors." },
        { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", note: "Frequent small debugging opportunities." },
        { title: "W3Schools", url: "https://www.w3schools.com/", note: "Quick syntax examples to compare against." },
      ],
      tryThis: "Write your own 'error translation' for the next message you see before changing any code.",
    },
    "testing-your-own-work": {
      body: [
        "Testing means checking your code on purpose before someone else finds the bug for you. Many beginners only test the happy path. Real confidence comes from trying weird inputs and edge cases too.",
        "## Think like a curious saboteur",
        "Ask: what if this field is blank, too long, negative, or misspelled? What if a button gets clicked twice? Simple checks catch many common bugs and make your code feel more reliable right away.",
        "You do not need fancy tooling to start. Make a tiny checklist beside your program and run through it every time you change behavior. Over time, this habit becomes automatic and saves huge debugging time later.",
        "Visible win: create a five-case manual test list for one small program and run all five cases. Seeing all checks pass is a real engineering moment. Keep a screenshot or short note of what worked so you can show your progress and remind yourself that you can build, debug, and improve real code step by step.",
      ],
      takeaways: [
        "Testing is a habit, not a final step.",
        "Edge cases reveal bugs the happy path misses.",
        "Manual test checklists are great for beginners.",
        "Reliable code comes from intentional verification.",
      ],
      resources: [
        { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", note: "Exercises where rerunning with new inputs is easy." },
        { title: "Code.org", url: "https://code.org/", note: "Beginner projects with clear expected behavior." },
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/", note: "Behavior details useful when checking edge cases." },
      ],
      tryThis: "Write and run five test cases for one tiny program, including at least two weird inputs.",
    },
    "sharing-code-kindly": {
      body: [
        "Code review is not a fight. It is a way to make ideas stronger together. When you ask for help, give context: what you were trying to do, what you expected, and what happened instead. Clear context helps others help you faster.",
        "## Give feedback on code, not people",
        "Say 'This variable name is unclear' instead of 'You wrote this badly.' Point to one line, explain one concern, and suggest one improvement. Kind, specific feedback is more useful than vague criticism.",
        "When receiving feedback, pause before reacting. Questions are normal. You can ask, 'Can you show an example?' or 'Would this alternative also work?' That turns review into collaboration, not conflict.",
        "Visible win: swap one file with a friend, leave two specific helpful comments each, and both apply one improvement. You just practiced a real team skill. Keep a screenshot or short note of what worked so you can show your progress and remind yourself that you can build, debug, and improve real code step by step.",
      ],
      takeaways: [
        "Good help requests include context and expected behavior.",
        "Feedback should target code decisions, not personal traits.",
        "Specific comments are kinder and more useful than vague ones.",
        "Questions keep reviews collaborative.",
      ],
      resources: [
        { title: "GitHub Docs", url: "https://docs.github.com/", note: "Simple guides for commenting on code and pull requests." },
        { title: "Code.org", url: "https://code.org/", note: "Collaborative classroom coding patterns." },
        { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", note: "Examples of constructive code discussions in learning content." },
      ],
      tryThis: "Ask one friend for feedback on a short file and respond by improving one thing they pointed out.",
    },
  },
  quiz: {
    id: "track-quiz",
    title: "Track 2 Quiz",
    questions: [
      {
        q: "Why is `playerScore` usually better than `x`?",
        options: ["It compiles faster", "It uses less memory", "It explains meaning clearly", "It is required by JavaScript"],
        answer: 2,
        explanation: "Specific names make code easier to understand and debug.",
      },
      {
        q: "What should you do when a task feels too hard to start?",
        options: ["Quit the project", "Split it into smaller parts", "Add more features", "Rewrite everything"],
        answer: 1,
        explanation: "Breaking work into smaller steps makes progress manageable.",
      },
      {
        q: "What is a good first move when an error appears?",
        options: ["Delete the file", "Ignore it", "Translate the message into plain English", "Install a new framework"],
        answer: 2,
        explanation: "Plain-language translation helps you target the actual issue.",
      },
      {
        q: "Why test weird inputs?",
        options: ["To waste time", "To make code look longer", "To catch hidden bugs", "To avoid writing code"],
        answer: 2,
        explanation: "Edge cases often expose problems the happy path hides.",
      },
      {
        q: "Which feedback style is best in code review?",
        options: ["Vague and blunt", "Personal criticism", "Specific and respectful", "Silent approval only"],
        answer: 2,
        explanation: "Specific, respectful feedback helps people improve without conflict.",
      },
    ],
  },
  challenge: {
    id: "track-challenge",
    title: "Challenge: Add One New Feature",
    brief: "Take a working program from Track 1 and improve it with one real feature while using clean names, small-step planning, and a simple test checklist.",
    steps: [
      "Choose one Track 1 program that already runs.",
      "Rename unclear variables before adding anything new.",
      "Write a short four-step plan for your feature.",
      "Build the feature in small pieces and run after each piece.",
      "Use a five-case test checklist including one edge case.",
      "Share your updated version and explain one review comment you used.",
    ],
  },
};
