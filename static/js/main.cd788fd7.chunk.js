(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{10:function(t,e,n){t.exports=n(17)},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(9),u=n.n(c),o=n(5),s=n(6),l=(n(15),n(7)),i=n(1),m=n.n(i),p=n(3),f="https://jsonplaceholder.typicode.com",d=function(){var t=Object(p.a)(m.a.mark((function t(e){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(p.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("".concat(f,"/users")));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(p.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("".concat(f,"/todos")));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=function(){var t=Object(p.a)(m.a.mark((function t(){var e,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:return e=t.sent,t.next=5,h();case 5:return n=t.sent,t.abrupt("return",n.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{users:e.find((function(e){return e.id===t.userId}))})})));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(t){var e=t.todo;return a.a.createElement("div",null,a.a.createElement("p",null,e.users.name),a.a.createElement("p",null,e.title),a.a.createElement("p",null,e.completed?"completed":"uncompleted"))},y=function(t){var e=t.todos,n=t.handleSort;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"button-container"},a.a.createElement("button",{type:"button",className:"button",onClick:function(){return n("name")}},"Sort by name"),a.a.createElement("button",{type:"button",className:"button",onClick:function(){return n("title")}},"Sort by title"),a.a.createElement("button",{type:"button",className:"button",onClick:function(){return n("completed")}},"Sort by completed task")),a.a.createElement("ul",{className:"list"},e.map((function(t){return a.a.createElement("li",{key:t.id,className:"list-item"},a.a.createElement(j,{todo:t}))}))))},O=function(){var t=Object(r.useState)(!1),e=Object(s.a)(t,2),n=e[0],c=e[1],u=Object(r.useState)(!1),l=Object(s.a)(u,2),i=l[0],m=l[1],p=Object(r.useState)([]),f=Object(s.a)(p,2),d=f[0],b=f[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"head"},"Dynamic list of TODOs"),n?a.a.createElement(y,{todos:d,handleSort:function(t){switch(t){case"name":return b(Object(o.a)(d).sort((function(t,e){return t.users.name.localeCompare(e.users.name)})));case"title":return b(Object(o.a)(d).sort((function(t,e){return t.title.localeCompare(e.title)})));case"completed":return b(Object(o.a)(d).sort((function(t,e){return+t.completed-+e.completed})));default:return d}}}):a.a.createElement("button",{type:"button",className:"button",onClick:function(){m(!0),E().then((function(t){b(t),c(!0),m(!1)}))}},i?"Loading...":"Load"))};u.a.render(a.a.createElement(O,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.cd788fd7.chunk.js.map