import { Reveal } from "@/components/ui/reveal";
import { TechIcon } from "@/components/ui/tech-icon";
import { homeStack } from "@/lib/data/skills";

/**
 * The stack as a single marquee: it is a breadth list (twenty items that do not each need attention),
 * which is the one place a marquee earns its motion. Pauses on hover; reduced motion shows a static wrapped list.
 */
function StackList({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="marquee-copy flex shrink-0 items-center gap-3 pr-3">
      {homeStack.map(({ id, label }) => (
        <li
          key={id}
          className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/50 px-5 py-3 text-body whitespace-nowrap text-fg"
        >
          <TechIcon name={id} className="size-5 text-accent" />
          {label}
        </li>
      ))}
    </ul>
  );
}

export function WebStacks() {
  return (
    <section aria-labelledby="web-stacks" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 id="web-stacks" className="text-h1 font-semibold text-fg">
            Web Stacks
          </h2>
        </Reveal>
      </div>
      <div className="marquee fade-x mt-10 overflow-hidden">
        <div className="marquee-track flex w-max">
          <StackList />
          <StackList hidden />
        </div>
      </div>
    </section>
  );
}
