import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Entrance for above-the-fold page intros. Pure CSS (see .intro-item in globals.css): it starts on the first
 * paint, so the headline never waits for JavaScript to hydrate. A Motion entrance kept the hero invisible
 * for about 4s on a throttled phone, which was the page's Largest Contentful Paint.
 * `index` sets the stagger position. Below-the-fold content keeps the Motion scroll reveals.
 */
export function IntroItem({
  index = 0,
  className,
  children,
}: {
  index?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("intro-item", className)} style={{ "--i": index } as CSSProperties}>
      {children}
    </div>
  );
}
