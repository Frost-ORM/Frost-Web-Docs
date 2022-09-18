"use strict";(self.webpackChunkfrost_web_doc=self.webpackChunkfrost_web_doc||[]).push([[7748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,p={unversionedId:"api/types/DisconnectOptions",id:"version-2.0.0/api/types/DisconnectOptions",title:"DisconnectOptions",description:"@frost-orm/frost-web-client / Exports / DisconnectOptions",source:"@site/versioned_docs/version-2.0.0/api/types/DisconnectOptions.md",sourceDirName:"api/types",slug:"/api/types/DisconnectOptions",permalink:"/frost-web-docs/api/types/DisconnectOptions",draft:!1,tags:[],version:"2.0.0",frontMatter:{},sidebar:"apiSidebar",previous:{title:"ConnectOptions",permalink:"/frost-web-docs/api/types/ConnectOptions"},next:{title:"FetchReturnType",permalink:"/frost-web-docs/api/types/FetchReturnType"}},l={},s=[{value:"Type parameters",id:"type-parameters",level:4}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/frost-web-docs/api/modules"},"@frost-orm/frost-web-client")," / ",(0,r.kt)("a",{parentName:"p",href:"/frost-web-docs/api/modules"},"Exports")," / DisconnectOptions"),(0,r.kt)("h1",{id:"type-alias-disconnectoptionst"},"Type alias: DisconnectOptions<T",">"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"DisconnectOptions"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"[",(0,r.kt)("inlineCode",{parentName:"p"},'"one_to_one"'),"]",", ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"[",(0,r.kt)("inlineCode",{parentName:"p"},'"one_to_many_master_fields"'),"]",", ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"[",(0,r.kt)("inlineCode",{parentName:"p"},'"one_to_many_slave_fields"'),"]",", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[] ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"all"'),">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"[",(0,r.kt)("inlineCode",{parentName:"p"},'"many_to_many"'),"]",", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[] ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"all"'),">",">"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"all"')),(0,r.kt)("p",null,"The related instances to disconnect"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Either the string ",(0,r.kt)("inlineCode",{parentName:"li"},"all")," which will disconnect all relations or"),(0,r.kt)("li",{parentName:"ul"},"undefined which won't disconnect any relations or"),(0,r.kt)("li",{parentName:"ul"},"a map with the keys of the properties to disconnect and the possible values are one of the following:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"all"),"|true, works with all relation types. will disconnect everything"),(0,r.kt)("li",{parentName:"ul"},"Incase of One to One: the string of the id of the connected instance"),(0,r.kt)("li",{parentName:"ul"},"Incase of Many to Many: an array of the ids of the connected instances"),(0,r.kt)("li",{parentName:"ul"},"Incase of Many to Many:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"From the One side:  an array of the ids of the connected instances"),(0,r.kt)("li",{parentName:"ul"},"From the Many side: the string of the id of the connected instance")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"All Relations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"all"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"All specific relations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "posts": "all",\n    "comments": "all",\n}\n//OR \n{\n    "posts": true,\n "comments": true,\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"Disconnect specific nodes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "posts": [\n        "-N8ZU2tQNvC_1GV5kMa8",\n        "-N8ZU2w3diHdn0b5AIsB",\n        "-N8ZU30J_KfcwcRlUcPK",\n        "-N8ZU33c0V8yIB-7oDV3",\n],\n "comments": [\n        "-N8ZU24sYM2NoXV1NdA2",\n        "-N8ZU2oH4rRaaWaA2M8Y",\n],\n}\n')),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"RelationTypeWithSubTypes"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",">")))))}m.isMDXComponent=!0}}]);