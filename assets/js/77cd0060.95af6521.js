"use strict";(self.webpackChunkitt_sr_wiki=self.webpackChunkitt_sr_wiki||[]).push([[7230],{6290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(4848),r=n(8453),o=n(3514);const s={"sidebar-position":1},c="Welcome",a={id:"tutorials/welcome/index",title:"Welcome",description:"This chapter covers basic setup for running on both Console and PC",source:"@site/docs/tutorials/00-welcome/index.mdx",sourceDirName:"tutorials/00-welcome",slug:"/tutorials/welcome/",permalink:"/docs/tutorials/welcome/",draft:!1,unlisted:!1,editUrl:"https://github.com/ITTSR/ITTSR-Wiki/blob/main/docs/tutorials/00-welcome/index.mdx",tags:[],version:"current",frontMatter:{"sidebar-position":1},sidebar:"tutorialSidebar",next:{title:"\ud83d\udc4b Introduction",permalink:"/docs/tutorials/welcome/wiki-introduction"}},l={},d=[];function u(e){const t={h1:"h1",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"welcome",children:"Welcome"}),"\n",(0,i.jsx)(t.p,{children:"This chapter covers basic setup for running on both Console and PC"}),"\n",(0,i.jsx)(o.A,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>w});n(6540);var i=n(8215),r=n(1754),o=n(8774),s=n(6654),c=n(1312),a=n(1107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(4848);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(o.A,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:r,description:o}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,i.A)("text--truncate",l.cardTitle),title:r,children:[n," ",r]}),o&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const n=(0,r.Nr)(t);return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,s.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,r.$S)();return(0,d.jsx)(w,{items:n.items,className:t})}function w(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const o=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,i.A)("row",n),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(6540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);