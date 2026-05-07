import { useState, type ComponentType } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, type LucideIcon } from "lucide-react";

export interface SurahAyatLike {
  no: number;
  arabic: string;
  latin: string;
  translation: string;
}

export interface SurahInfoLike {
  name: string;
  arabicName: string;
  meaning: string;
  number: number;
  ayatCount: number;
  virtue: string;
  bismillah: string;
}

interface Props {
  info: SurahInfoLike;
  ayat: SurahAyatLike[];
  category: string; // e.g. "Bacaan Malam"
  icon: LucideIcon;
  closing?: string;
  defaultOpen?: boolean;
}

export function SurahDialog({
  info,
  ayat,
  category,
  icon: Icon,
  closing = "Semoga Allah menerima dan memberkahi bacaan ini. Aamiin.",
  defaultOpen = false,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="group h-auto w-full justify-between rounded-2xl border-accent/40 bg-card-gradient p-5 text-left shadow-soft hover:bg-accent/10 sm:p-6"
        >
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold shadow-gold">
              <Icon className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                {category}
              </p>
              <p className="truncate font-display text-lg font-semibold text-primary sm:text-xl">
                Surah {info.name}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                QS. {info.number} • {info.ayatCount} ayat
              </p>
            </div>
          </div>
          <BookOpen className="h-5 w-5 shrink-0 text-primary/60 group-hover:text-primary" />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] max-w-2xl overflow-hidden p-0">
        <DialogHeader className="border-b bg-hero p-5 text-primary-foreground sm:p-6">
          <DialogTitle className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="font-display text-xl sm:text-2xl">
              Surah {info.name}
              <span className="ml-2 text-xs font-normal text-primary-foreground/70 sm:text-sm">
                ({info.meaning})
              </span>
            </span>
            <span className="font-arabic text-2xl text-accent sm:text-3xl">
              {info.arabicName}
            </span>
          </DialogTitle>
          <p className="mt-2 text-[11px] leading-relaxed text-primary-foreground/75 sm:text-xs">
            {info.virtue}
          </p>
        </DialogHeader>

        <ScrollArea className="max-h-[70vh]">
          <div className="space-y-3 p-4 sm:space-y-4 sm:p-6">
            <p
              dir="rtl"
              className="font-arabic text-center text-2xl leading-loose text-primary"
            >
              {info.bismillah}
            </p>
            {ayat.map((a) => (
              <article
                key={a.no}
                className="rounded-2xl border border-border bg-card p-4 shadow-soft sm:p-5"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {a.no}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    QS. {info.number} : {a.no}
                  </span>
                </div>
                <p
                  dir="rtl"
                  lang="ar"
                  className="font-arabic text-2xl leading-loose text-foreground sm:text-3xl"
                >
                  {a.arabic}
                </p>
                <p className="mt-3 border-t border-border pt-3 text-sm font-medium italic text-accent-foreground/80">
                  {a.latin}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {a.translation}
                </p>
              </article>
            ))}
            <p className="pt-2 text-center text-xs italic text-muted-foreground">
              {closing}
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
