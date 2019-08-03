importScripts("./precache-manifest.cf02b2c87d06866e40d66fc6aec855b4.js", "./workbox-v4.3.1/workbox-sw.js");
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

