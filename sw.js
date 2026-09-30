const CACHE_NAME = "condoclub-catalogo-v11";
const APP_SHELL = [
  "/",
  "/styles.css",
  "/app.js",
  "/manifest.webmanifest",
  "/condoclub-logo.webp",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable-512.png",
  "/icons/notification-icon.png",
  "/icons/notification-badge.png",
  "/partners/wiq-moveis-sob-medida.webp",
  "/partners/santis-climatizacao.webp",
  "/partners/casa-em-dia.webp",
  "/partners/prontolar.webp",
  "/partners/vercel-tecnologia.webp"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match("/")))
  );
});

// Fluxo de exibição restaurado da primeira versão funcional:
// o próprio Service Worker recebe o Push e cria a notificação.
// Não carregamos firebase-messaging no Service Worker, evitando a exibição automática do FCM.
self.addEventListener("push", (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch (_) {
    payload = { notification: { body: event.data ? event.data.text() : "" } };
  }

  const notification = payload.notification || {};
  const data = payload.data || {};
  const title = notification.title || data.title || "CondoClub";
  const options = {
    body: notification.body || data.body || "Você recebeu uma nova notificação do CondoClub.",
    icon: notification.icon || data.icon || "/icons/notification-icon.png",
    badge: data.badge || "/icons/notification-badge.png",
    image: notification.image || data.image,
    data: {
      url: payload.fcmOptions?.link || data.url || "/"
    }
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = new URL(event.notification.data?.url || "/", self.location.origin).href;

  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((windowClients) => {
      for (const client of windowClients) {
        if (new URL(client.url).origin === self.location.origin) {
          if ("navigate" in client && client.url !== targetUrl) client.navigate(targetUrl);
          return client.focus();
        }
      }
      return self.clients.openWindow(targetUrl);
    })
  );
});
