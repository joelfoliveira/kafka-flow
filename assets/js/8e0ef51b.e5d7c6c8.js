"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9535],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>p});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),f=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=f(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=f(o),p=n,k=u["".concat(i,".").concat(p)]||u[p]||d[p]||a;return o?r.createElement(k,l(l({ref:t},c),{},{components:o})):r.createElement(k,l({ref:t},c))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var f=2;f<a;f++)l[f]=o[f];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4838:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>f});var r=o(87462),n=(o(67294),o(3905));const a={},l="ExtensionMethods.UseMicrosoftLog method",s={unversionedId:"reference/KafkaFlow.LogHandler.Microsoft/KafkaFlow/ExtensionMethods/UseMicrosoftLog",id:"reference/KafkaFlow.LogHandler.Microsoft/KafkaFlow/ExtensionMethods/UseMicrosoftLog",title:"ExtensionMethods.UseMicrosoftLog method",description:"Configure KafkaFlow to use the Microsoft Logging framework to log messages.",source:"@site/docs/reference/KafkaFlow.LogHandler.Microsoft/KafkaFlow/ExtensionMethods/UseMicrosoftLog.md",sourceDirName:"reference/KafkaFlow.LogHandler.Microsoft/KafkaFlow/ExtensionMethods",slug:"/reference/KafkaFlow.LogHandler.Microsoft/KafkaFlow/ExtensionMethods/UseMicrosoftLog",permalink:"/kafkaflow/docs/reference/KafkaFlow.LogHandler.Microsoft/KafkaFlow/ExtensionMethods/UseMicrosoftLog",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.LogHandler.Microsoft/KafkaFlow/ExtensionMethods/UseMicrosoftLog.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ExtensionMethods class",permalink:"/kafkaflow/docs/reference/KafkaFlow.LogHandler.Microsoft/KafkaFlow/ExtensionMethods/"},next:{title:"KafkaFlow.LogHandler.Microsoft assembly",permalink:"/kafkaflow/docs/reference/KafkaFlow.LogHandler.Microsoft/"}},i={},f=[{value:"See Also",id:"see-also",level:2}],c={toc:f};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"extensionmethodsusemicrosoftlog-method"},"ExtensionMethods.UseMicrosoftLog method"),(0,n.kt)("p",null,"Configure KafkaFlow to use the Microsoft Logging framework to log messages."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IKafkaConfigurationBuilder UseMicrosoftLog(this IKafkaConfigurationBuilder builder)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"builder"),(0,n.kt)("td",{parentName:"tr",align:null},"The Kafka configuration builder")))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"class\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.LogHandler.Microsoft/KafkaFlow/ExtensionMethods/"},"ExtensionMethods")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.LogHandler.Microsoft/"},"KafkaFlow"))))}d.isMDXComponent=!0}}]);