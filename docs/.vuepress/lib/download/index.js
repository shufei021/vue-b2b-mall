!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).download=t()}(this,function(){"use strict";function o(t){return new Promise(function(a){var e=new Image;e.src=t,e.crossOrigin="",e.onload=function(){var e=this.width,t=this.height,n=document.createElement("canvas"),o=n.getContext("2d");n.setAttribute("width",e),n.setAttribute("height",t),o.drawImage(this,0,0,e,t);n=n.toDataURL("image/png",.95);a(n)}})}function a(e,t){var n=document.createElement("a");n&&(document.body.appendChild(n),n.style="display: none",n.download=e,n.href=t,document.createEvent?((t=document.createEvent("MouseEvents")).initEvent("click",!0,!1),n.dispatchEvent(t)):document.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick(),document.body.removeChild(n))}function e(){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function")}return e.prototype=Object.freeze({__proto__:null,downloadImg:o,downloadFile:a,fileToBase64:function(o){return new Promise(function(t){var n=(window.URL||window.webkitURL).createObjectURL(o),e=new FileReader;e.readAsDataURL(o),e.onload=function(e){e=e.target.result;t({base64:e,dataURL:n,type:e.slice(e.indexOf("/")+1,e.indexOf(";"))})}})},downloadByUrl:function(e,t){var n=1<arguments.length&&void 0!==t?t:"图片名称";o(e).then(function(e){a(n,e)})},downloadPicture:function(e,o){var a=new Image;a.setAttribute("crossOrigin","anonymous"),a.onload=function(){var e=document.createElement("canvas");e.width=a.width,e.height=a.height,e.getContext("2d").drawImage(a,0,0,e.width,e.height);var t=e.toDataURL("image/png"),n=document.createElement("a"),e=new MouseEvent("click");n.download=o||"下载图片名称",n.href=t,n.dispatchEvent(e)},a.src=("string"==typeof e?document.querySelector(e):e).src},downBolbFile:function(e){var t=e.httpType,n=void 0===t?"GET":t,o=e.url,t=e.isCust,c=void 0!==t&&t,e=e.fileName,s=void 0===e?"相关文档.png":e;return new Promise(function(a,i){var e={userInfo:{},token:""},d=new XMLHttpRequest,r="";d.open(n,o),d.setRequestHeader("token",e.token),d.setRequestHeader("Content-Type","application/json"),d.responseType="blob",d.onreadystatechange=function(){var o;4===d.readyState&&200===d.status&&((o=new FileReader).readAsText(d.response),o.onload=function(){try{var e=o.result;i(JSON.parse(e))}catch(e){r=c?d.getResponseHeader("Content-Disposition").split(";")[1].split("=")[1]:s;var t=new Blob([d.response]),n=URL.createObjectURL(t),t=document.createElement("a");document.body.appendChild(t),t.href=n,t.target="_blank",t.id="linkId",t.className="linkId",t.download=decodeURI(r),document.getElementById("linkId").click(),t.remove(),a()}}),4===d.readyState&&200!==d.status&&i(JSON.parse(d.response))},d.send(null)})}}),new e});
//# sourceMappingURL=index.js.map
