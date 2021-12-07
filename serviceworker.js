var staticCacheName = "lavandry-1.0.17";

var files = [
    "./",
    "./index.html",
    "./app.js",
    "./languages.js",
    "./manifest.json",
    "./serviceworker.js",
    "./variables.js",
    "./style.css",
    "./components/componenti.js",
    "./components/guasto.js",
    "./components/nuovaprenotazione.js",
    "./components/prenotazioni.js",
    "./components/viewTecnico.js",
    "./photo/eng.png",
    "./photo/ita.png",
    "./photo/frg.png",
    "./photo/lavatrice.jpg",
    "./photo/favicon.png",
    "./favicon.ico",
    "./lottie/loading.json",
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
    // console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(async function (response) {
            // await aggiorna(event.request)
            let resp = fetch(event.request)
                .then((r) => {
                    return r;
                })
                .then((r) => {
                    console.log("File", r.url, "Scaricato")
                    caches.add(r.url);
                    console.log("File", r.url, "Aggiornato")
                    return r;
                }).catch(error => {
                    console.log("File", r.url, "Preso da Cache")
                    return response;
                });

            return resp;
        })
    );
});


async function aggiorna(request) {
    try {
        console.log("Provo a scaricare il file ", request.url)
        fetch(request)
            .then((response) => {
                caches.open(staticCacheName).then(function (cache) {
                    let cacheresponse = cache.add(request.url);
                    if (cacheresponse)
                        console.log("Ho aggiornato il file", request.url);
                    else
                        console.log(cacheresponse)
                    return cacheresponse;
                })
            }).catch((e) => {
                console.log("Non l'ho scaricato", request.url)
            })

    } catch (error) {
        console.error(error);
    }
}