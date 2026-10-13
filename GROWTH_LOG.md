# Growth Log — Batomon Showdown Guides

Operational diary for `batomonshowdown.pro` (site_id `batomonshowdown-pro`). Records only real site-specific events; the shared V4 template history lives in `game-workflow` and is not copied here.

## 2026-10-09 — First release

- **Site id:** `batomonshowdown-pro`
- **Domain:** `batomonshowdown.pro`
- **Pipeline:** `launch_pipeline: guide-v4`
- **Launch issue:** `https://github.com/NING17-svg/game-workflow/issues/59`
- **Game check brief:** `game-intelligence/handoffs/game-check/build-now/batomon-showdown.md`

### What went live

- First public release of the V4 Next.js static export for Batomon Showdown guides on `batomonshowdown.pro`.
- 8 page routes published through the shared Worker `game-guide-new-pool-001` (pool `new-guide-pool-001`): home + 7 guide topics covering Beginner Guide, Trainer Tier List, Batomon Tier List, Team Builds & Meta, Battle Strategy, Progression Systems, Multiplayer & Ranked.
- `__deployment.json` initial marker:
  - `source_commit`: `bd400e3580b36baa34e8a10c4b5782a70f053f20`
  - `deployment_commit`: `f0f3b1f98d94ae960cea004a495287f6b742e79e`
  - `version_id`: `f99c7726-d898-4881-81bc-289787cee89d`
  - `pool_id`: `new-guide-pool-001`
- Public 301s verified: `http://batomonshowdown.pro` → `https://batomonshowdown.pro` and `www.batomonshowdown.pro` → `https://batomonshowdown.pro`.

### Platform integration

- **GA4:** measurement ID `G-NFLF11G4Y1` written into the static site config and deployed; property `properties/554839944` and web data stream `properties/554839944/dataStreams/15799793407` (both inherited from the prior `batomonshowdown-pro` rebuild precheck, per `launch-brief.json` `reuse_ga4_property` / `reuse_ga4_data_stream`); timezone `Asia/Shanghai`.
- **GSC:** domain property `sc-domain:batomonshowdown.pro` registered; sitemap `https://batomonshowdown.pro/sitemap.xml` submitted.
- **Bing:** site `batomonshowdown.pro` verified with `msvalidate.01` code `301CD5703A43F1E7C0C842C1F1A0A1D4`; sitemap submitted.
- **IndexNow:** key file `indexnow-1bc4aaa86ed960ef8e7d9e4a3ee7b375.txt` published; first batch of 8 sitemap URLs submitted.

### Central registry state

- `registry/sites.yaml` record `batomonshowdown-pro` marked `status: active`, `stage: live`, `content_updates: enabled`, with `launched_at: 2026-10-09` and the 4-field `analytics` contract: `ga4_property`, `ga4_data_stream`, `ga4_timezone`, `gsc_property`.
- `local_execution.local_path` points to `/Users/ningshiqi/.local/share/game-workflow/guide-launch/batomonshowdown-pro/builder/site`; `local_execution.site_files` lists `AGENTS.md`, `CONTENT_INDEX.md`, `GROWTH_LOG.md`.
- Adsterra status left `blocked` after the downstream `adsterra-integrator` preflight reported `analytics has unsupported fields: ga4_measurement_id`; the offending key was removed from the registry analytics block (central commit `cf21dd09 site-launch: drop ga4_measurement_id from batomonshowdown-pro analytics`) so the next adsterra-integrator run can pick the site back up from `preflight` without re-fixing the central record.

### Operational handover files

- `AGENTS.md`: describes the shared Worker deployment and the verification contract (`cloudflare_push_verify.py`).
- `CONTENT_INDEX.md`: lists the 8 live page routes, their SEO titles/meta descriptions, and the source keyword → page mapping (this is the first time the file is published; no template history is copied).
- `GROWTH_LOG.md`: this file, recording only the first-release events for `batomonshowdown-pro`.

### Hand-off status

- Site is live, indexed on the major search platforms, and ready for `content_updates` via the content-editor / content-updater pipeline.
- `adsterra-integrator` is the next job; it will re-run preflight on the updated registry, fill the 11 manifest keys, and validate the public Adsterra loaders before flipping `adsterra.status` to `enabled`.

## 2026-10-09 — Adsterra integration

- Filled all 11 manifest keys in `src/data/ads.ts` with real Adsterra placement codes collected from `batomonshowdown.pro` (placements 31293823–31293827). Popunder, Social Bar, Banner 300x250 and Banner 160x300 were newly created; Banner 728x90 / 468x60 / 320x50, Native Banner and Smartlink were reused. Banner 468x60 and Smartlink were resubmitted once and returned to Active before code collection.
- `npm run verify` re-run after the placeholder replacement.
- `registry/sites.yaml` `adsterra.status` flipped to `enabled` with `target_commit` pointing at this push; the V4 ad-placement inventory is unchanged.

## 2026-10-13 — Post-1.1.0 meta-comp survey update

- Updated `/guides/team-builds-meta/`: added a post-1.1.0 meta-comp survey module covering Fire Sunsage (batomon.com 7.92 avg wins / 26.46% win rate) and Cobrex+Fumungus (critcap.gg 41.5% 10-win / 178 runs) alongside the worldeka Season 1 archetypes Ouroblaze Burn Melt, Pylon Shock, Swoonet Water Flood, Puffloon Multicast and Economy.
- Added a Season 1 Trainer callout naming Ginto, The Gamer, The Masked Man and The Black Belt with the one-line effect for each.
- Added a post-1.1.0 trinket-context block stating that the cooldown-trinket ladder changed and Alpha Crown is now Mythical (batodex.com); cooldown-trinket numeric detail and the broader 17-Batomon nerf list stay Watch.
- Extended the 4-role build framework with cross-references to the new survey rows and an optional Economy slot for the worldeka Season 1 Economy archetype.
- Refreshed discovery/link entries on `/`, `/guides/batomon-tier-list/`, `/guides/trainer-tier-list/` and `/guides/battle-strategy/` to reference the post-1.1.0 sources and core picks.
- Updated `lastReviewed` to 2026-10-13 on `home`, `trainer-tier-list`, `batomon-tier-list`, `team-builds-meta`, `battle-strategy`. `CONTENT_INDEX.md` description for `team-builds-meta` now mentions the post-1.1.0 meta-comp survey.
- Sources: `https://batomon.com/`, `https://worldeka.com/batomon-showdown-season-1-meta-teams-guide-best-builds-and-synergies`, `https://www.critcap.gg/batomon/team-comps`, `https://batodex.com/` (Alpha Crown Mythical fact).

## 2026-10-13 — Meta-comp source correction

- Corrected the same-day survey's source attribution: Critcap, not batomon.com, currently lists Fire Sunsage (Blixie) at 7.92 average wins and 26.46% win rate.
- Replaced the unsupported 41.5% / 178-run Cobrex + Fumungus claim with Critcap's Toxic Fumungus board (Puffloon, Fumungus, Cobrex), listed at 7.43 average wins and 21.43% win rate. These are Critcap comp-level win rates, not a shared 10-win comparison with older Season 1 samples.
- Aligned the Worldeka archetype summaries on `/guides/team-builds-meta/` with the units and mechanics actually named in its Season 1 guide. Updated the related source labels on `/guides/batomon-tier-list/` and `/guides/team-builds-meta/`, plus the survey description on `/`; page URLs, metadata, and link roles are unchanged.
- Sources checked: `https://www.critcap.gg/batomon/team-comps/` and `https://worldeka.com/batomon-showdown-season-1-meta-teams-guide-best-builds-and-synergies/`.
