"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,k=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},o="Installation",l={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"KafkaFlow is a set of nuget packages.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/kafkaflow/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/kafkaflow/docs/category/getting-started"},next:{title:"Quickstart",permalink:"/kafkaflow/docs/getting-started/create-your-first-application"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing",id:"installing",level:2},{value:"Setup",id:"setup",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"KafkaFlow is a set of nuget packages."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One of the following .NET versions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},".NET Core 2.1 or above."),(0,r.kt)("li",{parentName:"ul"},".NET Framework 4.6.1 or above.")))),(0,r.kt)("h2",{id:"installing"},"Installing"),(0,r.kt)("p",null,"Install KafkaFlow using NuGet package management."),(0,r.kt)("p",null,"Required Packages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/KafkaFlow/"},"KafkaFlow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/KafkaFlow.Microsoft.DependencyInjection/"},"KafkaFlow.Microsoft.DependencyInjection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/KafkaFlow.LogHandler.Console/"},"KafkaFlow.LogHandler.Console"))),(0,r.kt)("p",null,"You can quickly install them using .NET CLI \ud83d\udc47"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet add package KafkaFlow\ndotnet add package KafkaFlow.Microsoft.DependencyInjection\ndotnet add package KafkaFlow.LogHandler.Console\n")),(0,r.kt)("p",null,"You can find a complete list of the available packages ",(0,r.kt)("a",{parentName:"p",href:"/kafkaflow/docs/getting-started/packages"},"here"),"."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Types are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"KafkaFlow")," namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using KafkaFlow;\nusing KafkaFlow.Producers;\nusing KafkaFlow.Serializer;\n")),(0,r.kt)("p",null,"The host is configured using Dependency Injection. This is typically done once at application ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," shown bellow, but you can find an example on how to do it with an ",(0,r.kt)("a",{parentName:"p",href:"/kafkaflow/docs/getting-started/create-your-first-application"},"Hosted Service here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public void ConfigureServices(IServiceCollection services)\n{\n    services.AddKafka(kafka => kafka\n        .UseConsoleLog()\n        .AddCluster(cluster => cluster\n            .WithBrokers(new[] { "localhost:9092" })\n            .AddConsumer(consumer => consumer\n                .Topic("sample-topic")\n                .WithGroupId("sample-group")\n                .WithBufferSize(100)\n                .WithWorkersCount(10)\n                .AddMiddlewares(middlewares => middlewares\n                    .AddSerializer<JsonCoreSerializer>()\n                    .AddTypedHandlers(handlers => handlers\n                        .AddHandler<SampleMessageHandler>())\n                )\n            )\n            .AddProducer("producer-name", producer => producer\n                .DefaultTopic("sample-topic")\n                .AddMiddlewares(middlewares => middlewares\n                    .AddSerializer<JsonCoreSerializer>()\n                )\n            )\n        )\n    );\n}\n\npublic void Configure(\n    IApplicationBuilder app,\n    IWebHostEnvironment env,\n    IHostApplicationLifetime lifetime)\n{\n    var kafkaBus = app.ApplicationServices.CreateKafkaBus();\n\n    lifetime.ApplicationStarted.Register(() => kafkaBus.StartAsync(lifetime.ApplicationStopped));\n}\n')),(0,r.kt)("p",null,"Now you can create Message Handlers or access Producers and start exchanging events trouh Kafka."))}u.isMDXComponent=!0}}]);