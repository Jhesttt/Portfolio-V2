import { Stagger } from "@/components/ui/reveal";
import { CurrentRoleCell } from "./current-role-cell";
import { FeaturedProjectCell } from "./featured-project-cell";
import { LinksCell } from "./links-cell";
import { TechStackCell } from "./tech-stack-cell";

/**
 * Four tiles, four cells, no empty slot.
 *  xl (12 cols): Presyo spans 7 cols x 3 rows on the left; role, stack, links stack on the right (5 cols).
 *  md to lg (2 cols): Presyo full width; role + stack side by side; links full width.
 *  base (1 col): single column.
 */
export function BentoGrid() {
  return (
    <section aria-labelledby="highlights" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 id="highlights" className="sr-only">
        Highlights
      </h2>
      <Stagger className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12 xl:gap-5">
        <FeaturedProjectCell />
        <CurrentRoleCell />
        <TechStackCell />
        <LinksCell />
      </Stagger>
    </section>
  );
}
