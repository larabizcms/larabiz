const __vite__fileDeps=["assets/ElementBuilder-CrvQ9BVE.js","assets/index-Co8Nh5w4.js","assets/ErrorMessage-C8FlKgbJ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{i as H,j as n,s as C,B as W,_ as u,V,c as _,a as D,g as E,T as M,b as i,l as F,W as O,e as z,h as N,X as I,k as q,f as w,Y as X,Z as Y,$ as Z,a0 as G,a1 as J,P as K,L as T,R as Q,a2 as ee}from"./index-Co8Nh5w4.js";import oe from"./NotFound-Djj7kMmq.js";const se=H(n.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),re=["slots","slotProps"],te=C(W)(({theme:e})=>u({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":u({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":u({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:V(e.palette.grey[200],.12)}:{backgroundColor:V(e.palette.grey[600],.12)})})),ne=C(se)({width:24,height:16});function ae(e){const{slots:o={},slotProps:s={}}=e,r=_(e,re),t=e;return n.jsx("li",{children:n.jsx(te,u({focusRipple:!0},r,{ownerState:t,children:n.jsx(ne,u({as:o.CollapsedIcon,ownerState:t},s.collapsedIcon))}))})}function le(e){return E("MuiBreadcrumbs",e)}const ie=D("MuiBreadcrumbs",["root","ol","li","separator"]),ce=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],ue=e=>{const{classes:o}=e;return N({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},le,o)},de=C(M,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,o)=>[{[`& .${ie.li}`]:o.li},o.root]})({}),pe=C("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,o)=>o.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),fe=C("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,o)=>o.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function me(e,o,s,r){return e.reduce((t,a,d)=>(d<e.length-1?t=t.concat(a,n.jsx(fe,{"aria-hidden":!0,className:o,ownerState:r,children:s},`separator-${d}`)):t.push(a),t),[])}const he=i.forwardRef(function(o,s){const r=F({props:o,name:"MuiBreadcrumbs"}),{children:t,className:a,component:d="nav",slots:p={},slotProps:h={},expandText:b="Show path",itemsAfterCollapse:g=1,itemsBeforeCollapse:f=1,maxItems:c=8,separator:k="/"}=r,j=_(r,ce),[v,L]=i.useState(!1),x=u({},r,{component:d,expanded:v,expandText:b,itemsAfterCollapse:g,itemsBeforeCollapse:f,maxItems:c,separator:k}),y=ue(x),S=O({elementType:p.CollapsedIcon,externalSlotProps:h.collapsedIcon,ownerState:x}),P=i.useRef(null),$=l=>{const R=()=>{L(!0);const m=P.current.querySelector("a[href],button,[tabindex]");m&&m.focus()};return f+g>=l.length?l:[...l.slice(0,f),n.jsx(ae,{"aria-label":b,slots:{CollapsedIcon:p.CollapsedIcon},slotProps:{collapsedIcon:S},onClick:R},"ellipsis"),...l.slice(l.length-g,l.length)]},B=i.Children.toArray(t).filter(l=>i.isValidElement(l)).map((l,R)=>n.jsx("li",{className:y.li,children:l},`child-${R}`));return n.jsx(de,u({ref:s,component:d,color:"text.secondary",className:z(y.root,a),ownerState:x},j,{children:n.jsx(pe,{className:y.ol,ref:P,ownerState:x,children:me(v||c&&B.length<=c?B:$(B),y.separator,k,x)})}))});function be(e){return E("MuiLink",e)}const ge=D("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),U={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},xe=e=>U[e]||e,ye=({theme:e,ownerState:o})=>{const s=xe(o.color),r=I(e,`palette.${s}`,!1)||o.color,t=I(e,`palette.${s}Channel`);return"vars"in e&&t?`rgba(${t} / 0.4)`:q(r,.4)},Ce=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Be=e=>{const{classes:o,component:s,focusVisible:r,underline:t}=e,a={root:["root",`underline${w(t)}`,s==="button"&&"button",r&&"focusVisible"]};return N(a,be,o)},Re=C(M,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,o[`underline${w(s.underline)}`],s.component==="button"&&o.button]}})(({theme:e,ownerState:o})=>u({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&u({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:ye({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ge.focusVisible}`]:{outline:"auto"}})),A=i.forwardRef(function(o,s){const r=F({props:o,name:"MuiLink"}),{className:t,color:a="primary",component:d="a",onBlur:p,onFocus:h,TypographyClasses:b,underline:g="always",variant:f="inherit",sx:c}=r,k=_(r,Ce),{isFocusVisibleRef:j,onBlur:v,onFocus:L,ref:x}=X(),[y,S]=i.useState(!1),P=Y(s,x),$=m=>{v(m),j.current===!1&&S(!1),p&&p(m)},B=m=>{L(m),j.current===!0&&S(!0),h&&h(m)},l=u({},r,{color:a,component:d,focusVisible:y,underline:g,variant:f}),R=Be(l);return n.jsx(Re,u({color:a,className:z(R.root,t),classes:b,component:d,onBlur:$,onFocus:B,ref:P,ownerState:l,variant:f,sx:[...Object.keys(U).includes(a)?[]:[{color:a}],...Array.isArray(c)?c:[c]]},k))}),ke=Q.lazy(()=>ee(()=>import("./ElementBuilder-CrvQ9BVE.js"),__vite__mapDeps([0,1,2])));function Se({uri:e}){const[o,s]=i.useState(!0),[r,t]=i.useState(),[a,d]=i.useState(),[p,h]=i.useState(!1),b=Z(),[g,f]=i.useState();return i.useEffect(()=>{e=e||b.pathname.replace("/admin-cp/",""),s(!0),h(!1),G.get(`/admin/pages/${e}`).then(c=>{t(c.data.data.title),d(c.data.data.description),f(c.data.data.children),s(!1)}).catch(()=>{h(!0)}).finally(()=>{s(!1)})},[b.pathname]),(!r||o)&&!p?n.jsx(J,{}):p?n.jsx(oe,{}):n.jsxs(K,{title:r,description:a,children:[n.jsxs(he,{"aria-label":"breadcrumb",children:[n.jsx(A,{component:T,underline:"none",color:"inherit",to:"/admin-cp",children:"Dashboard"}),n.jsx(A,{component:T,underline:"none",color:"inherit",to:"/admin-cp/",children:"Core"}),n.jsx(M,{color:"text.primary",children:r})]}),n.jsx(ke,{children:g||[]})]})}export{Se as default};
