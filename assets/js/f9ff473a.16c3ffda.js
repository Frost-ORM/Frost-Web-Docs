"use strict";(self.webpackChunkfrost_web_doc=self.webpackChunkfrost_web_doc||[]).push([[7512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,y=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,s={unversionedId:"api/types/ListenToNestedChanges",id:"version-2.0.0/api/types/ListenToNestedChanges",title:"ListenToNestedChanges",description:"@frost-orm/frost-web-client / Exports / ListenToNestedChanges",source:"@site/versioned_docs/version-2.0.0/api/types/ListenToNestedChanges.md",sourceDirName:"api/types",slug:"/api/types/ListenToNestedChanges",permalink:"/frost-web-docs/api/types/ListenToNestedChanges",draft:!1,tags:[],version:"2.0.0",frontMatter:{},sidebar:"apiSidebar",previous:{title:"IncludeOptions",permalink:"/frost-web-docs/api/types/IncludeOptions"},next:{title:"ManyToManyMetadata",permalink:"/frost-web-docs/api/types/ManyToManyMetadata"}},p={},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/frost-web-docs/api/modules"},"@frost-orm/frost-web-client")," / ",(0,o.kt)("a",{parentName:"p",href:"/frost-web-docs/api/modules"},"Exports")," / ListenToNestedChanges"),(0,o.kt)("h1",{id:"type-alias-listentonestedchanges"},"Type alias: ListenToNestedChanges"),(0,o.kt)("p",null,"\u01ac ",(0,o.kt)("strong",{parentName:"p"},"ListenToNestedChanges"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,o.kt)("a",{parentName:"p",href:"/frost-web-docs/api/enums/RelationTypes"},(0,o.kt)("inlineCode",{parentName:"a"},"RelationTypes")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,o.kt)("p",null,"This helps you determine which relation you want to listen to changes from.\nif the value is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"true then it will listen to all the changes"),(0,o.kt)("li",{parentName:"ul"},"false then it won't listen to any of the changes"),(0,o.kt)("li",{parentName:"ul"},"key-value pairs with the key being ",(0,o.kt)("a",{parentName:"li",href:"/frost-web-docs/api/enums/RelationTypes"},"RelationTypes")," and value being a boolean to determine whether or not to listen to specified type of relations.")))}u.isMDXComponent=!0}}]);