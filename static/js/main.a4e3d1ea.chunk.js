(this["webpackJsonplink-kepper"]=this["webpackJsonplink-kepper"]||[]).push([[0],{31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),s=n(23),l=n.n(s),r=(n(31),n(26)),a=n(19),o=n.n(a),j=n(24),d=n(8),b=n(10),k=n(3),u=(n(33),n(34),n(12)),p=n(9),h=(n(40),n(0)),O=function(e){var t=e.title,n=e.onAdd,i=e.enableFormAddLink,c="btn add icon";c+=i?" red":" orange";var s=Object(k.e)();return Object(h.jsx)("header",{children:Object(h.jsxs)("div",{className:"link-keeper__header",children:[Object(h.jsxs)("h1",{children:[Object(h.jsx)(u.a,{icon:p.b})," ",t,Object(h.jsx)("small",{children:"Just click on white box for copy"})]}),"/link-keeper"===s.pathname&&Object(h.jsxs)("button",{className:c,onClick:n,children:[Object(h.jsx)(u.a,{icon:p.c}),i?"Close":"Add"]})]})})};O.defaultProps={title:"Link keeper"};var m=O,f=(n(44),function(e){var t=e.link,n=e.handleDeleteLink,i=e.handleCopyLink;return Object(h.jsxs)("div",{className:"link-keeper__list-item",onClick:function(){return i(t.link)},children:[Object(h.jsxs)("div",{className:"link-keeper__list-item-header",children:[Object(h.jsxs)("div",{className:"link-keeper__list-item-title",children:[t.title,Object(h.jsx)("small",{children:t.link})]}),Object(h.jsxs)("div",{className:"link-keeper__list-item-actions",children:[Object(h.jsx)("a",{href:t.link,target:"_blank",children:Object(h.jsx)("button",{className:"btn circle orange-200",children:Object(h.jsx)(u.a,{icon:p.a})})}),Object(h.jsx)("button",{className:"btn circle orange-200",onClick:function(e){return function(e,t){e.stopPropagation(),n(t)}(e,t.id)},children:Object(h.jsx)(u.a,{icon:p.d})})]})]}),Object(h.jsx)("div",{className:"link-keeper__list-item-desc",children:t.desc})]})}),x=(n(45),function(e){var t=e.links,n=e.handleDeleteLink,i=e.handleCopyLink;e.msgNotificate;return Object(h.jsx)("div",{className:"link-keeper__list",children:t.length>0?Object(h.jsx)("div",{className:"link-keeper__list-outside",children:Object(h.jsx)("div",{className:"link-keeper__list-inside",children:t.map((function(e){return Object(h.jsx)(f,{link:e,handleDeleteLink:n,handleCopyLink:i},e.id)}))})}):Object(h.jsx)("div",{className:"link-keeper__list-empty",children:"No links :("})})}),_=(n(46),function(e){var t=e.addLink,n=Object(i.useState)(""),c=Object(d.a)(n,2),s=c[0],l=c[1],r=Object(i.useState)(""),a=Object(d.a)(r,2),o=a[0],j=a[1],b=Object(i.useState)(""),k=Object(d.a)(b,2),u=k[0],p=k[1];return Object(h.jsx)("div",{className:"link-keeper__form",children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o?(t({title:s,link:o,desc:u}),l(""),j(""),p("")):alert("Please add a link")},children:[Object(h.jsxs)("div",{className:"link-keeper__form-control",children:[Object(h.jsx)("label",{className:"link-keeper__form-label",children:"Link title"}),Object(h.jsx)("input",{type:"text",className:"link-keeper__form-input",value:s,onChange:function(e){return l(e.target.value)}})]}),Object(h.jsxs)("div",{className:"link-keeper__form-control",children:[Object(h.jsx)("label",{className:"link-keeper__form-label",children:"Link"}),Object(h.jsx)("input",{type:"text",className:"link-keeper__form-input",value:o,onChange:function(e){return j(e.target.value)}})]}),Object(h.jsxs)("div",{className:"link-keeper__form-control",children:[Object(h.jsx)("label",{className:"link-keeper__form-label",children:"Description"}),Object(h.jsx)("textarea",{rows:"3",cols:"45",className:"link-keeper__form-input",value:u,onChange:function(e){return p(e.target.value)}})]}),Object(h.jsx)("div",{className:"link-keeper__form-control",children:Object(h.jsx)("input",{type:"submit",className:"btn add orange",value:"Add"})})]})})}),v=(n(47),function(e){return Object(h.jsx)("div",{className:"link-keeper__footer",children:Object(h.jsx)(b.b,{to:"/about",children:"About"})})}),N=(n(48),function(e){var t=e.msg,n=e.enableNotificate,i=e.classNotice,c="link-keeper__notification ";return i&&(c+=i),n&&(c+=" active"),Object(h.jsx)("div",{className:c,children:t})}),g=function(e){return Object(h.jsxs)("div",{className:"link-keeper__content",children:[Object(h.jsx)(b.b,{to:"/link-keeper",children:"Go back"}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Link-keeper"})," was created to demonstrate basic React.js skills that was got in short amount of time."]}),Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:"Opportunities this app:"})}),Object(h.jsx)("p",{children:"- addition new links"}),Object(h.jsx)("p",{children:"- deletion links"}),Object(h.jsx)("p",{children:"- copy link to clipboard when clicking on white box"}),Object(h.jsx)("p",{children:"- open selected link in a new window"}),Object(h.jsx)("p",{children:"- switch pages without reloading the page"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Just enjoy! Thank you for watching my application :)"})]})},w=function(){var e=Object(i.useState)([{title:"Link-keeper",link:"https://github.com/demon059/link-keeper",desc:"My first app on React.js",id:1},{title:"mylnikovdmitriy.ru",link:"http://mylnikovdmitriy.ru/",desc:"Site one developer ",id:2},{title:"shico.fun",link:"https://shico.fun/",desc:"This is a platform for online events for example online meetings or online quiz or whatever.",id:3},{title:"CV one developer",link:"https://perm.hh.ru/resume/d8c99ed5ff08b3a40c0039ed1f6c3669546171",desc:"",id:4}]),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(!1),l=Object(d.a)(s,2),a=l[0],u=l[1],p=Object(i.useState)(!1),O=Object(d.a)(p,2),f=O[0],w=O[1],y=Object(i.useState)(""),L=Object(d.a)(y,2),C=L[0],S=L[1],D=Object(i.useState)(""),A=Object(d.a)(D,2),F=A[0],T=A[1],P=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.confirm("Do you really want to remove the link?")&&c(n.filter((function(e){return e.id!==t})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(e){w(!1),c([].concat(Object(r.a)(n),[e])),T("rose"),S("Link added!"),w(!0),setTimeout((function(){w(!1)}),1e3)},B=function(e){w(!1),navigator.clipboard.writeText(e).then((function(){T(""),S("Link copied!"),w(!0),setTimeout((function(){w(!1)}),1e3)}))};return Object(h.jsx)(b.a,{children:Object(h.jsx)("div",{className:"page-container",children:Object(h.jsxs)("div",{className:"link-keeper__container",children:[Object(h.jsx)(m,{title:"Link keeper",enableFormAddLink:a,onAdd:function(){return u(!a)}}),Object(h.jsx)(k.a,{path:"/link-keeper",exact:!0,render:function(e){return Object(h.jsxs)(h.Fragment,{children:[!a&&Object(h.jsx)(x,{links:n,handleDeleteLink:P,handleCopyLink:B,msgNotificate:C}),a&&Object(h.jsx)(_,{addLink:J}),Object(h.jsx)(N,{msg:C,classNotice:F,enableNotificate:f}),Object(h.jsx)(v,{})]})}}),Object(h.jsx)(k.a,{path:"/about",component:g})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),i(e),c(e),s(e),l(e)}))};l.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),y()}},[[49,1,2]]]);
//# sourceMappingURL=main.a4e3d1ea.chunk.js.map