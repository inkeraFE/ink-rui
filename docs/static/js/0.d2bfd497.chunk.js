(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function f(e,t){return e(t={exports:{}},t.exports),t.exports}var c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var p=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var l in n=Object(arguments[i]))s.call(n,l)&&(o[l]=n[l]);if(c){r=c(n);for(var a=0;a<r.length;a++)u.call(n,r[a])&&(o[r[a]]=n[r[a]])}}return o},y="function"==typeof Symbol&&Symbol.for,d=y?Symbol.for("react.element"):60103,b=y?Symbol.for("react.portal"):60106,m=y?Symbol.for("react.fragment"):60107,x=y?Symbol.for("react.strict_mode"):60108,g=y?Symbol.for("react.profiler"):60114,w=y?Symbol.for("react.provider"):60109,h=y?Symbol.for("react.context"):60110,v=y?Symbol.for("react.concurrent_mode"):60111,k=y?Symbol.for("react.forward_ref"):60112,j=y?Symbol.for("react.suspense"):60113,S=y?Symbol.for("react.memo"):60115,C=y?Symbol.for("react.lazy"):60116,E="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,i,l,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,void 0,void 0,void 0,void 0,void 0],c=0;(e=Error(t.replace(/%s/g,function(){return f[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_={};function $(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||P}function M(){}function N(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||P}$.prototype.isReactComponent={},$.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&O("85"),this.updater.enqueueSetState(this,e,t,"setState")},$.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},M.prototype=$.prototype;var R=N.prototype=new M;R.constructor=N,p(R,$.prototype),R.isPureReactComponent=!0;var T={current:null},F={current:null},A=Object.prototype.hasOwnProperty,z={key:!0,ref:!0,__self:!0,__source:!0};function I(e,t,n){var r=void 0,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)A.call(t,r)&&!z.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var f=Array(a),c=0;c<a;c++)f[c]=arguments[c+2];o.children=f}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:d,type:e,key:i,ref:l,props:o,_owner:F.current}}function L(e){return"object"==typeof e&&null!==e&&e.$$typeof===d}var B=/\/+/g,U=[];function V(e,t,n,r){if(U.length){var o=U.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function q(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>U.length&&U.push(e)}function D(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case d:case b:l=!0}}if(l)return r(o,t,""===n?"."+W(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var a=0;a<t.length;a++){var f=n+W(i=t[a],a);l+=e(i,f,r,o)}else if("function"==typeof(f=null===t||"object"!=typeof t?null:"function"==typeof(f=E&&t[E]||t["@@iterator"])?f:null))for(t=f.call(t),a=0;!(i=t.next()).done;)l+=e(i=i.value,f=n+W(i,a++),r,o);else"object"===i&&O("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,n)}function W(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function H(e,t){e.func.call(e.context,t,e.count++)}function J(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?Y(e,r,n,function(e){return e}):null!=e&&(L(e)&&(e=function(e,t){return{$$typeof:d,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(B,"$&/")+"/")+n)),r.push(e))}function Y(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(B,"$&/")+"/"),D(e,J,t=V(t,i,r,o)),q(t)}function G(){var e=T.current;return null===e&&O("321"),e}var K={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return Y(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;D(e,H,t=V(null,null,t,n)),q(t)},count:function(e){return D(e,function(){return null},null)},toArray:function(e){var t=[];return Y(e,t,null,function(e){return e}),t},only:function(e){return L(e)||O("143"),e}},createRef:function(){return{current:null}},Component:$,PureComponent:N,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:h,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:w,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:k,render:e}},lazy:function(e){return{$$typeof:C,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:S,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return G().useCallback(e,t)},useContext:function(e,t){return G().useContext(e,t)},useEffect:function(e,t){return G().useEffect(e,t)},useImperativeHandle:function(e,t,n){return G().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return G().useLayoutEffect(e,t)},useMemo:function(e,t){return G().useMemo(e,t)},useReducer:function(e,t,n){return G().useReducer(e,t,n)},useRef:function(e){return G().useRef(e)},useState:function(e){return G().useState(e)},Fragment:m,StrictMode:x,Suspense:j,createElement:I,cloneElement:function(e,t,n){null==e&&O("267",e);var r=void 0,o=p({},e.props),i=e.key,l=e.ref,a=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,a=F.current),void 0!==t.key&&(i=""+t.key);var f=void 0;for(r in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)A.call(t,r)&&!z.hasOwnProperty(r)&&(o[r]=void 0===t[r]&&void 0!==f?f[r]:t[r])}if(1===(r=arguments.length-2))o.children=n;else if(1<r){f=Array(r);for(var c=0;c<r;c++)f[c]=arguments[c+2];o.children=f}return{$$typeof:d,type:e.type,key:i,ref:l,props:o,_owner:a}},createFactory:function(e){var t=I.bind(null,e);return t.type=e,t},isValidElement:L,version:"16.8.6",unstable_ConcurrentMode:v,unstable_Profiler:g,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:T,ReactCurrentOwner:F,assign:p}},Q={default:K},X=Q&&K||Q,Z=X.default||X,ee="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function te(e,t,n,r,o){}te.resetWarningCache=function(){};f(function(e){});var ne=f(function(e){e.exports=Z}),re=f(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,f=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,s=n?Symbol.for("react.async_mode"):60111,u=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116;function m(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case s:case u:case i:case a:case l:case y:return e;default:switch(e=e&&e.$$typeof){case c:case p:case f:return e;default:return t}}case b:case d:case o:return t}}}function x(e){return m(e)===u}t.typeOf=m,t.AsyncMode=s,t.ConcurrentMode=u,t.ContextConsumer=c,t.ContextProvider=f,t.Element=r,t.ForwardRef=p,t.Fragment=i,t.Lazy=b,t.Memo=d,t.Portal=o,t.Profiler=a,t.StrictMode=l,t.Suspense=y,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===a||e===l||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===d||e.$$typeof===f||e.$$typeof===c||e.$$typeof===p)},t.isAsyncMode=function(e){return x(e)||m(e)===s},t.isConcurrentMode=x,t.isContextConsumer=function(e){return m(e)===c},t.isContextProvider=function(e){return m(e)===f},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return m(e)===p},t.isFragment=function(e){return m(e)===i},t.isLazy=function(e){return m(e)===b},t.isMemo=function(e){return m(e)===d},t.isPortal=function(e){return m(e)===o},t.isProfiler=function(e){return m(e)===a},t.isStrictMode=function(e){return m(e)===l},t.isSuspense=function(e){return m(e)===y}});a(re),re.typeOf,re.AsyncMode,re.ConcurrentMode,re.ContextConsumer,re.ContextProvider,re.Element,re.ForwardRef,re.Fragment,re.Lazy,re.Memo,re.Portal,re.Profiler,re.StrictMode,re.Suspense,re.isValidElementType,re.isAsyncMode,re.isConcurrentMode,re.isContextConsumer,re.isContextProvider,re.isElement,re.isForwardRef,re.isFragment,re.isLazy,re.isMemo,re.isPortal,re.isProfiler,re.isStrictMode,re.isSuspense;var oe=f(function(e,t){});a(oe),oe.typeOf,oe.AsyncMode,oe.ConcurrentMode,oe.ContextConsumer,oe.ContextProvider,oe.Element,oe.ForwardRef,oe.Fragment,oe.Lazy,oe.Memo,oe.Portal,oe.Profiler,oe.StrictMode,oe.Suspense,oe.isValidElementType,oe.isAsyncMode,oe.isConcurrentMode,oe.isContextConsumer,oe.isContextProvider,oe.isElement,oe.isForwardRef,oe.isFragment,oe.isLazy,oe.isMemo,oe.isPortal,oe.isProfiler,oe.isStrictMode,oe.isSuspense;f(function(e){e.exports=re}),Function.call.bind(Object.prototype.hasOwnProperty);function ie(){}function le(){}le.resetWarningCache=ie;var ae=f(function(e){e.exports=function(){function e(e,t,n,r,o,i){if(i!==ee){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:le,resetWarningCache:ie};return n.PropTypes=n,n}()}),fe=f(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var l=n.apply(null,o);l&&e.push(l)}else if("object"===i)for(var a in o)t.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()});function ce(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}ce(".flex-flex{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flex-auto{-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}.flex-none{-webkit-box-flex:0;-webkit-flex:none;-ms-flex:none;flex:none}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box}.flex.flex-wrap{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.flex.flex-nowrap{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.flex.flex-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.flex.flex-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.flex.flex-justify-start{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.flex.flex-justify-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.flex.flex-justify-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.flex.flex-justify-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.flex.flex-justify-around{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.flex.flex-align-start{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.flex.flex-align-end{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.flex.flex-align-center{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.flex.flex-align-baseline{-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline}.flex.flex-align-stretch{-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}");var se=function(e){var t=e.flex,n=e.auto,r=e.none,o=e.width,a=e.height,f=e.row,c=e.column,s=e.wrap,u=e.nowrap,p=e.justifyStart,y=e.justifyEnd,d=e.justifyCenter,b=e.justifyBetween,m=e.justifyAround,x=e.alignStart,g=e.alignEnd,w=e.alignCenter,h=e.alignBaseline,v=e.alignStretch,k=e.className,j=e.style,S=e.children,C=l(e,["flex","auto","none","width","height","row","column","wrap","nowrap","justifyStart","justifyEnd","justifyCenter","justifyBetween","justifyAround","alignStart","alignEnd","alignCenter","alignBaseline","alignStretch","className","style","children"]),E=fe({flex:!0,"flex-flex":t,"flex-auto":n,"flex-none":r||o||a,"flex-row":f,"flex-column":c,"flex-wrap":s,"flex-nowrap":u,"flex-justify-start":p,"flex-justify-end":y,"flex-justify-center":d,"flex-justify-between":b,"flex-justify-around":m,"flex-align-start":x,"flex-align-end":g,"flex-align-center":w,"flex-align-baseline":h,"flex-align-stretch":v},k),O=Object.assign({},j);return t&&(O.flex="boolean"==typeof t?1:t,O.WebkitFlex="boolean"==typeof t?1:t),a&&(O.height=a),o&&(O.width=o),ne.createElement("div",i({},C,{className:E,style:O}),S)};se.displayName="Flex",se.propTypes={children:ae.node,className:ae.string,style:ae.object,flex:ae.oneOfType([ae.number,ae.bool]),auto:ae.bool,none:ae.bool,width:ae.string,height:ae.string,row:ae.bool,column:ae.bool,wrap:ae.bool,nowrap:ae.bool,justifyStart:ae.bool,justifyEnd:ae.bool,justifyCenter:ae.bool,justifyBetween:ae.bool,justifyAround:ae.bool,alignStart:ae.bool,alignEnd:ae.bool,alignCenter:ae.bool,alignBaseline:ae.bool,alignStretch:ae.bool},ce(".page{width:100vw;height:100vh;background:#fafbfc;overflow:hidden}.page.page-white{background:#fff}.page .page-content{position:relative;overflow-x:hidden;overflow-y:auto}.page .page-tabbar{height:55px}");var ue=function(e){var t=e.className,n=e.pageClassName,r=e.white,o=e.header,a=e.tabbar,f=e.bottom,c=e.children,s=l(e,["className","pageClassName","white","header","tabbar","bottom","children"]);return ne.createElement(se,i({},s,{column:!0,className:fe({page:!0,"page-white":r},t)}),o&&ne.createElement(se,{column:!0,none:!0},o),ne.createElement(se,{flex:!0,column:!0,className:fe("page-content block",n)},c),f,a&&ne.createElement(se,{column:!0,none:!0,className:"page-tabbar"},a))};ue.displayName="Page",ue.propTypes={children:ae.node,className:ae.string,pageClassName:ae.string,white:ae.bool,header:ae.node,tabbar:ae.node,bottom:ae.node},ce(".ink-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 15px;height:50px;background:#fff}");var pe=function(e){var t=e.left,n=e.center,r=e.right,o=e.className;return ne.createElement("header",{className:fe("ink-header",o)},t||ne.createElement("div",null),n||ne.createElement("div",null),r||ne.createElement("div",null))};pe.propTypes={left:ae.element,center:ae.element,right:ae.element,className:ae.string};n(53);var ye=function(e){var t=e.title,n=e.history;return o.a.createElement(pe,{className:"topbar-wrapper",left:o.a.createElement("i",{className:"icon iconfont",onClick:function(){return n.go(-1)}},"\ue645"),center:o.a.createElement("span",{className:"title"},t)})};t.default=function(e){var t=e.history;return o.a.createElement(ue,{header:o.a.createElement(ye,{title:"Flex",history:t})},o.a.createElement(se,{style:{padding:"10px 0"}},o.a.createElement(se,{flex:1,style:{background:"#b9b9c3",height:"20px"}}),o.a.createElement(se,{flex:2,style:{background:"#a09898",height:"20px"}}),o.a.createElement(se,{flex:1,style:{background:"grey",height:"20px"}})),o.a.createElement(se,{column:!0,style:{height:"80px",margin:"10px 0"}},o.a.createElement(se,{flex:1,style:{background:"#b9b9c3"}}),o.a.createElement(se,{flex:2,style:{background:"#a09898"}}),o.a.createElement(se,{flex:1,style:{background:"#grey"}})),o.a.createElement(se,{justifyCenter:!0,alignCenter:!0,style:{background:"#b9b9c3",height:"120px"}},"justifyCenter alignCenter"))}},53:function(e,t,n){}}]);
//# sourceMappingURL=0.d2bfd497.chunk.js.map