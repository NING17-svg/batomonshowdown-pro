# Site agent rules

## Shared guide Worker deployment

Production is served by Worker `game-guide-new-pool-001` in `new-guide-pool-001`. `.shared-worker.json` is the authoritative mapping; deployment repository: `NING17-svg/game-guide-new-pool-001`. The source remains static export. Main pushes call the configured shared deploy hook. Never deploy this source with Wrangler or recreate an independent Worker. Verify publication with central `cloudflare_push_verify.py --repo-root <source>`; source SHA, successful shared build, 100% active version and domain marker must agree.
