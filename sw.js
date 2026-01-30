const CACHE_NAME = 'sentinel-v6';
const assets = [
  './', 
  './index.html', 
  './manifest.json',
  './nerdix.jpg', // Ganti dengan nama file gambar kamu
  './nerdix-bg.jpg'  // Contoh jika ada gambar latar belakang
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
