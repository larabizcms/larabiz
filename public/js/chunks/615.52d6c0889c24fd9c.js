(self.webpackChunk=self.webpackChunk||[]).push([[615],{11218:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>s});var n=r(96540),o=r(71468),i=r(47767),u=r(87233),c=(r(56171),r(74848));function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){var n;return n=function(t,e){if("object"!=f(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"==f(n)?n:n+"")in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=function(t){return p(p({},t),{},{headers:{Accept:"application/json"}})};function s(){var t=(0,o.d4)((function(t){return t.auth})).userToken,e=(0,i.Zp)();return(0,n.useEffect)((function(){t||e("/admin-cp/login")}),[e,t]),(0,c.jsx)(u.A,{url:"http://larabiz.local/api/swagger.json",requestInterceptor:b})}},42634:()=>{}}]);