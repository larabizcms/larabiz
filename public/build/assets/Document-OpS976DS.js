const __vite__fileDeps=["assets/index-D0vK4Gb_.js","assets/index-MUxIJpLk.js","assets/toPropertyKey-Vfs27RhP.js","assets/tslib.es6-aqFK0STT.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{n as o,v as r,b as s,j as _,R as n,H as i}from"./index-MUxIJpLk.js";var c={VITE_PUSHER_APP_KEY:"",VITE_PUSHER_APP_CLUSTER:"mt1",VITE_APP_NAME:"Larabiz",BASE_URL:"/build/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const u=n.lazy(()=>i(()=>import("./index-D0vK4Gb_.js"),__vite__mapDeps([0,1,2,3]))),E=e=>({...e,headers:{Accept:"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("lb_auth_token")).access_token}});function p(){const{userToken:e}=o(a=>a.auth),t=r();return s.useEffect(()=>{e||t("/admin-cp/login")},[t,e]),_.jsx(u,{url:(c.VITE_APP_URL||"")+"/api/swagger.json",requestInterceptor:E})}export{p as default};
