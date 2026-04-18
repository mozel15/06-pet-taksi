import { z } from "zod";

const trPhone = z
  .string()
  .trim()
  .min(10, "Geçerli bir telefon girin")
  .regex(/^[\d+\s()-]+$/, "Telefon formatı geçersiz");

export const reservationSchema = z.object({
  fullName: z.string().trim().min(2, "Ad soyad en az 2 karakter olmalı"),
  phone: trPhone,
  email: z.preprocess((val) => {
    if (typeof val !== "string") return undefined;
    const t = val.trim();
    return t === "" ? undefined : t;
  }, z.union([z.undefined(), z.string().email("Geçerli bir e-posta girin")])),
  serviceType: z.enum(["sehir_ici", "sehirler_arasi", "vet", "diger"], {
    message: "Hizmet türünü seçin",
  }),
  preferredDate: z.string().trim().min(1, "Tarih seçin veya yazın"),
  fromAddress: z.string().trim().min(3, "Kalkış adresi girin"),
  toAddress: z.string().trim().min(3, "Varış adresi girin"),
  petInfo: z.string().trim().min(2, "Evcil dost bilgisi girin"),
  notes: z.string().trim().optional(),
  kvkk: z.literal("on", {
    message: "Aydınlatma metnini kabul etmelisiniz",
  }),
});

export type ReservationInput = z.infer<typeof reservationSchema>;
