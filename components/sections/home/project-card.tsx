import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { IMAGE_QUALITY } from "@/lib/images";
import type { Project } from "@/lib/data/projects";

/** Visible stack chips per card. Extra items collapse into "+N" so every card has the same footprint. */
const MAX_TAGS = 4;

/**
 * Project card. Every card shares one image frame (the screenshots' native 1920:907 ratio), the same
 * padding and the same footer position (pushed to the bottom), so a grid of them lines up exactly.
 * The link is stretched over the whole card; hover only changes border, shadow and image scale.
 */
export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const { title, label, summary, image, stack, links } = project;
  const href = links.live ?? links.figma ?? links.github;
  const linkLabel = links.live ? "View live site" : links.figma ? "View on Figma" : "View on GitHub";
  const shown = stack.slice(0, MAX_TAGS);
  const hidden = stack.length - shown.length;

  return (
    <article className="group relative flex h-full flex-col rounded-card border border-glass-line bg-glass p-1.5 shadow-soft transition-[border-color,box-shadow] duration-500 ease-settle hover:border-line-strong hover:shadow-lift">
      <div className="flex h-full flex-col overflow-hidden rounded-core bg-surface/60 inset-shadow-edge">
        <div className="relative aspect-[1920/907] overflow-hidden border-b border-line">
          <Image
            quality={IMAGE_QUALITY}
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-settle group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-small text-fg-subtle">{label}</p>
          <h3 className="mt-1 font-display text-h3 font-semibold text-fg sm:text-[1.5rem]">{title}</h3>
          <p className="mt-3 text-small text-fg-muted sm:text-body">{summary}</p>

          <ul aria-label={`${title} stack`} className="mt-5 flex flex-wrap gap-2">
            {shown.map((item) => (
              <li key={item} className="rounded-full bg-chip px-3 py-1 text-small text-accent">
                {item}
              </li>
            ))}
            {hidden > 0 && (
              <li className="rounded-full border border-line px-3 py-1 text-small text-fg-muted">
                +{hidden}
                <span className="sr-only"> more: {stack.slice(MAX_TAGS).join(", ")}</span>
              </li>
            )}
          </ul>

          {href && (
            <div className="mt-auto pt-6">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-small font-medium text-accent after:absolute after:inset-0 after:rounded-card"
              >
                {linkLabel}
                <span className="sr-only">: {title}</span>
                <ArrowUpRight
                  weight="light"
                  size={16}
                  className="transition-transform duration-500 ease-inertia group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
