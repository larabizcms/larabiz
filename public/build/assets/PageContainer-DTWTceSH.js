import{ae as V,R as A,af as l,b as G,j as x}from"./index-C-SfiTro.js";var ie=typeof Element<"u",oe=typeof Map=="function",ae=typeof Set=="function",se=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function L(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var n,e,i;if(Array.isArray(t)){if(n=t.length,n!=r.length)return!1;for(e=n;e--!==0;)if(!L(t[e],r[e]))return!1;return!0}var o;if(oe&&t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(o=t.entries();!(e=o.next()).done;)if(!r.has(e.value[0]))return!1;for(o=t.entries();!(e=o.next()).done;)if(!L(e.value[1],r.get(e.value[0])))return!1;return!0}if(ae&&t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(o=t.entries();!(e=o.next()).done;)if(!r.has(e.value[0]))return!1;return!0}if(se&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if(n=t.length,n!=r.length)return!1;for(e=n;e--!==0;)if(t[e]!==r[e])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof r.valueOf=="function")return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof r.toString=="function")return t.toString()===r.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(r).length)return!1;for(e=n;e--!==0;)if(!Object.prototype.hasOwnProperty.call(r,i[e]))return!1;if(ie&&t instanceof Element)return!1;for(e=n;e--!==0;)if(!((i[e]==="_owner"||i[e]==="__v"||i[e]==="__o")&&t.$$typeof)&&!L(t[i[e]],r[i[e]]))return!1;return!0}return t!==t&&r!==r}var ue=function(r,n){try{return L(r,n)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}};const ce=V(ue);var le=function(t,r,n,e,i,o,s,a){if(!t){var c;if(r===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,e,i,o,s,a],h=0;c=new Error(r.replace(/%s/g,function(){return f[h++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},fe=le;const W=V(fe);var pe=function(r,n,e,i){var o=e?e.call(i,r,n):void 0;if(o!==void 0)return!!o;if(r===n)return!0;if(typeof r!="object"||!r||typeof n!="object"||!n)return!1;var s=Object.keys(r),a=Object.keys(n);if(s.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),f=0;f<s.length;f++){var h=s[f];if(!c(h))return!1;var d=r[h],p=n[h];if(o=e?e.call(i,d,p,h):void 0,o===!1||o===void 0&&d!==p)return!1}return!0};const de=V(pe);function y(){return y=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},y.apply(this,arguments)}function $(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,B(t,r)}function B(t,r){return B=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},B(t,r)}function J(t,r){if(t==null)return{};var n,e,i={},o=Object.keys(t);for(e=0;e<o.length;e++)r.indexOf(n=o[e])>=0||(i[n]=t[n]);return i}var u={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},he={rel:["amphtml","canonical","alternate"]},ye={type:["application/ld+json"]},me={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},Q=Object.keys(u).map(function(t){return u[t]}),H={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Te=Object.keys(H).reduce(function(t,r){return t[H[r]]=r,t},{}),E=function(t,r){for(var n=t.length-1;n>=0;n-=1){var e=t[n];if(Object.prototype.hasOwnProperty.call(e,r))return e[r]}return null},ge=function(t){var r=E(t,u.TITLE),n=E(t,"titleTemplate");if(Array.isArray(r)&&(r=r.join("")),n&&r)return n.replace(/%s/g,function(){return r});var e=E(t,"defaultTitle");return r||e||void 0},ve=function(t){return E(t,"onChangeClientState")||function(){}},U=function(t,r){return r.filter(function(n){return n[t]!==void 0}).map(function(n){return n[t]}).reduce(function(n,e){return y({},n,e)},{})},be=function(t,r){return r.filter(function(n){return n[u.BASE]!==void 0}).map(function(n){return n[u.BASE]}).reverse().reduce(function(n,e){if(!n.length)for(var i=Object.keys(e),o=0;o<i.length;o+=1){var s=i[o].toLowerCase();if(t.indexOf(s)!==-1&&e[s])return n.concat(e)}return n},[])},P=function(t,r,n){var e={};return n.filter(function(i){return!!Array.isArray(i[t])||(i[t]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+t+' should be of type "Array". Instead found type "'+typeof i[t]+'"'),!1)}).map(function(i){return i[t]}).reverse().reduce(function(i,o){var s={};o.filter(function(d){for(var p,g=Object.keys(d),T=0;T<g.length;T+=1){var m=g[T],b=m.toLowerCase();r.indexOf(b)===-1||p==="rel"&&d[p].toLowerCase()==="canonical"||b==="rel"&&d[b].toLowerCase()==="stylesheet"||(p=b),r.indexOf(m)===-1||m!=="innerHTML"&&m!=="cssText"&&m!=="itemprop"||(p=m)}if(!p||!d[p])return!1;var O=d[p].toLowerCase();return e[p]||(e[p]={}),s[p]||(s[p]={}),!e[p][O]&&(s[p][O]=!0,!0)}).reverse().forEach(function(d){return i.push(d)});for(var a=Object.keys(s),c=0;c<a.length;c+=1){var f=a[c],h=y({},e[f],s[f]);e[f]=h}return i},[]).reverse()},Ae=function(t,r){if(Array.isArray(t)&&t.length){for(var n=0;n<t.length;n+=1)if(t[n][r])return!0}return!1},re=function(t){return Array.isArray(t)?t.join(""):t},Y=function(t,r){return Array.isArray(t)?t.reduce(function(n,e){return function(i,o){for(var s=Object.keys(i),a=0;a<s.length;a+=1)if(o[s[a]]&&o[s[a]].includes(i[s[a]]))return!0;return!1}(e,r)?n.priority.push(e):n.default.push(e),n},{priority:[],default:[]}):{default:t}},X=function(t,r){var n;return y({},t,((n={})[r]=void 0,n))},Oe=[u.NOSCRIPT,u.SCRIPT,u.STYLE],_=function(t,r){return r===void 0&&(r=!0),r===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(t){return Object.keys(t).reduce(function(r,n){var e=t[n]!==void 0?n+'="'+t[n]+'"':""+n;return r?r+" "+e:e},"")},ee=function(t,r){return r===void 0&&(r={}),Object.keys(t).reduce(function(n,e){return n[H[e]||e]=t[e],n},r)},M=function(t,r){return r.map(function(n,e){var i,o=((i={key:e})["data-rh"]=!0,i);return Object.keys(n).forEach(function(s){var a=H[s]||s;a==="innerHTML"||a==="cssText"?o.dangerouslySetInnerHTML={__html:n.innerHTML||n.cssText}:o[a]=n[s]}),A.createElement(t,o)})},v=function(t,r,n){switch(t){case u.TITLE:return{toComponent:function(){return i=r.titleAttributes,(o={key:e=r.title})["data-rh"]=!0,s=ee(i,o),[A.createElement(u.TITLE,s,e)];var e,i,o,s},toString:function(){return function(e,i,o,s){var a=Z(o),c=re(i);return a?"<"+e+' data-rh="true" '+a+">"+_(c,s)+"</"+e+">":"<"+e+' data-rh="true">'+_(c,s)+"</"+e+">"}(t,r.title,r.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return ee(r)},toString:function(){return Z(r)}};default:return{toComponent:function(){return M(t,r)},toString:function(){return function(e,i,o){return i.reduce(function(s,a){var c=Object.keys(a).filter(function(d){return!(d==="innerHTML"||d==="cssText")}).reduce(function(d,p){var g=a[p]===void 0?p:p+'="'+_(a[p],o)+'"';return d?d+" "+g:g},""),f=a.innerHTML||a.cssText||"",h=Oe.indexOf(e)===-1;return s+"<"+e+' data-rh="true" '+c+(h?"/>":">"+f+"</"+e+">")},"")}(t,r,n)}}}},K=function(t){var r=t.baseTag,n=t.bodyAttributes,e=t.encode,i=t.htmlAttributes,o=t.noscriptTags,s=t.styleTags,a=t.title,c=a===void 0?"":a,f=t.titleAttributes,h=t.linkTags,d=t.metaTags,p=t.scriptTags,g={toComponent:function(){},toString:function(){return""}};if(t.prioritizeSeoTags){var T=function(m){var b=m.linkTags,O=m.scriptTags,w=m.encode,N=Y(m.metaTags,me),D=Y(b,he),q=Y(O,ye);return{priorityMethods:{toComponent:function(){return[].concat(M(u.META,N.priority),M(u.LINK,D.priority),M(u.SCRIPT,q.priority))},toString:function(){return v(u.META,N.priority,w)+" "+v(u.LINK,D.priority,w)+" "+v(u.SCRIPT,q.priority,w)}},metaTags:N.default,linkTags:D.default,scriptTags:q.default}}(t);g=T.priorityMethods,h=T.linkTags,d=T.metaTags,p=T.scriptTags}return{priority:g,base:v(u.BASE,r,e),bodyAttributes:v("bodyAttributes",n,e),htmlAttributes:v("htmlAttributes",i,e),link:v(u.LINK,h,e),meta:v(u.META,d,e),noscript:v(u.NOSCRIPT,o,e),script:v(u.SCRIPT,p,e),style:v(u.STYLE,s,e),title:v(u.TITLE,{title:c,titleAttributes:f},e)}},I=[],F=function(t,r){var n=this;r===void 0&&(r=typeof document<"u"),this.instances=[],this.value={setHelmet:function(e){n.context.helmet=e},helmetInstances:{get:function(){return n.canUseDOM?I:n.instances},add:function(e){(n.canUseDOM?I:n.instances).push(e)},remove:function(e){var i=(n.canUseDOM?I:n.instances).indexOf(e);(n.canUseDOM?I:n.instances).splice(i,1)}}},this.context=t,this.canUseDOM=r,r||(t.helmet=K({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},ne=A.createContext({}),Ce=l.shape({setHelmet:l.func,helmetInstances:l.shape({get:l.func,add:l.func,remove:l.func})}),Se=typeof document<"u",S=function(t){function r(n){var e;return(e=t.call(this,n)||this).helmetData=new F(e.props.context,r.canUseDOM),e}return $(r,t),r.prototype.render=function(){return A.createElement(ne.Provider,{value:this.helmetData.value},this.props.children)},r}(G.Component);S.canUseDOM=Se,S.propTypes={context:l.shape({helmet:l.shape()}),children:l.node.isRequired},S.defaultProps={context:{}},S.displayName="HelmetProvider";var C=function(t,r){var n,e=document.head||document.querySelector(u.HEAD),i=e.querySelectorAll(t+"[data-rh]"),o=[].slice.call(i),s=[];return r&&r.length&&r.forEach(function(a){var c=document.createElement(t);for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(f==="innerHTML"?c.innerHTML=a.innerHTML:f==="cssText"?c.styleSheet?c.styleSheet.cssText=a.cssText:c.appendChild(document.createTextNode(a.cssText)):c.setAttribute(f,a[f]===void 0?"":a[f]));c.setAttribute("data-rh","true"),o.some(function(h,d){return n=d,c.isEqualNode(h)})?o.splice(n,1):s.push(c)}),o.forEach(function(a){return a.parentNode.removeChild(a)}),s.forEach(function(a){return e.appendChild(a)}),{oldTags:o,newTags:s}},z=function(t,r){var n=document.getElementsByTagName(t)[0];if(n){for(var e=n.getAttribute("data-rh"),i=e?e.split(","):[],o=[].concat(i),s=Object.keys(r),a=0;a<s.length;a+=1){var c=s[a],f=r[c]||"";n.getAttribute(c)!==f&&n.setAttribute(c,f),i.indexOf(c)===-1&&i.push(c);var h=o.indexOf(c);h!==-1&&o.splice(h,1)}for(var d=o.length-1;d>=0;d-=1)n.removeAttribute(o[d]);i.length===o.length?n.removeAttribute("data-rh"):n.getAttribute("data-rh")!==s.join(",")&&n.setAttribute("data-rh",s.join(","))}},te=function(t,r){var n=t.baseTag,e=t.htmlAttributes,i=t.linkTags,o=t.metaTags,s=t.noscriptTags,a=t.onChangeClientState,c=t.scriptTags,f=t.styleTags,h=t.title,d=t.titleAttributes;z(u.BODY,t.bodyAttributes),z(u.HTML,e),function(m,b){m!==void 0&&document.title!==m&&(document.title=re(m)),z(u.TITLE,b)}(h,d);var p={baseTag:C(u.BASE,n),linkTags:C(u.LINK,i),metaTags:C(u.META,o),noscriptTags:C(u.NOSCRIPT,s),scriptTags:C(u.SCRIPT,c),styleTags:C(u.STYLE,f)},g={},T={};Object.keys(p).forEach(function(m){var b=p[m],O=b.newTags,w=b.oldTags;O.length&&(g[m]=O),w.length&&(T[m]=p[m].oldTags)}),r&&r(),a(t,g,T)},j=null,R=function(t){function r(){for(var e,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))||this).rendered=!1,e}$(r,t);var n=r.prototype;return n.shouldComponentUpdate=function(e){return!de(e,this.props)},n.componentDidUpdate=function(){this.emitChange()},n.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},n.emitChange=function(){var e,i,o=this.props.context,s=o.setHelmet,a=null,c=(e=o.helmetInstances.get().map(function(f){var h=y({},f.props);return delete h.context,h}),{baseTag:be(["href"],e),bodyAttributes:U("bodyAttributes",e),defer:E(e,"defer"),encode:E(e,"encodeSpecialCharacters"),htmlAttributes:U("htmlAttributes",e),linkTags:P(u.LINK,["rel","href"],e),metaTags:P(u.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:P(u.NOSCRIPT,["innerHTML"],e),onChangeClientState:ve(e),scriptTags:P(u.SCRIPT,["src","innerHTML"],e),styleTags:P(u.STYLE,["cssText"],e),title:ge(e),titleAttributes:U("titleAttributes",e),prioritizeSeoTags:Ae(e,"prioritizeSeoTags")});S.canUseDOM?(i=c,j&&cancelAnimationFrame(j),i.defer?j=requestAnimationFrame(function(){te(i,function(){j=null})}):(te(i),j=null)):K&&(a=K(c)),s(a)},n.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},n.render=function(){return this.init(),null},r}(G.Component);R.propTypes={context:Ce.isRequired},R.displayName="HelmetDispatcher";var Ee=["children"],we=["children"],k=function(t){function r(){return t.apply(this,arguments)||this}$(r,t);var n=r.prototype;return n.shouldComponentUpdate=function(e){return!ce(X(this.props,"helmetData"),X(e,"helmetData"))},n.mapNestedChildrenToProps=function(e,i){if(!i)return null;switch(e.type){case u.SCRIPT:case u.NOSCRIPT:return{innerHTML:i};case u.STYLE:return{cssText:i};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},n.flattenArrayTypeChildren=function(e){var i,o=e.child,s=e.arrayTypeChildren;return y({},s,((i={})[o.type]=[].concat(s[o.type]||[],[y({},e.newChildProps,this.mapNestedChildrenToProps(o,e.nestedChildren))]),i))},n.mapObjectTypeChildren=function(e){var i,o,s=e.child,a=e.newProps,c=e.newChildProps,f=e.nestedChildren;switch(s.type){case u.TITLE:return y({},a,((i={})[s.type]=f,i.titleAttributes=y({},c),i));case u.BODY:return y({},a,{bodyAttributes:y({},c)});case u.HTML:return y({},a,{htmlAttributes:y({},c)});default:return y({},a,((o={})[s.type]=y({},c),o))}},n.mapArrayTypeChildrenToProps=function(e,i){var o=y({},i);return Object.keys(e).forEach(function(s){var a;o=y({},o,((a={})[s]=e[s],a))}),o},n.warnOnInvalidChildren=function(e,i){return W(Q.some(function(o){return e.type===o}),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+Q.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),W(!i||typeof i=="string"||Array.isArray(i)&&!i.some(function(o){return typeof o!="string"}),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},n.mapChildrenToProps=function(e,i){var o=this,s={};return A.Children.forEach(e,function(a){if(a&&a.props){var c=a.props,f=c.children,h=J(c,Ee),d=Object.keys(h).reduce(function(g,T){return g[Te[T]||T]=h[T],g},{}),p=a.type;switch(typeof p=="symbol"?p=p.toString():o.warnOnInvalidChildren(a,f),p){case u.FRAGMENT:i=o.mapChildrenToProps(f,i);break;case u.LINK:case u.META:case u.NOSCRIPT:case u.SCRIPT:case u.STYLE:s=o.flattenArrayTypeChildren({child:a,arrayTypeChildren:s,newChildProps:d,nestedChildren:f});break;default:i=o.mapObjectTypeChildren({child:a,newProps:i,newChildProps:d,nestedChildren:f})}}}),this.mapArrayTypeChildrenToProps(s,i)},n.render=function(){var e=this.props,i=e.children,o=J(e,we),s=y({},o),a=o.helmetData;return i&&(s=this.mapChildrenToProps(i,s)),!a||a instanceof F||(a=new F(a.context,a.instances)),a?A.createElement(R,y({},s,{context:a.value,helmetData:void 0})):A.createElement(ne.Consumer,null,function(c){return A.createElement(R,y({},s,{context:c}))})},r}(G.Component);k.propTypes={base:l.object,bodyAttributes:l.object,children:l.oneOfType([l.arrayOf(l.node),l.node]),defaultTitle:l.string,defer:l.bool,encodeSpecialCharacters:l.bool,htmlAttributes:l.object,link:l.arrayOf(l.object),meta:l.arrayOf(l.object),noscript:l.arrayOf(l.object),onChangeClientState:l.func,script:l.arrayOf(l.object),style:l.arrayOf(l.object),title:l.string,titleAttributes:l.object,titleTemplate:l.string,prioritizeSeoTags:l.bool,helmetData:l.object},k.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},k.displayName="Helmet";const xe=({title:t,description:r,children:n})=>x.jsx(S,{children:x.jsxs("div",{children:[x.jsxs(k,{children:[x.jsxs("title",{children:[t," - ","Larabiz"]}),x.jsx("meta",{name:"description",content:r})]}),n]})}),je=xe;export{je as P};
