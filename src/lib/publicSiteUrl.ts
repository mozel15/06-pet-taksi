/**
 * Kanonik site kökü (metadata, sitemap, robots, JSON-LD).
 * - Üretim: Vercel’de `NEXT_PUBLIC_SITE_URL` olarak özel alanınızı verin.
 * - Önizleme: Ayarlı değilse Vercel’in enjekte ettiği `VERCEL_URL` kullanılır.
 */
export function getPublicSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }

  return "https://kilicankarapettaksi.example.com";
}
