# Kılıç Ankara Pet Taksi — Web sitesi

Ankara merkezli, Turkiye geneli pet taksi icin profesyonel vitrin sitesi (Next.js + Tailwind CSS).

## Gereksinimler

- [Node.js](https://nodejs.org/) **LTS** surumu
- npm (Node ile gelir)

Istege bagli: Git, GitHub, [Vercel](https://vercel.com/) hesabi (yayin icin).

## Kurulum

```bash
cd 06-pet-taksi
npm install
```

`.env.local` dosyasi olusturup `.env.example` icerigini kopyalayin; telefon ve WhatsApp numaralarini guncelleyin.

```bash
copy .env.example .env.local
```

Gelistirme sunucusu:

```bash
npm run dev
```

Tarayicida [http://localhost:3000](http://localhost:3000) acin.

## Yayin (ozet)

1. Projeyi GitHub'a gonderin.
2. [Vercel](https://vercel.com/)'de "Import Project" ile repo'yu baglayin.
3. Ortam degiskenlerini Vercel panelinden girin (`NEXT_PUBLIC_*`).
4. Alan adinizi Vercel'e yonlendirin (DNS).

## Icerik

- Ana sayfa, Hizmetler, Hakkimizda, Iletisim, SSS (`/sss`)
- Sabit WhatsApp ve arama butonlari
- Iletisim bilgileri `src/lib/site.ts` ve `.env.local` ile yonetilir
