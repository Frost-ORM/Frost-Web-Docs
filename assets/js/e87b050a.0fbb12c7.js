"use strict";(self.webpackChunkfrost_web_doc=self.webpackChunkfrost_web_doc||[]).push([[7513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2,title:"Write (Add/Insert)"},a=void 0,s={unversionedId:"docs/operations/write",id:"version-1.0.3/docs/operations/write",title:"Write (Add/Insert)",description:"This section will describe FrostApi.add() function. This Function is used to push a new instance of the entity to the entity list and connect it with other entities depending on the relations.",source:"@site/versioned_docs/version-1.0.3/docs/operations/write.md",sourceDirName:"docs/operations",slug:"/docs/operations/write",permalink:"/frost-web-docs/1.0.3/docs/operations/write",draft:!1,tags:[],version:"1.0.3",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Write (Add/Insert)"},sidebar:"tutorialSidebar",previous:{title:"Listen to changes",permalink:"/frost-web-docs/1.0.3/docs/operations/read/listen-to-changes"},next:{title:"Update",permalink:"/frost-web-docs/1.0.3/docs/operations/update"}},p={},l=[{value:"Regular Data Insert",id:"regular-data-insert",level:2},{value:"Connect",id:"connect",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section will describe ",(0,i.kt)("a",{parentName:"p",href:"../../api/classes/FrostApi#add"},"FrostApi.add()")," function. This Function is used to push a new instance of the entity to the entity list and connect it with other entities depending on the relations."),(0,i.kt)("h2",{id:"regular-data-insert"},"Regular Data Insert"),(0,i.kt)("p",null,"To Simply Add a new instance, all you have to do is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create the instances as in ",(0,i.kt)("inlineCode",{parentName:"li"},"line 5")," in the following code snippet"),(0,i.kt)("li",{parentName:"ul"},"As in ",(0,i.kt)("inlineCode",{parentName:"li"},"line 7")," Pass the newly created instance to the ",(0,i.kt)("inlineCode",{parentName:"li"},"add")," function in the corresponding API from the FrostApp instance (in this case the FrostApp has the shape ",(0,i.kt)("inlineCode",{parentName:"li"},"{firebaseApp:FirebaseApp, users:UserApi, profiles:ProfileApi}"),")"),(0,i.kt)("li",{parentName:"ul"},"The add function returns an object with the shape ",(0,i.kt)("inlineCode",{parentName:"li"},"{id:string}"),", the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," is the id of the newly created instance")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"if you want the instance to have a specific id, then set it in the object instance before passing it to the add function. otherwise the id will be the id returned from the firebase ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/js/database#push"},(0,i.kt)("inlineCode",{parentName:"a"},"push"))," function.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/index.ts showLineNumbers",title:"src/index.ts",showLineNumbers:!0},'import { User } from "src/data/user"\nimport { Profile } from "src/data/profile"\nimport { FrostApp } from "src/data/frost"\n\nconst user = new User({...})\n\nconst { id } = (await FrostApp.users.add(user))\n')),(0,i.kt)("h2",{id:"connect"},"Connect"),(0,i.kt)("p",null,"To Simply Add a new instance and also connect it to other instances based on the relations, all you have to do is: (We'll continue with the same example from above)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create the instance as in ",(0,i.kt)("inlineCode",{parentName:"li"},"line 9")," in the following code snippet."),(0,i.kt)("li",{parentName:"ul"},"As in ",(0,i.kt)("inlineCode",{parentName:"li"},"line 11"),", when you pass the instance to the add function, you can also pass a second parameter of the type ",(0,i.kt)("a",{parentName:"li",href:"../../api/types/ConnectOptions"},"ConnectOptions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The connect option is basically a map between the ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"li"},"{ [property name with the relation you want to connect] : (id of the instance(s) you want to connect) }"),".")))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If the property name in the ",(0,i.kt)("a",{parentName:"p",href:"../../api/types/ConnectOptions"},"ConnectOptions")," map is referring to a property with an array type (ie; many). then the value should be an array of the ids. otherwise (ie; One) then the value can be a single string.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"In the example below, we create and add the user, then we create the profile for the user and when we add it we pass the ",(0,i.kt)("inlineCode",{parentName:"em"},"userId")," in the ConnectOptions in the second parameter"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/index.ts showLineNumbers",title:"src/index.ts",showLineNumbers:!0},'import { User } from "src/data/user"\nimport { Profile } from "src/data/profile"\nimport { FrostApp } from "src/data/frost"\n\nconst user = new User({...})\n\nconst { id: userId } = (await FrostApp.users.add(user))\n\n//highlight-start\nconst profile = new Profile({...})\n\nconst {id:profileId} = await FrostApp.profiles.add(profile,{\'user\':userId})\n//highlight-end\n')))}d.isMDXComponent=!0}}]);