"use strict";(self.webpackChunkchemotion_saurus=self.webpackChunkchemotion_saurus||[]).push([[2742],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,f=u["".concat(l,".").concat(m)]||u[m]||h[m]||i;return a?o.createElement(f,n(n({ref:t},d),{},{components:a})):o.createElement(f,n({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,n[1]=s;for(var c=2;c<i;c++)n[c]=a[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=a(7462),r=(a(7294),a(3905));const i={id:"devices",slug:"devices",title:"Devices overview"},n=void 0,s={unversionedId:"eln/devices",id:"eln/devices",title:"Devices overview",description:"General concept",source:"@site/docs/eln/devices.mdx",sourceDirName:"eln",slug:"/eln/devices",permalink:"/chemotionsaurus/docs/eln/devices",draft:!1,editUrl:"https://github.com/ComPlat/chemotion_saurus/edit/master/docs/eln/devices.mdx",tags:[],version:"current",lastUpdatedBy:"Tasnim Mehzabin",lastUpdatedAt:1664984564,formattedLastUpdatedAt:"Oct 5, 2022",frontMatter:{id:"devices",slug:"devices",title:"Devices overview"},sidebar:"elnSidebar",previous:{title:"Device integration",permalink:"/chemotionsaurus/docs/category/device-integration"},next:{title:"List of enabled devices",permalink:"/chemotionsaurus/docs/eln/devices/devices_integrated"}},l={},c=[{value:"General concept",id:"general-concept",level:2},{value:"General Preparation aspects",id:"general-preparation-aspects",level:3},{value:"Name conventions",id:"name-conventions",level:3},{value:"Mail-collector",id:"mail-collector",level:3},{value:"Datacollectors for devices with LAN/WLAN",id:"datacollectors-for-devices-with-lanwlan",level:3}],d={toc:c};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"general-concept"},"General concept"),(0,r.kt)("p",null,"The principles for device integration are described in: ",(0,r.kt)("a",{parentName:"p",href:"https://doi.org/10.1016/j.acax.2019.100007"},"https://doi.org/10.1016/j.acax.2019.100007"),"\nSeveral descriptions and images are derived from the above mentioned manuscript published in Analytica Chimica Acta X and the assigned supplemental information."),(0,r.kt)("p",null,"Referring to the diverse origin of data in chemistry labs, we implemented three different procedures to allow the availability of data to the Chemotion ELN server (Figure 1). The first procedure includes the transfer of data (preferably small data) by a mailing system which manages the capture of NMR data and additional information that is sent by mail to the email account of the Chemotion ELN. A second procedure was designed for the transfer of data from a local server or computer with network connection to the Chemotion ELN server. The last procedure was implemented for the transfer of data from devices without network access (due to safety standards, location issues or software-related issues). For the transfer of data from devices without network connectivity, we implemented a procedure which requires the manual collection of data (for example with a portable data storage e.g. an USB flash drive) and its transfer to the Chemotion ELN via WinSCP running on a computer with network connection."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"concept_transfer_neu",src:a(873).Z,width:"1410",height:"773"})),(0,r.kt)("b",null,"Figure 1:")," Overview of the three procedures to integrate research data from (analytical) devices to an Chemotion ELN. The given analytical methods are chosen as examples to illustrate the procedure. They can be exchanged depending on the local infrastructure.",(0,r.kt)("p",null,"General requirements concern in general the device and Chemotion ELN specific adaptations, therefore, the following documentation contains always aspects of Chemotion ELN setting adaptation and device specific settings.\nThe Chemotion ELN specific adjustments depend on the use of a mail-collector (used to collect data transferred by email to a mail-server) or a datacollector (used to collect data transferred to a server)  as a basic process for the desired data transfer."),(0,r.kt)("h3",{id:"general-preparation-aspects"},"General Preparation aspects"),(0,r.kt)("p",null,"Primarily the integration of devices depends on several factors as,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Operating system of the PC"),(0,r.kt)("li",{parentName:"ul"},"Vendor software of the device"),(0,r.kt)("li",{parentName:"ul"},"Network connection (What IP address and what type of network)"),(0,r.kt)("li",{parentName:"ul"},"File types etc")),(0,r.kt)("p",null,"Some basic requirements to integrate the devices are as follows,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Operating system: Windows (Minimum Windows XP. No Windows 98 or Windows 95), preferably Windows 10 or Windows 11.\nLinux based system is also possible"),(0,r.kt)("li",{parentName:"ul"},"Network: Access to the KIT intranet. Either a static IP address or FQDN (fully qualified domain name) is required"),(0,r.kt)("li",{parentName:"ul"},"Administrator rights to the system\u2019s operating system")),(0,r.kt)("h3",{id:"name-conventions"},"Name conventions"),(0,r.kt)("p",null,'To be able to transfer data and assign data to a users Chemotion ELN-account, users have to follow strict rules regarding the labels/names of maeasurements.\nMeasurements have to be submitted in a form:\n(1) "UserShortLabel"-"number""additional" or (2) "groupID""UserShortLabel"-"number""additional"'),(0,r.kt)("p",null,'"UserShortLabel" = Label for each user given by registration to the Chemotion ELN'),(0,r.kt)("p",null,'"number" = any integer'),(0,r.kt)("p",null,'"additional" = any additional information. Valid are numbers, letters (case insensitive), hyphens.'),(0,r.kt)("p",null,'"groupID" = number given as identifier for a distinct user group in the Chemotion ELN.'),(0,r.kt)("p",null,"Examples for (1): NJ-101; NJ-101-A; NJ-101-5; NJ-101_pure; ABCD-1234-B\nAlso, if many groups are using the Chemotion ELN, a groupID may help to sort users and therefore their measurements according to a group ID. The measurements should then be named according to examples (2): 2NJ-101; 2NJ-101-A; 2NJ-101-5; 2NJ-101_pure; 2ABCD-1234-B.\nPlease take care that the hyphen is included!"),(0,r.kt)("h3",{id:"mail-collector"},"Mail-collector"),(0,r.kt)("p",null,"One of the easiest possibilities to transfer data to a management system such as the Chemotion ELN is to send data per email. The software of some analytical devices support the mailing of measurements to a user defined email address by default. This allows to implement storage routines that are independent of any additional software or hardware on the instrument\u2019s side. The only prerequisite for a use of the MailCollector routine is fulfilled if one can set the email to be send to two addresses, to the Chemotion ELN server associated email address and to the user\u2019s email address registered with the corresponding Chemotion ELN account (Figure 2). This is necessary to identify the target of the mailed information and the corresponding account in the Chemotion ELN. In short, four configuration steps are necessary to fetch the information via email:"),(0,r.kt)("p",null,"\u2022\tFirst, it is necessary to have an email account for the Chemotion ELN with any provider or server that supports Internet Message Access Protocol (IMAP) to centrally collect the emailed data."),(0,r.kt)("p",null,"\u2022\tSecond, the device software has to be configured to send the data to the user\u2019s (scientist\u2019s) email account as a main recipient and to this Chemotion ELN email address as a main recipient or in cc."),(0,r.kt)("p",null,"\u2022\tThird, the devices sending emails should be whitelisted by the Chemotion ELN server. For this, the devices information is persisted in the Chemotion ELN DB as \u2018device\u2019 entities. The device class is a subclass of the Chemotion ELN User class and each device\u2019s email can then be registered (step 3, Figure 2)."),(0,r.kt)("p",null,"\u2022\tThe last step for the implementation of the mailing routine is the activation of the MailCollector service within the Chemotion ELN (this is also done by the administrator of the Chemotion ELN server). For this, the credentials (email address and password) and email server IMAP settings for the Chemotion ELN mail account as well as the cron time schedule parameters are configured (step 4, Figure 2)."),(0,r.kt)("p",null,"The MailCollector (see Figure 2 for the used routine) screens the Chemotion ELN account for new emails and processes the data subsequently. The processing follows the routine: inspect \u2013 store \u2013 delete. New emails are inspected with respect to the sender (device) and the recipient (user). If both are known to the MailCollector, the service adds the data in the email\u2019s attachment to the Chemotion ELN server and deletes the mail from the inbox of the Chemotion ELN email account. The MailCollector can be used e.g. for the transfer of NMR data from Burker instruments."),(0,r.kt)("p",null,"Additionally, the mailing procedure is very helpful if the information to be added to an Chemotion ELN is captured with a mobile device or is available on a computer. In this manner, almost all data, independent of its origin, can be transferred to the Chemotion ELN. The only step necessary for this procedure is sending an email (using the same email address the user is registered within the Chemotion ELN) to the Chemotion ELN\u2019s email account. Data that is attached to the email will be processed according to the MailCollector as described above and will be assigned to the user Chemotion ELN account according to the email address of the sender (Figure 2)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"data_mail",src:a(2496).Z,width:"1699",height:"581"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"config_mail",src:a(3640).Z,width:"1454",height:"404"})),(0,r.kt)("b",null,"Figure 2:")," Data collection via the MailCollector routine implemented exemplarily for Bruker NMR spectrometers and additional information sent by email. Configuring the data transfer via the MailCollector.",(0,r.kt)("h3",{id:"datacollectors-for-devices-with-lanwlan"},"Datacollectors for devices with LAN/WLAN"),(0,r.kt)("p",null,"There are two possibilities to enable an automatic transfer of data to the  Chemotion ELN from devices that store data on a local computer or server. Either the data is actively transferred via a client application from the local computer/server to the  Chemotion ELN server or the  Chemotion ELN server directly accesses the device data storage folder. The first solution requires more efforts for the installation and maintenance of several client applications, therefore, we followed a central solution (Figure 3A) where both, the device computer and the  Chemotion ELN server, have access to a common storage. Considering the availability of transfer software packages for the server and for the device computers, we focused on SFTP over NFS, CIFS/SAMBA, FTPS to securely transfer files. SFTP is relatively well supported and free third-party software and can be found even for legacy operation systems (OS) such as windows XP. Though the latter OS supports mapping of the network drive, the obsolete and unsafe SMBv1 protocol cannot be accepted. Having such an OS in a network is nowadays a high security issue. These issues can be circumvented by entirely isolating the computer and device network and configuring a firewall exception for ssh communication with the external remote storage.\nTo allow the Chemotion ELN to access the data, four basic adaptions are implemented:"),(0,r.kt)("p",null,"\u2022\tIn a first step, the device has to be prepared to enable data storage on a remote folder (SFTP server) in addition to a data storage on a local computer or server. This configuration of the devices can be easily done if the instrument offers this option by default. In all other cases, a few changes have to be made according to the description given below in the subchapter \u201cnecessary device adaptions\u201d (step 1, Figure 3B)."),(0,r.kt)("p",null,"\u2022\tSecond, folders for each device are created on a remote network drive. File access credentials are also generated. In our implementation, the central storage was provided by the Large Scale Data Facility, LSDF, in Karlsruhe, and a read/write account was created for each device folder. The results of the measurements are mirrored on this central storage in the folder reserved for the device. In addition, a copy of the raw data is being kept locally (step 2, Figure 3B)."),(0,r.kt)("p",null,"\u2022\tIn a third step, the device information along with a specific profile are registered to the database of the Chemotion ELN as described in Procedure 1. The necessary information added to the new device entry in the DB includes the network drive (or server) for the remote folder, the corresponding path and the access credentials (step 3, Figure 3B)."),(0,r.kt)("p",null,"\u2022\tThe last step of the implantation consists of the activation of a DataCollector through the corresponding configuration file of the Chemotion ELN server (step 4, Figure 3B). Similar to the MailCollector, it requires a cron schedule type parameter at which the DataCollector becomes active. It also accepts the network credentials for sftp password authentication (instead of storing the passwords, it is also possible to configure rsa key authentication)."),(0,r.kt)("p",null,"With the DataCollector activated, all data stored on remote accounts are processed at the set times. This routine works for all instruments that are connected to the collector and belong to the devices that are registered in the Chemotion ELN. The DataCollector is a routine that works similar to the MailCollector described in Procedure 1, but uses, in contrast to the MailCollector, SFTP."),(0,r.kt)("p",null,"Two different DataCollector types (FileCollector and FolderCollector) were developed and are used depending on whether the device stores measurement data either as a single file or as a folder including a defined number of objects. The FileCollector reads single data files which were written into the predefined remote folder, while the FolderCollector inspects the remote folder of a device for new sub-folders (the codes of the FileCollector and FolderCollector are given in the Supporting Information). It is critical for this mode to know if the measurements have been completed and all files have been written. This can be achieved by defining the number of files that have to be present within a data folder for a completed measurement. If all data has been written, the expected file number is reached and the folder can be processed and assigned to an Chemotion ELN user. All files are compressed in a ZIP folder and become accessible through the Chemotion ELN account of the identified Chemotion ELN user."),(0,r.kt)("p",null,"To allow the assignment of the data collected by the DataCollectors to a specific Chemotion ELN user, only a few rules have to be respected: the name of the file has to start with a unique identifier registered with the Chemotion ELN user account. This identifier has to be separated from the experiment number via a hyphen or a period (e.g. JD-xyz for the registered user John Doe and a measurement xyz). If the initials can be assigned to a registered Chemotion ELN user, the data is registered in the Chemotion ELN account for the identified user. The processing of data by the DataCollectors follows the same routine \u201cinspect \u2013 store \u2013 delete\u201d as used in case of the MailCollector. All data that is found by the DataCollectors within the remote folders is transferred to the Chemotion ELN server and deleted from the remote folder. Deleting successfully transferred data is of high importance to maintain a good performance of the Chemotion ELN and data transfer server, as the amount and size of datasets increase with the running time and the resources required for their inspection increases as well. The deletion of the data in the remote folder is also done if no user of the Chemotion ELN can be assigned to the datasets. All changes are documented in a log file."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"manual_transfer",src:a(6059).Z,width:"1267",height:"869"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"config_manual",src:a(4903).Z,width:"1454",height:"394"})),(0,r.kt)("b",null,"Figure 3:")," Data collection via DataCollectors (FileCollector and FolderCollector) as implemented for the devices GC (MS), LC (MS), Raman and mass spectrometer (general labeling as Device 1 to Device 4). Right: Device configuration for data transfer via additional file copies as described in detail in the following chapter 4. Workflow of the installation of a data transfer routine via a DataCollector.")}h.isMDXComponent=!0},873:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/concept_transfer_neu-cfdf6c4fa158d7860559d6bd8843b34c.png"},3640:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/config_mail-26da0c7f5f433ab22491f483d98d5122.png"},4903:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/config_manual-e3bcc0b1bb28192a8ae4ea600a3cfe2c.png"},2496:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/data_mail-226e043d82515661ff06f0d249582b9f.png"},6059:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/manual_transfer-a94a83f9a416fc0750eb1d49c3c34979.png"}}]);