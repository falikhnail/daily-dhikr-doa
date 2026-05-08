import { useEffect, useMemo, useState } from "react";
import { usePrayerTimes, getPrayerStatus } from "@/hooks/usePrayerTimes";
import { useAdzanAlert } from "@/hooks/useAdzanAlert";
import { useChecklist } from "@/hooks/useChecklist";
import { PrayerSchedule } from "@/components/PrayerSchedule";
import { DoaCard } from "@/components/DoaCard";
import { DzikirCard, DzikirPenutupCard, DzikirPagiSoreCard } from "@/components/DzikirCard";
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
  DOA_UNIVERSAL,
  DOA_MALAM,
  PRAYERS,
  type PrayerKey,
} from "@/lib/prayerData";
import { Bell, BellOff, MapPin, Moon, Sparkles, BookOpen, Sun, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PushToggle } from "@/components/PushToggle";
import { useDzikirReminder } from "@/hooks/useDzikirReminder";
import { SurahDialog } from "@/components/SurahDialog";
import { AL_MULK, AL_MULK_INFO } from "@/lib/alMulkData";
import { AL_WAQIAH, AL_WAQIAH_INFO } from "@/lib/alWaqiahData";
import { YASIN, YASIN_INFO } from "@/lib/yasinData";
import { AL_KAHFI, AL_KAHFI_INFO } from "@/lib/alKahfiData";
import { AR_RAHMAN, AR_RAHMAN_INFO } from "@/lib/arRahmanData";
import { AS_SAJDAH, AS_SAJDAH_INFO } from "@/lib/asSajdahData";
import { useAlMulkReminder } from "@/hooks/useAlMulkReminder";
import { useAyatHarianReminder } from "@/hooks/useAyatHarianReminder";
import { AyatHarianCard } from "@/components/AyatHarianCard";
import { AsmaulHusnaDialog } from "@/components/AsmaulHusnaDialog";
import { TahlilDialog } from "@/components/TahlilDialog";
import { DoaTematikDialog } from "@/components/DoaTematikDialog";
import { ArbainDialog } from "@/components/ArbainDialog";

