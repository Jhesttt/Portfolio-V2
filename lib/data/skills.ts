export type TechName =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "tailwind"
  | "bootstrap"
  | "jquery"
  | "node"
  | "express"
  | "postgresql"
  | "mysql"
  | "mongodb"
  | "firebase"
  | "drizzle"
  | "git"
  | "github"
  | "postman"
  | "figma";

/**
 * The stack shown on Home. Base list is V1's "Web Stacks"; TypeScript, PostgreSQL, Drizzle, jQuery and
 * Bootstrap are added from the brief (Presyo and the Rival role). The grouped version arrives with the About page.
 */
export const homeStack: { id: TechName; label: string }[] = [
  { id: "html", label: "HTML5" },
  { id: "css", label: "CSS3" },
  { id: "javascript", label: "JavaScript" },
  { id: "typescript", label: "TypeScript" },
  { id: "react", label: "React" },
  { id: "nextjs", label: "Next.js" },
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "bootstrap", label: "Bootstrap" },
  { id: "jquery", label: "jQuery" },
  { id: "node", label: "Node.js" },
  { id: "express", label: "Express" },
  { id: "postgresql", label: "PostgreSQL" },
  { id: "mysql", label: "MySQL" },
  { id: "mongodb", label: "MongoDB" },
  { id: "firebase", label: "Firebase" },
  { id: "drizzle", label: "Drizzle" },
  { id: "git", label: "Git" },
  { id: "github", label: "GitHub" },
  { id: "postman", label: "Postman" },
  { id: "figma", label: "Figma" },
];
