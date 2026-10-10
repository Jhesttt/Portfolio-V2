"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, stagger, viewport } from "@/lib/motion";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** "mount" plays on load (hero). "view" plays once when scrolled into view. */
  trigger?: "mount" | "view";
  gap?: number;
  delay?: number;
};

/**
 * Parent for a staggered entrance. Children are <StaggerItem>s (or any motion element using
 * the same variant names). Parent and children must share this client tree for variants to flow.
 */
export function Stagger({ children, className, trigger = "view", gap = 0.08, delay = 0.1 }: StaggerProps) {
  const play = trigger === "mount" ? { animate: "visible" } : { whileInView: "visible", viewport };
  return (
    <motion.div variants={stagger(gap, delay)} initial="hidden" className={className} {...play}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variants = fadeUp,
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

/** Stand-alone scroll reveal for a single block. */
export function Reveal({
  children,
  className,
  variants = fadeUp,
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}) {
  return (
    <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={viewport} className={className}>
      {children}
    </motion.div>
  );
}
