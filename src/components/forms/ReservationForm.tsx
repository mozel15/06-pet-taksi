"use client";

import { useActionState } from "react";
import Link from "next/link";
import {
  initialReservationState,
  submitReservation,
  type ReservationActionState,
} from "@/app/actions/reservation";
import { buttonClass } from "@/components/ui/buttonStyles";

function fieldError(
  state: ReservationActionState,
  name: string,
): string | undefined {
  if (state.status !== "error") return undefined;
  const list = state.fieldErrors[name];
  return list?.[0];
}

const inputClass =
  "mt-1 w-full rounded-xl border border-cab-700 bg-cab-950/70 px-3 py-2.5 text-sm text-white placeholder:text-cab-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40";

const labelClass = "block text-xs font-semibold uppercase tracking-wider text-cab-300";

export function ReservationForm() {
  const [state, formAction, pending] = useActionState(
    submitReservation,
    initialReservationState,
  );

  return (
    <form action={formAction} className="space-y-6" noValidate aria-busy={pending}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="fullName">
            Ad Soyad *
          </label>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            className={inputClass}
            required
            aria-invalid={!!fieldError(state, "fullName")}
            aria-describedby={fieldError(state, "fullName") ? "err-fullName" : undefined}
          />
          {fieldError(state, "fullName") ? (
            <p id="err-fullName" className="mt-1 text-xs text-red-300" role="alert">
              {fieldError(state, "fullName")}
            </p>
          ) : null}
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Telefon *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+90 ..."
            className={inputClass}
            required
            aria-invalid={!!fieldError(state, "phone")}
            aria-describedby={fieldError(state, "phone") ? "err-phone" : undefined}
          />
          {fieldError(state, "phone") ? (
            <p id="err-phone" className="mt-1 text-xs text-red-300" role="alert">
              {fieldError(state, "phone")}
            </p>
          ) : null}
        </div>
      </div>

      <div className="sm:w-1/2">
        <label className={labelClass} htmlFor="email">
          E-posta (isteğe bağlı)
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClass}
          aria-invalid={!!fieldError(state, "email")}
          aria-describedby={fieldError(state, "email") ? "err-email" : undefined}
        />
        {fieldError(state, "email") ? (
          <p id="err-email" className="mt-1 text-xs text-red-300" role="alert">
            {fieldError(state, "email")}
          </p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="serviceType">
            Hizmet türü *
          </label>
          <select
            id="serviceType"
            name="serviceType"
            className={inputClass}
            defaultValue=""
            aria-invalid={!!fieldError(state, "serviceType")}
            aria-describedby={fieldError(state, "serviceType") ? "err-serviceType" : undefined}
          >
            <option value="" disabled>
              Seçin
            </option>
            <option value="sehir_ici">Şehir içi transfer</option>
            <option value="sehirler_arasi">Şehirler arası transfer</option>
            <option value="vet">Veteriner / bakım</option>
            <option value="diger">Diğer / özel talep</option>
          </select>
          {fieldError(state, "serviceType") ? (
            <p id="err-serviceType" className="mt-1 text-xs text-red-300" role="alert">
              {fieldError(state, "serviceType")}
            </p>
          ) : null}
        </div>
        <div>
          <label className={labelClass} htmlFor="preferredDate">
            Tercih edilen tarih *
          </label>
          <input id="preferredDate" name="preferredDate" type="date" className={inputClass} />
          {fieldError(state, "preferredDate") ? (
            <p className="mt-1 text-xs text-red-300" role="alert">
              {fieldError(state, "preferredDate")}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="fromAddress">
            Kalkış *
          </label>
          <textarea
            id="fromAddress"
            name="fromAddress"
            rows={3}
            className={inputClass}
            aria-invalid={!!fieldError(state, "fromAddress")}
          />
          {fieldError(state, "fromAddress") ? (
            <p className="mt-1 text-xs text-red-300" role="alert">
              {fieldError(state, "fromAddress")}
            </p>
          ) : null}
        </div>
        <div>
          <label className={labelClass} htmlFor="toAddress">
            Varış *
          </label>
          <textarea
            id="toAddress"
            name="toAddress"
            rows={3}
            className={inputClass}
            aria-invalid={!!fieldError(state, "toAddress")}
          />
          {fieldError(state, "toAddress") ? (
            <p className="mt-1 text-xs text-red-300" role="alert">
              {fieldError(state, "toAddress")}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="petInfo">
          Evcil dost bilgisi *
        </label>
        <textarea
          id="petInfo"
          name="petInfo"
          rows={3}
          placeholder="Tür, ırk, yaş, ağırlık, özel notlar..."
          className={inputClass}
        />
        {fieldError(state, "petInfo") ? (
          <p className="mt-1 text-xs text-red-300" role="alert">
            {fieldError(state, "petInfo")}
          </p>
        ) : null}
      </div>

      <div>
        <label className={labelClass} htmlFor="notes">
          Ek notlar
        </label>
        <textarea id="notes" name="notes" rows={3} className={inputClass} />
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-cab-800 bg-cab-950/60 p-4">
        <input
          id="kvkk"
          name="kvkk"
          type="checkbox"
          value="on"
          className="mt-1 h-4 w-4 rounded border-cab-600 bg-cab-950 text-brand-400 focus:ring-brand-400/50"
        />
        <label htmlFor="kvkk" className="text-sm text-cab-200">
          <Link href="/gizlilik" className="font-semibold text-brand-300 underline-offset-4 hover:underline">
            Aydınlatma metnini
          </Link>{" "}
          okudum; iletişim ve operasyon amaçlı işlenmesini kabul ediyorum. *
        </label>
      </div>
      {fieldError(state, "kvkk") ? (
        <p className="text-xs text-red-300" role="alert">
          {fieldError(state, "kvkk")}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <button type="submit" disabled={pending} className={buttonClass("whatsapp")}>
          {pending ? "Hazırlanıyor…" : "WhatsApp mesajını hazırla"}
        </button>
      </div>

      {state.status === "success" ? (
        <div
          className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5 text-sm text-emerald-100"
          role="status"
        >
          <p className="font-semibold text-white">Mesajınız hazır.</p>
          <p className="mt-2 text-emerald-100/90">
            Onay ve hızlı koordinasyon için WhatsApp üzerinden göndermeniz gerekir. Aşağıdaki
            düğme talebinizi tek mesajda iletir.
          </p>
          <a
            href={state.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className={`${buttonClass("whatsapp")} mt-4`}
          >
            WhatsApp’ta aç ve gönder
          </a>
        </div>
      ) : null}
    </form>
  );
}
