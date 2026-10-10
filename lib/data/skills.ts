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
  | "betterauth"
  | "firebase"
  | "postgresql"
  | "mysql"
  | "mongodb"
  | "neon"
  | "drizzle"
  | "git"
  | "github"
  | "figma"
  | "postman"
  | "jira"
  | "vercel"
  | "render"
  | "railway"
  | "sentry"
  | "posthog";

type Tech = { id: TechName; label: string };

/**
 * The stack shown on Home. Base list is V1's "Web Stacks"; TypeScript, PostgreSQL, Drizzle, jQuery and
 * Bootstrap are added from the brief (Presyo and the Rival role).
 */
export const homeStack: Tech[] = [
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

export type SkillGroupId = "frontend" | "backend" | "databases" | "tools";

/**
 * Grouped skills for the About page (CLAUDE.md: Frontend / Backend / Databases / Tools). Everything here
 * appears in V1's stack, a V1 project, or the brief (Presyo, the Rival role, deployments).
 */
export const skillGroups: { id: SkillGroupId; title: string; blurb: string; items: Tech[] }[] = [
  {
    id: "frontend",
    title: "Frontend",
    blurb: "Interfaces, components and styling, from modern React to legacy enterprise pages.",
    items: [
      { id: "html", label: "HTML5" },
      { id: "css", label: "CSS3" },
      { id: "javascript", label: "JavaScript" },
      { id: "typescript", label: "TypeScript" },
      { id: "react", label: "React" },
      { id: "nextjs", label: "Next.js" },
      { id: "tailwind", label: "Tailwind CSS" },
      { id: "bootstrap", label: "Bootstrap" },
      { id: "jquery", label: "jQuery" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    blurb: "APIs, authentication and server logic behind the interfaces.",
    items: [
      { id: "node", label: "Node.js" },
      { id: "express", label: "Express" },
      { id: "betterauth", label: "Better Auth" },
      { id: "firebase", label: "Firebase" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    blurb: "Relational and document data, with type-safe queries.",
    items: [
      { id: "postgresql", label: "PostgreSQL" },
      { id: "mysql", label: "MySQL" },
      { id: "mongodb", label: "MongoDB" },
      { id: "neon", label: "Neon" },
      { id: "drizzle", label: "Drizzle ORM" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    blurb: "Design, version control, shipping and monitoring.",
    items: [
      { id: "git", label: "Git" },
      { id: "github", label: "GitHub" },
      { id: "figma", label: "Figma" },
      { id: "postman", label: "Postman" },
      { id: "jira", label: "Jira" },
      { id: "vercel", label: "Vercel" },
      { id: "render", label: "Render" },
      { id: "railway", label: "Railway" },
      { id: "sentry", label: "Sentry" },
      { id: "posthog", label: "PostHog" },
    ],
  },
];
