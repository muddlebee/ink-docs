"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9105],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(g,s(s({ref:t},c),{},{components:a})):r.createElement(g,s({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},601:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"Dise\xf1o Extendido del Storage",slug:"/datastructures/spread-storage-layout"},s=void 0,i={unversionedId:"datastructures/spread-storage-layout",id:"version-4.0.0-alpha.1/datastructures/spread-storage-layout",title:"Dise\xf1o Extendido del Storage",description:"Organizaci\xf3n del Storage",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.0.0-alpha.1/datastructures/spread-storage-layout.md",sourceDirName:"datastructures",slug:"/datastructures/spread-storage-layout",permalink:"/es/4.0.0-alpha.1/datastructures/spread-storage-layout",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/datastructures/spread-storage-layout.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Dise\xf1o Extendido del Storage",slug:"/datastructures/spread-storage-layout"},sidebar:"reference",previous:{title:"Trabajando con Mapping",permalink:"/es/4.0.0-alpha.1/datastructures/mapping"},next:{title:"Estructuras de Datos Personalizadas",permalink:"/es/4.0.0-alpha.1/datastructures/custom-datastructure"}},l={},p=[{value:"Organizaci\xf3n del Storage",id:"organizaci\xf3n-del-storage",level:3},{value:"Propagando",id:"propagando",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"organizaci\xf3n-del-storage"},"Organizaci\xf3n del Storage"),(0,n.kt)("p",null,"El siguiente esquema representa el storage que se expone a ink!\npor el pallet contracts:"),(0,n.kt)("div",{class:"schema"},(0,n.kt)("img",{src:"/img/kv.svg",alt:"Storage Organization: Layout"})),(0,n.kt)("p",null,"El storage de ink! opera almacenando y cargando las entradas en y desde una \xfanica celda\ndel storage. En este momento no hay manera de personalizar este comportamiento. Dependiendo en\nlos datos que estamos manejando, esto puede terminar siendo bueno o malo."),(0,n.kt)("p",null,"Pr ejemplo, si tenemos un peque\xf1o ",(0,n.kt)("inlineCode",{parentName:"p"},"ink_prelude::vec::Vec")," cargando todos los elementos\na la vez esto puede ser ventajoso - especialmente si esperamos que nuestro mensaje para interactuar\ncon la mayoria de ellos en una \xfanica llamada."),(0,n.kt)("p",null,"Por otro lado, esto puede ser un problema si estamos cargando un ",(0,n.kt)("inlineCode",{parentName:"p"},"Vec")," largo y solo estamos\noperando con unos pocos elementos."),(0,n.kt)("h3",{id:"propagando"},"Propagando"),(0,n.kt)("p",null,"ink! propaga la informaci\xf3n a tantas c\xe9lulas como sea posible. Por ejemplo si tienes el\nsiguiente struct ",(0,n.kt)("inlineCode",{parentName:"p"},"#[ink(storage)]")," cada campo vivira en su propia \xfanica celda del storage.\nDate cuenta que para ",(0,n.kt)("inlineCode",{parentName:"p"},"b")," todos los 32 bytes compratiran la misma celda!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct Spread {\n    a: i32,\n    b: [u8; 32],\n}\n")),(0,n.kt)("p",null,"El siguiente esquema representa el dise\xf1o del storage para un vector con tres elementos,\npersistentes al storage en un dise\xf1o extendido."),(0,n.kt)("div",{class:"schema"},(0,n.kt)("img",{src:"/img/spread.svg",alt:"Storage Organization: Spreading"})))}u.isMDXComponent=!0}}]);