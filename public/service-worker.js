const CACHE_NAME = 'my-site-cache-v1';
const urlToCache = [
  '/',
  '/about/',
  '/assets/js/app.js',
  '/assets/images/image2.jpg',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});