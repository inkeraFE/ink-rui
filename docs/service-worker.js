importScripts("./precache-manifest.fbd2b376f3f394b877df6e605dc1b9b9.js", "./workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "./workbox-v4.3.1"});
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

workbox.routing.registerRoute(
  new RegExp("https:.*.(css|js)"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "cdn-cache",
  })
);

self.addEventListener("install", event => {
  console.log("install", event);
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("activate", event);
});

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

