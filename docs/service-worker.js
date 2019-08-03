importScripts("/precache-manifest.103960f4d3730721970d47dc41e50d55.js", "/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/workbox-v4.3.1"});
/* eslint disable */

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

