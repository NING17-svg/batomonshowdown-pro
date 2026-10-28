import type { PageContent } from "@/types/content";

export const releasePages: PageContent[] = [
  {
    id: "dlc-skin-pack",
    translationKey: "dlc-skin-pack",
    locale: "en-US",
    routeKind: "fixed",
    slug: "dlc-skin-pack",
    url: "/dlc-skin-pack",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Batomon Showdown Supporter Pack: Skin DLC",
    seoTitle: "Batomon Showdown Supporter Pack: Skins and DLC Details",
    metaDescription:
      "See what is included in the Batomon Showdown Supporter Pack, its three badge case skins, base-game requirement, and cosmetic-only status.",
    summary:
      "The optional Batomon Showdown Supporter Pack is a cosmetic DLC with three badge case skins and no gameplay benefits.",
    hero: {
      eyebrow: "Optional Steam DLC",
      subtitle:
        "The Supporter Pack adds badge case appearance options; it does not add gameplay content or bonuses.",
      ctas: [
        {
          label: "Open the Supporter Pack on Steam",
          href: "https://store.steampowered.com/app/5255370/Batomon_Showdown_Supporter_Pack/",
        },
      ],
    },
    quickAnswer:
      "The Batomon Showdown - Supporter Pack (Steam App ID 5255370) includes three badge case skins—Gamer, Shopkeeper, and Redhead. Steam describes it as purely cosmetic with no gameplay benefits or content, and it requires the base game.",
    keyFacts: [
      { label: "DLC", value: "Batomon Showdown - Supporter Pack" },
      { label: "Included items", value: "Gamer, Shopkeeper, and Redhead badge case skins" },
      { label: "Gameplay effect", value: "Cosmetic only; no gameplay benefits" },
    ],
    modules: [
      {
        id: "supporter-pack-items",
        type: "data-table",
        heading: "What the pack includes",
        columns: [
          { key: "item", label: "Item" },
          { key: "type", label: "Type" },
        ],
        rows: [
          { item: "Gamer Badge Case Skin", type: "Cosmetic appearance" },
          { item: "Shopkeeper Badge Case Skin", type: "Cosmetic appearance" },
          { item: "Redhead Badge Case Skin", type: "Cosmetic appearance" },
        ],
      },
      {
        id: "supporter-pack-buying-notes",
        type: "prose",
        heading: "Price, base game, and gameplay impact",
        body:
          "The Steam listing requires the base game, *Batomon Showdown*, to use the pack. On 28 October 2026, Steam showed a US store price of $4.99; local currency and prices can vary by region and change over time, so check the [current Supporter Pack listing](https://store.steampowered.com/app/5255370/Batomon_Showdown_Supporter_Pack/) before buying. The developer's description says the pack is purely cosmetic and includes no gameplay benefits or additional gameplay content. Buying it is optional; it does not unlock a Batomon, Trainer, trinket, or gameplay system.",
      },
      {
        id: "supporter-pack-source",
        type: "prose",
        heading: "Official store source",
        body:
          "The item list and cosmetic-only statement come from the [official Steam DLC page](https://store.steampowered.com/app/5255370/Batomon_Showdown_Supporter_Pack/). The base game is listed separately on the [Batomon Showdown Steam page](https://store.steampowered.com/app/4557380/Batomon_Showdown/).",
      },
    ],
    faqIds: ["dlc-supporter-pack"],
    relatedPageIds: ["guide-beginner-guide", "faq", "about"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-28",
  },
];
