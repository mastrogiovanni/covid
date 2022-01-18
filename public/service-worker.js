'use strict';

// Update cache names any time any of the cached files change.
const CACHE_NAME = 'covid-v0.1';

// Add list of files to cache here.
const FILES_TO_CACHE = [];

self.addEventListener('install', (evt) => {
  // console.log('[ServiceWorker] Install');

  /*
  FILES_TO_CACHE.push("/imgs/symbols/gem-stone_1f48e.png")
  FILES_TO_CACHE.push("/imgs/symbols/writing-hand_270d.png")
  FILES_TO_CACHE.push("/imgs/symbols/mushroom_1f344.png")
  FILES_TO_CACHE.push("/imgs/symbols/four-leaf-clover_1f340.png")
  */

  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener("update", (evt) => {
  // console.log("Request update")
  // location.reload(true)
})

self.addEventListener('activate', (evt) => {
  // console.log('[ServiceWorker] Activate');
  // Remove previous cached data from disk.
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME && key !== PERMANENT_CACHE_NAME) {
          // console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );

  self.clients.claim();
});

/*
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    // console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) { return r; }
    const response = await fetch(e.request);
    const cache = await caches.open(CACHE_NAME);
    // console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});

/*
self.addEventListener('fetch', async function (event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function (response) {
      // Fall back to network
      return response || fetch(event.request);
    }).catch(function () {
      // If both fail, show a generic fallback:
      return caches.match('/offline.html');
      // However, in reality you'd have many different
      // fallbacks, depending on URL & headers.
      // Eg, a fallback silhouette image for avatars.
    })
  );
});
*/