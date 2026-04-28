"use server";

import { headers } from "next/headers";
import { buildReservationWhatsAppMessage } from "@/lib/whatsapp";
import { reservationSchema } from "@/lib/validators/reservationSchema";
import { site, whatsappHref } from "@/lib/site";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestBuckets = new Map<string, number[]>();

export type ReservationActionState =
  | { status: "idle" }
  | {
      status: "error";
      fieldErrors: Record<string, string[]>;
      formError?: string;
    }
  | { status: "success"; whatsappUrl: string };

const idle: ReservationActionState = { status: "idle" };

function sanitizeText(input: unknown) {
  return String(input ?? "")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanupBucket(now: number, key: string) {
  const bucket = requestBuckets.get(key) ?? [];
  const recent = bucket.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  if (recent.length === 0) {
    requestBuckets.delete(key);
    return [];
  }
  requestBuckets.set(key, recent);
  return recent;
}

function getClientIdentifier(forwardedFor: string | null) {
  if (!forwardedFor) return "unknown";
  return forwardedFor.split(",")[0]?.trim() || "unknown";
}

export async function submitReservation(
  _prev: ReservationActionState,
  formData: FormData,
): Promise<ReservationActionState> {
  const headerStore = await headers();
  const clientKey = getClientIdentifier(
    headerStore.get("x-forwarded-for") ?? headerStore.get("x-real-ip"),
  );
  const now = Date.now();
  const recent = cleanupBucket(now, clientKey);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      status: "error",
      fieldErrors: {},
      formError: "Çok kısa sürede fazla talep gönderdiniz. Lütfen biraz sonra tekrar deneyin.",
    };
  }

  requestBuckets.set(clientKey, [...recent, now]);

  if (String(formData.get("website") ?? "").trim() !== "") {
    return {
      status: "error",
      fieldErrors: {},
      formError: "Talep doğrulanamadı. Lütfen formu yeniden doldurup tekrar gönderin.",
    };
  }

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
    fullName: sanitizeText(raw.fullName),
    phone: sanitizeText(raw.phone),
    email: sanitizeText(raw.email),
    serviceType: raw.serviceType,
    preferredDate: sanitizeText(raw.preferredDate),
    fromAddress: sanitizeText(raw.fromAddress),
    toAddress: sanitizeText(raw.toAddress),
    petInfo: sanitizeText(raw.petInfo),
    notes: sanitizeText(raw.notes),
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
