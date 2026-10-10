import { ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { IntroItem } from "@/components/ui/intro";
import { IMAGE_QUALITY } from "@/lib/images";
import type { Project } from "@/lib/data/projects";

/**
 * The featured project as a full-width card: the whole screenshot across the top at its native ratio
 * (never cropped), then the story on the left and the production-engineering details and stack on the
 * right. One frosted (blurred) surface, per the blur budget.
 */
export function FeaturedProject({ project }: { project: Project }) {
  const { title, label, summary, image, stack, links, details } = project;
  return (
    <section aria-labelledby="featured-project" className="mx-auto w-full max-w-7xl px-4 pt-section sm:px-6 lg:px-8">
      <IntroItem index={3}>
        <GlassCard blur coreClassName="overflow-hidden">
          <div className="relative aspect-[1920/907] border-b border-line">
            <Image
              quality={IMAGE_QUALITY}
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-12">
            <div className="flex flex-col lg:col-span-5">
              <p className="text-small text-fg-subtle">Featured project · {label}</p>
              <h2 id="featured-project" className="mt-1 font-display text-h1 font-semibold text-fg">
                {title}
              </h2>
              <p className="mt-4 text-fg-muted">{summary}</p>
              {links.live && (
                <div className="mt-8">
                  <Button href={links.live} external icon={<ArrowUpRight weight="light" size={18} />}>
                    Visit presyoph.com
                  </Button>
                </div>
              )}
            </div>

            <div className="lg:col-span-7">
              {details && (
                <>
                  <h3 className="text-small font-medium text-fg">Production engineering</h3>
                  <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                    {details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-small text-fg-muted">
                        <Check weight="light" size={18} className="mt-0.5 shrink-0 text-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <h3 className="mt-8 text-small font-medium text-fg">Stack</h3>
              <ul aria-label={`${title} stack`} className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <li key={item} className="rounded-full bg-chip px-3 py-1 text-small text-accent">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlassCard>
      </IntroItem>
    </section>
  );
}
