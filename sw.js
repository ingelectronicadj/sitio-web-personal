//asignar un nombre y versión al cache
const CACHE_NAME = 'v2_cache_CV_Diego',
    urlsToCache = [
        './',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
        'https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700',
        'https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i',
        './vendor/fontawesome-free/css/all.min.css',
        './css/resume.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
        './img/favicon-diego.png',
        './img/pwa/icon_128.png',
        './img/pwa/icon_384.png',
        './css/slick.min.css',
        './css/accessible-slick-theme.min.css',
        'https://unpkg.com/aos@next/dist/aos.css',
        './img/diego_javier_mena.jpg',
        './img/colombia.webp',
        './img/usa.webp',
        './img/gallery/plataforma_MinCIT.webp',
        './img/gallery/curso-accesibilidad-contraloria.webp',
        './img/gallery/telemetria-lorawan.webp',
        './img/gallery/pcb-kicad.webp',
        './img/gallery/reproductor-lsc.webp',
        './img/gallery/visor-molecules.webp',
        './img/gallery/curso-autodirigido.webp',
        './img/gallery/review-block.webp',
        './img/gallery/conferencias.webp',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js',
        './js/resume.min.js',
        './js/openLink.js',
        './js/slick.min.js',
        'https://cdn.jsdelivr.net/npm/sweetalert2@11',
        './js/alerts.js',
        'https://unpkg.com/aos@next/dist/aos.js',
        './js/accessibility.min.js'
    ];

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache)
                .then(() => self.skipWaiting())
        })
        .catch(err => console.log('Falló registro de cache', err))
    )
});

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME]

    e.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    //Eliminamos lo que ya no se necesita en cache
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName)
                    }
                })
            )
        })
        // Le indica al SW activar el cache actual
        .then(() => self.clients.claim())
    )
});

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
    //Responder ya sea con el objeto en caché o continuar y buscar la url real
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if (res) {
                //recuperar del cache
                return res
            }
            //recuperar de la petición a la url
            return fetch(e.request)
        })
    )
});