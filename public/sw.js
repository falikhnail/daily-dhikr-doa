// Service worker for Web Push notifications.
self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("push", (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch {
    data = { title: "Pengingat", body: event.data?.text() || "" };
  }
  const title = data.title || "🕌 Pengingat Sholat";
  const options = {
    body: data.body || "Waktunya menunaikan ibadah",
    icon: "/icon-192.png",
    badge: "/icon-192.png",
    tag: data.tag || "adzan",
    renotify: true,
    vibrate: [300, 100, 300, 100, 300],
    data: { url: data.url || "/" },
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification.data?.url || "/";
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if ("focus" in c) return c.navigate(url).then(() => c.focus());
      }
      if (self.clients.openWindow) return self.clients.openWindow(url);
    })
  );
});
