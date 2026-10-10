import { experience } from "@/lib/data/experience";
import { profile } from "@/lib/data/profile";
import { productionUrl, site, socials } from "@/lib/site";

const work = experience.find((e) => e.kind === "work")!;
const school = experience.find((e) => e.kind === "education")!;

/**
 * schema.org ProfilePage + Person for name searches ("Jhestin Digap", "Jhestin", "Jhest", "Digap").
 * `alternateName` covers the nickname and first name; `sameAs` ties the site to every public profile so
 * search engines treat them as one person. Rendered on Home only (the profile page).
 */
export function PersonJsonLd() {
  const person = {
    "@type": "Person",
    "@id": `${productionUrl}/#person`,
    name: site.name,
    alternateName: [profile.nickname, "Jhestin"],
    givenName: "Jhestin",
    familyName: "Digap",
    url: productionUrl,
    image: `${productionUrl}${profile.portrait.src}`,
    jobTitle: site.role,
    worksFor: { "@type": "Organization", name: "Rival" },
    alumniOf: { "@type": "CollegeOrUniversity", name: school.org },
    address: { "@type": "PostalAddress", addressLocality: "Antipolo City", addressRegion: "Rizal", addressCountry: "PH" },
    knowsAbout: ["Web development", "React", "Next.js", "TypeScript", "UI/UX design"],
    sameAs: socials.map((s) => s.href),
    description: `${site.role} from Antipolo City, Philippines. ${work.title} at ${work.org}.`,
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: productionUrl,
    name: site.title,
    mainEntity: person,
  };
  return (
    <script
      type="application/ld+json"
      // Escaping "<" keeps any data string from closing the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
