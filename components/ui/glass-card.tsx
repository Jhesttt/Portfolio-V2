import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps<T extends ElementType> = {
  as?: T;
  /** Adds the frosted backdrop blur. Keep to a few hero surfaces (blur budget). */
  blur?: boolean;
  /** Classes for the inner core (padding, layout). */
  coreClassName?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/**
 * Double-bezel container: a translucent outer shell (the tray) holding an inner
 * core (the plate) with concentric radii (28px outer, 22px inner, 6px bezel).
 */
export function GlassCard<T extends ElementType = "div">({
  as,
  blur = false,
  className,
  coreClassName,
  children,
  ...props
}: GlassCardProps<T>) {
  const Tag: ElementType = as ?? "div";
  return (
    <Tag className={cn("glass rounded-card p-1.5", blur && "glass-blur", className)} {...props}>
      <div className={cn("h-full rounded-core bg-surface/60 inset-shadow-edge", coreClassName)}>
        {children}
      </div>
    </Tag>
  );
}
