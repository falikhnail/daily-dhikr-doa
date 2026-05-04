import { DZIKIR_SETELAH_SHOLAT, DZIKIR_PENUTUP, DZIKIR_PAGI_SORE, type DzikirItem } from "@/lib/prayerData";
import { Sparkles, Moon, Sun } from "lucide-react";

interface DzikirListProps {
  items: DzikirItem[];
  title: string;
  subtitle: string;
  icon: "gold" | "primary";
}

function DzikirList({ items, title, subtitle, icon }: DzikirListProps) {
  const isGold = icon === "gold";
  return (
    <div className="animate-fade-up rounded-3xl border border-border bg-card-gradient p-6 shadow-soft sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div
          className={
            isGold
              ? "flex h-10 w-10 items-center justify-center rounded-full bg-gold shadow-gold"
              : "flex h-10 w-10 items-center justify-center rounded-full bg-primary/10"
          }
        >
          {isGold ? (
            <Sparkles className="h-5 w-5 text-accent-foreground" />
          ) : (
            <Moon className="h-5 w-5 text-primary" />
          )}
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-primary">{title}</h2>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <ol className="space-y-5">
        {items.map((d, i) => (
          <li
            key={i}
            className={
              isGold
                ? "border-l-2 border-accent/40 pl-4"
                : "border-l-2 border-primary/30 pl-4"
            }
          >
            <div className="flex items-baseline justify-between gap-3">
              <span
                className={
                  isGold
                    ? "text-xs font-semibold uppercase tracking-widest text-accent"
                    : "text-xs font-semibold uppercase tracking-widest text-primary"
                }
              >
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
  );
}

export function DzikirCard() {
  return (
    <DzikirList
      items={DZIKIR_SETELAH_SHOLAT}
      title="Dzikir Setelah Sholat"
      subtitle="Sebelum doa utama"
      icon="gold"
    />
  );
}

export function DzikirPagiSoreCard({ variant }: { variant: "pagi" | "sore" }) {
  return (
    <DzikirList
      items={DZIKIR_PAGI_SORE}
      title={variant === "pagi" ? "Dzikir Pagi" : "Dzikir Sore"}
      subtitle={variant === "pagi" ? "Setelah Subuh — perlindungan & tawakal" : "Setelah Ashar — perlindungan & tawakal"}
      icon="gold"
    />
  );
}

export function DzikirPenutupCard() {
  return (
    <DzikirList
      items={DZIKIR_PENUTUP}
      title="Dzikir Penutup"
      subtitle="Setelah doa utama"
      icon="primary"
    />
  );
}
