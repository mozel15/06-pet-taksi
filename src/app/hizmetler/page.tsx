import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: `${site.name} — şehir içi ve şehirler arası pet taksi, veteriner transferi ve daha fazlası.`,
};

const highlights = [
  {
    emoji: "🕐",
    title: "Esnek planlama",
    text: "Müsaitliğe göre randevu; şehir içi ve şehirler arası için önceden net tarih-saat.",
  },
  {
    emoji: "❄️",
    title: "Konforlu ortam",
    text: "Klimalı araç ve hijyenik taşıma anlayışı; dostunuzun yolculuk konforu öncelik.",
  },
  {
    emoji: "🧑‍⚕️",
    title: "Veteriner & bakım",
    text: "Kontrol, tedavi veya bakım randevularına zamanında ve sakin sürüşle eşlik.",
  },
  {
    emoji: "🐕",
    title: "Şehir içi & şehirler arası",
    text: "Ankara içi adresler arası ve planlı şekilde Türkiye geneli transferler.",
  },
  {
    emoji: "🦴",
    title: "Yol boyu destek",
    text: "İhtiyaç halinde su ve mama desteği; önceden haber vermeniz yeterli.",
  },
  {
    emoji: "❤️",
    title: "Sevgiyle refakat",
    text: "Sakin iletişim ve özenli yaklaşım; her canlının ritmine saygı duyuyoruz.",
  },
];

const detailBlocks = [
  {
    title: "Şehir içi pet taksi",
    body: "Ankara’da adresler arası güvenli ulaşım. Randevu saatine uygun planlama ve yolculuk öncesi kısa bilgilendirme.",
  },
  {
    title: "Şehirler arası transfer",
    body: "Türkiye genelinde önceden planlanan yolculuklar. Mesafe ve güzergâha göre teklif; yolculuk öncesi net iletişim.",
  },
  {
    title: "Havaalanı / otogar",
    body: "Uygun olduğumuzda, önceden netleştirilmiş saatlerle terminal transferleri (müsaitlik ve rota onayı ile).",
  },
];

export default function HizmetlerPage() {
  return (
    <div className="pb-16">
      <section className="relative overflow-hidden border-b border-cab-200 bg-cab-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="inline-flex rounded-full border border-brand-500/40 bg-cab-900/75 px-3 py-1 text-xs font-semibold tracking-wider text-brand-300">
            HİZMETLER
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Profesyonel pet transfer paketleri
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-cab-200 sm:text-base">
            Ankara içi ve Türkiye geneli taşımalar için modüler bir operasyon yapısı
            sunuyoruz. İhtiyacınıza göre hizmet başlığını belirleyip size net plan
            ve zamanlama iletiyoruz.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <li
            key={item.title}
            className="premium-card section-reveal flex flex-col p-5"
          >
            <span className="text-2xl" aria-hidden>
              {item.emoji}
            </span>
            <span className="mt-3 font-display text-lg font-semibold text-cab-950">
              {item.title}
            </span>
            <p className="mt-2 text-sm leading-relaxed text-cab-800/85">
              {item.text}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="mt-16 font-display text-xl font-semibold text-cab-950 sm:text-2xl">
        Detaylı bilgi
      </h2>
      <ul className="mt-6 space-y-4">
        {detailBlocks.map((item) => (
          <li
            key={item.title}
            className="premium-card p-6"
          >
            <h3 className="font-display text-lg font-semibold text-cab-950">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cab-800/85">
              {item.body}
            </p>
          </li>
        ))}
      </ul>

      <div className="premium-card mt-10 p-6 sm:p-8">
        <p className="text-sm font-semibold text-cab-950">Not</p>
        <p className="mt-2 text-sm text-cab-800/85">
          Bu sayfa bilgilendirme amaçlıdır. Fiyat, müsaitlik ve özel talepler için{" "}
          <Link
            href="/iletisim"
            className="font-semibold text-cab-900 underline hover:text-brand-700"
          >
            iletişim
          </Link>{" "}
          üzerinden yazmanız yeterli.
        </p>
      </div>
      </div>
    </div>
  );
}
