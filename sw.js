self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('my-rewards-store').then((cache) => cache.addAll([
      './index.html',
      './privacy.html',
      './terms.html',
      './contact.html'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});