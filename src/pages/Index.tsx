import { useEffect, useMemo, useState } from "react";
import { usePrayerTimes, getPrayerStatus } from "@/hooks/usePrayerTimes";
import { useAdzanAlert } from "@/hooks/useAdzanAlert";
import { useChecklist } from "@/hooks/useChecklist";
import { PrayerSchedule } from "@/components/PrayerSchedule";
import { DoaCard } from "@/components/DoaCard";
import { DzikirCard } from "@/components/DzikirCard";
import {
  DOA_BANGUN_TIDUR,
  DOA_PAGI,
  DOA_SETELAH_SUBUH,
  DOA_DHUHA,
  DOA_SETELAH_DZUHUR,
  DOA_SIANG,
  DOA_SETELAH_ASHAR,
  DOA_SORE,
  DOA_MAGHRIB,
  DOA_ISYA,
  DOA_SEBELUM_TIDUR,
  DOA_TAHAJUD,
  PRAYERS,
  type PrayerKey,
} from "@/lib/prayerData";
import { Bell, BellOff, MapPin, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { times, loading, error, city, date } = usePrayerTimes();
  const [now, setNow] = useState(new Date());
  const [soundOn, setSoundOn] = useState(true);
  const { checked, toggle } = useChecklist();

  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(i);
  }, []);

  useAdzanAlert(times, soundOn);

  const status = useMemo(() => getPrayerStatus(times), [times, now]);

  const hour = now.getHours();
  const showWakeDoa = hour >= 3 && hour < 5 && !times; // fallback before fajr known
  const showFajrDoa =
    !!times && status.isAfterFajrBeforeSunrise && checked.fajr;
  const showMorningDoa = !!times && status.isMorningActivity;
  const showWakeAlways = hour >= 3 && hour <= 6; // window doa bangun

  const completedCount = PRAYERS.filter((p) => checked[p.key]).length;

  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="ornament-pattern absolute inset-0 opacity-40" />
        <div className="container relative mx-auto px-5 py-10 sm:py-14">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-arabic text-3xl text-accent">بِسْمِ اللَّهِ</p>
              <h1 className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-5xl">
                Pengingat Sholat & Doa Harian
              </h1>
              <p className="mt-2 max-w-md text-sm text-primary-foreground/75">
                Teman ibadah dan produktivitasmu — dzikir & doa muncul tepat waktu.
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSoundOn((s) => !s)}
              className="shrink-0 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
              aria-label="Toggle suara"
            >
              {soundOn ? <Bell className="h-5 w-5" /> : <BellOff className="h-5 w-5" />}
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-primary-foreground/80">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {city || "Mendeteksi lokasi…"}
            </span>
            {date && <span>•  {date}</span>}
            <span className="ml-auto rounded-full bg-primary-foreground/10 px-3 py-1">
              {now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>

          {/* Next prayer countdown */}
          {status.next && status.minutesToNext !== null && (
            <div className="mt-6 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-primary-foreground/60">
                Sholat berikutnya
              </p>
              <div className="mt-1 flex items-end justify-between gap-3">
                <div>
                  <p className="font-display text-2xl font-semibold">
                    {PRAYERS.find((p) => p.key === status.next)?.name} •{" "}
                    <span className="text-accent">{status.nextTime}</span>
                  </p>
                </div>
                <p className="text-sm text-primary-foreground/80">
                  {Math.floor(status.minutesToNext / 60)}j{" "}
                  {status.minutesToNext % 60}m lagi
                </p>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="container mx-auto space-y-6 px-5 py-8">
        {/* Status messages */}
        {loading && (
          <div className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
            Memuat jadwal sholat…
          </div>
        )}
        {error && (
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5 text-sm text-destructive">
            {error}
          </div>
        )}

        {/* Schedule */}
        {times && (
          <section>
            <div className="mb-3 flex items-end justify-between">
              <h2 className="font-display text-xl font-semibold text-primary">Jadwal Hari Ini</h2>
              <span className="text-xs text-muted-foreground">
                {completedCount}/5 sholat ✓
              </span>
            </div>
            <PrayerSchedule
              times={times}
              current={status.current}
              next={status.next}
              checked={checked}
              onToggle={(k: PrayerKey) => toggle(k)}
            />
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Tap kartu untuk menandai sholat selesai
            </p>
          </section>
        )}

        {/* Doa Bangun Tidur — early morning window */}
        {(showWakeAlways || showWakeDoa) && (
          <DoaCard doa={DOA_BANGUN_TIDUR} badge="Saat ini" />
        )}

        {/* Dzikir setelah sholat — selalu tersedia setelah ada waktu sholat aktif */}
        {status.current && (
          <DzikirCard />
        )}

        {/* Doa setelah Subuh — setelah Subuh & sebelum sunrise, atau setelah ditandai */}
        {showFajrDoa && <DoaCard doa={DOA_SETELAH_SUBUH} badge="Setelah Subuh" />}
        {!showFajrDoa && status.isAfterFajrBeforeSunrise && (
          <DoaCard doa={DOA_SETELAH_SUBUH} badge="Setelah Subuh" />
        )}

        {/* Doa pagi — sunrise → dhuhr */}
        {showMorningDoa && <DoaCard doa={DOA_PAGI} badge="Aktivitas Pagi" />}

        {/* Quiet state */}
        {times && !status.current && !showWakeAlways && (
          <div className="rounded-3xl border border-border bg-card-gradient p-8 text-center">
            <Moon className="mx-auto h-8 w-8 text-accent" />
            <p className="mt-3 font-display text-xl text-primary">Waktu istirahat</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Belum ada doa terjadwal. Pengingat akan muncul saat masuk waktu sholat.
            </p>
          </div>
        )}

        <footer className="pt-6 text-center text-xs text-muted-foreground">
          <p className="font-arabic text-lg text-primary/70">رَبِّ زِدْنِي عِلْمًا</p>
          <p className="mt-1">Semoga Allah memberkahi setiap langkahmu hari ini</p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
