"use client";

import { Briefcase, Check, GraduationCap } from "@phosphor-icons/react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { formatPeriod, type Experience } from "@/lib/data/experience";
import { popIn, slideFrom, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

/*
 * Line geometry. The spine sits at the centre of the 40px node column on mobile and at 50% on desktop.
 * Keep LINE and NODE in sync: they must share the same horizontal anchor.
 */
const LINE = "left-5 md:left-1/2";

/**
 * Professional History. Scroll-driven: the accent spine draws as the list scrolls through the viewport
 * (scroll progress -> scaleY, smoothed with a spring), each node pops in, each card slides in from its side.
 *  Desktop: centre spine, cards alternate right/left, the period sits on the opposite side.
 *  Mobile: spine on the left, every card to its right, period inside the card.
 *  Reduced motion: spine fully drawn and static; nodes and cards just fade in.
 */
export function ExperienceTimeline({ items }: { items: Experience[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 80%", "end 60%"] });
  const drawn = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  return (
    <ol ref={listRef} className="relative space-y-10 md:space-y-16">
      <div aria-hidden className={cn("absolute top-3 bottom-3 w-px -translate-x-1/2 bg-line", LINE)} />
      <motion.div
        aria-hidden
        style={{ scaleY: reduce ? 1 : drawn }}
        className={cn("absolute top-3 bottom-3 w-px origin-top -translate-x-1/2 bg-accent", LINE)}
      />

      {items.map((item, index) => {
        // Even items: card on the right of the spine (desktop). Odd: card on the left.
        const cardRight = index % 2 === 0;
        const Icon = item.kind === "education" ? GraduationCap : Briefcase;
        const period = formatPeriod(item.period);

        return (
          <li key={item.id} className="relative grid pl-16 md:grid-cols-2 md:gap-x-20 md:pl-0">
            {/* Node */}
            <motion.span
              variants={popIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className={cn(
                "absolute top-5 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-line-strong bg-bg text-accent shadow-soft",
                LINE,
              )}
            >
              <Icon weight="light" size={20} />
            </motion.span>

            {/* Period on the opposite side (desktop only) */}
            <p
              className={cn(
                "hidden pt-7 font-mono text-small text-fg-muted md:block",
                cardRight ? "md:col-start-1 md:row-start-1 md:text-right" : "md:col-start-2 md:row-start-1",
              )}
            >
              {period}
            </p>

            {/* Card */}
            <motion.div
              variants={slideFrom(cardRight ? "right" : "left", 32)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className={cn(cardRight ? "md:col-start-2" : "md:col-start-1", "md:row-start-1")}
            >
              <GlassCard coreClassName="p-6 sm:p-7">
                <p className="font-mono text-small text-fg-muted md:hidden">{period}</p>
                <h3 className="mt-1 font-display text-h3 font-semibold text-fg md:mt-0">{item.title}</h3>
                <p className="mt-1 text-small font-medium text-accent">{item.org}</p>
                {item.highlights.length > 0 && (
                  <ul className="mt-5 space-y-2.5">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex gap-3 text-small text-fg-muted sm:text-body">
                        <Check weight="light" size={18} className="mt-0.5 shrink-0 text-accent sm:mt-1" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </GlassCard>
            </motion.div>
          </li>
        );
      })}
    </ol>
  );
}
