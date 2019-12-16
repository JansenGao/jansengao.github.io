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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "3rdpartylicenses.txt",
    "revision": "2d759e951b614859ef200e7b7ebc9e52"
  },
  {
    "url": "AIAEverest-CondensedMedium.0eed8f0cfe15b32f87c9.svg",
    "revision": "0eed8f0cfe15b32f87c94eda25bffced"
  },
  {
    "url": "AIAEverest-CondensedMedium.7aa7a1bcddba1770268f.otf",
    "revision": "7aa7a1bcddba1770268f57028cfd1351"
  },
  {
    "url": "AIAEverest-CondensedMedium.a02b6d4f8469699f111c.woff2",
    "revision": "a02b6d4f8469699f111cf06bafc60425"
  },
  {
    "url": "AIAEverest-CondensedMedium.b78d491baa2d88b59571.woff",
    "revision": "b78d491baa2d88b595711ca186565b97"
  },
  {
    "url": "AIAEverest-CondensedMedium.d57d22b49bd5bb576c72.ttf",
    "revision": "d57d22b49bd5bb576c7278666ee725e3"
  },
  {
    "url": "AIAEverest-Medium.702c7462989e22835f77.otf",
    "revision": "702c7462989e22835f7757c4230c15fb"
  },
  {
    "url": "AIAEverest-Medium.7c5cd0ad5aa8df29f85e.svg",
    "revision": "7c5cd0ad5aa8df29f85e5e4805c7399b"
  },
  {
    "url": "AIAEverest-Medium.bd74e522d049c01904cf.woff",
    "revision": "bd74e522d049c01904cfcb78cc65d241"
  },
  {
    "url": "AIAEverest-Medium.d25740c859be2441894c.woff2",
    "revision": "d25740c859be2441894c958c4c2e111d"
  },
  {
    "url": "AIAEverest-Medium.d48724ec07cb6529d540.ttf",
    "revision": "d48724ec07cb6529d54060f313111203"
  },
  {
    "url": "AIAEverest-Regular.62219efa92ba6664c86d.woff",
    "revision": "62219efa92ba6664c86d3628fbb424e8"
  },
  {
    "url": "AIAEverest-Regular.91792a8f7a29b27aadad.otf",
    "revision": "91792a8f7a29b27aadad996932601dbe"
  },
  {
    "url": "AIAEverest-Regular.ce59053de2f2ace90d3a.svg",
    "revision": "ce59053de2f2ace90d3ab5fe79f2faae"
  },
  {
    "url": "AIAEverest-Regular.d68c316657e11a499282.woff2",
    "revision": "d68c316657e11a499282294e85fcf2a1"
  },
  {
    "url": "AIAEverest-Regular.d9cb7145a1c4de49f4e7.ttf",
    "revision": "d9cb7145a1c4de49f4e73f7871777301"
  },
  {
    "url": "assets/css/dls.css",
    "revision": "345fcce4b38655a1891f459709784ba6"
  },
  {
    "url": "assets/fonts/AIAEverest-Bold.eot",
    "revision": "59e9b9de2432dee861cff50c3045393b"
  },
  {
    "url": "assets/fonts/AIAEverest-Bold.otf",
    "revision": "69346fd0193ee76c04bdd52bfef417aa"
  },
  {
    "url": "assets/fonts/AIAEverest-Bold.svg",
    "revision": "7acf9e4fa33a52ea0aa54c7276551619"
  },
  {
    "url": "assets/fonts/AIAEverest-Bold.ttf",
    "revision": "241f98aa7bd5b8aa6661d1277eef730e"
  },
  {
    "url": "assets/fonts/AIAEverest-Bold.woff",
    "revision": "ec80ec4aeac0e6627900552e5117b0af"
  },
  {
    "url": "assets/fonts/AIAEverest-Bold.woff2",
    "revision": "a0667bac9d3fb9272d4356317b2a8072"
  },
  {
    "url": "assets/fonts/AIAEverest-Condensed.eot",
    "revision": "fbcc661e1b14d1c77ef641a448366dec"
  },
  {
    "url": "assets/fonts/AIAEverest-Condensed.otf",
    "revision": "73467e11c7abd3d7c1ad20ba274644d7"
  },
  {
    "url": "assets/fonts/AIAEverest-Condensed.svg",
    "revision": "e9b30e618c1b1216ed01160a2e1f308a"
  },
  {
    "url": "assets/fonts/AIAEverest-Condensed.ttf",
    "revision": "056d46bffa703618be1d189d387b984d"
  },
  {
    "url": "assets/fonts/AIAEverest-Condensed.woff",
    "revision": "b7d59ac7a83d62a4d595752024f27f33"
  },
  {
    "url": "assets/fonts/AIAEverest-Condensed.woff2",
    "revision": "b2e620a645063ab57664800bbc2d4d42"
  },
  {
    "url": "assets/fonts/AIAEverest-CondensedMedium.eot",
    "revision": "8143ed58e0ad4df5a340fbe12d58c923"
  },
  {
    "url": "assets/fonts/AIAEverest-CondensedMedium.otf",
    "revision": "7aa7a1bcddba1770268f57028cfd1351"
  },
  {
    "url": "assets/fonts/AIAEverest-CondensedMedium.svg",
    "revision": "0eed8f0cfe15b32f87c94eda25bffced"
  },
  {
    "url": "assets/fonts/AIAEverest-CondensedMedium.ttf",
    "revision": "d57d22b49bd5bb576c7278666ee725e3"
  },
  {
    "url": "assets/fonts/AIAEverest-CondensedMedium.woff",
    "revision": "b78d491baa2d88b595711ca186565b97"
  },
  {
    "url": "assets/fonts/AIAEverest-CondensedMedium.woff2",
    "revision": "a02b6d4f8469699f111cf06bafc60425"
  },
  {
    "url": "assets/fonts/AIAEverest-ExtraBold.eot",
    "revision": "9811cca376d0e7926d577c0c4c8afdb3"
  },
  {
    "url": "assets/fonts/AIAEverest-ExtraBold.otf",
    "revision": "3f8e239d502a683f3c5734d1ae90660e"
  },
  {
    "url": "assets/fonts/AIAEverest-ExtraBold.svg",
    "revision": "52c3e5de0397622ebfcacacd7e686681"
  },
  {
    "url": "assets/fonts/AIAEverest-ExtraBold.ttf",
    "revision": "6c70d8390695ca76d8f646f51de9f5a8"
  },
  {
    "url": "assets/fonts/AIAEverest-ExtraBold.woff",
    "revision": "3637ff7ae0ec8dc685271195b5a83c60"
  },
  {
    "url": "assets/fonts/AIAEverest-ExtraBold.woff2",
    "revision": "027af4f9f4e1f12ee97577823014146c"
  },
  {
    "url": "assets/fonts/AIAEverest-Medium.eot",
    "revision": "3fd46592016fe4fc922efdd119967418"
  },
  {
    "url": "assets/fonts/AIAEverest-Medium.otf",
    "revision": "702c7462989e22835f7757c4230c15fb"
  },
  {
    "url": "assets/fonts/AIAEverest-Medium.svg",
    "revision": "7c5cd0ad5aa8df29f85e5e4805c7399b"
  },
  {
    "url": "assets/fonts/AIAEverest-Medium.ttf",
    "revision": "d48724ec07cb6529d54060f313111203"
  },
  {
    "url": "assets/fonts/AIAEverest-Medium.woff",
    "revision": "bd74e522d049c01904cfcb78cc65d241"
  },
  {
    "url": "assets/fonts/AIAEverest-Medium.woff2",
    "revision": "d25740c859be2441894c958c4c2e111d"
  },
  {
    "url": "assets/fonts/AIAEverest-Regular.eot",
    "revision": "109efa1752a0f238d1448392bf416d61"
  },
  {
    "url": "assets/fonts/AIAEverest-Regular.otf",
    "revision": "91792a8f7a29b27aadad996932601dbe"
  },
  {
    "url": "assets/fonts/AIAEverest-Regular.svg",
    "revision": "ce59053de2f2ace90d3ab5fe79f2faae"
  },
  {
    "url": "assets/fonts/AIAEverest-Regular.ttf",
    "revision": "d9cb7145a1c4de49f4e73f7871777301"
  },
  {
    "url": "assets/fonts/AIAEverest-Regular.woff",
    "revision": "62219efa92ba6664c86d3628fbb424e8"
  },
  {
    "url": "assets/fonts/AIAEverest-Regular.woff2",
    "revision": "d68c316657e11a499282294e85fcf2a1"
  },
  {
    "url": "assets/icons/icon-128x128.png",
    "revision": "c868628f85920746394b72634dfcc4f9"
  },
  {
    "url": "assets/icons/icon-144x144.png",
    "revision": "cd8497548afb834dda62757379542627"
  },
  {
    "url": "assets/icons/icon-152x152.png",
    "revision": "fe8578eb15d077ca8c61b136d721f816"
  },
  {
    "url": "assets/icons/icon-192x192.png",
    "revision": "cba69c4d0a85d58c52948906f09cc2e5"
  },
  {
    "url": "assets/icons/icon-384x384.png",
    "revision": "09e0f809670656f359124debc2f18af5"
  },
  {
    "url": "assets/icons/icon-512x512.png",
    "revision": "499374c2e19adb5ef3b3dadc7cc53412"
  },
  {
    "url": "assets/icons/icon-72x72.png",
    "revision": "18f662ec383f61bfe9db19a5a43fcec5"
  },
  {
    "url": "assets/icons/icon-96x96.png",
    "revision": "5e7bb9c1b59630a0a57a10b506ba83b8"
  },
  {
    "url": "assets/images/aiared-logo.png",
    "revision": "e1ba33f8efcaff409d1150944d812f4a"
  },
  {
    "url": "assets/images/arrow-2ndg.png",
    "revision": "336c3502ec7ebc368634b7e261ef6ce6"
  },
  {
    "url": "assets/images/back-nav.png",
    "revision": "02b06e8ed391ad9932e9e68004f2bc9b"
  },
  {
    "url": "assets/images/change-device.png",
    "revision": "e92f1e1855eb804477a86f122cb51120"
  },
  {
    "url": "assets/images/closewhite-glyph.png",
    "revision": "38f573e1d2421c7766110fb9c4f85b33"
  },
  {
    "url": "assets/images/dialog/easy_entry-prime1.png",
    "revision": "2c22d10172837ecdf425e5b91dcb53d6"
  },
  {
    "url": "assets/images/dialog/exclamation-prime1.png",
    "revision": "747d8509d1014ff537f9ef86bec232f4"
  },
  {
    "url": "assets/images/header/aiawhite-logo.png",
    "revision": "9d5b643f64335abba4d1ad0cc99770ce"
  },
  {
    "url": "assets/images/header/logout.png",
    "revision": "139c9288d600ca36f582660139d6617a"
  },
  {
    "url": "assets/images/logo_web_login@3x.svg",
    "revision": "bf09a7bb050e8977ca87111db1fb96ce"
  },
  {
    "url": "favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "fontawesome-webfont.674f50d287a8c48dc19b.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "fontawesome-webfont.912ec66d7572ff821749.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "fontawesome-webfont.af7ae505a9eed503f8b8.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "fontawesome-webfont.b06871f281fee6b241d6.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "fontawesome-webfont.fee66e712a8a08eef580.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "index.html",
    "revision": "86fdbaef0cb4789dd087b538e39058d2"
  },
  {
    "url": "main-es2015.f73b30bdcb8a23f136a1.js",
    "revision": "86fa6c077d8569d555f5e57d86bf5c5b"
  },
  {
    "url": "main-es5.f73b30bdcb8a23f136a1.js",
    "revision": "2ef08ec002b07249e7f4d8dfb0a3bdb3"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "53873fae7f679d3af491a1bea19e1238"
  },
  {
    "url": "ngsw-worker.js",
    "revision": "5edbdc8b874f09263fb1839b93bb0080"
  },
  {
    "url": "ngsw.json",
    "revision": "17c1b432152f75a1c6edf7d2f79e4fcc"
  },
  {
    "url": "polyfills-es2015.c7adb0e20b57a14746d0.js",
    "revision": "8b1a50192f2e7aa554b49d66b9bf4003"
  },
  {
    "url": "polyfills-es5.14a914a580f683962feb.js",
    "revision": "73b274c462647bdb24315809c5527450"
  },
  {
    "url": "runtime-es2015.a75da5b4ae824fc245dd.js",
    "revision": "1244d3f2f28ecc6619157927aca95200"
  },
  {
    "url": "runtime-es5.a75da5b4ae824fc245dd.js",
    "revision": "1244d3f2f28ecc6619157927aca95200"
  },
  {
    "url": "safety-worker.js",
    "revision": "9963b75a25ae24de13db3e8e39ab027b"
  },
  {
    "url": "styles.9f14324782c8dd690959.css",
    "revision": "f1f58a91a9f265088292b3fdb2add00a"
  },
  {
    "url": "worker-basic.min.js",
    "revision": "9963b75a25ae24de13db3e8e39ab027b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/www4.aia.com.hk\/ievent\/check-in\//, new workbox.strategies.NetworkFirst({ "networkTimeoutSeconds":5, plugins: [] }), 'GET');
