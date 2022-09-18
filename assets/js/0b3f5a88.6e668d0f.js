"use strict";(self.webpackChunkfrost_web_doc=self.webpackChunkfrost_web_doc||[]).push([[6114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,b=p["".concat(c,".").concat(f)]||p[f]||u[f]||s;return n?r.createElement(b,a(a({ref:t},d),{},{components:n})):r.createElement(b,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const s={"sidebar-position":4,description:"A helper function that return the Json string for the databse rules",title:"Database Indices"},a="Database Indices (.indexOn)",o={unversionedId:"docs/guides/databse-indices",id:"version-2.0.0/docs/guides/databse-indices",title:"Database Indices",description:"A helper function that return the Json string for the databse rules",source:"@site/versioned_docs/version-2.0.0/docs/guides/databse-indices.mdx",sourceDirName:"docs/guides",slug:"/docs/guides/databse-indices",permalink:"/frost-web-docs/docs/guides/databse-indices",draft:!1,tags:[],version:"2.0.0",frontMatter:{"sidebar-position":4,description:"A helper function that return the Json string for the databse rules",title:"Database Indices"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/frost-web-docs/docs/guides/installation"},next:{title:"Define Frost Schema",permalink:"/frost-web-docs/docs/guides/define-schema"}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"database-indices-indexon"},"Database Indices (.indexOn)"),(0,i.kt)("p",null,"One to Many Relations require Indices to be placed in Firebase DB rules.\nInstead of writing the indecies yourself, We have created a helper function that returns the JSON string that should be added to the Firebase DB rules"),(0,i.kt)("p",null,"After You initiallize the Frost App call the ",(0,i.kt)("a",{parentName:"p",href:"../../api/classes/Frost#getindices"},"getIndices")," static function From the ",(0,i.kt)("a",{parentName:"p",href:"../../api/classes/Frost"},"Frost")," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const firebaseConfig = {\n  ...\n};\n\nexport const FrostApp = Frost.initialize(firebaseConfig,{\n...\n})\n\n//highlight-start\nconst indices = Frost.getIndices()\n//do anything you want with the string\nconsole.log(indices)\n//highlight-end\n")))}u.isMDXComponent=!0}}]);