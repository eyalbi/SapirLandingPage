# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # Vite dev server (default http://localhost:5173)
npm run build     # production build into dist/
npm run preview   # serve the built dist/ locally
```

There is no test suite, linter, or formatter configured — don't invent commands for them.

## Architecture

Single-page marketing site for a Hebrew-language personal coach (ספיר מנחם, Satya-method coaching). React 18 + Vite + Tailwind CSS 3, no router, no state management, no backend.

`src/main.jsx` mounts `App`, which renders a fixed `Navbar`, four full-width sections in order (`Hero`, `AboutSatya`, `InstructorBio`, `Booking`), and a `Footer`. Every component is a default-exported function component with no props — all copy and data live inline as module-level consts (`navLinks`, `socialLinks`, `features`, `contactItems`) right above the component that uses them. To change site content, edit those consts, not a config or CMS.

Navigation is anchor-based scrolling (`scroll-behavior: smooth` in `src/styles/index.css`). Anchor ids do not match file names:

| id | rendered by | nav label |
|---|---|---|
| `#top` | `Hero.jsx` | logo |
| `#satya` | `AboutSatya.jsx` | שיטת סאטיה |
| `#about` | `InstructorBio.jsx` | מי אני |
| `#booking` | `Booking.jsx` | קביעת פגישה |

Note the nav lists `#about` before `#satya`, while the DOM order is the reverse. Anchor ids are duplicated by hand in `Navbar.jsx` and `Footer.jsx` — changing one requires changing both.

Booking is a Calendly `InlineWidget` (`react-calendly`) pointing at a hardcoded URL, themed via `pageSettings` with hex values that mirror the Tailwind palette. Icons come from `react-icons/fa` in the footer; section icons are hand-written inline SVG using `currentColor`.

## RTL and Hebrew

The site is Hebrew, right-to-left. `index.html` sets `lang="he" dir="rtl"`, and `index.css` sets `direction: rtl` on `html`. Consequences when editing:

- Tailwind's `left-*`/`right-*`, `translate-x-*`, and `text-left/right` are **not** mirrored automatically — existing code uses physical directions chosen for RTL (e.g. the navbar underline anchors `right-0`). Match the surrounding code rather than assuming LTR.
- Hebrew text is set in Noto Sans Hebrew, loaded from Google Fonts in `index.html` and exposed as the `font-hebrew` Tailwind family (applied once on the root div in `App.jsx`).
- Hebrew copy is the product. Recent commits are copy fixes (word order, natural infinitives) — treat wording changes as deliberate and preserve them exactly when refactoring.

## Styling

All styling is Tailwind utilities inline in JSX. The only global CSS is `src/styles/index.css` (Tailwind directives, base `html`/`body`, and a `.text-balance` utility).

The custom palette in `tailwind.config.js` is the design system — use these names, don't introduce raw hex or off-palette Tailwind colors: `ivory` (page background), `warm-card` (alternating section background), `charcoal` (text, footer background), `warm-gray` (secondary text), `warm-border`, and `sage` / `sage-dark` / `sage-light` (accent, buttons, hover states). Sections alternate `bg-ivory` and `bg-warm-card` and use `py-24` with a `max-w-4xl`/`max-w-5xl` centered container.

## Deployment

Deployed on Vercel, which runs the build itself — `dist/` is gitignored and should never be committed. `public/` is copied verbatim; `index.html` references `/favicon.svg`, which is not currently in the repo.
