import Link from "next/link";
import { HeroPattern } from "@/components/HeroPattern";
import { site, telHref, whatsappHref } from "@/lib/site";

const highlights = [
  { title: "Aynı gün planlama", value: "Hızlı dönüş" },
  { title: "Hizmet kapsamı", value: "Ankara + Türkiye" },
  { title: "İletişim", value: "Telefon + WhatsApp" },
];

const services = [
  {
    title: "Şehir içi profesyonel transfer",
    text: "Ankara içindeki adresler arasında can dostunuzun konforunu önceleyen, planlı ve dikkatli yolculuk.",
  },
  {
    title: "Şehirler arası organizasyon",
    text: "Türkiye genelinde tarih, güzergah ve mola planına göre özel olarak kurgulanan transfer süreci.",
  },
  {
    title: "Veteriner ve bakım randevuları",
    text: "Kontrol, tedavi veya bakım noktalarına zamanında ulaşım için düzenli koordinasyon.",
  },
];

const differentiators = [
  {
    title: "Planlı süreç",
    text: "Randevu öncesi saat, rota ve özel notlar netleştirilir; süreç adım adım yönetilir.",
  },
  {
    title: "Güven odaklı yaklaşım",
    text: "Sakin sürüş, dikkatli taşıma ve iletişimde şeffaflık ile daha huzurlu bir deneyim.",
  },
  {
    title: "Kurumsal görünüm",
    text: "Küçük bir işletme disipliniyle değil, marka bilinciyle hareket eden profesyonel hizmet anlayışı.",
  },
];

const processSteps = [
  {
    title: "1) İletişim",
    text: "Telefon veya WhatsApp üzerinden tarih, saat ve adres bilgilerinizi paylaşın.",
  },
  {
    title: "2) Plan",
    text: "Güzergah, tahmini süre ve koşullar birlikte netleştirilir.",
  },
  {
    title: "3) Transfer",
    text: "Belirlenen zamanda güvenli, özenli ve kontrollü yolculuk gerçekleştirilir.",
  },
];

const nextPhase = [
  "Operasyon duyuruları ve yoğunluk takvimi",
  "Bölgesel kampanya ve sadakat avantajları",
  "Rota ve süre bilgisi için daha gelişmiş içerik",
];

export default function HomePage() {
  const phone = telHref(site.phoneDigits);
  const wa = whatsappHref(
    site.whatsappDigits,
    "Merhaba, Kılıç Ankara Pet Taksi hizmetleriniz hakkında bilgi almak istiyorum.",
  );

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-cab-200 bg-cab-950 text-white">
        <HeroPattern />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-500/45 bg-cab-900/70 px-3 py-1 text-xs font-semibold tracking-wide text-brand-300">
              <span aria-hidden>●</span> KILIÇ ANKARA PET TAKSİ
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Ankara merkezli,
              <span className="block text-brand-400">premium pet transfer deneyimi</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cab-200 sm:text-lg">
              Küçük dostunuzun yolculuğunu tesadüfe bırakmayın. Kılıç Ankara Pet Taksi,
              şehir içi ve şehirler arası taşımada planlı operasyon, net iletişim ve
              güven odaklı hizmet sunar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-400 px-6 py-3 text-sm font-semibold text-cab-950 transition hover:bg-brand-300"
              >
                WhatsApp ile hızlı teklif al
              </a>
              <a
                href={phone}
                className="inline-flex items-center justify-center rounded-full border border-cab-500 bg-cab-900 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-400 hover:text-brand-300"
              >
                Hemen ara: {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-cab-700/70 bg-cab-900/75 p-6 shadow-soft backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
              Hizmet özeti
            </p>
            <ul className="mt-5 space-y-3">
              {highlights.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center justify-between rounded-xl border border-cab-700 bg-cab-950/80 px-4 py-3"
                >
                  <span className="text-sm text-cab-300">{item.title}</span>
                  <span className="text-sm font-semibold text-brand-300">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-brand-500/40 bg-brand-500/10 p-4 text-sm text-brand-200">
              İşletmenizin itibarı için tutarlı, profesyonel ve güven veren bir transfer deneyimi.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.title}
              className="premium-card section-reveal p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">Hizmet</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-cab-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-cab-700">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-cab-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">Neden biz</p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-cab-950">Güven, disiplin ve iletişim</h2>
            </div>
            <Link href="/hizmetler" className="text-sm font-semibold text-cab-900 underline-offset-4 hover:text-brand-700 hover:underline">
              Tüm hizmet detaylarını gör
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {differentiators.map((item) => (
              <div key={item.title} className="premium-card p-5">
                <h3 className="font-display text-xl font-semibold text-cab-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cab-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="premium-card p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">Süreç</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-cab-950">Transfer nasıl ilerler?</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.title} className="premium-card bg-cab-50 p-5">
                <h3 className="text-sm font-semibold text-cab-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cab-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-cab-200 bg-gradient-to-b from-white to-brand-50/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-cab-950">Yakında</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-cab-700">
            Marka gücünü adım adım büyütüyoruz. Bir sonraki fazda web sitemizi daha operasyonel hale getireceğiz.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {nextPhase.map((item) => (
              <li key={item} className="rounded-xl border border-dashed border-cab-300 bg-white/90 px-4 py-4 text-sm text-cab-800">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="overflow-hidden rounded-[2rem] border border-brand-500/50 bg-gradient-to-br from-cab-950 via-cab-900 to-cab-950 px-6 py-12 text-center text-white shadow-soft sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">Randevu ve bilgi</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">
            Bugün iletişime geçin
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-cab-200">
            Uygun tarih ve rota için telefonla arayın veya WhatsApp üzerinden detayları paylaşın.
            Hızlı şekilde geri dönüş sağlayalım.
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
            <Link
              href="/iletisim"
              className="inline-flex rounded-full border border-cab-600 px-6 py-3 text-sm font-semibold text-cab-100 transition hover:border-brand-400 hover:text-brand-300"
            >
              İletişim sayfası
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
