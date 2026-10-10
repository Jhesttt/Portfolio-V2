@AGENTS.md

# Portfolio V2 — Project Brief & Build Workflow

This file is the source of truth for this project. Read it fully at the start of every session. Follow the phased workflow in order. Do not skip acceptance criteria.

---

## 1. Project Overview

Personal portfolio for **Jhestin Digap**, frontend-focused web developer (Next.js, React, TypeScript + legacy enterprise stacks).

- **Type:** Multi-page site — Home, About, Projects, Contact
- **Goal:** A distinctive, motion-rich portfolio that impresses recruiters and clients, replacing V1
- **Assets:** Reused images/content live in `/public` (migrated from the V1 repo). Resume at `/public/resume/Jhestin-Digap-Resume.pdf`

## 2. Tech Stack (fixed — do not substitute)

- Next.js (App Router) + TypeScript
- Tailwind CSS
- `motion` package for animation (Framer Motion successor)
- `next-themes` for light/dark mode
- Deployed on Vercel

## 3. Visual Direction

- **Primary style:** Bento grid layouts with glassmorphism accents — frosted translucent cards (`backdrop-blur`), subtle 1px borders, layered depth. **No neumorphism.**
- **Motion is a first-class citizen.** Page transitions, scroll-triggered reveals, staggered card entrances, hover micro-interactions (magnetic buttons, card tilts/glows). Every section should feel alive but intentional — motion supports hierarchy, never decoration for its own sake.
- Taste-skill dials: **motion intensity HIGH, design variance medium-high, density medium.**
- Always respect `prefers-reduced-motion` — provide a reduced variant, never just disable content.

## 4. Color System

Base palette (stay in this family; adjacent shades allowed where needed for contrast or hierarchy):

| Token | Hex | Role |
|---|---|---|
| ink | `#091413` | Dark-mode background family |
| forest | `#285A48` | Primary brand / buttons |
| jade | `#408A71` | Secondary accents, hovers, gradients |
| mint | `#B0E4CC` | Highlights, glows, dark-mode accent text |

Rules:

- **NEVER pure `#000000` or `#FFFFFF`** anywhere — backgrounds, text, borders, shadows included.
- Dark mode: backgrounds in the `#091413` family (may layer slightly lighter tints for elevation).
- Light mode: warm mint-tinted off-white backgrounds (e.g. `#F4FAF7` family), ink-family text.
- Define everything as CSS variables / Tailwind theme tokens — components never hardcode hex values.
- Light/dark **toggle in the nav**, persisted across visits, no flash of wrong theme on load (use `next-themes` with `suppressHydrationWarning`).
- All text must pass **WCAG AA contrast in both modes**. Verify mint-on-light combinations especially.

## 5. Required Features

1. **Hero CTAs (Home):** "View Projects" (primary) + **"Download Resume"** — triggers a direct download of `/resume/Jhestin-Digap-Resume.pdf` via the `download` attribute.
2. **About page — Professional History timeline** (vertical, scroll-animated: items reveal/draw in as they enter the viewport):
   - **Technical Solutions Engineer — Rival (formerly SilkRoad Technology)** · Oct 2025–Present · Fortune 500 client eForms/portals, 200+ Jira tickets resolved, legacy ePrise system (XML, jQuery, Bootstrap), PDF output engineering fixes shared across team.
   - **Full-Stack Web Developer (OJT) — AP Global IT Solutions Inc.** · Jun–Jul 2024 · 240+ hours, React, reusable components, Git workflows.
   - **BS Computer Engineering — University of Rizal System, Antipolo** · 2021–2025.
3. **Projects page:** featured project **Presyo** (product costing SaaS — TypeScript decimal-safe costing engine, Better Auth + Drizzle + PostgreSQL/Neon, Sentry + PostHog, deployed on Vercel) plus other V1 projects worth keeping.
4. **Contact page:** email, LinkedIn, GitHub, location (Antipolo City, PH). Simple and polished — no backend form required; `mailto:` or copy-to-clipboard is fine.
5. **Fully responsive, mobile-first.** Bento grids collapse to clean single/double columns. Test at 360px, 768px, 1024px, 1440px.

## 6. Working Rules

- Work **one phase at a time** (see §7). At the end of each phase, stop, summarize what was built, and confirm the acceptance criteria before moving on.
- Prefer small, composable components (`/components/ui` for primitives, `/components/sections` for page sections).
- Keep motion logic reusable — shared variants/transition presets in one place (e.g. `lib/motion.ts`), not duplicated per component.
- Semantic HTML, proper landmarks, alt text, visible focus states.
- Commit at the end of each phase with a descriptive message.
- If a design decision is ambiguous, make the tasteful call and note it — don't stall.

## 7. Build Workflow (Phases)

### Phase 0 — Scaffold Audit & Plan
- Read this file and inventory `/public` assets.
- Propose: sitemap, route structure, component tree, design-token sheet (both themes), and a motion language spec (named transition presets, durations, easings).
- **Acceptance:** plan approved by me before any feature code.

### Phase 1 — Foundation
- Tailwind theme + CSS variable tokens for both modes (no pure black/white anywhere).
- `next-themes` setup, nav with working animated theme toggle, no load flash.
- Root layout: fonts (distinctive pairing, not default sans), page-transition wrapper, footer.
- `lib/motion.ts` with shared variants (fade-up, stagger container, reveal, etc.).
- **Acceptance:** toggle persists and is flash-free; tokens render correctly in both modes; lint/build clean.

### Phase 2 — Home
- Hero with name, role, short pitch; bento grid of highlight cards (current role, featured project, tech stack, links).
- CTAs: "View Projects" + "Download Resume" (working download).
- Staggered entrance animations; hover micro-interactions on cards.
- **Acceptance:** resume downloads correctly; bento collapses cleanly at 360px; animations respect reduced motion.

### Phase 3 — About + Timeline
- Bio/story section, skills display (grouped: Frontend / Backend / Databases / Tools).
- Professional History vertical timeline with scroll-triggered reveals (line draws, nodes pop, cards slide in).
- **Acceptance:** timeline readable and animated on mobile and desktop; dates and details match §5.2 exactly.

### Phase 4 — Projects + Contact
- Projects grid (glass cards: screenshot, stack chips, live/GitHub links). Presyo featured prominently with its production-engineering details.
- Contact page with animated entrance.
- **Acceptance:** all links valid; images optimized via `next/image`.

### Phase 5 — Polish, A11y & Performance Pass
- Audit every breakpoint; fix overflow/spacing issues.
- Contrast check both themes (WCAG AA); keyboard navigation + focus states.
- Performance: limit stacked `backdrop-blur` layers, lazy-load below-the-fold media, check Lighthouse (target 90+ performance/accessibility/SEO).
- SEO/meta: per-page titles + descriptions, Open Graph image, favicon.
- **Acceptance:** Lighthouse targets met; smooth scroll on a mid-range phone; no console errors.

### Phase 6 — Ship
- Final commit, push to GitHub, verify Vercel production deploy, smoke-test every page and both themes on the live URL.
