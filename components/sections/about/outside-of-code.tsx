import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { YouTubeLite } from "@/components/ui/youtube-lite";
import { about } from "@/lib/data/profile";

/** Personal section from V1: music, games and anime, with the one-man band cover as a click-to-play video. */
export function OutsideOfCode() {
  const { title, text, video } = about.hobbies;
  return (
    <section aria-labelledby="outside-of-code" className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 id="outside-of-code" className="text-h1 font-semibold text-fg">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-fg-muted">{text}</p>
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
