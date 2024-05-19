"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[472],{87317:(e,r,t)=>{t.d(r,{A:()=>f});t(96540);var n=t(49785),o=t(47859),i=t(19254),s=t(74848);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r,t){var n;return n=function(e,r){if("object"!=a(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(r,"string"),(r="symbol"==a(n)?n:n+"")in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d.apply(this,arguments)}function f(e){var r=d({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e)),t=r.control,a=r.errors,l=r.name,u=r.label,f=r.id,p=r.rules,m=r.defaultValue,b=c({},r);return delete b.label,a&&a[l]&&(b.error=!0,b.helperText=a[l].message),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{variant:"subtitle1",fontWeight:600,component:"label",htmlFor:f||l,mb:"5px",children:u}),(0,s.jsx)(n.xI,{control:t,rules:p,defaultValue:m||"",render:function(e){var r=e.field,t=r.onChange,n=r.onBlur,o=r.value;return(0,s.jsx)(i.A,c({id:f||l,variant:"outlined",fullWidth:!0,onBlur:n,onChange:t,value:o},b))},name:l})]})}},59920:(e,r,t)=>{function n(e,r){e.payload.errors?Object.keys(e.payload.errors).forEach((function(t){r(t,{type:"manual",message:e.payload.errors[t][0]})})):r("root",{type:"manual",message:e.payload.message})}t.d(r,{x:()=>n})},3322:(e,r,t)=>{t.d(r,{A:()=>i});var n=t(47859),o=(t(96540),t(74848));const i=function(e){return e.root?(0,o.jsx)(n.A,{mb:3,color:"error",children:e.root.message}):null}},40472:(e,r,t)=>{t.r(r),t.d(r,{default:()=>A});t(96540);var n=t(67733),o=t(1489),i=t(57156),s=t(47859),a=t(90815),l=t(84976),c=t(83800),u=t(33476),d=t(49785),f=t(80663),p=t(17219),m=t(30493),b=t(71468),h=t(24494),x=t(87317),y=t(59920),j=t(3322),g=t(74848);const v=function(e){var r=e.title,t=e.subtitle,o=e.subtext,i=(0,b.d4)((function(e){return e.auth})).loading,a=(0,h.j)(),l=(0,d.mN)(),c=l.control,u=l.handleSubmit,v=l.setError,A=l.setValue,w=l.formState.errors;return(0,g.jsxs)(g.Fragment,{children:[r?(0,g.jsx)(s.A,{fontWeight:"700",variant:"h2",mb:1,children:r}):null,o,(0,g.jsx)(j.A,{errors:w}),(0,g.jsx)("form",{onSubmit:u((function(e){a((0,m.D)(e)).then((function(e){if(e.payload.success)return!1;(0,y.x)(e,v),A("password",""),A("password_confirmation","")}))})),children:(0,g.jsxs)(n.A,{children:[(0,g.jsxs)(f.A,{mb:3,children:[(0,g.jsx)(n.A,{children:(0,g.jsx)(x.A,{control:c,errors:w,name:"name",label:"Name",rules:{required:"Name is required"}})}),(0,g.jsx)(n.A,{mt:"25px",children:(0,g.jsx)(x.A,{control:c,errors:w,name:"email",label:"Email Address",rules:{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Invalid email address"}}})}),(0,g.jsx)(n.A,{mt:"25px",children:(0,g.jsx)(x.A,{control:c,errors:w,name:"password",label:"Password",type:"password",rules:{required:"Password is required"}})}),(0,g.jsx)(n.A,{mt:"25px",children:(0,g.jsx)(x.A,{control:c,errors:w,name:"password_confirmation",label:"Confirm Password",type:"password",rules:{required:"Password is required"}})})]}),(0,g.jsx)(p.A,{color:"primary",variant:"contained",size:"large",fullWidth:!0,type:"submit",loading:i,children:"Sign Up"})]})}),t]})};const A=function(){return(0,g.jsx)(c.A,{title:"Register",description:"this is Register page",children:(0,g.jsx)(n.A,{sx:{position:"relative","&:before":{content:'""',background:"radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",backgroundSize:"400% 400%",animation:"gradient 15s ease infinite",position:"absolute",height:"100%",width:"100%",opacity:"0.3"}},children:(0,g.jsx)(o.Ay,{container:!0,spacing:0,justifyContent:"center",sx:{height:"100vh"},children:(0,g.jsx)(o.Ay,{item:!0,xs:12,sm:12,lg:4,xl:3,display:"flex",justifyContent:"center",alignItems:"center",children:(0,g.jsxs)(i.A,{elevation:9,sx:{p:4,zIndex:1,width:"100%",maxWidth:"500px"},children:[(0,g.jsx)(n.A,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,g.jsx)(u.A,{})}),(0,g.jsx)(v,{subtext:(0,g.jsx)(s.A,{variant:"subtitle1",textAlign:"center",color:"textSecondary",mb:1,children:"Your Social Campaigns"}),subtitle:(0,g.jsxs)(a.A,{direction:"row",justifyContent:"center",spacing:1,mt:3,children:[(0,g.jsx)(s.A,{color:"textSecondary",variant:"h6",fontWeight:"400",children:"Already have an Account?"}),(0,g.jsx)(s.A,{fontWeight:"500",sx:{textDecoration:"none",color:"primary.main"},children:(0,g.jsx)(l.N_,{to:"/admin-cp/login",children:"Sign In"})})]})})]})})})})})}}}]);