import type { PageContent } from "@/types/content";

export const guidePages: PageContent[] = [
  {
    id: "best-team",
    translationKey: "best-team",
    locale: "en-US",
    routeKind: "fixed",
    slug: "best-team",
    url: "/best-team",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Batomon Showdown best team compositions for async PvP",
    seoTitle:
      "Batomon Showdown best team: synergy archetypes for async PvP",
    metaDescription:
      "Batomon Showdown best team compositions depend on trainer, Batomon, trinket, and item synergies. Pick team archetypes that match your async PvP progression.",
    summary:
      "The four-piece synergy framework plus three team archetypes (early flex, mid focused, late synergy-engine) for async PvP team building.",
    hero: {
      eyebrow: "Best team",
      subtitle:
        "Synergy archetypes built from trainer ability, Batomon roster, trinket choices, and item slots for async PvP.",
      ctas: [
        { label: "Trainers", href: "/trainers" },
        { label: "Tips", href: "/tips" },
      ],
    },
    quickAnswer:
      "Batomon Showdown best team compositions are built from four pieces that interact: trainer ability, Batomon roster, trinket choices, and item slots. The asynchronous PvP loop rewards players who pick one team archetype and invest in it, rather than swapping pieces every match. This guide covers the synergy framework, three team shapes for different progression stages, and when to switch archetypes.",
    keyFacts: [
      { label: "Synergy framework", value: "Trainer + Batomon + Trinket + Item" },
      { label: "Early archetype", value: "Low-commitment flex team" },
      { label: "Mid archetype", value: "Focused two-archetype team" },
      { label: "Late archetype", value: "Single-archetype synergy engine" },
      { label: "Switch signal", value: "Same opposing archetype wins more than half the time" },
    ],
    modules: [
      {
        id: "bestteam-framework",
        type: "prose",
        heading: "The four-piece synergy framework",
        body:
          "Every team you queue in Batomon Showdown is the product of four interacting choices. The trainer ability sets the rules your team operates under, the Batomon roster defines who you actually bring, the trinkets modify what each Batomon contributes, and the items you slot add limited-use power at match time. If any one of those four pieces is out of sync with the others, the team underperforms even when each piece is individually strong. That is the central reason Batomon Showdown best team discussions focus on synergies rather than per-monster rankings. The trainer is the anchor of the framework, because trainer ability is the only one of the four pieces you keep across every match. Your trainer does not level up the way a Batomon does, but the ability they grant changes which roster compositions are even legal to play. A trainer whose ability rewards fast matches wants a roster with strong opener Batomon, while a trainer whose ability rewards long matches wants Batomon that scale into late-game states. The roster is the second piece. Batomon Showdown monsters come in the four topical archetypes the Steam tags point to (Dragons, Horses, Cats, Dogs), and your roster is usually built around two or three of those archetypes rather than all four. A clean roster archetype keeps trinket and item choices simple and lets your trainer ability land on a consistent game plan.",
      },
      {
        id: "bestteam-ratio",
        type: "callout",
        tone: "tip",
        title: "Roster shape: 2-1 or 3-1 archetype ratios",
        body:
          "The cleanest way to start a draft is to fix a 2-1 or 3-1 ratio between two creature archetypes. A 2-1 ratio keeps a single primary synergy active while the third slot flexes to the opponent. A 3-1 ratio commits fully to one synergy and only works when the primary synergy has a strong late-game payoff. Ratios that split the roster evenly across three or four archetypes tend to underperform because no synergy ever reaches critical mass.",
      },
      {
        id: "bestteam-archetypes",
        type: "comparison",
        heading: "Three team archetypes by progression stage",
        options: [
          {
            name: "Early progression: flex team",
            summary:
              "Two accessible archetypes plus a Batomon that covers whatever role opponents are forcing. Survives losing any single member and survives trainer pivots in the first week of play.",
            bestFor: "Unlocked set is limited; trainer ability still being explored.",
            badge: "Early",
          },
          {
            name: "Mid progression: focused two-archetype team",
            summary:
              "Three Batomon of a primary archetype plus one or two role-coverage picks. Middle slots are deliberate answers to the weaknesses of the primary archetype, not random flex picks.",
            bestFor: "Trainer is locked, leveling pieces are unlocked, ready to commit.",
            badge: "Mid",
          },
          {
            name: "Late progression: synergy-engine team",
            summary:
              "Single creature archetype, trainer whose ability multiplies the archetype, trinkets that compound the same effect, and items that extend the engine into late-game states.",
            bestFor: "Every piece multiplies the same synergy; the highest ceiling.",
            badge: "Late",
          },
        ],
      },
      {
        id: "bestteam-when-switch",
        type: "prose",
        heading: "When to switch team archetypes",
        body:
          "The hardest decision in Batomon Showdown best team building is knowing when to switch archetypes. Three signals are worth acting on. First, your current team is losing to a specific opposing archetype more than half the time, and you have not been able to address it with trinket or item swaps alone. Second, your trainer ability no longer fits your roster because you have unlocked a Batomon that opens a better synergy under a different trainer. Third, you have unlocked enough pieces that a new archetype can be built without abandoning your current roster. Switching archetypes is expensive in the short term because you need to level the new Batomon and acquire the matching trinkets. It pays off only when the new archetype addresses a real gap. The most common mistake is switching archetypes after a single losing streak. The right move after a single losing streak is to adjust trinkets or items within your existing archetype, and only commit to an archetype switch when the same gap shows up across many matches.",
      },
      {
        id: "bestteam-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Synergy framework and trainer system framing come from the Steam store description; team archetype language is framework reasoning, not an official tier list.",
        links: [
          {
            label: "Batomon Showdown on Steam (AppID 4557380)",
            href: "https://store.steampowered.com/app/4557380/",
            description:
              "official/store — trainer ability system, team composition language, asynchronous PvP loop, tag-driven creature archetypes.",
          },
          {
            label: "Batomon Showdown Steam Community hub",
            href: "https://steamcommunity.com/app/4557380",
            description:
              "community/video — player discussion of team archetypes, progression routes, and trainer ability choices.",
          },
        ],
      },
    ],
    faqIds: [
      "bestteam-what-is-the-best",
      "bestteam-how-important-is-trainer",
      "bestteam-flex-or-focused",
      "bestteam-when-to-switch",
    ],
    relatedPageIds: ["monsters", "trainers", "tips"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
  {
    id: "how-to-play",
    translationKey: "how-to-play",
    locale: "en-US",
    routeKind: "fixed",
    slug: "how-to-play",
    url: "/how-to-play",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Batomon Showdown how to play: a first-session async PvP walkthrough",
    seoTitle:
      "Batomon Showdown how to play: async PvP beginner walkthrough",
    metaDescription:
      "Batomon Showdown how to play in the async PvP auto-battler: pick a trainer, queue a Batomon team, and let the server resolve the match. Daily loop explained.",
    summary:
      "A first-session checklist and the daily async PvP loop, plus the UI terminology a new player needs to read every screen.",
    hero: {
      eyebrow: "How to play",
      subtitle:
        "Pick a trainer, queue a Batomon team, and let the server resolve the match — the daily loop for asynchronous PvP in Batomon Showdown.",
      ctas: [
        { label: "Release Status", href: "/release-status" },
        { label: "Tips", href: "/tips" },
      ],
    },
    quickAnswer:
      "Batomon Showdown how to play in one sentence: pick a trainer, fill your roster with Batomon, queue an asynchronous PvP match, and let the server resolve the fight while you watch. Each match finishes in a short replay, results drop into your inbox, and your daily loop becomes queue, claim rewards, swap creatures, and queue again.",
    keyFacts: [
      { label: "Session length", value: "Short: queue, replay, claim, repeat" },
      { label: "Match mode", value: "Asynchronous PvP, server resolves fight" },
      { label: "First decision", value: "Choose your trainer before queuing" },
      { label: "Progression path", value: "Level Batomon via abilities and items" },
    ],
    modules: [
      {
        id: "howtoplay-first-session",
        type: "steps",
        heading: "First-session checklist",
        items: [
          {
            title: "Pick a trainer",
            body:
              "Open the trainer select screen and pick the trainer whose ability fits your preferred team shape. Read the ability text carefully before you commit; switching trainers later is the most expensive decision in the game.",
          },
          {
            title: "Build your starting Batomon roster",
            body:
              "Batomon are creatures you collect and level up with abilities and items, and your first roster comes from the early encounters the game hands you.",
          },
          {
            title: "Queue an asynchronous PvP match",
            body:
              "Batomon Showdown runs asynchronous PvP, which means you submit your team and the opponent is chosen server-side; you do not play in real time.",
          },
          {
            title: "Watch the battle replay",
            body:
              "The server resolves the fight on its own clock, and you can scroll through the replay timeline once it lands.",
          },
          {
            title: "Claim rewards and inspect your team",
            body:
              "Claim the rewards and inspect your team's damage and ability uptime. This is the data you use to decide what to change before the next queue.",
          },
        ],
      },
      {
        id: "howtoplay-trainer-choice",
        type: "callout",
        tone: "confirmed",
        title: "What the trainer choice actually does",
        body:
          "Each trainer grants an ability that reshapes how your Batomon team responds to enemy creatures, which is why the Steam store description calls trainer selection a core decision. Read the ability text twice, then look at the early Batomon the game gives you, and pick the trainer whose ability clearly helps the team you actually have.",
      },
      {
        id: "howtoplay-daily-loop",
        type: "prose",
        heading: "Daily async PvP loop and rewards",
        body:
          "A normal day in Batomon Showdown looks like a queue, a result, a tweak, and another queue. You open the client, queue an asynchronous PvP match with the team you ended yesterday on, and the server returns a finished battle. You claim your currency, check which Batomon performed and which sat on the bench, and then you level up one or two creatures with the abilities and items the description highlights as core to progression. The whole loop is short by design. Because battles resolve server-side you do not need to be online at the same time as anyone else, and the Steam store description highlights asynchronous PvP as the headline mode. There is no real-time APM layer, so the gameplay ceiling comes from roster knowledge and ability ordering rather than mechanical skill. Treat the daily loop as the unit of progression: the more loops you finish, the more currency you bank, and the faster your team grows.",
      },
      {
        id: "howtoplay-terminology",
        type: "data-table",
        heading: "UI terminology you will see every session",
        columns: [
          { key: "term", label: "Term" },
          { key: "meaning", label: "What it means" },
        ],
        rows: [
          { term: "Trainer", meaning: "The character you chose at the start and their team-wide ability." },
          { term: "Batomon", meaning: "Collectible creatures you field in teams." },
          { term: "Trinkets", meaning: "Items your Batomon carry into a match." },
          { term: "Queue", meaning: "Hand your team to the server and wait for the opponent to be assigned." },
          { term: "Replay", meaning: "Finished battle timeline you scroll through once the server resolves it." },
        ],
      },
      {
        id: "howtoplay-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Onboarding framing is from the Steam store page description and Steam Community hub discussion; the daily-loop language is a player-facing summary of that description.",
        links: [
          {
            label: "Batomon Showdown on Steam (AppID 4557380)",
            href: "https://store.steampowered.com/app/4557380/",
            description:
              "official/store — asynchronous PvP auto-battler mode, trainer selection, Batomon leveling via abilities and items.",
          },
          {
            label: "Batomon Showdown Steam Community hub",
            href: "https://steamcommunity.com/app/4557380",
            description:
              "community/video — first-session onboarding and player discussion of the daily loop.",
          },
        ],
      },
    ],
    faqIds: [
      "howtoplay-real-time-or-async",
      "howtoplay-need-friends",
      "howtoplay-skip-trainer",
      "howtoplay-match-length",
    ],
    relatedPageIds: ["release-status", "best-team", "tips", "system-requirements"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
  {
    id: "tips",
    translationKey: "tips",
    locale: "en-US",
    routeKind: "fixed",
    slug: "tips",
    url: "/tips",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Batomon Showdown tips: a new-player progression playbook",
    seoTitle:
      "Batomon Showdown tips: progression advice for new players",
    metaDescription:
      "Batomon Showdown tips for new players: level Batomon through abilities and items, rotate your team, and spend early currency on the upgrades that move progression.",
    summary:
      "Four new-player habits: queue daily, focus two or three Batomon, rotate the team, and spend currency on the upgrades that move progression.",
    hero: {
      eyebrow: "Tips",
      subtitle:
        "Spend your first week queueing daily, focusing two or three Batomon, rotating the roster, and pouring currency into abilities and items.",
      ctas: [
        { label: "How to Play", href: "/how-to-play" },
        { label: "Best Team", href: "/best-team" },
      ],
    },
    quickAnswer:
      "Batomon Showdown tips for new players come down to four habits: queue every day, level your Batomon through abilities and items rather than spreading resources thin, rotate your team so you learn which creatures actually carry fights, and spend your early currency on the upgrades that move progression fastest.",
    keyFacts: [
      { label: "Daily habit", value: "Queue at least one async PvP match per day" },
      { label: "Focus rule", value: "Two or three carry Batomon, not the whole roster" },
      { label: "Spend priority", value: "Ability upgrades, then items, then trainer exploration" },
      { label: "Cosmetic priority", value: "Defer until the core team is stable" },
    ],
    modules: [
      {
        id: "tips-first-week",
        type: "steps",
        heading: "How to spend the first week",
        items: [
          {
            title: "Queue at least one async PvP match per day",
            body:
              "The server resolves fights on your roster at its current strength, so consistency matters more than any one big queue.",
          },
          {
            title: "Note which Batomon carried each match",
            body:
              "Open the rewards screen after each match and write down which two or three Batomon did the heavy lifting.",
          },
          {
            title: "Pull ability books and item drops onto those creatures first",
            body:
              "The rest of the roster waits; the store description highlights leveling through abilities and items as the engine.",
          },
          {
            title: "Swap in any creature whose synergy looks stronger",
            body:
              "Check your team after every few matches and promote a creature whose synergy with your trainer ability now looks stronger.",
          },
        ],
      },
      {
        id: "tips-rotation",
        type: "callout",
        tone: "tip",
        title: "Team rotation advice",
        body:
          "Drop creatures whose abilities did not proc in the last two or three matches; promote creatures whose ability proc lined up with your trainer ability; keep at least one untested creature on the bench so the replay screen keeps teaching you. Once the team stops changing between days, your progression has stalled and you should revisit your trainer choice or level-up priorities.",
      },
      {
        id: "tips-currency",
        type: "data-table",
        heading: "Order to use for early resources",
        columns: [
          { key: "order", label: "Priority" },
          { key: "target", label: "What to spend currency on" },
        ],
        rows: [
          {
            order: "1",
            target:
              "Ability upgrades for your two strongest Batomon — directly improves the replay timeline and damage.",
          },
          {
            order: "2",
            target:
              "Item or trinket upgrades for the same two creatures — multiplies the value of every ability upgrade above it.",
          },
          {
            order: "3",
            target:
              "Trainer ability exploration — once creatures are stable, revisit whether the trainer still matches the team you actually run.",
          },
        ],
      },
      {
        id: "tips-cosmetic-warning",
        type: "callout",
        tone: "caution",
        title: "Defer cosmetic unlocks",
        body:
          "Avoid spending currency on cosmetic options until your core team is stable. Cosmetic unlocks do not change fight outcomes, and they are a slower progression sink in the first week.",
      },
      {
        id: "tips-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Progression framing comes from the Steam store description; the rotation and currency priority is a player-facing summary of that description and community discussion on the Steam Community hub.",
        links: [
          {
            label: "Batomon Showdown on Steam (AppID 4557380)",
            href: "https://store.steampowered.com/app/4557380/",
            description:
              "official/store — level Batomon via abilities and items, asynchronous PvP, team composition and synergy language, trainer ability selection.",
          },
          {
            label: "Batomon Showdown Steam Community hub",
            href: "https://steamcommunity.com/app/4557380",
            description:
              "community/video — progression discussion and player threads used for tip framing.",
          },
        ],
      },
    ],
    faqIds: [
      "tips-what-spend-first",
      "tips-level-all-or-focus",
      "tips-how-often-rotate",
      "tips-when-switch-trainer",
    ],
    relatedPageIds: ["how-to-play", "monsters", "best-team", "trainers"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
];