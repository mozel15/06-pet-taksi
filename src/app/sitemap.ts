import type { MetadataRoute } from "next";
import { getPublicSiteUrl } from "@/lib/publicSiteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getPublicSiteUrl();
  const routes = [
    "",
    "/hizmetler",
    "/hakkimizda",
    "/sss",
    "/iletisim",
    "/rezervasyon",
    "/gizlilik",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
