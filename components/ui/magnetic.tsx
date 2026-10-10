"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { PointerEvent, ReactNode } from "react";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Pulls its child a little toward the pointer. Pointer position feeds motion values directly
 * (never React state), so it costs no re-renders. Mouse only; disabled for touch and reduced motion.
 */
export function Magnetic({
  children,
  strength = 0.22,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const { stiffness, damping, mass } = spring.magnetic;
  const sx = useSpring(x, { stiffness, damping, mass });
  const sy = useSpring(y, { stiffness, damping, mass });

  function onMove(event: PointerEvent<HTMLDivElement>) {
    if (reduce || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
