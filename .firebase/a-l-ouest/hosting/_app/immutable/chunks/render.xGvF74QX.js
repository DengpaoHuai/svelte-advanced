import{av as g,M as S,aw as k,X as I,ax as m,B as p,w as A,x as L,e as c,N as D,ay as O,az as V,K as M,z as j,aA as z,v as C,d as H,p as Y,h as E,F as B,a as W,k as $}from"./runtime.894U78pH.js";import{i as x,r as N,j as h,k as F}from"./disclose-version.CadwTKgb.js";function Q(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const G=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Z(e){return G.includes(e)}const K={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",srcobject:"srcObject"};function ee(e){return e=e.toLowerCase(),K[e]??e}const P=["touchstart","touchmove"];function U(e){return P.includes(e)}function te(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function X(e,t){return b(e,t)}function re(e,t){g(),t.intro=t.intro??!1;const a=t.target,l=E,f=c;try{for(var r=S(a);r&&(r.nodeType!==8||r.data!==k);)r=I(r);if(!r)throw m;p(!0),A(r),L();const d=b(e,{...t,anchor:r});if(c===null||c.nodeType!==8||c.data!==D)throw O(),m;return p(!1),d}catch(d){if(d===m)return t.recover===!1&&V(),g(),M(a),p(!1),X(e,t);throw d}finally{p(l),A(f)}}const i=new Map;function b(e,{target:t,anchor:a,props:l={},events:f,context:r,intro:d=!0}){g();var v=new Set,y=s=>{for(var n=0;n<s.length;n++){var o=s[n];if(!v.has(o)){v.add(o);var u=U(o);t.addEventListener(o,h,{passive:u});var T=i.get(o);T===void 0?(document.addEventListener(o,h,{passive:u}),i.set(o,1)):i.set(o,T+1)}}};y(j(x)),N.add(y);var _=void 0,R=z(()=>{var s=a??t.appendChild(C());return H(()=>{if(r){Y({});var n=$;n.c=r}f&&(l.$$events=f),E&&F(s,null),_=e(s,l)||{},E&&(B.nodes_end=c),r&&W()}),()=>{var u;for(var n of v){t.removeEventListener(n,h);var o=i.get(n);--o===0?(document.removeEventListener(n,h),i.delete(n)):i.set(n,o)}N.delete(y),w.delete(_),s!==a&&((u=s.parentNode)==null||u.removeChild(s))}});return w.set(_,R),_}let w=new WeakMap;function ne(e){const t=w.get(e);t&&t()}export{Z as a,re as h,Q as i,X as m,ee as n,te as s,ne as u};