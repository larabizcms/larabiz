import{Y as c,Z as g,b as l,j as t,$ as u,a0 as r,a1 as p,R as h,X as m}from"./index-EwdnHcpm.js";const f=h.lazy(()=>m(()=>import("./index-EwdnHcpm.js").then(e=>e.av),[]));function _({uri:e}){const s=c();e=e||s.pathname.replace("/admin-cp/","");const{data:a,error:i,refetch:n,isLoading:o,isFetching:d}=g(e);return l.useEffect(()=>{n()},[s.pathname,n]),(!a||(o||d))&&!i?t.jsx(u,{}):a.data?i?t.jsx(r,{}):t.jsx(p,{title:a.data.title,breadcrumbs:a.data.breadcrumbs,description:a.data.description,showTitle:a.data.show_title,children:t.jsx(f,{children:a.data.children||[]})}):t.jsx(r,{})}export{_ as default};
