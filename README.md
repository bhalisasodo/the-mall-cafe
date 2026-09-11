# The Mall Cafe (Verulam) — Website

Official website for The Mall Cafe (94 Wick Street, Verulam, 4339).

## Launch Checklist Status

- [x] **Brand Colors & Design Tokens** — Configured according to official brand material:
  - `--color-teal: #4A9C9A` (primary brand color — category banners, checker pattern, CTAs)
  - `--color-black: #000000` (logo background, dark sections, primary text)
  - `--color-red: #993C36` (accent — "Passion for Taste" tagline, HOT/spice callouts)
  - `--color-grey: #8C8C8C` (neutral background / muted text)
  - `--color-white: #FFFFFF` (script logo text, body copy on dark backgrounds)
- [x] **Hero** — "Home of The Gatsby", kicker "Since 1987", red accent tagline "Passion for Taste".
- [x] **Single Contact Number Site-Wide** — `081 577 6930` configured across all calls, WhatsApp, bookings, and deliveries (`+27815776930` / `27815776930`).
- [x] **Authoritative Verulam Menu (13 Groups)** — All 13 official categories, descriptions, notes, and prices in ZAR populated in `lib/site-data.ts`.
- [x] **Footer Requirements** — Includes 94 Wick Street, Verulam address, 100% Halal certification badge, Proudly South African mark, "We Deliver" notice, and responsive icon-only social links (Instagram & TikTok) with placeholder `href="#"` flagged for client profile URLs.

## Social Links Launch Note

In `components/FindUs.tsx`:
- Instagram: `<a href="#" aria-label="Instagram" ...>`
- TikTok: `<a href="#" aria-label="TikTok" ...>`
Update both `href` values in `lib/site-data.ts` (`instagramPlaceholder`, `tiktokPlaceholder`) once the client provides their official social media handles.

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Production Build

```bash
npm run build
```
