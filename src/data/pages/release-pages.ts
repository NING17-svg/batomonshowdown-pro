import type { PageContent } from "@/types/content";

export const releasePages: PageContent[] = [
  {
    id: "release-status",
    translationKey: "release-status",
    locale: "en-US",
    routeKind: "fixed",
    slug: "release-status",
    url: "/release-status",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Batomon Showdown release date and launch status",
    seoTitle:
      "Batomon Showdown release date: Sep 15, 2026 launch | Windows PC, $14.99",
    metaDescription:
      "Batomon Showdown release date was Sep 15, 2026 on Steam. Price is $14.99 ($9.74 introductory until Sep 29) on Windows PC. Very Positive reviews.",
    summary:
      "Launch status snapshot for Batomon Showdown: release date, supported platform, pricing window, review aggregate, and Supporter Pack DLC.",
    hero: {
      eyebrow: "Release status",
      subtitle:
        "Release date, platform, pricing, and review status for Batomon Showdown, dated to the September 18, 2026 Steam store snapshot.",
      ctas: [
        { label: "How to Play", href: "/how-to-play" },
        { label: "Monsters", href: "/monsters" },
      ],
    },
    quickAnswer:
      "The Batomon Showdown release date was September 15, 2026 on Steam for Windows PC. The base price is $14.99, with an introductory price of $9.74 available until September 29, 2026. As of 2026-09-18, the game holds a Very Positive aggregate with 88% positive reviews out of 358 reviews on its Steam store page.",
    keyFacts: [
      { label: "Release date", value: "September 15, 2026" },
      { label: "Platform", value: "Windows PC via Steam" },
      { label: "AppID", value: "4557380" },
      { label: "Base price", value: "$14.99 USD" },
      { label: "Introductory price", value: "$9.74 USD until September 29, 2026" },
      { label: "Review aggregate", value: "Very Positive (88% of 358 reviews)" },
      { label: "Interface languages", value: "11 storefront UI translations" },
      { label: "DLC", value: "Supporter Pack, AppID 5255370, $4.99 USD" },
    ],
    modules: [
      {
        id: "release-platform-price",
        type: "prose",
        heading: "Release date, platform, and price",
        body:
          "The official launch of Batomon Showdown was September 15, 2026, listed on the Steam store page for AppID 4557380. The store page lists Windows PC as the supported platform at launch. No additional platforms, including macOS, Linux, Steam Deck verification beyond Valve's published badge, mobile, or consoles, are announced as of 2026-09-18, so the launch is Windows-only on Steam until berrymint or Valve publishes further compatibility information. Pricing at launch follows a standard Steam two-tier window. The base price is $14.99, and an introductory price of $9.74 is in effect until September 29, 2026. After that date, the store page lists only the $14.99 base price. The introductory window is the cheapest window currently available for buyers who are ready to commit. Pricing is denominated in USD on the US storefront and can vary by region when purchased from a different Steam storefront; the values on this page reflect the en-US store snapshot from 2026-09-18. The Steam store page also lists 11 interface languages for the in-game UI. Those languages are Steam storefront UI translations and are not the same as a fully localized launch site or a fully localized store description; the en-US launch locale is the only one covered by this site and is the language the store description is written in.",
      },
      {
        id: "release-reviews",
        type: "prose",
        heading: "Review status, availability, and DLC",
        body:
          "The Steam review aggregate for Batomon Showdown sits at Very Positive as of 2026-09-18, with 88% of 358 reviews positive. That aggregate covers the first days of public availability and will continue to shift as more reviews come in. A Very Positive rating at this volume signals that early buyers have responded well to the asynchronous PvP auto-battler pitch, but it is a small sample and should not be read as a long-term verdict. Availability right now is straightforward: the base game is sold on Steam under AppID 4557380 and is downloadable in any region where Steam sells it, subject to regional store policies. An optional Supporter Pack DLC is sold separately under AppID 5255370 for $4.99. The DLC is cosmetic-support content; the base game includes all gameplay features regardless of whether the DLC is owned. The dlc-skin-pack page has more on what the Supporter Pack includes and how it relates to the base game. Two adjacent facts are useful for buyers deciding whether to purchase now or wait. First, the introductory price ends on September 29, 2026, so waiting past that date removes the only discount window currently scheduled. Second, the Windows-only platform note means Mac and Linux users will not be able to install the game through Steam on those operating systems at launch.",
      },
      {
        id: "release-not-included",
        type: "callout",
        tone: "caution",
        title: "What the launch does not include",
        body:
          "A few items that are commonly assumed for an auto-battler launch are not announced for Batomon Showdown as of 2026-09-18. There is no published roadmap for additional platforms, no confirmed release of a mobile or console port, and no announced sequel or expansion. The Supporter Pack is the only paid DLC currently listed on the store page. For players who want to confirm the launch state on the day they read it, the Steam store page and SteamDB listing are the two authoritative surfaces to check.",
      },
      {
        id: "release-sources",
        type: "prose",
        heading: "Sources",
        body: "Launch facts and pricing come from the official Steam store page and SteamDB listing.",
        links: [
          {
            label: "Batomon Showdown on Steam (AppID 4557380)",
            href: "https://store.steampowered.com/app/4557380/",
            description:
              "official/store — release date, Windows PC platform, $14.99 base price, $9.74 introductory price, Very Positive aggregate.",
          },
          {
            label: "Batomon Showdown on SteamDB",
            href: "https://steamdb.info/app/4557380/",
            description:
              "wiki/reference — AppID, developer berrymint, publisher berrymint, release metadata.",
          },
        ],
      },
    ],
    faqIds: [
      "release-when-did-it-launch",
      "release-is-on-steam",
      "release-how-much",
      "release-steam-deck",
      "release-is-there-dlc",
    ],
    relatedPageIds: ["system-requirements", "monsters", "best-team", "dlc-skin-pack"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
];