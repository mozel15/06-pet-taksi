import type { MetadataRoute } from "next";

function baseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://kilicankarapettaksi.example.com";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = baseUrl().replace(/\/$/, "");
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
