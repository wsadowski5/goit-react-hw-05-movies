"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[278],{377:function(e,t,n){n.d(t,{Hx:function(){return h},Tg:function(){return s},Y5:function(){return p},vw:function(){return o},xc:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(340),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDcxMTM2ZjA4NjQ3NTA5NTgxYjRiMThlODMyYzMyNSIsInN1YiI6IjY1NzFmZmRjOTBmY2EzMDBhZWEzOGY5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bu2LtBgW0oayB7x9wrEYwfrkjgMgE2JOF3-klO_KvUU"}},s=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",i);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),i);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),i);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),i);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),i);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},278:function(e,t,n){n.r(t),n.d(t,{Movies:function(){return h}});var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(791),s=n(377),o=n(87),p=n(689),f=n(184),h=function(){var e,t=(0,i.useState)([]),n=(0,a.Z)(t,2),u=n[0],h=n[1],l=(0,o.lr)(),v=(0,a.Z)(l,2),d=v[0],m=v[1],g=null!==(e=d.get("query"))&&void 0!==e?e:"",x=(0,p.TH)();return(0,i.useEffect)((function(){if(""!==g){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.vw)(g);case 3:t=e.sent,h(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("B\u0142\u0105d podczas pobierania danych o filmach:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[g]),(0,f.jsxs)("div",{children:[(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.search.value;m({query:t})},children:[(0,f.jsx)("input",{type:"text",name:"search",placeholder:"Search movie..."}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),(0,f.jsx)("ul",{children:u.map((function(e){return(0,f.jsx)(o.OL,{to:"/movies/".concat(e.id),state:{from:x},children:(0,f.jsx)("li",{children:e.title||e.name})},e.id)}))})]})}}}]);
//# sourceMappingURL=278.7a5b8c40.chunk.js.map