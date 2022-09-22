"use strict";(self.webpackChunkfrost_web_doc=self.webpackChunkfrost_web_doc||[]).push([[2987],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),k=s(a),c=r,N=k["".concat(l,".").concat(c)]||k[c]||m[c]||o;return a?n.createElement(N,p(p({ref:t},d),{},{components:a})):n.createElement(N,p({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6607:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={},p=void 0,i={unversionedId:"api/decorators/FrostNode",id:"version-1.0.3/api/decorators/FrostNode",title:"FrostNode",description:"@frost/frost-web / Exports / FrostNode",source:"@site/versioned_docs/version-1.0.3/api/decorators/FrostNode.md",sourceDirName:"api/decorators",slug:"/api/decorators/FrostNode",permalink:"/frost-web-docs/1.0.3/api/decorators/FrostNode",draft:!1,tags:[],version:"1.0.3",frontMatter:{},sidebar:"apiSidebar",previous:{title:"FrostEntity",permalink:"/frost-web-docs/1.0.3/api/decorators/FrostEntity"},next:{title:"Relation",permalink:"/frost-web-docs/1.0.3/api/decorators/Relation"}},l={},s=[{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Type parameters",id:"type-parameters-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/frost-web-docs/1.0.3/api/modules"},"@frost/frost-web")," / ",(0,r.kt)("a",{parentName:"p",href:"/frost-web-docs/1.0.3/api/modules"},"Exports")," / FrostNode"),(0,r.kt)("h1",{id:"function-frostnode"},"Function: FrostNode"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"FrostNode"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"I"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"): <E",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"constructor"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),") => { ",(0,r.kt)("inlineCode",{parentName:"p"},"prototype"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"__class"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">","  } & ",(0,r.kt)("inlineCode",{parentName:"p"},"E")),(0,r.kt)("p",null,"This decorator allows you to declare an api class and provide the FrostObject Class to it\nThis decorator is used to mark classes that extend ",(0,r.kt)("a",{parentName:"p",href:"/frost-web-docs/1.0.3/api/classes/FrostApi"},"FrostApi<T extends FrostObject",">")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Decorator"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@FrostEntity({collectionPath : "/users"})\nclass User extends FrostObject {\n...\n}\n\n@FrostNode({entity : User})\nclass UsersApi extends FrostApi<User> {\n}\n')),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/frost-web-docs/1.0.3/api/classes/FrostObject"},(0,r.kt)("inlineCode",{parentName:"a"},"FrostObject")),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"id?"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),"  }, ",(0,r.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"I")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/frost-web-docs/1.0.3/api/types/IFrostObject"},(0,r.kt)("inlineCode",{parentName:"a"},"IFrostObject")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"T"),">")))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Api Options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"I")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the class that extends the FrostObject Class")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fn")),(0,r.kt)("p",null,"\u25b8 <",(0,r.kt)("inlineCode",{parentName:"p"},"E"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"constructor"),"): { ",(0,r.kt)("inlineCode",{parentName:"p"},"prototype"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"__class"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">","  } & ",(0,r.kt)("inlineCode",{parentName:"p"},"E")),(0,r.kt)("h5",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"E")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends (...",(0,r.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,r.kt)("a",{parentName:"td",href:"/frost-web-docs/1.0.3/api/classes/FrostApi"},(0,r.kt)("inlineCode",{parentName:"a"},"FrostApi")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"T"),">")))),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"constructor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"E"))))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"{ ",(0,r.kt)("inlineCode",{parentName:"p"},"prototype"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"__class"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">","  } & ",(0,r.kt)("inlineCode",{parentName:"p"},"E")))}m.isMDXComponent=!0}}]);