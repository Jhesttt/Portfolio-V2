"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { motion, useMotionValue, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, type FocusEvent } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

/** Must match the `pinned` variant in globals.css. */
const PIN_QUERY = "(min-width: 64rem) and (prefers-reduced-motion: no-preference)";

type Layout = "split" | "image-first" | "text-first";

/** Per-slide composition. Widths and offsets differ on purpose so the row has rhythm, not a repeated card. */
const compositions: { layout: Layout; width: string; offset: string }[] = [
  { layout: "split", width: "pinned:w-[min(62rem,72vw)]", offset: "" },
  { layout: "image-first", width: "pinned:w-[min(38rem,46vw)]", offset: "pinned:-translate-y-6" },
  { layout: "text-first", width: "pinned:w-[min(38rem,46vw)]", offset: "pinned:translate-y-8" },
];

/**
 * Featured projects.
 *  Desktop with motion: the section is tall and its inner stage is `sticky`, so vertical scroll slides the
 *  track sideways (scroll progress -> translateX through motion values, no React state, no scroll listeners).
 *  Below 1024px or with reduced motion: a plain vertical stack, nothing pinned, nothing hidden.
 */
export function FeaturedProjects({ projects }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const travel = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform([scrollYProgress, travel], ([progress, distance]: number[]) => -progress * distance);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const query = window.matchMedia(PIN_QUERY);
    function measure() {
      const distance = query.matches ? Math.max(0, track!.scrollWidth - window.innerWidth) : 0;
      travel.set(distance);
      // Section height = one screen + the horizontal distance, so scroll distance maps 1:1 to travel.
      section!.style.setProperty("--pin-h", `calc(100dvh + ${distance}px)`);
    }

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    query.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    measure();

    return () => {
      observer.disconnect();
      query.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
    };
  }, [travel]);

  // overflow-clip (not hidden) on the stage matters: a hidden box can still be scrolled by the browser when
  // focus moves into it, which would double-shift the track. A clipped box cannot scroll.

  /** Keyboard users tabbing into an off-screen panel: scroll the page to where that panel is centred. */
  function onFocus(event: FocusEvent<HTMLDivElement>) {
    if (!window.matchMedia(PIN_QUERY).matches) return;
    const panel = (event.target as HTMLElement).closest<HTMLElement>("[data-panel]");
    const section = sectionRef.current;
    const distance = travel.get();
    if (!panel || !section || distance <= 0) return;

    const needed = Math.min(distance, Math.max(0, panel.offsetLeft - (window.innerWidth - panel.offsetWidth) / 2));
    window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY + needed, behavior: "smooth" });
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="featured-projects"
      className="relative py-12 pinned:h-[var(--pin-h,100dvh)] pinned:py-0"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pinned:sticky pinned:top-0 pinned:flex pinned:h-dvh pinned:max-w-none pinned:items-center pinned:overflow-clip pinned:px-0">
        <motion.div
          ref={trackRef}
          style={{ x }}
          onFocus={onFocus}
          className="flex flex-col gap-10 pinned:w-max pinned:flex-row pinned:items-center pinned:gap-8 pinned:px-[8vw]"
        >
          <div data-panel className="pinned:w-[min(30rem,34vw)] pinned:shrink-0 pinned:pr-6">
            <Reveal>
              <h2 id="featured-projects" className="text-h1 font-semibold text-fg">
                Featured Projects
              </h2>
              <p className="mt-5 max-w-md text-fg-muted">
                Here&apos;s a collection of my finest websites and designs, each crafted with dedication,
                creativity, and utmost effort.
              </p>
            </Reveal>
          </div>

          {projects.map((project, index) => (
            <Slide key={project.slug} project={project} {...compositions[index % compositions.length]} />
          ))}

          <div
            data-panel
            className="flex flex-col items-start gap-5 pinned:w-[min(22rem,26vw)] pinned:shrink-0 pinned:pl-4"
          >
            <p className="max-w-xs text-fg-muted">More websites and designs live on the projects page.</p>
            <Button href="/projects" icon={<ArrowUpRight weight="light" size={18} />}>
              View Projects
            </Button>
          </div>
        </motion.div>

        {/* Progress hairline: no background track, just the line growing. Only while pinned. */}
        <motion.div
          aria-hidden
          style={{ scaleX: scrollYProgress }}
          className="absolute inset-x-[8vw] bottom-10 hidden h-px origin-left bg-accent pinned:block"
        />
      </div>
    </section>
  );
}

function Slide({
  project,
  layout,
  width,
  offset,
}: {
  project: Project;
  layout: Layout;
  width: string;
  offset: string;
}) {
  const { title, label, summary, image, stack, links } = project;

  const media = (
    <div
      className={cn(
        "overflow-hidden rounded-media border border-line",
        layout === "split" && "pinned:w-[56%] pinned:shrink-0",
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={layout === "split" ? "(min-width: 1024px) 40vw, 92vw" : "(min-width: 1024px) 44vw, 92vw"}
        className="h-auto w-full transition-transform duration-700 ease-settle group-hover:scale-[1.03]"
      />
    </div>
  );

  const text = (
    <div className={cn("flex flex-col gap-4 p-3 sm:p-4", layout === "split" && "pinned:flex-1")}>
      <div>
        <p className="text-small text-fg-subtle">{label}</p>
        <h3 className="mt-1 font-display text-h2 font-semibold text-fg">{title}</h3>
      </div>
      <p className="max-w-prose text-fg-muted">{summary}</p>
      <ul aria-label={`${title} stack`} className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <li key={item} className="rounded-full bg-chip px-3 py-1 text-small text-accent">
            {item}
          </li>
        ))}
      </ul>
      {links.live && (
        <a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex w-fit items-center gap-2 font-medium text-accent after:absolute after:inset-0 after:rounded-card"
        >
          View live site
          <ArrowUpRight
            weight="light"
            size={18}
            className="transition-transform duration-500 ease-inertia group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      )}
    </div>
  );

  return (
    <GlassCard
      as="article"
      data-panel
      className={cn("group relative shrink-0", width, offset)}
      coreClassName={cn("flex flex-col p-3 sm:p-4", layout === "split" && "pinned:flex-row pinned:items-center")}
    >
      {layout === "text-first" ? (
        <>
          {text}
          {media}
        </>
      ) : (
        <>
          {media}
          {text}
        </>
      )}
    </GlassCard>
  );
}
