webpackJsonp([0],[,,function(t,e){function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}t.exports=r},function(t,e){function r(t){return null!==t&&"object"==typeof t}t.exports=r},,,function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=r(24),s=n(i),u=r(20),a=n(u),c=r(2),l=n(c),f=r(7),p={},h=function(t){return t&&0===parseInt(t.error_code)?t.data:null},d=function(t){return(0,l["default"])(t)?(0,f.json2formdata)(t):t},y=function(t){return/^http/.test(t)?t:a["default"].join("/api/",t)},g=["get","post","put","patch","del"],m=g.reduce(function(t,e){return t[e]=function(t,r){return new Promise(function(n,o){var i=y(t),u=r&&r.cache;u&&void 0!==p[i]&&n(p[i]);var a=s["default"][e](y(t));if(r&&r.data){var c="post"===e?"send":"query";"post"===e&&a.set("Content-Type","application/x-www-form-urlencoded"),a[c](d(r.data))}a.end(function(t,e){t&&o({error_code:-1,err:t});var r=e.body,s=h(r);s?(u&&(p[i]=s),n(s)):o({error_code:r.error_code,error:r.result,data:r.data})})})},t},{}),v=o({batch:function(t){var e=t.map(function(t){var e=t.method,r=t.url,n=t.options;return m[e](r,n)});return Promise.all(e)},cache:g.reduce(function(t,e){return t[e]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return v[e](t,o({},r,{cache:!0}))},t},{})},m);e["default"]=v},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.encode_html=e.json2formdata=e.format_queries=e.date_str=e.format_date=e.second2date=e.page_data=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=r(18),s=n(i),u=r(2),a=n(u),c=r(19),l=n(c),f=(e.page_data=function(t){return function(e){return o({},e,{total:t.total,page:t.page,page_size:t.pagesize,page_total:Math.ceil(t.total/t.pagesize)})}},e.second2date=function(t){return new Date(1e3*t)}),p=e.format_date=(0,i.partial)(function(t,e){var r=[e.getFullYear(),e.getMonth()+1,e.getDate()].join("-");return t&&(r+=" "+[e.getHours(),e.getMinutes()].join(":")),r});e.date_str=function(t,e){return(0,i.compose)(p(e),f)(t)},e.format_queries=function(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(r+"="+encodeURIComponent(t[r]));return e.join("&")},e.json2formdata=function(t){var e=function n(t,e){return(0,a["default"])(e)?Object.keys(e).map(function(r){return n(t+"["+r+"]",e[r])}).join("&"):(0,l["default"])(e)?e.map(function(e,r){return n(t+"["+r+"]",e)}).join("&"):void 0===e?t+"=":t+"="+encodeURIComponent(e.toString())},r=Object.keys(t).map(function(r){return e(r,t[r])});return r.join("&")},e.encode_html=function(t){return s["default"].reduce(function(t,e){return t.replace(e[0],e[1])},t,[[/</g,"&lt;"],[/>/g,"&gt;"]])}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var o=r(6),i=n(o),s=function(){var t=new Date,e=t.getHours(),r=t.getMinutes();return(e<10?"0"+e:e)+":"+(r<10?"0"+r:r)},u={template:r(15),replace:!0,data:function(){return{userName:"Sawyer",time:s()}},methods:{show_detail:function(){i["default"].get("/test").then(function(t){console.log(t)})}},ready:function(){var t=this;setInterval(function(){t.time=s()},6e4)}};t.exports=u},,function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},,,,,function(t,e){t.exports='<div class=app-header><span class=app-header-title>Class Selector</span><div class="app-greet pull-right mr20"><span v-on:click=show_detail>Welcome, {{userName || "Student"}} {{time}}</span></div></div>'},,function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e,r){!function(e,r){t.exports=r()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=r(2),s=n(i),u=r(3),a=n(u),c=o({},s,a);t.exports=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},n=e.id=function(t){return t},o=(e.noop=function(){},e.partial=function(t){var e=t.length,r=void 0;return(r=function(e,n){return function(){for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return i.length>=n?t.apply(null,e.concat(i)):r(e.concat(i),n-i.length)}})([],e)}),i=e.reduce=o(function(t,e,r){for(var n=e,o=0,i=r.length;o<i;o+=1)n=t(n,r[o],o,r);return n}),s=e.reduce_right=o(function(t,e,r){for(var n=e,o=r.length-1;o>=0;o-=1)n=t(r[o],n,o,r);return n}),u=e.map=o(function(t,e){return i(function(e,r,n,o){return e.push(t(r,n,o)),e},[],e)}),a=e.filter=o(function(t,e){return i(function(e,r,n,o){return t(r,n,o)&&e.push(r),e},[],e)}),c=(e.without=o(function(t,e){return a(function(e){return e!==t},e)}),e.pluck=o(function(t,e){return u(function(e){return e[t]},e)}),e.is_array=function(){var t=9007199254740991,e=Object.prototype.toString,n="[object Array]",o=function(t){return!!t&&"object"==("undefined"==typeof t?"undefined":r(t))},i=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=t};return function(t){return o(t)&&i(t.length)&&e.call(t)==n}}()),l=(e.zipWith=o(function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];for(var o=Math.max.apply(null,r.map(function(t){return t.length})),i=[],s=function(e){i.push(t.apply(null,r.map(function(t){return t[e]})))},u=0;u<o;u+=1)s(u);return i}),e.flatten=function(t){return i(function(t,e){return t.concat(e)},[],t)},e.deep_flatten=function(t){var e=function r(t){return i(function(t,e){return c(e)?t=t.concat(r(e)):t.push(e),t},[],t)};return e(t)},e.range=function(t,e,r){for(var n=[],o=r||1,i=t;i<e;i+=o)n.push(i);return n},e.obj_map=o(function(t,e){return i(function(r,n){return r[n]=t(e[n],n),r},{},Object.keys(e))}),e.pick=o(function(t,e){return i(function(t,r){return t[r]=e[r],t},{},t)}),e.set=o(function(t,e,r){var n=e.split(".").map(function(t){return 1===(m=t.match(/\w+/g)).length?m[0]:m});i(function(t,e,n,o){if(n===o.length-1){if(isArray(e)){var s=i(function(t,e){return t[e]},t[e[0]],e.slice(1,-1));s[e.slice(-1)]=r}t[e]=r}return isArray(e)?i(function(t,e){return t[e]},t[e[0]],e.slice(1)):t[e]},t,n)}),e.compose=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return s(function(t,e){return function(r){return t(e(r))}},n,e)}),f=(e.compose_promise=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return s(function(t,e){return function(r){return Promise.resolve(e(r)).then(t)}},n,e)},e.promisify=function(t,e){return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return new Promise(function(r,o){t.apply(e,[].concat(n,[function(t,e){t?o(t):r(e||!0)}]))})}},e.array_lift=u,e.array_lift2=l(u,u),e.trim=function(t){return t.replace(/^\s*|\s*$/g,"")},e.repeat=o(function(t,e){for(var r="";t-- >0;)r+=e;return r}));e.n_digits=o(function(t,e){var r=e+"";return r.length>=t?r:f(1,"0")+r}),e.sprintf=o(function(t,e){return i(function(t,r){var n=new RegExp("\\$\\{"+r+"\\}","g");return t.replace(n,e[r])},t,Object.keys(e))})},function(t,e,r){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.async_map_limit=e.async_limit=e.async_flow=e.async_take_while_right=e.async_reduce=e.async_array_lift2=e.async_array_lift=void 0;var o=function(){function t(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var s,u=t[Symbol.iterator]();!(n=(s=u.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(a){o=!0,i=a}finally{try{!n&&u["return"]&&u["return"]()}finally{if(o)throw i}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=r(2),s=(e.async_array_lift=(0,i.partial)(function(t,e){return Promise.all((0,i.map)(t,e))}),e.async_array_lift2=(0,i.partial)(function(t,e){return Promise.all((0,i.map)(function(e){return Promise.all((0,i.map)(t,e))},e))}),e.async_reduce=function(t,e,r,n,o,i){var s=void 0;return(s=function(r,o,i){return n(i,o[r]).then(function(n){return t(r,o,n)?s(e(r),o,n):n})})(r,i,o)}),u=(e.async_take_while_right=(0,i.partial)(function(t,e){return s(function(t,e,r){var n=o(r,2),i=n[0];n[1];return t>0&&i},function(t){return t-1},e.length-1,function(e,r){var n=o(e,2),i=(n[0],n[1]);return t(r).then(function(t){return[t,t?(i.unshift(r),i):i]})},[!0,[]],e).then(function(t){return t[1]})}),e.async_flow=(0,i.partial)(function(t,e){return s(function(t,e){return t<e.length-1},function(t){return t+1},0,function(e,r){return t(r).then(function(t){return[].concat(n(e),[t])})},[],e)}),e.async_limit=(0,i.partial)(function(t,e){return new Promise(function(r,n){var o=0,s=0,u=[],a=e.length,c=function(t,e){return o++,t().then(function(t){return o--,u.push([t,e]),l()})},l=function f(){return u.length===e.length?(u.sort(function(t,e){return t[1]-e[1]}),void r((0,i.pluck)(0,u))):o<t&&s<a?(s++,Promise.all([c(e[s-1],s-1),f()])):void 0};l()["catch"](function(t){return console.log("error",t,t.stack)})})}));e.async_map_limit=(0,i.partial)(function(t,e,r){return u(t,(0,i.map)(function(t){return function(){return e(t)}},r))})}])})},function(t,e){var r=Array.isArray;t.exports=r},function(t,e,r){(function(e){"use strict";function n(t,e){for(var r=[],n=0;n<t.length;n++){var o=t[n];o&&"."!==o&&(".."===o?r.length&&".."!==r[r.length-1]?r.pop():e&&r.push(".."):r.push(o))}return r}function o(t){for(var e=t.length-1,r=0;r<=e&&!t[r];r++);for(var n=e;n>=0&&!t[n];n--);return 0===r&&n===e?t:r>n?[]:t.slice(r,n+1)}function i(t){var e=f.exec(t),r=(e[1]||"")+(e[2]||""),n=e[3]||"",o=p.exec(n),i=o[1],s=o[2],u=o[3];return[r,i,s,u]}function s(t){var e=f.exec(t),r=e[1]||"",n=!!r&&":"!==r[1];return{device:r,isUnc:n,isAbsolute:n||!!e[2],tail:e[3]}}function u(t){return"\\\\"+t.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}function a(t){return d.exec(t).slice(1)}var c="win32"===e.platform,l=r(28),f=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,p=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,h={};h.resolve=function(){for(var t="",r="",o=!1,i=arguments.length-1;i>=-1;i--){var a;if(i>=0?a=arguments[i]:t?(a=e.env["="+t],a&&a.substr(0,3).toLowerCase()===t.toLowerCase()+"\\"||(a=t+"\\")):a=e.cwd(),!l.isString(a))throw new TypeError("Arguments to path.resolve must be strings");if(a){var c=s(a),f=c.device,p=c.isUnc,h=c.isAbsolute,d=c.tail;if((!f||!t||f.toLowerCase()===t.toLowerCase())&&(t||(t=f),o||(r=d+"\\"+r,o=h),t&&o))break}}return p&&(t=u(t)),r=n(r.split(/[\\\/]+/),!o).join("\\"),t+(o?"\\":"")+r||"."},h.normalize=function(t){var e=s(t),r=e.device,o=e.isUnc,i=e.isAbsolute,a=e.tail,c=/[\\\/]$/.test(a);return a=n(a.split(/[\\\/]+/),!i).join("\\"),a||i||(a="."),a&&c&&(a+="\\"),o&&(r=u(r)),r+(i?"\\":"")+a},h.isAbsolute=function(t){return s(t).isAbsolute},h.join=function(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(!l.isString(r))throw new TypeError("Arguments to path.join must be strings");r&&t.push(r)}var n=t.join("\\");return/^[\\\/]{2}[^\\\/]/.test(t[0])||(n=n.replace(/^[\\\/]{2,}/,"\\")),h.normalize(n)},h.relative=function(t,e){t=h.resolve(t),e=h.resolve(e);for(var r=t.toLowerCase(),n=e.toLowerCase(),i=o(e.split("\\")),s=o(r.split("\\")),u=o(n.split("\\")),a=Math.min(s.length,u.length),c=a,l=0;l<a;l++)if(s[l]!==u[l]){c=l;break}if(0==c)return e;for(var f=[],l=c;l<s.length;l++)f.push("..");return f=f.concat(i.slice(c)),f.join("\\")},h._makeLong=function(t){if(!l.isString(t))return t;if(!t)return"";var e=h.resolve(t);return/^[a-zA-Z]\:\\/.test(e)?"\\\\?\\"+e:/^\\\\[^?.]/.test(e)?"\\\\?\\UNC\\"+e.substring(2):t},h.dirname=function(t){var e=i(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},h.basename=function(t,e){var r=i(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},h.extname=function(t){return i(t)[3]},h.format=function(t){if(!l.isObject(t))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof t);var e=t.root||"";if(!l.isString(e))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof t.root);var r=t.dir,n=t.base||"";return r?r[r.length-1]===h.sep?r+n:r+h.sep+n:n},h.parse=function(t){if(!l.isString(t))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof t);var e=i(t);if(!e||4!==e.length)throw new TypeError("Invalid path '"+t+"'");return{root:e[0],dir:e[0]+e[1].slice(0,-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}},h.sep="\\",h.delimiter=";";var d=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,y={};y.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var i=o>=0?arguments[o]:e.cwd();if(!l.isString(i))throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,r="/"===i[0])}return t=n(t.split("/"),!r).join("/"),(r?"/":"")+t||"."},y.normalize=function(t){var e=y.isAbsolute(t),r=t&&"/"===t[t.length-1];return t=n(t.split("/"),!e).join("/"),t||e||(t="."),t&&r&&(t+="/"),(e?"/":"")+t},y.isAbsolute=function(t){return"/"===t.charAt(0)},y.join=function(){for(var t="",e=0;e<arguments.length;e++){var r=arguments[e];if(!l.isString(r))throw new TypeError("Arguments to path.join must be strings");r&&(t+=t?"/"+r:r)}return y.normalize(t)},y.relative=function(t,e){t=y.resolve(t).substr(1),e=y.resolve(e).substr(1);for(var r=o(t.split("/")),n=o(e.split("/")),i=Math.min(r.length,n.length),s=i,u=0;u<i;u++)if(r[u]!==n[u]){s=u;break}for(var a=[],u=s;u<r.length;u++)a.push("..");return a=a.concat(n.slice(s)),a.join("/")},y._makeLong=function(t){return t},y.dirname=function(t){var e=a(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},y.basename=function(t,e){var r=a(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},y.extname=function(t){return a(t)[3]},y.format=function(t){if(!l.isObject(t))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof t);var e=t.root||"";if(!l.isString(e))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof t.root);var r=t.dir?t.dir+y.sep:"",n=t.base||"";return r+n},y.parse=function(t){if(!l.isString(t))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof t);var e=a(t);if(!e||4!==e.length)throw new TypeError("Invalid path '"+t+"'");return e[1]=e[1]||"",e[2]=e[2]||"",e[3]=e[3]||"",{root:e[0],dir:e[0]+e[1].slice(0,-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}},y.sep="/",y.delimiter=":",c?t.exports=h:t.exports=y,t.exports.posix=y,t.exports.win32=h}).call(e,r(1))},function(t,e){t.exports=function(t,e,r){for(var n=0,o=t.length,i=3==arguments.length?r:t[n++];n<o;)i=e.call(null,i,t[n],++n,t);return i}},,,function(t,e,r){function n(){}function o(t){if(!v(t))return t;var e=[];for(var r in t)null!=t[r]&&i(e,r,t[r]);return e.join("&")}function i(t,e,r){if(Array.isArray(r))return r.forEach(function(r){i(t,e,r)});if(v(r))for(var n in r)i(t,e+"["+n+"]",r[n]);else t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}function s(t){for(var e,r,n={},o=t.split("&"),i=0,s=o.length;i<s;++i)e=o[i],r=e.indexOf("="),r==-1?n[decodeURIComponent(e)]="":n[decodeURIComponent(e.slice(0,r))]=decodeURIComponent(e.slice(r+1));return n}function u(t){var e,r,n,o,i=t.split(/\r?\n/),s={};i.pop();for(var u=0,a=i.length;u<a;++u)r=i[u],e=r.indexOf(":"),n=r.slice(0,e).toLowerCase(),o=_(r.slice(e+1)),s[n]=o;return s}function a(t){return/[\/+]json\b/.test(t)}function c(t){return t.split(/ *; */).shift()}function l(t){return g(t.split(/ *; */),function(t,e){var r=e.split(/ *= */),n=r.shift(),o=r.shift();return n&&o&&(t[n]=o),t},{})}function f(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this._setStatusProperties(this.xhr.status),this.header=this.headers=u(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function p(t,e){var r=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new f(r)}catch(n){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=n,t.rawResponse=r.xhr&&r.xhr.responseText?r.xhr.responseText:null,t.statusCode=r.xhr&&r.xhr.status?r.xhr.status:null,r.callback(t)}if(r.emit("response",e),t)return r.callback(t,e);try{if(e.status>=200&&e.status<300)return r.callback(t,e);var o=new Error(e.statusText||"Unsuccessful HTTP response");o.original=t,o.response=e,o.status=e.status,r.callback(o,e)}catch(n){r.callback(n)}})}function h(t,e){var r=b("DELETE",t);return e&&r.end(e),r}var d,y=r(10),g=r(21),m=r(25),v=r(3);d="undefined"!=typeof window?window:"undefined"!=typeof self?self:this;var b=t.exports=r(26).bind(null,p);b.getXHR=function(){if(!(!d.XMLHttpRequest||d.location&&"file:"==d.location.protocol&&d.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1};var _="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};b.serializeObject=o,b.parseString=s,b.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},b.serialize={"application/x-www-form-urlencoded":o,"application/json":JSON.stringify},b.parse={"application/x-www-form-urlencoded":s,"application/json":JSON.parse},f.prototype.get=function(t){return this.header[t.toLowerCase()]},f.prototype._setHeaderProperties=function(t){var e=this.header["content-type"]||"";this.type=c(e);var r=l(e);for(var n in r)this[n]=r[n]},f.prototype._parseBody=function(t){var e=b.parse[this.type];return!e&&a(this.type)&&(e=b.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null},f.prototype._setStatusProperties=function(t){1223===t&&(t=204);var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=(4==e||5==e)&&this.toError(),this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},f.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,n="cannot "+e+" "+r+" ("+this.status+")",o=new Error(n);return o.status=this.status,o.method=e,o.url=r,o},b.Response=f,y(p.prototype);for(var w in m)p.prototype[w]=m[w];p.prototype.type=function(t){return this.set("Content-Type",b.types[t]||t),this},p.prototype.responseType=function(t){return this._responseType=t,this},p.prototype.accept=function(t){return this.set("Accept",b.types[t]||t),this},p.prototype.auth=function(t,e,r){switch(r||(r={type:"basic"}),r.type){case"basic":var n=btoa(t+":"+e);this.set("Authorization","Basic "+n);break;case"auto":this.username=t,this.password=e}return this},p.prototype.query=function(t){return"string"!=typeof t&&(t=o(t)),t&&this._query.push(t),this},p.prototype.attach=function(t,e,r){return this._getFormData().append(t,e,r||e.name),this},p.prototype._getFormData=function(){return this._formData||(this._formData=new d.FormData),this._formData},p.prototype.callback=function(t,e){var r=this._callback;this.clearTimeout(),r(t,e)},p.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},p.prototype._timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},p.prototype._appendQueryString=function(){var t=this._query.join("&");t&&(this.url+=~this.url.indexOf("?")?"&"+t:"?"+t)},p.prototype.end=function(t){var e=this,r=this.xhr=b.getXHR(),o=this._timeout,i=this._formData||this._data;this._callback=t||n,r.onreadystatechange=function(){if(4==r.readyState){var t;try{t=r.status}catch(n){t=0}if(0==t){if(e.timedout)return e._timeoutError();if(e._aborted)return;return e.crossDomainError()}e.emit("end")}};var s=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),t.direction="download",e.emit("progress",t)};this.hasListeners("progress")&&(r.onprogress=s);try{r.upload&&this.hasListeners("progress")&&(r.upload.onprogress=s)}catch(u){}if(o&&!this._timer&&(this._timer=setTimeout(function(){e.timedout=!0,e.abort()},o)),this._appendQueryString(),this.username&&this.password?r.open(this.method,this.url,!0,this.username,this.password):r.open(this.method,this.url,!0),this._withCredentials&&(r.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof i&&!this._isHost(i)){var c=this._header["content-type"],l=this._serializer||b.serialize[c?c.split(";")[0]:""];!l&&a(c)&&(l=b.serialize["application/json"]),l&&(i=l(i))}for(var f in this.header)null!=this.header[f]&&r.setRequestHeader(f,this.header[f]);return this._responseType&&(r.responseType=this._responseType),this.emit("request",this),r.send("undefined"!=typeof i?i:null),this},b.Request=p,b.get=function(t,e,r){var n=b("GET",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},b.head=function(t,e,r){var n=b("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},b.options=function(t,e,r){var n=b("OPTIONS",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},b.del=h,b["delete"]=h,b.patch=function(t,e,r){var n=b("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},b.post=function(t,e,r){var n=b("POST",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},b.put=function(t,e,r){var n=b("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n}},function(t,e,r){var n=r(3);e.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},e.parse=function(t){return this._parser=t,this},e.serialize=function(t){return this._serializer=t,this},e.timeout=function(t){return this._timeout=t,this},e.then=function(t,e){if(!this._fullfilledPromise){var r=this;this._fullfilledPromise=new Promise(function(t,e){r.end(function(r,n){r?e(r):t(n)})})}return this._fullfilledPromise.then(t,e)},e.use=function(t){return t(this),this},e.get=function(t){return this._header[t.toLowerCase()]},e.getHeader=e.get,e.set=function(t,e){if(n(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},e.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},e.field=function(t,e){return this._getFormData().append(t,e),this},e.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},e.withCredentials=function(){return this._withCredentials=!0,this},e.redirects=function(t){return this._maxRedirects=t,this},e.toJSON=function(){return{method:this.method,url:this.url,data:this._data}},e._isHost=function(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}},e.send=function(t){var e=n(t),r=this._header["content-type"];if(e&&n(this._data))for(var o in t)this._data[o]=t[o];else"string"==typeof t?(r||this.type("form"),r=this._header["content-type"],"application/x-www-form-urlencoded"==r?this._data=this._data?this._data+"&"+t:t:this._data=(this._data||"")+t):this._data=t;return!e||this._isHost(t)?this:(r||this.type("json"),this)}},function(t,e){function r(t,e,r){return"function"==typeof r?new t("GET",e).end(r):2==arguments.length?new t("GET",e):new t(e,r)}t.exports=r},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e,r){(function(t,n){function o(t,r){var n={seen:[],stylize:s};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),y(r)?n.showHidden=r:r&&e._extend(n,r),w(n.showHidden)&&(n.showHidden=!1),w(n.depth)&&(n.depth=2),w(n.colors)&&(n.colors=!1),w(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=i),a(n,t,n.depth)}function i(t,e){var r=o.styles[e];return r?"["+o.colors[r][0]+"m"+t+"["+o.colors[r][1]+"m":t}function s(t,e){return t}function u(t){var e={};return t.forEach(function(t,r){e[t]=!0}),e}function a(t,r,n){if(t.customInspect&&r&&A(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var o=r.inspect(n,t);return b(o)||(o=a(t,o,n)),o}var i=c(t,r);if(i)return i;var s=Object.keys(r),y=u(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(r)),S(r)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return l(r);if(0===s.length){if(A(r)){var g=r.name?": "+r.name:"";return t.stylize("[Function"+g+"]","special")}if(x(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(O(r))return t.stylize(Date.prototype.toString.call(r),"date");if(S(r))return l(r)}var m="",v=!1,_=["{","}"];if(d(r)&&(v=!0,_=["[","]"]),A(r)){var w=r.name?": "+r.name:"";m=" [Function"+w+"]"}if(x(r)&&(m=" "+RegExp.prototype.toString.call(r)),O(r)&&(m=" "+Date.prototype.toUTCString.call(r)),S(r)&&(m=" "+l(r)),0===s.length&&(!v||0==r.length))return _[0]+m+_[1];if(n<0)return x(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special");t.seen.push(r);var j;return j=v?f(t,r,n,y,s):s.map(function(e){return p(t,r,n,y,e,v)}),t.seen.pop(),h(j,m,_)}function c(t,e){if(w(e))return t.stylize("undefined","undefined");if(b(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}return v(e)?t.stylize(""+e,"number"):y(e)?t.stylize(""+e,"boolean"):g(e)?t.stylize("null","null"):void 0}function l(t){return"["+Error.prototype.toString.call(t)+"]"}function f(t,e,r,n,o){for(var i=[],s=0,u=e.length;s<u;++s)z(e,String(s))?i.push(p(t,e,r,n,String(s),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(p(t,e,r,n,o,!0))}),i}function p(t,e,r,n,o,i){var s,u,c;if(c=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]},c.get?u=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(u=t.stylize("[Setter]","special")),z(n,o)||(s="["+o+"]"),u||(t.seen.indexOf(c.value)<0?(u=g(r)?a(t,c.value,null):a(t,c.value,r-1),u.indexOf("\n")>-1&&(u=i?u.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+u.split("\n").map(function(t){return"   "+t}).join("\n"))):u=t.stylize("[Circular]","special")),w(s)){if(i&&o.match(/^\d+$/))return u;s=JSON.stringify(""+o),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+u}function h(t,e,r){var n=0,o=t.reduce(function(t,e){return n++,e.indexOf("\n")>=0&&n++,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0);return o>60?r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1]:r[0]+e+" "+t.join(", ")+" "+r[1]}function d(t){return Array.isArray(t)}function y(t){return"boolean"==typeof t}function g(t){return null===t}function m(t){return null==t}function v(t){return"number"==typeof t}function b(t){return"string"==typeof t}function _(t){return"symbol"==typeof t}function w(t){return void 0===t}function x(t){return j(t)&&"[object RegExp]"===T(t)}function j(t){return"object"==typeof t&&null!==t}function O(t){return j(t)&&"[object Date]"===T(t)}function S(t){return j(t)&&("[object Error]"===T(t)||t instanceof Error)}function A(t){return"function"==typeof t}function E(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||"undefined"==typeof t}function T(t){return Object.prototype.toString.call(t)}function k(t){return t<10?"0"+t.toString(10):t.toString(10)}function P(){var t=new Date,e=[k(t.getHours()),k(t.getMinutes()),k(t.getSeconds())].join(":");return[t.getDate(),M[t.getMonth()],e].join(" ")}function z(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var C=/%[sdj%]/g;e.format=function(t){if(!b(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(o(arguments[r]));return e.join(" ")}for(var r=1,n=arguments,i=n.length,s=String(t).replace(C,function(t){if("%%"===t)return"%";if(r>=i)return t;switch(t){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return t}}),u=n[r];r<i;u=n[++r])s+=g(u)||!j(u)?" "+u:" "+o(u);return s},e.deprecate=function(r,o){function i(){if(!s){if(n.throwDeprecation)throw new Error(o);n.traceDeprecation?console.trace(o):console.error(o),s=!0}return r.apply(this,arguments)}if(w(t.process))return function(){return e.deprecate(r,o).apply(this,arguments)};if(n.noDeprecation===!0)return r;var s=!1;return i};var D,H={};e.debuglog=function(t){if(w(D)&&(D=n.env.NODE_DEBUG||""),t=t.toUpperCase(),!H[t])if(new RegExp("\\b"+t+"\\b","i").test(D)){var r=n.pid;H[t]=function(){var n=e.format.apply(e,arguments);console.error("%s %d: %s",t,r,n)}}else H[t]=function(){};return H[t]},e.inspect=o,o.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]
},o.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=d,e.isBoolean=y,e.isNull=g,e.isNullOrUndefined=m,e.isNumber=v,e.isString=b,e.isSymbol=_,e.isUndefined=w,e.isRegExp=x,e.isObject=j,e.isDate=O,e.isError=S,e.isFunction=A,e.isPrimitive=E,e.isBuffer=r(27);var M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.log=function(){console.log("%s - %s",P(),e.format.apply(e,arguments))},e.inherits=r(17),e._extend=function(t,e){if(!e||!j(e))return t;for(var r=Object.keys(e),n=r.length;n--;)t[r[n]]=e[r[n]];return t}}).call(e,function(){return this}(),r(1))}]);