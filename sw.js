self.addEventListener("install",e => {
    console.log("Installed successfully");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./","./images/logo192.png","./images/logo512.png","/manifest.json","./src/index.html","./src/index.css","./src/index.js"])
        })
    );
});

self.addEventListener("fetch", e => {
    console.log(`intercepting fetch request for: ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })  
    )
});