"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4122],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var f=a.createContext({}),u=function(e){var t=a.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(f.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,f=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=u(r),s=n,p=k["".concat(f,".").concat(s)]||k[s]||d[s]||o;return r?a.createElement(p,i(i({ref:t},c),{},{components:r})):a.createElement(p,i({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var f in t)hasOwnProperty.call(t,f)&&(l[f]=t[f]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},75612:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={},i="IProducerConfiguration interface",l={unversionedId:"reference/KafkaFlow/KafkaFlow.Configuration/IProducerConfiguration/IProducerConfiguration",id:"reference/KafkaFlow/KafkaFlow.Configuration/IProducerConfiguration/IProducerConfiguration",title:"IProducerConfiguration interface",description:"Represents the producer configuration values",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Configuration/IProducerConfiguration/IProducerConfiguration.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Configuration/IProducerConfiguration",slug:"/reference/KafkaFlow/KafkaFlow.Configuration/IProducerConfiguration/",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IProducerConfiguration/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Configuration/IProducerConfiguration/IProducerConfiguration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IConsumerConfiguration.WorkersCount property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/WorkersCount"},next:{title:"IProducerConfiguration.Acks property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IProducerConfiguration/Acks"}},f={},u=[{value:"Members",id:"members",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iproducerconfiguration-interface"},"IProducerConfiguration interface"),(0,n.kt)("p",null,"Represents the producer configuration values"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface IProducerConfiguration\n")),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"name"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IProducerConfiguration/Acks"},"Acks"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the acknowledge type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IProducerConfiguration/BaseProducerConfig"},"BaseProducerConfig"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the confluent producer configuration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IProducerConfiguration/Cluster"},"Cluster"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the cluster configuration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IProducerConfiguration/CustomFactory"},"CustomFactory"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the producer custom factory")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IProducerConfiguration/DefaultTopic"},"DefaultTopic"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the default topic to be used when publishing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IProducerConfiguration/MiddlewaresConfigurations"},"MiddlewaresConfigurations"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the middlewares configurations")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IProducerConfiguration/Name"},"Name"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the cluster name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IProducerConfiguration/StatisticsHandlers"},"StatisticsHandlers"),"\xa0{\xa0get;\xa0}"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the statistics handlers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IProducerConfiguration/GetKafkaConfig"},"GetKafkaConfig"),"()"),(0,n.kt)("td",{parentName:"tr",align:null},"Gets the producer configuration")))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Configuration"))))}d.isMDXComponent=!0}}]);