"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * One switch for reduced motion. With reducedMotion="user", Motion follows the OS
 * setting: transform and layout animations are skipped, opacity animations stay.
 * Content never disappears, it just stops travelling.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
