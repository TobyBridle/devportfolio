import{b,t as N}from"../chunks/disclose-version.B6foV4YL.js";import{D as E,p as W,G as J,ar as Q,a4 as Y,B as ee,q as te,a0 as ae,a2 as O,as as se,I as re,at as ne,au as ie,aa as ce,u as oe,e as U,av as le,ac as fe,n as x,aw as ve,a as $,b as D,c as de,C as pe,K as P,E as _e,T as w,U as k,V as T,S as R,ax as B}from"../chunks/runtime.L4c9JTLj.js";import{a as ue,s as K}from"../chunks/render.CowxG5CU.js";import{p as S,o as he,i as C}from"../chunks/index-client.hJrWrzaw.js";function me(e,t,s){E&&W();var r=e,a=ae,i;J(()=>{Q(a,a=t())&&(i&&Y(i),i=ee(()=>s(r)))}),E&&(r=te)}function ge(e,t,s,r){var a=e.__attributes??(e.__attributes={});E&&(a[t]=e.getAttribute(t)),a[t]!==(a[t]=s)&&(s==null?e.removeAttribute(t):typeof s!="string"&&ye(e).includes(t)?e[t]=s:e.setAttribute(t,s))}var q=new Map;function ye(e){var t=q.get(e.nodeName);if(t)return t;q.set(e.nodeName,t=[]);for(var s,r=O(e),a=Element.prototype;a!==r;){s=se(r);for(var i in s)s[i].set&&t.push(i);r=O(r)}return t}function be(e,t){var s=e.__className,r=xe(t);E&&e.className===r?e.__className=r:(s!==r||E&&e.className!==r)&&(t==null?e.removeAttribute("class"):e.className=r,e.__className=r)}function xe(e){return e??""}const we=()=>performance.now(),_={tick:e=>requestAnimationFrame(e),now:()=>we(),tasks:new Set};function z(e){_.tasks.forEach(t=>{t.c(e)||(_.tasks.delete(t),t.f())}),_.tasks.size!==0&&_.tick(z)}function ke(e){let t;return _.tasks.size===0&&_.tick(z),{promise:new Promise(s=>{_.tasks.add(t={c:e,f:s})}),abort(){_.tasks.delete(t)}}}function X(e,t){e.dispatchEvent(new CustomEvent(t))}function Ee(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(s=>s[0].toUpperCase()+s.slice(1)).join("")}function H(e){const t={},s=e.split(";");for(const r of s){const[a,i]=r.split(":");if(!a||i===void 0)break;const d=Ee(a.trim());t[d]=i.trim()}return t}const Ne=e=>e;function F(e,t,s,r){var a=(e&ve)!==0,i="in",d,y=t.inert,l,v;function u(){var f=de,p=U;$(null),D(null);try{return d??(d=s()(t,(r==null?void 0:r())??{},{direction:i}))}finally{$(f),D(p)}}var h={is_global:a,in(){t.inert=y,l==null||l.abort(),X(t,"introstart"),l=Z(t,u(),v,1,()=>{X(t,"introend"),l==null||l.abort(),l=d=void 0})},out(f){{f==null||f(),d=void 0;return}},stop:()=>{l==null||l.abort()}},c=U;if((c.transitions??(c.transitions=[])).push(h),ue){var o=a;if(!o){for(var n=c.parent;n&&n.f&re;)for(;(n=n.parent)&&!(n.f&ne););o=!n||(n.f&ie)!==0}o&&ce(()=>{oe(()=>h.in())})}}function Z(e,t,s,r,a){if(le(t)){var i,d=!1;return fe(()=>{if(!d){var f=t({direction:"in"});i=Z(e,f,s,r,a)}}),{abort:()=>{d=!0,i==null||i.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(!(t!=null&&t.duration))return a(),{abort:x,deactivate:x,reset:x,t:()=>r};const{delay:y=0,css:l,tick:v,easing:u=Ne}=t;var h=[];if(v&&v(0,1),l){var c=H(l(0,1));h.push(c,c)}var o=()=>1-r,n=e.animate(h,{duration:y});return n.onfinish=()=>{var f=1-r,p=r-f,m=t.duration*Math.abs(p),g=[];if(m>0){if(l)for(var j=Math.ceil(m/16.666666666666668),M=0;M<=j;M+=1){var L=f+p*u(M/j),V=l(L,1-L);g.push(H(V))}o=()=>{var A=n.currentTime;return f+p*u(A/m)},v&&ke(()=>{if(n.playState!=="running")return!1;var A=o();return v(A,1-A),!0})}n=e.animate(g,{duration:m,fill:"forwards"}),n.onfinish=()=>{o=()=>r,v==null||v(r,1-r),a()}},{abort:()=>{n&&(n.cancel(),n.effect=null,n.onfinish=x)},deactivate:()=>{a=x},reset:()=>{},t:()=>o()}}const je=e=>e;function Ae(e,{delay:t=0,duration:s=400,easing:r=je}={}){const a=+getComputedStyle(e).opacity;return{delay:t,duration:s,easing:r,css:i=>`opacity: ${i*a}`}}const Te=`⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠈⠉⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠈⢭⡻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠹⣦⢻⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠛⠛⠛⠛⠛⠛⠛⠛⣛⡻⢿⣿⣿⠀⠀⠀⠀⠀⠀⢹⣧⢻⣿⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠙⢷⣭⡻⡇⠀⠀⠀⠀⠀⠀⢿⣎⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠙⣿⣎⠀⠀⠀⠀⠀⠀⠸⣿⡼⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠈⢻⠆⠀⠀⠀⠀⠀⠀⠉⠁⠀⠉⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠉⠀⠒⠲⢶⣦⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣶⣶⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⡽⠬⠉⠉⠉⠉⠛⠛⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⣠⡿⠋⡀⠀⠀⠀⣠⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣴⣶⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣛⣛⣛⣛⣦⠄⠀⠀⠀⠀⠀⠀⠁⠀⠀⢰⠟⣠⢶⠁⠀⠀⣴⢟⣵⠀⢀⠀⠀⡀⠀⠀⠀⣀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠉⠛⠒⠛⠃⠀⡤⠀⠀⠀⠀⠄⠀⠀⣸⣯⡿⠀⠀⢈⣴⣿⡟⠀⠄⠀⠀⡅⠀⠴⠶⠶⠖⠋⠉⠛⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣤⣄⣀⠀⠀⠀⠸⡄⠀⠀⢀⣀⠀⠐⢿⣿⡇⠀⣴⡿⠟⠉⣀⣀⡀⢀⣷⠁⠀⠀⠀⠀⢀⣀⣤⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⡘⢇⠀⠀⠀⣿⣼⣄⣠⡙⡁⡜⣉⣀⣰⣿⣏⣿⠃⢸⠇⠀⠀⣠⣶⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠁⠉⠂⠀⢠⣬⣭⣿⣿⢿⣿⣟⣛⣓⣶⣾⠏⠚⠁⠀⠀⠉⠉⠈⢉⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣆⣠⠀⠀⢻⣿⣿⣟⢸⣿⣿⣿⣿⣿⡟⢠⣤⣤⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⣴⣆⠈⠻⣿⣯⠵⠿⣿⣿⡿⢋⣾⣜⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠿⣛⣵⡾⢇⣿⠹⣆⠀⠘⠿⣿⣿⢟⣩⢮⣾⣿⣿⣿⣮⡻⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠙⠉⠀⠀⠠⠾⠛⠁⣠⣾⡿⠀⠹⣆⢹⣄⠀⣶⡿⣣⢏⣿⣿⣷⣮⡙⢿⣷⡁⣮⢁⣍⠻⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣩⣭⣥⣤⣤⣝⣂⡻⠧⠛⢱⣟⣀⣽⣿⣟⣋⣉⡶⢒⣼⡇⣼⣿⠀⠀⠀⣞⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⢛⣉⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠴⣾⣿⣿⣿⣿⣿⡆⢸⣿⣿⣿⣿⣭⣝⠛⣫⣾⣿⡿⢰⣿⣿⡇⠀⠀⣿⡄⢠⣮⣝⡻⢿⣿⣿⣿⣿
⣿⣿⣿⣿⡇⣿⣿⣿⢿⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⠿⠿⢿⣿⡇⠈⢿⠿⠿⢟⣫⣵⣿⣿⡿⠟⢡⣿⣿⣿⡇⠀⢀⣿⣧⣿⣿⣿⣿⣷⣮⡛⣿⣿
⣿⣿⡿⠋⠀⢿⣿⣿⢸⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠢⢤⣀⡀⠈⠙⠻⢿⣷⣶⣶⣾⣿⣿⣿⡿⠟⠋⠁⠀⢀⣾⣿⣿⣿⡇⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⢣⣿⣿
⣿⡿⠁⠀⠀⢸⣿⡏⠈⣿⡿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠒⠲⠶⠶⣿⡿⠿⠛⠉⠁⠀⠀⠀⡀⣀⣾⣿⣿⣿⣿⣧⣿⣿⣿⣿⣿⣿⣿⣿⣿⢏⣶⡙⣿
⡿⠃⠀⠀⢀⡎⣿⡇⠀⢿⡇⠘⢿⣿⡀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢒⣩⣾⣿⢟⣽⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⡟⣼⣿⣷⠿
⡇⠀⠀⠀⢸⣿⡘⡇⠀⠸⡇⠀⠈⢿⣷⠀⠀⠸⣷⣤⡀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⣀⣠⢄⣠⣶⣿⣿⢟⣵⣿⡟⣿⣿⣿⣿⣿⣿⣿⣿⠁⢻⣿⡟⠀⣫⣾⣿⡇
⣷⠀⠀⠀⠈⢿⣿⡄⠀⠀⢣⠀⠀⠈⢿⣷⡀⠀⢻⣿⣿⣷⣤⣀⠀⠀⠀⠈⠉⠉⠉⢉⣩⣶⣿⠿⠛⢉⣴⣿⠟⠉⢰⣿⣿⣿⣿⣿⣿⣿⡏⠀⠘⠉⠀⠀⣩⢟⣩⣾
⣿⠀⠀⠈⠳⢤⣉⠃⠀⠀⠈⠀⠀⠀⠀⢻⣷⡄⠈⣿⠻⢿⣿⣿⣿⣷⣶⣤⣤⣤⣾⠿⠛⠉⠁⣠⣴⣿⠟⠁⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⣈⣵⣿⡏⣿
⡏⠀⠀⣿⣷⡶⢉⡀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣦⡸⣷⡀⠉⠙⠛⠿⠿⠟⠛⠉⠀⠀⢀⣤⣾⡿⠛⠁⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⠇⠀⢀⣀⣴⣦⣭⣻⣿⣶
  ⢰⣿⣿⣾⣿⣿⣿⣶⣶⣦⡄⠀⠀⠀⠀⠈⢿⣿⣿⣿⣄⠀⠀⠀⠀⠀⣀⣀⣤⣾⣿⠿⠋⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⡟⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏
`,Se=` ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢟⣡⣶⣿⣿⣿⣿⣶⣮⣙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣩⣽⣶⣶⢰⡆⣮⣙⠿⣿⣿⣿⣿⣿⣿⣿
 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣱⣿⣷⣬⡛⢿⣿⣿⣿⣿⣿⣧⡘⡿⢛⣛⣽⣽⣷⣶⣶⣮⣭⣍⡛⠛⡋⢉⠙⠿⠿⠿⠿⠿⠿⢣⣾⣿⣿⢿⣿⡇⡇⢻⣿⣷⠘⢿⣿⣿⣿⣹⣿
 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠰⣛⣻⠿⠿⣿⣶⣍⢻⣿⣿⣿⣿⣷⡸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣩⣶⣾⣿⣿⣿⣟⣒⣒⣉⣙⠾⣿⣿⡇⡇⢸⣿⣿⢰⡸⣿⠹⡚⣿⣿
 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣯⣽⣿⣿⣷⣦⣝⢻⣷⡙⣮⢍⢿⣿⡇⣒⡒⠿⣷⣶⣭⡛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣵⣄⡙⢱⡇⣿⣿⡟⣼⡇⢻⡀⠉⠮⣭
 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣉⣭⣭⣍⣛⠿⣿⣷⡜⢿⣌⢎⣆⢻⢣⣿⣿⣷⣶⣍⠻⣿⣿⣿⣿⣿⣿⡿⠿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠰⣿⡟⣰⡿⢳⠸⠘⡶⣁⣿
 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⡘⣿⣿⣿⣿⣷⣌⠻⣿⡌⣿⡌⣿⢌⣾⣿⣿⣿⣿⣿⣷⣬⣿⣿⣿⣿⣿⣿⣷⣮⡑⠌⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠈⠴⠿⠡⢾⣶⣶⣶⣿⣿
 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣌⠻⣿⣿⣿⣿⣧⢹⣿⠸⠟⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡌⠊⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⡿⠶⠌⠙⢿⣿⣿
 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡗⣠⣍⡙⠛⠛⠃⠉⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⡆⣻⣭⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣌⠻⣷⣶⣿⣿
 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢣⣿⣿⢡⣿⡇⣾⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⢼⣧⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠻⣿⣷⡌⢻⣿⣿
 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢸⣿⡿⣼⡿⢇⣿⣇⢿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⠟⡡⢄⡀⠈⠋⠩⢍⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⠙⢿⡄⢿⣿
 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣾⣿⡇⣿⣧⣿⣿⣿⣼⣿⣿⣿⣿⡏⣿⣿⣿⠟⡏⣼⣿⣿⡟⢹⣿⢸⣿⣦⣥⣤⣴⣭⣤⣤⢹⣿⢻⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣧⠀⠻⢸⣿
 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢳⣿⣿⡇⣿⣿⣿⣿⡇⣿⣿⣿⣿⢻⡇⣿⣿⠾⠀⠃⠛⣃⣛⠇⠘⠿⣎⠻⣿⣿⣿⣿⣿⣿⡟⣸⡹⢸⢿⣿⣿⣿⣿⣧⠹⣿⣆⠹⣿⡄⠆⣿⣿
 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⣸⣿⣿⠇⢻⡿⣿⣯⠱⠹⣿⣧⠸⡎⠃⠈⠡⢶⣦⠀⢀⢙⠻⠟⠦⢑⣶⣶⣿⣿⣿⣿⣉⠉⠄⢉⡁⠉⠀⣿⣿⣿⣿⣿⡇⠘⣿⡆⠹⢁⣿⣿⣿
 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢁⣿⣿⠏⣾⠸⣧⢹⣿⣷⡑⣌⢛⣓⣀⣤⣴⢲⡾⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⣃⣾⣿⡏⣹⣿⣿⢡⡄⡿⢳⣠⣾⣿⣿⣿
 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣼⣿⡏⣼⣿⡆⢿⣧⠙⠅⠲⢦⣼⡿⣷⣜⠻⠀⠀⠀⠀⠀⠈⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣷⣮⣍⣛⠉⣰⣿⡿⠃⡞⠀⣡⣾⣿⣿⣿⣿⣿
 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⢁⣿⡟⣸⣿⣿⠟⠘⠏⣠⣼⣿⡀⢹⣿⣦⡍⢠⣴⣾⣿⣿⣿⣷⣦⣄⢹⣿⣿⣿⣿⣿⣿⡿⠛⠁⠈⠁⠀⠉⣀⡬⢉⣥⡔⠀⣤⣿⣿⣿⣿⣿⣿⣿⣿
 ⣿⣿⣿⣿⣿⣿⣿⣿⡟⣼⡿⢱⣿⣿⠟⡄⣿⡄⢻⣏⠇⣄⢻⣿⣿⣷⣿⣿⣿⡿⣿⣟⢿⣿⣿⣾⣿⣿⣿⣿⠻⣟⣠⣶⣿⣿⣿⣦⡀⠘⠀⣾⣿⣿⡆⣭⣭⣽⣿⣿⣿⣿⣿⣿
 ⣿⣿⣿⣿⣿⣿⣿⣿⠃⡿⣡⣟⣿⠏⣴⢠⣿⡷⡌⢻⣷⡌⠘⣿⣿⣿⣿⣿⣿⣧⣿⣿⣼⣿⣿⣿⣿⣿⣿⣿⠰⣿⣿⣿⣿⣿⡟⣿⣷⡇⠃⠹⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿
 ⣿⣿⣿⣿⣿⣿⣿⡿⡸⢡⣿⣿⢃⣼⣿⢸⣿⡇⠻⣦⣙⠳⠖⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣯⣴⣿⣿⣿⣿⣿⣧⣼⣿⣧⢸⣦⢹⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿
 ⣿⣿⣿⣿⣿⣿⣿⠇⢡⣿⡿⢣⣾⣿⡏⣿⣿⣿⣿⣿⣿⣶⣦⡈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢃⡛⠿⠿⠟⣻⣿⣿⣿⣿⣿⣿⣿⣿⡟⣀⢻⡆⢻⡇⣿⣿⣿⣿⣿⣿⣿⠛⠋
 ⣿⣿⣿⣿⣿⣿⡟⢠⣿⡿⣡⣿⣿⣿⠇⣿⣿⣿⢠⣤⣤⠤⣤⣤⡌⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⣿⣆⢻⣆⠃⢰⣶⣶⣶⣶⠆⠀⠀⠀
 ⢿⣿⣿⣿⣿⣿⢣⣿⡟⣰⣿⣿⣿⣿⢰⣿⣿⣿⣿⣿⣿⣼⣿⢋⠔⠠⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⣴⡇⣿⣿⢆⢻⣆⢻⣿⣿⣿⣿⣷⡀⠀⠀
 ⢸⣿⣿⣿⣿⡇⣼⠏⣴⣿⣿⣿⣿⡟⢸⣿⣿⣿⣿⣿⣿⣿⣧⡞⢰⣿⣿⡆⣈⡛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⣩⢰⣿⣿⡇⡿⣱⣿⡎⢿⢸⣿⣿⣿⣿⣿⣷⠀⠀
 ⢸⣿⣿⣿⡟⢸⠏⣼⣿⣿⣿⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣷⣼⣿⣿⢰⣿⣿⣷⣦⣍⣛⠿⠿⠿⣿⠿⠿⢛⣉⣵⣶⢻⣿⣾⣿⣿⡇⣿⣿⣿⣿⡌⠀⣿⣿⣿⣿⣿⣿⣧⠀
 ⢸⣿⣿⣿⢡⠏⣼⣿⣿⣿⣿⣿⣿⢰⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠏⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣀⡀⣿⣿⣿⣿⣿⣼⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⡆⣿⣿⣿⣿⣿⣿⣿⣿
 ⣾⣿⣿⠏⠎⣼⣿⣿⣿⣿⣿⣿⡏⠚⢘⣛⣉⣭⣥⣭⣥⣶⣶⣶⣿⣌⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿
 ⣿⣿⡿⠐⣼⣿⣿⣿⣿⣿⠟⣩⣴⣶⣦⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣮⡙⢿⣿⣿⣿⣿⣿⠟⡩⠩⠤⠄⠭⢭⣽⣿⣟⡻⠿⣿⣿⣿⢸⣿⣿⣿⣿⣿⡄⣿⣿⣿⣿⣿⣿⣿
 ⠻⠿⠃⣰⣿⣿⣿⣿⡿⠁⣴⣿⣿⣿⣿⣿⣆⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣌⠛⣛⡛⠇⣷⣬⣃⠛⠛⢛⣿⣿⣿⣿⠳⠄⡐⠶⢶⡶⢌⠙⠻⣿⣿⣷⢻⣿⣿⣿⣿⣿⣿
 ⣿⡇⢠⣿⣿⣿⣿⡿⢁⣴⣿⣿⣿⣿⣿⣿⣿⣷⣌⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡌⢿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠙⠻⠷⠶⠒⠀⠀⠹⣿⣿⡈⣿⣿⣿⣿⣿⢣
 ⡿⢡⣿⣿⣿⣿⣿⠃⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣷⣘⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣴⣶⡆⢺⡂⣿⣿⣧⢸⣿⣿⣿⣿⣸
 ⣇⣾⣿⣿⣿⣿⡟⢸⣿⣿⣿⣿⣿⣿⣿⣿⣮⡻⣿⣿⣿⣷⣌⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⣼⡇⣿⣿⣿⡎⢿⣿⣿⣿⣿
 ⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⡻⣿⣿⣿⣷⣬⡙⠿⣿⣿⣿⣿⣿⣿⣿⢻⣶⣶⣬⣭⣭⣭⣽⣿⣿⣿⣛⣛⣛⣛⣛⣛⣋⠀⢻⡇⢻⣿⣿⣷⡸⡿⠿⠿⢹
`,Ie=` ██████╗ ██████╗ ███████╗███╗   ██╗██╗  ██╗██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗
 ██╔═══██╗██╔══██╗██╔════╝████╗  ██║██║  ██║██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝
██║   ██║██████╔╝█████╗  ██╔██╗ ██║███████║██║ █╗ ██║██║   ██║██████╔╝█████╔╝
██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║╚════██║██║███╗██║██║   ██║██╔══██╗██╔═██╗
╚██████╔╝██║     ███████╗██║ ╚████║     ██║╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝     ╚═╝ ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
`,G=[{content:Te,label:"Goku staring at viewer"},{content:Se,label:"Sailor Moon Girl"},{content:Ie,label:"Please Hire Me"}];function Me(){const e=Math.floor(Math.random()*G.length),t=parseInt(localStorage.getItem("fetch_ascii")??"0",10)===e,s=e-1*+t;return localStorage.setItem("fetch_ascii",`${s>=0?s:G.length+s}`),G.at(s)}const I=function(e,t,s){return Math.min(Math.max(e,t),s)};var Re=N("<div>|</div>"),Ce=N('<span class="fixed bottom-0 h-[2ch] w-full bg-[var(--base01)] svelte-yrgjp"> </span> <!>',1),Fe=N('<section class=" svelte-yrgjp"><span class="text-gray svelte-yrgjp">[tobybridle@home resume]$&ThinSpace;</span> <span class="svelte-yrgjp">tobyfetch</span>&NoBreak; <pre class="cursor inline svelte-yrgjp">█</pre></section>'),Ge=N('<section class="flex h-[35%] w-full flex-col items-center gap-16 md:flex-row md:items-start svelte-yrgjp"><pre class="aspect-auto max-w-fit overflow-hidden text-clip whitespace-pre-wrap text-center text-xs max-[450px]:hidden svelte-yrgjp"> </pre> <div class="flex w-max flex-col gap-2 svelte-yrgjp"><h1 class="mb-2 min-h-[2ch] border-x-0 border-b-2 border-t-0 border-dashed py-2 [border-color:var(--base02)] [width:fit-content] svelte-yrgjp" id="about-me">tobybridle</h1> <ul class="svelte-yrgjp"><li class="svelte-yrgjp"><h3 class="emphasised-text svelte-yrgjp">Email:</h3> <a href="mailto:bridle.toby@gmail.com" class="svelte-yrgjp">bridle.toby@gmail.com</a></li> <li class="svelte-yrgjp"><h3 class="emphasised-text svelte-yrgjp">Location:</h3> United Kingdom</li> <li class="svelte-yrgjp"><h3 class="emphasised-text svelte-yrgjp">GitHub:</h3> <a href="https://github.com/tobybridle" class="svelte-yrgjp">@TobyBridle</a></li> <li class="svelte-yrgjp"><h3 class="emphasised-text svelte-yrgjp">Location:</h3> United Kingdom</li></ul></div></section>'),Le=N('<!> <div class="p-8 sm:p-16 svelte-yrgjp"><!> <br class="svelte-yrgjp"> <br class="svelte-yrgjp"> <!></div>',1);function Pe(e,t){pe(t,!0);const s=S({state:null}),r=S({state:!1}),a=S({state:"",active_index:0}),i=S({state:!1});he(()=>{s.state=Me(),r.state=!0,document.addEventListener("keydown",c=>{if(c.preventDefault(),!i.state&&c.shiftKey&&c.key==":")a.state="",a.active_index=0,i.state=!0;else if(i.state)switch(c.key){case"Enter":i.state=!1;break;case"Escape":i.state=!1;break;case"Shift":case"Meta":case"PageUp":case"PageDown":case"PrntScr":case"Control":case"ArrowUp":case"ArrowDown":break;case"ArrowLeft":a.active_index=I(0,a.active_index-1,Number.MAX_SAFE_INTEGER);break;case"ArrowRight":a.active_index=I(0,a.active_index+1,a.state.length);break;case"Delete":a.state=a.state.slice(0,a.active_index)+a.state.slice(a.active_index+1),a.active_index=I(0,a.active_index,Number.MAX_SAFE_INTEGER);break;case"Backspace":a.state=a.state.slice(0,a.active_index-1)+a.state.slice(a.active_index),a.active_index=I(0,a.active_index-1,Number.MAX_SAFE_INTEGER);break;default:a.state+=c.key,a.active_index+=1}})});function d(c,{speed:o=1,delay:n=0}){if(!(c.childNodes.length===1&&c.childNodes[0].nodeType===Node.TEXT_NODE))throw new Error("This transition only works on elements with a single text node child");const p=c.textContent||"";return{duration:p.length/(o*.01),delay:n,tick:g=>{const j=~~(p.length*g);c.textContent=p.slice(0,j)}}}var y=Le(),l=P(y);C(l,()=>i.state,c=>{var o=Ce(),n=P(o),f=w(n);k(n);var p=T(n,2);me(p,()=>`caret-${a.active_index}`,m=>{var g=Re();R(()=>be(g,`${`fixed bottom-0 left-[${a.active_index}ch]`??""} svelte-yrgjp`)),b(m,g)}),R(()=>K(f,`:${a.state??""}`)),b(c,o)});var v=T(l,2),u=w(v);C(u,()=>r.state,c=>{var o=Fe(),n=T(w(o),2);B(2),k(o),F(1,n,()=>d,()=>({speed:1.2})),b(c,o)});var h=T(u,6);C(h,()=>s.state!==null,c=>{var o=Ge(),n=w(o),f=w(n,!0);k(n),B(2),k(o),R(()=>{ge(n,"title",s.state.label),K(f,s.state.content)}),F(1,n,()=>d,()=>({speed:s.state.content.length/3,delay:1200})),F(1,o,()=>Ae,()=>({delay:1200})),b(c,o)}),k(v),b(e,y),_e()}export{Pe as component};
