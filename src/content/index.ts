import type {
  TrackContent,
  Lesson,
  Quiz,
  Challenge,
  LegacyTrackContent,
  ResourceRef,
} from "@/lib/content-types";
import { programmingFoundations } from "./programming-foundations";
import { dsa } from "./dsa";
import { git } from "./git";
import { building } from "./building";
import { testing } from "./testing";
import { devops } from "./devops";
import { aiEra } from "./ai-era";
import { career } from "./career";
import { isCodingForMe } from "./is-coding-for-me";
import { programmingFoundationsTeen } from "./programming-foundations-teen";
import { buildSomethingReal } from "./build-something-real";
import { gitWorkingWithOthers } from "./git-working-with-others";
import { aiToolsForStudents } from "./ai-tools-for-students";
import { RESOURCE_REGISTRY } from "./resources";

const LEGACY_CONTENT: Record<string, LegacyTrackContent> = {
  "programming-foundations": programmingFoundations as LegacyTrackContent,
  dsa: dsa as LegacyTrackContent,
  git: git as LegacyTrackContent,
  building: building as LegacyTrackContent,
  testing: testing as LegacyTrackContent,
  devops: devops as LegacyTrackContent,
  "ai-era": aiEra as LegacyTrackContent,
  career: career as LegacyTrackContent,
  "is-coding-for-me": isCodingForMe as LegacyTrackContent,
  "programming-foundations-teen": programmingFoundationsTeen as LegacyTrackContent,
  "build-something-real": buildSomethingReal as LegacyTrackContent,
  "git-working-with-others": gitWorkingWithOthers as LegacyTrackContent,
  "ai-tools-for-students": aiToolsForStudents as LegacyTrackContent,
};

const TRACK_DEFAULT_RESOURCES: Record<string, string[]> = {
  "programming-foundations": ["odin_project", "exercism", "missing_semester", "mdn"],
  dsa: ["neetcode", "leetcode", "hackerrank", "visualgo"],
  git: ["learn_git_branching", "github_docs", "pro_git", "oh_shit_git"],
  building: ["mdn", "full_stack_open", "sqlbolt", "roadmap_sh"],
  testing: ["test_automation_university", "jest_docs", "pytest_docs", "mdn"],
  devops: ["docker_get_started", "roadmap_sh", "system_design_primer", "github_docs"],
  "ai-era": ["anthropic_docs", "openai_docs", "three_blue_one_brown_nn", "mdn"],
  career: ["tech_interview_handbook", "interviewing_io", "pramp", "levels_fyi"],
  "is-coding-for-me": ["code_org", "freecodecamp", "khan_academy_cs", "mdn"],
  "programming-foundations-teen": ["mdn", "freecodecamp", "code_org", "w3schools"],
  "build-something-real": ["mdn", "freecodecamp", "github_pages_docs", "w3schools"],
  "git-working-with-others": ["learn_git_branching", "github_docs", "github_pages_docs", "w3schools"],
  "ai-tools-for-students": ["freecodecamp", "mdn", "khan_academy_cs", "code_org"],
};

