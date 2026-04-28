import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";
import { buttonClass } from "@/components/ui/buttonStyles";
import { primaryNavigation } from "@/config/navigation";
import { whatsappMessages } from "@/config/constants";
import { MobileNavMenu } from "@/components/header/MobileNavMenu";

export function Header() {
  const wa = whatsappHref(site.whatsappDigits, whatsappMessages.headerInfo);

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

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-cab-200 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <MobileNavMenu />

          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
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
