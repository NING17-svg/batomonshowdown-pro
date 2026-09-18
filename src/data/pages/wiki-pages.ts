import type { PageContent } from "@/types/content";

export const wikiPages: PageContent[] = [
  {
    id: "monsters",
    translationKey: "monsters",
    locale: "en-US",
    routeKind: "fixed",
    slug: "monsters",
    url: "/monsters",
    pageType: "wiki",
    presentation: { shell: "hub" },
    h1: "Batomon Showdown monsters: roster and creature collection",
    seoTitle:
      "Batomon Showdown monsters: roster framing and creature collection loop",
    metaDescription:
      "Batomon Showdown monsters span dragons, cats, dogs, and horses per Steam tags. The creature collection loop lets you level Batomon via abilities and items.",
    summary:
      "Steam-tagged framing for the Batomon Showdown monster roster plus the collection and leveling loop, without promising a per-creature reference.",
    hero: {
      eyebrow: "Roster framing",
      subtitle:
        "How the Steam tags shape the Batomon Showdown monsters roster and how the collection loop turns encounters into a leveled team.",
      ctas: [
        { label: "Best Team", href: "/best-team" },
        { label: "Trainers", href: "/trainers" },
      ],
    },
    quickAnswer:
      "Batomon Showdown monsters are organized around a creature-collection roster whose public framing comes from the Steam store page tags. Those tags include Creature Collector, Auto Battler, Card Battler, Dragons, Horses, Cats, and Dogs, which signals a roster that mixes creature silhouettes with collectible progression. The collection loop centers on encountering Batomon, attaching trinkets and items, and leveling them through abilities and items over the course of async PvP play.",
    keyFacts: [
      { label: "Tag set", value: "Creature Collector, Auto Battler, Card Battler, Dragons, Horses, Cats, Dogs" },
      { label: "Collection loop", value: "Encounter, attach trinkets and items, level via abilities and items" },
      { label: "Match mode", value: "Asynchronous PvP, server resolves battles" },
      { label: "Per-monster reference", value: "Not enumerated in public store description" },
    ],
    modules: [
      {
        id: "monsters-framing",
        type: "prose",
        heading: "How the Batomon Showdown monsters roster is framed",
        body:
          "The Steam store page tags Batomon Showdown as a Creature Collector, Auto Battler, and Card Battler, and adds Dragons, Horses, Cats, and Dogs as topical creature tags. That tag list is the most concrete piece of public information about the Batomon Showdown monsters roster. It tells you the game blends creature collection with auto-battler combat and frames its creatures around archetypes players already recognize from the monster-taming genre. The store description adds two more useful facts. First, battles are asynchronous, so the roster you bring into a match matters more than reaction time. Second, progression runs through leveling Batomon via abilities and items, which means the roster is not a flat list but a set of creatures that change in value as you invest in them. That framing matters for buyers who are deciding whether the game rewards long-term collection or short-term power. What the store page does not currently give you is a fully enumerated list of individual Batomon. The game is a new IP released on 2026-09-15, and per-creature names, base stats, and abilities are not part of the public launch description in a stable form. The monsters page on this site therefore frames the roster around tags, collection loop, and progression mechanics rather than promising a per-monster reference that the underlying data does not yet support.",
      },
      {
        id: "monsters-loop",
        type: "prose",
        heading: "The collection loop in Batomon Showdown",
        body:
          "The collection loop in Batomon Showdown follows the same general shape as other modern auto-battlers. You encounter Batomon through normal play, you bring them into your roster, and you invest in them through the abilities and items the game provides. Because combat is asynchronous and resolves on the server, the meaningful choices happen before you queue a battle rather than during it. There are four practical decision points where the roster and the collection loop shape your wins. First, which Batomon you have unlocked and leveled. Second, which trinkets you attach to each Batomon, since trinkets modify what each member contributes to a match. Third, which items you bring into a given match, since items often have one-shot or limited-use effects. Fourth, which trainer ability your trainer provides, because the trainer is the system that ties your roster choices together. The trainers page covers the trainer side in detail, and the best-team page covers how the four pieces interact. The leveling system itself runs through abilities and items rather than raw experience, so the way you invest in a Batomon is at least as important as how much you invest. A Batomon that you have leveled through the wrong abilities can underperform even at high investment, while a Batomon whose ability path matches its role on your team can carry matches at modest investment. That is one reason the early game rewards reading ability descriptions carefully and adjusting your roster before chasing more battles.",
      },
      {
        id: "monsters-scope",
        type: "callout",
        tone: "tip",
        title: "What this page does and does not cover",
        body:
          "This page is a framing and loop guide for the Batomon Showdown monsters roster, not a per-monster reference. A per-monster reference would need a stable, licensed source of per-creature stats, ability lists, evolution paths, and tier placement. That data is not part of the public Steam description and has not been reproduced in a stable form elsewhere that this site can cite. Once per-monster data stabilizes in a form the project can cite, a future expansion could add a per-creature list.",
      },
      {
        id: "monsters-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Roster framing comes from the Steam store page tag list and the asynchronous PvP description; community discussion on the Steam Community hub is used only for demand signals, not as a fact source.",
        links: [
          {
            label: "Batomon Showdown on Steam (AppID 4557380)",
            href: "https://store.steampowered.com/app/4557380/",
            description:
              "official/store — tag list, asynchronous PvP description, leveling via abilities and items.",
          },
          {
            label: "Batomon Showdown Steam Community hub",
            href: "https://steamcommunity.com/app/4557380",
            description:
              "community/video — player discussion of roster progression, leveling routes, and synergy choices.",
          },
        ],
      },
    ],
    faqIds: [
      "monsters-how-many",
      "monsters-what-kinds",
      "monsters-how-to-level",
      "monsters-can-you-get-new",
      "monsters-tier-list",
    ],
    relatedPageIds: ["release-status", "best-team", "trainers", "tips"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
];