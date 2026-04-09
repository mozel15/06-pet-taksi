import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sık sorulan sorular",
  description: `${site.name} SSS — pet taksi, rezervasyon ve hizmet bölgeleri hakkında sorular.`,
};

const faqs = [
  {
    q: "Hangi bölgelere hizmet veriyorsunuz?",
    a: "Merkezimiz Ankara. Şehir içi transferlerin yanı sıra, planlı organizasyonla Türkiye genelinde şehirler arası yolculuklar için de iletişime geçebilirsiniz; güzergâh ve tarih netleştikçe değerlendiririz.",
  },
  {
    q: "Ücret nasıl belirleniyor?",
    a: "Mesafe, süre, güzergâh ve özel ihtiyaçlara göre değişir. Net teklif için WhatsApp veya telefon ile tarih ve adres bilgisi paylaşmanız en doğrusudur.",
  },
  {
    q: "Nasıl rezervasyon yapılır?",
    a: "WhatsApp veya telefon üzerinden tarih-saat ve adresleri netleştirerek. Size dönüş yapıldıktan sonra randevu kesinleşir.",
  },
  {
    q: "Taşıma kutusu şart mı?",
    a: "Güvenlik ve konfor için uygun taşıma ekipmanı önemlidir. Duruma göre birlikte netleştiririz; önceden haber vermeniz yeterli.",
  },
  {
    q: "Web sitesinde ödeme var mı?",
    a: "Bu sitede ödeme entegrasyonu yoktur; iletişim kanalları üzerinden süreç yürütülür.",
  },
];

export default function SssPage() {
  return (
    <div className="pb-16">
      <section className="border-b border-cab-200 bg-gradient-to-b from-cab-950 to-cab-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="inline-flex rounded-full border border-brand-500/40 bg-cab-900/80 px-3 py-1 text-xs font-semibold tracking-wider text-brand-300">
            SSS
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Sık sorulan sorular
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-cab-200 sm:text-base">
            Aklınıza takılan bir şey olursa{" "}
            <Link href="/iletisim" className="font-semibold text-brand-300 underline hover:text-brand-200">
              iletişim
            </Link>{" "}
            sayfasından yazabilirsiniz.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 pt-12 sm:px-6">
      <dl className="space-y-4">
        {faqs.map((item) => (
          <div
            key={item.q}
            className="premium-card section-reveal p-6"
          >
            <dt className="font-display text-lg font-semibold text-cab-950">
              {item.q}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-cab-800/85">{item.a}</dd>
          </div>
        ))}
      </dl>
      </div>
    </div>
  );
}
