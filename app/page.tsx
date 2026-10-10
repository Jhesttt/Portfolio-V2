import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { PageTransition } from "@/components/layout/page-transition";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { links } from "@/lib/site";

/**
 * TEMPORARY: Phase 1 foundation preview. Shows every token, the type scale, the
 * primitives and the glass blur policy in whichever theme is active. Phase 2 replaces this page.
 */

const ramps = [
  { name: "forest", steps: ["700", "600"] },
  { name: "jade", steps: ["700", "600", "500", "400"] },
  { name: "mint", steps: ["300", "200", "100"] },
  { name: "ink", steps: ["950", "900", "850", "800", "700", "600"] },
  { name: "paper", steps: ["50", "100", "200", "300"] },
] as const;

// Full class names so Tailwind can see them at build time.
const swatch: Record<string, string> = {
  "forest-700": "bg-forest-700",
  "forest-600": "bg-forest-600",
  "jade-700": "bg-jade-700",
  "jade-600": "bg-jade-600",
  "jade-500": "bg-jade-500",
  "jade-400": "bg-jade-400",
  "mint-300": "bg-mint-300",
  "mint-200": "bg-mint-200",
  "mint-100": "bg-mint-100",
  "ink-950": "bg-ink-950",
  "ink-900": "bg-ink-900",
  "ink-850": "bg-ink-850",
  "ink-800": "bg-ink-800",
  "ink-700": "bg-ink-700",
  "ink-600": "bg-ink-600",
  "paper-50": "bg-paper-50",
  "paper-100": "bg-paper-100",
  "paper-200": "bg-paper-200",
  "paper-300": "bg-paper-300",
};

const semantic = [
  ["bg", "bg-bg"],
  ["bg-sunken", "bg-bg-sunken"],
  ["surface", "bg-surface"],
  ["surface-hover", "bg-surface-hover"],
  ["brand", "bg-brand"],
  ["brand-hover", "bg-brand-hover"],
  ["highlight", "bg-highlight"],
  ["chip", "bg-chip"],
] as const;

export default function Home() {
  return (
    <PageTransition>
      <div className="mx-auto w-full max-w-7xl px-4 pt-32 pb-8 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="inline-flex rounded-full bg-chip px-3 py-1 text-micro font-medium tracking-[0.18em] text-accent uppercase">
            Phase 1 preview
          </p>
          <h1 className="mt-5 text-display font-semibold text-fg">Foundation, in both themes.</h1>
          <p className="mt-5 max-w-xl text-body text-fg-muted">
            Tokens, type, primitives and the glass policy. Use the toggle in the nav to compare light and
            dark. This page is replaced by the real Home in Phase 2.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects" icon={<ArrowUpRight weight="light" size={18} />}>
              View Projects
            </Button>
            <Button
              href={links.resume}
              download="Jhestin-Digap-Resume.pdf"
              variant="secondary"
              icon={<ArrowDown weight="light" size={18} />}
            >
              Download Resume
            </Button>
            <Button variant="highlight" icon={<ArrowUpRight weight="light" size={18} />}>
              Highlight
            </Button>
          </div>
        </header>

        <section className="mt-24" aria-labelledby="palette">
          <h2 id="palette" className="text-h2 font-semibold text-fg">
            Palette
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ramps.map((ramp) => (
              <div key={ramp.name}>
                <p className="mb-2 font-mono text-small text-fg-muted">{ramp.name}</p>
                <div className="flex gap-2">
                  {ramp.steps.map((step) => (
                    <div key={step} className="flex-1">
                      <div
                        className={`h-16 rounded-media border border-line ${swatch[`${ramp.name}-${step}`]}`}
                      />
                      <p className="mt-1.5 font-mono text-micro text-fg-subtle">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24" aria-labelledby="semantic">
          <h2 id="semantic" className="text-h2 font-semibold text-fg">
            Semantic tokens
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {semantic.map(([name, cls]) => (
              <div key={name}>
                <div className={`h-14 rounded-media border border-line-strong ${cls}`} />
                <p className="mt-1.5 font-mono text-micro text-fg-subtle">{name}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-2 sm:grid-cols-2">
            <p className="text-body text-fg">fg: the quick brown fox jumps over the lazy dog</p>
            <p className="text-body text-fg-muted">fg-muted: the quick brown fox jumps over the lazy dog</p>
            <p className="text-body text-fg-subtle">fg-subtle: the quick brown fox jumps over the lazy dog</p>
            <p className="text-body text-accent">accent: the quick brown fox jumps over the lazy dog</p>
            <p className="text-body text-link underline underline-offset-4">link: the quick brown fox</p>
            <p className="text-body text-fg">
              <span className="rounded-full bg-chip px-3 py-1 text-small text-accent">chip text</span>
            </p>
          </div>
        </section>

        <section className="mt-24" aria-labelledby="type">
          <h2 id="type" className="text-h2 font-semibold text-fg">
            Type
          </h2>
          <div className="mt-8 space-y-5">
            <p className="text-display font-semibold text-fg">Display, Bricolage</p>
            <p className="text-h1 font-semibold text-fg">Heading one for page titles</p>
            <p className="text-h2 font-semibold text-fg">Heading two for sections</p>
            <p className="font-display text-h3 font-semibold text-fg">Heading three for cards</p>
            <p className="max-w-prose text-body text-fg-muted">
              Body copy in Hanken Grotesk. Frontend-focused developer working across modern React and
              legacy enterprise stacks, with a bias toward details that hold up under real use.
            </p>
            <p className="text-small text-fg-subtle">Small text for captions and metadata.</p>
            <p className="font-mono text-small text-fg-muted">const cost = unitPrice.times(qty); // JetBrains Mono</p>
          </div>
        </section>

        <section className="mt-24" aria-labelledby="glass">
          <h2 id="glass" className="text-h2 font-semibold text-fg">
            Glass policy
          </h2>
          <p className="mt-3 max-w-xl text-fg-muted">
            Left: translucent fill, hairline and inner highlight, no blur filter (the default for cards).
            Right: the same card with real backdrop blur (reserved for the nav and a few hero cells). Identical
            shapes sit behind both so the difference is visible. The nav pill above is the blurred version in
            daily use.
          </p>
          <div className="mt-8 grid gap-6 rounded-card bg-linear-to-br from-forest-600 via-jade-500 to-mint-300 p-6 sm:p-10 md:grid-cols-2">
            {[
              { blur: false, title: "No blur", text: "Cheap to paint and smooth on low-end phones. The shapes behind stay crisp." },
              { blur: true, title: "Backdrop blur", text: "Frosted look. Costs a compositing layer per surface, so the budget is capped in Phase 5." },
            ].map((card) => (
              <div key={card.title} className="relative overflow-hidden rounded-card py-10">
                <div aria-hidden className="absolute -top-2 left-10 size-28 rounded-full bg-mint-300" />
                <div aria-hidden className="absolute -right-4 bottom-0 size-24 rounded-full bg-ink-900" />
                <div aria-hidden className="absolute top-1/2 left-1/2 h-3 w-40 -translate-x-1/2 rounded-full bg-forest-700" />
                <GlassCard blur={card.blur} className="relative mx-4" coreClassName="p-6">
                  <p className="font-display text-h3 font-semibold text-fg">{card.title}</p>
                  <p className="mt-2 text-small text-fg-muted">{card.text}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
