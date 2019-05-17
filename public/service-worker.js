const STATIC_DATA = [
  'index.html',
  '/assets/js/app.js',
  '/assets/images/image2.jpg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('cache_v1')
      .then(cache => {
        return cache.addAll(STATIC_DATA);
      })
  );
});

self.addEventListener('fetch', event => {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});