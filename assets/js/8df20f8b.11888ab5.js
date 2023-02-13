"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6808],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Events",slug:"/basics/events",hide_title:!0},o=void 0,s={unversionedId:"basics/events",id:"basics/events",title:"Events",description:"An ink! smart contract may define events that it can emit during contract execution.",source:"@site/docs/basics/events.md",sourceDirName:"basics",slug:"/basics/events",permalink:"/basics/events",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/events.md",tags:[],version:"current",frontMatter:{title:"Events",slug:"/basics/events",hide_title:!0},sidebar:"reference",previous:{title:"Mutating Storage Values",permalink:"/basics/mutating-values"},next:{title:"Trait Definitions",permalink:"/basics/trait-definitions"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Event Definition",id:"event-definition",level:2},{value:"Emitting Events in a Constructor",id:"emitting-events-in-a-constructor",level:2},{value:"Emitting Events from Messages",id:"emitting-events-from-messages",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/balloons-1.svg",className:"titlePic"}),(0,r.kt)("h1",{id:"events"},"Events"),(0,r.kt)("p",null,"An ink! smart contract may define events that it can emit during contract execution.\nEmitting events can be used by third party tools to query information about a contract's\nexecution and state."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Contract execution via transaction",src:n(1658).Z,width:"1780",height:"1000"})),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following example ink! contract shows how an event ",(0,r.kt)("inlineCode",{parentName:"p"},"Transferred")," is defined and\nemitted in the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod erc20 {\n    /// Defines an event that is emitted\n    /// every time value is transferred.\n    #[ink(event)]\n    pub struct Transferred {\n        from: Option<AccountId>,\n        to: Option<AccountId>,\n        value: Balance,\n    }\n\n    #[ink(storage)]\n    pub struct Erc20 {\n        total_supply: Balance,\n        // more fields ...\n    }\n\n    impl Erc20 {\n        #[ink(constructor)]\n        pub fn new(initial_supply: Balance) -> Self {\n            let caller = Self::env().caller();\n            Self::env().emit_event(Transferred {\n                from: None,\n                to: Some(caller),\n                value: initial_supply,\n            });\n            Self { total_supply: initial_supply }\n        }\n\n        #[ink(message)]\n        pub fn total_supply(&self) -> Balance {\n            self.total_supply\n        }\n    }\n}\n")),(0,r.kt)("p",null,"See our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/master/examples/erc20/lib.rs"},(0,r.kt)("inlineCode",{parentName:"a"},"ERC20 example contract")),"\nfor an elaborate example which uses events."),(0,r.kt)("h2",{id:"event-definition"},"Event Definition"),(0,r.kt)("p",null,"This is how an event definition looks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(event)]\npub struct Transferred {\n    #[ink(topic)]\n    from: Option<AccountId>,\n\n    #[ink(topic)]\n    to: Option<AccountId>,\n\n    amount: Balance\n\n}\n")),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(topic)]")," attribute tag to each item in your event that you want to have indexed.\nA good rule of thumb is to ask yourself if somebody might want to search for this topic.\nFor this reason the ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," in the exemplary event above was not\nmade indexable \u2012 there will most probably be a lot of different events with\ndiffering amounts each."),(0,r.kt)("p",null,"The signature of the event is by default one of the topics of the event, except\nif you annotate the event with ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(anonymous)]"),".\nSee ",(0,r.kt)("a",{parentName:"p",href:"/macros-attributes/anonymous"},"here")," for details on this attribute."),(0,r.kt)("h2",{id:"emitting-events-in-a-constructor"},"Emitting Events in a Constructor"),(0,r.kt)("p",null,"In a constructor events are emitted via ",(0,r.kt)("inlineCode",{parentName:"p"},"Self::env().emit_event()"),".\nSee this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(constructor)]\npub fn new(initial_value: Balance) -> Self {\n    let caller = Self::env().caller();\n    let mut balances = HashMap::new();\n    balances.insert(caller, initial_supply);\n\n    Self::env().emit_event(Transferred {\n        from: None,\n        to: Some(caller),\n        amount: initial_supply\n    });\n\n    Self { total_supply: initial_supply, balances }\n}\n")),(0,r.kt)("h2",{id:"emitting-events-from-messages"},"Emitting Events from Messages"),(0,r.kt)("p",null,"In a message events are emitted via ",(0,r.kt)("inlineCode",{parentName:"p"},"self.env().emit_event()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(message)]\npub fn transfer(&mut self, to: AccountId, amount: Balance) -> Result {\n    let from = self.env().caller();\n    // implementation hidden\n    self.env().emit_event(Transferred {\n        from: Some(from),\n        to: Some(to),\n        amount\n    });\n    Ok(())\n}\n")))}u.isMDXComponent=!0},1658:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/events-8c818593ab6f34c8c1071fca64408a43.svg"}}]);