import{b as s,X as p,Y as f,j as a,Z as h,$ as l,a0 as g,R as m,y as x}from"./index-DHRWEW4F.js";const E=m.lazy(()=>x(()=>import("./index-DHRWEW4F.js").then(e=>e.aw),[]));function j({uri:e}){const[c,r]=s.useState(!0),[n,o]=s.useState(!1),i=p(),[t,d]=s.useState();return s.useEffect(()=>{e=e||i.pathname.replace("/admin-cp/",""),r(!0),o(!1),f.get(`/admin/pages/${e}`).then(u=>{d(u.data.data),r(!1)}).catch(()=>{o(!0)}).finally(()=>{r(!1)})},[i.pathname]),(!t||c)&&!n?a.jsx(h,{}):t?n?a.jsx(l,{}):a.jsx(g,{title:t.title,description:t.description,showTitle:t.show_title,children:a.jsx(E,{children:t.children||[]})}):a.jsx(l,{})}export{j as default};