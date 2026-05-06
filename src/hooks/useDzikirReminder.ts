import { useEffect, useRef, useState, useCallback } from "react";
import { toast } from "sonner";
import { playAdzanBeep } from "@/lib/audio";

const STORAGE_KEY = "dzikir-reminder-enabled";
const MORNING = { h: 6, m: 0, label: "Dzikir Pagi", desc: "Mulai hari dengan Sayyidul Istighfar & dzikir pagi" };
const EVENING = { h: 16, m: 30, label: "Dzikir Sore", desc: "Lindungi sisa hari dengan dzikir sore" };

export function useDzikirReminder() {
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
      const day = now.toISOString().slice(0, 10);
      [MORNING, EVENING].forEach((s) => {
        if (now.getHours() === s.h && now.getMinutes() === s.m) {
          const key = `${day}-${s.label}`;
          if (!firedRef.current.has(key)) {
            firedRef.current.add(key);
            playAdzanBeep();
            toast(`📿 ${s.label}`, { description: s.desc, duration: 10000 });
          }
        }
      });
    };
    const i = setInterval(tick, 20000);
    tick();
    return () => clearInterval(i);
  }, [enabled]);

  const toggle = useCallback(() => setEnabled((v) => !v), []);
  return { enabled, toggle };
}
