import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { profile } from "@/lib/data/profile";
import { links } from "@/lib/site";

/**
 * Text-first hero: greeting, headline, pitch, two CTAs. Left-aligned and contained, with a simple
 * staggered fade-up on load (opacity-only under reduced motion).
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4 pt-32 pb-20 sm:px-6 md:pt-24 lg:min-h-[min(88dvh,52rem)] lg:px-8 lg:pb-24"
    >
      <Stagger trigger="mount" gap={0.1} delay={0.05} className="max-w-5xl">
        <StaggerItem>
          <p className="inline-flex rounded-full border border-line bg-surface/50 px-3.5 py-1 text-small font-medium text-accent">
            {profile.greeting}
          </p>
        </StaggerItem>
        <StaggerItem>
          <h1 id="hero-title" className="mt-6 text-hero font-semibold text-fg">
            I&apos;m Jhestin, a <span className="text-accent">Web Developer</span> with a designer&apos;s touch
            from the Philippines.
          </h1>
        </StaggerItem>
        <StaggerItem>
          <p className="mt-6 max-w-xl text-body text-fg-muted sm:text-[1.0625rem]">{profile.pitch}</p>
        </StaggerItem>
        <StaggerItem>
          <div className="mt-10 flex flex-wrap gap-3">
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
      </Stagger>
    </section>
  );
}
