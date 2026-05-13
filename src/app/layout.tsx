import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";
import { createOrganizationSchema, createWebsiteSchema } from "@/lib/structured-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Digital Energy Media - AI Visibility Lab",
    template: "%s | Digital Energy Media",
  },
  description: siteConfig.description,
  keywords: [
    "Digital Energy Media",
    "AI visibility lab",
    "website launch sprint",
    "AI content systems",
    "automation workflows",
    "St. Louis digital media",
    "small business website systems",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Digital Energy Media - AI Visibility Lab",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1792,
        height: 1024,
        alt: "Abstract AI visibility command center with digital energy routes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Energy Media - AI Visibility Lab",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd id="organization-schema" data={createOrganizationSchema()} />
        <JsonLd id="website-schema" data={createWebsiteSchema()} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
