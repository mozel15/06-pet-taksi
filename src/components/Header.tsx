import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cab-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span
            className="grid h-11 w-11 place-items-center rounded-2xl bg-cab-950 text-lg font-bold text-brand-400 shadow-soft ring-1 ring-cab-800 transition group-hover:scale-[1.03]"
            aria-hidden
          >
            K
          </span>
          <div className="leading-tight">
            <span className="font-display text-lg font-semibold text-cab-950">
              {site.shortName}
            </span>
            <span className="hidden text-xs font-medium text-cab-600 sm:block">
              Ankara merkezli pet transfer
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Ana menu">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-cab-800 transition hover:bg-brand-100 hover:text-cab-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/iletisim"
          className="rounded-full bg-cab-950 px-4 py-2 text-sm font-semibold text-brand-400 shadow-soft transition hover:bg-cab-900"
        >
          Hemen ulaş
        </Link>
      </div>
    </header>
  );
}
