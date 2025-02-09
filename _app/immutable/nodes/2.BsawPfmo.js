import{a as b,b as k}from"../chunks/disclose-version.DuG70djo.js";import{h as I,O as H,Y as Z,av as W,a7 as Y,X as J,P as Q,a4 as V,Z as ee,aw as te,ax as ae,ae as se,u as ne,F as O,ay as re,ag as ie,n as g,az as ce,B as P,C as U,E as oe,p as le,i as fe,d as ve,y as x,f as A,z as w,x as F,j as B}from"../chunks/runtime.XoDN4fp3.js";import{a as de,s as D}from"../chunks/render.C02bxtTy.js";import{p as T,o as pe,i as R}from"../chunks/index-client.DL2Df28n.js";import{s as ue}from"../chunks/attributes.D6j9gINM.js";function _e(e,a,s){I&&H();var n=e,t=V,i;Z(()=>{W(t,t=a())&&(i&&Y(i),i=J(()=>s(n)))}),I&&(n=Q)}function he(e,a){var s=e.__className,n=me(a);I&&e.className===n?e.__className=n:(s!==n||I&&e.className!==n)&&(a==null?e.removeAttribute("class"):e.className=n,e.__className=n)}function me(e){return e??""}const ye=()=>performance.now(),_={tick:e=>requestAnimationFrame(e),now:()=>ye(),tasks:new Set};function X(e){_.tasks.forEach(a=>{a.c(e)||(_.tasks.delete(a),a.f())}),_.tasks.size!==0&&_.tick(X)}function be(e){let a;return _.tasks.size===0&&_.tick(X),{promise:new Promise(s=>{_.tasks.add(a={c:e,f:s})}),abort(){_.tasks.delete(a)}}}function $(e,a){e.dispatchEvent(new CustomEvent(a))}function ge(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const a=e.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(s=>s[0].toUpperCase()+s.slice(1)).join("")}function K(e){const a={},s=e.split(";");for(const n of s){const[t,i]=n.split(":");if(!t||i===void 0)break;const d=ge(t.trim());a[d]=i.trim()}return a}const xe=e=>e;function C(e,a,s,n){var t=(e&ce)!==0,i="in",d,y=a.inert,l,v;function h(){var f=oe,p=O;P(null),U(null);try{return d??(d=s()(a,(n==null?void 0:n())??{},{direction:i}))}finally{P(f),U(p)}}var m={is_global:t,in(){a.inert=y,l==null||l.abort(),$(a,"introstart"),l=z(a,h(),v,1,()=>{$(a,"introend"),l==null||l.abort(),l=d=void 0})},out(f){{f==null||f(),d=void 0;return}},stop:()=>{l==null||l.abort()}},c=O;if((c.transitions??(c.transitions=[])).push(m),de){var o=t;if(!o){for(var r=c.parent;r&&r.f&ee;)for(;(r=r.parent)&&!(r.f&te););o=!r||(r.f&ae)!==0}o&&se(()=>{ne(()=>m.in())})}}function z(e,a,s,n,t){if(re(a)){var i,d=!1;return ie(()=>{if(!d){var f=a({direction:"in"});i=z(e,f,s,n,t)}}),{abort:()=>{d=!0,i==null||i.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(!(a!=null&&a.duration))return t(),{abort:g,deactivate:g,reset:g,t:()=>n};const{delay:y=0,css:l,tick:v,easing:h=xe}=a;var m=[];if(v&&v(0,1),l){var c=K(l(0,1));m.push(c,c)}var o=()=>1-n,r=e.animate(m,{duration:y});return r.onfinish=()=>{var f=1-n,p=n-f,u=a.duration*Math.abs(p),E=[];if(u>0){if(l)for(var N=Math.ceil(u/16.666666666666668),M=0;M<=N;M+=1){var L=f+p*h(M/N),q=l(L,1-L);E.push(K(q))}o=()=>{var j=r.currentTime;return f+p*h(j/u)},v&&be(()=>{if(r.playState!=="running")return!1;var j=o();return v(j,1-j),!0})}r=e.animate(E,{duration:u,fill:"forwards"}),r.onfinish=()=>{o=()=>n,v==null||v(n,1-n),t()}},{abort:()=>{r&&(r.cancel(),r.effect=null,r.onfinish=g)},deactivate:()=>{t=g},reset:()=>{},t:()=>o()}}const we=e=>e;function ke(e,{delay:a=0,duration:s=400,easing:n=we}={}){const t=+getComputedStyle(e).opacity;return{delay:a,duration:s,easing:n,css:i=>`opacity: ${i*t}`}}const Ee=`⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠈⠉⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
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
`,Ne=` ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢟⣡⣶⣿⣿⣿⣿⣶⣮⣙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣩⣽⣶⣶⢰⡆⣮⣙⠿⣿⣿⣿⣿⣿⣿⣿
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
`,je=` ██████╗ ██████╗ ███████╗███╗   ██╗██╗  ██╗██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗
 ██╔═══██╗██╔══██╗██╔════╝████╗  ██║██║  ██║██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝
██║   ██║██████╔╝█████╗  ██╔██╗ ██║███████║██║ █╗ ██║██║   ██║██████╔╝█████╔╝
██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║╚════██║██║███╗██║██║   ██║██╔══██╗██╔═██╗
╚██████╔╝██║     ███████╗██║ ╚████║     ██║╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝     ╚═╝ ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
`,G=[{content:Ee,label:"Goku staring at viewer"},{content:Ne,label:"Sailor Moon Girl"},{content:je,label:"Please Hire Me"}];function Ae(){const e=Math.floor(Math.random()*G.length),a=parseInt(localStorage.getItem("fetch_ascii")??"0",10)===e,s=e-1*+a;return localStorage.setItem("fetch_ascii",`${s>=0?s:G.length+s}`),G.at(s)}const S=function(e,a,s){return Math.min(Math.max(e,a),s)};var Te=k("<pre>█</pre>"),Se=k('<span class="fixed bottom-0 h-[2ch] w-full bg-[var(--base01)] svelte-yrgjp"> <!></span>'),Ie=k('<section class=" svelte-yrgjp"><span class="text-gray svelte-yrgjp">[tobybridle@home resume]$&ThinSpace;</span> <span class="svelte-yrgjp">tobyfetch</span>&NoBreak; <pre class="cursor inline svelte-yrgjp">█</pre></section>'),Me=k('<section class="flex h-[35%] w-full flex-col items-center gap-16 md:flex-row md:items-start svelte-yrgjp"><pre class="aspect-auto max-w-fit overflow-hidden text-clip whitespace-pre-wrap text-center text-xs max-[450px]:hidden svelte-yrgjp"> </pre> <div class="flex w-max flex-col gap-2 svelte-yrgjp"><h1 class="mb-2 min-h-[2ch] border-x-0 border-b-2 border-t-0 border-dashed py-2 [border-color:var(--base02)] [width:fit-content] svelte-yrgjp" id="about-me">tobybridle</h1> <ul class="svelte-yrgjp"><li class="svelte-yrgjp"><h3 class="emphasised-text svelte-yrgjp">Email:</h3> <a href="mailto:bridle.toby@gmail.com" class="svelte-yrgjp">bridle.toby@gmail.com</a></li> <li class="svelte-yrgjp"><h3 class="emphasised-text svelte-yrgjp">Location:</h3> United Kingdom</li> <li class="svelte-yrgjp"><h3 class="emphasised-text svelte-yrgjp">GitHub:</h3> <a href="https://github.com/tobybridle" class="svelte-yrgjp">@TobyBridle</a></li> <li class="svelte-yrgjp"><h3 class="emphasised-text svelte-yrgjp">Location:</h3> United Kingdom</li></ul></div></section>'),Fe=k('<!> <div class="p-8 sm:p-16 svelte-yrgjp"><!> <br class="svelte-yrgjp"> <br class="svelte-yrgjp"> <!></div>',1);function Pe(e,a){le(a,!0);const s=T({state:null}),n=T({state:!1}),t=T({state:"",active_index:0}),i=T({state:!1});pe(()=>{s.state=Ae(),n.state=!0,document.addEventListener("keydown",c=>{if(!i.state&&c.shiftKey&&c.key==":")t.state="",t.active_index=0,i.state=!0;else if(i.state)switch(c.preventDefault(),c.key){case"Enter":i.state=!1;break;case"Escape":i.state=!1;break;case"Shift":case"Meta":case"PageUp":case"PageDown":case"PrntScr":case"Control":case"ArrowUp":case"ArrowDown":break;case"ArrowLeft":t.active_index=S(0,t.active_index-1,Number.MAX_SAFE_INTEGER);break;case"ArrowRight":t.active_index=S(0,t.active_index+1,t.state.length);break;case"Delete":t.state=t.state.slice(0,t.active_index)+t.state.slice(t.active_index+1),t.active_index=S(0,t.active_index,Number.MAX_SAFE_INTEGER);break;case"Backspace":t.state=t.state.slice(0,t.active_index-1)+t.state.slice(t.active_index),t.active_index=S(0,t.active_index-1,Number.MAX_SAFE_INTEGER);break;default:t.state=t.state.slice(0,t.active_index)+c.key+t.state.slice(t.active_index),t.active_index+=1}})});function d(c,{speed:o=1,delay:r=0}){if(!(c.childNodes.length===1&&c.childNodes[0].nodeType===Node.TEXT_NODE))throw new Error("This transition only works on elements with a single text node child");const p=c.textContent||"";return{duration:p.length/(o*.01),delay:r,tick:E=>{const N=~~(p.length*E);c.textContent=p.slice(0,N)}}}var y=Fe(),l=fe(y);R(l,()=>i.state,c=>{var o=Se(),r=x(o),f=A(r);_e(f,()=>t.active_index,p=>{var u=Te();F(()=>he(u,`cursor [left:${t.active_index??""}ch] inline svelte-yrgjp`)),b(p,u)}),w(o),F(()=>D(r,`:${t.state??""} `)),b(c,o)});var v=A(l,2),h=x(v);R(h,()=>n.state,c=>{var o=Ie(),r=A(x(o),2);B(2),w(o),C(1,r,()=>d,()=>({speed:1.2})),b(c,o)});var m=A(h,6);R(m,()=>s.state!==null,c=>{var o=Me(),r=x(o),f=x(r,!0);w(r),B(2),w(o),F(()=>{ue(r,"title",s.state.label),D(f,s.state.content)}),C(1,r,()=>d,()=>({speed:s.state.content.length/3,delay:1200})),C(1,o,()=>ke,()=>({delay:1200})),b(c,o)}),w(v),b(e,y),ve()}export{Pe as component};
