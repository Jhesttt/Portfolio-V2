import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/page-transition";
import { AboutIntro } from "@/components/sections/about/about-intro";
import { ExperienceTimeline } from "@/components/sections/about/experience-timeline";
import { OutsideOfCode } from "@/components/sections/about/outside-of-code";
import { Gallery } from "@/components/sections/about/gallery";
import { SkillsGrid } from "@/components/sections/about/skills-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/lib/data/experience";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Jhestin Digap: web developer from Antipolo City, Technical Solutions Engineer at Rival, and BS Computer Engineering graduate of the University of Rizal System.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <AboutIntro />

      <section
        aria-labelledby="professional-history"
        className="mx-auto w-full max-w-7xl overflow-x-clip px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <SectionHeading
          id="professional-history"
          title="Professional History"
          description="Where I've worked and studied."
        />
        <div className="mx-auto mt-14 max-w-5xl">
          <ExperienceTimeline items={experience} />
        </div>
      </section>

      <SkillsGrid />
      <OutsideOfCode />
      <Gallery />
    </PageTransition>
  );
}
