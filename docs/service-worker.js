importScripts("./precache-manifest.7a9e56f052b7dfa80551bf6963aad331.js", "./workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "./workbox-v4.3.1"});
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'ink-rui-demo'

function generateCacheableConfig(name, maxEntry, maxDay) {
  return {
    cacheName: CACHE_NAME + name,
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxEntries: maxEntry,
        maxAgeSeconds: maxDay * 24 * 60 * 60
      })
    ]
  }
}

workbox.routing.registerRoute(
  new RegExp('/.*.css'),
  workbox.strategies.cacheFirst(generateCacheableConfig('css', 10, 7))
)

workbox.routing.registerRoute(
  new RegExp('/.*.js'),
  workbox.strategies.cacheFirst(generateCacheableConfig('js', 10, 7))
)


self.addEventListener("install", event => {
  console.log("install", event);
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("activate", event);
});

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

