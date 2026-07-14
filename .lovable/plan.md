
# PRD 1 — Website Portofolio Fotografer Profesional

## 1. Ringkasan Produk
Website portofolio personal branding untuk fotografer profesional, terinspirasi dari `petermckinnon.com`. Fokus pada visual-first storytelling, galeri karya, personal brand, dan monetisasi (preset, kursus, kolaborasi/booking).

## 2. Tujuan
- Menampilkan karya fotografi secara sinematik dan immersive.
- Membangun brand profesional yang kredibel.
- Menyediakan channel untuk booking, kolaborasi, dan penjualan produk digital (preset / e-book / kelas).
- Meningkatkan engagement melalui blog, vlog, atau behind the scene.

## 3. Target Pengguna
- Klien potensial (brand, agency, personal).
- Sesama kreator/fotografer.
- Fans / followers yang ingin belajar atau membeli produk.

## 4. Referensi & Gaya Visual
- Referensi utama: `petermckinnon.com`.
- Mood: bold, sinematik, kontras tinggi, banyak whitespace, tipografi besar.
- Warna: dominasi hitam/putih dengan aksen warna berani.
- Font: sans-serif modern (contoh: Inter, Space Grotesk, atau Neue Haas).

## 5. Fitur & Halaman

### 5.1 Halaman Utama
| Halaman | Konten Utama |
|---|---|
| Home | Hero video/foto fullscreen, tagline, CTA lihat portofolio & booking. |
| Portfolio / Work | Grid galeri kategori (Landscape, Portrait, Commercial, Wedding, dll). |
| Portfolio Detail | Foto besar, deskripsi project, klien, tools, lokasi. |
| About | Cerita personal, pencapaian, brand yang pernah bekerja sama, logo carousel. |
| Store / Shop | Preset Lightroom, e-book, LUTs, merchandise. |
| Blog / Journal | Artikel behind the scene, tips fotografi, review gear. |
| Services / Booking | Paket layanan, form pemesanan. |
| Contact | Form kontak, email, sosmed, newsletter subscribe. |

### 5.2 Fitur Umum
- Navigasi sticky dengan transisi halus.
- Dark mode default.
- Animasi scroll (parallax, fade-in) tanpa berlebihan.
- Lazy loading & optimasi gambar (WebP/AVIF).
- Filter kategori pada halaman portfolio.
- Lightbox / fullscreen viewer untuk foto.
- SEO friendly (meta tag, OpenGraph, JSON-LD `Person` & `CreativeWork`).
- Responsive (mobile-first).
- Integrasi sosmed (IG, YouTube, TikTok).
- Newsletter subscription.

### 5.3 Fitur Opsional (fase lanjutan)
- CMS (Sanity/Strapi) untuk update konten mandiri.
- Payment gateway untuk store.
- Multi-bahasa (ID/EN).
- Analytics (GA4, Plausible).

## 6. Non-Functional Requirements
- Performance: Lighthouse ≥ 90 (Performance, SEO, Accessibility).
- Accessibility: WCAG AA (alt text, kontras, keyboard nav).
- Waktu load awal < 2.5s pada koneksi 4G.
- Kompatibel browser modern (Chrome, Safari, Firefox, Edge terbaru).

## 7. Success Metrics
- Bounce rate < 40%.
- Rata-rata session > 2 menit.
- Konversi booking / pembelian preset terukur via analytics.
- Jumlah subscriber newsletter naik bulanan.

---

# PRD 2 — Struktur Folder Development (React + Tailwind + Alias `@`)

## 1. Tujuan
Menetapkan struktur folder yang terstandardisasi agar codebase mudah dipelihara, scalable, dan konsisten antar developer. Semua import internal menggunakan alias `@` untuk menghindari relative path panjang.

## 2. Tech Stack
- React (Vite).
- TypeScript.
- Tailwind CSS.
- TanStack Query (data fetching).
- Zustand (state management).
- Vitest + React Testing Library.

## 3. Struktur Folder

```text
src/
├── assets/              # Gambar statis, ikon, font lokal
│   ├── images/
│   ├── icons/
│   └── fonts/
├── components/          # Komponen UI reusable (presentational)
│   ├── ui/              # Elemen dasar (Button, Input, Card)
│   ├── layout/          # Navbar, Footer, Container
│   └── shared/          # Komponen lintas fitur
├── features/            # Modul per domain (portfolio, blog, store, dsb)
│   └── portfolio/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       └── types.ts
├── pages/               # Halaman / route-level components
├── routes/              # Konfigurasi routing
├── hooks/               # Custom hooks global
├── lib/                 # Wrapper library eksternal (axios, dayjs, dll)
├── services/            # API client & endpoint global
├── stores/              # Zustand stores global
├── styles/              # Tailwind config extension, global css
├── utils/               # Helper functions murni
├── constants/           # Konstanta global
├── types/               # Tipe TypeScript global
├── tests/               # Setup & utilitas testing
├── App.tsx
└── main.tsx
```

## 4. Konvensi Penamaan
- File & folder: `kebab-case` (contoh: `hero-section.tsx`).
- Komponen React: `PascalCase` (contoh: `HeroSection`).
- Hooks: prefix `use` + camelCase (`usePortfolioList`).
- Konstanta: `UPPER_SNAKE_CASE`.
- Types/Interfaces: `PascalCase` (`PortfolioItem`).

## 5. Alias Import `@`

### 5.1 Konfigurasi `vite.config.ts`
```ts
import path from "node:path";
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
},
```

### 5.2 Konfigurasi `tsconfig.json`
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### 5.3 Contoh Penggunaan
```ts
import { Button } from "@/components/ui/button";
import { usePortfolio } from "@/features/portfolio/hooks/use-portfolio";
import { formatDate } from "@/utils/format-date";
```

## 6. Aturan Import
- Wajib pakai alias `@` untuk semua import dari `src/`.
- Dilarang menggunakan relative path lintas folder (`../../..`).
- Urutan import: (1) library eksternal, (2) alias `@`, (3) file relatif dalam folder yang sama, (4) style/asset.
- Satu komponen = satu file. Ekspor default hanya untuk halaman/route.

## 7. Aturan Modul Features
- Setiap fitur berdiri sendiri (self-contained): components, hooks, services, types.
- Fitur tidak boleh mengimport isi internal fitur lain — komunikasi lewat store / API global.
- Jika komponen dipakai lintas fitur, pindahkan ke `components/shared`.

## 8. Testing
- File test diletakkan berdampingan (`component.tsx` + `component.test.tsx`).
- Utility testing global di `src/tests/`.

## 9. Deliverables
- Struktur folder awal siap pakai.
- File konfigurasi alias (`vite.config.ts`, `tsconfig.json`).
- Contoh 1 fitur (misal `portfolio`) sebagai referensi implementasi.
- Dokumentasi singkat di `README.md` mengenai konvensi.
