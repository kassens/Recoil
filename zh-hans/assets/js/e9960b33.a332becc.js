"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[7198],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3176:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Recoil 0.7.6"},c=void 0,p={permalink:"/zh-hans/blog/2022/10/11/recoil-0.7.6-release",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2022-10-11-recoil-0.7.6-release.md",source:"@site/blog/2022-10-11-recoil-0.7.6-release.md",title:"Recoil 0.7.6",description:'- Expose flag to disable "duplicate atom key" checking / logging, as it was too noisy in environments such as NextJS or some dev environments using Fast Refresh. (#733, #2020, #2046)',date:"2022-10-11T00:00:00.000Z",formattedDate:"2022\u5e7410\u670811\u65e5",tags:[],readingTime:.47,truncated:!1,authors:[],nextItem:{title:"Recoil Sync 0.2",permalink:"/zh-hans/blog/2022/10/06/recoil-sync-0.2.0-release"}},s={authorsImageUrls:[]},u=[],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Expose flag to disable "duplicate atom key" checking / logging, as it was too noisy in environments such as NextJS or some dev environments using Fast Refresh. (',(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/733"},"#733"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/2020"},"#2020"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/2046"},"#2046"),")"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Import ",(0,a.kt)("inlineCode",{parentName:"li"},"RecoilEnv")," from the recoil package, and set ",(0,a.kt)("inlineCode",{parentName:"li"},"RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false")," in code to disable the checking and logging."),(0,a.kt)("li",{parentName:"ul"},"We also support ",(0,a.kt)("inlineCode",{parentName:"li"},"process.env.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=false")," in NodeJS environments such as NextJs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Caution")),": This disables all checks for duplicate atom keys including legitimate errors, so use with caution!"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Workaround for React 18 environments with nested renderers that don't support ",(0,a.kt)("inlineCode",{parentName:"p"},"useSyncExternalStore()"),". (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/2001"},"#2001"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/2010"},"#2010"),")"))))}f.isMDXComponent=!0}}]);