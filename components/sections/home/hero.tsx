import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { IntroItem } from "@/components/ui/intro";
import { profile } from "@/lib/data/profile";
import { links } from "@/lib/site";
import { ProfileCard } from "./profile-card";

/**
 * Split hero: text on the left (greeting, headline, pitch, CTAs), a quick-facts profile card on the
 * right. Stacks on mobile with the card under the CTAs. Simple staggered fade-up on load.
 *
 * Spacing rule for page intros: top padding clears the fixed nav (72px) by about the same amount as the
 * next section's top padding (pt-section), and there is no bottom padding, so the space above and
 * below the intro reads as equal.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto w-full max-w-7xl px-4 pt-36 sm:px-6 lg:px-8 lg:pt-44"
    >
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7 xl:col-span-8">
          <IntroItem index={0}>
            <p className="inline-flex rounded-full border border-line bg-surface/50 px-3.5 py-1 text-small font-medium text-accent">
              {profile.greeting}
            </p>
          </IntroItem>
          <IntroItem index={1}>
            <h1 id="hero-title" className="mt-6 text-hero font-semibold text-fg">
              I&apos;m Jhestin, a <span className="whitespace-nowrap text-accent">Web Developer</span> with a
              designer&apos;s touch.
            </h1>
          </IntroItem>
          <IntroItem index={2}>
            <p className="mt-6 max-w-xl text-body text-fg-muted sm:text-[1.0625rem]">{profile.pitch}</p>
          </IntroItem>
          <IntroItem index={3}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/projects" icon={<ArrowUpRight weight="light" size={18} />}>
                View Projects
              </Button>
              <Button
                href={links.resume}
                download="Jhestin-Digap-Resume.pdf"
                variant="secondary"
                icon={<DownloadSimple weight="light" size={18} />}
              >
                Download Resume
              </Button>
            </div>
          </IntroItem>
        </div>

        <IntroItem index={4} className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none xl:col-span-4">
          <ProfileCard />
        </IntroItem>
      </div>
    </section>
  );
}
