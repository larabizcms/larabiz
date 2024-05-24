import{M as f,n as b,j as e,T as a,o as s,N as y,G as c,C as S,S as w,L as v}from"./index-BjNVD40d.js";import{P as A}from"./PageContainer-CsRGtVwS.js";import{u as C,T as i,L as q,m as E,a as k}from"./Text-C9vMBEC3.js";import{u as P,E as I}from"./ErrorMessage-UyXsXi_h.js";const L=f(),R=({title:o,subtitle:m,subtext:x})=>{const{loading:u}=b(n=>n.auth),h=C(),{control:t,handleSubmit:p,setError:g,setValue:d,formState:{errors:r}}=P(),j=n=>{h(y(n)).then(l=>{if(l.payload.success)return!1;E(l,g),d("password",""),d("password_confirmation","")})};return e.jsxs(e.Fragment,{children:[o?e.jsx(a,{fontWeight:"700",variant:"h2",mb:1,children:o}):null,x,e.jsx(I,{errors:r}),e.jsx("form",{onSubmit:p(j),children:e.jsxs(s,{children:[e.jsxs(L,{mb:3,children:[e.jsx(s,{children:e.jsx(i,{control:t,errors:r,name:"name",label:"Name",rules:{required:"Name is required"}})}),e.jsx(s,{mt:"25px",children:e.jsx(i,{control:t,errors:r,name:"email",label:"Email Address",rules:{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Invalid email address"}}})}),e.jsx(s,{mt:"25px",children:e.jsx(i,{control:t,errors:r,name:"password",label:"Password",type:"password",rules:{required:"Password is required"}})}),e.jsx(s,{mt:"25px",children:e.jsx(i,{control:t,errors:r,name:"password_confirmation",label:"Confirm Password",type:"password",rules:{required:"Password is required"}})})]}),e.jsx(q,{color:"primary",variant:"contained",size:"large",fullWidth:!0,type:"submit",loading:u,children:"Sign Up"})]})}),m]})},N=()=>e.jsx(A,{title:"Register",description:"this is Register page",children:e.jsx(s,{sx:{position:"relative","&:before":{content:'""',background:"radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",backgroundSize:"400% 400%",animation:"gradient 15s ease infinite",position:"absolute",height:"100%",width:"100%",opacity:"0.3"}},children:e.jsx(c,{container:!0,spacing:0,justifyContent:"center",sx:{height:"100vh"},children:e.jsx(c,{item:!0,xs:12,sm:12,lg:4,xl:3,display:"flex",justifyContent:"center",alignItems:"center",children:e.jsxs(S,{elevation:9,sx:{p:4,zIndex:1,width:"100%",maxWidth:"500px"},children:[e.jsx(s,{display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(k,{})}),e.jsx(R,{subtext:e.jsx(a,{variant:"subtitle1",textAlign:"center",color:"textSecondary",mb:1,children:"Your Social Campaigns"}),subtitle:e.jsxs(w,{direction:"row",justifyContent:"center",spacing:1,mt:3,children:[e.jsx(a,{color:"textSecondary",variant:"h6",fontWeight:"400",children:"Already have an Account?"}),e.jsx(a,{fontWeight:"500",sx:{textDecoration:"none",color:"primary.main"},children:e.jsx(v,{to:"/admin-cp/login",children:"Sign In"})})]})})]})})})})});export{N as default};
