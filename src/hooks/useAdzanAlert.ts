import { useEffect, useRef } from "react";
import type { PrayerTimes } from "./usePrayerTimes";
import { playAdzanBeep } from "@/lib/audio";
import { toast } from "sonner";

const PRAYER_LABELS: Record<string, string> = {
  fajr: "Subuh",
  dhuhr: "Dzuhur",
  asr: "Ashar",
  maghrib: "Maghrib",
  isha: "Isya",
};

export function useAdzanAlert(times: PrayerTimes | null, enabled: boolean) {
  const firedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (!times || !enabled) return;
    const interval = setInterval(() => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const cur = `${hh}:${mm}`;
      const day = now.toISOString().slice(0, 10);
      (["fajr", "dhuhr", "asr", "maghrib", "isha"] as const).forEach((k) => {
        const t = times[k];
        const key = `${day}-${k}`;
        if (t === cur && !firedRef.current.has(key)) {
          firedRef.current.add(key);
          playAdzanBeep();
          toast(`🕌 Waktunya Sholat ${PRAYER_LABELS[k]}`, {
            description: "Segera tunaikan sholat tepat waktu",
            duration: 10000,
          });
        }
      });
    }, 15000);
    return () => clearInterval(interval);
  }, [times, enabled]);
}
