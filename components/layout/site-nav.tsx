"use client";

import { List, X } from "@phosphor-icons/react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  type AnimationPlaybackControls,
} from "motion/react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/ui/brand-mark";
import { DirectionalLink } from "@/components/ui/directional-link";
import { cn } from "@/lib/utils";
import { menu, spring } from "@/lib/motion";
import { nav } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

const FOCUSABLE = "a[href], button:not([disabled])";

/** Desktop tabs. Home is the monogram on the left, so it is not repeated as a tab. */
const tabs = nav.filter((item) => item.href !== "/");

/**
 * Floating glass pill. Desktop: JD monogram (Home), three tabs, theme toggle, with one active
 * marker that slides between them. Mobile: monogram, toggle, menu button that opens a full-screen sheet.
 *
 * Stacking inside the header: sheet z-30, pill z-40, so the morphing menu button stays clickable above the sheet.
 * The view-transition name sits on the pill, not the header: a named ancestor becomes a backdrop root and
 * would stop the sheet's backdrop-filter from seeing the page behind it.
 */
export function SiteNav() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [openPath, setOpenPath] = useState<string | null>(null);
  // Deriving "open" from the path it was opened on closes the sheet on any navigation.
  const open = openPath === pathname;

  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const close = () => setOpenPath(null);

  /*
   * Active marker: one element, always mounted, positioned with offsetLeft/offsetTop of the active link.
   * Those offsets are relative to the pill itself, so page scroll (Next scrolls to top on navigation)
   * can never leak into the animation.
   *
   * It only ANIMATES when the route changes. Every other reposition snaps: first paint, the web font
   * swapping in (which changes link widths), breakpoint changes. A ResizeObserver on the pill and its
   * links catches all of those, so a reload never shows the marker sliding from a stale position.
   */
  const markerX = useMotionValue(0);
  const markerY = useMotionValue(0);
  const markerW = useMotionValue(0);
  const markerH = useMotionValue(0);
  const markerOpacity = useMotionValue(0);
  const running = useRef<AnimationPlaybackControls[]>([]);
  const lastPath = useRef<string | null>(null);

  const placeMarker = useCallback(
    (animated: boolean) => {
      const active = navRef.current?.querySelector<HTMLElement>('a[aria-current="page"]');
      running.current.forEach((controls) => controls.stop());
      running.current = [];
      // Hidden tabs (mobile) have no offsetParent: hide the marker instead of pointing at nothing.
      if (!active || active.offsetParent === null) {
        markerOpacity.set(0);
        return;
      }
      const target = [active.offsetLeft, active.offsetTop, active.offsetWidth, active.offsetHeight];
      const values = [markerX, markerY, markerW, markerH];
      if (animated) {
        running.current = values.map((value, i) => animate(value, target[i], spring.snappy));
      } else {
        values.forEach((value, i) => value.set(target[i]));
      }
      markerOpacity.set(1);
    },
    [markerX, markerY, markerW, markerH, markerOpacity],
  );

  // Route change: slide from the previous tab. First mount: snap into place.
  useLayoutEffect(() => {
    const changed = lastPath.current !== null && lastPath.current !== pathname;
    placeMarker(changed && !reduce);
    lastPath.current = pathname;
  }, [pathname, reduce, placeMarker]);

  // Size changes (font swap, breakpoints): snap, never animate.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const observer = new ResizeObserver(() => placeMarker(false));
    observer.observe(nav);
    nav.querySelectorAll("a").forEach((link) => observer.observe(link));
    return () => observer.disconnect();
  }, [placeMarker]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !headerRef.current) return;

      const items = Array.from(headerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null || el === document.activeElement,
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="pointer-events-none fixed inset-x-0 top-4 z-40 flex justify-center px-4"
    >
      <nav
        ref={navRef}
        aria-label="Primary"
        className="intro-nav site-header glass glass-blur pointer-events-auto relative z-40 flex h-14 w-full max-w-fit items-center gap-1 rounded-full p-1.5 pr-2 max-md:justify-between md:gap-2"
      >
        <motion.span
          aria-hidden
          style={{ x: markerX, y: markerY, width: markerW, height: markerH, opacity: markerOpacity }}
          className="pointer-events-none absolute top-0 left-0 rounded-full bg-highlight"
        />

        <DirectionalLink
          href="/"
          aria-label="Home"
          aria-current={pathname === "/" ? "page" : undefined}
          className={cn(
            "relative grid size-11 shrink-0 place-items-center rounded-full transition-colors duration-300",
            pathname === "/" ? "text-on-highlight" : "text-accent hover:bg-surface-hover",
          )}
        >
          <BrandMark className="relative size-6" />
        </DirectionalLink>

        <ul className="hidden items-center md:flex">
          {tabs.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <DirectionalLink
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative block rounded-full px-4 py-2.5 text-small font-medium transition-colors duration-300",
                    active ? "text-on-highlight" : "text-fg-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </DirectionalLink>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpenPath(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full text-fg-muted transition-colors duration-300 hover:bg-surface-hover hover:text-fg md:hidden"
          >
            {open ? <X weight="light" size={22} /> : <List weight="light" size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            variants={menu.overlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="glass-blur pointer-events-auto fixed inset-0 z-30 flex flex-col justify-center overflow-y-auto bg-bg/90 px-8 pt-24 pb-12 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {nav.map((item, index) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <motion.li key={item.href} variants={menu.item}>
                    <DirectionalLink
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block py-2 font-display text-h1 font-semibold tracking-tight transition-colors duration-300",
                        active ? "text-accent" : "text-fg hover:text-accent",
                      )}
                    >
                      {item.label}
                    </DirectionalLink>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
