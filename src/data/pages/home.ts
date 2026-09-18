import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "Batomon Showdown: Async PvP Auto-Battler Guide",
  seoTitle:
    "Batomon Showdown: Async PvP Auto-Battler Guide | Release, Monsters, Trainers, Teams",
  metaDescription:
    "Batomon Showdown is an async PvP auto-battler by berrymint. Find release date, prices, monster roster, trainers, and team-synergy guides for this Steam auto-battler.",
  summary:
    "Unofficial Batomon Showdown fan guide hub: release status, monster roster framing, trainer system, team synergy archetypes, system requirements, progression tips, and Supporter Pack DLC.",
  hero: {
    eyebrow: "Unofficial fan guide",
    subtitle:
      "Batomon Showdown guides, wiki notes, release info, and launch FAQs in one clean hub.",
    ctas: [
      { label: "Release Status", href: "/release-status" },
      { label: "Best Team", href: "/best-team" },
    ],
  },
  quickAnswer:
    "Batomon Showdown is an asynchronous PvP auto-battler developed and published by berrymint, released on Steam on September 15, 2026 for Windows PC. Players choose a trainer, assemble a team of Batomon with trinkets and items, then queue battles that resolve server-side. This site covers release status, the creature-collection roster, trainer abilities, best team compositions for async PvP, system requirements, progression tips, and the Supporter Pack DLC.",
  keyFacts: [
    { label: "Title", value: "Batomon Showdown" },
    { label: "Developer / Publisher", value: "berrymint" },
    { label: "Release date", value: "September 15, 2026" },
    { label: "Platform", value: "Windows PC (Steam)" },
    { label: "Base price", value: "$14.99 USD" },
    { label: "Introductory price", value: "$9.74 USD until September 29, 2026" },
    { label: "Mode", value: "Asynchronous PvP auto-battler" },
    { label: "Review status", value: "Very Positive (88% of 358 reviews as of 2026-09-18)" },
    { label: "DLC", value: "Supporter Pack ($4.99, AppID 5255370)" },
  ],
  modules: [
    {
      id: "intro-async-loop",
      type: "prose",
      heading: "What Batomon Showdown is and how the async loop works",
      body:
        "Batomon Showdown is a brand-new IP from indie developer berrymint, and the asynchronous PvP auto-battler hook is what separates it from traditional creature-collection games. Instead of fighting in real time, you line up a roster of Batomon, attach trinkets and items, queue an opponent, and let the server resolve the battle while you step away. When you return, you claim rewards, swap members in or out, and queue the next match. Because battles resolve server-side, the gameplay loop rewards careful team building rather than twitch input, and that is the angle every guide on this site takes. For new players, the practical implication is that you do not need to grind reaction time to win ranked matches. You need a roster you have leveled through abilities and items, a trainer whose ability supports your team shape, and a sense of which synergies the current meta rewards.",
    },
    {
      id: "intro-roster-tags",
      type: "prose",
      heading: "Roster framing from the Steam tags",
      body:
        "The Steam store page tags the title as a Creature Collector, Auto Battler, and Card Battler, and also lists Dragons, Horses, Cats, and Dogs as topical tags. The combination signals a roster that mixes familiar creature silhouettes with collectible progression. The monsters page frames the roster using these tags and explains how the collection loop works without overpromising per-monster details that are not yet publicly enumerated.",
    },
    {
      id: "intro-coverage",
      type: "prose",
      heading: "Coverage on this site",
      body:
        "This site is organized around a small set of stable pages rather than dozens of thin articles. The release-status page answers the date, platform, and pricing questions that drive most launch-day search traffic. The monsters page frames the roster using the Steam tag list. The trainers page covers the trainer selection system and what trainer abilities do for your team. The best-team page brings together trainer, Batomon, trinket, and item choices into synergy archetypes you can copy or adapt. Two more pages round out the practical side: the system-requirements page lists minimum PC specs and notes the Steam Deck compatibility status, the tips page collects progression advice for new players, and the dlc-skin-pack page covers the optional Supporter Pack and how it relates to the base game. Every guide links outward to the right adjacent page so you can move from release status into team building without hunting for the next article.",
    },
    {
      id: "intro-start-here",
      type: "entity-grid",
      heading: "Where to start",
      items: [
        {
          title: "Release Status",
          summary:
            "Confirm the September 15, 2026 launch, $14.99 base price, and Windows PC requirement.",
          href: "/release-status",
        },
        {
          title: "Monsters",
          summary:
            "Frame the Steam-tagged roster and the collection loop without overpromising per-monster stats.",
          href: "/monsters",
        },
        {
          title: "Trainers",
          summary:
            "Read trainer ability categories and pick the trainer that anchors your team.",
          href: "/trainers",
        },
        {
          title: "Best Team",
          summary:
            "Combine trainer, Batomon, trinket, and item choices into synergy archetypes.",
          href: "/best-team",
        },
        {
          title: "Best Builds",
          summary:
            "Pick from six Patch 14 named comps (Hyperbug, Fire Sunsage, Rock Pebbler, Craghorn, Treasure Hunter, Shock Bees) with trainer pairings.",
          href: "/best-builds",
        },
        {
          title: "Events",
          summary:
            "Pick the right Day 3, Day 6, or Day 9 reward for your trainer - Dragon's Nest, Bug Collector, or Rainbow Berry.",
          href: "/events",
        },
        {
          title: "Tips",
          summary:
            "Apply progression rules: queue daily, focus two or three carry Batomon, and spend currency smartly.",
          href: "/tips",
        },
        {
          title: "Supporter Pack DLC",
          summary:
            "Decide whether the optional $4.99 cosmetic DLC is worth buying alongside the base game.",
          href: "/dlc-skin-pack",
        },
      ],
    },
  ],
  faqIds: [
    "home-is-batomonshowdown-out",
    "home-how-much-does-it-cost",
    "home-what-platforms",
    "home-online-required",
  ],
  relatedPageIds: ["release-status", "best-team", "monsters", "trainers"],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-18",
};