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
      "Batomon Showdown trainer tier list covering Burglar, Painter, Twins, Scavenger and situational picks, the 1.2.0 Smuggler trainer, and how to read the three-card hand at run start.",
    summary:
      "Which Trainers the ladder actually plays, situational picks, the 24-Trainer roster, the six new Jinto trainers, and the new 1.2.0 Smuggler trainer.",
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
      "The choice you make at run start sticks for the whole run, so read all three Trainer cards before committing. The Trainer's passive ability applies to the whole team, and the practical question is whether the passive can fire in the early turns of the run. The post-1.2.0 roster adds the Smuggler trainer (one foreign-region pull per run) and the six new Jinto trainers (Twins, Gentleman, Painter, Burglar, Scavenger, Black Belt) introduced when Jinto unlocked at 5 Pantra wins.",
    keyFacts: [
      { label: "Top picks", value: "Burglar · Painter · Twins · Scavenger" },
      { label: "Situational", value: "Gentleman · Black Belt · Smuggler" },
      { label: "Total roster", value: "24 Trainers" },
      { label: "Jinto trainers", value: "Twins · Gentleman · Painter · Burglar · Scavenger · Black Belt" },
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
        id: "jinto-trainers",
        type: "entity-grid",
        heading: "Six New Jinto Trainers (Unlocked At 5 Pantra Wins)",
        items: [
          {
            title: "Twins",
            summary:
              "When any monster reaches Level 3, the player gains an exact copy of it. Best in build-defining runs where one core reliably hits Level 3.",
            badge: "Jinto",
          },
          {
            title: "Gentleman",
            summary:
              "From Day 4 onward, Common and Uncommon monsters are removed from the shop. Niche pick that needs the rest of the offered hand to lean Rare or Legendary from the start.",
            badge: "Jinto",
          },
          {
            title: "Painter",
            summary:
              "Paints a random species with various types for the run. Used to build unusual type synergies, especially around Batomon whose abilities scale with the number of types they have.",
            badge: "Jinto",
          },
          {
            title: "Burglar (6.7% Season 1 pick rate)",
            summary:
              "When a trinket gift appears, takes two trinkets instead of one. Doubles trinket income and shifts the build toward trinket-heavy compositions. The Jinto Burglar retains the same passive and the 6.7% popularity rank carries over from the Season 1 dataset.",
            badge: "Jinto top pick",
          },
          {
            title: "Scavenger",
            summary:
              "When a trinket gift appears, gives an extra copy of every non-unique Common or Uncommon trinket the squad already owns. Converts low-rarity trinkets into a stacking engine.",
            badge: "Jinto",
          },
          {
            title: "Black Belt",
            summary:
              "Causes a single Fighting-type monster to trigger On Victory. Niche pick that requires the offered Fighting monster to actually land on Victory.",
            badge: "Jinto",
          },
        ],
      },
      {
        id: "patch-120-trainer-balance",
        type: "entity-grid",
        heading: "1.2.0 Trainer Balance Adjustments",
        items: [
          {
            title: "Smuggler (new)",
            summary:
              "Once per run, the Smuggler trainer pulls one Batomon from a foreign region. Cordycant and Sproach are the published foreign options; the pull becomes a sixth slot rather than a build-around.",
            badge: "New",
          },
          {
            title: "Chemist +1 to +3 Poison",
            summary:
              "Chemist's Poison-trigger bonus moves from +1 to +3 per proc. The trainer now meaningfully scales with Miasmaw-style poison-spread engines.",
            badge: "Buff",
          },
          {
            title: "Redhead Burn-per-win to Fire +2 to +3",
            summary:
              "Redhead's Burn-per-win scaling is removed and replaced with a flat +2 to +3 Fire bonus. Pairs cleanly with the 1.2.0 Pantra burn line (Cinderfly, Thorntail, Noxnimbus).",
            badge: "Rework",
          },
          {
            title: "Gamer Mythical reveal",
            summary:
              "Gamer now reveals Mythical Batomon on the first shop refresh. Trades the Gamer run-time gamble for an information advantage at run start.",
            badge: "Rework",
          },
        ],
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
    lastReviewed: "2026-10-13",
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
      "Batomon Showdown tier list covering the highest pick-rate Batomon, the post-1.2.0 S+ cores (Dracana, Cinnabark, Velocect), the Pantra burn line, the Smuggler foreign options, the Jinto region roster, and how to use the tier list when building a squad.",
    summary:
      "Post-1.2.0 S+ cores (Dracana, Cinnabark, Velocect), standout individuals, the Pantra burn line, the Smuggler foreign options, and the Jinto roster with its 5-Pantra-win unlock gate.",
    hero: {
      eyebrow: "Batomon tier list",
      subtitle:
        "There is no official developer tier list; the community reads 30-day pick rate and 10-win rate instead. The 1.2.0 (Smuggler) patch moved the S+ list to Dracana, Cinnabark, and Velocect.",
      ctas: [
        { label: "Trainer Tier List", href: "/guides/trainer-tier-list" },
        { label: "Best Team & Meta", href: "/guides/team-builds-meta" },
      ],
    },
    quickAnswer:
      "There is no officially published Batomon strength tier (S/A/B/C) from the developers. The community uses 30-day pick rate and 10-win rate as the practical proxy for the current meta, and what players actually track is which comps climb the 10-win ladder rather than a single Batomon ranking. Post-1.2.0 the S+ cores are Dracana (61.4% over 58 runs), Cinnabark (51.8% over 128 runs) and Velocect (43.5% over 99 runs); the new Pantra burn line and Smuggler foreign pulls (Cordycant, Sproach) round out the post-1.2.0 tier. The Jinto region unlocks at 5 Pantra wins and adds 50+ Batomon plus six new trainers.",
    keyFacts: [
      { label: "Most picked", value: "Dracana 16.0% · Onsetra 11.7%" },
      { label: "S+ core", value: "Dracana 61.4% / Cinnabark 51.8% / Velocect 43.5% 10-win" },
      { label: "Sample size", value: "4,901 boards post-1.2.0 (Critcap)" },
      { label: "Rarity tiers", value: "Common · Uncommon · Legendary · Mythical" },
    ],
    modules: [
      {
        id: "highest-pick-rate",
        type: "data-table",
        heading: "Highest Pick-Rate Batomon (Post-1.2.0, 30-Day)",
        columns: [
          { key: "rank", label: "#" },
          { key: "name", label: "Batomon" },
          { key: "rate", label: "Pick rate (30-day)" },
        ],
        rows: [
          { rank: "1", name: "Dracana", rate: "16.0%" },
          { rank: "2", name: "Onsetra", rate: "11.7%" },
          { rank: "3", name: "Steamscuttle", rate: "11.1%" },
          { rank: "4", name: "Swoonet", rate: "10.5%" },
          { rank: "5", name: "Velocect", rate: "9.9%" },
          { rank: "6", name: "Furnadon", rate: "9.3%" },
        ],
      },
      {
        id: "top-cores",
        type: "entity-grid",
        heading: "Post-1.2.0 S+ And S Cores",
        items: [
          {
            title: "Dracana (S+, 61.4% over 58 runs)",
            summary:
              "Dracana + Gaiadrasil + Dryadell + Onsetra. The 1.2.0 highest 10-win finish rate in the dataset.",
            badge: "S+ core",
          },
          {
            title: "Cinnabark (S+, 51.8% over 128 runs)",
            summary:
              "Miasmaw + Drumire + Cinnabark. Returns to S+ via the 1.2.0 Cinnabark CD 5 to 4 and Drumire cost 50 to 45 reverts.",
            badge: "S+ core",
          },
          {
            title: "Velocect (S, 43.5% over 99 runs)",
            summary:
              "Cicadence + Formiqueen + Velocect. The Repeater-and-Amplifier pair scales Velocect into the S tier.",
            badge: "S core",
          },
        ],
      },
      {
        id: "pantra-burn-line",
        type: "entity-grid",
        heading: "1.2.0 Pantra Burn Line (Buff Targets)",
        items: [
          {
            title: "Cinderfly (cost 30 to 25, Burn 6 to 7)",
            summary:
              "Third copy now affordable by Day 3; Burn 6 to 7 closes the burn engine's single-tick deficit.",
            badge: "Pantra",
          },
          {
            title: "Thorntail (damage-per-Poison 6/12/18 to 8/16/24)",
            summary:
              "Each Poison stack adds 2 more damage per tick at 1/2/3 stacks.",
            badge: "Pantra",
          },
          {
            title: "Noxnimbus (Poison-to-adjacent 2/4/6 to 3/6/9)",
            summary:
              "Adjacent Poison rider jumps from 2/4/6 to 3/6/9; turns Noxnimbus into a Pantra S-tier support.",
            badge: "Pantra",
          },
        ],
      },
      {
        id: "smuggler-foreign",
        type: "entity-grid",
        heading: "Smuggler Foreign Options",
        items: [
          {
            title: "Cordycant",
            summary:
              "Pulled from the foreign region by the Smuggler trainer. Treat as a sixth slot rather than a build-around.",
            badge: "Cross-region",
          },
          {
            title: "Sproach",
            summary:
              "Pulled from the foreign region by the Smuggler trainer. Pairs with the rest of the squad if the trigger lines up.",
            badge: "Cross-region",
          },
        ],
      },
      {
        id: "jinto-region",
        type: "prose",
        heading: "Jinto Region (Unlocked At 5 Pantra Wins)",
        body:
          "Jinto is the second Batomon region, unlocked after the player records 5 Pantra wins. The unlock adds 50+ Jinto Batomon and six new trainers (Twins, Gentleman, Painter, Burglar, Scavenger, Black Belt). The full roster covered by the official Batomon Showdown wiki: Rattleghast, Petrirex, Ginsage, Ninflora, Brimtoad, Sukoi, Dollhime, Mallogre, Orcana, Tengusto, Danuki, Snapscald, Lumijel, Ouroblaze, Cinnabark, Drumire, Pipskull, Cairnage, Opalion, Nekoffin, Vengrieve, Cawnushi, Shrinell, Shikitsune, Emburn, Bonshell, Steamscuttle. Even after the 1.1.0 and 1.2.0 Jinto carry nerfs, Jinto runs still produce roughly 1.5x Pantra median DPS at day 10+.\n\nPost-1.2.0 Jinto nerf ladder: Petrirex, Nekoffin, Cairnage, Opalion nerfed from top DPS carry into S-tier; Ninflora, Cawnushi, Shrinell nerfed into A-tier; Shikitsune, Emburn, Bonshell, Steamscuttle nerfed into B-tier; Vengrieve nerfed into C-tier. The Cinnabark CD 5 to 4 and Drumire cost 50 to 45 reverts bring two of the Jinto carries back into the S+ window.",
      },
      {
        id: "jinto-roster-grid",
        type: "entity-grid",
        heading: "Jinto Roster And Post-1.2.0 Tier",
        items: [
          {
            title: "Cinnabark (S+, revert)",
            summary:
              "Returns to S+ via the 1.2.0 CD 5 to 4 revert. Center of the Miasmaw + Drumire core.",
            badge: "S+",
          },
          {
            title: "Drumire (S+, revert)",
            summary:
              "Returns to S+ via the 1.2.0 cost 50 to 45 revert. The Repeater of the Cinnabark core.",
            badge: "S+",
          },
          {
            title: "Petrirex (S, nerfed)",
            summary:
              "Top DPS carry before 1.2.0; nerfed into S-tier. Still worth building around when the shop offers it.",
            badge: "S",
          },
          {
            title: "Nekoffin (S, nerfed)",
            summary:
              "Top DPS carry before 1.2.0; nerfed into S-tier. Pairs with shield-heavy support.",
            badge: "S",
          },
          {
            title: "Cairnage (S, nerfed)",
            summary:
              "Top DPS carry before 1.2.0; nerfed into S-tier. Strong variance pick when the shop supports it.",
            badge: "S",
          },
          {
            title: "Opalion (S, nerfed)",
            summary:
              "Top DPS carry before 1.2.0; nerfed into S-tier. Pairs with Cairnage for the Season 1 59% line.",
            badge: "S",
          },
          {
            title: "Ninflora (A, nerfed)",
            summary:
              "Was S-tier pre-1.2.0; now A-tier. Still a strong support pick.",
            badge: "A",
          },
          {
            title: "Cawnushi (A, nerfed)",
            summary:
              "Was S-tier pre-1.2.0; now A-tier.",
            badge: "A",
          },
          {
            title: "Shrinell (A, nerfed)",
            summary:
              "Was S-tier pre-1.2.0; now A-tier.",
            badge: "A",
          },
          {
            title: "Bonshell (B, nerfed)",
            summary:
              "Was A-tier pre-1.2.0; now B-tier. Still safe as an early-game carry.",
            badge: "B",
          },
          {
            title: "Steamscuttle (B, nerfed)",
            summary:
              "Was A-tier pre-1.2.0; now B-tier. Bridges into the post-1.2.0 Pantra burn line.",
            badge: "B",
          },
          {
            title: "Shikitsune (B, nerfed)",
            summary:
              "Was A-tier pre-1.2.0; now B-tier.",
            badge: "B",
          },
          {
            title: "Emburn (B, nerfed)",
            summary:
              "Was A-tier pre-1.2.0; now B-tier.",
            badge: "B",
          },
          {
            title: "Vengrieve (C, nerfed)",
            summary:
              "Was B-tier pre-1.2.0; now C-tier. Skip unless the run needs the type coverage.",
            badge: "C",
          },
          {
            title: "Cordycant, Sproach (Smuggler foreign)",
            summary:
              "Pulled from the foreign region by the Smuggler trainer. Treat as a sixth slot.",
            badge: "Cross-region",
          },
        ],
      },
      {
        id: "season1-cores",
        type: "prose",
        heading: "Season 1 Numbers From gamesfuze",
        body:
          "Season 1 data from gamesfuze showed Cairnage + Opalion at 59% 10-win rate and Fumungus + Cobrex at 55% 10-win rate. Both lines still appear in the post-1.2.0 data but the 1.2.0 carry nerfs pulled them out of the S+ tier; they now live in the A / B band of the Jinto roster above.",
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
              "Its early upgrade gives both extra damage and a shield, making it one of the safest early-game carries. Note the 1.2.0 nerf moves it from A-tier into B-tier.",
            badge: "Starter",
          },
          {
            title: "Rhizuka (rock)",
            summary:
              "Gains bonus damage whenever an ally applies a shield, so it scales naturally with shield-heavy comps.",
            badge: "Amplifier",
          },
          {
            title: "Gaiadrasil + Dryadell",
            summary:
              "The shared-HP backbone of the post-1.2.0 S+ Dracana core. Feed both copies to level 3 before pivoting the rest of the squad.",
            badge: "S+ support",
          },
          {
            title: "Cicadence + Formiqueen",
            summary:
              "The Repeater and Amplifier of the post-1.2.0 S Velocect core.",
            badge: "S support",
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
    lastReviewed: "2026-10-13",
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
      "Batomon Showdown best team and meta build guide covering post-1.2.0 S+ cores (Dracana, Cinnabark, Velocect), the Pantra burn line, the Smuggler cross-region comp, and the 4-role framework.",
    summary:
      "Post-1.2.0 S+ cores (Dracana, Cinnabark, Velocect), the Pantra burn line, the Smuggler cross-region comp, and the 4-role build framework.",
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
      "Under the post-1.2.0 (Smuggler) balance the three top comps are the S+ Dracana core (Gaiadrasil + Dryadell, 61.4% over 58 runs), the S+ Cinnabark core (Miasmaw + Drumire, 51.8% over 128 runs) and the S Velocect core (Cicadence + Formiqueen, 43.5% over 99 runs). Around those the Pantra burn line (Cinderfly, Thorntail, Noxnimbus) and the Smuggler cross-region comp (Cordycant or Sproach pulled from a foreign region) give the run its post-1.2.0 identity.",
    keyFacts: [
      { label: "S+ core", value: "Dracana · 61.4% 10-win over 58 runs" },
      { label: "S+ core", value: "Cinnabark · 51.8% 10-win over 128 runs" },
      { label: "S core", value: "Velocect · 43.5% 10-win over 99 runs" },
      { label: "Late-game frame", value: "Starter / Repeater / Amplifier / Survivor" },
    ],
    modules: [
      {
        id: "meta-cores",
        type: "entity-grid",
        heading: "Post-1.2.0 S+ And S Cores",
        items: [
          {
            title: "Dracana (S+, 61.4% over 58 runs)",
            summary:
              "Highest 10-win finish rate in the post-1.2.0 sample. The Dracana engine rides the Onsetra core with Gaiadrasil + Dryadell as the shared-HP backbone. Shield pressure plus on-cast scaling makes it the safest S+ slot in the dataset.",
            badge: "S+ core",
          },
          {
            title: "Cinnabark (S+, 51.8% over 128 runs)",
            summary:
              "Returned to the top tier by the 1.2.0 revert (CD 5 to 4). The Cinnabark core runs Miasmaw + Drumire with Cinnabark at the center; the Drumire cost 50 to 45 revert lets the run hit the third Drumire copy by Day 4 in most openings.",
            badge: "S+ core",
          },
          {
            title: "Velocect (S, 43.5% over 99 runs)",
            summary:
              "The Velocect core pairs Cicadence + Formiqueen and thrives when the early shop offers multicast support. Sample size is large enough (99 runs) that the 43.5% line is the floor, not the ceiling.",
            badge: "S core",
          },
          {
            title: "Pantra burn line (Cinderfly, Thorntail, Noxnimbus)",
            summary:
              "Built around the 1.2.0 Pantra buffs. Cinderfly cost 30 to 25 and Burn 6 to 7, Thorntail damage per Poison stack 6/12/18 to 8/16/24, Noxnimbus Poison-to-adjacent 2/4/6 to 3/6/9. Pair with a Burn enabler for the burn engine to fire on the same turn.",
            badge: "Pantra line",
          },
          {
            title: "Smuggler cross-region comp (Cordycant, Sproach)",
            summary:
              "The new Smuggler trainer pulls one foreign-region Batomon per run. Cordycant and Sproach are the published foreign options; pick whichever matches the early shop, then build the rest of the squad around its trigger.",
            badge: "Cross-region",
          },
        ],
      },
      {
        id: "support-slots",
        type: "entity-grid",
        heading: "Post-1.2.0 Support Slots",
        items: [
          {
            title: "Dracana (16.0% post-1.2.0)",
            summary:
              "Still the most-picked Batomon across the 4,901-board window after the Smuggler patch. Fits into the S+ Dracana core directly and slots into the Velocect engine as an on-cast rider.",
            badge: "Most-picked",
          },
          {
            title: "Onsetra (11.7% post-1.2.0)",
            summary:
              "Default connector for the Dracana and Velocect cores. Pair with a shield engine for the on-cast scaling to fire reliably.",
            badge: "Connector",
          },
          {
            title: "Steamscuttle (11.1%)",
            summary:
              "Anchors the Steamscuttle line and bridges into the post-1.2.0 Pantra burn line as a survivability slot.",
            badge: "Anchor",
          },
          {
            title: "Gaiadrasil + Dryadell",
            summary:
              "The shared-HP backbone of the S+ Dracana core. Feed both copies to level 3 before pivoting the rest of the squad.",
            badge: "S+ support",
          },
          {
            title: "Miasmaw + Drumire",
            summary:
              "The Cinnabark core's engine. Drumire cost 50 to 45 revert plus Cinnabark CD 5 to 4 revert makes this the cleanest pay-off comp on the post-1.2.0 ladder.",
            badge: "S+ support",
          },
          {
            title: "Cicadence + Formiqueen",
            summary:
              "The Velocect core's Repeater and Amplifier pair. Cicadence produces the multicast window; Formiqueen turns it into scaling damage.",
            badge: "S support",
          },
          {
            title: "Cinderfly, Thorntail, Noxnimbus",
            summary:
              "Pantra burn line. Pick whichever burn enabler the early shop offers first, then pivot the other two as the run matures.",
            badge: "Pantra",
          },
          {
            title: "Cordycant, Sproach",
            summary:
              "Smuggler foreign options pulled from Jinto or Pantra. Treat the pull as a sixth slot rather than a build-around.",
            badge: "Cross-region",
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
        id: "1-2-0-buff-nerf-math",
        type: "prose",
        heading: "Why These Cores Are S+ Now: The 1.2.0 Math",
        body:
          "Critcap tracks 4,901 boards at Balance 25 after the Smuggler update. The 1.2.0 buff/nerf math that produces the new S+ list:\n\n- Dracana core climbs to 61.4% over 58 runs because no Pantra carry was nerfed into its trigger chain. Dracana (16.0%) plus Onsetra (11.7%) plus Steamscuttle (11.1%) cover the same Starts / Repeats / On Cast Batomon engine that the S+ slots need.\n- Cinnabark climbs back to 51.8% over 128 runs from the two reverts: Cinnabark CD 5 to 4 and Drumire cost 50 to 45. The third Drumire copy now lands by Day 4 in most openings, and the CD revert lets Cinnabark fire on the same turn as the cast window opens.\n- Velocect holds 43.5% over 99 runs even after the Jinto carry nerfs because Cicadence and Formiqueen never depended on the nerfed carries.\n- The Pantra burn line (Cinderfly / Thorntail / Noxnimbus) is unlocked by the burn-side buffs alone. Cinderfly cost 30 to 25 makes the third copy affordable; Thorntail damage-per-Poison 6/12/18 to 8/16/24 and Noxnimbus Poison-to-adjacent 2/4/6 to 3/6/9 make the burn engine actually close fights.\n- The Smuggler cross-region comp is built by taking the new Smuggler trainer at run start and using Cordycant or Sproach (the foreign pull) as a sixth slot rather than a build-around.",
      },
      {
        id: "priorities-and-mistakes",
        type: "callout",
        tone: "tip",
        title: "Best Team Build Priorities And Common Mistakes",
        body:
          "Build around the Trainer you picked at run start, not around a single Batomon you want to force. Choose the core from the early shop offerings (Days 1-3). If the shop does not support your planned core, pivot to whichever of Dracana, Cinnabark, Velocect, or the Pantra burn line is actually available rather than chasing scaling items that never arrive. Plan the four late-game roles before Day 5. A team that only deals damage or only stacks shields will lose to comps that do both. Do not over-invest in one-role comps. The strongest runs in the dataset always include at least one Starter, one Repeater, and one Survivor by the second shop refresh. Treat Dracana and Onsetra as near-default slots in Season 1 plus 1.2.0: their pick rates are still the highest in the public data, and they slot cleanly into every S+ comp above. The Smuggler trainer is the strongest cross-region option because it lets you pull Cordycant or Sproach from the other region for free.",
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
    lastReviewed: "2026-10-13",
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
      "Batomon Showdown trinkets guide covering the 93-trinket pool, the 40-item shop pool, the merge-to-trinket loop, the post-1.1.0 cooldown ladder, the 1.2.0 (Smuggler) balance pass, and which Trainers bend the in-run economy.",
    summary:
      "How trinkets are earned, the 93 trinket pool, the 40-item shop pool, the merge-to-trinket economy loop, the post-1.1.0 cooldown ladder, and the 1.2.0 (Smuggler) balance pass.",
    hero: {
      eyebrow: "Trinkets and economy",
      subtitle:
        "Two intertwined loops drive progression: merging Batomon for trinkets and spending in-run gold on shop rerolls, items, and coupons. The 1.2.0 (Smuggler) patch sits on top of the existing 1.1.0 cooldown ladder.",
      ctas: [
        { label: "Trainer Tier List", href: "/guides/trainer-tier-list" },
        { label: "Multiplayer & Ranked", href: "/guides/multiplayer-ranked" },
      ],
    },
    quickAnswer:
      "Progression in Batomon Showdown runs on two intertwined loops: the merging of Batomon copies (which hands the squad trinkets and stat boosts) and the in-run gold spent on shop rerolls, daily purchases and coupon-style items. The full trinket pool has 93 entries grouped by function rather than by rarity, and the in-run shop pulls from a 40-item pool whose effects mostly bend rerolls, gold income or cooldown. The 1.2.0 (Smuggler) update adds the Smuggler trainer, reworks the Pantra burn line, reverts Cinnabark and Drumire, nerfs the Jinto carry ladder, adjusts Chemist / Redhead / Gamer, removes Zenith Stone double-dip, lowers Crimson Ticket cost, and widens the Dragon Egg pool to Ouroblaze / Tsunamere / Stellagon.",
    keyFacts: [
      { label: "Trinket pool", value: "93 entries" },
      { label: "Item pool", value: "40 shop entries" },
      { label: "Trinket timings", value: "On Cast / On Battle Start / On Bought / Ongoing / On Victory" },
      { label: "Economy trainers", value: "Burglar · Scavenger · Smuggler" },
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
        id: "patch-120-smuggler",
        type: "prose",
        heading: "Patch 1.2.0 (Smuggler, 2026-09-30)",
        body:
          "The Smuggler update sits on top of the post-1.1.0 cooldown-trinket ladder and the Alpha Crown Mythical-tier note. The changes players care about for progression:",
      },
      {
        id: "patch-120-trainer",
        type: "entity-grid",
        heading: "1.2.0 Trainer Changes",
        items: [
          {
            title: "Smuggler (new)",
            summary:
              "Once per run, the Smuggler trainer pulls one Batomon from a foreign region. Cordycant and Sproach are the published foreign options; the pull becomes a sixth slot rather than a build-around.",
            badge: "New",
          },
          {
            title: "Chemist +1 to +3 Poison",
            summary:
              "Chemist's Poison-trigger bonus moves from +1 to +3 per proc. The trainer now meaningfully scales with Miasmaw-style poison-spread engines.",
            badge: "Buff",
          },
          {
            title: "Redhead Burn-per-win to Fire +2 to +3",
            summary:
              "Redhead's Burn-per-win scaling is removed and replaced with a flat +2 to +3 Fire bonus. Pairs cleanly with the 1.2.0 Pantra burn line (Cinderfly, Thorntail, Noxnimbus).",
            badge: "Rework",
          },
          {
            title: "Gamer Mythical reveal",
            summary:
              "Gamer now reveals Mythical Batomon on the first shop refresh. Trades the Gamer run-time gamble for an information advantage at run start.",
            badge: "Rework",
          },
        ],
      },
      {
        id: "patch-120-jinto-nerf-ladder",
        type: "data-table",
        heading: "1.2.0 Jinto Carry Nerf Ladder",
        columns: [
          { key: "name", label: "Carry" },
          { key: "before", label: "Pre-1.2.0" },
          { key: "after", label: "Post-1.2.0" },
        ],
        rows: [
          { name: "Petrirex", before: "Top DPS carry", after: "Nerfed into S-tier" },
          { name: "Nekoffin", before: "Top DPS carry", after: "Nerfed into S-tier" },
          { name: "Cairnage", before: "Top DPS carry", after: "Nerfed into S-tier" },
          { name: "Opalion", before: "Top DPS carry", after: "Nerfed into S-tier" },
          { name: "Ninflora", before: "S-tier", after: "Nerfed into A-tier" },
          { name: "Cawnushi", before: "S-tier", after: "Nerfed into A-tier" },
          { name: "Shrinell", before: "S-tier", after: "Nerfed into A-tier" },
          { name: "Shikitsune", before: "A-tier", after: "Nerfed into B-tier" },
          { name: "Emburn", before: "A-tier", after: "Nerfed into B-tier" },
          { name: "Bonshell", before: "A-tier", after: "Nerfed into B-tier" },
          { name: "Steamscuttle", before: "A-tier", after: "Nerfed into B-tier" },
          { name: "Vengrieve", before: "B-tier", after: "Nerfed into C-tier" },
        ],
      },
      {
        id: "patch-120-pantra-buffs",
        type: "entity-grid",
        heading: "1.2.0 Pantra Burn Line Buffs",
        items: [
          {
            title: "Cinderfly cost 30 to 25, Burn 6 to 7",
            summary:
              "Cost cut lets the third copy land by Day 3 in most openings; Burn 6 to 7 closes the burn engine's single-tick deficit against shield-heavy teams.",
            badge: "Buff",
          },
          {
            title: "Thorntail damage-per-Poison 6/12/18 to 8/16/24",
            summary:
              "Each Poison stack adds 2 more damage per tick at 1/2/3 stacks. Stack Thorntail behind Miasmaw or Noxnimbus for the burn engine to spike.",
            badge: "Buff",
          },
          {
            title: "Noxnimbus Poison-to-adjacent 2/4/6 to 3/6/9",
            summary:
              "Adjacent Poison rider jumps from 2/4/6 to 3/6/9. The change is what turns Noxnimbus into a Pantra S-tier support rather than a B-tier filler.",
            badge: "Buff",
          },
        ],
      },
      {
        id: "patch-120-reverts",
        type: "entity-grid",
        heading: "1.2.0 Reverts",
        items: [
          {
            title: "Cinnabark CD 5 to 4",
            summary:
              "Cinnabark fires one tick earlier than the 1.1.0 value. Lets the Cinnabark core fire on the same turn as the cast window opens.",
            badge: "Revert",
          },
          {
            title: "Drumire cost 50 to 45",
            summary:
              "Drumire's shop cost drops from 50 to 45 gold. The third Drumire copy now lands by Day 4 in most openings.",
            badge: "Revert",
          },
        ],
      },
      {
        id: "patch-120-trinket-events",
        type: "entity-grid",
        heading: "1.2.0 Trinket And Event Changes",
        items: [
          {
            title: "Zenith Stone no longer double-dips",
            summary:
              "Zenith Stone used to grant a level-up and a duplicate on the same trigger. The 1.2.0 nerf removes the double-dip; the trinket now grants only one of the two effects per trigger.",
            badge: "Nerf",
          },
          {
            title: "Crimson Ticket cost 50 to 30",
            summary:
              "Crimson Ticket cost drops from 50 to 30 gold. The cheaper pivot item fits cleanly into the Pantra burn line as a level-up shortcut.",
            badge: "Buff",
          },
          {
            title: "Dragon Egg pool widens",
            summary:
              "The Dragon Egg event now hatches Ouroblaze, Tsunamere, or Stellagon. The widened pool shifts the event from a Rare-pivot to a Mythical-pivot.",
            badge: "Pool change",
          },
        ],
      },
      {
        id: "patch-120-preserved",
        type: "callout",
        tone: "tip",
        title: "What Stays The Same",
        body:
          "The post-1.1.0 cooldown-trinket ladder (Battery Pack / Coffee / Hot Pepper / Focus Pill / Metronome / Training Weights) is still the only way to fast-cast past the natural CD. Alpha Crown remains a Mythical-tier trinket; the 1.2.0 patch did not move it. Burglar and Scavenger still bend the in-run economy by doubling trinket income and stacking low-rarity trinkets, respectively.",
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
    lastReviewed: "2026-10-13",
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
      "Batomon Showdown multiplayer guide covering async PvP, cross-platform saves, the six-tier Ranked structure (Bronze-Silver-Gold-Platinum-Diamond-Master), the star and MMR formulas, the 10-win Casual unlock, and how ranked opponents read saved teams.",
    summary:
      "How asynchronous PvP works, cross-platform saves, the full Ranked structure with star and MMR formulas, where the top of the leaderboard sits, and how to make the saved team itself strong.",
    hero: {
      eyebrow: "Multiplayer and ranked",
      subtitle:
        "Async PvP with no live opponent: every decision can be made slowly before the saved squad is uploaded. Ranked unlocks after 10 Casual wins and runs on a six-tier ladder with a fixed star and MMR formula.",
      ctas: [
        { label: "Trinkets & Economy", href: "/guides/progression-systems" },
        { label: "Best Team & Meta", href: "/guides/team-builds-meta" },
      ],
    },
    quickAnswer:
      "Batomon Showdown multiplayer is asynchronous PvP. Players never fight each other in real time. A run is a solo campaign in which you pick a Trainer, assemble a squad of Batomon with trinkets and items, and battle NPC trainers to collect 10 badges. Once the run is finished, the saved squad is uploaded to the platform. Other players then face that saved squad as their opponent, and your own saved squad becomes the opponent for someone else. Ranked uses six tiers (Bronze-Silver-Gold-Platinum-Diamond-Master), eight divisions per tier with Master as an MMR leaderboard, and unlocks after 10 Casual wins.",
    keyFacts: [
      { label: "Format", value: "Async PvP via saved squads" },
      { label: "Cross-platform", value: "Steam and Android share saves" },
      { label: "Ranked tiers", value: "Bronze · Silver · Gold · Platinum · Diamond · Master" },
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
            title: "Six tiers",
            summary: "Bronze, Silver, Gold, Platinum, Diamond, Master. Master is a pure MMR leaderboard rather than a divided tier.",
          },
          {
            title: "Eight divisions per tier",
            summary: "Division 8 is the lowest; Division 1 is the highest. Each division holds 0-4 stars.",
          },
          {
            title: "Stars",
            summary: "0-4 stars per division. Hitting 5 stars in any division triggers instant promotion to the next division.",
          },
          {
            title: "MMR (Match Making Rating)",
            summary: "The underlying numeric rating used to sort players on the global ladder.",
          },
          {
            title: "Master rank",
            summary: "The top tier reached by the highest-rated players each season. No divisions; leaderboard-only.",
          },
        ],
      },
      {
        id: "ranked-unlock",
        type: "prose",
        heading: "How To Unlock Ranked",
        body:
          "Ranked unlocks after the player records 10 wins in Casual. There is no other prerequisite: the unlock is purely a 10-win Casual gate. Post-launch the developer has not added a seasonal reset, so the climb you start after unlocking Ranked is the climb you keep until a future patch note says otherwise. Plan your early Ranked runs around the post-1.2.0 S+ cores (Dracana, Cinnabark, Velocect) rather than the pre-1.1.0 lineup.",
      },
      {
        id: "star-formula",
        type: "entity-grid",
        heading: "Star-Change Formula (Per Ranked Run)",
        items: [
          {
            title: "0-4 wins",
            summary: "Lose 5, 4, 3, 2, or 1 star respectively (5-1). A bad run still costs at least 1 star.",
            badge: "Star change",
          },
          {
            title: "5 wins",
            summary: "Hold (no star change). The break-even point for a Ranked run.",
            badge: "Star change",
          },
          {
            title: "6-10 wins",
            summary: "Gain 1, 2, 3, 4, or 5 stars respectively. A 10-win run promotes the next division instantly.",
            badge: "Star change",
          },
          {
            title: "5-star instant promotion",
            summary: "Hitting 5 stars in any division (Bronze-Silver-Gold-Platinum-Diamond) promotes to the next division immediately, bypassing the 1-2-3-4-5 ladder.",
            badge: "Promotion",
          },
        ],
      },
      {
        id: "mmr-formula",
        type: "prose",
        heading: "MMR Formula And Per-Tier Expected Wins",
        body:
          "MMR change after each Ranked run is 20 multiplied by (your wins minus expected wins), rounded, with a minimum of 0. The expected wins per tier step down as the climb gets harder:\n\n- Bronze: about 9 expected wins.\n- Silver: about 8.125 expected wins.\n- Gold: about 7.25 expected wins.\n- Platinum: about 6.375 expected wins.\n- Diamond and Master: about 5.5 expected wins.\n\nThe practical read is that a Bronze 10-win run produces roughly 20 x (10 - 9) = 20 MMR, while a Diamond 10-win run produces roughly 20 x (10 - 5.5) = 90 MMR. Late-climb wins are worth more, which is why the formula rewards consistency at the top of the ladder.",
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
    lastReviewed: "2026-10-13",
  },
];