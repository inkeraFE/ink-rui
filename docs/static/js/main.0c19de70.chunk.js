(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(e,t,n){"use strict";n.r(t);var a=n(26),r=n(0),o=n.n(r),i=n(23),c=n.n(i),l=n(2),s=n(15),u=n.n(s),f=n(16),m=n.n(f);var d=function(e){var t=e.push,n=e.replace;return e.push=function(e){if(!u.a.isPlainObject(e))return t.apply(this,arguments);var n=Object.assign({},e);n.query&&(n.search=m.a.stringify(n.query)),t.apply(this,[n])},e.replace=function(e){if(!u.a.isPlainObject(e))return n.apply(this,arguments);var t=Object.assign({},e);t.query&&(t.search=m.a.stringify(t.query)),n.apply(this,[t])},e}(Object(l.b)());t.default=function(e){var t=e.info,n=e.index,i=Object(r.useState)(localStorage.showCtrl&&JSON.parse(localStorage.showCtrl)[n]),l=Object(a.a)(i,2),s=l[0],u=l[1];return o.a.createElement("div",{className:"item-wrapper"},o.a.createElement("div",{className:"title",onClick:function(e){var t=!s,a=e.currentTarget.children.item(1),r=JSON.parse(localStorage.showCtrl),o=0;u(t),t&&(o=180),a.style.transform="rotate3d(0, 0, 1, "+o+"deg)",r[n]=t,localStorage.showCtrl=JSON.stringify(r)}},o.a.createElement("div",{className:"text"},t.title),o.a.createElement("i",{className:c()("icon iconfont iconjiantouxia",{"icon-rotate":!0===s})})),s?o.a.createElement("ul",{className:"comp-list"},t.childs.map(function(e,t){return o.a.createElement("li",{className:"comp-item",key:t,onClick:function(){return d.push("/".concat(e.routeName))}},o.a.createElement("span",null,e.text),o.a.createElement("i",{className:"iconfont"},"\ue646"))})):null)}},21:function(e,t,n){},28:function(e,t,n){e.exports=n(52)},49:function(e,t,n){var a={"./flex":[12,9,0],"./flex/":[12,9,0],"./flex/index":[12,9,0],"./flex/index.tsx":[12,9,0],"./home":[7,9],"./home/":[7,9],"./home/header":[9,9],"./home/header.tsx":[9,9],"./home/index":[7,9],"./home/index.tsx":[7,9],"./home/itemBar":[10,9],"./home/itemBar.tsx":[10,9],"./home/style.less":[21,7]};function r(e){if(!n.o(a,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],r=t[0];return Promise.all(t.slice(2).map(n.e)).then(function(){return n.t(r,t[1])})}r.keys=function(){return Object.keys(a)},r.id=49,e.exports=r},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),i=n.n(o),c=n(24),l=n(6),s=n(27),u=n(7),f=["flex"];var m=function(){return r.a.createElement(c.a,null,r.a.createElement(l.c,null,f.map(function(e,t){return r.a.createElement(l.a,{key:t,exact:!0,path:"/".concat(e),component:Object(s.a)(function(){return n(49)("./".concat(e))})})}),r.a.createElement(l.a,{path:"/",component:u.default})))},d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(50),n(51);i.a.render(r.a.createElement(m,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");d?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):h(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):h(t,e)})}}()},7:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n(10),c=(n(21),[{title:"Common",childs:[{text:"Flex",routeName:"flex"}]}]);t.default=function(){return Object(a.useEffect)(function(){if(void 0===localStorage.showCtrl){var e="0".repeat(c.length).split("").map(function(e,t){return!!~~e});localStorage.showCtrl=JSON.stringify(e)}},[]),r.a.createElement("div",{className:"home-page"},r.a.createElement(o.default,null),r.a.createElement("div",{className:"clearfix home-wrapper"},r.a.createElement("div",{className:"content-wrapper"},c.map(function(e,t){return r.a.createElement(i.default,{key:t,info:e,index:t})}))))}},9:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);t.default=function(){return r.a.createElement("header",{className:"header clearfix"},r.a.createElement("h1",{className:"title"},"Ink Components"))}}},[[28,2,3]]]);
//# sourceMappingURL=main.0c19de70.chunk.js.map