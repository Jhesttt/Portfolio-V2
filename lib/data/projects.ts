/**
 * Project content. Descriptions and tags come from the V1 site (rewritten only where V1 used a dash).
 * Which projects appear on Home is controlled by `featuredSlugs` at the bottom: edit that list to swap them.
 */

export type Project = {
  slug: string;
  title: string;
  /** Short context line shown above the title. */
  label: string;
  summary: string;
  image: { src: string; width: number; height: number; alt: string };
  stack: string[];
  links: { live?: string; figma?: string; github?: string };
  /** Production-engineering details, shown on the Projects page and the featured slide. */
  details?: string[];
};

export const presyo: Project = {
  slug: "presyo",
  title: "Presyo",
  label: "My startup",
  summary:
    "A costing tool for Filipino food and craft sellers. Know your true cost per unit, and what to charge, in minutes.",
  image: {
    src: "/projects/presyo-mockup.png",
    width: 1920,
    height: 907,
    alt: "Presyo costing app on two phones, showing a product cost breakdown and margin alerts.",
  },
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Better Auth", "Drizzle", "Neon", "Sentry", "PostHog", "Vercel"],
  links: { live: "https://presyoph.com/" },
  details: [
    "Decimal-safe costing engine written in TypeScript.",
    "Better Auth for sign-in, Drizzle on PostgreSQL (Neon) for data.",
    "Sentry for error tracking and PostHog for product analytics.",
  ],
};

export const dotnote: Project = {
  slug: "dotnote",
  title: "DotNote.",
  label: "Web app",
  summary:
    "A minimalist note-taking web app with public, real-time notes and theme toggling. Fully responsive with no login required, deployed via Vercel and Render.",
  image: {
    src: "/projects/dotnote.png",
    width: 1920,
    height: 907,
    alt: "DotNote note-taking app in dark and light themes, showing a grid of public notes.",
  },
  stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  links: { live: "https://dotnotee.vercel.app/" },
};

export const anemolab: Project = {
  slug: "anemolab",
  title: "AnemoLab",
  label: "Built in my 2nd year of college",
  summary:
    "Features the Anemo characters from Genshin Impact, showcasing my early passion and skill in web development.",
  image: {
    src: "/projects/anemolab.png",
    width: 1895,
    height: 905,
    alt: "AnemoLab landing page with a Genshin Impact character standing in a dark forest.",
  },
  stack: ["HTML", "CSS", "JavaScript", "Materialize"],
  links: { live: "https://jhesttt.github.io/AnemoLab/" },
};

/** Phase 4 adds the rest of the shortlist here. */
export const allProjects: Project[] = [presyo, dotnote, anemolab];

/** The three projects shown on Home, in order. Change these slugs to swap them. */
export const featuredSlugs = ["presyo", "dotnote", "anemolab"] as const;

export const featuredProjects: Project[] = featuredSlugs
  .map((slug) => allProjects.find((p) => p.slug === slug))
  .filter((p): p is Project => Boolean(p));
