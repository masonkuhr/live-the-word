// The lesson questions, answers, explanations and root-word meanings in Spanish, Urdu, Hindi and Bengali, as phrase lists
// keyed by the English (the same way as the rest of the app's words in lib/i18n.ts).
import { PACKS } from "@/lib/content";
import { LESSONS_ES } from "@/lib/packs/lessons-es";
import { LESSONS_UR } from "@/lib/packs/lessons-ur";
import { LESSONS_HI } from "@/lib/packs/lessons-hi";
import { LESSONS_BN } from "@/lib/packs/lessons-bn";
import { B1_L_ES } from "@/lib/packs/b1/es";
import { B2_L_ES } from "@/lib/packs/b2/es";
import { B3_L_ES } from "@/lib/packs/b3/es";
import { B4_L_ES } from "@/lib/packs/b4/es";
import { B5_L_ES } from "@/lib/packs/b5/es";
import { B6_L_ES } from "@/lib/packs/b6/es";
import { B1_L_UR } from "@/lib/packs/b1/ur";
import { B2_L_UR } from "@/lib/packs/b2/ur";
import { B3_L_UR } from "@/lib/packs/b3/ur";
import { B4_L_UR } from "@/lib/packs/b4/ur";
import { B5_L_UR } from "@/lib/packs/b5/ur";
import { B6_L_UR } from "@/lib/packs/b6/ur";
import { B1_L_HI } from "@/lib/packs/b1/hi";
import { B2_L_HI } from "@/lib/packs/b2/hi";
import { B3_L_HI } from "@/lib/packs/b3/hi";
import { B4_L_HI } from "@/lib/packs/b4/hi";
import { B5_L_HI } from "@/lib/packs/b5/hi";
import { B6_L_HI } from "@/lib/packs/b6/hi";
import { B1_L_BN } from "@/lib/packs/b1/bn";
import { B2_L_BN } from "@/lib/packs/b2/bn";
import { B3_L_BN } from "@/lib/packs/b3/bn";
import { B4_L_BN } from "@/lib/packs/b4/bn";
import { B5_L_BN } from "@/lib/packs/b5/bn";
import { B6_L_BN } from "@/lib/packs/b6/bn";

function pair(lists: Record<string, string[]>, fix: Record<string, string> = {}) {
  const out: Record<string, string> = {};
  for (const p of PACKS)
    for (const v of p.verses) {
      const en = [v.question.prompt, ...v.question.options, v.question.why, v.original.english, v.original.meaning];
      lists[v.id]?.forEach((x, i) => { if (x && out[en[i]] === undefined) out[en[i]] = x; });
    }
  return { ...out, ...fix };
}

// A root word shared by two verses gets one plain form.
export const ES_LESSONS = pair({ ...LESSONS_ES, ...B1_L_ES, ...B2_L_ES, ...B3_L_ES, ...B4_L_ES, ...B5_L_ES, ...B6_L_ES }, { confess: "confesar", abideth: "permanecer", walk: "andar" });
export const UR_LESSONS = pair({ ...LESSONS_UR, ...B1_L_UR, ...B2_L_UR, ...B3_L_UR, ...B4_L_UR, ...B5_L_UR, ...B6_L_UR });
export const HI_LESSONS = pair({ ...LESSONS_HI, ...B1_L_HI, ...B2_L_HI, ...B3_L_HI, ...B4_L_HI, ...B5_L_HI, ...B6_L_HI }, { confess: "\u{92e}\u{93e}\u{928} \u{932}\u{947}\u{928}\u{93e}", abideth: "\u{92c}\u{928}\u{947} \u{930}\u{939}\u{928}\u{93e}", walk: "\u{91a}\u{932}\u{928}\u{93e}" });
export const BN_LESSONS = pair({ ...LESSONS_BN, ...B1_L_BN, ...B2_L_BN, ...B3_L_BN, ...B4_L_BN, ...B5_L_BN, ...B6_L_BN }, { confess: "\u{9b8}\u{9cd}\u{9ac}\u{9c0}\u{995}\u{9be}\u{9b0} \u{995}\u{9b0}\u{9be}", abideth: "\u{9a5}\u{9be}\u{995}\u{9be}", walk: "\u{99a}\u{9b2}\u{9be}" });
