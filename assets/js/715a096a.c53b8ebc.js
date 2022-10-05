"use strict";(self.webpackChunkchemotion_saurus=self.webpackChunkchemotion_saurus||[]).push([[9905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),m=l(n),p=i,u=m["".concat(c,".").concat(p)]||m[p]||d[p]||a;return n?o.createElement(u,s(s({ref:t},h),{},{components:n})):o.createElement(u,s({ref:t},h))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=n(7462),i=(n(7294),n(3905));const a={id:"devices_sec",slug:"devices_sec",title:"SEC Device"},s=void 0,r={unversionedId:"eln/devices/devices_sec",id:"eln/devices/devices_sec",title:"SEC Device",description:"In this guideline, we have explained the integration process of the SEC-THF and SEC-DMAC devices into the Chemotion",source:"@site/docs/eln/devices/devices_sec.mdx",sourceDirName:"eln/devices",slug:"/eln/devices/devices_sec",permalink:"/chemotionsaurus/docs/eln/devices/devices_sec",draft:!1,editUrl:"https://github.com/ComPlat/chemotion_saurus/edit/master/docs/eln/devices/devices_sec.mdx",tags:[],version:"current",lastUpdatedBy:"Tasnim Mehzabin",lastUpdatedAt:1664979614,formattedLastUpdatedAt:"Oct 5, 2022",frontMatter:{id:"devices_sec",slug:"devices_sec",title:"SEC Device"},sidebar:"elnSidebar",previous:{title:"Magritek NMR Integration",permalink:"/chemotionsaurus/docs/eln/devices/devices_nmr_magritek"},next:{title:"Low Temperature DSC Device",permalink:"/chemotionsaurus/docs/eln/devices/devices_dsc"}},c={},l=[{value:"Specifications of the SEC PC",id:"specifications-of-the-sec-pc",level:2},{value:"Remote Device Control",id:"remote-device-control",level:2},{value:"Configurations in SEC PC",id:"configurations-in-sec-pc",level:3},{value:"Configurations in Chemotion ELN",id:"configurations-in-chemotion-eln",level:3},{value:"Data transfer",id:"data-transfer",level:2},{value:"Configurations in SEC PC",id:"configurations-in-sec-pc-1",level:3},{value:"Configurations in Chemotion ELN",id:"configurations-in-chemotion-eln-1",level:3}],h={toc:l};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this guideline, we have explained the integration process of the SEC-THF and SEC-DMAC devices into the Chemotion\nELN. This procedure enables remote access to the PC connected to the devices, which runs PSS winGPC and also the\ntransfer of the experiment data to the Chemotion ELN\u2019s inbox. Both of the devices in this situation are connected to a\nsingle PC that is running a single software."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"General preparation aspects can be found here:"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.chemotion.net/chemotionsaurus/docs/eln/devices#general-preparation-aspects"},"https://www.chemotion.net/chemotionsaurus/docs/eln/devices#general-preparation-aspects"))),(0,i.kt)("p",null,"Considering all these aspects, this procedure has been conducted on the following system configurations. However it is\nlikely to work on systems with different software versions as well."),(0,i.kt)("h2",{id:"specifications-of-the-sec-pc"},"Specifications of the SEC PC"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Operating system: Windows 10"),(0,i.kt)("li",{parentName:"ul"},"Software Name: PSS winGPC (Version: 8.33)"),(0,i.kt)("li",{parentName:"ul"},"Connected to Internet/Intranet: Yes"),(0,i.kt)("li",{parentName:"ul"},"Data files generated: Text files (.txt)"),(0,i.kt)("li",{parentName:"ul"},"Static IP address has been configured")),(0,i.kt)("h1",{id:"objectives"},"Objectives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remote Device Control"),(0,i.kt)("li",{parentName:"ul"},"Data transfer to Chemotion ELN inbox")),(0,i.kt)("p",null,"For the SEC device integration, we have decided to configure both these features."),(0,i.kt)("h1",{id:"configurations"},"Configurations"),(0,i.kt)("h2",{id:"remote-device-control"},"Remote Device Control"),(0,i.kt)("p",null,"Users will have access to the SEC PC via the Chemotion ELN. The SEC PC and the Chemotion ELN must be linked to the same\nLAN in order to accomplish this. The LAN's firewall also needs to allow the establishment of VNC connections."),(0,i.kt)("h3",{id:"configurations-in-sec-pc"},"Configurations in SEC PC"),(0,i.kt)("p",null,"This has been achieved by the installation of the software, ",(0,i.kt)("a",{parentName:"p",href:"https://www.tightvnc.com/download.php"},"TightVNC")," (Installer\nfor Windows, 64-bit). Users can access the computer remotely through Chemotion ELN through this. We have to configure it\nas follows,"),(0,i.kt)("p",null,"On the setup screen, we have to select the TightVNC server to be installed, along with the setting of the passwords for\nremote access and administrative password."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"devices_NMR_magritek_1",src:n(4653).Z,width:"557",height:"421"}),"\n",(0,i.kt)("img",{alt:"devices_NMR_magritek_2",src:n(8353).Z,width:"709",height:"465"})),(0,i.kt)("p",null,"After the installation, we have to make sure it is accepting incoming connections at port 5900 and also for added\nsecurity, we have to whitelist the IP address of the Chemotion ELN only. In addition, we choose the option that requires\nthe administrative password for every operation or change."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"devices_NMR_magritek_3",src:n(3176).Z,width:"651",height:"580"}),"\n",(0,i.kt)("img",{alt:"devices_NMR_magritek_4",src:n(9981).Z,width:"681",height:"591"}),"\n",(0,i.kt)("img",{alt:"devices_NMR_magritek_5",src:n(2278).Z,width:"654",height:"596"})),(0,i.kt)("h3",{id:"configurations-in-chemotion-eln"},"Configurations in Chemotion ELN"),(0,i.kt)("p",null,"There are basically two types of configurations we have to perform in Chemotion ELN,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As an admin of Chemotion ELN: As an admin of Chemotion ELN, we have to create a device instance corresponding to SEC\nPC and configure the NoVNC settings for it with a token."),(0,i.kt)("li",{parentName:"ul"},"As an admin of the group which the device belongs to:  As an admin of the group to which the device instance belongs\n(it was specified by the Chemotion admin while creating the device instance), we have to make sure that the user belongs\nto the group in Chemotion ELN in order to get access to the device.")),(0,i.kt)("p",null,"For a user who is in the group, the user has to log in to the Chemotion ELN at\n",(0,i.kt)("a",{parentName:"p",href:"https://complat-eln.ioc.kit.edu/home"},"https://complat-eln.ioc.kit.edu/home"),". Then he can access the device as follows,"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"devices_NMR_magritek_7",src:n(3283).Z,width:"1513",height:"800"})),(0,i.kt)("p",null,"For further information regarding the VNC settings, see the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/eln/settings#vnc"},"VNC settings page")),(0,i.kt)("h2",{id:"data-transfer"},"Data transfer"),(0,i.kt)("p",null,"Data will automatically be transferred to the Chemotion ELN once the data has been saved locally on the computer. The\nuser only needs to make sure to name the output file according to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/eln/devices#name-conventions"},"naming convention"),"\nbefore saving it to the local machine."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please take care that you communicate name conventions to all users of the Chemotion ELN:\n",(0,i.kt)("a",{parentName:"p",href:"https://www.chemotion.net/chemotionsaurus/docs/eln/devices#name-conventions"},"https://www.chemotion.net/chemotionsaurus/docs/eln/devices#name-conventions"))),(0,i.kt)("h3",{id:"configurations-in-sec-pc-1"},"Configurations in SEC PC"),(0,i.kt)("p",null,"The SEC PC and the Chemotion ELN both need access to a common network storage location. This can be set up on a\nthird-party storage (a NAS server, shared storage of another PC etc.) or it can be set up locally on the SEC PC. In this\ncase, the LSDF storage service from KIT has been used."),(0,i.kt)("p",null,"We need to download an executable file from the ",(0,i.kt)("a",{parentName:"p",href:"http://193.196.38.127/"},"EFW builder")," that will run on the computer to\ntransfer data from a predefined source (local location on the computer) to a destination (LSDF server in this case)\nand schedule a task at startup so that the process keeps running on the computer. Details can be found\n",(0,i.kt)("a",{parentName:"p",href:"/eln/device_configuration.mdx"},"here"),"."),(0,i.kt)("p",null,"In this step, we have to restart the PC for the scheduler to run."),(0,i.kt)("h3",{id:"configurations-in-chemotion-eln-1"},"Configurations in Chemotion ELN"),(0,i.kt)("p",null,"The Chemotion ELN\u2019s data collector has to be configured to collect data of the SEC device from the network location."),(0,i.kt)("p",null,"As for the file collector mechanism, there are two options."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Collecting attachment files from emails"),(0,i.kt)("li",{parentName:"ul"},"Collecting file or folder from local drives or over SCP")),(0,i.kt)("p",null,"Here in this guide we have used the second mechanism where the files are collected from remote storage locations and are\ndistributed to specific users based on the file-name matching the name abbreviation of the user."),(0,i.kt)("admonition",{title:"See details",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/docs/eln/settings#file-collection"},"File collector setting page"))))}d.isMDXComponent=!0},3283:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devices_sec_1-89d94777ac072c33f712247e2304d29b.png"},4653:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devices_nmr_magritek_1-c3fbdc0c9126c1119ca0c347e0dc5111.png"},8353:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devices_nmr_magritek_2-250ca3f2ad026c60ca84d699e3698648.png"},3176:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devices_nmr_magritek_3-c9913f14aef7d3b87379b237936bae68.png"},9981:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devices_nmr_magritek_4-c27a2441ec4c02454117d5c4b29ad1c2.png"},2278:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devices_nmr_magritek_5-a2c6b0b2e65f9ef640cb47a5d17c8695.png"}}]);