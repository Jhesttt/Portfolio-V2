"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Thin client wrapper so the root layout (a Server Component) can mount next-themes.
 * next-themes injects a script that sets data-theme before first paint, which is
 * what makes the load flash-free. The <html> element carries suppressHydrationWarning
 * because that script changes its attributes before React hydrates.
 */
export function ThemeProvider(props: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props} />;
}
