// Shared app types.
export type TranslationId = "KJV" | "WEB" | "URD" | "RVR" | "HIN" | "BEN";
/** The English texts every lesson verse is written with; other languages are added in lib/content.ts. */
export type VerseText = { KJV: string; WEB: string } & Partial<Record<TranslationId, string>>;

export type MeaningQuestion = {
  prompt: string;
  /** The first option is the right one; the lesson shuffles them per verse. */
  options: [string, string, string];
  why: string;
};

export type OriginalWord = {
  /** The English word in the verse it sits behind. */
  english: string;
  lang: "Hebrew" | "Greek";
  translit: string;
  meaning: string;
  /** The word in Hebrew or Greek letters (added in lib/content.ts). */
  script?: string;
};

export type Verse = {
  id: string;
  ref: string;
  text: VerseText;
  question: MeaningQuestion;
  original: OriginalWord;
};

export type PackIcon =
  | "anxiety" | "identity" | "habits" | "road" | "shepherd" | "share"
  | "grief" | "courage" | "forgive" | "anger" | "provision" | "hope" | "prayer"
  | "beatitudes" | "fruit" | "love" | "armor" | "iam" | "wisdom" | "joy"
  | "wealth" | "health" | "friends" | "family" | "anchor"
  | "jesus" | "faith" | "reconcile" | "goodness" | "grace"
  | "spirit" | "purpose" | "work" | "purity" | "humility"
  | "waiting" | "gratitude" | "rest" | "words" | "heaven"
  | "praying" | "worship" | "neighbor" | "justice" | "lonely"
  | "sorrow" | "cross" | "promises" | "obey" | "unity";

export type Pack = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  minutes: number;
  icon: PackIcon;
  /** Which "what do you want to carry" answers this pack fits. */
  fits: string[];
  verses: Verse[];
};

/** Spaced review state for one learned verse. */
export type VerseProgress = {
  learnedAt: string; // yyyy-MM-dd local
  box: number; // 1..6, higher = stronger
  due: string; // yyyy-MM-dd local
  reviews: number;
  lastReviewed?: string;
};

export type Member = {
  id: string;
  name: string;
  streak: number;
  /** The last local day they finished a lesson (yyyy-MM-dd). */
  lastDone?: string;
  /** The day you last nudged them. */
  nudgedOn?: string;
};

export type PrayerRequest = {
  id: string;
  memberId: string; // "me" for the user
  text: string;
  createdAt: number;
  prayedBy: string[]; // member ids, "me" included
};

export type Nudge = { id: string; from: string; on: string };

/** A chat message. thread is "group" for the group chat, or a member id for a private chat. */
export type Message = {
  id: string;
  thread: string;
  from: string; // "me" or a member id
  text: string;
  at: number;
};

/** Where you left off in the Bible reader. */
export type ReadingSpot = { book: string; chapter: number };
