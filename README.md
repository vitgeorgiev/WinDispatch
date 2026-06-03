# WinDispatch

Marketing site for [WinDispatch](https://windispatch.com) — one-click bidding Chrome extension with community broker ratings for Sylectus dispatchers.

The static landing page lives in [`windispatch-site/`](windispatch-site/).

## Local preview

```bash
cd windispatch-site && python3 -m http.server 8000
```

## Repo layout

| Directory | Purpose |
|-----------|---------|
| [`windispatch-site/`](windispatch-site/) | Marketing landing page (static HTML + CSS) |
| [`windispatch-api/`](windispatch-api/) | Broker ratings API (Vercel serverless + KV) |

## Deploy (Vercel)

**Site:** import with root directory `windispatch-site`.

**API:** import with root directory `windispatch-api`, connect a Vercel KV database named `windispatch-kv`, then redeploy. See [`windispatch-api/README.md`](windispatch-api/README.md).
