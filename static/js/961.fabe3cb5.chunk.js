"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[961],{377:function(e,t,r){r.d(t,{Hx:function(){return l},Tg:function(){return u},Y5:function(){return p},vw:function(){return o},xc:function(){return h}});var n=r(861),a=r(757),i=r.n(a),c=r(340),s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDcxMTM2ZjA4NjQ3NTA5NTgxYjRiMThlODMyYzMyNSIsInN1YiI6IjY1NzFmZmRjOTBmY2EzMDBhZWEzOGY5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bu2LtBgW0oayB7x9wrEYwfrkjgMgE2JOF3-klO_KvUU"}},u=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",s);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),s);case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),s);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),s);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),s);case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},961:function(e,t,r){r.r(t),r.d(t,{MovieDetails:function(){return l}});var n=r(861),a=r(439),i=r(757),c=r.n(i),s=r(689),u=r(87),o=r(791),p=r(377),h=r(184),l=function(){var e,t,r=(0,s.UO)().movieId,i=(0,o.useState)({}),l=(0,a.Z)(i,2),d=l[0],v=l[1],f=null!==(e=null===(t=(0,s.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Y5)(r);case 3:t=e.sent,v(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("B\u0142\u0105d podczas pobierania danych o filmach:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,h.jsxs)("div",{children:[(0,h.jsx)(u.OL,{to:f,children:" Go back"}),d.poster_path&&(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(d.poster_path),alt:"".concat(d.original_title," poster"),width:"200"})}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{children:[d.title," "]}),(0,h.jsxs)("p",{children:["User Score: ",d.vote_average]}),(0,h.jsx)("h3",{children:"Ovierviwe"}),(0,h.jsx)("p",{children:d.overview}),(0,h.jsx)("h4",{children:"Geners"}),(0,h.jsx)("ul",{children:d.genres&&d.genres.map((function(e){return(0,h.jsx)("li",{children:e.name},e.id)}))})]}),(0,h.jsxs)("ul",{children:[(0,h.jsx)(u.OL,{to:"Cast",children:(0,h.jsx)("li",{children:"Cast"})}),(0,h.jsx)(u.OL,{to:"Reviews",children:(0,h.jsx)("li",{children:"Reviews"})})]}),(0,h.jsx)(s.j3,{})]})}}}]);
//# sourceMappingURL=961.fabe3cb5.chunk.js.map