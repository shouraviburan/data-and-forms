(this["webpackJsonpdata-and-forms"]=this["webpackJsonpdata-and-forms"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(15),a=n.n(c),r=(n(21),n(9)),i=(n(22),n(2)),o=(n(23),n(1)),j=function(e){return Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log(t);var n={};n.email=t.target[0].value,n.pass=t.target[1].value;var s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};"register"==t.nativeEvent.submitter.id?fetch("https://auth404.herokuapp.com/api/auth/register",s).then((function(e){return e.json().then((function(e){"success"==e.status?alert("Congrats, you registered as well! Please login."):alert(e.message),console.log(e)}))})):"login"==t.nativeEvent.submitter.id&&fetch("https://auth404.herokuapp.com/api/auth/login",s).then((function(t){return t.json().then((function(t){"success"==t.status?(localStorage.setItem("token",t.token),e.setIsLoggedIn(!0)):localStorage.removeItem("token")}))}))},children:[Object(o.jsx)("input",{name:"email",type:"email"}),Object(o.jsx)("input",{name:"pass",type:"password"}),Object(o.jsxs)("section",{children:[Object(o.jsx)("input",{id:"register",type:"submit",value:"Register"}),Object(o.jsx)("input",{id:"login",type:"submit",value:"Login"})]})]})})},l=(n(25),function(e){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:e.imgSrc}),Object(o.jsx)("h3",{children:e.name})]})});var u=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a={};return Object(s.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all",a).then((function(e){console.log(e),e.json().then((function(e){c(e.map((function(e){return Object(o.jsx)(l,{imgSrc:e.flag,name:e.name})})))}))}))}),[]),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("header",{className:"App-header",children:n})})},h=function(e){return 1==e.isLoggedIn?e.children:Object(o.jsx)(j,{setIsLoggedIn:e.setIsLoggedIn})};var d=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];Object(s.useEffect)((function(){var e=localStorage.getItem("token");c(null!=e)}),[]);var a=Object(o.jsx)(j,{setIsLoggedIn:c});n&&(a=Object(o.jsx)(u,{}));var l=[Object(o.jsx)(i.a,{path:"/personal/home",children:Object(o.jsx)("h1",{children:"Test"})}),Object(o.jsx)(i.a,{path:"/personal/emails",children:a}),Object(o.jsx)(i.a,{path:"/personal/dashboard",children:Object(o.jsx)("h1",{children:"Test2"})}),Object(o.jsx)(i.a,{path:"/personal/profile",children:a})];return Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",children:Object(o.jsx)(h,{isLoggedIn:n,setIsLoggedIn:c,children:Object(o.jsx)(u,{})})}),Object(o.jsx)(i.a,{path:"/auth",children:Object(o.jsx)(j,{setIsLoggedIn:c})}),Object(o.jsx)(i.a,{path:"/personal",children:Object(o.jsx)(h,{isLoggedIn:n,setIsLoggedIn:c,children:l})}),Object(o.jsx)(i.a,{path:"/countries",children:Object(o.jsx)(h,{isLoggedIn:n,setIsLoggedIn:c,children:Object(o.jsx)(u,{})})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))},b=n(12);a.a.render(Object(o.jsx)(b.a,{basename:"/shouraviburan/data-and-forms",children:Object(o.jsx)(d,{})}),document.getElementById("root")),g()}},[[34,1,2]]]);
//# sourceMappingURL=main.7e1badf3.chunk.js.map