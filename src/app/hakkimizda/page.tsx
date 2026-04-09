import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${site.name} — Ankara merkezli, Türkiye geneli pet taksi ve güvenli taşıma.`,
};

export default function HakkimizdaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-sm font-medium text-cab-700">Hakkımızda</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-cab-950 sm:text-4xl">
        {site.name} kimdir?
      </h1>
      <div className="mt-8 space-y-4 text-base leading-relaxed text-cab-800/90">
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
          Ankara'nın güven veren pet taksi markalarından biri olmaktır.
        </p>
      </div>
    </div>
  );
}
