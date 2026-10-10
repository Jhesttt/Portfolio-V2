import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge only knows Tailwind's stock scale. Our tokens (type scale, radii,
 * shadows, easings in globals.css) must be registered, otherwise it mistakes
 * `text-small` for a colour and silently drops it when a real colour follows.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["hero", "display", "h1", "h2", "h3", "body", "small", "micro"] }],
      shadow: [{ shadow: ["soft", "lift", "glow"] }],
      rounded: [{ rounded: ["card", "core", "media"] }],
      ease: [{ ease: ["settle", "inertia", "exit"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
