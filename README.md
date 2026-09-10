# The Mall Cafe — Website

A booking-first Next.js site for The Mall Cafe (94 Wick Street, Verulam, 4339).

## Launch Checklist Status

- [x] **`whatsappNumber`** — Configured (`27815776930`).
- [x] **`phoneDisplay` & call links** — Configured (`081 577 6930`).
- [x] **Address & Trading Hours** — Configured for 94 Wick St, Verulam with split Friday hours.
- [ ] **Menu items and prices** — Currently showing sample Durban street food preview. Update with official menu and prices in `lib/site-data.ts` once finalized.

Both "Book a Table" and "Order Delivery" buttons open WhatsApp with a
pre-filled message — no live booking calendar is wired up, matching what
was asked for. If a live booking/ordering system is wanted later, this is
the file (`components/Hero.tsx`, `components/Header.tsx`,
`components/FindUs.tsx`) where those buttons live.

## Logo

`public/logo.png` is the logo used across the site (header, and the source
for the favicon/apple touch icon) — a high-fidelity recreation built from a
low-res screenshot you provided, since no vector/original file existed yet.

`public/logo.svg` is the editable vector source, kept for future edits. It
depends on two fonts (Poppins for "THE"/"CAFE", Great Vibes for the "Mall"
script) that aren't loaded by the website, so don't swap the PNG for the raw
SVG in the header without either embedding those fonts or converting the
text to outlined paths first — otherwise it'll fall back to whatever cursive
font the visitor's browser has, which varies.

**Once you send the real brand file** (AI/EPS/high-res PNG with transparent
background), replace `public/logo.png` and regenerate `favicon.ico` /
`apple-touch-icon.png` from it — the recreation is a close match but is not
a substitute for the original artwork.

## Brand assets

This build uses a color palette and layout designed from the brief
(South African Indian street food / fusion fast food) since no logo or
brand guideline files were provided. Once you send over the logo and
brand colors/fonts, they should replace:

- Color tokens in `app/globals.css` (`--color-ink`, `--color-chili`,
  `--color-turmeric`, `--color-sand`, `--color-curry`, `--color-cream`)
- The text wordmark in `components/Header.tsx` — swap for the logo image
- Font stacks in `app/globals.css` (`--font-display`, `--font-body`) if the
  brand has specific typefaces

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Deployment (Render)

This project is configured for one-click deployment on **Render**:
- `render.yaml` Blueprint is provided in the repository root.
- Node environment: Node 20 LTS (specified via `.node-version` and `NODE_VERSION: 20` in `render.yaml`).
- **Build command**: `npm run build`
- **Start command**: `npm run start`

### How to deploy on Render:
1. Push this repository to GitHub/GitLab.
2. In Render, select **New +** → **Blueprint** and connect the repository (it will automatically detect `render.yaml`).
3. Alternatively, create a **Web Service** with:
   - **Runtime**: Node
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run start`
   - **Environment Variable**: `NODE_VERSION` = `20`
