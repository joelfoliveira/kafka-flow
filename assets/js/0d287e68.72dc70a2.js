"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:5},i="Batch Consume Middleware",s={unversionedId:"guides/middlewares/batch-consume-middleware",id:"guides/middlewares/batch-consume-middleware",title:"Batch Consume Middleware",description:"In this section, we will learn how to use the Batch Consume Middleware.",source:"@site/docs/guides/middlewares/batch-consume-middleware.md",sourceDirName:"guides/middlewares",slug:"/guides/middlewares/batch-consume-middleware",permalink:"/kafkaflow/docs/guides/middlewares/batch-consume-middleware",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/guides/middlewares/batch-consume-middleware.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Compressor Middleware",permalink:"/kafkaflow/docs/guides/middlewares/compressor-middleware"},next:{title:"Consumer Throttling",permalink:"/kafkaflow/docs/guides/middlewares/consumer-throttling-middleware"}},l={},d=[{value:"How to use it",id:"how-to-use-it",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"batch-consume-middleware"},"Batch Consume Middleware"),(0,r.kt)("p",null,"In this section, we will learn how to use the Batch Consume Middleware."),(0,r.kt)("p",null,"The Batch Consume Middleware is used to accumulate a number of messages or wait some time to build a collection of messages and deliver them to the next middleware to be processed, as it was just one message."),(0,r.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/KafkaFlow.BatchConsume"},"KafkaFlow.BatchConsume")," package. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package KafkaFlow.BatchConsume\n")),(0,r.kt)("p",null,"On the configuration, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"BatchConsume")," extension method to add the middleware to your consumer middlewares. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BatchConsume")," method has two arguments: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first one must define the maximum batch size. "),(0,r.kt)("li",{parentName:"ul"},"The second one defines the ",(0,r.kt)("inlineCode",{parentName:"li"},"TimeSpan")," that the Middleware waits for new messages to be part of the batch.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'services.AddKafka(kafka => kafka\n    .AddCluster(cluster => cluster\n        .WithBrokers(new[] { "localhost:9092" })\n        .AddConsumer(\n            consumerBuilder => consumerBuilder\n            ...\n            .AddMiddlewares(\n                middlewares => middlewares\n                    ...\n                    .BatchConsume(100, TimeSpan.FromSeconds(10)) // Configuration of the BatchConsumeMiddleware\n                    .Add<HandlingMiddleware>() // Middleware to process the batch\n            )\n        )\n    )\n);\n')),(0,r.kt)("p",null,"To access the batch from the next middleware, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetMessagesBatch")," method accessible through the ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," argument."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Batch Consume")," middleware, the ",(0,r.kt)("inlineCode",{parentName:"p"},"IServiceScopeFactory")," should be used to create scopes instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"IServiceProvider"),", as the latter may dispose the scope.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using KafkaFlow.BatchConsume;\n\ninternal class HandlingMiddleware : IMessageMiddleware\n{\n    public Task Invoke(IMessageContext context, MiddlewareDelegate next)\n    {\n        var batch = context.GetMessagesBatch();\n        \n        (...)\n\n        return Task.CompletedTask;\n    }\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find a sample on batch processing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/tree/master/samples/KafkaFlow.Sample.BatchOperations"},"here"),".")))}m.isMDXComponent=!0}}]);