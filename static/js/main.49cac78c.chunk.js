(this["webpackJsonpreact-things-happen-app"]=this["webpackJsonpreact-things-happen-app"]||[]).push([[0],Array(24).concat([function(e,t,a){e.exports=a.p+"static/media/image_placeholder_white.d93bb6ae.png"},,function(e,t,a){e.exports=a(78)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,function(e,t,a){var n={"./1.png":47,"./10.png":48,"./11.png":49,"./12.png":50,"./13.png":51,"./14.png":52,"./15.png":53,"./16.png":54,"./17.png":55,"./18.png":56,"./19.png":57,"./2.png":58,"./20.png":59,"./21.png":60,"./22.png":61,"./23.png":62,"./24.png":63,"./25.png":64,"./26.png":65,"./27.png":66,"./29.png":67,"./3.png":68,"./30.png":69,"./31.png":70,"./32.png":71,"./4.png":72,"./5.png":73,"./6.png":74,"./7.png":75,"./8.png":76,"./9.png":77};function i(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=c,e.exports=i,i.id=46},function(e,t,a){e.exports=a.p+"static/media/1.87430960.png"},function(e,t,a){e.exports=a.p+"static/media/10.c87acba3.png"},function(e,t,a){e.exports=a.p+"static/media/11.0fd1a026.png"},function(e,t,a){e.exports=a.p+"static/media/12.24779c61.png"},function(e,t,a){e.exports=a.p+"static/media/13.521a55d9.png"},function(e,t,a){e.exports=a.p+"static/media/14.4a01dc0a.png"},function(e,t,a){e.exports=a.p+"static/media/15.320d5d5a.png"},function(e,t,a){e.exports=a.p+"static/media/16.36d6a09c.png"},function(e,t,a){e.exports=a.p+"static/media/17.ffef5810.png"},function(e,t,a){e.exports=a.p+"static/media/18.8e649a84.png"},function(e,t,a){e.exports=a.p+"static/media/19.e2f49b9e.png"},function(e,t,a){e.exports=a.p+"static/media/2.015746c4.png"},function(e,t,a){e.exports=a.p+"static/media/20.8652bad9.png"},function(e,t,a){e.exports=a.p+"static/media/21.eb12c90b.png"},function(e,t,a){e.exports=a.p+"static/media/22.2b3e317e.png"},function(e,t,a){e.exports=a.p+"static/media/23.86a054b2.png"},function(e,t,a){e.exports=a.p+"static/media/24.0b668b10.png"},function(e,t,a){e.exports=a.p+"static/media/25.5be9b9d1.png"},function(e,t,a){e.exports=a.p+"static/media/26.28f9987f.png"},function(e,t,a){e.exports=a.p+"static/media/27.da39d556.png"},function(e,t,a){e.exports=a.p+"static/media/29.ce56e4e8.png"},function(e,t,a){e.exports=a.p+"static/media/3.40626545.png"},function(e,t,a){e.exports=a.p+"static/media/30.0ea0ced6.png"},function(e,t,a){e.exports=a.p+"static/media/31.e39b3300.png"},function(e,t,a){e.exports=a.p+"static/media/32.f3141e13.png"},function(e,t,a){e.exports=a.p+"static/media/4.c07f0c17.png"},function(e,t,a){e.exports=a.p+"static/media/5.9ef295b6.png"},function(e,t,a){e.exports=a.p+"static/media/6.d7db78d7.png"},function(e,t,a){e.exports=a.p+"static/media/7.9b33ef14.png"},function(e,t,a){e.exports=a.p+"static/media/8.94972eb4.png"},function(e,t,a){e.exports=a.p+"static/media/9.1335555c.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(15),l=a.n(c),r=(a(31),a(1)),s=a(2),o=a(4),d=a(5),p=(a(32),function(e){return i.a.createElement("div",{className:"addthing-button",onClick:function(){e.handleClick()}})}),u=a(3),g=function(e){return{type:"ADD_THING_VIEW",payload:e}},h=function(e){return{type:"SHOW_CURRENT_THING",payload:e}},m=function(e){return{type:"EDIT_THING_VIEW",payload:e}},f=function(e,t,a){return e.splice(t,1,a),{type:"PUSH_EDITED_THING",payload:e}},v=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).handleThing=function(){e.props.addThingView(!0)},e}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("h2",null,"Things Happen"),i.a.createElement(p,{handleClick:this.handleThing}))}}]),a}(i.a.Component),T={addThingView:g},b=Object(u.b)((function(e){return{things:e.thingsList}}),T)(v),E=function(e){var t=e.id,a=e.title,n=e.date,c=e.image,l=e.handleClick,r=e.gridListView,s="list"===r?i.a.createElement("img",{src:c}):null,o="grid"===r?{backgroundImage:"url(".concat(c,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"15px"}:null;return i.a.createElement("div",{className:"item",key:t,onClick:function(){l(t)},style:o},i.a.createElement("div",{className:"item-wrapper"},s,i.a.createElement("div",{className:"item-shade"},"\xa0"),i.a.createElement("div",{className:"item-date"},n),i.a.createElement("div",{className:"item-title"},a)))},y=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).handleThingClick=function(t){var a=e.props.things.filter((function(e){return e.id===t})).pop();e.props.showCurrentThing(a)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.things,n=t.gridListView,c=a.map((function(t){return i.a.createElement(E,{key:t.id,id:t.id,image:t.image_path,title:t.title,date:t.date,selectedDays:t.selected_days,handleClick:e.handleThingClick,gridListView:n})})),l="list"===n?"list-view":"";return i.a.createElement("div",{className:"list  ".concat(l)},c)}}]),a}(i.a.Component),w={showCurrentThing:h},D=Object(u.b)((function(e){return{things:e.thingsList,gridListView:e.gridListView}}),w)(y),x=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container"},i.a.createElement(b,{openAddThingView:e}),i.a.createElement(D,null)))},C=a(16),V=function(e){var t=e.title,a=e.cancelText,n=e.doneText,c=e.cancelClick,l=e.doneClick,r=e.doneActive?"ui-header-done active":"ui-header-done";return i.a.createElement("div",{className:"ui-header"},i.a.createElement("div",{className:"ui-header-cancel",onClick:function(){c()}},a),i.a.createElement("div",{className:"ui-header-title"},t||""),i.a.createElement("div",{className:r,onClick:function(){l()}},n))},O=a(21),N=a.n(O),_=(a(45),a(10)),k=function(e){var t=e.defaultImage,a=e.uploadedThingImage,n=e.showPopup,c=null===t?null:a||t;return i.a.createElement("div",{className:"add-thing-image",style:{backgroundImage:"url(".concat(c,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"}},i.a.createElement("div",{className:"add-thing-image-button ui-icon-camera",onClick:function(){n()}}),i.a.createElement("div",{className:"ui-image-placeholder"}))},j=function(e){var t=e.getThingTitle,a=e.label,n=e.title,c=e.defaultValue;return i.a.createElement("div",{className:"add-thing-title"},i.a.createElement("div",{className:"label"},a),i.a.createElement("input",{type:"text",placeholder:n,onChange:function(e){t(e.target.value)},value:c,name:"title"}))};j.defaultProps={label:"Thing Name",title:"For example, Buy contact lens"};var S=j,I=function(e){var t=e.title,a=e.deleteClick;return i.a.createElement("div",{className:"button button-delete text-center",onClick:function(){a()}},i.a.createElement("span",null,t))};I.defaultProps={title:"Delete"};var L,A=I,G=(L=a(46)).keys().map(L),H=function(e){var t=e.isVisible,a=e.title,n=e.cancelText,c=e.doneText,l=e.cancelClick,r=e.doneClick,s=e.getImage,o=function(e){s(e.target.id,e.target.src),r()},d=t?"add-thing-catalog visible":"add-thing-catalog",p=G.map((function(e,t){return i.a.createElement("div",{className:"catalog-image-holder",key:t,onClick:o},i.a.createElement("img",{src:e,id:t}))}));return i.a.createElement("section",{className:d},i.a.createElement(V,{title:a,cancelText:n,doneText:c,cancelClick:function(){l()}}),i.a.createElement("div",{className:"catalog"},p))};H.defaultProps={title:"Pick a thing image",cancelText:"Cancel",doneText:""};var P=H,R=function(e){var t=e.isVisible,a=e.catalogText,n=e.buttonText,c=e.cancelPopup,l=e.doCatalog,r=e.doUpload,s=t?"ui-popup visible":"ui-popup";return i.a.createElement("section",{className:s},i.a.createElement("div",{className:"ui-popup-body"},i.a.createElement("div",{className:"ui-popup-body__options"},i.a.createElement("div",{className:"ui-popup-body__option"},i.a.createElement("button",{onClick:function(){l()}},a)),i.a.createElement("div",{className:"ui-popup-body__option"},i.a.createElement("input",{type:"file",accept:"image/*",name:"image",onChange:function(e){r(e)}}))),i.a.createElement("button",{className:"ui-popup-body__button",onClick:function(){c()}},n)),i.a.createElement("div",{className:"ui-popup-shade"}))};R.defaultProps={catalogText:"Choose from catalog",buttonText:"Cancel"};var U=R,W=function(e){var t=e.classname,a=e.hasDeleteButton,c=e.header,l=e.thingImageSettings,r=e.thingTitleSettings,s=e.getThingImage,o=e.isVisible,d=a?i.a.createElement(A,{deleteClick:a.handleDeleteThing}):null,p=Object(n.useState)(!1),u=Object(_.a)(p,2),g=u[0],h=u[1],m=Object(n.useState)(null),f=Object(_.a)(m,2),v=f[0],T=f[1],b=Object(n.useState)(!1),E=Object(_.a)(b,2),y=E[0],w=E[1],D=function(){w(!1)},x=o?i.a.createElement(U,{isVisible:g,cancelPopup:function(){h(!1)},doCatalog:function(){w(!0),h(!1)},doUpload:function(e){h(!1),e.target.files[0]&&(T(URL.createObjectURL(e.target.files[0])),s(URL.createObjectURL(e.target.files[0])))}}):null,C=o?i.a.createElement(P,{isVisible:y,cancelClick:D,doneClick:D,getImage:function(e,t){console.log("id:",e,"src:",t),T(t),console.log(v),s(t)}}):null;return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:t},i.a.createElement(V,{title:c.title,cancelText:c.cancelText,doneText:c.doneText,cancelClick:c.handleCancel,doneClick:c.handleDone,doneActive:c.doneActive}),i.a.createElement(k,{uploadedThingImage:v,defaultImage:l.imagePath,showPopup:function(){h(!0)}}),i.a.createElement("div",{className:"edit-thing-footer"},i.a.createElement(S,{getThingTitle:r.thingTitle,defaultValue:r.defaultTitle}),d)),x,C)},B=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).thingTitle=function(e){n.setState({title:e})},n.thingImage=function(e){n.setState({image_path:e})},n.handleCancel=function(){n.props.editThingView(!1)},n.handleDone=function(){var e=n.props,t=e.things,a=e.showCurrentThing,i=e.pushEditedThing,c=e.editThingView,l=e.currentThing;console.log("things",t,t.indexOf(l));var r=t.indexOf(l);a(n.state),i(t,r,n.state),c(!1)},n.handleDeleteThing=function(){var e=n.props,t=e.things,a=e.currentThing,i=e.deleteThing,c=t.indexOf(a);i(t,c),console.log("things",t,t.length,t.indexOf(a)),n.props.editThingView(!1),n.props.showCurrentThing(null)},n.state={id:n.props.currentThing.id,title:n.props.currentThing.title,date:n.props.currentThing.date,selectedDays:n.props.currentThing.selectedDays,image_path:n.props.currentThing.image_path},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isVisible,a=e.title,n=e.cancelText,c=e.doneText,l=t?"edit-thing-view overflow-view visible":"edit-thing-view overflow-view";return i.a.createElement(W,{classname:l,header:{title:a,cancelText:n,doneText:c,handleCancel:this.handleCancel,handleDone:this.handleDone},thingImageSettings:{imagePath:this.state.image_path},thingTitleSettings:{thingTitle:this.thingTitle,defaultTitle:this.state.title},hasDeleteButton:{handleDeleteThing:this.handleDeleteThing},getThingImage:this.thingImage,isVisible:t})}}]),a}(i.a.Component);B.defaultProps={title:"Edit thing",cancelText:"Cancel",doneText:"Save"};var M={editThingView:m,pushEditedThing:f,showCurrentThing:h,deleteThing:function(e,t){return e.splice(t,1),{type:"DELETE_THING",payload:e}}},F=Object(u.b)((function(e){return{things:e.thingsList,currentThing:e.currentThing}}),M)(B),J=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleEdit=function(){n.props.editThingView(!0)},n.handleClose=function(){var e={id:n.props.currentThing.id,title:n.props.currentThing.title,date:n.state.date,image_path:n.props.currentThing.image_path,selectedDays:n.state.selectedDays};console.log("IMAGE",n.state,n.props.currentThing);var t=n.props,a=t.things,i=t.currentThing,c=t.pushEditedThing,l=a.indexOf(i);c(a,l,e),n.props.closeScreen()},n.getVisibleClass=function(){return"words"},n.handleDayClick=n.handleDayClick.bind(Object(C.a)(n)),n.state={id:n.props.currentThing.id,title:n.props.currentThing.title,date:n.props.currentThing.date,image_path:n.props.currentThing.image_path,selectedDays:n.props.currentThing.selectedDays},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({selectedDays:this.props.currentThing.selectedDays.map((function(e){return new Date(e)}))})}},{key:"handleDayClick",value:function(e,t){var a=t.selected;if(!t.disabled){var n=this.state.selectedDays;if(a){var i=n.findIndex((function(t){return O.DateUtils.isSameDay(t,e)}));n.splice(i,1)}else n.push(e);var c=this.state.selectedDays;if(c.map((function(e){return e.getTime()})),c.length){var l=c.reduce((function(e,t){return Math.max(e,t)})),r=(new Date).getTime(),s=Math.floor(Math.abs((r-l)/864e5)),o="1"===s.toString().split().pop()?" day ago":" days ago";console.log("till today",s,(r-l)/864e5),this.setState({date:0===s?"Today":s+o,selectedDays:n})}else this.setState({date:"Never",selectedDays:n})}}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.image,c=t.isVisible?"visible":"";setTimeout((function(){e.getVisibleClass()}),2e3);var l={after:new Date};return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"thing-view overflow-view "+c},i.a.createElement("div",{className:"image-holder"},i.a.createElement("div",{className:"image-shade"}),i.a.createElement("img",{src:n,alt:a})),i.a.createElement("div",{className:"thing-view-content"},i.a.createElement(V,{cancelClick:this.handleClose,cancelText:"Back",doneClick:this.handleEdit,doneText:"Edit"}),i.a.createElement("div",{className:"thing-view-info"},i.a.createElement("div",{className:"thing-view-date"},this.state.date),i.a.createElement("div",{className:"thing-view-title"},a))),i.a.createElement("div",{className:"calendar"},i.a.createElement(N.a,{onDayClick:this.handleDayClick,selectedDays:this.state.selectedDays,disabledDays:l}))),i.a.createElement(F,{isVisible:this.props.editThingViewState}))}}]),a}(i.a.Component),Y={changeSelectedDays:function(e){return{type:"CHANGE_SELECTED_DAYS",payload:e}},editThingView:m,pushEditedThing:f},z=Object(u.b)((function(e){return{currentThing:e.currentThing,things:e.thingsList,editThingViewState:e.editThingView}}),Y)(J),$=a(24),q=a.n($),K=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).thingTitle=function(t){e.setState({title:t})},e.thingImage=function(t){e.setState({image_path:t})},e.clearState=function(){e.setState({id:null,title:"",date:null,selectedDays:[],image_path:null})},e.cancelView=function(){e.props.addThingView(!1),e.clearState()},e.saveView=function(){e.props.things.map((function(e,t){return e.id=t}));var t={id:e.props.things.length,title:e.state.title,date:"Never",selectedDays:[],image_path:null!=e.state.image_path?e.state.image_path:q.a};console.log("newThing",t),e.state.title.length&&e.props.addThing(e.props.things,t),e.props.addThingView(!1),e.clearState()},e.state={id:null,title:"",date:null,selectedDays:[],image_path:null},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.cancelText,n=e.doneText,c=e.isVisible,l=this.state.title.length,r=c?"add-thing-view overflow-view visible":"add-thing-view overflow-view";return i.a.createElement(W,{classname:r,hasDeleteButton:!1,header:{title:t,cancelText:a,doneText:n,handleCancel:this.cancelView,handleDone:this.saveView,doneActive:l},thingImageSettings:{imagePath:this.state.image_path},thingTitleSettings:{thingTitle:this.thingTitle,defaultTitle:this.state.title},getThingImage:this.thingImage,isVisible:c})}}]),a}(i.a.Component);K.defaultProps={title:"Thing Name",cancelText:"Cancel",doneText:"Save"};var Q={addThing:function(e,t){return e.unshift(t),{type:"ADD_THING",payload:e}},addThingView:g},X=Object(u.b)((function(e){return{things:e.thingsList}}),Q)(K),Z=[{code:"things",text:"Things"},{code:"settings",text:"Settings"}],ee=function(e){var t=e.text,a=e.code,n=e.isActive,c=e.handleChange;return i.a.createElement("label",{className:n?"active":""},i.a.createElement("input",{type:"radio",onClick:function(e){c(e.target.value)},value:a}),t)},te=function(e){var t=e.options,a=e.defaultValue,c=e.dispatchAction,l=Object(n.useState)(a),r=Object(_.a)(l,2),s=r[0],o=r[1],d=function(e){o(e),c(e)},p=t.map((function(e){return i.a.createElement(ee,{text:e.text,key:e.code,code:e.code,handleChange:d,isActive:s===e.code})}));return i.a.createElement("div",{className:"navigation-tabs"},p)},ae=[{code:"grid",text:"Grid"},{code:"list",text:"List"}],ne=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).dispatchGridView=function(t){e.props.setGridListView(t)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.gridListView;return i.a.createElement("section",{className:"settings-view container"},i.a.createElement("h1",null,t),i.a.createElement("div",{className:"promo-wrapper"},i.a.createElement("div",{className:"promo"},i.a.createElement("div",{className:"promo-text"},'"Things" Happen Unlimited'),i.a.createElement("div",{className:"promo-button"},"Get"))),i.a.createElement("ul",{className:"settings-list list-items"},i.a.createElement("li",{className:"grid-list-view-wrapper"},i.a.createElement("div",null,"Display"),i.a.createElement(te,{options:ae,defaultValue:a,dispatchAction:this.dispatchGridView})),i.a.createElement("li",null,i.a.createElement("span",null,"Share with friends")),i.a.createElement("li",null,i.a.createElement("span",null,"Rate App"))))}}]),a}(i.a.Component);ne.defaultProps={title:"Settings"};var ie={setGridListView:function(e){return{type:"SET_GRID_LIST_VIEW",payload:e}}},ce=Object(u.b)((function(e){return{gridListView:e.gridListView}}),ie)(ne),le=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).handleClose=function(){e.props.showCurrentThing(null)},e.dispatchView=function(t){e.props.setTabView(t)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.setTabView("things")}},{key:"render",value:function(){var e=this.props,t=e.currentThing,a=e.tabView,n=e.addThingView,c=t?i.a.createElement(z,{isVisible:t||null,closeScreen:this.handleClose,title:t?t.title:"",date:t?t.date:"",selectedDays:t?t.selected_days:"",image:t?t.image_path:""}):null,l=t?null:i.a.createElement(X,{isVisible:this.props.addThingView}),r="things"===a?i.a.createElement(i.a.Fragment,null,i.a.createElement(x,null),c,l):i.a.createElement(ce,null),s=t||n?"is-hidden":"";return i.a.createElement("div",{className:"app ".concat(s)},r,i.a.createElement(te,{options:Z,defaultValue:"things",dispatchAction:this.dispatchView}))}}]),a}(i.a.Component),re={showCurrentThing:h,setTabView:function(e){return{type:"SET_TAB_VIEW",payload:e}}},se=Object(u.b)((function(e){return{currentThing:e.currentThing,addThingView:e.addThingView,tabView:e.tabView}}),re)(le),oe=a(9),de=a(6),pe=new Date,ue=pe.getMonth(),ge=pe.getDate(),he={thingsList:[{id:1,title:"Vet Visit",date:"2 days ago",selectedDays:[new Date(2020,ue,ge-5),new Date(2020,ue,ge-2)],image_path:"assets/images/8.png"},{id:2,title:"Yoga Class",date:"1 day ago",selectedDays:[new Date(2020,ue,ge-3),new Date(2020,ue,ge-1)],image_path:"assets/images/yoga.png"},{id:3,title:"Play Tennis",date:"9 days ago",selectedDays:[new Date(2020,ue,ge-9)],image_path:"assets/images/32.png"},{id:4,title:"Buy Contact Lens",date:"Today",selectedDays:[new Date(2020,ue,ge)],image_path:"assets/images/contact_lens.png"},{id:5,title:"Water Plants",date:"6 days ago",selectedDays:[new Date(2020,ue,ge-7),new Date(2020,ue,ge-6)],image_path:"assets/images/water_plants.png"}],currentThing:null,addThingView:!1,editThingView:!1,tabView:"things",gridListView:"grid"},me=a(25),fe=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}(),ve=Object(oe.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_THING_VIEW":return Object(de.a)({},e,{addThingView:t.payload});case"SET_TAB_VIEW":return Object(de.a)({},e,{tabView:t.payload});case"SET_GRID_LIST_VIEW":return Object(de.a)({},e,{gridListView:t.payload});case"ADD_THING":return Object(de.a)({},e,{thingsList:Array.prototype.splice.apply(e.thingsList,[0,t.payload.length].concat(t.payload))});case"SHOW_CURRENT_THING":return Object(de.a)({},e,{currentThing:t.payload});case"CHANGE_SELECTED_DAYS":return Object(de.a)({},e,{thingsList:t.payload});case"EDIT_THING_VIEW":return Object(de.a)({},e,{editThingView:t.payload});case"PUSH_EDITED_THING":case"DELETE_THING":return Object(de.a)({},e,{thingsList:Array.prototype.splice.apply(e.thingsList,[0,t.payload.length].concat(t.payload))});default:return e}}),fe,Object(oe.c)(Object(oe.a)(me.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={hasError:!1},e}return Object(s.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?i.a.createElement("h1",null,"Something went wrong"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(n.Component);ve.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log(a)}}(ve.getState())})),l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Te,null,i.a.createElement(u.a,{store:ve},i.a.createElement(se,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[26,1,2]]]);
//# sourceMappingURL=main.49cac78c.chunk.js.map