!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=16)}([function(e,t,r){"use strict";var n=r(3),o=Object.prototype.toString;function s(e){return"[object Array]"===o.call(e)}function i(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function f(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:f,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):s(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)f(arguments[n],r);return t},extend:function(e,t,r){return f(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},function(e,t,r){"use strict";var n=r(0);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var s;if(r)s=r(t);else if(n.isURLSearchParams(t))s=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),s=i.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},function(e,t,r){"use strict";var n=r(7);e.exports=function(e,t,r,o,s){var i=new Error(e);return n(i,t,r,o,s)}},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";var n=r(0),o=r(23),s={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,c={adapter:("undefined"!=typeof XMLHttpRequest?a=r(24):"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)&&(a=r(30)),a),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(s)})),e.exports=c},function(e,t,r){"use strict";var n=r(2);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,r){"use strict";var n=r(26),o=r(27);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("https")},function(e,t,r){var n=r(12),o=n.URL,s=r(9),i=r(10),a=r(31).Writable,c=r(32),u=r(33),f=["abort","aborted","connect","error","socket","timeout"],p=Object.create(null);f.forEach((function(e){p[e]=function(t,r,n){this._redirectable.emit(e,t,r,n)}}));var l=x("ERR_FR_REDIRECTION_FAILURE",""),d=x("ERR_FR_TOO_MANY_REDIRECTS","Maximum number of redirects exceeded"),h=x("ERR_FR_MAX_BODY_LENGTH_EXCEEDED","Request body larger than maxBodyLength limit"),m=x("ERR_STREAM_WRITE_AFTER_END","write after end");function g(e,t){a.call(this),this._sanitizeOptions(e),this._options=e,this._ended=!1,this._ending=!1,this._redirectCount=0,this._redirects=[],this._requestBodyLength=0,this._requestBodyBuffers=[],t&&this.on("response",t);var r=this;this._onNativeResponse=function(e){r._processResponse(e)},this._performRequest()}function y(e){var t={maxRedirects:21,maxBodyLength:10485760},r={};return Object.keys(e).forEach((function(s){var i=s+":",a=r[i]=e[s],f=t[s]=Object.create(a);Object.defineProperties(f,{request:{value:function(e,s,a){if("string"==typeof e){var f=e;try{e=C(new o(f))}catch(t){e=n.parse(f)}}else o&&e instanceof o?e=C(e):(a=s,s=e,e={protocol:i});return"function"==typeof s&&(a=s,s=null),(s=Object.assign({maxRedirects:t.maxRedirects,maxBodyLength:t.maxBodyLength},e,s)).nativeProtocols=r,c.equal(s.protocol,i,"protocol mismatch"),u("options",s),new g(s,a)},configurable:!0,enumerable:!0,writable:!0},get:{value:function(e,t,r){var n=f.request(e,t,r);return n.end(),n},configurable:!0,enumerable:!0,writable:!0}})})),t}function v(){}function C(e){var t={protocol:e.protocol,hostname:e.hostname.startsWith("[")?e.hostname.slice(1,-1):e.hostname,hash:e.hash,search:e.search,pathname:e.pathname,path:e.pathname+e.search,href:e.href};return""!==e.port&&(t.port=Number(e.port)),t}function b(e,t){var r;for(var n in t)e.test(n)&&(r=t[n],delete t[n]);return r}function x(e,t){function r(e){Error.captureStackTrace(this,this.constructor),this.message=e||t}return r.prototype=new Error,r.prototype.constructor=r,r.prototype.name="Error ["+e+"]",r.prototype.code=e,r}function w(e){for(var t=0;t<f.length;t++)e.removeListener(f[t],p[f[t]]);e.on("error",v),e.abort()}g.prototype=Object.create(a.prototype),g.prototype.abort=function(){w(this._currentRequest),this.emit("abort")},g.prototype.write=function(e,t,r){if(this._ending)throw new m;if(!("string"==typeof e||"object"==typeof e&&"length"in e))throw new TypeError("data should be a string, Buffer or Uint8Array");"function"==typeof t&&(r=t,t=null),0!==e.length?this._requestBodyLength+e.length<=this._options.maxBodyLength?(this._requestBodyLength+=e.length,this._requestBodyBuffers.push({data:e,encoding:t}),this._currentRequest.write(e,t,r)):(this.emit("error",new h),this.abort()):r&&r()},g.prototype.end=function(e,t,r){if("function"==typeof e?(r=e,e=t=null):"function"==typeof t&&(r=t,t=null),e){var n=this,o=this._currentRequest;this.write(e,t,(function(){n._ended=!0,o.end(null,null,r)})),this._ending=!0}else this._ended=this._ending=!0,this._currentRequest.end(null,null,r)},g.prototype.setHeader=function(e,t){this._options.headers[e]=t,this._currentRequest.setHeader(e,t)},g.prototype.removeHeader=function(e){delete this._options.headers[e],this._currentRequest.removeHeader(e)},g.prototype.setTimeout=function(e,t){var r=this;function n(t){t.setTimeout(e),t.removeListener("timeout",t.destroy),t.addListener("timeout",t.destroy)}function o(t){r._timeout&&clearTimeout(r._timeout),r._timeout=setTimeout((function(){r.emit("timeout"),s()}),e),n(t)}function s(){clearTimeout(this._timeout),t&&r.removeListener("timeout",t),this.socket||r._currentRequest.removeListener("socket",o)}return t&&this.on("timeout",t),this.socket?o(this.socket):this._currentRequest.once("socket",o),this.on("socket",n),this.once("response",s),this.once("error",s),this},["flushHeaders","getHeader","setNoDelay","setSocketKeepAlive"].forEach((function(e){g.prototype[e]=function(t,r){return this._currentRequest[e](t,r)}})),["aborted","connection","socket"].forEach((function(e){Object.defineProperty(g.prototype,e,{get:function(){return this._currentRequest[e]}})})),g.prototype._sanitizeOptions=function(e){if(e.headers||(e.headers={}),e.host&&(e.hostname||(e.hostname=e.host),delete e.host),!e.pathname&&e.path){var t=e.path.indexOf("?");t<0?e.pathname=e.path:(e.pathname=e.path.substring(0,t),e.search=e.path.substring(t))}},g.prototype._performRequest=function(){var e=this._options.protocol,t=this._options.nativeProtocols[e];if(t){if(this._options.agents){var r=e.substr(0,e.length-1);this._options.agent=this._options.agents[r]}var o=this._currentRequest=t.request(this._options,this._onNativeResponse);this._currentUrl=n.format(this._options),o._redirectable=this;for(var s=0;s<f.length;s++)o.on(f[s],p[f[s]]);if(this._isRedirect){var i=0,a=this,c=this._requestBodyBuffers;!function e(t){if(o===a._currentRequest)if(t)a.emit("error",t);else if(i<c.length){var r=c[i++];o.finished||o.write(r.data,r.encoding,e)}else a._ended&&o.end()}()}}else this.emit("error",new TypeError("Unsupported protocol "+e))},g.prototype._processResponse=function(e){var t=e.statusCode;this._options.trackRedirects&&this._redirects.push({url:this._currentUrl,headers:e.headers,statusCode:t});var r=e.headers.location;if(r&&!1!==this._options.followRedirects&&t>=300&&t<400){if(w(this._currentRequest),e.destroy(),++this._redirectCount>this._options.maxRedirects)return void this.emit("error",new d);((301===t||302===t)&&"POST"===this._options.method||303===t&&!/^(?:GET|HEAD)$/.test(this._options.method))&&(this._options.method="GET",this._requestBodyBuffers=[],b(/^content-/i,this._options.headers));var o=b(/^host$/i,this._options.headers)||n.parse(this._currentUrl).hostname,s=n.resolve(this._currentUrl,r);u("redirecting to",s),this._isRedirect=!0;var i=n.parse(s);if(Object.assign(this._options,i),i.hostname!==o&&b(/^authorization$/i,this._options.headers),"function"==typeof this._options.beforeRedirect){var a={headers:e.headers};try{this._options.beforeRedirect.call(null,this._options,a)}catch(e){return void this.emit("error",e)}this._sanitizeOptions(this._options)}try{this._performRequest()}catch(e){var c=new l("Redirected request failed: "+e.message);c.cause=e,this.emit("error",c)}}else e.responseUrl=this._currentUrl,e.redirects=this._redirects,this.emit("response",e),this._requestBodyBuffers=[]},e.exports=y({http:s,https:i}),e.exports.wrap=y},function(e,t){e.exports=require("url")},function(e,t,r){e.exports=function(e){function t(e){let r,o=null;function s(...e){if(!s.enabled)return;const n=s,o=Number(new Date),i=o-(r||o);n.diff=i,n.prev=r,n.curr=o,r=o,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(r,o)=>{if("%%"===r)return"%";a++;const s=t.formatters[o];if("function"==typeof s){const t=e[a];r=s.call(n,t),e.splice(a,1),a--}return r}),t.formatArgs.call(n,e);(n.log||t.log).apply(n,e)}return s.namespace=e,s.useColors=t.useColors(),s.color=t.selectColor(e),s.extend=n,s.destroy=t.destroy,Object.defineProperty(s,"enabled",{enumerable:!0,configurable:!1,get:()=>null===o?t.enabled(e):o,set:e=>{o=e}}),"function"==typeof t.init&&t.init(s),s}function n(e,r){const n=t(this.namespace+(void 0===r?":":r)+e);return n.log=this.log,n}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(o),...t.skips.map(o).map(e=>"-"+e)].join(",");return t.enable(""),e},t.enable=function(e){let r;t.save(e),t.names=[],t.skips=[];const n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length;for(r=0;r<o;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(36),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach(r=>{t[r]=e[r]}),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let r=0;for(let t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t),r|=0;return t.colors[Math.abs(r)%t.colors.length]},t.enable(t.load()),t}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){t=t||{};var r={},o=["url","method","data"],s=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function u(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=c(void 0,e[o])):r[o]=c(e[o],t[o])}n.forEach(o,(function(e){n.isUndefined(t[e])||(r[e]=c(void 0,t[e]))})),n.forEach(s,u),n.forEach(i,(function(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=c(void 0,e[o])):r[o]=c(void 0,t[o])})),n.forEach(a,(function(n){n in t?r[n]=c(e[n],t[n]):n in e&&(r[n]=c(void 0,e[n]))}));var f=o.concat(s).concat(i).concat(a),p=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return n.forEach(p,u),r}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){const n=r(17);t.handler=function(e,t,r){const{API_URL:o,API_CLIENT_ID:s,API_CLIENT_SECRET:i}=process.env,a=`https://api.github.com/users?client_id=${s}&client_secret=${i}`,c=e=>{r(null,{statusCode:200,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"},body:JSON.stringify(e)})};"GET"==e.httpMethod&&n.get(a).then(e=>c(e.data)).catch(e=>c(e))}},function(e,t,r){e.exports=r(18)},function(e,t,r){"use strict";var n=r(0),o=r(3),s=r(19),i=r(14);function a(e){var t=new s(e),r=o(s.prototype.request,t);return n.extend(r,s.prototype,t),n.extend(r,t),r}var c=a(r(5));c.Axios=s,c.create=function(e){return a(i(c.defaults,e))},c.Cancel=r(15),c.CancelToken=r(45),c.isCancel=r(4),c.all=function(e){return Promise.all(e)},c.spread=r(46),c.isAxiosError=r(47),e.exports=c,e.exports.default=c},function(e,t,r){"use strict";var n=r(0),o=r(1),s=r(20),i=r(21),a=r(14);function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}})),e.exports=c},function(e,t,r){"use strict";var n=r(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,r){"use strict";var n=r(0),o=r(22),s=r(4),i=r(5);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return a(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(a(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},function(e,t,r){"use strict";var n=r(0),o=r(6),s=r(25),i=r(1),a=r(8),c=r(28),u=r(29),f=r(2);e.exports=function(e){return new Promise((function(t,r){var p=e.data,l=e.headers;n.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";l.Authorization="Basic "+btoa(h+":"+m)}var g=a(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,s={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};o(t,r,s),d=null}},d.onabort=function(){d&&(r(f("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){r(f("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(f(t,e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var y=(e.withCredentials||u(g))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;y&&(l[e.xsrfHeaderName]=y)}if("setRequestHeader"in d&&n.forEach(l,(function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),r(e),d=null)})),p||(p=null),d.send(p)}))}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";var n=r(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,s,i={};return e?(n.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=n.trim(e.substr(0,s)).toLowerCase(),r=n.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}})),i):i}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},function(e,t,r){"use strict";var n=r(0),o=r(6),s=r(8),i=r(1),a=r(9),c=r(10),u=r(11).http,f=r(11).https,p=r(12),l=r(43),d=r(44),h=r(2),m=r(7),g=/https:?/;e.exports=function(e){return new Promise((function(t,r){var y=function(e){t(e)},v=function(e){r(e)},C=e.data,b=e.headers;if(b["User-Agent"]||b["user-agent"]||(b["User-Agent"]="axios/"+d.version),C&&!n.isStream(C)){if(Buffer.isBuffer(C));else if(n.isArrayBuffer(C))C=Buffer.from(new Uint8Array(C));else{if(!n.isString(C))return v(h("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",e));C=Buffer.from(C,"utf-8")}b["Content-Length"]=C.length}var x=void 0;e.auth&&(x=(e.auth.username||"")+":"+(e.auth.password||""));var w=s(e.baseURL,e.url),_=p.parse(w),R=_.protocol||"http:";if(!x&&_.auth){var E=_.auth.split(":");x=(E[0]||"")+":"+(E[1]||"")}x&&delete b.Authorization;var O=g.test(R),F=O?e.httpsAgent:e.httpAgent,A={path:i(_.path,e.params,e.paramsSerializer).replace(/^\?/,""),method:e.method.toUpperCase(),headers:b,agent:F,agents:{http:e.httpAgent,https:e.httpsAgent},auth:x};e.socketPath?A.socketPath=e.socketPath:(A.hostname=_.hostname,A.port=_.port);var j,T=e.proxy;if(!T&&!1!==T){var k=R.slice(0,-1)+"_proxy",S=process.env[k]||process.env[k.toUpperCase()];if(S){var B=p.parse(S),L=process.env.no_proxy||process.env.NO_PROXY,q=!0;if(L)q=!L.split(",").map((function(e){return e.trim()})).some((function(e){return!!e&&("*"===e||("."===e[0]&&_.hostname.substr(_.hostname.length-e.length)===e||_.hostname===e))}));if(q&&(T={host:B.hostname,port:B.port,protocol:B.protocol},B.auth)){var N=B.auth.split(":");T.auth={username:N[0],password:N[1]}}}}T&&(A.headers.host=_.hostname+(_.port?":"+_.port:""),function e(t,r,n){if(t.hostname=r.host,t.host=r.host,t.port=r.port,t.path=n,r.auth){var o=Buffer.from(r.auth.username+":"+r.auth.password,"utf8").toString("base64");t.headers["Proxy-Authorization"]="Basic "+o}t.beforeRedirect=function(t){t.headers.host=t.host,e(t,r,t.href)}}(A,T,R+"//"+_.hostname+(_.port?":"+_.port:"")+A.path));var U=O&&(!T||g.test(T.protocol));e.transport?j=e.transport:0===e.maxRedirects?j=U?c:a:(e.maxRedirects&&(A.maxRedirects=e.maxRedirects),j=U?f:u),e.maxBodyLength>-1&&(A.maxBodyLength=e.maxBodyLength);var P=j.request(A,(function(t){if(!P.aborted){var r=t,s=t.req||P;if(204!==t.statusCode&&"HEAD"!==s.method&&!1!==e.decompress)switch(t.headers["content-encoding"]){case"gzip":case"compress":case"deflate":r=r.pipe(l.createUnzip()),delete t.headers["content-encoding"]}var i={status:t.statusCode,statusText:t.statusMessage,headers:t.headers,config:e,request:s};if("stream"===e.responseType)i.data=r,o(y,v,i);else{var a=[];r.on("data",(function(t){a.push(t),e.maxContentLength>-1&&Buffer.concat(a).length>e.maxContentLength&&(r.destroy(),v(h("maxContentLength size of "+e.maxContentLength+" exceeded",e,null,s)))})),r.on("error",(function(t){P.aborted||v(m(t,e,null,s))})),r.on("end",(function(){var t=Buffer.concat(a);"arraybuffer"!==e.responseType&&(t=t.toString(e.responseEncoding),e.responseEncoding&&"utf8"!==e.responseEncoding||(t=n.stripBOM(t))),i.data=t,o(y,v,i)}))}}}));P.on("error",(function(t){P.aborted&&"ERR_FR_TOO_MANY_REDIRECTS"!==t.code||v(m(t,e,null,P))})),e.timeout&&P.setTimeout(e.timeout,(function(){P.abort(),v(h("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",P))})),e.cancelToken&&e.cancelToken.promise.then((function(e){P.aborted||(P.abort(),v(e))})),n.isStream(C)?C.on("error",(function(t){v(m(t,e,null,P))})).pipe(P):P.end(C)}))}},function(e,t){e.exports=require("stream")},function(e,t){e.exports=require("assert")},function(e,t,r){var n;e.exports=function(){if(!n)try{n=r(34)("follow-redirects")}catch(e){n=function(){}}n.apply(null,arguments)}},function(e,t,r){"undefined"==typeof process||"renderer"===process.type||!0===process.browser||process.__nwjs?e.exports=r(35):e.exports=r(37)},function(e,t,r){t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;t.splice(1,0,r,"color: inherit");let n=0,o=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(n++,"%c"===e&&(o=n))}),t.splice(o,0,r)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=r(13)(t);const{formatters:n}=e.exports;n.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},function(e,t){var r=1e3,n=6e4,o=60*n,s=24*o;function i(e,t,r,n){var o=t>=1.5*r;return Math.round(e/r)+" "+n+(o?"s":"")}e.exports=function(e,t){t=t||{};var a=typeof e;if("string"===a&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*i;case"weeks":case"week":case"w":return 6048e5*i;case"days":case"day":case"d":return i*s;case"hours":case"hour":case"hrs":case"hr":case"h":return i*o;case"minutes":case"minute":case"mins":case"min":case"m":return i*n;case"seconds":case"second":case"secs":case"sec":case"s":return i*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===a&&isFinite(e))return t.long?function(e){var t=Math.abs(e);if(t>=s)return i(e,t,s,"day");if(t>=o)return i(e,t,o,"hour");if(t>=n)return i(e,t,n,"minute");if(t>=r)return i(e,t,r,"second");return e+" ms"}(e):function(e){var t=Math.abs(e);if(t>=s)return Math.round(e/s)+"d";if(t>=o)return Math.round(e/o)+"h";if(t>=n)return Math.round(e/n)+"m";if(t>=r)return Math.round(e/r)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t,r){const n=r(38),o=r(39);t.init=function(e){e.inspectOpts={};const r=Object.keys(t.inspectOpts);for(let n=0;n<r.length;n++)e.inspectOpts[r[n]]=t.inspectOpts[r[n]]},t.log=function(...e){return process.stderr.write(o.format(...e)+"\n")},t.formatArgs=function(r){const{namespace:n,useColors:o}=this;if(o){const t=this.color,o="[3"+(t<8?t:"8;5;"+t),s=`  ${o};1m${n} [0m`;r[0]=s+r[0].split("\n").join("\n"+s),r.push(o+"m+"+e.exports.humanize(this.diff)+"[0m")}else r[0]=function(){if(t.inspectOpts.hideDate)return"";return(new Date).toISOString()+" "}()+n+" "+r[0]},t.save=function(e){e?process.env.DEBUG=e:delete process.env.DEBUG},t.load=function(){return process.env.DEBUG},t.useColors=function(){return"colors"in t.inspectOpts?Boolean(t.inspectOpts.colors):n.isatty(process.stderr.fd)},t.destroy=o.deprecate(()=>{},"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."),t.colors=[6,2,3,4,5,1];try{const e=r(40);e&&(e.stderr||e).level>=2&&(t.colors=[20,21,26,27,32,33,38,39,40,41,42,43,44,45,56,57,62,63,68,69,74,75,76,77,78,79,80,81,92,93,98,99,112,113,128,129,134,135,148,149,160,161,162,163,164,165,166,167,168,169,170,171,172,173,178,179,184,185,196,197,198,199,200,201,202,203,204,205,206,207,208,209,214,215,220,221])}catch(e){}t.inspectOpts=Object.keys(process.env).filter(e=>/^debug_/i.test(e)).reduce((e,t)=>{const r=t.substring(6).toLowerCase().replace(/_([a-z])/g,(e,t)=>t.toUpperCase());let n=process.env[t];return n=!!/^(yes|on|true|enabled)$/i.test(n)||!/^(no|off|false|disabled)$/i.test(n)&&("null"===n?null:Number(n)),e[r]=n,e},{}),e.exports=r(13)(t);const{formatters:s}=e.exports;s.o=function(e){return this.inspectOpts.colors=this.useColors,o.inspect(e,this.inspectOpts).split("\n").map(e=>e.trim()).join(" ")},s.O=function(e){return this.inspectOpts.colors=this.useColors,o.inspect(e,this.inspectOpts)}},function(e,t){e.exports=require("tty")},function(e,t){e.exports=require("util")},function(e,t,r){"use strict";const n=r(41),o=r(42),s=process.env;let i;function a(e){return function(e){return 0!==e&&{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}(function(e){if(!1===i)return 0;if(o("color=16m")||o("color=full")||o("color=truecolor"))return 3;if(o("color=256"))return 2;if(e&&!e.isTTY&&!0!==i)return 0;const t=i?1:0;if("win32"===process.platform){const e=n.release().split(".");return Number(process.versions.node.split(".")[0])>=8&&Number(e[0])>=10&&Number(e[2])>=10586?Number(e[2])>=14931?3:2:1}if("CI"in s)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some(e=>e in s)||"codeship"===s.CI_NAME?1:t;if("TEAMCITY_VERSION"in s)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(s.TEAMCITY_VERSION)?1:0;if("truecolor"===s.COLORTERM)return 3;if("TERM_PROGRAM"in s){const e=parseInt((s.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(s.TERM_PROGRAM){case"iTerm.app":return e>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(s.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(s.TERM)||"COLORTERM"in s?1:(s.TERM,t)}(e))}o("no-color")||o("no-colors")||o("color=false")?i=!1:(o("color")||o("colors")||o("color=true")||o("color=always"))&&(i=!0),"FORCE_COLOR"in s&&(i=0===s.FORCE_COLOR.length||0!==parseInt(s.FORCE_COLOR,10)),e.exports={supportsColor:a,stdout:a(process.stdout),stderr:a(process.stderr)}},function(e,t){e.exports=require("os")},function(e,t,r){"use strict";e.exports=(e,t)=>{t=t||process.argv;const r=e.startsWith("-")?"":1===e.length?"-":"--",n=t.indexOf(r+e),o=t.indexOf("--");return-1!==n&&(-1===o||n<o)}},function(e,t){e.exports=require("zlib")},function(e){e.exports=JSON.parse('{"name":"axios","version":"0.21.1","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test && bundlesize","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://github.com/axios/axios","devDependencies":{"bundlesize":"^0.17.0","coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.0.2","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^20.1.0","grunt-karma":"^2.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^1.3.0","karma-chrome-launcher":"^2.2.0","karma-coverage":"^1.1.1","karma-firefox-launcher":"^1.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.2.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^5.2.0","sinon":"^4.5.0","typescript":"^2.8.1","url-search-params":"^0.10.0","webpack":"^1.13.1","webpack-dev-server":"^1.14.1"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.10.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')},function(e,t,r){"use strict";var n=r(15);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}}]));