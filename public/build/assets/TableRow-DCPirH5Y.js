import{K as v,J as y,M as m,p as n,r as p,V as T,X as f,j as d,Y as C,Z as R,O as x}from"./index-C7XDJ_kP.js";import{a as j,b as g}from"./TableCell-zCgwM2Jb.js";function k(o){return v("MuiTable",o)}y("MuiTable",["root","stickyHeader"]);const S=["className","component","padding","size","stickyHeader"],B=o=>{const{classes:e,stickyHeader:s}=o;return R({root:["root",s&&"stickyHeader"]},k,e)},_=m("table",{name:"MuiTable",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:s}=o;return[e.root,s.stickyHeader&&e.stickyHeader]}})(({theme:o,ownerState:e})=>n({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":n({},o.typography.body2,{padding:o.spacing(2),color:(o.vars||o).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},e.stickyHeader&&{borderCollapse:"separate"})),h="table",eo=p.forwardRef(function(e,s){const t=T({props:e,name:"MuiTable"}),{className:c,component:a=h,padding:l="normal",size:r="medium",stickyHeader:i=!1}=t,u=f(t,S),b=n({},t,{component:a,padding:l,size:r,stickyHeader:i}),w=B(b),U=p.useMemo(()=>({padding:l,size:r,stickyHeader:i}),[l,r,i]);return d.jsx(j.Provider,{value:U,children:d.jsx(_,n({as:a,role:a===h?null:"table",ref:s,className:C(w.root,c),ownerState:b},u))})});function O(o){return v("MuiTableBody",o)}y("MuiTableBody",["root"]);const P=["className","component"],z=o=>{const{classes:e}=o;return R({root:["root"]},O,e)},A=m("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(o,e)=>e.root})({display:"table-row-group"}),E={variant:"body"},M="tbody",to=p.forwardRef(function(e,s){const t=T({props:e,name:"MuiTableBody"}),{className:c,component:a=M}=t,l=f(t,P),r=n({},t,{component:a}),i=z(r);return d.jsx(g.Provider,{value:E,children:d.jsx(A,n({className:C(i.root,c),as:a,ref:s,role:a===M?null:"rowgroup",ownerState:r},l))})});function X(o){return v("MuiTableContainer",o)}y("MuiTableContainer",["root"]);const D=["className","component"],J=o=>{const{classes:e}=o;return R({root:["root"]},X,e)},K=m("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(o,e)=>e.root})({width:"100%",overflowX:"auto"}),so=p.forwardRef(function(e,s){const t=T({props:e,name:"MuiTableContainer"}),{className:c,component:a="div"}=t,l=f(t,D),r=n({},t,{component:a}),i=J(r);return d.jsx(K,n({ref:s,as:a,className:C(i.root,c),ownerState:r},l))});function L(o){return v("MuiTableHead",o)}y("MuiTableHead",["root"]);const V=["className","component"],W=o=>{const{classes:e}=o;return R({root:["root"]},L,e)},Y=m("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(o,e)=>e.root})({display:"table-header-group"}),Z={variant:"head"},$="thead",ao=p.forwardRef(function(e,s){const t=T({props:e,name:"MuiTableHead"}),{className:c,component:a=$}=t,l=f(t,V),r=n({},t,{component:a}),i=W(r);return d.jsx(g.Provider,{value:Z,children:d.jsx(Y,n({as:a,className:C(i.root,c),ref:s,role:a===$?null:"rowgroup",ownerState:r},l))})});function q(o){return v("MuiTableRow",o)}const H=y("MuiTableRow",["root","selected","hover","head","footer"]),F=["className","component","hover","selected"],G=o=>{const{classes:e,selected:s,hover:t,head:c,footer:a}=o;return R({root:["root",s&&"selected",t&&"hover",c&&"head",a&&"footer"]},q,e)},I=m("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:s}=o;return[e.root,s.head&&e.head,s.footer&&e.footer]}})(({theme:o})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${H.hover}:hover`]:{backgroundColor:(o.vars||o).palette.action.hover},[`&.${H.selected}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:x(o.palette.primary.main,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:x(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)}}})),N="tr",ro=p.forwardRef(function(e,s){const t=T({props:e,name:"MuiTableRow"}),{className:c,component:a=N,hover:l=!1,selected:r=!1}=t,i=f(t,F),u=p.useContext(g),b=n({},t,{component:a,hover:l,selected:r,head:u&&u.variant==="head",footer:u&&u.variant==="footer"}),w=G(b);return d.jsx(I,n({as:a,ref:s,className:C(w.root,c),role:a===N?null:"row",ownerState:b},i))});export{ro as T,so as a,eo as b,ao as c,to as d};
