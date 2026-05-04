import { DZIKIR_SETELAH_SHOLAT, DZIKIR_PENUTUP } from "@/lib/prayerData";
import { Sparkles, Moon } from "lucide-react";

export function DzikirCard() {
  return (
    <div className="animate-fade-up rounded-3xl border border-border bg-card-gradient p-6 shadow-soft sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold shadow-gold">
          <Sparkles className="h-5 w-5 text-accent-foreground" />
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-primary">Dzikir Setelah Sholat</h2>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Sebelum doa utama</p>
        </div>
      </div>
      <ol className="space-y-5">
        {DZIKIR_SETELAH_SHOLAT.map((d, i) => (
          <li key={i} className="border-l-2 border-accent/40 pl-4">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                {d.count}x
              </span>
            </div>
            {d.arabic && (
              <p dir="rtl" className="font-arabic mt-2 text-2xl leading-loose text-foreground">
                {d.arabic}
              </p>
            )}
            <p className="mt-1 text-sm font-medium text-foreground/90">{d.latin}</p>
            {d.meaning && <p className="mt-1 text-xs italic text-muted-foreground">{d.meaning}</p>}
          </li>
        ))}
      </ol>

      <div className="mt-8 border-t border-border pt-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Moon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-primary">Dzikir Penutup</h3>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Setelah doa utama</p>
          </div>
        </div>
        <ol className="space-y-5">
          {DZIKIR_PENUTUP.map((d, i) => (
            <li key={i} className="border-l-2 border-primary/30 pl-4">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                  {d.count}x
                </span>
              </div>
              {d.arabic && (
                <p dir="rtl" className="font-arabic mt-2 text-2xl leading-loose text-foreground">
                  {d.arabic}
                </p>
              )}
              <p className="mt-1 text-sm font-medium text-foreground/90">{d.latin}</p>
              {d.meaning && <p className="mt-1 text-xs italic text-muted-foreground">{d.meaning}</p>}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
