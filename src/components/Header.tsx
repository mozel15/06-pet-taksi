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
    <header className="sticky top-0 z-50 border-b-4 border-brand-500 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cab-950 text-lg font-bold text-brand-400 shadow-soft transition group-hover:bg-cab-900"
            aria-hidden
          >
            06
          </span>
          <div className="leading-tight">
            <span className="font-display text-lg font-semibold text-cab-950">
              {site.shortName}
            </span>
            <span className="hidden text-xs text-cab-600 sm:block">
              Pet taksi &amp; transfer
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Ana menü">
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
          className="rounded-full bg-cab-950 px-4 py-2 text-sm font-semibold text-brand-400 shadow-soft transition hover:bg-cab-900 md:hidden"
        >
          İletişim
        </Link>
      </div>
      <div className="border-t border-cab-200/80 md:hidden">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between gap-1 overflow-x-auto px-2 py-2"
          aria-label="Mobil menü"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-xs font-medium whitespace-nowrap text-cab-800 hover:bg-brand-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
