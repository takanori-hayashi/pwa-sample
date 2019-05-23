const STATIC_DATA = [
  '/index.html',
  '/about/index.html',
  '/assets/js/app.js',
  '/assets/images/image2.jpg',
];

self.addEventListener('install', e => {
  ev.waitUntil(
    caches.open('airhorner')
      .then(cache => {
        return cache.addAll(STATIC_DATA);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});