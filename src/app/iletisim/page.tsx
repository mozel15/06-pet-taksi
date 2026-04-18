import type { Metadata } from "next";
import Link from "next/link";
import { site, telHref, whatsappHref } from "@/lib/site";
import { buttonClass } from "@/components/ui/buttonStyles";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${site.name} iletişim — öncelikli kanal WhatsApp; telefon ve e-posta.`,
};

export default function IletisimPage() {
  const phone = telHref(site.phoneDigits);
  const wa = whatsappHref(
    site.whatsappDigits,
    `Merhaba, ${site.name} için bilgi almak istiyorum.`,
  );

  return (
    <div className="pb-16">
      <section className="border-b border-cab-800 bg-cab-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="inline-flex rounded-full border border-brand-500/40 bg-cab-900/80 px-3 py-1 text-xs font-semibold tracking-wider text-brand-300">
            İLETİŞİM
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            WhatsApp öncelikli iletişim
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cab-200 sm:text-base">
            Teklif ve kesin plan için en hızlı kanal <strong className="text-white">WhatsApp</strong>.
            Alternatif olarak arayabilir veya{" "}
            <Link href="/rezervasyon" className="font-semibold text-brand-300 underline-offset-4 hover:underline">
              rezervasyon formu
            </Link>{" "}
            ile talebinizi mesaj olarak hazırlayabilirsiniz.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="premium-card-dark section-reveal p-8">
            <h2 className="font-display text-xl font-semibold text-white">WhatsApp (önerilen)</h2>
            <p className="mt-2 text-sm text-cab-200">
              Tarih, kalkış / varış, evcil dost türü ve özel notları iletirseniz süreci hızlandırırız.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className={`${buttonClass("whatsapp")} mt-6 inline-flex`}
            >
              WhatsApp ile yaz
            </a>
          </div>
          <div className="premium-card-dark section-reveal p-8">
            <h2 className="font-display text-xl font-semibold text-white">Telefon</h2>
            <p className="mt-2 text-sm text-cab-200">
              Doğrudan arayıp müsaitlik ve güzergâh netleştirmesi yapabilirsiniz.
            </p>
            <a href={phone} className={`${buttonClass("primary")} mt-6 inline-flex`}>
              {site.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="premium-card-dark mt-8 border-dashed p-6">
          <p className="text-sm font-semibold text-white">E-posta (isteğe bağlı)</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-block text-sm font-medium text-cab-100 hover:text-brand-300 hover:underline"
          >
            {site.email}
          </a>
          <p className="mt-3 text-xs text-cab-300">
            E-posta adresini değiştirmek için{" "}
            <code className="rounded bg-cab-900 px-1 py-0.5 text-[0.8rem] text-brand-200">
              NEXT_PUBLIC_EMAIL
            </code>{" "}
            ortam değişkenini kullanın.
          </p>
        </div>
      </div>
    </div>
  );
}
