import Link from "next/link";
import { site, telHref, whatsappHref } from "@/lib/site";

export function Footer() {
  const wa = whatsappHref(site.whatsappDigits);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cab-800 bg-cab-950 text-cab-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
        <div>
          <p className="font-display text-2xl font-semibold text-white">{site.name}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cab-300">{site.tagline}</p>
          <p className="mt-4 text-xs text-cab-400">
            Ankara merkezli operasyon, Türkiye geneli planlı transfer.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">Sayfalar</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-brand-300">Ana Sayfa</Link></li>
            <li><Link href="/hizmetler" className="hover:text-brand-300">Hizmetler</Link></li>
            <li><Link href="/hakkimizda" className="hover:text-brand-300">Hakkımızda</Link></li>
            <li><Link href="/sss" className="hover:text-brand-300">SSS</Link></li>
            <li><Link href="/iletisim" className="hover:text-brand-300">İletişim</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">İletişim</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={telHref(site.phoneDigits)} className="hover:text-brand-300">{site.phoneDisplay}</a></li>
            <li><a href={wa} target="_blank" rel="noreferrer" className="hover:text-brand-300">WhatsApp hattina yaz</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-brand-300">{site.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cab-800/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cab-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {year} {site.name}. Tüm hakları saklıdır.</p>
          <p>Bilgilendirme amaçlıdır; net plan ve fiyat için iletişime geçin.</p>
        </div>
      </div>
    </footer>
  );
}
