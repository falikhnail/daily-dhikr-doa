import { useEffect, useState } from "react";
import { Bell, BellRing, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  getCurrentSubscription,
  pushSupported,
  subscribePush,
  unsubscribePush,
} from "@/lib/push";

export function PushToggle() {
  const [supported, setSupported] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setSupported(pushSupported());
    if (pushSupported()) {
      getCurrentSubscription().then((s) => setSubscribed(!!s)).catch(() => {});
    }
  }, []);

  if (!supported) return null;

  const handle = async () => {
    setBusy(true);
    try {
      if (subscribed) {
        await unsubscribePush();
        setSubscribed(false);
        toast("Notifikasi push dimatikan");
      } else {
        await subscribePush();
        setSubscribed(true);
        toast("✅ Notifikasi adzan aktif", {
          description: "Pengingat akan muncul walau tab ditutup",
        });
      }
    } catch (e: any) {
      toast.error(e?.message ?? "Gagal mengaktifkan notifikasi");
    } finally {
      setBusy(false);
    }
  };

  return (
    <Button
      onClick={handle}
      disabled={busy}
      variant="ghost"
      size="icon"
      className="shrink-0 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
      aria-label={subscribed ? "Matikan notifikasi push" : "Aktifkan notifikasi push"}
      title={subscribed ? "Notifikasi push aktif" : "Aktifkan notifikasi push"}
    >
      {busy ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : subscribed ? (
        <BellRing className="h-5 w-5 text-accent" />
      ) : (
        <Bell className="h-5 w-5" />
      )}
    </Button>
  );
}
