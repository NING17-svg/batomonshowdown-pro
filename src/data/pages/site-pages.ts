import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Batomon Showdown FAQ",
    seoTitle: "Batomon Showdown FAQ: Gameplay, Platforms, Supporter Pack",
    metaDescription:
      "Answers to common Batomon Showdown questions about async PvP, supported platforms, the Supporter Pack DLC, and official support.",
    summary:
      "Quick answers about Batomon Showdown's gameplay, platforms, optional cosmetic DLC, and where to find official game support.",
    hero: {
      eyebrow: "Frequently asked questions",
      subtitle:
        "Short answers about the game and its current store listing, with links to detailed guides and official sources.",
      ctas: [{ label: "Open the beginner guide", href: "/guides/beginner-guide" }],
    },
    quickAnswer:
      "Batomon Showdown is a creature-collecting asynchronous PvP auto-battler by berrymint. It is available on Steam for Windows and Android; the official site lists the App Store version as coming soon. The optional Supporter Pack is cosmetic and does not add gameplay benefits.",
    keyFacts: [
      { label: "PvP", value: "Asynchronous saved-team battles" },
      { label: "Current platforms", value: "Steam for Windows and Android" },
      { label: "Supporter Pack", value: "Three badge case skins; cosmetic only" },
    ],
    modules: [
      {
        id: "faq-official-sources",
        type: "prose",
        heading: "Official sources",
        body:
          "Check the [Batomon Showdown Steam page](https://store.steampowered.com/app/4557380/Batomon_Showdown/), its [Supporter Pack listing](https://store.steampowered.com/app/5255370/Batomon_Showdown_Supporter_Pack/), and the [developer's official website](https://batomon.app/) for current prices, platform availability, announcements, and support channels.",
      },
      {
        id: "faq-guides",
        type: "prose",
        heading: "Find a guide",
        body:
          "For run pacing, trainer choices, teams, battle positioning, trinkets, and Ranked, start with the [beginner guide](https://batomonshowdown.pro/guides/beginner-guide/) or browse the guide links in the site navigation.",
      },
    ],
    faqIds: [
      "what-is-batomon-showdown",
      "platforms-supported",
      "async-ranked-explained",
      "dlc-supporter-pack",
      "is-site-official",
      "official-game-support",
    ],
    relatedPageIds: ["guide-beginner-guide", "dlc-skin-pack", "about", "contact"],
    schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-28",
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
    h1: "About Batomon Showdown Guides",
    seoTitle: "About Batomon Showdown Guides",
    metaDescription:
      "Learn what Batomon Showdown Guides covers, how its information is sourced, and how this independent guide site relates to berrymint's game.",
    summary:
      "Batomon Showdown Guides is an independent, unofficial resource for players looking for help with runs, squads, combat positioning, progression, and Ranked.",
    hero: {
      eyebrow: "About this site",
      subtitle:
        "An independent guide hub for players learning Batomon Showdown's run and asynchronous Ranked systems.",
      ctas: [{ label: "Browse the FAQ", href: "/faq/" }],
    },
    quickAnswer:
      "Batomon Showdown Guides is an independent, unofficial fan resource. It is not operated, approved, or endorsed by berrymint, the developer of Batomon Showdown.",
    keyFacts: [
      { label: "Coverage", value: "Runs, Trainers, teams, combat, trinkets, and Ranked" },
      { label: "Relationship to the game", value: "Independent and unofficial" },
      { label: "Primary official reference", value: "Batomon Showdown on Steam" },
    ],
    modules: [
      {
        id: "independent-site",
        type: "prose",
        heading: "An independent guide site",
        body:
          "This website publishes unofficial guides for *Batomon Showdown*. It is separate from berrymint, the game's developer, and is not endorsed by the developer. Game names and trademarks belong to their respective owners.",
      },
      {
        id: "guide-sources-and-scope",
        type: "prose",
        heading: "What the guides cover and how they are sourced",
        body:
          "The guide library covers the opening run, Trainer choices, Batomon rankings, team builds, positioning and synergies, trinkets and the in-run economy, and the asynchronous Ranked ladder. Store and platform facts are checked against the [official Steam listing](https://store.steampowered.com/app/4557380/Batomon_Showdown/); strategy and tier-list material may also use public community data. Check page context and review dates when details can change with a balance patch.",
        links: [
          {
            label: "Batomon Showdown FAQ",
            href: "/faq/",
            description: "Quick answers about gameplay, platforms, and the Supporter Pack.",
          },
          {
            label: "Supporter Pack guide",
            href: "/dlc-skin-pack/",
            description: "See the cosmetic items in the optional Steam DLC.",
          },
          {
            label: "Contact and official support",
            href: "/contact/",
            description: "Find berrymint's official channels for game-related help.",
          },
          {
            label: "Privacy policy",
            href: "/privacy-policy/",
            description: "Learn about analytics, hosting, and advertising services on this site.",
          },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: ["faq", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-28",
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
    h1: "Contact and Official Support",
    seoTitle: "Contact and Support | Batomon Showdown Guides",
    metaDescription:
      "Find berrymint's official support channels for Batomon Showdown and learn how to distinguish game support from this independent guide site.",
    summary:
      "This guide site cannot access game accounts or purchases. Use berrymint's official channels for game support, and review this site's policy for privacy providers.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Use the right channel for questions about the game, Steam purchases, or this independent guide site.",
      ctas: [{ label: "Read the FAQ", href: "/faq/" }],
    },
    quickAnswer:
      "Batomon Showdown Guides is not the game developer and cannot recover saves, change accounts, or process refunds. The developer's official site lists berrymintdev@gmail.com and links to its Discord and Steam pages for game-related support.",
    keyFacts: [
      { label: "Game developer", value: "berrymint" },
      { label: "Official support email", value: "berrymintdev@gmail.com" },
      { label: "This site", value: "No account, contact form, or game-support desk" },
    ],
    modules: [
      {
        id: "official-game-support",
        type: "prose",
        heading: "Game accounts, bugs, and gameplay support",
        body:
          "For game account or gameplay questions, contact berrymint through the [official website](https://batomon.app/), email [berrymintdev@gmail.com](mailto:berrymintdev@gmail.com), the [official Discord](https://batomon.app/), or [Steam discussions](https://steamcommunity.com/app/4557380/discussions/). These are the developer's channels; Batomon Showdown Guides cannot recover saves or view private account data.",
      },
      {
        id: "steam-purchase-support",
        type: "prose",
        heading: "Steam billing and refund requests",
        body:
          "For a Steam purchase, payment, or refund request, use [Steam Support](https://help.steampowered.com/). This guide site and the game developer cannot change Steam's payment records or approve a Steam refund.",
      },
      {
        id: "site-questions",
        type: "prose",
        heading: "Questions about this guide site",
        body:
          "This static guide site does not publish a contact form or a site-specific email address. It does not accept account credentials, sign-in codes, private save files, or payment information. For details about third-party providers on this website, read the [privacy policy](/privacy-policy/).",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "faq", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-28",
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
    h1: "Batomon Showdown Guides Privacy Policy",
    seoTitle: "Privacy Policy | Batomon Showdown Guides",
    metaDescription:
      "Read how Batomon Showdown Guides handles website visits, analytics, advertising, hosting, and privacy choices.",
    summary:
      "This policy describes the site features and third-party services that may process technical or usage information when you visit Batomon Showdown Guides.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "A plain-language summary of the information and third-party services involved in visiting this guide site.",
      ctas: [],
    },
    quickAnswer:
      "This website has no user accounts, comments, contact form, or checkout. Google Analytics may load when configured; a Google AdSense script is present in the shared page layout. Adsterra placements are currently suppressed by a temporary site-wide experiment.",
    keyFacts: [
      { label: "Accounts, forms, checkout", value: "Not provided on this site" },
      { label: "Analytics", value: "Google Analytics 4 when configured" },
      { label: "Advertising", value: "Google AdSense script; Adsterra currently suppressed" },
    ],
    modules: [
      {
        id: "site-visit-information",
        type: "prose",
        heading: "Information handled when you visit",
        body:
          "This site does not ask visitors to create accounts, post comments, submit contact forms, or make purchases. The hosting platform may process ordinary technical request information to deliver pages and protect the service, such as a requested URL, network address, browser headers, and security events. The site does not ask for payment details or game sign-in information.",
      },
      {
        id: "analytics-and-advertising",
        type: "prose",
        heading: "Analytics and advertising services",
        body:
          "Google Analytics 4 may load when a measurement ID is configured for the site. Google says its default web collection can include page and session statistics, approximate location, and browser and device information, and may use a first-party `_ga` cookie. A Google AdSense script is included in the shared page layout. Adsterra ad placements and a sponsored link are configured in the site source, but their mounting is currently suppressed by a temporary site-wide ads-off experiment; this may change when that experiment ends. If a provider is loaded, it may receive technical or usage information from your browser under its own policy. See [Google Analytics data collection](https://support.google.com/analytics/answer/11593727?hl=en), [Google's privacy policy](https://policies.google.com/privacy), [Adsterra's cookies policy](https://adsterra.com/cookies/), and [Cloudflare's privacy policy](https://www.cloudflare.com/privacypolicy/).",
      },
      {
        id: "privacy-controls",
        type: "prose",
        heading: "Browser and provider controls",
        body:
          "You can block or clear cookies and third-party scripts in your browser settings. Google also provides an [Analytics opt-out browser add-on](https://tools.google.com/dlpage/gaoptout). This website does not currently provide an on-page consent preference tool. Browser or provider controls can change how analytics or advertising behaves.",
      },
      {
        id: "game-account-privacy",
        type: "prose",
        heading: "Game account information is separate",
        body:
          "This policy applies to this independent guide site, not to Batomon Showdown accounts or the game service. For information about game accounts, saved runs, or deletion requests, read the developer's [Batomon Showdown privacy policy](https://api.batomon.app/privacy-policy.html). External websites linked from this guide have their own privacy practices.",
      },
      {
        id: "policy-update-date",
        type: "prose",
        heading: "Policy review",
        body:
          "This policy was reviewed on 28 October 2026. It may be updated if the website's hosting, analytics, or advertising configuration changes.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "faq"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-28",
  },
];
