import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import type { SocialId } from "@/lib/site";

const icons: Record<SocialId, Icon> = {
  github: GithubLogo,
  linkedin: LinkedinLogo,
  facebook: FacebookLogo,
  instagram: InstagramLogo,
  youtube: YoutubeLogo,
  x: XLogo,
};

/** Social platform glyph (Phosphor, same family as the rest of the site's icons). Decorative. */
export function SocialIcon({ id, size = 20, className }: { id: SocialId; size?: number; className?: string }) {
  const Glyph = icons[id];
  return <Glyph weight="light" size={size} className={className} aria-hidden />;
}
