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
    "Batomon Showdown is an asynchronous PvP auto-battler on Steam and Android. Each run starts with one of three Trainers, builds a squad of Batomon that merges upward, and ends at 10 trainer badges. The saved squad then climbs an asynchronous ranked ladder against other players' saved teams.",
  quickAnswerContext:
    "Use the guides below to plan a run, pick a Trainer, build a squad, and climb the ladder. Every decision is locked in before the Battle button is pressed.",
  keyFacts: [
    { label: "Genre", value: "Async PvP auto-battler" },
    { label: "Platforms", value: "Steam and Android" },
    { label: "Run goal", value: "10 badges across 10 trainer fights" },
    { label: "Ranked format", value: "Asynchronous ladder with saved squads" },
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
                "Which Trainers the ladder actually plays (Burglar, Painter, Twins, Scavenger) and how to read the three-card hand at run start.",
            },
            {
              label: "Batomon Tier List",
              href: "/guides/batomon-tier-list",
              description:
                "The highest pick-rate Batomon and the current S+ cores (Gaiadrasil + Dryadell, Miasmaw + Drumire, Ouroblaze + Furnadon).",
            },
            {
              label: "Best Team And Meta Builds",
              href: "/guides/team-builds-meta",
              description:
                "Meta cores, standout support slots, and the 4-role build framework (Starter, Repeater, Amplifier, Survivor).",
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
                "The 93-trinket pool, the 40-item shop pool, and the merge-plus-gold economy loop.",
            },
            {
              label: "Multiplayer And Ranked",
              href: "/guides/multiplayer-ranked",
              description:
                "How asynchronous PvP works, divisions, stars, MMR, Master rank, and how opponents read a saved team.",
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
  lastReviewed: "2026-10-09",
};