"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useSyncExternalStore, type MouseEvent } from "react";
import { flushSync } from "react-dom";

const subscribe = () => () => {};

/**
 * Light/dark switch. Both icons are always rendered and CSS (see .theme-icon in
 * globals.css) shows the right one from the html data-theme attribute, so the
 * server markup never disagrees with the client and nothing flashes.
 *
 * The switch itself is a circular reveal from the button via the View Transitions
 * API. Without API support, or with reduced motion, the theme just changes.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const next = resolvedTheme === "dark" ? "light" : "dark";

  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || reduce) {
      setTheme(next);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    root.style.setProperty("--vt-x", `${rect.left + rect.width / 2}px`);
    root.style.setProperty("--vt-y", `${rect.top + rect.height / 2}px`);
    root.setAttribute("data-theme-switching", "");

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(next));
      // Guarantee the DOM is on the new theme before the "after" snapshot is taken.
      if (root.getAttribute("data-theme") !== next) root.setAttribute("data-theme", next);
    });

    transition.finished.finally(() => {
      root.removeAttribute("data-theme-switching");
      root.style.removeProperty("--vt-x");
      root.style.removeProperty("--vt-y");
    });
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted ? `Switch to ${next} theme` : "Switch color theme"}
      className="relative grid size-10 shrink-0 place-items-center rounded-full text-fg-muted transition-colors duration-300 hover:bg-surface-hover hover:text-fg"
    >
      <Sun weight="light" size={20} className="theme-icon theme-icon-sun absolute" />
      <Moon weight="light" size={20} className="theme-icon theme-icon-moon absolute" />
    </button>
  );
}
