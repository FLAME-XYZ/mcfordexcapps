const CACHE_NAME = 'mcford-exchange-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/menu.html',
  '/invest.html',
  '/leaderboard.html',
  '/tentang.html',
  '/profile.html',
  '/developer.html',
  '/transaksi.html',
  '/js/maintenance-config.js',
  '/images/mcford-logo.png',
  '/images/bank.png',
  '/images/dana.png',
  '/images/qris-code.png',
  '/images/ovo.png',
  '/images/qrish.png',
  '/images/ojk.png',
  '/images/bappebti.png',
  '/images/altcoin/hbar.png',
  '/images/altcoin/sol.png',
  '/images/altcoin/sui.png',
  '/images/altcoin/ton.png',
  '/images/crypto/bnb.png',
  '/images/crypto/btc.png',
  '/images/crypto/eth.png',
  '/images/crypto/xrp.png',
  '/images/meme/pepe.png',
  '/images/meme/bonk.png',
  '/images/meme/shib.png',
  '/images/meme/wif.png',
  '/images/stock/bbca.png',
  '/images/stock/bbri.png',
  '/images/stock/bren.png',
  '/images/stock/tlkm.png',
  '/images/stock/goto.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  'https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.6.0/firebase-database-compat.js',
  'https://www.gstatic.com/firebasejs/9.6.0/firebase-auth-compat.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});