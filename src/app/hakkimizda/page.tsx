import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${site.name} — Ankara merkezli, Türkiye geneli pet taksi ve güvenli taşıma.`,
};

export default function HakkimizdaPage() {
  return (
    <div className="pb-16">
      <section className="border-b border-cab-200 bg-gradient-to-b from-cab-950 to-cab-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="inline-flex rounded-full border border-brand-500/40 bg-cab-900/80 px-3 py-1 text-xs font-semibold tracking-wider text-brand-300">
            HAKKIMIZDA
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            {site.name} kimdir?
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-cab-200 sm:text-base">
            Güven odaklı operasyon, net iletişim ve kurumsal disiplin ile hizmet veren
            bir Ankara pet transfer markasıyız.
          </p>
        </div>
      </section>
      <div className="mx-auto mt-12 max-w-4xl px-4 sm:px-6">
      <div className="premium-card section-reveal p-7 sm:p-9">
      <div className="space-y-4 text-base leading-relaxed text-cab-800/90">
        <p>
          <strong>{site.name}</strong>, evcil hayvanların güvenli ve sakin bir
          şekilde taşınması için çalışan bir pet taksi hizmetidir. Merkezimiz{" "}
          <strong>{site.city}</strong> olmakla birlikte, planlı organizasyonla{" "}
          <strong>{site.country}</strong> genelinde hizmet vermeyi
          hedefliyoruz.
        </p>
        <p>
          Önceliğimiz; doğru iletişim, net randevu ve yolculuk sırasında can
          dostunuzun konforu. Web sitemiz şimdilik sizi doğru kanallara
          yönlendiren sade bir vitrindir — asıl süreç telefon ve WhatsApp
          üzerinden kişiselleştirilir.
        </p>
        <p>
          Hedefimiz, her transferde aynı kalite standardını koruyarak uzun vadede
          Ankara&apos;nın güven veren pet taksi markalarından biri olmaktır.
        </p>
      </div>
      </div>
      </div>
    </div>
  );
}
