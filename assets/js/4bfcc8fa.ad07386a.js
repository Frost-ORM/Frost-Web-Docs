"use strict";(self.webpackChunkfrost_web_doc=self.webpackChunkfrost_web_doc||[]).push([[9349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},i="Delete",s={unversionedId:"docs/operations/delete",id:"version-1.0.3/docs/operations/delete",title:"Delete",description:"Node Removal",source:"@site/versioned_docs/version-1.0.3/docs/operations/delete.md",sourceDirName:"docs/operations",slug:"/docs/operations/delete",permalink:"/frost-web-docs/1.0.3/docs/operations/delete",draft:!1,tags:[],version:"1.0.3",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Update",permalink:"/frost-web-docs/1.0.3/docs/operations/update"},next:{title:"Multiple Location Write",permalink:"/frost-web-docs/1.0.3/docs/operations/multiple-location-write"}},l={},p=[{value:"Node Removal",id:"node-removal",level:2},{value:"Disconnect",id:"disconnect",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"delete"},"Delete"),(0,o.kt)("h2",{id:"node-removal"},"Node Removal"),(0,o.kt)("p",null,"To Simply delete an instance relations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pass the instance you want to delete to ",(0,o.kt)("a",{parentName:"li",href:"../../api/classes/FrostApi#delete"},"FrostApi.delete()"),"."),(0,o.kt)("li",{parentName:"ul"},"The second parameter is DisconnectOptions. It defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},'"all"'),", So it disconnects all relations unless you supply an empty map ",(0,o.kt)("inlineCode",{parentName:"li"},"{}")," or a specific map you require. for more details Check the ",(0,o.kt)("a",{parentName:"li",href:"#disconnect"},"Disconnect")," Section")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/index.ts",title:"src/index.ts"},'import { User } from "src/data/user"\nimport { Profile } from "src/data/profile"\nimport { FrostApp } from "src/data/frost"\n\n...\n\nconst { id: userId } = (await FrostApp.users.delete(user))\n\n\n')),(0,o.kt)("h2",{id:"disconnect"},"Disconnect"),(0,o.kt)("p",null,"This is similar to ",(0,o.kt)("a",{parentName:"p",href:"./update#disconnect"},(0,o.kt)("inlineCode",{parentName:"a"},"Disconnect"))," in the ",(0,o.kt)("a",{parentName:"p",href:"./update"},(0,o.kt)("inlineCode",{parentName:"a"},"Update"))," Section. So you don't have to re-read it if you're already familiar with it. The only difference is that here it defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},'"all"')),(0,o.kt)("p",null,"To Specify the relations you want to disconnect along with the delete, all you have to do is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When you pass the instance to the delete function, pass a second parameter of the type ",(0,o.kt)("a",{parentName:"li",href:"../../api/types/DisconnectOptions"},"DisconnectOptions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The possible values for ",(0,o.kt)("a",{parentName:"li",href:"../../api/types/DisconnectOptions"},"DisconnectOptions")," are:"),(0,o.kt)("li",{parentName:"ul"},"The string ",(0,o.kt)("inlineCode",{parentName:"li"},'"all"'),", this will disconnect all relations"),(0,o.kt)("li",{parentName:"ul"},"A map between:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[property name with the relation you want to connect]")),(0,o.kt)("li",{parentName:"ul"},"and one of the following options:"),(0,o.kt)("li",{parentName:"ul"},"The string ",(0,o.kt)("inlineCode",{parentName:"li"},'"all"')," or the boolean ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," to disconnect all connected instances in the selected relations (e.g: ",(0,o.kt)("inlineCode",{parentName:"li"},"{ posts: 'all', profile: true }"),")"),(0,o.kt)("li",{parentName:"ul"},"ID(s) of the instance(s) you want to disconnect (e.g: ",(0,o.kt)("inlineCode",{parentName:"li"},"{ posts: ['...','...',...], profile: \"...\" }"),")")))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If the property name in the ",(0,o.kt)("a",{parentName:"p",href:"../../api/types/DisconnectOptions"},"DisconnectOptions")," map is referring to a property with an array type (ie; many). then the value should be an array of the ids. otherwise (ie; One) then the value can be a single string."),(0,o.kt)("p",{parentName:"admonition"},"Please check out ",(0,o.kt)("a",{parentName:"p",href:"../../api/types/DisconnectOptions"},"DisconnectOptions"),", it contains more detailed examples.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Reminder:"))," The second parameter (disconnect options) defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},'"all"'))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/index.ts showLineNumbers",title:"src/index.ts",showLineNumbers:!0},'import { User } from "src/data/user"\nimport { Profile } from "src/data/profile"\nimport { Post } from "src/data/post"\nimport { FrostApp } from "src/data/frost"\n\nconst user = (await FrostApp.users.find(userId))\n\n//highlight-start\n// Example 1: this will disconnect all relations\nawait FrostApp.users.delete(user)\n//Or\nawait FrostApp.users.delete(user,"all")\n\n// Example 2: this will disconnect nothing\nawait FrostApp.users.delete(user,{})\n\n// Example 3: this will disconnect all posts and profiles\nawait FrostApp.users.delete(user,{ posts: "all", profile: true})\n\n// Example 4: this will disconnect the specific posts in the list and the single profile\nawait FrostApp.users.delete(user,{ posts: ["...","...",...], profile: "..."})\n//highlight-end\n\n')))}d.isMDXComponent=!0}}]);