"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { gallery } from "@/lib/data/profile";
import { ease, spring, viewport } from "@/lib/motion";

/**
 * Pose of each print in the fan: tilt, vertical offset, and where it starts in the pile (x as a share of
 * its own width, pulling it toward the centre). The middle print sits on top.
 */
const poses = [
  { rotate: -8, y: 18, from: "62%", z: 1 },
  { rotate: 3, y: -10, from: "0%", z: 2 },
  { rotate: 9, y: 22, from: "-62%", z: 1 },
];

const fan: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const print = (pose: (typeof poses)[number]): Variants => ({
  hidden: { opacity: 0, x: pose.from, rotate: 0, y: 40, scale: 0.92 },
  visible: {
    opacity: 1,
    x: "0%",
    rotate: pose.rotate,
    y: pose.y,
    scale: 1,
    transition: { duration: 0.9, ease: ease.settle },
  },
});

/**
 * V1 gallery as a fanned stack of prints. On scroll-in the prints spread out from a single pile; on hover
 * a print straightens, lifts and comes to the front. Reduced motion: the fan simply appears in place.
 * Photos are capped at 280px so the 320px source (mirror selfie) is not stretched much.
 */
export function Gallery() {
  return (
    <section aria-labelledby="gallery" className="mx-auto w-full max-w-7xl px-4 pt-section sm:px-6 lg:px-8">
      <SectionHeading id="gallery" title="Gallery" description="A few moments away from the screen." />

      <motion.ul
        variants={fan}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-12 flex items-center justify-center py-6 sm:mt-16 sm:py-10"
      >
        {gallery.map((photo, index) => {
          const pose = poses[index % poses.length];
          return (
            <motion.li
              key={photo.src}
              variants={print(pose)}
              whileHover={{ rotate: 0, y: -14, scale: 1.06, transition: spring.soft }}
              style={{ zIndex: pose.z }}
              className="-mx-[3%] w-[36%] max-w-[280px] shrink-0 hover:!z-10"
            >
              <figure className="rounded-[1.1rem] border border-glass-line bg-surface p-1.5 pb-6 shadow-lift sm:rounded-[1.4rem] sm:p-2.5 sm:pb-10">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[0.8rem] sm:rounded-[1rem]">
                  {/* Served as the original files: they are already small web-sized photos (12-217KB), and
                      re-encoding them (img1 is a lossy WebP) visibly softened them. */}
                  <Image
                    unoptimized
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 280px, 36vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
