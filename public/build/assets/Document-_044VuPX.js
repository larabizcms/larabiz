const __vite__fileDeps=["assets/index-BHdeKE5i.js","assets/index-BrwH7Dza.js","assets/toPropertyKey-Vfs27RhP.js","assets/tslib.es6-aqFK0STT.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{u as r,c as n,r as o,j as t,x as i,R as u,y as c}from"./index-BrwH7Dza.js";const p=u.lazy(()=>c(()=>import("./index-BHdeKE5i.js"),__vite__mapDeps([0,1,2,3]))),l=e=>({...e,headers:{Accept:"application/json"}});function x(){const{userToken:e}=r(a=>a.auth),s=n();return o.useEffect(()=>{e||s("/admin-cp/login")},[s,e]),t.jsxs(t.Fragment,{children:[t.jsx(p,{url:i+"/swagger.json",deepLinking:!0,displayRequestDuration:!0,requestInterceptor:l}),t.jsx("p",{style:{marginTop:"50px"}})]})}export{x as default};
