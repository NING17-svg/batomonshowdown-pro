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