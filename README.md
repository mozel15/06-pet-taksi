# 06 Pet Taksi — Web sitesi

Ankara merkezli, Türkiye geneli pet taksi için sade vitrin sitesi (Next.js + Tailwind CSS).

## Gereksinimler

- [Node.js](https://nodejs.org/) **LTS** sürümü
- npm (Node ile gelir)

İsteğe bağlı: Git, GitHub, [Vercel](https://vercel.com/) hesabı (yayın için).

## Kurulum

```bash
cd 06-pet-taksi
npm install
```

`.env.local` dosyası oluşturup `.env.example` içeriğini kopyalayın; telefon ve WhatsApp numaralarını güncelleyin.

```bash
copy .env.example .env.local
```

Geliştirme sunucusu:

```bash
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) açın.

## Yayın (özet)

1. Projeyi GitHub’a gönderin.
2. [Vercel](https://vercel.com/)’de “Import Project” ile repo’yu bağlayın.
3. Ortam değişkenlerini Vercel panelinden girin (`NEXT_PUBLIC_*`).
4. Alan adınızı Vercel’e yönlendirin (DNS).

## İçerik

- Ana sayfa, Hizmetler, Hakkımızda, İletişim, SSS (`/sss`)
- Sabit WhatsApp ve arama butonları
- İletişim bilgileri `src/lib/site.ts` ve `.env.local` ile yönetilir
