import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { IMAGE_QUALITY } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { IntroItem } from "@/components/ui/intro";
import { about, profile } from "@/lib/data/profile";
import { links } from "@/lib/site";

/** About intro: label, headline, two bio paragraphs and actions on the left; portrait on the right. */
export function AboutIntro() {
  return (
    <section
      aria-labelledby="about-title"
      className="mx-auto w-full max-w-7xl px-4 pt-36 sm:px-6 lg:px-8 lg:pt-44"
    >
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <IntroItem index={0}>
            <p className="inline-flex rounded-full border border-line bg-surface/50 px-3.5 py-1 text-small font-medium text-accent">
              About me
            </p>
          </IntroItem>
          <IntroItem index={1}>
            <h1 id="about-title" className="mt-6 text-hero font-semibold text-fg">
              {about.headline}
            </h1>
          </IntroItem>
          {about.bio.map((paragraph, i) => (
            <IntroItem index={2 + i} key={paragraph.slice(0, 24)}>
              <p className="mt-6 max-w-2xl text-body text-fg-muted sm:text-[1.0625rem]">{paragraph}</p>
            </IntroItem>
          ))}
          <IntroItem index={4}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={links.resume} download="Jhestin-Digap-Resume.pdf" icon={<DownloadSimple weight="light" size={18} />}>
                Download Resume
              </Button>
              <Button href="/contact" variant="secondary" icon={<ArrowUpRight weight="light" size={18} />}>
                Contact
              </Button>
            </div>
          </IntroItem>
        </div>

        <IntroItem index={5} className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
          <GlassCard coreClassName="p-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-core">
              <Image
                quality={IMAGE_QUALITY}
                src={profile.portrait.src}
                alt={profile.portrait.alt}
                fill
                priority
                sizes="(min-width: 1024px) 34vw, 384px"
                className="object-cover object-[50%_30%]"
              />
            </div>
          </GlassCard>
        </IntroItem>
      </div>
    </section>
  );
}
