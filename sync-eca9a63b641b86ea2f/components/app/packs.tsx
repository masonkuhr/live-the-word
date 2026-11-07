import { useEffect, useState } from "react";
import {
  BadgeCheck, CloudSun, Link, ScrollText, SunMedium,
  MessageCircleHeart, Music, Scale, UserRound, UsersRound,
  Anchor, Coins, HeartPulse, HouseHeart, Users,
  Cross, Footprints, Gift, HeartHandshake, Sparkles,
  Bird, Compass, Droplet, Hammer, HandHelping,
  Crown, Flower2, Hourglass, MessageSquareHeart, Moon,
  CloudRain, Fingerprint, Flame, HandHeart, Handshake, Heart, Leaf, Lightbulb, LockKeyhole, MessageCircle, Mountain, Route,
  Shield, ShieldCheck, Smile, Sprout, Sun, Sunrise, Unlock, Wheat, Wind, type LucideIcon,
} from "lucide-react-native";
import { Badge, Card, IconTile, Row, Small, Stack, sizes } from "@/components/ui";
import { colors } from "@/constants/theme";
import { Strong } from "@/components/app/Scripture";
import type { Pack, PackIcon } from "@/types";
import { formatPrice, getOfferings } from "@/lib/pay";
import { useT } from "@/lib/i18n";

export const PACK_ICON: Record<PackIcon, LucideIcon> = {
  anxiety: Wind,
  identity: Fingerprint,
  habits: Unlock,
  road: Route,
  shepherd: Leaf,
  share: MessageCircle,
  grief: CloudRain,
  courage: Shield,
  forgive: Handshake,
  anger: Flame,
  provision: Wheat,
  hope: Sunrise,
  prayer: HandHeart,
  beatitudes: Mountain,
  fruit: Sprout,
  love: Heart,
  armor: ShieldCheck,
  iam: Sun,
  wisdom: Lightbulb,
  joy: Smile,
  wealth: Coins,
  health: HeartPulse,
  friends: Users,
  family: HouseHeart,
  anchor: Anchor,
  jesus: Cross,
  faith: Footprints,
  reconcile: HeartHandshake,
  goodness: Gift,
  grace: Sparkles,
  spirit: Bird,
  purpose: Compass,
  work: Hammer,
  purity: Droplet,
  humility: HandHelping,
  waiting: Hourglass,
  gratitude: Flower2,
  rest: Moon,
  words: MessageSquareHeart,
  heaven: Crown,
  praying: MessageCircleHeart,
  worship: Music,
  neighbor: UsersRound,
  justice: Scale,
  lonely: UserRound,
  sorrow: CloudSun,
  cross: SunMedium,
  promises: ScrollText,
  obey: BadgeCheck,
  unity: Link,
};

/** "$4.99/mo or $34.99/yr", from the real offerings; null while loading or if they fail. */
export function usePriceLine(): string | null {
  const [line, setLine] = useState<string | null>(null);
  useEffect(() => {
    let on = true;
    getOfferings()
      .then((list) => {
        const m = list.find((p) => p.interval === "month");
        const y = list.find((p) => p.interval === "year");
        const parts = [m, y].filter(Boolean).map((p) => formatPrice(p!));
        if (on && parts.length) setLine(parts.join(" or "));
      })
      .catch(() => {});
    return () => { on = false; };
  }, []);
  return line;
}

type Props = {
  pack: Pack;
  onPress: () => void;
  badge?: string;
  locked?: boolean;
  learned?: number;
  active?: boolean;
};

// One path as a tappable card: icon, name, what it's for, verse count and minutes a day.
export function PackCard({ pack, onPress, badge, locked, learned, active }: Props) {
  const t = useT();
  const meta = t("{n} verses \u{b7} {min} min a day", { n: pack.verses.length, min: pack.minutes }) + (learned ? t(" \u{b7} {n} learned", { n: learned }) : "");
  return (
    <Card onPress={onPress} tone={active ? "accent" : "default"}>
      <Row gap="md" align="flex-start">
        <IconTile icon={PACK_ICON[pack.icon]} tone={locked ? "neutral" : "accent"} />
        <Stack gap="xs" style={{ flex: 1 }}>
          {badge ? <Badge label={badge} tone="accent" /> : null}
          <Strong>{t(pack.title)}</Strong>
          <Small>{t(pack.tagline)}</Small>
          <Small muted={false}>{meta}</Small>
        </Stack>
        {locked ? <LockKeyhole size={sizes.icon.md} color={colors.faint} strokeWidth={2} /> : null}
      </Row>
    </Card>
  );
}
