module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){process.nextTick(function(){throw e})},n(n.s=44)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),u=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(u).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var u=this[o][0];"number"==typeof u&&(r[u]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(10)),o=l(n(9)),u=l(n(8)),i=l(n(0)),a=n(24),s=l(n(23)),c=n(25);function l(e){return e&&e.__esModule?e:{default:e}}n(41);var f=(0,s.default)(function(t){return(0,u.default)({id:"./",file:"/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/Routes.js",load:function(){return Promise.all([n(40)("./"+t.page),(0,o.default)(""+t.page,{})]).then(function(e){return e[0]})},path:function(){return r.default.join(e,"./"+t.page)},resolve:function(){return n(39).resolve("./"+t.page)},chunkName:function(){return""+t.page}})});t.default=function(){return i.default.createElement("div",null,i.default.createElement("div",{className:"nav"},i.default.createElement(a.Link,{to:"/"},"Gallery"),i.default.createElement(a.Link,{to:"/about"},"About"),i.default.createElement(a.Link,{to:"/article"},"Article")),i.default.createElement(c.Switch,null,i.default.createElement(a.Route,{exact:!0,path:"/"},i.default.createElement(f,{page:"Gallery"})),i.default.createElement(a.Route,{path:"/about",render:function(e){var t=e.staticContext,n=t?t.site:location.hostname.split(".")[0];return i.default.createElement(f,{site:n,page:"About"})}}),i.default.createElement(a.Route,{path:"/article/:slug",render:function(e){var t=e.staticContext,n=e.match,r=t?t.site:location.hostname.split(".")[0];return i.default.createElement(f,{site:r,match:n,page:"Article"})}})))}}).call(this,"/")},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(10)),o=a(n(9)),u=a(n(8)),i=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}n(26);var s=function(){(0,u.default)({id:"lodash",file:"/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/Gallery.js",load:function(){return Promise.all([Promise.resolve().then(n.t.bind(null,12,7)),(0,o.default)("lodash",{})]).then(function(e){return e[0]})},path:function(){return r.default.join(e,"lodash")},resolve:function(){return 12},chunkName:function(){return"lodash"}}).then(function(e){console.log("imported",e)})};t.default=function(){return i.default.createElement("div",null,i.default.createElement("h1",{onClick:s},"Gallery"))}}).call(this,"/")},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(10)),o=a(n(9)),u=a(n(8)),i=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}n(27),t.default=function(t){var a=n(19)("./"+t.site+"/siteConfig.js"),s=n(18)("./"+a.aboutImage),c=n(17)("./"+t.site+"/bio.md");return(0,u.default)({id:"../css//theme.css",file:"/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/Article.js",load:function(){return Promise.all([n(16)("./"+t.site+"/theme.css"),(0,o.default)("css/"+t.site+"-theme.css",{})]).then(function(e){return e[0]})},path:function(){return r.default.join(e,"../css/"+t.site+"/theme.css")},resolve:function(){return n(15).resolve("./"+t.site+"/theme.css")},chunkName:function(){return"css/"+t.site+"-theme.css"}}),i.default.createElement("div",null,i.default.createElement("div",{className:"profile"},i.default.createElement("img",{src:s}),i.default.createElement("h1",null,c.title),i.default.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:c.__content}})))}}).call(this,"/")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),u=n(24),i=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement(u.BrowserRouter,null,o.default.createElement(i.default,null))}}]),t}();t.default=s},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(10)),o=a(n(9)),u=a(n(8)),i=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}n(34),t.default=function(t){var a=n(19)("./"+t.site+"/siteConfig.js"),s=n(18)("./"+a.aboutImage),c=n(17)("./"+t.site+"/bio.md");return(0,u.default)({id:"../css//theme.css",file:"/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/About.js",load:function(){return Promise.all([n(16)("./"+t.site+"/theme.css"),(0,o.default)("css/"+t.site+"-theme.css",{})]).then(function(e){return e[0]})},path:function(){return r.default.join(e,"../css/"+t.site+"/theme.css")},resolve:function(){return n(15).resolve("./"+t.site+"/theme.css")},chunkName:function(){return"css/"+t.site+"-theme.css"}}),i.default.createElement("div",null,i.default.createElement("div",{className:"profile"},i.default.createElement("img",{src:s}),i.default.createElement("h1",null,c.title),i.default.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:c.__content}})))}}).call(this,"/")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearChunks=t.flushModuleIds=t.flushChunkNames=t.MODULE_IDS=t.CHUNK_NAMES=void 0,t.default=function(e,t,a,s){var c=t.key,l=t.timeout,f=void 0===l?15e3:l,d=t.onLoad,p=t.onError,h=t.isDynamic,m=t.modCache,v=t.promCache,y=i(h,e,t,a),b=y.chunkName,g=y.path,_=y.resolve,k=y.load;return{requireSync:function(e,t){var o=(0,r.loadFromCache)(b,e,m);if(!o){var u=void 0;if(!(0,r.isWebpack)()&&g){var i=(0,r.callForString)(g,e)||"";u=(0,r.tryRequire)(i)}else if((0,r.isWebpack)()&&_){var a=(0,r.callForString)(_,e);n.m[a]&&(u=(0,r.tryRequire)(a))}u&&(o=(0,r.resolveExport)(u,c,d,b,e,t,m,!0))}return o},requireAsync:function(e,t){var n=(0,r.loadFromCache)(b,e,m);if(n)return Promise.resolve(n);var o=(0,r.loadFromPromiseCache)(b,e,v);if(o)return o;var u=new Promise(function(n,o){var u=function(e){if(e=e||new Error("timeout exceeded"),clearTimeout(i),p){var t="undefined"==typeof window,n={isServer:t};p(e,n)}o(e)},i=f&&setTimeout(u,f),a=function(o){clearTimeout(i);var a=(0,r.resolveExport)(o,c,d,b,e,t,m);if(a)return n(a);u(new Error("export not found"))},s=k(e,{resolve:a,reject:u});s&&"function"==typeof s.then&&s.then(a).catch(u)});return(0,r.cacheProm)(u,b,e,v),u},addModule:function(e){if(r.isServer||r.isTest){if(b){var t=(0,r.callForString)(b,e);if(t&&o.add(t),!r.isTest)return t}if((0,r.isWebpack)()){var n=(0,r.callForString)(_,e);return n&&u.add(n),n}if(!(0,r.isWebpack)()){var i=(0,r.callForString)(g,e);return i&&u.add(i),i}}},shouldUpdate:function(n,o){var u=(0,r.callForString)(b,n),a=i(h,e,t,o),s=(0,r.callForString)(a.chunkName,o);return u!==s},asyncOnly:!g&&!_||"function"==typeof b}};var r=n(22),o=t.CHUNK_NAMES=new Set,u=t.MODULE_IDS=new Set;t.flushChunkNames=function(){var e=Array.from(o);return o.clear(),e},t.flushModuleIds=function(){var e=Array.from(u);return u.clear(),e},t.clearChunks=function(){o.clear(),u.clear()};var i=function(e,t,n,r){if(e)return"function"==typeof t?t(r):t;var o="function"==typeof t?t:function(){return t};return{file:"default",id:n.id||"default",chunkName:n.chunkName||"default",resolve:n.resolve||"",path:n.path||"",load:o}}},function(e,t,n){(function(e){e.exports=function(e,t){if(!1===t)return e;var n=e.load;return e.then=function(e){return n().then(function(t){return e&&e(t)})},e.catch=function(e){return n().catch(function(t){return e&&e(t)})},e};var t=!1;!function(){if(!t){var r,o=void 0!==n;try{(r=o?n(23):e.require("react-universal-component"))&&(r.setHasBabelPlugin(),t=!0)}catch(e){}}}()}).call(this,n(11)(e))},function(e,t,n){var r={};e.exports=function(e,t){var n=function(e){return"undefined"!=typeof window&&window.__CSS_CHUNKS__?window.__CSS_CHUNKS__[e]:null}(e);if(n){if(r[n])return r[n];var o=document.getElementsByTagName("head")[0],u=document.createElement("link");u.charset="utf-8",u.type="text/css",u.rel="stylesheet",u.timeout=3e4;var i=new Promise(function(t,r){var i,a,s=function(){a&&(u.href=n,a.onerror=null),u.onerror=null,clearTimeout(i),t()};u.onerror=function(){u.onerror=u.onload=null,clearTimeout(i),r(new Error("could not load css chunk: "+e))},function(){var e=navigator.userAgent.match(/\ AppleWebKit\/(\d+)\.(\d+)/);if(e){var t=+e[1],n=+e[2];return 535===t&&n>=24||t>535}return!0}()&&"onload"in u?(u.onload=s,u.href=n):((a=document.createElement("img")).onerror=s,a.src=n),i=setTimeout(u.onerror,u.timeout),o.appendChild(u)});return r[n]=i,i}}},function(e,t){e.exports=require("path")},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){e.exports=require("lodash")},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"body {\n  background-color: #020f17;\n}\n",""])},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"body {\n  background-color: #2c3227;\n}\n",""])},function(e,t,n){var r={"./link/theme.css":14,"./zelda/theme.css":13};function o(e){var t=u(e);if(!n.m[t]){var r=new Error("Module '"+e+"' ('"+t+"') is not available (weak dependency)");throw r.code="MODULE_NOT_FOUND",r}return n(t)}function u(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=u,o.id=15,e.exports=o},function(e,t,n){var r={"./link/theme.css":[14,0],"./zelda/theme.css":[13,0]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id=16,e.exports=o},function(e,t,n){var r={"./link/bio.md":29,"./zelda/bio.md":28};function o(e){var t=u(e);return n(t)}function u(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=u,e.exports=o,o.id=17},function(e,t,n){var r={"./link.jpg":31,"./zelda.png":30};function o(e){var t=u(e);return n(t)}function u(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=u,e.exports=o,o.id=18},function(e,t,n){var r={"./link/siteConfig.js":33,"./zelda/siteConfig.js":32};function o(e){var t=u(e);return n(t)}function u(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=u,e.exports=o,o.id=19},function(e,t){e.exports=require("prop-types")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(0)),u=i(n(20));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"getChildContext",value:function(){return{report:this.props.report}}},{key:"render",value:function(){return o.default.Children.only(this.props.children)}}]),t}();a.propTypes={report:u.default.func.isRequired},a.childContextTypes={report:u.default.func.isRequired},t.default=a},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.cacheProm=t.loadFromPromiseCache=t.cacheExport=t.loadFromCache=t.callForString=t.createElement=t.findExport=t.resolveExport=t.requireById=t.tryRequire=t.DefaultError=t.DefaultLoading=t.babelInterop=t.isWebpack=t.isServer=t.isTest=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e){return e&&e.__esModule?e:{default:e}}(n(0));t.isTest=!1;var u=t.isServer=!("undefined"!=typeof window&&window.document&&window.document.createElement),i=t.isWebpack=function(){return void 0!==n},a=t.babelInterop=function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&e.__esModule?e.default:e},s=(t.DefaultLoading=function(){return o.default.createElement("div",null,"Loading...")},t.DefaultError=function(e){var t=e.error;return o.default.createElement("div",null,"Error: ",t&&t.message)},t.tryRequire=function(e){try{return s(e)}catch(e){0}return null},t.requireById=function(t){return i()||"string"!=typeof t?n(t):e.require(t)}),c=(t.resolveExport=function(e,t,n,r,o,u,i){var a=arguments.length>7&&void 0!==arguments[7]&&arguments[7],s=c(e,t);n&&e&&n(e,{isServer:"undefined"==typeof window,isSync:a},o,u);return r&&s&&f(s,r,o,i),s},t.findExport=function(e,t){return"function"==typeof t?t(e):null===t?e:e&&"object"===(void 0===e?"undefined":r(e))&&t?e[t]:a(e)}),l=(t.createElement=function(e,t){return o.default.isValidElement(e)?o.default.cloneElement(e,t):o.default.createElement(e,t)},t.callForString=function(e,t){return"function"==typeof e?e(t):e}),f=(t.loadFromCache=function(e,t,n){return!u&&n[l(e,t)]},t.cacheExport=function(e,t,n,r){return r[l(t,n)]=e});t.loadFromPromiseCache=function(e,t,n){return n[l(e,t)]},t.cacheProm=function(e,t,n,r){return r[l(t,n)]=e}}).call(this,n(11)(e))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.setHasBabelPlugin=t.ReportChunks=t.MODULE_IDS=t.CHUNK_NAMES=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(7);Object.defineProperty(t,"CHUNK_NAMES",{enumerable:!0,get:function(){return u.CHUNK_NAMES}}),Object.defineProperty(t,"MODULE_IDS",{enumerable:!0,get:function(){return u.MODULE_IDS}});var i=n(21);Object.defineProperty(t,"ReportChunks",{enumerable:!0,get:function(){return d(i).default}});var a=d(n(0)),s=d(n(20)),c=d(n(42)),l=d(u),f=n(22);function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var h=!1,m=function(){return e.hot&&(e.hot.data||"apply"===e.hot.status())};t.setHasBabelPlugin=function(){h=!0};t.default=function(e){var t,n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=u.loading,d=void 0===i?f.DefaultLoading:i,v=u.error,y=void 0===v?f.DefaultError:v,b=u.minDelay,g=void 0===b?0:b,_=u.alwaysDelay,k=void 0!==_&&_,w=u.testBabelPlugin,E=void 0!==w&&w,j=u.loadingTransition,O=void 0===j||j,x=p(u,["loading","error","minDelay","alwaysDelay","testBabelPlugin","loadingTransition"]),C=h||E;return x.isDynamic=C,x.modCache={},x.promCache={},n=t=function(t){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));return r.update=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];r._mounted&&(e.error||(e.error=null),r.handleAfter(e,t,n,o))},r.state={error:null},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,a.default.Component),o(n,null,[{key:"preload",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=t||{};var o=(0,l.default)(e,x,t),u=o.requireAsync,i=o.requireSync,a=void 0;try{a=i(t,r)}catch(e){return Promise.reject(e)}return Promise.resolve().then(function(){return a||u(t,r)}).then(function(e){return(0,c.default)(n,e,{preload:!0}),e})}}]),o(n,[{key:"componentWillMount",value:function(){this._mounted=!0;var t=(0,l.default)(e,x,this.props),n=t.addModule,r=t.requireSync,o=t.requireAsync,u=t.asyncOnly,i=void 0;try{i=r(this.props,this.context)}catch(e){return this.update({error:e})}this._asyncOnly=u;var a=n(this.props);if(this.context.report&&this.context.report(a),i||f.isServer)return this.handleBefore(!0,!0,f.isServer),void this.update({Component:i},!0,!0,f.isServer);this.handleBefore(!0,!1),this.requireAsync(o,this.props,!0)}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"componentWillReceiveProps",value:function(t){var n=this;if(C||this._asyncOnly){var r=(0,l.default)(e,x,t,this.props),o=r.requireSync,u=r.requireAsync;if((0,r.shouldUpdate)(t,this.props)){var i=void 0;try{i=o(t,this.context)}catch(e){return this.update({error:e})}if(this.handleBefore(!1,!!i),!i)return this.requireAsync(u,t);var a={Component:i};if(k)return O&&this.update({Component:null}),void setTimeout(function(){return n.update(a,!1,!0)},g);this.update(a,!1,!0)}else if(m()){var s=o(t,this.context);this.setState({Component:function(){return null}}),setTimeout(function(){return n.setState({Component:s})})}}}},{key:"requireAsync",value:function(e,t,n){var r=this;this.state.Component&&O&&this.update({Component:null});var o=new Date;e(t,this.context).then(function(e){var t={Component:e},u=new Date-o;if(u<g)return setTimeout(function(){return r.update(t,n)},g-u);r.update(t,n)}).catch(function(e){return r.update({error:e})})}},{key:"handleBefore",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.props.onBefore&&(0,this.props.onBefore)({isMount:e,isSync:t,isServer:n})}},{key:"handleAfter",value:function(e,t,r,o){var u=e.Component,i=e.error;u&&!i?((0,c.default)(n,u,{preload:!0}),this.props.onAfter&&(0,this.props.onAfter)({isMount:t,isSync:r,isServer:o},u)):i&&this.props.onError&&this.props.onError(i),this.setState(e)}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.Component,o=this.props,u=o.isLoading,i=o.error,a=p(o,["isLoading","error"]);return u?(0,f.createElement)(d,a):i?(0,f.createElement)(y,r({},a,{error:i})):t?(0,f.createElement)(y,r({},a,{error:t})):n?(0,f.createElement)(n,a):(0,f.createElement)(d,a)}}]),n}(),t.contextTypes={store:s.default.object,report:s.default.func},n}}).call(this,n(11)(e))},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-router")},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"",""])},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".profile {\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  flex-flow: column;\n}\n\n.profile > img {\n  border-radius: 100%;\n  border: 5px;\n  width: 300px;\n  box-shadow: 0 0 20px black;\n}\n\nh1 {\n  font-size: 5em;\n  font-family: sans-serif;\n  color: white;\n  text-shadow: 0 0 20px black;\n  text-align: left;\n}\n",""])},function(e,t){e.exports={title:"About Zelda",author:"Zelda",__content:'<h1 id="how-did-you-get-past-the-guards-">How did you get past the guards?</h1>\n<p>Zelda wakes in a dark dungeon. Where is Link?</p>\n'}},function(e,t){e.exports={title:"About Link",author:"Link",__content:'<h1 id="long-ago-in-the-kingdom-of-hyrule">Long Ago in the Kingdom of Hyrule</h1>\n<p>Our Hero wakes up. He is alone. He must find his sword.</p>\n'}},function(e,t,n){e.exports=n.p+"images/zelda.png"},function(e,t,n){e.exports=n.p+"images/link.jpg"},function(e,t,n){"use strict";e.exports={aboutImage:"zelda.png"}},function(e,t,n){"use strict";e.exports={aboutImage:"link.jpg"}},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".profile {\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  flex-flow: column;\n}\n\n.profile > img {\n  border-radius: 100%;\n  border: 5px;\n  width: 300px;\n  box-shadow: 0 0 20px black;\n}\n\nh1 {\n  font-size: 5em;\n  font-family: sans-serif;\n  color: white;\n  text-shadow: 0 0 20px black;\n  text-align: left;\n}\n",""])},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createCssHash=t.stylesAsString=t.isCss=t.isJs=t.getJsFileRegex=void 0;var r=u(n(0)),o=u(n(35));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n,o){var u=n.publicPath.replace(/\/$/,""),f=i(e),d=e.filter(function(e){return a(f,e)}),p=t.filter(s),h=l(n),m={Js:function(){return r.default.createElement("span",null,d.map(function(e,t){return r.default.createElement("script",{type:"text/javascript",src:u+"/"+e,key:t,defer:!0})}))},Styles:function(){return r.default.createElement("span",null,p.map(function(e,t){return r.default.createElement("link",{rel:"stylesheet",href:u+"/"+e,key:t})}))},js:{toString:function(){return d.map(function(e){return"<script type='text/javascript' src='"+u+"/"+e+"' defer><\/script>"}).join("\n")}},styles:{toString:function(){return p.map(function(e){return"<link rel='stylesheet' href='"+u+"/"+e+"' />"}).join("\n")}},Css:function(){return r.default.createElement("span",null,r.default.createElement("style",null,c(p,o)))},css:{toString:function(){return"<style>"+c(p,o)+"</style>"}},scripts:d,stylesheets:p,publicPath:u,outputPath:o,cssHashRaw:h,CssHash:function(){return r.default.createElement("script",{type:"text/javascript",dangerouslySetInnerHTML:{__html:"window.__CSS_CHUNKS__ = "+JSON.stringify(h)}})},cssHash:{toString:function(){return"<script type='text/javascript'>window.__CSS_CHUNKS__= "+JSON.stringify(h)+"<\/script>"}}};return m};var i=t.getJsFileRegex=function(e){return!!e.find(function(e){return e.includes("no_css")})?/\.no_css\.js$/:/\.js$/},a=t.isJs=function(e,t){return e.test(t)&&!/\.hot-update\.js$/.test(t)},s=t.isCss=function(e){return/\.css$/.test(e)},c=t.stylesAsString=function(e,t){if(!t)throw new Error("No `outputPath` was provided as an option to `flushChunks`. \n      Please provide one so stylesheets can be read from the\n      file system since you're embedding the css as a string.");var n=t.replace(/\/$/,"");return e.map(function(e){var t=n+"/"+e;return o.default.readFileSync(t,"utf8")}).join("\n").replace(/\/\*# sourceMappingURL=.+\*\//g,"")},l=t.createCssHash=function(e){var t=e.assetsByChunkName,n=e.publicPath;return Object.keys(t).reduce(function(e,r){if(!t[r]||!t[r].find)return e;var o=t[r].find(function(e){return e.endsWith(".css")});return o&&(e[r]=""+n+o),e},{})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filesFromChunks=t.concatFilesAtKeys=t.normalizePath=t.isUnique=t.createFilesByModuleId=t.createFilesByPath=t.flushWebpack=t.flushBabel=t.flush=t.flushFilesPure=t.flushFiles=t.flushChunks=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(36));function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var u=null,i=null,a=void 0!==n,s={before:["bootstrap","vendor"],after:["main"]};t.default=function(e,t){return c(e,a,t)};var c=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=n.before||s.before,i=g(u,e.assetsByChunkName),a=n.chunkNames?g(n.chunkNames,e.assetsByChunkName,!0):f(n.moduleIds||[],e,n.rootDir,t),c=n.after||s.after,l=g(c,e.assetsByChunkName);return(0,r.default)([].concat(o(i),o(a),o(l)),[].concat(o(i),o(l.reverse()),o(a)),e,n.outputPath)},l=function(e,t,n){var r=n.chunkNames?g(n.chunkNames,e.assetsByChunkName):f(n.moduleIds||[],e,n.rootDir,t),o=n.filter;if(o){if("function"==typeof o)return r.filter(o);var u=o instanceof RegExp?o:new RegExp("."+o+"$");return r.filter(function(e){return u.test(e)})}return r},f=function(e,t,n,r){return r?p(e,t).filter(v):d(e,t,n).filter(v)},d=function(e,t,n){if(!n)throw new Error("No `rootDir` was provided as an option to `flushChunks`.\n      Please provide one so modules rendered server-side can be\n      paired to their webpack equivalents client-side, and their\n      corresponding chunks.");var r=n;return u=u||h(t),b(u,e.map(function(e){return y(e,r)}))},p=function(e,t){return i=i||m(t),b(i,e)},h=function(e){var t=e.chunks,n=e.modules,r=t.reduce(function(e,t){return e[t.id]=t.files,e},{});return n.reduce(function(e,t){var n=t.name,o=b(r,t.chunks);return e[n]=o.filter(v),e},{})},m=function(e){var t=h(e);return e.modules.reduce(function(e,n){var r=n.name;return e[n.id]=t[r],e},{})},v=function(e,t,n){return n.indexOf(e)===t},y=function(e,t){return e.replace(t,".").replace(/\.js$/,"")+".js"},b=function(e,t){return t.reduce(function(t,n){return t.concat(e[n]||[])},[])},g=function(e,t,n){var r;return(r=[]).concat.apply(r,o(e.filter(function(e){var r=!(!t[e]&&!t[e+"-"]);return!r&&n&&console.warn("[FLUSH CHUNKS]: Unable to find "+e+" in Webpack chunks. Please check usage of Babel plugin."),r}).map(function(e){return t[e]||t[e+"-"]})))};t.flushChunks=c,t.flushFiles=function(e,t){return l(e,a,t)},t.flushFilesPure=l,t.flush=f,t.flushBabel=d,t.flushWebpack=p,t.createFilesByPath=h,t.createFilesByModuleId=m,t.isUnique=v,t.normalizePath=y,t.concatFilesAtKeys=b,t.filesFromChunks=g},function(e,t,n){e.exports={flushModuleIds:n(7).flushModuleIds,flushChunkNames:n(7).flushChunkNames,clearChunks:n(7).clearChunks,ReportChunks:n(21).default}},function(e,t,n){var r={"./About":6,"./About.js":6,"./AppRoot":5,"./AppRoot.js":5,"./Article":4,"./Article.js":4,"./Gallery":3,"./Gallery.js":3,"./Routes":2,"./Routes.js":2};function o(e){var t=u(e);if(!n.m[t]){var r=new Error("Module '"+e+"' ('"+t+"') is not available (weak dependency)");throw r.code="MODULE_NOT_FOUND",r}return n(t)}function u(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=u,o.id=39,e.exports=o},function(e,t,n){var r={"./About":[6,0],"./About.js":[6,0],"./AppRoot":[5,0],"./AppRoot.js":[5,0],"./Article":[4,0],"./Article.js":[4,0],"./Gallery":[3,0],"./Gallery.js":[3,0],"./Routes":[2],"./Routes.js":[2]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=t[0];return n.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id=40,e.exports=o},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".nav {\n  width: 100%;\n  line-height: 2em;\n  background-color: black;\n}\n\n.nav a {\n  color: white;\n  text-decoration: none;\n  padding: 0 20px;\n}\n",""])},function(e,t){e.exports=require("hoist-non-react-statics")},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(0)),o=n(43),u=n(25),i=c(n(2)),a=n(38),s=c(n(37));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.clientStats;return function(e,n){var c=e.hostname.split(".")[0],l={site:c},f=(0,o.renderToString)(r.default.createElement(u.StaticRouter,{location:e.url,context:l},r.default.createElement(i.default,null))),d=(0,a.flushChunkNames)().concat(["css/"+c+"-theme-css"]),p=(0,s.default)(t,{chunkNames:d}),h=p.js,m=p.styles,v=p.cssHash;n.send("\n    <html>\n      <head>\n        "+m+'\n      </head>\n      <body>\n        <div id="react-root">'+f+"</div>\n        "+v+"\n        "+h+"\n      </body>\n    </html>\n  ")}}}]);