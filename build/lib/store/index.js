!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).store=t()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return JSON.parse(r(e))}function u(e){return"string"==typeof e}function s(e){return"[object Object]"===Object.prototype.toString.call(e)}function y(e){return"symbol"!=t(e)&&(!isNaN(parseFloat(e))&&isFinite(e))}var n=localStorage,b=n.setItem.bind(n),r=n.getItem.bind(n),i=n.removeItem.bind(n),d=JSON.stringify,e={set:function(e,t){if(u(e))b(e,u(t)?t:d(t));else if(s(e))for(var r in e)b(r,u(e[r])?e[r]:d(e[r]))},get:function(e){return u(e)?o(e):Array.isArray(e)?e.reduce(function(e,t){return u(t)&&t in n&&(e[t]=o(t)),e},{}):void 0},del:function(e){if(u(e))i(e);else if(Array.isArray(e))for(var t=0,r=e.length;t<r;t++){var n=e[t];u(n)&&i(n)}},each:function(e){for(var t=Object.keys(localStorage),r=0,n=t.length;r<n;r++){var i=t[r];e(i,o(i))}},setExpired:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];function n(e,t,r){b(e,d({startTime:a,expiredTime:r,value:t}))}var i=t[0],o=t[1],f=t[2],a=+new Date;if(1==t.length){if(s(i))for(var c in i)n(c,i[c],0)}else if(2==t.length){if(u(i))n(i,0,o);else if(s(i)&&y(o))for(var l in i)n(l,i[l],Number(o))}else 3==t.length&&u(i)&&y(f)&&n(i,o,Number(f))},getExpired:function(e){var t=o(e);return t&&"startTime"in t?new Date-t.startTime>t.expiredTime?(i(e),!1):t.value:t},clearAll:function(){n.clear()},clearAllExpired:function(){for(var e=Object.keys(n).length,t=0;t<e;t++){var r=o(k);r&&"expiredTime"in r&&i(k)}}},f=sessionStorage,a=f.getItem.bind(f),c=f.setItem.bind(f),l=f.removeItem.bind(f);f.clear.bind(f);function p(e){return JSON.parse(a(e))}function g(e){return"string"==typeof e}function m(t){if(g(t))try{return p(t)}catch(e){return a(t)}else if(h(t))return t.reduce(function(e,t){var r=p(t);return r&&(e[t]=r),e},{})}var v=JSON.stringify,h=Array.isArray;return{local:e,session:{get:m,set:function(e,t){if(g(e))c(e,t);else if(h(e))for(var r=0;r<e.length;r++){var n=e[r];if(o=n,"[object Object]"===Object.prototype.toString.call(o))for(var i in n)c(i,g(n[i])?n[i]:v(n[i]))}var o},del:function(e){if(g(e))l(e);else if(Array.isArray(e))for(var t=0,r=e.length;t<r;t++){var n=e[t];g(n)&&l(n)}},clearAll:function(){f.clear()},each:function(e){for(var t=Object.keys(sessionStorage),r=0;r<t.length;r++)e(t[r],m(t[r]))}}}});
//# sourceMappingURL=index.js.map
