(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{50:function(e,n,t){e.exports=t(89)},62:function(e,n,t){},87:function(e,n,t){},88:function(e,n,t){},89:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(25),o=t.n(i),c=t(6),l=t(7),u=t.n(l),s=t(13),m=t(12),d=t(5),p=t(3),f=t(2);function b(){var e=Object(p.a)(["\n  text-align: center;\n  color: ",';\n  font-family: "Gamja Flower", cursive;\n  text-transform: uppercase;\n']);return b=function(){return e},e}var g=f.d.h1(b(),(function(e){return e.theme.text}));function h(){var e=Object(p.a)(['\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  background-color: lightgray;\n  border-radius: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.3s cubic-bezier(0.5, 2, 0.25, 1);\n  margin: 20px 0;\n  text-align: center;\n  background-color: ',";\n  padding: 20px 50px;\n\n  &:hover {\n    transform: translateY(-5px);\n  }\n  h2 {\n    margin: 0;\n    padding: 5px;\n    font-size: 2rem;\n    color: #444f5a;\n    margin: 20px 0;\n  }\n  h3 {\n    width: 100%;\n    padding: 2px;\n    margin: 5px;\n    color: #444f5a;\n    border-radius: 10px;\n    font-size: 1.3rem;\n    margin: 10px 0;\n  }\n  img {\n    width: 50px;\n  }\n"]);return h=function(){return e},e}var x=f.d.div(h(),(function(e){return e.theme.primaryLight})),E=t(15),v=t.n(E);var w=function(e){var n=e.location,t="white",a=100,i=!0;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,n.name),"Clear"===n.weather[0].main?r.a.createElement(v.a,{icon:n.weather[0].main.toUpperCase()+"_DAY",color:t,size:a,animate:i}):null,"Smoke"===n.weather[0].main||"Squall"===n.weather[0].main?r.a.createElement(v.a,{icon:"RAIN",color:t,size:a,animate:i}):null,"Snow"===n.weather[0].main?r.a.createElement(v.a,{icon:"SNOW",color:t,size:a,animate:i}):null,"Thunderstorm"===n.weather[0].main||"Tornado"===n.weather[0].main?r.a.createElement(v.a,{icon:"WIND",color:t,size:a,animate:i}):null,"Fog"===n.weather[0].main||"Haze"===n.weather[0].main||"Mist"===n.weather[0].main?r.a.createElement(v.a,{icon:"FOG",color:t,size:a,animate:i}):null,"Fog"===n.weather[0].main||"Haze"===n.weather[0].main?r.a.createElement(v.a,{icon:"SLEET",color:t,size:a,animate:i}):null,"Clouds"===n.weather[0].main||"Sand"===n.weather[0].main||"Dust"===n.weather[0].main||"Ash"===n.weather[0].main?r.a.createElement(v.a,{icon:"CLOUDY",color:t,size:a,animate:i}):null)},y=t(21),O=t(20),j=function(e){return{type:"REMOVECART",payload:e}};t(62);var k=Object(O.b)(null,(function(e){return{addCart:function(n){return e({type:"ADDCART",payload:n})},removeCart:function(n){return e(j(n))}}}))((function(e){var n=e.addCart,t=e.location,a=(e.cart,e.children),i=e.isSaveCity,o=Object(y.a)(e,["addCart","location","cart","children","isSaveCity"]);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement("button",Object.assign({className:"custombtn"},o,{onClick:function(e){e.stopPropagation(),e.persist(),j(t)}}),a):r.a.createElement("button",Object.assign({className:"custombtn"},o,{onClick:function(e){e.stopPropagation(),e.persist(),n(t)}}),a))}));var S=function(e){var n=e.location,t=e.isSaveCity;return r.a.createElement(x,null,!!n.main&&r.a.createElement(c.b,{style:{textDecoration:"none"},to:"/".concat(n.id)},r.a.createElement(w,{location:n}),r.a.createElement("h3",null,"FEELS LIKE ",n.main.feels_like," \u2103"),r.a.createElement("h3",null,"TEMP ",n.main.temp," \u2103")),t?r.a.createElement(k,{location:n},"REMOVE"):r.a.createElement(k,{location:n},"SAVE"))},C=t(11),z=t.n(C),I=(t(64),t(67),function(){var e=Object(m.a)(u.a.mark((function e(n,t){var a,r,i,o,c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return a=N.doc("user/".concat(n.uid)),r=N.collection("users"),e.next=6,a.get();case 6:return i=e.sent,e.next=9,r.get();case 9:if(e.sent,i.exists){e.next=21;break}return o=n.displayName,c=n.email,l=new Date,e.prev=13,e.next=16,a.set(Object(s.a)({displayName:o,email:c,createdAt:l},t));case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(13),console.log("error creating user",e.t0.message);case 21:return e.abrupt("return",a);case 22:case"end":return e.stop()}}),e,null,[[13,18]])})));return function(n,t){return e.apply(this,arguments)}}());z.a.initializeApp({apiKey:"AIzaSyAFU9rFBKI6G_iT_Gv_65ZGe1YDkuxmI_w",authDomain:"weather-app-a7e3c.firebaseapp.com",databaseURL:"https://weather-app-a7e3c.firebaseio.com",projectId:"weather-app-a7e3c",storageBucket:"weather-app-a7e3c.appspot.com",messagingSenderId:"663473543312",appId:"1:663473543312:web:f50017e185230fd47e2015",measurementId:"G-NRJ2XS2JDF"});var A=z.a.auth(),N=z.a.firestore(),D=new z.a.auth.GoogleAuthProvider;D.setCustomParameters({prompt:"select_account"});var P=function(){return A.signInWithPopup(D)},R=(z.a,new z.a.auth.GithubAuthProvider);function F(){z.a.auth().signInWithPopup(R).then((function(e){e.credential.accessToken,e.user})).catch((function(e){e.code,e.message;console.log(e.code),console.log(e.message)}))}var G=new z.a.auth.FacebookAuthProvider;function L(){z.a.auth().signInWithPopup(G).then((function(e){e.credential.accessToken,e.user})).catch((function(e){e.code,e.message,e.email,e.credential;console.log(e.code),console.log(e.message)}))}var T=t(49),U=t.n(T).a.create({baseURL:"https://api.openweathermap.org/data/2.5/weather/",params:{appid:"c464608a0909ecb7b521f7e1cde53200",units:"metric"}}),H=function(e,n){return U.get("/",{params:{lat:n,lon:e}})},M=function(e){return U.get("/",{params:{q:e}})},W=function(e){return U.get("/",{params:{id:e}})};function _(){var e=Object(a.useState)(0),n=Object(d.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)(0),c=Object(d.a)(o,2),l=c[0],u=c[1],s=Object(a.useState)({}),m=Object(d.a)(s,2),p=m[0],f=m[1],b=Object(a.useState)(),h=Object(d.a)(b,2),x=h[0];h[1];function E(e){var n=e.coords.latitude,t=e.coords.longitude;i(n),u(t)}return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition(E),H(l,t).then((function(e){f(e.data)})).catch((function(e){console.log("error")}))}),[t,l]),r.a.createElement(r.a.Fragment,null,A.currentUser?r.a.createElement(g,null," ",A.currentUser.email.slice(0,A.currentUser.email.indexOf("@"))," ","\ub2d8\uc758 ",r.a.createElement("br",null),"Weather forecast"," "):r.a.createElement(g,null," \ub85c\uadf8\uc778\uc744 \ud574\uc8fc\uc138\uc694"),p.main&&p.main.temp&&t&&l&&r.a.createElement(S,{location:p,city:x}))}function q(){var e=Object(p.a)(["\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  input {\n    border-radius: 10px;\n    padding: 8px;\n    border: none;\n    font-size: 1.5rem;\n  }\n"]);return q=function(){return e},e}var X=f.d.div(q());function Y(){var e=Object(a.useState)(""),n=Object(d.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)(),c=Object(d.a)(o,2),l=c[0],u=c[1];return r.a.createElement(X,null,r.a.createElement("h1",null,"SEARCH CITY NAME"),r.a.createElement("input",{type:"text",id:"city",placeholder:"CITY NAME",onChange:function(e){u(e.target.value)},onKeyPress:function(e){13===e.which&&M(l).then((function(e){i(e.data)})).catch((function(e){console.log("error"),i("")}))}}),r.a.createElement("label",{for:"city"}," "),!(!t.main||!t.main.temp)&&r.a.createElement(S,{location:t}))}function B(){var e=Object(p.a)(["\n  html, body {\n    margin: 0;\n    padding: 0;\n   \n  }\n  *, *::after, *::before {\n    box-sizing: border-box;\n  }\n  p,h2,h1,button,input{\n    font-family: 'Roboto', sans-serif;\n    outline: none\n  }\n  body {\n    align-items: center;\n    font-family: 'Roboto', sans-serif;\n    background: ",";\n    color: ",";\n     transition: all 0.25s linear;\n    display: flex;\n    height: 100vh;\n    justify-content: center;\n    text-rendering: optimizeLegibility;\n     padding-top:80px;;\n  }\n  "]);return B=function(){return e},e}var K=Object(f.b)(B(),(function(e){return e.theme.body}),(function(e){return e.theme.text})),J={body:"#ffc8c8",text:"#162447",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)",mobile:"576px",Hover:"#d63447",icon:"\ud83c\udf24 "},V={body:"#444f5a",text:"#f4eeff",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)",mobile:"576px",Hover:"#d63547",icon:"\u2601 "},Z=t(4);function Q(){var e=Object(p.a)(["\n  position: fixed;\n  top: 3%;\n  left: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return Q=function(){return e},e}var $=f.d.button(Q(),(function(e){var n=e.theme;return e.toggle?n.text:n.body}),(function(e){return e.toggle?"rotate(45deg)":"rotate(0)"}),(function(e){return e.toggle?"0":"1"}),(function(e){return e.toggle?"translateX(20px)":"translateX(0)"}),(function(e){return e.toggle?"rotate(-45deg)":"rotate(0)"})),ee=function(e){var n=e.toggle,t=e.toggler;return r.a.createElement($,{toggle:n,onClick:function(){return t(!n)}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))};function ne(){var e=Object(p.a)(["\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  background: ",";\n  z-index: 2;\n  text-align: left;\n  padding: 2rem;\n  position: fixed;\n  top: 0;\n  left: 0;\n  transform: translateX(0);\n  transition: transform 0.3s ease-in-out;\n  transform: ",';\n\n  &::after {\n    content: "";\n    background: #f6f6f6;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0.3;\n    z-index: 0;\n  }\n  @media (max-width: 600px) {\n    width: 100%;\n  }\n\n  a {\n    font-size: 3rem;\n    text-transform: uppercase;\n    padding: 1.2rem 0;\n    font-weight: bold;\n    letter-spacing: 0.3rem;\n    color: ',";\n    text-decoration: none;\n    transition: color 0.3s linear;\n    z-index: 1;\n    @media (max-width: 600px) {\n      font-size: 1.5rem;\n      text-align: center;\n    }\n\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return ne=function(){return e},e}var te=f.d.nav(ne(),(function(e){return e.theme.body}),(function(e){return e.toggle?"translateX(0)":"translateX(-100%)"}),(function(e){return e.theme.text}),(function(e){return e.theme.primaryHover})),ae=function(e){var n=e.toggle,t=e.theme,a=e.currentUser,i="light"===t?J.icon:V.icon;return r.a.createElement(te,{toggle:n},r.a.createElement(c.b,{to:"/",style:{fontSize:"2rem"}},r.a.createElement("span",{role:"img","aria-label":"HOME"},i),"HOME"),r.a.createElement(c.b,{to:"/add",style:{fontSize:"2rem"}},r.a.createElement("span",{role:"img","aria-label":"SEARCH"},i),"SEARCH"),r.a.createElement(c.b,{to:"/detail",style:{fontSize:"2rem"}},r.a.createElement("span",{role:"img","aria-label":"DETAIL"},i),"DETAIL"),a?r.a.createElement(c.b,{as:"div",onClick:function(){return A.signOut()},style:{fontSize:"2rem"},to:"/"},r.a.createElement("span",{role:"img","aria-label":"LOGIN"},i),"LOGOUT"):r.a.createElement(c.b,{to:"/signin",style:{fontSize:"2rem"}},r.a.createElement("span",{role:"img","aria-label":"LOGIN"},i),"LOGIN"))};function re(){var e=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  button {\n    margin: 20px 0;\n    font-size: 1.2em;\n    background-color: #fff;\n    padding: 10px 20px;\n    cursor: pointer;\n    transition: all 0.3s cubic-bezier(1, 0.8, 0.25, 1);\n    border-radius: 10px;\n  }\n"]);return re=function(){return e},e}function ie(){var e=Object(p.a)(["\n  margin-top: 400px;\n  flex-direction: column;\n  padding: 20px 30px;\n  border-radius: 10px;\n  background-color: #fff;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  display: flex;\n  flex-basis: 1;\n\n  h3 {\n    border: 5px solid #c9d6df;\n    border-radius: 10px;\n    width: 50vw;\n    color: #52616b;\n    margin: 10px auto;\n    text-align: center;\n    padding: 30px;\n    display: grid;\n    grid-gap: 4px;\n    grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));\n    grid-auto-flow: dense;\n    cursor: pointer;\n\n    &:hover {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    }\n  }\n\n  h2 {\n    color: black;\n  }\n"]);return ie=function(){return e},e}var oe=f.d.div(ie()),ce=f.d.div(re());function le(){var e=Object(a.useState)(),n=Object(d.a)(e,2),t=n[0],i=n[1],o=Object(Z.g)(),c=Object(Z.h)().cityId;return Object(a.useEffect)((function(){W(c).then((function(e){i(e.data)})).catch((function(e){console.log("error")}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,null,!!t&&r.a.createElement("div",null,r.a.createElement("h2",null,t.name," IS ",t.weather[0].main),r.a.createElement("h3",null,r.a.createElement("span",null," FEELS LIKE"),r.a.createElement("span",null," ",t.main.feels_like," \u2103")),r.a.createElement("h3",null,r.a.createElement("span",null,"MIN")," ",r.a.createElement("span",null,t.main.temp_min," \u2103")),r.a.createElement("h3",null,r.a.createElement("span",null,"MAX")," ",r.a.createElement("span",null,t.main.temp_max," \u2103")),r.a.createElement("h3",null,r.a.createElement("span",null,"HUMIDITY")," ",r.a.createElement("span",null,t.main.humidity," \u2103")),r.a.createElement("h3",null,r.a.createElement("span",null,"WIND SPEED")," ",r.a.createElement("span",null,t.wind.speed)),r.a.createElement("h3",null,r.a.createElement("span",null,"visibility")," ",r.a.createElement("span",null,t.visibility)," "),r.a.createElement("h3",null,r.a.createElement("span",null,"pressure")," ",r.a.createElement("span",null,t.main.pressure)," "),r.a.createElement("h3",null,r.a.createElement("span",null,"WIND "),r.a.createElement("span",null,t.wind.deg)," "))),r.a.createElement(ce,null,r.a.createElement("button",{onClick:function(){o.go(-1)}},"\u25c0 back")))}function ue(){var e=Object(p.a)(["\n  width: 100%;\n  background-color: white;\n  height: 80px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  text-align: center;\n  z-index: 3;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  h1 {\n    text-align: center;\n    text-transform: uppercase;\n  }\n"]);return ue=function(){return e},e}var se=f.d.div(ue()),me=function(){return r.a.createElement(c.b,{to:"/",style:{color:"black"}},r.a.createElement(se,null,r.a.createElement("h1",null,'WEATHER"S"')))},de=t(23);function pe(){var e=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n\n  width: 70vw;\n  height: 85vh;\n  margin: auto;\n  grid-gap: 10px;\n  font-size: 1.2em;\n  padding: 10px 20px;\n  text-align: center;\n  border-radius: 10px;\n  margin-top: 80px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(1, 0.8, 0.25, 1);\n"]);return pe=function(){return e},e}var fe=f.d.div(pe());var be=Object(O.b)((function(e){return{location:Object(de.a)(e)}}))((function(e){var n=e.location;return console.log(n),r.a.createElement(fe,null,n.map((function(e){return r.a.createElement(S,{location:e,isSaveCity:!0})})))})),ge=t(19),he=(t(87),function(e){var n=e.handleChange,t=e.label,a=Object(y.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:n},a)),t?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},t):null)});function xe(){var e=Object(p.a)(["\n  min-width: 100px;\n  width: auto;\n  height: 50px;\n  line-height: 50px;\n  font-size: 14px;\n  text-transform: uppercase;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  border: none;\n\n  @media screen and (max-width: 1000px) {\n    min-width: 80px;\n    font-size: 0.8rem;\n  }\n\n  ",";\n"]);return xe=function(){return e},e}function Ee(){var e=Object(p.a)(["\n  color: white;\n  font-size: 25px;\n  border-radius: 10px;\n  &:hover {\n    background-color: #000;\n    border: none;\n  }\n  @media screen and (max-width: 1000px) {\n    font-size: 0.8rem;\n  }\n"]);return Ee=function(){return e},e}function ve(){var e=Object(p.a)(["\n  color: gray;\n  font-size: 3rem;\n  background-color: transparent;\n  width: 50px;\n\n  &:hover {\n    color: black;\n    border: none;\n  }\n  @media screen and (max-width: 1000px) {\n    font-size: 2rem;\n  }\n"]);return ve=function(){return e},e}function we(){var e=Object(p.a)(["\n  background-color: white;\n  color: black;\n  border: 2px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]);return we=function(){return e},e}function ye(){var e=Object(p.a)(["\n  background-color: ",";\n  color: white;\n  border: none;\n  border-radius: 10px;\n  transition: all 0.3s ease;\n  border: 2px solid ",";\n  &:hover {\n    background-color: #ffacb7;\n    color: white;\n    border: 2px solid #ffacb7;\n  }\n"]);return ye=function(){return e},e}var Oe=Object(f.c)(ye(),(function(e){return e.theme.body}),(function(e){return e.theme.body})),je=Object(f.c)(we()),ke=Object(f.c)(ve()),Se=Object(f.c)(Ee()),Ce=f.d.button(xe(),(function(e){return e.isGoogleSignIn?ke:e.isGithubSignIn?Se:e.inverted?je:Oe})),ze=function(e){var n=e.children,t=Object(y.a)(e,["children"]);return r.a.createElement(Ce,t,n)};function Ie(){var e=Object(p.a)(["\n  width: 100%;\n  min-width: 500px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 30px;\n  margin: 50px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  h2,\n  span {\n    color: ",";\n  }\n  @media screen and (max-width: 1000px) {\n    min-width: 100%;\n    margin: 0;\n  }\n\n  .title {\n    margin: 10px 0;\n  }\n  .buttons {\n    display: flex;\n    justify-content: space-around;\n  }\n"]);return Ie=function(){return e},e}var Ae=f.d.div(Ie(),(function(e){return e.theme.body}));function Ne(){var e=Object(a.useState)({email:"",password:""}),n=Object(d.a)(e,2),t=n[0],i=n[1],o=function(){var e=Object(m.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,A.signInWithEmailAndPassword(t.email,t.password);case 4:i({email:"",password:""}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}(),c=function(e){var n=e.target,a=n.value,r=n.name;i(Object(s.a)({},t,Object(ge.a)({},r,a)))};return r.a.createElement(Ae,null,r.a.createElement("h2",null,"\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\ub2e4\uba74 \ud83d\udd11"),r.a.createElement("span",null,"\ub85c\uadf8\uc778 \uc815\ubcf4\ub97c \uc785\ub825\ud558\uc138\uc694 "),r.a.createElement("form",{onSubmit:o},r.a.createElement(he,{name:"email",type:"email",value:t.email,handleChange:c,label:"email",required:!0}),r.a.createElement(he,{name:"password",type:"password",handleChange:c,value:t.password,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(ze,{type:"submit"},"Sign In"),r.a.createElement(ze,{onClick:P,isGoogleSignIn:!0},r.a.createElement("i",{class:"fab fa-google"})),r.a.createElement(ze,{onClick:F,isGoogleSignIn:!0},r.a.createElement("i",{class:"fab fa-github"})),r.a.createElement(ze,{onClick:L,isGoogleSignIn:!0},r.a.createElement("i",{class:"fab fa-facebook"})))))}function De(){var e=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 30px;\n  margin: 50px;\n\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  min-width: 500px;\n  h2,\n  span {\n    color: ",";\n  }\n  @media screen and (max-width: 1000px) {\n    min-width: 100%;\n    margin: 30px 0;\n  }\n\n  .title {\n    margin: 10px 0;\n  }\n"]);return De=function(){return e},e}var Pe=f.d.div(De(),(function(e){return e.theme.body}));function Re(){var e=Object(a.useState)({displayName:"",email:"",password:"",confirmPassword:""}),n=Object(d.a)(e,2),t=n[0],i=n[1],o=function(){var e=Object(m.a)(u.a.mark((function e(n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.password===t.confirmPassword){e.next=4;break}return alert("Passwords don't match"),e.abrupt("return");case 4:return e.prev=4,e.next=7,A.createUserWithEmailAndPassword(t.email,t.password);case 7:return a=e.sent,r=a.user,e.next=11,I(r,{displayName:t.displayName});case 11:i({displayName:"",email:"",password:"",confirmPassword:""}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(n){return e.apply(this,arguments)}}();function c(e){var n=e.target,a=n.name,r=n.value;i(Object(s.a)({},t,Object(ge.a)({},a,r)))}return r.a.createElement(Pe,null,r.a.createElement("h2",{className:"title"}," \ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4 \ud83d\udd10"),r.a.createElement("span",null,"\ud68c\uc6d0\uc774 \uc544\ub2c8\uc2dc\uba74 \ud68c\uc6d0\uac00\uc785\uc744 \ud574\uc8fc\uc138\uc694."),r.a.createElement("form",{className:"sign-up-form",onSubmit:o},r.a.createElement(he,{type:"text",name:"displayName",value:t.displayName,onChange:c,label:"displayname",required:!0}),r.a.createElement(he,{type:"email",name:"email",value:t.email,onChange:c,label:"email",required:!0}),r.a.createElement(he,{type:"password",name:"password",value:t.password,onChange:c,label:"password",required:!0}),r.a.createElement(he,{type:"password",name:"confirmPassword",value:t.confirmPassword,onChange:c,label:"Confirm Password",required:!0}),r.a.createElement(ze,{type:"submit"}," SIGN UP ")))}function Fe(){var e=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  padding: 50px;\n  justify-content: space-between;\n  margin: 0 auto;\n\n  @media screen and (max-width: 1000px) {\n    width: 100%;\n    position: absolute;\n    top: 10%;\n    left: 0;\n\n    flex-direction: column;\n    justify-content: center;\n    margin: auto;\n  }\n"]);return Fe=function(){return e},e}var Ge=f.d.div(Fe());function Le(){return r.a.createElement(Ge,null,r.a.createElement(Ne,null),r.a.createElement(Re,null))}t(88);var Te=Object(Z.i)((function(){var e,n,t=Object(a.useState)(!1),i=Object(d.a)(t,2),o=i[0],c=i[1],l=Object(a.useState)("/"),p=Object(d.a)(l,2),b=(p[0],p[1]),g=Object(a.useState)("light"),h=Object(d.a)(g,2),x=h[0],E=h[1],v=Object(a.useState)(null),w=Object(d.a)(v,2),y=w[0],O=w[1],j=Object(a.useRef)();e=j,n=function(){return c(!1)},Object(a.useEffect)((function(){var t=function(t){e.current&&!e.current.contains(t.target)&&n(t)};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e,n]);var k=Object(Z.g)(),S=null;return Object(a.useEffect)((function(){return S=A.onAuthStateChanged(function(){var e=Object(m.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}return e.next=3,I(n);case 3:e.sent.onSnapshot((function(e){O(Object(s.a)({id:e.id},e.data()))}));case 5:O(n);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),function(){S()}}),[y]),Object(a.useEffect)((function(){b((function(e){return e!==k.location.pathname&&c(!1),k.location.pathname}))}),[k.location.pathname]),r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{theme:"light"===x?J:V},r.a.createElement(K,null),r.a.createElement(me,null),r.a.createElement("button",{className:"darkmode",onClick:function(){E("light"===x?"dark":"light")}},"light"===x?"\ud83c\udf1b":"\ud83c\udf1e"),r.a.createElement("div",{ref:j},r.a.createElement(ee,{toggle:o,toggler:c}),r.a.createElement(ae,{currentUser:y,toggle:o,toggler:c,theme:x})),r.a.createElement(Z.d,null,r.a.createElement(Z.b,{exact:!0,path:"/"},r.a.createElement(_,null)),r.a.createElement(Z.b,{exact:!0,path:"/add"},r.a.createElement(Y,null)),r.a.createElement(Z.b,{exact:!0,path:"/detail"},r.a.createElement(be,null)),r.a.createElement(Z.b,{exact:!0,path:"/signin"},y?r.a.createElement(Z.a,{exact:!0,to:"/"}):r.a.createElement(Le,null)),r.a.createElement(Z.b,{exact:!0,path:"/:cityId"},r.a.createElement(le,null)))))})),Ue=t(27),He=Object(Ue.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADDCART":var t=e.filter((function(e){return e.id===n.payload.id}));if(0===t.length)return[].concat(Object(de.a)(e),[n.payload]);case"REMOVECART":var a=e.filter((function(e){return e.id!==n.payload.id}));return Object(de.a)(a);default:return e}})),Me=document.getElementById("root");o.a.render(r.a.createElement(c.a,{basename:"/weather-app"},r.a.createElement(O.a,{store:He},r.a.createElement(Te,null))),Me)}},[[50,1,2]]]);
//# sourceMappingURL=main.c59a37ed.chunk.js.map