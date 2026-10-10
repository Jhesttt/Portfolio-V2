import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { DirectionalLink } from "@/components/ui/directional-link";
import { links, nav, site } from "@/lib/site";

const socials = [
  { href: links.github, label: "GitHub", Icon: GithubLogo, external: true },
  { href: links.linkedin, label: "LinkedIn", Icon: LinkedinLogo, external: true },
  { href: `mailto:${links.email}`, label: "Email", Icon: EnvelopeSimple, external: false },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-24 border-t border-line">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
        <div className="max-w-sm">
          <p className="font-display text-h3 font-semibold text-fg">{site.name}</p>
          <p className="mt-2 text-small text-fg-muted">
            {site.role}. Building with Next.js, React and TypeScript from {site.location}.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <DirectionalLink
                    href={item.href}
                    className="text-small text-fg-muted transition-colors duration-300 hover:text-fg"
                  >
                    {item.label}
                  </DirectionalLink>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center gap-2">
            {socials.map(({ href, label, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="grid size-10 place-items-center rounded-full border border-line text-fg-muted transition-[color,background-color,box-shadow] duration-300 hover:bg-surface-hover hover:text-fg hover:shadow-glow"
                >
                  <Icon weight="light" size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto w-full max-w-7xl px-4 pb-8 text-small text-fg-subtle sm:px-6 lg:px-8">
        &copy; {site.copyrightYear} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
