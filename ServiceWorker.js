var CACHE_NAME = "Project29";
var CACHED_URLS = [
  "Project29.html",
  "IconResHigh.png",
  "IconResLow.png",
  "IconResMid.png",
  "Manifest.json",
  "Project29.js",
  "ServiceWorker.js",
  "Unit14.html"
  ];

self.addEventListener('install', function(event) {
                event.waitUntil(
                                caches.open(CACHE_NAME).then(function(cache) {
                                return cache.addAll(CACHED_URLS);
                })
                                );
});


self.addEventListener('fetch',function(event) {
   event.respondWith(
     fetch(event.request).catch(function() {
                   return caches.match(event.request).then(function(response) {
       if (response) {
                                   return response;
       } else if (event.request.headers.get("accept").includes("text/html")) {
                                   return caches.match("Project29.html");
                   }
                   });
   })
                   );
});