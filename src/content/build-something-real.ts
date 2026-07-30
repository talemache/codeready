import type { TrackContent } from "@/lib/content-types";

export const buildSomethingReal: TrackContent = {
  lessons: {
    "how-websites-actually-work": {
      body: [
        "Websites can feel mysterious until you picture a simple request-and-response loop. Imagine ordering food: you ask for something, the kitchen prepares it, and a server brings it back. Browsers and web servers do a similar exchange constantly.",
        "## The simple flow",
        "You type a URL or click a link. Your browser sends a request. A server receives it, finds the right content, and sends a response. The browser then displays that response as a page you can read and use.",
        "This model helps debugging too. If a page is broken, ask where the issue lives: request, response, or display. You do not need networking jargon to start. Clear mental models beat memorized terms every time. Status codes like 200 (success) and 404 (not found) are examples of model vocabulary that already explains a lot.",
        "Visible win: Open browser developer tools, reload a page, and watch one request appear in the network list.",
      ],
      takeaways: [
        "Web pages use a request-and-response loop.",
        "A food-order analogy explains core web behavior well.",
        "Mental models help debugging later.",
        "You can observe requests directly in dev tools.",
      ],
      resources: [
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/", note: "Excellent beginner guides for how the web works." },
        { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", note: "Project lessons that connect concepts to practice." },
        { title: "Khan Academy CS", url: "https://www.khanacademy.org/computing/computer-programming", note: "Friendly walkthroughs of web basics." },
      ],
      tryThis: "Open one page, inspect the network tab, and write down one request URL and what type of file it returned.",
    },
    "html-the-skeleton": {
      body: [
        "HTML gives your page structure. Think of it as the skeleton: headings, paragraphs, images, and links. Without HTML, there is nothing for the browser to organize. This is your chance to build a real page from blank to visible.",
        "## Start with simple blocks",
        "Create one page with a title, one heading, two short paragraphs, and one image. Keep it small and personal: an about-me page, a hobby fan page, or a page about your favorite game strategy. Use descriptive text that matters to you—personal content is easier to proofread and harder to forget.",
        "Do not chase perfection yet. Focus on clear structure and readable text. If it renders in the browser, you already built a real artifact. That first visible page matters more than fancy design at this stage.",
        "Visible win: Save your file, open it in a browser, and take a screenshot of your first working HTML page.",
      ],
      takeaways: [
        "HTML is the structural foundation of a webpage.",
        "Small personal content makes practice more engaging.",
        "Readable structure matters more than perfection early on.",
        "A working page file is a genuine build milestone.",
      ],
      resources: [
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/", note: "Trusted HTML references and examples." },
        { title: "W3Schools", url: "https://www.w3schools.com/", note: "Quick HTML try-it examples." },
        { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", note: "Hands-on HTML exercises in browser." },
      ],
      tryThis: "Build one HTML page with a heading, two paragraphs, and an image about something you care about.",
    },
    "css-making-it-yours": {
      body: [
        "CSS controls how your page looks: colors, spacing, fonts, and layout. If HTML is the skeleton, CSS is the style layer. This is where your page starts feeling personal instead of generic.",
        "## Pick a simple style goal",
        "Choose a small visual theme before editing: maybe calm colors, bold contrast, or a playful look. Color and spacing together control the overall tone of a page, even before fonts or images. Then change one part at a time: body background, heading color, paragraph spacing, image size, and button style if you have one.",
        "Changing everything at once can get messy. Make one style edit, refresh, and keep what you like. Save the original value in a code comment before changing anything so you can revert instantly. This iterative approach helps you learn cause and effect quickly and avoids confusing CSS conflicts.",
        "Visible win: Compare a screenshot of your plain HTML page with your styled CSS version.",
      ],
      takeaways: [
        "CSS controls presentation, not structure.",
        "Small style goals reduce overwhelm.",
        "One-change-at-a-time editing teaches faster.",
        "Before-and-after visuals show clear progress.",
      ],
      resources: [
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/", note: "Best references for CSS properties and layout." },
        { title: "W3Schools", url: "https://www.w3schools.com/", note: "Simple CSS playground examples." },
        { title: "Khan Academy CS", url: "https://www.khanacademy.org/computing/computer-programming", note: "Beginner-friendly styling practice." },
      ],
      tryThis: "Add a stylesheet that changes at least three things: page background, heading style, and spacing between sections.",
    },
    "a-little-bit-of-interactivity": {
      body: [
        "JavaScript adds behavior. A page can now react when someone clicks a button, enters text, or toggles a section. Unlike HTML and CSS, JavaScript responds to events the user triggers, like clicks and keystrokes. You only need one small interaction to understand the power of this layer.",
        "## One action, one visible result",
        "Add a button that changes something obvious: swap a heading message, reveal a hidden fun fact, or change the page theme color. Keep the logic tiny so you fully understand each line. The browser console shows any errors in real time, which makes spotting typos and missing quotes much faster.",
        "This is the same loop you used earlier: write a little, run it, observe, adjust. If it does not work first try, that is normal. Read the console message and check your element names carefully. Misspelled variable names and missing closing brackets are the most common early JavaScript errors.",
        "Visible win: Click your button and watch the page update instantly.",
      ],
      takeaways: [
        "JavaScript adds interaction to static pages.",
        "One clear behavior is enough for a strong first win.",
        "Small scripts are easier to debug and learn from.",
        "Live page updates prove real interactivity.",
      ],
      resources: [
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/", note: "Strong beginner JavaScript event examples." },
        { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", note: "Hands-on JS challenges in-browser." },
        { title: "W3Schools", url: "https://www.w3schools.com/", note: "Quick event and DOM demos." },
      ],
      tryThis: "Add one button that changes text or color on click and test it three times with different values.",
    },
    "show-it-off": {
      body: [
        "Finishing includes sharing. Your project is real once another person can see it. That can be as simple as opening it on your laptop for family, or publishing it so a link works from anywhere. Sharing also gives you a concrete reason to polish small rough edges before someone else clicks through.",
        "## Easy ways to share",
        "Option one: screenshots and a short explanation of what you built and what changed from version one. Option two: publish with GitHub Pages using a simple walkthrough from the docs. Both are valid and count as real progress.",
        "When you present it, explain one design choice and one coding choice. Start with what the user sees, then explain what the code does to create that result. This proves understanding, not just completion. Explaining your work is a skill that improves with practice.",
        "Visible win: Share your page with one person and ask them to click your interactive element.",
      ],
      takeaways: [
        "A project feels complete when others can see or use it.",
        "Screenshots and hosting links are both valid sharing methods.",
        "Explaining choices demonstrates understanding.",
        "Presenting your work builds confidence and communication skill.",
      ],
      resources: [
        { title: "GitHub Pages Docs", url: "https://docs.github.com/en/pages", note: "Step-by-step hosting instructions for static pages." },
        { title: "GitHub Docs", url: "https://docs.github.com/", note: "General help for repos and publishing setup." },
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/", note: "Reference support while polishing your page." },
      ],
      tryThis: "Share your page as a screenshot or live link and explain one thing you are proud of in the build.",
    },
  },
  quiz: {
    id: "track-quiz",
    title: "Track 3 Quiz",
    questions: [
      {
        q: "In simple terms, what happens when you open a website?",
        options: ["The browser guesses content", "The browser requests and server responds", "Only your computer creates it", "It appears from cached images only"],
        answer: 1,
        explanation: "Web browsing is a request-response exchange between browser and server.",
      },
      {
        q: "What is HTML mainly responsible for?",
        options: ["Animations", "Data encryption", "Page structure", "Server backups"],
        answer: 2,
        explanation: "HTML defines the structure and content blocks of a page.",
      },
      {
        q: "What does CSS mainly control?",
        options: ["Visual styling", "Database queries", "Git commits", "Hardware speed"],
        answer: 0,
        explanation: "CSS handles presentation like colors, spacing, and layout.",
      },
      {
        q: "Why start with one small JavaScript interaction?",
        options: ["Large scripts are impossible", "Small behavior is easier to understand and debug", "JavaScript only allows one button", "It avoids writing HTML"],
        answer: 1,
        explanation: "Small interactions teach the core pattern clearly without overload.",
      },
      {
        q: "Which is a valid way to share your project?",
        options: ["Only paid hosting", "Only social media posts", "Screenshots or GitHub Pages", "You should not share beginner projects"],
        answer: 2,
        explanation: "Both screenshots and free static hosting are great beginner sharing options.",
      },
    ],
  },
  challenge: {
    id: "track-challenge",
    title: "Challenge: Build Your Personal Web Page",
    brief: "Build one complete web page about something you care about. Include structure, style, one interactive element, and a simple way to share your final result.",
    steps: [
      "Choose your page topic (about me, hobby, fan page, or similar).",
      "Create an HTML page with heading, text, and one image.",
      "Add CSS to personalize colors, fonts, and spacing.",
      "Add one JavaScript interaction triggered by a button click.",
      "Test the page in a browser and fix at least one issue.",
      "Share a screenshot or live GitHub Pages link with someone.",
    ],
  },
};
