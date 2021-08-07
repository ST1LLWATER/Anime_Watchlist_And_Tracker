(this.webpackJsonpanime_tracker=this.webpackJsonpanime_tracker||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(7),c=a.n(i),s=(a(12),a(13),a(2)),d=a(6);var o=function(e,t){switch(t.type){case"LOAD_ANIMES":var a=localStorage.getItem("list");return a?JSON.parse(a):Object(d.a)(e);case"ADD_ANIME":var n=[].concat(Object(d.a)(e),[{name:t.anime.name,genre:t.anime.genre,url:t.anime.url,aid:t.anime.aid,rating:t.anime.rating,episodes:t.anime.episodes,date:t.anime.date,id:Date.now()}]);return localStorage.setItem("list",JSON.stringify(n)),n;case"REMOVE_ANIME":var r=e.filter((function(e){return e.id!==t.id}));return localStorage.setItem("list",JSON.stringify(r)),r;default:return e}},l=a(0),u=Object(n.createContext)();var m=function(e){var t=Object(n.useReducer)(o,[]),a=Object(s.a)(t,2),r=a[0],i=a[1];return Object(l.jsx)(u.Provider,{value:{animes:r,dispatch:i},children:e.children})};var j=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),c=Object(s.a)(i,2),d=c[0],o=c[1],m=Object(n.useState)(""),j=Object(s.a)(m,2),g=(j[0],j[1]),b=Object(n.useContext)(u).dispatch;return Object(n.useEffect)((function(){b({type:"LOAD_ANIMES"}),d&&function(e){fetch("https://graphql.anilist.co",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"query($name: String, $status: MediaStatus) {\n            Media(search: $name, type: ANIME, status: $status) {\n              id,\n              title {\n                english,\n                romaji,\n              },\n              status,\n              startDate {\n                year,\n                month,\n                day\n              },\n              averageScore,\n              type,\n              genres,\n             \n              episodes,\n              nextAiringEpisode {\n                id,\n                airingAt,\n                timeUntilAiring\n              },\n              bannerImage,\n              coverImage {\n                large,\n                extraLarge\n              }\n            }\n          \n          }",variables:{name:e}})}).then((function(e){return e.json()})).then((function(e){console.log("data returned:",e),e.errors?alert("ANIME NAME NOT FOUND... BE MORE SPECIFIC"):(g(e),b({type:"ADD_ANIME",anime:{name:e.data.Media.title.english?e.data.Media.title.english:e.data.Media.title.romaji,url:e.data.Media.coverImage.extraLarge,genre:e.data.Media.genres,aid:e.data.Media.id,rating:e.data.Media.averageScore,episodes:e.data.Media.episodes,date:e.data.Media.startDate}}))}))}(d)}),[d]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{id:"input_form",className:"flex justify-center m-8",onSubmit:function(e){e.preventDefault(),o(a),r("")},children:[Object(l.jsx)("input",{id:"name",className:"p-2 mr-4 w-full bg-gray-600 text-gray-100 focus:ring rounded ring-blue-700 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full",type:"text",name:"hidden",value:a,placeholder:"Anime Name",autoComplete:"false",onChange:function(e){return r(e.target.value)},required:!0}),Object(l.jsx)("button",{type:"submit",className:"px-4 py-2 mr-4 rounded hover:bg-white hover:text-blue-700 bg-blue-700 text-white",children:"INSERT"})]})})};a(15);var g=function(e){var t,a,r=Object(n.useContext)(u).dispatch,i=Object(n.useRef)(null),c=!1,s=function(e){c=!1};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"card_outer flex items-end z-10",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)),\n    url(".concat(e.url,") no-repeat center center/cover")},children:[Object(l.jsx)("div",{className:"card_content_cover"}),Object(l.jsxs)("div",{className:"card_content my-2",children:[Object(l.jsx)("h1",{className:"pr-2 font-bold text-xl",children:e.name}),Object(l.jsxs)("div",{className:"card_details",children:[Object(l.jsx)("div",{className:"episodes",children:e.episodes?"EP : ".concat(e.episodes):""}),Object(l.jsx)("div",{className:"year",children:e.date?"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e.date.month-1]," ").concat(e.date.year):""}),Object(l.jsxs)("div",{className:"card_rating",children:[Object(l.jsx)("p",{children:e.rating?"".concat(e.rating/10):""}),Object(l.jsx)("i",{className:"fas fa-star"})]})]}),Object(l.jsx)("div",{className:"genre mb-2",ref:i,onMouseDown:function(e){c=!0,t=e.pageX-i.current.offsetLeft,a=i.current.scrollLeft},onMouseUp:s,onMouseLeave:s,onMouseMove:function(e){if(e.preventDefault(),c){var n=e.pageX-i.current.offsetLeft-t;i.current.scrollLeft=a-n}},children:e.genre.map((function(e,t){return Object(l.jsx)("p",{className:"genre_item mr-2 rounded-full py-1 my-1 px-2 bg-gray-600 text-sm bg-opacity-80",children:e},t)}))}),Object(l.jsxs)("button",{id:"delete",className:"flex justify-center items-center p-2 w-full mx-auto bg-red-600 rounded-md text-white hover:text-red-600 hover:bg-gray-200",onClick:function(t){r({type:"REMOVE_ANIME",id:e.id})},children:[Object(l.jsx)("i",{class:"far fa-trash-alt mr-2"}),"DELETE"]})]})]})})};var b=function(){var e=Object(n.useContext)(u).animes;return e.length?Object(l.jsx)("div",{className:"cards grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center",children:e.map((function(e){return Object(l.jsx)(g,{name:e.name,id:e.id,anime_id:e.aid,genre:e.genre,rating:e.rating,episodes:e.episodes,url:e.url,date:e.date},e.id)}))}):Object(l.jsx)("h1",{className:"empty text-white text-center text-xl font-bold",children:"No More Animes On The List"})};var f=function(){return Object(l.jsx)(m,{children:Object(l.jsxs)("div",{className:"cover ",children:[Object(l.jsx)("div",{className:"form",children:Object(l.jsx)(j,{})}),Object(l.jsx)(b,{})]})})};c.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.508fe356.chunk.js.map