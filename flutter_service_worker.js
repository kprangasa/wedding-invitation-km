'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "09e93ecdd44d415bd7687dfecf71c559",
"assets/AssetManifest.bin.json": "83d2bddf94121cd5d04e3289a630ba8c",
"assets/AssetManifest.json": "48d506e30c761ac951433644ca607364",
"assets/assets/fonts/HelloParisSerif-Regular.ttf": "751cd99371c7ded02c5646489d4942a6",
"assets/assets/fonts/Priestacy.otf": "7b1016d6f2aef52bf96bb3dca4ae9ccc",
"assets/assets/images/0.jpg": "923df5701f3ec20dd4d6eb113170d17e",
"assets/assets/images/00.JPG": "d173b3125f9eedb2efffa67b571f6874",
"assets/assets/images/1.png": "120e2adda9c03c76972e87df8fdabfbf",
"assets/assets/images/10.png": "fc053c6f68dd67ba3b9373a2da369a89",
"assets/assets/images/11.png": "29c777fcb0951473bc14e501ae8cc9da",
"assets/assets/images/12.png": "a0b897c8453dcf3d56a50287bfa4e839",
"assets/assets/images/13.png": "11bb55c718d72f552d0807e308ad9541",
"assets/assets/images/14.png": "d48dea6a7374661be54ae6a4e3ef0cfa",
"assets/assets/images/15.png": "8afa858a7f0612eb159746f92973674e",
"assets/assets/images/16.png": "35e9067d1df09942d79ef031bdb6f31b",
"assets/assets/images/17.png": "27b1b78b807dc9bca5a7ab5b44761b4d",
"assets/assets/images/18.png": "5bcc7693b528708348af785c5002e221",
"assets/assets/images/19.png": "b41582f4d338fa7c2475c99f22193db7",
"assets/assets/images/2-Photoroom.png": "90a4a2fb8af4a4aed046c535771f7667",
"assets/assets/images/2.png": "1822d550420f1b9172bee070d4359672",
"assets/assets/images/20.png": "2a025e6e108acca3cf44e3570148946c",
"assets/assets/images/21.png": "e1b8df771fe0443fb447297809d6edfe",
"assets/assets/images/22.png": "1655c37fa683c4b471be2a626933b1d4",
"assets/assets/images/23.png": "993a42812d1d631f386ae5534a486834",
"assets/assets/images/24.png": "73dd1cf7598bb14141db4274aebc6880",
"assets/assets/images/25.png": "4afa1e8d67e8749e0fe91a4d4fb86e73",
"assets/assets/images/26.png": "075dec844297b7d3146400ff20784d43",
"assets/assets/images/27.png": "c48496d4fbf87cde7145c1b2844f98be",
"assets/assets/images/28.png": "9dbdfbec31d05baad584218430f39d92",
"assets/assets/images/29.png": "0b474d62d340ef26b8ec902f32f310b5",
"assets/assets/images/3-bg.jpg": "b67955ed638f3d156a6482bc5feb3038",
"assets/assets/images/3-Photoroom.png": "7dcebd9437d46e0376c77c96e51d91aa",
"assets/assets/images/3.png": "297830c9f4302cdc1b0e6f930e82f1e2",
"assets/assets/images/30.png": "08b08d88d880e09dcb4a8121a9c35c15",
"assets/assets/images/31.png": "4517eed00b2785670d01df85fdeb2b27",
"assets/assets/images/34.png": "3a196ef79de5634ab31ab429800d4628",
"assets/assets/images/35.png": "6555e1c12d79c6a3547f44209d3e7b7b",
"assets/assets/images/36.png": "c48ae0484d7e4672cea2c42d70cc4176",
"assets/assets/images/37.png": "ff1d5a0c4fefac7090473600cc5186c7",
"assets/assets/images/38.png": "aac5d01520a872fb2677956ca887b795",
"assets/assets/images/39.png": "c29094af53d6c90a3bed6cea5d6bf013",
"assets/assets/images/4.png": "e42283fd6c5b464a51b054ea2cdb5208",
"assets/assets/images/5.png": "272eb74de5ad1454ef1a2ad189045054",
"assets/assets/images/6.png": "b91acefe4a5d0fdd613c3adbef8a614c",
"assets/assets/images/7.png": "4b38c0fbb5f54c7ad589925e8008d477",
"assets/assets/images/8.png": "fe109c68161c8034d6b1b60f8ba35957",
"assets/assets/images/9.png": "86dd4facc17aa304b9063e80c8b3bfa3",
"assets/assets/images/Invitation%2520Design.png": "ba8b1a27a406e120ea1aab796b206225",
"assets/FontManifest.json": "5b7236dc6bd751058d9abdb4c3b2eba3",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "b4bfcb1e144913ef5252b33b1e78e174",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "66e88200267b49af38b6465ebb4623c8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "35bf1f6e9c325235f664117e819621f1",
"/": "35bf1f6e9c325235f664117e819621f1",
"main.dart.js": "8643193e434816a9a911f7b4804f7977",
"manifest.json": "a7b3de0ff4368eff4fa1b36ef9555702",
"version.json": "fa62a0f385fd246e09c15612da75b2b8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