const Index = () => {
  const { times, loading, error, city, date } = usePrayerTimes();
  const [now, setNow] = useState(new Date());
  const [soundOn, setSoundOn] = useState(true);
  const { checked, toggle } = useChecklist();
  const { enabled: dzikirOn, toggle: toggleDzikir } = useDzikirReminder();
  const { enabled: mulkOn, toggle: toggleMulk } = useAlMulkReminder();
  const { enabled: ayatOn, toggle: toggleAyat } = useAyatHarianReminder();

  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(i);
  }, []);

  useAdzanAlert(times, soundOn);

  const status = useMemo(() => getPrayerStatus(times), [times, now]);

  const hour = now.getHours();
  const nowMin = hour * 60 + now.getMinutes();

  const toMin = (t?: string) => {
    if (!t) return null;
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };
  const fajrMin = toMin(times?.fajr);
  const sunriseMin = toMin(times?.sunrise);
  const dhuhrMin = toMin(times?.dhuhr);
  const asrMin = toMin(times?.asr);
  const maghribMin = toMin(times?.maghrib);
  const ishaMin = toMin(times?.isha);

  const between = (a: number | null, b: number | null) =>
    a !== null && b !== null && nowMin >= a && nowMin < b;

  // Jendela waktu setiap doa
  const showTahajud = hour >= 1 && (fajrMin === null || nowMin < fajrMin); // 01:00 → Subuh
  const showWake = fajrMin !== null
    ? nowMin >= fajrMin && nowMin < fajrMin + 30
    : hour >= 4 && hour < 5;
  const showFajrDoa = between(fajrMin, sunriseMin);
  const showMorningDoa = sunriseMin !== null &&
    nowMin >= sunriseMin && nowMin < sunriseMin + 60;
  const showDhuha = sunriseMin !== null && dhuhrMin !== null &&
    nowMin >= sunriseMin + 60 && nowMin < dhuhrMin - 15;
  const showDzuhurDoa = dhuhrMin !== null &&
    nowMin >= dhuhrMin && nowMin < dhuhrMin + 60;
  const showSiang = dhuhrMin !== null && asrMin !== null &&
    nowMin >= dhuhrMin + 60 && nowMin < asrMin;
  const showAsharDoa = asrMin !== null &&
    nowMin >= asrMin && nowMin < asrMin + 60;
  const showSore = asrMin !== null && maghribMin !== null &&
    nowMin >= asrMin + 60 && nowMin < maghribMin;
  const showMaghribDoa = between(maghribMin, ishaMin);
  const showIshaDoa = ishaMin !== null &&
    nowMin >= ishaMin && nowMin < ishaMin + 90;
  const showTidur = ishaMin !== null
    ? (nowMin >= ishaMin + 90 || hour < 1)
    : hour >= 21 || hour < 1;

  const completedCount = PRAYERS.filter((p) => checked[p.key]).length;
  const anyDoa =
    showTahajud || showWake || showFajrDoa || showMorningDoa || showDhuha ||
    showDzuhurDoa || showSiang || showAsharDoa || showSore || showMaghribDoa ||
    showIshaDoa || showTidur;

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
            <div className="flex shrink-0 items-center gap-2">
              <PushToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDzikir}
                className={
                  dzikirOn
                    ? "shrink-0 rounded-full bg-accent/30 text-accent-foreground hover:bg-accent/40"
                    : "shrink-0 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                }
                aria-label="Toggle pengingat dzikir pagi & sore"
                title={dzikirOn ? "Pengingat dzikir pagi/sore: ON (06:00 & 16:30)" : "Pengingat dzikir pagi/sore: OFF"}
              >
                <Sparkles className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMulk}
                className={
                  mulkOn
                    ? "shrink-0 rounded-full bg-accent/30 text-accent-foreground hover:bg-accent/40"
                    : "shrink-0 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                }
                aria-label="Toggle pengingat Surah Al-Mulk"
                title={mulkOn ? "Pengingat Al-Mulk: ON (20:00)" : "Pengingat Al-Mulk: OFF"}
              >
                <BookOpen className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleAyat}
                className={
                  ayatOn
                    ? "shrink-0 rounded-full bg-accent/30 text-accent-foreground hover:bg-accent/40"
                    : "shrink-0 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                }
                aria-label="Toggle pengingat ayat harian"
                title={ayatOn ? "Pengingat Ayat Harian: ON (06:30)" : "Pengingat Ayat Harian: OFF"}
              >
                <Sun className="h-5 w-5" />
              </Button>
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

        {/* Doa Tahajud — sepertiga malam (01:00 → Subuh) */}
        {showTahajud && <DoaCard doa={DOA_TAHAJUD} badge="Sepertiga Malam" />}

        {/* Doa Bangun Tidur — saat/sekitar Subuh */}
        {showWake && <DoaCard doa={DOA_BANGUN_TIDUR} badge="Bangun Tidur" />}

        {/* Dzikir setelah sholat — saat ada waktu sholat aktif */}
        {status.current && (
          <>
            <DzikirCard />
            <section className="space-y-4">
              <div className="flex items-end justify-between">
                <h2 className="font-display text-xl font-semibold text-primary">Doa Pilihan</h2>
                <span className="text-xs text-muted-foreground">Setelah dzikir pembuka</span>
              </div>
              {DOA_UNIVERSAL.map((d) => (
                <DoaCard key={d.id} doa={d} badge={d.subtitle} />
              ))}
            </section>
            <DzikirPenutupCard />
          </>
        )}

        {/* Doa setelah Subuh — Subuh → Syuruq */}
        {showFajrDoa && <DoaCard doa={DOA_SETELAH_SUBUH} badge="Setelah Subuh" />}

        {/* Dzikir Pagi — setelah Subuh hingga Syuruq */}
        {showFajrDoa && <DzikirPagiSoreCard variant="pagi" />}

        {/* Doa pagi — 1 jam setelah Syuruq */}
        {showMorningDoa && <DoaCard doa={DOA_PAGI} badge="Aktivitas Pagi" />}

        {/* Doa Dhuha */}
        {showDhuha && <DoaCard doa={DOA_DHUHA} badge="Waktu Dhuha" />}

        {/* Doa setelah Dzuhur */}
        {showDzuhurDoa && <DoaCard doa={DOA_SETELAH_DZUHUR} badge="Setelah Dzuhur" />}

        {/* Doa siang */}
        {showSiang && <DoaCard doa={DOA_SIANG} badge="Siang Hari" />}

        {/* Doa setelah Ashar */}
        {showAsharDoa && <DoaCard doa={DOA_SETELAH_ASHAR} badge="Setelah Ashar" />}

        {/* Dzikir Sore — setelah Ashar hingga Maghrib */}
        {(showAsharDoa || showSore) && <DzikirPagiSoreCard variant="sore" />}

        {/* Doa sore */}
        {showSore && <DoaCard doa={DOA_SORE} badge="Sore Hari" />}

        {/* Doa Maghrib */}
        {showMaghribDoa && <DoaCard doa={DOA_MAGHRIB} badge="Setelah Maghrib" />}

        {/* Doa Isya */}
        {showIshaDoa && <DoaCard doa={DOA_ISYA} badge="Setelah Isya" />}

        {/* Doa khusus malam — setelah Maghrib, Isya, atau menjelang tidur */}
        {(showMaghribDoa || showIshaDoa || showTidur) && (
          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-primary">Bacaan Malam</h2>
            {DOA_MALAM.map((d) => (
              <DoaCard key={d.id} doa={d} badge={d.subtitle} />
            ))}
          </section>
        )}

        {/* Doa sebelum tidur */}
        {showTidur && <DoaCard doa={DOA_SEBELUM_TIDUR} badge="Sebelum Tidur" />}

        {/* Quiet state */}
        {times && !status.current && !anyDoa && (
          <div className="rounded-3xl border border-border bg-card-gradient p-8 text-center">
            <Moon className="mx-auto h-8 w-8 text-accent" />
            <p className="mt-3 font-display text-xl text-primary">Waktu istirahat</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Belum ada doa terjadwal. Pengingat akan muncul saat masuk waktunya.
            </p>
          </div>
        )}

        {/* Surah pilihan — selalu tersedia, terpisah dari daftar dzikir/doa */}
        <section className="space-y-3">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-xl font-semibold text-primary">Surah Pilihan</h2>
            <span className="text-xs text-muted-foreground">Tap untuk membuka</span>
          </div>
          <SurahDialog
            info={AL_MULK_INFO}
            ayat={AL_MULK}
            category="Bacaan Malam"
            icon={Moon}
            closing="Semoga Allah menjadikannya penyelamat di alam kubur. Aamiin."
          />
          <SurahDialog
            info={AL_WAQIAH_INFO}
            ayat={AL_WAQIAH}
            category="Pembuka Rezeki"
            icon={Sparkles}
            closing="Semoga Allah melapangkan rezeki yang halal dan berkah. Aamiin."
          />
          <SurahDialog
            info={YASIN_INFO}
            ayat={YASIN}
            category="Jantung Al-Qur'an"
            icon={Heart}
            closing="Semoga Allah memudahkan segala urusan dan husnul khatimah. Aamiin."
          />
          <SurahDialog
            info={AL_KAHFI_INFO}
            ayat={AL_KAHFI}
            category="Sunnah Hari Jumat"
            icon={Sun}
            closing="Semoga Allah melindungi dari fitnah Dajjal. Aamiin."
          />
          <SurahDialog
            info={AR_RAHMAN_INFO}
            ayat={AR_RAHMAN}
            category="Pengantin Al-Qur'an"
            icon={Star}
            closing="Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?"
          />
          <SurahDialog
            info={AS_SAJDAH_INFO}
            ayat={AS_SAJDAH}
            category="Sebelum Tidur"
            icon={BookOpen}
            closing="Semoga Allah menerima dan memberkahi bacaan ini. Aamiin."
          />
        </section>

        {/* Bacaan & Ilmu Tambahan */}
        <section className="space-y-3">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-xl font-semibold text-primary">Bacaan & Ilmu</h2>
            <span className="text-xs text-muted-foreground">Tap untuk membuka</span>
          </div>
          <AsmaulHusnaDialog />
          <TahlilDialog />
          <DoaTematikDialog />
          <ArbainDialog />
        </section>

        <footer className="pt-6 text-center text-xs text-muted-foreground">
          <p className="font-arabic text-lg text-primary/70">رَبِّ زِدْنِي عِلْمًا</p>
          <p className="mt-1">Semoga Allah memberkahi setiap langkahmu hari ini</p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
