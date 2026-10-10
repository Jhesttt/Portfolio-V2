import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { profile } from "@/lib/data/profile";
import { links } from "@/lib/site";
import { HeroHeadline } from "./hero-headline";

/**
 * Hero. Four text elements: greeting, headline (with the portrait set inline), pitch, CTAs.
 * Editorial layout: the headline spans the full width, pitch left, actions right.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4 pt-28 pb-16 sm:px-6 md:pt-24 lg:min-h-[min(92dvh,54rem)] lg:px-8 lg:pb-20"
    >
      <Stagger trigger="mount" gap={0.1} delay={0.05}>
        <StaggerItem>
          <p className="text-body font-medium text-accent">{profile.greeting}</p>
        </StaggerItem>

        <div className="mt-4">
          <HeroHeadline />
        </div>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-end">
          <StaggerItem className="lg:col-span-5">
            <p className="max-w-md text-body text-fg-muted sm:text-[1.0625rem]">{profile.pitch}</p>
          </StaggerItem>
          <StaggerItem className="lg:col-span-6 lg:col-start-7 lg:justify-self-end">
            <div className="flex flex-wrap gap-3">
              <Button href="/projects" icon={<ArrowUpRight weight="light" size={18} />}>
                View Projects
              </Button>
              <Button
                href={links.resume}
                download="Jhestin-Digap-Resume.pdf"
                variant="secondary"
                icon={<DownloadSimple weight="light" size={18} />}
              >
                Download Resume
              </Button>
            </div>
          </StaggerItem>
        </div>
      </Stagger>
    </section>
  );
}
