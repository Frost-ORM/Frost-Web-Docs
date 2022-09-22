"use strict";(self.webpackChunkfrost_web_doc=self.webpackChunkfrost_web_doc||[]).push([[9539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),i=(n(7294),n(3905));const a={sidebar_position:3,title:"Update"},r=void 0,s={unversionedId:"docs/operations/update",id:"version-2.0.0/docs/operations/update",title:"Update",description:"This section will describe FrostDelegate.update() function. This Function is used to modify an existing instance of the entity and connect or disconnect it with other entities depending on the relations.",source:"@site/versioned_docs/version-2.0.0/docs/operations/update.md",sourceDirName:"docs/operations",slug:"/docs/operations/update",permalink:"/frost-web-docs/docs/operations/update",draft:!1,tags:[],version:"2.0.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Update"},sidebar:"tutorialSidebar",previous:{title:"Write (Add/Insert)",permalink:"/frost-web-docs/docs/operations/write"},next:{title:"Delete",permalink:"/frost-web-docs/docs/operations/delete"}},p={},l=[{value:"Data Modification",id:"data-modification",level:2},{value:"Connect",id:"connect",level:2},{value:"Disconnect",id:"disconnect",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section will describe ",(0,i.kt)("a",{parentName:"p",href:"../../api/classes/FrostDelegate#update"},"FrostDelegate.update()")," function. This Function is used to modify an existing instance of the entity and connect or disconnect it with other entities depending on the relations."),(0,i.kt)("h2",{id:"data-modification"},"Data Modification"),(0,i.kt)("p",null,"To Simply Modify an instance, all you have to do is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As in ",(0,i.kt)("inlineCode",{parentName:"li"},"line 8")," Pass the object containing the modified properties and ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"id of the object you want to modify"))," to the ",(0,i.kt)("inlineCode",{parentName:"li"},"update")," function in the corresponding Delegate from the FrostApp instance (in this case the FrostApp has the shape ",(0,i.kt)("inlineCode",{parentName:"li"},"{firebaseApp:FirebaseApp,firebaseDB:Database, user:UserDelegate, profile:ProfileDelegate}"),")"),(0,i.kt)("li",{parentName:"ul"},"The update function returns a ",(0,i.kt)("inlineCode",{parentName:"li"},"Promise<void>")," in case of success and throws an error in case of failure.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/index.ts showLineNumbers",title:"src/index.ts",showLineNumbers:!0},'import { User, Profile, Post} from "@frost-orm/frost-web-client"\nimport { FrostApp } from "src/data/frost"\n\n// modify the parameters as you like. here we\'ll modify the name property\nconst modifiedUserProps = {id:userId, name:"..."}\n\n// update the instance\nawait FrostApp.user.update(modifiedUserProps)\n')),(0,i.kt)("h2",{id:"connect"},"Connect"),(0,i.kt)("p",null,"It's Just like the ",(0,i.kt)("a",{parentName:"p",href:"./write#connect"},"connect")," in ",(0,i.kt)("a",{parentName:"p",href:"./write#connect"},"Write Operation")),(0,i.kt)("p",null,"To Simply connect an instance it to other instances based on the relations, all you have to do is: (We'll continue with the same example from above)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As in ",(0,i.kt)("inlineCode",{parentName:"li"},"line 8"),", when you pass the data to the update function, you can also pass a second parameter of the type ",(0,i.kt)("a",{parentName:"li",href:"../../api/types/ConnectOptions"},"ConnectOptions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The connect option is basically a map between the ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"li"},"{ [property name with the relation you want to connect] : (id of the instance(s) you want to connect) }"),".")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Each model will have a lot of types generated automatically for it. ",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectOptions")," is One of these Types. These Type are named with the following pattern ",(0,i.kt)("inlineCode",{parentName:"p"},"{ModelName}Type"),", so for the example bellow the connect options type will be ",(0,i.kt)("inlineCode",{parentName:"p"},"UserConnectOptions"),".\nfor more details about these types checkout this ",(0,i.kt)("a",{parentName:"p",href:"/frost-web-docs/docs/extra/detailed-data-types"},"page"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"In the example below, we connect a list of ",(0,i.kt)("inlineCode",{parentName:"em"},"posts")," using their IDs and also connect a ",(0,i.kt)("inlineCode",{parentName:"em"},"profile")," to the ",(0,i.kt)("inlineCode",{parentName:"em"},"user")," instance."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/index.ts showLineNumbers",title:"src/index.ts",showLineNumbers:!0},'import { User, Profile, Post} from "@frost-orm/frost-web-client"\nimport { FrostApp } from "src/data/frost"\n\n// modify the parameters as you like. here we\'ll modify the name property\nconst modifiedUserProps = {id:userId, name:"..."}\n\n// update the instance\nawait FrostApp.user.update(modifiedUserProps,{ posts: ["...","...",...], profile: "..."})\n')),(0,i.kt)("h2",{id:"disconnect"},"Disconnect"),(0,i.kt)("p",null,"This is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect")," in the structure but the opposite in the functionality, it disconnects related instances."),(0,i.kt)("p",null,"To Simply disconnect relations, all you have to do is: (We'll continue with the same example from above)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When you pass the data to the update function, you can also pass a third parameter of the type ",(0,i.kt)("a",{parentName:"li",href:"../../api/types/DisconnectOptions"},"DisconnectOptions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The possible values for ",(0,i.kt)("a",{parentName:"li",href:"../../api/types/DisconnectOptions"},"DisconnectOptions")," are:"),(0,i.kt)("li",{parentName:"ul"},"The string ",(0,i.kt)("inlineCode",{parentName:"li"},'"all"'),", this will disconnect all relations"),(0,i.kt)("li",{parentName:"ul"},"A map between:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[property name with the relation you want to connect]")),(0,i.kt)("li",{parentName:"ul"},"and one of the following options:"),(0,i.kt)("li",{parentName:"ul"},"The string ",(0,i.kt)("inlineCode",{parentName:"li"},'"all"')," or the boolean ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," to disconnect all connected instances in the selected relations (e.g: ",(0,i.kt)("inlineCode",{parentName:"li"},"{ posts: 'all', profile: true }"),")"),(0,i.kt)("li",{parentName:"ul"},"ID(s) of the instance(s) you want to disconnect (e.g: ",(0,i.kt)("inlineCode",{parentName:"li"},"{ posts: ['...','...',...], profile: \"...\" }"),")")))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If the property name in the ",(0,i.kt)("a",{parentName:"p",href:"../../api/types/DisconnectOptions"},"DisconnectOptions")," map is referring to a property with an array type (ie; many). then the value should be an array of the ids. otherwise (ie; One) then the value can be a single string."),(0,i.kt)("p",{parentName:"admonition"},"Please check out ",(0,i.kt)("a",{parentName:"p",href:"../../api/types/DisconnectOptions"},"DisconnectOptions"),", it contains more detailed examples.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you don't have anything to connect and you just want to disconnect relations the second parameter (ie; ConnectOptions) could be passed as ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," or an empty object ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Each model will have a lot of types generated automatically for it. ",(0,i.kt)("inlineCode",{parentName:"p"},"DisconnectOptions")," is One of these Types. These Type are named with the following pattern ",(0,i.kt)("inlineCode",{parentName:"p"},"{ModelName}Type"),", so for the example bellow the connect options type will be ",(0,i.kt)("inlineCode",{parentName:"p"},"UserDisconnectOptions"),".\nfor more details about these types checkout this ",(0,i.kt)("a",{parentName:"p",href:"/frost-web-docs/docs/extra/detailed-data-types"},"page"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/index.ts showLineNumbers",title:"src/index.ts",showLineNumbers:!0},'import { User, Profile, Post} from "@frost-orm/frost-web-client"\nimport { FrostApp } from "src/data/frost"\n\n// modify the parameters as you like. here we\'ll modify the name property\nconst modifiedUserProps = {id:userId, name:"..."}\n\n\n//highlight-start\n// Example 1: this will disconnect all relations\nawait FrostApp.user.update(modifiedUserProps,undefined,"all")\n\n// Example 2: this will disconnect all posts and profiles\nawait FrostApp.user.update(modifiedUserProps,undefined,{ posts: "all", profile: true})\n\n// Example 3: this will disconnect the specific posts in the list and the single profile\nawait FrostApp.user.update(modifiedUserProps,undefined,{ posts: ["...","...",...], profile: "..."})\n//highlight-end\n\n')))}d.isMDXComponent=!0}}]);