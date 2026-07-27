export type Resource = {
  title: string;
  url: string;
  note: string;
};

export type LessonContent = {
  /** Markdown-ish body: array of paragraphs and headings */
  body: string[];
  takeaways: string[];
  resources: Resource[];
  tryThis: string;
};

export type QuizQuestion = {
  q: string;
  options: string[];
  answer: number; // index of correct option
  explanation: string;
};

export type Quiz = {
  id: string;
  title: string;
  questions: QuizQuestion[];
};

export type Challenge = {
  id: string;
  title: string;
  brief: string;
  steps: string[];
};

export type TrackContent = {
  lessons: Record<string, LessonContent>;
  quiz: Quiz;
  challenge?: Challenge;
};
