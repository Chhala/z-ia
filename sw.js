const CACHE = 'zombicide-v4';
const FILES = ['./', './index.html', './style.css', './app.js', './rules.js', './bg.jpg', './manifest.json'];

self.addEventListener('install',  e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });

self.addEventListener('fetch', e => {
  if (e.request.url.includes('generativelanguage.googleapis.com') || e.request.url.includes('fonts.googleapis.com')) return;
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      if (res && res.status === 200 && res.type === 'basic') {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    })).catch(() => e.request.mode === 'navigate' ? caches.match('./index.html') : undefined)
  );
});
