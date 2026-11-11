import type { Metadata } from "next";
import { profile } from "./profile";

export const productionUrl = "https://portfolio-saeed-a040.vercel.app";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const sharingTitle = `${title} | ${profile.name}`;

  return {
    title: { absolute: sharingTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: sharingTitle,
      description,
      url: path,
      siteName: profile.name,
      locale: "en",
      type: "website",
      images: [{ url: "/images/social-card.jpg", width: 1200, height: 630, alt: `${profile.name}, software developer in Cottbus, Germany` }],
    },
    twitter: {
      card: "summary_large_image",
      title: sharingTitle,
      description,
      images: ["/images/social-card.jpg"],
    },
  };
}
