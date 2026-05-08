import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollText, BookOpen } from "lucide-react";
import { ARBAIN } from "@/lib/arbainData";

// Hadits hari ini (deterministik dari tanggal)
function getHaditsHariIniIndex() {
  const epoch = Math.floor(Date.now() / 86_400_000);
  return epoch % ARBAIN.length;
}

export function ArbainDialog() {
  const [open, setOpen] = useState(false);
  const todayIdx = getHaditsHariIniIndex();
  const todayValue = `h-${ARBAIN[todayIdx].no}`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="group h-auto w-full justify-between rounded-2xl border-accent/40 bg-card-gradient p-5 text-left shadow-soft hover:bg-accent/10 sm:p-6"
        >
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold shadow-gold">
              <ScrollText className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                Hadits Hari Ini · #{ARBAIN[todayIdx].no}
              </p>
              <p className="truncate font-display text-lg font-semibold text-primary sm:text-xl">
                Arbain Nawawi
              </p>
              <p className="truncate text-xs text-muted-foreground">
                42 hadits pilihan Imam Nawawi
              </p>
            </div>
          </div>
          <BookOpen className="h-5 w-5 shrink-0 text-primary/60 group-hover:text-primary" />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] max-w-2xl overflow-hidden p-0">
        <DialogHeader className="border-b bg-hero p-5 text-primary-foreground sm:p-6">
          <DialogTitle className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="font-display text-xl sm:text-2xl">Hadits Arbain Nawawi</span>
            <span className="font-arabic text-2xl text-accent sm:text-3xl">الأربعون النووية</span>
          </DialogTitle>
          <p className="mt-2 text-[11px] leading-relaxed text-primary-foreground/75 sm:text-xs">
            42 hadits pilihan yang merangkum pokok-pokok ajaran Islam. Hadits hari ini ditandai otomatis.
          </p>
        </DialogHeader>

        <ScrollArea className="max-h-[75vh]">
          <Accordion type="single" collapsible defaultValue={todayValue} className="space-y-2 p-4 sm:p-6">
            {ARBAIN.map((h, i) => {
              const isToday = i === todayIdx;
              return (
                <AccordionItem
                  key={h.no}
                  value={`h-${h.no}`}
                  className={`overflow-hidden rounded-2xl border bg-card shadow-soft ${
                    isToday ? "border-accent" : "border-border"
                  }`}
                >
                  <AccordionTrigger className="px-4 py-3 text-left hover:no-underline">
                    <span className="flex w-full items-center gap-3">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          isToday
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {h.no}
                      </span>
                      <span className="flex-1 truncate font-display text-sm font-semibold text-primary sm:text-base">
                        {h.judul || `Hadits ke-${h.no}`}
                      </span>
                      {isToday && (
                        <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent">
                          Hari ini
                        </span>
                      )}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 px-4 pb-4">
                    <p dir="rtl" lang="ar" className="font-arabic text-xl leading-loose text-foreground sm:text-2xl">
                      {h.arab}
                    </p>
                    <p className="border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
                      {h.terjemahan}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
