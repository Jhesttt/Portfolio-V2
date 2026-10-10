import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { gallery } from "@/lib/data/profile";

/**
 * V1 gallery: three square photos, always three across (they shrink on phones rather than stacking
 * into tall single-column squares). Capped width so the 320px photo is not blown up.
 */
export function Gallery() {
  return (
    <section aria-labelledby="gallery" className="mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
      <SectionHeading id="gallery" title="Gallery" />
      <Stagger className="mt-10 grid max-w-4xl grid-cols-3 gap-3 sm:gap-5">
        {gallery.map((photo) => (
          <StaggerItem key={photo.src}>
            <GlassCard coreClassName="p-0" className="rounded-[1.25rem] p-1 sm:rounded-card sm:p-1.5">
              <div className="relative aspect-square overflow-hidden rounded-[1rem] sm:rounded-core">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 290px, 30vw"
                  className="object-cover"
                />
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
