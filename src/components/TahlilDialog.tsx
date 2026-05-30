import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flower, BookOpen } from "lucide-react";
import { TAHLIL } from "@/lib/tahlilData";
import { YASIN, YASIN_INFO } from "@/lib/yasinData";

export function TahlilDialog() {
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
              <Flower className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                Malam Jumat
              </p>
              <p className="truncate font-display text-lg font-semibold text-primary sm:text-xl">
                Tahlil & Yasinan
              </p>
              <p className="truncate text-xs text-muted-foreground">
                Surah Yasin dilanjut bacaan tahlil
              </p>
            </div>
          </div>
          <BookOpen className="h-5 w-5 shrink-0 text-primary/60 group-hover:text-primary" />
        </Button>
      </DialogTrigger>

      <DialogContent className="flex h-[90vh] max-h-[90vh] max-w-2xl flex-col overflow-hidden p-0">
        <DialogHeader className="border-b bg-hero p-5 text-primary-foreground sm:p-6">
          <DialogTitle className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="font-display text-xl sm:text-2xl">Tahlil & Yasinan</span>
            <span className="font-arabic text-2xl text-accent sm:text-3xl">تَهْلِيْل</span>
          </DialogTitle>
          <p className="mt-2 text-[11px] leading-relaxed text-primary-foreground/75 sm:text-xs">
            Mulai dengan Surah Yasin, lanjutkan ke bacaan tahlil. Pahala dihadiahkan untuk arwah keluarga & kaum muslimin.
          </p>
        </DialogHeader>

        <Tabs defaultValue="yasin" className="flex min-h-0 flex-1 flex-col">
          <TabsList className="mx-4 mt-3 grid w-auto shrink-0 grid-cols-2">
            <TabsTrigger value="yasin">1. Surah Yasin</TabsTrigger>
            <TabsTrigger value="tahlil">2. Tahlil</TabsTrigger>
          </TabsList>

          <TabsContent value="yasin" className="m-0 min-h-0 flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="space-y-3 p-4 sm:p-6">
                <p dir="rtl" className="font-arabic text-center text-2xl leading-loose text-primary">
                  {YASIN_INFO.bismillah}
                </p>
                {YASIN.map((a) => (
                  <article key={a.no} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                        {a.no}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                        QS. 36 : {a.no}
                      </span>
                    </div>
                    <p dir="rtl" lang="ar" className="font-arabic text-2xl leading-loose text-foreground sm:text-3xl">
                      {a.arabic}
                    </p>
                    <p className="mt-3 border-t border-border pt-3 text-sm font-medium italic text-accent-foreground/80">
                      {a.latin}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.translation}</p>
                  </article>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="tahlil" className="m-0 min-h-0 flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="space-y-3 p-4 sm:p-6">
                {TAHLIL.map((b, i) => (
                  <article key={b.id} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                        {i + 1}
                      </span>
                      <p className="text-right text-xs font-semibold uppercase tracking-widest text-primary">
                        {b.judul}
                      </p>
                    </div>
                    <p dir="rtl" lang="ar" className="font-arabic text-2xl leading-loose text-foreground sm:text-3xl">
                      {b.arab}
                    </p>
                    <p className="mt-3 border-t border-border pt-3 text-sm font-medium italic text-accent-foreground/80">
                      {b.latin}
                    </p>
                    {b.arti && (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.arti}</p>
                    )}
                    {b.ulang && (
                      <p className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-accent">
                        Dibaca {b.ulang}×
                      </p>
                    )}
                  </article>
                ))}
                <p className="pt-2 text-center text-xs italic text-muted-foreground">
                  Semoga Allah menerima dan menyampaikan pahalanya. Aamiin.
                </p>
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
