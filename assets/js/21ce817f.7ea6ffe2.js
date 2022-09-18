"use strict";(self.webpackChunkfrost_web_doc=self.webpackChunkfrost_web_doc||[]).push([[4459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},l=void 0,i={unversionedId:"api/functions/observable",id:"version-2.0.0/api/functions/observable",title:"observable",description:"@frost-orm/frost-web-client / Exports / observable",source:"@site/versioned_docs/version-2.0.0/api/functions/observable.md",sourceDirName:"api/functions",slug:"/api/functions/observable",permalink:"/frost-web-docs/api/functions/observable",draft:!1,tags:[],version:"2.0.0",frontMatter:{},sidebar:"apiSidebar",previous:{title:"join",permalink:"/frost-web-docs/api/functions/join"},next:{title:"slashToDotJoin",permalink:"/frost-web-docs/api/functions/slashToDotJoin"}},p={},s=[{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/frost-web-docs/api/modules"},"@frost-orm/frost-web-client")," / ",(0,a.kt)("a",{parentName:"p",href:"/frost-web-docs/api/modules"},"Exports")," / observable"),(0,a.kt)("h1",{id:"function-observable"},"Function: observable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"observable"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Observable"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"DataSnapshot"),">"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("p",null,"In case of exact node"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let value = observable(\n                   child(\n                       ref(this.db),\n                       `/users/${userId}`,\n                   ),\n               ).pipe(map(value => value.val()))\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("p",null,"In case of a query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let value = observable(\n                   query(\n                       ref(this.db, 'users'),\n                       orderByChild('type'),\n                       equalTo('student'),\n                   )\n               ).pipe(map(value => value.val()))\n")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"query")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Query")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(Firebase Type) a query object that will be passed to the ",(0,a.kt)("inlineCode",{parentName:"td"},"onValue")," FirebaseDB Function (this gould be returned from child/query functions )")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"options?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ListenOptions")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(Firebase Type) an object for the listening options on the ",(0,a.kt)("inlineCode",{parentName:"td"},"onValue")," FirebaseDB Function")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Observable"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"DataSnapshot"),">"),(0,a.kt)("p",null,"an RX observable for the provided query"))}c.isMDXComponent=!0}}]);