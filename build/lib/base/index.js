!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).base=e()}(this,function(){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}return{isEmpty:function(t){if(null==t)return!0;if(null!=(n=t)&&"function"!=typeof n&&("number"==typeof(n=n.length)&&-1<n&&n%1==0&&n<=9007199254740991))try{return!t.length}catch(t){}var e,n,r;if(["map","set"].includes((r=t,Object.prototype.toString.call(r).slice(8,-1).toLowerCase())))return!t.size;if(e=t,n=Object.prototype,r=e&&e.constructor,e===("function"==typeof r&&r.prototype||n))return!Object.keys(t).length;var o,i=Object.prototype.hasOwnProperty;for(o in t)if(i.call(t,o))return!1;return!0},isEquals:function e(n,r){if(n===r)return!0;if(n instanceof Date&&r instanceof Date)return n.getTime()===r.getTime();if(!n||!r||"object"!==i(n)&&"object"!==i(r))return n===r;if(n.prototype!==r.prototype)return!1;var t=Object.keys(n);if(t.length!==Object.keys(r).length)return!1;function o(t){return Object.prototype.toString.call(t).slice(8,-1)}return(Array.isArray(n)&&Array.isArray(r)||"Object"==o(n)&&"Object"==o(r))&&t.every(function(t){return e(n[t],r[t])})},isArray:function(t){return Array.isArray(t)},isBoolean:function(t){return"boolean"==typeof t},isDate:function(t){return"date"===e(t)},isFunction:function(t){return"function"==typeof t},isNull:function(t){return null===t},isNumber:function(t){return"number"==typeof t},isObject:function(t){return"object"===getType(t)},isRegExp:function(t){return"regexp"===e(t)},isString:function(t){return"string"==typeof t},isType:function(t,e){return getType(t)===e},isUndefined:function(t){return void 0===t}}});
//# sourceMappingURL=index.js.map
