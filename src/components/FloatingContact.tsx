import { site, telHref, whatsappHref } from "@/lib/site";
import { whatsappMessages } from "@/config/constants";

export function FloatingContact() {
  const phone = telHref(site.phoneDigits);
  const wa = whatsappHref(site.whatsappDigits, whatsappMessages.generalInfo);

  return (
    <div
      className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:bottom-6 sm:right-6"
      role="region"
      aria-label="Hızlı iletişim"
    >
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/25 transition hover:brightness-95"
      >
        <span className="text-lg" aria-hidden>
          💬
        </span>
        WhatsApp
      </a>
      <a
        href={phone}
        className="flex items-center gap-2 rounded-full bg-cab-950 px-4 py-3 text-sm font-semibold text-brand-400 shadow-soft ring-2 ring-brand-500/40 transition hover:bg-cab-900"
      >
        <span className="text-lg" aria-hidden>
          📞
        </span>
        Ara
      </a>
    </div>
  );
}
