import { ProjectCard } from "@/components/sections/shared/project-card";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

/**
 * A titled group of equal project cards.
 *  columns 2: same grid as Home (2 columns from 1024px, 1 below).
 *  columns 3: compact cards, 3 columns from 768px (so a group of 9 fills a clean 3x3, no orphan card).
 */
export function ProjectGroup({
  id,
  title,
  description,
  projects,
  columns = 2,
}: {
  id: string;
  title: string;
  description: string;
  projects: Project[];
  columns?: 2 | 3;
}) {
  return (
    <section aria-labelledby={id} className="mx-auto w-full max-w-7xl px-4 pt-section sm:px-6 lg:px-8">
      <SectionHeading id={id} title={title} description={description} />
      <Stagger
        className={cn(
          "mt-12 grid auto-rows-fr grid-cols-1 gap-6",
          columns === 3 ? "md:grid-cols-3 lg:gap-6" : "lg:grid-cols-2 lg:gap-8",
        )}
      >
        {projects.map((project) => (
          <StaggerItem key={project.slug} className="h-full">
            <ProjectCard project={project} size={columns === 3 ? "compact" : "default"} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
