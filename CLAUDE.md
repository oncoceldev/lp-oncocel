# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

No test suite is configured.

## Stack

- **Next.js 16** with App Router, TypeScript, React 19
- **Tailwind CSS v4** via `@tailwindcss/postcss` (PostCSS plugin, not a Webpack loader)
- **CSS Modules** for component-scoped styles — every component has a `.module.css` sibling
- **Google Fonts** loaded via `next/font/google`: Geist Sans, Geist Mono, Instrument Serif
- Deployed on Vercel at `https://lp-oncocel.vercel.app`

## Architecture

The site is a Portuguese-language landing page for ONCOCEL, a cancer research group at UPE (Universidade de Pernambuco).

### Routes

| Route | Purpose |
|---|---|
| `/` | Full landing page (all home sections stacked) |
| `/integrantes` | Full-page members directory |
| `/publicacoes` | Full-page publications list |
| `/coordenacao` | Coordinator bio page |

### Data layer

All content is statically defined in `data/`:
- `data/members.ts` — `MEMBERS` array with `Member` interface (`name`, `email`, `role`, `roleKey`, `lattes`, `project`, `photo`, `photoOffset?`)
- `data/publications.ts` — `PUBLICATIONS` array with `Publication` interface (currently empty; to be populated)

`RoleKey` values: `'coord' | 'colab' | 'dout' | 'mest' | 'ic'`

Member photos are served from `public/fotos/` and referenced by filename in the `photo` field. Use `encodeURIComponent` when building the `src` path (files have spaces and accents in their names).

### Global styles (`app/globals.css`)

CSS custom properties define the full design system — colors, radii, shadows. Do not use hardcoded hex values; use the tokens:
- Brand palette: `--violet-500` (primary accent), `--purple-700` (secondary), `--violet-400` (tertiary)
- Typography: `--ink`, `--ink-2`, `--ink-3`, `--muted`
- Layout helpers: `.container`, `.section-head`, `.section-kicker`, `.section-title`, `.section-lede`
- Buttons: `.btn`, `.btn-primary`, `.btn-ghost`

### Scroll reveal

Add `className="reveal"` to any element to get the fade-up entrance animation. `ScrollReveal` (rendered in the root layout) uses `IntersectionObserver` to add the `.in` class. Use `style={{ transitionDelay: '.1s' }}` (etc.) to stagger siblings.

### Path alias

`@/` maps to the project root. Use it for all imports.

### Assets

Logo variants in `assets/logos/`: `oncocel-header.png` (nav), `oncocel-hero.png` (hero), `oncocel-footer.png` (footer), `logo-seo.png` (OG/SEO).
