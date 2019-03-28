/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/style.bundle.css",
    "revision": "402d17414dede54d387321ee6e135867"
  },
  {
    "url": "favicon.ico",
    "revision": "6f2e6f9504f61164c48ebe4c25960c82"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "52cbda1b0f483fc9b0fa9cb51e11b3ab"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "af3cb3ac5aafbd10724654cdbfb7d763"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "19366700a0a3a0e03053bbc37adede69"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "86ae470edc51b687efd7846bb729d03c"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "9055ed9bed1bda5e0093ead9aa1f3736"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "1eb08de9db45f6d4326b054a2a25f935"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "3da484f58f1d05f1847c0ec59c9ddf99"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "b24ea80a396b546e1a124a8db36a065d"
  },
  {
    "url": "images/jl.jpg",
    "revision": "6ccfbfa96f39d4fbf14a0a23d114d745"
  },
  {
    "url": "index.html",
    "revision": "750b01eb8d6b92b7bab5a34281cb1406"
  },
  {
    "url": "js/app.bundle.js",
    "revision": "dcbaace37a584f98aaa251e78191f4e2"
  },
  {
    "url": "manifest.json",
    "revision": "11f92aca890dbab1bb2dcbace4cac931"
  },
  {
    "url": "uploads/1553696350457.png",
    "revision": "9a36db57ea67cedbf0d2d9a7a21188d1"
  },
  {
    "url": "uploads/1553696442207.png",
    "revision": "b24ea80a396b546e1a124a8db36a065d"
  },
  {
    "url": "uploads/1553696510560.png",
    "revision": "cdf03ce75c497f2232af64cb59a5fe4b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, purgeOnQuotaError: false })] }), 'GET');
