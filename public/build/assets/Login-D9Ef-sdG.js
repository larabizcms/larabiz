import{g as _,a as D,s as E,B as ne,_ as d,r as K,b as P,c as O,u as le,d as J,j as s,e as q,f as I,h as U,i as V,k as ie,l as Q,m as ce,T as L,S as H,G as w,C as de,F as ue,n as X,o as pe,p as me,R as he,q as G,I as be,t as xe,L as Y,E as fe,v as ge,D as Ce,w as ke,x as ve}from"./index-2SK3uNPh.js";import{E as ye,a as je,L as Pe,A as we,b as Ie}from"./EyeInvisibleOutlined-dM8RCBng.js";function Fe(e){return _("PrivateSwitchBase",e)}D("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Be=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Le=e=>{const{classes:o,checked:t,disabled:n,edge:a}=e,r={root:["root",t&&"checked",n&&"disabled",a&&`edge${I(a)}`],input:["input"]};return U(r,Fe,o)},$e=E(ne)(({ownerState:e})=>d({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),Re=E("input",{shouldForwardProp:K})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ze=P.forwardRef(function(o,t){const{autoFocus:n,checked:a,checkedIcon:r,className:c,defaultChecked:u,disabled:p,disableFocusRipple:i=!1,edge:m=!1,icon:h,id:l,inputProps:g,inputRef:$,name:F,onBlur:b,onChange:C,onFocus:x,readOnly:M,required:N=!1,tabIndex:R,type:k,value:B}=o,v=O(o,Be),[j,oe]=le({controlled:a,default:!!u,name:"SwitchBase",state:"checked"}),y=J(),se=f=>{x&&x(f),y&&y.onFocus&&y.onFocus(f)},te=f=>{b&&b(f),y&&y.onBlur&&y.onBlur(f)},ae=f=>{if(f.nativeEvent.defaultPrevented)return;const Z=f.target.checked;oe(Z),C&&C(f,Z)};let z=p;y&&typeof z>"u"&&(z=y.disabled);const re=k==="checkbox"||k==="radio",A=d({},o,{checked:j,disabled:z,disableFocusRipple:i,edge:m}),W=Le(A);return s.jsxs($e,d({component:"span",className:q(W.root,c),centerRipple:!0,focusRipple:!i,disabled:z,tabIndex:null,role:void 0,onFocus:se,onBlur:te,ownerState:A,ref:t},v,{children:[s.jsx(Re,d({autoFocus:n,checked:a,defaultChecked:u,className:W.input,disabled:z,id:re?l:void 0,name:F,onChange:ae,readOnly:M,ref:$,required:N,ownerState:A,tabIndex:R,type:k},k==="checkbox"&&B===void 0?{}:{value:B},g)),j?r:h]}))}),Se=V(s.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Ee=V(s.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Me=V(s.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function qe(e){return _("MuiCheckbox",e)}const T=D("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Ne=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Ae=e=>{const{classes:o,indeterminate:t,color:n,size:a}=e,r={root:["root",t&&"indeterminate",`color${I(n)}`,`size${I(a)}`]},c=U(r,qe,o);return d({},o,c)},Te=E(ze,{shouldForwardProp:e=>K(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${I(t.size)}`],t.color!=="default"&&o[`color${I(t.color)}`]]}})(({theme:e,ownerState:o})=>d({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ie(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${T.checked}, &.${T.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${T.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),_e=s.jsx(Ee,{}),De=s.jsx(Se,{}),Oe=s.jsx(Me,{}),Ue=P.forwardRef(function(o,t){var n,a;const r=Q({props:o,name:"MuiCheckbox"}),{checkedIcon:c=_e,color:u="primary",icon:p=De,indeterminate:i=!1,indeterminateIcon:m=Oe,inputProps:h,size:l="medium",className:g}=r,$=O(r,Ne),F=i?m:p,b=i?m:c,C=d({},r,{color:u,indeterminate:i,size:l}),x=Ae(C);return s.jsx(Te,d({type:"checkbox",inputProps:d({"data-indeterminate":i},h),icon:P.cloneElement(F,{fontSize:(n=F.props.fontSize)!=null?n:l}),checkedIcon:P.cloneElement(b,{fontSize:(a=b.props.fontSize)!=null?a:l}),ownerState:C,ref:t,className:q(x.root,g)},$,{classes:x}))});function Ve(e){return _("MuiFormControlLabel",e)}const S=D("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),He=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],We=e=>{const{classes:o,disabled:t,labelPlacement:n,error:a,required:r}=e,c={root:["root",t&&"disabled",`labelPlacement${I(n)}`,a&&"error",r&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",a&&"error"]};return U(c,Ve,o)},Ze=E("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${S.label}`]:o.label},o.root,o[`labelPlacement${I(t.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${S.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${S.label}`]:{[`&.${S.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Ge=E("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${S.error}`]:{color:(e.vars||e).palette.error.main}})),Ke=P.forwardRef(function(o,t){var n,a;const r=Q({props:o,name:"MuiFormControlLabel"}),{className:c,componentsProps:u={},control:p,disabled:i,disableTypography:m,label:h,labelPlacement:l="end",required:g,slotProps:$={}}=r,F=O(r,He),b=J(),C=(n=i??p.props.disabled)!=null?n:b==null?void 0:b.disabled,x=g??p.props.required,M={disabled:C,required:x};["checked","name","onChange","value","inputRef"].forEach(j=>{typeof p.props[j]>"u"&&typeof r[j]<"u"&&(M[j]=r[j])});const N=ce({props:r,muiFormControl:b,states:["error"]}),R=d({},r,{disabled:C,labelPlacement:l,required:x,error:N.error}),k=We(R),B=(a=$.typography)!=null?a:u.typography;let v=h;return v!=null&&v.type!==L&&!m&&(v=s.jsx(L,d({component:"span"},B,{className:q(k.label,B==null?void 0:B.className),children:v}))),s.jsxs(Ze,d({className:q(k.root,c),ownerState:R,ref:t},F,{children:[P.cloneElement(p,M),x?s.jsxs(H,{display:"block",children:[v,s.jsxs(Ge,{ownerState:R,"aria-hidden":!0,className:k.asterisk,children:[" ","*"]})]}):v]}))});function Je(e,o){e.payload.errors?Object.keys(e.payload.errors).forEach(t=>{o(t,{type:"manual",message:e.payload.errors[t][0]})}):o("root",{type:"manual",message:e.payload.message})}function Qe({...e}){const{control:o,errors:t,name:n,label:a,id:r,rules:c,defaultValue:u,after:p}=e,i={...e};return s.jsxs(w,{item:!0,xs:12,sx:{mt:-1},children:[s.jsxs(H,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[s.jsx(Ke,{control:s.jsx(de,{control:o,rules:c,defaultValue:u||"",render:({field:{onChange:m,onBlur:h,value:l}})=>s.jsx(Ue,{id:r||n,onChange:m,onBlur:h,value:l,color:"primary",size:"small",...i}),name:n}),label:s.jsx(L,{variant:"h6",children:a})}),p]}),t&&t[n]&&s.jsx(ue,{error:!0,id:"standard-weight-helper-text-email-login",children:t[n].message})]})}function ee(){const{loading:e}=X(l=>l.auth),{control:o,setError:t,setValue:n,formState:{errors:a},handleSubmit:r}=pe(),c=me(),[u,p]=he.useState(!1),i=()=>{p(!u)},m=l=>{l.preventDefault()},h=l=>{c(ke(l)).then(g=>{Je(g,t),n("password","")})};return s.jsx(s.Fragment,{children:s.jsx("form",{noValidate:!0,onSubmit:r(h),children:s.jsxs(w,{container:!0,spacing:3,children:[s.jsx(G,{label:"Email",name:"email",type:"email",control:o,errors:a,rules:{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}},placeholder:"Enter email address"}),s.jsx(G,{fullWidth:!0,label:"Password",type:u?"text":"password",control:o,errors:a,name:"password",endAdornment:s.jsx(be,{position:"end",children:s.jsx(xe,{"aria-label":"toggle password visibility",onClick:i,onMouseDown:m,edge:"end",color:"secondary",children:u?s.jsx(ye,{}):s.jsx(je,{})})}),placeholder:"Enter password",rules:{required:"Password is required"}}),s.jsx(Qe,{control:o,errors:a,name:"remember",label:"Keep me sign in",color:"primary",size:"small",after:s.jsx(Pe,{variant:"h6",component:Y,color:"text.primary",to:"/admin-cp/forgot-password",children:"Forgot Password?"})}),s.jsx(fe,{errors:a}),s.jsx(w,{item:!0,xs:12,children:s.jsx(we,{children:s.jsx(ge,{disableElevation:!0,disabled:e,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Login"})})}),s.jsx(w,{item:!0,xs:12,children:s.jsx(Ce,{children:s.jsx(L,{variant:"caption",children:" Login with"})})})]})})})}ee.propTypes={};function eo(){const{userToken:e}=X(t=>t.auth),o=ve();return P.useEffect(()=>{e&&o("/admin-cp/dashboard")},[o,e]),s.jsx(Ie,{children:s.jsxs(w,{container:!0,spacing:3,children:[s.jsx(w,{item:!0,xs:12,children:s.jsxs(H,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[s.jsx(L,{variant:"h3",children:"Login"}),s.jsx(L,{component:Y,to:"/admin-cp/register",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Don't have an account?"})]})}),s.jsx(w,{item:!0,xs:12,children:s.jsx(ee,{})})]})})}export{eo as default};
