(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2yjy":function(e,t,r){},"8o2o":function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,"a",function(){return n})},BvKN:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,m=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,_=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118,g=n?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case d:case c:case i:case s:case p:return e;default:switch(e=e&&e.$$typeof){case l:case m:case b:case h:case u:return e;default:return t}}case a:return t}}}function w(e){return S(e)===d}t.typeOf=S,t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=l,t.ContextProvider=u,t.Element=o,t.ForwardRef=m,t.Fragment=c,t.Lazy=b,t.Memo=h,t.Portal=a,t.Profiler=i,t.StrictMode=s,t.Suspense=p,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===d||e===i||e===s||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===h||e.$$typeof===u||e.$$typeof===l||e.$$typeof===m||e.$$typeof===_||e.$$typeof===v||e.$$typeof===g)},t.isAsyncMode=function(e){return w(e)||S(e)===f},t.isConcurrentMode=w,t.isContextConsumer=function(e){return S(e)===l},t.isContextProvider=function(e){return S(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return S(e)===m},t.isFragment=function(e){return S(e)===c},t.isLazy=function(e){return S(e)===b},t.isMemo=function(e){return S(e)===h},t.isPortal=function(e){return S(e)===a},t.isProfiler=function(e){return S(e)===i},t.isStrictMode=function(e){return S(e)===s},t.isSuspense=function(e){return S(e)===p}},J4bc:function(e,t,r){"use strict";r.r(t),r.d(t,"query",function(){return H});var n=r("q1tI"),o=r.n(n),a=r("Zttt"),c=r("Wbzz"),s=(r("2yjy"),r("8o2o")),i=r("k1TG"),u=r("uRdJ"),l=r("9Hrx"),f=r("uTUB"),d=r("xHvr"),m=r.n(d);function p(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var y=o.a.createContext();var h={initialChunks:{}},b="PENDING",_="RESOLVED",v="REJECTED";var g=function(e){var t=function(t){return o.a.createElement(y.Consumer,null,function(r){return o.a.createElement(e,Object.assign({__chunkExtractor:r},t))})};return e.displayName&&(t.displayName=e.displayName+"WithChunkExtractor"),t},S=function(e){return e};function w(e){var t=e.defaultResolveComponent,r=void 0===t?S:t,n=e.render,a=e.onLoad;function c(e,t){void 0===t&&(t={});var c=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),d={};function y(e){return t.cacheKey?t.cacheKey(e):c.resolve?c.resolve(e):"static"}function S(e,n,o){var a=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!Object(f.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return m()(o,a,{preload:!0}),a}var w=function(e){function r(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:y(r)},p(!r.__chunkExtractor||c.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?!1===t.ssr?Object(u.a)(n):(c.requireAsync(r).catch(function(){return null}),n.loadSync(),r.__chunkExtractor.addChunk(c.chunkName(r)),Object(u.a)(n)):(!1!==t.ssr&&(c.isReady&&c.isReady(r)||c.chunkName&&h.initialChunks[c.chunkName(r)])&&n.loadSync(),n)}Object(l.a)(r,e),r.getDerivedStateFromProps=function(e,t){var r=y(e);return Object(i.a)({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var o=r.prototype;return o.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===v&&this.setCache(),this.state.loading&&this.loadAsync()},o.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},o.componentWillUnmount=function(){this.mounted=!1},o.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},o.getCacheKey=function(){return y(this.props)},o.getCache=function(){return d[this.getCacheKey()]},o.setCache=function(e){void 0===e&&(e=void 0),d[this.getCacheKey()]=e},o.triggerOnLoad=function(){var e=this;a&&setTimeout(function(){a(e.state.result,e.props)})},o.loadSync=function(){if(this.state.loading)try{var e=S(c.requireSync(this.props),this.props,k);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:c.resolve(this.props),chunkName:c.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},o.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then(function(t){var r=S(t,e.props,{Loadable:k});e.safeSetState({result:r,loading:!1},function(){return e.triggerOnLoad()})}).catch(function(t){return e.safeSetState({error:t,loading:!1})}),t},o.resolveAsync=function(){var e=this,t=this.props,r=(t.__chunkExtractor,t.forwardedRef,Object(s.a)(t,["__chunkExtractor","forwardedRef"])),n=this.getCache();return n||((n=c.requireAsync(r)).status=b,this.setCache(n),n.then(function(){n.status=_},function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:c.resolve(e.props),chunkName:c.chunkName(e.props),error:t?t.message:t}),n.status=v})),n},o.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,a=(e.__chunkExtractor,Object(s.a)(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,u=c.error,l=c.loading,f=c.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===b)throw this.loadAsync();if(u)throw u;var d=o||t.fallback||null;return l?d:n({fallback:d,result:f,options:t,props:Object(i.a)({},a,{ref:r})})},r}(o.a.Component),E=g(w),k=o.a.forwardRef(function(e,t){return o.a.createElement(E,Object.assign({forwardedRef:t},e))});return k.displayName="Loadable",k.preload=function(e){c.requireAsync(e)},k.load=function(e){return c.requireAsync(e)},k}return{loadable:c,lazy:function(e,t){return c(e,Object(i.a)({},t,{suspense:!0}))}}}var E=w({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return o.a.createElement(t,r)}}),k=E.loadable,C=E.lazy,$=w({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),N=$.loadable,O=$.lazy;var x=k;x.lib=N,C.lib=O;var j=x,P=r("7Qib"),M=r("d+ly"),R=r.n(M),T=r("gGy4"),A=function(){var e=Object(T.b)().author;return o.a.createElement("div",{className:R.a.author},o.a.createElement("p",{className:R.a.author__bio},e.bio,o.a.createElement("a",{className:R.a["author__bio-twitter"],href:Object(P.a)("linkedin",e.contacts.twitter),rel:"noopener noreferrer",target:"_blank"},o.a.createElement("strong",null,e.name)," on Linkedin")))},L=r("Mvws"),F=r.n(L),D=function(e){var t=e.body,r=e.title;return o.a.createElement("div",{className:F.a.content},o.a.createElement("h1",{className:F.a.content__title},r),o.a.createElement("div",{className:F.a.content__body,dangerouslySetInnerHTML:{__html:t}}))},K=r("wd/R"),z=r.n(K),q=r("myfg"),W=r.n(q),B=function(e){var t=e.date;return o.a.createElement("div",{className:W.a.meta},o.a.createElement("p",{className:W.a.meta__date},"Published ",z()(t).format("D MMM YYYY")))},I=r("WXWR"),Y=r.n(I),J=function(e){var t=e.tags,r=e.tagSlugs;return o.a.createElement("div",{className:Y.a.tags},o.a.createElement("ul",{className:Y.a.tags__list},r&&r.map(function(e,r){return o.a.createElement("li",{className:Y.a["tags__list-item"],key:t[r]},o.a.createElement(c.Link,{to:e,className:Y.a["tags__list-item-link"]},t[r]))})))},U=r("gt/k"),V=r.n(U),X=j(function(){return r.e(20).then(r.t.bind(null,"Davl",7))}),G=function(e){var t=e.post,r=t.html,a=t.fields,s=a.tagSlugs,i=a.slug,u=t.frontmatter,l=u.tags,f=u.title,d=u.date;return Object(n.useEffect)(function(){window.FB&&window.FB.XFBML.parse()},[]),o.a.createElement("div",{className:V.a.post},o.a.createElement(c.Link,{className:V.a["post__home-button"],to:"/"},"All Articles"),o.a.createElement("div",{className:V.a.post__content},o.a.createElement(D,{body:r,title:f})),o.a.createElement("div",{className:V.a.post__footer},o.a.createElement(B,{date:d}),l&&s&&o.a.createElement(J,{tags:l,tagSlugs:s}),o.a.createElement(X,{options:{clientID:"7753907d39cb8e4fd447",clientSecret:"62c36d79af779c3d5dd72b0de513d9b8b0bd17ce",repo:"https://github.com/mtosity/mtosity.github.io",admin:["mtosity"],owner:"mtosity",id:i,distractionFreeMode:!1}}),o.a.createElement(A,null)))},H="73744609";t.default=function(e){var t=e.data,r=Object(T.b)(),n=r.title,c=r.subtitle,s=t.markdownRemark.frontmatter,i=s.title,u=s.description,l=s.socialImage,f=null!==u?u:c;return o.a.createElement(a.a,{title:i+" - "+n,description:f,socialImage:l},o.a.createElement(G,{post:t.markdownRemark}))}},Mvws:function(e,t,r){e.exports={content:"Content-module--content--3p512",content__title:"Content-module--content__title--2BDW9",content__body:"Content-module--content__body--2TrQ-"}},WXWR:function(e,t,r){e.exports={tags:"Tags-module--tags--1L_ct",tags__list:"Tags-module--tags__list--91FqN","tags__list-item":"Tags-module--tags__list-item--1M30P","tags__list-item-link":"Tags-module--tags__list-item-link--3SL_8"}},"d+ly":function(e,t,r){e.exports={author:"Author-module--author--2Yefr","author__bio-twitter":"Author-module--author__bio-twitter--n-O9n"}},"gt/k":function(e,t,r){e.exports={post__footer:"Post-module--post__footer--3WzWU",post__comments:"Post-module--post__comments--25y6I","post__home-button":"Post-module--post__home-button--16Kl0"}},k1TG:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",function(){return n})},myfg:function(e,t,r){e.exports={meta__date:"Meta-module--meta__date--29eD7"}},t3eg:function(e,t,r){"use strict";e.exports=r("uYXQ")},uRdJ:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",function(){return n})},uTUB:function(e,t,r){"use strict";e.exports=r("BvKN")},uYXQ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,m=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116;function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case d:case c:case i:case s:case p:return e;default:switch(e=e&&e.$$typeof){case l:case m:case u:return e;default:return t}}case h:case y:case a:return t}}}function _(e){return b(e)===d}t.typeOf=b,t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=l,t.ContextProvider=u,t.Element=o,t.ForwardRef=m,t.Fragment=c,t.Lazy=h,t.Memo=y,t.Portal=a,t.Profiler=i,t.StrictMode=s,t.Suspense=p,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===d||e===i||e===s||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===y||e.$$typeof===u||e.$$typeof===l||e.$$typeof===m)},t.isAsyncMode=function(e){return _(e)||b(e)===f},t.isConcurrentMode=_,t.isContextConsumer=function(e){return b(e)===l},t.isContextProvider=function(e){return b(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return b(e)===m},t.isFragment=function(e){return b(e)===c},t.isLazy=function(e){return b(e)===h},t.isMemo=function(e){return b(e)===y},t.isPortal=function(e){return b(e)===a},t.isProfiler=function(e){return b(e)===i},t.isStrictMode=function(e){return b(e)===s},t.isSuspense=function(e){return b(e)===p}},xHvr:function(e,t,r){"use strict";var n=r("t3eg"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function i(e){return n.isMemo(e)?c:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=c;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var o=m(r);o&&o!==p&&e(t,o,n)}var c=l(r);f&&(c=c.concat(f(r)));for(var s=i(t),y=i(r),h=0;h<c.length;++h){var b=c[h];if(!(a[b]||n&&n[b]||y&&y[b]||s&&s[b])){var _=d(r,b);try{u(t,b,_)}catch(v){}}}}return t}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-45a9ccfbc4e230f8ac95.js.map