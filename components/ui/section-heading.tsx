import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/** Standard section header: H2 with an optional one-line description, fading up on scroll. */
export function SectionHeading({
  id,
  title,
  description,
  className,
  children,
}: {
  id: string;
  title: string;
  description?: ReactNode;
  className?: string;
  /** Optional action (e.g. a link) aligned to the right on wider screens. */
  children?: ReactNode;
}) {
  return (
    <Reveal className={cn("flex flex-col gap-6 md:flex-row md:items-end md:justify-between", className)}>
      <div>
        <h2 id={id} className="text-h1 font-semibold text-fg">
          {title}
        </h2>
        {description && <p className="mt-4 max-w-xl text-fg-muted">{description}</p>}
      </div>
      {children}
    </Reveal>
  );
}
