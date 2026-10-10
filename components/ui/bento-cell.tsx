"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "motion/react";
import type { PointerEvent, ReactNode } from "react";
import { fadeUp, interaction } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { GlassCard, type GlassTone } from "./glass-card";

const STATIC_GLOW =
  "radial-gradient(60% 60% at 50% 40%, rgb(var(--glow-rgb) / 0.12), transparent 70%)";

/**
 * One bento tile: staggered entrance (variants from a parent <Stagger>), lift on hover, and a glow
 * that follows the pointer. The glow position lives in motion values, so moving the mouse never
 * re-renders React. Reduced motion keeps a static glow and drops the lift.
 */
export function BentoCell({
  tone = "glass",
  blur,
  className,
  coreClassName,
  children,
}: {
  tone?: GlassTone;
  blur?: boolean;
  className?: string;
  coreClassName?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const followGlow = useMotionTemplate`radial-gradient(300px circle at ${x}px ${y}px, rgb(var(--glow-rgb) / 0.16), transparent 70%)`;

  function onMove(event: PointerEvent<HTMLDivElement>) {
    if (reduce || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <motion.div
      variants={fadeUp}
      whileHover={interaction.lift}
      onPointerMove={onMove}
      className={cn("group relative", className)}
    >
      <GlassCard tone={tone} blur={blur} className="h-full" coreClassName={coreClassName}>
        {children}
      </GlassCard>
      <motion.div
        aria-hidden
        style={{ background: reduce ? STATIC_GLOW : followGlow }}
        className="pointer-events-none absolute inset-0 rounded-card opacity-0 shadow-glow transition-opacity duration-500 ease-settle group-hover:opacity-100 group-has-[:focus-visible]:opacity-100"
      />
    </motion.div>
  );
}
