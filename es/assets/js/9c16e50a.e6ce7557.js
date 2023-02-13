"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={title:"Llamadas Cross-Contract",slug:"/basics/cross-contract-calling",hide_title:!0},c=void 0,l={unversionedId:"basics/cross-contract-calling",id:"basics/cross-contract-calling",title:"Llamadas Cross-Contract",description:"En contratos ink! es posible llamar a mensajes ink! y constructores ink!. Por lo tanto, constructores ink! permiten delegar y mensajes ink! permiten",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/basics/cross-contract-calling.md",sourceDirName:"basics",slug:"/basics/cross-contract-calling",permalink:"/es/basics/cross-contract-calling",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/cross-contract-calling.md",tags:[],version:"current",frontMatter:{title:"Llamadas Cross-Contract",slug:"/basics/cross-contract-calling",hide_title:!0},sidebar:"reference",previous:{title:"Definiciones Trait",permalink:"/es/basics/definiciones-trait"},next:{title:"Contratos Actualizables",permalink:"/es/basics/upgradeable-contracts"}},s={},i=[{value:"C\xf3mo funciona",id:"c\xf3mo-funciona",level:3}],u={toc:i};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"/img/title/cross-contract.svg",className:"titlePic"}),(0,a.kt)("h1",{id:"llamadas-cross-contract"},"Llamadas Cross-Contract"),(0,a.kt)("p",null,"En contratos ink! es posible llamar a mensajes ink! y constructores ink!. Por lo tanto, constructores ink! permiten delegar y mensajes ink! permiten\nllamar f\xe1cilmente a otros mensajes ink!\nDado otro contrato ink!, es posible llamar a cualquiera de sus funciones."),(0,a.kt)("p",null,"Vea nuestro ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/master/examples/delegator/lib.rs"},(0,a.kt)("inlineCode",{parentName:"a"},"delegator contrato de ejemplo")),"\npara ver un elaborado ejemplo que utiliza llamadas cross-contract."),(0,a.kt)("h3",{id:"c\xf3mo-funciona"},"C\xf3mo funciona"),(0,a.kt)("p",null,"Para implementar el smart contract del delegador, primero\ntenemos que a\xf1adir manualment el c\xf3digo del otro contrato, recibir\nel hash del c\xf3digo del evento signalled y poner el hash del c\xf3digo\nen nuestro smart contract que llamara al anterior."),(0,a.kt)("p",null,"Nuestro smart contract se ve as\xed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use other_contract::OtherContract;\n\n//--snip--\n#[ink(storage)]\nstruct MyContract {\n    /// El otro contracto.\n    other_contract: OtherContract,\n}\n\nimpl MyContract {\n    /// Instanciar `MyContract con lo siguiente\n    /// el c\xf3digo del sub-contract y alg\xfan valor inicial.\n    #[ink(constructor)]\n    pub fn new(\n        other_contract_code_hash: Hash,\n    ) -> Self {\n        let other_contract = OtherContract::new(1337)\n            .endowment(total_balance / 4)\n            .code_hash(other_contract_code_hash)\n            .instantiate()\n            .expect("failed at instantiating the `OtherContract` contract");\n        Self {\n            other_contract\n        }\n    }\n\n    /// Calls the other contract.\n    #[ink(message)]\n    pub fn call_other_contract(&self) -> i32 {\n        self.other_contract.get_value()\n    }\n}\n//--snip--\n')),(0,a.kt)("p",null,"El fichero ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," contiene"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'other_contract = { path = "other_contract", default-features = false, features = ["ink-as-dependency"] }\n')),(0,a.kt)("p",null,"El ",(0,a.kt)("inlineCode",{parentName:"p"},"other_contract/Cargo.toml")," contiene:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},"[features]\nink-as-dependency = []\n")),(0,a.kt)("p",null,"Esto le dice al c\xf3digo generador de ink! que  ",(0,a.kt)("strong",{parentName:"p"},"always")," o ",(0,a.kt)("strong",{parentName:"p"},"never"),"\ncompila el smart contract como si fuese utilizado como una dependencia del otro ink! smart contract"),(0,a.kt)("p",null,"El ",(0,a.kt)("inlineCode",{parentName:"p"},"other_contract/lib.rs"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\npub mod other_contract {\n    /// Storage del otro contrato.\n    #[ink(storage)]\n    pub struct OtherContract {\n        value: i32,\n    }\n\n    impl OtherContract {\n        /// Inicializa el contrato.\n        #[ink(constructor)]\n        pub fn new(value: i32) -> Self {\n            Self { value }\n        }\n\n        /// Devuelve el estado actual.\n        #[ink(message)]\n        pub fn get_value(&self) -> i32 {\n            self.value\n        }\n    }\n}\n")))}p.isMDXComponent=!0}}]);