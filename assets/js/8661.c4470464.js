/*! For license information please see 8661.c4470464.js.LICENSE.txt */
"use strict";(self.webpackChunkchemotion_saurus=self.webpackChunkchemotion_saurus||[]).push([[8661],{2814:function(n,t,e){function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}function a(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){i(n,t,e[t])}))}return n}function c(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,a=!1,i=void 0;try{for(var o,c=n[Symbol.iterator]();!(r=(o=c.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(s){a=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.d(t,{G:function(){return Gn}});var s=function(){},f={},l={},u={mark:s,measure:s};try{"undefined"!=typeof window&&(f=window),"undefined"!=typeof document&&(l=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(u=performance)}catch(Vn){}var m=(f.navigator||{}).userAgent,p=void 0===m?"":m,d=f,h=l,y=u,g=(d.document,!!h.documentElement&&!!h.head&&"function"==typeof h.addEventListener&&"function"==typeof h.createElement),b=(~p.indexOf("MSIE")||p.indexOf("Trident/"),"svg-inline--fa"),v="data-fa-i2svg",w=(function(){try{}catch(Vn){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),O=w.concat([11,12,13,14,15,16,17,18,19,20]),k={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},x=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",k.GROUP,k.SWAP_OPACITY,k.PRIMARY,k.SECONDARY].concat(w.map((function(n){return"".concat(n,"x")}))).concat(O.map((function(n){return"w-".concat(n)}))),d.FontAwesomeConfig||{});if(h&&"function"==typeof h.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(n){var t=c(n,2),e=t[0],r=t[1],a=function(n){return""===n||"false"!==n&&("true"===n||n)}(function(n){var t=h.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}(e));null!=a&&(x[r]=a)}))}var _=o({},{familyPrefix:"fa",replacementClass:b,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},x);_.autoReplaceSvg||(_.observeMutations=!1);var j=o({},_);d.FontAwesomeConfig=j;var E=d||{};E.___FONT_AWESOME___||(E.___FONT_AWESOME___={}),E.___FONT_AWESOME___.styles||(E.___FONT_AWESOME___.styles={}),E.___FONT_AWESOME___.hooks||(E.___FONT_AWESOME___.hooks={}),E.___FONT_AWESOME___.shims||(E.___FONT_AWESOME___.shims=[]);var P=E.___FONT_AWESOME___,A=[];g&&((h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState)||h.addEventListener("DOMContentLoaded",(function n(){h.removeEventListener("DOMContentLoaded",n),1,A.map((function(n){return n()}))})));var z,M="pending",S="settled",C="fulfilled",I="rejected",T=function(){},N=void 0!==e.g&&void 0!==e.g.process&&"function"==typeof e.g.process.emit,L="undefined"==typeof setImmediate?setTimeout:setImmediate,D=[];function R(){for(var n=0;n<D.length;n++)D[n][0](D[n][1]);D=[],z=!1}function W(n,t){D.push([n,t]),z||(z=!0,L(R,0))}function Y(n){var t=n.owner,e=t._state,r=t._data,a=n[e],i=n.then;if("function"==typeof a){e=C;try{r=a(r)}catch(Vn){B(i,Vn)}}F(i,r)||(e===C&&X(i,r),e===I&&B(i,r))}function F(n,t){var e;try{if(n===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===r(t))){var a=t.then;if("function"==typeof a)return a.call(t,(function(r){e||(e=!0,t===r?U(n,r):X(n,r))}),(function(t){e||(e=!0,B(n,t))})),!0}}catch(Vn){return e||B(n,Vn),!0}return!1}function X(n,t){n!==t&&F(n,t)||U(n,t)}function U(n,t){n._state===M&&(n._state=S,n._data=t,W(G,n))}function B(n,t){n._state===M&&(n._state=S,n._data=t,W(q,n))}function H(n){n._then=n._then.forEach(Y)}function G(n){n._state=C,H(n)}function q(n){n._state=I,H(n),!n._handled&&N&&e.g.process.emit("unhandledRejection",n._data,n)}function V(n){e.g.process.emit("rejectionHandled",n)}function K(n){if("function"!=typeof n)throw new TypeError("Promise resolver "+n+" is not a function");if(this instanceof K==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(n,t){function e(n){B(t,n)}try{n((function(n){X(t,n)}),e)}catch(Vn){e(Vn)}}(n,this)}K.prototype={constructor:K,_state:M,_then:null,_data:void 0,_handled:!1,then:function(n,t){var e={owner:this,then:new this.constructor(T),fulfilled:n,rejected:t};return!t&&!n||this._handled||(this._handled=!0,this._state===I&&N&&W(V,this)),this._state===C||this._state===I?W(Y,e):this._then.push(e),e.then},catch:function(n){return this.then(null,n)}},K.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new K((function(t,e){var r=[],a=0;function i(n){return a++,function(e){r[n]=e,--a||t(r)}}for(var o,c=0;c<n.length;c++)(o=n[c])&&"function"==typeof o.then?o.then(i(c),e):r[c]=o;a||t(r)}))},K.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new K((function(t,e){for(var r,a=0;a<n.length;a++)(r=n[a])&&"function"==typeof r.then?r.then(t,e):t(r)}))},K.resolve=function(n){return n&&"object"===r(n)&&n.constructor===K?n:new K((function(t){t(n)}))},K.reject=function(n){return new K((function(t,e){e(n)}))};var Z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function J(n){if(n&&g){var t=h.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=h.head.childNodes,r=null,a=e.length-1;a>-1;a--){var i=e[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return h.head.insertBefore(t,r),n}}function Q(){for(var n=12,t="";n-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function $(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function nn(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,": ").concat(n[e],";")}),"")}function tn(n){return n.size!==Z.size||n.x!==Z.x||n.y!==Z.y||n.rotate!==Z.rotate||n.flipX||n.flipY}function en(n){var t=n.transform,e=n.containerWidth,r=n.iconWidth,a={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),c="rotate(".concat(t.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(i," ").concat(o," ").concat(c)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var rn={x:0,y:0,width:"100%",height:"100%"};function an(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function on(n){var t=n.icons,e=t.main,r=t.mask,a=n.prefix,i=n.iconName,c=n.transform,s=n.symbol,f=n.title,l=n.maskId,u=n.titleId,m=n.extra,p=n.watchable,d=void 0!==p&&p,h=r.found?r:e,y=h.width,g=h.height,b="fak"===a,w=b?"":"fa-w-".concat(Math.ceil(y/g*16)),O=[j.replacementClass,i?"".concat(j.familyPrefix,"-").concat(i):"",w].filter((function(n){return-1===m.classes.indexOf(n)})).filter((function(n){return""!==n||!!n})).concat(m.classes).join(" "),k={children:[],attributes:o({},m.attributes,{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(g)})},x=b&&!~m.classes.indexOf("fa-fw")?{width:"".concat(y/g*16*.0625,"em")}:{};d&&(k.attributes[v]=""),f&&k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||Q())},children:[f]});var _=o({},k,{prefix:a,iconName:i,main:e,mask:r,maskId:l,transform:c,symbol:s,styles:o({},x,m.styles)}),E=r.found&&e.found?function(n){var t,e=n.children,r=n.attributes,a=n.main,i=n.mask,c=n.maskId,s=n.transform,f=a.width,l=a.icon,u=i.width,m=i.icon,p=en({transform:s,containerWidth:u,iconWidth:f}),d={tag:"rect",attributes:o({},rn,{fill:"white"})},h=l.children?{children:l.children.map(an)}:{},y={tag:"g",attributes:o({},p.inner),children:[an(o({tag:l.tag,attributes:o({},l.attributes,p.path)},h))]},g={tag:"g",attributes:o({},p.outer),children:[y]},b="mask-".concat(c||Q()),v="clip-".concat(c||Q()),w={tag:"mask",attributes:o({},rn,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,g]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(t=m,"g"===t.tag?t.children:[t])},w]};return e.push(O,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(b,")")},rn)}),{children:e,attributes:r}}(_):function(n){var t=n.children,e=n.attributes,r=n.main,a=n.transform,i=nn(n.styles);if(i.length>0&&(e.style=i),tn(a)){var c=en({transform:a,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:o({},c.outer),children:[{tag:"g",attributes:o({},c.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:o({},r.icon.attributes,c.path)}]}]})}else t.push(r.icon);return{children:t,attributes:e}}(_),P=E.children,A=E.attributes;return _.children=P,_.attributes=A,s?function(n){var t=n.prefix,e=n.iconName,r=n.children,a=n.attributes,i=n.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o({},a,{id:!0===i?"".concat(t,"-").concat(j.familyPrefix,"-").concat(e):i}),children:r}]}]}(_):function(n){var t=n.children,e=n.main,r=n.mask,a=n.attributes,i=n.styles,c=n.transform;if(tn(c)&&e.found&&!r.found){var s={x:e.width/e.height/2,y:.5};a.style=nn(o({},i,{"transform-origin":"".concat(s.x+c.x/16,"em ").concat(s.y+c.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}(_)}var cn=function(){},sn=(j.measurePerformance&&y&&y.mark&&y.measure,function(n,t,e,r){var a,i,o,c=Object.keys(n),s=c.length,f=void 0!==r?function(n,t){return function(e,r,a,i){return n.call(t,e,r,a,i)}}(t,r):t;for(void 0===e?(a=1,o=n[c[0]]):(a=0,o=e);a<s;a++)o=f(o,n[i=c[a]],i,n);return o});function fn(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.skipHooks,a=void 0!==r&&r,i=Object.keys(t).reduce((function(n,e){var r=t[e];return!!r.icon?n[r.iconName]=r.icon:n[e]=r,n}),{});"function"!=typeof P.hooks.addPack||a?P.styles[n]=o({},P.styles[n]||{},i):P.hooks.addPack(n,i),"fas"===n&&fn("fa",t)}var ln=P.styles,un=P.shims,mn=function(){var n=function(n){return sn(ln,(function(t,e,r){return t[r]=sn(e,n,{}),t}),{})};n((function(n,t,e){return t[3]&&(n[t[3]]=e),n})),n((function(n,t,e){var r=t[2];return n[e]=e,r.forEach((function(t){n[t]=e})),n}));var t="far"in ln;sn(un,(function(n,e){var r=e[0],a=e[1],i=e[2];return"far"!==a||t||(a="fas"),n[r]={prefix:a,iconName:i},n}),{})};mn();P.styles;function pn(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}function dn(n){var t=n.tag,e=n.attributes,r=void 0===e?{}:e,a=n.children,i=void 0===a?[]:a;return"string"==typeof n?$(n):"<".concat(t," ").concat(function(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,'="').concat($(n[e]),'" ')}),"").trim()}(r),">").concat(i.map(dn).join(""),"</").concat(t,">")}var hn=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n?n.toLowerCase().split(" ").reduce((function(n,t){var e=t.toLowerCase().split("-"),r=e[0],a=e.slice(1).join("-");if(r&&"h"===a)return n.flipX=!0,n;if(r&&"v"===a)return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(r){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a}return n}),t):t};function yn(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=(new Error).stack}yn.prototype=Object.create(Error.prototype),yn.prototype.constructor=yn;var gn={fill:"currentColor"},bn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},vn={tag:"path",attributes:o({},gn,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},wn=o({},bn,{attributeName:"opacity"});o({},gn,{cx:"256",cy:"364",r:"28"}),o({},bn,{attributeName:"r",values:"28;14;28;28;14;28;"}),o({},wn,{values:"1;0;1;1;0;1;"}),o({},gn,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),o({},wn,{values:"1;0;0;0;0;1;"}),o({},gn,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),o({},wn,{values:"0;0;1;1;0;0;"}),P.styles;function On(n){var t=n[0],e=n[1],r=c(n.slice(4),1)[0];return{found:!0,width:t,height:e,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(j.familyPrefix,"-").concat(k.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(k.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(k.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}P.styles;function kn(){var n="fa",t=b,e=j.familyPrefix,r=j.replacementClass,a='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if(e!==n||r!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),c=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(c,".".concat(r))}return a}var xn=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.definitions={}}var t,e,r;return t=n,e=[{key:"add",value:function(){for(var n=this,t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var a=e.reduce(this._pullDefinitions,{});Object.keys(a).forEach((function(t){n.definitions[t]=o({},n.definitions[t]||{},a[t]),fn(t,a[t]),mn()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,t){var e=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(e).map((function(t){var r=e[t],a=r.prefix,i=r.iconName,o=r.icon;n[a]||(n[a]={}),n[a][i]=o})),n}}],e&&a(t.prototype,e),r&&a(t,r),n}();function _n(){j.autoAddCss&&!zn&&(J(kn()),zn=!0)}function jn(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map((function(n){return dn(n)}))}}),Object.defineProperty(n,"node",{get:function(){if(g){var t=h.createElement("div");return t.innerHTML=n.html,t.children}}}),n}function En(n){var t=n.prefix,e=void 0===t?"fa":t,r=n.iconName;if(r)return pn(An.definitions,e,r)||pn(P.styles,e,r)}var Pn,An=new xn,zn=!1,Mn={transform:function(n){return hn(n)}},Sn=(Pn=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.transform,r=void 0===e?Z:e,a=t.symbol,i=void 0!==a&&a,c=t.mask,s=void 0===c?null:c,f=t.maskId,l=void 0===f?null:f,u=t.title,m=void 0===u?null:u,p=t.titleId,d=void 0===p?null:p,h=t.classes,y=void 0===h?[]:h,g=t.attributes,b=void 0===g?{}:g,v=t.styles,w=void 0===v?{}:v;if(n){var O=n.prefix,k=n.iconName,x=n.icon;return jn(o({type:"icon"},n),(function(){return _n(),j.autoA11y&&(m?b["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(d||Q()):(b["aria-hidden"]="true",b.focusable="false")),on({icons:{main:On(x),mask:s?On(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:k,transform:o({},Z,r),symbol:i,title:m,maskId:l,titleId:d,extra:{attributes:b,styles:w,classes:y}})}))}},function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=(n||{}).icon?n:En(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:En(r||{})),Pn(e,o({},t,{mask:r}))}),Cn=e(5697),In=e.n(Cn),Tn=e(7294);function Nn(n){return Nn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Nn(n)}function Ln(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Dn(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function Rn(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?Dn(Object(e),!0).forEach((function(t){Ln(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Dn(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function Wn(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}function Yn(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Fn(n){return t=n,(t-=0)==t?n:(n=n.replace(/[\-_\s]+(.)?/g,(function(n,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+n.substr(1);var t}function Xn(n){return n.split(";").map((function(n){return n.trim()})).filter((function(n){return n})).reduce((function(n,t){var e,r=t.indexOf(":"),a=Fn(t.slice(0,r)),i=t.slice(r+1).trim();return a.startsWith("webkit")?n[(e=a,e.charAt(0).toUpperCase()+e.slice(1))]=i:n[a]=i,n}),{})}var Un=!1;try{Un=!0}catch(Vn){}function Bn(n){return n&&"object"===Nn(n)&&n.prefix&&n.iconName&&n.icon?n:Mn.icon?Mn.icon(n):null===n?null:n&&"object"===Nn(n)&&n.prefix&&n.iconName?n:Array.isArray(n)&&2===n.length?{prefix:n[0],iconName:n[1]}:"string"==typeof n?{prefix:"fas",iconName:n}:void 0}function Hn(n,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ln({},n,t):{}}function Gn(n){var t=n.forwardedRef,e=Wn(n,["forwardedRef"]),r=e.icon,a=e.mask,i=e.symbol,o=e.className,c=e.title,s=e.titleId,f=Bn(r),l=Hn("classes",[].concat(Yn(function(n){var t,e=n.spin,r=n.pulse,a=n.fixedWidth,i=n.inverse,o=n.border,c=n.listItem,s=n.flip,f=n.size,l=n.rotation,u=n.pull,m=(Ln(t={"fa-spin":e,"fa-pulse":r,"fa-fw":a,"fa-inverse":i,"fa-border":o,"fa-li":c,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(f),null!=f),Ln(t,"fa-rotate-".concat(l),null!=l&&0!==l),Ln(t,"fa-pull-".concat(u),null!=u),Ln(t,"fa-swap-opacity",n.swapOpacity),t);return Object.keys(m).map((function(n){return m[n]?n:null})).filter((function(n){return n}))}(e)),Yn(o.split(" ")))),u=Hn("transform","string"==typeof e.transform?Mn.transform(e.transform):e.transform),m=Hn("mask",Bn(a)),p=Sn(f,Rn({},l,{},u,{},m,{symbol:i,title:c,titleId:s}));if(!p)return function(){var n;!Un&&console&&"function"==typeof console.error&&(n=console).error.apply(n,arguments)}("Could not find icon",f),null;var d=p.abstract,h={ref:t};return Object.keys(e).forEach((function(n){Gn.defaultProps.hasOwnProperty(n)||(h[n]=e[n])})),qn(d[0],h)}Gn.displayName="FontAwesomeIcon",Gn.propTypes={border:In().bool,className:In().string,mask:In().oneOfType([In().object,In().array,In().string]),fixedWidth:In().bool,inverse:In().bool,flip:In().oneOf(["horizontal","vertical","both"]),icon:In().oneOfType([In().object,In().array,In().string]),listItem:In().bool,pull:In().oneOf(["right","left"]),pulse:In().bool,rotation:In().oneOf([0,90,180,270]),size:In().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:In().bool,symbol:In().oneOfType([In().bool,In().string]),title:In().string,transform:In().oneOfType([In().string,In().object]),swapOpacity:In().bool},Gn.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var qn=function n(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e)return e;var a=(e.children||[]).map((function(e){return n(t,e)})),i=Object.keys(e.attributes||{}).reduce((function(n,t){var r=e.attributes[t];switch(t){case"class":n.attrs.className=r,delete e.attributes.class;break;case"style":n.attrs.style=Xn(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?n.attrs[t.toLowerCase()]=r:n.attrs[Fn(t)]=r}return n}),{attrs:{}}),o=r.style,c=void 0===o?{}:o,s=Wn(r,["style"]);return i.attrs.style=Rn({},i.attrs.style,{},c),t.apply(void 0,[e.tag,Rn({},i.attrs,{},s)].concat(Yn(a)))}.bind(null,Tn.createElement)},3905:function(n,t,e){e.d(t,{Zo:function(){return l},kt:function(){return p}});var r=e(7294);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function c(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var s=r.createContext({}),f=function(n){var t=r.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},l=function(n){var t=f(n.components);return r.createElement(s.Provider,{value:t},n.children)},u={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(n,t){var e=n.components,a=n.mdxType,i=n.originalType,s=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),m=f(e),p=a,d=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return e?r.createElement(d,o(o({ref:t},l),{},{components:e})):r.createElement(d,o({ref:t},l))}));function p(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var i=e.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=n,c.mdxType="string"==typeof n?n:a,o[1]=c;for(var f=2;f<i;f++)o[f]=e[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"}}]);