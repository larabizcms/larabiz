const __vite__fileDeps=["assets/index-DW7zf-sF.js","assets/index-DXOsxttP.js","assets/toPropertyKey-Vfs27RhP.js","assets/tslib.es6-aqFK0STT.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{n as r,v as n,b as o,j as t,H as i,R as u,J as c}from"./index-DXOsxttP.js";const p=u.lazy(()=>c(()=>import("./index-DW7zf-sF.js"),__vite__mapDeps([0,1,2,3]))),l=e=>({...e,headers:{Accept:"application/json"}});function d(){const{userToken:e}=r(a=>a.auth),s=n();return o.useEffect(()=>{e||s("/admin-cp/login")},[s,e]),t.jsxs(t.Fragment,{children:[t.jsx(p,{url:i+"/swagger.json",deepLinking:!0,displayRequestDuration:!0,requestInterceptor:l}),t.jsx("p",{style:{marginTop:"50px"}})]})}export{d as default};