"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, whatsappHref } from "@/lib/site";
import { buttonClass } from "@/components/ui/buttonStyles";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/sss", label: "SSS" },
  { href: "/rezervasyon", label: "Rezervasyon" },
  { href: "/iletisim", label: "İletişim" },
];

export function Header() {
  const pathname = usePathname();
  const wa = whatsappHref(
    site.whatsappDigits,
    `Merhaba, ${site.name} hakkında bilgi almak istiyorum.`,
  );

  return (
    <header className="sticky top-0 z-50 border-b border-cab-800/90 bg-cab-950/85 text-cab-100 shadow-soft backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="logo-core transition group-hover:scale-[1.05]" aria-hidden>
            K
          </span>
          <div className="leading-tight">
            <span className="font-display text-lg font-semibold text-white">{site.shortName}</span>
            <span className="hidden text-xs font-medium tracking-wide text-cab-400 sm:block">
              WhatsApp öncelikli premium pet transfer
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menu">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white/10 text-brand-300"
                    : "text-cab-200 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <details className="relative lg:hidden">
            <summary className="list-none rounded-full border border-cab-700 bg-cab-900/70 px-3 py-2 text-sm font-semibold text-cab-100 hover:bg-cab-800/80">
              Menü
            </summary>
            <div className="absolute right-0 z-50 mt-2 w-52 rounded-2xl border border-cab-800 bg-cab-950/95 p-2 shadow-soft backdrop-blur">
              <ul className="space-y-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-xl px-3 py-2 text-sm text-cab-100 hover:bg-white/5 hover:text-brand-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/gizlilik"
                    className="block rounded-xl px-3 py-2 text-sm text-cab-300 hover:bg-white/5 hover:text-brand-300"
                  >
                    Gizlilik
                  </Link>
                </li>
              </ul>
            </div>
          </details>

          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className={`${buttonClass("whatsapp")} hidden px-4 py-2 text-xs sm:inline-flex`}
          >
            WhatsApp
          </a>
          <Link href="/rezervasyon" className={`${buttonClass("primary")} hidden px-4 py-2 text-xs sm:inline-flex`}>
            Rezervasyon
          </Link>
        </div>
      </div>
    </header>
  );
}
