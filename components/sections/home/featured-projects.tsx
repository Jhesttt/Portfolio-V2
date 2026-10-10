import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { DirectionalLink } from "@/components/ui/directional-link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import type { Project } from "@/lib/data/projects";
import { ProjectCard } from "@/components/sections/shared/project-card";

/**
 * Featured projects: section header with a "View Projects" link, then a grid of equal cards (2 columns from 1024px,
 * 1 column below). auto-rows-fr makes every row the same height, so all four cards match.
 */
export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section aria-labelledby="featured-projects" className="mx-auto w-full max-w-7xl px-4 pt-section sm:px-6 lg:px-8">
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="featured-projects" className="text-h1 font-semibold text-fg">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-xl text-fg-muted">
            A selection of products and websites I&apos;ve designed and built, from a costing SaaS to a campus
            booking system.
          </p>
        </div>
        <DirectionalLink
          href="/projects"
          className="group inline-flex w-fit shrink-0 items-center gap-2 text-small font-medium text-accent"
        >
          View Projects
          <ArrowUpRight
            weight="light"
            size={16}
            className="transition-transform duration-500 ease-inertia group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </DirectionalLink>
      </Reveal>

      <Stagger className="mt-12 grid auto-rows-fr grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {projects.map((project, index) => (
          <StaggerItem key={project.slug} className="h-full">
            <ProjectCard project={project} priority={index < 2} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
