"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3196],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>y});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),i=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=i(e.components);return t.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),y=a,m=u["".concat(c,".").concat(y)]||u[y]||f[y]||o;return n?t.createElement(m,s(s({ref:r},p),{},{components:n})):t.createElement(m,s({ref:r},p))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49687:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var t=n(87462),a=(n(67294),n(3905));const o={},s="IAsyncMessageTypeResolver.OnConsumeAsync method",l={unversionedId:"reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/OnConsumeAsync",id:"reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/OnConsumeAsync",title:"IAsyncMessageTypeResolver.OnConsumeAsync method",description:"Returns the message type when consuming",source:"@site/docs/reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/OnConsumeAsync.md",sourceDirName:"reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver",slug:"/reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/OnConsumeAsync",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/OnConsumeAsync",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/OnConsumeAsync.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IAsyncMessageTypeResolver interface",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/"},next:{title:"IAsyncMessageTypeResolver.OnProduceAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/OnProduceAsync"}},c={},i=[{value:"See Also",id:"see-also",level:2}],p={toc:i};function f(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iasyncmessagetyperesolveronconsumeasync-method"},"IAsyncMessageTypeResolver.OnConsumeAsync method"),(0,a.kt)("p",null,"Returns the message type when consuming"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public Task<Type> OnConsumeAsync(IMessageContext context)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"context"),(0,a.kt)("td",{parentName:"tr",align:null},"The IMessageContext containing the message and the metadata")))),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"interface\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/"},"IAsyncMessageTypeResolver")),(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/"},"KafkaFlow"))))}f.isMDXComponent=!0}}]);