!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).store=t()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return JSON.parse(r(e))}function l(e){return"string"==typeof e}function s(e){return"[object Object]"===Object.prototype.toString.call(e)}function y(e){return"symbol"!=t(e)&&(!isNaN(parseFloat(e))&&isFinite(e))}function n(e){return JSON.parse(p(e))}function f(e){return"string"==typeof e}function i(t){if(f(t))try{return n(t)}catch(e){return p(t)}else if(S(t))return t.reduce(function(e,t){var r=n(t);return r&&(e[t]=r),e},{})}var a=localStorage,b=a.setItem.bind(a),r=a.getItem.bind(a),c=a.removeItem.bind(a),m=JSON.stringify,e={set:function(e,t){if(l(e))b(e,l(t)?t:m(t));else if(s(e))for(var r in e)b(r,l(e[r])?e[r]:m(e[r]))},get:function(e){return l(e)?o(e):Array.isArray(e)?e.reduce(function(e,t){return l(t)&&t in a&&(e[t]=o(t)),e},{}):void 0},del:function(e){if(l(e))c(e);else if(Array.isArray(e))for(var t=0,r=e.length;t<r;t++){var n=e[t];l(n)&&c(n)}},each:function(e){for(var t=Object.keys(localStorage),r=0,n=t.length;r<n;r++){var i=t[r];e(i,o(i))}},setExpired:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];function n(e,t,r){b(e,m({startTime:a,expiredTime:r,value:t}))}var i=t[0],o=t[1],f=t[2],a=+new Date;if(1==t.length){if(s(i))for(var c in i)n(c,i[c],0)}else if(2==t.length){if(l(i))n(i,0,o);else if(s(i)&&y(o))for(var u in i)n(u,i[u],Number(o))}else 3==t.length&&l(i)&&y(f)&&n(i,o,Number(f))},getExpired:function(e){var t=o(e);return t&&"startTime"in t?new Date-t.startTime>t.expiredTime?(c(e),!1):t.value:t},clearAll:function(){a.clear()},clearAllExpired:function(){for(var e=Object.keys(a).length,t=0;t<e;t++){var r=o(k);r&&"expiredTime"in r&&c(k)}}},u=sessionStorage,p=u.getItem.bind(u),d=u.setItem.bind(u),v=u.removeItem.bind(u),g=(u.clear.bind(u),JSON.stringify),S=Array.isArray;return{local:e,session:{get:i,set:function(e,t){if(f(e))d(e,t);else if(S(e))for(var r=0;r<e.length;r++){var n=e[r];if(o=n,"[object Object]"===Object.prototype.toString.call(o))for(var i in n)d(i,f(n[i])?n[i]:g(n[i]))}var o},del:function(e){if(f(e))v(e);else if(Array.isArray(e))for(var t=0,r=e.length;t<r;t++){var n=e[t];f(n)&&v(n)}},clearAll:function(){u.clear()},each:function(e){for(var t=Object.keys(sessionStorage),r=0;r<t.length;r++)e(t[r],i(t[r]))}}}});
//# sourceMappingURL=index.js.map
