"use strict";(self.webpackChunkfrost_web_doc=self.webpackChunkfrost_web_doc||[]).push([[4309],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,k=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,p={unversionedId:"api/decorators/FrostEntity",id:"version-1.0.3/api/decorators/FrostEntity",title:"FrostEntity",description:"@frost/frost-web / Exports / FrostEntity",source:"@site/versioned_docs/version-1.0.3/api/decorators/FrostEntity.md",sourceDirName:"api/decorators",slug:"/api/decorators/FrostEntity",permalink:"/frost-web-docs/1.0.3/api/decorators/FrostEntity",draft:!1,tags:[],version:"1.0.3",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Exclude",permalink:"/frost-web-docs/1.0.3/api/decorators/Exclude"},next:{title:"FrostNode",permalink:"/frost-web-docs/1.0.3/api/decorators/FrostNode"}},l={},s=[{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Type parameters",id:"type-parameters",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5}],d={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/frost-web-docs/1.0.3/api/modules"},"@frost/frost-web")," / ",(0,a.kt)("a",{parentName:"p",href:"/frost-web-docs/1.0.3/api/modules"},"Exports")," / FrostEntity"),(0,a.kt)("h1",{id:"function-frostentity"},"Function: FrostEntity"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"FrostEntity"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"options"),"): <T",">","(",(0,a.kt)("inlineCode",{parentName:"p"},"constructor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"This decorator allows you to declare a class as a node in FirebaseDB and provide the path for it "),(0,a.kt)("p",null,"This decorator is used to mark classes that extend ",(0,a.kt)("a",{parentName:"p",href:"/frost-web-docs/1.0.3/api/classes/FrostObject"},"FrostObject")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Decorator"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'@FrostEntity({collectionPath : "/users"})\nclass User extends FrostObject {\n}\n')),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"options")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/frost-web-docs/1.0.3/api/types/FrostEntityDecoratorOptions"},(0,a.kt)("inlineCode",{parentName:"a"},"FrostEntityDecoratorOptions"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Entity Options")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fn")),(0,a.kt)("p",null,"\u25b8 <",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,a.kt)("inlineCode",{parentName:"p"},"constructor"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h5",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",{parentName:"tr",align:"left"},"extends (...",(0,a.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,a.kt)("a",{parentName:"td",href:"/frost-web-docs/1.0.3/api/classes/FrostObject"},(0,a.kt)("inlineCode",{parentName:"a"},"FrostObject")),"<{ ",(0,a.kt)("inlineCode",{parentName:"td"},"id?"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),"  }",">")))),(0,a.kt)("h5",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"constructor")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T"))))),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")))}c.isMDXComponent=!0}}]);