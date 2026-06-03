# WinDispatch

Marketing site for [WinDispatch](https://windispatch.com) — one-click bidding Chrome extension for Sylectus dispatchers.

The static landing page lives in [`windispatch-site/`](windispatch-site/).

## Local preview

```bash
cd windispatch-site && python3 -m http.server 8000
```

## Deploy (Vercel)

1. Import [vitgeorgiev/WinDispatch](https://github.com/vitgeorgiev/WinDispatch) on [vercel.com/new](https://vercel.com/new).
2. Set **Root Directory** to `windispatch-site` (Framework Preset: **Other**).
3. Deploy, then add domain **windispatch.com** in Project → Settings → Domains.
4. Point DNS at Namecheap to Vercel (see Vercel domain setup — apex `76.76.21.21`, `www` → `cname.vercel-dns.com`).

CLI (after `npx vercel login`):

```bash
npx vercel --cwd windispatch-site --prod
```
