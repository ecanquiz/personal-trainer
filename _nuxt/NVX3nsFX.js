import{j as i,J as t}from"./B1g9UxbC.js";function c(n,u,e){let o=i(e==null?void 0:e.value),l=t(()=>n.value!==void 0);return[t(()=>l.value?n.value:o.value),function(r){return l.value||(o.value=r),u==null?void 0:u(r)}]}function p(n={},u=null,e=[]){for(let[o,l]of Object.entries(n))a(e,f(u,o),l);return e}function f(n,u){return n?n+"["+u+"]":u}function a(n,u,e){if(Array.isArray(e))for(let[o,l]of e.entries())a(n,f(u,o.toString()),l);else e instanceof Date?n.push([u,e.toISOString()]):typeof e=="boolean"?n.push([u,e?"1":"0"]):typeof e=="string"?n.push([u,e]):typeof e=="number"?n.push([u,`${e}`]):e==null?n.push([u,""]):p(e,u,n)}function s(n){var u,e;let o=(u=n==null?void 0:n.form)!=null?u:n.closest("form");if(o){for(let l of o.elements)if(l!==n&&(l.tagName==="INPUT"&&l.type==="submit"||l.tagName==="BUTTON"&&l.type==="submit"||l.nodeName==="INPUT"&&l.type==="image")){l.click();return}(e=o.requestSubmit)==null||e.call(o)}}export{c as d,p as e,s as p};
