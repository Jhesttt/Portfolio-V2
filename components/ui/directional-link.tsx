"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { routeIndex } from "@/lib/site";

/**
 * next/link that tags the navigation as "forward" or "back" based on nav order,
 * so the page ViewTransition can slide the right way. Links outside the nav
 * order (or to the current page) get no transition type.
 */
export function DirectionalLink({ href, ...props }: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const from = routeIndex(pathname);
  const to = routeIndex(typeof href === "string" ? href : (href.pathname ?? ""));
  const types =
    from === -1 || to === -1 || from === to
      ? undefined
      : [to > from ? "nav-forward" : "nav-back"];

  return <Link href={href} transitionTypes={types} {...props} />;
}
