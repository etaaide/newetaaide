(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{18:function(e,a,t){e.exports=t(39)},23:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(14),r=t.n(l),s=t(12),i=(t(23),t(1)),m=["btn--primary","btn--outline","btn--test"],o=["btn--medium","btn--large"],E=function(e){var a=e.children,t=e.type,n=e.onClick,l=e.buttonStyle,r=e.buttonSize,s=m.includes(l)?l:m[0],E=o.includes(r)?r:o[0];return c.a.createElement(i.b,{to:"/sign-up",className:"btn-mobile"},c.a.createElement("button",{className:"btn ".concat(s," ").concat(E),onClick:n,type:t},a))};t(32);var u=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(!0),m=Object(s.a)(r,2),o=m[0],u=m[1],d=function(){return l(!1)},b=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(n.useEffect)((function(){b()}),[]),window.addEventListener("resize",b),c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"navbar-container"},c.a.createElement(i.b,{to:"/",className:"navbar-logo",onClick:d},"Etaaide",c.a.createElement("i",{class:"fab fa-typo3"})),c.a.createElement("div",{className:"menu-icon",onClick:function(){return l(!t)}},c.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),c.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.b,{to:"/",className:"nav-links",onClick:d},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.b,{to:"/services",className:"nav-links",onClick:d},"Services")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.b,{to:"/products",className:"nav-links",onClick:d},"Products")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/sign-up",className:"nav-links-mobile",onClick:d},"Sign Up"))),o&&c.a.createElement(E,{buttonStyle:"btn--outline"},"SIGN UP"))))};t(8),t(33);var d=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"cards__item"},c.a.createElement(i.b,{className:"cards__item__link",to:e.path},c.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},c.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),c.a.createElement("div",{className:"cards__item__info"},c.a.createElement("h5",{className:"cards__item__text"},e.text)))))},b=(t(34),t(35),function(){return c.a.createElement("div",null,c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"card-image"}),c.a.createElement("div",{class:"card-text"},c.a.createElement("span",{class:"date"}),c.a.createElement("h2",null," Non Contact  "),c.a.createElement("p",null,"Non contact type compact vibration sensor, to detect health assets of your machine"))),c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"card-image card2"}),c.a.createElement("div",{class:"card-text card2"},c.a.createElement("span",{class:"date"}," "),c.a.createElement("h2",null,"Real Time monitoring"),c.a.createElement("p",null," We Prioritize hard real time. We monitor your machines real time to update any change that may have occurred. "))),c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"card-image card3"}),c.a.createElement("div",{class:"card-text card3"},c.a.createElement("span",{class:"date"}," "),c.a.createElement("h2",null," Performance analytics "),c.a.createElement("p",null," Get details on the performance of your machines anywhere, anytime. "))),c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"card-image card4"}),c.a.createElement("div",{class:"card-text card3"},c.a.createElement("span",{class:"date"}),c.a.createElement("h2",null," Low Cost "),c.a.createElement("p",null," Monitor all the sensitive information of your machines at an minimal cost. "))),c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"card-image card5"}),c.a.createElement("div",{class:"card-text card3"},c.a.createElement("span",{class:"date"}),c.a.createElement("h2",null,"Predictive AI"),c.a.createElement("p",null,"Leverage the AI algorithms to detect occurrence of error."))),c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"card-image card6"}),c.a.createElement("div",{class:"card-text card3"},c.a.createElement("span",{class:"date"}),c.a.createElement("h2",null,"Multiple Asset monitoring"),c.a.createElement("p",null,"Track multiple assets in a common place"))))}),p=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"cards"},c.a.createElement("h1",null,"Check out these EPIC Destinations!"),c.a.createElement("div",{className:"cards__container"},c.a.createElement("div",{className:"cards__wrapper"},c.a.createElement("ul",{className:"cards__items"},c.a.createElement(d,{src:"https://etaaide.com/wp-content/uploads/2022/04/fittings-water-polo-construction-2784902.jpg",text:"Track your progress with our app.",label:"Adventure",path:"/services"}),c.a.createElement(d,{src:"https://etaaide.com/wp-content/uploads/2022/01/engineer-engineering-electrical-engineer-4941341.jpg",text:"Predict Before they fail.",label:"Luxury",path:"/services"}))))),c.a.createElement("div",null,c.a.createElement(b,null)))};t(36);var v=function(){return c.a.createElement("div",{className:"hero-container"},c.a.createElement("h1",null,"Etaaide"),c.a.createElement("p",null,"A Predictive maintenance company"),c.a.createElement("div",{className:"hero-btns"},c.a.createElement(E,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"GET STARTED"),c.a.createElement(E,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"WATCH TRAILER ",c.a.createElement("i",{className:"far fa-play-circle"}))))};t(37);var f=function(){return c.a.createElement("div",{className:"footer-container"},c.a.createElement("section",{className:"footer-subscription"},c.a.createElement("p",{className:"footer-subscription-heading"},"Connect with us to know more about the use case in your industry"),c.a.createElement("p",{className:"footer-subscription-text"},"Join the Community"),c.a.createElement("div",{className:"input-areas"},c.a.createElement("form",null,c.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),c.a.createElement(E,{buttonStyle:"btn--outline"},"Subscribe")))),c.a.createElement("div",{class:"footer-links"},c.a.createElement("div",{className:"footer-link-wrapper"},c.a.createElement("div",{class:"footer-link-items"},c.a.createElement("h2",null,"About Us"),c.a.createElement(i.b,{to:"/sign-up"},"How it works"),c.a.createElement(i.b,{to:"/"},"Testimonials"),c.a.createElement(i.b,{to:"/"},"Careers"),c.a.createElement(i.b,{to:"/"},"Investors"),c.a.createElement(i.b,{to:"/"},"Terms of Service")),c.a.createElement("div",{class:"footer-link-items"},c.a.createElement("h2",null,"Contact Us"),c.a.createElement(i.b,{to:"/"},"Contact"),c.a.createElement(i.b,{to:"/"},"Support"),c.a.createElement(i.b,{to:"/"},"Destinations"),c.a.createElement(i.b,{to:"/"},"Sponsorships"))),c.a.createElement("div",{className:"footer-link-wrapper"},c.a.createElement("div",{class:"footer-link-items"},c.a.createElement("h2",null,"Videos"),c.a.createElement(i.b,{to:"/"},"Submit Video"),c.a.createElement(i.b,{to:"/"},"Ambassadors"),c.a.createElement(i.b,{to:"/"},"Agency"),c.a.createElement(i.b,{to:"/"},"Influencer")),c.a.createElement("div",{class:"footer-link-items"},c.a.createElement("h2",null,"Social Media"),c.a.createElement(i.b,{to:"/"},"Instagram"),c.a.createElement(i.b,{to:"/"},"Facebook"),c.a.createElement(i.b,{to:"/"},"Youtube"),c.a.createElement(i.b,{to:"/"},"Twitter")))),c.a.createElement("section",{class:"social-media"},c.a.createElement("div",{class:"social-media-wrap"},c.a.createElement("div",{class:"footer-logo"},c.a.createElement(i.b,{to:"/",className:"social-logo"},"etaaide",c.a.createElement("i",{class:"fab fa-typo3"}))),c.a.createElement("small",{class:"website-rights"},"etaaide \xa9 2022"),c.a.createElement("div",{class:"social-icons"},c.a.createElement(i.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},c.a.createElement("i",{class:"fab fa-facebook-f"})),c.a.createElement(i.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},c.a.createElement("i",{class:"fab fa-instagram"})),c.a.createElement(i.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},c.a.createElement("i",{class:"fab fa-youtube"})),c.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},c.a.createElement("i",{class:"fab fa-twitter"})),c.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},c.a.createElement("i",{class:"fab fa-linkedin"}))))))};t(38);var h=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null),c.a.createElement(p,null),c.a.createElement("div",{className:"footerInformation"},c.a.createElement(f,null)))},g=t(2);function N(){return c.a.createElement("h1",{className:"services"},"SERVICES")}function k(){return c.a.createElement("h1",{className:"products"},"PRODUCTS")}function y(){return c.a.createElement("h1",{className:"sign-up"},"LIKE & SUBSCRIBE")}var _=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,null,c.a.createElement(u,null),c.a.createElement(g.c,null,c.a.createElement(g.a,{path:"/",exact:!0,component:h}),c.a.createElement(g.a,{path:"/services",component:N}),c.a.createElement(g.a,{path:"/products",component:k}),c.a.createElement(g.a,{path:"/sign-up",component:y}))))};r.a.render(c.a.createElement(_,null),document.getElementById("root"))},8:function(e,a,t){}},[[18,1,2]]]);
//# sourceMappingURL=main.ff9f3aca.chunk.js.map