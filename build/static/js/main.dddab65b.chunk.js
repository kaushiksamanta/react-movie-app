(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{12:function(e,t,i){e.exports={item:"MovieItem_item__aPaea",image:"MovieItem_image__38Q-O",content:"MovieItem_content__1W6He",actions:"MovieItem_actions__cQx_M"}},13:function(e,t,i){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",active:"MainNavigation_active__oN3Ka",badge:"MainNavigation_badge__QYsXO"}},19:function(e,t,i){e.exports={card:"Card_card__3_jzl"}},20:function(e,t,i){e.exports={list:"MovieList_list__2ma3N"}},23:function(e,t,i){e.exports={main:"Layout_main__auk_r"}},29:function(e,t,i){},36:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),r=i(18),o=i.n(r),s=i(7),a=(i(29),i(2)),j=i(24),l=i(11),d=i(0),u=Object(n.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){return!1}}),b=function(e){var t=Object(n.useState)([]),i=Object(l.a)(t,2),c=i[0],r=i[1],o={favorites:c,totalFavorites:c.length,addFavorite:function(e){r((function(t){return t.concat(e)}))},removeFavorite:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorite:function(e){return c.some((function(t){return t.id===e}))}};return Object(d.jsx)(u.Provider,{value:o,children:e.children})},v=u,h=i(19),O=i.n(h),m=function(e){return Object(d.jsx)("div",{className:O.a.card,children:e.children})},x=i(12),f=i.n(x),p=function(e){var t=Object(n.useContext)(v),i=t.itemIsFavorite(e.id);return Object(d.jsx)("li",{className:f.a.item,children:Object(d.jsxs)(m,{children:[Object(d.jsx)("div",{className:f.a.image,children:Object(d.jsx)("img",{src:e.image,alt:e.title})}),Object(d.jsxs)("div",{className:f.a.content,children:[Object(d.jsx)("h3",{children:e.title}),Object(d.jsx)("p",{children:e.description})]}),Object(d.jsx)("div",{className:f.a.actions,children:Object(d.jsx)("button",{onClick:function(){i?t.removeFavorite(e.id):t.addFavorite({id:e.id,title:e.title,description:e.description,image:e.image})},children:i?"Remove from Favorites":"To Favorites"})})]})})},_=i(20),g=i.n(_),F=function(e){return Object(d.jsx)("ul",{className:g.a.list,children:e.movies.map((function(e){return Object(d.jsx)(p,{id:e.id,image:e.image,title:e.title,description:e.description},e.id)}))})},N=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),i=t[0],c=t[1],r=Object(n.useState)([]),o=Object(l.a)(r,2),s=o[0],a=o[1];return Object(n.useEffect)((function(){c(!0),fetch("https://react-movies-app-41c26-default-rtdb.firebaseio.com/movies.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var i in e){var n=Object(j.a)({id:i},e[i]);t.push(n)}c(!1),a(t)}))}),[]),i?Object(d.jsx)("section",{children:Object(d.jsx)("p",{children:"Loading..."})}):Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"All Movies"}),Object(d.jsx)(F,{movies:s})]})},M=i(9),w=i.n(M),I=function(e){var t=Object(n.useRef)(null),i=Object(n.useRef)(null),c=Object(n.useRef)(null);return Object(d.jsx)(m,{children:Object(d.jsxs)("form",{className:w.a.form,onSubmit:function(n){var r,o,s;n.preventDefault();var a={title:null===(r=t.current)||void 0===r?void 0:r.value,image:null===(o=i.current)||void 0===o?void 0:o.value,description:null===(s=c.current)||void 0===s?void 0:s.value};e.onAddMovie(a)},children:[Object(d.jsxs)("div",{className:w.a.control,children:[Object(d.jsx)("label",{htmlFor:"title",children:"Movie Title"}),Object(d.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(d.jsxs)("div",{className:w.a.control,children:[Object(d.jsx)("label",{htmlFor:"image",children:"Movie Image"}),Object(d.jsx)("input",{type:"url",required:!0,id:"image",ref:i})]}),Object(d.jsxs)("div",{className:w.a.control,children:[Object(d.jsx)("label",{htmlFor:"description",children:"Description"}),Object(d.jsx)("textarea",{id:"description",required:!0,"data-rows":"5",ref:c})]}),Object(d.jsx)("div",{className:w.a.actions,children:Object(d.jsx)("button",{children:"Add Movie"})})]})})},y=function(){var e=Object(a.f)();return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"Add New Movie"}),Object(d.jsx)(I,{onAddMovie:function(t){fetch("https://react-movies-app-41c26-default-rtdb.firebaseio.com/movies.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/")}))}})]})},A=function(){var e,t=Object(n.useContext)(v);return e=0===t.totalFavorites?Object(d.jsx)("p",{children:"You got no favorites yet. Start adding some?"}):Object(d.jsx)(F,{movies:t.favorites}),Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"My Favorites"}),e]})},C=i(13),S=i.n(C),T=function(){var e=Object(n.useContext)(v);return Object(d.jsxs)("header",{className:S.a.header,children:[Object(d.jsx)("div",{className:S.a.logo,children:"Movies App"}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/",children:"All Movies"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/new-movie",children:"Add New Movie"})}),Object(d.jsx)("li",{children:Object(d.jsxs)(s.b,{to:"/favorites",children:["My Favorites",Object(d.jsx)("span",{className:S.a.badge,children:e.totalFavorites})]})})]})})]})},L=i(23),k=i.n(L),P=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(T,{}),Object(d.jsx)("main",{className:k.a.main,children:e.children})]})};var B=function(){return Object(d.jsxs)(P,{children:[Object(d.jsxs)(a.c,{children:[Object(d.jsx)(a.a,{path:"/",exact:!0,children:Object(d.jsx)(N,{})}),Object(d.jsx)(a.a,{path:"/new-movie",children:Object(d.jsx)(y,{})}),Object(d.jsx)(a.a,{path:"/favorites",children:Object(d.jsx)(A,{})})]}),Object(d.jsx)("p",{children:"Disclaimer:- All the images used throughout the website are linked from unsplash.com, we do not host these images."})]})},D=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,37)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;i(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b,{children:Object(d.jsx)(s.a,{children:Object(d.jsx)(B,{})})})}),document.getElementById("root")),D()},9:function(e,t,i){e.exports={form:"NewMovieForm_form__3Oc3F",control:"NewMovieForm_control__BZArL",actions:"NewMovieForm_actions__29jXI"}}},[[36,1,2]]]);
//# sourceMappingURL=main.dddab65b.chunk.js.map