import type { PageContent } from "@/types/content";

export const guidePages: PageContent[] = [
  {
    id: "best-builds",
    translationKey: "best-builds",
    locale: "en-US",
    routeKind: "fixed",
    slug: "best-builds",
    url: "/best-builds",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Batomon Showdown best builds and meta team comps: Patch 14",
    seoTitle:
      "Batomon Showdown best builds: meta team comps for Casual and Ranked",
    metaDescription:
      "Batomon Showdown best builds name the six Patch 14 meta comps (Hyperbug, Fire Sunsage, Rock Pebbler, Craghorn, Treasure Hunter, Shock Bees) with trainer pairings, core Batomon, and key trinkets.",
    summary:
      "The six Patch 14 meta team compositions - Hyperbug, Fire Sunsage/Blixie, Rock Pebbler/Geminiss, Craghorn, Treasure Hunter, Shock Bees - each with its named Batomon lineup, trainer pairing, key trinkets, and the match phase it solves.",
    hero: {
      eyebrow: "Best builds",
      subtitle:
        "Patch 14 meta comps ranked by play rate on critcap.gg, with trainer pairings and trinkets confirmed against gameplay.tips ranked-gameplay guide.",
      ctas: [
        { label: "Best Team", href: "/best-team" },
        { label: "How to Play", href: "/how-to-play" },
      ],
    },
    quickAnswer:
      "The six Patch 14 meta comps to climb Casual and Ranked right now are Hyperbug, Fire Sunsage (Blixie), Rock Pebbler (Geminiss), Craghorn, Treasure Hunter, and Shock Bees. Each comp names the core Batomon, the trainer that unlocks it, the trinkets that compound it, and the match phase it wins: Hyperbug for early aggro, Fire Sunsage and Rock Pebbler for mid boss fights, Craghorn and Treasure Hunter for tempo swings, and Shock Bees for late scaling.",
    keyFacts: [
      { label: "Patch", value: "Patch 14 (ranked-gameplay snapshot)" },
      { label: "Sample size", value: "22,524 ranked runs (critcap.gg)" },
      { label: "Top Bug comp", value: "Bug Velocect / Formiqueen - 7.9% play rate" },
      { label: "Top Fire comp", value: "Fire Sunsage / Blixie - 2.19% play rate" },
      { label: "Top Grass comp", value: "Grass Craghorn - 10.07% play rate" },
      { label: "Comps covered", value: "Hyperbug, Fire Sunsage, Rock Pebbler, Craghorn, Treasure Hunter, Shock Bees" },
    ],
    modules: [
      {
        id: "bestbuilds-quick-pick",
        type: "prose",
        heading: "Pick a comp by match phase",
        body:
          "If you only have time to learn one comp, pick the one that solves the phase where your current runs stall. Hyperbug solves the early game when opponents out-tempo you before your team scales. Fire Sunsage and Rock Pebbler solve the mid boss phase when you need a single carry to win the central turn. Craghorn and Treasure Hunter solve tempo swings when your team is stable but cannot close out a lead. Shock Bees solves late scaling when your team reaches turn six healthy but cannot push through the opponent's late-game engine. Each comp names its core Batomon, the trainer that unlocks it, and the trinkets that compound its payoff, so the switch from one comp to another is a swap of three or four pieces rather than a full rebuild.",
      },
      {
        id: "bestbuilds-meta-table",
        type: "data-table",
        heading: "Patch 14 meta comps at a glance",
        columns: [
          { key: "comp", label: "Comp" },
          { key: "phase", label: "Phase it wins" },
          { key: "core", label: "Core Batomon" },
          { key: "trainer", label: "Trainer pairing" },
        ],
        rows: [
          { comp: "Hyperbug", phase: "Early aggro", core: "Bug Velocect + Formiqueen", trainer: "Tempo trainer" },
          { comp: "Fire Sunsage", phase: "Mid boss", core: "Fire Sunsage + Blixie", trainer: "Tempo or scaling" },
          { comp: "Rock Pebbler", phase: "Mid boss", core: "Rock Pebbler + Geminiss", trainer: "Scaling trainer" },
          { comp: "Craghorn", phase: "Tempo swing", core: "Grass Craghorn core", trainer: "Tempo trainer" },
          { comp: "Treasure Hunter", phase: "Tempo swing", core: "Treasure Hunter core", trainer: "Economy trainer" },
          { comp: "Shock Bees", phase: "Late scaling", core: "Shock Bees core", trainer: "Scaling trainer" },
        ],
      },
      {
        id: "bestbuilds-hyperbug",
        type: "prose",
        heading: "Hyperbug: early aggro that closes before turn six",
        body:
          "Hyperbug is the comp that wins by ending the match before the opponent's late-game engine comes online. Bug Velocect leads the lineup and Formiqueen is the second anchor; together they pressure the board from turn one and force the opponent to react rather than scale. Pair Hyperbug with a tempo trainer whose ability rewards fast openers - the trainer's early bonus compounds with the comp's natural aggro curve and lets Bug Velocect push through mid-board threats. The key trinkets are the ones that multiply on-hit effects or extend the comp's opener past turn four, because Hyperbug falls off once the match reaches the late-game states. When you queue Hyperbug, expect to win or lose by turn six; if the opponent survives past that, swap to Craghorn or Shock Bees for the next match.",
      },
      {
        id: "bestbuilds-fire-sunsage",
        type: "prose",
        heading: "Fire Sunsage (Blixie): mid boss carry with tempo scaling",
        body:
          "Fire Sunsage is the comp the ranked-gameplay guide flags for the mid boss phase. Blixie is the named anchor and Fire Sunsage is the Batomon that carries the burst turn; together they win the central exchange that decides most Ranked matches. Fire Sunsage sits at a 2.19% play rate on critcap.gg, which means it is off-meta enough that opponents do not prepare for it but strong enough to win when it lands. Pair it with a tempo or scaling trainer depending on the rest of your roster: tempo lets Blixie close faster, scaling lets Fire Sunsage ride the engine into a longer match. Key trinkets are the ones that boost the burst window or extend Fire Sunsage's effect past its first proc. The decision to queue Fire Sunsage is the decision to win or lose around the mid boss turn; if you can read the opponent's mid-game plan, this comp wins that turn more often than not.",
      },
      {
        id: "bestbuilds-rock-pebbler",
        type: "prose",
        heading: "Rock Pebbler (Geminiss): mid boss scaling through Rock payoffs",
        body:
          "Rock Pebbler is the comp to queue when your early game is stable but your mid-game carries cannot finish the boss turn. Geminiss anchors the lineup and Rock Pebbler is the Batomon that converts early pressure into late-game value. Pair it with a scaling trainer whose ability rewards longer matches, because Rock Pebbler's payoff is the late-game state where its accumulated Rock bonuses come due. Key trinkets are the ones that compound Rock count or extend the payoff window. When Rock Pebbler reaches its threshold turn, the comp closes out matches that other mid-game carries cannot, which is why it earns a slot in the meta even when Bug and Fire comps are more popular.",
      },
      {
        id: "bestbuilds-craghorn",
        type: "prose",
        heading: "Craghorn: tempo swing with the highest Grass play rate",
        body:
          "Craghorn is the comp the critcap.gg dashboard shows at 10.07% play rate, the highest single-creature share in Patch 14. Craghorn wins the tempo swing phase, where your team is stable but cannot close out the lead it built. Pair Craghorn with a tempo trainer whose ability rewards winning the early exchanges, because Craghorn's payoff is converting a tempo lead into a board state the opponent cannot answer. Key trinkets are the ones that multiply Grass bonuses or extend the comp's tempo window past turn five. Craghorn is the comp to default to when you do not know what the opponent is queueing: its high play rate means it has been refined across many runs, and its tempo swing payoff covers the most common matchup.",
      },
      {
        id: "bestbuilds-treasure-hunter",
        type: "prose",
        heading: "Treasure Hunter: economy-driven tempo swing",
        body:
          "Treasure Hunter is the comp for the economy trainer. Treasure Hunter wins the tempo swing phase the same way Craghorn does, but it gets there through resource generation rather than creature payoff. Pair it with an economy trainer whose ability rewards longer matches with more resources, because Treasure Hunter's trinkets convert generated resources into board tempo. The key trinkets are the ones that boost generation or convert resources into tempo swings; without those trinkets, Treasure Hunter falls behind Bug and Grass aggro comps. Queue Treasure Hunter when your opponent opens with a slow comp and you need to out-resource them before they can stabilize.",
      },
      {
        id: "bestbuilds-shock-bees",
        type: "prose",
        heading: "Shock Bees: late scaling that outlasts aggro comps",
        body:
          "Shock Bees is the comp to queue when your team reaches turn six healthy but cannot push through the opponent's late-game engine. Shock Bees wins the late scaling phase by surviving early pressure and then converting its accumulated board state into a payoff turn the opponent cannot answer. Pair it with a scaling trainer whose ability rewards longer matches, because Shock Bees' strength compounds the longer the match goes. Key trinkets are the ones that extend the comp's scaling window or multiply the payoff turn's effect. When Shock Bees reaches its payoff, the comp wins matches that Bug and Fire comps cannot, which is why it is the late-game answer in the meta. The hard rule with Shock Bees is that you cannot queue it as a default: if the opponent ends the match before turn six, Shock Bees loses. Use it only when you know the opponent's comp is a slower scaling or economy build.",
      },
      {
        id: "bestbuilds-when-to-switch",
        type: "callout",
        tone: "tip",
        title: "When to switch comps mid-run",
        body:
          "The same switching rules from /best-team apply here: switch when the same opposing comp beats yours more than half the time, when your trainer ability no longer fits the comp, or when you have unlocked enough pieces to build a new comp without abandoning progress on the old one. Most players switch too often after a single losing streak. Adjust trinkets within the current comp first, and only commit to a comp switch when the same gap shows up across many matches.",
      },
      {
        id: "bestbuilds-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Play-rate numbers and the comp list come from the critcap.gg Batomon team-comp dashboard (Patch 14 ranked-gameplay snapshot, 22,524 ranked runs). Named comps, trainer pairings, and trinket categories come from the gameplay.tips Batomon Showdown ranked-gameplay guide.",
        links: [
          {
            label: "critcap.gg - Batomon team comps",
            href: "https://www.critcap.gg/batomon/team-comps",
            description:
              "community/dashboard - Patch 14 play-rate share for Bug Velocect / Formiqueen, Fire Sunsage / Blixie, Grass Craghorn across 22,524 ranked runs.",
          },
          {
            label: "gameplay.tips - Batomon Showdown ranked-gameplay guide",
            href: "https://gameplay.tips/guides/batomon-showdown-ranked-gameplay-guide.html",
            description:
              "community/guide - named comps (Hyperbug, Craghorn, Treasure Hunter, Shock Bees) with trainer pairings and Batomon priorities.",
          },
        ],
      },
    ],
    faqIds: [
      "bestbuilds-what-is-meta",
      "bestbuilds-easiest-comp",
      "bestbuilds-climb-ranked",
      "bestbuilds-craghorn-vs-treasure-hunter",
    ],
    relatedPageIds: ["best-team", "how-to-play", "tips", "monsters"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "placeholder",
    lastReviewed: "2026-09-19",
  },
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
        { label: "Best Builds", href: "/best-builds" },
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
    relatedPageIds: ["monsters", "trainers", "tips", "best-builds", "events"],
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
        { label: "Events", href: "/events" },
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
    relatedPageIds: ["release-status", "best-team", "tips", "system-requirements", "events", "best-builds"],
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
        { label: "Events", href: "/events" },
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
    relatedPageIds: ["how-to-play", "monsters", "best-team", "trainers", "events", "best-builds"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
  {
    id: "events",
    translationKey: "events",
    locale: "en-US",
    routeKind: "fixed",
    slug: "events",
    url: "/events",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Batomon Showdown events: Day 3, Day 6, and Day 9 reward picks",
    seoTitle:
      "Batomon Showdown events: Day 3 / Day 6 / Day 9 reward guide",
    metaDescription:
      "Batomon Showdown events run on Day 3 (Dragon's Nest, Bug Collector, Rainbow Berry), repeat on Day 6 and Day 9, and add Traveling Merchant and Fossil Discovery in v1.0. Pick the right reward for your trainer.",
    summary:
      "Day 3 / Day 6 / Day 9 event triggers, the three to four reward choices each event offers, and the trainer or board state that makes each pick correct, including the v1.0 Traveling Merchant and Fossil Discovery additions.",
    hero: {
      eyebrow: "Events",
      subtitle:
        "Day 3 / Day 6 / Day 9 event cadence, named reward choices, and the trainer pairings that make each pick correct, including the v1.0 Traveling Merchant and Fossil Discovery additions.",
      ctas: [
        { label: "How to Play", href: "/how-to-play" },
        { label: "Best Builds", href: "/best-builds" },
      ],
    },
    quickAnswer:
      "Batomon Showdown events repeat on Day 3, Day 6, and Day 9 of every run. Day 3 offers Dragon's Nest, Bug Collector, and Rainbow Berry as the three named reward choices. Day 6 and Day 9 repeat the same event pool. The v1.0 patch added Traveling Merchant as a weekly rotation and Fossil Discovery as a side event. Pick the event reward that matches your trainer's tempo, scaling, or economy plan; picking the wrong reward is one of the fastest ways to lose tempo in a run.",
    keyFacts: [
      { label: "Trigger days", value: "Day 3, Day 6, Day 9" },
      { label: "Day 3 reward choices", value: "Dragon's Nest, Bug Collector, Rainbow Berry" },
      { label: "v1.0 additions", value: "Traveling Merchant (weekly), Fossil Discovery" },
      { label: "Cost of wrong pick", value: "Lose tempo immediately; one of the highest-stakes decisions in the run" },
    ],
    modules: [
      {
        id: "events-cadence",
        type: "prose",
        heading: "When events fire and what they offer",
        body:
          "Batomon Showdown events fire on Day 3, Day 6, and Day 9 of every run, and they are the run-defining decision moments in async PvP. Each trigger offers three to four reward choices that change what your team can do for the rest of the run, so the wrong pick costs tempo immediately rather than at the next match. Day 3 is the first event you will see, and the three named reward choices from the ranked-gameplay guide are Dragon's Nest, Bug Collector, and Rainbow Berry. Day 6 and Day 9 repeat the same event pool, which means you will see the same reward names multiple times in a long run and can pivot your team plan between the first and last event. The v1.0 patch added Traveling Merchant, which runs as a weekly rotation outside the Day 3 / Day 6 / Day 9 cadence, and Fossil Discovery, which is a side event that triggers off board state rather than the day counter.",
      },
      {
        id: "events-quick-pick",
        type: "data-table",
        heading: "Day 3 reward picks by trainer archetype",
        columns: [
          { key: "event", label: "Day 3 event" },
          { key: "picks", label: "Pick if your trainer is" },
          { key: "skip", label: "Skip if your trainer is" },
        ],
        rows: [
          {
            event: "Dragon's Nest",
            picks: "Scaling trainer - the payoff extends the late-game state",
            skip: "Tempo trainer - the Dragon's Nest payoff rarely fires early",
          },
          {
            event: "Bug Collector",
            picks: "Tempo or economy trainer - Bug count compounds early",
            skip: "Pure scaling trainer - Bug Collector falls off past turn six",
          },
          {
            event: "Rainbow Berry",
            picks: "Any trainer that lacks payoff - flexible catch-all",
            skip: "Already committed trainer - Rainbow Berry is a default pick, not an upgrade",
          },
        ],
      },
      {
        id: "events-dragons-nest",
        type: "prose",
        heading: "Dragon's Nest: scaling payoff for late-game trainers",
        body:
          "Dragon's Nest is the Day 3 reward that rewards scaling trainers. The payoff from Dragon's Nest only fires when your team reaches the late-game phase of a match, so a tempo trainer who wins or loses by turn six will rarely trigger it. If you paired a scaling trainer with a comp like Rock Pebbler or Shock Bees (see /best-builds), Dragon's Nest is the Day 3 pick that extends the same payoff past its first trigger and compounds your late-game value. The common mistake is picking Dragon's Nest on a tempo comp: you hold the Dragon's Nest payoff in your hand while the opponent closes the match, and you lose the tempo you would have gained by picking Bug Collector or Rainbow Berry instead.",
      },
      {
        id: "events-bug-collector",
        type: "prose",
        heading: "Bug Collector: tempo and economy payoff for early-game comps",
        body:
          "Bug Collector is the Day 3 reward that compounds Bug count, which means it pays off for tempo and economy trainers whose comps lean on Bug creatures. The named Bug comps in /best-builds (Hyperbug with Bug Velocect and Formiqueen) get the most out of Bug Collector because Bug count is already the comp's engine. Pick Bug Collector on Day 3 if your trainer is tempo or economy and your comp already commits to Bug creatures; the payoff triggers on the early turns of the match and keeps compounding through the mid-game. The common mistake is picking Bug Collector on a non-Bug comp: the payoff never lines up with the rest of your team's tempo, and you spend the rest of the run waiting for a trigger that does not come.",
      },
      {
        id: "events-rainbow-berry",
        type: "prose",
        heading: "Rainbow Berry: the flexible default",
        body:
          "Rainbow Berry is the Day 3 reward that does not commit to any one payoff curve. The ranked-gameplay guide flags Rainbow Berry as the right pick when you have not committed to a single tempo or scaling plan, or when your trainer does not yet have the leveled pieces to make Dragon's Nest or Bug Collector worth their setup cost. Rainbow Berry is the default pick if Dragon's Nest and Bug Collector are both wrong for your current trainer and comp, and the cost of picking it is that you may replace it later when a more specific reward shows up on Day 6 or Day 9. Treat Rainbow Berry as a 'keep the run alive' choice rather than an upgrade, and revisit the named-reward picks when you see the same event on Day 6 or Day 9.",
      },
      {
        id: "events-day-six-nine",
        type: "prose",
        heading: "Day 6 and Day 9: same events, sharper picks",
        body:
          "Day 6 and Day 9 repeat the Day 3 event pool, so you will see Dragon's Nest, Bug Collector, and Rainbow Berry two or three times across a long run. The right move on Day 6 is to re-evaluate the same three picks with the trainer and comp you actually have, not the trainer and comp you queued on Day 3. If your comp has committed to Bug creatures by Day 6, Bug Collector is the higher-value pick than Rainbow Berry. If your scaling trainer has finally leveled enough to trigger the Dragon's Nest payoff, Day 6 is the right time to take it. Day 9 is the last guaranteed event trigger, so the Day 9 pick should be the one that wins the run's hardest matchup; if your trainer is still uncommitted by Day 9, treat Rainbow Berry as the safe choice and stop chasing a payoff curve your run cannot trigger.",
      },
      {
        id: "events-v1-additions",
        type: "prose",
        heading: "v1.0 additions: Traveling Merchant and Fossil Discovery",
        body:
          "The v1.0 patch added two event sources outside the Day 3 / Day 6 / Day 9 cadence. Traveling Merchant runs as a weekly rotation; the merchant offers a different inventory each week and is the right place to spend the currency you have been saving on trinkets that your current comp cannot yet drop. Fossil Discovery is a side event that triggers off board state rather than the day counter, and the payoff is a piece that fits a specific Batomon archetype. Both additions are listed in the ranked-gameplay guide and the beginner guide as named v1.0 changes, so they are stable for the current patch and should not need a re-evaluation every week.",
      },
      {
        id: "events-caveats",
        type: "callout",
        tone: "caution",
        title: "What this page does and does not promise",
        body:
          "The Day 3 / Day 6 / Day 9 event list and the three named reward choices come from the gameplay.tips ranked-gameplay guide and the 9puz beginner guide. The Traveling Merchant and Fossil Discovery entries are flagged as v1.0 additions. Per-event cooldown timers, exact reward probabilities, and any Day 12 or later triggers are not enumerated in the public sources cited here; revisit the gameplay.tips guide if a future patch adds events beyond Day 9.",
      },
      {
        id: "events-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Day 3 / Day 6 / Day 9 cadence, named reward choices (Dragon's Nest, Bug Collector, Rainbow Berry), and the trainer-pairing criteria come from the gameplay.tips Batomon Showdown ranked-gameplay guide. The v1.0 Traveling Merchant and Fossil Discovery additions come from the 9puz Batomon Showdown beginner guide.",
        links: [
          {
            label: "gameplay.tips - Batomon Showdown ranked-gameplay guide",
            href: "https://gameplay.tips/guides/batomon-showdown-ranked-gameplay-guide.html",
            description:
              "community/guide - Day 3 event list (Dragon's Nest, Bug Collector, Rainbow Berry), Day 6 / Day 9 repeats, and trainer-archetype pick criteria.",
          },
          {
            label: "9puz - Batomon Showdown beginner guide",
            href: "https://9puz.com/5753-batomon-showdown-beginner-guide",
            description:
              "community/guide - v1.0 Traveling Merchant and Fossil Discovery additions plus the Day 6 / Day 9 cadence.",
          },
        ],
      },
    ],
    faqIds: [
      "events-when-do-events-fire",
      "events-day-3-pick",
      "events-dragons-nest-or-bug-collector",
      "events-traveling-merchant",
    ],
    relatedPageIds: ["how-to-play", "best-builds", "tips", "monsters"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "placeholder",
    lastReviewed: "2026-09-19",
  },
];