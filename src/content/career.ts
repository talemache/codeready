import type { TrackContent } from "@/lib/content-types";

export const career: TrackContent = {
  lessons: {
    "r-sum-s-that-get-interviews": {
      body: [
        "Your résumé has one job: get you a phone screen. Not describe your entire life story, not prove you're a good person, not list every technology you've ever touched. One job — convince a busy human (or an ATS bot) that you're worth 20 more minutes of attention. That means ruthless editing is a feature, not a compromise.",
        "## Keep it to one page",
        "If you're a student or early-career engineer, you do not have two pages of relevant material. Cramming in every hackathon and every course project just dilutes the good stuff. Pick your best 3-4 projects and 1-2 experiences, and cut everything else. Recruiters spend seconds per résumé on the first pass — a dense, cluttered page reads as unfocused, not accomplished.",
        "## Write impact bullets, not job descriptions",
        "The single highest-leverage change you can make is switching from 'responsible for' bullets to impact bullets. Use the shape: did X, by doing Y, resulting in Z. 'Reduced page load time by 40% by lazy-loading images and caching API responses' beats 'Worked on frontend performance' every time. If you can't quantify Z, estimate honestly — '~200 daily users', 'cut build time from 8 to 3 minutes' — a number, even an approximate one, makes a claim verifiable and memorable. Weak bullets describe tasks. Strong bullets describe outcomes.",
        "## Tailor it per posting, not per company",
        "Generic résumés lose to tailored ones, even when the underlying experience is identical. Read the job posting, note the 4-5 skills or keywords it repeats, and make sure those exact words appear somewhere in your résumé if they're true of you. This isn't about gaming anything — it's about speaking the same language as the person (or system) filtering résumés. Keep a master résumé with everything you've ever done, then cut a tailored version from it for each application. Ten minutes of tailoring meaningfully improves your callback rate.",
        "## The ATS reality check",
        "Applicant Tracking Systems parse your résumé into plain text before a human ever sees it. Fancy multi-column layouts, tables, icons, and text boxes often get mangled or dropped entirely in that process. Stick to a single-column layout, standard fonts, and standard section headers (Experience, Projects, Education, Skills). Save as PDF unless the application explicitly asks for something else. A boring, clean résumé that parses correctly beats a beautiful one that an ATS reads as a jumbled mess.",
        "None of this replaces having real projects and experience to point to — a great résumé can't manufacture substance. But a mediocre résumé absolutely can hide substance that's already there. Treat it as a 30-minute investment with a very high return.",
      ],
      takeaways: [
        "One page, no exceptions, for early-career engineers.",
        "Every bullet should follow: did X, by doing Y, resulting in Z.",
        "Tailor keywords to each specific job posting, not just each company.",
        "Simple single-column formatting survives ATS parsing better than fancy templates.",
        "Keep a master résumé and cut tailored versions from it.",
      ],
      resources: [
        {
          title: "Tech Interview Handbook — Resume",
          url: "https://www.techinterviewhandbook.org/resume/",
          note: "Concrete before/after bullet rewrites for engineering résumés.",
        },
        {
          title: "Google's résumé tips for technical roles",
          url: "https://www.google.com/about/careers/applications/how-we-hire/craft-your-resume/",
          note: "What one of the highest-volume tech recruiters actually looks for.",
        },
        {
          title: "Jobscan — ATS résumé checker",
          url: "https://www.jobscan.co/",
          note: "Scans your résumé against a job posting for keyword match.",
        },
      ],
      tryThis: "Take one bullet from your current résumé and rewrite it in the 'did X, by Y, resulting in Z' shape.",
    },

    "building-a-portfolio-github-profile": {
      body: [
        "Your GitHub profile is often the first thing a hiring manager checks after your résumé. It's not a scrapbook of every tutorial you followed — it's a curated storefront. The goal is to make it effortless for a stranger to understand what you can build, in under two minutes.",
        "## Curate your pinned repos",
        "GitHub lets you pin six repositories to the top of your profile — use every slot deliberately. Pin your best, most complete, most polished work, not your oldest or most starred. A todo-app clone from a bootcamp tutorial does nothing for you; a smaller project you designed, finished, and can explain in detail does a lot. If you only have one genuinely strong project, pin that one and leave the rest — a half-empty profile with one great project beats a full grid of mediocre ones.",
        "## Write READMEs like you're selling the project",
        "A README with just a project name and 'TODO: add description' tells a recruiter nothing and signals you didn't finish the job. A strong README has: a one-sentence description of what the project does and who it's for, a screenshot or short GIF showing it in action, a 'how to run it' section that actually works if someone copies the commands, and a short note on the interesting technical decision you made. Screenshots matter enormously — most people skim visuals before they read a single word of text.",
        "## Green squares matter less than finished projects",
        "The contribution graph is the most overrated part of GitHub for job seekers. Nobody hires you because you have a 300-day streak of trivial commits. A few real, finished, well-documented projects outweigh a wall of green squares from renaming variables. If you're tempted to grind the streak, redirect that energy into finishing and polishing one more project instead.",
        "## Make it easy to trust your code",
        "Add a simple CI badge if you have tests, keep your commit history readable (no single giant 'final code' commit), and make sure the project actually runs if someone clones it fresh. These small signals tell an engineer 'this person works the way we work' — which is exactly the impression you want to leave.",
      ],
      takeaways: [
        "Pin your best 3-6 projects deliberately — don't let GitHub choose for you.",
        "Every README needs a description, a screenshot/GIF, and working run instructions.",
        "A few finished, polished projects beat a long commit streak every time.",
        "Readable commit history and a working clone-and-run experience build trust fast.",
        "Cut anything unfinished or copied from a tutorial from your pinned repos.",
      ],
      resources: [
        {
          title: "Make a README",
          url: "https://www.makeareadme.com/",
          note: "Solid template structure for project READMEs.",
        },
        {
          title: "GitHub — Customizing your profile",
          url: "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile",
          note: "Official docs on pinned repos and profile READMEs.",
        },
        {
          title: "Awesome README examples",
          url: "https://github.com/matiassingers/awesome-readme",
          note: "Curated list of genuinely great open-source READMEs to model.",
        },
      ],
      tryThis: "Pick your best project and rewrite its README with a screenshot, a one-line pitch, and copy-pasteable run instructions.",
    },

    "networking-without-being-weird": {
      body: [
        "Networking has a bad reputation because most people picture fake handshakes and transactional LinkedIn messages. Done right, it's just talking to people in your field because you're genuinely curious how they got where they are — and that curiosity is what makes it not weird.",
        "## Lead with curiosity, not asks",
        "The single biggest mistake is opening with a request: 'Can you refer me?' before any relationship exists. Instead, ask questions you actually want answered — 'What does a typical week look like on your team?', 'What made you choose backend over frontend?', 'What do you wish you'd known before your first job?'. People love talking about their own experience when it's framed as genuine interest, not a favor extraction. The referral, if it happens, comes later and naturally.",
        "## Informational interviews are the underused tool",
        "A 20-minute informational interview — a short call where you ask someone about their role and path — is one of the highest-value, lowest-pressure ways to build a network. Find people through alumni networks, LinkedIn, or your own course TAs and professors who have industry contacts. Keep the ask small: 'Would you have 15-20 minutes for a couple of questions about your work?' Most engineers say yes to that because it costs them almost nothing and flatters them a little.",
        "## Show up prepared and follow up",
        "Research the person and company beforehand so your questions aren't googleable in ten seconds — this respects their time and makes the conversation better for both of you. After the call, send a short thank-you within a day or two, mention one specific thing you found useful, and if it makes sense, ask if it's okay to stay in touch. That one follow-up message is what separates a forgettable interaction from a real connection.",
        "## Play the long game",
        "Networking pays off over months and years, not days. Stay loosely in touch with people — congratulate them on a new role, share an article relevant to something they mentioned, comment thoughtfully on their posts. You're not trying to extract value from every interaction; you're building a set of relationships that happens to be useful when you need it, which is also exactly why it doesn't feel transactional when done well.",
      ],
      takeaways: [
        "Ask genuine questions before you ask for anything.",
        "Informational interviews (15-20 minutes) are low-pressure and high-value.",
        "Research the person beforehand so your questions show real interest.",
        "Always follow up with a specific, short thank-you.",
        "Networking is a long game — stay in touch without constantly asking for favors.",
      ],
      resources: [
        {
          title: "Tech Interview Handbook — Networking",
          url: "https://www.techinterviewhandbook.org/software-engineering-internships/",
          note: "Practical angle on using networking to land internships and jobs.",
        },
        {
          title: "How to conduct an informational interview (HBR)",
          url: "https://hbr.org/2016/06/how-to-get-the-most-out-of-an-informational-interview",
          note: "Solid framework for structuring these conversations.",
        },
        {
          title: "LinkedIn's guide to cold outreach",
          url: "https://www.linkedin.com/business/talent/blog/product-tips/tips-for-reaching-out-to-people-on-linkedin",
          note: "Tactical tips on writing outreach messages people actually answer.",
        },
      ],
      tryThis: "Message one alum or former TA in the field you want, and ask for 15 minutes to hear about their path.",
    },

    "technical-interview-prep-strategy": {
      body: [
        "Technical interview prep fails most often not because people can't learn algorithms, but because they try to cram everything into two frantic weeks. A sustainable plan spread over roughly eight weeks beats a burnout sprint almost every time, because retention and pattern recognition need repetition spaced out over time.",
        "## An 8-week shape, not a rigid schedule",
        "Weeks 1-2: rebuild your fundamentals — arrays, strings, hash maps, two pointers, basic recursion. Weeks 3-4: move into trees, graphs, and BFS/DFS, since a huge fraction of interview questions are graph problems in disguise. Weeks 5-6: dynamic programming and harder combinations of earlier patterns. Weeks 7-8: full mock interviews, timed practice, and revisiting your weak spots. This isn't a strict curriculum — adjust based on what you're already comfortable with — but having a shape stops prep from becoming aimless problem-grinding.",
        "## Quality of practice beats quantity",
        "Solving 300 problems passively, where you glance at the solution the moment you're stuck, teaches you very little. Solving 100 problems where you genuinely struggle for 20-30 minutes before looking at hints, then re-solve them from scratch a few days later, teaches you patterns you'll actually recognize under pressure. Track problems you got wrong and revisit them — spaced repetition works for algorithms just like it works for vocabulary.",
        "## Mock interviews are non-negotiable",
        "Solving problems alone on a laptop is a different skill from solving them out loud, on a call, with someone watching. Do mock interviews — with classmates, on platforms built for this, or with mentors — specifically to practice narrating your thought process, handling silence, and recovering when you get stuck in front of someone. The first few mocks will feel awkward. That awkwardness is exactly what you're training away before the interview that counts.",
        "## Think out loud, always",
        "Interviewers are grading your problem-solving process at least as much as your final answer. Narrate your assumptions, state the approach before you code it, mention time/space complexity, and voice when you notice something's wrong. A candidate who talks through a flawed-but-recoverable approach out loud often does better than a silent candidate who eventually reaches a working answer — because the interviewer can only evaluate what they can see.",
      ],
      takeaways: [
        "Spread prep over ~8 weeks; cramming in the last two weeks rarely sticks.",
        "Struggle with a problem for 20-30 minutes before checking hints — passive reading doesn't build pattern recognition.",
        "Revisit problems you got wrong days later using spaced repetition.",
        "Mock interviews train the out-loud, watched version of problem-solving, which is a different skill.",
        "Narrate your thinking constantly — interviewers grade process, not just the final answer.",
      ],
      resources: [
        {
          title: "Tech Interview Handbook",
          url: "https://www.techinterviewhandbook.org/",
          note: "Free, structured, widely-used guide covering the whole prep process.",
        },
        {
          title: "interviewing.io",
          url: "https://interviewing.io/",
          note: "Anonymous mock technical interviews with real engineers.",
        },
        {
          title: "Pramp",
          url: "https://www.pramp.com/",
          note: "Free peer-to-peer mock interview practice.",
        },
        {
          title: "NeetCode 150",
          url: "https://neetcode.io/practice",
          note: "Curated, pattern-organized problem list instead of grinding randomly.",
        },
      ],
      tryThis: "Schedule one mock interview for this week, even if it feels early — book it before you feel 'ready'.",
    },

    "behavioral-interviews-star-stories": {
      body: [
        "Behavioral interviews trip up strong engineers surprisingly often, not because they lack good stories, but because they haven't organized their experiences into anything retrievable under pressure. The fix is building a story bank ahead of time, not improvising in the room.",
        "## Build a bank of 6-8 stories",
        "Before you're in any interview, write out 6-8 concrete stories from projects, internships, coursework, or group work — moments involving conflict, failure, leadership, a tight deadline, disagreeing with someone, or a mistake you fixed. Most behavioral questions ('tell me about a time you...') map onto one of these handful of stories with minor reframing. Having them written down means you're recalling, not inventing, when the pressure's on.",
        "## Structure with STAR",
        "STAR — Situation, Task, Action, Result — keeps your answers tight and complete. Situation and Task should take maybe 20% of your answer; most of your time should go to Action (what you specifically did, using 'I' not 'we') and Result. Interviewers are trying to evaluate you, not your team, so be precise about your individual contribution even in a group project. End with the Result and, ideally, what you learned or would do differently — that reflection signals maturity.",
        "## Quantify the outcome whenever you can",
        "Just like résumé bullets, STAR answers land harder with a number attached: 'the feature shipped two days ahead of schedule', 'we cut the bug backlog by a third', 'the team adopted the process for future sprints'. If there's no clean metric, describe the outcome concretely — what changed because of what you did — rather than leaving it vague ('it went well').",
        "## Practice out loud, not just in your head",
        "Rehearsing a STAR story in your head feels smooth; saying it out loud for the first time in an interview often isn't. Say each story out loud — to a friend, to a mirror, into a voice memo — until it takes 60-90 seconds and doesn't ramble. Time yourself. Long, meandering answers are the most common behavioral-interview failure, and the fix is almost always more out-loud practice, not more content.",
      ],
      takeaways: [
        "Prepare 6-8 stories ahead of time that can flex to cover most common questions.",
        "Use STAR, and spend most of your airtime on Action and Result, not setup.",
        "Say 'I' not 'we' when describing your specific contribution.",
        "Quantify outcomes wherever possible; describe them concretely if you can't.",
        "Practice stories out loud and time them — aim for 60-90 seconds per answer.",
      ],
      resources: [
        {
          title: "Tech Interview Handbook — Behavioral Interviews",
          url: "https://www.techinterviewhandbook.org/behavioral-interview/",
          note: "Question bank plus a practical STAR walkthrough.",
        },
        {
          title: "Indeed — STAR Interview Method Guide",
          url: "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique",
          note: "Clear breakdown with example answers.",
        },
        {
          title: "Big Interview — Behavioral Question List",
          url: "https://biginterview.com/behavioral-interview-questions/",
          note: "Large list of common prompts to map your story bank against.",
        },
      ],
      tryThis: "Write out one STAR story right now about a time something went wrong and you fixed it.",
    },

    "negotiating-your-first-offer": {
      body: [
        "Most new grads accept the first number they're offered because negotiating feels risky or greedy. It's neither — companies expect it, budget for it, and rarely rescind an offer over a polite, reasonable counter. Not negotiating is the actual risk; it quietly leaves money on the table for the rest of your tenure there, since future raises are often percentages of your base.",
        "## Always negotiate, kindly",
        "You don't need leverage or a competing offer to ask. A simple, warm message works: 'Thank you so much for the offer, I'm excited about this. Is there any flexibility on the base salary or signing bonus?' The worst realistic outcome is 'no, this is firm' — and that costs you nothing. Frame it as enthusiasm plus a reasonable ask, not a confrontation, and recruiters will treat it as completely normal, because it is.",
        "## Think total compensation, not just base",
        "Base salary is only one piece. Signing bonus, equity/RSUs, relocation assistance, and start date flexibility are all negotiable, sometimes more easily than base itself. A company with a fixed base band might still have room on signing bonus. When comparing two offers, always convert to total first-year and total four-year compensation rather than comparing base salaries in isolation — a lower base with strong equity can be worth more, or less, depending on the vesting schedule and company trajectory.",
        "## Let them name numbers first",
        "If you're asked your salary expectations early, deflect politely: 'I'd love to learn more about the role first, but I'm confident we can find a number that works for both of us' or point them to a researched range instead of a single figure. Whoever states a number first gives away information — if you say a number the company would have beaten, you've just capped yourself.",
        "## Do your research before the call",
        "Use levels.fyi and similar tools to find real reported compensation at that company, for that level, in that location, before you say anything. Walking into a negotiation with actual data — 'for this level in this city, I'm seeing offers around X' — is far more effective than a vague gut-feeling ask. Data makes the conversation collaborative instead of adversarial.",
      ],
      takeaways: [
        "Always negotiate politely — the downside of asking is essentially zero.",
        "Evaluate total compensation (base, bonus, equity, benefits), not just base salary.",
        "Avoid naming a number first; let the company anchor if you can.",
        "Research real comp data on levels.fyi before you negotiate.",
        "Frame the ask with enthusiasm, not confrontation.",
      ],
      resources: [
        {
          title: "levels.fyi",
          url: "https://www.levels.fyi/",
          note: "Crowdsourced compensation data by company, level, and location.",
        },
        {
          title: "Haseeb Qureshi — Salary Negotiation",
          url: "https://haseebq.com/my-ten-rules-for-negotiating-a-job-offer/",
          note: "Widely cited, tactical rules from an engineer-turned-recruiter.",
        },
        {
          title: "Tech Interview Handbook — Negotiation",
          url: "https://www.techinterviewhandbook.org/negotiation/",
          note: "Short, engineer-specific negotiation script and tips.",
        },
      ],
      tryThis: "Look up your target role and company on levels.fyi and write down the reported comp range before you get an offer.",
    },

    "your-first-90-days-on-the-job": {
      body: [
        "Your first 90 days set the tone for how your team perceives you long after that window closes. You're not expected to already know everything — you're expected to learn fast, ask good questions, and show you can be trusted with more over time.",
        "## Ask questions early and often",
        "New hires often stay quiet out of fear of looking incompetent, then struggle silently for days on something a two-minute question would've solved. Ask early — most teams read early questions as engagement, not weakness, and the cost of staying stuck silently is almost always higher than the mild awkwardness of asking. A good habit: try for 15-20 minutes yourself, then ask, and mention what you already tried so people can help you faster.",
        "## Find a work buddy",
        "Beyond your assigned mentor or manager, find one peer you can ask the 'dumb' questions to — where's the deploy runbook, what does this acronym mean, is it normal that this build takes 10 minutes. Having a low-stakes person to ask keeps small blockers from turning into wasted afternoons, and it's usually the fastest way to pick up the unwritten norms every team has.",
        "## Go for small, visible wins",
        "Don't try to redesign the architecture in week two. Look for a small, well-scoped task — a bug fix, a minor feature, a flaky test — and ship it cleanly, with a clear PR description and tests. Early small wins build credibility and trust faster than a single overly ambitious project that drags on and stalls. Credibility compounds: once people trust your judgment on small things, they hand you bigger things sooner.",
        "## Write things down",
        "Keep a running doc of what you learn — commands, gotchas, who owns what system, decisions and their reasoning. You'll forget most of it in a week if you don't write it down, and future-you (or the next new hire) will thank present-you. This habit also naturally turns into your own onboarding notes, which you can hand off or improve for whoever joins after you.",
        "## Match team norms before challenging them",
        "You might spot things you'd do differently — a messier code style, a slow process, a tool you dislike. Resist the urge to push for changes immediately. Spend your first months understanding why things are the way they are; there's often a reason that isn't obvious from outside. Earn the standing to suggest changes by first showing you understand the current system.",
      ],
      takeaways: [
        "Ask questions after a reasonable independent attempt — don't stay silently stuck.",
        "Find a peer 'work buddy' beyond your formal mentor for quick questions.",
        "Prioritize small, clean, shipped wins over ambitious unfinished projects early on.",
        "Keep a written log of what you learn — you will forget it otherwise.",
        "Understand existing norms before pushing to change them.",
      ],
      resources: [
        {
          title: "The First 90 Days (Michael Watkins overview)",
          url: "https://hbr.org/2009/01/the-first-90-days",
          note: "Foundational framework for starting any new role well.",
        },
        {
          title: "How to onboard yourself as a new software engineer",
          url: "https://www.pointer.io/blog/onboard-new-software-engineer/",
          note: "Practical, engineering-specific onboarding advice.",
        },
        {
          title: "Julia Evans — questions I ask when starting a new job",
          url: "https://jvns.ca/blog/2022/03/14/questions-i-ask-when-starting-a-new-job/",
          note: "Concrete list of good early questions to ask your team.",
        },
      ],
      tryThis: "Start a running 'notes doc' today, even before your first day, and write down the first thing you'd want a future new hire to know.",
    },
  },
  quiz: {
    id: "track-quiz",
    title: "Track 8 Quiz",
    questions: [
      {
        q: "What's the most effective way to strengthen a résumé bullet?",
        options: [
          "Add more technical buzzwords",
          "Rewrite it as: did X, by doing Y, resulting in Z, with a number where possible",
          "Make the font smaller so you can fit more bullets",
          "List every technology you've ever used",
        ],
        answer: 1,
        explanation: "Quantified, outcome-focused bullets are far more convincing than task descriptions or keyword lists.",
      },
      {
        q: "What matters more for a GitHub profile: contribution streak or pinned projects?",
        options: [
          "Contribution streak — more green squares always wins",
          "Neither matters at all",
          "A few finished, well-documented pinned projects matter far more than a commit streak",
          "Only the number of stars matters",
        ],
        answer: 2,
        explanation: "A handful of polished, well-explained projects tells a hiring manager far more than a long streak of trivial commits.",
      },
      {
        q: "What's a low-pressure way to build your network as a student?",
        options: [
          "Immediately ask everyone you meet for a referral",
          "Request a 15-20 minute informational interview to learn about someone's path",
          "Only network with people already at your dream company",
          "Avoid networking until you have a finished portfolio",
        ],
        answer: 1,
        explanation: "Informational interviews are a small, genuine ask that most people are happy to say yes to.",
      },
      {
        q: "In a STAR behavioral answer, where should most of your speaking time go?",
        options: [
          "Situation and Task",
          "Action and Result",
          "Apologizing for any mistakes made",
          "Describing your team's overall project, not your part",
        ],
        answer: 1,
        explanation: "Interviewers want to hear what you specifically did and what happened as a result — setup should be brief.",
      },
      {
        q: "When negotiating a job offer, what's generally the smartest move?",
        options: [
          "State your desired salary number first to anchor the conversation",
          "Never negotiate — it risks the offer being pulled",
          "Research comp data first, then negotiate politely, focusing on total compensation",
          "Only negotiate if you already have a competing offer",
        ],
        answer: 2,
        explanation: "Researching real comp data and negotiating kindly, without necessarily anchoring first, is low-risk and often effective.",
      },
    ],
  },

  challenge: {
    id: "track-challenge",
    title: "Challenge: Run Your First Informational Interview",
    brief:
      "Career skills don't come from reading about them — they come from doing them. This challenge walks you through one complete, real-world career exercise: identifying someone worth talking to, reaching out, having the conversation, and applying what you learned. One conversation at the right time can change your trajectory.",
    steps: [
      "Identify one person in a role you want in 2–5 years: a senior engineer, a team lead, or someone whose career path you respect. Find them via LinkedIn, a university alumni directory, or a community Slack.",
      "Send a brief, specific outreach message: introduce yourself, say exactly why you're reaching out, ask for a 20-minute call. Reference something real about their work to show you've done your homework.",
      "Prepare five thoughtful questions in advance — not things you could Google, but questions only someone with their experience could answer (e.g., 'What surprised you most in your first year on the job?').",
      "Have the conversation. Take notes on what surprised you, what confirmed your assumptions, and one thing you want to follow up on.",
      "Within 24 hours, send a genuine thank-you note (not a template) mentioning one specific thing from your conversation.",
      "Update your résumé or portfolio based on one piece of feedback or insight from the call.",
      "Write a short reflection: what did you learn that you couldn't have read in an article, and what's your next step?",
    ],
  },
};
