import{u as l,a as b,b as C,c as T,R as g,j as e,G as a,T as j,I as P,d as I,L as _,e as y,E as z,A as B,f as M,D as R,g as h,l as f,m as w,h as V,r as W,i as q,S as G}from"./index-C-recmsz.js";import{E as K,a as N,F as O}from"./SocialLogin-Cn2tzt7o.js";import{C as U}from"./Checkbox-BtUHbdNU.js";function E(){const{loading:c}=l(s=>s.auth),{settings:i,general:o}=l(s=>s.setting),{t}=b(),r=C(),{setError:p,setValue:m,formState:{errors:v},handleSubmit:S}=r,x=T(),n=i==null?void 0:i.recaptcha_site_key,[d,k]=g.useState(!1),L=()=>{k(!d)},D=s=>{s.preventDefault()};g.useEffect(()=>{if(n){const s=document.createElement("script");s.src="https://www.google.com/recaptcha/api.js?render="+n,s.async=!0,s.defer=!0,document.body.appendChild(s)}},[n]);const F=s=>{n?window.grecaptcha.execute(n,{action:"login"}).then(u=>{s["g-recaptcha-response"]=u,x(f(s)).then(A=>{w(A,p),m("password","")})}):x(f(s)).then(u=>{w(u,p),m("password","")})};return e.jsx(e.Fragment,{children:e.jsx("form",{noValidate:!0,onSubmit:S(F),children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(j,{label:t("Email"),name:"email",type:"email",form:r,config:{rules:["required","email"]},placeholder:t("Enter email address")}),e.jsx(j,{fullWidth:!0,label:t("Password"),type:d?"text":"password",form:r,name:"password",endAdornment:e.jsx(P,{position:"end",children:e.jsx(I,{"aria-label":"toggle password visibility",onClick:L,onMouseDown:D,edge:"end",color:"secondary",children:d?e.jsx(K,{}):e.jsx(N,{})})}),placeholder:t("Enter password"),config:{rules:["required"]}}),e.jsx(U,{form:r,name:"remember",label:"Keep me sign in",color:"primary",size:"small",defaultChecked:!0,defaultValue:1,after:e.jsx(_,{variant:"h6",component:y,color:"text.primary",to:"/user/forgot-password",children:t("Forgot Password?")})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(z,{errors:v})}),n&&e.jsx("div",{className:"g-recaptcha","data-sitekey":n,"data-size":"invisible"}),e.jsx(a,{item:!0,xs:12,children:e.jsx(B,{children:e.jsx(M,{disableElevation:!0,loading:c,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Login"})})}),o&&o.login_socials.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(a,{item:!0,xs:12,children:e.jsx(R,{children:e.jsxs(h,{variant:"caption",children:[" ",t("Login with")]})})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(O,{})})]})]})})})}E.propTypes={};function Q(){const{userToken:c}=l(r=>r.auth),{settings:i}=l(r=>r.setting),{t:o}=b(),t=V();return W.useEffect(()=>{c&&t("/admin-cp/dashboard")},[c]),e.jsx(q,{title:"Login",children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,children:e.jsxs(G,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[e.jsx(h,{variant:"h3",children:o("Login")}),i&&i.user_registration&&e.jsx(h,{component:y,to:"/user/register",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:o("Don't have an account?")})]})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(E,{})})]})})}export{Q as default};
