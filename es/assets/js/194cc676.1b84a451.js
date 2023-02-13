"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||r;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={title:"Trait Definitions",slug:"/basics/trait-definitions"},s=void 0,o={unversionedId:"basics/trait-definitions",id:"version-3.x/basics/trait-definitions",title:"Trait Definitions",description:"Through the #[ink::trait_definition] proc. macro it is now possible to define your very own trait definitions that are then implementable by ink! smart contracts.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/basics/trait-definitions.md",sourceDirName:"basics",slug:"/basics/trait-definitions",permalink:"/es/3.x/basics/trait-definitions",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/basics/trait-definitions.md",tags:[],version:"3.x",frontMatter:{title:"Trait Definitions",slug:"/basics/trait-definitions"},sidebar:"reference",previous:{title:"Events",permalink:"/es/3.x/basics/events"},next:{title:"Cross-Contract Calling",permalink:"/es/3.x/basics/cross-contract-calling"}},l={},c=[{value:"Example",id:"example",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Through the ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink::trait_definition]")," proc. macro it is now possible to define your very own trait definitions that are then implementable by ink! smart contracts."),(0,i.kt)("p",null,"This allows to define shared smart contract interfaces to different concrete implementations.\nNote that this ink! trait definition can be defined anywhere, even in another crate!"),(0,i.kt)("p",null,"See our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/master/examples/trait-erc20/lib.rs"},(0,i.kt)("inlineCode",{parentName:"a"},"ERC20-Trait example contract")),"\nfor an elaborate example which uses trait definitions."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"base_erc20.rs")," module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::trait_definition]\npub trait BaseErc20 {\n    /// Creates a new ERC-20 contract and initializes it with the initial supply for the instantiator.\n    #[ink(constructor)]\n    fn new(initial_supply: Balance) -> Self;\n\n    /// Returns the total supply.\n    #[ink(message)]\n    fn total_supply(&self) -> Balance;\n\n    /// Transfers `amount` from caller to `to`.\n    #[ink(message, payable)]\n    fn transfer(&mut self, to: AccountId, amount: Balance);\n}\n")),(0,i.kt)("p",null,"An ink! smart contract definition can then implement this trait definition as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod erc20 {\n    use base_erc20::BaseErc20;\n\n    #[ink(storage)]\n    pub struct Erc20 {\n        total_supply: Balance,\n        // more fields ...\n    }\n\n    impl BaseErc20 for Erc20 {\n        #[ink(constructor)]\n        fn new(initial_supply: Balance) -> Self {\n            // implementation ...\n        }\n\n        #[ink(message)]\n        fn total_supply(&self) -> Balance {\n            // implementation ...\n        }\n\n        #[ink(message, payable)]\n        fn transfer(&mut self, to: AccountId, amount: Balance) {\n            // implementation ...\n        }\n    }\n}\n")),(0,i.kt)("p",null,"Calling the above ",(0,i.kt)("inlineCode",{parentName:"p"},"Erc20")," explicitely through its trait implementation can be done just as if it was normal Rust code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// --- Instantiating the ERC-20 contract:\n//\nlet mut erc20 = <Erc20 as BaseErc20>::new(1000);\n// --- Is just the same as:\nuse base_erc20::BaseErc20;\nlet mut erc20 = Erc20::new(1000);\n\n// --- Retrieving the total supply:\n//\nassert_eq!(<Erc20 as BaseErc20>::total_supply(&erc20), 1000);\n// --- Is just the same as:\nuse base_erc20::BaseErc20;\nassert_eq!(erc20.total_supply(), 1000);\n")),(0,i.kt)("p",null,"There are still many limitations to ink! trait definitions and trait implementations.\nFor example it is not possible to define associated constants or types or have default implemented methods.\nThese limitations exist because of technical intricacies, however, please expect that many of those will be tackled in future ink! releases."),(0,i.kt)("p",null,"Marks trait definitions to ink! as special ink! trait definitions."),(0,i.kt)("p",null,"There are some restrictions that apply to ink! trait definitions that\nthis macro checks. Also ink! trait definitions are required to have specialized\nstructure so that the main ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/ink_lang/3.3.1/ink_lang/attr.contract.html"},(0,i.kt)("inlineCode",{parentName:"a"},"#[ink::contract]"))," macro can\nproperly generate code for its implementations."),(0,i.kt)("h1",{id:"example-definition"},"Example: Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\ntype Balance = <ink_env::DefaultEnvironment as ink_env::Environment>::Balance;\n\n#[ink::trait_definition]\npub trait Erc20 {\n    /// Constructs a new ERC-20 compliant smart contract using the initial supply.\n    #[ink(constructor)]\n    fn new(initial_supply: Balance) -> Self;\n\n    /// Returns the total supply of the ERC-20 smart contract.\n    #[ink(message)]\n    fn total_supply(&self) -> Balance;\n\n    // etc.\n}\n")),(0,i.kt)("h1",{id:"example-implementation"},"Example: Implementation"),(0,i.kt)("p",null,"Given the above trait definition you can implement it as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod base_erc20 {\n    /// We somehow cannot put the trait in the doc-test crate root due to bugs.\n    #[ink_lang::trait_definition]\n    pub trait Erc20 {\n        /// Constructs a new ERC-20 compliant smart contract using the initial supply.\n        #[ink(constructor)]\n        fn new(initial_supply: Balance) -> Self;\n\n        /// Returns the total supply of the ERC-20 smart contract.\n        #[ink(message)]\n        fn total_supply(&self) -> Balance;\n    }\n\n    #[ink(storage)]\n    pub struct BaseErc20 {\n        total_supply: Balance,\n        // etc ..\n    }\n\n    impl Erc20 for BaseErc20 {\n        #[ink(constructor)]\n        fn new(initial_supply: Balance) -> Self {\n            Self { total_supply: initial_supply }\n        }\n\n        /// Returns the total supply of the ERC-20 smart contract.\n        #[ink(message)]\n        fn total_supply(&self) -> Balance {\n            self.total_supply\n        }\n\n        // etc ..\n    }\n}\n")))}m.isMDXComponent=!0}}]);