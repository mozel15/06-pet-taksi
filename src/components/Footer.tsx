import Link from "next/link";
import { site, telHref, whatsappHref } from "@/lib/site";

export function Footer() {
  const wa = whatsappHref(site.whatsappDigits);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-brand-500 bg-cab-950 text-cab-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold text-white">
            {site.name}
          </p>
          <p className="mt-2 max-w-sm text-sm text-cab-300">
            {site.tagline}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-400">
            Hızlı bağlantılar
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/hizmetler" className="hover:text-brand-300">
                Hizmetler
              </Link>
            </li>
            <li>
              <Link href="/sss" className="hover:text-brand-300">
                Sık sorulan sorular
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="hover:text-brand-300">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-400">
            İletişim
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={telHref(site.phoneDigits)}
                className="hover:text-brand-300"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={wa}
                className="hover:text-brand-300"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand-300">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cab-800/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-cab-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {year} {site.name}. Tüm hakları saklıdır.</p>
          <p className="max-w-xs">
            Bu bilgi sayfasıdır; fiyat ve müsaitlik için lütfen iletişime geçin.
          </p>
        </div>
      </div>
    </footer>
  );
}
