
var staticCacheName = "lavandry-6";

var files = [
    "/index.html",
    "/app.js",
    "/languages.js",
    "/manifest.json",
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
    "/photo/eng.png",
    "/photo/ita.png",
    "/photo/frg.png",
    "/photo/lavatrice.jpg",
    "/photo/favicon.png",
    "https://img.icons8.com/material-outlined/24/000000/menu--v3.png",
    "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
    "https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js",
    "https://unpkg.com/vue/dist/vue.js",
    "https://unpkg.com/vue-router/dist/vue-router.js",
    "https://unpkg.com/vue-i18n@8",

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
