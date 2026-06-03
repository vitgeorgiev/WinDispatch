# WinDispatch — Landing Page

Marketing landing page for **WinDispatch**, a one-click bidding Chrome extension for freight dispatchers who work the Sylectus load board.

## Stack

Static site. No build step, no dependencies — plain HTML + CSS. Fonts (Space Grotesk + Manrope) load from Google Fonts via CDN.

## Structure

```
windispatch-site/
├── index.html          # the landing page (all sections)
├── styles.css          # all styles + brand tokens (CSS custom properties)
├── README.md
├── .gitignore
└── assets/
    ├── favicon.svg     # bolt badge icon
    ├── logo.svg        # horizontal WinDispatch lockup
    └── store/          # Chrome Web Store listing images
        ├── icon-128.jpg
        ├── small-promo-440x280.jpg
        └── marquee-1400x560.jpg
```

## Run locally

It's a static file — just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Brand tokens

Defined as CSS custom properties at the top of `styles.css`:

| Token | Value | Use |
|-------|-------|-----|
| `--navy` | `#0C1B33` | primary / text |
| `--gold` | `#D4B978` | accent / CTAs |
| `--green` | `#2BAA66` | ETA / success |
| `--bg` | `#F5F8FB` | page background |
| `--paper` | `#FFFFFF` | cards |

Type: **Space Grotesk** (display / headings), **Manrope** (body).

## Sections

Hero · Problem/Solution · Features (6) · How it works (3 steps) · Social proof + testimonials · CTA · Footer.

## Deploy

Drop the folder on any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages). For GitHub Pages, push to a repo and enable Pages on the root of the default branch.

## TODO before launch

- Replace the `href="#install"` / `href="#"` placeholders with the real Chrome Web Store URL and Privacy Policy / Support links.
- Confirm the testimonials (currently placeholder names/companies) before publishing.

---
Version shown in UI: **v2.3.0**
