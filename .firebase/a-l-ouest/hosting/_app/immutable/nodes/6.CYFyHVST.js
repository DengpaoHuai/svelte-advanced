import{a as l,t as u}from"../chunks/disclose-version.CadwTKgb.js";import"../chunks/legacy.DbdqsDTS.js";import{p as H,t as n,a as I,s as o,c as d,u as s,r as m,i as J}from"../chunks/runtime.894U78pH.js";import{s as $}from"../chunks/render.xGvF74QX.js";import{i as h}from"../chunks/if.c-k1-6Nt.js";import{s as K,a as L,b as M}from"../chunks/zod.Cmzw_u6b.js";import{b as y,r as S,s as g}from"../chunks/input.RS0aYY9i.js";import{i as N}from"../chunks/lifecycle.CXqBtWHR.js";import{s as Q,b as T,a as P}from"../chunks/store.qlBs9oX5.js";import"../chunks/entry.p9eyioUw.js";import{m as U}from"../chunks/movies.schema.DyARWTvU.js";import"../chunks/http-client.DKCzLOV8.js";var V=u("<p> </p>"),W=u("<p> </p>"),X=u("<p> </p>"),Y=u("<p> </p>"),Z=u('<form method="POST" action="/pas-super-form"><label for="title">Title:</label> <input> <!> <br><br> <label for="director">Director:</label> <input> <!> <br><br> <label for="producer">Producer:</label> <input> <!> <br><br> <label for="release_date">Release date:</label> <input> <!> <button type="submit">Submit</button></form>');function ct(w,A){H(A,!1);const k=Q(),r=()=>P(p,"$form",k),c=()=>P(C,"$constraints",k),a=()=>P(E,"$errors",k),{form:p,enhance:B,constraints:C,errors:E,isTainted:tt}=K({title:"",director:"",producer:"",release_date:""},{validators:L(U),onSubmit:({cancel:t})=>{}});N();var _=Z(),b=o(d(_),2);S(b);let z;var D=o(b,2);h(D,()=>a().title,t=>{var e=V(),i=d(e,!0);m(e),n(()=>$(i,a().title)),l(t,e)});var f=o(D,7);S(f);let F;var O=o(f,2);h(O,()=>a().director,t=>{var e=W(),i=d(e,!0);m(e),n(()=>$(i,a().director)),l(t,e)});var v=o(O,7);S(v);let R;var j=o(v,2);h(j,()=>a().producer,t=>{var e=X(),i=d(e,!0);m(e),n(()=>$(i,a().producer)),l(t,e)});var x=o(j,7);S(x);let q;var G=o(x,2);h(G,()=>a().release_date,t=>{var e=Y(),i=d(e,!0);m(e),n(()=>$(i,a().release_date)),l(t,e)}),J(2),m(_),M(_,t=>B(t)),n(()=>{z=g(b,z,{type:"text",id:"title",name:"title",...c().title}),F=g(f,F,{type:"text",id:"director",name:"director",...c().director}),R=g(v,R,{type:"text",id:"producer",name:"producer",...c().producer}),q=g(x,q,{type:"date",id:"release_date",name:"release_date",...c().release_date})}),y(b,()=>r().title,t=>T(p,s(r).title=t,s(r))),y(f,()=>r().director,t=>T(p,s(r).director=t,s(r))),y(v,()=>r().producer,t=>T(p,s(r).producer=t,s(r))),y(x,()=>r().release_date,t=>T(p,s(r).release_date=t,s(r))),l(w,_),I()}export{ct as component};
