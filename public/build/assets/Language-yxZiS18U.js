import{bi as b,q as y,R as p,a as L,r as g,s as k,j as e,b3 as v,d as w,bj as S,bk as h,at as C,bl as B,au as I,bm as M,M as A,Y as R,Z as T,bn as E,a0 as O}from"./index-C-recmsz.js";const l={width:22,height:22,fontSize:"1rem"},P={mt:"6px",ml:1,top:"auto",right:"auto",alignSelf:"flex-start",transform:"none"};function $(){var u;const d=b(),c=y(d.breakpoints.down("md")),[t,m]=p.useState(),{i18n:o}=L(),n=g.useRef(null),[r,i]=g.useState(!1),x=()=>{i(a=>!a)},f=a=>{n.current&&n.current.contains(a.target)||i(!1)},j=a=>{if(o.language===a.code){i(!1);return}o.changeLanguage(a.code),localStorage.setItem("i18nextLng",a.code),window.location.reload(),i(!1)};return p.useEffect(()=>{t||k.get("/languages?limit=10").then(a=>{m(a.data.data)})},[t]),t?e.jsxs(v,{sx:{flexShrink:0,ml:.75},children:[e.jsx(w,{color:"secondary",sx:{color:"text.primary",bgcolor:r?"grey.100":"transparent"},"aria-label":"open profile",ref:n,"aria-controls":r?"profile-grow":void 0,"aria-haspopup":"true",onClick:x,children:e.jsx(S,{color:"primary",children:e.jsx(h,{sx:l,src:`https://unpkg.com/language-icons/icons/${o.language}.svg`,alt:((u=t.find(a=>a.code===o.language))==null?void 0:u.name)||o.language})})}),e.jsx(C,{placement:c?"bottom":"bottom-end",open:r,anchorEl:n.current,role:void 0,transition:!0,disablePortal:!0,popperOptions:{modifiers:[{name:"offset",options:{offset:[c?-5:0,9]}}]},children:({TransitionProps:a})=>e.jsx(B,{type:"grow",position:c?"top":"top-right",in:r,...a,children:e.jsx(I,{sx:{boxShadow:d.customShadows.z1,width:"100%",maxWidth:150},children:e.jsx(M,{onClickAway:f,children:e.jsx(A,{elevation:0,border:!1,content:!1,children:e.jsx(R,{component:"nav",sx:{p:0,"& .MuiListItemButton-root":{py:.5,"&.Mui-selected":{bgcolor:"grey.50",color:"text.primary"},"& .MuiAvatar-root":l,"& .MuiListItemSecondaryAction-root":{...P,position:"relative"}}},children:t.map(s=>e.jsxs(T,{onClick:z=>j(s),children:[e.jsx(E,{sx:{minWidth:36},children:e.jsx(h,{sx:l,src:`https://unpkg.com/language-icons/icons/${s.code}.svg`,alt:s.name,color:"success"})}),e.jsx(O,{primary:s.name})]},s.code))})})})})})})]}):e.jsx(e.Fragment,{})}export{$ as default};
