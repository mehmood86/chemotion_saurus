"use strict";(self.webpackChunkchemotion_saurus=self.webpackChunkchemotion_saurus||[]).push([[8683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=i,u=m["".concat(c,".").concat(p)]||m[p]||d[p]||a;return n?o.createElement(u,r(r({ref:t},h),{},{components:n})):o.createElement(u,r({ref:t},h))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),i=(n(7294),n(3905));const a={id:"devices_nmr_magritek",slug:"devices_nmr_magritek",title:"Magritek NMR Integration"},r=void 0,s={unversionedId:"eln/devices/devices_nmr_magritek",id:"eln/devices/devices_nmr_magritek",title:"Magritek NMR Integration",description:"This guide explains how to add Magritek NMR to the Chemotion ELN device pool. The protocol enables remote access to the",source:"@site/docs/eln/devices/devices_nmr_magritek.mdx",sourceDirName:"eln/devices",slug:"/eln/devices/devices_nmr_magritek",permalink:"/chemotionsaurus/docs/eln/devices/devices_nmr_magritek",draft:!1,editUrl:"https://github.com/ComPlat/chemotion_saurus/edit/master/docs/eln/devices/devices_nmr_magritek.mdx",tags:[],version:"current",lastUpdatedBy:"Tasnim Mehzabin",lastUpdatedAt:1664979614,formattedLastUpdatedAt:"Oct 5, 2022",frontMatter:{id:"devices_nmr_magritek",slug:"devices_nmr_magritek",title:"Magritek NMR Integration"},sidebar:"elnSidebar",previous:{title:"Bruker NMR spectrometers",permalink:"/chemotionsaurus/docs/eln/devices_nmr"},next:{title:"SEC Device",permalink:"/chemotionsaurus/docs/eln/devices/devices_sec"}},c={},l=[{value:"Specifications of the Magritek NMR device",id:"specifications-of-the-magritek-nmr-device",level:2},{value:"Remote Device Control",id:"remote-device-control",level:2},{value:"Configurations in NMR PC",id:"configurations-in-nmr-pc",level:3},{value:"Configurations in Chemotion ELN",id:"configurations-in-chemotion-eln",level:3},{value:"Data transfer",id:"data-transfer",level:2},{value:"Configurations in NMR PC",id:"configurations-in-nmr-pc-1",level:3},{value:"Configurations in Spinsolve",id:"configurations-in-spinsolve",level:3},{value:"Configurations in Chemotion ELN",id:"configurations-in-chemotion-eln-1",level:3}],h={toc:l};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide explains how to add Magritek NMR to the Chemotion ELN device pool. The protocol enables remote access to the\nPC running Spinsolve and the transfer of experiment data to the Chemotion ELN\u2019s inbox. Both these can be set up\nseparately, with neither relying on the other. The data transfer is configured for experiments conducted directly in\nSpinsolve."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"General preparation aspects can be found here:"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.chemotion.net/chemotionsaurus/docs/eln/devices#general-preparation-aspects"},"https://www.chemotion.net/chemotionsaurus/docs/eln/devices#general-preparation-aspects"))),(0,i.kt)("p",null,"Considering all these aspects, this procedure has been conducted on the following system configurations. However it is\nlikely to work on systems with different software versions as well."),(0,i.kt)("h2",{id:"specifications-of-the-magritek-nmr-device"},"Specifications of the Magritek NMR device"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Operating system: Windows 10"),(0,i.kt)("li",{parentName:"ul"},"Software Name: Spinsolve (Version: 2.0.1)"),(0,i.kt)("li",{parentName:"ul"},"Connected to Internet/Intranet: Yes"),(0,i.kt)("li",{parentName:"ul"},"Data files generated: 1D file (.1d)"),(0,i.kt)("li",{parentName:"ul"},"Static IP address has been configured")),(0,i.kt)("h1",{id:"objectives"},"Objectives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remote Device Control"),(0,i.kt)("li",{parentName:"ul"},"Data transfer to Chemotion ELN inbox")),(0,i.kt)("p",null,"For the NMR integration, we have decided to configure both these features."),(0,i.kt)("h1",{id:"configurations"},"Configurations"),(0,i.kt)("h2",{id:"remote-device-control"},"Remote Device Control"),(0,i.kt)("p",null,"Users will be able to access the NMR PC through the Chemotion ELN. For that we have to make sure that the NMR PC and the\nChemotion ELN are connected to a common LAN. Furthermore the firewall of the LAN needs to allow VNC connections to be\nestablished."),(0,i.kt)("h3",{id:"configurations-in-nmr-pc"},"Configurations in NMR PC"),(0,i.kt)("p",null,"This has been achieved by the installation of the software, ",(0,i.kt)("a",{parentName:"p",href:"https://www.tightvnc.com/download.php"},"TightVNC")," (Installer\nfor Windows, 64-bit). Users can access the computer remotely through Chemotion ELN through this. We have to configure it\nas follows,"),(0,i.kt)("p",null,"On the setup screen, we have to select the TightVNC server to be installed along with the set up of the passwords for\nremote access and administrative password."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"devices_NMR_magritek_1",src:n(4653).Z,width:"557",height:"421"}),"\n",(0,i.kt)("img",{alt:"devices_NMR_magritek_2",src:n(8353).Z,width:"709",height:"465"})),(0,i.kt)("p",null,"After installation, we have to make sure it is accepting incoming connections at port 5900 and also for added security,\nwe have to whitelist the IP address of the Chemotion ELN only. Also we select the option so that the administrative\npassword is needed to make any changes or for each operation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"devices_NMR_magritek_3",src:n(3176).Z,width:"651",height:"580"}),"\n",(0,i.kt)("img",{alt:"devices_NMR_magritek_4",src:n(9981).Z,width:"681",height:"591"}),"\n",(0,i.kt)("img",{alt:"devices_NMR_magritek_5",src:n(2278).Z,width:"654",height:"596"})),(0,i.kt)("h3",{id:"configurations-in-chemotion-eln"},"Configurations in Chemotion ELN"),(0,i.kt)("p",null,"There are basically two types of configurations we have to perform in Chemotion ELN,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As an admin of Chemotion ELN"),(0,i.kt)("li",{parentName:"ul"},"As an admin of the group which the device belongs to")),(0,i.kt)("p",null,"As an admin of Chemotion ELN, we have to create the device corresponding to Magritek NMR and configure the NoVNC settings\nfor it with a token."),(0,i.kt)("p",null,"On the other hand, as an admin of the group which the device belongs to, we have to make sure that the user belongs to the group in\nChemotion ELN in order to get access to the device. For example, in the screenshot below, any user who belongs to the\ngroup, Device Pool AK Theato in Chemotion ELN will have remote access to the device, Magritek NMR, in the campus West\nof KIT. If the user is not already in the group, then the group admin will have to add the user from Chemotion ELN."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"devices_NMR_magritek_6",src:n(2582).Z,width:"1528",height:"707"})),(0,i.kt)("p",null,"For a user who is in the group, the user has to log in to the Chemotion ELN at\n",(0,i.kt)("a",{parentName:"p",href:"https://complat-eln.ioc.kit.edu/home"},"https://complat-eln.ioc.kit.edu/home"),". Then he can access the device as follows,"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"devices_NMR_magritek_7",src:n(8947).Z,width:"1528",height:"768"}),"\n",(0,i.kt)("img",{alt:"devices_NMR_magritek_8",src:n(5828).Z,width:"1513",height:"768"})),(0,i.kt)("p",null,"For further information regarding the VNC settings, see the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/eln/settings#vnc"},"VNC settings page")),(0,i.kt)("h2",{id:"data-transfer"},"Data transfer"),(0,i.kt)("p",null,"Here transfer of the output file to Chemotion ELN will occur automatically after the experiment is completed and a new\ndata file is generated. User only needs to make sure to name the sample according to the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/eln/devices#name-conventions"},"naming convention"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please take care that you communicate name conventions to all users of the Chemotion ELN:\n",(0,i.kt)("a",{parentName:"p",href:"https://www.chemotion.net/chemotionsaurus/docs/eln/devices#name-conventions"},"https://www.chemotion.net/chemotionsaurus/docs/eln/devices#name-conventions"))),(0,i.kt)("h3",{id:"configurations-in-nmr-pc-1"},"Configurations in NMR PC"),(0,i.kt)("p",null,"The NMR's PC and the Chemotion ELN both need access to a common network storage location. This can be set up on a\nthird-party storage (a NAS server, shared storage of another PC etc) or it can be set up locally on the NMR PC."),(0,i.kt)("p",null,"In this case, the LSDF storage service from KIT has been used which has been later on mounted in the NMR\u2019s PC as a\nnetwork drive under Netzwerkadressen i.e. Network Address. For this guide, the LSDF folder was mounted as a network\ndrive of the NMR PC using the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.scc.kit.edu/lsdf/index.php/LSDF_Online_Storage:_SMB_/_CIFS#Using_SMB.2FCIFS_on_Windows"},"SMB/CIFS on Windows"),"\nconfigurations."),(0,i.kt)("h3",{id:"configurations-in-spinsolve"},"Configurations in Spinsolve"),(0,i.kt)("p",null,"We can see that the data is stored both locally and on a remote server when we look at Spinsolve's data storage options.\nNow as for the remote backup storage location, the network drive we created will be used. The Chemotion ELN also has\naccess to this storage location. The experiment data file will be automatically saved at this location besides the local\ndrive and  Chemotion ELN will be able to retrieve and transfer it to the appropriate user's inbox."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"devices_NMR_magritek_10",src:n(9410).Z,width:"1512",height:"981"})),(0,i.kt)("p",null,"To make sure that Chemotion ELN is able to transfer it to the appropriate user's inbox, we have to make sure the samples\nare named following the naming convention ",(0,i.kt)("a",{parentName:"p",href:"/docs/eln/devices#name-conventions"},"rules"),"."),(0,i.kt)("p",null,"Here the naming of the sample has started with the name abbreviation (K\xfcrzel) of a certain user to whom the experiment\ndata file will be sent."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"devices_NMR_magritek_11",src:n(1463).Z,width:"722",height:"704"})),(0,i.kt)("p",null,"Now data experiment data will be transferred to the network storage location so that the data collector of Chemotion\nELN can retrieve it from there."),(0,i.kt)("h3",{id:"configurations-in-chemotion-eln-1"},"Configurations in Chemotion ELN"),(0,i.kt)("p",null,"The Chemotion ELN\u2019s data collector has to be configured to collect data from the NMR from the network location."),(0,i.kt)("p",null,"As the file collector mechanism, there are two options."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Collecting attachment files from emails"),(0,i.kt)("li",{parentName:"ul"},"Collecting file or folder from local drives or over SCP")),(0,i.kt)("p",null,"Here in this guide we have used the second mechanism where the files are collected from remote storage locations and are\ndistributed to specific users based on the file-name matching the name abbreviation of the user."),(0,i.kt)("admonition",{title:"See details",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/docs/eln/settings#file-collection"},"File collector setting page"))))}d.isMDXComponent=!0},4653:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devices_nmr_magritek_1-c3fbdc0c9126c1119ca0c347e0dc5111.png"},9410:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devices_nmr_magritek_10-f52aeb24fab23f7e2f31e38e23fe345c.png"},1463:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devices_nmr_magritek_11-da34666a7ff183ec4a24f199d54c0823.png"},8353:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devices_nmr_magritek_2-250ca3f2ad026c60ca84d699e3698648.png"},3176:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devices_nmr_magritek_3-c9913f14aef7d3b87379b237936bae68.png"},9981:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devices_nmr_magritek_4-c27a2441ec4c02454117d5c4b29ad1c2.png"},2278:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devices_nmr_magritek_5-a2c6b0b2e65f9ef640cb47a5d17c8695.png"},2582:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devices_nmr_magritek_6-c5bad89376c9af7e6fb29cfe4b88ae52.png"},8947:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devices_nmr_magritek_7-b512e6eee9e38f72cd4efb5fd94d7029.png"},5828:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devices_nmr_magritek_8-4137d0f2f4b27c10b4e4d4d6652eaff4.png"}}]);