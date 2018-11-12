(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n,t){e.exports=t(44)},42:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(11),r=t.n(o),u=t(12),c=t(4),l=t(13),s=t(14),m=t(16),f=t(15),d=t(17),p=t(2),h=t.n(p),v="/api/persons",E={getAll:function(){return h.a.get(v).then(function(e){return e.data})},create:function(e){return h.a.post(v,e).then(function(e){return e.data})},update:function(e,n){return h.a.put("".concat(v,"/").concat(e),n).then(function(e){return e.data})},remove:function(e){return h.a.delete("".concat(v,"/").concat(e)).then(function(e){return e})}},b={NORMAL:0,ERROR:1},g=function(e){var n=e.message,t=e.notificationType;if(null===n)return null;var a=t===b.NORMAL?"normal":"error";return i.a.createElement("div",{className:a},n)},w=(t(42),function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(m.a)(this,Object(f.a)(n).call(this,e))).componentDidMount=function(){E.getAll().then(function(e){return t.setState({persons:e})})},t.addPerson=function(e){e.preventDefault();var n=t.state,a=n.newName,i=n.newPhonenumber,o=!1,r=t.nameExists(a);if(!r||(o=window.confirm("".concat(a," on jo luettelossa, korvataanko vanha numero uudella?")))){var u={name:a,number:i};(o?E.update(r.id,u):E.create(u)).then(function(e){t.setState(function(n){return{persons:o?t.updateItem(e):n.persons.concat(e)}});var n=o?"P\xe4ivitettiin ":"Lis\xe4ttiin ";t.addNotification(n+e.name)}).catch(function(e){t.addNotification("Yhteystiedon lis\xe4\xe4minen ep\xe4onnistui",b.ERROR)})}},t.removePerson=function(e){return function(){var n=t.findPerson(e);window.confirm("Oletko varma, ett\xe4 haluat poistaa kontaktin ".concat(n.name))&&E.remove(e).then(function(){t.setState(function(n){return{persons:n.persons.filter(function(n){return n.id!==e})}}),t.addNotification("Poistettiin ".concat(n.name))}).catch(function(n){if(404===n.response.status)return t.addNotification("Kontaktin on poistettu palvelimelta",b.ERROR),t.setState(function(n){return{persons:n.persons.filter(function(n){return n.id!==e})}});t.addNotification("Kontaktin poistaminen ep\xe4onnistui",b.ERROR)})}},t.addNotification=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b.NORMAL;t.setState({notificationMessage:e,notificationType:n}),setTimeout(function(){return t.setState(function(){return{notificationMessage:null,notificationType:null}})},3e3)},t.filterPersonList=function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())},t.findPerson=function(e){return t.state.persons.find(function(n){return n.id===e})},t.nameExists=function(e){return t.state.persons.find(function(n){return n.name.toLowerCase()===e.toLowerCase()})},t.updateItem=function(e){var n=t.state.persons,a=n.indexOf(n.find(function(n){return n.id===e.id}));return Object(c.a)(n.slice(0,a)).concat([e],Object(c.a)(n.slice(a+1)))},t.handleInputChange=function(e){return function(n){var a=n.target.value;t.setState(Object(u.a)({},e,a))}},t.state={persons:[],filter:"",notificationMessage:null,notificationType:null},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.state,n=e.filter,t=e.notificationMessage,a=e.notificationType;return i.a.createElement("div",null,i.a.createElement("h1",null,"Puhelinluettelo"),i.a.createElement(g,{message:t,notificationType:a}),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"filter"},"Rajaa n\xe4ytett\xe4vi\xe4: "),i.a.createElement("input",{name:"filter",value:n,onChange:this.handleInputChange("filter")})),i.a.createElement(C,{onSubmit:this.addPerson,onInputChange:this.handleInputChange}),i.a.createElement(O,{persons:this.state.persons.filter(this.filterPersonList),onClickButton:this.removePerson}))}}]),n}(a.Component)),C=function(e){var n=e.onSubmit,t=e.onInputChange,a=e.newName,o=e.newPhonenumber;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Lis\xe4\xe4 uusi"),i.a.createElement("form",{onSubmit:n},i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"name"},"Nimi: "),i.a.createElement("input",{name:"name",value:a,onChange:t("newName")})),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"number"},"Puhelinnumero: "),i.a.createElement("input",{name:"number",value:o,onChange:t("newPhonenumber")})),i.a.createElement("button",{type:"submit"},"Tallenna")))},O=function(e){var n=e.persons,t=e.onClickButton;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Numerot"),n.map(function(e){return i.a.createElement(k,{key:e.id,person:e,onClickButton:t})}))},k=function(e){var n=e.person,t=e.onClickButton;return i.a.createElement("div",null,i.a.createElement("p",null,n.name," ",n.number,i.a.createElement("button",{onClick:t(n.id)},"Poista")))},P=w;r.a.render(i.a.createElement(P,null),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.1e89c86c.chunk.js.map