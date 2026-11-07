// Fixed content the app ships with: the packs, translations, onboarding choices and the rules.
import type { Pack, TranslationId, Verse } from "@/types";
import { URDU } from "@/lib/packs/urdu";
import { ORIGINAL_SCRIPT } from "@/lib/packs/originals";
import { SPANISH } from "@/lib/packs/spanish";
import { HINDI } from "@/lib/packs/hindi";
import { BENGALI } from "@/lib/packs/bengali";
import { anxiety } from "@/lib/packs/anxiety";
import { identity } from "@/lib/packs/identity";
import { habits } from "@/lib/packs/habits";
import { road } from "@/lib/packs/road";
import { psalm23 } from "@/lib/packs/psalm23";
import { share } from "@/lib/packs/share";
import { courage, forgive, grief, hope, provision } from "@/lib/packs/heart";
import { anger, armor, fruit, love, wisdom } from "@/lib/packs/growth";
import { beatitudes, iam, joy, prayer } from "@/lib/packs/words";
import { family, friends, health, livingHope, wealth } from "@/lib/packs/b1/paths";
import { B1_BEN, B1_HIN, B1_RVR, B1_SCRIPT, B1_URD } from "@/lib/packs/b1/text";
import { faith, goodness, grace, jesus, reconcile } from "@/lib/packs/b2/paths";
import { B2_BEN, B2_HIN, B2_RVR, B2_SCRIPT, B2_URD } from "@/lib/packs/b2/text";
import { humility, purity, purpose, spirit, work } from "@/lib/packs/b3/paths";
import { B3_BEN, B3_HIN, B3_RVR, B3_SCRIPT, B3_URD } from "@/lib/packs/b3/text";
import { gratitude, heaven, lifeWords, rest, waiting } from "@/lib/packs/b4/paths";
import { B4_BEN, B4_HIN, B4_RVR, B4_SCRIPT, B4_URD } from "@/lib/packs/b4/text";
import { justice, lonely, neighbor, praying, worship } from "@/lib/packs/b5/paths";
import { B5_BEN, B5_HIN, B5_RVR, B5_SCRIPT, B5_URD } from "@/lib/packs/b5/text";
import { cross, obey, promises, sorrow, unity } from "@/lib/packs/b6/paths";
import { B6_BEN, B6_HIN, B6_RVR, B6_SCRIPT, B6_URD } from "@/lib/packs/b6/text";

/** The paths (called "packs" in code). The first one a person picks is free. */
export const PACKS: Pack[] = [
  anxiety, identity, road, psalm23, habits, share,
  grief, courage, forgive, hope, provision, anger,
  prayer, beatitudes, iam, love, fruit, armor, wisdom, joy,
  wealth, health, friends, family, livingHope,
  jesus, faith, reconcile, goodness, grace,
  spirit, purpose, work, purity, humility,
  waiting, gratitude, rest, lifeWords, heaven,
  praying, worship, neighbor, justice, lonely,
  sorrow, cross, promises, obey, unity,
];

Object.assign(URDU, B1_URD, B2_URD, B3_URD, B4_URD, B5_URD, B6_URD);
Object.assign(SPANISH, B1_RVR, B2_RVR, B3_RVR, B4_RVR, B5_RVR, B6_RVR);
Object.assign(HINDI, B1_HIN, B2_HIN, B3_HIN, B4_HIN, B5_HIN, B6_HIN);
Object.assign(BENGALI, B1_BEN, B2_BEN, B3_BEN, B4_BEN, B5_BEN, B6_BEN);
Object.assign(ORIGINAL_SCRIPT, B1_SCRIPT, B2_SCRIPT, B3_SCRIPT, B4_SCRIPT, B5_SCRIPT, B6_SCRIPT);

// Every lesson verse gets its Urdu text (Urdu Geo Version).
for (const p of PACKS) for (const v of p.verses) if (URDU[v.id]) v.text.URD = URDU[v.id];
// And its Spanish text (Reina-Valera 1909).
for (const p of PACKS) for (const v of p.verses) if (SPANISH[v.id]) v.text.RVR = SPANISH[v.id];
// And its Hindi text (Indian Revised Version).
for (const p of PACKS) for (const v of p.verses) if (HINDI[v.id]) v.text.HIN = HINDI[v.id];
// And its Bengali text (Indian Revised Version).
for (const p of PACKS) for (const v of p.verses) if (BENGALI[v.id]) v.text.BEN = BENGALI[v.id];
// And its root word in Hebrew or Greek letters.
for (const p of PACKS) for (const v of p.verses) if (ORIGINAL_SCRIPT[v.id]) v.original.script = ORIGINAL_SCRIPT[v.id];

