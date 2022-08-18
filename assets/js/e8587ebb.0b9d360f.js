"use strict";(self.webpackChunkchemotion_saurus=self.webpackChunkchemotion_saurus||[]).push([[7499],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5059:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"format_descriptions",title:"Format descriptions",slug:"format_descriptions",author:"Nicole Jung"},c=void 0,p={unversionedId:"repo/format_descriptions",id:"repo/format_descriptions",title:"Format descriptions",description:"Units",source:"@site/docs/repo/format_descriptions.md",sourceDirName:"repo",slug:"/repo/format_descriptions",permalink:"/chemotionsaurus/docs/next/repo/format_descriptions",editUrl:"https://github.com/ComPlat/chemotion_saurus/edit/master/docs/repo/format_descriptions.md",tags:[],version:"current",lastUpdatedBy:"Jan C. Brammer",lastUpdatedAt:1634815365,formattedLastUpdatedAt:"10/21/2021",frontMatter:{id:"format_descriptions",title:"Format descriptions",slug:"format_descriptions",author:"Nicole Jung"},sidebar:"repoSidebar",previous:{title:"Data types",permalink:"/chemotionsaurus/docs/next/repo/data_types"},next:{title:"References",permalink:"/chemotionsaurus/docs/next/repo/references"}},u=[{value:"Units",id:"units",children:[],level:2},{value:"Common errors &amp; inaccuracies",id:"common-errors--inaccuracies",children:[],level:2},{value:"Abbreviations and names",id:"abbreviations-and-names",children:[],level:2},{value:"Description of processes",id:"description-of-processes",children:[],level:2}],l={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"units"},"Units"),(0,a.kt)("p",null,"Please adjust the space between number and unit according to common standards:",(0,a.kt)("br",{parentName:"p"}),"\n","All combinations of number and unit should be given with space, only the combination number+% (e.g. yield or concentration) are given without."),(0,a.kt)("p",null,"12 h (wrong: 12h)  ","\n12 min (wrong: 12min)",(0,a.kt)("br",{parentName:"p"}),"\n","12 \xb0C (not 12\xb0C)",(0,a.kt)("br",{parentName:"p"}),"\n","12 mM (wrong: 12mM)  "),(0,a.kt)("p",null,"But: the product was obtained in 12% yield",(0,a.kt)("br",{parentName:"p"}),"\n","Or: 5% methanol in water"),(0,a.kt)("h2",{id:"common-errors--inaccuracies"},"Common errors & inaccuracies"),(0,a.kt)("p",null,"Please do not give any temperature with the information: room temperature",(0,a.kt)("br",{parentName:"p"}),"\n","The temperature has to be defined as e.g. 21 \xb0C or others as room temperature might differ a lot from air conditioned labs to not air conditioned ones. "),(0,a.kt)("p",null,"Please do not give the duration of a reaction or others as \u201cover night\u201d or \u201cone day\u201d. Please give the accurate time as 12 h or 24 h. "),(0,a.kt)("h2",{id:"abbreviations-and-names"},"Abbreviations and names"),(0,a.kt)("p",null,"Please avoid misunderstandings due to inaccurate names and descriptions:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Right"),": cyclohexane (wrong: cyclo)"),(0,a.kt)("h2",{id:"description-of-processes"},"Description of processes"),(0,a.kt)("p",null,'For the description of the reactions: please use the exact name of the given reagents instead of general terms such as "the amine", "the aldehyde", the "starting material"'))}m.isMDXComponent=!0}}]);