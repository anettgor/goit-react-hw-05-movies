"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[433],{433:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(5861),o=t(9439),c=t(7757),i=t.n(c),u=t(2791),a=t(2585),s="Home_li__FFwQX",f="Home_listContainer__KQCe1",l="Home_heading__OYMpi",h=t(1087),d=t(184);var v=function(){var n=(0,u.useState)([]),e=(0,o.Z)(n,2),t=e[0],c=e[1],v="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("7bfaca5914dfe808eee9ce7ecac1ff40");return(0,u.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)(v);case 2:e=n.sent,console.log(e.results),c(e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[v]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{className:l,children:"Trending today"}),(0,d.jsx)("ul",{className:f,children:t.map((function(n){return(0,d.jsx)(h.rU,{style:{color:"unset",textDecoration:"none",cursor:"pointer"},to:"/movies/".concat(n.id),children:(0,d.jsx)("li",{className:s,children:n.title||n.name},n.id)})}))})]})}},2585:function(n,e){e.Z=function(n){return fetch(n).then((function(n){return n.json()})).catch((function(n){return console.log(n)}))}},5861:function(n,e,t){function r(n,e,t,r,o,c,i){try{var u=n[c](i),a=u.value}catch(s){return void t(s)}u.done?e(a):Promise.resolve(a).then(r,o)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(o,c){var i=n.apply(e,t);function u(n){r(i,o,c,u,a,"next",n)}function a(n){r(i,o,c,u,a,"throw",n)}u(void 0)}))}}t.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=433.c2a7e68f.chunk.js.map