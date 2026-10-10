import {
  ArrowUpRight,
  Briefcase,
  EnvelopeSimple,
  GithubLogo,
  GraduationCap,
  LinkedinLogo,
  MapPin,
  RocketLaunch,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { BrandMark } from "@/components/ui/brand-mark";
import { GlassCard } from "@/components/ui/glass-card";
import { experience } from "@/lib/data/experience";
import { presyo } from "@/lib/data/projects";
import { links, site } from "@/lib/site";

const work = experience.find((e) => e.kind === "work")!;
const school = experience.find((e) => e.kind === "education")!;

const socials = [
  { href: links.github, label: "GitHub", Icon: GithubLogo, external: true },
  { href: links.linkedin, label: "LinkedIn", Icon: LinkedinLogo, external: true },
  { href: `mailto:${links.email}`, label: "Email", Icon: EnvelopeSimple, external: false },
] as const;

function Fact({ icon: Glyph, label, children, sub }: { icon: Icon; label: string; children: ReactNode; sub?: string }) {
  return (
    <div className="flex gap-3.5">
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-chip text-accent">
        <Glyph weight="light" size={18} />
      </span>
      <div className="min-w-0">
        <dt className="text-small text-fg-subtle">{label}</dt>
        <dd className="text-small font-medium text-fg">{children}</dd>
        {sub && <dd className="text-small text-fg-muted">{sub}</dd>}
      </div>
    </div>
  );
}

/**
 * Hero side card: the quick facts a recruiter scans for (current role, latest project, education, location)
 * plus direct links. All values come from the shared data files, so they never drift from the rest of the site.
 */
export function ProfileCard() {
  return (
    <GlassCard blur className="w-full" coreClassName="p-6 sm:p-7">
      <div className="flex items-center gap-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-highlight text-on-highlight">
          <BrandMark className="size-6" />
        </span>
        <div>
          <p className="font-display text-h3 font-semibold text-fg">{site.name}</p>
          <p className="text-small text-fg-muted">{site.role}</p>
        </div>
      </div>

      <dl className="mt-6 space-y-5 border-t border-line pt-6">
        <Fact icon={Briefcase} label="Currently" sub={work.org}>
          {work.title}
        </Fact>
        <Fact icon={RocketLaunch} label="Latest project" sub={presyo.label}>
          <a
            href={presyo.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-accent underline-offset-4 hover:underline"
          >
            {presyo.title}
            <ArrowUpRight
              weight="light"
              size={14}
              className="transition-transform duration-500 ease-inertia group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Fact>
        <Fact icon={GraduationCap} label="Education" sub={school.org}>
          {school.title}
        </Fact>
        <Fact icon={MapPin} label="Based in">
          {site.location}
        </Fact>
      </dl>

      <ul className="mt-6 flex items-center gap-2 border-t border-line pt-6">
        {socials.map(({ href, label, Icon: Glyph, external }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="grid size-10 place-items-center rounded-full border border-line text-fg-muted transition-colors duration-300 hover:bg-surface-hover hover:text-fg"
            >
              <Glyph weight="light" size={20} />
            </a>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
