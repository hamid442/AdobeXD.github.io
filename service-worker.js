"use strict";var precacheConfig=[["/index.html","56e460a6c29c554c80a7bf0e7739b62c"],["/static/css/main.bf56c457.css","876931376e6e8900e4211b83b3945bec"],["/static/js/main.31899c48.js","f6664bc5ff1aea6b0556aa35db9f22da"],["/static/media/Cloud-APIs.a8e3e0fb.svg","a8e3e0fb341644bf508096af7bf33478"],["/static/media/Connect-Your-Tools@3x.b3328f12.png","b3328f12ad597c350cf20513dae6ca3d"],["/static/media/Essential-Plugins@3x.eace57e6.png","eace57e6f23e47702d068ccb6ff3d186"],["/static/media/F.inmotionnowlogo.3bdc7ce9.png","3bdc7ce9e91e4f1a3528e5801e8d3486"],["/static/media/Icon_Black.24a3eb39.png","24a3eb399ef1ff455ebb68614e4feaf3"],["/static/media/Plugin-APIs.48c61276.svg","48c6127612277cbfb55a0818a8853f3a"],["/static/media/S_Illu_ArrowRight_180x30.e4021511.svg","e4021511215e065a82417d113016e8e3"],["/static/media/S_Illu_DeveloperCommunity_180x120.0d86feae.svg","0d86feae36b5185da41509f35a7f5818"],["/static/media/S_Illu_UserCommunity_180x120.5cde74f8.svg","5cde74f89f643f1899f77f9eb4a09b5b"],["/static/media/Stark Logo Avatar (1).1102df18.png","1102df182c126c997f23f96b2e324980"],["/static/media/UT_Logo.fcd797bb.png","fcd797bbcfc69a7ff06230a4e60e5fb7"],["/static/media/behance.089af933.png","089af933184c349f30e970aa1a5fb4fa"],["/static/media/chevron.06a92271.svg","06a922711b546a00e9a275365b7825d1"],["/static/media/design.82bb02d3.svg","82bb02d304a871e379125d9e4aeef096"],["/static/media/feature-plugin@2x.04e20ff3.png","04e20ff3d8181355e4ce72998f9275d4"],["/static/media/forum.cf76691e.svg","cf76691e8996eb007a4d7395a508c3be"],["/static/media/github.068d5197.svg","068d51974c688fe89649babea1b49bbf"],["/static/media/impekable_logo.28d76ca1.svg","28d76ca1a953b67f03fd6502eff84c06"],["/static/media/jirawide.c68e0174.svg","c68e01742458c963f98e522124859c18"],["/static/media/logo-web.efb90aff.svg","efb90aff0a2aee782e504574047f8ae7"],["/static/media/logo.a36d9e59.png","a36d9e59c66fb0c3743db9c6ac4747ce"],["/static/media/main.10440528.svg","10440528173adaad3415c9705534347c"],["/static/media/main@3x.7a007295.png","7a00729556a3f130d28703f0a173a91b"],["/static/media/mark.1410b418.png","1410b41887043de8e49f8e39b86ad65a"],["/static/media/marketplace-desktop@3x.910bd370.png","910bd370199ac8eb7707c6bd60183467"],["/static/media/newsletter.60f7c1b1.svg","60f7c1b1a729a00f23fe44191dda42a8"],["/static/media/publish.a94cf3b4.svg","a94cf3b4fb641a1a60dcd1b999253db1"],["/static/media/renameit@3x.4da7949b.png","4da7949b3b3275797748b12fd0d1c95b"],["/static/media/right-top@3x.0225229e.png","0225229ed3a61d9046d9da5845d99e41"],["/static/media/right.b04e1ce8.png","b04e1ce8433778f3211c3e34830cc44e"],["/static/media/slope-logo_full-color_dark.60ffdc2e.png","60ffdc2e762ee94771591d1d2666d224"],["/static/media/update-your-plugin@2x.d79d28d3.png","d79d28d3f512e1585fcee4eb5dd10991"],["/static/media/usertesting@3x.a320cfb4.png","a320cfb447cb61641727c83502631350"],["/static/media/xd_web_build.7c317074.png","7c317074c91e6c9565b760280f731ddb"],["/static/media/xd_web_create.2687667c.png","2687667c201166c18e0549341237d405"],["/static/media/xd_web_share.dd420876.png","dd420876e9224610825461a317abc36f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});