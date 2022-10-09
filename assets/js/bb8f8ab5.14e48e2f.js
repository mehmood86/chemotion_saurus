"use strict";(self.webpackChunkchemotion_saurus=self.webpackChunkchemotion_saurus||[]).push([[7427],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"device_configuration",slug:"device_configuration",title:"Data transfer configurations"},o=void 0,l={unversionedId:"eln/devices/device_configuration",id:"eln/devices/device_configuration",title:"Data transfer configurations",description:"This page is still being edited and reviewed.",source:"@site/docs/eln/devices/device_configuration.mdx",sourceDirName:"eln/devices",slug:"/eln/devices/device_configuration",permalink:"/chemotionsaurus/docs/eln/devices/device_configuration",draft:!1,editUrl:"https://github.com/ComPlat/chemotion_saurus/edit/master/docs/eln/devices/device_configuration.mdx",tags:[],version:"current",lastUpdatedBy:"Tasnim Mehzabin",lastUpdatedAt:1665339423,formattedLastUpdatedAt:"Oct 9, 2022",frontMatter:{id:"device_configuration",slug:"device_configuration",title:"Data transfer configurations"},sidebar:"elnSidebar",previous:{title:"Remote Device Control",permalink:"/chemotionsaurus/docs/eln/devices/remote_device_control"},next:{title:"Bruker NMR spectrometers",permalink:"/chemotionsaurus/docs/eln/devices_nmr"}},c={},s=[],u={toc:s};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Info",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This page is still being edited and reviewed.")),(0,a.kt)("p",null,"Data transfer is an integral part of device integration. The device integration protocol generally enables the\nremote access and transfer of data. Both these can be set up separately, with neither relying on the other."),(0,a.kt)("p",null,"There are basically two approaches for the data transfer configurations,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Automatic data transfer"),(0,a.kt)("li",{parentName:"ul"},"Manual transfer")),(0,a.kt)("p",null,"While the manual transfer refers to manually collecting, generally using a USB storage device, there are several\napproaches for the automatic transfer as follows,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"transferring data through ",(0,a.kt)("strong",{parentName:"li"},"email provider")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"exe")," running as a program"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"powershell script")," running as a background service"),(0,a.kt)("li",{parentName:"ul"},"macro")),(0,a.kt)("p",null,"In this part we mostly discuss the configurations required to run exe as a program to collect the data automatically.\nInitially we have to generate an exe file with custom input fields specifying the source, destination along with other\nsome other configuration data. We can generate the exe file from the ",(0,a.kt)("a",{parentName:"p",href:"http://193.196.38.127/"},"EFW builder"),". It is a\nservice which generates the exe in a secured manner. Though user registration is not allowed currently, nq  ew users can be\ncreated upon contacting the admin of the EFW builder."),(0,a.kt)("p",null,"The rest of the configurations are as follows,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Login to the EFW builder at ",(0,a.kt)("a",{parentName:"li",href:"http://193.196.38.127/"},"http://193.196.38.127/")),(0,a.kt)("li",{parentName:"ul"},"Create a new EFW executable file by with all necessary inputs")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"device_configuration_1",src:n(9559).Z,width:"1349",height:"907"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the executable file."),(0,a.kt)("li",{parentName:"ul"},"(Optional) Copy the efw.exe to the target directory on your target machine"),(0,a.kt)("li",{parentName:"ul"},"Create a Scheduled Task to trigger at startup",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Copy the task_example.vbs into the startup directory",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Hint: Windows Key + R to open run and type shell:startup. This will open Task Scheduler"))),(0,a.kt)("li",{parentName:"ul"},"Replace the full path of the executable file in the script"),(0,a.kt)("li",{parentName:"ul"},"After restarting the computer, check from Task Manager if the schedule task is created and the application\nprocess is running")))),(0,a.kt)("admonition",{title:"NB",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"After editing the scheduling script, the computer needs to be restarted")))}p.isMDXComponent=!0},9559:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/device_configuration_1-b1bf2b9d8fabcd744ea1b5bb12957c4f.png"}}]);