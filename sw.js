self.addEventListener("install",e => {
    // console.log("Installed successfully");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./","./src/signup.css","./src/signup.html","./src/signin.html","./images/logo192.png","./images/logo512.png"])
        })
    );
});

self.addEventListener("fetch", e => {
    // console.log(`intercepting fetch request for: ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
});