import { PageTransition } from "@/components/layout/page-transition";
import { BentoGrid } from "@/components/sections/home/bento-grid";
import { Hero } from "@/components/sections/home/hero";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <BentoGrid />
    </PageTransition>
  );
}
