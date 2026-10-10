import { site } from "@/lib/site";

export const profile = {
  name: site.name,
  role: site.role,
  /** Hero subtext. Keep to 20 words or fewer. */
  pitch:
    "Frontend developer shipping Next.js, React and TypeScript products, from a startup SaaS to Fortune 500 enterprise portals.",
  portrait: {
    src: "/images/portrait.jpg",
    width: 1537,
    height: 2048,
    alt: "Portrait of Jhestin Digap smiling, standing on a grassy hill with mountains behind.",
  },
} as const;
