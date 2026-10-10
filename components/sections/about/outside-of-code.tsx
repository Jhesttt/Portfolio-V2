import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/social-icon";
import { YouTubeLite } from "@/components/ui/youtube-lite";
import { about } from "@/lib/data/profile";
import { socials } from "@/lib/site";

/**
 * Personal section from V1: music, games and anime, the one-man band cover as a click-to-play video,
 * and every social profile with its handle.
 */
export function OutsideOfCode() {
  const { title, text, video } = about.hobbies;
  return (
    <section aria-labelledby="outside-of-code" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 id="outside-of-code" className="text-h1 font-semibold text-fg">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-fg-muted">{text}</p>

          <h3 className="mt-10 text-small font-medium text-fg">Find me online</h3>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-full border border-line bg-surface/50 py-1.5 pr-4 pl-1.5 transition-colors duration-300 hover:border-line-strong hover:bg-surface-hover"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-chip text-accent">
                    <SocialIcon id={social.id} size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-small leading-tight font-medium text-fg">{social.label}</span>
                    <span className="block truncate text-small leading-tight text-fg-muted">{social.handle}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-7">
          <GlassCard coreClassName="p-0">
            <YouTubeLite id={video.id} title={video.title} />
          </GlassCard>
          <p className="mt-3 px-2 text-small text-fg-subtle">{video.title}</p>
        </Reveal>
      </div>
    </section>
  );
}
