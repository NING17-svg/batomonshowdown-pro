import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Batomon Showdown Guide",
  brandMark: "BS",
  gameName: "Batomon Showdown",
  domain: "batomonshowdown.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://batomonshowdown.pro").replace(/\/$/, ""),
  description:
    "Unofficial Batomon Showdown fan guide hub: release info, beginner strategy, monsters, teams, and launch-day FAQs for the Steam PvP auto-battler.",
  tagline: "Batomon Showdown guides, wiki notes, release info, and launch FAQs in one clean hub.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Batomon Showdown Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Batomon Showdown on Steam",
      href: "https://store.steampowered.com/app/4557380/",
      description: "Official Batomon Showdown store page on Steam (AppID 4557380).",
    },
    {
      label: "Batomon Showdown Supporter Pack DLC on Steam",
      href: "https://store.steampowered.com/app/5255370/",
      description: "Official supporter cosmetic DLC for Batomon Showdown on Steam (AppID 5255370).",
    },
  ],
  disclaimer:
    "This is an unofficial Batomon Showdown fan guide. Information is sourced from the official Steam store pages and store metadata. Verify time-sensitive details with the publisher.",
};
