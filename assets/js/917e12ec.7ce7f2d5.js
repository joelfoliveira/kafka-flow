"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9291],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>s});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var f=r.createContext({}),c=function(e){var t=r.useContext(f),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(f.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,f=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),s=n,w=p["".concat(f,".").concat(s)]||p[s]||d[s]||o;return a?r.createElement(w,i(i({ref:t},u),{},{components:a})):r.createElement(w,i({ref:t},u))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var f in t)hasOwnProperty.call(t,f)&&(l[f]=t[f]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},10057:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i="MiddlewareConfiguration constructor",l={unversionedId:"reference/KafkaFlow/KafkaFlow.Configuration/MiddlewareConfiguration/MiddlewareConfiguration",id:"reference/KafkaFlow/KafkaFlow.Configuration/MiddlewareConfiguration/MiddlewareConfiguration",title:"MiddlewareConfiguration constructor",description:"Initializes a new instance of the MiddlewareConfiguration class.",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Configuration/MiddlewareConfiguration/MiddlewareConfiguration.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Configuration/MiddlewareConfiguration",slug:"/reference/KafkaFlow/KafkaFlow.Configuration/MiddlewareConfiguration/",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/MiddlewareConfiguration/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Configuration/MiddlewareConfiguration/MiddlewareConfiguration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KafkaFlowConfigurator.CreateBus method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/KafkaFlowConfigurator/CreateBus"},next:{title:"MiddlewareConfiguration.InstanceContainerId property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/MiddlewareConfiguration/InstanceContainerId"}},f={},c=[{value:"See Also",id:"see-also",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"middlewareconfiguration-constructor"},"MiddlewareConfiguration constructor"),(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",{parentName:"p",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/MiddlewareConfiguration/"},(0,n.kt)("inlineCode",{parentName:"a"},"MiddlewareConfiguration"))," class."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public MiddlewareConfiguration(Type type, MiddlewareLifetime lifetime, \n    Guid? instanceContainerId = default)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},"The middleware type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lifetime"),(0,n.kt)("td",{parentName:"tr",align:null},"The middleware instance lifetime")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"instanceContainerId"),(0,n.kt)("td",{parentName:"tr",align:null},"The instance container ID used to get the correct container when creating the instance")))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"class\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/MiddlewareConfiguration/"},"MiddlewareConfiguration")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Configuration"))))}d.isMDXComponent=!0}}]);