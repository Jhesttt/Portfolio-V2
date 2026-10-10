export type Project = {
  slug: string;
  title: string;
  summary: string;
  image: { src: string; width: number; height: number; alt: string };
  stack: string[];
  links: { live?: string; figma?: string; github?: string };
  /** Production-engineering details, shown on the Projects page. */
  details?: string[];
};

export const presyo: Project = {
  slug: "presyo",
  title: "Presyo",
  summary:
    "A costing tool for Filipino food and craft sellers. Know your true cost per unit and what to charge, in minutes.",
  image: {
    src: "/projects/presyo-mockup.png",
    width: 1920,
    height: 907,
    alt: "Presyo costing app on two phones, showing a product cost breakdown and margin alerts.",
  },
  stack: ["TypeScript", "Better Auth", "Drizzle", "PostgreSQL", "Neon", "Sentry", "PostHog", "Vercel"],
  links: { live: "https://presyoph.com/" },
  details: [
    "Decimal-safe costing engine written in TypeScript.",
    "Better Auth for sign-in, Drizzle on PostgreSQL (Neon) for data.",
    "Sentry for error tracking and PostHog for product analytics.",
    "Deployed on Vercel.",
  ],
};
