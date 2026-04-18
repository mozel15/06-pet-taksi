import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gizlilik ve aydınlatma",
  description: `${site.name} — kişisel verilerin işlenmesi hakkında bilgilendirme.`,
};

export default function GizlilikPage() {
  return (
    <div className="pb-20">
      <section className="border-b border-cab-800 bg-cab-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="inline-flex rounded-full border border-brand-500/40 bg-cab-900/80 px-3 py-1 text-xs font-semibold tracking-wider text-brand-300">
            GİZLİLİK
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Aydınlatma metni
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cab-200 sm:text-base">
            Bu metin bilgilendirme amaçlıdır; hukuki danışmanlık yerine geçmez. Özel talepleriniz
            için iletişim kanallarımızdan bize ulaşabilirsiniz.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 pt-10 sm:px-6">
        <article className="premium-card-dark space-y-5 p-6 text-sm leading-relaxed text-cab-200 sm:p-10">
          <section>
            <h2 className="font-display text-xl font-semibold text-white">Veri sorumlusu</h2>
            <p className="mt-2">
              İletişim ve operasyon süreçleri kapsamında paylaştığınız bilgiler {site.name}{" "}
              tarafından talep edilen hizmetin planlanması ve yürütülmesi amacıyla işlenir.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-white">İşlenen veriler</h2>
            <p className="mt-2">
              Örneğin ad-soyad, telefon numarası, güzergâh ve evcil dost ile ilgili operasyonel
              bilgiler; hizmetin güvenli ve zamanında yürütülmesi için gereken ölçüde kullanılır.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-white">WhatsApp ve iletişim</h2>
            <p className="mt-2">
              WhatsApp üzerinden paylaştığınız içerikler, ilgili platformun kendi gizlilik politikasına
              tabidir. Talebinizi hızlı yönetebilmemiz için önerilen kanallardan biri WhatsApp’tır.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-white">Haklarınız</h2>
            <p className="mt-2">
              KVKK kapsamındaki talepleriniz için bizimle{" "}
              <Link href="/iletisim" className="font-semibold text-brand-300 underline-offset-4 hover:underline">
                iletişim
              </Link>{" "}
              üzerinden iletişime geçebilirsiniz.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
