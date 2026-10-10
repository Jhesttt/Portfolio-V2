# Jhestin Digap: Portfolio V2

Personal portfolio of Jhestin Digap, web developer. Home, About, Projects and Contact, with light and dark
themes, page transitions and scroll-driven motion.

**Stack:** Next.js 16 (App Router, Cache Components) · TypeScript · Tailwind CSS v4 · Motion · next-themes ·
deployed on Vercel.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # colour guard (no pure black/white) + ESLint
npm run build    # production build
```

## Where things live

| What | Where |
| --- | --- |
| Projects (all cards, featured order on Home) | `lib/data/projects.ts` (`featuredSlugs`) |
| Profile copy, bio, gallery | `lib/data/profile.ts` |
| Work history timeline | `lib/data/experience.ts` |
| Skills and tech stack | `lib/data/skills.ts` |
| Name, nav order, email, socials, site URL | `lib/site.ts` |
| Design tokens (colours, type, radii, easings) | `app/globals.css` |
| Motion presets | `lib/motion.ts` |
| Images | `public/projects/` (screenshots), `public/images/` (photos, icons) |
| Resume | `public/resume/Jhestin-Digap-Resume.pdf` |

Project screenshots are shown in a 1920 × 907 frame; use that shape for new thumbnails.

## Deploy

Pushing to `main` deploys on Vercel: https://jhest.vercel.app. Canonical URLs, the sitemap and share
images point there (`productionUrl` in `lib/site.ts`). For a custom domain, set `NEXT_PUBLIC_SITE_URL` in the
Vercel project settings and redeploy.

When replacing an image, give the new file a new name. `next/image` caches resized copies by URL, so a
replaced file with the same name can keep showing the old picture.
