import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  children?: LocalizedNavigationItem[];
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/", labels: { "en-US": "Home" } },
  {
    href: "/guides/beginner-guide",
    labels: { "en-US": "Guides" },
    children: [
      { href: "/guides/beginner-guide", labels: { "en-US": "Beginner Guide" } },
      { href: "/guides/trainer-tier-list", labels: { "en-US": "Trainer Tier List" } },
      { href: "/guides/batomon-tier-list", labels: { "en-US": "Batomon Tier List" } },
      { href: "/guides/team-builds-meta", labels: { "en-US": "Best Team & Meta Builds" } },
      { href: "/guides/battle-strategy", labels: { "en-US": "Positioning & Synergies" } },
      { href: "/guides/progression-systems", labels: { "en-US": "Trinkets & Economy" } },
      { href: "/guides/multiplayer-ranked", labels: { "en-US": "Multiplayer & Ranked" } },
    ],
  },
];

export const footerNavigation: LocalizedNavigationItem[] = [];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}