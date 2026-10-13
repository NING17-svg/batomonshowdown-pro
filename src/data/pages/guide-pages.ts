import type { PageContent } from "@/types/content";

// Each guide copies the title/description/H1 from the editor's frontmatter and body verbatim.
// SEO and metadata must not be paraphrased — validate_guide_v4_stage.py checks the rendered HTML.
export const guidePages: PageContent[] = [
  {
    id: "beginner-guide",
    translationKey: "beginner-guide",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/beginner-guide",
    url: "/guides/beginner-guide",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Batomon Showdown Beginner Guide: From First Shop to 10 Badges",
    seoTitle:
      "Batomon Showdown Beginner Guide: Level Up & First 10 Wins",
    metaDescription:
      "Batomon Showdown beginner guide covering how to level up Batomon, the day-by-day run pacing, shop priority, placement basics and the four late-game roles.",
    summary:
      "Level-up rules, daily pacing, shop priority, placement basics and the four late-game roles every Beginner Guide run needs by Day 5.",
    hero: {
      eyebrow: "Beginner guide",
      subtitle:
        "Plan the run from the first shop to the 10th badge, then pivot only the part of the board that caused a loss.",
      ctas: [
        { label: "Trainer Tier List", href: "/guides/trainer-tier-list" },
        { label: "Best Team & Meta", href: "/guides/team-builds-meta" },
      ],
    },
    quickAnswer:
      "Your first run ends when you defeat 10 NPC trainers and collect 10 badges. Pick one of three offered Trainers, then build a squad of Batomon that merges upward and picks up trinkets along the way. Battles are fully automatic, so every choice that decides a fight is locked in before you press Battle.",
    quickAnswerContext:
      "Use the four late-game roles (Starter, Repeater, Amplifier, Survivor) as the planning frame by Day 5, and treat the day-by-day loss cost as the main pacing signal.",
    keyFacts: [
      { label: "Run length", value: "10 trainer fights for 10 badges" },
      { label: "Merge target", value: "Level-3 via copies" },
      { label: "Loss cost", value: "1 (Day 1-2), 2 (Day 3-4), 3 (Day 5+)" },
      { label: "Late-game frame", value: "Starter / Repeater / Amplifier / Survivor" },
    ],
    modules: [
      {
        id: "how-batomon-level-up",
        type: "steps",
        heading: "How Batomon Level Up",
        items: [
          {
            title: "Merge identical copies to climb the level ladder",
            body:
              "Level-ups are driven by merging identical copies, not by feeding XP items.\n\n- 3 identical Level-1 copies merge into a Level-2 copy and the run awards one trinket to the squad.\n- 2 identical Level-2 copies merge into a Level-3 copy and award a second trinket.\n- Reaching Level-4 requires a special effect (typed Candy, an evolution item, or a transform item such as a Black Feather or Gray Ticket); it does not happen from copies alone.",
            doneCondition:
              "Squad has the carry merged to Level-3 with one or two trinkets paid out from the merges.",
          },
          {
            title: "Aim the run at Level-3",
            body:
              "Most runs aim for Level-3, because the stat jump plus the trinket payout is the strongest spike per gold spent. To execute a 3-merge, hold two copies on the bench and commit the third only when a free slot and enough gold line up; if the third copy never shows up, sell the dead pair instead of letting it clutter the bench.",
            doneCondition:
              "A Level-3 carry is online and the bench is not holding duplicate pairs past Day 4.",
          },
          {
            title: "Use merge-shortcut items on the carry, not the bench",
            body:
              "Items that shortcut the merge path (Basic Candy, Rare Candy, Ultra Candy, Grow Lamp, Upgrade Disc, Mega Upgrade Disc) exist, but their per-target effects are shown on the in-game Inspect panel rather than on any external sheet. Use them on the carry, rarely on the bench.",
            doneCondition:
              "Candy-style items have been spent on the carry rather than spread across bench Batomon.",
          },
        ],
      },
      {
        id: "daily-pacing",
        type: "steps",
        heading: "What To Do Each Day",
        items: [
          {
            title: "Days 1-2: identify pairings and learn the Trainer",
            body:
              "Days 1-2: identify useful pairings, learn what the chosen Trainer produces. A loss costs 1 life.",
            doneCondition: "Two useful pairings are on the bench and the Trainer identity is locked in.",
          },
          {
            title: "Days 3-4: close a merge or build the first carry interaction",
            body:
              "Days 3-4: close a merge or build the first carry interaction. A loss costs 2 lives.",
            doneCondition: "The first 3-merge is complete or a shield/buff trigger is in play.",
          },
          {
            title: "Day 5 onward: strengthen the existing board",
            body:
              "Day 5 onward: strengthen the existing board instead of chasing rare pulls. A loss costs 3 lives.",
            doneCondition: "Shop purchases feed the existing carry rather than a new direction.",
          },
          {
            title: "Take events before Days 3, 6, and 9 seriously",
            body:
              "Events fire before Days 3, 6, and 9. The picks that advance the current board (a merge-completing unit, a relevant trinket, a board-wide buff) outvalue neutral or high-rarity standalone picks.",
            doneCondition: "Event picks were merge-completing or board-relevant, not just rare.",
          },
          {
            title: "Use Second Chance as a recovery valve",
            body:
              "When a run is on the brink of wiping, the Second Chance event restores the squad to 1 life and offers a recovery choice. The offered rewards are squad-repair options such as finishing a pending merge or receiving a relevant trinket; they are not random high-rarity Batomon.",
            doneCondition: "Second Chance triggered a squad-repair reward and the run recovered.",
          },
        ],
      },
      {
        id: "shop-priority",
        type: "steps",
        heading: "Shop Priority Order",
        items: [
          {
            title: "Duplicates of units already on the team",
            body:
              "Duplicates of units already on the team. They directly feed the 3-merge.",
            doneCondition: "First shop purchases are bench duplicates of the trigger pairs.",
          },
          {
            title: "Batomon that activate the Trainer or complete a trigger",
            body:
              "Batomon that activate the chosen Trainer or complete an existing trigger (an Onsetra for an Onsetra core, a shield-bearer for a Rhizuka, and so on).",
            doneCondition: "Shop pulls include a unit that completes a Trainer or trigger condition.",
          },
          {
            title: "Items that benefit a Batomon already placed",
            body:
              "Items that benefit a specific Batomon already placed (a Basic Candy on the carry, a Gold Nugget on the economy slot).",
            doneCondition: "Items bought this turn target a placed Batomon, not a bench slot.",
          },
          {
            title: "Standalone tempo units only when the run needs a body",
            body:
              "Standalone tempo units only when the run needs a body to stay alive.",
            doneCondition: "Tempo units were only bought when a survivability slot was open.",
          },
          {
            title: "Reroll costs 3 gold; Lock preserves a needed unit",
            body:
              "Reroll costs 3 gold and is used to refresh the shop row. Lock preserves a needed unit that cannot be afforded this turn across the next reroll.",
            doneCondition: "Rerolls and Lock were used deliberately, not as free browsing.",
          },
        ],
      },
      {
        id: "placement",
        type: "prose",
        heading: "Placement Matters Before Pressing Battle",
        body:
          "Any ability whose text contains adjacent, above, or behind is a placement instruction, and the squad must be arranged so those positional bonuses actually fire. Backline-killers such as Pipskull need to be kept in the back row so they stay alive long enough to stack. From version 1.0 onward, right-clicking any Batomon opens Inspect, which shows stats, ability, evolution chain and triggers.",
      },
      {
        id: "four-roles",
        type: "entity-grid",
        heading: "Four Roles To Plan By Day 5",
        items: [
          {
            title: "Starter (1 slot)",
            summary:
              "Opens the fight with a buff, protect, or shield. Gaiadrasil, Dryadell, and shield-generating rocks like Bonshell fill this slot.",
            badge: "Day 5 plan",
          },
          {
            title: "Repeater (1-2 slots)",
            summary:
              "Fast casts, multicast, or on-ally triggers that fire multiple times per turn. Pipskull and Drumire are the canonical Repeaters.",
            badge: "Day 5 plan",
          },
          {
            title: "Amplifier (1-2 slots)",
            summary:
              "Boosts the Repeater's actions. Onsetra, Rhizuka, and Dracana when paired with a shield engine.",
            badge: "Day 5 plan",
          },
          {
            title: "Survivor (1 slot)",
            summary:
              "A tank or shield-bearer that keeps the shared HP pool alive long enough for scaling. Fumungus, Cobrex, and Furnadon are common Survivor picks.",
            badge: "Day 5 plan",
          },
        ],
      },
      {
        id: "common-mistakes",
        type: "callout",
        tone: "caution",
        title: "Common Beginner Mistakes",
        body:
          "Buying Batomon that look strong in isolation but do not share synergy with the Trainer or the rest of the board. Treating Reroll as a free browse. Confusing planned pair-merging with hoarding extra copies. Hoarding gold so long that the run runs out of tempo. Saving Second Chance for a future board that the current board cannot survive long enough to reach.",
      },
    ],
    faqIds: [],
    relatedPageIds: [
      "trainer-tier-list",
      "batomon-tier-list",
      "team-builds-meta",
      "battle-strategy",
    ],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-09",
  },
  {
    id: "trainer-tier-list",
    translationKey: "trainer-tier-list",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/trainer-tier-list",
    url: "/guides/trainer-tier-list",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Batomon Showdown Trainer Tier List: Which Trainer To Pick",
    seoTitle:
      "Batomon Showdown Trainer Tier List: Top Picks To Choose",
    metaDescription:
      "Batomon Showdown trainer tier list covering Burglar, Painter, Twins, Scavenger and situational picks, and how to read the three-card hand at run start.",
    summary:
      "Which Trainers the ladder actually plays, situational picks, the 24-Trainer roster, and how to read the three-card hand at run start.",
    hero: {
      eyebrow: "Trainer tier list",
      subtitle:
        "Read all three Trainers before pressing commit; the practical question is whether the passive can fire in the early turns of this run.",
      ctas: [
        { label: "Batomon Tier List", href: "/guides/batomon-tier-list" },
        { label: "Best Team & Meta", href: "/guides/team-builds-meta" },
      ],
    },
    quickAnswer:
      "The choice you make at run start sticks for the whole run, so read all three Trainer cards before committing. The Trainer's passive ability applies to the whole team, and the practical question is whether the passive can fire in the early turns of the run. A full strength ranking of all 24 Trainers is not publicly available; the most useful signal is the Season 1 pick rate.",
    keyFacts: [
      { label: "Top picks", value: "Burglar · Painter · Twins · Scavenger" },
      { label: "Situational", value: "Gentleman · Black Belt" },
      { label: "Total roster", value: "24 Trainers" },
      { label: "Best signal", value: "Season 1 pick rate" },
    ],
    modules: [
      {
        id: "top-pick-rate",
        type: "entity-grid",
        heading: "Top Pick-Rate Trainers In Season 1",
        items: [
          {
            title: "Burglar (6.7% pick rate)",
            summary:
              "When a trinket gift appears, takes two trinkets instead of one. Doubles trinket income and shifts the build toward trinket-heavy compositions. Pairs with any squad that already has a strong core and wants trinkets to plug a weak point.",
            badge: "Top pick",
          },
          {
            title: "Painter (6.4% pick rate)",
            summary:
              "Paints a random species with various types for the run. Used to build unusual type synergies, especially around Batomon whose abilities scale with the number of types they have.",
            badge: "Top pick",
          },
          {
            title: "Twins (6.1% pick rate)",
            summary:
              "When any monster reaches Level 3, the player gains an exact copy of it. Very strong, but only if the core monster can actually hit Level 3 on a normal run.",
            badge: "Top pick",
          },
          {
            title: "Scavenger (4.7% pick rate)",
            summary:
              "When a trinket gift appears, gives an extra copy of every non-unique Common or Uncommon trinket the squad already owns. Converts low-rarity trinkets into a stacking engine for filler compositions.",
            badge: "Top pick",
          },
        ],
      },
      {
        id: "situational",
        type: "comparison",
        heading: "Situational Picks",
        options: [
          {
            name: "Gentleman",
            summary:
              "From Day 4 onward, Common and Uncommon monsters are removed from the shop.",
            bestFor:
              "Niche choice that needs the rest of the offered hand to lean Rare or Legendary from the start.",
            badge: "Situational",
          },
          {
            name: "Black Belt",
            summary:
              "Causes a single Fighting-type monster to trigger On Victory.",
            bestFor:
              "Niche choice that requires the offered Fighting monster to actually land on Victory.",
            badge: "Situational",
          },
        ],
      },
      {
        id: "how-to-choose",
        type: "prose",
        heading: "How To Choose Between Them",
        body:
          "Pick the Trainer whose trigger can fire in the early turns of this run, not the one with the best passive text.\n\n- Pick Burglar or Scavenger when a trinket-heavy build is already forming from the offered hand.\n- Pick Painter when the team wants type-count scaling and the early shop offers a Batomon whose ability reads on type count.\n- Pick Twins only when a reliable Level-3 core is in hand from the very first shop.\n- Pick Gentleman or Black Belt when the rest of the offered hand clearly fits their narrow condition.",
      },
      {
        id: "full-roster",
        type: "prose",
        heading: "The Full 24-Trainer Roster",
        body:
          "The 24 Trainers listed in the published Batomon Showdown Trainer guide are: ??? (Mysterious Trainer), Black Belt, Bug Catcher, Burglar, Chef, Chemist, Egg Breeder, Gamer, Gentleman, Lucky Girl, Mad Scientist, Masked Man, Monster Ranger, Musician, Painter, Redhead, Rich Lady, Scavenger, Shopkeeper, Smuggler, Swim Coach, Treasure Hunter, Twins, Youngster. The detailed ability text for the less-picked Trainers is not collected in any single published sheet; check Inspect on each card at run start.",
      },
      {
        id: "economy-tier",
        type: "callout",
        tone: "tip",
        title: "Economy-Tier Trainer Pairings",
        body:
          "Burglar and Scavenger are the economy-tier picks because they multiply the same resource that the merge-and-trinket progression is already feeding. Painter is the type-tier pick. Twins is the build-defining pick and the most punishing if the core never reaches Level 3. Gentleman and Black Belt are the niche picks and only pay off when the run's offered hand is built for them from the start.",
      },
    ],
    faqIds: [],
    relatedPageIds: [
      "beginner-guide",
      "batomon-tier-list",
      "team-builds-meta",
      "progression-systems",
    ],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-09",
  },
  {
    id: "batomon-tier-list",
    translationKey: "batomon-tier-list",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/batomon-tier-list",
    url: "/guides/batomon-tier-list",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Batomon Showdown Tier List: Which Batomon Are Strongest Right Now",
    seoTitle:
      "Batomon Showdown Tier List: Top Batomon And Cores Today",
    metaDescription:
      "Batomon Showdown tier list covering the highest pick-rate Batomon, the S+ 10-win cores, standout individuals and how to use the tier list when building a squad.",
    summary:
      "Highest pick-rate Batomon, the S+ 10-win cores, standout individuals, and how the community reads strength when no developer tier list exists.",
    hero: {
      eyebrow: "Batomon tier list",
      subtitle:
        "There is no official developer tier list; the community reads 30-day pick rate and 10-win rate instead.",
      ctas: [
        { label: "Trainer Tier List", href: "/guides/trainer-tier-list" },
        { label: "Best Team & Meta", href: "/guides/team-builds-meta" },
      ],
    },
    quickAnswer:
      "There is no officially published Batomon strength tier (S/A/B/C) from the developers. The community uses 30-day pick rate and 10-win rate as the practical proxy for the current meta, and what players actually track is which comps climb the 10-win ladder rather than a single Batomon ranking.",
    keyFacts: [
      { label: "Most picked", value: "Dracana 17.4% · Steamscuttle 15.0%" },
      { label: "S+ core", value: "Gaiadrasil + Dryadell 62.2% 10-win" },
      { label: "Sample size", value: "4,932 public matches" },
      { label: "Rarity tiers", value: "Common · Uncommon · Legendary" },
    ],
    modules: [
      {
        id: "highest-pick-rate",
        type: "data-table",
        heading: "Highest Pick-Rate Batomon (30-Day)",
        columns: [
          { key: "rank", label: "#" },
          { key: "name", label: "Batomon" },
          { key: "rate", label: "Pick rate (30-day)" },
        ],
        rows: [
          { rank: "1", name: "Dracana", rate: "17.4%" },
          { rank: "2", name: "Steamscuttle", rate: "15.0%" },
          { rank: "3", name: "Onsetra", rate: "12.9%" },
          { rank: "4", name: "Swoonet", rate: "11.6%" },
          { rank: "5", name: "Furnadon", rate: "9.9%" },
          { rank: "6", name: "Saberhorn", rate: "9.8%" },
        ],
      },
      {
        id: "top-cores",
        type: "entity-grid",
        heading: "Top 10-Win-Rate Cores",
        items: [
          {
            title: "Gaiadrasil + Dryadell (Onsetra core)",
            summary:
              "62.2% 10-win rate across 45 games. Typically paired with Onsetra, Thorntail, Panbud, and Dracana.",
            badge: "62.2% 10-win",
          },
          {
            title: "Miasmaw + Drumire (Cinnabark core)",
            summary:
              "50.0% 10-win rate across 116 games. Typically paired with Onsetra, Vipair, and Dracana.",
            badge: "50.0% 10-win",
          },
          {
            title: "Ouroblaze + Furnadon (Steamscuttle core)",
            summary:
              "45.3% 10-win rate across 139 games. Typically paired with Onsetra, Snapscald, and Rubbin.",
            badge: "45.3% 10-win",
          },
        ],
      },
      {
        id: "season1-cores",
        type: "prose",
        heading: "Season 1 Numbers From gamesfuze",
        body:
          "Season 1 data from gamesfuze shows the same Miasmaw + Drumire comp at the S+ tier, with Cairnage + Opalion at 59% 10-win rate, Fumungus + Cobrex at 55% 10-win rate, and Swoonet + Snapscald at 49% 10-win rate as additional strong ladders.\n\nThe 62.2% Gaiadrasil + Dryadell core only holds when its full support package (Onsetra, Thorntail, Panbud, Dracana) is also available. Without that package the core falls back toward the 45-50% range of the other S+ comps.",
      },
      {
        id: "standout-units",
        type: "entity-grid",
        heading: "Standout Individual Units",
        items: [
          {
            title: "Pipskull (common, ghost)",
            summary:
              "Multicast scales with the number of enemies you have eliminated. The longer a round goes, the more damage each cast deals. It can stack to roughly 30-50 damage per activation in late fights.",
            badge: "Repeater",
          },
          {
            title: "Bonshell (rock)",
            summary:
              "Its early upgrade gives both extra damage and a shield, making it one of the safest early-game carries.",
            badge: "Starter",
          },
          {
            title: "Rhizuka (rock)",
            summary:
              "Gains bonus damage whenever an ally applies a shield, so it scales naturally with shield-heavy comps.",
            badge: "Amplifier",
          },
        ],
      },
      {
        id: "rarity-leveling",
        type: "prose",
        heading: "Rarity And Leveling",
        body:
          "Batomon rarity runs common, uncommon, and legendary. Upgrades stack additively:\n\n- 3 Level-1 copies merge into a Level-2 and grant a trinket.\n- 2 Level-2 copies merge into a Level-3 and grant another trinket.\n- Level-4 requires a special effect, not extra copies.",
      },
      {
        id: "how-to-use",
        type: "callout",
        tone: "tip",
        title: "How To Use This Tier List",
        body:
          "Treat the highest pick-rate Batomon (Dracana, Steamscuttle, Onsetra) as near-default slots when you are not yet committed to a build. Pick a core from the top 10-win-rate list and pick the supporting units from the highest pick-rate list that share the core's type or trigger. A 10-win rate number out of context is misleading. The Miasmaw + Drumire 50% line is stronger than its number suggests because it appears in 116 games, not 45.",
      },
    ],
    faqIds: [],
    relatedPageIds: [
      "trainer-tier-list",
      "team-builds-meta",
      "battle-strategy",
      "beginner-guide",
    ],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-09",
  },
  {
    id: "team-builds-meta",
    translationKey: "team-builds-meta",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/team-builds-meta",
    url: "/guides/team-builds-meta",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Batomon Showdown Best Team And Meta Builds",
    seoTitle:
      "Batomon Showdown Best Team: Meta Builds And 4-Role Guide",
    metaDescription:
      "Batomon Showdown best team and meta build guide covering S+ cores, standout support slots, the 4-role framework, and how to pivot from the early shop.",
    summary:
      "Meta cores, standout support slots, the 4-role build framework, and how to pivot from the early shop without breaking the run.",
    hero: {
      eyebrow: "Best team and meta builds",
      subtitle:
        "Pick a core from the early shop, fill four late-game roles, and pivot only the part of the board that caused the loss.",
      ctas: [
        { label: "Batomon Tier List", href: "/guides/batomon-tier-list" },
        { label: "Positioning & Synergies", href: "/guides/battle-strategy" },
      ],
    },
    quickAnswer:
      "A run ends when you defeat 10 NPC trainers and collect 10 badges. Teams are built by picking a Trainer, choosing a core pair of Batomon to anchor the early game, then filling the remaining slots around four late-game roles. The current top cores come from 30-day public match data on batomon.com and Season 1 coverage on gamesfuze.",
    keyFacts: [
      { label: "Top core", value: "Gaiadrasil + Dryadell · 62.2% 10-win" },
      { label: "Most-picked slot", value: "Dracana 17.4%" },
      { label: "Late-game frame", value: "Starter / Repeater / Amplifier / Survivor" },
      { label: "Source", value: "batomon.com 30-day + Season 1 gamesfuze" },
    ],
    modules: [
      {
        id: "meta-cores",
        type: "entity-grid",
        heading: "Meta Cores And S+ Comps",
        items: [
          {
            title: "Gaiadrasil + Dryadell (Onsetra core)",
            summary:
              "62.2% 10-win rate. The strongest core in the dataset. Typical partners are Onsetra, Thorntail, Panbud, and Dracana. Gaiadrasil and Dryadell feed the shared HP pool while Onsetra and Dracana add scaling damage and shield pressure.",
            badge: "62.2% 10-win",
          },
          {
            title: "Miasmaw + Drumire (Cinnabark core)",
            summary:
              "50.0% 10-win rate. Common partners are Onsetra, Vipair, and Dracana. Use this core when the early shop offers Cinnabark-type items or when Miasmaw's poison-spread lines up with Drumire's payoff casts.",
            badge: "50.0% 10-win",
          },
          {
            title: "Ouroblaze + Furnadon (Steamscuttle core)",
            summary:
              "45.3% 10-win rate. Common partners are Onsetra, Snapscald, and Rubbin. Strong when the run can stabilize the shop around steam and burn items by mid-game.",
            badge: "45.3% 10-win",
          },
          {
            title: "Swoonet + Snapscald (Steamscuttle, Season 1)",
            summary:
              "49% 10-win rate, the most-played comp in Season 1 at 235 tracked games. Same support package as the Ouroblaze line.",
            badge: "49% 10-win",
          },
          {
            title: "Cairnage + Opalion (Season 1)",
            summary:
              "59% 10-win rate. Higher variance but top-end payoff when the early shop supports it.",
            badge: "59% 10-win",
          },
          {
            title: "Fumungus + Cobrex (Puffloon core, Season 1)",
            summary:
              "55% 10-win rate. The fungus/spore package multiplies shields and survivability on the shared pool.",
            badge: "55% 10-win",
          },
        ],
      },
      {
        id: "support-slots",
        type: "entity-grid",
        heading: "Standout Support Slots",
        items: [
          {
            title: "Dracana (17.4% pick rate)",
            summary:
              "The most-picked Batomon over the 30-day window. Fits into every S+ comp listed above.",
            badge: "Most-picked",
          },
          {
            title: "Onsetra",
            summary:
              "Very high pick rate, the default connector for Onsetra, Steamscuttle, and Cinnabark cores.",
            badge: "Connector",
          },
          {
            title: "Pipskull (common, ghost)",
            summary:
              "Multicast scaling increases with each KO. A top pick for the Repeater role in the late game.",
            badge: "Repeater",
          },
          {
            title: "Bonshell (rock)",
            summary:
              "Once it evolves, its cast deals damage and grants a shield, useful for both the Amplifier and Survivor roles.",
            badge: "Hybrid",
          },
          {
            title: "Rhizuka (rock)",
            summary:
              "Attacks trigger whenever a teammate applies a shield, which pairs naturally with shield-generating cores like Puffloon.",
            badge: "Amplifier",
          },
          {
            title: "Steamscuttle",
            summary:
              "Anchors both the Swoonet and Ouroblaze steam lines.",
            badge: "Anchor",
          },
        ],
      },
      {
        id: "four-role-framework",
        type: "steps",
        heading: "The 4-Role Build Framework",
        items: [
          {
            title: "Plan one Starter",
            body:
              "Starter (1 slot): a Batomon that opens the fight with a buff, protect, or shield so the rest of the team survives the first round. Gaiadrasil, Dryadell, and shield-generating rocks like Bonshell fill this slot.",
            doneCondition:
              "One Starter is in the formation and the first-round trade is survivable.",
          },
          {
            title: "Plan one or two Repeaters",
            body:
              "Repeater (1-2 slots): fast casts, multicast, or on-ally-trigger effects that fire multiple times per turn. Pipskull and Drumire are the canonical Repeaters.",
            doneCondition:
              "A Repeater is online and its multicast or trigger chain is firing each turn.",
          },
          {
            title: "Plan one or two Amplifiers",
            body:
              "Amplifier (1-2 slots): Batomon that boost the Repeater's actions, such as Onsetra, Rhizuka, or Dracana when paired with a shield engine.",
            doneCondition:
              "An Amplifier is connected to the Repeater and the trigger chain is scaling.",
          },
          {
            title: "Plan one Survivor",
            body:
              "Survivor (1 slot): a tank or shield-bearer that keeps the shared HP pool alive long enough for the Repeaters and Amplifiers to scale. Fumungus, Cobrex, and Furnadon are common Survivor picks.",
            doneCondition:
              "A Survivor is holding the shared HP pool above the failure threshold in long rounds.",
          },
        ],
      },
      {
        id: "priorities-and-mistakes",
        type: "callout",
        tone: "tip",
        title: "Best Team Build Priorities And Common Mistakes",
        body:
          "Build around the Trainer you picked at run start, not around a single Batomon you want to force. Choose the core from the early shop offerings (Days 1-3). If the shop does not support your planned core, pivot to whichever of Gaiadrasil, Miasmaw, Ouroblaze, Swoonet, Cairnage, or Fumungus is actually available, rather than chasing scaling items that never arrive. Plan the four late-game roles before Day 5. A team that only deals damage or only stacks shields will lose to comps that do both. Do not over-invest in one-role comps. The strongest runs in the dataset always include at least one Starter, one Repeater, and one Survivor by the second shop refresh. Treat Dracana and Onsetra as near-default slots in Season 1: their pick rates are the highest in the public data, and they slot cleanly into every S+ comp above.",
      },
    ],
    faqIds: [],
    relatedPageIds: [
      "batomon-tier-list",
      "trainer-tier-list",
      "battle-strategy",
      "beginner-guide",
    ],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-09",
  },
  {
    id: "battle-strategy",
    translationKey: "battle-strategy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/battle-strategy",
    url: "/guides/battle-strategy",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Batomon Showdown Positioning Guide: Synergies And Placement",
    seoTitle:
      "Batomon Showdown Positioning Guide: Synergies & Placement",
    metaDescription:
      "Batomon Showdown positioning guide covering placement keywords, synergies, status effects, type and faction synergies, and essential trigger interactions.",
    summary:
      "Placement keywords, status effects, trigger categories, type and faction synergies, and the combat keywords that drive the auto-battler surface.",
    hero: {
      eyebrow: "Positioning and synergies",
      subtitle:
        "Every decision that affects who hits whom is locked in before the Battle button is pressed, so positioning and team composition are the entire skill surface.",
      ctas: [
        { label: "Best Team & Meta", href: "/guides/team-builds-meta" },
        { label: "Batomon Tier List", href: "/guides/batomon-tier-list" },
      ],
    },
    quickAnswer:
      "Battles in Batomon Showdown are fully automatic. Once you place your squad on the board, the two sides fight without a player-controlled timer. Every decision that affects who hits whom and when is locked in before the Battle button is pressed, so positioning and team composition are the entire skill surface of the mode.",
    keyFacts: [
      { label: "Mode", value: "Automatic combat, no live timer" },
      { label: "Skill surface", value: "Placement + composition" },
      { label: "Types", value: "Fire · Toxic · Flying · Rock · Water · Ghost" },
      { label: "Key trigger", value: "When an ally applies a shield" },
    ],
    modules: [
      {
        id: "positioning-keywords",
        type: "prose",
        heading: "Positioning Keywords",
        body:
          "Any ability whose text contains the words adjacent, above, or behind is a positioning instruction that must be resolved on the board before combat starts. Two patterns show up constantly:\n\n- Backline unit: triggers from the rear of the formation and stays alive longer than frontline bruisers.\n- Backline-killer type: needs to be kept alive so its scaling can stack.\n\nRhizuka (rock) attacks from the back row and is typically placed there to stay alive, then triggers off allied shield applications to deal damage. Pipskull (common, ghost) is a backline-killer archetype that scales itself through knockouts and has to be protected to keep stacking. A worked shield-trigger chain uses Bonshell (the upgraded Rhizuka) casting shield and damage on cast while Rhizuka retaliates whenever an ally applies a shield.",
      },
      {
        id: "status-sustain",
        type: "prose",
        heading: "Status Effects And Sustain",
        body:
          "Status effects that appear during combat include Burn, Poison, Shock, plain damage, healing, and shields. Shields are both a defensive layer and a trigger source, since some units key their abilities off \"when an ally applies a shield.\"\n\nHealing from water-type synergies and shields from rock-type chains are the two main sustain tools. Protect is a defensive keyword that prevents the next instance of damage or a triggered effect from landing.",
      },
      {
        id: "trigger-categories",
        type: "entity-grid",
        heading: "Trigger Categories",
        items: [
          {
            title: "On Cast",
            summary:
              "The moment the unit is placed or first activates.",
            badge: "Trigger",
          },
          {
            title: "On Battle Start",
            summary: "When combat begins.",
            badge: "Trigger",
          },
          {
            title: "On Bought",
            summary: "When the shop purchase triggers.",
            badge: "Trigger",
          },
          {
            title: "Ongoing",
            summary: "Every tick the condition holds.",
            badge: "Trigger",
          },
          {
            title: "On Victory",
            summary: "End-of-fight payoff.",
            badge: "Trigger",
          },
        ],
      },
      {
        id: "resolution-keywords",
        type: "prose",
        heading: "Resolution And Ticks",
        body:
          "Same-tick resolution is how chained triggers resolve in one combat step. Knockout is the moment a creature is removed from the board and triggers deathrattle-style effects. Sudden death extends a tied fight until a winner is produced.",
      },
      {
        id: "synergy-layers",
        type: "prose",
        heading: "Synergy Layers: Types And Factions",
        body:
          "Synergies come in two layers. Types are fire, toxic, flying, rock, water, and ghost. Stacking a roster toward a type unlocks attack or defense payoffs once the threshold is met:\n\n- Toxic stacks convert into poison damage.\n- Water stacks convert into healing and sustain.\n- Rock stacks convert into shields and protective procs.\n\nFactions are organized by region in the creature roster (for example the Jinto region). A region that is under-powered, over-tuned, or simply over-represented in a given meta has historically been adjusted by the developer, including past nerfs to Jinto.\n\nSome traits act as cross-region bridges and let a roster pull in creatures from a second region to form a hybrid team, trading pure-region stacking bonuses for flexibility.",
      },
      {
        id: "scaling-examples",
        type: "prose",
        heading: "Scaling Examples",
        body:
          "Pipskull permanently adds multicast every time it knocks out a target, so a long-surviving Pipskull can stack multicast to roughly 30-50 activations per trigger window. Bonshell's cast value and Rhizuka's ally-shield retaliation both scale with how often they actually trigger, which is itself a function of positioning and roster composition rather than raw stats.",
      },
      {
        id: "combat-keywords",
        type: "entity-grid",
        heading: "Combat Keywords That Drive These Interactions",
        items: [
          {
            title: "Triggering",
            summary: "The generic name for an ability firing.",
          },
          {
            title: "Charge",
            summary: "Resource buildup before an ability can be used.",
          },
          {
            title: "Cooldown speed",
            summary: "How fast cooldowns tick.",
          },
          {
            title: "Ability disable",
            summary: "A silenced unit cannot trigger.",
          },
          {
            title: "Stat caps",
            summary:
              "Per-stat maxima that prevent infinite scaling on raw attributes alone.",
          },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: [
      "team-builds-meta",
      "batomon-tier-list",
      "beginner-guide",
      "progression-systems",
    ],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-09",
  },
  {
    id: "progression-systems",
    translationKey: "progression-systems",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/progression-systems",
    url: "/guides/progression-systems",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Batomon Showdown Trinkets Guide: Merges, Items And Economy",
    seoTitle:
      "Batomon Showdown Trinkets Guide: Economy & 93 Trinket Pool",
    metaDescription:
      "Batomon Showdown trinkets guide covering the 93-trinket pool, the 40-item shop pool, the merge-to-trinket loop, and which Trainers bend the in-run economy.",
    summary:
      "How trinkets are earned, the 93 trinket pool, the 40-item shop pool, the merge-to-trinket economy loop, and which Trainers bend it.",
    hero: {
      eyebrow: "Trinkets and economy",
      subtitle:
        "Two intertwined loops drive progression: merging Batomon for trinkets and spending in-run gold on shop rerolls, items, and coupons.",
      ctas: [
        { label: "Trainer Tier List", href: "/guides/trainer-tier-list" },
        { label: "Multiplayer & Ranked", href: "/guides/multiplayer-ranked" },
      ],
    },
    quickAnswer:
      "Progression in Batomon Showdown runs on two intertwined loops: the merging of Batomon copies (which hands the squad trinkets and stat boosts) and the in-run gold spent on shop rerolls, daily purchases and coupon-style items. The full trinket pool has 93 entries grouped by function rather than by rarity, and the in-run shop pulls from a 40-item pool whose effects mostly bend rerolls, gold income or cooldown.",
    keyFacts: [
      { label: "Trinket pool", value: "93 entries" },
      { label: "Item pool", value: "40 shop entries" },
      { label: "Trinket timings", value: "On Cast / On Battle Start / On Bought / Ongoing / On Victory" },
      { label: "Economy trainers", value: "Burglar · Scavenger" },
    ],
    modules: [
      {
        id: "how-trinkets-are-acquired",
        type: "steps",
        heading: "How Trinkets Are Acquired",
        items: [
          {
            title: "Trinkets drop from merging events",
            body:
              "Trinkets drop from merging events:\n\n- 3 Level-1 Batomon of the same species merge into a Level-2 copy.\n- 2 Level-2 copies merge into a Level-3 copy.\n- Level-4 requires a special effect.",
            doneCondition:
              "The first merge paid out a trinket to the squad, not just a stat boost.",
          },
          {
            title: "Each merge grants a stat boost and one trinket",
            body:
              "Each successful merge grants a stat boost to the resulting Batomon and, separately, hands one trinket to the entire squad. Rarity of the offered trinket follows the rarity tier of the merging event, with legendary trinkets only entering the cart at the higher levels. Trinkets fire on fixed timings: On Cast, On Battle Start, On Bought, Ongoing, and On Victory, so the moment to read each trinket is its trigger line, not its name.",
            doneCondition:
              "The squad has read the trigger line of each owned trinket, not just its name.",
          },
        ],
      },
      {
        id: "trinket-groups",
        type: "entity-grid",
        heading: "Trinket Groups By Function",
        items: [
          {
            title: "Crowns",
            summary:
              "Alpha Crown, Haste Crown, Master Crown, Power Crown, Winged Crown: broad stat auras that scale with squad size. The default \"stack if offered\" picks when nothing more specific is needed.",
            badge: "Group",
          },
          {
            title: "Bells",
            summary:
              "Blitz Bell, Echo Bell, Fire Bell, Mighty Bell, Poison Bell, Power Bell, Quick Bell: trigger-on-cast effects, strongest in fast-cast or spell-heavy teams.",
            badge: "Group",
          },
          {
            title: "Charms and Flags",
            summary:
              "Echo Charm, Mysterious Charm, Repeater Charm, Tempo Charm, Dryad's Charm, Momentum Flag, Quick Flag, Rally Flag: small stacking effects tied to type or tempo, good as filler when the team already has a defined direction.",
            badge: "Group",
          },
          {
            title: "Orbs and Incenses",
            summary:
              "Fire Orb, Haste Orb, Poison Orb, Blue/Gold/Mystic/Purple Incense: type-locked damage or haste riders. Pick the one that matches the squad's dominant type.",
            badge: "Group",
          },
          {
            title: "Weapons and Tools",
            summary:
              "Barbell, Boxing Glove, Fancy Sword, Giant Club, Hero's Sword, Metal Bat, Razor Beak, Rocket Boots, Scrap Sword, Small Club, Warhorn, Wood Sword: direct stat sticks for one monster, used to patch a weak slot.",
            badge: "Group",
          },
          {
            title: "Resource trinkets",
            summary:
              "Arcade Coins, Fake Diamond, Fool's Gold, Gold Nugget, Junk, Locked Box, Mysterious Chest, Mysterious Gem, Mysterious Mask, Piggy Bank, Rainbow Pearl: open into gold, items or other trinkets. The gold-producing subset (Arcade Coins, Gold Nugget, Piggy Bank, Fool's Gold, Locked Box, Mysterious Chest, Rainbow Pearl) is the engine of the economy loop.",
            badge: "Group",
          },
          {
            title: "Utility tools",
            summary:
              "Bargain Bin, Excalibur, Holy Grail, Kaleidoscope, Link Cable, Mega/Mini/Ultra Duplicator, Metronome, Terrarium, Training Weights, Treasure Map, Upgrade Disc, Mega Upgrade Disc, Zenith Stone: reroll discounts, duplicates, free merges or forced level-ups. High priority when the squad is mid-build.",
            badge: "Group",
          },
        ],
      },
      {
        id: "items-by-function",
        type: "entity-grid",
        heading: "In-Run Items By Function",
        items: [
          {
            title: "Reroll and shop manipulation",
            summary:
              "Bargain Bin (trinket), Coupon, Voucher, Market License, VIP Pass, Membership Card. Stack these to make the in-run shop act as a second progression track, since every saved gold is a slot that can be redirected to merges.",
            badge: "Shop",
          },
          {
            title: "Gold income",
            summary:
              "Gold Nugget, Gold Bar, Gold Bracelet, Gold Trophy, Gold Incense, Gold-o-matic, Gold Powder, Lucky Coin, Red Coin, Fake Coin. These are the shop-side counterpart to the resource trinkets above.",
            badge: "Economy",
          },
          {
            title: "Cooldown and casting",
            summary:
              "Battery Pack, Coffee, Hot Pepper, Focus Pill, Metronome, Training Weights. Used to enable cast-frequency trinkets (Bells, Charms, Flags).",
            badge: "Casting",
          },
          {
            title: "Trinket creation",
            summary:
              "Lootbox, Mysterious Chest, Locked Box, Magic Lasso, Tote Bag. Convert gold into more trinket rolls when the squad is trinket-starved.",
            badge: "Trinkets",
          },
          {
            title: "Leveling shortcuts",
            summary:
              "Basic Candy, Rare Candy, Ultra Candy, Grow Lamp, Upgrade Disc, Mega Upgrade Disc, Zenith Stone. Skip a merge step for a single Batomon. Worth it on the carry, rarely on the bench.",
            badge: "Level",
          },
          {
            title: "Type and evolution tools",
            summary:
              "Black Feather, Black Sludge, Blue Ticket, Crimson Gift, Crimson Ticket, Gray Chip, Gray Ticket, Green Stone, Green Ticket, Purple Gift, Purple Ticket, Golden Gift, Golden Ticket, Shiny Berry, Shiny Pebble, Dowsing Rod, Nana Berry, Pom Berry. Used to pivot a Batomon into a Shiny, an evolution or a transformation, and to enable special-effect Level-4 merges.",
            badge: "Evolution",
          },
          {
            title: "Recruitment and shop day usage",
            summary:
              "Apex Bait, Basic Bait, Recruiting Flyer, Cake, Feast. The bait and flyer expand tomorrow's shop options, which is where the daily currency is actually spent.",
            badge: "Shop",
          },
        ],
      },
      {
        id: "economy-loop",
        type: "prose",
        heading: "The Economy Loop",
        body:
          "Each run starts with a Trainer pick plus 2-4 Batomon that act together. Day-to-day gold flows into the shop:\n\n- Rerolling the shop costs 3 gold per roll.\n- Buying a Batomon or an item costs their listed price.\n- Coupon trinkets (Bargain Bin, VIP Pass, Membership Card, Market License) cut into those costs and should be evaluated against reroll value rather than raw price.\n\nGold-producing trinkets (the resource set above plus the Gold-named items) compound over a run and decide whether the squad can afford a third merge or has to settle for a second reroll.",
      },
      {
        id: "trainers-bend-economy",
        type: "comparison",
        heading: "Trainers That Bend The Economy",
        options: [
          {
            name: "Burglar",
            summary:
              "Takes two trinkets from every trinket-gift event instead of one.",
            bestFor:
              "Roughly doubles trinket income and shifts the build toward trinket-heavy compositions.",
            badge: "Economy tier",
          },
          {
            name: "Scavenger",
            summary:
              "On every trinket-gift event, hands an extra copy of every non-unique Common or Uncommon trinket the squad already owns.",
            bestFor:
              "Converts low-rarity trinkets into a stacking engine.",
            badge: "Economy tier",
          },
        ],
      },
      {
        id: "second-chance",
        type: "callout",
        tone: "tip",
        title: "Second Chance",
        body:
          "When a run hits the brink of wiping, the Second Chance event restores the squad to 1 health and triggers a recovery choice. The offered rewards are squad-repair options such as finishing a pending merge or receiving a relevant trinket. Second Chance is the in-run safety valve on the merge-plus-trinket progression, not a way to backdoor a legendary unit.",
      },
    ],
    faqIds: [],
    relatedPageIds: [
      "beginner-guide",
      "trainer-tier-list",
      "team-builds-meta",
      "multiplayer-ranked",
    ],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-09",
  },
  {
    id: "multiplayer-ranked",
    translationKey: "multiplayer-ranked",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/multiplayer-ranked",
    url: "/guides/multiplayer-ranked",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Batomon Showdown Multiplayer Guide: Async PvP And Ladder",
    seoTitle:
      "Batomon Showdown Multiplayer Guide: Ranked Ladder Tips & MMR",
    metaDescription:
      "Batomon Showdown multiplayer guide covering async PvP, cross-platform saves, divisions, stars, MMR, Master rank, and how ranked opponents read saved teams.",
    summary:
      "How asynchronous PvP works, cross-platform saves, the ranked ladder, where the top of the leaderboard sits, and how to make the saved team itself strong.",
    hero: {
      eyebrow: "Multiplayer and ranked",
      subtitle:
        "Async PvP with no live opponent: every decision can be made slowly before the saved squad is uploaded.",
      ctas: [
        { label: "Trinkets & Economy", href: "/guides/progression-systems" },
        { label: "Best Team & Meta", href: "/guides/team-builds-meta" },
      ],
    },
    quickAnswer:
      "Batomon Showdown multiplayer is asynchronous PvP. Players never fight each other in real time. A run is a solo campaign in which you pick a Trainer, assemble a squad of Batomon with trinkets and items, and battle NPC trainers to collect 10 badges. Once the run is finished, the saved squad is uploaded to the platform. Other players then face that saved squad as their opponent, and your own saved squad becomes the opponent for someone else.",
    keyFacts: [
      { label: "Format", value: "Async PvP via saved squads" },
      { label: "Cross-platform", value: "Steam and Android share saves" },
      { label: "Top tier", value: "Master rank" },
      { label: "Top of ladder", value: "ddevgrande 5,740 MMR" },
    ],
    modules: [
      {
        id: "save-and-privacy",
        type: "prose",
        heading: "Multiplayer Save Data And Privacy",
        body:
          "Save data is shared across Steam and Android: a single account can continue a run and the ranked ladder on both platforms, and the developer's roadmap adds iOS to the same shared cloud save.\n\nRanked participation is opt-in: matches against other players' saved teams are logged with separate consent from the solo run. Public compositions only appear on the global leaderboard when the player's profile is set to public.",
      },
      {
        id: "ranked-works",
        type: "entity-grid",
        heading: "How Ranked Play Works",
        items: [
          {
            title: "Divisions",
            summary: "The named ranks the player climbs through over a season.",
          },
          {
            title: "Stars",
            summary: "The per-division marks that fill before promotion to the next Division.",
          },
          {
            title: "MMR (Match Making Rating)",
            summary:
              "The underlying numeric rating used to sort players on the global ladder.",
          },
          {
            title: "Master rank",
            summary:
              "The top tier reached by the highest-rated players each season.",
          },
        ],
      },
      {
        id: "run-finishes",
        type: "prose",
        heading: "How Runs Move The Ladder",
        body:
          "Finishing a run is what changes rank: each completed run feeds the result into the ranked ladder, so the ladder moves as soon as a new saved team is uploaded.",
      },
      {
        id: "top-of-ladder",
        type: "data-table",
        heading: "Where The Top Of The Ladder Sits Right Now",
        columns: [
          { key: "rank", label: "#" },
          { key: "player", label: "Player" },
          { key: "mmr", label: "30-day MMR" },
        ],
        rows: [
          { rank: "1", player: "ddevgrande", mmr: "5,740" },
          { rank: "2", player: "Omni Deus", mmr: "5,711" },
          { rank: "3", player: "Anonymous", mmr: "5,361" },
        ],
      },
      {
        id: "anonymous-note",
        type: "prose",
        heading: "Reading The Anonymous Slot",
        body:
          "Anonymous is the default name shown for players whose profile is private, so it can also represent any high-MMR player who has not made their profile public. The leaderboard was observed across 8,169 ranked players over a 30-day window.",
      },
      {
        id: "ranked-reads",
        type: "prose",
        heading: "How Ranked Opponents Read Your Saved Team",
        body:
          "Because multiplayer is asynchronous, ranked opponents never see you play the run. They only read the saved team that was uploaded when you finished. That means the way to climb the ladder is to make the saved team itself strong, not to play well in real time.\n\n- 9puz highlights that ranked opponents read a saved team by the Trainer chosen and the single-line explanation the player leaves on the board.\n- The build should be explained in one sentence and oriented around the Trainer's passive before the team is uploaded.\n\nPlan the saved team around the Trainer you picked, anchor it on a known meta core, and write a one-line board description that tells the next opponent what the team is doing. That is the entire ladder-climb loop.",
      },
    ],
    faqIds: [],
    relatedPageIds: [
      "progression-systems",
      "team-builds-meta",
      "beginner-guide",
      "trainer-tier-list",
    ],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-09",
  },
];