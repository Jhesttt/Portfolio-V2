/**
 * Single source for site-wide constants: identity, route order, contact links.
 * Route order drives page-transition direction (later in the list = "forward").
 */

export const site = {
  name: "Jhestin Digap",
  role: "Web Developer",
  title: "Jhestin Digap | Web Developer",
  description:
    "Jhestin Digap is a Web Developer from the Philippines specializing in modern web development, React, Next.js, JavaScript, and full-stack applications.",
  location: "Antipolo City, PH",
  /** Static year: reading the clock in a Server Component breaks prerendering under cacheComponents. */
  copyrightYear: 2026,
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export type NavHref = (typeof nav)[number]["href"];

export const links = {
  email: "djhestin@gmail.com",
  linkedin: "https://www.linkedin.com/in/jhestin-digap-123462318",
  github: "https://github.com/Jhesttt",
  resume: "/resume/Jhestin-Digap-Resume.pdf",
} as const;

/** Every public profile, with the handle shown on the About page (from V1). */
export const socials = [
  { id: "github", label: "GitHub", handle: "@Jhesttt", href: links.github },
  { id: "linkedin", label: "LinkedIn", handle: "Jhestin Digap", href: links.linkedin },
  { id: "facebook", label: "Facebook", handle: "Jhestin Digap", href: "https://web.facebook.com/jhest.digap" },
  { id: "instagram", label: "Instagram", handle: "@jhesttt", href: "https://www.instagram.com/jhesttt" },
  { id: "youtube", label: "YouTube", handle: "@jhestt", href: "https://www.youtube.com/@jhestt" },
  { id: "x", label: "X", handle: "@djhestin", href: "https://x.com/djhestin" },
] as const;

export type SocialId = (typeof socials)[number]["id"];

/** Browser UI tint. Mirrors the bg token in each theme (meta tags cannot read CSS variables). */
export const themeColor = {
  light: "#f4faf7",
  dark: "#091413",
} as const;

export function routeIndex(pathname: string) {
  const exact = nav.findIndex((item) => item.href === pathname);
  if (exact !== -1) return exact;
  return nav.findIndex(
    (item) => item.href !== "/" && pathname.startsWith(`${item.href}/`),
  );
}
