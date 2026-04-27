/**
 * Service Worker para la PWA de CV Diego Mena
 * Estrategia: Stale-While-Revalidate con fallback offline
 * Versión del caché se actualiza con cada despliegue
 */

const CACHE_NAME = "v5_cache_CV_Diego";
const OFFLINE_URL = "./offline.html";

const urlsToCache = [
  "./",
  OFFLINE_URL,
  "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
  "https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700&display=swap",
  "https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i&display=swap",
  "./vendor/fontawesome-free/css/all.min.css",
  "./css/resume-min.css",
  "./css/darkMode_v2.min.css",
  "./css/slick.min.css",
  "./css/accessible-slick-theme.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
  "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js",
  "./js/resume.min.js",
  "./js/openLink.js",
  "./js/slick.min.js",
  "./js/slick-init.js",
  "./js/i18n.js",
  "./js/accessibility.min.js",
  "./js/navbar-focus.js",
  "./img/favicon-diego.webp",
  "./img/profile-pic.webp",
  "./img/colombia.webp",
  "./img/usa.webp",
  "./img/pwa/icon_128.webp",
  "./img/pwa/icon_384.webp"
];

// Evento de instalación: precachear recursos esenciales
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache).then(() => self.skipWaiting());
      })
      .catch((err) => console.log("Falló registro de cache", err)),
  );
});

// Evento de activación: limpiar cachés antiguos
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [CACHE_NAME];

  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

// Evento fetch: Stale-While-Revalidate con fallback offline
self.addEventListener("fetch", (e) => {
  // Ignorar peticiones de esquemas no soportados (ej. chrome-extension://)
  if (!(e.request.url.startsWith('http:') || e.request.url.startsWith('https:'))) {
      return;
  }

  // Solo interceptar peticiones GET
  if (e.request.method !== 'GET') {
    return;
  }

  e.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(e.request).then((cachedResponse) => {
        const fetchPromise = fetch(e.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            // Solo cachear respuestas basic y cors (no opaque)
            if (networkResponse.type === 'basic' || networkResponse.type === 'cors') {
              cache.put(e.request, networkResponse.clone());
            }
          }
          return networkResponse;
        }).catch(() => {
          // Si es una navegación (página), servir página offline
          if (e.request.mode === 'navigate') {
            return cache.match(OFFLINE_URL);
          }
          return undefined;
        });

        return cachedResponse || fetchPromise;
      });
    })
  );
});
