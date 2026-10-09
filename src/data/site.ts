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
  name: "Batomon Showdown Guides",
  brandMark: "BS",
  gameName: "Batomon Showdown",
  domain: "batomonshowdown.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://batomonshowdown.pro").replace(/\/$/, ""),
  description:
    "Unofficial Batomon Showdown guides for trainers, Batomon tier rankings, meta teams, positioning, trinkets and ranked multiplayer.",
  tagline:
    "Plan your run, pick a Trainer, build a squad and climb the async ladder.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        wikiNavigation: "Guide index",
        homeDetails: "About this guide and recent updates",
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
        onThisPage: "On this page",
        answerContext: "More context",
      },
    },
  ],
  author: "Batomon Showdown Guides",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Batomon Showdown on Steam",
      href: "https://store.steampowered.com/app/4557380/Batomon_Showdown/",
      description: "Official store page for the asynchronous PvP auto-battler.",
    },
  ],
  disclaimer:
    "Unofficial fan guide for Batomon Showdown. Game facts are sourced from public community trackers and the official Steam store page.",
};