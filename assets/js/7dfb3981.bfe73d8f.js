"use strict";(self.webpackChunkchemotion_saurus=self.webpackChunkchemotion_saurus||[]).push([[7967],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1712:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"problems",title:"Hints for common problems",sidebar_label:"Problems",slug:"problems"},c=void 0,l={unversionedId:"eln/problems",id:"version-1.1.0/eln/problems",title:"Hints for common problems",description:"ELN is not responding",source:"@site/versioned_docs/version-1.1.0/eln/problems.mdx",sourceDirName:"eln",slug:"/eln/problems",permalink:"/chemotionsaurus/docs/1.1.0/eln/problems",editUrl:"https://github.com/ComPlat/chemotion_saurus/edit/master/versioned_docs/version-1.1.0/eln/problems.mdx",tags:[],version:"1.1.0",lastUpdatedBy:"Danny Truong",lastUpdatedAt:1649919296,formattedLastUpdatedAt:"4/14/2022",frontMatter:{id:"problems",title:"Hints for common problems",sidebar_label:"Problems",slug:"problems"},sidebar:"version-1.1.0/elnSidebar",previous:{title:"Analytical data",permalink:"/chemotionsaurus/docs/1.1.0/eln/analysis"},next:{title:"Generic Configuration",permalink:"/chemotionsaurus/docs/1.1.0/eln/generic_config"}},u=[{value:"ELN is not responding",id:"eln-is-not-responding",children:[],level:2},{value:"Actions are not avtivated",id:"actions-are-not-avtivated",children:[],level:2},{value:"Functions are not allowed",id:"functions-are-not-allowed",children:[],level:2},{value:"SciFinder error 500",id:"scifinder-error-500",children:[],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"eln-is-not-responding"},"ELN is not responding"),(0,a.kt)("p",null,"In individual cases it can happen that the ELN does not react to an action. If you have the feeling that your application is not giving any feedback, please reload the page by pressing ",(0,a.kt)("strong",{parentName:"p"},"F5"),". If the problem persists, please contact us using the email address given in the contact information or call us."),(0,a.kt)("h2",{id:"actions-are-not-avtivated"},"Actions are not avtivated"),(0,a.kt)("p",null,"Check whether you are in your work collection. The ",(0,a.kt)("strong",{parentName:"p"},"All Collection")," is not intended for changes."),(0,a.kt)("h2",{id:"functions-are-not-allowed"},"Functions are not allowed"),(0,a.kt)("p",null,"If you want to carry out an action and the corresponding button for carrying it out is not activated, it may be because you first have to save your previous entries. This error occurs, for example, if you want to edit a sample in a reaction, but the sample has recently been inserted into the reaction table (by ",(0,a.kt)("strong",{parentName:"p"},"split")," or ",(0,a.kt)("strong",{parentName:"p"},"copy"),"). If the new sample has not yet been saved in the reaction table, you cannot use various functions."),(0,a.kt)("h2",{id:"scifinder-error-500"},"SciFinder error 500"),(0,a.kt)("p",null,"A possible error message that can appear when using the SciFinder function to search for samples or reactions is the error code Error 500.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"SciFinder error 500",src:n(5931).Z,width:"675",height:"176"}),(0,a.kt)("br",{parentName:"p"}),"\n","This error occurs when the SciFinder access has not been released and therefore access to the database is denied. Please check whether your SciFinder token is still valid by checking the date in the action bar under ",(0,a.kt)("strong",{parentName:"p"},"Log in as your name")," and ",(0,a.kt)("strong",{parentName:"p"},"Settings"),". If the validity date has been exceeded, you can easily renew it by deleting the token and creating a new one by entering your SciFinder access data. The new token is then valid again for one week."),(0,a.kt)("h2",{id:""}))}d.isMDXComponent=!0},5931:function(e,t,n){t.Z=n.p+"assets/images/scifinder_error_500-cf9968a3fb7082148693ddad0abd7038.png"}}]);