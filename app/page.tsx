import { PageTransition } from "@/components/layout/page-transition";
import { PersonJsonLd } from "@/components/seo/person-json-ld";
import { ContactCta } from "@/components/sections/shared/contact-cta";
import { FeaturedProjects } from "@/components/sections/home/featured-projects";
import { Hero } from "@/components/sections/home/hero";
import { WebStacks } from "@/components/sections/home/web-stacks";
import { featuredProjects } from "@/lib/data/projects";

export default function Home() {
  return (
    <PageTransition>
      <PersonJsonLd />
      <Hero />
      <FeaturedProjects projects={featuredProjects} />
      <WebStacks />
      <ContactCta />
    </PageTransition>
  );
}
