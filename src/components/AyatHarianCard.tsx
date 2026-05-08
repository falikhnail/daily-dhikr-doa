import { useMemo, useState } from "react";
import { Share2, Sun, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getAyatHariIni } from "@/lib/ayatHarianData";
import { shareAyat } from "@/lib/shareAyat";

export function AyatHarianCard() {
  const ayat = useMemo(() => getAyatHariIni(), []);
  const [loading, setLoading] = useState(false);

  const handleShare = async () => {
    try {
      setLoading(true);
      const result = await shareAyat(ayat);
      if (result === "downloaded") {
        toast.success("Gambar tersimpan", {
          description: "Cek folder Download di perangkatmu.",
        });
      }
    } catch (e) {
      toast.error("Gagal membuat gambar", {
        description: e instanceof Error ? e.message : "Coba lagi.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="animate-fade-up relative overflow-hidden rounded-3xl bg-active p-6 shadow-elegant sm:p-8">
      <div className="ornament-pattern absolute inset-0 opacity-30" />
      <div className="relative space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/30">
              <Sun className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                Ayat Harian · {ayat.tema}
              </p>
              <h2 className="font-display text-xl font-semibold text-primary-foreground sm:text-2xl">
                Penyejuk Hati Hari Ini
              </h2>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4">
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-2xl leading-loose text-primary-foreground sm:text-3xl"
          >
            {ayat.arab}
          </p>
          <p className="mt-3 border-t border-primary-foreground/10 pt-3 text-sm font-medium italic text-accent/95">
            {ayat.latin}
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-primary-foreground/95">
            “{ayat.arti}”
          </p>
          <p className="mt-3 text-right text-xs font-semibold uppercase tracking-widest text-accent">
            QS. {ayat.surah} ({ayat.surahNumber}) : {ayat.ayat}
          </p>
        </div>

        <Button
          onClick={handleShare}
          disabled={loading}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
        >
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Share2 className="mr-2 h-4 w-4" />
          )}
          Bagikan sebagai gambar
        </Button>
      </div>
    </section>
  );
}
