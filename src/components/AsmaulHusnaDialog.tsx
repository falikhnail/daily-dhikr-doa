import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles, BookOpen } from "lucide-react";
import { ASMAUL_HUSNA } from "@/lib/asmaulHusnaData";

export function AsmaulHusnaDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="group h-auto w-full justify-between rounded-2xl border-accent/40 bg-card-gradient p-5 text-left shadow-soft hover:bg-accent/10 sm:p-6"
        >
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold shadow-gold">
              <Sparkles className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                99 Nama Allah
              </p>
              <p className="truncate font-display text-lg font-semibold text-primary sm:text-xl">
                Asmaul Husna
              </p>
              <p className="truncate text-xs text-muted-foreground">
                Nama-nama Allah yang Maha Indah
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
              Asmaul Husna
              <span className="ml-2 text-xs font-normal text-primary-foreground/70 sm:text-sm">
                (99 Nama Indah Allah)
              </span>
            </span>
            <span className="font-arabic text-2xl text-accent sm:text-3xl">الأسماء الحسنى</span>
          </DialogTitle>
          <p className="mt-2 text-[11px] leading-relaxed text-primary-foreground/75 sm:text-xs">
            "Allah memiliki Asmaul Husna, maka berdoalah kepada-Nya dengan menyebutnya." (QS. Al-A'raf: 180)
          </p>
        </DialogHeader>

        <ScrollArea className="max-h-[70vh]">
          <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:p-6">
            {ASMAUL_HUSNA.map((n) => (
              <div
                key={n.id}
                className="rounded-2xl border border-border bg-card p-4 shadow-soft"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {n.id}
                  </span>
                  <p
                    dir="rtl"
                    lang="ar"
                    className="font-arabic text-2xl leading-loose text-primary"
                  >
                    {n.arabic}
                  </p>
                </div>
                <p className="mt-2 text-sm font-semibold italic text-accent-foreground/80">
                  {n.latin}
                </p>
                <p className="text-xs text-muted-foreground">{n.meaning}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
