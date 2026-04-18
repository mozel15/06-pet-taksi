import type { MetadataRoute } from "next";

function baseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://kilicankarapettaksi.example.com";
}

export default function robots(): MetadataRoute.Robots {
  const base = baseUrl().replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
