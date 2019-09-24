!function(e,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("jquery")):e.jQueryBridget=i(e,e.jQuery)}(window,function(t,e){"use strict";var i=Array.prototype.slice,n=t.console,u=void 0===n?function(){}:function(t){n.error(t)};function o(h,o,c){(c=c||e||t.jQuery)&&(o.prototype.option||(o.prototype.option=function(t){c.isPlainObject(t)&&(this.options=c.extend(!0,this.options,t))}),c.fn[h]=function(t){return"string"==typeof t?function(t,r,s){var l,a="$()."+h+'("'+r+'")';return t.each(function(t,e){var i=c.data(e,h);if(i){var n=i[r];if(n&&"_"!=r.charAt(0)){var o=n.apply(i,s);l=void 0===l?o:l}else u(a+" is not a valid method")}else u(h+" not initialized. Cannot call methods, i.e. "+a)}),void 0!==l?l:t}(this,t,i.call(arguments,1)):(function(t,n){t.each(function(t,e){var i=c.data(e,h);i?(i.option(n),i._init()):(i=new o(e,n),c.data(e,h,i))})}(this,t),this)},r(c))}function r(t){!t||t&&t.bridget||(t.bridget=o)}return r(e||t.jQuery),o}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o];n&&n[r]&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var i=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(t,e){return t[i](e)}}),function(e,i){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("desandro-matches-selector")):e.fizzyUIUtils=i(e,e.matchesSelector)}(window,function(h,r){var c={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},e=Array.prototype.slice;c.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?e.call(t):[t]},c.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},c.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,r(t,e))return t},c.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.filterFindElements=function(t,n){t=c.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(n){r(t,n)&&o.push(t);for(var e=t.querySelectorAll(n),i=0;i<e.length;i++)o.push(e[i])}else o.push(t)}),o},c.debounceMethod=function(t,e,n){n=n||100;var o=t.prototype[e],r=e+"Timeout";t.prototype[e]=function(){var t=this[r];clearTimeout(t);var e=arguments,i=this;this[r]=setTimeout(function(){o.apply(i,e),delete i[r]},n)}},c.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},c.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var u=h.console;return c.htmlInit=function(l,a){c.docReady(function(){var t=c.toDashed(a),o="data-"+t,e=document.querySelectorAll("["+o+"]"),i=document.querySelectorAll(".js-"+t),n=c.makeArray(e).concat(c.makeArray(i)),r=o+"-options",s=h.jQuery;n.forEach(function(e){var t,i=e.getAttribute(o)||e.getAttribute(r);try{t=i&&JSON.parse(i)}catch(t){return void(u&&u.error("Error parsing "+o+" on "+e.className+": "+t))}var n=new l(e,t);s&&s.data(e,a,n)})})},c}),function(i,n){"function"==typeof define&&define.amd?define("infinite-scroll/js/core",["ev-emitter/ev-emitter","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("ev-emitter"),require("fizzy-ui-utils")):i.InfiniteScroll=n(i,i.EvEmitter,i.fizzyUIUtils)}(window,function(e,t,o){var s=e.jQuery,r={};function l(t,e){var i=o.getQueryElement(t);if(i){if((t=i).infiniteScrollGUID){var n=r[t.infiniteScrollGUID];return n.option(e),n}this.element=t,this.options=o.extend({},l.defaults),this.option(e),s&&(this.$element=s(this.element)),this.create()}else console.error("Bad element for InfiniteScroll: "+(i||t))}l.defaults={},l.create={},l.destroy={};var i=l.prototype;o.extend(i,t.prototype);var n=0;i.create=function(){var t=this.guid=++n;if(this.element.infiniteScrollGUID=t,(r[t]=this).pageIndex=1,this.loadCount=0,this.updateGetPath(),this.getPath&&this.getPath())for(var e in this.updateGetAbsolutePath(),this.log("initialized",[this.element.className]),this.callOnInit(),l.create)l.create[e].call(this);else console.error("Disabling InfiniteScroll")},i.option=function(t){o.extend(this.options,t)},i.callOnInit=function(){var t=this.options.onInit;t&&t.call(this,this)},i.dispatchEvent=function(t,e,i){this.log(t,i);var n=e?[e].concat(i):i;if(this.emitEvent(t,n),s&&this.$element){var o=t+=".infiniteScroll";if(e){var r=s.Event(e);r.type=t,o=r}this.$element.trigger(o,i)}};var a={initialized:function(t){return"on "+t},request:function(t){return"URL: "+t},load:function(t,e){return(t.title||"")+". URL: "+e},error:function(t,e){return t+". URL: "+e},append:function(t,e,i){return i.length+" items. URL: "+e},last:function(t,e){return"URL: "+e},history:function(t,e){return"URL: "+e},pageIndex:function(t,e){return"current page determined to be: "+t+" from "+e}};i.log=function(t,e){if(this.options.debug){var i="[InfiniteScroll] "+t,n=a[t];n&&(i+=". "+n.apply(this,e)),console.log(i)}},i.updateMeasurements=function(){this.windowHeight=e.innerHeight;var t=this.element.getBoundingClientRect();this.top=t.top+e.pageYOffset},i.updateScroller=function(){var t=this.options.elementScroll;if(t){if(this.scroller=!0===t?this.element:o.getQueryElement(t),!this.scroller)throw"Unable to find elementScroll: "+t}else this.scroller=e},i.updateGetPath=function(){var t=this.options.path;if(t){var e=typeof t;if("function"!=e)"string"==e&&t.match("{{#}}")?this.updateGetPathTemplate(t):this.updateGetPathSelector(t);else this.getPath=t}else console.error("InfiniteScroll path option required. Set as: "+t)},i.updateGetPathTemplate=function(e){this.getPath=function(){var t=this.pageIndex+1;return e.replace("{{#}}",t)}.bind(this);var t=e.replace(/(\\\?|\?)/,"\\?").replace("{{#}}","(\\d\\d?\\d?)"),i=new RegExp(t),n=location.href.match(i);n&&(this.pageIndex=parseInt(n[1],10),this.log("pageIndex",[this.pageIndex,"template string"]))};var h=[/^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/,/^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/,/(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/];return i.updateGetPathSelector=function(t){var e=document.querySelector(t);if(e){for(var i,n,o=e.getAttribute("href"),r=0;o&&r<h.length;r++){n=h[r];var s=o.match(n);if(s){i=s.slice(1);break}}i?(this.isPathSelector=!0,this.getPath=function(){var t=this.pageIndex+1;return i[0]+t+i[2]}.bind(this),this.pageIndex=parseInt(i[1],10)-1,this.log("pageIndex",[this.pageIndex,"next link"])):console.error("InfiniteScroll unable to parse next link href: "+o)}else console.error("Bad InfiniteScroll path option. Next link not found: "+t)},i.updateGetAbsolutePath=function(){var t=this.getPath();if(t.match(/^http/)||t.match(/^\//))this.getAbsolutePath=this.getPath;else{var e=location.pathname;if(t.match(/^\?/))this.getAbsolutePath=function(){return e+this.getPath()};else{var i=e.substring(0,e.lastIndexOf("/"));this.getAbsolutePath=function(){return i+"/"+this.getPath()}}}},l.create.hideNav=function(){var t=o.getQueryElement(this.options.hideNav);t&&(t.style.display="none",this.nav=t)},l.destroy.hideNav=function(){this.nav&&(this.nav.style.display="")},i.destroy=function(){for(var t in this.allOff(),l.destroy)l.destroy[t].call(this);delete this.element.infiniteScrollGUID,delete r[this.guid],s&&this.$element&&s.removeData(this.element,"infiniteScroll")},l.throttle=function(n,o){var r,s;return o=o||200,function(){var t=+new Date,e=arguments,i=function(){r=t,n.apply(this,e)}.bind(this);r&&t<r+o?(clearTimeout(s),s=setTimeout(i,o)):i()}},l.data=function(t){var e=(t=o.getQueryElement(t))&&t.infiniteScrollGUID;return e&&r[e]},l.setJQuery=function(t){s=t},o.htmlInit(l,"infinite-scroll"),i._init=function(){},s&&s.bridget&&s.bridget("infiniteScroll",l),l}),function(e,i){"function"==typeof define&&define.amd?define("infinite-scroll/js/page-load",["./core"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("./core")):i(e,e.InfiniteScroll)}(window,function(n,o){var t=o.prototype;function s(t){for(var e=document.createDocumentFragment(),i=0;t&&i<t.length;i++)e.appendChild(t[i]);return e}function r(t,e){for(var i=t.attributes,n=0;n<i.length;n++){var o=i[n];e.setAttribute(o.name,o.value)}}return o.defaults.loadOnScroll=!0,o.defaults.checkLastPage=!0,o.defaults.responseType="document",o.create.pageLoad=function(){this.canLoad=!0,this.on("scrollThreshold",this.onScrollThresholdLoad),this.on("load",this.checkLastPage),this.options.outlayer&&this.on("append",this.onAppendOutlayer)},t.onScrollThresholdLoad=function(){this.options.loadOnScroll&&this.loadNextPage()},t.loadNextPage=function(){if(!this.isLoading&&this.canLoad){var e=this.getAbsolutePath();this.isLoading=!0;var t=function(t){this.onPageLoad(t,e)}.bind(this),i=function(t){this.onPageError(t,e)}.bind(this),n=function(t){this.lastPageReached(t,e)}.bind(this);!function(e,t,i,n,o){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType=t||"",r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.onload=function(){if(200==r.status)i(r.response);else if(204==r.status)o(r.response);else{var t=new Error(r.statusText);n(t)}},r.onerror=function(){var t=new Error("Network error requesting "+e);n(t)},r.send()}(e,this.options.responseType,t,i,n),this.dispatchEvent("request",null,[e])}},t.onPageLoad=function(t,e){return this.options.append||(this.isLoading=!1),this.pageIndex++,this.loadCount++,this.dispatchEvent("load",null,[t,e]),this.appendNextPage(t,e),t},t.appendNextPage=function(t,e){var i=this.options.append;if("document"==this.options.responseType&&i){var n=t.querySelectorAll(i),o=s(n),r=function(){this.appendItems(n,o),this.isLoading=!1,this.dispatchEvent("append",null,[t,e,n])}.bind(this);this.options.outlayer?this.appendOutlayerItems(o,r):r()}},t.appendItems=function(t,e){t&&t.length&&(function(t){for(var e=t.querySelectorAll("script"),i=0;i<e.length;i++){var n=e[i],o=document.createElement("script");r(n,o),o.innerHTML=n.innerHTML,n.parentNode.replaceChild(o,n)}}(e=e||s(t)),this.element.appendChild(e))},t.appendOutlayerItems=function(t,e){var i=o.imagesLoaded||n.imagesLoaded;if(!i)return console.error("[InfiniteScroll] imagesLoaded required for outlayer option"),void(this.isLoading=!1);i(t,e)},t.onAppendOutlayer=function(t,e,i){this.options.outlayer.appended(i)},t.checkLastPage=function(t,e){var i=this.options.checkLastPage;if(i){var n,o=this.options.path;if("function"==typeof o)if(!this.getPath())return void this.lastPageReached(t,e);if("string"==typeof i?n=i:this.isPathSelector&&(n=o),n&&t.querySelector)t.querySelector(n)||this.lastPageReached(t,e)}},t.lastPageReached=function(t,e){this.canLoad=!1,this.dispatchEvent("last",null,[t,e])},t.onPageError=function(t,e){return this.isLoading=!1,this.canLoad=!1,this.dispatchEvent("error",null,[t,e]),t},o.create.prefill=function(){if(this.options.prefill){var t=this.options.append;t?(this.updateMeasurements(),this.updateScroller(),this.isPrefilling=!0,this.on("append",this.prefill),this.once("error",this.stopPrefill),this.once("last",this.stopPrefill),this.prefill()):console.error("append option required for prefill. Set as :"+t)}},t.prefill=function(){var t=this.getPrefillDistance();this.isPrefilling=0<=t,this.isPrefilling?(this.log("prefill"),this.loadNextPage()):this.stopPrefill()},t.getPrefillDistance=function(){return this.options.elementScroll?this.scroller.clientHeight-this.scroller.scrollHeight:this.windowHeight-this.element.clientHeight},t.stopPrefill=function(){this.log("stopPrefill"),this.off("append",this.prefill)},o}),function(i,n){"function"==typeof define&&define.amd?define("infinite-scroll/js/scroll-watch",["./core","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./core"),require("fizzy-ui-utils")):n(i,i.InfiniteScroll,i.fizzyUIUtils)}(window,function(i,t,e){var n=t.prototype;return t.defaults.scrollThreshold=400,t.create.scrollWatch=function(){this.pageScrollHandler=this.onPageScroll.bind(this),this.resizeHandler=this.onResize.bind(this);var t=this.options.scrollThreshold;!t&&0!==t||this.enableScrollWatch()},t.destroy.scrollWatch=function(){this.disableScrollWatch()},n.enableScrollWatch=function(){this.isScrollWatching||(this.isScrollWatching=!0,this.updateMeasurements(),this.updateScroller(),this.on("last",this.disableScrollWatch),this.bindScrollWatchEvents(!0))},n.disableScrollWatch=function(){this.isScrollWatching&&(this.bindScrollWatchEvents(!1),delete this.isScrollWatching)},n.bindScrollWatchEvents=function(t){var e=t?"addEventListener":"removeEventListener";this.scroller[e]("scroll",this.pageScrollHandler),i[e]("resize",this.resizeHandler)},n.onPageScroll=t.throttle(function(){this.getBottomDistance()<=this.options.scrollThreshold&&this.dispatchEvent("scrollThreshold");for(var t,e,i=this.getScrollViewY(),n=0;n<this.scrollPages.length;n++){var o=this.scrollPages[n];if(o.top>=i)break;t=n,e=o}t!=this.scrollPageIndex&&(this.scrollPageIndex=t,this.setHistory(e.title,e.path))}),n.getBottomDistance=function(){return this.options.elementScroll?this.getElementBottomDistance():this.getWindowBottomDistance()},n.getWindowBottomDistance=function(){return this.top+this.element.clientHeight-(i.pageYOffset+this.windowHeight)},n.getElementBottomDistance=function(){return this.scroller.scrollHeight-(this.scroller.scrollTop+this.scroller.clientHeight)},n.onResize=function(){this.updateMeasurements()},e.debounceMethod(t,"onResize",150),t}),function(i,n){"function"==typeof define&&define.amd?define("infinite-scroll/js/history",["./core","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./core"),require("fizzy-ui-utils")):n(i,i.InfiniteScroll,i.fizzyUIUtils)}(window,function(n,t,e){var i=t.prototype;t.defaults.history="replace";var r=document.createElement("a");return t.create.history=function(){this.options.history&&(r.href=this.getAbsolutePath(),(r.origin||r.protocol+"//"+r.host)==location.origin?this.options.append?this.createHistoryAppend():this.createHistoryPageLoad():console.error("[InfiniteScroll] cannot set history with different origin: "+r.origin+" on "+location.origin+" . History behavior disabled."))},i.createHistoryAppend=function(){this.updateMeasurements(),this.updateScroller(),this.scrollPages=[{top:0,path:location.href,title:document.title}],this.scrollPageIndex=0,this.scrollHistoryHandler=this.onScrollHistory.bind(this),this.unloadHandler=this.onUnload.bind(this),this.on("append",this.onAppendHistory)},i.bindHistoryAppendEvents=function(t){var e=t?"addEventListener":"removeEventListener";this.scroller[e]("scroll",this.scrollHistoryHandler),n[e]("unload",this.unloadHandler)},i.createHistoryPageLoad=function(){this.on("load",this.onPageLoadHistory)},t.destroy.history=i.destroyHistory=function(){this.options.history&&this.options.append&&this.bindHistoryAppendEvents(!1)},i.onAppendHistory=function(t,e,i){if(i&&i.length){var n=i[0],o=this.getElementScrollY(n);r.href=e,this.scrollPages.push({top:o,path:r.href,title:t.title})}},i.getElementScrollY=function(t){return this.options.elementScroll?this.getElementElementScrollY(t):this.getElementWindowScrollY(t)},i.getElementWindowScrollY=function(t){return t.getBoundingClientRect().top+n.pageYOffset},i.getElementElementScrollY=function(t){return t.offsetTop-this.top},i.onScrollHistory=function(){for(var t,e,i=this.getScrollViewY(),n=0;n<this.scrollPages.length;n++){var o=this.scrollPages[n];if(o.top>=i)break;t=n,e=o}t!=this.scrollPageIndex&&(this.scrollPageIndex=t,this.setHistory(e.title,e.path))},e.debounceMethod(t,"onScrollHistory",150),i.getScrollViewY=function(){return this.options.elementScroll?this.scroller.scrollTop+this.scroller.clientHeight/2:n.pageYOffset+this.windowHeight/2},i.setHistory=function(t,e){var i=this.options.history;if(i&&history[i+"State"]){var n=e;e&&-1<e.indexOf("?")&&(n=e.split("?")[0]),history[i+"State"](null,t,n),this.options.historyTitle&&(document.title=t),this.dispatchEvent("history",null,[t,n])}},i.onUnload=function(){var t=this.scrollPageIndex;if(0!==t){var e=this.scrollPages[t],i=n.pageYOffset-e.top+this.top;this.destroyHistory(),scrollTo(0,i)}},i.onPageLoadHistory=function(t,e){this.setHistory(t.title,e)},t}),function(i,n){"function"==typeof define&&define.amd?define("infinite-scroll/js/button",["./core","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./core"),require("fizzy-ui-utils")):n(i,i.InfiniteScroll,i.fizzyUIUtils)}(window,function(t,e,i){function n(t,e){this.element=t,this.infScroll=e,this.clickHandler=this.onClick.bind(this),this.element.addEventListener("click",this.clickHandler),e.on("request",this.disable.bind(this)),e.on("load",this.enable.bind(this)),e.on("error",this.hide.bind(this)),e.on("last",this.hide.bind(this))}return e.create.button=function(){var t=i.getQueryElement(this.options.button);t&&(this.button=new n(t,this))},e.destroy.button=function(){this.button&&this.button.destroy()},n.prototype.onClick=function(t){t.preventDefault(),this.infScroll.loadNextPage()},n.prototype.enable=function(){this.element.removeAttribute("disabled")},n.prototype.disable=function(){this.element.disabled="disabled"},n.prototype.hide=function(){this.element.style.display="none"},n.prototype.destroy=function(){this.element.removeEventListener("click",this.clickHandler)},e.Button=n,e}),function(i,n){"function"==typeof define&&define.amd?define("infinite-scroll/js/status",["./core","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./core"),require("fizzy-ui-utils")):n(i,i.InfiniteScroll,i.fizzyUIUtils)}(window,function(t,e,i){var n=e.prototype;function o(t){s(t,"none")}function r(t){s(t,"block")}function s(t,e){t&&(t.style.display=e)}return e.create.status=function(){var t=i.getQueryElement(this.options.status);t&&(this.statusElement=t,this.statusEventElements={request:t.querySelector(".infinite-scroll-request"),error:t.querySelector(".infinite-scroll-error"),last:t.querySelector(".infinite-scroll-last")},this.on("request",this.showRequestStatus),this.on("error",this.showErrorStatus),this.on("last",this.showLastStatus),this.bindHideStatus("on"))},n.bindHideStatus=function(t){var e=this.options.append?"append":"load";this[t](e,this.hideAllStatus)},n.showRequestStatus=function(){this.showStatus("request")},n.showErrorStatus=function(){this.showStatus("error")},n.showLastStatus=function(){this.showStatus("last"),this.bindHideStatus("off")},n.showStatus=function(t){r(this.statusElement),this.hideStatusEventElements(),r(this.statusEventElements[t])},n.hideAllStatus=function(){o(this.statusElement),this.hideStatusEventElements()},n.hideStatusEventElements=function(){for(var t in this.statusEventElements){o(this.statusEventElements[t])}},e}),function(t,e){"function"==typeof define&&define.amd?define(["infinite-scroll/js/core","infinite-scroll/js/page-load","infinite-scroll/js/scroll-watch","infinite-scroll/js/history","infinite-scroll/js/button","infinite-scroll/js/status"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./core"),require("./page-load"),require("./scroll-watch"),require("./history"),require("./button"),require("./status")))}(window,function(t){return t}),function(e,i){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.imagesLoaded=i(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){var o=e.jQuery,r=e.console;function s(t,e){for(var i in e)t[i]=e[i];return t}var l=Array.prototype.slice;function a(t,e,i){if(!(this instanceof a))return new a(t,e,i);var n=t;"string"==typeof t&&(n=document.querySelectorAll(t)),n?(this.elements=function(t){return Array.isArray(t)?t:"object"==typeof t&&"number"==typeof t.length?l.call(t):[t]}(n),this.options=s({},this.options),"function"==typeof e?i=e:s(this.options,e),i&&this.on("always",i),this.getImages(),o&&(this.jqDeferred=new o.Deferred),setTimeout(this.check.bind(this))):r.error("Bad element for imagesLoaded "+(n||t))}(a.prototype=Object.create(t.prototype)).options={},a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},a.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&h[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var h={1:!0,9:!0,11:!0};function i(t){this.img=t}function n(t,e){this.url=t,this.element=e,this.img=new Image}return a.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},a.prototype.addImage=function(t){var e=new i(t);this.images.push(e)},a.prototype.addBackground=function(t,e){var i=new n(t,e);this.images.push(i)},a.prototype.check=function(){var n=this;function e(t,e,i){setTimeout(function(){n.progress(t,e,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},a.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&r&&r.log("progress: "+i,t,e)},a.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},(i.prototype=Object.create(t.prototype)).check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},i.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(n.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},a.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((o=t).fn.imagesLoaded=function(t,e){return new a(this,t,e).jqDeferred.promise(o(this))})},a.makeJQueryPlugin(),a});