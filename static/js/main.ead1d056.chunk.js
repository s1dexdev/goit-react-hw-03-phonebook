(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=n(10),u=n(2),s=n(19),l=n(3),b=n.n(l),m=n(0),j=function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(u.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),l=s[0],j=s[1],f=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":j(a)}};return Object(m.jsxs)("form",{className:b.a.form,onSubmit:function(t){t.preventDefault(),e(r,l),o(""),j("")},children:[Object(m.jsxs)("label",{className:b.a.labelName,children:["Name",Object(m.jsx)("input",{className:b.a.input,type:"text",name:"name",value:r,onChange:f})]}),Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("input",{className:b.a.input,type:"text",name:"number",value:l,onChange:f})]}),Object(m.jsx)("button",{className:b.a.btn,type:"submit",disabled:!(r&&l)&&!0,children:"Add contact"})]})},f=n(7),O=n.n(f),p=function(t){var e=t.onFilter,n=t.filter;return Object(m.jsxs)("label",{className:O.a.label,children:["Find contacts by name",Object(m.jsx)("input",{className:O.a.input,type:"text",name:"filter",value:n,onChange:e})]})},d=n(8),h=n.n(d),x=function(t){var e=t.onDeleteContact,n=t.visibleContacts;return Object(m.jsx)("ul",{children:n.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(m.jsxs)("li",{className:h.a.item,children:[a,": ",c,Object(m.jsx)("button",{className:h.a.btn,type:"button",name:n,onClick:function(){return e(n)},children:"Delete"})]},n)}))})},v=function(){var t=function(t,e){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(localStorage.getItem(t)))&&void 0!==n?n:e})),c=Object(u.a)(n,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(r))}),[t,r]),[r,o]}("contacts",""),e=Object(u.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(u.a)(r,2),l=o[0],b=o[1],f=l.toLowerCase(),O=n.filter((function(t){return t.name.toLowerCase().includes(f)}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(j,{onSubmit:function(t,e){if(function(t){return n.some((function(e){return e.name===t}))}(t))return alert("".concat(t," is already in contacts"));!function(t,e){var n={id:Object(s.a)(),name:t,number:e};c((function(t){return[].concat(Object(i.a)(t),[n])}))}(t,e)}}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(p,{value:l,onFilter:function(t){var e=t.currentTarget.value;b(e)}}),Object(m.jsx)(x,{onDeleteContact:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))},visibleContacts:O})]})};n(16);o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.querySelector("#root"))},3:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",labelName:"ContactForm_labelName__3V3cS",input:"ContactForm_input__gm87B",btn:"ContactForm_btn__2Bpnz"}},7:function(t,e,n){t.exports={input:"Filter_input__2DoVp"}},8:function(t,e,n){t.exports={btn:"ContactList_btn__1Xk4q",item:"ContactList_item__3YsZK"}}},[[17,1,2]]]);
//# sourceMappingURL=main.ead1d056.chunk.js.map