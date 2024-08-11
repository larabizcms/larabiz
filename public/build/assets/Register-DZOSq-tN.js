import{r as l,u as g,h as F,c as C,b as I,j as e,G as r,k as L,T as c,I as M,d as _,g as d,L as j,e as x,E as T,A as q,f as B,D as N,t as G,n as W,m as z,i as O,S as V}from"./index-C-recmsz.js";import{E as $,a as J,F as U}from"./SocialLogin-Cn2tzt7o.js";const Z=s=>new RegExp(/[0-9]/).test(s),H=s=>new RegExp(/[a-z]/).test(s)&&new RegExp(/[A-Z]/).test(s),K=s=>new RegExp(/[!#@$%^&*)(+=._-]/).test(s),Q=s=>s<2?{label:"Poor",color:"error.main"}:s<3?{label:"Weak",color:"warning.main"}:s<4?{label:"Normal",color:"warning.dark"}:s<5?{label:"Good",color:"success.main"}:s<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"},X=s=>{let n=0;return s.length>5&&(n+=1),s.length>7&&(n+=1),Z(s)&&(n+=1),K(s)&&(n+=1),H(s)&&(n+=1),n};function Y(){const[s,n]=l.useState(),[h,f]=l.useState(),[u,w]=l.useState(!1),{loading:y}=g(t=>t.auth),{settings:m,general:p}=g(t=>t.setting),b=F(),v=C(),i=I(),{handleSubmit:S,setError:E,setValue:a,formState:{errors:A}}=i,P=()=>{w(!u)},k=t=>{t.preventDefault()},D=t=>{const o=X(t);n(Q(o))},R=t=>{v(W(t)).then(o=>{if(o.payload.success)return m!=null&&m.user_verification?(f("Please check your email to verify your account."),a("name",""),a("email",""),a("password",""),a("password_confirmation","")):b("/user/login"),!1;z(o,E),a("password",""),a("password_confirmation","")})};return l.useEffect(()=>{D("")},[]),e.jsx(e.Fragment,{children:e.jsx("form",{noValidate:!0,onSubmit:S(R),children:e.jsxs(r,{container:!0,spacing:3,children:[h&&e.jsx(r,{item:!0,xs:12,md:12,mt:3,children:e.jsx(L,{variant:"filled",severity:"success",children:h})}),e.jsx(r,{item:!0,xs:12,md:12,children:e.jsx(c,{label:"Name",name:"name",form:i,placeholder:"Doe John",config:{rules:["required"]}})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(c,{label:"Email Address*",name:"email",type:"email",form:i,placeholder:"demo@gmail.com",config:{rules:["required","email"]}})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(c,{label:"Password*",name:"password",type:u?"text":"password",form:i,placeholder:"******",endAdornment:e.jsx(M,{position:"end",children:e.jsx(_,{"aria-label":"toggle password visibility",onClick:P,onMouseDown:k,edge:"end",color:"secondary",children:u?e.jsx($,{}):e.jsx(J,{})})}),config:{rules:["required"]}})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(c,{label:"Confirm Password*",name:"password_confirmation",type:"password",form:i,placeholder:"******",config:{rules:["required"]}})}),e.jsx(r,{item:!0,xs:12,children:e.jsxs(d,{variant:"body2",children:["By Signing up, you agree to our  ",e.jsx(j,{variant:"subtitle2",component:x,to:"#",children:"Terms of Service"}),"  and  ",e.jsx(j,{variant:"subtitle2",component:x,to:"#",children:"Privacy Policy"})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(T,{errors:A})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(q,{children:e.jsx(B,{disableElevation:!0,loading:y,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Create Account"})})}),p&&p.login_socials.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(N,{children:e.jsxs(d,{variant:"caption",children:[" ",G("Login with")]})})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(U,{})})]})]})})})}function re(){return e.jsx(O,{title:"Register",children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:12,children:e.jsxs(V,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[e.jsx(d,{variant:"h3",children:"Sign up"}),e.jsx(d,{component:x,to:"/user/login",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Already have an account?"})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(Y,{})})]})})}export{re as default};
