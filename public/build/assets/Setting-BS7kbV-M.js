import{O as u,W as j,X as f,R as r,j as e,Q as p,V as L,G as a,M as o,Y as F,Z as S,$ as y,y as G,a0 as b}from"./index-C-recmsz.js";import{F as I}from"./ElementBuilder-CAjw93Z3.js";import"./Checkbox-BtUHbdNU.js";function R(){const{page:s,form:i}=u(),{data:t,refetch:c,isLoading:d,isFetching:g}=j({page:i}),{data:h,refetch:l,isLoading:m,isFetching:x}=f({page:s,form:i});return r.useEffect(()=>{c()},[s]),r.useEffect(()=>{l()},[s,i]),d||m||g||x?e.jsx(p,{}):e.jsx(L,{title:"General",description:"General Settings",children:e.jsxs(a,{container:!0,spacing:3,children:[t&&t.data.length>1&&e.jsx(a,{item:!0,xs:3,children:e.jsx(o,{children:e.jsx(F,{sx:{width:"100%",bgcolor:"background.paper"},component:"nav","aria-labelledby":"nested-list-subheader",title:"Menus",children:t==null?void 0:t.map(n=>e.jsxs(S,{children:[e.jsx(y,{children:e.jsx(G,{children:n.icon})}),e.jsx(b,{primary:n.name})]},n.key))})})}),e.jsx(a,{item:!0,xs:t&&t.data.length>1?9:12,children:e.jsx(o,{title:"Settings",children:e.jsx(I,{config:{action:"/admin/settings",children:h.data,method:"PUT"}})})})]})})}export{R as default};
