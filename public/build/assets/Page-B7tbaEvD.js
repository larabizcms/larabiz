const __vite__fileDeps=["assets/ElementBuilder-4RopawBC.js","assets/index-C-SfiTro.js","assets/ErrorMessage-CI74gT2u.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{b as t,a9 as j,aa as g,j as e,ab as E,ac as b,ad as d,L as l,T as L,R as _,t as P}from"./index-C-SfiTro.js";import{P as y}from"./PageContainer-DTWTceSH.js";import S from"./NotFound-euhg4xHt.js";const R=_.lazy(()=>P(()=>import("./ElementBuilder-4RopawBC.js"),__vite__mapDeps([0,1,2])));function k({uri:a}){const[p,n]=t.useState(!0),[r,m]=t.useState(),[u,h]=t.useState(),[o,i]=t.useState(!1),c=j(),[f,x]=t.useState();return t.useEffect(()=>{a=a||c.pathname.replace("/admin-cp/",""),n(!0),i(!1),g.get(`/admin/pages/${a}`).then(s=>{m(s.data.data.title),h(s.data.data.description),x(s.data.data.children),n(!1)}).catch(()=>{i(!0)}).finally(()=>{n(!1)})},[c.pathname]),(!r||p)&&!o?e.jsx(E,{}):o?e.jsx(S,{}):e.jsxs(y,{title:r,description:u,children:[e.jsxs(b,{"aria-label":"breadcrumb",children:[e.jsx(d,{component:l,underline:"none",color:"inherit",to:"/admin-cp",children:"Dashboard"}),e.jsx(d,{component:l,underline:"none",color:"inherit",to:"/admin-cp/",children:"Core"}),e.jsx(L,{color:"text.primary",children:r})]}),e.jsx(R,{children:f||[]})]})}export{k as default};
