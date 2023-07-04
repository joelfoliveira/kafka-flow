"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,p=f["".concat(s,".").concat(m)]||f[m]||d[m]||o;return n?r.createElement(p,i(i({ref:t},c),{},{components:n})):r.createElement(p,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={},i="ClusterConfigurationBuilderExtensions.EnableAdminMessages method",l={unversionedId:"reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/EnableAdminMessages",id:"reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/EnableAdminMessages",title:"ClusterConfigurationBuilderExtensions.EnableAdminMessages method",description:"Creates the admin producer and consumer to manage the application consumers",source:"@site/docs/reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/EnableAdminMessages.md",sourceDirName:"reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions",slug:"/reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/EnableAdminMessages",permalink:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/EnableAdminMessages",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/EnableAdminMessages.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ClusterConfigurationBuilderExtensions class",permalink:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/"},next:{title:"ClusterConfigurationBuilderExtensions.EnableTelemetry method (1 of 2)",permalink:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/EnableTelemetry"}},s={},u=[{value:"See Also",id:"see-also",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"clusterconfigurationbuilderextensionsenableadminmessages-method"},"ClusterConfigurationBuilderExtensions.EnableAdminMessages method"),(0,a.kt)("p",null,"Creates the admin producer and consumer to manage the application consumers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IClusterConfigurationBuilder EnableAdminMessages(\n    this IClusterConfigurationBuilder cluster, string topic, string consumerGroup = null, \n    int topicPartition = 0)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cluster"),(0,a.kt)("td",{parentName:"tr",align:null},"The cluster configuration builder")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topic"),(0,a.kt)("td",{parentName:"tr",align:null},"The topic to be used by the admin commands")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"consumerGroup"),(0,a.kt)("td",{parentName:"tr",align:null},"The consumer group prefix")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topicPartition"),(0,a.kt)("td",{parentName:"tr",align:null},"The partition used to produce and consumer admin messages")))),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"class\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/"},"ClusterConfigurationBuilderExtensions")),(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Admin/"},"KafkaFlow"))))}d.isMDXComponent=!0}}]);