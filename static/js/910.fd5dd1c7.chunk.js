"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[910],{5881:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(3433),o=n(5861),c=n(9439),i=n(7757),s=n.n(i),a=n(2791),u=n(2585),l=n(1686),f=n(1087),h="Movies_li__FFV4X",_="Movies_listContainer__kmeL5",m="Movies_input__KrUqs",p="Movies_form__4ow+Z",v="Movies_button__GcIka",d=n(184);var x=function(){var e=(0,a.useState)(""),t=(0,c.Z)(e,2),n=t[0],i=t[1],x=(0,a.useState)([]),y=(0,c.Z)(x,2),g=y[0],Z=y[1],b=(0,f.lr)(),j=(0,c.Z)(b,2),k=j[0],w=j[1],N=(0,a.useState)(!0),S=(0,c.Z)(N,2),M=S[0],q=S[1],C="https://api.themoviedb.org/3/search/movie?api_key=".concat("7bfaca5914dfe808eee9ce7ecac1ff40","&query=").concat(n),F=[],D=function(){var e=(0,o.Z)(s().mark((function e(t){var o,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,(0,u.Z)(C);case 3:o=e.sent,(c=(0,r.Z)(o.results))&&0!==c.length?(c.map((function(e){return F.push({title:e.title||e.name,id:e.id})})),Z(F),q(!1),U(n)):l.Notify.info("No movies match your query. Try again");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(e){w(""!==e?{query:e}:{}),console.log(k)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("form",{className:p,onSubmit:D,children:[(0,d.jsx)("input",{className:m,type:"text",placeholder:"Search movies...",value:n,onChange:function(e){i(e.target.value)}}),(0,d.jsx)("button",{className:v,type:"submit",children:"Search"})]}),(0,d.jsx)("ul",{className:_,children:!M&&g&&g.map((function(e){return(0,d.jsx)(f.rU,{style:{color:"unset",textDecoration:"none",cursor:"pointer"},to:"/movies/".concat(e.id),children:(0,d.jsx)("li",{className:h,children:e.title},e.id)})}))})]})}},2585:function(e,t){t.Z=function(e){return fetch(e).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}}}]);
//# sourceMappingURL=910.fd5dd1c7.chunk.js.map