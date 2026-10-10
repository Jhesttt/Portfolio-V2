import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { BentoCell } from "@/components/ui/bento-cell";
import { links } from "@/lib/site";

const items = [
  { label: "GitHub", href: links.github, Icon: GithubLogo, external: true },
  { label: "LinkedIn", href: links.linkedin, Icon: LinkedinLogo, external: true },
  { label: "Email", href: `mailto:${links.email}`, Icon: EnvelopeSimple, external: false },
] as const;

export function LinksCell() {
  return (
    <BentoCell
      tone="highlight"
      className="md:col-span-2 xl:col-span-5"
      coreClassName="flex flex-col gap-5 p-6 text-on-highlight sm:p-8"
    >
      <h3 className="font-display text-h3 font-semibold">Find me online</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map(({ label, href, Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center gap-2 rounded-full bg-on-highlight/10 px-4 py-2.5 text-small font-medium transition-colors duration-300 hover:bg-on-highlight/20 focus-visible:outline-on-highlight"
            >
              <Icon weight="light" size={18} />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </BentoCell>
  );
}
