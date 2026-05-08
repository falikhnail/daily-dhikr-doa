import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HandHeart, BookOpen } from "lucide-react";
import { DOA_TEMATIK } from "@/lib/doaTematikData";

export function DoaTematikDialog() {
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
              <HandHeart className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                Per Situasi
              </p>
              <p className="truncate font-display text-lg font-semibold text-primary sm:text-xl">
                Doa Harian Tematik
              </p>
              <p className="truncate text-xs text-muted-foreground">
                Rumah, kendaraan, makan, hujan, dll.
              </p>
            </div>
          </div>
          <BookOpen className="h-5 w-5 shrink-0 text-primary/60 group-hover:text-primary" />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] max-w-2xl overflow-hidden p-0">
        <DialogHeader className="border-b bg-hero p-5 text-primary-foreground sm:p-6">
          <DialogTitle className="font-display text-xl sm:text-2xl">Doa Harian Tematik</DialogTitle>
          <p className="mt-2 text-[11px] leading-relaxed text-primary-foreground/75 sm:text-xs">
            Doa-doa pendek yang diajarkan Rasulullah ﷺ untuk berbagai situasi sehari-hari.
          </p>
        </DialogHeader>

        <ScrollArea className="max-h-[75vh]">
          <Accordion type="multiple" className="space-y-2 p-4 sm:p-6">
            {DOA_TEMATIK.map((kat) => (
              <AccordionItem
                key={kat.id}
                value={kat.id}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <span className="flex items-center gap-3 text-left">
                    <span className="text-2xl">{kat.emoji}</span>
                    <span className="font-display text-base font-semibold text-primary">
                      {kat.nama}
                    </span>
                    <span className="ml-2 rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent">
                      {kat.doa.length}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 px-4 pb-4">
                  {kat.doa.map((d) => (
                    <div key={d.id} className="rounded-xl border border-border bg-background p-3">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
                        {d.emoji} {d.judul}
                      </p>
                      <p dir="rtl" lang="ar" className="font-arabic text-2xl leading-loose text-foreground">
                        {d.arab}
                      </p>
                      <p className="mt-2 border-t border-border pt-2 text-sm font-medium italic text-accent-foreground/80">
                        {d.latin}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{d.arti}</p>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
