import Link from "next/link";
import { HeroPattern } from "@/components/HeroPattern";
import { site, telHref, whatsappHref } from "@/lib/site";

const services = [
  {
    emoji: "🐕",
    title: "Şehir içi transfer",
    text: "Ankara’da adresler arası güvenli ulaşım; randevuya uygun saatler ve net bilgilendirme.",
  },
  {
    emoji: "🚐",
    title: "Şehirler arası",
    text: "Türkiye genelinde önceden planlanan yolculuklar — mesafe ve güzergâha göre teklif.",
  },
  {
    emoji: "🏥",
    title: "Özel durumlar",
    text: "Veteriner, bakım veya terminallere özenli transfer; ihtiyaca göre rota.",
  },
];

const trust = [
  {
    title: "Sakin sürüş",
    text: "Stresi azaltmak için sakin tempo ve dikkatli güzergâh tercihi.",
  },
  {
    title: "Hijyen ve konfor",
    text: "Taşıma sırasında temiz ortam; taşıyıcı ve güvenlik önceliğimizdir.",
  },
  {
    title: "Doğrudan iletişim",
    text: "WhatsApp veya telefonla hızlı yanıt; tarih ve adresi birlikte netleştiririz.",
  },
];

const comingSoon = [
  {
    title: "Rota ve süre özeti",
    text: "Yakında: planlanan yolculuk için tahmini süre ve güzergâh bilgisi.",
  },
  {
    title: "Kampanyalar",
    text: "Yakında: dönemsel indirimler ve sabit hatlar için duyurular.",
  },
  {
    title: "Duyurular",
    text: "Yakında: yoğun günler ve müsaitlik güncellemeleri burada olacak.",
  },
];

export default function HomePage() {
  const phone = telHref(site.phoneDigits);
  const wa = whatsappHref(
    site.whatsappDigits,
    "Merhaba, 06 Pet Taksi için bilgi almak istiyorum.",
  );

  return (
    <>
      <section className="relative overflow-hidden border-b border-cab-200 bg-gradient-to-b from-brand-50 to-white">
        <HeroPattern />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-cab-200 bg-white/90 px-3 py-1 text-xs font-medium text-cab-900 shadow-sm ring-2 ring-brand-400/30">
              <span aria-hidden>📍</span> Ankara merkezli · Türkiye geneli
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-cab-950 sm:text-5xl">
              Evcil dostlarınız{" "}
              <span className="text-brand-600">yolculukta güvende</span>
            </h1>
            <p className="mt-5 text-lg font-medium leading-relaxed text-cab-900">
              Her yolculuk özen ister. 06 Pet Taksi ile can dostunuzu şehir içi ve
              şehirler arası güvenle taşıyoruz — sevgiyle yaklaşan, net iletişim
              kuran bir ekip.
            </p>
            <p className="mt-3 text-base leading-relaxed text-cab-800/90">
              Randevu, rota ve ücret için tek yapmanız gereken aramak veya WhatsApp
              mesajı bırakmak; size en uygun planı birlikte oluşturalım.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/15 transition hover:brightness-95"
              >
                WhatsApp ile yaz
              </a>
              <a
                href={phone}
                className="inline-flex items-center justify-center rounded-full bg-cab-950 px-6 py-3 text-sm font-semibold text-brand-400 ring-2 ring-brand-500/50 transition hover:bg-cab-900"
              >
                Hemen ara
              </a>
              <Link
                href="/hizmetler"
                className="inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold text-cab-900 underline-offset-4 hover:underline"
              >
                Hizmetleri incele
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-cab-950 sm:text-3xl">
          Biz kimiz?
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-cab-800/90">
          Küçük dostlarınızın yol arkadaşıyız. Taşıma değil, güven ve sakinlik
          sunmayı önemsiyoruz: doğru zamanlama, temiz ve konforlu ortam, yol boyu
          net haber. Merkezimiz Ankara; planlı organizasyonla Türkiye genelinde
          hizmet veriyoruz.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-cab-950 sm:text-3xl">
              Neler yapıyoruz?
            </h2>
            <p className="mt-2 max-w-xl text-cab-800/80">
              İhtiyacınıza göre şehir içi, şehirler arası ve özel adres transferleri.
            </p>
          </div>
          <Link
            href="/iletisim"
            className="text-sm font-semibold text-cab-900 hover:text-brand-700"
          >
            İletişim sayfası →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-3xl border border-cab-100 bg-white p-6 shadow-card"
            >
              <p className="text-2xl" aria-hidden>
                {s.emoji}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-cab-950">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cab-800/85">
                {s.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-cab-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-cab-950 sm:text-3xl">
            Neden bizi tercih etmelisiniz?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {trust.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-cab-100 bg-brand-50/60 p-5"
              >
                <p className="text-sm font-semibold text-cab-950">{t.title}</p>
                <p className="mt-2 text-sm text-cab-800/85">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-cab-200 bg-gradient-to-b from-white to-brand-50/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-cab-950 sm:text-3xl">
            Yakında
          </h2>
          <p className="mt-2 max-w-2xl text-cab-800/85">
            Sitemizi ve hizmetlerimizi geliştirmeye devam ediyoruz. Aşağıdakiler
            üzerinde çalışıyoruz:
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {comingSoon.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-dashed border-cab-300 bg-white/80 px-4 py-5 text-center shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  Yakında
                </p>
                <p className="mt-2 font-display text-base font-semibold text-cab-950">
                  {item.title}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-cab-700">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="overflow-hidden rounded-[2rem] border-2 border-brand-500 bg-gradient-to-br from-cab-950 via-cab-900 to-cab-950 px-6 py-12 text-center text-white shadow-soft sm:px-12">
          <h2 className="font-display text-2xl font-semibold text-brand-400 sm:text-3xl">
            Bugün rezervasyon veya bilgi alın
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-cab-200">
            Arayın veya WhatsApp üzerinden tarih ve adresinizi yazın; size en kısa
            sürede dönüş yapalım.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              WhatsApp
            </a>
            <a
              href={phone}
              className="inline-flex rounded-full bg-brand-400 px-6 py-3 text-sm font-semibold text-cab-950 transition hover:bg-brand-300"
            >
              Telefon: {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
