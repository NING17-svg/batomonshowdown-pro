# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-19 - Best builds and meta team comps page added

- Task: Add the Patch 14 meta comps coverage that the /best-team page did not name.
- Files changed: `src/data/pages/guide-pages.ts`, `src/data/faq.ts`, `src/data/pages/site-pages.ts`, `src/data/navigation.ts`, `src/data/pages/home.ts`, `CONTENT_INDEX.md`.
- URLs affected: `/best-builds` (new), and the existing `/best-team`, `/how-to-play`, `/tips`, `/`, `/faq` pages that cross-link to it.
- Content: Six named comps (Hyperbug, Fire Sunsage/Blixie, Rock Pebbler/Geminiss, Craghorn, Treasure Hunter, Shock Bees) with core Batomon, trainer pairings, key trinkets, and the match phase each comp wins. Quick Answer leads with the six comp names and a one-line phase role per comp. Page is sourced from critcap.gg's 22,524-run Patch 14 dashboard and the gameplay.tips ranked-gameplay guide; `sourceStatus: placeholder` reflects that those are community/dashboard references rather than the official Steam description.
- Internal links: /best-team, /how-to-play, /tips, and /monsters added as related pages; homepage "Where to start" module surfaces the new page; FAQ page references the new best-builds FAQ ids.
- Verification: `npm run verify` (typecheck, lint, template/content/SEO validation, build, rendered-SEO validation) will run as part of the shared heavy verifier.

### 2026-09-19 - Events Day 3 / Day 6 / Day 9 reward guide added

- Task: Add event-cadence and reward-pick coverage that /how-to-play and /tips did not cover.
- Files changed: `src/data/pages/guide-pages.ts`, `src/data/faq.ts`, `src/data/pages/site-pages.ts`, `src/data/navigation.ts`, `src/data/pages/home.ts`, `CONTENT_INDEX.md`.
- URLs affected: `/events` (new), and the existing `/how-to-play`, `/tips`, `/best-team`, `/best-builds`, `/`, `/faq` pages that cross-link to it.
- Content: Day 3 / Day 6 / Day 9 cadence with the three named Day 3 reward choices (Dragon's Nest, Bug Collector, Rainbow Berry), per-trainer pick criteria, the Day 6 / Day 9 re-evaluation rule, and the v1.0 Traveling Merchant and Fossil Discovery additions. Quick Answer leads with the trigger days and the three named reward choices. Page is sourced from the gameplay.tips ranked-gameplay guide and the 9puz beginner guide; `sourceStatus: placeholder` reflects that those are community guides rather than the official Steam description.
- Internal links: /how-to-play, /best-builds, /tips, and /monsters added as related pages; homepage "Where to start" module surfaces the new page; FAQ page references the new events FAQ ids.
- Verification: `npm run verify` (typecheck, lint, template/content/SEO validation, build, rendered-SEO validation) will run as part of the shared heavy verifier.

### 2026-09-18 - Batomon Showdown initial launch configuration

- Task: Configure the generated Batomon Showdown site for the September 18, 2026 launch snapshot.
- Files changed: `src/data/site.ts`, `src/data/pages/home.ts`, `src/data/pages/release-pages.ts`, `src/data/pages/wiki-pages.ts`, `src/data/pages/guide-pages.ts`, `src/data/pages/site-pages.ts`, `src/data/faq.ts`, `src/data/navigation.ts`, `src/data/theme.ts`, `scripts/validate-template-contract.ts`, `package.json`, `wrangler.jsonc`, `.env.example`, `README.md`, `AGENTS.md`, `CONTENT_INDEX.md`, `route-manifest.json`, and the IndexNow verification file under `public/`.
- URLs affected: `/`, `/release-status`, `/monsters`, `/best-team`, `/trainers`, `/how-to-play`, `/system-requirements`, `/tips`, `/dlc-skin-pack`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`. No new URLs added beyond the V3 content package; no sample template URLs left in the route manifest.
- SEO/GEO changed: Page titles, meta descriptions, hero copy, key facts, FAQ entries, internal-link targets, and source attributions all rewritten to the Batomon Showdown Steam store snapshot. Last-reviewed date set to 2026-09-18 on every page.
- Browser baseline unchanged: neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, and the fixed AdSense ownership trio are preserved.
- Verification: Typecheck, lint, template/content/SEO validation, build, and rendered-SEO validation all pass (`npm run verify`).
- Ad baseline: Fixed Adsterra-ready units remain empty; `enabled=false`, `provider=none`. No real ad network requests are emitted.

### 2026-09-18 - Adsterra six-unit integration applied

- Task: Populate the fixed Adsterra ad units (`native-banner`, `banner-728x90`, `banner-468x60`, `banner-320x50`, `banner-160x600`, `smartlink`) for batomonshowdown.pro after launch.
- Files changed: `src/data/ads.ts`, `GROWTH_LOG.md`.
- URLs affected: None; only the shared AdSlot components (`responsive-banner`, `native-banner`, `right-rail`) and the footer Smartlink now render the real Adsterra placements.
- Ad baseline: `src/data/ads.ts` carries six real, non-empty Adsterra values (Native Banner, Banner 728x90, Banner 468x60, Banner 320x50, Banner 160x600, Smartlink). No new ad components, slots, or page locations were added; no other site files were modified.
- Verification: `npm run verify` passes locally. No Cloudflare build, live ad requests, or rendered DOM checks were performed by this role.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.