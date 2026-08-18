import type { Metadata } from "next";
import "./globals.css";
import "./updates.css";

export const metadata: Metadata = {
  title: "Jemarie Adame | Digital Marketing & AI-Assisted Web",
  description: "Digital and email marketing, landing pages, website support, and transparent AI-assisted business tool development.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
