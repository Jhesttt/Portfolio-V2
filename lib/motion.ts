import type { Transition, Variants } from "motion/react";

/**
 * Motion language. One place for every easing, duration, spring and variant.
 * Components import from here and never hand-roll transitions.
 *
 * Rules (see Phase 0 plan):
 *  - Only transform and opacity animate. No width/height/top/left.
 *  - No linear or ease-in-out. Entrances settle, exits accelerate away.
 *  - Reduced motion is handled once by <MotionProvider> (reducedMotion="user"),
 *    which strips transforms and keeps opacity. Variants below are authored
 *    with that in mind: every one of them still reads correctly as a fade.
 */

export const ease = {
  /** Default entrance: fast start, long soft landing. */
  settle: [0.16, 1, 0.3, 1],
  /** Heavy, inertial. Nav, menus, overlays. */
  inertia: [0.32, 0.72, 0, 1],
  /** Exits only: slow start, quick departure. */
  exit: [0.7, 0, 0.84, 0],
} as const;

/** Seconds, as Motion expects. */
export const duration = {
  instant: 0.12,
  fast: 0.2,
  base: 0.4,
  slow: 0.7,
  draw: 1,
  pageExit: 0.18,
  pageEnter: 0.42,
} as const;

export const spring = {
  /** Cards and layout settling. */
  soft: { type: "spring", stiffness: 120, damping: 20 },
  /** Toggles, active-link pill. */
  snappy: { type: "spring", stiffness: 420, damping: 32 },
  /** Magnetic buttons following the pointer. */
  magnetic: { type: "spring", stiffness: 220, damping: 18, mass: 0.6 },
  /** Timeline nodes popping in. */
  pop: { type: "spring", stiffness: 380, damping: 22 },
} as const satisfies Record<string, Transition>;

export const transition = {
  enter: { duration: duration.slow, ease: ease.settle },
  enterFast: { duration: duration.base, ease: ease.settle },
  menu: { duration: duration.slow, ease: ease.inertia },
  exit: { duration: duration.fast, ease: ease.exit },
} as const satisfies Record<string, Transition>;

/** whileInView settings: reveal once, slightly before the element is fully in view. */
export const viewport = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -8% 0px",
} as const;

/**
 * whileInView for staggered groups. Triggers as soon as the group's top edge is 12% into the viewport.
 * A fraction-based amount is unsafe here: a long single-column list on a phone can be several screens
 * tall, so "25% visible" would never be reached and its items would stay hidden.
 */
export const viewportGroup = {
  once: true,
  amount: "some",
  margin: "0px 0px -12% 0px",
} as const;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transition.enter },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transition.enter },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: transition.enter },
};

/** Masked wipe, used for large images and headline lines. */
export const reveal: Variants = {
  hidden: { opacity: 0, clipPath: "inset(0 0 100% 0 round 1rem)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0 round 1rem)",
    transition: { duration: duration.slow, ease: ease.settle },
  },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: spring.pop },
};

/** Slide in from a side. Timeline cards alternate left and right. */
export function slideFrom(direction: "left" | "right", distance = 48): Variants {
  const x = direction === "left" ? -distance : distance;
  return {
    hidden: { opacity: 0, x },
    visible: { opacity: 1, x: 0, transition: transition.enter },
  };
}

/** Parent variant: children using fadeUp etc. enter in sequence. */
export function stagger(gap = 0.07, delay = 0.1): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: gap, delayChildren: delay } },
  };
}

/** Vertical line that draws from the top (timeline spine). */
export const drawLine: Variants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: duration.draw, ease: ease.settle } },
};

/** Hover and press states, spread onto a motion element's whileHover / whileTap. */
export const interaction = {
  lift: { y: -4, transition: spring.soft },
  press: { scale: 0.98, transition: { duration: duration.instant, ease: ease.settle } },
} as const;

/** Mobile menu overlay and its staggered links. */
export const menu = {
  overlay: {
    hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
    visible: {
      opacity: 1,
      clipPath: "inset(0 0 0% 0)",
      transition: { duration: duration.slow, ease: ease.inertia, staggerChildren: 0.06, delayChildren: 0.18 },
    },
    exit: {
      opacity: 0,
      clipPath: "inset(0 0 100% 0)",
      transition: { duration: duration.base, ease: ease.exit },
    },
  } satisfies Variants,
  item: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: transition.enter },
    exit: { opacity: 0, transition: { duration: duration.instant } },
  } satisfies Variants,
};

