(this["webpackJsonprest-countries"]=this["webpackJsonprest-countries"]||[]).push([[0],{34:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(28),s=n.n(a),i=(n(34),n(0));function o(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsxs)("nav",{className:"header__nav",children:[Object(i.jsx)("a",{className:"link",href:"/",children:Object(i.jsx)("h1",{className:"text text--title text--white",children:"Where in the world?"})}),Object(i.jsxs)("button",{className:"button button--invisible",children:[Object(i.jsx)("i",{className:"fas fa-moon mr"}),"Dark mode"]})]})})}var l=n(14),j=n(2),u=n(4);function b(e){var t=e.searchHandler;return Object(i.jsxs)("div",{className:"input input--search",children:[Object(i.jsx)("i",{className:"input--search__icon fa fa-search"}),Object(i.jsx)("input",{placeholder:"Search for country...",className:"input--search__input",onKeyUp:function(e){t(e.target.value||"")}})]})}function d(e){var t=e.filterRegionHandler,n=e.region,r=Object(c.useState)(!1),a=Object(u.a)(r,2),s=a[0],o=a[1],l=function(e){e&&(t(e),o(!1))};return Object(i.jsxs)("div",{className:"dropdown",children:[Object(i.jsxs)("button",{className:"button dropdown__button",onClick:function(){return o(!s)},children:[Object(i.jsx)("span",{children:"all"===n||""===n?"All countries":n}),Object(i.jsx)("i",{className:s?"fa fa-angle-down up":"fa fa-angle-down down"})]}),s?Object(i.jsxs)("ul",{className:"dropdown__menu",children:[Object(i.jsx)("li",{className:"dropdown__menu__item",onClick:function(){return l("all")},children:Object(i.jsx)("a",{className:"dropdown__menu__item__link",href:"#",children:"All countries"})}),Object(i.jsx)("li",{className:"dropdown__menu__item",onClick:function(){return l("Africa")},children:Object(i.jsx)("a",{className:"dropdown__menu__item__link",href:"#",children:"Africa"})}),Object(i.jsx)("li",{className:"dropdown__menu__item",onClick:function(){return l("Americas")},children:Object(i.jsx)("a",{className:"dropdown__menu__item__link",href:"#",children:"America"})}),Object(i.jsx)("li",{className:"dropdown__menu__item",onClick:function(){return l("Asia")},children:Object(i.jsx)("a",{className:"dropdown__menu__item__link",children:"Asia"})}),Object(i.jsx)("li",{className:"dropdown__menu__item",onClick:function(){return l("Europe")},children:Object(i.jsx)("a",{className:"dropdown__menu__item__link",href:"#",children:"Europe"})}),Object(i.jsx)("li",{className:"dropdown__menu__item",onClick:function(){return l("Oceania")},children:Object(i.jsx)("a",{className:"dropdown__menu__item__link",href:"#",children:"Oceania"})})]}):""]})}function x(e){var t=e.filterRegionHandler,n=e.searchHandler,c=e.region;return Object(i.jsxs)("div",{className:"filterContainer",children:[Object(i.jsx)(b,{searchHandler:n}),Object(i.jsx)(d,{filterRegionHandler:t,region:c})]})}var O=n(9),m=n.n(O),f=n(12),h=n(13),_=n.n(h);function p(e){var t=e.label,n=e.text;return Object(i.jsxs)("div",{className:"country-info",children:[Object(i.jsxs)("label",{className:"country-info__label",children:[t," : "]}),Object(i.jsx)("p",{className:"text country-info__text",children:n})]})}function v(e){var t=e.country,n=Object(j.f)();return Object(i.jsxs)("article",{className:"country country--card",onClick:function(){return function(e){if(!e)return!1;var t=e.toLocaleLowerCase();n.push("/".concat(t))}(t.alpha3Code)},children:[Object(i.jsx)("img",{className:"country__img",alt:t.name,src:t.flag}),Object(i.jsxs)("section",{className:"country__info",children:[Object(i.jsx)("h3",{className:"text text--white text--title country__title",children:t.name}),Object(i.jsx)(p,{label:"Population",text:t.population}),Object(i.jsx)(p,{label:"Region",text:t.region}),Object(i.jsx)(p,{label:"Capital",text:t.capital})]})]})}function N(){return Object(i.jsx)("div",{className:"loadercontainer",children:Object(i.jsxs)("div",{className:"lds-ring",children:[Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{})]})})}var g=function(e){var t=e.children,n=Object(c.useState)([]),r=Object(u.a)(n,2),a=r[0],s=r[1];return Object(i.jsx)(w.Provider,{value:[a,s],children:t})},w=Object(c.createContext)([]);function k(e){var t=e.keyword,n=e.region,r=Object(c.useContext)(w),a=Object(u.a)(r,2),s=a[0],o=a[1],l=Object(c.useState)([]),j=Object(u.a)(l,2),b=j[0],d=j[1],x=Object(c.useState)(!0),O=Object(u.a)(x,2),h=O[0],p=O[1];Object(c.useEffect)((function(){(function(){var e=Object(f.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()("https://restcountries.com/v2/all");case 2:t=e.sent,n=t.data,o(n),d(n),p(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){g()}),[]),Object(c.useEffect)((function(){t?k():o(b)}),[t]),Object(c.useEffect)((function(){n&&y()}),[n]);var g=function(){return s.map((function(e,t){return Object(i.jsx)(v,{country:e},t)}))},k=function(){if(""!=t){var e=b.filter((function(e){return e.name.includes(t)}));o(e)}else o(b)},y=function(){if("all"==n)return o(b);var e=b.filter((function(e){return e.region===n}));o(e)};return Object(i.jsx)("div",{children:h?Object(i.jsx)(N,{}):Object(i.jsx)("section",{className:"allcountries",children:g()})})}function y(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(u.a)(a,2),o=s[0],l=s[1];return Object(i.jsx)("main",{children:Object(i.jsxs)("section",{className:"container",children:[Object(i.jsx)(x,{searchHandler:function(e){r(e),l("")},filterRegionHandler:function(e){l(e),r("")},region:o}),Object(i.jsx)(k,{keyword:n,region:o})]})})}function C(e){var t=e.name;return Object(i.jsx)("div",{className:"borderItem",children:Object(i.jsx)("p",{className:"borderItem__text",children:t})})}function S(e){var t=e.country,n=e.bordersCountry;return Object(i.jsxs)("article",{className:"country country--flex",children:[Object(i.jsx)("img",{className:"country__img country__img--detail",alt:t.name,src:t.flag}),Object(i.jsxs)("section",{className:"country__info",children:[Object(i.jsx)("h3",{className:"text text--white text--title country__title",children:t.name}),Object(i.jsxs)("div",{className:"flex-country-detail",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(p,{label:"Native name",text:t.nativeName}),Object(i.jsx)(p,{label:"Population",text:t.population}),Object(i.jsx)(p,{label:"Regio",text:t.region}),Object(i.jsx)(p,{label:"Subregion",text:t.subregion}),Object(i.jsx)(p,{label:"Capital",text:t.capital})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(p,{label:"Top level domain",text:t.topLevelDomain[0]}),Object(i.jsx)(p,{label:"Currencies",text:t.currencies[0].name}),Object(i.jsx)(p,{label:"Languages",text:t.languages.map((function(e){return e.name})).join(", ")})]})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"country-borders",children:[Object(i.jsx)("label",{className:"text text--white",children:"Border countries :"}),n&&0!==n.length?Object(i.jsx)("div",{className:"borders",children:n.map((function(e){return Object(i.jsx)(C,{name:e.name})}))}):Object(i.jsx)("p",{className:"text text--gray",children:"Looks likes this country does not have borders"})]})]})]})}function A(){return Object(i.jsxs)("div",{className:"notfound",children:[Object(i.jsx)("i",{className:"fas fa-exclamation-triangle notfound__icon"}),Object(i.jsx)("h2",{className:"notfound__text",children:"Looks like the page you're looking for does not exist."})]})}function E(){var e=Object(j.f)(),t=Object(j.g)().id,n=Object(c.useState)(!0),r=Object(u.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)({}),l=Object(u.a)(o,2),b=l[0],d=l[1],x=Object(c.useState)([]),O=Object(u.a)(x,2),h=O[0],p=O[1];Object(c.useEffect)((function(){(function(){var e=Object(f.a)(m.a.mark((function e(){var n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_()("https://restcountries.com/v2/alpha/".concat(t));case 3:n=e.sent,c=n.data,d(c),v(c.borders),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0&&d(404);case 12:s(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[t]);var v=function(){var e=Object(f.a)(m.a.mark((function e(t){var n,c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&0!==t.length){e.next=2;break}return e.abrupt("return");case 2:return n=t.join(",").toLocaleLowerCase(),console.log(n),e.prev=4,e.next=7,_()("https://restcountries.com/v2/alpha?codes=".concat(n));case 7:c=e.sent,r=c.data,p(r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)("section",{className:"container",children:[Object(i.jsxs)("button",{className:"button button--dark",onClick:function(){return e.goBack()},children:[Object(i.jsx)("i",{className:"fa fa-angle-left mr"}),"Back"]}),a?Object(i.jsx)(N,{}):b?404===b?Object(i.jsx)(A,{}):Object(i.jsx)(S,{country:b,bordersCountry:h},b.alpha3Code):"Something went wrong..."]})}function H(){return Object(i.jsx)(g,{children:Object(i.jsx)(l.a,{children:Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{path:"/",exact:!0,children:Object(i.jsx)(y,{})}),Object(i.jsx)(j.a,{path:"/:id",exact:!0,children:Object(i.jsx)(E,{})}),Object(i.jsx)(j.a,{component:A})]})})})}var L=function(){return Object(i.jsxs)("section",{className:"main-wrapper",children:[Object(i.jsx)(o,{}),Object(i.jsx)(H,{})]})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(L,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.0f914ba0.chunk.js.map