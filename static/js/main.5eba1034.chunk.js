(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{13:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a,c,i,r,o=n(0),s=n.n(o),b=n(6),d=n.n(b),l=(n(13),n(4)),j=n(2),u=n(3),p=u.a.div(a||(a=Object(j.a)(["\nwidth: 600px;\nbackground: #FFFFFF;\nbox-shadow: 0px 4px 10px #2196f3;\nmargin: 20px auto;\npadding: 25px;\n"]))),x=u.a.p(c||(c=Object(j.a)(["\nfont-size: 20px;\ntext-align: center;\n"]))),f=u.a.div(i||(i=Object(j.a)(["\n\n"]))),h=u.a.h2(r||(r=Object(j.a)(["\ntext-align:center;\nmargin-bottom: 25px;\n"]))),O=n(1);var g,v,k=function(e){var t=e.title,n=e.children;return Object(O.jsxs)(f,{children:[Object(O.jsx)(h,{children:t}),n]})},m=u.a.div(g||(g=Object(j.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nmargin-bottom: 25px;\n"]))),w=u.a.button(v||(v=Object(j.a)(["\n  min-width: 150px;\n  padding: 2px 32px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border-style: none;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 1.88;\n  letter-spacing: 0.06em;\n  color: #ffffff;\n  text-transform: capitalize;\n  background-color: #2196f3;\n\n&:not(:last-child){\nmargin-right: 15px;\n}\n"])));var F,y,z=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(O.jsx)(m,{children:t.map((function(e){return Object(O.jsx)(w,{onClick:function(){return n(e)},children:e},e)}))})},S=u.a.ul(F||(F=Object(j.a)([""]))),I=u.a.li(y||(y=Object(j.a)(["\nfont-size: 20px;\ntext-transform: capitalize;\nmargin-bottom: 15px;\n"])));var J=function(e){var t=e.options,n=e.values,a=e.total,c=e.positive;return Object(O.jsxs)(S,{children:[t.map((function(e){return Object(O.jsxs)(I,{children:[e,": ",n[e]]},e)})),Object(O.jsxs)(I,{children:["Total",": ",a]},"total"),Object(O.jsxs)(I,{children:["Positive feedback",": ",c,"%"]},"positive")]})};function L(){var e=Object(o.useState)(0),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)(0),i=Object(l.a)(c,2),r=i[0],s=i[1],b=Object(o.useState)(0),d=Object(l.a)(b,2),j=d[0],u=d[1],f=function(){return n+r+j},h=function(){var e=f();return Math.round(n/e*100)}(),g=f(),v=Object.keys({good:n,neutral:r,bad:j}),m={good:n,neutral:r,bad:j};return Object(O.jsxs)(p,{children:[Object(O.jsx)(k,{title:"Please leave feedback",children:Object(O.jsx)(z,{options:v,onLeaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":s((function(e){return e+1}));break;case"bad":u((function(e){return e+1}));break;default:console.log("Invalid feedback type")}}})}),Object(O.jsx)(k,{title:"Statistics",children:0!==g?Object(O.jsx)(J,{options:v,values:m,total:g,positive:h}):Object(O.jsx)(x,{children:"No feedback given"})})]})}d.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(L,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5eba1034.chunk.js.map