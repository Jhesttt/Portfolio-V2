import {
  siBetterauth,
  siBootstrap,
  siCss,
  siDrizzle,
  siExpress,
  siFigma,
  siFirebase,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siJira,
  siJquery,
  siMongodb,
  siMysql,
  siNeon,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPosthog,
  siPostman,
  siRailway,
  siReact,
  siRender,
  siSentry,
  siTailwindcss,
  siTypescript,
  siVercel,
  type SimpleIcon,
} from "simple-icons";
import type { TechName } from "@/lib/data/skills";
import { cn } from "@/lib/utils";

const icons: Record<TechName, SimpleIcon> = {
  html: siHtml5,
  css: siCss,
  javascript: siJavascript,
  typescript: siTypescript,
  react: siReact,
  nextjs: siNextdotjs,
  tailwind: siTailwindcss,
  bootstrap: siBootstrap,
  jquery: siJquery,
  node: siNodedotjs,
  express: siExpress,
  betterauth: siBetterauth,
  postgresql: siPostgresql,
  mysql: siMysql,
  mongodb: siMongodb,
  neon: siNeon,
  firebase: siFirebase,
  drizzle: siDrizzle,
  git: siGit,
  github: siGithub,
  postman: siPostman,
  figma: siFigma,
  jira: siJira,
  vercel: siVercel,
  render: siRender,
  railway: siRailway,
  sentry: siSentry,
  posthog: siPosthog,
};

/**
 * Monochrome brand mark from simple-icons. Single colour (currentColor) keeps the palette lock;
 * decorative because the label always sits next to it.
 */
export function TechIcon({ name, className }: { name: TechName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn("size-4 shrink-0", className)}>
      <path d={icons[name].path} />
    </svg>
  );
}
