"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8811],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>h});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,h=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(h,l(l({ref:a},d),{},{components:t})):n.createElement(h,l({ref:a},d))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7614:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const o={title:"Contratos Actualizables",slug:"/basics/upgradeable-contracts",hide_title:!0},l=void 0,s={unversionedId:"basics/upgradeability",id:"basics/upgradeability",title:"Contratos Actualizables",description:"A pesar de que los smart contracts est\xe1n destinados a ser inmutables por dise\xf1o,",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/basics/upgradeability.md",sourceDirName:"basics",slug:"/basics/upgradeable-contracts",permalink:"/es/basics/upgradeable-contracts",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/upgradeability.md",tags:[],version:"current",frontMatter:{title:"Contratos Actualizables",slug:"/basics/upgradeable-contracts",hide_title:!0},sidebar:"reference",previous:{title:"Llamadas Cross-Contract",permalink:"/es/basics/cross-contract-calling"},next:{title:"Funciones de Entorno",permalink:"/es/basics/environment-functions"}},i={},c=[{value:"Proxy Forwarding",id:"proxy-forwarding",level:2},{value:"Propiedades",id:"propiedades",level:3},{value:"Reemplazar el C\xf3digo del Contrto con <code>set_code_hash()</code>",id:"reemplazar-el-c\xf3digo-del-contrto-con-set_code_hash",level:2},{value:"Propiedades",id:"propiedades-1",level:3},{value:"Compatibilidad del Storage",id:"compatibilidad-del-storage",level:3},{value:"Una peque\xf1a nota sobre el determinismo de las direcciones de los contratos",id:"una-peque\xf1a-nota-sobre-el-determinismo-de-las-direcciones-de-los-contratos",level:3},{value:"Ejemplos",id:"ejemplos",level:2}],d={toc:c},u="wrapper";function p(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/upgradeable-contract.svg",className:"titlePic"}),(0,r.kt)("h1",{id:"contratos-actualizables"},"Contratos Actualizables"),(0,r.kt)("p",null,"A pesar de que los smart contracts est\xe1n destinados a ser inmutables por dise\xf1o,\na menudo es necesario realizar una actualizaci\xf3n del smart contract."),(0,r.kt)("p",null,"Para este escenario, ink! tiene diferentas estrategias de actualizaci\xf3n."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#proxy-forwarding"},"Proxy Forwarding"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#properties"},"Propiedades")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#replacing-contract-code-with-set_code_hash"},"Reemplazar el C\xf3digo del Contrto con ",(0,r.kt)("inlineCode",{parentName:"a"},"set_code_hash()")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#properties-1"},"Propiedades")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#storage-compatibility"},"Compatibilidad del Storage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#a-little-note-on-the-determinism-of-contract-addresses"},"Una peque\xf1a nota sobre el determinismo de las direcciones de los contratos")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#examples"},"Ejemplos"))),(0,r.kt)("h2",{id:"proxy-forwarding"},"Proxy Forwarding"),(0,r.kt)("p",null,"Este m\xe9todo se basa en la capacidad de los contratos para hacer llamadas proxy con otros contratos."),(0,r.kt)("h3",{id:"propiedades"},"Propiedades"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reenv\xeda cualquier llamada en la que no coincidan  un selector propio con el de otro contrato."),(0,r.kt)("li",{parentName:"ul"},"El otro contrato necesita ser desplegado on-chain."),(0,r.kt)("li",{parentName:"ul"},"El estado es almacenado en el storage del contrato en la que se desv\xedan las llamadas.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"User ---- tx ---\x3e Proxy ----------\x3e Implementation_v0\n                     |\n                      ------------\x3e Implementation_v1\n                     |\n                      ------------\x3e Implementation_v2\n")),(0,r.kt)("p",null,"Nuestro contrato proxy tendra estos dos campos en el storage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct Proxy {\n    /// The `AccountId` of a contract where any call that does not match a\n    /// selector of this contract is forwarded to.\n    forward_to: AccountId,\n    /// The `AccountId` of a privileged account that can update the\n    /// forwarding address. This address is set to the account that\n    /// instantiated this contract.\n    admin: AccountId,\n}\n")),(0,r.kt)("p",null,"Necesitamos una manera de cambiar la direcci\xf3n de un contrato al que desviamos las llamadas\ny el selector de mensajes actual para hacer proxy de la llamada:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl Proxy {\n    /// Changes the `AccountId` of the contract where any call that does\n    /// not match a selector of this contract is forwarded to.\n    #[ink(message)]\n    pub fn change_forward_address(&mut self, new_address: AccountId) {\n        assert_eq!(\n            self.env().caller(),\n            self.admin,\n            "caller {:?} does not have sufficient permissions, only {:?} does",\n            self.env().caller(),\n            self.admin,\n        );\n        self.forward_to = new_address;\n    }\n\n    /// Fallback message for a contract call that doesn\'t match any\n    /// of the other message selectors.\n    ///\n    /// # Note:\n    ///\n    /// - We allow payable messages here and would forward any optionally supplied\n    ///   value as well.\n    /// - If the self receiver were `forward(&mut self)` here, this would not\n    ///   have any effect whatsoever on the contract we forward to.\n    #[ink(message, payable, selector = _)]\n    pub fn forward(&self) -> u32 {\n        ink::env::call::build_call::<ink::env::DefaultEnvironment>()\n            .call_type(\n                Call::new()\n                    .callee(self.forward_to)\n                    .transferred_value(self.env().transferred_value())\n                    .gas_limit(0),\n            )\n            .call_flags(\n                ink::env::CallFlags::default()\n                    .set_forward_input(true)\n                    .set_tail_call(true),\n            )\n            .fire()\n            .unwrap_or_else(|err| {\n                panic!(\n                    "cross-contract call to {:?} failed due to {:?}",\n                    self.forward_to, err\n                )\n            });\n        unreachable!(\n            "the forwarded call will never return since `tail_call` was set"\n        );\n    }\n}\n')),(0,r.kt)("p",null,":::consejo"),(0,r.kt)("p",null,"Eche un vistazo al patr\xf3n selector en el atribut de la macro, declarando ",(0,r.kt)("inlineCode",{parentName:"p"},"selector = _"),"\nespecificamos que todos los dem\xe1s mensajes deben ser manejados por este selector de mensajes."),(0,r.kt)("p",null,":::"),(0,r.kt)("p",null,"Con este patr\xf3n, puede introducir otro mensaje en su contrato proxy.\nCualquier mensaje que no coincida con el contrato proxy\nse reenviar\xe1 a la direcci\xf3n del contrato especificada."),(0,r.kt)("h2",{id:"reemplazar-el-c\xf3digo-del-contrto-con-set_code_hash"},"Reemplazar el C\xf3digo del Contrto con ",(0,r.kt)("inlineCode",{parentName:"h2"},"set_code_hash()")),(0,r.kt)("p",null,"Siguiendo la filosofia de ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/maintain/runtime-upgrades/"},"Substrate's runtime upgradeability"),",\nink! tambi\xe9n soporta una manera sencilla de actualizar el c\xf3digo de tus contratos via la funci\xf3n especial\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/ink/ink_env/fn.set_code_hash.html"},(0,r.kt)("inlineCode",{parentName:"a"},"set_code_hash()")),"."),(0,r.kt)("h3",{id:"propiedades-1"},"Propiedades"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Actualizar el c\xf3digo del contrato con ",(0,r.kt)("inlineCode",{parentName:"li"},"set_code_hash()"),".\nEsto reemplaza de manera efectiva el c\xf3digo que se ejecuta para la direcci\xf3n del contrato."),(0,r.kt)("li",{parentName:"ul"},"El otro contrato necesita ser desplegado on-chain."),(0,r.kt)("li",{parentName:"ul"},"El estado es almacenado en el storage del contrato instanciado originalmente.")),(0,r.kt)("p",null,"Simplemente a\xf1ade la siguiente funci\xf3n al contrato que quieres actualizar en el futuro."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'/// Modifies the code which is used to execute calls to this contract address (`AccountId`).\n///\n/// We use this to upgrade the contract logic. We don\'t do any authorization here, any caller\n/// can execute this method. In a production contract you would do some authorization here.\n#[ink(message)]\npub fn set_code(&mut self, code_hash: [u8; 32]) {\n    ink::env::set_code_hash(&code_hash).unwrap_or_else(|err| {\n        panic!(\n            "Failed to `set_code_hash` to {:?} due to {:?}",\n            code_hash, err\n        )\n    });\n    ink::env::debug_println!("Switched code hash to {:?}.", code_hash);\n}\n')),(0,r.kt)("h3",{id:"compatibilidad-del-storage"},"Compatibilidad del Storage"),(0,r.kt)("p",null,"Es responsabilidad del desarrollador asegurarse que el storage del nuevo contrato es compatible con el storage del contrato que esta siendo reemplazado."),(0,r.kt)("admonition",{title:"\xa1Atenci\xf3n!",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"No deberias cambiar el otden en el que las variables de estado del contrato son declaradas, ni su tipo!"),(0,r.kt)("p",{parentName:"admonition"},"Violar esta restricci\xf3n no impedir\xe1 una exitosa compilaci\xf3n,\npero podria resultar en  ",(0,r.kt)("strong",{parentName:"p"},"el mix-up de valores")," o ",(0,r.kt)("strong",{parentName:"p"},"fallos al leer correctamente el storage"),".\nEsto podr\xeda resultar en errores severos en la aplicaci\xf3n que utiliza el contrato.")),(0,r.kt)("p",null,"Si el storage de tu contrato tiene esta pinta:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct YourContract {\n    x: u32,\n    y: bool,\n}\n")),(0,r.kt)("p",null,"Los procedimientos enumerados a continuaci\xf3n har\xe1n que sea ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"invalido"))),(0,r.kt)("p",null,"Cambiar el orden de las variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct YourContract {\n    y: bool,\n    x: u32,\n}\n")),(0,r.kt)("p",null,"Eliminar una variable existente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct YourContract {\n    x: u32,\n}\n")),(0,r.kt)("p",null,"Cambiar el tipo de la variable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct YourContract {\n    x: u64,\n    y: bool,\n}\n")),(0,r.kt)("p",null,"Introducir una nueva variable antes de una de las ya existentes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct YourContract {\n    z: Vec<u32>,\n    x: u32,\n    y: bool,\n}\n")),(0,r.kt)("h3",{id:"una-peque\xf1a-nota-sobre-el-determinismo-de-las-direcciones-de-los-contratos"},"Una peque\xf1a nota sobre el determinismo de las direcciones de los contratos"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Si tu contato utiliza este enfoque, ya no mantiene la suposici\xf3n de address determinista.\nYa no puedes asumir que la direcci\xf3n del contrato identifica un c\xf3digo hash espec\xedfico.\nPor favor vaya ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/10690#issuecomment-1025702389"},"al error"),"\npara m\xe1s detaller.")),(0,r.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,r.kt)("p",null,"Puedes ver ejemplos de actualizaciones de contratos en el",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-examples/tree/main/upgradeable-contracts"},"repositorio ink!"),"."))}p.isMDXComponent=!0}}]);