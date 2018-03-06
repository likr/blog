/* eslint-env worker */
/* global workbox */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js')

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`)
} else {
  console.log(`Boo! Workbox didn't load 😬`)
}

workbox.precaching.precacheAndRoute([
  {
    "url": "components/blog-link.js",
    "revision": "1324ff7c4fd0d5d501b33ee722ec8ad4"
  },
  {
    "url": "components/blog-post-detail-page.js",
    "revision": "509c6cf0171837cfe5ef05aeb6a31f55"
  },
  {
    "url": "components/blog-post-item.js",
    "revision": "62f1a0c5a845e053e5a6fb17d4446a59"
  },
  {
    "url": "components/blog-post-list-page.js",
    "revision": "f9e031054737b4406b855eb18ad861c2"
  },
  {
    "url": "icon128.png",
    "revision": "4bb856ba1f640fdd7c9a9410ec7f88ec"
  },
  {
    "url": "icon192.png",
    "revision": "a7b3e1c1707f4da434c044da1dcf0906"
  },
  {
    "url": "icon512.png",
    "revision": "23850a831cca2eb0a839e24cbb3cc833"
  },
  {
    "url": "index.html",
    "revision": "d993fb28d68d97615e529d8c2a2c04e8"
  },
  {
    "url": "index.js",
    "revision": "5b1d2584462667a19e62250a52c7c75f"
  },
  {
    "url": "manifest.json",
    "revision": "7ee24b721f58da426a35a2235ca2e27f"
  },
  {
    "url": "media.png",
    "revision": "217e23260068e847ca609efc76d0304e"
  },
  {
    "url": "pages/post-detail.js",
    "revision": "e120747a26da9d9b9b7f0813c42fa794"
  },
  {
    "url": "pages/post-list.js",
    "revision": "6a735348e2e940d116d045a4c11279b0"
  },
  {
    "url": "router.js",
    "revision": "b645bf403caa10e6bc476b41fe7158e2"
  },
  {
    "url": "service-worker-registration.js",
    "revision": "5a47a9f6d6d91aded0b5b8885698e9aa"
  },
  {
    "url": "vendor/lib/repeat.js",
    "revision": "f4cbcb7a4a2b453fa2df5460a7ca3faa"
  },
  {
    "url": "vendor/lib/unsafe-html.js",
    "revision": "68d76f033adbaf4fea06ad13cf0980ce"
  },
  {
    "url": "vendor/lit-html.js",
    "revision": "0d445d3f418fa2abfb7b41a604f0cb0b"
  },
  {
    "url": "vendor/universal-router.js",
    "revision": "9e0b34e790ecb926c93c9974c24d3080"
  },
  {
    "url": "wp.js",
    "revision": "3496a155897efb20cfdcc5789cc37229"
  }
])
