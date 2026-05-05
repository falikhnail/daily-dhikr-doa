import { supabase } from "@/integrations/supabase/client";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  const out = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
  return out;
}

export function pushSupported() {
  return (
    typeof window !== "undefined" &&
    "serviceWorker" in navigator &&
    "PushManager" in window &&
    "Notification" in window
  );
}

export async function getRegistration() {
  if (!pushSupported()) return null;
  const existing = await navigator.serviceWorker.getRegistration("/sw.js");
  return existing ?? (await navigator.serviceWorker.register("/sw.js"));
}

export async function getCurrentSubscription() {
  const reg = await getRegistration();
  if (!reg) return null;
  return reg.pushManager.getSubscription();
}

export async function subscribePush() {
  if (!pushSupported()) throw new Error("Browser tidak mendukung notifikasi push");
  const perm = await Notification.requestPermission();
  if (perm !== "granted") throw new Error("Izin notifikasi ditolak");

  const reg = await getRegistration();
  if (!reg) throw new Error("Service worker tidak tersedia");

  const { data, error } = await supabase.functions.invoke("push-public-key");
  if (error || !data?.publicKey) throw new Error("Gagal mengambil VAPID key");

  let sub = await reg.pushManager.getSubscription();
  if (!sub) {
    sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(data.publicKey),
    });
  }

  await supabase.functions.invoke("push-subscribe", {
    body: {
      action: "subscribe",
      subscription: sub.toJSON(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
  });
  return sub;
}

export async function unsubscribePush() {
  const sub = await getCurrentSubscription();
  if (!sub) return;
  await supabase.functions.invoke("push-subscribe", {
    body: { action: "unsubscribe", subscription: sub.toJSON() },
  });
  await sub.unsubscribe();
}
