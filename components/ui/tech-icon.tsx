import {
  siBootstrap,
  siDrizzle,
  siGit,
  siJquery,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";
import type { TechName } from "@/lib/data/skills";
import { cn } from "@/lib/utils";

const icons: Record<TechName, SimpleIcon> = {
  nextjs: siNextdotjs,
  react: siReact,
  typescript: siTypescript,
  tailwind: siTailwindcss,
  node: siNodedotjs,
  postgresql: siPostgresql,
  drizzle: siDrizzle,
  jquery: siJquery,
  bootstrap: siBootstrap,
  git: siGit,
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
