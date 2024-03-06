"use strict";(self.webpackChunkitt_sr_wiki=self.webpackChunkitt_sr_wiki||[]).push([[2195],{5948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=n(4848),r=n(8453),o=n(1133);const s={},c="Dev Menu",d={id:"knowledge/dev-menu/index",title:"Dev Menu",description:"Everything you could ever want to know about It Takes Two's Dev Menu. The dev menu is broken down into a lot of different tabs, and I'll go over each one of them in detail here.",source:"@site/docs/knowledge/08-dev-menu/index.mdx",sourceDirName:"knowledge/08-dev-menu",slug:"/knowledge/dev-menu/",permalink:"/docs/knowledge/dev-menu/",draft:!1,unlisted:!1,editUrl:"https://github.com/ITTSR/ITTSR-Wiki/blob/main/docs/knowledge/08-dev-menu/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"knowledgeSidebar",previous:{title:"Basic Movement",permalink:"/docs/knowledge/movement/basic-movement"},next:{title:"Functions",permalink:"/docs/knowledge/dev-menu/functions"}},a={},l=[];function u(e){const t={h1:"h1",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"dev-menu",children:"Dev Menu"}),"\n",(0,i.jsx)(t.p,{children:"Everything you could ever want to know about It Takes Two's Dev Menu. The dev menu is broken down into a lot of different tabs, and I'll go over each one of them in detail here."}),"\n",(0,i.jsx)(o.A,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1133:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var i=n(8215),r=n(1754),o=n(8774),s=n(6654),c=n(1312),d=n(1107);const a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(4848);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(o.A,{href:t,className:(0,i.A)("card padding--lg",a.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:r,description:o}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(d.A,{as:"h2",className:(0,i.A)("text--truncate",a.cardTitle),title:r,children:[n," ",r]}),o&&(0,l.jsx)("p",{className:(0,i.A)("text--truncate",a.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const n=(0,r.Nr)(t);return n?(0,l.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.cC)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(f,{item:t});case"category":return(0,l.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,r.$S)();return(0,l.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(v,{...e});const o=(0,r.d1)(t);return(0,l.jsx)("section",{className:(0,i.A)("row",n),children:o.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(p,{item:e})},t)))})}}}]);