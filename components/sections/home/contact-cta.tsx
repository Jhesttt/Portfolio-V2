import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { BrandMark } from "@/components/ui/brand-mark";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { contactPitch } from "@/lib/data/profile";
import { links } from "@/lib/site";

/** Closing call to action: a large forest panel with the JD mark as a watermark. Copy is from V1. */
export function ContactCta() {
  return (
    <section aria-labelledby="contact-cta" className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <Reveal>
        <GlassCard tone="brand" coreClassName="relative overflow-hidden p-8 text-on-brand sm:p-12 lg:p-20">
          <BrandMark className="pointer-events-none absolute -right-12 -bottom-20 size-[24rem] text-on-brand/8 lg:size-[30rem]" />
          <div className="relative max-w-3xl">
            <h2 id="contact-cta" className="text-h1 font-semibold">
              {contactPitch.title}
            </h2>
            <p className="mt-5 max-w-xl text-body text-on-brand/85">{contactPitch.text}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Button href="/contact" variant="highlight" icon={<ArrowUpRight weight="light" size={18} />}>
                Contact
              </Button>
              <a
                href={`mailto:${links.email}`}
                className="text-small font-medium text-on-brand underline decoration-on-brand/40 underline-offset-4 transition-colors duration-300 hover:decoration-on-brand"
              >
                {links.email}
              </a>
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
