"use strict";(self.webpackChunkfrost_web_doc=self.webpackChunkfrost_web_doc||[]).push([[3596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,p={unversionedId:"api/decorators/Relation",id:"version-1.0.3/api/decorators/Relation",title:"Relation",description:"@frost/frost-web / Exports / Relation",source:"@site/versioned_docs/version-1.0.3/api/decorators/Relation.md",sourceDirName:"api/decorators",slug:"/api/decorators/Relation",permalink:"/frost-web-docs/1.0.3/api/decorators/Relation",draft:!1,tags:[],version:"1.0.3",frontMatter:{},sidebar:"apiSidebar",previous:{title:"FrostNode",permalink:"/frost-web-docs/1.0.3/api/decorators/FrostNode"},next:{title:"Serialize",permalink:"/frost-web-docs/1.0.3/api/decorators/Serialize"}},s={},l=[{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/frost-web-docs/1.0.3/api/modules"},"@frost/frost-web")," / ",(0,a.kt)("a",{parentName:"p",href:"/frost-web-docs/1.0.3/api/modules"},"Exports")," / Relation"),(0,a.kt)("h1",{id:"function-relation"},"Function: Relation"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"Relation"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"PropertyDecorator")),(0,a.kt)("p",null,"This decorator allows you to define the relations between the properties of ",(0,a.kt)("a",{parentName:"p",href:"/frost-web-docs/1.0.3/api/decorators/FrostEntity"},"FrostEntities")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Decorator"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The Relation is defined on both sides but one side is the main side and the other is secondary."),(0,a.kt)("p",{parentName:"admonition"},"In case of symmetric relation the order of the sides doesn't matter but with ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"One-to-Many"))," the main side should be the ",(0,a.kt)("inlineCode",{parentName:"p"},"One")," side.\nThe main side should have the master property equal true.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'@FrostEntity({collectionPath:"/a"})\nclass A extends FrostObject{\n...\n@Relation({\n name: "AB",\n relation: RelationTypes.ONE_TO_MANY,\n type: () => B,\n})\nb?:B[]\n\n...\n}\n\n@FrostEntity({collectionPath:"/b"})\nclass B extends FrostObject{\n...\n@Relation({\n name: "AB",\n type: () => A,\n})\na?:() => A\n\n...\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"See"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/frost-web-docs/1.0.3/api/types/RelationOptions"},"RelationOptions")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"options")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/frost-web-docs/1.0.3/api/types/RelationOptions"},(0,a.kt)("inlineCode",{parentName:"a"},"RelationOptions"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"options that define the relation. for more details.")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PropertyDecorator")))}d.isMDXComponent=!0}}]);