"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=o.createContext({}),s=function(e){var t=o.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(g.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,g=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),u=r,d=f["".concat(g,".").concat(u)]||f[u]||p[u]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},54500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:6},i="Logging",l={unversionedId:"guides/logging",id:"guides/logging",title:"Logging",description:"In this section, we will learn how to configure Logging in KafkaFlow.",source:"@site/docs/guides/logging.md",sourceDirName:"guides",slug:"/guides/logging",permalink:"/kafkaflow/docs/guides/logging",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/guides/logging.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Compression",permalink:"/kafkaflow/docs/guides/compression"},next:{title:"Administration",permalink:"/kafkaflow/docs/category/administration"}},g={},s=[{value:"Using Console Logger",id:"console-logger",level:2},{value:"Using Microsoft Logging Framework",id:"microsoft-logging-framework",level:2},{value:"Using your own Logger",id:"custom-logger",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"logging"},"Logging"),(0,r.kt)("p",null,"In this section, we will learn how to configure Logging in KafkaFlow."),(0,r.kt)("p",null,"There are a few options you can use to add logging to KafkaFlow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#console-logger"},"Using Console Logger")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#microsoft-logging-framework"},"Using Microsoft Logging Framework")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-logger"},"Using your own Logger"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"By default, KafkaFlow logs are ignored.\nThe default implementation is the ",(0,r.kt)("inlineCode",{parentName:"p"},"NullLogHandler"),". ")),(0,r.kt)("h2",{id:"console-logger"},"Using Console Logger"),(0,r.kt)("p",null,"The package ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/KafkaFlow.LogHandler.Console/"},"KafkaFlow.LogHandler.Console")," can be installed to log the framework messages to the console output after the installation, use the method ",(0,r.kt)("inlineCode",{parentName:"p"},"UseConsoleLog")," in the ",(0,r.kt)("a",{parentName:"p",href:"configuration"},"configuration"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"services.AddKafka(\n    kafka => kafka\n        .UseConsoleLog()\n        ...\n")),(0,r.kt)("h2",{id:"microsoft-logging-framework"},"Using Microsoft Logging Framework"),(0,r.kt)("p",null,"The package ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/KafkaFlow.LogHandler.Microsoft/"},"KafkaFlow.LogHandler.Microsoft")," can be installed to log the framework messages to the console output after the installation, use the method ",(0,r.kt)("inlineCode",{parentName:"p"},"UseMicrosoftLog")," in the ",(0,r.kt)("a",{parentName:"p",href:"configuration"},"configuration"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"services.AddKafka(\n    kafka => kafka\n        .UseMicrosoftLog()\n        ...\n")),(0,r.kt)("h2",{id:"custom-logger"},"Using your own Logger"),(0,r.kt)("p",null,"The framework has the ",(0,r.kt)("inlineCode",{parentName:"p"},"ILogHandler")," interface that can be implemented to log the framework's messages. The log handler can be configured in the ",(0,r.kt)("a",{parentName:"p",href:"configuration"},"configuration")," process using the method ",(0,r.kt)("inlineCode",{parentName:"p"},"UseLogHandler"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"services.AddKafka(\n    kafka => kafka\n        .UseLogHandler<YourLogHandler>()\n        ...\n")))}p.isMDXComponent=!0}}]);