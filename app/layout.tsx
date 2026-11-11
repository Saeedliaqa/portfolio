import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/links";
import { profile } from "@/content/profile";
import { productionUrl } from "@/content/site";
import "./globals.css";

const geist = localFont({
  src: "./fonts/geist-latin.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  title: { default: `${profile.name} | Software Developer`, template: `%s | ${profile.name}` },
  applicationName: `${profile.name} Portfolio`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <a className="skip-link" href="#main">Skip to main content</a>
        <SiteHeader name={profile.shortName} />
        <main id="main" tabIndex={-1}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
