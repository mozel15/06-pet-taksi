import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { site } from "@/lib/site";
import { JsonLdOrganization } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/icon.svg",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://kilicankarapettaksi.example.com",
  ),
  title: {
    default: `${site.name} | Ankara pet taksi`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "pet taksi",
    "Ankara pet taksi",
    "evcil hayvan transfer",
    "şehirler arası pet transfer",
    "WhatsApp ile pet taksi",
    site.shortName,
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.name,
    description: site.description,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${display.variable}`}>
      <body className="page-shell min-h-dvh font-sans">
        <JsonLdOrganization />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
