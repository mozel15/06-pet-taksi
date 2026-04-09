import type { Metadata } from "next";
import { site, telHref, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${site.name} iletişim — telefon ve WhatsApp.`,
};

export default function IletisimPage() {
  const phone = telHref(site.phoneDigits);
  const wa = whatsappHref(
    site.whatsappDigits,
    `Merhaba, ${site.name} için bilgi almak istiyorum.`,
  );

  return (
    <div className="pb-16">
      <section className="border-b border-cab-200 bg-cab-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="inline-flex rounded-full border border-brand-500/40 bg-cab-900/80 px-3 py-1 text-xs font-semibold tracking-wider text-brand-300">
            İLETİŞİM
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Hızlı iletişim, net plan
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cab-200 sm:text-base">
            Telefon veya WhatsApp üzerinden yazın; müsaitlik ve tarih bilgisiyle
            size hızlıca dönüş sağlayalım.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="premium-card section-reveal p-8">
          <h2 className="font-display text-xl font-semibold text-cab-950">
            Telefon
          </h2>
          <p className="mt-2 text-sm text-cab-700">
            Doğrudan arayıp ulaşabilirsiniz.
          </p>
          <a
            href={phone}
            className="mt-6 inline-flex rounded-full bg-cab-950 px-6 py-3 text-sm font-semibold text-brand-400 shadow-soft ring-2 ring-brand-500/40 hover:bg-cab-900"
          >
            {site.phoneDisplay}
          </a>
        </div>
        <div className="premium-card section-reveal p-8">
          <h2 className="font-display text-xl font-semibold text-cab-950">
            WhatsApp
          </h2>
          <p className="mt-2 text-sm text-cab-700">
            Konum, tarih ve evcil hayvan türü bilgisini yazmanız süreci
            hızlandırır.
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:brightness-95"
          >
            WhatsApp ile yaz
          </a>
        </div>
      </div>

      <div className="premium-card mt-8 border-dashed p-6">
        <p className="text-sm font-semibold text-cab-950">E-posta (isteğe bağlı)</p>
        <a
          href={`mailto:${site.email}`}
          className="mt-2 inline-block text-sm font-medium text-cab-800 hover:text-brand-700 hover:underline"
        >
          {site.email}
        </a>
        <p className="mt-3 text-xs text-cab-600">
          E-posta adresini gerçek bir adresle değiştirmek için{" "}
          <code className="rounded bg-white px-1 py-0.5 text-[0.8rem]">
            NEXT_PUBLIC_EMAIL
          </code>{" "}
          ortam değişkenini kullanın.
        </p>
      </div>
      </div>
    </div>
  );
}
