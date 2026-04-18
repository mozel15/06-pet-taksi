import type { ReservationInput } from "@/lib/validators/reservationSchema";

type ReservationMessagePayload = Omit<ReservationInput, "kvkk">;

const serviceLabels: Record<ReservationMessagePayload["serviceType"], string> = {
  sehir_ici: "Şehir içi transfer",
  sehirler_arasi: "Şehirler arası transfer",
  vet: "Veteriner / bakım",
  diger: "Diğer / özel talep",
};

/**
 * Rezervasyon formu sonrası WhatsApp’ta tek mesajda paylaşılacak metin.
 * İşletmeye göre alanlar genişletilebilir (.NET API ile aynı şema kullanılabilir).
 */
export function buildReservationWhatsAppMessage(data: ReservationMessagePayload): string {
  const lines = [
    `Merhaba — *Kılıç Ankara Pet Taksi* randevu / teklif talebi`,
    ``,
    `*Ad Soyad:* ${data.fullName}`,
    `*Telefon:* ${data.phone}`,
    data.email ? `*E-posta:* ${data.email}` : null,
    `*Hizmet:* ${serviceLabels[data.serviceType]}`,
    `*Tercih edilen tarih:* ${data.preferredDate}`,
    `*Kalkış:* ${data.fromAddress}`,
    `*Varış:* ${data.toAddress}`,
    `*Evcil dost bilgisi:* ${data.petInfo}`,
    data.notes?.trim() ? `*Notlar:* ${data.notes.trim()}` : null,
    ``,
    `Bu mesajı onaylamak için yanıtlayabilir veya arayabilirsiniz.`,
  ];

  return lines.filter(Boolean).join("\n");
}
