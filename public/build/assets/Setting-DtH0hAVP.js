import{X as u,$ as j,a0 as p,R as r,j as t,Z as f,G as n,M as o,a1 as L,a2 as F,a3 as S,Q as b,a4 as G}from"./index-DXOsxttP.js";import{L as y,F as I}from"./ElementBuilder-B1UCTU6z.js";import"./ErrorMessage-ClzuK_Cr.js";import"./AnimateButton-A3mGRSVU.js";function k(){const{page:s,form:i}=u(),{data:e,refetch:c,isLoading:d,isFetching:g}=j({page:i}),{data:h,refetch:l,isLoading:m,isFetching:x}=p({page:s,form:i});return r.useEffect(()=>{c()},[s]),r.useEffect(()=>{l()},[s,i]),d||m||g||x?t.jsx(y,{}):t.jsx(f,{title:"General",description:"General Settings",children:t.jsxs(n,{container:!0,spacing:3,children:[e&&e.data.length>1&&t.jsx(n,{item:!0,xs:3,children:t.jsx(o,{children:t.jsx(L,{sx:{width:"100%",bgcolor:"background.paper"},component:"nav","aria-labelledby":"nested-list-subheader",title:"Menus",children:e==null?void 0:e.map(a=>t.jsxs(F,{children:[t.jsx(S,{children:t.jsx(b,{children:a.icon})}),t.jsx(G,{primary:a.name})]},a.key))})})}),t.jsx(n,{item:!0,xs:e&&e.data.length>1?9:12,children:t.jsx(o,{title:"Settings",children:t.jsx(I,{config:{action:"/admin/settings",children:h.data,attributes:{method:"PUT"}}})})})]})})}export{k as default};
