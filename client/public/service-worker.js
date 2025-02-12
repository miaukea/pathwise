const CACHE_NAME = 'pathwise-cache-v1';
const urlsToCache = [
'/',
'/index.html',
'/assets/icons/icon-192x192.png',
'/assets/icons/icon-512x512.png',
];

// Install Service Worker
self.addEventListener('install', (event) => {
event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
return cache.addAll(urlsToCache);
    })
);
});

// Fetch Resources
self.addEventListener('fetch', (event) => {
event.respondWith(
    caches.match(event.request).then((response) => {
return response || fetch(event.request);
    })
);
});

// Activate New Cache and Remove Old Cache
self.addEventListener('activate', (event) => {
const cacheWhitelist = [CACHE_NAME];
event.waitUntil(
    caches.keys().then((cacheNames) => {
return Promise.all(
        cacheNames.map((cacheName) => {
if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
}
        })
);
    })
);
});
