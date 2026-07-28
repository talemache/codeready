import type { TrackContent } from "@/lib/content-types";

export const isCodingForMe: TrackContent = {
  lessons: {
    "what-coders-actually-do-all-day": {
      body: [
        "If coding looks like fast typing by a genius in a dark room, you're seeing a movie version, not real life. Real coding is slower and more human. People read code, test ideas, ask questions, and fix tiny mistakes one step at a time.",
        "## What the day really looks like",
        "A normal coding session is usually: read a problem, try a small change, run it, inspect what happened, then adjust. Most time is spent thinking and checking, not blasting out new lines. Even experienced developers search docs and reread their own code constantly.",
        "You also work with people. You explain your idea, get feedback, and improve it. Coding is part puzzle, part teamwork, and part patience. If this feels less dramatic than social media clips, good. Real progress is usually quiet and steady.",
        "Visible win: watch one short coding video, pause at each step, and write down every non-typing action you notice. You'll see that coding is mostly testing and decision-making, and that's exactly the skill you can practice right now. Keep a screenshot or short note of what worked so you can show your progress and remind yourself that you can build, debug, and improve real code step by step.",
      ],
      takeaways: [
        "Coding is mostly reading, testing, and fixing, not fast typing.",
        "Small experiments beat giant guesses.",
        "Asking for feedback is normal, not a sign of weakness.",
        "Steady progress matters more than looking impressive.",
      ],
      resources: [
        { title: "Code.org", url: "https://code.org/", note: "Teen-friendly intro activities with clear structure." },
        { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", note: "Guided lessons you can do in the browser." },
        { title: "Khan Academy CS", url: "https://www.khanacademy.org/computing/computer-programming", note: "Short beginner lessons with built-in practice." },
      ],
      tryThis: "Open a beginner coding lesson and finish one tiny exercise today, then tell someone exactly what you changed.",
    },
    "you-dont-need-to-be-a-math-person": {
      body: [
        "A lot of students think coding is only for 'math people.' That myth blocks good learners before they even start. Most beginner coding uses simple arithmetic and logic, not advanced formulas. The main skill is breaking a problem into clear steps.",
        "## The real skill",
        "When you code, you ask: what input do I get, what should happen next, and what output do I want? That is structured thinking. If you can explain directions to a friend or follow a recipe, you already use the same mindset.",
        "Some coding paths use heavier math later, but lots of useful projects do not. Websites, small apps, and automations depend more on naming, testing, and careful reading than calculus. You can get very far before math is ever the hard part.",
        "Visible win: write a three-step plan for a daily task, then turn that plan into a tiny program comment block. You just practiced algorithm thinking, which is a core coding skill and has nothing to do with being a 'genius math person.' Keep a screenshot or short note of what worked so you can show your progress and remind yourself that you can build, debug, and improve real code step by step.",
      ],
      takeaways: [
        "Most beginner coding uses logic and structure more than advanced math.",
        "Problem breakdown is the key skill.",
        "Clear steps are a form of algorithm thinking.",
        "You can build real things without being a 'math genius.'",
      ],
      resources: [
        { title: "Code.org", url: "https://code.org/", note: "Beginner pathways that focus on logic first." },
        { title: "Scratch", url: "https://scratch.mit.edu/", note: "Visual blocks make logic patterns obvious." },
        { title: "MIT App Inventor", url: "https://appinventor.mit.edu/", note: "Build mobile app logic with simple building blocks." },
      ],
      tryThis: "List the exact steps to make a sandwich, then translate them into if/then style rules on paper.",
    },
    "your-first-program": {
      body: [
        "Your first program should be tiny on purpose. Open an in-browser editor and run one line that prints a message like 'Hello from me.' Then add a simple calculation like 7 + 5. That moment matters: you gave clear instructions and the computer followed them.",
        "## Keep the first win small",
        "Beginners often jump to big ideas too early, then feel stuck. Start with tiny code you fully understand. Change one thing, run again, and watch the output change. That loop builds confidence faster than watching long tutorials.",
        "Try a few edits: change the message, change the numbers, add one more line. Each run teaches cause and effect. If it breaks, good—you've found a chance to learn debugging in a safe way while the stakes are tiny.",
        "Visible win: save screenshots of three runs—original output, your edited output, and one fixed error. That's proof you can create behavior, change behavior, and recover from mistakes. Keep a screenshot or short note of what worked so you can show your progress and remind yourself that you can build, debug, and improve real code step by step.",
      ],
      takeaways: [
        "Tiny first programs are a strength, not a weakness.",
        "Run-edit-run builds understanding quickly.",
        "Changing output on purpose teaches control.",
        "A fixed error is progress, not failure.",
      ],
      resources: [
        { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", note: "In-browser coding tasks with instant feedback." },
        { title: "Code.org", url: "https://code.org/", note: "Simple beginner exercises that run instantly." },
        { title: "W3Schools", url: "https://www.w3schools.com/", note: "Try-it editors for quick experiments." },
      ],
      tryThis: "Run one program, change one line, run it again, and save both outputs as your first before/after proof.",
    },
    "mistakes-are-part-of-the-job": {
      body: [
        "Every programmer breaks code daily. That is not a secret failure; it is normal workflow. Error messages are not insults. They are the computer's way of saying, 'I can't do this yet, and here's where to look first.'",
        "## Reframe the moment",
        "When you hit an error, pause and read it out loud. Find the file name, line number, and main clue word. Change one thing, rerun, and check if the message changed. You are running an experiment, not proving your worth.",
        "Confusion is part of learning any technical skill. If this feels fuzzy, that's normal—keep going. Most learners quit right before understanding clicks. Staying calm for five extra minutes often solves more than starting over from scratch.",
        "Visible win: break a working line on purpose, trigger one error, then fix it. You just practiced the exact recovery loop professionals use all the time. Keep a screenshot or short note of what worked so you can show your progress and remind yourself that you can build, debug, and improve real code step by step.",
      ],
      takeaways: [
        "Errors are signals, not judgments.",
        "Read clues: file, line, and message keyword.",
        "Change one thing at a time when debugging.",
        "Confusion is normal and temporary.",
      ],
      resources: [
        { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", note: "Great for seeing many small errors safely." },
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/", note: "Clear references for common web errors." },
        { title: "Khan Academy CS", url: "https://www.khanacademy.org/computing/computer-programming", note: "Guided exercises with immediate hints." },
      ],
      tryThis: "Take a tiny program that works, break one character on purpose, read the error, and fix it without deleting everything.",
    },
    "finding-your-kind-of-coding": {
      body: [
        "Coding is not one single activity. Some people build games, others build websites, tools, art, robots, or helpful school projects. If one style feels boring, that does not mean coding is wrong for you. It may mean you have not found your lane yet.",
        "## Sample, then choose",
        "Try short previews across different project types: one game demo, one web page, one small app idea, one creative coding sketch. Notice what makes you curious enough to keep going when something gets hard. Curiosity is the best fuel.",
        "Once you notice a pattern, pick one direction for a month. Going slightly deeper in one area teaches more than hopping topics every day. You can always switch later with better foundations and more confidence.",
        "Visible win: make a simple list called 'My coding interests' with your top two project types and one first mini-project for each. That's your personal map, not someone else's path. Keep a screenshot or short note of what worked so you can show your progress and remind yourself that you can build, debug, and improve real code step by step.",
      ],
      takeaways: [
        "Coding includes many creative and technical paths.",
        "Disliking one format does not mean you can't code.",
        "Curiosity helps you persist through bugs.",
        "A short personal plan turns interest into action.",
      ],
      resources: [
        { title: "Code.org", url: "https://code.org/", note: "Try different project styles in one safe place." },
        { title: "MIT App Inventor", url: "https://appinventor.mit.edu/", note: "Good for mobile-app curiosity." },
        { title: "Scratch", url: "https://scratch.mit.edu/", note: "Fast game and animation experiments." },
      ],
      tryThis: "Choose one coding direction you care about and write down the first tiny project you can finish this week.",
    },
  },
  quiz: {
    id: "track-quiz",
    title: "Track 1 Quiz",
    questions: [
      {
        q: "What do coders spend most of their time doing?",
        options: ["Typing very fast", "Reading, testing, and fixing", "Memorizing formulas", "Designing logos"],
        answer: 1,
        explanation: "Most coding time is spent understanding code, running tests, and making small fixes.",
      },
      {
        q: "Which skill matters most in beginner coding?",
        options: ["Advanced calculus", "Perfect memory", "Breaking problems into steps", "Owning expensive tools"],
        answer: 2,
        explanation: "Structured step-by-step thinking is the core beginner skill.",
      },
      {
        q: "Why start with tiny programs?",
        options: ["Big projects are impossible", "Tiny loops build confidence and understanding", "Editors only allow short code", "It avoids all bugs forever"],
        answer: 1,
        explanation: "Small programs let you see cause and effect quickly and learn faster.",
      },
      {
        q: "How should you view error messages?",
        options: ["Proof you failed", "Warnings to ignore", "Clues about what to fix", "A reason to restart everything"],
        answer: 2,
        explanation: "Error messages provide location and context to guide your next fix.",
      },
      {
        q: "If one coding topic feels boring, what does that usually mean?",
        options: ["You should quit coding", "You are bad at tech", "You may need a different project type", "You must do more math"],
        answer: 2,
        explanation: "Coding has many paths, so switching project style can reveal a better fit.",
      },
    ],
  },
  challenge: {
    id: "track-challenge",
    title: "Challenge: Run, Change, Break, Fix",
    brief: "Use one beginner program and complete the full confidence loop: run it, modify it, break it on purpose, and recover it. Keep proof of each step so you can point to what you built.",
    steps: [
      "Run one starter program and capture the original output.",
      "Change the printed message and run again.",
      "Change one number in a calculation and verify the new result.",
      "Break one line on purpose to trigger an error.",
      "Read the error, fix it, and rerun successfully.",
      "Share your three screenshots with a parent, teacher, or friend.",
    ],
  },
};
