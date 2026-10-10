import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Per-page metadata: title, description, canonical URL and matching Open Graph / Twitter text.
 * The share image itself comes from app/opengraph-image.tsx (file convention, applies to every page).
 */
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Jhestin Digap, Web Developer with a designer's touch, from Antipolo City, Philippines.",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  /** Page name. Omit on Home, which uses the site title as-is. */
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : site.title;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_PH",
      url: path,
      title: fullTitle,
      description,
      // Setting openGraph in a page replaces the inherited fields, including the file-based image, so the
      // shared card from app/opengraph-image.tsx is referenced explicitly on every page except Home.
      ...(title ? { images: [shareImage] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(title ? { images: [shareImage] } : {}),
    },
  };
}
