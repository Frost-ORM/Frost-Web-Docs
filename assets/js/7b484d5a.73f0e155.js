"use strict";(self.webpackChunkfrost_web_doc=self.webpackChunkfrost_web_doc||[]).push([[9489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},s=void 0,i={unversionedId:"api/functions/slashToDotJoin",id:"version-2.0.0/api/functions/slashToDotJoin",title:"slashToDotJoin",description:"@frost-orm/frost-web-client / Exports / slashToDotJoin",source:"@site/versioned_docs/version-2.0.0/api/functions/slashToDotJoin.md",sourceDirName:"api/functions",slug:"/api/functions/slashToDotJoin",permalink:"/frost-web-docs/api/functions/slashToDotJoin",draft:!1,tags:[],version:"2.0.0",frontMatter:{},sidebar:"apiSidebar",previous:{title:"observable",permalink:"/frost-web-docs/api/functions/observable"},next:{title:"Enums",permalink:"/frost-web-docs/category/enums"}},l={},p=[{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/frost-web-docs/api/modules"},"@frost-orm/frost-web-client")," / ",(0,o.kt)("a",{parentName:"p",href:"/frost-web-docs/api/modules"},"Exports")," / slashToDotJoin"),(0,o.kt)("h1",{id:"function-slashtodotjoin"},"Function: slashToDotJoin"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"slashToDotJoin"),"(...",(0,o.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Just like ",(0,o.kt)("a",{parentName:"p",href:"/frost-web-docs/api/functions/join"},"join")," but with dots instead of slashes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'join("/users","/customers.user1")\n// returns "users.customers.user1"\n')),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"...args")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"multiple strings with or without surrounding slashes or dots")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"a path string consisting of all the components with a single dot between each one."))}u.isMDXComponent=!0}}]);