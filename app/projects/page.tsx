import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageTransition } from "@/components/layout/page-transition";
import { FeaturedProject } from "@/components/sections/projects/featured-project";
import { ProjectGroup } from "@/components/sections/projects/project-group";
import { PageIntro } from "@/components/sections/shared/page-intro";
import { designProjects, developmentProjects, practiceProjects, presyo } from "@/lib/data/projects";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description:
    "Projects by Jhestin Digap: Presyo, a costing SaaS for Filipino sellers, plus web apps, UI/UX design work and practice projects.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageTransition>
      <PageIntro id="projects-title" label="Projects" title="Things I've designed and built.">
        A collection of my finest websites and designs, each crafted with dedication, creativity, and
        utmost effort.
      </PageIntro>

      <FeaturedProject project={presyo} />

      <ProjectGroup
        id="development"
        title="Web development"
        description="Web apps and sites I built, from a community tool and client work to my first portfolio."
        projects={developmentProjects}
      />

      <ProjectGroup
        id="design"
        title="UI/UX design"
        description="Interfaces I designed in Figma for team projects."
        projects={designProjects}
      />

      <ProjectGroup
        id="practice"
        title="Practice projects"
        description="College projects, Frontend Mentor challenges, internship exercises and a course project that built my fundamentals."
        projects={practiceProjects}
        columns={3}
      />
    </PageTransition>
  );
}
