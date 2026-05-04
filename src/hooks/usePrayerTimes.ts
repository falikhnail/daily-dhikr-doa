import { useEffect, useState } from "react";
import type { PrayerKey } from "@/lib/prayerData";

export interface PrayerTimes {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

export interface PrayerInfo {
  times: PrayerTimes | null;
  loading: boolean;
  error: string | null;
  city: string | null;
  date: string | null;
}

const CACHE_KEY = "prayer-times-cache-v1";

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export function usePrayerTimes(): PrayerInfo {
  const [info, setInfo] = useState<PrayerInfo>({
    times: null,
    loading: true,
    error: null,
    city: null,
    date: null,
  });

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (parsed.day === todayKey()) {
          setInfo({
            times: parsed.times,
            loading: false,
            error: null,
            city: parsed.city,
            date: parsed.date,
          });
          return;
        }
      } catch {}
    }

    if (!("geolocation" in navigator)) {
      setInfo((s) => ({ ...s, loading: false, error: "Geolokasi tidak tersedia di perangkat ini" }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const d = new Date();
          const dd = String(d.getDate()).padStart(2, "0");
          const mm = String(d.getMonth() + 1).padStart(2, "0");
          const yyyy = d.getFullYear();
          const url = `https://api.aladhan.com/v1/timings/${dd}-${mm}-${yyyy}?latitude=${latitude}&longitude=${longitude}&method=20`;
          const res = await fetch(url);
          const data = await res.json();
          const t = data.data.timings;
          const times: PrayerTimes = {
            fajr: t.Fajr,
            sunrise: t.Sunrise,
            dhuhr: t.Dhuhr,
            asr: t.Asr,
            maghrib: t.Maghrib,
            isha: t.Isha,
          };
          const city = data.data.meta?.timezone || "Lokasi Anda";
          const date = data.data.date.readable;
          const payload = { day: todayKey(), times, city, date };
          localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
          setInfo({ times, loading: false, error: null, city, date });
        } catch (e) {
          setInfo((s) => ({ ...s, loading: false, error: "Gagal memuat jadwal sholat" }));
        }
      },
      () => {
        setInfo((s) => ({
          ...s,
          loading: false,
          error: "Izinkan akses lokasi untuk jadwal sholat akurat",
        }));
      },
      { timeout: 10000 }
    );
  }, []);

  return info;
}

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

export interface PrayerStatus {
  current: PrayerKey | null;
  next: PrayerKey | null;
  nextTime: string | null;
  minutesToNext: number | null;
  isAfterFajrBeforeSunrise: boolean;
  isMorningActivity: boolean; // sunrise → dhuhr
}

export function getPrayerStatus(times: PrayerTimes | null): PrayerStatus {
  if (!times) {
    return {
      current: null,
      next: null,
      nextTime: null,
      minutesToNext: null,
      isAfterFajrBeforeSunrise: false,
      isMorningActivity: false,
    };
  }
  const now = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const order: { key: PrayerKey; time: string }[] = [
    { key: "fajr", time: times.fajr },
    { key: "dhuhr", time: times.dhuhr },
    { key: "asr", time: times.asr },
    { key: "maghrib", time: times.maghrib },
    { key: "isha", time: times.isha },
  ];
  let current: PrayerKey | null = null;
  let next: PrayerKey | null = null;
  let nextTime: string | null = null;
  for (let i = 0; i < order.length; i++) {
    const t = toMinutes(order[i].time);
    if (nowMin >= t) current = order[i].key;
    else if (next === null) {
      next = order[i].key;
      nextTime = order[i].time;
      break;
    }
  }
  if (!next) {
    next = "fajr";
    nextTime = times.fajr;
  }
  const minutesToNext = nextTime
    ? (toMinutes(nextTime) - nowMin + 24 * 60) % (24 * 60)
    : null;

  const fajrMin = toMinutes(times.fajr);
  const sunriseMin = toMinutes(times.sunrise);
  const dhuhrMin = toMinutes(times.dhuhr);
  const isAfterFajrBeforeSunrise = nowMin >= fajrMin && nowMin < sunriseMin;
  const isMorningActivity = nowMin >= sunriseMin && nowMin < dhuhrMin;

  return { current, next, nextTime, minutesToNext, isAfterFajrBeforeSunrise, isMorningActivity };
}
