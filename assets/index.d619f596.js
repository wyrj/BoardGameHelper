import{d as u,r as p,a as v,o as _,c as g,w as c,V as y,b as i,e as b,f as w,g as V,h as k,i as x,j as L,k as $,l as A,m as B,n as m,p as N,q as P,s as C,t as I,u as z,v as E,x as O,y as S,z as D,A as j,B as F}from"./vendor.f3799ae2.js";const H=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};H();const R=m("mdi-github"),q=m("Home"),M=u({setup(d){const t=p(!1);return(s,a)=>{const e=v("router-link"),o=v("v-list-item-content"),r=v("router-view");return _(),g(y,null,{default:c(()=>[i(x,{flat:"",border:"",density:"compact"},{default:c(()=>[i(b,{onClick:a[0]||(a[0]=l=>t.value=!t.value)}),i(w),i(V,{icon:"",href:"https://github.com/wyrj/BoardGameHelper",target:"_blank"},{default:c(()=>[i(k,null,{default:c(()=>[R]),_:1})]),_:1})]),_:1}),i(A,{"model-value":t.value},{default:c(()=>[i(L,null,{default:c(()=>[i($,null,{default:c(()=>[i(o,null,{default:c(()=>[i(e,{to:"/"},{default:c(()=>[q]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"]),i(B,null,{default:c(()=>[i(r)]),_:1})]),_:1})}}});var T=N();const W="modulepreload",h={},G="/",K=function(t,s){return!s||s.length===0?t():Promise.all(s.map(a=>{if(a=`${G}${a}`,a in h)return;h[a]=!0;const e=a.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${o}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":W,e||(r.as="script",r.crossOrigin=""),r.href=a,document.head.appendChild(r),e)return new Promise((l,n)=>{r.addEventListener("load",l),r.addEventListener("error",n)})})).then(()=>t())};async function X(){(await K(()=>import("./webfontloader.f5e2b0ed.js").then(function(t){return t.w}),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var Y=(d,t)=>{const s=d.__vccOpts||d;for(const[a,e]of t)s[a]=e;return s};const Z={class:"wrapper"},J=S('<div class="surface front" data-v-34eefac2><div class="point red center" data-v-34eefac2></div></div><div class="surface top" data-v-34eefac2><div class="point left-top" data-v-34eefac2></div><div class="point right-bottom" data-v-34eefac2></div></div><div class="surface right" data-v-34eefac2><div class="point left-top" data-v-34eefac2></div><div class="point center" data-v-34eefac2></div><div class="point right-bottom" data-v-34eefac2></div></div><div class="surface left" data-v-34eefac2><div class="point red left-top" data-v-34eefac2></div><div class="point red left-bottom" data-v-34eefac2></div><div class="point red right-top" data-v-34eefac2></div><div class="point red right-bottom" data-v-34eefac2></div></div><div class="surface bottom" data-v-34eefac2><div class="point left-top" data-v-34eefac2></div><div class="point left-bottom" data-v-34eefac2></div><div class="point center" data-v-34eefac2></div><div class="point right-top" data-v-34eefac2></div><div class="point right-bottom" data-v-34eefac2></div></div><div class="surface back" data-v-34eefac2><div class="point left-top" data-v-34eefac2></div><div class="point left-center" data-v-34eefac2></div><div class="point left-bottom" data-v-34eefac2></div><div class="point right-top" data-v-34eefac2></div><div class="point right-center" data-v-34eefac2></div><div class="point right-bottom" data-v-34eefac2></div></div>',6),Q=[J],U=u({setup(d){const t=P({x:0,y:0,z:0}),s=p(!1),a=C(()=>`transform: rotateY(${t.y}deg) rotateX(${t.x}deg) rotateZ(${t.z}deg);`);function e(){return Math.floor(Math.random()*360)}function o(){t.x=e(),t.y=e(),t.z=e()}function r(n){return n>45&&n<=135?90:n>135&&n<=225?180:n>225&&n<=315?270:0}async function l(){if(s.value)return;s.value=!0;const n=setInterval(o,10);await new Promise(f=>setTimeout(f,1e3)),clearInterval(n),t.x=r(t.x),t.z=r(t.z),s.value=!1}return(n,f)=>(_(),I("div",Z,[z("div",{class:"dice-wrapper",style:E(O(a)),onClick:l},Q,4)]))}});var ee=Y(U,[["__scopeId","data-v-34eefac2"]]);X();const te=D({history:j(),routes:[{path:"/",component:ee}]});F(M).use(T).use(te).mount("#app");
