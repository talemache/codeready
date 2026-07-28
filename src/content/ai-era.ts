import type { TrackContent } from "@/lib/content-types";

export const aiEra: TrackContent = {
  lessons: {
    "coding-with-ai-assistants-effectively": {
      body: [
        "AI coding assistants are good at generating plausible code fast. That's the whole problem and the whole opportunity. Plausible isn't the same as correct, and if you treat an assistant like an autopilot instead of a very fast, very confident junior engineer, you will ship bugs you didn't write and can't explain.",
        "## Pair programmer, not pilot",
        "The useful mental model is a pair programmer who has read the entire internet but has never run your code, never talked to your users, and has no idea what your team's conventions are. That pair programmer is incredible for boilerplate, for translating a clear spec into a first draft, for reminding you of an API you forgot, and for writing the fifth similar test case so you don't have to. It is not incredible at knowing your business logic, your data model's edge cases, or why that one function is deliberately weird because of a bug fix from 2019.",
        "In practice this means you drive. You decide the architecture, the file structure, the naming, and the acceptance criteria before you ask for code. You ask the assistant to fill in a scoped piece of that plan rather than 'build me a login system.' The narrower the ask, the more reliable the output, because you've done the thinking the model can't do for you.",
        "## You own every line",
        "Here's the rule that matters most: if you commit it, you own it. Nobody in a code review is going to accept 'the AI wrote it' as an excuse for a bug, a security hole, or a weird abstraction. That means reading every line an assistant produces before it goes in your codebase, the same way you'd read a pull request from a stranger. If you can't explain what a piece of generated code does and why it does it that way, don't merge it — ask the assistant to explain it, or rewrite it yourself.",
        "This also changes how you use the tool day to day. Small, verifiable chunks beat giant one-shot generations. Ask for a function, read it, run it, test it, then ask for the next piece. Big generations feel productive but hide more bugs per line because you review them less carefully — nobody reads 400 lines as thoroughly as they read 40.",
        "## Where it actually saves you time",
        "The honest wins are boilerplate, repetitive patterns, translating between languages or frameworks, writing tests for code you already understand, and unblocking you when you're stuck on syntax rather than logic. The honest losses are architecture decisions, anything security-sensitive, and anything where 'looks right' and 'is right' diverge in subtle ways — which is most real engineering. Use it to go faster on the parts you already know how to do, not to skip the parts you don't.",
      ],
      takeaways: [
        "Treat AI output as a first draft from a fast but context-blind collaborator, not a finished answer.",
        "You are responsible for every line you commit, whether you typed it or generated it.",
        "Ask for small, scoped pieces of code you can verify, not giant one-shot solutions.",
        "AI assistants are strongest at boilerplate and translation, weakest at architecture and business logic.",
        "If you can't explain generated code in a review, don't merge it yet.",
      ],
      resources: [
        { title: "Anthropic: Claude Code overview", url: "https://docs.anthropic.com/en/docs/claude-code/overview", note: "How an agentic coding assistant is designed to be used in a real workflow." },
        { title: "GitHub Copilot documentation", url: "https://docs.github.com/en/copilot", note: "Practical guidance on using an AI pair programmer inside your editor." },
        { title: "OpenAI: Best practices for GPT-based coding", url: "https://platform.openai.com/docs/guides/text?api-mode=responses", note: "Model behavior fundamentals that carry over to coding use cases." },
        { title: "Anthropic Academy: Claude for developers", url: "https://www.anthropic.com/learn", note: "Free lessons on working effectively with AI models as an engineer." },
      ],
      tryThis: "Take your last AI-generated function and write out, in your own words, exactly why each line is there — if you get stuck, rewrite that line yourself.",
    },

    "prompting-for-developers": {
      body: [
        "A bad prompt gets you a bad answer that looks fine until it doesn't. The single biggest lever you have with any AI model is context: what you tell it about the problem, the constraints, and what 'good' looks like. Vague prompts get vague, generic code. Specific prompts get code that actually fits your situation.",
        "## Context is everything",
        "Compare 'write a function to validate emails' with 'write a TypeScript function that validates emails for a signup form, rejecting disposable email domains, returning a discriminated union of {valid: true} or {valid: false, reason: string}, no external dependencies.' The second prompt encodes your language, your framework constraints, your error-handling style, and your dependency policy. You'll get code much closer to something you'd actually merge, because you removed the guessing.",
        "Good context includes the language and version, relevant existing code or types, constraints (no new dependencies, must match this naming convention, must be under 50 lines), and what the output will be used for. If you have a relevant file open, paste the parts that matter — models can't see your codebase unless you show them or give them tool access to search it.",
        "## Treat prompts like code — iterate",
        "Your first prompt is a draft, not a contract. If the output misses the mark, don't start over from scratch — diagnose why. Was the ask ambiguous? Did you forget a constraint? Add examples of what you want ('like this existing function, but for X') and examples of what you don't want. Iterating on a prompt is exactly like iterating on a spec: you're debugging a communication problem, not a code problem.",
        "## Examples and constraints beat instructions",
        "Models are pattern matchers. Showing one good example of the input/output shape you want is often more effective than three paragraphs describing it abstractly. Pair that with explicit constraints — 'do not use any', 'keep this pure, no side effects', 'match the existing error format in errors.ts' — and you'll cut down dramatically on the back-and-forth. When you're debugging with AI, paste the actual error message and the actual relevant code, not a paraphrase; paraphrasing a stack trace is how you lose the one detail that mattered.",
        "The skill here isn't tricking the model with magic phrases — it's the same skill as writing a clear ticket or a clear code review comment: say exactly what you mean, give enough context to remove ambiguity, and be specific about constraints. Developers who are already good at writing clear specs tend to be good at this immediately.",
      ],
      takeaways: [
        "Context — language, constraints, existing code, intended use — determines output quality more than clever phrasing.",
        "Treat your first prompt as a draft; iterate on it like you'd debug a spec, not like you'd retry a slot machine.",
        "Concrete examples of desired input/output usually beat abstract descriptions.",
        "Paste real error messages and real code, never paraphrases, when asking for debugging help.",
        "Explicit constraints (no new deps, match this style, keep it under N lines) cut down revision cycles.",
      ],
      resources: [
        { title: "Anthropic: Prompt engineering overview", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", note: "A rigorous, developer-focused guide to structuring prompts." },
        { title: "OpenAI: Prompt engineering guide", url: "https://platform.openai.com/docs/guides/prompt-engineering", note: "Practical patterns and examples for getting reliable outputs." },
        { title: "promptingguide.ai", url: "https://www.promptingguide.ai/", note: "A comprehensive, actively maintained reference on prompting techniques." },
        { title: "Anthropic: Give Claude examples (few-shot prompting)", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/multishot-prompting", note: "Why and how examples outperform pure instructions." },
      ],
      tryThis: "Take a prompt that gave you a mediocre result this week, rewrite it with explicit constraints and one concrete example, and compare the two outputs side by side.",
    },

    "evaluating-ai-output-critically": {
      body: [
        "The most dangerous AI-generated code isn't the code that obviously breaks — that gets caught immediately. It's the code that runs, looks reasonable, passes a quick glance, and is subtly wrong in a way that surfaces three weeks later in production. Evaluating AI output is a distinct skill from writing code, and it deserves deliberate practice.",
        "## Know the hallucination patterns",
        "Models sometimes invent things that don't exist: a library function that sounds right but was never in the API, a config option that doesn't exist for this version, an import path that isn't real. This happens because the model is predicting plausible text, not looking anything up, unless it's explicitly using a tool to check. Watch especially for invented APIs in libraries with lots of similar-sounding methods, version-specific behavior (the model may blend syntax from an old and new version of a framework), and confidently specific details — file paths, error codes, config keys — that sound authoritative but were never verified against anything real.",
        "The second, sneakier pattern is subtly wrong logic: an off-by-one in a loop boundary, a condition that handles the common case but not the edge case, a sort comparator that's backwards, a race condition in async code that only shows up under load. These pass a skim-read because the overall shape of the code is correct — it's the details that are wrong.",
        "## Test AI code harder than your own",
        "You have intuition about your own code's weak points because you know where you struggled while writing it. You have no such intuition about generated code — so compensate by testing it more rigorously, not less. Run it. Feed it edge cases: empty input, huge input, null, negative numbers, unicode, concurrent calls. If it touches an external API or library, verify the function names and parameters actually exist in the current docs — don't assume. If it's not trivial, ask the assistant to write tests for its own code, then read those tests critically too, since a model can generate a test that passes trivially without actually checking the behavior that matters.",
        "## Build a verification habit",
        "A good habit: for any nontrivial AI-generated function, ask yourself three questions before merging — could I explain this to a teammate, have I actually run it against a real edge case, and does it match how the rest of the codebase does this kind of thing. If any answer is no, slow down. This isn't paranoia, it's the same discipline you'd apply to an unfamiliar dependency you just pulled into your project — trust, but verify, every time.",
      ],
      takeaways: [
        "Models can invent APIs, functions, and config options that sound real but never existed — verify against real docs.",
        "The riskiest bugs are subtly wrong logic that passes a casual read, not obvious breakage.",
        "Test AI-generated code more rigorously than your own, since you lack intuition about its weak points.",
        "Ask for edge cases explicitly: empty, huge, null, negative, concurrent — don't assume the happy path is the whole story.",
        "Before merging, be able to explain the code, have run it, and confirm it matches your codebase's conventions.",
      ],
      resources: [
        { title: "Anthropic: Reducing hallucinations", url: "https://docs.anthropic.com/en/docs/test-and-evaluate/strengthen-guardrails/reduce-hallucinations", note: "How and why models produce confident but false content." },
        { title: "OpenAI: Evaluating model outputs", url: "https://platform.openai.com/docs/guides/evals", note: "Approaches to systematically checking model output quality." },
        { title: "promptingguide.ai: Risks and misuses", url: "https://www.promptingguide.ai/risks", note: "Covers hallucination and reliability failure modes in plain language." },
        { title: "3Blue1Brown: Neural networks series", url: "https://www.3blue1brown.com/topics/neural-networks", note: "Visual intuition for how these models actually generate predictions, useful for understanding why they confabulate." },
      ],
      tryThis: "Pick one AI-generated function from this week and try to break it with three inputs it was never shown: empty, extreme, and malformed.",
    },

    "understanding-llm-basics": {
      body: [
        "You don't need to train a model to use one well, but a rough mental model of what's actually happening under the hood will make you a much better prompter and a much more skeptical consumer of AI output. Two ideas do most of the work: tokens and context windows.",
        "## Tokens: the model's actual units",
        "A language model doesn't see words, it sees tokens — chunks of text, often smaller than a word, that get converted into numbers. 'Coding' might be one token, 'preprocessing' might split into two or three. This matters practically: it's why models sometimes struggle with letter-counting or spelling tasks (they're not seeing individual letters the way you do), why very long variable names or unusual identifiers can confuse output quality, and why cost and speed for API usage are billed per token, not per word or per request.",
        "## Context windows: the model's working memory",
        "The context window is the total amount of text — your prompt, any files you've pasted, the conversation history, and the model's response — that the model can consider at once. It's finite. Once you exceed it, older content gets dropped or the request fails, and this is precisely why an AI assistant that seemed to understand your codebase perfectly ten messages ago suddenly seems to forget details from earlier — they've fallen out of the window. Practically: keep conversations focused, re-paste critical context if a conversation runs long, and don't assume the model remembers something from much earlier just because you do.",
        "## Why models confabulate",
        "A language model is fundamentally predicting the next most likely token given everything before it, trained on huge amounts of text. It has no built-in mechanism to check facts against reality unless it's explicitly given tools to search or look things up. When it doesn't 'know' something, it doesn't say 'I don't know' by default — it produces the statistically plausible continuation, which can look exactly like a real answer. This is the root cause of hallucinated APIs and invented facts: the model isn't lying, it's completing a pattern, and sometimes the most pattern-consistent completion is fiction.",
        "Understanding this reframes how you use these tools. You stop expecting a database lookup and start expecting a very well-read, very fast pattern completer — which means the specificity of your input, and your own verification of the output, are doing more work than any clever trick ever will.",
      ],
      takeaways: [
        "Models process text as tokens, not words or letters — this explains quirks like weak letter-counting or spelling tasks.",
        "The context window is finite working memory; content can fall out of it in long conversations.",
        "Models predict the statistically likely next token, they don't look up facts unless given tools to do so.",
        "Confabulation isn't lying — it's pattern completion when the model has no real knowledge to draw on.",
        "Re-supply key context in long conversations rather than assuming the model still 'remembers' it.",
      ],
      resources: [
        { title: "3Blue1Brown: But what is a neural network?", url: "https://www.3blue1brown.com/lessons/neural-networks", note: "The best visual intro to how neural networks make predictions." },
        { title: "3Blue1Brown: Transformers, explained visually", url: "https://www.3blue1brown.com/lessons/attention", note: "How attention and context actually work inside the models you use daily." },
        { title: "Anthropic: How Claude works (model overview)", url: "https://docs.anthropic.com/en/docs/about-claude/models/overview", note: "Concrete details on context windows and model capabilities." },
        { title: "OpenAI: Tokenizer tool and guide", url: "https://platform.openai.com/tokenizer", note: "See exactly how your own text gets split into tokens." },
      ],
      tryThis: "Paste a paragraph of your own code into the OpenAI tokenizer tool and see how it gets split — notice which parts of your naming style cost more tokens than you'd expect.",
    },

    "where-ai-fits-in-the-sdlc": {
      body: [
        "AI tools aren't evenly useful across the software development lifecycle. Knowing where they genuinely help versus where they create risk is what separates an engineer who uses AI well from one who just uses it a lot.",
        "## Strong fits: scaffolding, tests, refactors, docs",
        "Scaffolding a new project, component, or module from a clear spec is a great fit — there's a lot of established convention to draw from, and mistakes are cheap to catch early. Writing tests for code you already understand is another strong fit, especially generating the tedious-but-necessary cases (boundary values, error paths) once you've written the core logic yourself. Mechanical refactors — renaming across files, converting callback style to async/await, extracting a repeated pattern into a shared function — are also a good match, because the transformation is well-defined and easy to verify against the original behavior. Documentation is a strong fit too: summarizing what a function does, writing a README section, or drafting API docs from your actual code, where the source of truth already exists and the model is just restating it clearly.",
        "## Weak fits: novel architecture and judgment calls",
        "Where AI gets shakier is genuinely novel system design — deciding how services should be split, what your data model should look like for a problem nobody has solved quite this way before, or trading off consistency versus availability for your specific product. These decisions depend on context the model doesn't have: your team's skills, your users' actual behavior, your infrastructure constraints, your five-year roadmap. AI can lay out generic options, but the judgment call is still yours. Security-sensitive code — auth flows, payment handling, anything touching user data — also deserves extra human scrutiny regardless of how confident the generated code looks, because the cost of a subtle mistake is much higher than in most code.",
        "## The pattern across the lifecycle",
        "Across planning, coding, testing, review, and deployment, the pattern holds: AI is strongest wherever there's an established pattern to draw from and a cheap way to verify correctness, and weakest wherever the decision requires judgment about your specific context or the cost of being wrong is high. That means you should feel free to lean on it heavily for the first draft of a test suite or a migration script, and lean on it much more lightly — as a brainstorming partner, not a decision-maker — for architecture reviews or incident response.",
        "The engineers getting the most value from these tools right now aren't the ones using AI for everything. They're the ones who've built an accurate map of where it helps and where it doesn't, and who still show up with real judgment for the parts of the job that were never really about typing code in the first place.",
      ],
      takeaways: [
        "AI is strongest where there's established convention and cheap verification: scaffolding, tests, mechanical refactors, docs.",
        "AI is weakest on novel architecture decisions that depend on context only your team has.",
        "Security-sensitive code deserves extra human scrutiny no matter how polished the generated version looks.",
        "Use AI as a brainstorming partner for high-judgment decisions, not as the decision-maker.",
        "The engineers getting the most value have an accurate map of where AI helps versus where it doesn't.",
      ],
      resources: [
        { title: "Anthropic: Claude Code best practices", url: "https://www.anthropic.com/engineering/claude-code-best-practices", note: "A real engineering team's account of where an AI coding agent fits into their workflow." },
        { title: "OpenAI: Introduction to AI in software development", url: "https://openai.com/index/introducing-gpt-4-1-in-the-api/", note: "Context on model capabilities relevant to real development tasks." },
        { title: "Anthropic Academy", url: "https://www.anthropic.com/learn", note: "Structured lessons on applying AI across real engineering workflows." },
        { title: "promptingguide.ai: Applications", url: "https://www.promptingguide.ai/applications", note: "Concrete examples of where prompting techniques map to real dev tasks." },
      ],
      tryThis: "List the last five tasks you did this week and mark each one 'strong AI fit' or 'weak AI fit' — then check whether your actual AI usage matched that list.",
    },
  },

  quiz: {
    id: "track-quiz",
    title: "Track 7 Quiz",
    questions: [
      {
        q: "What's the recommended way to work with an AI coding assistant on a nontrivial feature?",
        options: [
          "Ask for the entire feature in one prompt and merge whatever comes back",
          "Plan the architecture yourself, then ask for small, scoped pieces you can verify",
          "Only use it for naming variables since that's the only safe use case",
          "Let it choose the architecture since it has seen more code than you have",
        ],
        answer: 1,
        explanation: "Small, scoped requests are easier to verify and catch fewer subtle bugs than one giant generation.",
      },
      {
        q: "Why does adding specific context (language, constraints, existing code) to a prompt improve output quality?",
        options: [
          "It makes the model respond faster",
          "It removes ambiguity so the model's pattern-matching lands closer to what you actually need",
          "It unlocks a hidden 'expert mode' in the model",
          "It has no real effect, phrasing tricks matter more",
        ],
        answer: 1,
        explanation: "Models generate plausible completions; more relevant context narrows down what's plausible and useful for your case.",
      },
      {
        q: "Which of these is a classic AI hallucination pattern to watch for in generated code?",
        options: [
          "The code runs slower than expected",
          "The code uses too many comments",
          "A confidently used library function or config option that doesn't actually exist",
          "The code follows your team's style guide too closely",
        ],
        answer: 2,
        explanation: "Models can invent plausible-sounding APIs that were never real, especially in libraries with many similar method names.",
      },
      {
        q: "What is a context window, in plain terms?",
        options: [
          "The part of your screen where you type prompts",
          "The finite amount of text the model can consider at once, including prompt, files, and conversation history",
          "A setting that controls how creative the model's answers are",
          "The number of tokens a model can generate per second",
        ],
        answer: 1,
        explanation: "Once conversation and pasted content exceed the context window, older details can drop out of what the model 'sees.'",
      },
      {
        q: "Where does AI tend to add the least reliable value in the software development lifecycle?",
        options: [
          "Generating boilerplate for a new component",
          "Writing tests for logic you already understand",
          "Making novel system architecture decisions specific to your product and team",
          "Drafting documentation from existing code",
        ],
        answer: 2,
        explanation: "Novel architecture decisions depend on team, user, and infrastructure context the model doesn't have, so human judgment matters most there.",
      },
    ],
  },

  challenge: {
    id: "track-challenge",
    title: "Challenge: Build a Developer Prompt Library",
    brief:
      "Put your AI-era skills into practice. Build a personal prompt library — a small, organized collection of reusable prompts you'd actually reach for day-to-day as a developer. The goal is to move from ad-hoc prompting to a deliberate, repeatable practice.",
    steps: [
      "Identify five real developer tasks where you'd use an AI assistant (e.g., write tests, explain code, review a PR, debug an error, write a commit message).",
      "Write a high-quality template prompt for each task, with placeholder variables (e.g., <LANGUAGE>, <ERROR_MESSAGE>) clearly marked.",
      "Test each prompt in a real AI tool and refine it until the output is consistently useful — document what changed and why.",
      "Organize your prompts in a Markdown file or Notion page with a title, task category, the prompt template, and example output.",
      "Add a section for what NOT to use AI for — based on this track, list three task types where you'll rely on your own judgment instead.",
      "Share at least one prompt with a classmate or peer, collect their feedback, and update the prompt based on what they find unclear.",
      "Write a one-paragraph reflection: what surprised you about how the model responded, and what did you learn about prompting well?",
    ],
  },
};