export type Translation = { id: TranslationId; name: string; short: string; note: string; language: string; rtl?: boolean; credit: string };

/** Everyone gets KJV and WEB; each country adds its most common native translation (and the US adds Spanish). */
export const TRANSLATIONS: Translation[] = [
  { id: "KJV", name: "King James Version", short: "KJV", note: "The classic wording many of us grew up with", language: "English", credit: "King James Version \u{b7} public domain" },
  { id: "WEB", name: "World English Bible", short: "WEB", note: "Plain modern English", language: "English", credit: "World English Bible \u{b7} public domain" },
  { id: "RVR", name: "Reina-Valera 1909", short: "RV1909", note: "The classic Spanish Bible, public domain", language: "Spanish", credit: "Reina-Valera 1909 \u{b7} public domain" },
  { id: "HIN", name: "Indian Revised Version (Hindi)", short: "\u{939}\u{93f}\u{928}\u{94d}\u{926}\u{940}", note: "\u{92a}\u{935}\u{93f}\u{924}\u{94d}\u{930} \u{92c}\u{93e}\u{907}\u{92c}\u{93f}\u{932} \u{b7} \u{906}\u{927}\u{941}\u{928}\u{93f}\u{915} \u{939}\u{93f}\u{928}\u{94d}\u{926}\u{940}", language: "Hindi", credit: "Indian Revised Version (IRV) Hindi \u{a9} 2017-2019 Bridge Connectivity Solutions \u{b7} CC BY-SA 4.0 \u{b7} cross-references removed" },
  { id: "BEN", name: "Indian Revised Version (Bengali)", short: "\u{9ac}\u{9be}\u{982}\u{9b2}\u{9be}", note: "\u{9aa}\u{9ac}\u{9bf}\u{9a4}\u{9cd}\u{9b0} \u{9ac}\u{9be}\u{987}\u{9ac}\u{9c7}\u{9b2} \u{b7} \u{986}\u{9a7}\u{9c1}\u{9a8}\u{9bf}\u{995} \u{9ac}\u{9be}\u{982}\u{9b2}\u{9be}", language: "Bengali", credit: "Indian Revised Version (IRV) Bengali \u{a9} 2017 Bridge Connectivity Solutions \u{b7} CC BY-SA 4.0 \u{b7} cross-references removed, a few spelling slips fixed" },
  { id: "URD", name: "Urdu Geo Version", short: "\u{627}\u{631}\u{62f}\u{648}", note: "\u{6a9}\u{62a}\u{627}\u{628}\u{650} \u{645}\u{642}\u{62f}\u{651}\u{633} \u{b7} \u{62c}\u{62f}\u{6cc}\u{62f} \u{627}\u{631}\u{62f}\u{648} \u{62a}\u{631}\u{62c}\u{645}\u{6c1}", language: "Urdu", rtl: true, credit: "Urdu Geo Version \u{a9} 2019 urdugeoversion.com \u{b7} CC BY-NC-ND 4.0" },
];
export const translationById = (id?: TranslationId) => TRANSLATIONS.find((t) => t.id === id) ?? TRANSLATIONS[0];
export const isRTL = (id?: TranslationId) => !!translationById(id).rtl;

/** A verse's text in a translation, falling back to the World English Bible. */
export const vt = (v: Verse, t: TranslationId) => v.text[t] ?? v.text.WEB;

export type InviteChannel = "whatsapp" | "sms";
export type Country = { code: string; name: string; invite: InviteChannel; native?: TranslationId; /** Other translations offered there (not chosen automatically). */ extra?: TranslationId[]; /** The app language people there start with (English if unset). */ lang?: "en" | "ur" | "es" | "hi" | "bn" };

