import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jemarie Adame | Digital Marketing, CRM & Web Support",
  description: "Jemarie Adame's portfolio: digital and email marketing, GoHighLevel CRM support, WordPress websites, landing pages, and transparent AI-assisted web projects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
