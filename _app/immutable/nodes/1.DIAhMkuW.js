import{b as d,t as v}from"../chunks/disclose-version.CzqFXhPb.js";import{L as h,M as p,F as $,u as x,N as u,g as _,O as k,P as y,Q as E,R as S,C,K as F,S as K,E as L,T as l,U as g,V as M}from"../chunks/runtime.DaDEiceX.js";import{s as b}from"../chunks/render.KX0bCzAU.js";import{s as N,a as O}from"../chunks/store.wESTHTr5.js";import{s as P}from"../chunks/entry.DVE4ymTs.js";function Q(s=!1){const e=$,t=e.l.u;if(!t)return;let n=()=>y(e.s);if(s){let a=0,r={};const f=E(()=>{let i=!1;const c=e.s;for(const o in c)c[o]!==r[o]&&(r[o]=c[o],i=!0);return i&&a++,a});n=()=>_(f)}t.b.length&&h(()=>{m(e,n),u(t.b)}),p(()=>{const a=x(()=>t.m.map(k));return()=>{for(const r of a)typeof r=="function"&&r()}}),t.a.length&&p(()=>{m(e,n),u(t.a)})}function m(s,e){if(s.l.s)for(const t of s.l.s)_(t);e()}S();const R=()=>{const s=P;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},T={subscribe(s){return R().page.subscribe(s)}};var U=v("<h1> </h1> <p> </p>",1);function A(s,e){C(e,!1);const t=N(),n=()=>O(T,"$page",t);Q();var a=U(),r=F(a),f=l(r,!0);g(r);var i=M(r,2),c=l(i,!0);g(i),K(()=>{var o;b(f,n().status),b(c,(o=n().error)==null?void 0:o.message)}),d(s,a),L()}export{A as component};
