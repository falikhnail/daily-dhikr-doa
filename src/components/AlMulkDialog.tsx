import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Moon } from "lucide-react";
import { AL_MULK, AL_MULK_INFO } from "@/lib/alMulkData";

export function AlMulkDialog({ defaultOpen = false }: { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="group w-full justify-between rounded-2xl border-accent/40 bg-card-gradient p-6 text-left shadow-soft hover:bg-accent/10 sm:p-7"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold shadow-gold">
              <Moon className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Bacaan Malam
              </p>
              <p className="font-display text-xl font-semibold text-primary">
                Surah Al-Mulk
              </p>
              <p className="text-xs text-muted-foreground">
                30 ayat • penyelamat dari azab kubur
              </p>
            </div>
          </div>
          <BookOpen className="h-5 w-5 text-primary/60 group-hover:text-primary" />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] max-w-2xl overflow-hidden p-0">
        <DialogHeader className="border-b bg-hero p-6 text-primary-foreground">
          <DialogTitle className="flex items-baseline justify-between gap-3">
            <span className="font-display text-2xl">
              Surah {AL_MULK_INFO.name}
              <span className="ml-2 text-sm font-normal text-primary-foreground/70">
                ({AL_MULK_INFO.meaning})
              </span>
            </span>
            <span className="font-arabic text-3xl text-accent">{AL_MULK_INFO.arabicName}</span>
          </DialogTitle>
          <p className="mt-2 text-xs text-primary-foreground/75">
            {AL_MULK_INFO.virtue}
          </p>
        </DialogHeader>

        <ScrollArea className="max-h-[70vh]">
          <div className="space-y-4 p-5 sm:p-6">
            <p
              dir="rtl"
              className="font-arabic text-center text-2xl leading-loose text-primary"
            >
              {AL_MULK_INFO.bismillah}
            </p>
            {AL_MULK.map((a) => (
              <article
                key={a.no}
                className="rounded-2xl border border-border bg-card p-4 shadow-soft sm:p-5"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {a.no}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    QS. 67 : {a.no}
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
            <p className="pt-4 text-center text-xs italic text-muted-foreground">
              Semoga Allah menjadikannya penyelamat di alam kubur. Aamiin.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
