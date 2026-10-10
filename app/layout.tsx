import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://socialswithjem.site";
const title = "Jemarie Adame | Digital Marketing, SEO, CRM & Web Support";
const description = "Jemarie Adame offers digital and email marketing, foundational SEO and AI search readiness, GoHighLevel CRM support, WordPress websites, and landing pages.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Jemarie Adame Portfolio",
  authors: [{ name: "Jemarie Adame", url: siteUrl }],
  creator: "Jemarie Adame",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: siteUrl,
    siteName: "Jemarie Adame Portfolio",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Jemarie Adame",
        url: `${siteUrl}/`,
        jobTitle: "Digital and Email Marketer",
        knowsAbout: [
          "Digital marketing",
          "Email marketing",
          "Search engine optimization",
          "Answer engine optimization",
          "GoHighLevel CRM",
          "WordPress",
          "Landing pages",
          "AI-assisted web development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "Jemarie Adame Portfolio",
        description,
        author: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
