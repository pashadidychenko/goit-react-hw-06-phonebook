(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){e.exports={maineContainer:"Phonebook_maineContainer__3MolX",subContainer:"Phonebook_subContainer__2Q2_I"}},,,,,,,,function(e,t,n){e.exports={mainTitle:"MainTitle_mainTitle__3QqO8"}},function(e,t,n){e.exports={contactListItem:"ContactListItem_contactListItem__1loAS"}},function(e,t,n){e.exports={contactList:"ContactList_contactList__dhLnq"}},function(e,t,n){e.exports={enter:"slide_enter__3fV5p",enterActive:"slide_enterActive__3VIAH",exit:"slide_exit__3uupq",exitActive:"slide_exitActive__1Sd0X"}},,function(e,t,n){e.exports={contactForm:"AddContact_contactForm__2cH8I"}},function(e,t,n){e.exports={alert:"Alert_alert__2Klyb"}},function(e,t,n){e.exports={enter:"alert_enter__191m_",enterActive:"alert_enterActive__3ZyQg",exit:"alert_exit__Vbjd8",exitActive:"alert_exitActive__1uKsY"}},function(e,t,n){e.exports={findContainet:"FindContact_findContainet__2yFwL"}},function(e,t,n){e.exports={enter:"pop_enter__3DOjg",enterActive:"pop_enterActive__1qSPD",exit:"pop_exit__3Ctrf",exitActive:"pop_exitActive__2AJpp"}},function(e,t,n){e.exports={enter:"slideTitle_enter__1BfH0",enterActive:"slideTitle_enterActive__1YCDJ"}},,,function(e,t,n){e.exports=n(50)},,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(11),l=n(12),u=n(15),m=n(14),s=n(25),d=n.n(s),p=function(){return r.a.createElement("h1",{className:d.a.mainTitle},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430 \u043a\u043d\u0438\u0433\u0430")},_=n(26),b=n.n(_),f=function(e){var t=e.contact,n=e.deleteItem;return r.a.createElement("li",{"data-id":t.id,className:b.a.contactListItem},r.a.createElement("h4",null,t.name,":"),r.a.createElement("h4",null,t.number),r.a.createElement("button",{type:"button",id:t.id,onClick:n},"x"))},E=n(52),v=n(51),h=n(27),x=n.n(h),O=n(28),j=n.n(O);var C,y=function(e){var t=e.items,n=void 0===t?[]:t,a=e.filter,i=void 0===a?"":a,c=e.deleteItem,o=function(e,t){return 0!==t.length?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):e}(n,i);return r.a.createElement(E.a,{component:"ul",className:x.a.contactList},o.map((function(e){return r.a.createElement(v.a,{key:e.id,timeout:250,classNames:j.a},r.a.createElement(f,{deleteItem:c,contact:e,key:e.id}))})))},I=n(5),A=n(29),g=n(30),N=n.n(g),w=n(31),L=n.n(w),F=function(){return r.a.createElement("div",{className:L.a.alert},r.a.createElement("p",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0437 \u0442\u0430\u043a\u0438\u043c \u0456\u043c\u0435\u043d\u0435\u043c \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454"))},k=n(32),T=n.n(k),S=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",exist:!1},e.handleInputValue=function(t){var n=t.target.dataset.type;e.setState(Object(I.a)({},n,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var n={id:Object(A.v4)(),name:e.state.name.replace(/\b\w/g,(function(e){return e.toUpperCase()})),number:e.state.number};if(e.props.items.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})))return e.setState({exist:!0}),setTimeout((function(){e.setState({exist:!1})}),2e3);e.props.addNewItem(n),e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.exist;return r.a.createElement("form",{className:N.a.contactForm,onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"contactName"},"\u0406\u043c'\u044f"),r.a.createElement("input",{id:"contactName",type:"text","data-type":"name",value:t,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0412\u0430\u0448\u0435 \u0406\u043c'\u044f",onChange:this.handleInputValue}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"contactNumber"},"\u041d\u043e\u043c\u0435\u0440"),r.a.createElement("input",{id:"contactNumber",type:"text","data-type":"number",value:n,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440",onChange:this.handleInputValue}),r.a.createElement("br",null),r.a.createElement("button",{variant:"outlined",type:"submit"},"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"),r.a.createElement(v.a,{in:a,timeout:250,classNames:T.a,unmountOnExit:!0},r.a.createElement(F,null)))}}]),n}(r.a.Component),V=n(33),D=n.n(V),M=function(e){var t=e.getFilterValue;return r.a.createElement("div",{className:D.a.findContainet},r.a.createElement("label",{htmlFor:"findContact"},"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f \u0434\u043b\u044f \u043f\u043e\u0448\u0443\u043a\u0443"),r.a.createElement("input",{id:"findContact",type:"text",onChange:t}))},q=n(34),J=n.n(q),H=n(35),P=n.n(H),Q=n(17),B=n.n(Q),K=n(13),X=n(6),Y=Object(X.b)("ADD_NEW_ITEM"),R=Object(X.b)("DELETE_ITEM",(function(e){return{payload:e.target.id}})),U=Object(X.b)("FILTER_ITEM",(function(e){return{payload:e.target.value}})),W=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={inOn:!1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({inOn:!0})}},{key:"render",value:function(){var e=this.state.inOn,t=this.props,n=t.items,a=t.filter,i=t.addNewItem,c=t.deleteItem,o=t.getFilterValue;return r.a.createElement("div",{className:B.a.maineContainer},r.a.createElement("div",{className:B.a.subContainer},r.a.createElement(v.a,{in:e,timeout:500,classNames:P.a,unmountOnExit:!0},r.a.createElement(p,null)),r.a.createElement(S,{addNewItem:i,items:n}),r.a.createElement(v.a,{in:n.length>1,timeout:250,classNames:J.a,unmountOnExit:!0},r.a.createElement(M,{getFilterValue:o})),r.a.createElement(y,{items:n,filter:a,deleteItem:c})))}}]),n}(r.a.Component),Z={addNewItem:Y,deleteItem:R,getFilterValue:U},z=Object(K.b)((function(e){return{items:e.contacts.items,filter:e.contacts.filter}}),Z)(W),G=function(){return r.a.createElement(z,null)},$=n(20),ee=n(7),te=Object(X.c)({items:[],filter:""},(C={},Object(I.a)(C,Y,(function(e,t){return Object(ee.a)(Object(ee.a)({},e),{},{items:[].concat(Object($.a)(e.items),[t.payload])})})),Object(I.a)(C,R,(function(e,t){return Object(ee.a)(Object(ee.a)({},e),{},{items:Object($.a)(e.items.filter((function(e){return e.id!==t.payload})))})})),Object(I.a)(C,U,(function(e,t){return Object(ee.a)(Object(ee.a)({},e),{},{filter:t.payload})})),C)),ne=Object(X.a)({reducer:{contacts:te}});c.a.render(r.a.createElement(K.a,{store:ne},r.a.createElement(G,null)),document.getElementById("root"))}],[[38,1,2]]]);
//# sourceMappingURL=main.5e98f513.chunk.js.map