const __vite__fileDeps=["assets/Form-BhRj_msD.js","assets/index-MUxIJpLk.js","assets/Text-w6hiIWma.js","assets/InputLabel-CcW7Ugtv.js","assets/ErrorMessage-BorUyIYW.js","assets/LoadingPage-B4Sebckz.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{j as m,P as b,b as v,R as M,i as Cr,F as Tr,z as We,p as Ir,T as Ne,J as kr,K as Ge,H as lr,N as Rr,Q as Mr,M as Ve,G as V,U as Ye,V as _e,W as Lr,X as zr,Y as Br}from"./index-MUxIJpLk.js";import{B as $r,L as Ur}from"./LoadingPage-B4Sebckz.js";import{m as Hr,D as Kr,a as Wr,b as Nr,c as Gr,M as Vr}from"./makeStyles-DDL2eDCa.js";import{_ as U,a as H,b as Je,c as Qe}from"./tslib.es6-aqFK0STT.js";import{C as Ae}from"./Container-uDHVR-Bi.js";import{T as Yr}from"./Text-w6hiIWma.js";import{B as ie}from"./InputLabel-CcW7Ugtv.js";import"./toPropertyKey-Vfs27RhP.js";function Jr({page:e}){return m.jsx("div",{children:m.jsx("h1",{children:"CRUD"})})}var Qr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Q(e,t){var r=qr(e);if(typeof r.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:typeof t=="string"?t:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}function qr(e){var t=e.name,r=t&&t.lastIndexOf(".")!==-1;if(r&&!e.type){var n=t.split(".").pop().toLowerCase(),i=Qr.get(n);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var Zr=[".DS_Store","Thumbs.db"];function Xr(e){return U(this,void 0,void 0,function(){return H(this,function(t){return ce(e)&&et(e.dataTransfer)?[2,ot(e.dataTransfer,e.type)]:rt(e)?[2,tt(e)]:Array.isArray(e)&&e.every(function(r){return"getFile"in r&&typeof r.getFile=="function"})?[2,nt(e)]:[2,[]]})})}function et(e){return ce(e)}function rt(e){return ce(e)&&ce(e.target)}function ce(e){return typeof e=="object"&&e!==null}function tt(e){return Ee(e.target.files).map(function(t){return Q(t)})}function nt(e){return U(this,void 0,void 0,function(){var t;return H(this,function(r){switch(r.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return t=r.sent(),[2,t.map(function(n){return Q(n)})]}})})}function ot(e,t){return U(this,void 0,void 0,function(){var r,n;return H(this,function(i){switch(i.label){case 0:return e.items?(r=Ee(e.items).filter(function(l){return l.kind==="file"}),t!=="drop"?[2,r]:[4,Promise.all(r.map(at))]):[3,2];case 1:return n=i.sent(),[2,qe(fr(n))];case 2:return[2,qe(Ee(e.files).map(function(l){return Q(l)}))]}})})}function qe(e){return e.filter(function(t){return Zr.indexOf(t.name)===-1})}function Ee(e){if(e===null)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function at(e){if(typeof e.webkitGetAsEntry!="function")return Ze(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?pr(t):Ze(e)}function fr(e){return e.reduce(function(t,r){return Je(Je([],Qe(t),!1),Qe(Array.isArray(r)?fr(r):[r]),!1)},[])}function Ze(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=Q(t);return Promise.resolve(r)}function it(e){return U(this,void 0,void 0,function(){return H(this,function(t){return[2,e.isDirectory?pr(e):ct(e)]})})}function pr(e){var t=e.createReader();return new Promise(function(r,n){var i=[];function l(){var d=this;t.readEntries(function(o){return U(d,void 0,void 0,function(){var g,a,c;return H(this,function(s){switch(s.label){case 0:if(o.length)return[3,5];s.label=1;case 1:return s.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return g=s.sent(),r(g),[3,4];case 3:return a=s.sent(),n(a),[3,4];case 4:return[3,6];case 5:c=Promise.all(o.map(it)),i.push(c),l(),s.label=6;case 6:return[2]}})})},function(o){n(o)})}l()})}function ct(e){return U(this,void 0,void 0,function(){return H(this,function(t){return[2,new Promise(function(r,n){e.file(function(i){var l=Q(i,e.fullPath);r(l)},function(i){n(i)})})]})})}var st=function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),l=i.replace(/\/.*$/,"");return r.some(function(d){var o=d.trim().toLowerCase();return o.charAt(0)==="."?n.toLowerCase().endsWith(o):o.endsWith("/*")?l===o.replace(/\/.*$/,""):i===o})}return!0};function Xe(e){return ft(e)||lt(e)||mr(e)||ut()}function ut(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ft(e){if(Array.isArray(e))return Fe(e)}function er(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function rr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?er(Object(r),!0).forEach(function(n){dr(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):er(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function dr(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function J(e,t){return mt(e)||dt(e,t)||mr(e,t)||pt()}function pt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mr(e,t){if(e){if(typeof e=="string")return Fe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Fe(e,t)}}function Fe(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function dt(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],i=!0,l=!1,d,o;try{for(r=r.call(e);!(i=(d=r.next()).done)&&(n.push(d.value),!(t&&n.length===t));i=!0);}catch(g){l=!0,o=g}finally{try{!i&&r.return!=null&&r.return()}finally{if(l)throw o}}return n}}function mt(e){if(Array.isArray(e))return e}var gt="file-invalid-type",ht="file-too-large",vt="file-too-small",yt="too-many-files",bt=function(t){t=Array.isArray(t)&&t.length===1?t[0]:t;var r=Array.isArray(t)?"one of ".concat(t.join(", ")):t;return{code:gt,message:"File type must be ".concat(r)}},tr=function(t){return{code:ht,message:"File is larger than ".concat(t," ").concat(t===1?"byte":"bytes")}},nr=function(t){return{code:vt,message:"File is smaller than ".concat(t," ").concat(t===1?"byte":"bytes")}},xt={code:yt,message:"Too many files"};function gr(e,t){var r=e.type==="application/x-moz-file"||st(e,t);return[r,r?null:bt(t)]}function hr(e,t,r){if(R(e.size))if(R(t)&&R(r)){if(e.size>r)return[!1,tr(r)];if(e.size<t)return[!1,nr(t)]}else{if(R(t)&&e.size<t)return[!1,nr(t)];if(R(r)&&e.size>r)return[!1,tr(r)]}return[!0,null]}function R(e){return e!=null}function Dt(e){var t=e.files,r=e.accept,n=e.minSize,i=e.maxSize,l=e.multiple,d=e.maxFiles,o=e.validator;return!l&&t.length>1||l&&d>=1&&t.length>d?!1:t.every(function(g){var a=gr(g,r),c=J(a,1),s=c[0],u=hr(g,n,i),f=J(u,1),y=f[0],D=o?o(g):null;return s&&y&&!D})}function se(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function ae(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(t){return t==="Files"||t==="application/x-moz-file"}):!!e.target&&!!e.target.files}function or(e){e.preventDefault()}function _t(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function At(e){return e.indexOf("Edge/")!==-1}function Et(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return _t(e)||At(e)}function P(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){for(var i=arguments.length,l=new Array(i>1?i-1:0),d=1;d<i;d++)l[d-1]=arguments[d];return t.some(function(o){return!se(n)&&o&&o.apply(void 0,[n].concat(l)),se(n)})}}function Ft(){return"showOpenFilePicker"in window}function wt(e){if(R(e)){var t=Object.entries(e).filter(function(r){var n=J(r,2),i=n[0],l=n[1],d=!0;return vr(i)||(console.warn('Skipped "'.concat(i,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),d=!1),(!Array.isArray(l)||!l.every(yr))&&(console.warn('Skipped "'.concat(i,'" because an invalid file extension was provided.')),d=!1),d}).reduce(function(r,n){var i=J(n,2),l=i[0],d=i[1];return rr(rr({},r),{},dr({},l,d))},{});return[{description:"Files",accept:t}]}return e}function jt(e){if(R(e))return Object.entries(e).reduce(function(t,r){var n=J(r,2),i=n[0],l=n[1];return[].concat(Xe(t),[i],Xe(l))},[]).filter(function(t){return vr(t)||yr(t)}).join(",")}function Ot(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function St(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function vr(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function yr(e){return/^.*\.[\w]+$/.test(e)}var Pt=["children"],Ct=["open"],Tt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],It=["refKey","onChange","onClick"];function kt(e){return Lt(e)||Mt(e)||br(e)||Rt()}function Rt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lt(e){if(Array.isArray(e))return we(e)}function De(e,t){return $t(e)||Bt(e,t)||br(e,t)||zt()}function zt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function br(e,t){if(e){if(typeof e=="string")return we(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return we(e,t)}}function we(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Bt(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],i=!0,l=!1,d,o;try{for(r=r.call(e);!(i=(d=r.next()).done)&&(n.push(d.value),!(t&&n.length===t));i=!0);}catch(g){l=!0,o=g}finally{try{!i&&r.return!=null&&r.return()}finally{if(l)throw o}}return n}}function $t(e){if(Array.isArray(e))return e}function ar(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ar(Object(r),!0).forEach(function(n){je(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ar(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function je(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ue(e,t){if(e==null)return{};var r=Ut(e,t),n,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ut(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,l;for(l=0;l<n.length;l++)i=n[l],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var Pe=v.forwardRef(function(e,t){var r=e.children,n=ue(e,Pt),i=Dr(n),l=i.open,d=ue(i,Ct);return v.useImperativeHandle(t,function(){return{open:l}},[l]),M.createElement(v.Fragment,null,r(A(A({},d),{},{open:l})))});Pe.displayName="Dropzone";var xr={disabled:!1,getFilesFromEvent:Xr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Pe.defaultProps=xr;Pe.propTypes={children:b.func,accept:b.objectOf(b.arrayOf(b.string)),multiple:b.bool,preventDropOnDocument:b.bool,noClick:b.bool,noKeyboard:b.bool,noDrag:b.bool,noDragEventsBubbling:b.bool,minSize:b.number,maxSize:b.number,maxFiles:b.number,disabled:b.bool,getFilesFromEvent:b.func,onFileDialogCancel:b.func,onFileDialogOpen:b.func,useFsAccessApi:b.bool,autoFocus:b.bool,onDragEnter:b.func,onDragLeave:b.func,onDragOver:b.func,onDrop:b.func,onDropAccepted:b.func,onDropRejected:b.func,onError:b.func,validator:b.func};var Oe={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Dr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=A(A({},xr),e),r=t.accept,n=t.disabled,i=t.getFilesFromEvent,l=t.maxSize,d=t.minSize,o=t.multiple,g=t.maxFiles,a=t.onDragEnter,c=t.onDragLeave,s=t.onDragOver,u=t.onDrop,f=t.onDropAccepted,y=t.onDropRejected,D=t.onFileDialogCancel,_=t.onFileDialogOpen,x=t.useFsAccessApi,C=t.autoFocus,T=t.preventDropOnDocument,q=t.noClick,K=t.noKeyboard,Ce=t.noDrag,I=t.noDragEventsBubbling,le=t.onError,W=t.validator,N=v.useMemo(function(){return jt(r)},[r]),Te=v.useMemo(function(){return wt(r)},[r]),fe=v.useMemo(function(){return typeof _=="function"?_:ir},[_]),Z=v.useMemo(function(){return typeof D=="function"?D:ir},[D]),w=v.useRef(null),S=v.useRef(null),Fr=v.useReducer(Ht,Oe),Ie=De(Fr,2),pe=Ie[0],j=Ie[1],wr=pe.isFocused,ke=pe.isFileDialogActive,X=v.useRef(typeof window<"u"&&window.isSecureContext&&x&&Ft()),Re=function(){!X.current&&ke&&setTimeout(function(){if(S.current){var h=S.current.files;h.length||(j({type:"closeDialog"}),Z())}},300)};v.useEffect(function(){return window.addEventListener("focus",Re,!1),function(){window.removeEventListener("focus",Re,!1)}},[S,ke,Z,X]);var L=v.useRef([]),Me=function(h){w.current&&w.current.contains(h.target)||(h.preventDefault(),L.current=[])};v.useEffect(function(){return T&&(document.addEventListener("dragover",or,!1),document.addEventListener("drop",Me,!1)),function(){T&&(document.removeEventListener("dragover",or),document.removeEventListener("drop",Me))}},[w,T]),v.useEffect(function(){return!n&&C&&w.current&&w.current.focus(),function(){}},[w,C,n]);var k=v.useCallback(function(p){le?le(p):console.error(p)},[le]),Le=v.useCallback(function(p){p.preventDefault(),p.persist(),ne(p),L.current=[].concat(kt(L.current),[p.target]),ae(p)&&Promise.resolve(i(p)).then(function(h){if(!(se(p)&&!I)){var E=h.length,F=E>0&&Dt({files:h,accept:N,minSize:d,maxSize:l,multiple:o,maxFiles:g,validator:W}),O=E>0&&!F;j({isDragAccept:F,isDragReject:O,isDragActive:!0,type:"setDraggedFiles"}),a&&a(p)}}).catch(function(h){return k(h)})},[i,a,k,I,N,d,l,o,g,W]),ze=v.useCallback(function(p){p.preventDefault(),p.persist(),ne(p);var h=ae(p);if(h&&p.dataTransfer)try{p.dataTransfer.dropEffect="copy"}catch{}return h&&s&&s(p),!1},[s,I]),Be=v.useCallback(function(p){p.preventDefault(),p.persist(),ne(p);var h=L.current.filter(function(F){return w.current&&w.current.contains(F)}),E=h.indexOf(p.target);E!==-1&&h.splice(E,1),L.current=h,!(h.length>0)&&(j({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),ae(p)&&c&&c(p))},[w,c,I]),ee=v.useCallback(function(p,h){var E=[],F=[];p.forEach(function(O){var G=gr(O,N),$=De(G,2),me=$[0],ge=$[1],he=hr(O,d,l),oe=De(he,2),ve=oe[0],ye=oe[1],be=W?W(O):null;if(me&&ve&&!be)E.push(O);else{var xe=[ge,ye];be&&(xe=xe.concat(be)),F.push({file:O,errors:xe.filter(function(Pr){return Pr})})}}),(!o&&E.length>1||o&&g>=1&&E.length>g)&&(E.forEach(function(O){F.push({file:O,errors:[xt]})}),E.splice(0)),j({acceptedFiles:E,fileRejections:F,type:"setFiles"}),u&&u(E,F,h),F.length>0&&y&&y(F,h),E.length>0&&f&&f(E,h)},[j,o,N,d,l,g,u,f,y,W]),re=v.useCallback(function(p){p.preventDefault(),p.persist(),ne(p),L.current=[],ae(p)&&Promise.resolve(i(p)).then(function(h){se(p)&&!I||ee(h,p)}).catch(function(h){return k(h)}),j({type:"reset"})},[i,ee,k,I]),z=v.useCallback(function(){if(X.current){j({type:"openDialog"}),fe();var p={multiple:o,types:Te};window.showOpenFilePicker(p).then(function(h){return i(h)}).then(function(h){ee(h,null),j({type:"closeDialog"})}).catch(function(h){Ot(h)?(Z(h),j({type:"closeDialog"})):St(h)?(X.current=!1,S.current?(S.current.value=null,S.current.click()):k(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):k(h)});return}S.current&&(j({type:"openDialog"}),fe(),S.current.value=null,S.current.click())},[j,fe,Z,x,ee,k,Te,o]),$e=v.useCallback(function(p){!w.current||!w.current.isEqualNode(p.target)||(p.key===" "||p.key==="Enter"||p.keyCode===32||p.keyCode===13)&&(p.preventDefault(),z())},[w,z]),Ue=v.useCallback(function(){j({type:"focus"})},[]),He=v.useCallback(function(){j({type:"blur"})},[]),Ke=v.useCallback(function(){q||(Et()?setTimeout(z,0):z())},[q,z]),B=function(h){return n?null:h},de=function(h){return K?null:B(h)},te=function(h){return Ce?null:B(h)},ne=function(h){I&&h.stopPropagation()},jr=v.useMemo(function(){return function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=p.refKey,E=h===void 0?"ref":h,F=p.role,O=p.onKeyDown,G=p.onFocus,$=p.onBlur,me=p.onClick,ge=p.onDragEnter,he=p.onDragOver,oe=p.onDragLeave,ve=p.onDrop,ye=ue(p,Tt);return A(A(je({onKeyDown:de(P(O,$e)),onFocus:de(P(G,Ue)),onBlur:de(P($,He)),onClick:B(P(me,Ke)),onDragEnter:te(P(ge,Le)),onDragOver:te(P(he,ze)),onDragLeave:te(P(oe,Be)),onDrop:te(P(ve,re)),role:typeof F=="string"&&F!==""?F:"presentation"},E,w),!n&&!K?{tabIndex:0}:{}),ye)}},[w,$e,Ue,He,Ke,Le,ze,Be,re,K,Ce,n]),Or=v.useCallback(function(p){p.stopPropagation()},[]),Sr=v.useMemo(function(){return function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=p.refKey,E=h===void 0?"ref":h,F=p.onChange,O=p.onClick,G=ue(p,It),$=je({accept:N,multiple:o,type:"file",style:{display:"none"},onChange:B(P(F,re)),onClick:B(P(O,Or)),tabIndex:-1},E,S);return A(A({},$),G)}},[S,r,o,re,n]);return A(A({},pe),{},{isFocused:wr&&!n,getRootProps:jr,getInputProps:Sr,rootRef:w,inputRef:S,open:B(z)})}function Ht(e,t){switch(t.type){case"focus":return A(A({},e),{},{isFocused:!0});case"blur":return A(A({},e),{},{isFocused:!1});case"openDialog":return A(A({},Oe),{},{isFileDialogActive:!0});case"closeDialog":return A(A({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return A(A({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return A(A({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return A({},Oe);default:return e}}function ir(){}const Kt=Cr(m.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"}),"CloudUpload");var _r={exports:{}},Ar={exports:{}};(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t={rotl:function(r,n){return r<<n|r>>>32-n},rotr:function(r,n){return r<<32-n|r>>>n},endian:function(r){if(r.constructor==Number)return t.rotl(r,8)&16711935|t.rotl(r,24)&4278255360;for(var n=0;n<r.length;n++)r[n]=t.endian(r[n]);return r},randomBytes:function(r){for(var n=[];r>0;r--)n.push(Math.floor(Math.random()*256));return n},bytesToWords:function(r){for(var n=[],i=0,l=0;i<r.length;i++,l+=8)n[l>>>5]|=r[i]<<24-l%32;return n},wordsToBytes:function(r){for(var n=[],i=0;i<r.length*32;i+=8)n.push(r[i>>>5]>>>24-i%32&255);return n},bytesToHex:function(r){for(var n=[],i=0;i<r.length;i++)n.push((r[i]>>>4).toString(16)),n.push((r[i]&15).toString(16));return n.join("")},hexToBytes:function(r){for(var n=[],i=0;i<r.length;i+=2)n.push(parseInt(r.substr(i,2),16));return n},bytesToBase64:function(r){for(var n=[],i=0;i<r.length;i+=3)for(var l=r[i]<<16|r[i+1]<<8|r[i+2],d=0;d<4;d++)i*8+d*6<=r.length*8?n.push(e.charAt(l>>>6*(3-d)&63)):n.push("=");return n.join("")},base64ToBytes:function(r){r=r.replace(/[^A-Z0-9+\/]/ig,"");for(var n=[],i=0,l=0;i<r.length;l=++i%4)l!=0&&n.push((e.indexOf(r.charAt(i-1))&Math.pow(2,-2*l+8)-1)<<l*2|e.indexOf(r.charAt(i))>>>6-l*2);return n}};Ar.exports=t})();var Wt=Ar.exports,Se={utf8:{stringToBytes:function(e){return Se.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(Se.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(e.charCodeAt(r)&255);return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}},cr=Se;/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var Nt=function(e){return e!=null&&(Er(e)||Gt(e)||!!e._isBuffer)};function Er(e){return!!e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function Gt(e){return typeof e.readFloatLE=="function"&&typeof e.slice=="function"&&Er(e.slice(0,0))}(function(){var e=Wt,t=cr.utf8,r=Nt,n=cr.bin,i=function(l,d){l.constructor==String?d&&d.encoding==="binary"?l=n.stringToBytes(l):l=t.stringToBytes(l):r(l)?l=Array.prototype.slice.call(l,0):!Array.isArray(l)&&l.constructor!==Uint8Array&&(l=l.toString());for(var o=e.bytesToWords(l),g=l.length*8,a=1732584193,c=-271733879,s=-1732584194,u=271733878,f=0;f<o.length;f++)o[f]=(o[f]<<8|o[f]>>>24)&16711935|(o[f]<<24|o[f]>>>8)&4278255360;o[g>>>5]|=128<<g%32,o[(g+64>>>9<<4)+14]=g;for(var y=i._ff,D=i._gg,_=i._hh,x=i._ii,f=0;f<o.length;f+=16){var C=a,T=c,q=s,K=u;a=y(a,c,s,u,o[f+0],7,-680876936),u=y(u,a,c,s,o[f+1],12,-389564586),s=y(s,u,a,c,o[f+2],17,606105819),c=y(c,s,u,a,o[f+3],22,-1044525330),a=y(a,c,s,u,o[f+4],7,-176418897),u=y(u,a,c,s,o[f+5],12,1200080426),s=y(s,u,a,c,o[f+6],17,-1473231341),c=y(c,s,u,a,o[f+7],22,-45705983),a=y(a,c,s,u,o[f+8],7,1770035416),u=y(u,a,c,s,o[f+9],12,-1958414417),s=y(s,u,a,c,o[f+10],17,-42063),c=y(c,s,u,a,o[f+11],22,-1990404162),a=y(a,c,s,u,o[f+12],7,1804603682),u=y(u,a,c,s,o[f+13],12,-40341101),s=y(s,u,a,c,o[f+14],17,-1502002290),c=y(c,s,u,a,o[f+15],22,1236535329),a=D(a,c,s,u,o[f+1],5,-165796510),u=D(u,a,c,s,o[f+6],9,-1069501632),s=D(s,u,a,c,o[f+11],14,643717713),c=D(c,s,u,a,o[f+0],20,-373897302),a=D(a,c,s,u,o[f+5],5,-701558691),u=D(u,a,c,s,o[f+10],9,38016083),s=D(s,u,a,c,o[f+15],14,-660478335),c=D(c,s,u,a,o[f+4],20,-405537848),a=D(a,c,s,u,o[f+9],5,568446438),u=D(u,a,c,s,o[f+14],9,-1019803690),s=D(s,u,a,c,o[f+3],14,-187363961),c=D(c,s,u,a,o[f+8],20,1163531501),a=D(a,c,s,u,o[f+13],5,-1444681467),u=D(u,a,c,s,o[f+2],9,-51403784),s=D(s,u,a,c,o[f+7],14,1735328473),c=D(c,s,u,a,o[f+12],20,-1926607734),a=_(a,c,s,u,o[f+5],4,-378558),u=_(u,a,c,s,o[f+8],11,-2022574463),s=_(s,u,a,c,o[f+11],16,1839030562),c=_(c,s,u,a,o[f+14],23,-35309556),a=_(a,c,s,u,o[f+1],4,-1530992060),u=_(u,a,c,s,o[f+4],11,1272893353),s=_(s,u,a,c,o[f+7],16,-155497632),c=_(c,s,u,a,o[f+10],23,-1094730640),a=_(a,c,s,u,o[f+13],4,681279174),u=_(u,a,c,s,o[f+0],11,-358537222),s=_(s,u,a,c,o[f+3],16,-722521979),c=_(c,s,u,a,o[f+6],23,76029189),a=_(a,c,s,u,o[f+9],4,-640364487),u=_(u,a,c,s,o[f+12],11,-421815835),s=_(s,u,a,c,o[f+15],16,530742520),c=_(c,s,u,a,o[f+2],23,-995338651),a=x(a,c,s,u,o[f+0],6,-198630844),u=x(u,a,c,s,o[f+7],10,1126891415),s=x(s,u,a,c,o[f+14],15,-1416354905),c=x(c,s,u,a,o[f+5],21,-57434055),a=x(a,c,s,u,o[f+12],6,1700485571),u=x(u,a,c,s,o[f+3],10,-1894986606),s=x(s,u,a,c,o[f+10],15,-1051523),c=x(c,s,u,a,o[f+1],21,-2054922799),a=x(a,c,s,u,o[f+8],6,1873313359),u=x(u,a,c,s,o[f+15],10,-30611744),s=x(s,u,a,c,o[f+6],15,-1560198380),c=x(c,s,u,a,o[f+13],21,1309151649),a=x(a,c,s,u,o[f+4],6,-145523070),u=x(u,a,c,s,o[f+11],10,-1120210379),s=x(s,u,a,c,o[f+2],15,718787259),c=x(c,s,u,a,o[f+9],21,-343485551),a=a+C>>>0,c=c+T>>>0,s=s+q>>>0,u=u+K>>>0}return e.endian([a,c,s,u])};i._ff=function(l,d,o,g,a,c,s){var u=l+(d&o|~d&g)+(a>>>0)+s;return(u<<c|u>>>32-c)+d},i._gg=function(l,d,o,g,a,c,s){var u=l+(d&g|o&~g)+(a>>>0)+s;return(u<<c|u>>>32-c)+d},i._hh=function(l,d,o,g,a,c,s){var u=l+(d^o^g)+(a>>>0)+s;return(u<<c|u>>>32-c)+d},i._ii=function(l,d,o,g,a,c,s){var u=l+(o^(d|~g))+(a>>>0)+s;return(u<<c|u>>>32-c)+d},i._blocksize=16,i._digestsize=16,_r.exports=function(l,d){if(l==null)throw new Error("Illegal argument "+l);var o=e.wordsToBytes(i(l,d));return d&&d.asBytes?o:d&&d.asString?n.bytesToString(o):e.bytesToHex(o)}})();var Vt=_r.exports;const Y=Tr(Vt);var sr={VITE_PUSHER_APP_KEY:"",VITE_PUSHER_APP_CLUSTER:"mt1",VITE_APP_NAME:"Larabiz",BASE_URL:"/build/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ur=1048576,Yt=e=>{const[t,r]=v.useState(),n=async(g,a,c,s)=>{const u=g.slice(a,c),f=new FormData;f.append("file",u,g.name),f.append("hash",Y(g.name)),f.append("index",s+"");const y=localStorage.getItem("lb_auth_token")?JSON.parse(localStorage.getItem("lb_auth_token")):null;await Ge.post((sr.VITE_APP_URL||"")+"/api/media/upload",f,{headers:{"Content-Type":"multipart/form-data",...y&&{Authorization:`Bearer ${y.access_token}`}},onUploadProgress:D=>{const _=Math.round(100*D.loaded/D.total);r(x=>{if(x){const C=x.findIndex(T=>T.hash===Y(g.name));return C!==-1?(x[C]={...x[C],progress:_},[...x]):[...x,{name:g.name,progress:_,hash:Y(g.name)}]}else return[{name:g.name,progress:_,hash:Y(g.name)}]})}})},i=async g=>{g.forEach(async a=>{const c=Math.ceil(a.size/ur);let s=0;for(let f=0;f<c;f++){const y=s+ur;await n(a,s,y,f),s=y}const u=localStorage.getItem("lb_auth_token")?JSON.parse(localStorage.getItem("lb_auth_token")):null;await Ge.post((sr.VITE_APP_URL||"")+"/api/media/combine",{filename:a.name,hash:Y(a.name)},{headers:{...u&&{Authorization:`Bearer ${u.access_token}`}}}),r(f=>f==null?void 0:f.filter(y=>y.name!==a.name))})},{getRootProps:l,getInputProps:d,isDragActive:o}=Dr({onDrop:i,accept:e==null?void 0:e.accept});return m.jsxs(We,{...l(),sx:{border:"2px dashed #eeeeee",borderRadius:"8px",padding:"40px",textAlign:"center",color:"#bdbdbd",transition:"border .24s ease-in-out","&:hover":{borderColor:"#2196f3"},...o&&{borderColor:"#2196f3"}},children:[m.jsx("input",{...d()}),m.jsx(Ir,{color:"primary",children:m.jsx(Kt,{fontSize:"large"})}),m.jsx(Ne,{variant:"h6",children:o?"Drop the files here ...":"Drag & drop some files here, or click to select files"}),t&&t.length>0&&t.map((g,a)=>m.jsxs(We,{sx:{width:"100%",mt:2},children:[m.jsx(kr,{variant:"determinate",value:g.progress}),m.jsxs(Ne,{variant:"body2",color:"textSecondary",children:[g.name," - ",`${g.progress}%`]})]},a))]})},Jt=()=>(v.useState(null),v.useState(""),v.useState(""),m.jsx(Ae,{children:m.jsx(Yt,{})})),Qt=Hr({topScrollPaper:{alignItems:"flex-start"},topPaperScrollBody:{verticalAlign:"top"}}),qt=e=>{const t=Qt(),r=()=>{e.setOpen(!1)};return m.jsxs(Kr,{open:e.open,onClose:r,"aria-labelledby":"form-dialog-title",scroll:"paper",maxWidth:"md",classes:{scrollPaper:t.topScrollPaper,paperScrollBody:t.topPaperScrollBody},sx:{"& .MuiDialog-container":{"& .MuiPaper-root":{width:"100%",maxWidth:"350px",marginTop:"100px"}}},children:[m.jsx(Wr,{sx:{textAlign:"center",fontWeight:"bold"},children:"Make Folder"}),m.jsx(Nr,{children:m.jsx(Yr,{label:"Folder Name",name:"name"})}),m.jsxs(Gr,{children:[m.jsx(ie,{variant:"contained",color:"primary",children:"Save"}),m.jsx(ie,{variant:"contained",onClick:r,color:"secondary",children:"Close"})]})]})},Zt=M.lazy(()=>lr(()=>import("./Form-BhRj_msD.js").then(e=>e.E),__vite__mapDeps([0,1,2,3,4,5])));function Xt({page:e}){var g;const t=(g=e.data.params)==null?void 0:g.folder,[r,n]=M.useState(!1),[i,l]=M.useState(!1),{data:d,refetch:o}=Rr({page:1,limit:50,parent_id:t||""});return M.useEffect(()=>{o()},[t]),m.jsxs(M.Fragment,{children:[m.jsx(Mr,{in:r,children:m.jsx(Ve,{children:m.jsx(Jt,{})})}),m.jsx(Ae,{sx:{mt:3},children:m.jsx(V,{container:!0,justifyContent:"flex-end",children:m.jsxs($r,{children:[m.jsx(ie,{type:"button",variant:"contained",color:"success",startIcon:m.jsx(Ye,{children:"cloud_upload"}),onClick:()=>n(!r),children:"Upload"}),m.jsx(ie,{type:"button",variant:"contained",color:"primary",startIcon:m.jsx(Ye,{children:"add"}),onClick:()=>l(!i),children:"New Folder"})]})})}),m.jsx(Ve,{sx:{mt:3},children:m.jsx(Ae,{children:d&&d.data.length>0?m.jsx(V,{container:!0,spacing:2,children:d.data.map((a,c)=>m.jsx(V,{item:!0,xs:6,sm:3,md:2,children:m.jsx(Vr,{item:a,showAction:!0})},c))}):m.jsx(V,{container:!0,spacing:2,children:m.jsx(V,{item:!0,xs:12,justifyContent:"center",children:m.jsx("h3",{children:"No data"})})})})}),m.jsx(Zt,{children:e.data.children||[]}),m.jsx(qt,{open:i,setOpen:l})]})}const en=e=>{switch(e.data.template){case"media":return m.jsx(Xt,{page:e});case"crud":return m.jsx(Jr,{page:e})}return m.jsx(_e,{})},rn=e=>{switch(e.data.template){default:return en(e)}},tn=rn,nn=M.lazy(()=>lr(()=>import("./Form-BhRj_msD.js").then(e=>e.E),__vite__mapDeps([0,1,2,3,4,5])));function dn({uri:e}){var o;const t=Lr();e=e||t.pathname.replace("/admin-cp/","");const{data:r,error:n,refetch:i,isLoading:l}=zr(e);return v.useEffect(()=>{i()},[t.pathname,i]),(!r||l)&&!n?m.jsx(Ur,{}):r.data?n?m.jsx(_e,{}):m.jsx(Br,{title:r.data.title,description:r.data.description,breadcrumbs:r.data.breadcrumbs,showTitle:r.data.show_title,children:(o=r.data)!=null&&o.template?tn(r):m.jsx(nn,{children:r.data.children||[]})}):m.jsx(_e,{})}export{dn as default};
