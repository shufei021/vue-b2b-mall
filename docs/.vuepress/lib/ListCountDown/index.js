!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).ListCountDown=e()}(this,function(){"use strict";function n(t,e,i){var n=String(t);return!n||n.length>=e?String(t):"".concat(Array(e+1-n.length).join(i)).concat(t)}function t(t){this.timer=null,this.format=t.format||"dd天hh时mm分ss秒",this.list=t.list||[],this.key=t.timeKey,this.content=t.previewKey,this.type=t.type||1,this.update()}return t.prototype.update=function(){this.operation(1)},t.prototype.cancel=function(){this.operation(0)},t.prototype.calc=function(t){var e=t[this.key],e=(new Date((e.trim().includes(" ")?e.trim():e.trim()+" 00:00:00").replace(/-/g,"/"))-new Date)/1e3;e<=0&&(t.isExpred=!0);var i={d:e<=0?"00":Math.floor(e/86400),h:e<=0?"00":n(parseInt(Math.floor(e%86400/3600)),2,0),m:e<=0?"00":n(parseInt(Math.floor(e%86400%3600)/60),2,0),s:e<=0?"00":n(parseInt(e%60),2,0)};if(1==this.type)return this.format.replace(/d{1,2}|h{1,2}|m{1,2}|s{1,2}|S/g,function(t){return"d"===t.charAt(0)||2===t.length?i[t.charAt(0)]:Number(i[t.charAt(0)])});t.d=i.d,t.h=i.h,t.m=i.m,t.s=i.s},t.prototype.operation=function(t){var i=this;this.list.length&&(clearInterval(this.timer),this.timer=null,1==t&&(this.timer=setInterval(function(){for(var t=0,e=i.list.length;t<e;t++)1==i.type?i.list[t][i.content]=i.calc(i.list[t]):i.calc(i.list[t])},1e3)))},t});
//# sourceMappingURL=index.js.map
