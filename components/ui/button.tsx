import type { ReactNode } from "react";
import { DirectionalLink } from "@/components/ui/directional-link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "border border-brand-edge bg-brand text-on-brand shadow-soft hover:bg-brand-hover [&_.btn-icon]:bg-on-brand/15",
  secondary:
    "border border-line-strong text-fg hover:bg-surface-hover [&_.btn-icon]:bg-fg/10",
  highlight:
    "bg-highlight text-on-highlight hover:shadow-glow [&_.btn-icon]:bg-on-highlight/10",
} as const;

/**
 * How the trailing icon reacts on hover. The circle never moves; only the glyph inside it does.
 *  slide: the arrow leaves through the top-right and a fresh copy slides in from the bottom-left.
 *  down:  the glyph dips 2px (download icons).
 */
type IconMotion = "slide" | "down" | "none";

const iconBase = "grid place-items-center transition-transform duration-500 ease-inertia";

function TrailingIcon({ icon, motion }: { icon: ReactNode; motion: IconMotion }) {
  return (
    <span className="btn-icon relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-full">
      {motion === "slide" ? (
        <>
          <span className={cn(iconBase, "motion-safe:group-hover:translate-x-[160%] motion-safe:group-hover:-translate-y-[160%]")}>
            {icon}
          </span>
          <span
            aria-hidden
            className={cn(
              iconBase,
              "absolute inset-0 -translate-x-[160%] translate-y-[160%] motion-safe:group-hover:translate-x-0 motion-safe:group-hover:translate-y-0",
            )}
          >
            {icon}
          </span>
        </>
      ) : (
        <span className={cn(iconBase, motion === "down" && "motion-safe:group-hover:translate-y-0.5")}>{icon}</span>
      )}
    </span>
  );
}

type ButtonProps = {
  variant?: keyof typeof variants;
  /** Trailing icon, nested in its own circle (button-in-button). */
  icon?: ReactNode;
  /** Defaults to "down" for download links and "slide" otherwise. */
  iconMotion?: IconMotion;
  className?: string;
  children: ReactNode;
} & (
  | { href: string; download?: boolean | string; external?: boolean; onClick?: never; type?: never }
  | { href?: undefined; onClick?: () => void; type?: "button" | "submit"; download?: never; external?: never }
);

/** Shared pill-button classes. Exported so client components (e.g. CopyEmailButton) match exactly. */
export function buttonStyles({
  variant = "primary",
  withIcon = false,
  className,
}: {
  variant?: keyof typeof variants;
  withIcon?: boolean;
  className?: string;
}) {
  return cn(
    "group inline-flex min-h-12 items-center gap-3 rounded-full py-1.5 text-small font-medium whitespace-nowrap",
    "transition-[transform,background-color,box-shadow,border-color] duration-500 ease-inertia active:scale-[0.98]",
    withIcon ? "pr-1.5 pl-6" : "px-6",
    variants[variant],
    className,
  );
}

export function Button({ variant = "primary", icon, iconMotion, className, children, ...rest }: ButtonProps) {
  const classes = buttonStyles({ variant, withIcon: Boolean(icon), className });
  const motion: IconMotion = iconMotion ?? (rest.download !== undefined ? "down" : "slide");

  const content = (
    <>
      <span>{children}</span>
      {icon && <TrailingIcon icon={icon} motion={motion} />}
    </>
  );

  if (rest.href === undefined) {
    return (
      <button type={rest.type ?? "button"} onClick={rest.onClick} className={classes}>
        {content}
      </button>
    );
  }

  const { href, download, external } = rest;

  // Downloads and external links must be plain anchors (next/link would intercept them).
  if (download !== undefined || external || /^(https?:|mailto:)/.test(href)) {
    return (
      <a
        href={href}
        className={classes}
        {...(download !== undefined ? { download: download === true ? "" : download } : {})}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <DirectionalLink href={href} className={classes}>
      {content}
    </DirectionalLink>
  );
}
