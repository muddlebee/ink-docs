"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6641],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2442:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const s={title:'#[ink(namespace = "\u2026")]',slug:"/macros-attributes/namespace",hide_title:!0},i=void 0,o={unversionedId:"macros-attributes/namespace",id:"macros-attributes/namespace",title:'#[ink(namespace = "\u2026")]',description:"Aplicable a los bloque de implementaci\xf3n de ink! trait.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/macros-attributes/namespace.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/namespace",permalink:"/es/macros-attributes/namespace",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/macros-attributes/namespace.md",tags:[],version:"current",frontMatter:{title:'#[ink(namespace = "\u2026")]',slug:"/macros-attributes/namespace",hide_title:!0},sidebar:"reference",previous:{title:"#[ink(message)]",permalink:"/es/macros-attributes/message"},next:{title:"#[ink(payable)]",permalink:"/es/macros-attributes/payable"}},c={},l=[{value:"Ejemplo",id:"ejemplo",level:2}],p={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"/img/title/text/namespace.svg",className:"titlePic"}),(0,a.kt)("p",null,"Aplicable a los bloque de implementaci\xf3n de ink! trait."),(0,a.kt)("p",null,"Aplicado en bloques de implementaci\xf3n de ink! traits para eliminar la ambig\xfcedad de otros\nbloques de implementaci\xf3n trait con nombres iguales."),(0,a.kt)("h2",{id:"ejemplo"},"Ejemplo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink(namespace = "my_namespace")]\nimpl MyTrait for MyStorage {\n    #[ink(message)]\n    fn my_message(&self) {}\n}\n')),(0,a.kt)("p",null,"Estos cambia los selectores resultantes de todos los mensajes y  constructores ink! dentro de la implementaci\xf3n trait.\nPermitiendo as\xed la desambiguaci\xf3n entre implementaciones trait con mensajes superpuestos o nombres de constructores."))}m.isMDXComponent=!0}}]);