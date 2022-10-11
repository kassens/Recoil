"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[7376],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return d}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return r?t.createElement(m,c(c({ref:n},u),{},{components:r})):t.createElement(m,c({ref:n},u))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},234:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],a={title:"RecoilEnv",sidebar_label:"RecoilEnv"},l=void 0,s={unversionedId:"api-reference/core/RecoilEnv",id:"api-reference/core/RecoilEnv",title:"RecoilEnv",description:"An object that contains Recoil environment variables which may be read or set.",source:"@site/docs/api-reference/core/RecoilEnv.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/RecoilEnv",permalink:"/ko/docs/api-reference/core/RecoilEnv",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/RecoilEnv.md",tags:[],version:"current",frontMatter:{title:"RecoilEnv",sidebar_label:"RecoilEnv"},sidebar:"docs",previous:{title:"useRecoilBridgeAcrossReactRoots()",permalink:"/ko/docs/api-reference/core/useRecoilBridgeAcrossReactRoots"}},u=[{value:"NodeJS",id:"nodejs",children:[],level:2}],p={toc:u};function f(e){var n=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An object that contains Recoil environment variables which may be read or set."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED"))," - Useful to disable duplicate atom/selector key checking in environments where modules may be legitimately reloaded such as NextJS or when using React's Fast Refresh during development.  As this disables all checks including legitimate errors, please use with caution.")),(0,i.kt)("h2",{id:"nodejs"},"NodeJS"),(0,i.kt)("p",null,"The environment variables can also be initialized in NodeJS environments, such as NextJs, by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env"),"."),(0,i.kt)("hr",null))}f.isMDXComponent=!0}}]);