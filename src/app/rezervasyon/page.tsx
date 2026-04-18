import type { Metadata } from "next";
import Link from "next/link";
import { ReservationForm } from "@/components/forms/ReservationForm";
import { site, whatsappHref } from "@/lib/site";
import { buttonClass } from "@/components/ui/buttonStyles";

export const metadata: Metadata = {
  title: "Rezervasyon",
  description: `${site.name} — randevu talebi için form. Onay ve koordinasyon WhatsApp ile tamamlanır.`,
};

export default function RezervasyonPage() {
  const waQuick = whatsappHref(
    site.whatsappDigits,
    `Merhaba, ${site.name} için hızlıca bilgi almak / tarih sormak istiyorum.`,
  );

  return (
    <div className="pb-20">
      <section className="border-b border-cab-800 bg-cab-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="inline-flex rounded-full border border-brand-500/40 bg-cab-900/80 px-3 py-1 text-xs font-semibold tracking-wider text-brand-300">
            REZERVASYON
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            WhatsApp odaklı talep
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cab-200 sm:text-base">
            Formu doldurduğunuzda talebiniz WhatsApp mesajı olarak hazırlanır. Kesin plan, netleştirme
            ve onay için <strong className="text-white">WhatsApp birincil kanaldır</strong>. Dilerseniz
            doğrudan hızlı mesaj da gönderebilirsiniz.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={waQuick} target="_blank" rel="noreferrer" className={buttonClass("whatsapp")}>
              WhatsApp ile hızlı yaz
            </a>
            <Link href="/iletisim" className={buttonClass("outline")}>
              Telefon ve iletişim
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 pt-12 sm:px-6">
        <div className="premium-card-dark p-6 sm:p-10">
          <h2 className="font-display text-2xl font-semibold text-white">Randevu formu</h2>
          <p className="mt-2 text-sm text-cab-200">
            Alanları eksiksiz doldurun; gönderimden sonra WhatsApp ekranında metin önizlemesi ile
            devam edersiniz.
          </p>
          <div className="mt-8">
            <ReservationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
