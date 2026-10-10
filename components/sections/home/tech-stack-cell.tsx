import { BentoCell } from "@/components/ui/bento-cell";
import { TechIcon } from "@/components/ui/tech-icon";
import { homeStack } from "@/lib/data/skills";

export function TechStackCell() {
  return (
    <BentoCell className="xl:col-span-5" coreClassName="p-6 sm:p-8">
      <h3 className="font-display text-h3 font-semibold text-fg">Tech stack</h3>
      <p className="mt-2 text-small text-fg-muted">Modern React and TypeScript, plus legacy enterprise stacks.</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {homeStack.map(({ id, label }) => (
          <li
            key={id}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-3 py-1.5 text-small text-fg"
          >
            <TechIcon name={id} className="text-accent" />
            {label}
          </li>
        ))}
      </ul>
    </BentoCell>
  );
}
