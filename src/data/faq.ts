import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  {
    id: "what-is-batomon-showdown",
    question: "What is Batomon Showdown?",
    answer:
      "Batomon Showdown is an asynchronous PvP auto-battler and creature collector. Players choose a Trainer, build a squad that levels up through merging identical Batomon, defeat 10 NPC trainers for 10 badges, and then climb an async ranked ladder with the saved squad.",
    pageIds: ["home"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "platforms-supported",
    question: "Which platforms is Batomon Showdown on?",
    answer:
      "Batomon Showdown is available on Steam for Windows and on Android. The developer's official website lists the App Store version as coming soon but gives no iOS release date. Check the official store listings for current availability.",
    pageIds: ["home", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "async-ranked-explained",
    question: "How does the async ranked ladder work?",
    answer:
      "Ranked play is asynchronous: the saved squad is uploaded after each completed run and other players fight that saved team when they queue up. There is no live opponent or real-time timer. Players climb divisions using stars, MMR, and ultimately Master rank.",
    pageIds: ["home"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "guide-scope",
    question: "What do these guides cover?",
    answer:
      "The guides explain how to level Batomon, pick a Trainer, read the Batomon tier list, build meta squads, position them on the board, manage the merge-to-trinket economy, and climb the async ranked ladder. They are unofficial community guides based on public match data and the official Steam store page.",
    pageIds: ["home"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "dlc-supporter-pack",
    question: "What is included in the Supporter Pack DLC?",
    answer:
      "The Supporter Pack includes the Gamer, Shopkeeper, and Redhead Badge Case Skins. The official Steam listing describes it as purely cosmetic with no gameplay benefits or additional gameplay content, and says the base game is required.",
    pageIds: ["faq", "dlc-skin-pack"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-site-official",
    question: "Is Batomon Showdown Guides an official game website?",
    answer:
      "No. This is an independent, unofficial guide site and is not operated or endorsed by berrymint. The official game and developer links are on batomon.app and the Steam store page.",
    pageIds: ["faq", "about"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "official-game-support",
    question: "Where can I contact the game developer for support?",
    answer:
      "The developer's official site lists berrymintdev@gmail.com and links to the game's Discord and Steam pages. Batomon Showdown Guides cannot access game accounts, recover saves, or process purchases.",
    pageIds: ["faq", "contact"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
