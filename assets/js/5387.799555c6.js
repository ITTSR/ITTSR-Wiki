(self.webpackChunkitt_sr_wiki=self.webpackChunkitt_sr_wiki||[]).push([[5387],{6648:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ie});var s=n(6540),a=n(1003),o=n(9532),l=n(4848);const i=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(i.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(i);if(null===e)throw new o.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(8215),m=n(4581),h=n(1312),p=n(8774);function b(e){const{permalink:t,title:n,subLabel:s,isNext:a}=e;return(0,l.jsxs)(p.A,{className:(0,u.A)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,l.jsx)("div",{className:"pagination-nav__label",children:n})]})}function f(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(b,{...t,subLabel:(0,l.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(b,{...n,subLabel:(0,l.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function g(){const{metadata:e}=c();return(0,l.jsx)(f,{previous:e.previous,next:e.next})}var x=n(4586),v=n(4070),j=n(7559),N=n(5597),C=n(2252);const k={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function A(e){const t=k[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(p.A,{to:n,onClick:s,children:(0,l.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function y(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,x.A)(),{pluginId:a}=(0,v.vT)({failfast:!0}),{savePreferredVersionName:o}=(0,N.g1)(a),{latestDocSuggestion:i,latestVersionSuggestion:r}=(0,v.HW)(a),c=i??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(A,{siteTitle:s,versionMetadata:n})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(L,{versionLabel:r.label,to:c.path,onClick:()=>o(r.name)})})]})}function _(e){let{className:t}=e;const n=(0,C.r)();return n.banner?(0,l.jsx)(y,{className:t,versionMetadata:n}):null}function B(e){let{className:t}=e;const n=(0,C.r)();return n.badge?(0,l.jsx)("span",{className:(0,u.A)(t,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,l.jsx)(h.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function T(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(h.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function E(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:j.G.common.lastUpdated,children:[(0,l.jsx)(h.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,l.jsx)(w,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,l.jsx)(T,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const H={iconEdit:"iconEdit_Z9Sw"};function M(e){let{className:t,...n}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(H.iconEdit,t),"aria-hidden":"true",...n,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function S(e){let{editUrl:t}=e;return(0,l.jsxs)(p.A,{to:t,className:j.G.common.editThisPage,children:[(0,l.jsx)(M,{}),(0,l.jsx)(h.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const I={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function U(e){let{permalink:t,label:n,count:s}=e;return(0,l.jsxs)(p.A,{href:t,className:(0,u.A)(I.tag,s?I.tagWithCount:I.tagRegular),children:[n,s&&(0,l.jsx)("span",{children:s})]})}const V={tags:"tags_jXut",tag:"tag_QGVx"};function O(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.A)(V.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,l.jsx)("li",{className:V.tag,children:(0,l.jsx)(U,{label:t,permalink:n})},n)}))})]})}const R={lastUpdated:"lastUpdated_vwxv"};function P(e){return(0,l.jsx)("div",{className:(0,u.A)(j.G.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(O,{...e})})})}function D(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a}=e;return(0,l.jsxs)("div",{className:(0,u.A)(j.G.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(S,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.A)("col",R.lastUpdated),children:(n||s)&&(0,l.jsx)(E,{lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s})})]})}function G(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a,tags:o}=e,i=o.length>0,r=!!(t||n||a);return i||r?(0,l.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)(P,{tags:o}),r&&(0,l.jsx)(D,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s})]}):null}var W=n(1422),$=n(6342);function z(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function F(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=F({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function q(e){const t=e.getBoundingClientRect();return t.top===t.bottom?q(e.parentNode):t}function Z(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>q(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(q(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function Y(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,$.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function J(e){const t=(0,s.useRef)(void 0),n=Y();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),r=Z(i,{anchorTopOffset:n.current}),c=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function K(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,l.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,l.jsxs)("li",{children:[(0,l.jsx)(p.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,l.jsx)(K,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const Q=s.memo(K);function X(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:r,...c}=e;const d=(0,$.p)(),u=i??d.tableOfContents.minHeadingLevel,m=r??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>F({toc:z(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return J((0,s.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:m}}),[a,o,u,m])),(0,l.jsx)(Q,{toc:h,className:n,linkClassName:a,...c})}const ee={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function te(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",ee.tocCollapsibleButton,!t&&ee.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const ne={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function se(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:i}=(0,W.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(ne.tocCollapsible,!o&&ne.tocCollapsibleExpanded,n),children:[(0,l.jsx)(te,{collapsed:o,onClick:i}),(0,l.jsx)(W.N,{lazy:!0,className:ne.tocCollapsibleContent,collapsed:o,children:(0,l.jsx)(X,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const ae={tocMobile:"tocMobile_ITEo"};function oe(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(se,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,ae.tocMobile)})}const le={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},ie="table-of-contents__link toc-highlight",re="table-of-contents__link--active";function ce(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,u.A)(le.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(X,{...n,linkClassName:ie,linkActiveClassName:re})})}function de(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(ce,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var ue=n(1107),me=n(8453),he=n(9186);function pe(e){let{children:t}=e;return(0,l.jsx)(me.x,{components:he.A,children:t})}function be(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(ue.A,{as:"h1",children:n})}),(0,l.jsx)(pe,{children:t})]})}var fe=n(1754),ge=n(9169),xe=n(6025);function ve(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const je={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function Ne(){const e=(0,xe.A)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(p.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(ve,{className:je.breadcrumbHomeIcon})})})}const Ce={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ke(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,l.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,l.jsx)(p.A,{className:a,href:n,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:a,children:t})}function Ae(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,l.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function Le(){const e=(0,fe.OF)(),t=(0,ge.Dt)();return e?(0,l.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,Ce.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(Ne,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(Ae,{active:s,index:n,addMicrodata:!!a,children:(0,l.jsx)(ke,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var ye=n(5260);function _e(){return(0,l.jsx)(h.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function Be(){return(0,l.jsx)(h.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function we(){return(0,l.jsx)(ye.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var Te=n(137);function Ee(e){let{className:t}=e;return(0,l.jsx)(Te.A,{type:"caution",title:(0,l.jsx)(_e,{}),className:(0,u.A)(t,j.G.common.unlistedBanner),children:(0,l.jsx)(Be,{})})}function He(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(we,{}),(0,l.jsx)(Ee,{...e})]})}const Me={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Se(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,l.jsx)(oe,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(de,{})}}(),{metadata:{unlisted:s}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&Me.docItemCol),children:[s&&(0,l.jsx)(He,{}),(0,l.jsx)(_,{}),(0,l.jsxs)("div",{className:Me.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(Le,{}),(0,l.jsx)(B,{}),n.mobile,(0,l.jsx)(be,{children:t}),(0,l.jsx)(G,{})]}),(0,l.jsx)(g,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function Ie(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(Se,{children:(0,l.jsx)(n,{})})]})})}},2774:(e,t,n)=>{"use strict";n.d(t,{A:()=>le});var s=n(6540),a=n(5260),o=n(2303),l=n(8215),i=n(5293),r=n(6342);function c(){const{prism:e}=(0,r.p)(),{colorMode:t}=(0,i.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var d=n(7559),u=n(8426),m=n.n(u);const h=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},f={...b,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},g=Object.keys(b);function x(e,t){const n=e.map((e=>{const{start:n,end:s}=f[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&p.test(o)){const e=o.match(p).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=m()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"],t);case"jsx":case"tsx":return x(["js","jsBlock","jsx"],t);case"html":return x(["js","jsBlock","html"],t);case"python":case"py":case"bash":return x(["bash"],t);case"markdown":case"md":return x(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return x(["tex"],t);case"lua":case"haskell":case"sql":return x(["lua"],t);case"wasm":return x(["wasm"],t);case"vb":case"vba":case"visual-basic":return x(["vb","rem"],t);case"vbnet":return x(["vbnet","rem"],t);case"batch":return x(["rem"],t);case"basic":return x(["rem","f90"],t);case"fsharp":return x(["js","ml"],t);case"ocaml":case"sml":return x(["ml"],t);case"fortran":return x(["f90"],t);case"cobol":return x(["cobol"],t);default:return x(g,t)}}(s,a),i=n.split("\n"),r=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),c=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let m=0;m<i.length;){const e=i[m].match(l);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));c[t]?r[c[t]].range+=`${m},`:d[t]?r[d[t]].start=m:u[t]&&(r[u[t]].range+=`${r[u[t]].start}-${m-1},`),i.splice(m,1)}n=i.join("\n");const h={};return Object.entries(r).forEach((e=>{let[t,{range:n}]=e;m()(n).forEach((e=>{h[e]??=[],h[e].push(t)}))})),{lineClassNames:h,code:n}}const j={codeBlockContainer:"codeBlockContainer_Ckt0"};var N=n(4848);function C(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(c());return(0,N.jsx)(t,{...n,style:s,className:(0,l.A)(n.className,j.codeBlockContainer,d.G.common.codeBlock)})}const k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function A(e){let{children:t,className:n}=e;return(0,N.jsx)(C,{as:"pre",tabIndex:0,className:(0,l.A)(k.codeBlockStandalone,"thin-scrollbar",n),children:(0,N.jsx)("code",{className:k.codeBlockLines,children:t})})}var L=n(9532);const y={attributes:!0,characterData:!0,childList:!0,subtree:!0};function _(e,t){const[n,a]=(0,s.useState)(),o=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=y);const a=(0,L._q)(t),o=(0,L.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,o),()=>t.disconnect()}),[e,a,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var B=n(8181);const w={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function T(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=a({line:t,className:(0,l.A)(n,s&&w.codeLine)}),r=t.map(((e,t)=>(0,N.jsx)("span",{...o({token:e,key:t})},t)));return(0,N.jsxs)("span",{...i,children:[s?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("span",{className:w.codeLineNumber}),(0,N.jsx)("span",{className:w.codeLineContent,children:r})]}):r,(0,N.jsx)("br",{})]})}var E=n(1312);function H(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function M(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const S={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function I(e){let{code:t,className:n}=e;const[a,o]=(0,s.useState)(!1),i=(0,s.useRef)(void 0),r=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),a=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),l=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}s.remove(),l&&(o.removeAllRanges(),o.addRange(l)),a&&a.focus()}(t),o(!0),i.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),(0,N.jsx)("button",{type:"button","aria-label":a?(0,E.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,E.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,E.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.A)("clean-btn",n,S.copyButton,a&&S.copyButtonCopied),onClick:r,children:(0,N.jsxs)("span",{className:S.copyButtonIcons,"aria-hidden":"true",children:[(0,N.jsx)(H,{className:S.copyButtonIcon}),(0,N.jsx)(M,{className:S.copyButtonSuccessIcon})]})})}function U(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const V={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function O(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,E.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,N.jsx)("button",{type:"button",onClick:n,className:(0,l.A)("clean-btn",t,s&&V.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,N.jsx)(U,{className:V.wordWrapButtonIcon,"aria-hidden":"true"})})}function R(e){let{children:t,className:n="",metastring:a,title:o,showLineNumbers:i,language:d}=e;const{prism:{defaultLanguage:u,magicComments:m}}=(0,r.p)(),p=function(e){return e?.toLowerCase()}(d??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u),b=c(),f=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),l=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),i=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return _(o,i),(0,s.useEffect)((()=>{i()}),[e,i]),(0,s.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:l}}(),g=function(e){return e?.match(h)?.groups.title??""}(a)||o,{lineClassNames:x,code:j}=v(t,{metastring:a,language:p,magicComments:m}),A=i??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,N.jsxs)(C,{as:"div",className:(0,l.A)(n,p&&!n.includes(`language-${p}`)&&`language-${p}`),children:[g&&(0,N.jsx)("div",{className:k.codeBlockTitle,children:g}),(0,N.jsxs)("div",{className:k.codeBlockContent,children:[(0,N.jsx)(B.f4,{theme:b,code:j,language:p??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:o}=e;return(0,N.jsx)("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,l.A)(t,k.codeBlock,"thin-scrollbar"),style:n,children:(0,N.jsx)("code",{className:(0,l.A)(k.codeBlockLines,A&&k.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,N.jsx)(T,{line:e,getLineProps:a,getTokenProps:o,classNames:x[t],showLineNumbers:A},t)))})})}}),(0,N.jsxs)("div",{className:k.buttonGroup,children:[(f.isEnabled||f.isCodeScrollable)&&(0,N.jsx)(O,{className:k.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),(0,N.jsx)(I,{className:k.codeButton,code:j})]})]})]})}function P(e){let{children:t,...n}=e;const a=(0,o.A)(),l=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof l?R:A;return(0,N.jsx)(i,{...n,children:l},String(a))}function D(e){return(0,N.jsx)("code",{...e})}var G=n(8774);var W=n(5066),$=n(3427),z=n(1422);const F={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function q(e){return!!e&&("SUMMARY"===e.tagName||q(e.parentElement))}function Z(e,t){return!!e&&(e===t||Z(e.parentElement,t))}function Y(e){let{summary:t,children:n,...a}=e;(0,$.A)().collectAnchor(a.id);const l=(0,o.A)(),i=(0,s.useRef)(null),{collapsed:r,setCollapsed:c}=(0,z.u)({initialState:!a.open}),[d,u]=(0,s.useState)(a.open),m=s.isValidElement(t)?t:(0,N.jsx)("summary",{children:t??"Details"});return(0,N.jsxs)("details",{...a,ref:i,open:d,"data-collapsed":r,className:(0,W.A)(F.details,l&&F.isBrowser,a.className),onMouseDown:e=>{q(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;q(t)&&Z(t,i.current)&&(e.preventDefault(),r?(c(!1),u(!0)):c(!0))},children:[m,(0,N.jsx)(z.N,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),u(!e)},children:(0,N.jsx)("div",{className:F.collapsibleContent,children:n})})]})}const J={details:"details_b_Ee"},K="alert alert--info";function Q(e){let{...t}=e;return(0,N.jsx)(Y,{...t,className:(0,l.A)(K,J.details,t.className)})}function X(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,N.jsx)(N.Fragment,{children:t.filter((e=>e!==n))});return(0,N.jsx)(Q,{...e,summary:n,children:a})}var ee=n(1107);function te(e){return(0,N.jsx)(ee.A,{...e})}const ne={containsTaskList:"containsTaskList_mC6p"};function se(e){if(void 0!==e)return(0,l.A)(e,e?.includes("contains-task-list")&&ne.containsTaskList)}const ae={img:"img_ev3q"};var oe=n(137);const le={Head:a.A,details:X,Details:X,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,N.jsx)(D,{...e}):(0,N.jsx)(P,{...e})},a:function(e){return(0,N.jsx)(G.A,{...e})},pre:function(e){return(0,N.jsx)(N.Fragment,{children:e.children})},ul:function(e){return(0,N.jsx)("ul",{...e,className:se(e.className)})},li:function(e){return(0,$.A)().collectAnchor(e.id),(0,N.jsx)("li",{...e})},img:function(e){return(0,N.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,l.A)(t,ae.img))});var t},h1:e=>(0,N.jsx)(te,{as:"h1",...e}),h2:e=>(0,N.jsx)(te,{as:"h2",...e}),h3:e=>(0,N.jsx)(te,{as:"h3",...e}),h4:e=>(0,N.jsx)(te,{as:"h4",...e}),h5:e=>(0,N.jsx)(te,{as:"h5",...e}),h6:e=>(0,N.jsx)(te,{as:"h6",...e}),admonition:oe.A,mermaid:()=>null}},8426:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);