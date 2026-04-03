export const site = {
  name: "06 Pet Taksi",
  shortName: "06 Pet Taksi",
  tagline:
    "Ankara merkezli, sevgi ve özenle pet taşıma — şehir içi ve Türkiye geneli.",
  description:
    "06 Pet Taksi: Evcil dostlarınız için güvenli, konforlu taşıma. Telefon veya WhatsApp ile hemen bilgi alın; randevu ve rotayı birlikte planlayalım.",
  city: "Ankara",
  country: "Türkiye",
  /** Ekranda gösterilecek */
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+90 543 246 48 79",
  /** tel: ve WhatsApp için sadece rakamlar, ülke koduyla */
  phoneDigits: process.env.NEXT_PUBLIC_PHONE_DIGITS ?? "905432464879",
  whatsappDigits: process.env.NEXT_PUBLIC_WHATSAPP_DIGITS ?? "905432464879",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "info@06pettaksi.com",
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "",
  },
} as const;

export function telHref(digits: string) {
  return `tel:+${digits.replace(/^\+/, "")}`;
}

export function whatsappHref(digits: string, message?: string) {
  const q = message
    ? `?text=${encodeURIComponent(message)}`
    : "";
  return `https://wa.me/${digits.replace(/\D/g, "")}${q}`;
}
