import Link from "next/link";
import {
  differentiators,
  processSteps,
  roadmap,
  services,
} from "@/content/home";
import { site, telHref, whatsappHref } from "@/lib/site";
import { buttonClass } from "@/components/ui/buttonStyles";

export function HomePageSections() {
  const phone = telHref(site.phoneDigits);
  const wa = whatsappHref(
    site.whatsappDigits,
    "Merhaba, Kılıç Ankara Pet Taksi için bilgi almak istiyorum.",
  );

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((item) => (
            <article key={item.title} className="premium-card-dark section-reveal p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">
                Hizmet
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-cab-200">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-cab-800 bg-cab-950/55">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">Neden biz</p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-white">
                Güven, disiplin ve iletişim
              </h2>
            </div>
            <Link
              href="/hizmetler"
              className="text-sm font-semibold text-cab-100 underline-offset-4 hover:text-brand-300 hover:underline"
            >
              Tüm hizmet detaylarını gör
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {differentiators.map((item) => (
              <div key={item.title} className="premium-card-dark p-5">
                <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cab-200">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="premium-card-dark p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">Süreç</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-white">Transfer nasıl ilerler?</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.title} className="premium-card-dark bg-cab-900/65 p-5">
                <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cab-200">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-cab-800 bg-gradient-to-b from-cab-950/80 to-cab-900/70">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-white">Ürün yol haritası</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-cab-200">
            Bu site Next.js + Tailwind ile modüler yapıda geliştirilir; ileride .NET tabanlı bir API
            ile entegrasyon için form ve içerik katmanları sözleşmeye uyumlu tutulur.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {roadmap.map((item) => (
              <li key={item} className="premium-card-dark rounded-xl border-dashed px-4 py-4 text-sm text-cab-100">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="overflow-hidden rounded-[2rem] border border-brand-500/50 bg-gradient-to-br from-cab-950 via-cab-900 to-cab-950 px-6 py-12 text-center text-white shadow-soft sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">
            Randevu ve bilgi
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">
            WhatsApp ile başlayın
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-cab-200">
            Önerilen akış:{" "}
            <strong className="text-white">WhatsApp</strong> veya{" "}
            <Link href="/rezervasyon" className="font-semibold text-brand-300 underline-offset-4 hover:underline">
              rezervasyon formu
            </Link>{" "}
            → mesajınız tek tıkla gönderilir → operasyon onayı için yine WhatsApp kullanılır.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={wa} target="_blank" rel="noreferrer" className={buttonClass("whatsapp")}>
              WhatsApp’a geç
            </a>
            <a href={phone} className={buttonClass("primary")}>
              Telefon: {site.phoneDisplay}
            </a>
            <Link href="/rezervasyon" className={buttonClass("outline")}>
              Formu doldur
            </Link>
            <Link href="/iletisim" className={buttonClass("outline")}>
              İletişim bilgileri
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
