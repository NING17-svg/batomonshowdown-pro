# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Home | Batomon Showdown | Find the best entry point | Release Status / Best Team | Hub | Homepage ties release status, monsters, trainers, team, tips, and DLC together. |
| `/release-status` | `src/data/pages/release-pages.ts` | Release | Batomon Showdown release date | Launch date, platform, pricing | How to Play / Monsters | Supporting hub | Sep 15 2026 launch, $14.99 base / $9.74 intro, Windows PC, Very Positive reviews. |
| `/monsters` | `src/data/pages/wiki-pages.ts` | Wiki | Batomon Showdown monsters | Roster framing and collection loop | Best Team / Trainers | Hub | Steam tags (Creature Collector, Auto Battler, Card Battler, Dragons, Horses, Cats, Dogs). |
| `/best-team` | `src/data/pages/guide-pages.ts` | Guide | Batomon Showdown best team | Team composition and synergy archetypes | Trainers / Best Builds | Hub | Four-piece framework + three progression stages. |
| `/best-builds` | `src/data/pages/guide-pages.ts` | Guide | Batomon Showdown best builds | Patch 14 named meta comps | Best Team / How to Play | Hub | Six comps (Hyperbug, Fire Sunsage, Rock Pebbler, Craghorn, Treasure Hunter, Shock Bees) with trainer pairings. |
| `/events` | `src/data/pages/guide-pages.ts` | Guide | Batomon Showdown events | Day 3 / Day 6 / Day 9 reward picks | How to Play / Best Builds | Supporting | Dragon's Nest, Bug Collector, Rainbow Berry plus v1.0 Traveling Merchant and Fossil Discovery. |
| `/trainers` | `src/data/pages/site-pages.ts` | Wiki | Batomon Showdown trainer | Trainer ability categories | Best Team / Monsters | Reference | Tempo, scaling, economy trainer categories. |
| `/how-to-play` | `src/data/pages/guide-pages.ts` | Guide | Batomon Showdown how to play | First-session async PvP walkthrough | Release Status / Events / Tips | Supporting | Five-step first-session checklist + daily loop. |
| `/system-requirements` | `src/data/pages/site-pages.ts` | Wiki | Batomon Showdown system requirements | Minimum PC specs and Steam Deck status | Release Status / How to Play | Reference | Windows 10, Dual Core 2 GHz, 2 MB RAM, 1 GB VRAM, 512 MB storage. |
| `/tips` | `src/data/pages/guide-pages.ts` | Guide | Batomon Showdown tips | Progression advice for new players | How to Play / Best Team / Events | Supporting | Daily queue, focus two or three Batomon, currency priority. |
| `/dlc-skin-pack` | `src/data/pages/site-pages.ts` | Wiki | Batomon Showdown Supporter Pack | DLC price and base-game relationship | Release Status | Reference | Supporter Pack $4.99, AppID 5255370, optional cosmetic. |
| `/faq` | `src/data/pages/site-pages.ts` | FAQ | Batomon Showdown FAQ | Quick answers across topics | Release Status / Contact | Trust | FAQ schema enabled, covers release/platform/gameplay/system/DLC. |
| `/about` | `src/data/pages/site-pages.ts` | Site | about Batomon Showdown Guide | Editorial scope and sourcing | Contact | Trust | Unofficial fan guide snapshot dated 2026-09-18. |
| `/contact` | `src/data/pages/site-pages.ts` | Site | contact Batomon Showdown Guide | Corrections and source updates | About | Trust | support@batomonshowdown.pro via Cloudflare Email Routing. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Site | privacy policy | Analytics, contact, ads | Terms | Trust | GA4 only when configured, optional Adsterra, no accounts. |
| `/terms` | `src/data/pages/site-pages.ts` | Site | terms of use | Unofficial site notice | Privacy Policy | Trust | Unofficial status, informational use, acceptable use. |

## Generated Route Families

- Fixed pages: declared in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: none (Planning Contract `entity_families: []`).
- Final route inventory: `npm run routes:manifest`.
- Primary locale uses the root path; no additional launch locales are configured.

## Content Clusters

- Identity and release: `/release-status`, `/system-requirements`
- Roster and reference: `/monsters`, `/trainers`
- Gameplay: `/how-to-play`, `/best-team`, `/best-builds`, `/events`, `/tips`
- DLC: `/dlc-skin-pack`

## Internal Linking Map

- `/release-status` → `/system-requirements`, `/monsters`, `/best-team`, `/dlc-skin-pack`
- `/monsters` → `/release-status`, `/best-team`, `/trainers`, `/tips`
- `/best-team` → `/monsters`, `/trainers`, `/tips`, `/best-builds`, `/events`
- `/best-builds` → `/best-team`, `/how-to-play`, `/tips`, `/monsters`
- `/events` → `/how-to-play`, `/best-builds`, `/tips`, `/monsters`
- `/trainers` → `/monsters`, `/best-team`, `/tips`
- `/how-to-play` → `/release-status`, `/best-team`, `/tips`, `/system-requirements`, `/events`, `/best-builds`
- `/system-requirements` → `/release-status`, `/how-to-play`
- `/tips` → `/how-to-play`, `/monsters`, `/best-team`, `/trainers`, `/events`, `/best-builds`
- `/dlc-skin-pack` → `/release-status`

## Open Questions

- None at first launch. Per-monster detail pages and any future locale are deferred until underlying data and source access justify them.