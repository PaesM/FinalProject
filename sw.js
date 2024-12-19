self.addEventListener('install', event => {
   
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
                '/',                 
                '/index.html',       
                '/styles.css',       
                '/script.js',        
                '/icon-192x192.png', 
                '/icon-512x512.png'  
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        }).catch(error => {
            console.error('Service Worker fetch error:', error);
            return new Response('Failed to fetch.', {
                status: 500,
                statusText: 'Service Worker fetch error'
            });
        })
    );
});
