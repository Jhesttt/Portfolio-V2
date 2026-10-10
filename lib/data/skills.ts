export type TechName =
  | "nextjs"
  | "react"
  | "typescript"
  | "tailwind"
  | "node"
  | "postgresql"
  | "drizzle"
  | "jquery"
  | "bootstrap"
  | "git";

/** Marks shown in the Home stack cell. The full grouped list arrives with the About page. */
export const homeStack: { id: TechName; label: string }[] = [
  { id: "nextjs", label: "Next.js" },
  { id: "react", label: "React" },
  { id: "typescript", label: "TypeScript" },
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "node", label: "Node.js" },
  { id: "postgresql", label: "PostgreSQL" },
  { id: "drizzle", label: "Drizzle" },
  { id: "jquery", label: "jQuery" },
  { id: "bootstrap", label: "Bootstrap" },
  { id: "git", label: "Git" },
];