function resourceIdFromLegacy(title: string, url: string): string | null {
  const titleLower = title.toLowerCase();
  const u = `${title} ${url}`.toLowerCase();
  const parsedHost = (() => {
    try {
      return new URL(url).hostname.toLowerCase();
    } catch {
      return "";
    }
  })();

  if (titleLower === "code.org" || parsedHost === "code.org" || parsedHost.endsWith(".code.org")) return "code_org";
  if (u.includes("scratch")) return "scratch";
  if (u.includes("appinventor")) return "mit_app_inventor";
  if (u.includes("khanacademy")) return "khan_academy_cs";
  if (u.includes("w3schools")) return "w3schools";
  if (u.includes("github pages") || u.includes("docs.github.com/en/pages")) return "github_pages_docs";
  if (u.includes("cs50")) return "cs50";
  if (u.includes("freecodecamp")) return "freecodecamp";
  if (u.includes("odin")) return "odin_project";
  if (u.includes("mdn")) return "mdn";
  if (u.includes("roadmap")) return "roadmap_sh";
  if (u.includes("missing")) return "missing_semester";
  if (u.includes("exercism")) return "exercism";
  if (u.includes("docs.python")) return "python_docs";
  if (u.includes("javascript")) return "javascript_docs";
  if (u.includes("java") && u.includes("docs")) return "java_docs";
  if (u.includes("neetcode")) return "neetcode";
  if (u.includes("leetcode")) return "leetcode";
  if (u.includes("hackerrank")) return "hackerrank";
  if (u.includes("visualgo")) return "visualgo";
  if (u.includes("learngitbranching")) return "learn_git_branching";
  if (u.includes("docs.github")) return "github_docs";
  if (u.includes("ohshitgit")) return "oh_shit_git";
  if (u.includes("git-scm.com/book")) return "pro_git";
  if (u.includes("fullstackopen")) return "full_stack_open";
  if (u.includes("sqlbolt")) return "sqlbolt";
  if (u.includes("postgresqltutorial")) return "postgresql_tutorial";
  if (u.includes("testautomationu")) return "test_automation_university";
  if (u.includes("jestjs")) return "jest_docs";
  if (u.includes("pytest")) return "pytest_docs";
  if (u.includes("docker.com/get-started")) return "docker_get_started";
  if (u.includes("system-design-primer")) return "system_design_primer";
  if (u.includes("bytebytego")) return "bytebytego";
  if (u.includes("anthropic")) return "anthropic_docs";
  if (u.includes("openai")) return "openai_docs";
  if (u.includes("3blue1brown")) return "three_blue_one_brown_nn";
  if (u.includes("techinterviewhandbook")) return "tech_interview_handbook";
  if (u.includes("levels.fyi")) return "levels_fyi";
  if (u.includes("interviewing.io")) return "interviewing_io";
  if (u.includes("pramp")) return "pramp";
  return null;
}

function normalizeResources(trackId: string, legacyResources: Array<{ title: string; url: string; note: string }>): ResourceRef[] {
  const mapped = legacyResources
    .map((r) => {
      const resourceId = resourceIdFromLegacy(r.title, r.url);
      if (!resourceId || !RESOURCE_REGISTRY[resourceId]) return null;
      return { resourceId, note: r.note };
    })
    .filter((x): x is ResourceRef => Boolean(x));

  const deduped: ResourceRef[] = [];
  for (const resource of mapped) {
    if (!deduped.some((r) => r.resourceId === resource.resourceId)) deduped.push(resource);
  }

  // Fallback defaults are teen-safe and avoid social-first or advanced-path resources.
  const defaults = TRACK_DEFAULT_RESOURCES[trackId] ?? ["mdn", "freecodecamp", "w3schools"];
  for (const resourceId of defaults) {
    if (deduped.length >= 4) break;
    if (RESOURCE_REGISTRY[resourceId] && !deduped.some((r) => r.resourceId === resourceId)) {
      deduped.push({ resourceId });
    }
  }

  return deduped.slice(0, 4);
}

function normalizeTrack(trackId: string, content: LegacyTrackContent): TrackContent {
  const lessons: Record<string, Lesson> = {};
  for (const [moduleId, lesson] of Object.entries(content.lessons)) {
    lessons[moduleId] = {
      moduleId,
      body: lesson.body.join("\n\n"),
      keyTakeaways: lesson.takeaways.slice(0, 5),
      resources: normalizeResources(trackId, lesson.resources),
      tryThisToday: lesson.tryThis,
    };
  }

  const questions = content.quiz.questions.slice(0, 5).map((question) => {
    const choices = (question.options.slice(0, 4) as [string, string, string, string]);
    return {
      prompt: question.q,
      choices,
      correctIndex: Math.max(0, Math.min(3, question.answer)) as 0 | 1 | 2 | 3,
      explanation: question.explanation,
    };
  });

  const quiz: Quiz = {
    moduleId: "track-quiz",
    questions,
    passThreshold: 4,
  };

  const challenge: Challenge | undefined = content.challenge
    ? {
        moduleId: "track-challenge",
        brief: content.challenge.brief,
        checklist: content.challenge.steps.slice(0, 7),
      }
    : undefined;

  return { lessons, quiz, challenge };
}

export const CONTENT: Record<string, TrackContent> = Object.fromEntries(
  Object.entries(LEGACY_CONTENT).map(([trackId, content]) => [trackId, normalizeTrack(trackId, content)]),
);

export function getLesson(trackId: string, moduleId: string): Lesson | null {
  return CONTENT[trackId]?.lessons[moduleId] ?? null;
}

export function getQuiz(trackId: string): Quiz | null {
  return CONTENT[trackId]?.quiz ?? null;
}

export function getChallenge(trackId: string): Challenge | null {
  return CONTENT[trackId]?.challenge ?? null;
}
