(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{28:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var s,a=c(23),n=c.n(a),r=c(8),i=c(3),l=c(12),o=c.n(l);c(28);!function(e){e.Home="home",e.Phones="phones",e.Tablets="tablets",e.Accessories="accessories"}(s||(s={}));var d,j=c(1),u=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"header__content",children:[Object(j.jsx)(r.b,{to:"/",className:"logo header__logo",children:"Logo"}),Object(j.jsx)("nav",{className:"nav",children:Object(j.jsx)("ul",{className:"nav__list",children:Object.values(s).map((function(e){return Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)(r.c,{to:"home"===e?"/":e,className:function(e){var t=e.isActive;return o()("nav__link",{"nav__link--active":t})},children:e})},e)}))})}),Object(j.jsx)(r.c,{to:"favourites",className:"header__link header__link--favourites"}),Object(j.jsx)(r.b,{to:"cart",className:"header__link header__link--cart"})]})})}),Object(j.jsx)("main",{children:Object(j.jsx)("div",{className:"container container--main",children:Object(j.jsx)(i.a,{})})}),Object(j.jsx)("footer",{className:"fotter",children:Object(j.jsx)("div",{className:"container container--main",children:Object(j.jsxs)("div",{className:"footer__content",children:[Object(j.jsx)(r.b,{to:"/",className:"logo footer__logo",children:"Logo"}),Object(j.jsx)("nav",{className:"nav",children:Object(j.jsxs)("ul",{className:"nav__list",children:[Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)("a",{href:"https://github.com/oleksandr-plias/react_phone-catalog",className:"nav__link",children:"Github"})}),Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)("a",{href:"#contacts",className:"nav__link",children:"Contacts"})}),Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)("a",{href:"#rights",className:"nav__link",children:"Rights"})})]})})]})})})]})},b=c(5),m=c(0);c(31);!function(e){e.Screen="screen",e.Capacity="capacity",e.Ram="ram"}(d||(d={}));var h,_=function(e){var t=e.product,c=t.price,s=t.discount,a=c*((100-s)/100),n=function(e){return t[e]?e===d.Screen?"".concat(t[e].slice(0,-6),'"'):"".concat(Math.round(+t[e].slice(0,-2)/100)/10," GB"):"-"};return Object(j.jsxs)(r.b,{to:t.id,className:"ProductCard","data-cy":"cardsContainer",children:[Object(j.jsx)("div",{className:"ProductCard__image-wrapper",children:Object(j.jsx)("img",{src:t.imageUrl,alt:t.name,className:"ProductCard__image"})}),Object(j.jsxs)("div",{className:"ProductCard__info",children:[Object(j.jsx)("h2",{className:"ProductCard__title",children:t.name.toLocaleLowerCase()}),Object(j.jsxs)("div",{className:"ProductCard__price",children:[Object(j.jsxs)("span",{className:"ProductCard__discount-price",children:["$",a]}),s>0&&Object(j.jsxs)("span",{className:"ProductCard__total-price",children:["$",c]})]}),Object(j.jsx)("ul",{className:"ProductCard__properties",children:Object.values(d).map((function(e){return Object(j.jsxs)("li",{className:"ProductCard__property",children:[Object(j.jsx)("span",{className:o()("ProductCard__property-name",{"ProductCard__property-name--ram":e===d.Ram}),children:e}),Object(j.jsx)("span",{className:"ProductCard__property-value",children:n(e)})]},e)}))}),Object(j.jsxs)("div",{className:"ProductCard__buttons",children:[Object(j.jsx)("button",{type:"button",className:"ProductCard__add-to-cart",onClick:function(e){e.preventDefault()},children:"Add to cart"}),Object(j.jsx)("button",{type:"button","aria-label":"Add to favourites",className:"ProductCard__add-to-favourites",onClick:function(e){e.preventDefault()}})]})]})]})},O=(c(32),function(e){var t=e.sliderTitle,c=e.products,s=Object(m.useState)(0),a=Object(b.a)(s,2),n=a[0],r=a[1],i=100/c.length,l=2*i,o=100-4*i,d=0===n,u=n===o,h={width:"".concat(25*c.length,"%"),transform:"translateX(-".concat(n,"%)")};return Object(j.jsxs)("div",{className:"ProductsSlider",children:[Object(j.jsxs)("div",{className:"ProductsSlider__title-wrapper",children:[Object(j.jsx)("h2",{className:"title",children:t}),Object(j.jsxs)("div",{className:"ProductsSlider__buttons",children:[Object(j.jsx)("button",{type:"button","aria-label":"Previous",className:"ProductsSlider__button ProductsSlider__button--previous",onClick:function(){r((function(e){return e-l<0?0:e-l}))},disabled:d}),Object(j.jsx)("button",{type:"button","aria-label":"Next",className:"ProductsSlider__button ProductsSlider__button--next",onClick:function(){r((function(e){return e+l>o?o:e+l}))},disabled:u})]})]}),Object(j.jsx)("div",{className:"ProductsSlider__slides-wrappper",children:Object(j.jsx)("div",{className:"ProductsSlider__slides",style:h,children:c.map((function(e){return Object(j.jsx)(_,{product:e},e.id)}))})})]})}),p=(c(33),["./img/slides/slide-1.png","./img/slides/slide-2.png","./img/slides/slide-3.png"]),x=function(){var e=Object(m.useState)(0),t=Object(b.a)(e,2),c=t[0],s=t[1],a=100/p.length,n={width:"".concat(100*p.length,"%"),transform:"translateX(-".concat(a*c,"%)")};return Object(j.jsxs)("div",{className:"ImagesSlider",children:[Object(j.jsxs)("div",{className:"ImagesSlider__wrapper",children:[Object(j.jsx)("button",{type:"button","aria-label":"Previous",className:"ImagesSlider__button ImagesSlider__button--previous",onClick:function(){s((function(e){return e-1}))}}),Object(j.jsx)("div",{className:"ImagesSlider__slides-wrapper",children:Object(j.jsx)("div",{className:"ImagesSlider__slides",style:n,children:p.map((function(e,t){return Object(j.jsx)("img",{src:e,alt:"Slide ".concat(t+1),className:"ImagesSlider__slide-image"},e)}))})}),Object(j.jsx)("button",{type:"button","aria-label":"Next",className:"ImagesSlider__button ImagesSlider__button--next",onClick:function(){s((function(e){return e+1}))}})]}),Object(j.jsx)("div",{className:"ImagesSlider__indicators",children:p.map((function(e,t){return Object(j.jsx)("button",{type:"button","aria-label":"indicator",className:o()("ImagesSlider__indicator",{"ImagesSlider__indicator--active":t===c}),onClick:function(){return s(t)}},e)}))})]})};c(34);!function(e){e.Phones="phones",e.Tablets="tablets",e.Accessories="accessories"}(h||(h={}));var g=function(){var e=Object(m.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],a=[],n=[],i=[],l=[],o=[];Object(m.useEffect)((function(){fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),c.forEach((function(e){switch(e.discount?a.push(e):n.push(e),e.type){case"phone":i.push(e);break;case"tablet":l.push(e);break;case"accessories":o.push(e)}})),a.sort((function(e,t){return t.price*t.discount-e.price*e.discount})),n.sort((function(e,t){return t.price-e.price}));var d=function(e){switch(e){case h.Phones:return i.length;case h.Tablets:return l.length;case h.Accessories:return o.length;default:return 0}};return Object(j.jsxs)("div",{className:"HomePage",children:[Object(j.jsx)("section",{className:"HomePage__section",children:Object(j.jsx)(x,{})}),Object(j.jsx)("section",{className:"HomePage__section",children:Object(j.jsx)(O,{sliderTitle:"Hot prices",products:a})}),Object(j.jsxs)("section",{className:"HomePage__section",children:[Object(j.jsx)("h2",{className:"HomePage__section-title title",children:"Shop by category"}),Object(j.jsx)("div",{className:"HomePage__categories",children:Object.values(h).map((function(e){return Object(j.jsxs)(r.b,{to:"".concat(e),className:"HomePage__category","data-cy":"categoryLinksContainer",children:[Object(j.jsx)("div",{className:"HomePage__category-image-wrapper",children:Object(j.jsx)("div",{className:"HomePage__category-image HomePage__category-image--".concat(e)})}),Object(j.jsx)("h3",{className:"HomePage__category-title",children:e===h.Phones?"Mobile ".concat(e):e}),Object(j.jsx)("span",{className:"HomePage__category-info",children:"".concat(d(e)||"No"," models")})]},e)}))})]}),Object(j.jsx)(O,{sliderTitle:"Brand new models",products:n})]})},N=function(){return Object(j.jsx)("h1",{children:"Mobile phones"})},f=function(){return Object(j.jsx)("h1",{children:"Tablets"})},v=function(){return Object(j.jsx)("h1",{children:"Accessories"})},P=function(){return Object(j.jsx)(r.a,{children:Object(j.jsx)(i.d,{children:Object(j.jsxs)(i.b,{path:"/",element:Object(j.jsx)(u,{}),children:[Object(j.jsx)(i.b,{index:!0,element:Object(j.jsx)(g,{})}),Object(j.jsx)(i.b,{path:s.Phones,element:Object(j.jsx)(N,{})}),Object(j.jsx)(i.b,{path:s.Tablets,element:Object(j.jsx)(f,{})}),Object(j.jsx)(i.b,{path:s.Accessories,element:Object(j.jsx)(v,{})})]})})})};n.a.render(Object(j.jsx)(P,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.0f6f8c9c.chunk.js.map