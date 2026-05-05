import type { DoaItem } from "@/lib/prayerData";

interface Props {
  doa: DoaItem;
  badge?: string;
}

const ARABIC_RE = /[\u0600-\u06FF]/;

export function DoaCard({ doa, badge }: Props) {
  const paragraphs = doa.body.split("\n\n");
  let arabicIndex = 0;

  return (
    <div className="animate-fade-up relative overflow-hidden rounded-3xl bg-active p-6 shadow-elegant sm:p-8">
      <div className="ornament-pattern absolute inset-0 opacity-30" />
      <div className="relative">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-3xl">{doa.emoji}</span>
          <div>
            {badge && (
              <span className="inline-block rounded-full bg-accent/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                {badge}
              </span>
            )}
            <h2 className="font-display text-2xl font-semibold text-primary-foreground sm:text-3xl">
              {doa.title}
            </h2>
            <p className="text-sm text-primary-foreground/70">{doa.subtitle}</p>
          </div>
        </div>
        <div className="space-y-4 text-[15px] leading-relaxed text-primary-foreground/95">
          {paragraphs.map((p, i) => {
            const isArabic = ARABIC_RE.test(p);
            if (isArabic) {
              const latin = doa.latin?.[arabicIndex];
              arabicIndex++;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4"
                >
                  <p
                    dir="rtl"
                    lang="ar"
                    className="font-arabic text-2xl leading-loose text-primary-foreground sm:text-3xl"
                  >
                    {p}
                  </p>
                  {latin && (
                    <p className="mt-3 border-t border-primary-foreground/10 pt-3 text-sm font-medium italic text-accent/95 sm:text-base">
                      {latin}
                    </p>
                  )}
                </div>
              );
            }
            return <p key={i}>{p}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
