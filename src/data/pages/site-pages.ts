import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "trainers",
    translationKey: "trainers",
    locale: "en-US",
    routeKind: "fixed",
    slug: "trainers",
    url: "/trainers",
    pageType: "wiki",
    presentation: { shell: "hub" },
    h1: "Batomon Showdown trainer system and abilities",
    seoTitle:
      "Batomon Showdown trainer: ability categories and roster impact",
    metaDescription:
      "The Batomon Showdown trainer system lets you choose a trainer and unlock abilities. Trainer ability shapes your team composition and async PvP synergies.",
    summary:
      "How the trainer system works, the three trainer ability categories (tempo, scaling, economy), and why picking a trainer first leads to better team building.",
    hero: {
      eyebrow: "Trainer system",
      subtitle:
        "Choose your trainer, read the ability text carefully, and build your roster around the trainer instead of the other way around.",
      ctas: [
        { label: "Best Team", href: "/best-team" },
        { label: "Monsters", href: "/monsters" },
      ],
    },
    quickAnswer:
      "The Batomon Showdown trainer system lets you choose a trainer before each match, and the trainer you pick grants a specific trainer ability that shapes your entire team composition. Trainer abilities generally fall into three categories: tempo abilities that reward fast openers, scaling abilities that reward late-game states, and economy abilities that reward longer matches with more resources.",
    keyFacts: [
      { label: "Trainer pick", value: "Choose before each async PvP match" },
      { label: "Trainer ability categories", value: "Tempo, Scaling, Economy" },
      { label: "Trainer leveling", value: "Trainers do not level; ability is fixed" },
      { label: "Most expensive decision", value: "Switching trainers forces roster changes" },
    ],
    modules: [
      {
        id: "trainers-how-it-works",
        type: "prose",
        heading: "How the Batomon Showdown trainer system works",
        body:
          "The Batomon Showdown trainer system is built around a 'choose your trainer' prompt that runs before you queue an async PvP match. Once you pick a trainer, your team operates under the trainer ability that trainer grants for the duration of that match. The trainer is the only piece of your team composition that is not a Batomon, a trinket, or an item, which is why the choice cuts across all of them at once. Trainer ability is the rule that decides which team archetypes are even legal. A trainer whose ability rewards fast openers wants a roster built around Batomon that contribute value in the early turns of a match, while a trainer whose ability rewards late-game states wants Batomon that scale into long matches. If your roster is built for one tempo and your trainer is built for the other, every match feels awkward, no matter how strong the individual pieces are. Reading the trainer ability description before you lock in a choice is therefore more important than reading any single Batomon description. The other thing to know about trainers is that they do not level the way Batomon do. You do not earn trainer XP, you do not unlock trainer items, and your trainer does not get stronger as you play more matches. The trainer is a fixed ability that you select from, and the only way to change how your trainer feels is to switch to a different trainer entirely.",
      },
      {
        id: "trainers-categories",
        type: "comparison",
        heading: "Trainer ability categories in Batomon Showdown",
        options: [
          {
            name: "Tempo abilities",
            summary:
              "Reward fast openers and short matches via early-game bonuses, fast scaling effects, or payoffs for winning the first exchanges.",
            bestFor:
              "Flex teams of Batomon that contribute value early; players who prefer quick matches.",
            badge: "Tempo",
          },
          {
            name: "Scaling abilities",
            summary:
              "Reward late-game states via bonuses that compound over time or get stronger as the match goes on.",
            bestFor:
              "Focused two-archetype teams that absorb early pressure and turn the corner late.",
            badge: "Scaling",
          },
          {
            name: "Economy abilities",
            summary:
              "Reward longer matches with more resources via bonuses to generation, item use, or economy-related synergies.",
            bestFor:
              "Teams that bring powerful but expensive pieces; the trainer ability lets you afford them sooner.",
            badge: "Economy",
          },
        ],
      },
      {
        id: "trainers-team-link",
        type: "prose",
        heading: "How trainer ability changes team composition",
        body:
          "The relationship between trainer ability and team composition runs in two directions. On one side, your trainer ability decides which team archetypes are worth investing in. On the other side, the Batomon you have already invested in shape which trainer abilities you can realistically pick. Players who skip the trainer decision and just pick whichever trainer they unlocked first usually end up with a roster that does not fit any trainer well, because the roster and the trainer were never designed together. The cleanest way to build a team in Batomon Showdown is to pick a trainer first and then build a roster around that trainer's ability. The roster archetype, the trinkets, and the items all flow from the trainer decision. If you try to build the roster first and pick the trainer later, you will end up with a roster that only fits a subset of trainers and you will over-invest in pieces that the chosen trainer cannot use.",
      },
      {
        id: "trainers-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Trainer system framing ('choose your trainer') and the three trainer ability categories come from the Steam store description and the auto-battler genre; per-trainer names are not part of the public description.",
        links: [
          {
            label: "Batomon Showdown on Steam (AppID 4557380)",
            href: "https://store.steampowered.com/app/4557380/",
            description:
              "official/store — trainer system ('choose your trainer'), trainer ability framing, asynchronous PvP loop.",
          },
        ],
      },
    ],
    faqIds: [
      "trainers-who-are-they",
      "trainers-what-does-ability-do",
      "trainers-how-unlock",
      "trainers-can-you-change",
      "trainers-pick-trainer-or-roster-first",
    ],
    relatedPageIds: ["monsters", "best-team", "tips"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
  {
    id: "system-requirements",
    translationKey: "system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "system-requirements",
    url: "/system-requirements",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Batomon Showdown system requirements: minimum PC specs and Steam Deck",
    seoTitle:
      "Batomon Showdown system requirements: PC specs and Steam Deck",
    metaDescription:
      "Batomon Showdown system requirements for PC: Windows 10, Dual Core 2 GHz CPU, 2 MB RAM, 1 GB VRAM, and 512 MB storage. Steam Deck compatibility noted.",
    summary:
      "Minimum PC specifications and Steam Deck compatibility status, dated to the September 18, 2026 Steam store snapshot.",
    hero: {
      eyebrow: "System requirements",
      subtitle:
        "Windows 10 minimum specs and the Steam Deck compatibility badge published by Valve.",
      ctas: [
        { label: "Release Status", href: "/release-status" },
        { label: "How to Play", href: "/how-to-play" },
      ],
    },
    quickAnswer:
      "Batomon Showdown system requirements list Windows 10 as the operating system, a Dual Core 2 GHz CPU, 2 MB RAM, 1 GB VRAM, and 512 MB of storage on the official Steam store page. Steam Deck compatibility status is published by Valve on the Steam store page badge; check that badge before assuming the game runs on handheld hardware.",
    keyFacts: [
      { label: "Operating system", value: "Windows 10" },
      { label: "CPU", value: "Dual Core 2 GHz" },
      { label: "RAM", value: "2 MB (as published on Steam store page)" },
      { label: "GPU", value: "1 GB VRAM" },
      { label: "Storage", value: "512 MB" },
      { label: "Steam Deck", value: "Compatibility badge as published by Valve" },
    ],
    modules: [
      {
        id: "sysreq-min",
        type: "data-table",
        heading: "Minimum PC specs",
        columns: [
          { key: "component", label: "Component" },
          { key: "minimum", label: "Minimum" },
        ],
        rows: [
          { component: "OS", minimum: "Windows 10" },
          { component: "CPU", minimum: "Dual Core 2 GHz" },
          { component: "RAM", minimum: "2 MB" },
          { component: "GPU", minimum: "1 GB VRAM" },
          { component: "Storage", minimum: "512 MB" },
        ],
      },
      {
        id: "sysreq-reading",
        type: "prose",
        heading: "How to read the minimum tier",
        body:
          "A Dual Core 2 GHz CPU and 1 GB VRAM GPU point at a very modest hardware target, which fits the asynchronous auto-battler design where the server resolves the fight and the client mostly renders the replay timeline. A 512 MB storage footprint also fits that model, because the game itself is small and most of the data lives on the server side. If your PC clears those minimums on Windows 10 you should be able to launch, queue, and watch replays without issue.",
      },
      {
        id: "sysreq-deck",
        type: "callout",
        tone: "confirmed",
        title: "Steam Deck and other handheld status",
        body:
          "Steam Deck compatibility is not a separate spec sheet. Valve publishes a compatibility badge on each Steam store page, and the Batomon Showdown badge on the store page is what tells you whether the game is Verified, Playable, Unsupported, or Unknown on Deck. Refer to the Steam store page badge for the current state; do not rely on community posts because Valve can re-test and re-classify a title at any time. For other handhelds such as ASUS ROG Ally, Lenovo Legion Go, or similar Windows-based PCs, treat them as Windows machines and use the minimum tier above as your baseline. The Steam store page does not list separate requirements for non-Valve handhelds as of 2026-09-18.",
      },
      {
        id: "sysreq-supported",
        type: "prose",
        heading: "Platforms the game does support",
        body:
          "Batomon Showdown is published as a Windows PC title on Steam. The Steam store page does not list macOS, Linux, or any console SKU as a supported platform for the base game, so users on those systems should not expect native support at launch. If a macOS or Linux build is added later, it will be announced through the Steam store page and the developer's normal channels; that has not been announced as of 2026-09-18.",
      },
      {
        id: "sysreq-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Minimum system requirements and the Steam Deck badge come from the Steam store page; no separate Recommended tier is published.",
        links: [
          {
            label: "Batomon Showdown on Steam (AppID 4557380)",
            href: "https://store.steampowered.com/app/4557380/",
            description:
              "official/store — minimum system requirements and Steam Deck compatibility badge.",
          },
        ],
      },
    ],
    faqIds: [
      "sysreq-old-laptop",
      "sysreq-steam-deck",
      "sysreq-2mb-ram",
      "sysreq-windows-11",
    ],
    relatedPageIds: ["release-status", "how-to-play"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
  {
    id: "dlc-skin-pack",
    translationKey: "dlc-skin-pack",
    locale: "en-US",
    routeKind: "fixed",
    slug: "dlc-skin-pack",
    url: "/dlc-skin-pack",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Batomon Showdown Supporter Pack: price, contents, and how it relates to the base game",
    seoTitle:
      "Batomon Showdown Supporter Pack: price and what's included",
    metaDescription:
      "Batomon Showdown Supporter Pack DLC at a glance: $4.99 price on Steam, AppID 5255370, optional cosmetic support for the base game. Contents and buying guidance.",
    summary:
      "Batomon Showdown Supporter Pack DLC at a glance: AppID 5255370, $4.99 USD, optional cosmetic support for the base game.",
    hero: {
      eyebrow: "DLC",
      subtitle:
        "The Supporter Pack is the only DLC currently listed under the base game's Steam AppID 4557380.",
      ctas: [
        { label: "Release Status", href: "/release-status" },
      ],
    },
    quickAnswer:
      "The Batomon Showdown Supporter Pack is the only DLC listed on the base game's Steam store page. It carries its own Steam AppID 5255370, lists a $4.99 USD price on Steam, and is sold as a separate purchase alongside the base game. The Supporter Pack does not unlock the base Batomon Showdown release; players still need to buy the base game separately.",
    keyFacts: [
      { label: "DLC name", value: "Batomon Showdown Supporter Pack" },
      { label: "Steam AppID", value: "5255370" },
      { label: "Price (USD)", value: "$4.99" },
      { label: "Listed under base game", value: "AppID 4557380" },
      { label: "Required to play base game", value: "No" },
    ],
    modules: [
      {
        id: "dlc-overview",
        type: "data-table",
        heading: "Batomon Showdown Supporter Pack at a glance",
        columns: [
          { key: "field", label: "Field" },
          { key: "value", label: "Value" },
        ],
        rows: [
          { field: "DLC name", value: "Batomon Showdown Supporter Pack" },
          { field: "Steam AppID", value: "5255370" },
          { field: "Price (USD)", value: "$4.99" },
          { field: "Listed under base game", value: "AppID 4557380 (Batomon Showdown)" },
          { field: "Required to play base game", value: "No" },
        ],
      },
      {
        id: "dlc-base-link",
        type: "prose",
        heading: "How the Supporter Pack relates to the base game",
        body:
          "The Supporter Pack is positioned as optional DLC. Buying it does not grant access to Batomon Showdown itself, and not buying it does not lock any gameplay system behind a paywall. The base game ships with the asynchronous PvP auto-battler loop described on the store page, and the Supporter Pack exists separately as a way to support the developer on top of that core experience. If you only want to play Batomon Showdown, the base game purchase is enough. The Supporter Pack is a separate decision based on what the DLC listing offers.",
      },
      {
        id: "dlc-announced",
        type: "callout",
        tone: "caution",
        title: "What is and is not announced for the Supporter Pack",
        body:
          "The Steam DLC page is the only authoritative source for what is actually inside the Batomon Showdown Supporter Pack. Beyond the price, AppID, and listing under the base game, specific in-pack contents and any future additions have not been published in a stable, licensable way. Any unannounced details are recorded here as a dated status rather than guessed from community posts. DLC name, AppID, and $4.99 USD price are published on the Steam DLC page as of 2026-09-18. Exact in-pack contents beyond what is on the DLC listing: Not announced as of 2026-09-18. Any future DLC additions or sequel Supporter Packs: Not announced as of 2026-09-18.",
      },
      {
        id: "dlc-sources",
        type: "prose",
        heading: "Sources",
        body:
          "DLC facts come from the Steam DLC page and the base game store page DLC section.",
        links: [
          {
            label: "Batomon Showdown on Steam, DLC section (AppID 4557380)",
            href: "https://store.steampowered.com/app/4557380/",
            description:
              "official/store — lists Supporter Pack DLC under the base game.",
          },
          {
            label: "Batomon Showdown Supporter Pack on Steam (AppID 5255370)",
            href: "https://store.steampowered.com/app/5255370/",
            description:
              "official/store — DLC name, AppID, and $4.99 USD price.",
          },
        ],
      },
    ],
    faqIds: [
      "dlc-what-is-supporter-pack",
      "dlc-includes-new-batomon",
      "dlc-required-to-play",
      "dlc-refund-policy",
    ],
    relatedPageIds: ["release-status"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} FAQ`,
    seoTitle: `${site.gameName} FAQ | Common questions and quick answers`,
    metaDescription:
      "Common Batomon Showdown questions: release date, pricing, platforms, async PvP, trainer choice, system requirements, Supporter Pack, and refunds.",
    summary:
      "Compact FAQ page covering launch, platform, gameplay, trainer, system requirements, and DLC questions for Batomon Showdown.",
    hero: {
      eyebrow: "FAQ",
      subtitle:
        "Common launch, platform, gameplay, trainer, system, and DLC questions for Batomon Showdown.",
      ctas: [
        { label: "Release Status", href: "/release-status" },
        { label: "Contact", href: "/contact" },
      ],
    },
    quickAnswer:
      "This FAQ collects the short answers a new search user needs about Batomon Showdown — release date, pricing, supported platform, async PvP, trainer choice, system requirements, and the Supporter Pack DLC.",
    keyFacts: [
      { label: "Released", value: "September 15, 2026" },
      { label: "Price", value: "$14.99 base / $9.74 introductory until Sep 29, 2026" },
      { label: "Platform", value: "Windows PC via Steam" },
      { label: "Supporter Pack DLC", value: "$4.99, AppID 5255370, optional" },
    ],
    modules: [
      {
        id: "faq-launch",
        type: "prose",
        heading: "Launch, price, and platform",
        body:
          "Batomon Showdown launched on Steam on September 15, 2026, on Windows PC only. The base price is $14.99 USD with an introductory $9.74 USD window until September 29, 2026. The Supporter Pack DLC is sold separately for $4.99 USD.",
      },
      {
        id: "faq-gameplay",
        type: "prose",
        heading: "Gameplay and progression",
        body:
          "Batomon Showdown is an asynchronous PvP auto-battler. You pick a trainer, build a Batomon team, queue the match, and the server resolves the fight. Progression runs through leveling Batomon via abilities and items, so the gameplay ceiling comes from roster knowledge and ability ordering rather than reaction time.",
      },
      {
        id: "faq-system",
        type: "prose",
        heading: "System requirements and Steam Deck",
        body:
          "Windows 10, Dual Core 2 GHz CPU, 2 MB RAM, 1 GB VRAM GPU, and 512 MB of storage are the published minimums. Steam Deck compatibility is the badge as published by Valve on the Steam store page — check the badge before assuming handheld support.",
      },
      {
        id: "faq-dlc",
        type: "prose",
        heading: "DLC and refunds",
        body:
          "The only DLC currently listed is the Supporter Pack at $4.99 USD under its own Steam AppID 5255370. It is optional and does not gate any base-game feature. Steam's standard refund policy applies to DLC purchased on Steam.",
      },
    ],
    faqIds: [
      "home-is-batomonshowdown-out",
      "home-how-much-does-it-cost",
      "home-what-platforms",
      "home-online-required",
      "release-when-did-it-launch",
      "release-is-on-steam",
      "release-how-much",
      "release-steam-deck",
      "release-is-there-dlc",
      "monsters-how-many",
      "monsters-what-kinds",
      "monsters-how-to-level",
      "monsters-can-you-get-new",
      "monsters-tier-list",
      "bestteam-what-is-the-best",
      "bestteam-how-important-is-trainer",
      "bestteam-flex-or-focused",
      "bestteam-when-to-switch",
      "trainers-who-are-they",
      "trainers-what-does-ability-do",
      "trainers-how-unlock",
      "trainers-can-you-change",
      "trainers-pick-trainer-or-roster-first",
      "howtoplay-real-time-or-async",
      "howtoplay-need-friends",
      "howtoplay-skip-trainer",
      "howtoplay-match-length",
      "sysreq-old-laptop",
      "sysreq-steam-deck",
      "sysreq-2mb-ram",
      "sysreq-windows-11",
      "tips-what-spend-first",
      "tips-level-all-or-focus",
      "tips-how-often-rotate",
      "tips-when-switch-trainer",
      "dlc-what-is-supporter-pack",
      "dlc-includes-new-batomon",
      "dlc-required-to-play",
      "dlc-refund-policy",
    ],
    relatedPageIds: ["release-status", "best-team", "monsters", "trainers", "about"],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-18",
  },
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name} | Unofficial Batomon Showdown fan guide`,
    metaDescription:
      "About Batomon Showdown Guide: scope, sourcing, and editorial principles for an unofficial fan guide site built on the September 18, 2026 Steam store snapshot.",
    summary:
      "An unofficial Batomon Showdown fan guide that summarises facts from the official Steam store page and SteamDB listing dated September 18, 2026.",
    hero: {
      eyebrow: "About",
      subtitle:
        "What this site covers, how facts are sourced, and what readers should expect.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial Batomon Showdown fan guide. Information on this site is sourced from the official Steam store page (AppID 4557380), the Steam DLC page (AppID 5255370), and the SteamDB listing, dated to the September 18, 2026 snapshot.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide" },
      { label: "Editorial rule", value: "Steam store page and SteamDB only" },
      { label: "Snapshot date", value: "September 18, 2026" },
      { label: "Scope", value: "Release, roster, trainers, team building, tips, DLC" },
    ],
    modules: [
      {
        id: "about-mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help players decide whether to buy and how to play Batomon Showdown by giving them a single source for release status, monster roster framing, team synergies, trainer reference, system requirements, progression tips, and DLC info. Every page links outward to the right adjacent guide so you can move from release status into team building without hunting for the next article.",
      },
      {
        id: "about-sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Hard current-game facts come from the official Steam store page (AppID 4557380) and the SteamDB listing. DLC facts come from the Steam DLC page (AppID 5255370). Community discussion on the Steam Community hub is used only for demand signals and to confirm that a topic is being asked about, never as a fact source. Anything not in those sources is written as a dated status statement rather than guessed from community posts.",
      },
      {
        id: "about-snapshot",
        type: "callout",
        tone: "tip",
        title: "Dated snapshot, not real-time data",
        body:
          "Every page in this guide is dated to the September 18, 2026 Steam store snapshot. The Steam review aggregate, the introductory price window, and the Steam Deck badge all change over time, so for final purchase or compatibility decisions always check the current Steam store page directly.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-18",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact Batomon Showdown Guide for corrections, official source updates, and site feedback.",
    summary:
      "Reach the maintainers of Batomon Showdown Guide with corrections and source updates.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Send corrections and official source updates to the team behind Batomon Showdown Guide.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Email corrections and official source updates to support@batomonshowdown.pro — the Cloudflare Email Routing forwarder for this domain. Do not send account credentials or private game information.",
    keyFacts: [
      { label: "Primary use", value: "Corrections and source updates" },
      { label: "Forwarder", value: "support@batomonshowdown.pro via Cloudflare Email Routing" },
      { label: "Response window", value: "Best-effort, no SLA" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Contact method",
        body:
          "Email is the only contact channel for this site. Send corrections or official source updates to support@batomonshowdown.pro — Cloudflare Email Routing forwards that address to the verified destination mailbox. Do not send account credentials, in-game identifiers, or other private information; the site does not request any of those.",
      },
      {
        id: "contact-corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "When you flag a correction, include the page URL and the published Steam store snapshot you are comparing it against. That lets the maintainer verify the change against the source rather than relying on a paraphrase.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-18",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for Batomon Showdown Guide: aggregate analytics via GA4 only, optional third-party ad providers when enabled, and a support@batomonshowdown.pro contact forwarder.",
    summary:
      "Lightweight privacy policy covering GA4 analytics, optional third-party ads, and the Cloudflare Email Routing forwarder.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "What data this site collects, why it is used, and how to reach the team.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "This site uses Google Analytics 4 for aggregate usage data when configured, and may serve third-party ad content when Adsterra units are populated after launch. The Cloudflare Email Routing forwarder handles the support@batomonshowdown.pro contact address. No user accounts or comments are collected.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts or comments" },
      { label: "Ads", value: "Adsterra only when enabled" },
      { label: "Contact", value: "support@batomonshowdown.pro via Cloudflare Email Routing" },
    ],
    modules: [
      {
        id: "privacy-data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. If advertising is enabled after launch, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
      },
      {
        id: "privacy-contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "Messages sent to support@batomonshowdown.pro are forwarded through Cloudflare Email Routing to a verified destination mailbox. Messages may include the information you choose to send. Do not include sensitive personal information or game account credentials.",
      },
      {
        id: "privacy-updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behaviour changes. The last-reviewed date at the top of this page reflects the current policy version.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-18",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for Batomon Showdown Guide: unofficial status, informational use, no warranties, and acceptable-use expectations.",
    summary:
      "Starter terms page covering unofficial status, informational use, and acceptable-use expectations.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Set clear expectations for unofficial status, informational use, and site changes.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "Batomon Showdown Guide is an unofficial fan guide. Information may change as official details are updated; use official sources for final purchase, platform, and compatibility decisions.",
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Review", value: "Update as official facts change" },
    ],
    modules: [
      {
        id: "terms-unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is not affiliated with the Batomon Showdown developer, publisher, Steam, or trademark owners unless explicitly stated. All trademarks belong to their respective owners.",
      },
      {
        id: "terms-accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated. Use official sources — primarily the Steam store page and SteamDB listing — for final purchase, platform, and release decisions.",
      },
      {
        id: "terms-acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through the contact channel.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-18",
  },
];