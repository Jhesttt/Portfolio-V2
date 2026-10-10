import { ViewTransition, type ReactNode } from "react";

const directional = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  default: "none",
} as const;

/**
 * Wrap each page's content in this (inside page.tsx, not the layout: layouts
 * persist across navigations so enter/exit would never fire there).
 * Direction comes from DirectionalLink's transition types; anything else
 * (browser back/forward, refresh) swaps without animation.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter={directional} exit={directional} default="none">
      {children}
    </ViewTransition>
  );
}
