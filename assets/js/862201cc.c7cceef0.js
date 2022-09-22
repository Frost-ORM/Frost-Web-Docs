"use strict";(self.webpackChunkfrost_web_doc=self.webpackChunkfrost_web_doc||[]).push([[2790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(n),y=o,h=c["".concat(i,".").concat(y)]||c[y]||u[y]||s;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,l=new Array(s);l[0]=c;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var d=2;d<s;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const s={sidebar_position:1,description:"Detailing the generated data types for each node model."},l="Detailed Data Types",r={unversionedId:"docs/extra/detailed-data-types",id:"version-2.0.0/docs/extra/detailed-data-types",title:"Detailed Data Types",description:"Detailing the generated data types for each node model.",source:"@site/versioned_docs/version-2.0.0/docs/extra/detailed-data-types.mdx",sourceDirName:"docs/extra",slug:"/docs/extra/detailed-data-types",permalink:"/frost-web-docs/docs/extra/detailed-data-types",draft:!1,tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Detailing the generated data types for each node model."},sidebar:"tutorialSidebar",previous:{title:"Extra",permalink:"/frost-web-docs/category/extra"}},i={},d=[{value:"Generated Types",id:"generated-types",level:2},{value:"&quot;Basic Model&quot; Type",id:"basic-model-type",level:3},{value:"FrostMetadata Related Types",id:"frostmetadata-related-types",level:3},{value:"&quot;Model FrostMetadata&quot; Type",id:"model-frostmetadata-type",level:4},{value:"&quot;Model With FrostMetadata&quot; Type",id:"model-with-frostmetadata-type",level:4},{value:"Include Related Types",id:"include-related-types",level:3},{value:"&quot;Each Include of The Model&quot; Types",id:"each-include-of-the-model-types",level:4},{value:"&quot;IncludeAll&quot; Types",id:"includeall-types",level:4},{value:"&quot;FullModel&quot; Type",id:"fullmodel-type",level:3},{value:"Properties Keys Related Types",id:"properties-keys-related-types",level:3},{value:"Base Properties",id:"base-properties",level:4},{value:"Properties With Relations",id:"properties-with-relations",level:4},{value:"Auto Mapped Types",id:"auto-mapped-types",level:2},{value:"IncludeOptions Type",id:"includeoptions-type",level:3},{value:"ConnectOptions/DisconnectOptions Type",id:"connectoptionsdisconnectoptions-type",level:3},{value:"FetchReturnType",id:"fetchreturntype",level:3},{value:"Indexed Access Types",id:"indexed-access-types",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"detailed-data-types"},"Detailed Data Types"),(0,o.kt)("p",null,"The portion of the schema bellow we'll be used to explain the Data types."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-prisma"},'model Student {\n    @@node(path:"/students")\n    name string\n    year  SchoolYear\n    birthday Date?\n    email string?\n\n    courses Course[] @Relation()\n    club Club @Relation()\n\n}\n\nenum SchoolYear {\n    FRESHMAN = "FRESHMAN"\n    SOPHOMORE = "SOPHOMORE"\n    JUNIOR = "JUNIOR"\n    SENIOR = "SENIOR"\n}\n\n\nmodel Course {\n    ...\n\n    students Student[] @Relation()\n\n    ...\n\n}\n\nmodel Club {\n    ...\n    \n    members Student[] @Relation()\n\n    ...\n}\n\n\n')),(0,o.kt)("h2",{id:"generated-types"},"Generated Types"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All Types and Enums defined in the schema will be generated with the same names."),(0,o.kt)("li",{parentName:"ul"},"A variety of types will be generated for each model, as described below:")),(0,o.kt)("h3",{id:"basic-model-type"},'"Basic Model" Type'),(0,o.kt)("p",null,'This Type describes the base node shape without any "properties from connected relation" or node metadata. ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"It extends ",(0,o.kt)("a",{parentName:"em",href:"../../api/types/FrostObject"},"FrostObject")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type Student = FrostObject & {\n    name: string;\n    year: SchoolYear;\n    birthday?: Date;\n    email?: string;\n};\n")),(0,o.kt)("h3",{id:"frostmetadata-related-types"},"FrostMetadata Related Types"),(0,o.kt)("h4",{id:"model-frostmetadata-type"},'"Model FrostMetadata" Type'),(0,o.kt)("p",null,"This Type describes the shape of the frost metadata in the node for the specific model."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// This Model Has no one-to-one relations\ntype StudentFrostMetadata = {\n    __frost__: {\n        'one_to_many': {\n            club?: OneToManyMetadata | null;\n        };\n        'many_to_many': {\n            courses?: ManyToManyMetadata | null;\n        };\n    };\n};\n")),(0,o.kt)("h4",{id:"model-with-frostmetadata-type"},'"Model With FrostMetadata" Type'),(0,o.kt)("p",null,"This Type is the combination of the Base Model and the Model Metadata types. ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"and it actually describes the true shape of the node in the database, since all nodes will have the metadata inside it"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type StudentWithMetadata = Student & Partial<StudentFrostMetadata>;\n")),(0,o.kt)("h3",{id:"include-related-types"},"Include Related Types"),(0,o.kt)("h4",{id:"each-include-of-the-model-types"},'"Each Include of The Model" Types'),(0,o.kt)("p",null,"An Include type is generated for each relation in the model, this type represents the property inside the object when a certain relation is included.\nThe type will be a ",(0,o.kt)("inlineCode",{parentName:"p"},"Record")," in case of many and single instance incase of one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type StudentIncludeCourse = {\n    courses?: Record<string, CourseWithMetadata>;\n};\ntype StudentIncludeClub = {\n    club?: ClubWithMetadata;\n};\n")),(0,o.kt)("h4",{id:"includeall-types"},'"IncludeAll" Types'),(0,o.kt)("p",null,"This Type is the combination of All the generated include types from the previous section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type StudentIncludeAll = StudentIncludeCourse & StudentIncludeClub;\n")),(0,o.kt)("h3",{id:"fullmodel-type"},'"FullModel" Type'),(0,o.kt)("p",null,"This Type is the combination of The ModelWithMetada & IncludeAll. and it describes the returned data when all relations are included"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type StudentFullModel = StudentWithMetadata & StudentIncludeAll;\n")),(0,o.kt)("h3",{id:"properties-keys-related-types"},"Properties Keys Related Types"),(0,o.kt)("h4",{id:"base-properties"},"Base Properties"),(0,o.kt)("p",null,"This type describes the properties names without relations (ie; the properties of the base model)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'type StudentPropertiesKeys = "name" | "year" | "birthday" | "email" | "courses" | "club";\n')),(0,o.kt)("h4",{id:"properties-with-relations"},"Properties With Relations"),(0,o.kt)("p",null,"These types describe the properties names with relations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// This Model Has no one-to-one relations\n//type StudentOneToOneRelationsFieldsKeys = ...; if the model has one to one\n\ntype StudentManyToManyRelationsFieldsKeys = "courses";\n\ntype StudentOneToManyRelationsMasterFieldsKeys = "club";\ntype StudentOneToManyRelationsSalveFieldsKeys = never;\ntype StudentOneToManyRelationsFieldsKeys = "club";\n\ntype StudentRelationsFieldsKeys = StudentManyToManyRelationsFieldsKeys | StudentOneToManyRelationsFieldsKeys;\n\ntype StudentRelationsFieldsKeysByType = {\n    // one_to_one: ...; if the model has one to one\n    many_to_many: StudentManyToManyRelationsFieldsKeys;\n    one_to_many: StudentOneToManyRelationsFieldsKeys;\n    one_to_many_master_fields: StudentOneToManyRelationsMasterFieldsKeys;\n    one_to_many_slave_fields: StudentOneToManyRelationsSalveFieldsKeys;\n};\n')),(0,o.kt)("h2",{id:"auto-mapped-types"},"Auto Mapped Types"),(0,o.kt)("h3",{id:"includeoptions-type"},(0,o.kt)("a",{parentName:"h3",href:"../../api/types/includeoptions"},"IncludeOptions")," Type"),(0,o.kt)("p",null,"This Type determine the shape of the include options map to be passed to fetching and querying functions in ",(0,o.kt)("a",{parentName:"p",href:"../../api/classes/frostdelegate"},"FrostDelegate")," (findOne,observeOne,findMultiple,observeMultiple,findMany,observeMany)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type StudentIncludeOptions = IncludeOptions<StudentRelationsFieldsKeys>;\n")),(0,o.kt)("h3",{id:"connectoptionsdisconnectoptions-type"},(0,o.kt)("a",{parentName:"h3",href:"../../api/types/connectoptions"},"ConnectOptions"),"/",(0,o.kt)("a",{parentName:"h3",href:"../../api/types/disconnectoptions"},"DisconnectOptions")," Type"),(0,o.kt)("p",null,"These Types determine the shape of the connect map to be passed to editing functions in ",(0,o.kt)("a",{parentName:"p",href:"../../api/classes/frostdelegate"},"FrostDelegate")," (add,update,delete)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type StudentConnectOptions = ConnectOptions<StudentRelationsFieldsKeysByType>;\ntype StudentDisconnectOptions = DisconnectOptions<StudentRelationsFieldsKeysByType>;\n")),(0,o.kt)("h3",{id:"fetchreturntype"},(0,o.kt)("a",{parentName:"h3",href:"../../api/types/fetchreturntype"},"FetchReturnType")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This Type is ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Returned"))," from all the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Fetching"))," & querying functions in FrostDelegate. Hence the name, ",(0,o.kt)("a",{parentName:"li",href:"../../api/types/fetchreturntype"},"FetchReturnType"),"."),(0,o.kt)("li",{parentName:"ul"},"This Type Determines the final shape of returned data depending on the ",(0,o.kt)("a",{parentName:"li",href:"#includeoptions"},"IncludeOptions")," passed to the fetch function.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The fetch and query functions don't directly return the ",(0,o.kt)("a",{parentName:"p",href:"../../api/types/fetchreturntype"},"FetchReturnType"),". But they return a type that includes it.\nFor example: incase of a findMany or findMultiple the return type would be  ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise< Record<string,FetchReturnType> >"))),(0,o.kt)("h2",{id:"indexed-access-types"},"Indexed Access Types"),(0,o.kt)("p",null,"For Each model, The main types are grouped in one type. This allows the user to use index access(",(0,o.kt)("inlineCode",{parentName:"p"},"[]"),") on the grouped type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'type StudentTypes = {\n    FullModel: StudentFullModel;\n    Model: Student;\n    ModelWithMetadata: StudentWithMetadata;\n    IncludeAll: StudentIncludeAll;\n    RelationsFieldsKeys: StudentRelationsFieldsKeys;\n    RelationsFieldsKeysByType: StudentRelationsFieldsKeysByType;\n    PropertiesKeys: StudentPropertiesKeys;\n    FrostMetadata: StudentFrostMetadata;\n    ConnectOptions: StudentConnectOptions;\n    DisconnectOptions: StudentDisconnectOptions;\n    IncludeOptions: StudentIncludeOptions;\n};\n\n// For example: To access StudentIncludeAll\nStudentTypes["IncludeAll"]\n')))}u.isMDXComponent=!0}}]);