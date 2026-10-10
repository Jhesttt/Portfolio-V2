import {
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
  siJquery,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siReact,
  siTailwindcss,
  siTypescript,
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
  postgresql: siPostgresql,
  mysql: siMysql,
  mongodb: siMongodb,
  firebase: siFirebase,
  drizzle: siDrizzle,
  git: siGit,
  github: siGithub,
  postman: siPostman,
  figma: siFigma,
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
