if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"032132533aa2415e5f2cb567ccac2b36"},{url:"/_next/static/DutrBktvafqGRs1bCJzHP/_buildManifest.js",revision:"a0ae24e7f29dd3809ab75b5dd91a79dc"},{url:"/_next/static/DutrBktvafqGRs1bCJzHP/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/146-2f22afd02bf9c02a.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/150-2e1787588b23bb91.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/193-c741f24f9c6eb506.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/216-13e86896e6487b49.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/23-cad1b5eeffdebba9.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/418-a25c62f9f1dfa65a.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/54-969e215bb8be44cf.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/546-d35a4cca0ec32aea.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/55-d9af8e5a314f784e.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/648-d32aa63508572011.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/86-7a66850a47d1ac76.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/978-4700429fb57f2942.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/app/(auth)/sign-in/%5B%5B...sign-in%5D%5D/page-6ee592eb8749e0ae.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/app/(auth)/sign-up/%5B%5B...sign-up%5D%5D/page-399a0027fa5aea43.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/app/(root)/(home)/layout-b5c3e69b4f761d15.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/app/(root)/(home)/page-bfc9e7a12e5c67a5.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/app/(root)/(home)/personal-room/page-4441e77884a8fdd8.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/app/(root)/(home)/previous/page-95500d8aec254afa.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/app/(root)/(home)/recordings/page-de397c9875e43b55.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/app/(root)/(home)/upcoming/page-c3767b063409445f.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/app/(root)/layout-919a993b653d76b6.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/app/(root)/meeting/%5Bid%5D/page-32b3d0c831b1b38b.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/app/_not-found/page-089504d3a6381cc5.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/app/layout-cd2928fd12e107e9.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/b714f034-ede42e0254190b78.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/c16f53c3-001a205285492236.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/ca377847-e791b0ec01073a0c.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/e8686b1f-c0349a75dba3dba9.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/fd9d1056-82fb5101798708e8.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/framework-00a8ba1a63cfdc9e.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/main-app-6b155ff9a2e80a4e.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/main-c0f4cb0d303cf6c0.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/pages/_app-037b5d058bd9a820.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/pages/_error-6ae619510b1539d6.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-65536affa7e8ca13.js",revision:"DutrBktvafqGRs1bCJzHP"},{url:"/_next/static/css/74cc832aace9ca57.css",revision:"74cc832aace9ca57"},{url:"/_next/static/css/c3c1fbb4abd379f9.css",revision:"c3c1fbb4abd379f9"},{url:"/_next/static/css/fc1f1201b4bfbb2d.css",revision:"fc1f1201b4bfbb2d"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/android-chrome-192x192.png",revision:"06f882b9d67db2c1bc69677130047a06"},{url:"/android-chrome-512x512.png",revision:"e6be6acc94306dbcc27877dd85940a7d"},{url:"/apple-touch-icon.png",revision:"d6523b5cf4e360908ee539acf0ab61d3"},{url:"/favicon-16x16.png",revision:"ebad725e5a05abf5b27f863a93e621d0"},{url:"/favicon-32x32.png",revision:"c12b23d5f19cc156b23011599535d827"},{url:"/favicon.ico",revision:"62ff584b9d856e06c471628b8e1d3a1f"},{url:"/icon512_maskable.png",revision:"9f2c3dcd62f948890f72348cf0e4b1a3"},{url:"/icon512_rounded.png",revision:"738077a5057905c6dfb9771b1b98f3f8"},{url:"/icons/Home.svg",revision:"2123c2520734817e92944fa2670d4465"},{url:"/icons/Video.svg",revision:"bbff416be996645d1e7c85ec52e9c92b"},{url:"/icons/add-meeting.svg",revision:"30baf72ae5c255331e079f53d0484787"},{url:"/icons/add-personal.svg",revision:"c32222acaee8c6285d94d492ee1cde7d"},{url:"/icons/add.svg",revision:"3337145f98c956c811193f6172f898ef"},{url:"/icons/call-ended.svg",revision:"e3ff27bc87e1e1208f3da9dba14276c0"},{url:"/icons/checked.svg",revision:"935f09427dd020a180ea3b2a9661716d"},{url:"/icons/copy.svg",revision:"0a83faba29fd2627ef28eff089641305"},{url:"/icons/hamburger.svg",revision:"441d942f09276670fe8c01569b49c24c"},{url:"/icons/hamburger2.svg",revision:"bcf6be2adda3526caed409026fc611ca"},{url:"/icons/home2.svg",revision:"96e2388d3338e89ba34e7de1adeab3b7"},{url:"/icons/join-meeting.svg",revision:"73c5f963dddc37539b4810ed363fed55"},{url:"/icons/loading-circle.svg",revision:"fba9fdd83b93af39ccb5c88a66ea6742"},{url:"/icons/logo.svg",revision:"ca541386039f86f4f5451912171f3010"},{url:"/icons/logo2.svg",revision:"1c11bbeb4ad144c4a25c3e117700bf81"},{url:"/icons/logo3.svg",revision:"22aea19b615e41bdb0896221db92db30"},{url:"/icons/person-add.svg",revision:"0379f5d9c545b18dcf126626710b015c"},{url:"/icons/play.svg",revision:"110e618df5c2705216f72c88c2fa4dfa"},{url:"/icons/previous.svg",revision:"1a30556e274c888e5996366965ec49ce"},{url:"/icons/previous2.svg",revision:"cbbffc12c1078d902e7b3861404ed019"},{url:"/icons/recordings.svg",revision:"40a06aaa911b22111b601887b1236a7f"},{url:"/icons/recordings2.svg",revision:"41319cb59db8d6d1e8453121a0f1ee62"},{url:"/icons/schedule.svg",revision:"8a15c065311d9895eaacf469de70019b"},{url:"/icons/share.svg",revision:"154520797f630a872b3705e79cb13009"},{url:"/icons/star.svg",revision:"02e12bb5f6efee178e6672d69d528979"},{url:"/icons/three-dots.svg",revision:"ffae90fd9cdb6fbf91f3bcb26bee5599"},{url:"/icons/upcoming.svg",revision:"a7f8bfb4495fa52ae184e8481e167747"},{url:"/icons/upcoming2.svg",revision:"f4ab005dcdd62d68dc29af83b7d5a0be"},{url:"/icons/yoom-logo.svg",revision:"855286166bfd6f204fbad67a2c800ff8"},{url:"/images/avatar-1.jpeg",revision:"7770b701c7c9a35fd70757fc0a5fee56"},{url:"/images/avatar-2.jpeg",revision:"48daf671b407bef1b94e732a3bf3fdfe"},{url:"/images/avatar-3.png",revision:"ece30ea831352e8a213f46679ee3d179"},{url:"/images/avatar-4.png",revision:"c8ceb1635f756df5fcf803cfc70338b7"},{url:"/images/avatar-5.png",revision:"31ff03ec08fc231f03db3b672a5b5535"},{url:"/images/hero-background.png",revision:"4376027c55e6043150a34cb1e421c91f"},{url:"/images/ss.png",revision:"f4d97c85c5303754faa965d972caad27"},{url:"/manifest.json",revision:"4c454fe3f6e44b925a1b56e0ef789e59"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
