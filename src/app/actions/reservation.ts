"use server";

import { buildReservationWhatsAppMessage } from "@/lib/whatsapp";
import { reservationSchema } from "@/lib/validators/reservationSchema";
import { site, whatsappHref } from "@/lib/site";

export type ReservationActionState =
  | { status: "idle" }
  | { status: "error"; fieldErrors: Record<string, string[]> }
  | { status: "success"; whatsappUrl: string };

const idle: ReservationActionState = { status: "idle" };

export async function submitReservation(
  _prev: ReservationActionState,
  formData: FormData,
): Promise<ReservationActionState> {
  const raw = {
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    serviceType: formData.get("serviceType"),
    preferredDate: formData.get("preferredDate"),
    fromAddress: formData.get("fromAddress"),
    toAddress: formData.get("toAddress"),
    petInfo: formData.get("petInfo"),
    notes: formData.get("notes"),
    kvkk: formData.get("kvkk"),
  };

  const parsed = reservationSchema.safeParse({
    ...raw,
    fullName: String(raw.fullName ?? ""),
    phone: String(raw.phone ?? ""),
    email: String(raw.email ?? ""),
    serviceType: raw.serviceType,
    preferredDate: String(raw.preferredDate ?? ""),
    fromAddress: String(raw.fromAddress ?? ""),
    toAddress: String(raw.toAddress ?? ""),
    petInfo: String(raw.petInfo ?? ""),
    notes: String(raw.notes ?? ""),
    kvkk: raw.kvkk === "on" ? ("on" as const) : undefined,
  });

  if (!parsed.success) {
    return {
      status: "error",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  if (process.env.NODE_ENV === "development") {
    // Üretimde kişisel veri loglanmaz
    const { kvkk: _kvkk, ...rest } = parsed.data;
    void _kvkk;
    // eslint-disable-next-line no-console
    console.log("[reservation] validated:", rest);
  }

  const { kvkk: _k, ...payload } = parsed.data;
  void _k;
  const message = buildReservationWhatsAppMessage(payload);
  const whatsappUrl = whatsappHref(site.whatsappDigits, message);

  return { status: "success", whatsappUrl };
}

export const initialReservationState: ReservationActionState = idle;
