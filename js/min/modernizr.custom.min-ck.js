window.Modernizr=function(e,t,n){function r(e){m.cssText=e}function o(e,t){return r(prefixes.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function c(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return r===!1?e[o]:a(i,"function")?i.bind(r||t):i}return!1}var l="2.7.1",u={},s=!0,f=t.documentElement,d="modernizr",p=t.createElement(d),m=p.style,h,y={}.toString,g={},v={},E={},b=[],j=b.slice,S,C={}.hasOwnProperty,w;w=a(C,"undefined")||a(C.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return C.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(j.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(j.call(arguments)))};return r});for(var x in g)w(g,x)&&(S=x.toLowerCase(),u[S]=g[x](),b.push((u[S]?"":"no-")+S));return u.addTest=function(e,t){if("object"==typeof e)for(var r in e)w(e,r)&&u.addTest(r,e[r]);else{if(e=e.toLowerCase(),u[e]!==n)return u;t="function"==typeof t?t():t,"undefined"!=typeof s&&s&&(f.className+=" "+(t?"":"no-")+e),u[e]=t}return u},r(""),p=h=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=y[e[m]];return t||(t={},h++,e[m]=h,y[h]=t),t}function a(e,n,r){if(n||(n=t),g)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():d.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||f.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),g)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),l=c.length;l>i;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function l(e){e||(e=t);var r=o(e);return v.shivCSS&&!p&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||c(e,r),e}var u="3.7.0",s=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p,m="_html5shiv",h=0,y={},g;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",p="hidden"in e,g=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){p=!0,g=!0}}();var v={elements:s.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:u,shivCSS:s.shivCSS!==!1,supportsUnknownElements:g,shivMethods:s.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:i};e.html5=v,l(t)}(this,t),u._version=l,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(s?" js "+b.join(" "):""),u}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==m.call(e)}function o(e){return"string"==typeof e}function a(){}function i(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=h.shift();y=1,e?e.t?d(function(){("c"==e.t?N.injectCss:N.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function l(e,n,r,o,a,l,u){function s(t){if(!m&&i(f.readyState)&&(b.r=m=1,!y&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&d(function(){E.removeChild(f)},50);for(var r in w[n])w[n].hasOwnProperty(r)&&w[n][r].onload()}}var u=u||N.errorTimeout,f=t.createElement(e),m=0,g=0,b={t:r,s:n,e:a,a:l,x:u};1===w[n]&&(g=1,w[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){s.call(this,g)},h.splice(o,0,b),"img"!=e&&(g||2===w[n]?(E.insertBefore(f,v?null:p),d(s,u)):w[n].push(f))}function u(e,t,n,r,a){return y=0,t=t||"j",o(e)?l("c"==t?j:b,e,t,this.i++,n,r,a):(h.splice(this.i++,0,e),1==h.length&&c()),this}function s(){var e=N;return e.loader={load:u,i:0},e}var f=t.documentElement,d=e.setTimeout,p=t.getElementsByTagName("script")[0],m={}.toString,h=[],y=0,g="MozAppearance"in f.style,v=g&&!!t.createRange().compareNode,E=v?f:p.parentNode,f=e.opera&&"[object Opera]"==m.call(e.opera),f=!!t.attachEvent&&!f,b=g?"object":f?"script":"img",j=f?"script":b,S=Array.isArray||function(e){return"[object Array]"==m.call(e)},C=[],w={},x={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},F,N;N=function(e){function t(e){var e=e.split("!"),t=C.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},o,a,i;for(a=0;r>a;a++)i=e[a].split("="),(o=x[i.shift()])&&(n=o(n,i));for(a=0;t>a;a++)n=C[a](n);return n}function i(e,o,a,i,c){var l=t(e),u=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=r(o)?o:o[e]||o[i]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,a,i,c):(w[l.url]?l.noexec=!0:w[l.url]=1,a.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(o)||r(u))&&a.load(function(){s(),o&&o(l.origUrl,c,i),u&&u(l.origUrl,c,i),w[l.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(u=function(){var e=[].slice.call(arguments);s.apply(this,e),f()}),i(e,u,t,0,c);else if(Object(e)===e)for(p in d=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--d&&(r(u)?u=function(){var e=[].slice.call(arguments);s.apply(this,e),f()}:u[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),f()}}(s[p])),i(e[p],u,t,p,c))}else!n&&f()}var c=!!e.test,l=e.load||e.both,u=e.callback||a,s=u,f=e.complete||a,d,p;n(c?e.yep:e.nope,!!l),l&&n(l)}var l,u,f=this.yepnope.loader;if(o(e))i(e,0,f,0);else if(S(e))for(l=0;l<e.length;l++)u=e[l],o(u)?i(u,0,f,0):S(u)?N(u):Object(u)===u&&c(u,f);else Object(e)===e&&c(e,f)},N.addPrefix=function(e,t){x[e]=t},N.addFilter=function(e){C.push(e)},N.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",F=function(){t.removeEventListener("DOMContentLoaded",F,0),t.readyState="complete"},0)),e.yepnope=s(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,u){var s=t.createElement("script"),f,m,o=o||N.errorTimeout;s.src=e;for(m in r)s.setAttribute(m,r[m]);n=u?c:n||a,s.onreadystatechange=s.onload=function(){!f&&i(s.readyState)&&(f=1,n(),s.onload=s.onreadystatechange=null)},d(function(){f||(f=1,n(1))},o),l?s.onload():p.parentNode.insertBefore(s,p)},e.yepnope.injectCss=function(e,n,r,o,i,l){var o=t.createElement("link"),u,n=l?c:n||a;o.href=e,o.rel="stylesheet",o.type="text/css";for(u in r)o.setAttribute(u,r[u]);i||(p.parentNode.insertBefore(o,p),d(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};