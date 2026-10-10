import { ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { BentoCell } from "@/components/ui/bento-cell";
import { presyo } from "@/lib/data/projects";

/** The featured project. The live link is stretched (after:inset-0) so the whole tile is clickable. */
export function FeaturedProjectCell() {
  const { title, summary, image, stack, links, details } = presyo;
  return (
    <BentoCell
      blur
      className="md:col-span-2 xl:col-span-7 xl:row-span-3"
      coreClassName="flex flex-col p-3 sm:p-4"
    >
      <div className="overflow-hidden rounded-media border border-line">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1280px) 700px, 100vw"
          className="h-auto w-full transition-transform duration-700 ease-settle group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-5 p-3 pt-6 sm:p-5 sm:pt-7">
        <div>
          <p className="text-small text-fg-subtle">Featured project</p>
          <h3 className="mt-1 font-display text-h2 font-semibold text-fg">{title}</h3>
        </div>
        <p className="max-w-prose text-fg-muted">{summary}</p>
        <ul className="space-y-2.5">
          {details?.map((detail) => (
            <li key={detail} className="flex items-start gap-3 text-small text-fg-muted">
              <Check weight="light" size={18} className="mt-0.5 shrink-0 text-accent" />
              {detail}
            </li>
          ))}
        </ul>
        <ul aria-label="Stack" className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <li key={item} className="rounded-full bg-chip px-3 py-1 text-small text-accent">
              {item}
            </li>
          ))}
        </ul>
        <a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-2 font-medium text-accent after:absolute after:inset-0 after:rounded-card"
        >
          Visit presyoph.com
          <ArrowUpRight
            weight="light"
            size={18}
            className="transition-transform duration-500 ease-inertia group-hover:-translate-y-px group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </BentoCell>
  );
}
