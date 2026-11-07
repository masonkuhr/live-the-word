// The app's own words in the language a person picks (English, Urdu, Spanish, Hindi or Bengali).
// Each phrase is written in English in the code; lib/i18n-ur.ts holds its Urdu and lib/i18n-es.ts its Spanish. A phrase without
// an Urdu line shows in English, so nothing ever goes blank. {name} marks a value filled in at runtime.
import { useCallback, useEffect } from "react";
import { Platform } from "react-native";
import { useStore } from "@/lib/store";
import { UR as UR_MAIN } from "@/lib/i18n-ur";
import { UR_FIX } from "@/lib/i18n-ur-fix";
import { ES as ES_MAIN } from "@/lib/i18n-es";
import { ES_LESSONS, UR_LESSONS } from "@/lib/i18n-lessons";
import { ES_ADD, UR_ADD } from "@/lib/i18n-add";
import { HI as HI_MAIN } from "@/lib/i18n-hi";
import { HI_LESSONS, BN_LESSONS } from "@/lib/i18n-lessons";
import { BN as BN_MAIN } from "@/lib/i18n-bn";
import { WORD_BN, WORD_ES, WORD_HI, WORD_UR } from "@/lib/i18n-word";
import { WORD2_BN, WORD2_ES, WORD2_HI, WORD2_UR } from "@/lib/i18n-word2";
import { B1_M_ES } from "@/lib/packs/b1/es";
import { B2_M_ES } from "@/lib/packs/b2/es";
import { B3_M_ES } from "@/lib/packs/b3/es";
import { B4_M_ES } from "@/lib/packs/b4/es";
import { B5_M_ES } from "@/lib/packs/b5/es";
import { B6_M_ES } from "@/lib/packs/b6/es";
import { B1_M_UR } from "@/lib/packs/b1/ur";
import { B2_M_UR } from "@/lib/packs/b2/ur";
import { B3_M_UR } from "@/lib/packs/b3/ur";
import { B4_M_UR } from "@/lib/packs/b4/ur";
import { B5_M_UR } from "@/lib/packs/b5/ur";
import { B6_M_UR } from "@/lib/packs/b6/ur";
import { B1_M_HI } from "@/lib/packs/b1/hi";
import { B2_M_HI } from "@/lib/packs/b2/hi";
import { B3_M_HI } from "@/lib/packs/b3/hi";
import { B4_M_HI } from "@/lib/packs/b4/hi";
import { B5_M_HI } from "@/lib/packs/b5/hi";
import { B6_M_HI } from "@/lib/packs/b6/hi";
import { B1_M_BN } from "@/lib/packs/b1/bn";
import { B2_M_BN } from "@/lib/packs/b2/bn";
import { B3_M_BN } from "@/lib/packs/b3/bn";
import { B4_M_BN } from "@/lib/packs/b4/bn";
import { B5_M_BN } from "@/lib/packs/b5/bn";
import { B6_M_BN } from "@/lib/packs/b6/bn";

// App words first, then the lesson questions and meanings; fixes win.
// The name "Bengali" in each language (added with Bengali in November 2026).
const UR: Record<string, string> = { ...UR_LESSONS, ...UR_MAIN, ...UR_ADD, ...UR_FIX, ...WORD_UR, ...WORD2_UR, ...B1_M_UR, ...B2_M_UR, ...B3_M_UR, ...B4_M_UR, ...B5_M_UR, ...B6_M_UR, Bengali: "\u{628}\u{646}\u{6af}\u{627}\u{644}\u{6cc}" };
const ES: Record<string, string> = { ...ES_LESSONS, ...ES_MAIN, ...ES_ADD, ...WORD_ES, ...WORD2_ES, ...B1_M_ES, ...B2_M_ES, ...B3_M_ES, ...B4_M_ES, ...B5_M_ES, ...B6_M_ES, Bengali: "Bengal\u{ed}" };
const HI: Record<string, string> = { ...HI_LESSONS, ...HI_MAIN, ...WORD_HI, ...WORD2_HI, ...B1_M_HI, ...B2_M_HI, ...B3_M_HI, ...B4_M_HI, ...B5_M_HI, ...B6_M_HI, Bengali: "\u{92c}\u{93e}\u{902}\u{917}\u{94d}\u{932}\u{93e}" };
const BN: Record<string, string> = { ...BN_LESSONS, ...BN_MAIN, ...WORD_BN, ...WORD2_BN, ...B1_M_BN, ...B2_M_BN, ...B3_M_BN, ...B4_M_BN, ...B5_M_BN, ...B6_M_BN };

export type Lang = "en" | "ur" | "es" | "hi" | "bn";
export type Vars = Record<string, string | number>;

