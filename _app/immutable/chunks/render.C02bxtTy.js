import{A as k,B as R,C as O,D as C,E as P,F as V,G as E,H as Y,I as B,J as W,K as T,M as g,N as A,O as $,P as v,Q as j,R as q,S as F,T as G,U as J,V as K,W as Q,X as U,p as X,h as S,d as z,o as Z}from"./runtime.XoDN4fp3.js";import{r as x,c as ee}from"./disclose-version.DuG70djo.js";const re=new Set,D=new Set;function m(e){var N;var r=this,n=r.ownerDocument,_=e.type,i=((N=e.composedPath)==null?void 0:N.call(e))||[],t=i[0]||e.target,d=0,h=e.__root;if(h){var u=i.indexOf(h);if(u!==-1&&(r===document||r===window)){e.__root=r;return}var l=i.indexOf(r);if(l===-1)return;u<=l&&(d=u)}if(t=i[d]||e.target,t!==r){k(e,"currentTarget",{configurable:!0,get(){return t||n}});var w=P,o=V;R(null),O(null);try{for(var a,s=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var c=t["__"+_];if(c!==void 0&&!t.disabled)if(C(c)){var[L,...M]=c;L.apply(t,[e,...M])}else c.call(t,e)}catch(y){a?s.push(y):a=y}if(e.cancelBubble||f===r||f===null)break;t=f}if(a){for(let y of s)queueMicrotask(()=>{throw y});throw a}}finally{e.__root=r,delete e.currentTarget,R(w),O(o)}}}const te=["touchstart","touchmove"];function ae(e){return te.includes(e)}let I=!0;function ie(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function se(e,r){return H(e,r)}function de(e,r){E(),r.intro=r.intro??!1;const n=r.target,_=S,i=v;try{for(var t=Y(n);t&&(t.nodeType!==8||t.data!==B);)t=W(t);if(!t)throw T;g(!0),A(t),$();const d=H(e,{...r,anchor:t});if(v===null||v.nodeType!==8||v.data!==j)throw q(),T;return g(!1),d}catch(d){if(d===T)return r.recover===!1&&F(),E(),G(n),g(!1),se(e,r);throw d}finally{g(_),A(i),x()}}const p=new Map;function H(e,{target:r,anchor:n,props:_={},events:i,context:t,intro:d=!0}){E();var h=new Set,u=o=>{for(var a=0;a<o.length;a++){var s=o[a];if(!h.has(s)){h.add(s);var f=ae(s);r.addEventListener(s,m,{passive:f});var c=p.get(s);c===void 0?(document.addEventListener(s,m,{passive:f}),p.set(s,1)):p.set(s,c+1)}}};u(J(re)),D.add(u);var l=void 0,w=K(()=>{var o=n??r.appendChild(Q());return U(()=>{if(t){X({});var a=Z;a.c=t}i&&(_.$$events=i),S&&ee(o,null),I=d,l=e(o,_)||{},I=!0,S&&(V.nodes_end=v),t&&z()}),()=>{var f;for(var a of h){r.removeEventListener(a,m);var s=p.get(a);--s===0?(document.removeEventListener(a,m),p.delete(a)):p.set(a,s)}D.delete(u),b.delete(l),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return b.set(l,w),l}let b=new WeakMap;function fe(e){const r=b.get(e);r&&r()}export{I as a,de as h,se as m,ie as s,fe as u};
