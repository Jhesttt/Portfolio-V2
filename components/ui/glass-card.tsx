import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

/**
 * Surface tones. All three share the double-bezel shape (28px shell, 6px bezel, 22px core).
 *  glass:     translucent, shows the ambient colour field through it.
 *  brand:     solid forest gradient. Text on it uses on-brand tokens.
 *  highlight: mint fill. Text on it uses on-highlight tokens.
 */
const tones = {
  glass: { shell: "glass", core: "bg-surface/60 inset-shadow-edge" },
  brand: {
    shell: "border border-brand-edge bg-linear-to-br from-forest-700 to-forest-600 shadow-soft",
    core: "bg-on-brand/8",
  },
  highlight: {
    shell: "border border-line bg-highlight shadow-soft",
    core: "bg-on-highlight/6",
  },
} as const;

export type GlassTone = keyof typeof tones;

type GlassCardProps<T extends ElementType> = {
  as?: T;
  tone?: GlassTone;
  /** Adds the frosted backdrop blur (glass tone only). Keep to a few hero surfaces. */
  blur?: boolean;
  /** Classes for the inner core (padding, layout). */
  coreClassName?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/**
 * Double-bezel container: an outer shell (the tray) holding an inner core (the plate)
 * with concentric radii.
 */
export function GlassCard<T extends ElementType = "div">({
  as,
  tone = "glass",
  blur = false,
  className,
  coreClassName,
  children,
  ...props
}: GlassCardProps<T>) {
  const Tag: ElementType = as ?? "div";
  const t = tones[tone];
  return (
    <Tag
      className={cn(t.shell, "rounded-card p-1.5", tone === "glass" && blur && "glass-blur", className)}
      {...props}
    >
      <div className={cn("h-full rounded-core", t.core, coreClassName)}>{children}</div>
    </Tag>
  );
}