export const LANGS: { id: Lang; name: string; native: string }[] = [
  { id: "en", name: "English", native: "English" },
  { id: "es", name: "Spanish", native: "Espa\u{f1}ol" },
  { id: "hi", name: "Hindi", native: "\u{939}\u{93f}\u{928}\u{94d}\u{926}\u{940}" },
  { id: "bn", name: "Bengali", native: "\u{9ac}\u{9be}\u{982}\u{9b2}\u{9be}" },
  { id: "ur", name: "Urdu", native: "\u{627}\u{631}\u{62f}\u{648}" },
];

const fill = (s: string, vars?: Vars) => (vars ? s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] == null ? "" : String(vars[k]))) : s);

/** A phrase in a language. */
export function tr(lang: Lang | undefined, en: string, vars?: Vars) {
  return fill(lang === "ur" ? UR[en] ?? en : lang === "es" ? ES[en] ?? en : lang === "hi" ? HI[en] ?? en : lang === "bn" ? BN[en] ?? en : en, vars);
}

/** A phrase in the app's current language, for code outside screens (toasts, share messages). */
export const tNow = (en: string, vars?: Vars) => tr(useStore.getState().uiLang, en, vars);

/** In a screen: const t = useT(); t("Start a group"), t("{n} days", { n }). */
export function useT() {
  const lang = useStore((s) => s.uiLang);
  return useCallback((en: string, vars?: Vars) => tr(lang, en, vars), [lang]);
}

export const useLang = () => useStore((s) => s.uiLang) ?? "en";
/** The locale for dates and times in an app language. */
export const localeOf = (lang?: Lang) => (lang === "ur" ? "ur-PK" : lang === "es" ? "es-US" : lang === "hi" ? "hi-IN" : lang === "bn" ? "bn-BD" : "en-US");

export const isRTLLang = (lang?: Lang) => lang === "ur";

/** Dates in the app's language: "full" is like Monday, November 2; "weekday" is like Monday. */
export function useDate() {
  const lang = useLang();
  return useCallback(
    (d: Date, kind: "full" | "weekday" = "full") =>
      new Intl.DateTimeFormat(localeOf(lang), kind === "full" ? { weekday: "long", month: "long", day: "numeric" } : { weekday: "long" }).format(d),
    [lang]
  );
}

/** "5 minutes ago", "2 days ago" in the app's language. */
export function useAgo() {
  const lang = useLang();
  return useCallback(
    (at: number) => {
      const rtf = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });
      const s = Math.round((at - Date.now()) / 1000);
      const a = Math.abs(s);
      if (a < 60) return rtf.format(0, "second");
      if (a < 3600) return rtf.format(Math.round(s / 60), "minute");
      if (a < 86400) return rtf.format(Math.round(s / 3600), "hour");
      if (a < 86400 * 30) return rtf.format(Math.round(s / 86400), "day");
      return rtf.format(Math.round(s / (86400 * 30)), "month");
    },
    [lang]
  );
}

/** The phone's own languages (like "en-US", "es-MX"), when the browser shares them. */
function phoneLanguages(): string[] {
  const nav: any = typeof navigator !== "undefined" ? navigator : null;
  return nav ? [...(nav.languages ?? []), nav.language].filter(Boolean) : [];
}

/** The languages the welcome page offers beside English, from the phone's language and time zone:
 *  Urdu for Pakistan, Hindi for India, Bengali for Bangladesh, Spanish for the Americas (where it's the second language) or any Spanish phone. */
export function suggestedLangs(): Lang[] {
  try {
    const langs = phoneLanguages();
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
    const out: Lang[] = [];
    if (langs.some((l) => /^ur\b/i.test(l) || /-PK$/i.test(l)) || zone === "Asia/Karachi") out.push("ur");
    if (langs.some((l) => /^es\b/i.test(l)) || zone.startsWith("America/")) out.push("es");
    if (langs.some((l) => /^hi\b/i.test(l) || /-IN$/i.test(l)) || zone === "Asia/Kolkata" || zone === "Asia/Calcutta") out.push("hi");
    if (langs.some((l) => /^bn\b/i.test(l) || /-BD$/i.test(l)) || zone === "Asia/Dhaka") out.push("bn");
    return out;
  } catch {
    return [];
  }
}

/** True when the phone itself is set to Spanish. */
export const phoneIsSpanish = () => phoneLanguages().some((l) => /^es\b/i.test(l));

/** Mounted once: flips the page to right-to-left for Urdu (web), so rows and text read from the right. */
export function LangDirection() {
  const lang = useLang();
  useEffect(() => {
    if (Platform.OS !== "web" || typeof document === "undefined") return;
    document.documentElement.dir = isRTLLang(lang) ? "rtl" : "ltr";
    document.documentElement.lang = lang ?? "en";
  }, [lang]);
  return null;
}
