/**
 * Fixed, static colour field that gives the glass something to refract.
 * Pure gradients (no blur filter, no animation) so it costs one paint and never repaints on scroll.
 */
export function AmbientBackground() {
  return <div aria-hidden className="ambient pointer-events-none fixed inset-0 z-0" />;
}
