import type { ReactNode } from "react";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

/**
 * Text-only page intro (Projects, Contact): label pill, H1, one paragraph, optional actions.
 * Same spacing rule as the Home and About intros: pt-36 / lg:pt-44, no bottom padding.
 */
export function PageIntro({
  id,
  label,
  title,
  children,
  actions,
}: {
  id: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mx-auto w-full max-w-7xl px-4 pt-36 sm:px-6 lg:px-8 lg:pt-44">
      <Stagger trigger="mount" gap={0.1} delay={0.05} className="max-w-3xl">
        <StaggerItem>
          <p className="inline-flex rounded-full border border-line bg-surface/50 px-3.5 py-1 text-small font-medium text-accent">
            {label}
          </p>
        </StaggerItem>
        <StaggerItem>
          <h1 id={id} className="mt-6 text-hero font-semibold text-fg">
            {title}
          </h1>
        </StaggerItem>
        <StaggerItem>
          <p className="mt-6 max-w-2xl text-body text-fg-muted sm:text-[1.0625rem]">{children}</p>
        </StaggerItem>
        {actions && (
          <StaggerItem>
            <div className="mt-10 flex flex-wrap gap-3">{actions}</div>
          </StaggerItem>
        )}
      </Stagger>
    </section>
  );
}
