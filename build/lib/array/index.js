!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).array=n()}(this,function(){"use strict";function o(r){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function n(n,r){var t,e=Object.keys(n);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(n),r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,t)),e}function u(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach(function(r){var n,t;n=e,r=o[t=r],t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function i(r){return function(r){if(Array.isArray(r))return e(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||function(r,n){if(!r)return;if("string"==typeof r)return e(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return e(r,n)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}function c(n,t){if(n===t)return!0;if(n instanceof Date&&t instanceof Date)return n.getTime()===t.getTime();if(!n||!t||"object"!==o(n)&&"object"!==o(t))return n===t;if(n.prototype!==t.prototype)return!1;var r=Object.keys(n);return r.length===Object.keys(t).length&&((Array.isArray(n)&&Array.isArray(t)||"Object"==e(n)&&"Object"==e(t))&&r.every(function(r){return c(n[r],t[r])}));function e(r){return Object.prototype.toString.call(r).slice(8,-1)}}return{union:function(n,r,t){return n.concat(r.filter(function(r){return t?!n.map(function(r){return r[t]}).includes(r[t]):!n.includes(r)}))},intersection:function(r,n,t){return r.filter(function(r){return t?n.map(function(r){return r[t]}).includes(r[t]):n.includes(r)})},archive:function(t,e){return Array.from(new Set(t.map(function(r){return r[e]}))).reduce(function(r,n){return r.push(t.filter(function(r){return r[e]===n})),r},[])},arrayFill:function(r,n){return Array(r).fill(n)},arrayToObject:function(r){return Array.from(r.entries()).reduce(function(r,n){return r[n[0]]=n[1],r},{})},arrayToTree:function n(t,r,e){var o=1<arguments.length&&void 0!==r?r:null,i=2<arguments.length&&void 0!==e?e:"pid";return t.filter(function(r){return r[i]===o}).map(function(r){return u(u({},r),{},{children:n(t,r.id,i)})})},delBy:function(r,n,t){for(var e=2<arguments.length&&void 0!==t&&t?r:JSON.parse(JSON.stringify(r)),o=e.length-1;0<=o;o--)if("function"==typeof n)n(e[o])&&e.splice(o,1);else if(Array.isArray(n))-1<n.indexOf(e[o])&&e.splice(o,1);else if(e[o]===n)e.splice(o,1);else if("Object"===Object.prototype.toString.call(n).slice(8,-1)){var i,u=e[o];for(i in n)Array.isArray(n[i])?-1<n[i].indexOf(u[i])&&e.splice(o,1):n[i]===u[i]&&e.splice(o,1)}return e},except:function(r,t,e){return[].concat(i(r),i(t)).filter(function(n){return![r,t].every(function(r){return e?r.map(function(r){return r[e]}).includes(n[e]):r.includes(n)})})},exchangePostion:function(r,n,t,e){r=3<arguments.length&&void 0!==e&&e?r:JSON.parse(JSON.stringify(r));return r.splice(n,1,r.splice(t,1,r[n])[0]),r},flatten:function t(r,n){var e=1<arguments.length&&void 0!==n?n:1;return r.reduce(function(r,n){return r.concat(1<e&&Array.isArray(n)?t(n,e-1):n)},[])},group:function(e,o){return i(Array(Math.ceil(e.length/o)).keys()).reduce(function(r,n,t){return r.push(e.slice(t*o,(t+1)*o)),r},[])},indexOfAll:function(r,e,o){return r.reduce(function(r,n,t){return(o?n[e]===o:n===e)?[].concat(i(r),[t]):r},[])},insetPostion:function(r,n,t,e){r=3<arguments.length&&void 0!==e&&e?r:JSON.parse(JSON.stringify(r));return r.splice(t,0,r.splice(n,1)[0]),r},isRepeat:function(n){var t=n.length;try{for(var r=0;r<t;r++)for(var e=r+1;e<t;e++)if(c(n[r],n[e]))return!0;return!1}catch(r){return t!==unique(n).length}},mean:function(r,n){return(n?r.map("function"==typeof n?n:function(r){return r[n]}):r).reduce(function(r,n){return r+ +n},0)/r.length},range:function(t,r){return Array.from({length:r-t+1},function(r,n){return n+t})},rangeRandom:function(r,n,t,e){var o=0<arguments.length&&void 0!==r?r:0,i=1<arguments.length&&void 0!==n?n:0,t=2<arguments.length&&void 0!==t?t:1;if(!(3<arguments.length&&void 0!==e)||e)return Array.from({length:t},function(){return Math.floor(Math.random()*(i-o+1))+o});for(var u=Array.from({length:i-o+1},function(r,n){return n+o}),c=t>u.length?u.length:t,f=[];f.length!=c;){var a=u[Math.floor(Math.random()*u.length)];f.includes(a)||f.push(a)}return f},rangeScopeStartZore:function(r){return i(Object.keys(r).keys())},rangeStep:function(t,r,e){return Array.from({length:(r-t)/e+1},function(r,n){return t+n*e})},sample:function(r){return r[Math.floor(Math.random()*r.length)]},sum:function(r,t){return r.reduce(function(r,n){return r+(t?n[t]||0:n)},0)},timesTotal:function(r,t,e){return r.reduce(function(r,n){return(e?n[t]===e:n===t)?r+1:r},0)},unique:function(t,e){var r=[];if(e)r=t.reduce(function(r,n){return r.map(function(r){return r[e]}).includes(n[e])?r:[].concat(i(r),[n])},[]);else for(var n=0,o=t.length;n<o;n++)!function(n){0!=n&&r.some(function(r){return c(r,t[n])})||r.push(t[n])}(n);return r}}});
//# sourceMappingURL=index.js.map
