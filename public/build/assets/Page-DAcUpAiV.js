const __vite__fileDeps=["assets/ElementBuilder-zcDcfvjq.js","assets/index-DqrwtUFT.js","assets/ErrorMessage-ClJGeSoy.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{b as t,N as m,P as x,j as a,Q as E,R as g,w as P}from"./index-DqrwtUFT.js";import{N as _,P as j}from"./NotFound-BOsxWdQ4.js";const S=g.lazy(()=>P(()=>import("./ElementBuilder-zcDcfvjq.js"),__vite__mapDeps([0,1,2])));function N({uri:e}){const[d,s]=t.useState(!0),[r,l]=t.useState(),[u,p]=t.useState(),[o,i]=t.useState(!1),c=m(),[f,h]=t.useState();return t.useEffect(()=>{e=e||c.pathname.replace("/admin-cp/",""),s(!0),i(!1),x.get(`/admin/pages/${e}`).then(n=>{l(n.data.data.title),p(n.data.data.description),h(n.data.data.children),s(!1)}).catch(()=>{i(!0)}).finally(()=>{s(!1)})},[c.pathname]),(!r||d)&&!o?a.jsx(E,{}):o?a.jsx(_,{}):a.jsx(j,{title:r,description:u,children:a.jsx(S,{children:f||[]})})}export{N as default};
