import type { TrackContent } from "@/lib/content-types";

export const aiToolsForStudents: TrackContent = {
  lessons: {
    "what-ai-coding-tools-actually-do": {
      body: [
        "AI coding tools do not think like humans. They generate likely next code based on patterns they learned. That means they can be very helpful for drafts and explanations, but they can also sound confident while being wrong.",
        "## Useful mental model",
        "Treat AI like a fast assistant that suggests ideas. You still decide goals, check output, and own final code. If you ask for a small clear task, results are usually better than asking for an entire project in one shot.",
        "AI is great for brainstorming names, explaining errors, and generating starter code you can inspect. It is weaker at understanding your exact project context unless you provide clear details and constraints.",
        "Visible win: Ask an AI tool to explain one line from your own project, then rewrite that explanation in your words.",
      ],
      takeaways: [
        "AI predicts plausible code, not guaranteed-correct code.",
        "You remain responsible for decisions and verification.",
        "Small scoped prompts produce better results.",
        "Re-explaining output in your own words confirms learning.",
      ],
      resources: [
        { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", note: "Practice coding fundamentals alongside AI help." },
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/", note: "Trusted reference to verify AI-generated web code." },
        { title: "Khan Academy CS", url: "https://www.khanacademy.org/computing/computer-programming", note: "Concept learning that supports independent thinking." },
      ],
      tryThis: "Use AI to explain a short function, then close the tool and explain the same function out loud from memory.",
    },
    "using-ai-without-losing-the-learning": {
      body: [
        "The rule for students is simple: try first, then ask AI. If AI does everything before you think, your short-term speed goes up but your real skill growth slows down.",
        "## Good use vs bad use",
        "Good use: 'I wrote this loop, can you explain why line 3 fails?' Bad use: 'Do my whole assignment.' Good use keeps you in control and turns AI into a tutor. Bad use hides gaps until quizzes or projects expose them.",
        "A practical habit is 'type first draft yourself.' Even if imperfect, it gives you context. Then ask AI for feedback, edge cases, or a clearer explanation. This keeps your brain in the driver's seat.",
        "Visible win: Solve one small problem manually, then use AI only to review your solution and suggest one improvement.",
      ],
      takeaways: [
        "Attempt first, then use AI for support.",
        "AI as tutor is better than AI as answer machine.",
        "Typing your own first draft protects learning.",
        "Review-focused prompts build understanding.",
      ],
      resources: [
        { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", note: "Strong practice base so AI does not replace fundamentals." },
        { title: "Code.org", url: "https://code.org/", note: "Guided exercises to attempt before asking AI." },
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/", note: "Fact-check source after AI suggestions." },
      ],
      tryThis: "For your next task, write code first without AI for 10 minutes, then ask AI to review and explain one improvement.",
    },
    "ai-gets-things-wrong-sometimes": {
      body: [
        "AI can return code that looks clean but contains subtle bugs. Maybe it misses an edge case, uses a wrong API name, or handles only the happy path. That is why healthy skepticism is a core skill.",
        "## How to catch mistakes",
        "Test with unusual inputs: empty values, negative numbers, very long text, or repeated clicks. Then compare function names and syntax with official docs. If the tool invented something, docs will expose it quickly.",
        "When a bug appears, do not just ask AI for another full rewrite. Ask narrower questions: 'What fails when input is empty?' or 'Why is this condition wrong?' Focused debugging teaches much more than endless regeneration.",
        "Visible win: Take one AI-generated snippet, find one bug or weakness, and fix it yourself.",
      ],
      takeaways: [
        "Polished AI output can still be incorrect.",
        "Edge-case testing is essential for AI-generated code.",
        "Official docs are the best way to verify APIs.",
        "Focused debugging questions improve learning.",
      ],
      resources: [
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/", note: "Reliable source for checking JavaScript behavior." },
        { title: "W3Schools", url: "https://www.w3schools.com/", note: "Quick examples for comparison during checks." },
        { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", note: "Extra practice with debugging and validation." },
      ],
      tryThis: "Ask AI for a short function, test it with three edge cases, and fix one issue you discover.",
    },
    "asking-better-questions": {
      body: [
        "Better questions produce better answers. Vague prompts force AI to guess your goals, which often leads to generic or mismatched code. Specific prompts reduce guessing and improve quality fast consistently.",
        "## What to include",
        "Say your language, your exact goal, and constraints. Example structure: 'Use JavaScript. Keep it beginner-friendly. No extra libraries. I want a button click to change heading text.' This gives the tool clear boundaries.",
        "You can also include your current code and ask for one targeted fix. That is usually better than requesting a brand-new solution because it preserves your understanding and project structure.",
        "Visible win: Rewrite one weak prompt into a specific prompt, compare outputs, and keep the better version in a personal 'good prompts' note.",
      ],
      takeaways: [
        "Specific prompts reduce low-quality guesses.",
        "Language, goal, and constraints should be explicit.",
        "Targeted fixes are better than full rewrites for learning.",
        "Prompt comparison builds practical skill quickly.",
      ],
      resources: [
        { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", note: "Practice contexts for writing clear asks." },
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/", note: "Use docs terms in prompts for accuracy." },
        { title: "Khan Academy CS", url: "https://www.khanacademy.org/computing/computer-programming", note: "Beginner examples to ground prompt requests." },
      ],
      tryThis: "Take one vague prompt you used before and rewrite it with language, constraints, and desired output clearly stated.",
    },
    "using-ai-to-learn-a-new-topic-fast": {
      body: [
        "AI can be a useful tutor when you use it to understand, not to bypass effort. A strong pattern is explain → example → self-test. First ask for a plain-language explanation, then a tiny example, then test yourself without AI.",
        "## Guided learning loop",
        "Pick one confusing topic like loops, arrays, or functions. Ask AI to explain it at beginner level with one short example. Then close AI and write your own explanation plus a tiny code sample from memory.",
        "If your version is shaky, reopen AI and ask only about the parts you missed. This back-and-forth is normal. Understanding grows through cycles, not one perfect pass.",
        "Visible win: Learn one concept with the loop above and teach it to someone else in two minutes without looking at notes.",
      ],
      takeaways: [
        "AI works best as a tutor when paired with self-testing.",
        "Explain-example-self-test is a strong learning loop.",
        "Closing the tool before recall checks real understanding.",
        "Teaching a concept is proof you actually learned it.",
      ],
      resources: [
        { title: "Khan Academy CS", url: "https://www.khanacademy.org/computing/computer-programming", note: "Great companion lessons for concept reinforcement." },
        { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", note: "Hands-on exercises to test what AI explained." },
        { title: "Code.org", url: "https://code.org/", note: "Structured beginner pathways for focused concept practice." },
      ],
      tryThis: "Use AI to learn one concept, then write and explain your own mini-example with AI closed.",
    },
  },
  quiz: {
    id: "track-quiz",
    title: "Track 5 Quiz",
    questions: [
      {
        q: "What is the healthiest way to think about AI coding tools?",
        options: ["As autopilot", "As a helper you still verify", "As a guaranteed expert", "As a replacement for practice"],
        answer: 1,
        explanation: "AI is useful support, but you must verify and understand the result.",
      },
      {
        q: "Which habit protects learning while using AI?",
        options: ["Copy everything", "Ask for full assignment answers", "Try coding first, then ask for review", "Never read docs"],
        answer: 2,
        explanation: "Attempting first keeps your reasoning active and makes feedback meaningful.",
      },
      {
        q: "Why test AI-generated code with edge cases?",
        options: ["To slow yourself down", "Because polished output can still hide bugs", "Because compilers require it", "To avoid using AI"],
        answer: 1,
        explanation: "Subtle errors often appear only under unusual inputs.",
      },
      {
        q: "What makes a prompt stronger?",
        options: ["Being vague", "Adding random slang", "Stating language, goal, and constraints", "Using all caps"],
        answer: 2,
        explanation: "Clear constraints reduce guessing and improve response quality.",
      },
      {
        q: "What is the final check after learning with AI?",
        options: ["Trust AI only", "Explain and apply the concept without AI", "Close your project", "Skip testing"],
        answer: 1,
        explanation: "Independent explanation and practice prove real understanding.",
      },
    ],
  },
  challenge: {
    id: "track-challenge",
    title: "Challenge: Build With AI, Explain Without It",
    brief: "Use AI to help add one small feature to your web page, then prove understanding by explaining the final code in your own words with AI closed.",
    steps: [
      "Pick one tiny feature to add (for example, a button behavior or style toggle).",
      "Write your first draft attempt before asking AI.",
      "Ask AI for help on one focused part and integrate carefully.",
      "Test the feature with at least three input or click scenarios.",
      "Fix at least one issue you find during testing.",
      "Explain line-by-line what your final feature code does without using AI.",
    ],
  },
};
