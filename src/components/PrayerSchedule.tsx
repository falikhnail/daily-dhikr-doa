import { PRAYERS, type PrayerKey } from "@/lib/prayerData";
import type { PrayerTimes } from "@/hooks/usePrayerTimes";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  times: PrayerTimes;
  current: PrayerKey | null;
  next: PrayerKey | null;
  checked: Record<string, boolean>;
  onToggle: (key: PrayerKey) => void;
}

export function PrayerSchedule({ times, current, next, checked, onToggle }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
      {PRAYERS.map((p, idx) => {
        const time = times[p.key];
        const isCurrent = current === p.key;
        const isNext = next === p.key;
        const done = checked[p.key];
        return (
          <button
            key={p.key}
            onClick={() => onToggle(p.key)}
            style={{ animationDelay: `${idx * 60}ms` }}
            className={cn(
              "animate-fade-up group relative overflow-hidden rounded-2xl border p-4 text-left transition-smooth",
              isCurrent
                ? "bg-active border-transparent text-primary-foreground shadow-elegant"
                : "bg-card-gradient border-border hover:shadow-soft hover:-translate-y-0.5",
              done && !isCurrent && "border-accent/50"
            )}
          >
            {isNext && !isCurrent && (
              <span className="absolute right-2 top-2 rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-foreground">
                Berikutnya
              </span>
            )}
            <div className={cn("font-arabic text-2xl leading-none", isCurrent ? "text-accent" : "text-primary/70")}>
              {p.arabic}
            </div>
            <div className={cn("mt-2 text-xs uppercase tracking-widest", isCurrent ? "text-primary-foreground/70" : "text-muted-foreground")}>
              {p.name}
            </div>
            <div className={cn("mt-1 font-display text-2xl font-semibold", isCurrent ? "text-primary-foreground" : "text-foreground")}>
              {time}
            </div>
            <div
              className={cn(
                "mt-3 inline-flex h-6 w-6 items-center justify-center rounded-full border transition-smooth",
                done
                  ? "bg-accent border-accent text-accent-foreground"
                  : isCurrent
                  ? "border-primary-foreground/40"
                  : "border-border"
              )}
            >
              {done && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
            </div>
          </button>
        );
      })}
    </div>
  );
}
