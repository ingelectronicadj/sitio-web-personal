/**
 * Service Worker de auto-desregistro permanente (kill-switch).
 * Mantiene la ruta /sw.js con respuesta 200 OK para que cualquier navegador
 * con el antiguo Service Worker de la PWA (v43_cache_CV_Diego) descargue
 * esta actualizacion, elimine todos los caches de CacheStorage, se desregistre
 * y recargue las pestanas abiertas hacia la version actual de red.
 */
self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (keys) {
        return Promise.all(
          keys.map(function (key) {
            return caches.delete(key);
          }),
        );
      })
      .then(function () {
        return self.registration.unregister();
      })
      .then(function () {
        return self.clients.matchAll({ type: "window" });
      })
      .then(function (clients) {
        clients.forEach(function (client) {
          if ("navigate" in client) {
            client.navigate(client.url);
          }
        });
      }),
  );
});
