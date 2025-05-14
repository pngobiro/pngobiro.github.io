const CACHE_NAME = 'mch-notes-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/offline.html',
    '/topics/unit-1.html',
    '/topics/unit-2.html',
    '/topics/unit-3.html',
    '/styles/main.css',
    '/js/app.js',
    '/js/navigation.js',
    '/js/help.js',
    '/manifest.json',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching app assets');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response; // Return cached version
                }

                return fetch(event.request)
                    .then(fetchResponse => {
                        // Check if we received a valid response
                        if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
                            return fetchResponse;
                        }

                        // Clone the response
                        const responseToCache = fetchResponse.clone();

                        // Add to cache
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return fetchResponse;
                    })
                    .catch(error => {
                        // If the network request fails, return the offline page
                        if (event.request.mode === 'navigate') {
                            return caches.match('/offline.html');
                        }
                        return new Response('Network error happened', {
                            status: 408,
                            headers: { 'Content-Type': 'text/plain' }
                        });
                    });
            })
    );
});

// Push notification event
self.addEventListener('push', event => {
    const options = {
        body: event.data.text(),
        icon: '/assets/icons/icon-192x192.png',
        badge: '/assets/icons/icon-72x72.png'
    };

    event.waitUntil(
        self.registration.showNotification('MCH Notes Update', options)
    );
});

// Background sync event
self.addEventListener('sync', event => {
    if (event.tag === 'sync-notes') {
        event.waitUntil(
            // Handle background sync
            Promise.resolve()
        );
    }
});