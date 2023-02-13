"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1065],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),h=a,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8078:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Overview",slug:"/monthly-update/",hide_title:!0},i=void 0,c={unversionedId:"monthly-update/overview",id:"monthly-update/overview",title:"Overview",description:"Hey there reader \ud83d\udc4b!",source:"@site/docs/monthly-update/overview.md",sourceDirName:"monthly-update",slug:"/monthly-update/",permalink:"/es/monthly-update/",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/monthly-update/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/monthly-update/",hide_title:!0},sidebar:"reference",previous:{title:"ink! vs. CosmWasm",permalink:"/es/ink-vs-cosmwasm"},next:{title:"January '23",permalink:"/es/monthly-update/2023/01"}},p={},s=[],l={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"/img/title/monthly-update.svg",className:"titlePic"}),(0,a.kt)("p",null,"Hey there reader \ud83d\udc4b!"),(0,a.kt)("p",null,"This is meant to be a high-level overview of the changes that have taken place as part of\nParity's Web Assembly (Wasm) smart contract efforts. These efforts include the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink"},(0,a.kt)("inlineCode",{parentName:"a"},"ink!")),"\nprogramming language, the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts"},(0,a.kt)("inlineCode",{parentName:"a"},"pallet-contracts"))," execution environment, the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract"},(0,a.kt)("inlineCode",{parentName:"a"},"cargo-contract")),"\ndevelopment tool, and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/tree/master/parachains/runtimes/contracts/contracts-rococo"},"Contracts parachain"),". For anything UI related go check out the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/contracts-ui"},(0,a.kt)("inlineCode",{parentName:"a"},"contracts-ui")," repository"),"."),(0,a.kt)("p",null,"If these updates are too high-level for you you can always check out the release notes for\nthe various projects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink/blob/master/CHANGELOG.md"},(0,a.kt)("inlineCode",{parentName:"a"},"ink!"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/blob/master/frame/contracts/CHANGELOG.md"},(0,a.kt)("inlineCode",{parentName:"a"},"pallet-contracts"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/paritytech/cargo-contract/blob/master/CHANGELOG.md"},(0,a.kt)("inlineCode",{parentName:"a"},"cargo-contract")))),(0,a.kt)("p",null,"If you're new here and aren't sure where to get started with ink! check out our\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/smart-contracts/"},"guided tutorial for beginners"),"."),(0,a.kt)("p",null,"This was inspired by the ",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/kianenigma/aa835946455b9a3f167821b9d05ba376"},"Polkadot Staking Progress Report")," \u2764\ufe0f."))}u.isMDXComponent=!0}}]);