const STATIC_CACHE = "archivo98-static-v125";
const RUNTIME_CACHE = "archivo98-runtime-v125";

const STATIC_ASSETS = [
  "./",
  "./desktop/",
  "./desktop/index.html",
  "./site.webmanifest",
  "./mobile-bootstrap.js",
  "./ventas-metas.html",
  "./obs-recaudado.html",
  "./obs-layout-kick.html",
  "./ventas-registro.html",
  "./creator-pro.html",
  "./alaxd.html",
  "./under-maps.html",
  "./xp-agar-strike.html",
  "./assets/chat-flames.gif",
  "./assets/DamagedHelmet.glb",
  "./assets/vendor/three-r128.min.js",
  "./assets/vendor/OrbitControls-r128.js",
  "./slot98.html",
  "./manychat-code.html",
  "./privacy-instagram.html",
  "./instagram-reply-test.html",
  "./player-shell-cutout.png",
  "./retro-player-shell-transparent-fixed.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => ![STATIC_CACHE, RUNTIME_CACHE].includes(key))
          .map((key) => caches.delete(key)),
      ),
    ).then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isFreshAppFile = isSameOrigin && (
    request.mode === "navigate" ||
    url.pathname.endsWith("/") ||
    url.pathname.endsWith("/desktop/") ||
    url.pathname.endsWith("/desktop/index.html") ||
    url.pathname.endsWith("/index.html") ||
    url.pathname.endsWith("/app.js") ||
    url.pathname.endsWith("/styles.css") ||
    url.pathname.endsWith("/mobile-bootstrap.js") ||
    url.pathname.endsWith("/under-maps.html") ||
    url.pathname.endsWith("/recording-studio.html") ||
    url.pathname.endsWith("/creator-pro.html") ||
    url.pathname.endsWith("/obs-recaudado.html")
    || url.pathname.endsWith("/obs-layout-kick.html")
    || url.pathname.endsWith("/alaxd.html")
  );

  if (isFreshAppFile) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => {
          const cachedPage = await caches.match(request);
          return cachedPage || caches.match("./index.html");
        }),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => Response.error());
    }),
  );
});



