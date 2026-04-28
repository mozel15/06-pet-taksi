import type { Metadata } from "next";
import { HomeHero } from "@/components/marketing/HomeHero";
import { HomePageSections } from "@/components/marketing/HomePageSections";
import { site } from "@/lib/site";
import { createPageMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "Ana Sayfa",
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomePageSections />
    </>
  );
}
