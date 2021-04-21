(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,g=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(g,c(c({ref:t},l),{},{components:n})):a.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(110)),i={title:"Creating an ink! Project",slug:"/getting-started/creating-an-ink-project"},c={unversionedId:"getting-started/creating",id:"getting-started/creating",isDocsHomePage:!1,title:"Creating an ink! Project",description:"ink! is an Embedded Domain Specific Language (EDSL) that you can use to write WebAssembly based smart contracts in the Rust programming language.",source:"@site/docs/getting-started/creating.md",slug:"/getting-started/creating-an-ink-project",permalink:"/ink-docs/getting-started/creating-an-ink-project",editUrl:"https://github.com/ink-docs/edit/master/docs/getting-started/creating.md",version:"current",sidebar:"reference",previous:{title:"Setup",permalink:"/ink-docs/getting-started/setup"},next:{title:"Compile Your Contract",permalink:"/ink-docs/getting-started/building-your-contract"}},s=[{value:"Contract Source Code",id:"contract-source-code",children:[]},{value:"Testing Your Contract",id:"testing-your-contract",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ink! is an ",Object(o.b)("a",{parentName:"p",href:"https://wiki.haskell.org/Embedded_domain_specific_language"},"Embedded Domain Specific Language")," (EDSL) that you can use to write WebAssembly based smart contracts in the Rust programming language."),Object(o.b)("p",null,'ink! is just standard Rust in a well defined "contract format" with specialized ',Object(o.b)("inlineCode",{parentName:"p"},"#[ink(\u2026)]")," attribute macros. These attribute macros tell ink! what the different parts of your Rust smart contract represent, and ultimately allow ink! to do all the magic needed to create Substrate compatible Wasm bytecode!"),Object(o.b)("p",null,"Use the ink! CLI to generate an initial smart contract with some scaffolding code."),Object(o.b)("p",null,"Make sure you are in your working directory, and then run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cargo contract new flipper\n")),Object(o.b)("p",null,"This command will create a new project folder named ",Object(o.b)("inlineCode",{parentName:"p"},"flipper")," with this content:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"flipper\n|\n+-- lib.rs                <-- Contract Source Code\n|\n+-- Cargo.toml            <-- Rust Dependencies and ink! Configuration\n|\n+-- .gitignore\n")),Object(o.b)("h2",{id:"contract-source-code"},"Contract Source Code"),Object(o.b)("p",null,'The ink CLI automatically generates the source code for the "Flipper" contract, which is about the simplest "smart" contract you can build. You can take a sneak peak as to what will come by looking at the source code here:'),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/v3.0.0-rc1/examples/flipper/lib.rs"},"Flipper Example Source Code")),Object(o.b)("p",null,"The Flipper contract is nothing more than a ",Object(o.b)("inlineCode",{parentName:"p"},"bool")," which gets flipped from true to false through the ",Object(o.b)("inlineCode",{parentName:"p"},"flip()")," function. "),Object(o.b)("h2",{id:"testing-your-contract"},"Testing Your Contract"),Object(o.b)("p",null,"You will see at the bottom of the source code there is a simple test which verifies the functionality of the contract. We can quickly test that this code is functioning as expected using the ",Object(o.b)("strong",{parentName:"p"},"off-chain test environment")," that ink! provides."),Object(o.b)("p",null,"In your project folder run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cargo +nightly test\n")),Object(o.b)("p",null,"To which you should see a successful test completion:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ cargo +nightly test\n    running 2 tests\n    test flipper::tests::it_works ... ok\n    test flipper::tests::default_works ... ok\n\n    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n")),Object(o.b)("p",null,"Now that we are feeling confident things are working, we can actually compile this contract to Wasm in the next step."))}u.isMDXComponent=!0}}]);