"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3637],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2798:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"Upgradeable Contracts",slug:"/basics/upgradeable-contracts"},s=void 0,i={unversionedId:"basics/upgradeability",id:"version-3.x/basics/upgradeability",title:"Upgradeable Contracts",description:"Even though smart contracts are intended to be immutable by design,",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/basics/upgradeability.md",sourceDirName:"basics",slug:"/basics/upgradeable-contracts",permalink:"/es/3.x/basics/upgradeable-contracts",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/basics/upgradeability.md",tags:[],version:"3.x",frontMatter:{title:"Upgradeable Contracts",slug:"/basics/upgradeable-contracts"},sidebar:"reference",previous:{title:"Cross-Contract Calling",permalink:"/es/3.x/basics/cross-contract-calling"},next:{title:"Contract Testing",permalink:"/es/3.x/basics/contract-testing"}},l={},c=[{value:"Proxy Forwarding",id:"proxy-forwarding",level:2},{value:"Properties",id:"properties",level:3},{value:"Replacing Contract Code with <code>set_code_hash()</code>",id:"replacing-contract-code-with-set_code_hash",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Storage Compatibility",id:"storage-compatibility",level:3},{value:"A little note on the determinism of contract addresses",id:"a-little-note-on-the-determinism-of-contract-addresses",level:3},{value:"Examples",id:"examples",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Even though smart contracts are intended to be immutable by design,\nit is often necessary to perform an upgrade of a smart contract. "),(0,r.kt)("p",null,"The developer may need to fix a critical bug or introduce a new feature."),(0,r.kt)("p",null,"For this type of scenario, ink! has different upgrade strategies."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#proxy-forwarding"},"Proxy Forwarding"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#properties"},"Properties")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#replacing-contract-code-with-set_code_hash"},"Replacing Contract Code with ",(0,r.kt)("inlineCode",{parentName:"a"},"set_code_hash()")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#properties-1"},"Properties")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#storage-compatibility"},"Storage Compatibility")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#a-little-note-on-the-determinism-of-contract-addresses"},"A little note on the determinism of contract addresses")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,r.kt)("h2",{id:"proxy-forwarding"},"Proxy Forwarding"),(0,r.kt)("p",null,"This method relies on the ability of contracts to proxy calls to other contracts."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Forwards any call that does not match a selector of itself to another contract."),(0,r.kt)("li",{parentName:"ul"},"The other contract needs to be deployed on-chain."),(0,r.kt)("li",{parentName:"ul"},"State is stored in the storage of the contract to which calls are forwarded.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"User ---- tx ---\x3e Proxy ----------\x3e Implementation_v0\n                     |\n                      ------------\x3e Implementation_v1\n                     |\n                      ------------\x3e Implementation_v2\n")),(0,r.kt)("p",null,"Our proxy contract will have these 2 storage fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct Proxy {\n    /// The `AccountId` of a contract where any call that does not match a\n    /// selector of this contract is forwarded to.\n    forward_to: AccountId,\n    /// The `AccountId` of a privileged account that can update the\n    /// forwarding address. This address is set to the account that\n    /// instantiated this contract.\n    admin: AccountId,\n}\n")),(0,r.kt)("p",null,"We then need a way to change the address of a contract to which we forward calls to\nand the actual message selector to proxy the call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl Proxy {\n    /// Changes the `AccountId` of the contract where any call that does\n    /// not match a selector of this contract is forwarded to.\n    #[ink(message)]\n    pub fn change_forward_address(&mut self, new_address: AccountId) {\n        assert_eq!(\n            self.env().caller(),\n            self.admin,\n            "caller {:?} does not have sufficient permissions, only {:?} does",\n            self.env().caller(),\n            self.admin,\n        );\n        self.forward_to = new_address;\n    }\n\n    /// Fallback message for a contract call that doesn\'t match any\n    /// of the other message selectors.\n    ///\n    /// # Note:\n    ///\n    /// - We allow payable messages here and would forward any optionally supplied\n    ///   value as well.\n    /// - If the self receiver were `forward(&mut self)` here, this would not\n    ///   have any effect whatsoever on the contract we forward to.\n    #[ink(message, payable, selector = _)]\n    pub fn forward(&self) -> u32 {\n        ink_env::call::build_call::<ink_env::DefaultEnvironment>()\n            .call_type(\n                Call::new()\n                    .callee(self.forward_to)\n                    .transferred_value(self.env().transferred_value())\n                    .gas_limit(0),\n            )\n            .call_flags(\n                ink_env::CallFlags::default()\n                    .set_forward_input(true)\n                    .set_tail_call(true),\n            )\n            .fire()\n            .unwrap_or_else(|err| {\n                panic!(\n                    "cross-contract call to {:?} failed due to {:?}",\n                    self.forward_to, err\n                )\n            });\n        unreachable!(\n            "the forwarded call will never return since `tail_call` was set"\n        );\n    }\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Take a look at the selector pattern in the attribute macro: by declaring ",(0,r.kt)("inlineCode",{parentName:"p"},"selector = _"),"\nwe specify that all other messages should be handled by this message selector.")),(0,r.kt)("p",null,"Using this pattern, you can introduce other message to your proxy contract.\nAny messages that are not matched in the proxy contract\nwill be forwarded to the specified contract address."),(0,r.kt)("h2",{id:"replacing-contract-code-with-set_code_hash"},"Replacing Contract Code with ",(0,r.kt)("inlineCode",{parentName:"h2"},"set_code_hash()")),(0,r.kt)("p",null,"Following ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/maintain/runtime-upgrades/"},"Substrate's runtime upgradeability"),"\nphilosophy, ink! also supports an easy way to update your contract code via the special function\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/ink/ink_env/fn.set_code_hash.html"},(0,r.kt)("inlineCode",{parentName:"a"},"set_code_hash()")),"."),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updates the contract code using ",(0,r.kt)("inlineCode",{parentName:"li"},"set_code_hash()"),".\nThis effectively replaces the code which is executed for the contract address."),(0,r.kt)("li",{parentName:"ul"},"The other contract needs to be deployed on-chain."),(0,r.kt)("li",{parentName:"ul"},"State is stored in the storage of the originally instantiated contract.")),(0,r.kt)("p",null,"Just add the following function to the contract you want to upgrade in the future."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'/// Modifies the code which is used to execute calls to this contract address (`AccountId`).\n///\n/// We use this to upgrade the contract logic. We don\'t do any authorization here, any caller\n/// can execute this method. In a production contract you would do some authorization here.\n#[ink(message)]\npub fn set_code(&mut self, code_hash: [u8; 32]) {\n    ink_env::set_code_hash(&code_hash).unwrap_or_else(|err| {\n        panic!(\n            "Failed to `set_code_hash` to {:?} due to {:?}",\n            code_hash, err\n        )\n    });\n    ink_env::debug_println!("Switched code hash to {:?}.", code_hash);\n}\n')),(0,r.kt)("h3",{id:"storage-compatibility"},"Storage Compatibility"),(0,r.kt)("p",null,"It is the developer's responsibility to ensure\nthat the new contract's storage is compatible with the storage of the contract that is replaced."),(0,r.kt)("admonition",{title:"Beware",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"You should not change the order in which the contract state variables are declared, nor their type!"),(0,r.kt)("p",{parentName:"admonition"},"Violating the restriction will not prevent a successful compilation,\nbut will result in ",(0,r.kt)("strong",{parentName:"p"},"the mix-up of values")," or ",(0,r.kt)("strong",{parentName:"p"},"failure to read the storage correctly"),".\nThis can be a result of severe errors in the application utilizing the contract.")),(0,r.kt)("p",null,"If the storage of your contract looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct YourContract {\n    x: u32,\n    y: bool,\n}\n")),(0,r.kt)("p",null,"The procedures listed below will make it ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"invalid"))),(0,r.kt)("p",null,"Changing the order of variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct YourContract {\n    y: bool,\n    x: u32,\n}\n")),(0,r.kt)("p",null,"Removing an existing variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct YourContract {\n    x: u32,\n}\n")),(0,r.kt)("p",null,"Changing the type of a variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct YourContract {\n    x: u64,\n    y: bool,\n}\n")),(0,r.kt)("p",null,"Introducing a new variable before any of the existing ones:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct YourContract {\n    z: Vec<u32>,\n    x: u32,\n    y: bool,\n}\n")),(0,r.kt)("h3",{id:"a-little-note-on-the-determinism-of-contract-addresses"},"A little note on the determinism of contract addresses"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If your contract utilizes this approach, it no-longer holds a deterministic address assumption.\nYou can no longer assume that a contract address identifies a specific code hash.\nPlease refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/10690#issuecomment-1025702389"},"the issue"),"\nfor more details.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Examples of upgradable contracts can be found in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/tree/master/examples/upgradeable-contracts"},"ink! repository")))}u.isMDXComponent=!0}}]);