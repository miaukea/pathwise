const CACHE_VERSION = 1;
const CACHE_NAME = `pathwise-cache-v${CACHE_VERSION}`;
const urlsToCache = [
'/',
'/index.html',
'/assets/icons/icon-192x192.png',
'/assets/icons/icon-512x512.png',
];

// Install Service Worker and Pre-cache Files
self.addEventListener('install', (event) => {
event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
);
  self.skipWaiting(); // Activate service worker immediately
});

// Fetch Resources with Cache-Then-Network Strategy
self.addEventListener('fetch', (event) => {
event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
    if (cachedResponse) {
        return cachedResponse; // Serve from cache
    }

    return fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone()); // Update cache
        return networkResponse;
        });
    });
    }).catch(() => caches.match('/index.html')) // Offline fallback
);
});

// Activate New Cache and Remove Old Caches
self.addEventListener('activate', (event) => {
event.waitUntil(
    caches.keys().then((cacheNames) => {
    return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME) // Remove old versions
        .map((cacheName) => caches.delete(cacheName))
    );
    }).then(() => self.clients.claim()) // Ensure immediate activation
);
});

