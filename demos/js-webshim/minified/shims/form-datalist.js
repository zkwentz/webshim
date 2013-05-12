webshims.register("form-datalist",function(e,t,n,r,i,a){"use strict";var o=function(n){n&&"string"==typeof n||(n="DOM"),o[n+"Loaded"]||(o[n+"Loaded"]=!0,t.ready(n,function(){e(function(){t.loader.loadList(["form-datalist-lazy"])})}))},s={submit:1,button:1,reset:1,hidden:1,range:1,date:1,month:1};t.modules["form-number-date-ui"].loaded&&e.extend(s,{number:1,time:1}),t.propTypes.element=function(n){t.createPropDefault(n,"attr"),n.prop||(n.prop={get:function(){var t=e.attr(this,"list");return t&&(t=r.getElementById(t),t&&n.propNodeName&&!e.nodeName(t,n.propNodeName)&&(t=null)),t||null},writeable:!1})},function(){var u=e.webshims.cfg.forms,l=Modernizr.input.list;if(!l||u.customDatalist){var c=function(){var n={autocomplete:{attr:{get:function(){var t=this,n=e.data(t,"datalistWidget");return n?n._autocomplete:"autocomplete"in t?t.autocomplete:t.getAttribute("autocomplete")},set:function(t){var n=this,r=e.data(n,"datalistWidget");r?(r._autocomplete=t,"off"==t&&r.hideList()):"autocomplete"in n?n.autocomplete=t:n.setAttribute("autocomplete",t)}}}};!u.customDatalist||l&&"selectedOption"in e("<input />")[0]||(n.selectedOption={prop:{writeable:!1,get:function(){var t,n,r=this,a=e.prop(r,"list"),o=null;return a?(t=e.prop(r,"value"))?(n=e.prop(a,"options"),n.length?(e.each(n,function(n,r){return t==e.prop(r,"value")?(o=r,!1):i}),o):o):o:o}}}),l&&((e("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var t=this.options||[];if(!t.length){var n=this,r=e("select",n);r[0]&&r[0].options&&r[0].options.length&&(t=r[0].options)}return t}}}),n.list={attr:{get:function(){var n=t.contentAttr(this,"list");return null!=n?(e.data(this,"datalistListAttr",n),s[e.prop(this,"type")]||s[e.attr(this,"type")]||this.removeAttribute("list")):n=e.data(this,"datalistListAttr"),null==n?i:n},set:function(n){var r=this;e.data(r,"datalistListAttr",n),s[e.prop(this,"type")]||s[e.attr(this,"type")]?r.setAttribute("list",n):t.objectCreate(p,i,{input:r,id:n,datalist:e.prop(r,"list")}),e(r).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}),t.defineNodeNameProperties("input",n),t.addReady(function(t,n){n.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").each(function(){e(this).triggerHandler("updateDatalist")})})},p={_create:function(n){if(!s[e.prop(n.input,"type")]&&!s[e.attr(n.input,"type")]){var r=n.datalist,a=e.data(n.input,"datalistWidget"),u=this;return r&&a&&a.datalist!==r?(a.datalist=r,a.id=n.id,e(a.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",e.proxy(a,"_resetListCached")),a._resetListCached(),i):r?(a&&a.datalist===r||(this.datalist=r,this.id=n.id,this.hasViewableData=!0,this._autocomplete=e.attr(n.input,"autocomplete"),e.data(n.input,"datalistWidget",this),o("WINDOWLOAD"),t.isReady("form-datalist-lazy")?this._lazyCreate(n):(e(n.input).one("focus",o),t.ready("form-datalist-lazy",function(){u._destroyed||u._lazyCreate(n)}))),i):(a&&a.destroy(),i)}},destroy:function(){var t=e.attr(this.input,"autocomplete");e(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),e(r).off(".datalist"+this.id),e(n).off(".datalist"+this.id),this.input.form&&this.input.id&&e(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),t===i?this.input.removeAttribute("autocomplete"):e(this.input).attr("autocomplete",t),this._destroyed=!0}};t.loader.addModule("form-datalist-lazy",{noAutoCallback:!0,options:e.extend(a,{shadowListProto:p})}),c()}}()});