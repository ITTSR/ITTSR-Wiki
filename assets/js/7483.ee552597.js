(self.webpackChunkitt_sr_wiki=self.webpackChunkitt_sr_wiki||[]).push([[7483],{1243:(e,t,n)=>{"use strict";n.d(t,{A:()=>g});n(6540);var s=n(8215),a=n(7559),o=n(1754),l=n(9169),r=n(8774),i=n(1312),c=n(6025),d=n(4848);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.A)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(r.A,{"aria-label":(0,i.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,d.jsx)(r.A,{className:a,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function f(e){let{children:t,active:n,index:a,addMicrodata:o}=e;return(0,d.jsxs)("li",{...o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function g(){const e=(0,o.OF)(),t=(0,l.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(a.G.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,i.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(f,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(b,{href:a,isLast:s,children:t.label})},n)}))]})}):null}},6386:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ge});var s=n(6540),a=n(1003),o=n(9532),l=n(4848);const r=s.createContext(null);function i(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(r.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(r);if(null===e)throw new o.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(8215),m=n(4581),h=n(6929);function p(){const{metadata:e}=c();return(0,l.jsx)(h.A,{previous:e.previous,next:e.next})}var b=n(1878),f=n(4267),g=n(7559),x=n(1312);function v(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,l.jsx)(x.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function j(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(x.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:g.G.common.lastUpdated,children:[(0,l.jsx)(x.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,l.jsx)(v,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,l.jsx)(j,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var A=n(8774);const C={iconEdit:"iconEdit_Z9Sw"};function k(e){let{className:t,...n}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(C.iconEdit,t),"aria-hidden":"true",...n,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function L(e){let{editUrl:t}=e;return(0,l.jsxs)(A.A,{to:t,className:g.G.common.editThisPage,children:[(0,l.jsx)(k,{}),(0,l.jsx)(x.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const y={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function _(e){let{permalink:t,label:n,count:s}=e;return(0,l.jsxs)(A.A,{href:t,className:(0,u.A)(y.tag,s?y.tagWithCount:y.tagRegular),children:[n,s&&(0,l.jsx)("span",{children:s})]})}const B={tags:"tags_jXut",tag:"tag_QGVx"};function w(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(x.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.A)(B.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,l.jsx)("li",{className:B.tag,children:(0,l.jsx)(_,{label:t,permalink:n})},n)}))})]})}const T={lastUpdated:"lastUpdated_vwxv"};function E(e){return(0,l.jsx)("div",{className:(0,u.A)(g.G.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(w,{...e})})})}function H(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a}=e;return(0,l.jsxs)("div",{className:(0,u.A)(g.G.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(L,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.A)("col",T.lastUpdated),children:(n||s)&&(0,l.jsx)(N,{lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s})})]})}function M(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a,tags:o}=e,r=o.length>0,i=!!(t||n||a);return r||i?(0,l.jsxs)("footer",{className:(0,u.A)(g.G.docs.docFooter,"docusaurus-mt-lg"),children:[r&&(0,l.jsx)(E,{tags:o}),i&&(0,l.jsx)(H,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s})]}):null}var S=n(1422),I=n(6342);function U(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function V(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=V({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function O(e){const t=e.getBoundingClientRect();return t.top===t.bottom?O(e.parentNode):t}function R(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>O(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(O(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function P(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,I.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function D(e){const t=(0,s.useRef)(void 0),n=P();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),i=R(r,{anchorTopOffset:n.current}),c=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}function G(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,l.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,l.jsxs)("li",{children:[(0,l.jsx)(A.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,l.jsx)(G,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const W=s.memo(G);function $(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:i,...c}=e;const d=(0,I.p)(),u=r??d.tableOfContents.minHeadingLevel,m=i??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>V({toc:U(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return D((0,s.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:m}}),[a,o,u,m])),(0,l.jsx)(W,{toc:h,className:n,linkClassName:a,...c})}const z={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function F(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",z.tocCollapsibleButton,!t&&z.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(x.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const q={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function Z(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:r}=(0,S.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(q.tocCollapsible,!o&&q.tocCollapsibleExpanded,n),children:[(0,l.jsx)(F,{collapsed:o,onClick:r}),(0,l.jsx)(S.N,{lazy:!0,className:q.tocCollapsibleContent,collapsed:o,children:(0,l.jsx)($,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const Y={tocMobile:"tocMobile_ITEo"};function J(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(g.G.docs.docTocMobile,Y.tocMobile)})}const K={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},Q="table-of-contents__link toc-highlight",X="table-of-contents__link--active";function ee(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,u.A)(K.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)($,{...n,linkClassName:Q,linkActiveClassName:X})})}function te(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(ee,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:g.G.docs.docTocDesktop})}var ne=n(1107),se=n(8453),ae=n(8637);function oe(e){let{children:t}=e;return(0,l.jsx)(se.x,{components:ae.A,children:t})}function le(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(g.G.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(ne.A,{as:"h1",children:n})}),(0,l.jsx)(oe,{children:t})]})}var re=n(1243),ie=n(5260);function ce(){return(0,l.jsx)(x.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function de(){return(0,l.jsx)(x.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function ue(){return(0,l.jsx)(ie.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var me=n(137);function he(e){let{className:t}=e;return(0,l.jsx)(me.A,{type:"caution",title:(0,l.jsx)(ce,{}),className:(0,u.A)(t,g.G.common.unlistedBanner),children:(0,l.jsx)(de,{})})}function pe(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(ue,{}),(0,l.jsx)(he,{...e})]})}const be={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function fe(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,l.jsx)(J,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(te,{})}}(),{metadata:{unlisted:s}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&be.docItemCol),children:[s&&(0,l.jsx)(pe,{}),(0,l.jsx)(b.A,{}),(0,l.jsxs)("div",{className:be.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(re.A,{}),(0,l.jsx)(f.A,{}),n.mobile,(0,l.jsx)(le,{children:t}),(0,l.jsx)(M,{})]}),(0,l.jsx)(p,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function ge(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(i,{content:e.content,children:(0,l.jsxs)(a.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(fe,{children:(0,l.jsx)(n,{})})]})})}},6929:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});n(6540);var s=n(1312),a=n(8215),o=n(8774),l=n(4848);function r(e){const{permalink:t,title:n,subLabel:s,isNext:r}=e;return(0,l.jsxs)(o.A,{className:(0,a.A)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,l.jsx)("div",{className:"pagination-nav__label",children:n})]})}function i(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(r,{...t,subLabel:(0,l.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(r,{...n,subLabel:(0,l.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});n(6540);var s=n(8215),a=n(1312),o=n(7559),l=n(2252),r=n(4848);function i(e){let{className:t}=e;const n=(0,l.r)();return n.badge?(0,r.jsx)("span",{className:(0,s.A)(t,o.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(a.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},1878:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});n(6540);var s=n(8215),a=n(4586),o=n(8774),l=n(1312),r=n(4070),i=n(7559),c=n(5597),d=n(2252),u=n(4848);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function p(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(o.A,{to:n,onClick:s,children:(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,a.A)(),{pluginId:l}=(0,r.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(l),{latestDocSuggestion:m,latestVersionSuggestion:b}=(0,r.HW)(l),f=m??(g=b).docs.find((e=>e.id===g.mainDocId));var g;return(0,u.jsxs)("div",{className:(0,s.A)(t,i.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:o,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(p,{versionLabel:b.label,to:f.path,onClick:()=>d(b.name)})})]})}function f(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(b,{className:t,versionMetadata:n}):null}},7172:(e,t,n)=>{"use strict";n.d(t,{A:()=>re});var s=n(6540),a=n(5260),o=n(2303),l=n(8215),r=n(5293),i=n(6342);function c(){const{prism:e}=(0,i.p)(),{colorMode:t}=(0,r.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var d=n(7559),u=n(8426),m=n.n(u);const h=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},f={...b,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},g=Object.keys(b);function x(e,t){const n=e.map((e=>{const{start:n,end:s}=f[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&p.test(o)){const e=o.match(p).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=m()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"],t);case"jsx":case"tsx":return x(["js","jsBlock","jsx"],t);case"html":return x(["js","jsBlock","html"],t);case"python":case"py":case"bash":return x(["bash"],t);case"markdown":case"md":return x(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return x(["tex"],t);case"lua":case"haskell":case"sql":return x(["lua"],t);case"wasm":return x(["wasm"],t);case"vb":case"vba":case"visual-basic":return x(["vb","rem"],t);case"vbnet":return x(["vbnet","rem"],t);case"batch":return x(["rem"],t);case"basic":return x(["rem","f90"],t);case"fsharp":return x(["js","ml"],t);case"ocaml":case"sml":return x(["ml"],t);case"fortran":return x(["f90"],t);case"cobol":return x(["cobol"],t);default:return x(g,t)}}(s,a),r=n.split("\n"),i=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),c=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let m=0;m<r.length;){const e=r[m].match(l);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));c[t]?i[c[t]].range+=`${m},`:d[t]?i[d[t]].start=m:u[t]&&(i[u[t]].range+=`${i[u[t]].start}-${m-1},`),r.splice(m,1)}n=r.join("\n");const h={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;m()(n).forEach((e=>{h[e]??=[],h[e].push(t)}))})),{lineClassNames:h,code:n}}const j={codeBlockContainer:"codeBlockContainer_Ckt0"};var N=n(4848);function A(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(c());return(0,N.jsx)(t,{...n,style:s,className:(0,l.A)(n.className,j.codeBlockContainer,d.G.common.codeBlock)})}const C={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function k(e){let{children:t,className:n}=e;return(0,N.jsx)(A,{as:"pre",tabIndex:0,className:(0,l.A)(C.codeBlockStandalone,"thin-scrollbar",n),children:(0,N.jsx)("code",{className:C.codeBlockLines,children:t})})}var L=n(9532);const y={attributes:!0,characterData:!0,childList:!0,subtree:!0};function _(e,t){const[n,a]=(0,s.useState)(),o=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=y);const a=(0,L._q)(t),o=(0,L.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,o),()=>t.disconnect()}),[e,a,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var B=n(8181);const w={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function T(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const r=a({line:t,className:(0,l.A)(n,s&&w.codeLine)}),i=t.map(((e,t)=>(0,N.jsx)("span",{...o({token:e,key:t})},t)));return(0,N.jsxs)("span",{...r,children:[s?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("span",{className:w.codeLineNumber}),(0,N.jsx)("span",{className:w.codeLineContent,children:i})]}):i,(0,N.jsx)("br",{})]})}var E=n(1312);function H(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function M(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const S={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function I(e){let{code:t,className:n}=e;const[a,o]=(0,s.useState)(!1),r=(0,s.useRef)(void 0),i=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),a=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),l=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch{}s.remove(),l&&(o.removeAllRanges(),o.addRange(l)),a&&a.focus()}(t),o(!0),r.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),(0,N.jsx)("button",{type:"button","aria-label":a?(0,E.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,E.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,E.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.A)("clean-btn",n,S.copyButton,a&&S.copyButtonCopied),onClick:i,children:(0,N.jsxs)("span",{className:S.copyButtonIcons,"aria-hidden":"true",children:[(0,N.jsx)(H,{className:S.copyButtonIcon}),(0,N.jsx)(M,{className:S.copyButtonSuccessIcon})]})})}function U(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const V={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function O(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,E.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,N.jsx)("button",{type:"button",onClick:n,className:(0,l.A)("clean-btn",t,s&&V.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,N.jsx)(U,{className:V.wordWrapButtonIcon,"aria-hidden":"true"})})}function R(e){let{children:t,className:n="",metastring:a,title:o,showLineNumbers:r,language:d}=e;const{prism:{defaultLanguage:u,magicComments:m}}=(0,i.p)(),p=function(e){return e?.toLowerCase()}(d??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u),b=c(),f=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),l=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),r=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return _(o,r),(0,s.useEffect)((()=>{r()}),[e,r]),(0,s.useEffect)((()=>(window.addEventListener("resize",r,{passive:!0}),()=>{window.removeEventListener("resize",r)})),[r]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:l}}(),g=function(e){return e?.match(h)?.groups.title??""}(a)||o,{lineClassNames:x,code:j}=v(t,{metastring:a,language:p,magicComments:m}),k=r??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,N.jsxs)(A,{as:"div",className:(0,l.A)(n,p&&!n.includes(`language-${p}`)&&`language-${p}`),children:[g&&(0,N.jsx)("div",{className:C.codeBlockTitle,children:g}),(0,N.jsxs)("div",{className:C.codeBlockContent,children:[(0,N.jsx)(B.f4,{theme:b,code:j,language:p??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:o}=e;return(0,N.jsx)("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,l.A)(t,C.codeBlock,"thin-scrollbar"),style:n,children:(0,N.jsx)("code",{className:(0,l.A)(C.codeBlockLines,k&&C.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,N.jsx)(T,{line:e,getLineProps:a,getTokenProps:o,classNames:x[t],showLineNumbers:k},t)))})})}}),(0,N.jsxs)("div",{className:C.buttonGroup,children:[(f.isEnabled||f.isCodeScrollable)&&(0,N.jsx)(O,{className:C.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),(0,N.jsx)(I,{className:C.codeButton,code:j})]})]})]})}function P(e){let{children:t,...n}=e;const a=(0,o.A)(),l=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),r="string"==typeof l?R:k;return(0,N.jsx)(r,{...n,children:l},String(a))}function D(e){return(0,N.jsx)("code",{...e})}var G=n(8774);var W=n(5066),$=n(3427),z=n(1422);const F={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function q(e){return!!e&&("SUMMARY"===e.tagName||q(e.parentElement))}function Z(e,t){return!!e&&(e===t||Z(e.parentElement,t))}function Y(e){let{summary:t,children:n,...a}=e;(0,$.A)().collectAnchor(a.id);const l=(0,o.A)(),r=(0,s.useRef)(null),{collapsed:i,setCollapsed:c}=(0,z.u)({initialState:!a.open}),[d,u]=(0,s.useState)(a.open),m=s.isValidElement(t)?t:(0,N.jsx)("summary",{children:t??"Details"});return(0,N.jsxs)("details",{...a,ref:r,open:d,"data-collapsed":i,className:(0,W.A)(F.details,l&&F.isBrowser,a.className),onMouseDown:e=>{q(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;q(t)&&Z(t,r.current)&&(e.preventDefault(),i?(c(!1),u(!0)):c(!0))},children:[m,(0,N.jsx)(z.N,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),u(!e)},children:(0,N.jsx)("div",{className:F.collapsibleContent,children:n})})]})}const J={details:"details_b_Ee"},K="alert alert--info";function Q(e){let{...t}=e;return(0,N.jsx)(Y,{...t,className:(0,l.A)(K,J.details,t.className)})}function X(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,N.jsx)(N.Fragment,{children:t.filter((e=>e!==n))});return(0,N.jsx)(Q,{...e,summary:n,children:a})}var ee=n(1107);function te(e){return(0,N.jsx)(ee.A,{...e})}const ne={containsTaskList:"containsTaskList_mC6p"};function se(e){if(void 0!==e)return(0,l.A)(e,e?.includes("contains-task-list")&&ne.containsTaskList)}const ae={img:"img_ev3q"};var oe=n(137),le=n(418);const re={Head:a.A,details:X,Details:X,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,N.jsx)(D,{...e}):(0,N.jsx)(P,{...e})},a:function(e){return(0,N.jsx)(G.A,{...e})},pre:function(e){return(0,N.jsx)(N.Fragment,{children:e.children})},ul:function(e){return(0,N.jsx)("ul",{...e,className:se(e.className)})},li:function(e){return(0,$.A)().collectAnchor(e.id),(0,N.jsx)("li",{...e})},img:function(e){return(0,N.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,l.A)(t,ae.img))});var t},h1:e=>(0,N.jsx)(te,{as:"h1",...e}),h2:e=>(0,N.jsx)(te,{as:"h2",...e}),h3:e=>(0,N.jsx)(te,{as:"h3",...e}),h4:e=>(0,N.jsx)(te,{as:"h4",...e}),h5:e=>(0,N.jsx)(te,{as:"h5",...e}),h6:e=>(0,N.jsx)(te,{as:"h6",...e}),admonition:oe.A,mermaid:le.A}},8426:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);