/** Where you live sets your invite style (WhatsApp or text) and your native translation. */
export const COUNTRIES: Country[] = [
  { code: "US", name: "United States", invite: "sms", extra: ["RVR"] },
  { code: "CA", name: "Canada", invite: "sms" },
  { code: "PK", name: "Pakistan", invite: "whatsapp", native: "URD", lang: "ur" },
  { code: "GB", name: "United Kingdom", invite: "whatsapp" },
  { code: "AU", name: "Australia", invite: "sms" },
  { code: "NZ", name: "New Zealand", invite: "sms" },
  { code: "IE", name: "Ireland", invite: "whatsapp" },
  { code: "IN", name: "India", invite: "whatsapp", extra: ["HIN", "BEN"] },
  { code: "BD", name: "Bangladesh", invite: "whatsapp", native: "BEN", lang: "bn" },
  { code: "NG", name: "Nigeria", invite: "whatsapp" },
  { code: "GH", name: "Ghana", invite: "whatsapp" },
  { code: "KE", name: "Kenya", invite: "whatsapp" },
  { code: "ZA", name: "South Africa", invite: "whatsapp" },
  { code: "PH", name: "Philippines", invite: "sms" },
  { code: "AE", name: "United Arab Emirates", invite: "whatsapp" },
  { code: "OTHER", name: "Somewhere else", invite: "whatsapp" },
];
export const countryByCode = (code?: string) => COUNTRIES.find((c) => c.code === code);

/** Where the law asks people to tick a box before getting emails (UK, Ireland, Canada). Everywhere else, emails are on by default. */
export const EMAIL_OPT_IN_COUNTRIES = ["GB", "IE", "CA"];
/** Whether someone gets email updates: their own choice, or the default for their country. */
export const emailUpdatesOn = (choice: boolean | undefined, country?: string) => choice ?? !EMAIL_OPT_IN_COUNTRIES.includes(country ?? "");

/** The translations a person sees: KJV, WEB and their country's native one (or every language, when they ask). */
export function translationsFor(country?: string, allLanguages?: boolean): Translation[] {
  if (allLanguages) return TRANSLATIONS;
  const c = countryByCode(country);
  return TRANSLATIONS.filter((t) => t.id === "KJV" || t.id === "WEB" || t.id === c?.native || !!c?.extra?.includes(t.id));
}

// Onboarding: what you want to carry with you
export const CARRY = [
  { id: "peace", title: "Peace when anxiety hits", subtitle: "Words for the 2am spiral" },
  { id: "identity", title: "Who God says I am", subtitle: "Sonship and daughtership" },
  { id: "freedom", title: "Freedom from a habit", subtitle: "Something keeps pulling me back" },
  { id: "share", title: "Words when someone asks", subtitle: "Explain my faith without freezing" },
] as const;

// Onboarding: where you are in your faith journey
export const JOURNEY = [
  { id: "new", title: "Just getting started", subtitle: "Still finding my way around the Bible" },
  { id: "growing", title: "Growing", subtitle: "I read, but it doesn't stick yet" },
  { id: "rooted", title: "Years in", subtitle: "I've read it for years and still can't quote it" },
] as const;

/** Days until the next review, by memory box (1 = just learned, 6 = known for good). */
export const REVIEW_INTERVALS = [1, 2, 4, 7, 14, 30];
export const MAX_BOX = REVIEW_INTERVALS.length;
export const FREEZES_PER_MONTH = 2;
export const GROUP_MAX = 8;
/** How many prayer groups one person can be in at once. */
export const MY_GROUPS_MAX = 3;
/** Lockscreen verse reminder times (24h). */
export const LOCKSCREEN_HOURS = [8, 13, 20];
/** Invite links open the web app's join page with the group code. */
export const INVITE_BASE = (typeof window !== "undefined" && window.location?.origin ? window.location.origin : "https://livetheword.app") + (process.env.EXPO_BASE_URL ?? "") + "/join/";

export const ROUNDS = [
  { id: "read", label: "Read it" },
  { id: "blanks", label: "Fill the blanks" },
  { id: "order", label: "Put it in order" },
  { id: "letters", label: "First letters only" },
  { id: "meaning", label: "What it means" },
] as const;
export type RoundId = (typeof ROUNDS)[number]["id"];

export function packById(id?: string): Pack | undefined {
  return PACKS.find((p) => p.id === id);
}

export function findVerse(id?: string): { verse: Verse; pack: Pack; index: number } | undefined {
  if (!id) return undefined;
  for (const pack of PACKS) {
    const index = pack.verses.findIndex((v) => v.id === id);
    if (index >= 0) return { verse: pack.verses[index], pack, index };
  }
  return undefined;
}

/** The packs that fit an onboarding answer first, then the rest. */
export function recommendedPacks(carry?: string): Pack[] {
  if (!carry) return PACKS;
  return [...PACKS.filter((p) => p.fits.includes(carry)), ...PACKS.filter((p) => !p.fits.includes(carry))];
}
