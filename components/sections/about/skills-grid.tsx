import { Browsers, Database, HardDrives, Wrench } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { GlassCard } from "@/components/ui/glass-card";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechIcon } from "@/components/ui/tech-icon";
import { skillGroups, type SkillGroupId } from "@/lib/data/skills";

const groupIcons: Record<SkillGroupId, Icon> = {
  frontend: Browsers,
  backend: HardDrives,
  databases: Database,
  tools: Wrench,
};

/** Skills in the four groups from the brief. Equal cards: 2 columns from md, every row the same height. */
export function SkillsGrid() {
  return (
    <section aria-labelledby="skills" className="mx-auto w-full max-w-7xl px-4 pt-section sm:px-6 lg:px-8">
      <SectionHeading id="skills" title="Skills" description="What I reach for at each layer of a product." />

      <Stagger className="mt-12 grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {skillGroups.map((group) => {
          const GroupIcon = groupIcons[group.id];
          return (
            <StaggerItem key={group.id} className="h-full">
              <GlassCard className="h-full" coreClassName="flex flex-col p-6 sm:p-7">
                <div className="flex items-center gap-3.5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-chip text-accent">
                    <GroupIcon weight="light" size={20} />
                  </span>
                  <h3 className="font-display text-h3 font-semibold text-fg">{group.title}</h3>
                </div>
                <p className="mt-4 text-small text-fg-muted sm:text-body">{group.blurb}</p>
                <ul aria-label={`${group.title} skills`} className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item.id}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-small text-fg"
                    >
                      <TechIcon name={item.id} className="text-accent" />
                      {item.label}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
