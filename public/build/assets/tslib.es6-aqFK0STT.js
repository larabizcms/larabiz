var y=function(i,a){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])},y(i,a)};function p(i,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");y(i,a);function e(){this.constructor=i}i.prototype=a===null?Object.create(a):(e.prototype=a.prototype,new e)}var h=function(){return h=Object.assign||function(a){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a},h.apply(this,arguments)};function _(i,a,e,n){function o(t){return t instanceof e?t:new e(function(u){u(t)})}return new(e||(e=Promise))(function(t,u){function l(c){try{r(n.next(c))}catch(s){u(s)}}function f(c){try{r(n.throw(c))}catch(s){u(s)}}function r(c){c.done?t(c.value):o(c.value).then(l,f)}r((n=n.apply(i,a||[])).next())})}function d(i,a){var e={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},n,o,t,u;return u={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function l(r){return function(c){return f([r,c])}}function f(r){if(n)throw new TypeError("Generator is already executing.");for(;u&&(u=0,r[0]&&(e=0)),e;)try{if(n=1,o&&(t=r[0]&2?o.return:r[0]?o.throw||((t=o.return)&&t.call(o),0):o.next)&&!(t=t.call(o,r[1])).done)return t;switch(o=0,t&&(r=[r[0]&2,t.value]),r[0]){case 0:case 1:t=r;break;case 4:return e.label++,{value:r[1],done:!1};case 5:e.label++,o=r[1],r=[0];continue;case 7:r=e.ops.pop(),e.trys.pop();continue;default:if(t=e.trys,!(t=t.length>0&&t[t.length-1])&&(r[0]===6||r[0]===2)){e=0;continue}if(r[0]===3&&(!t||r[1]>t[0]&&r[1]<t[3])){e.label=r[1];break}if(r[0]===6&&e.label<t[1]){e.label=t[1],t=r;break}if(t&&e.label<t[2]){e.label=t[2],e.ops.push(r);break}t[2]&&e.ops.pop(),e.trys.pop();continue}r=a.call(i,e)}catch(c){r=[6,c],o=0}finally{n=t=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}}function w(i,a){var e=typeof Symbol=="function"&&i[Symbol.iterator];if(!e)return i;var n=e.call(i),o,t=[],u;try{for(;(a===void 0||a-- >0)&&!(o=n.next()).done;)t.push(o.value)}catch(l){u={error:l}}finally{try{o&&!o.done&&(e=n.return)&&e.call(n)}finally{if(u)throw u.error}}return t}function v(i,a,e){if(e||arguments.length===2)for(var n=0,o=a.length,t;n<o;n++)(t||!(n in a))&&(t||(t=Array.prototype.slice.call(a,0,n)),t[n]=a[n]);return i.concat(t||Array.prototype.slice.call(a))}export{_,d as a,v as b,w as c,p as d,h as e};