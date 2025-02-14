const CACHE_VERSION = 1;
const CACHE_NAME = `pathwise-cache-v${CACHE_VERSION}`;
const urlsToCache = [
'/',
'/index.html',
'/assets/icons/icon-192x192.png',
'/assets/icons/icon-512x512.png',
];

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse; // Serve from cache
            }

            return fetch(event.request).then((networkResponse) => {
                if (!networkResponse.ok) {
                    throw new Error('Network response was not ok'); // Handle invalid response
                }
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone()); // Update cache
                    return networkResponse;
                });
            }).catch(() => caches.match('/index.html')); // Offline fallback
        })
    );
});

