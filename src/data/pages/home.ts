import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "guide-portal" },
  h1: "Batomon Showdown Guides",
  seoTitle:
    "Batomon Showdown Guides: Tier Lists, Builds & Strategies",
  metaDescription:
    "Batomon Showdown guides for beginners, the Trainer and Batomon tier lists, meta builds, positioning, synergies, trinkets, economy, and ranked multiplayer.",
  summary:
    "Unofficial Batomon Showdown guides for the auto-battler ladder: Trainers, Batomon, meta teams, positioning, trinkets and async ranked play.",
  hero: {
    eyebrow: "Unofficial fan guide",
    subtitle: site.tagline,
    ctas: [
      { label: "Start With the Beginner Guide", href: "/guides/beginner-guide" },
      { label: "See All Guides", href: "#find-help" },
    ],
  },
  quickAnswer:
    "Batomon Showdown is an asynchronous PvP auto-battler on Steam and Android. Each run starts with one of three Trainers, builds a squad of Batomon that merges upward, and ends at 10 trainer badges. The saved squad then climbs an asynchronous ranked ladder against other players' saved teams. The post-1.2.0 (Smuggler) balance pass shifted the S+ cores to Dracana, Cinnabark, and Velocect, added the Pantra burn line and Smuggler cross-region pulls, and reworked the Ranked ladder formula.",
  quickAnswerContext:
    "Use the guides below to plan a run, pick a Trainer, build a squad, and climb the ladder. Every decision is locked in before the Battle button is pressed. The 1.2.0 patch means meta cores and trainer balance have moved since Season 1.",
  keyFacts: [
    { label: "Genre", value: "Async PvP auto-battler" },
    { label: "Platforms", value: "Steam and Android" },
    { label: "Run goal", value: "10 badges across 10 trainer fights" },
    { label: "Ranked format", value: "6-tier ladder with star and MMR formulas" },
  ],
  modules: [
    {
      id: "find-help",
      type: "guide-index",
      heading: "Find your next guide",
      columns: 1,
      groups: [
        {
          title: "New player",
          items: [
            {
              label: "Beginner Guide",
              href: "/guides/beginner-guide",
              description:
                "How to level up Batomon, what to do each day, shop priority, and the four late-game roles to plan by Day 5.",
            },
          ],
        },
        {
          title: "Picking a Trainer and building a squad",
          items: [
            {
              label: "Trainer Tier List",
              href: "/guides/trainer-tier-list",
              description:
                "Which Trainers the ladder actually plays (Burglar, Painter, Twins, Scavenger), the six new Jinto trainers (Twins, Gentleman, Painter, Burglar, Scavenger, Black Belt), and the new 1.2.0 Smuggler trainer.",
            },
            {
              label: "Batomon Tier List",
              href: "/guides/batomon-tier-list",
              description:
                "The post-1.2.0 S+ cores (Dracana, Cinnabark, Velocect), the Pantra burn line, the Smuggler foreign options, and the 50+ Jinto roster unlocked at 5 Pantra wins.",
            },
            {
              label: "Best Team And Meta Builds",
              href: "/guides/team-builds-meta",
              description:
                "Post-1.2.0 meta cores (Dracana 61.4%, Cinnabark 51.8%, Velocect 43.5% 10-win), the Pantra burn line, the Smuggler cross-region comp, and the 4-role framework.",
            },
            {
              label: "Positioning And Synergies",
              href: "/guides/battle-strategy",
              description:
                "Placement keywords, status effects, type and faction synergies, and the trigger categories that drive combat.",
            },
          ],
        },
        {
          title: "Progression and multiplayer",
          items: [
            {
              label: "Trinkets And Economy",
              href: "/guides/progression-systems",
              description:
                "The 93-trinket pool, the 40-item shop pool, the merge-plus-gold economy loop, and the 1.2.0 (Smuggler) balance pass.",
            },
            {
              label: "Multiplayer And Ranked",
              href: "/guides/multiplayer-ranked",
              description:
                "Async PvP, six-tier Ranked (Bronze-Silver-Gold-Platinum-Diamond-Master), eight divisions per tier, the 5-star promotion rule, the star and MMR formulas, and the 10-win Casual unlock.",
            },
          ],
        },
      ],
    },
    {
      id: "run-flow",
      type: "progression",
      heading: "From run start to ladder climb",
      stages: [
        {
          title: "Pick a Trainer",
          href: "/guides/trainer-tier-list",
          description:
            "The three-card hand decides the run's passive. Pick the one whose trigger can fire in the early turns of this run.",
        },
        {
          title: "Build a squad",
          href: "/guides/batomon-tier-list",
          description:
            "Choose a core pair from the S+ list, then fill the four late-game roles around the early shop offerings.",
        },
        {
          title: "Win 10 badges",
          href: "/guides/beginner-guide",
          description:
            "Apply the day-by-day pacing, merge toward Level-3, and pivot only the part of the board that caused a loss.",
        },
        {
          title: "Upload & climb",
          href: "/guides/multiplayer-ranked",
          description:
            "Upload the saved squad and write a one-line board description so ranked opponents know what the team is doing.",
        },
      ],
    },
    {
      id: "game-snapshot",
      type: "fact-panel",
      heading: "Batomon Showdown at a glance",
      facts: [
        { label: "Developer", value: "berrymint" },
        { label: "Trainers", value: "24 in the roster" },
        { label: "Batomon", value: "Roughly 149 creatures" },
        { label: "Trinkets", value: "93 entries" },
        { label: "Items", value: "40 in the shop pool" },
        {
          label: "Types",
          value: "Fire, Toxic, Flying, Rock, Water, Ghost",
          href: "/guides/battle-strategy",
        },
        {
          label: "Run end",
          value: "10 trainer badges",
          href: "/guides/beginner-guide",
        },
        {
          label: "Ranked format",
          value: "Async ladder (saved squads)",
          href: "/guides/multiplayer-ranked",
        },
      ],
    },
  ],
  faqIds: [
    "what-is-batomon-showdown",
    "platforms-supported",
    "async-ranked-explained",
    "guide-scope",
  ],
  relatedPageIds: [
    "beginner-guide",
    "trainer-tier-list",
    "batomon-tier-list",
    "team-builds-meta",
    "battle-strategy",
    "progression-systems",
    "multiplayer-ranked",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-13",
};