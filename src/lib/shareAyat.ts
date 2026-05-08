// Generate gambar share dari ayat (Canvas) — siap di-download/share
import type { AyatHarian } from "./ayatHarianData";

const W = 1080;
const H = 1080;

function wrap(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const test = line ? line + " " + w : w;
    if (ctx.measureText(test).width > maxW && line) {
      lines.push(line);
      line = w;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

export async function generateAyatImage(ayat: AyatHarian): Promise<Blob> {
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  // Background gradien hijau-emas (sesuai brand)
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, "#0f3d2e");
  grad.addColorStop(1, "#1a5f47");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Ornamen pojok
  ctx.strokeStyle = "rgba(212, 175, 55, 0.35)";
  ctx.lineWidth = 4;
  ctx.strokeRect(40, 40, W - 80, H - 80);
  ctx.strokeStyle = "rgba(212, 175, 55, 0.2)";
  ctx.lineWidth = 2;
  ctx.strokeRect(60, 60, W - 120, H - 120);

  // Header: bismillah / brand
  ctx.fillStyle = "#d4af37";
  ctx.textAlign = "center";
  ctx.font = "bold 32px serif";
  ctx.fillText("✦ AYAT HARIAN ✦", W / 2, 130);

  // Arabic
  ctx.fillStyle = "#ffffff";
  ctx.direction = "rtl";
  ctx.textAlign = "center";
  ctx.font = "bold 56px 'Amiri', 'Scheherazade New', serif";
  const arabLines = wrap(ctx, ayat.arab, W - 200);
  let y = 280;
  for (const l of arabLines.slice(0, 4)) {
    ctx.fillText(l, W / 2, y);
    y += 80;
  }

  // Latin
  ctx.direction = "ltr";
  ctx.fillStyle = "rgba(212, 175, 55, 0.95)";
  ctx.font = "italic 26px serif";
  const latinLines = wrap(ctx, ayat.latin, W - 180);
  y = Math.max(y + 30, 580);
  for (const l of latinLines.slice(0, 3)) {
    ctx.fillText(l, W / 2, y);
    y += 38;
  }

  // Translation
  ctx.fillStyle = "#ffffff";
  ctx.font = "28px serif";
  const trLines = wrap(ctx, `“${ayat.arti}”`, W - 180);
  y += 30;
  for (const l of trLines.slice(0, 6)) {
    ctx.fillText(l, W / 2, y);
    y += 42;
  }

  // Reference
  ctx.fillStyle = "#d4af37";
  ctx.font = "bold 26px serif";
  ctx.fillText(`— QS. ${ayat.surah} (${ayat.surahNumber}) : ${ayat.ayat} —`, W / 2, H - 100);

  // Footer brand
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.font = "20px sans-serif";
  ctx.fillText("Pengingat Sholat & Doa Harian", W / 2, H - 60);

  return await new Promise<Blob>((resolve) =>
    canvas.toBlob((b) => resolve(b!), "image/png", 0.95)
  );
}

export async function shareAyat(ayat: AyatHarian) {
  const blob = await generateAyatImage(ayat);
  const file = new File([blob], `ayat-${ayat.surahNumber}-${ayat.ayat}.png`, {
    type: "image/png",
  });
  const text = `${ayat.arti}\n\n— QS. ${ayat.surah} (${ayat.surahNumber}):${ayat.ayat}`;

  // Coba Web Share API (mobile)
  const navAny = navigator as Navigator & {
    canShare?: (data: { files?: File[] }) => boolean;
  };
  if (navAny.canShare && navAny.canShare({ files: [file] })) {
    try {
      await navigator.share({ files: [file], text, title: "Ayat Harian" });
      return "shared" as const;
    } catch {
      // user cancel — fallthrough ke download
    }
  }
  // Fallback: download
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = file.name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
  return "downloaded" as const;
}
