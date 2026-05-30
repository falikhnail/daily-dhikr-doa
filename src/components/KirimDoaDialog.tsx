import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HeartHandshake, Check, RotateCcw, Send } from "lucide-react";

interface Arwah {
  id: string;
  nama: string;
  panggilan: string; // "Mbh", "Bapak", dll
}

const ARWAH_LIST: Arwah[] = [
  { id: "saminah", panggilan: "Mbh", nama: "Saminah" },
  { id: "sutipah", panggilan: "Mbh", nama: "Sutipah" },
  { id: "suyati", panggilan: "Mbh", nama: "Suyati" },
  { id: "wahono", panggilan: "Mbh", nama: "Wahono" },
  { id: "harto", panggilan: "Mbh", nama: "Harto" },
  { id: "gembeng", panggilan: "Mbh", nama: "Gembeng" },
  { id: "awi", panggilan: "Mbh", nama: "Awi" },
];

const todayKey = () => {
  const d = new Date();
  return `kirim-doa-${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};

export function KirimDoaDialog() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(todayKey());
      if (raw) setSent(JSON.parse(raw));
    } catch {}
  }, [open]);

  const persist = (next: Record<string, boolean>) => {
    setSent(next);
    try {
      localStorage.setItem(todayKey(), JSON.stringify(next));
    } catch {}
  };

  const toggle = (id: string) => {
    persist({ ...sent, [id]: !sent[id] });
  };

  const kirimSemua = () => {
    const next: Record<string, boolean> = {};
    ARWAH_LIST.forEach((a) => (next[a.id] = true));
    persist(next);
  };

  const reset = () => persist({});

  const totalSent = Object.values(sent).filter(Boolean).length;
  const progress = Math.round((totalSent / ARWAH_LIST.length) * 100);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="group h-auto w-full justify-between rounded-2xl border-accent/40 bg-card-gradient p-5 text-left shadow-soft hover:bg-accent/10 sm:p-6"
        >
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold shadow-gold">
              <HeartHandshake className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                Untuk Leluhur
              </p>
              <p className="truncate font-display text-lg font-semibold text-primary sm:text-xl">
                Kirim Doa
              </p>
              <p className="truncate text-xs text-muted-foreground">
                Al-Fatihah untuk arwah keluarga
              </p>
            </div>
          </div>
          <Send className="h-5 w-5 shrink-0 text-primary/60 group-hover:text-primary" />
        </Button>
      </DialogTrigger>

      <DialogContent className="flex h-[90vh] max-h-[90vh] max-w-2xl flex-col overflow-hidden p-0">
        <DialogHeader className="border-b bg-hero p-5 text-primary-foreground sm:p-6">
          <DialogTitle className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="font-display text-xl sm:text-2xl">Kirim Doa</span>
            <span className="font-arabic text-2xl text-accent sm:text-3xl">
              اَلْفَاتِحَة
            </span>
          </DialogTitle>
          <p className="mt-2 text-[11px] leading-relaxed text-primary-foreground/75 sm:text-xs">
            Niatkan menghadiahkan pahala bacaan Al-Fatihah untuk arwah keluarga.
            Tandai setiap nama setelah selesai membaca.
          </p>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-primary-foreground/20">
              <div
                className="h-full rounded-full bg-accent transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-semibold text-primary-foreground">
              {totalSent}/{ARWAH_LIST.length}
            </span>
          </div>
        </DialogHeader>

        <ScrollArea className="min-h-0 flex-1">
          <div className="space-y-4 p-4 sm:p-6">
            {/* Niat */}
            <article className="rounded-2xl border border-accent/30 bg-accent/5 p-4 shadow-soft">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                Niat
              </p>
              <p
                dir="rtl"
                lang="ar"
                className="mt-2 font-arabic text-xl leading-loose text-foreground sm:text-2xl"
              >
                اِلٰى حَضْرَةِ النَّبِيِّ الْمُصْطَفٰى مُحَمَّدٍ ﷺ، ثُمَّ اِلٰى
                اَرْوَاحِ آبَائِنَا وَاُمَّهَاتِنَا وَاَجْدَادِنَا
                وَجَدَّاتِنَا… اَلْفَاتِحَة
              </p>
              <p className="mt-3 border-t border-border pt-3 text-sm italic text-accent-foreground/80">
                Ilā ḥaḍrati an-nabiyyil-muṣṭafā Muḥammadin ﷺ, ṡumma ilā arwāḥi
                ābā'inā wa ummahātinā wa ajdādinā wa jaddātinā… Al-Fātiḥah.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                "Kepada Nabi Muhammad ﷺ, kemudian kepada arwah bapak-ibu, kakek,
                nenek kami…"
              </p>
            </article>

            {/* Daftar Arwah */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Daftar Arwah
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-7 px-2 text-xs"
                    onClick={reset}
                  >
                    <RotateCcw className="mr-1 h-3 w-3" /> Reset
                  </Button>
                  <Button
                    size="sm"
                    className="h-7 px-2 text-xs"
                    onClick={kirimSemua}
                  >
                    <Check className="mr-1 h-3 w-3" /> Tandai semua
                  </Button>
                </div>
              </div>

              {ARWAH_LIST.map((a) => {
                const done = !!sent[a.id];
                return (
                  <button
                    key={a.id}
                    onClick={() => toggle(a.id)}
                    className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left shadow-soft transition ${
                      done
                        ? "border-accent/50 bg-accent/10"
                        : "border-border bg-card hover:bg-muted/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          done
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {done ? <Check className="h-4 w-4" /> : a.nama[0]}
                      </div>
                      <div>
                        <p className="font-display text-base font-semibold text-primary">
                          {a.panggilan} {a.nama}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {done
                            ? "Sudah dikirim hari ini"
                            : "Tap untuk menandai sudah dibacakan Al-Fatihah"}
                        </p>
                      </div>
                    </div>
                    <Send
                      className={`h-4 w-4 ${
                        done ? "text-accent" : "text-muted-foreground"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Al-Fatihah */}
            <article className="rounded-2xl border border-border bg-card p-4 shadow-soft">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                Bacaan Al-Fatihah
              </p>
              <p
                dir="rtl"
                lang="ar"
                className="mt-2 font-arabic text-2xl leading-loose text-foreground sm:text-3xl"
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ • الْحَمْدُ لِلَّهِ رَبِّ
                الْعَالَمِينَ • الرَّحْمَٰنِ الرَّحِيمِ • مَالِكِ يَوْمِ
                الدِّينِ • إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ • اهْدِنَا
                الصِّرَاطَ الْمُسْتَقِيمَ • صِرَاطَ الَّذِينَ أَنْعَمْتَ
                عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ •
                آمِينَ
              </p>
              <p className="mt-3 border-t border-border pt-3 text-sm italic text-accent-foreground/80">
                Bismillāhirraḥmānirraḥīm. Alḥamdulillāhi rabbil-‘ālamīn.
                Ar-raḥmānir-raḥīm. Māliki yaumiddīn. Iyyāka na‘budu wa iyyāka
                nasta‘īn. Ihdinaṣ-ṣirāṭal-mustaqīm. Ṣirāṭalladzīna an‘amta
                ‘alaihim ghairil-maghḍūbi ‘alaihim wa laḍ-ḍāllīn. Āmīn.
              </p>
            </article>

            {/* Doa Penutup */}
            <article className="rounded-2xl border border-border bg-card p-4 shadow-soft">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                Doa Penutup
              </p>
              <p
                dir="rtl"
                lang="ar"
                className="mt-2 font-arabic text-xl leading-loose text-foreground sm:text-2xl"
              >
                اَللّٰهُمَّ اغْفِرْ لَهُمْ وَارْحَمْهُمْ وَعَافِهِمْ وَاعْفُ
                عَنْهُمْ، وَاَكْرِمْ نُزُلَهُمْ، وَوَسِّعْ مَدْخَلَهُمْ
              </p>
              <p className="mt-3 border-t border-border pt-3 text-sm italic text-accent-foreground/80">
                Allāhummaghfir lahum warḥamhum wa ‘āfihim wa‘fu ‘anhum, wa
                akrim nuzulahum, wa wassi‘ madkhalahum.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                "Ya Allah, ampunilah mereka, rahmatilah, maafkan, muliakanlah
                tempat tinggal mereka, dan lapangkanlah kubur mereka."
              </p>
            </article>

            <p className="pt-2 text-center text-xs italic text-muted-foreground">
              Pencatatan hari ini akan otomatis ter-reset besok pagi.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
