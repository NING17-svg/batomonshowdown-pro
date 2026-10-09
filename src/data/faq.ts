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
      "Batomon Showdown is on Steam and Android. The developer roadmap also brings the same shared cloud save to iOS. Save data is shared across the platforms that the player's account is signed into.",
    pageIds: ["home"],
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
];