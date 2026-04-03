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
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-sm font-medium text-cab-700">SSS</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-cab-950 sm:text-4xl">
        Sık sorulan sorular
      </h1>
      <p className="mt-4 text-cab-800/85">
        Aklınıza takılan bir şey olursa{" "}
        <Link href="/iletisim" className="font-semibold text-cab-900 underline hover:text-brand-700">
          iletişim
        </Link>{" "}
        sayfasından yazabilirsiniz.
      </p>
      <dl className="mt-10 space-y-4">
        {faqs.map((item) => (
          <div
            key={item.q}
            className="rounded-3xl border border-cab-100 bg-white p-6 shadow-card"
          >
            <dt className="font-display text-lg font-semibold text-cab-950">
              {item.q}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-cab-800/85">{item.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
