# 🕌 Pengingat Sholat & Doa Harian

Aplikasi web pendamping ibadah harian seorang Muslim — menampilkan **jadwal sholat akurat berdasarkan lokasi**, **pengingat adzan**, serta **doa & dzikir yang muncul otomatis sesuai waktunya**.

> _"Teman ibadah dan produktivitasmu — dzikir & doa muncul tepat waktu."_

---

## ✨ Fitur Utama

### 🕰️ Jadwal Sholat Otomatis
- Mendeteksi lokasi pengguna via **Geolocation API**.
- Mengambil jadwal sholat dari **API Aladhan** (metode KEMENAG / method 20).
- Cache harian di `localStorage` agar hemat kuota dan tetap berjalan offline.
- Menampilkan 5 waktu sholat: **Subuh, Dzuhur, Ashar, Maghrib, Isya**.
- Indikator waktu sholat **saat ini** dan **berikutnya** lengkap dengan hitung mundur.

### 🔔 Pengingat Adzan
- Bunyi *beep* lembut menggunakan **Web Audio API** (tanpa file audio eksternal).
- Toast notifikasi saat masuk waktu sholat.
- Tombol toggle suara (🔔 / 🔕) di header.

### ✅ Checklist Sholat Harian
- Tap kartu sholat untuk menandainya selesai.
- Progress harian (`x/5 sholat ✓`) tersimpan di `localStorage` dan reset otomatis tiap hari.

### 📿 Doa & Dzikir Kontekstual
Doa dan dzikir muncul **otomatis sesuai jendela waktu** yang relevan:

| Waktu | Yang Ditampilkan |
|---|---|
| 01:00 → Subuh | Doa Tahajud |
| Sekitar Subuh | Doa Bangun Tidur |
| Subuh → Syuruq | Doa Setelah Subuh + **Dzikir Pagi** |
| 1 jam setelah Syuruq | Doa Aktivitas Pagi |
| Setelah Syuruq → Dzuhur | Doa Dhuha |
| Setelah Dzuhur (60 menit) | Doa Setelah Dzuhur |
| Siang → Ashar | Doa Siang |
| Setelah Ashar (60 menit) | Doa Setelah Ashar + **Dzikir Sore** |
| Ashar → Maghrib | Doa Sore |
| Maghrib → Isya | Doa Maghrib + **Bacaan Malam** |
| Setelah Isya (90 menit) | Doa Isya |
| Menjelang tidur | Doa Sebelum Tidur |

### 🤲 Dzikir Setelah Sholat
Saat sedang berada di waktu sholat aktif, otomatis muncul:
1. **Dzikir Pembuka** (Istighfar, Tasbih, Tahmid, Takbir, Tahlil)
2. **Doa Pilihan Universal**:
   - Doa Orang Tua
   - Doa Sapu Jagat
   - Doa Memohon Rezeki
   - **Ayat Seribu Dinar** (QS. At-Talaq: 2–3)
   - QS. Al-Insyirah
   - QS. Al-Baqarah: 286
3. **Dzikir Penutup**:
   - Subhanallah, Alhamdulillah, Allahu Akbar (10x)
   - Sholawat Nabi
   - Tahlil, Tahmid & Takbir tambahan
   - Istighfar Panjang

### 🌙 Bacaan Khusus Pagi/Sore & Malam
- **Pagi & Sore**: Ayat Kursi, *Bismillahilladzi la yadurru*, *Hasbiyallahu*, doa keselamatan.
- **Malam**: QS. Al-Waqi'ah, Sholawat Ibrahimiyah.

---

## 🛠️ Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** dengan design tokens semantik (HSL) di `index.css`
- **shadcn/ui** untuk komponen dasar
- **React Router** untuk routing
- **TanStack Query** untuk state management
- **Sonner** untuk notifikasi toast
- **Aladhan API** untuk jadwal sholat
- **Web Audio API** untuk suara adzan
- **localStorage** untuk persistensi (jadwal, checklist)

---

## 📂 Struktur Proyek

```
src/
├── components/
│   ├── DoaCard.tsx           # Kartu tampilan doa (Arab + transliterasi + arti)
│   ├── DzikirCard.tsx        # Kartu dzikir pembuka, penutup, & pagi/sore
│   ├── PrayerSchedule.tsx    # Grid 5 waktu sholat
│   └── ui/                   # Komponen shadcn/ui
├── hooks/
│   ├── usePrayerTimes.ts     # Fetch & cache jadwal sholat + status saat ini
│   ├── useAdzanAlert.ts      # Pemicu suara & toast adzan
│   └── useChecklist.ts       # Checklist sholat harian
├── lib/
│   ├── prayerData.ts         # Seluruh teks doa, dzikir, & metadata sholat
│   ├── audio.ts              # Generator suara beep adzan
│   └── utils.ts
├── pages/
│   ├── Index.tsx             # Halaman utama dengan logika penjadwalan doa
│   └── NotFound.tsx
└── index.css                 # Design tokens (warna, gradien, shadow)
```

---

## 🚀 Menjalankan Lokal

```bash
# Install dependencies
bun install   # atau: npm install

# Jalankan dev server
bun dev       # atau: npm run dev
```

Akses di `http://localhost:8080`. **Izinkan akses lokasi** saat diminta browser agar jadwal sholat akurat.

---

## 🎨 Design System

- Palet warna **hijau zamrud + emas**, terinspirasi nuansa masjid klasik.
- Font display elegan dipasangkan dengan **font Arabic** untuk teks ayat.
- Ornamen Islami halus pada header (`ornament-pattern`).
- Animasi `fade-up` dan transisi lembut pada interaksi.

---

## 📜 Catatan

- Aplikasi ini **client-side only** — tidak ada backend, tidak menyimpan data pengguna di server.
- Seluruh teks doa diambil dari sumber yang umum digunakan; mohon dikoreksi bila ada kekeliruan.

> رَبِّ زِدْنِي عِلْمًا
> _Semoga Allah memberkahi setiap langkahmu hari ini._
