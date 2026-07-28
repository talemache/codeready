export type ModuleType = "lesson" | "quiz" | "challenge";
export type ModuleStatus = "not_started" | "in_progress" | "complete";

export interface Track {
  id: string;
  order: number;
  title: string;
  shortDescription: string;
  doodleIcon: string;
  moduleIds: string[];
}

export interface Module {
  id: string;
  trackId: string;
  order: number;
  title: string;
  type: ModuleType;
  estimatedMinutes: number;
}

export interface ResourceRef {
  resourceId: string;
  note?: string;
}

export interface Resource {
  id: string;
  label: string;
  url: string;
  free: true;
}

export interface Lesson {
  moduleId: string;
  body: string;
  keyTakeaways: string[];
  resources: ResourceRef[];
  tryThisToday: string;
}

export interface QuizQuestion {
  prompt: string;
  choices: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
}

export interface Quiz {
  moduleId: string;
  questions: QuizQuestion[];
  passThreshold: 4;
}

export interface Challenge {
  moduleId: string;
  brief: string;
  checklist: string[];
}

export interface TrackContent {
  lessons: Record<string, Lesson>;
  quiz: Quiz;
  challenge?: Challenge;
}

// Legacy content shape used by current authored track files.
export type LegacyResource = {
  title: string;
  url: string;
  note: string;
};

export type LegacyLessonContent = {
  body: string[];
  takeaways: string[];
  resources: LegacyResource[];
  tryThis: string;
};

export type LegacyQuizQuestion = {
  q: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type LegacyQuiz = {
  id: string;
  title: string;
  questions: LegacyQuizQuestion[];
};

export type LegacyChallenge = {
  id: string;
  title: string;
  brief: string;
  steps: string[];
};

export type LegacyTrackContent = {
  lessons: Record<string, LegacyLessonContent>;
  quiz: LegacyQuiz;
  challenge?: LegacyChallenge;
};
