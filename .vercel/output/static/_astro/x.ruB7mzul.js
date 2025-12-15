import{r as c}from"./index.WFquGv8Z.js";var l={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function C(){if(d)return u;d=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function s(n,o,t){var i=null;if(t!==void 0&&(i=""+t),o.key!==void 0&&(i=""+o.key),"key"in o){t={};for(var a in o)a!=="key"&&(t[a]=o[a])}else t=o;return o=t.ref,{$$typeof:r,type:n,key:i,ref:o!==void 0?o:null,props:t}}return u.Fragment=e,u.jsx=s,u.jsxs=s,u}var p;function h(){return p||(p=1,l.exports=C()),l.exports}var $=h();/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),E=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,s,n)=>n?n.toUpperCase():s.toLowerCase()),x=r=>{const e=E(r);return e.charAt(0).toUpperCase()+e.slice(1)},m=(...r)=>r.filter((e,s,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===s).join(" ").trim(),w=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=c.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:s=2,absoluteStrokeWidth:n,className:o="",children:t,iconNode:i,...a},f)=>c.createElement("svg",{ref:f,...A,width:e,height:e,stroke:r,strokeWidth:n?Number(s)*24/Number(e):s,className:m("lucide",o),...!t&&!w(a)&&{"aria-hidden":"true"},...a},[...i.map(([v,R])=>c.createElement(v,R)),...Array.isArray(t)?t:[t]]));/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(r,e)=>{const s=c.forwardRef(({className:n,...o},t)=>c.createElement(_,{ref:t,iconNode:e,className:m(`lucide-${k(x(r))}`,`lucide-${r}`,n),...o}));return s.displayName=x(r),s};/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],J=j("x",L);export{J as X,j as c,$ as j};
