import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { Reveal } from "@/components/ui/reveal";
import { contactPitch } from "@/lib/data/profile";
import { links } from "@/lib/site";

/**
 * Closing call to action: one centred glass panel with a heading, one line of copy and two actions.
 * No decorative layers, so nothing can overlap the content at any width.
 */
export function ContactCta() {
  return (
    <section aria-labelledby="contact-cta" className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <Reveal>
        <div className="rounded-card border border-glass-line bg-glass p-1.5 shadow-soft">
          <div className="rounded-core bg-surface/60 px-6 py-16 text-center inset-shadow-edge sm:px-12 lg:py-24">
            <h2 id="contact-cta" className="mx-auto max-w-2xl text-h1 font-semibold text-fg">
              {contactPitch.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-fg-muted">{contactPitch.text}</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" icon={<ArrowUpRight weight="light" size={18} />}>
                Contact
              </Button>
              <CopyEmailButton email={links.email} />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
