(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__1yllH",errorInput:"SuperInputText_errorInput__1AJyb",error:"SuperInputText_error__3Gulr"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__11ijX",error:"Greeting_error__1RMDq",errormessage:"Greeting_errormessage__5tv8A"}},function(e,t,n){e.exports={default:"SuperButton_default__d8t82",red:"SuperButton_red__1jxW7"}},function(e,t,n){e.exports={blue:"HW4_blue__2gKRu",column:"HW4_column__18srK",testSpanError:"HW4_testSpanError__P1eny"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__pK1J3",spanClassName:"SuperCheckbox_spanClassName__HIvTu"}},,function(e,t,n){},,,,function(e,t,n){e.exports={App:"App_App__19KuE"}},,,function(e,t,n){e.exports=n(32)},,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(17),c=n.n(l),o=(n(26),n(18)),u=n.n(o),i=n(5);n(14);var s=function(){return r.a.createElement("div",{className:"header"},r.a.createElement(i.b,{to:"/pre-junior",className:"link"},"PreJunior"),r.a.createElement(i.b,{to:"/junior",className:"link"},"Junior"),r.a.createElement(i.b,{to:"/junior+",className:"link"},"JuniorPlus"),r.a.createElement("div",{className:"block"}))},m=n(1);var E=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var p=function(e){return r.a.createElement("div",null,r.a.createElement("img",{width:"75px",src:e.avatar,alt:""}),r.a.createElement("div",null,e.name),r.a.createElement("div",null,e.message),r.a.createElement("div",null,e.time))},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Some Name",f="some text",v="22:00";var b=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(p,{avatar:d,name:h,message:f,time:v}),r.a.createElement("hr",null),r.a.createElement("hr",null))},g=n(2);var C=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("span",null," '",e.affair.priority,"' "),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var k=function(e){var t=e.data.map((function(t){return r.a.createElement(C,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},_=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var O=function(){var e=Object(a.useState)(_),t=Object(g.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)("all"),o=Object(g.a)(c,2),u=o[0],i=o[1],s=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(n,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(k,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=n(20),N=n(9),y=n.n(N),x=n(4),S=n(10),w=n.n(S),A=["red","className"],T=function(e){var t=e.red,n=e.className,a=Object(x.a)(e,A),l="".concat(t?w.a.red:w.a.default," ").concat(n);return r.a.createElement("button",Object.assign({className:l},a))},I=n(8),F=n.n(I),P=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],J=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(x.a)(e,P),s="".concat(F.a.error," ").concat(u||""),m="".concat(c?F.a.errorInput:F.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},H=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,l=e.error,c=e.totalUsers,o=l?y.a.error:"";return r.a.createElement("div",null,r.a.createElement(J,{value:t,onChange:n,className:o}),r.a.createElement(T,{onClick:a},"Add"),r.a.createElement("span",null," ",c," "),r.a.createElement("div",{className:y.a.errormessage},r.a.createElement("span",null,l)))},W=function(e){var t=e.users,n=e.addUserCallback,l=Object(a.useState)(""),c=Object(g.a)(l,2),o=c[0],u=c[1],i=Object(a.useState)(""),s=Object(g.a)(i,2),m=s[0],E=s[1],p=t.length;return r.a.createElement(H,{name:o,setNameCallback:function(e){u(e.currentTarget.value),E("")},addUser:function(){""===o?E("Enter a name"):(n(o),alert("Hello, ".concat(o," !"))),u("")},error:m,totalUsers:p})},B=n(19);var K=function(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(W,{users:n,addUserCallback:function(e){var t={_id:Object(B.v1)(),name:e};l([t].concat(Object(j.a)(n)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},U=n(11),G=n.n(U),D=n(12),R=n.n(D),M=["type","onChange","onChangeChecked","className","spanClassName","children"],X=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,l=(e.spanClassName,e.children),c=Object(x.a)(e,M),o="".concat(R.a.checkbox," ").concat(a||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:o},c)),l&&r.a.createElement("span",{className:R.a.spanClassName},l))};var q=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],l=t[1],c=n?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},u=Object(a.useState)(!1),i=Object(g.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:G.a.column},r.a.createElement(J,{value:n,onChangeText:l,onEnter:o,error:c}),r.a.createElement(J,{className:G.a.blue}),r.a.createElement(T,null,"default"),r.a.createElement(T,{red:!0,onClick:o},"delete "),r.a.createElement(T,{disabled:!0},"disabled"),r.a.createElement(X,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(X,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null))},z=(n(29),["autoFocus","onBlur","onEnter","spanProps"]),L=["children","onDoubleClick","className"],Y=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,l=e.spanProps,c=Object(x.a)(e,z),o=Object(a.useState)(!1),u=Object(g.a)(o,2),i=u[0],s=u[1],m=l||{},E=m.children,p=m.onDoubleClick,d=m.className,h=Object(x.a)(m,L),f="spanClassHW6".concat(" ",d);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(J,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),t&&t(e)},onEnter:function(){s(!1),n&&n()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),p&&p(e)},className:f},h),E||c.value))};function Z(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function $(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}Z("test",{x:"A",y:1});$("test",{x:"",y:0});var Q=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(Y,{value:n,onChangeText:l,spanProps:{children:n?void 0:"enter text..."}})),r.a.createElement(T,{onClick:function(){Z("editable-span-value",n)}},"save"),r.a.createElement(T,{onClick:function(){l($("editable-span-value",n))}},"restore"))};var V=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(O,null),r.a.createElement(K,null),r.a.createElement(q,null),r.a.createElement(Q,null))},ee=(n(30),["options","onChange","onChangeOption"]),te=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,l=Object(x.a)(e,ee),c=t?t.map((function(e,t){return r.a.createElement("option",{key:t},e)})):[];return r.a.createElement("select",Object.assign({className:"selectClass",onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},l),c)},ne=(n(31),["type","name","options","value","onChange","onChangeOption"]),ae=function(e){e.type;var t=e.name,n=e.options,a=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(x.a)(e,ne),function(e){l&&l(e),c&&c(e.currentTarget.value)}),u=n?n.map((function(e,n){return r.a.createElement("label",{key:t+"-"+n},r.a.createElement("input",{type:"radio",name:t,value:e,onChange:o,checked:e===a,className:"superRadio"}),e)})):[];return r.a.createElement(r.a.Fragment,null,u)},re=["x","y","z"];var le=function(){var e=Object(a.useState)(re[1]),t=Object(g.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(te,{options:re,value:n,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ae,{name:"radio",options:re,value:n,onChangeOption:l})))};function ce(){return r.a.createElement("div",null,r.a.createElement(le,null))}function oe(){return r.a.createElement("div",null,"JuniorPlus")}var ue="/pre-junior/*",ie="/junior/*",se="/junior+/*";var me=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",element:r.a.createElement(m.a,{to:ue})}),r.a.createElement(m.b,{path:ue,element:r.a.createElement(V,null)}),r.a.createElement(m.b,{path:ie,element:r.a.createElement(ce,null)}),r.a.createElement(m.b,{path:se,element:r.a.createElement(oe,null)}),r.a.createElement(m.b,{path:"/*",element:r.a.createElement(E,null)})))};var Ee=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(s,null),r.a.createElement(me,null)))};var pe=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.8a13e2c3.chunk.js.map