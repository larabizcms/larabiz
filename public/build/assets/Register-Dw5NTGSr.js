import{b as c,j as e,G as n,S as r,O as i,I as f,p as y,T as d,L as p}from"./index-DXOsxttP.js";import{E as w,a as b,L as u,A as v}from"./EyeInvisibleOutlined-BTt-0BS9.js";import{I as a,A as P,B as E}from"./AnimateButton-A3mGRSVU.js";import"./Container-BU27vRiL.js";const A=s=>new RegExp(/[0-9]/).test(s),S=s=>new RegExp(/[a-z]/).test(s)&&new RegExp(/[A-Z]/).test(s),I=s=>new RegExp(/[!#@$%^&*)(+=._-]/).test(s),k=s=>s<2?{label:"Poor",color:"error.main"}:s<3?{label:"Weak",color:"warning.main"}:s<4?{label:"Normal",color:"warning.dark"}:s<5?{label:"Good",color:"success.main"}:s<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"},W=s=>{let t=0;return s.length>5&&(t+=1),s.length>7&&(t+=1),A(s)&&(t+=1),I(s)&&(t+=1),S(s)&&(t+=1),t};function F(){const[s,t]=c.useState(),[o,h]=c.useState(!1),m=()=>{h(!o)},x=l=>{l.preventDefault()},j=l=>{const g=W(l);t(k(g))};return c.useEffect(()=>{j("")},[]),e.jsx(e.Fragment,{children:e.jsx("form",{noValidate:!0,children:e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{item:!0,xs:12,md:6,children:e.jsxs(r,{spacing:1,children:[e.jsx(a,{htmlFor:"firstname-signup",children:"First Name*"}),e.jsx(i,{id:"firstname-login",type:"firstname",name:"firstname",placeholder:"John",fullWidth:!0})]})}),e.jsx(n,{item:!0,xs:12,md:6,children:e.jsxs(r,{spacing:1,children:[e.jsx(a,{htmlFor:"lastname-signup",children:"Last Name*"}),e.jsx(i,{fullWidth:!0,id:"lastname-signup",type:"lastname",name:"lastname",placeholder:"Doe",inputProps:{}})]})}),e.jsx(n,{item:!0,xs:12,children:e.jsxs(r,{spacing:1,children:[e.jsx(a,{htmlFor:"company-signup",children:"Company"}),e.jsx(i,{fullWidth:!0,id:"company-signup",name:"company",placeholder:"Demo Inc.",inputProps:{}})]})}),e.jsx(n,{item:!0,xs:12,children:e.jsxs(r,{spacing:1,children:[e.jsx(a,{htmlFor:"email-signup",children:"Email Address*"}),e.jsx(i,{fullWidth:!0,id:"email-login",type:"email",name:"email",placeholder:"demo@company.com",inputProps:{}})]})}),e.jsx(n,{item:!0,xs:12,children:e.jsxs(r,{spacing:1,children:[e.jsx(a,{htmlFor:"password-signup",children:"Password"}),e.jsx(i,{fullWidth:!0,id:"password-signup",type:o?"text":"password",name:"password",endAdornment:e.jsx(f,{position:"end",children:e.jsx(y,{"aria-label":"toggle password visibility",onClick:m,onMouseDown:x,edge:"end",color:"secondary",children:o?e.jsx(w,{}):e.jsx(b,{})})}),placeholder:"******",inputProps:{}})]})}),e.jsx(n,{item:!0,xs:12,children:e.jsxs(d,{variant:"body2",children:["By Signing up, you agree to our  ",e.jsx(u,{variant:"subtitle2",component:p,to:"#",children:"Terms of Service"}),"  and  ",e.jsx(u,{variant:"subtitle2",component:p,to:"#",children:"Privacy Policy"})]})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(P,{children:e.jsx(E,{disableElevation:!0,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Create Account"})})})]})})})}function B(){return e.jsx(v,{children:e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{item:!0,xs:12,children:e.jsxs(r,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[e.jsx(d,{variant:"h3",children:"Sign up"}),e.jsx(d,{component:p,to:"/admin-cp/login",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Already have an account?"})]})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(F,{})})]})})}export{B as default};
