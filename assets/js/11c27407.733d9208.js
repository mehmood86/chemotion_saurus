"use strict";(self.webpackChunkchemotion_saurus=self.webpackChunkchemotion_saurus||[]).push([[1226],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=o,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||i;return a?r.createElement(d,n(n({ref:t},c),{},{components:a})):r.createElement(d,n({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var l=2;l<i;l++)n[l]=a[l];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2764:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(7462),o=(a(7294),a(3905));const i={id:"oa_oai_pmh",title:"OAI-PMH Service",slug:"oa_oai_pmh",author:"Claire Lin"},n=void 0,s={unversionedId:"repo/oa_oai_pmh",id:"repo/oa_oai_pmh",title:"OAI-PMH Service",description:"The OAI-PMH service is available",source:"@site/docs/repo/oa_oai_pmh.md",sourceDirName:"repo",slug:"/repo/oa_oai_pmh",permalink:"/chemotionsaurus/docs/repo/oa_oai_pmh",draft:!1,editUrl:"https://github.com/ComPlat/chemotion_saurus/edit/master/docs/repo/oa_oai_pmh.md",tags:[],version:"current",lastUpdatedBy:"Chia-Lin Lin",lastUpdatedAt:1665042936,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"oa_oai_pmh",title:"OAI-PMH Service",slug:"oa_oai_pmh",author:"Claire Lin"},sidebar:"repoSidebar",previous:{title:"Open Access",permalink:"/chemotionsaurus/docs/category/open-access"},next:{title:"Open APIs",permalink:"/chemotionsaurus/docs/repo/oa_open_apis"}},p={},l=[{value:"The OAI-PMH service is available",id:"the-oai-pmh-service-is-available",level:2},{value:"The OAI-PMH service exposes metadata stored in the Chemotion Repository using the Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH).",id:"the-oai-pmh-service-exposes-metadata-stored-in-the-chemotion-repository-using-the-open-archives-initiative-protocol-for-metadata-harvesting-oai-pmh",level:3},{value:"Examples",id:"examples",level:3}],c={toc:l};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-oai-pmh-service-is-available"},"The OAI-PMH service is available"),(0,o.kt)("h3",{id:"the-oai-pmh-service-exposes-metadata-stored-in-the-chemotion-repository-using-the-open-archives-initiative-protocol-for-metadata-harvesting-oai-pmh"},"The OAI-PMH service exposes metadata stored in the Chemotion Repository using the Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH)."),(0,o.kt)("p",null,"This service is open to the public. The Chemotion Repository processes OAI-PMH requests and exposes metadata so that records can be harvested."),(0,o.kt)("p",null,"Six verbs are defined in the OAI-PMH specification and used for the discovery and sharing of metadata."),(0,o.kt)("p",null,"The six OAI-PMH verbs are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Identify"),(0,o.kt)("li",{parentName:"ul"},"ListIdentifiers"),(0,o.kt)("li",{parentName:"ul"},"ListRecords"),(0,o.kt)("li",{parentName:"ul"},"GetRecords"),(0,o.kt)("li",{parentName:"ul"},"ListSets"),(0,o.kt)("li",{parentName:"ul"},"ListMetadataFormat")),(0,o.kt)("p",null,"There are a number of parameters that can be used by harvesters to restrict harvest requests to certain portions of the metadata, they are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"identifier"),(0,o.kt)("li",{parentName:"ul"},"metadataPrefix"),(0,o.kt)("li",{parentName:"ul"},"set"),(0,o.kt)("li",{parentName:"ul"},"from"),(0,o.kt)("li",{parentName:"ul"},"until"),(0,o.kt)("li",{parentName:"ul"},"resumptionToken")),(0,o.kt)("p",null,"The Chemotion Repository OAI-PMH service is able to provide metadata in the following formats:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OAI Dublin Core (oai_dc)"),(0,o.kt)("li",{parentName:"ul"},"OAI DataCite (oai_datacite)")),(0,o.kt)("p",null,"Please visit the ",(0,o.kt)("a",{parentName:"p",href:"https://www.openarchives.org/"},"Open Archives Initiative")," for more details."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You want to request records in the oai_dc metadata format, between 2022-08-01T14:15:00Z and 2022-09-01T14:20:00Z.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Request")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.chemotion-repository.net/oai-pmh?verb=ListRecords&from=2022-08-01T14:15:00Z&until=2022-09-01T14:20:00Z&metadataPrefix=oai_dc"},"https://www.chemotion-repository.net/oai-pmh?verb=ListRecords&from=2022-08-01T14:15:00Z&until=2022-09-01T14:20:00Z&metadataPrefix=oai_dc")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You want to request records in the oai_datacite metadata format, between 2022-08-01T14:15:00Z and 2022-09-01T14:20:00Z.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Request")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.chemotion-repository.net/oai-pmh?verb=ListRecords&from=2022-08-01T14:15:00Z&until=2022-09-01T14:20:00Z&metadataPrefix=oai_datacite"},"https://www.chemotion-repository.net/oai-pmh?verb=ListRecords&from=2022-08-01T14:15:00Z&until=2022-09-01T14:20:00Z&metadataPrefix=oai_datacite")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No data can be found")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Request")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.chemotion-repository.net/oai-pmh?verb=ListRecords&from=1022-08-01T14:15:00Z&until=1022-09-01T14:20:00Z&metadataPrefix=oai_dc"},"https://www.chemotion-repository.net/oai-pmh?verb=ListRecords&from=1022-08-01T14:15:00Z&until=1022-09-01T14:20:00Z&metadataPrefix=oai_dc")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You use the wrong verb in the OAI-PMH request")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Request")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.chemotion-repository.net/oai-pmh?verb=ABC"},"https://www.chemotion-repository.net/oai-pmh?verb=ABC")))}m.isMDXComponent=!0}}]);