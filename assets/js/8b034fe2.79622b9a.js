"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[7046],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5842:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Recoil Sync 0.2"},c=void 0,p={permalink:"/blog/2022/10/06/recoil-sync-0.2.0-release",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2022-10-06-recoil-sync-0.2.0-release.md",source:"@site/blog/2022-10-06-recoil-sync-0.2.0-release.md",title:"Recoil Sync 0.2",description:"- Export updateItems() for the listen prop callback in ` in addition to updateItem() and updateAllKnownItems()`. (#2017, #2035)",date:"2022-10-06T00:00:00.000Z",formattedDate:"October 6, 2022",tags:[],readingTime:.335,truncated:!1,authors:[],prevItem:{title:"Recoil 0.7.6",permalink:"/blog/2022/10/11/recoil-0.7.6-release"},nextItem:{title:"Refine 0.1.1",permalink:"/blog/2022/08/18/refine-0.1.1-release"}},u={authorsImageUrls:[]},s=[],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Export ",(0,o.kt)("inlineCode",{parentName:"li"},"updateItems()")," for the ",(0,o.kt)("a",{parentName:"li",href:"https://recoiljs.org/docs/recoil-sync/api/RecoilSync#listen-interface"},(0,o.kt)("inlineCode",{parentName:"a"},"listen"))," prop callback in ",(0,o.kt)("a",{parentName:"li",href:"https://recoiljs.org/docs/recoil-sync/api/RecoilSync"},(0,o.kt)("inlineCode",{parentName:"a"},"<RecoilSync>"))," in addition to ",(0,o.kt)("inlineCode",{parentName:"li"},"updateItem()")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"updateAllKnownItems()"),". (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/2017"},"#2017"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/2035"},"#2035"),")"),(0,o.kt)("li",{parentName:"ul"},"Removing a parameter from the URL will reset atoms when using location ",(0,o.kt)("inlineCode",{parentName:"li"},"queryParams")," with a ",(0,o.kt)("inlineCode",{parentName:"li"},"param"),".  This is a slight breaking change when an atom might sync with multiple URL params. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1900"},"#1900"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1976"},"#1976"),")"),(0,o.kt)("li",{parentName:"ul"},"Add a dev warning if an unstable ",(0,o.kt)("inlineCode",{parentName:"li"},"handlers")," prop is detected for ",(0,o.kt)("a",{parentName:"li",href:"https://recoiljs.org/docs/recoil-sync/api/RecoilURLSyncTransit"},(0,o.kt)("inlineCode",{parentName:"a"},"<RecoilURLSyncTransit>")),". (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/2044"},"#2044"),")")))}f.isMDXComponent=!0}}]);