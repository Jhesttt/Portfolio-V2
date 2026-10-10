"use client";

import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/ui/brand-mark";
import { DirectionalLink } from "@/components/ui/directional-link";
import { cn } from "@/lib/utils";
import { fadeDown, menu, spring } from "@/lib/motion";
import { nav, site } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

const FOCUSABLE = "a[href], button:not([disabled])";

/**
 * Floating glass pill. Desktop: brand, four links with a sliding active marker,
 * theme toggle. Mobile: brand, toggle, menu button that opens a full-screen sheet.
 *
 * Stacking inside the header: sheet z-30, pill z-40, so the morphing menu button stays clickable above the sheet.
 * The view-transition name sits on the pill, not the header: a named ancestor becomes a backdrop root and
 * would stop the sheet's backdrop-filter from seeing the page behind it.
 */
export function SiteNav() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  // Deriving "open" from the path it was opened on closes the sheet on any navigation.
  const open = openPath === pathname;

  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const close = () => setOpenPath(null);

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
      <motion.nav
        aria-label="Primary"
        variants={fadeDown}
        initial="hidden"
        animate="visible"
        className="site-header glass glass-blur pointer-events-auto relative z-40 flex h-14 w-full max-w-fit items-center gap-1 rounded-full p-1.5 pr-2 max-md:justify-between md:gap-2"
      >
        <DirectionalLink
          href="/"
          aria-label={`${site.name}, home`}
          className="flex h-11 items-center gap-2.5 rounded-full pr-3 pl-2 text-fg transition-colors duration-300 hover:bg-surface-hover"
        >
          <BrandMark className="size-7 text-accent" />
          <span className="font-display text-body font-semibold tracking-tight max-sm:sr-only">
            {site.name}
          </span>
        </DirectionalLink>

        <ul className="hidden items-center md:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
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
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      transition={spring.snappy}
                      className="absolute inset-0 rounded-full bg-highlight"
                    />
                  )}
                  <span className="relative">{item.label}</span>
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
      </motion.nav>

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
            className="glass-blur pointer-events-auto fixed inset-2 z-30 flex flex-col justify-center overflow-y-auto rounded-card border border-glass-line bg-bg/85 px-8 md:hidden"
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
