"use strict";(self.webpackChunkfrost_web_doc=self.webpackChunkfrost_web_doc||[]).push([[2404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:2},i="Listen to changes",o={unversionedId:"docs/operations/read/listen-to-changes",id:"version-1.0.3/docs/operations/read/listen-to-changes",title:"Listen to changes",description:"Include",source:"@site/versioned_docs/version-1.0.3/docs/operations/read/listen-to-changes.md",sourceDirName:"docs/operations/read",slug:"/docs/operations/read/listen-to-changes",permalink:"/frost-web-docs/1.0.3/docs/operations/read/listen-to-changes",draft:!1,tags:[],version:"1.0.3",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Read Data Once",permalink:"/frost-web-docs/1.0.3/docs/operations/read/once"},next:{title:"Write (Add/Insert)",permalink:"/frost-web-docs/1.0.3/docs/operations/write"}},l={},p=[{value:"Include",id:"include",level:2},{value:"ListenToNestedChanges",id:"listentonestedchanges",level:2},{value:"Observe One",id:"observe-one",level:2},{value:"Observe Query (Multiple)",id:"observe-query-multiple",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"listen-to-changes"},"Listen to changes"),(0,r.kt)("h2",{id:"include"},"Include"),(0,r.kt)("p",null,"Just Like ",(0,r.kt)("a",{parentName:"p",href:"./once#include"},"Include")," in Read Data Once"),(0,r.kt)("h2",{id:"listentonestedchanges"},"ListenToNestedChanges"),(0,r.kt)("p",null,"This ",(0,r.kt)("a",{parentName:"p",href:"../../../api/types/ListenToNestedChanges"},"ListenToNestedChanges")," Options Parameter determines which types of relations will be Observed.\nPossible Values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"true")," will not listen to changes in included related instances"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"false")," will not listen to changes in included related instances"))),(0,r.kt)("li",{parentName:"ul"},"Map of ",(0,r.kt)("inlineCode",{parentName:"li"},"{ [RelationType]: boolean }"),", so  you can choose to listen to a specific type of relation.")),(0,r.kt)("p",null,"Let's Say you're observing a ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," instance with connected profile and posts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"//  Example 1: listen to all changes\ntrue\n\n//  Example 2: listen to all changes in One to One only\n{\n   RelationTypes.ONE_TO_ONE:true,\n   RelationTypes.ONE_TO_MANY:false,\n   RelationTypes.MANY_TO_MANY:false,\n}\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Be careful in case of Many to Many, each nested child will use an observer to the server. Firebase has constraints on the number of active connections especially in the free tier."),(0,r.kt)("p",{parentName:"admonition"},"Also Be careful in case of listening to nested changes in case of queries, if the query returns a long list then each item of the list will have observer on included relations if they're enabled through ",(0,r.kt)("a",{parentName:"p",href:"../../../api/types/ListenToNestedChanges"},"ListenToNestedChanges"),". Listening to original queries is not a problem but too many sub-queries may increase database costs.")),(0,r.kt)("h2",{id:"observe-one"},"Observe One"),(0,r.kt)("p",null,"This Similar to ",(0,r.kt)("a",{parentName:"p",href:"./once#fetch-one"},"Fetch One")," but with an extra third argument ",(0,r.kt)("a",{parentName:"p",href:"#listentonestedchanges"},"ListenToNestedChanges"),"\nTo Observe a single instance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pass the instance ID to the first argument of ",(0,r.kt)("a",{parentName:"li",href:"../../../api/classes/FrostApi#observeone"},"FrostApi.observeOne")),(0,r.kt)("li",{parentName:"ul"},"The second argument is an ",(0,r.kt)("a",{parentName:"li",href:"#include"},"Include")," Array"),(0,r.kt)("li",{parentName:"ul"},"The third argument is an ",(0,r.kt)("a",{parentName:"li",href:"#ListenToNestedChanges"},"ListenToNestedChanges"),". ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"defaults to ",(0,r.kt)("inlineCode",{parentName:"em"},"false"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"userApi.observeOne(\n    '-N80Y3gwS6TLcTC6Q-vF',\n    ['profile','posts'],\n    {\n        RelationTypes.ONE_TO_ONE:true,\n        RelationTypes.ONE_TO_MANY:false,\n        RelationTypes.MANY_TO_MANY:false,\n    }\n).subscribe(\n    (user:User) => {\n        // to get profile \n        let userProfile = user.profile?.()\n        let userPosts = user.posts?.()\n\n        // to get a flat object\n        let data = user.flatten()\n    }\n)\n\n\n")),(0,r.kt)("h2",{id:"observe-query-multiple"},"Observe Query (Multiple)"),(0,r.kt)("p",null,"This Similar to ",(0,r.kt)("a",{parentName:"p",href:"./once#query-multiple"},"Query Multiple")," but with extra options in the first argument\nTo preform a Query:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("a",{parentName:"li",href:"../../../api/classes/FrostApi#observemany"},"FrostApi.observeMany")," function:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The first argument is an options object:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"include"),": pass the ",(0,r.kt)("a",{parentName:"li",href:"#include"},"Include")," array"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"listenToNestedChanges"),": pass the ",(0,r.kt)("a",{parentName:"li",href:"#listentonestedchanges"},"ListenToNestedChanges"),". ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"defaults to ",(0,r.kt)("inlineCode",{parentName:"em"},"false")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"debounceDuration"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Debounce Duration in Milliseconds. incase multiple changes happen to multiple sub-queries in short time, this will prevent the observable from emitting too many times."),(0,r.kt)("li",{parentName:"ul"},"optional defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"500ms")))))),(0,r.kt)("li",{parentName:"ul"},"The second argument is a rest (spread) argument representing the firebase ",(0,r.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/reference/js/database.queryconstraint"},"Query Constraints"),". These are exactly the parameters that should be passed to the ",(0,r.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/reference/js/database.md#query"},"query")," firebase function",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"If no query constraints are passed then It will fetch all subnodes.")))))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// Example 1: observe all users with no nested observing\nuserApi.observeMany(null).subscribe(\n    (users: User[])=>{\n        ...\n    }\n)\n\n// Example 2: observe all users and observe users posts\nuserApi.observeMany({ include: [\'posts\'],listenToNestedChanges:true }).subscribe(\n    (users: User[])=>{\n        ...\n    }\n)\n\n//Example 3: observe all users with the type "CUSTOMER" with their posts also observed (for custom queries like this you should add an index manually to improve performance and reduce costs)\nuserApi.observeMany(\n\n    { \n        include: [\'posts\'],\n        listenToNestedChanges:true\n    },\n    orderByChild("userType"),\n    equalTo("CUSTOMER"),\n\n).subscribe(\n    (users: User[])=>{\n        ...\n    }\n)\n')))}c.isMDXComponent=!0}}]);