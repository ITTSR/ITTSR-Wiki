"use strict";(self.webpackChunkitt_sr_wiki=self.webpackChunkitt_sr_wiki||[]).push([[7230],{6290:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var n=i(4848),r=i(8453),s=i(1133);const c={"sidebar-position":1},o="Welcome",a={id:"tutorials/welcome/index",title:"Welcome",description:"This chapter covers basic setup for running on both Console and PC",source:"@site/docs/tutorials/00-welcome/index.mdx",sourceDirName:"tutorials/00-welcome",slug:"/tutorials/welcome/",permalink:"/docs/tutorials/welcome/",draft:!1,unlisted:!1,editUrl:"https://github.com/ITTSR/ITTSR-Wiki/blob/main/docs/tutorials/00-welcome/index.mdx",tags:[],version:"current",frontMatter:{"sidebar-position":1},sidebar:"tutorialSidebar",next:{title:"\ud83d\udc4b Introduction",permalink:"/docs/tutorials/welcome/wiki-introduction"}},l={},d=[];function u(e){const t={h1:"h1",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"welcome",children:"Welcome"}),"\n",(0,n.jsx)(t.p,{children:"This chapter covers basic setup for running on both Console and PC"}),"\n",(0,n.jsx)(s.A,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1133:(e,t,i)=>{i.d(t,{A:()=>w});i(6540);var n=i(8215),r=i(1754),s=i(8774),c=i(6654),o=i(1312),a=i(1107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(4848);function u(e){let{href:t,children:i}=e;return(0,d.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",l.cardContainer),children:i})}function m(e){let{href:t,icon:i,title:r,description:s}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",l.cardTitle),title:r,children:[i," ",r]}),s&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",l.cardDescription),title:s,children:s})]})}function h(e){let{item:t}=e;const i=(0,r.Nr)(t);return i?(0,d.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const i=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const i=(0,r.$S)();return(0,d.jsx)(w,{items:i.items,className:t})}function w(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",i),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}}}]);