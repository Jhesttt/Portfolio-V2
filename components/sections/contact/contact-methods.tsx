import { ArrowUpRight, EnvelopeSimple, MapPin } from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { IntroItem } from "@/components/ui/intro";
import { SocialIcon } from "@/components/ui/social-icon";
import { links, socials, type SocialId } from "@/lib/site";

function MethodCard({
  icon,
  label,
  value,
  children,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  children?: ReactNode;
}) {
  return (
    <GlassCard className="group relative h-full" coreClassName="flex h-full flex-col p-6 sm:p-8">
      <span className="grid size-11 place-items-center rounded-full bg-chip text-accent">{icon}</span>
      <p className="mt-6 text-small text-fg-subtle">{label}</p>
      <p className="mt-1 font-display text-h3 font-semibold break-words text-fg">{value}</p>
      {children && <div className="mt-auto pt-6">{children}</div>}
    </GlassCard>
  );
}

/** Whole-card link for profile cards; the stretched ::after covers the card. */
function ProfileLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-small font-medium text-accent after:absolute after:inset-0 after:rounded-card"
    >
      {label}
      <ArrowUpRight
        weight="light"
        size={16}
        className="transition-transform duration-500 ease-inertia group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}

const profile = (id: SocialId) => socials.find((s) => s.id === id)!;

/**
 * Contact methods required by the brief (email, LinkedIn, GitHub, location) as four equal cards,
 * then the remaining V1 profiles as a compact row. No form: mailto and copy-to-clipboard only.
 */
export function ContactMethods() {
  const linkedin = profile("linkedin");
  const github = profile("github");
  const others = socials.filter((s) => s.id !== "linkedin" && s.id !== "github");

  return (
    <section aria-labelledby="contact-methods" className="mx-auto w-full max-w-7xl px-4 pt-section sm:px-6 lg:px-8">
      <h2 id="contact-methods" className="sr-only">
        Ways to reach me
      </h2>

      <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        <IntroItem index={4} className="h-full">
          <MethodCard icon={<EnvelopeSimple weight="light" size={22} />} label="Email" value={links.email}>
            <div className="flex flex-wrap gap-3">
              <CopyEmailButton email={links.email} label="Copy email" variant="primary" />
              <a
                href={`mailto:${links.email}`}
                className="inline-flex min-h-12 items-center rounded-full border border-line-strong px-6 text-small font-medium text-fg transition-colors duration-300 hover:bg-surface-hover"
              >
                Send an email
              </a>
            </div>
          </MethodCard>
        </IntroItem>

        <IntroItem index={5} className="h-full">
          <MethodCard icon={<MapPin weight="light" size={22} />} label="Based in" value="Antipolo City, Rizal, Philippines">
            <p className="text-small text-fg-muted">Philippine Time (UTC+8)</p>
          </MethodCard>
        </IntroItem>

        <IntroItem index={6} className="h-full">
          <MethodCard icon={<SocialIcon id="linkedin" size={22} />} label="LinkedIn" value={linkedin.handle}>
            <ProfileLink href={linkedin.href} label="View profile" />
          </MethodCard>
        </IntroItem>

        <IntroItem index={7} className="h-full">
          <MethodCard icon={<SocialIcon id="github" size={22} />} label="GitHub" value={github.handle}>
            <ProfileLink href={github.href} label="View repositories" />
          </MethodCard>
        </IntroItem>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <IntroItem index={8}>
          <p className="mr-2 text-small text-fg-muted">Also on</p>
        </IntroItem>
        {others.map((s, i) => (
          <IntroItem index={9 + i} key={s.id}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/50 py-1.5 pr-4 pl-1.5 text-small text-fg transition-colors duration-300 hover:border-line-strong hover:bg-surface-hover"
            >
              <span className="grid size-8 place-items-center rounded-full bg-chip text-accent">
                <SocialIcon id={s.id} size={16} />
              </span>
              {s.label}
              <span className="text-fg-muted">{s.handle}</span>
            </a>
          </IntroItem>
        ))}
      </div>
    </section>
  );
}
