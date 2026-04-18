"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroPattern } from "@/components/HeroPattern";
import { highlights } from "@/content/home";
import { site, telHref, whatsappHref } from "@/lib/site";
import { buttonClass } from "@/components/ui/buttonStyles";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeHero() {
  const phone = telHref(site.phoneDigits);
  const wa = whatsappHref(
    site.whatsappDigits,
    "Merhaba, Kılıç Ankara Pet Taksi için hızlı bilgi / teklif almak istiyorum.",
  );

  return (
    <section className="relative isolate overflow-hidden border-b border-cab-800 bg-cab-950 text-white">
      <HeroPattern />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-500/45 bg-cab-900/70 px-3 py-1 text-xs font-semibold tracking-wide text-brand-300"
          >
            <span aria-hidden>●</span> KILIÇ ANKARA PET TAKSİ
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease }}
            className="mt-5 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Ankara merkezli,
            <span className="block text-brand-400">koyu premium pet transfer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-cab-200 sm:text-lg"
          >
            Randevu ve plan netleştirmesi için{" "}
            <strong className="font-semibold text-white">WhatsApp birincil kanaldır</strong>.
            Telefon ile de ulaşabilirsiniz; hızlı teklif için önce{" "}
            <Link href="/rezervasyon" className="font-semibold text-brand-300 underline-offset-4 hover:underline">
              rezervasyon formu
            </Link>{" "}
            veya doğrudan WhatsApp kullanın.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href={wa} target="_blank" rel="noreferrer" className={buttonClass("whatsapp")}>
              WhatsApp ile talep gönder (önerilen)
            </a>
            <a href={phone} className={buttonClass("outline")}>
              Ara: {site.phoneDisplay}
            </a>
            <Link href="/rezervasyon" className={buttonClass("primary")}>
              Online rezervasyon
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="rounded-3xl border border-cab-700/70 bg-cab-900/75 p-6 shadow-soft backdrop-blur"
        >
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
            WhatsApp üzerinden adres, tarih ve evcil dost bilgisini paylaşmanız süreci
            hızlandırır; formu doldurursanız aynı bilgiler tek mesajda hazırlanır.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
