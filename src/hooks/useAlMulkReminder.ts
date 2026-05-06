import { useEffect, useRef, useState, useCallback } from "react";
import { toast } from "sonner";
import { playAdzanBeep } from "@/lib/audio";

const STORAGE_KEY = "almulk-reminder-enabled";
// Pengingat malam: 20:00
const HOUR = 20;
const MINUTE = 0;

export function useAlMulkReminder(onTrigger?: () => void) {
  const [enabled, setEnabled] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(STORAGE_KEY) === "1";
  });
  const firedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, enabled ? "1" : "0");
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const tick = () => {
      const now = new Date();
      if (now.getHours() === HOUR && now.getMinutes() === MINUTE) {
        const key = now.toISOString().slice(0, 10);
        if (!firedRef.current.has(key)) {
          firedRef.current.add(key);
          playAdzanBeep();
          toast("🌙 Saatnya membaca Surah Al-Mulk", {
            description: "Sunnah Rasulullah ﷺ sebelum tidur — penyelamat dari azab kubur.",
            duration: 15000,
            action: onTrigger
              ? { label: "Buka", onClick: () => onTrigger() }
              : undefined,
          });
        }
      }
    };
    const i = setInterval(tick, 20000);
    tick();
    return () => clearInterval(i);
  }, [enabled, onTrigger]);

  const toggle = useCallback(() => setEnabled((v) => !v), []);
  return { enabled, toggle };
}
