# Content Index — Batomon Showdown Guides

This is the live route inventory for `batomonshowdown.pro` as of the first release. Every URL below is served by the V4 Next.js static export and reachable through the shared Worker `game-guide-new-pool-001` (pool `new-guide-pool-001`). Routes are derived from `src/data/pages/home.ts` and `src/data/pages/guide-pages.ts` together with `guide-editor/page-plan.md`. No template sample URLs are included.

Total routes: 8 page routes (1 home + 7 guide topics). All 14 source keywords from `searcher/keywords.json` are mapped to these 8 pages.

## Page routes

| Route | page_id | Topic (Guide Editor) | SEO title | Meta description |
|---|---|---|---|---|
| `/` | `index` (home) | Home portal | Batomon Showdown Guides: Tier Lists, Builds & Strategies | Batomon Showdown guides for beginners, the Trainer and Batomon tier lists, meta builds, positioning, synergies, trinkets, economy, and ranked multiplayer. |
| `/guides/beginner-guide/` | `beginner-guide` | Beginner Guide | Batomon Showdown Beginner Guide: Level Up & First 10 Wins | Batomon Showdown beginner guide covering how to level up Batomon, the day-by-day run pacing, shop priority, placement basics and the four late-game roles. |
| `/guides/trainer-tier-list/` | `trainer-tier-list` | Trainers | Batomon Showdown Trainer Tier List: Top Picks To Choose | Batomon Showdown trainer tier list covering Burglar, Painter, Twins, Scavenger and situational picks, and how to read the three-card hand at run start. |
| `/guides/batomon-tier-list/` | `batomon-tier-list` | Batomon Tier List | Batomon Showdown Tier List: Top Batomon And Cores Today | Batomon Showdown tier list covering the highest pick-rate Batomon, the S+ 10-win cores, standout individuals and how to use the tier list when building a squad. |
| `/guides/team-builds-meta/` | `team-builds-meta` | Team Builds | Batomon Showdown Best Team: Meta Builds And 4-Role Guide | Batomon Showdown best team and meta build guide covering S+ cores, standout support slots, the 4-role framework, and how to pivot from the early shop. |
| `/guides/battle-strategy/` | `battle-strategy` | Battle Strategy | Batomon Showdown Positioning Guide: Synergies & Placement | Batomon Showdown positioning guide covering placement keywords, synergies, status effects, type and faction synergies, and essential trigger interactions. |
| `/guides/progression-systems/` | `progression-systems` | Progression Systems | Batomon Showdown Trinkets Guide: Economy & 93 Trinket Pool | Batomon Showdown trinkets guide covering the 93-trinket pool, the 40-item shop pool, the merge-to-trinket loop, and which Trainers bend the in-run economy. |
| `/guides/multiplayer-ranked/` | `multiplayer-ranked` | Multiplayer | Batomon Showdown Multiplayer Guide: Ranked Ladder Tips & MMR | Batomon Showdown multiplayer guide covering async PvP, cross-platform saves, divisions, stars, MMR, Master rank, and how ranked opponents read saved teams. |

## Operational files

| Route / file | Purpose |
|---|---|
| `/sitemap.xml` | Next.js generated sitemap covering the 8 page routes above. |
| `/robots.txt` | Next.js generated robots referencing the sitemap. |
| `/ads.txt` | Fixed AdSense `google.com, pub-4194035852162505, DIRECT, f08c47fec0942fa0` (template-defined publisher). |
| `/indexnow-1bc4aaa86ed960ef8e7d9e4a3ee7b375.txt` | IndexNow key file for first-release URL submission. |
| `/__deployment.json` | Public marker reporting site_id, repository, source_commit, deployment_commit, worker and version_id. |

## Keyword → page mapping (from `guide-editor/page-plan.md`)

| Source keyword(s) | Resolved page |
|---|---|
| `Batomon Showdown` (game name) | `/` (home) |
| `Batomon Showdown beginner guide`, `Batomon Showdown how to level up Batomon` | `/guides/beginner-guide/` |
| `Batomon Showdown trainer tier list` | `/guides/trainer-tier-list/` |
| `Batomon Showdown tier list` | `/guides/batomon-tier-list/` |
| `Batomon Showdown best team`, `Batomon Showdown meta`, `Batomon Showdown build guide` | `/guides/team-builds-meta/` |
| `Batomon Showdown positioning guide`, `Batomon Showdown synergies guide` | `/guides/battle-strategy/` |
| `Batomon Showdown trinkets guide`, `Batomon Showdown economy guide` | `/guides/progression-systems/` |
| `Batomon Showdown multiplayer guide`, `Batomon Showdown ranked guide` | `/guides/multiplayer-ranked/` |

## Ad placement inventory (from `ad-placement-manifest.json`)

The shared ad manifest defines 11 empty code slots across 6 page-level slot groups; Adsterra codes remain blank and are filled by the downstream `adsterra-integrator` job.

- Slot groups: `page-top`, `home-after-entry`, `guide-native`, `guide-section-break`, `guide-before-faq`, `footer-sponsored`.
- Empty keys: `page-top-728x90`, `page-top-468x60`, `page-top-320x50`, `home-after-entry-native-banner`, `guide-native-native-banner`, `guide-section-break-728x90`, `guide-section-break-468x60`, `guide-section-break-320x50`, `guide-before-faq-468x60`, `guide-before-faq-320x50`, `footer-sponsored-smartlink`.