(this["webpackJsonpreact-things-happen-app"]=this["webpackJsonpreact-things-happen-app"]||[]).push([[0],Array(24).concat([function(e,t,n){e.exports=n.p+"static/media/image_placeholder_white.d93bb6ae.png"},,function(e,t,n){e.exports=n(78)},,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,function(e,t,n){var a={"./1-min.png":47,"./10-min.png":48,"./11-min.png":49,"./12-min.png":50,"./13-min.png":51,"./14-min.png":52,"./15-min.png":53,"./16-min.png":54,"./17-min.png":55,"./18-min.png":56,"./19-min.png":57,"./2-min.png":58,"./20-min.png":59,"./21-min.png":60,"./22-min.png":61,"./23-min.png":62,"./24-min.png":63,"./25-min.png":64,"./26-min.png":65,"./27-min.png":66,"./29-min.png":67,"./3-min.png":68,"./30-min.png":69,"./31-min.png":70,"./32-min.png":71,"./4-min.png":72,"./5-min.png":73,"./6-min.png":74,"./7-min.png":75,"./8-min.png":76,"./9-min.png":77};function i(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=c,e.exports=i,i.id=46},function(e,t,n){e.exports=n.p+"static/media/1-min.9c865874.png"},function(e,t,n){e.exports=n.p+"static/media/10-min.fac4c4db.png"},function(e,t,n){e.exports=n.p+"static/media/11-min.e8809e3f.png"},function(e,t,n){e.exports=n.p+"static/media/12-min.70201b29.png"},function(e,t,n){e.exports=n.p+"static/media/13-min.fc7e55b2.png"},function(e,t,n){e.exports=n.p+"static/media/14-min.1ba04cbf.png"},function(e,t,n){e.exports=n.p+"static/media/15-min.de411c21.png"},function(e,t,n){e.exports=n.p+"static/media/16-min.a65ebf53.png"},function(e,t,n){e.exports=n.p+"static/media/17-min.a865b79d.png"},function(e,t,n){e.exports=n.p+"static/media/18-min.f601b03d.png"},function(e,t,n){e.exports=n.p+"static/media/19-min.fadc609a.png"},function(e,t,n){e.exports=n.p+"static/media/2-min.800867be.png"},function(e,t,n){e.exports=n.p+"static/media/20-min.8b045c9a.png"},function(e,t,n){e.exports=n.p+"static/media/21-min.dd605ca4.png"},function(e,t,n){e.exports=n.p+"static/media/22-min.c6de28b6.png"},function(e,t,n){e.exports=n.p+"static/media/23-min.23ee757e.png"},function(e,t,n){e.exports=n.p+"static/media/24-min.98652616.png"},function(e,t,n){e.exports=n.p+"static/media/25-min.11e4d981.png"},function(e,t,n){e.exports=n.p+"static/media/26-min.9b0de86d.png"},function(e,t,n){e.exports=n.p+"static/media/27-min.c05edb34.png"},function(e,t,n){e.exports=n.p+"static/media/29-min.70920f3e.png"},function(e,t,n){e.exports=n.p+"static/media/3-min.0424bc3f.png"},function(e,t,n){e.exports=n.p+"static/media/30-min.70b4b03b.png"},function(e,t,n){e.exports=n.p+"static/media/31-min.5a8bc86c.png"},function(e,t,n){e.exports=n.p+"static/media/32-min.dd84e87e.png"},function(e,t,n){e.exports=n.p+"static/media/4-min.fe40d184.png"},function(e,t,n){e.exports=n.p+"static/media/5-min.c46657e8.png"},function(e,t,n){e.exports=n.p+"static/media/6-min.adcced4a.png"},function(e,t,n){e.exports=n.p+"static/media/7-min.2392174f.png"},function(e,t,n){e.exports=n.p+"static/media/8-min.9d4078a7.png"},function(e,t,n){e.exports=n.p+"static/media/9-min.18d97b30.png"},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(15),l=n.n(c),r=(n(31),n(1)),s=n(2),o=n(4),d=n(5),p=(n(32),function(e){return i.a.createElement("div",{className:"addthing-button",onClick:function(){e.handleClick()}})}),u=n(3),g=function(e){return{type:"ADD_THING_VIEW",payload:e}},m=function(e){return{type:"SHOW_CURRENT_THING",payload:e}},h=function(e){return{type:"EDIT_THING_VIEW",payload:e}},f=function(e,t,n){return e.splice(t,1,n),{type:"PUSH_EDITED_THING",payload:e}},T=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).handleThing=function(){e.props.addThingView(!0)},e}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("h2",null,"Things Happen"),i.a.createElement(p,{handleClick:this.handleThing}))}}]),n}(i.a.Component),v={addThingView:g},E=Object(u.b)((function(e){return{things:e.thingsList}}),v)(T),b=function(e){var t=e.id,n=e.title,a=e.date,c=e.image,l=e.handleClick,r=e.gridListView,s="list"===r?i.a.createElement("img",{src:c}):null,o="grid"===r?{backgroundImage:"url(".concat(c,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"15px"}:null;return i.a.createElement("div",{className:"item",key:t,onClick:function(){l(t)},style:o},i.a.createElement("div",{className:"item-wrapper"},s,i.a.createElement("div",{className:"item-shade"},"\xa0"),i.a.createElement("div",{className:"item-date"},a),i.a.createElement("div",{className:"item-title"},n)))},y=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).handleThingClick=function(t){var n=e.props.things.filter((function(e){return e.id===t})).pop();e.props.showCurrentThing(n)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.things,a=t.gridListView,c=n.map((function(t){return i.a.createElement(b,{key:t.id,id:t.id,image:t.image_path,title:t.title,date:t.date,selectedDays:t.selected_days,handleClick:e.handleThingClick,gridListView:a})})),l="list"===a?"list-view":"";return i.a.createElement("div",{className:"list  ".concat(l)},c)}}]),n}(i.a.Component),w={showCurrentThing:m},D=Object(u.b)((function(e){return{things:e.thingsList,gridListView:e.gridListView}}),w)(y),V=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container"},i.a.createElement(E,{openAddThingView:e}),i.a.createElement(D,null)))},x=n(16),_=function(e){var t=e.title,n=e.cancelText,a=e.doneText,c=e.cancelClick,l=e.doneClick,r=e.doneActive?"ui-header-done active":"ui-header-done";return i.a.createElement("div",{className:"ui-header"},i.a.createElement("div",{className:"ui-header-cancel",onClick:function(){c()}},n),i.a.createElement("div",{className:"ui-header-title"},t||""),i.a.createElement("div",{className:r,onClick:function(){l()}},a))},C=n(21),O=n.n(C),N=(n(45),n(10)),k=function(e){var t=e.defaultImage,n=e.uploadedThingImage,a=e.showPopup,c=null===t?null:n||t;return i.a.createElement("div",{className:"add-thing-image",style:{backgroundImage:"url(".concat(c,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"}},i.a.createElement("div",{className:"add-thing-image-button ui-icon-camera",onClick:function(){a()}}),i.a.createElement("div",{className:"ui-image-placeholder"}))},j=function(e){var t=e.getThingTitle,n=e.label,a=e.title,c=e.defaultValue;return i.a.createElement("div",{className:"add-thing-title"},i.a.createElement("div",{className:"label"},n),i.a.createElement("input",{type:"text",placeholder:a,onChange:function(e){t(e.target.value)},value:c,name:"title"}))};j.defaultProps={label:"Thing Name",title:"For example, Buy contact lens"};var S=j,I=function(e){var t=e.title,n=e.deleteClick;return i.a.createElement("div",{className:"button button-delete text-center",onClick:function(){n()}},i.a.createElement("span",null,t))};I.defaultProps={title:"Delete"};var L,A=I,G=(L=n(46)).keys().map(L),H=function(e){var t=e.isVisible,n=e.title,a=e.cancelText,c=e.doneText,l=e.cancelClick,r=e.doneClick,s=e.getImage,o=function(e){s(e.target.id,e.target.src),r()},d=t?"add-thing-catalog visible":"add-thing-catalog",p=G.map((function(e,t){return i.a.createElement("div",{className:"catalog-image-holder",key:t,onClick:o},i.a.createElement("img",{src:e,id:t}))}));return i.a.createElement("section",{className:d},i.a.createElement(_,{title:n,cancelText:a,doneText:c,cancelClick:function(){l()}}),i.a.createElement("div",{className:"catalog"},p))};H.defaultProps={title:"Pick a thing image",cancelText:"Cancel",doneText:""};var P=H,R=function(e){var t=e.isVisible,n=e.catalogText,a=e.buttonText,c=e.cancelPopup,l=e.doCatalog,r=e.doUpload,s=t?"ui-popup visible":"ui-popup";return i.a.createElement("section",{className:s},i.a.createElement("div",{className:"ui-popup-body"},i.a.createElement("div",{className:"ui-popup-body__options"},i.a.createElement("div",{className:"ui-popup-body__option"},i.a.createElement("button",{onClick:function(){l()}},n)),i.a.createElement("div",{className:"ui-popup-body__option"},i.a.createElement("input",{type:"file",accept:"image/*",name:"image",onChange:function(e){r(e)}}))),i.a.createElement("button",{className:"ui-popup-body__button",onClick:function(){c()}},a)),i.a.createElement("div",{className:"ui-popup-shade"}))};R.defaultProps={catalogText:"Choose from catalog",buttonText:"Cancel"};var U=R,W=function(e){var t=e.classname,n=e.hasDeleteButton,c=e.header,l=e.thingImageSettings,r=e.thingTitleSettings,s=e.getThingImage,o=e.isVisible,d=n?i.a.createElement(A,{deleteClick:n.handleDeleteThing}):null,p=Object(a.useState)(!1),u=Object(N.a)(p,2),g=u[0],m=u[1],h=Object(a.useState)(null),f=Object(N.a)(h,2),T=f[0],v=f[1],E=Object(a.useState)(!1),b=Object(N.a)(E,2),y=b[0],w=b[1],D=function(){w(!1)},V=o?i.a.createElement(U,{isVisible:g,cancelPopup:function(){m(!1)},doCatalog:function(){w(!0),m(!1)},doUpload:function(e){m(!1),e.target.files[0]&&(v(URL.createObjectURL(e.target.files[0])),s(URL.createObjectURL(e.target.files[0])))}}):null,x=o?i.a.createElement(P,{isVisible:y,cancelClick:D,doneClick:D,getImage:function(e,t){console.log("id:",e,"src:",t),v(t),console.log(T),s(t)}}):null;return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:t},i.a.createElement(_,{title:c.title,cancelText:c.cancelText,doneText:c.doneText,cancelClick:c.handleCancel,doneClick:c.handleDone,doneActive:c.doneActive}),i.a.createElement(k,{uploadedThingImage:T,defaultImage:l.imagePath,showPopup:function(){m(!0)}}),i.a.createElement("div",{className:"edit-thing-footer"},i.a.createElement(S,{getThingTitle:r.thingTitle,defaultValue:r.defaultTitle}),d)),V,x)},B=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).thingTitle=function(e){a.setState({title:e})},a.thingImage=function(e){a.setState({image_path:e})},a.handleCancel=function(){a.props.editThingView(!1)},a.handleDone=function(){var e=a.props,t=e.things,n=e.showCurrentThing,i=e.pushEditedThing,c=e.editThingView,l=e.currentThing;console.log("things",t,t.indexOf(l));var r=t.indexOf(l);n(a.state),i(t,r,a.state),c(!1)},a.handleDeleteThing=function(){var e=a.props,t=e.things,n=e.currentThing,i=e.deleteThing,c=t.indexOf(n);i(t,c),console.log("things",t,t.length,t.indexOf(n)),a.props.editThingView(!1),a.props.showCurrentThing(null)},a.state={id:a.props.currentThing.id,title:a.props.currentThing.title,date:a.props.currentThing.date,selectedDays:a.props.currentThing.selectedDays,image_path:a.props.currentThing.image_path},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isVisible,n=e.title,a=e.cancelText,c=e.doneText,l=t?"edit-thing-view overflow-view visible":"edit-thing-view overflow-view";return i.a.createElement(W,{classname:l,header:{title:n,cancelText:a,doneText:c,handleCancel:this.handleCancel,handleDone:this.handleDone},thingImageSettings:{imagePath:this.state.image_path},thingTitleSettings:{thingTitle:this.thingTitle,defaultTitle:this.state.title},hasDeleteButton:{handleDeleteThing:this.handleDeleteThing},getThingImage:this.thingImage,isVisible:t})}}]),n}(i.a.Component);B.defaultProps={title:"Edit thing",cancelText:"Cancel",doneText:"Save"};var M={editThingView:h,pushEditedThing:f,showCurrentThing:m,deleteThing:function(e,t){return e.splice(t,1),{type:"DELETE_THING",payload:e}}},F=Object(u.b)((function(e){return{things:e.thingsList,currentThing:e.currentThing}}),M)(B),J=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleEdit=function(){a.props.editThingView(!0)},a.handleClose=function(){var e={id:a.props.currentThing.id,title:a.props.currentThing.title,date:a.state.date,image_path:a.props.currentThing.image_path,selectedDays:a.state.selectedDays};console.log("IMAGE",a.state,a.props.currentThing);var t=a.props,n=t.things,i=t.currentThing,c=t.pushEditedThing,l=n.indexOf(i);c(n,l,e),a.props.closeScreen()},a.getVisibleClass=function(){return"words"},a.handleDayClick=a.handleDayClick.bind(Object(x.a)(a)),a.state={id:a.props.currentThing.id,title:a.props.currentThing.title,date:a.props.currentThing.date,image_path:a.props.currentThing.image_path,selectedDays:a.props.currentThing.selectedDays},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState({selectedDays:this.props.currentThing.selectedDays.map((function(e){return new Date(e)}))})}},{key:"handleDayClick",value:function(e,t){var n=t.selected;if(!t.disabled){var a=this.state.selectedDays;if(n){var i=a.findIndex((function(t){return C.DateUtils.isSameDay(t,e)}));a.splice(i,1)}else a.push(e);var c=this.state.selectedDays;if(c.map((function(e){return e.getTime()})),c.length){var l=c.reduce((function(e,t){return Math.max(e,t)})),r=(new Date).getTime(),s=Math.floor(Math.abs((r-l)/864e5)),o="1"===s.toString().split().pop()?" day ago":" days ago";console.log("till today",s,(r-l)/864e5),this.setState({date:0===s?"Today":s+o,selectedDays:a})}else this.setState({date:"Never",selectedDays:a})}}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.image,c=t.isVisible?"visible":"";setTimeout((function(){e.getVisibleClass()}),2e3);var l={after:new Date};return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"thing-view overflow-view "+c},i.a.createElement("div",{className:"image-holder"},i.a.createElement("div",{className:"image-shade"}),i.a.createElement("img",{src:a,alt:n})),i.a.createElement("div",{className:"thing-view-content"},i.a.createElement(_,{cancelClick:this.handleClose,cancelText:"Back",doneClick:this.handleEdit,doneText:"Edit"}),i.a.createElement("div",{className:"thing-view-info"},i.a.createElement("div",{className:"thing-view-date"},this.state.date),i.a.createElement("div",{className:"thing-view-title"},n))),i.a.createElement("div",{className:"calendar"},i.a.createElement(O.a,{onDayClick:this.handleDayClick,selectedDays:this.state.selectedDays,disabledDays:l}))),i.a.createElement(F,{isVisible:this.props.editThingViewState}))}}]),n}(i.a.Component),X={changeSelectedDays:function(e){return{type:"CHANGE_SELECTED_DAYS",payload:e}},editThingView:h,pushEditedThing:f},Y=Object(u.b)((function(e){return{currentThing:e.currentThing,things:e.thingsList,editThingViewState:e.editThingView}}),X)(J),z=n(24),$=n.n(z),q=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).thingTitle=function(t){e.setState({title:t})},e.thingImage=function(t){e.setState({image_path:t})},e.clearState=function(){e.setState({id:null,title:"",date:null,selectedDays:[],image_path:null})},e.cancelView=function(){e.props.addThingView(!1),e.clearState()},e.saveView=function(){e.props.things.map((function(e,t){return e.id=t}));var t={id:e.props.things.length,title:e.state.title,date:"Never",selectedDays:[],image_path:null!=e.state.image_path?e.state.image_path:$.a};console.log("newThing",t),e.state.title.length&&e.props.addThing(e.props.things,t),e.props.addThingView(!1),e.clearState()},e.state={id:null,title:"",date:null,selectedDays:[],image_path:null},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.cancelText,a=e.doneText,c=e.isVisible,l=this.state.title.length,r=c?"add-thing-view overflow-view visible":"add-thing-view overflow-view";return i.a.createElement(W,{classname:r,hasDeleteButton:!1,header:{title:t,cancelText:n,doneText:a,handleCancel:this.cancelView,handleDone:this.saveView,doneActive:l},thingImageSettings:{imagePath:this.state.image_path},thingTitleSettings:{thingTitle:this.thingTitle,defaultTitle:this.state.title},getThingImage:this.thingImage,isVisible:c})}}]),n}(i.a.Component);q.defaultProps={title:"Thing Name",cancelText:"Cancel",doneText:"Save"};var K={addThing:function(e,t){return e.unshift(t),{type:"ADD_THING",payload:e}},addThingView:g},Q=Object(u.b)((function(e){return{things:e.thingsList}}),K)(q),Z=[{code:"things",text:"Things"},{code:"settings",text:"Settings"}],ee=function(e){var t=e.text,n=e.code,a=e.isActive,c=e.handleChange;return i.a.createElement("label",{className:a?"active":""},i.a.createElement("input",{type:"radio",onClick:function(e){c(e.target.value)},value:n}),t)},te=function(e){var t=e.options,n=e.defaultValue,c=e.dispatchAction,l=Object(a.useState)(n),r=Object(N.a)(l,2),s=r[0],o=r[1],d=function(e){o(e),c(e)},p=t.map((function(e){return i.a.createElement(ee,{text:e.text,key:e.code,code:e.code,handleChange:d,isActive:s===e.code})}));return i.a.createElement("div",{className:"navigation-tabs"},p)},ne=[{code:"grid",text:"Grid"},{code:"list",text:"List"}],ae=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).dispatchGridView=function(t){e.props.setGridListView(t)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.gridListView;return i.a.createElement("section",{className:"settings-view container"},i.a.createElement("h1",null,t),i.a.createElement("div",{className:"promo-wrapper"},i.a.createElement("div",{className:"promo"},i.a.createElement("div",{className:"promo-text"},'"Things" Happen Unlimited'),i.a.createElement("div",{className:"promo-button"},"Get"))),i.a.createElement("ul",{className:"settings-list list-items"},i.a.createElement("li",{className:"grid-list-view-wrapper"},i.a.createElement("div",null,"Display"),i.a.createElement(te,{options:ne,defaultValue:n,dispatchAction:this.dispatchGridView})),i.a.createElement("li",null,i.a.createElement("span",null,"Share with friends")),i.a.createElement("li",null,i.a.createElement("span",null,"Rate App"))))}}]),n}(i.a.Component);ae.defaultProps={title:"Settings"};var ie={setGridListView:function(e){return{type:"SET_GRID_LIST_VIEW",payload:e}}},ce=Object(u.b)((function(e){return{gridListView:e.gridListView}}),ie)(ae),le=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).handleClose=function(){e.props.showCurrentThing(null)},e.dispatchView=function(t){e.props.setTabView(t)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.setTabView("things")}},{key:"render",value:function(){var e=this.props,t=e.currentThing,n=e.tabView,a=e.addThingView,c=e.editThingView,l=t?i.a.createElement(Y,{isVisible:t||null,closeScreen:this.handleClose,title:t?t.title:"",date:t?t.date:"",selectedDays:t?t.selected_days:"",image:t?t.image_path:""}):null,r=t?null:i.a.createElement(Q,{isVisible:this.props.addThingView}),s="things"===n?i.a.createElement(i.a.Fragment,null,i.a.createElement(V,null),l,r):i.a.createElement(ce,null),o=t||a?"is-hidden":"",d=a||c?null:i.a.createElement(te,{options:Z,defaultValue:"things",dispatchAction:this.dispatchView});return i.a.createElement("div",{className:"app ".concat(o)},s,d)}}]),n}(i.a.Component),re={showCurrentThing:m,setTabView:function(e){return{type:"SET_TAB_VIEW",payload:e}}},se=Object(u.b)((function(e){return{currentThing:e.currentThing,addThingView:e.addThingView,editThingView:e.editThingView,tabView:e.tabView}}),re)(le),oe=n(9),de=n(6),pe=new Date,ue=pe.getMonth(),ge=pe.getDate(),me={thingsList:[{id:1,title:"Vet Visit",date:"2 days ago",selectedDays:[new Date(2020,ue,ge-5),new Date(2020,ue,ge-2)],image_path:"assets/images/catalog-min/8-min.png"},{id:2,title:"Yoga Class",date:"1 day ago",selectedDays:[new Date(2020,ue,ge-3),new Date(2020,ue,ge-1)],image_path:"assets/images/catalog-min/13-min.png"},{id:3,title:"Play Tennis",date:"9 days ago",selectedDays:[new Date(2020,ue,ge-9)],image_path:"assets/images/catalog-min/32-min.png"},{id:4,title:"Buy Contact Lens",date:"Today",selectedDays:[new Date(2020,ue,ge)],image_path:"assets/images/catalog-min/1-min.png"},{id:5,title:"Water Plants",date:"6 days ago",selectedDays:[new Date(2020,ue,ge-7),new Date(2020,ue,ge-6)],image_path:"assets/images/catalog-min/5-min.png"}],currentThing:null,addThingView:!1,editThingView:!1,tabView:"things",gridListView:"grid"},he=n(25),fe=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}(),Te=Object(oe.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_THING_VIEW":return Object(de.a)({},e,{addThingView:t.payload});case"SET_TAB_VIEW":return Object(de.a)({},e,{tabView:t.payload});case"SET_GRID_LIST_VIEW":return Object(de.a)({},e,{gridListView:t.payload});case"ADD_THING":return Object(de.a)({},e,{thingsList:Array.prototype.splice.apply(e.thingsList,[0,t.payload.length].concat(t.payload))});case"SHOW_CURRENT_THING":return Object(de.a)({},e,{currentThing:t.payload});case"CHANGE_SELECTED_DAYS":return Object(de.a)({},e,{thingsList:t.payload});case"EDIT_THING_VIEW":return Object(de.a)({},e,{editThingView:t.payload});case"PUSH_EDITED_THING":case"DELETE_THING":return Object(de.a)({},e,{thingsList:Array.prototype.splice.apply(e.thingsList,[0,t.payload.length].concat(t.payload))});default:return e}}),fe,Object(oe.c)(Object(oe.a)(he.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={hasError:!1},e}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?i.a.createElement("h1",null,"Something went wrong"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(a.Component);Te.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){console.log(n)}}(Te.getState())})),l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ve,null,i.a.createElement(u.a,{store:Te},i.a.createElement(se,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[26,1,2]]]);
//# sourceMappingURL=main.740398c8.chunk.js.map