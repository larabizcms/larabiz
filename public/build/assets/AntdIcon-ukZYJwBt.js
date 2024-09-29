import{r as m,X as G,R as E,az as J,aA as V,aB as Z,p as nn}from"./index-C7XDJ_kP.js";import{_ as en}from"./unsupportedIterableToArray-Ba7u8soi.js";function y(n){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(n)}function rn(n,e){if(y(n)!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var t=r.call(n,e||"default");if(y(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function tn(n){var e=rn(n,"string");return y(e)=="symbol"?e:e+""}var z=m.createContext({});function on(n){if(Array.isArray(n))return n}function an(n,e){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var t,o,a,i,l=[],c=!0,s=!1;try{if(a=(r=r.call(n)).next,e!==0)for(;!(c=(t=a.call(r)).done)&&(l.push(t.value),l.length!==e);c=!0);}catch(f){s=!0,o=f}finally{try{if(!c&&r.return!=null&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}function cn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(n,e){return on(n)||an(n,e)||en(n,e)||cn()}function w(n,e,r){return(e=tn(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function M(n,e){if(n==null)return{};var r,t,o=G(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.includes(r)||{}.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function I(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),r.push.apply(r,t)}return r}function d(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?I(Object(r),!0).forEach(function(t){w(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function ln(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function sn(n,e){if(!n)return!1;if(n.contains)return n.contains(e);for(var r=e;r;){if(r===n)return!0;r=r.parentNode}return!1}var R="data-rc-order",k="data-rc-priority",un="rc-util-key",T=new Map;function L(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.mark;return e?e.startsWith("data-")?e:"data-".concat(e):un}function x(n){if(n.attachTo)return n.attachTo;var e=document.querySelector("head");return e||document.body}function fn(n){return n==="queue"?"prependQueue":n?"prepend":"append"}function N(n){return Array.from((T.get(n)||n).children).filter(function(e){return e.tagName==="STYLE"})}function W(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!ln())return null;var r=e.csp,t=e.prepend,o=e.priority,a=o===void 0?0:o,i=fn(t),l=i==="prependQueue",c=document.createElement("style");c.setAttribute(R,i),l&&a&&c.setAttribute(k,"".concat(a)),r!=null&&r.nonce&&(c.nonce=r==null?void 0:r.nonce),c.innerHTML=n;var s=x(e),f=s.firstChild;if(t){if(l){var u=(e.styles||N(s)).filter(function(g){if(!["prepend","prependQueue"].includes(g.getAttribute(R)))return!1;var C=Number(g.getAttribute(k)||0);return a>=C});if(u.length)return s.insertBefore(c,u[u.length-1].nextSibling),c}s.insertBefore(c,f)}else s.appendChild(c);return c}function dn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=x(e);return(e.styles||N(r)).find(function(t){return t.getAttribute(L(e))===n})}function mn(n,e){var r=T.get(n);if(!r||!sn(document,r)){var t=W("",e),o=t.parentNode;T.set(n,o),n.removeChild(t)}}function yn(n,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=x(r),o=N(t),a=d(d({},r),{},{styles:o});mn(t,a);var i=dn(e,a);if(i){var l,c;if((l=a.csp)!==null&&l!==void 0&&l.nonce&&i.nonce!==((c=a.csp)===null||c===void 0?void 0:c.nonce)){var s;i.nonce=(s=a.csp)===null||s===void 0?void 0:s.nonce}return i.innerHTML!==n&&(i.innerHTML=n),i}var f=W(n,a);return f.setAttribute(L(a),e),f}function B(n){var e;return n==null||(e=n.getRootNode)===null||e===void 0?void 0:e.call(n)}function gn(n){return B(n)instanceof ShadowRoot}function vn(n){return gn(n)?B(n):null}var O={},pn=function(e){};function bn(n,e){}function Cn(n,e){}function hn(){O={}}function H(n,e,r){!e&&!O[r]&&(n(!1,r),O[r]=!0)}function b(n,e){H(bn,n,e)}function wn(n,e){H(Cn,n,e)}b.preMessage=pn;b.resetWarned=hn;b.noteOnce=wn;function Tn(n){return n.replace(/-(.)/g,function(e,r){return r.toUpperCase()})}function On(n,e){b(n,"[@ant-design/icons] ".concat(e))}function A(n){return y(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(y(n.icon)==="object"||typeof n.icon=="function")}function _(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(e,r){var t=n[r];switch(r){case"class":e.className=t,delete e.class;break;default:delete e[r],e[Tn(r)]=t}return e},{})}function S(n,e,r){return r?E.createElement(n.tag,d(d({key:e},_(n.attrs)),r),(n.children||[]).map(function(t,o){return S(t,"".concat(e,"-").concat(n.tag,"-").concat(o))})):E.createElement(n.tag,d({key:e},_(n.attrs)),(n.children||[]).map(function(t,o){return S(t,"".concat(e,"-").concat(n.tag,"-").concat(o))}))}function K(n){return J(n)[0]}function Q(n){return n?Array.isArray(n)?n:[n]:[]}var Sn=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,xn=function(e){var r=m.useContext(z),t=r.csp,o=r.prefixCls,a=Sn;o&&(a=a.replace(/anticon/g,o)),m.useEffect(function(){var i=e.current,l=vn(i);yn(a,"@ant-design-icons",{prepend:!0,csp:t,attachTo:l})},[])},Nn=["icon","className","onClick","style","primaryColor","secondaryColor"],p={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function Pn(n){var e=n.primaryColor,r=n.secondaryColor;p.primaryColor=e,p.secondaryColor=r||K(e),p.calculated=!!r}function jn(){return d({},p)}var v=function(e){var r=e.icon,t=e.className,o=e.onClick,a=e.style,i=e.primaryColor,l=e.secondaryColor,c=M(e,Nn),s=m.useRef(),f=p;if(i&&(f={primaryColor:i,secondaryColor:l||K(i)}),xn(s),On(A(r),"icon should be icon definiton, but got ".concat(r)),!A(r))return null;var u=r;return u&&typeof u.icon=="function"&&(u=d(d({},u),{},{icon:u.icon(f.primaryColor,f.secondaryColor)})),S(u.icon,"svg-".concat(u.name),d(d({className:t,onClick:o,style:a,"data-icon":u.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c),{},{ref:s}))};v.displayName="IconReact";v.getTwoToneColors=jn;v.setTwoToneColors=Pn;function Y(n){var e=Q(n),r=D(e,2),t=r[0],o=r[1];return v.setTwoToneColors({primaryColor:t,secondaryColor:o})}function En(){var n=v.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var In=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];Y(V.primary);var P=m.forwardRef(function(n,e){var r=n.className,t=n.icon,o=n.spin,a=n.rotate,i=n.tabIndex,l=n.onClick,c=n.twoToneColor,s=M(n,In),f=m.useContext(z),u=f.prefixCls,g=u===void 0?"anticon":u,C=f.rootClassName,q=Z(C,g,w(w({},"".concat(g,"-").concat(t.name),!!t.name),"".concat(g,"-spin"),!!o||t.name==="loading"),r),h=i;h===void 0&&l&&(h=-1);var U=a?{msTransform:"rotate(".concat(a,"deg)"),transform:"rotate(".concat(a,"deg)")}:void 0,$=Q(c),j=D($,2),X=j[0],F=j[1];return m.createElement("span",nn({role:"img","aria-label":t.name},s,{ref:e,tabIndex:h,onClick:l,className:q}),m.createElement(v,{icon:t,primaryColor:X,secondaryColor:F,style:U}))});P.displayName="AntdIcon";P.getTwoToneColor=En;P.setTwoToneColor=Y;export{P as I,tn as t};
