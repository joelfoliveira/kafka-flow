"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),i=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=i(e.components);return a.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(t),y=n,d=u["".concat(c,".").concat(y)]||u[y]||f[y]||o;return t?a.createElement(d,s(s({ref:r},p),{},{components:t})):a.createElement(d,s({ref:r},p))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},31809:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=t(87462),n=(t(67294),t(3905));const o={},s="IAsyncMessageTypeResolver.OnProduceAsync method",l={unversionedId:"reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/OnProduceAsync",id:"reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/OnProduceAsync",title:"IAsyncMessageTypeResolver.OnProduceAsync method",description:"Stores the message type somewhere when producing",source:"@site/docs/reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/OnProduceAsync.md",sourceDirName:"reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver",slug:"/reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/OnProduceAsync",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/OnProduceAsync",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/OnProduceAsync.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IAsyncMessageTypeResolver.OnConsumeAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/OnConsumeAsync"},next:{title:"IMessageTypeResolver interface",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/IMessageTypeResolver/"}},c={},i=[{value:"See Also",id:"see-also",level:2}],p={toc:i};function f(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iasyncmessagetyperesolveronproduceasync-method"},"IAsyncMessageTypeResolver.OnProduceAsync method"),(0,n.kt)("p",null,"Stores the message type somewhere when producing"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public Task OnProduceAsync(IMessageContext context)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"context"),(0,n.kt)("td",{parentName:"tr",align:null},"The IMessageContext containing the message and the metadata")))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"interface\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/"},"IAsyncMessageTypeResolver")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/"},"KafkaFlow"))))}f.isMDXComponent=!0}}]);