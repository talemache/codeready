import type { TrackContent, LessonContent, Quiz, Challenge } from "@/lib/content-types";
import { programmingFoundations } from "./programming-foundations";
import { dsa } from "./dsa";
import { git } from "./git";
import { building } from "./building";
import { testing } from "./testing";
import { devops } from "./devops";
import { aiEra } from "./ai-era";
import { career } from "./career";

export const CONTENT: Record<string, TrackContent> = {
  "programming-foundations": programmingFoundations,
  dsa,
  git,
  building,
  testing,
  devops,
  "ai-era": aiEra,
  career,
};

export function getLesson(trackId: string, moduleId: string): LessonContent | null {
  return CONTENT[trackId]?.lessons[moduleId] ?? null;
}

export function getQuiz(trackId: string): Quiz | null {
  return CONTENT[trackId]?.quiz ?? null;
}

export function getChallenge(trackId: string): Challenge | null {
  return CONTENT[trackId]?.challenge ?? null;
}
