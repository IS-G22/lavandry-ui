
var staticCacheName = "lavandry-4";

var files = [
    "/index.html",
    "/app.js",
    "/language.js",
    "/manifest.js",
    "/pwa.js",
    "/serviceworker.js",
    "/variables.js",
    "/style.css",
    "/components/componenti.js",
    "/components/guasto.js",
    "/components/nuovaprenotazione.js",
    "/components/prenotazioni.js",
    "/components/viewTecnico.js",
    "/lottie/loading.json",
    "/lottie/loading.json",
    "/photo/eng.png",
    "/photo/ita.png",
    "/photo/frg.png",
    "/photo/lavatrice.JPG",
    "/photo/favicon.png",
]

self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll(files);
        })
    );
});

self.addEventListener("fetch", function (event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
