import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  // Homepage
  {
    id: "home-is-batomonshowdown-out",
    question: "Is Batomon Showdown out right now?",
    answer:
      "Yes. Batomon Showdown launched on Steam on September 15, 2026, and is available on Windows PC. As of 2026-09-18 it holds a Very Positive aggregate from 88% of 358 reviews on its store page.",
    pageIds: ["home", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-how-much-does-it-cost",
    question: "How much does Batomon Showdown cost?",
    answer:
      "The base price is $14.99 on Steam, and an introductory price of $9.74 runs until September 29, 2026. The optional Supporter Pack DLC is sold separately for $4.99.",
    pageIds: ["home", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-what-platforms",
    question: "What platforms does Batomon Showdown support?",
    answer:
      "The Steam store page lists Windows PC as the supported platform at launch. Other platforms such as macOS, Linux, or consoles are not announced as of 2026-09-18.",
    pageIds: ["home", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-online-required",
    question: "Do I need to be online to play Batomon Showdown?",
    answer:
      "Yes. Batomon Showdown is built around asynchronous PvP matches that resolve on the server. You queue a battle, leave the client, and return to claim the result.",
    pageIds: ["home", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Release Status
  {
    id: "release-when-did-it-launch",
    question: "When did Batomon Showdown come out?",
    answer:
      "Batomon Showdown launched on September 15, 2026, on Steam for Windows PC. The launch date is listed on the official Steam store page (AppID 4557380).",
    pageIds: ["release-status", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-is-on-steam",
    question: "Is Batomon Showdown on Steam?",
    answer:
      "Yes. Batomon Showdown is sold exclusively on Steam under AppID 4557380 at launch. No other storefront or distribution platform is announced as of 2026-09-18.",
    pageIds: ["release-status", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-how-much",
    question: "How much does Batomon Showdown cost?",
    answer:
      "The base price is $14.99. An introductory price of $9.74 is in effect until September 29, 2026. The optional Supporter Pack DLC is sold separately for $4.99.",
    pageIds: ["release-status", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-steam-deck",
    question: "Is Batomon Showdown on Steam Deck?",
    answer:
      "The Steam store page displays a Steam Deck compatibility badge as published by Valve. Buyers should read the current badge on the store page, because the published rating is the only source of truth for Steam Deck status.",
    pageIds: ["release-status", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-is-there-dlc",
    question: "Is there a Batomon Showdown DLC?",
    answer:
      "Yes. The Supporter Pack DLC (AppID 5255370) is sold for $4.99 on Steam. It is separate from the base game and does not gate any base-game feature.",
    pageIds: ["release-status", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Monsters
  {
    id: "monsters-how-many",
    question: "How many monsters are in Batomon Showdown?",
    answer:
      "The Steam store page does not publish a full per-monster roster count. The public tag list (Creature Collector, Auto Battler, Card Battler, Dragons, Horses, Cats, Dogs) is the most concrete official framing of the roster as of 2026-09-18.",
    pageIds: ["monsters", "faq"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "monsters-what-kinds",
    question: "What kinds of Batomon are there?",
    answer:
      "The Steam tags point to dragons, horses, cats, and dogs as headline creature archetypes. Other creature types may exist, but per-monster names and categories are not enumerated in the public store description.",
    pageIds: ["monsters", "faq"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "monsters-how-to-level",
    question: "How do you level up Batomon in Batomon Showdown?",
    answer:
      "You level Batomon Showdown monsters through abilities and items earned through play. Asynchronous PvP rewards are the main progression source, so playing matches and investing in your roster is how Batomon grow.",
    pageIds: ["monsters", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "monsters-can-you-get-new",
    question: "Can you get new monsters in Batomon Showdown?",
    answer:
      "The game is tagged as a Creature Collector, so additional Batomon are added to your roster through play. The store description does not currently publish a per-monster unlock list, and per-monster drop rates are not part of the public description.",
    pageIds: ["monsters", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "monsters-tier-list",
    question: "Is there a Batomon Showdown tier list?",
    answer:
      "The Steam store page and SteamDB listing do not publish a tier list. Community tier lists exist on the Steam Community hub and external sites, but they reflect player discussion rather than an official ranking.",
    pageIds: ["monsters", "faq"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Best Team
  {
    id: "bestteam-what-is-the-best",
    question: "What is the best team in Batomon Showdown?",
    answer:
      "There is no single best team, because the optimal composition depends on your trainer ability, your unlocked Batomon, and the current meta. The strongest teams are synergy engines that multiply a single creature archetype, but they require more investment than newer players can bring.",
    pageIds: ["best-team", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "bestteam-how-important-is-trainer",
    question: "How important is the trainer in Batomon Showdown?",
    answer:
      "Trainer ability is the anchor of every team, because it sets the rules your roster operates under. Switching trainers is the most expensive change you can make, so picking a trainer whose ability matches your preferred archetype matters more than picking any single Batomon.",
    pageIds: ["best-team", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "bestteam-flex-or-focused",
    question: "Should I use a flex team or a focused team?",
    answer:
      "Early on, a flex team is the right call because you have not unlocked enough pieces to commit. Once you have a stable of leveled Batomon and matching trinkets, a focused two-archetype team outperforms a flex team in most matches.",
    pageIds: ["best-team", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "bestteam-when-to-switch",
    question: "When should I switch team archetypes?",
    answer:
      "Switch when the same opposing archetype beats your team more than half the time and trinket swaps cannot fix it, when your trainer ability no longer fits your roster, or when you have unlocked enough pieces to build a new archetype without abandoning progress on the old one. Avoid switching after a single losing streak.",
    pageIds: ["best-team", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Trainers
  {
    id: "trainers-who-are-they",
    question: "Who are the trainers in Batomon Showdown?",
    answer:
      "The Steam store description mentions the trainer system ('choose your trainer') and grants each trainer a specific ability. Per-trainer names are not enumerated in the public store description, so this page does not promise a per-trainer list.",
    pageIds: ["trainers", "faq"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "trainers-what-does-ability-do",
    question: "What does the trainer ability do in Batomon Showdown?",
    answer:
      "Trainer ability is the rule your team operates under for a match. It decides which team archetypes are legal, which tempo or scaling plan your roster should follow, and which items and trinkets are worth slotting.",
    pageIds: ["trainers", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "trainers-how-unlock",
    question: "How do you unlock trainers in Batomon Showdown?",
    answer:
      "The Steam store page does not publish a per-trainer unlock path. Trainers become available through normal play, but the exact unlock conditions per trainer are not part of the public description as of 2026-09-18.",
    pageIds: ["trainers", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "trainers-can-you-change",
    question: "Can you change trainers in Batomon Showdown?",
    answer:
      "Yes. You choose your trainer before each async PvP match, so you can switch trainers from match to match. Switching trainers is the most expensive team decision, because it usually forces changes to your roster, trinkets, and items as well.",
    pageIds: ["trainers", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "trainers-pick-trainer-or-roster-first",
    question: "Should I pick a trainer or build my roster first?",
    answer:
      "Pick the trainer first and build the roster around the trainer's ability. If you build the roster first, you will end up with pieces that only fit a subset of trainers and you will over-invest in items the chosen trainer cannot use.",
    pageIds: ["trainers", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // How to Play
  {
    id: "howtoplay-real-time-or-async",
    question: "Is Batomon Showdown real-time or asynchronous?",
    answer:
      "Batomon Showdown is asynchronous. You queue a team and the server picks the opponent and resolves the fight on its own clock. You watch a replay rather than play in real time.",
    pageIds: ["how-to-play", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "howtoplay-need-friends",
    question: "Do I need to play with friends to start?",
    answer:
      "Not for the first session. Solo queue and the asynchronous PvP loop are enough to learn the trainer system, level Batomon, and earn the currency you need for early upgrades.",
    pageIds: ["how-to-play", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "howtoplay-skip-trainer",
    question: "Can I skip the trainer pick screen?",
    answer:
      "No. The trainer choice is the opening decision in Batomon Showdown. You cannot start the asynchronous PvP loop until you have committed to a trainer.",
    pageIds: ["how-to-play", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "howtoplay-match-length",
    question: "How long does a Batomon Showdown match take?",
    answer:
      "The battle itself resolves in a short replay because the server runs the simulation without your input. The replay is the main time sink after queue, and most matches finish in a few minutes once you scroll to the result.",
    pageIds: ["how-to-play", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // System Requirements
  {
    id: "sysreq-old-laptop",
    question: "Can my old laptop run Batomon Showdown?",
    answer:
      "If your laptop runs Windows 10, has a Dual Core 2 GHz CPU, a GPU with at least 1 GB of VRAM, and roughly 512 MB of free storage, it clears the published Batomon Showdown system requirements minimum tier.",
    pageIds: ["system-requirements", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sysreq-steam-deck",
    question: "Does Batomon Showdown work on Steam Deck?",
    answer:
      "Steam Deck compatibility is published by Valve on the Steam store page as a compatibility badge. Refer to that badge directly for the current Verified, Playable, Unsupported, or Unknown status rather than relying on community reports.",
    pageIds: ["system-requirements", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sysreq-2mb-ram",
    question: "Is the 2 MB RAM figure correct?",
    answer:
      "The Steam store page lists 2 MB of RAM as the published minimum for Batomon Showdown. That is what the store page currently says; check the Fact Boundaries section of the system-requirements page for how to read that figure.",
    pageIds: ["system-requirements", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sysreq-windows-11",
    question: "Will Batomon Showdown run on Windows 11?",
    answer:
      "The published minimum store page lists Windows 10. Windows 11 has run most Windows 10 software without issue in practice, but only Windows 10 is explicitly named on the store page as of 2026-09-18.",
    pageIds: ["system-requirements", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Tips
  {
    id: "tips-what-spend-first",
    question: "What should new players spend currency on first?",
    answer:
      "Spend currency on ability and item upgrades for two or three carry Batomon rather than spreading resources thin across every creature. The Steam store description frames abilities and items as the core progression path.",
    pageIds: ["tips", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "tips-level-all-or-focus",
    question: "Should I level all my Batomon or focus one?",
    answer:
      "Focus two or three Batomon first. Once a small core is stable, level the rest of the roster only as fast as the asynchronous PvP loop teaches you which creatures are pulling their weight.",
    pageIds: ["tips", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "tips-how-often-rotate",
    question: "How often should I rotate my team?",
    answer:
      "Rotate after every match if you have a clear reason to. Drop creatures that did not proc in the last two fights, promote creatures whose abilities lined up with your trainer ability, and re-queue. If you stop changing the team between days, your progression has stalled.",
    pageIds: ["tips", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "tips-when-switch-trainer",
    question: "When should I switch trainer?",
    answer:
      "Switch trainer when the team you actually run no longer matches your original trainer's ability. The Steam store description treats trainer ability as a team-defining choice, so changing the trainer can unlock synergies your current team has outgrown.",
    pageIds: ["tips", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // DLC
  {
    id: "dlc-what-is-supporter-pack",
    question: "What is the Batomon Showdown Supporter Pack?",
    answer:
      "The Batomon Showdown Supporter Pack is the only DLC currently listed under the base game's Steam AppID 4557380. It is sold separately at $4.99 USD under its own Steam AppID 5255370.",
    pageIds: ["dlc-skin-pack", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "dlc-includes-new-batomon",
    question: "Does the Supporter Pack include new Batomon?",
    answer:
      "The Steam DLC page is the authoritative source for in-pack contents. Anything beyond what is listed there has not been announced publicly and is written here as 'Not announced as of 2026-09-18'.",
    pageIds: ["dlc-skin-pack", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "dlc-required-to-play",
    question: "Is the Supporter Pack required to play Batomon Showdown?",
    answer:
      "No. The Supporter Pack is optional DLC. Buying the base game on Steam is enough to access the asynchronous PvP loop and the progression systems described on the store page.",
    pageIds: ["dlc-skin-pack", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "dlc-refund-policy",
    question: "Can I refund the Supporter Pack?",
    answer:
      "Steam's standard refund policy applies to DLC purchased on Steam, including the Batomon Showdown Supporter Pack. Refund eligibility is set by Valve, not by this page, so check the current Steam refund rules for the exact criteria before requesting one.",
    pageIds: ["dlc-skin-pack", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
];