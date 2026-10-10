import { Reveal } from "@/components/ui/reveal";
import { TechIcon } from "@/components/ui/tech-icon";
import { homeStack, type TechName } from "@/lib/data/skills";

type Item = { id: TechName; label: string };

const half = Math.ceil(homeStack.length / 2);
const rows: { items: Item[]; reverse: boolean }[] = [
  { items: homeStack.slice(0, half), reverse: false },
  { items: homeStack.slice(half), reverse: true },
];

function StackList({ items, hidden }: { items: Item[]; hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="marquee-copy flex shrink-0 items-center gap-3 pr-3">
      {items.map(({ id, label }) => (
        <li
          key={id}
          className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-4 py-2.5 text-small whitespace-nowrap text-fg sm:text-body"
        >
          <TechIcon name={id} className="size-[18px] text-accent" />
          {label}
        </li>
      ))}
    </ul>
  );
}

/**
 * Tech stack: heading on the left, two contained marquee rows moving in opposite directions on the
 * right (stacked on mobile). The band stays inside the page container, so it never runs edge to edge.
 * Pauses on hover; reduced motion shows every item as a static wrapped list.
 */
export function WebStacks() {
  return (
    <section aria-labelledby="web-stacks" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <h2 id="web-stacks" className="text-h1 font-semibold text-fg">
            Tech Stack
          </h2>
          <p className="mt-4 max-w-sm text-fg-muted">
            The languages, frameworks and tools I use to design, build and ship.
          </p>
        </Reveal>

        <div className="marquee fade-x flex flex-col gap-3 overflow-hidden py-1 lg:col-span-8">
          {rows.map((row, index) => (
            <div key={index} className="marquee-track flex w-max" data-direction={row.reverse ? "reverse" : undefined}>
              <StackList items={row.items} />
              <StackList items={row.items} hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
