import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Magnetic } from "@/components/ui/magnetic";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { profile } from "@/lib/data/profile";
import { reveal } from "@/lib/motion";
import { links } from "@/lib/site";

/**
 * Hero: asymmetric split. Left: role chip, name, 20-word pitch, two CTAs. Right: portrait.
 * Four text elements at most; the portrait is a real photo, not a placeholder.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto w-full max-w-7xl px-4 pt-28 pb-16 sm:px-6 md:pt-24 lg:min-h-[min(100dvh,56rem)] lg:px-8 lg:pb-20"
    >
      <Stagger trigger="mount" gap={0.09} className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <StaggerItem>
            <p className="inline-flex rounded-full bg-chip px-3 py-1 text-micro font-medium text-accent uppercase">
              {profile.role}
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 id="hero-title" className="mt-5 text-display font-semibold text-fg">
              {profile.name}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 max-w-xl text-body text-fg-muted sm:text-[1.0625rem]">{profile.pitch}</p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-9 flex flex-wrap gap-3">
              <Magnetic>
                <Button href="/projects" icon={<ArrowUpRight weight="light" size={18} />}>
                  View Projects
                </Button>
              </Magnetic>
              <Magnetic>
                <Button
                  href={links.resume}
                  download="Jhestin-Digap-Resume.pdf"
                  variant="secondary"
                  icon={<DownloadSimple weight="light" size={18} />}
                >
                  Download Resume
                </Button>
              </Magnetic>
            </div>
          </StaggerItem>
        </div>

        <StaggerItem variants={reveal} className="lg:col-span-5">
          <GlassCard className="mx-auto w-full max-w-sm lg:max-w-none" coreClassName="p-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-core">
              <Image
                src={profile.portrait.src}
                alt={profile.portrait.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 384px, 90vw"
                className="object-cover object-[50%_28%]"
              />
            </div>
          </GlassCard>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
