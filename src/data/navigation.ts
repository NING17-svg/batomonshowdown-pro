import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/release-status", labels: { "en-US": "Release Status" } },
  { href: "/monsters", labels: { "en-US": "Monsters" } },
  { href: "/best-team", labels: { "en-US": "Best Team" } },
  { href: "/best-builds", labels: { "en-US": "Best Builds" } },
  { href: "/events", labels: { "en-US": "Events" } },
  { href: "/trainers", labels: { "en-US": "Trainers" } },
  { href: "/how-to-play", labels: { "en-US": "How to Play" } },
  { href: "/tips", labels: { "en-US": "Tips" } },
  { href: "/dlc-skin-pack", labels: { "en-US": "Supporter Pack" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/faq", labels: { "en-US": "FAQ" } },
  { href: "/system-requirements", labels: { "en-US": "System Requirements" } },
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

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