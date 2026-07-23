import type { Metadata } from "next";
import ReactDOM from "react-dom";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const siteName =
  process.env.NEXT_PUBLIC_APP_NAME ?? "DRID — University of Benin";
const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://drid-uniben.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DRID — Directorate of Research, Innovation & Development",
    template: "%s · DRID · University of Benin",
  },
  description:
    "The University of Benin's home for research funding, grants, and programmes — administered by the Directorate of Research, Innovation and Development (DRID).",
  applicationName: siteName,
  keywords: [
    "DRID",
    "University of Benin",
    "research grants",
    "TETFund",
    "Institution-Based Research",
    "research proposals",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "DRID · University of Benin",
    title: "DRID — Directorate of Research, Innovation & Development",
    description:
      "Research funding, grants, and programmes at the University of Benin.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Eagerly fetch the hero background (used as a CSS background-image, so it
  // can't take <Image priority>). A high-priority preload removes the browser's
  // default late/lazy discovery of the CSS url() and pulls it into the head.
  ReactDOM.preload("/hero-bg.webp", {
    as: "image",
    fetchPriority: "high",
  });

  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${hanken.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
