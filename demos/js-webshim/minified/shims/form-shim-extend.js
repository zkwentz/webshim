(!Modernizr.formvalidation||jQuery.webshims.bugs.bustedValidity)&&jQuery.webshims.register("form-native-extend",function(a,c,v,i){c.inputTypes=c.inputTypes||{};var w=c.cfg.forms,p,r=c.inputTypes,A={radio:1,checkbox:1};c.addInputType=function(a,d){r[a]=d};var x={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},s={valueMissing:function(b,d,e){if(!b.prop("required"))return!1;var g=!1;if(!("type"in e))e.type=(b[0].getAttribute("type")||
b[0].type||"").toLowerCase();if("select"==e.nodeName){if(d=!d)if(!(d=0>b[0].selectedIndex))b=b[0],d="select-one"==b.type&&2>b.size?!!a("> option:first-child",b).prop("selected"):!1;b=d}else b=A[e.type]?"checkbox"==e.type?!b.is(":checked"):!c.modules["form-core"].getGroupElements(b).filter(":checked")[0]:!d;return b},tooLong:function(){return!1},typeMismatch:function(a,d,e){if(""===d||"select"==e.nodeName)return!1;var c=!1;if(!("type"in e))e.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();
if(r[e.type]&&r[e.type].mismatch)c=r[e.type].mismatch(d,a);else if("validity"in a[0])c=a[0].validity.typeMismatch;return c},patternMismatch:function(a,d,e){if(""===d||"select"==e.nodeName)return!1;a=a.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(g){c.error('invalid pattern value: "'+a+'" | '+g),a=!1}return!a?!1:!a.test(d)}};c.addValidityRule=function(a,d){s[a]=d};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var b=
this.form||this;if(!a.data(b,"invalidEventShim")&&(a(b).data("invalidEventShim",!0).on("submit",a.event.special.invalid.handler),c.moveToFirstEvent(b,"submit"),c.bugs.bustedValidity&&a.nodeName(b,"form"))){var d=b.getAttribute("novalidate");b.setAttribute("novalidate","novalidate");c.data(b,"bustedNoValidate",null==d?null:d)}},teardown:a.noop,handler:function(b){if(!("submit"!=b.type||b.testedValidity||!b.originalEvent||!a.nodeName(b.target,"form")||a.prop(b.target,"noValidate"))){p=!0;b.testedValidity=
!0;if(!a(b.target).checkValidity())return b.stopImmediatePropagation(),p=!1;p=!1}}};var y=function(b){if(!a.support.submitBubbles&&b&&"object"==typeof b&&!b._submit_attached)a.event.add(b,"submit._submit",function(a){a._submit_bubble=!0}),b._submit_attached=!0};if(!a.support.submitBubbles&&a.event.special.submit)a.event.special.submit.setup=function(){if(a.nodeName(this,"form"))return!1;a.event.add(this,"click._submit keypress._submit",function(b){b=b.target;b=a.nodeName(b,"input")||a.nodeName(b,
"button")?a.prop(b,"form"):void 0;y(b)})};a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var B=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){if(a.nodeName(this,"form"))a(this).on("invalid",a.noop);else a("form",this).on("invalid",a.noop);return B.apply(this,arguments)}});a(v).on("invalid",a.noop);c.addInputType("email",{mismatch:function(){var a=w.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return function(d){return!a.test(d)}}()});
c.addInputType("url",{mismatch:function(){var a=w.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(d){return!a.test(d)}}()});c.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return c.inputTypes[a]?a:this.type}}});c.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},x)}}},"prop");var n=function(b){var d,e=a.prop(b,"validity");if(e)a.data(b,"cachedValidity",
e);else return!0;if(!e.valid){d=a.Event("invalid");var g=a(b).trigger(d);if(p&&!n.unhandledInvalids&&!d.isDefaultPrevented())c.validityAlert.showFor(g),n.unhandledInvalids=!0}a.removeData(b,"cachedValidity");return e.valid},C=/^(?:select|textarea|input)/i;c.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var b=!0,d=a(a.prop(this,"elements")).filter(function(){if(!C.test(this.nodeName))return!1;var a=c.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});
n.unhandledInvalids=!1;for(var e=0,g=d.length;e<g;e++)n(d[e])||(b=!1);return b}}});c.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){n.unhandledInvalids=!1;return n(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(b){a.removeData(this,"cachedValidity");c.data(this,"customvalidationMessage",""+b)}},willValidate:{writeable:!1,get:function(){var b={button:1,reset:1,hidden:1,image:1};return function(){var d=a(this).getNativeElement()[0];return!(d.disabled||
d.readOnly||b[d.type])}}()},validity:{writeable:!1,get:function(){var b=a(this).getNativeElement(),d=b[0],e=a.data(d,"cachedValidity");if(e)return e;e=a.extend({},x);if(!a.prop(d,"willValidate")||"submit"==d.type)return e;var g=b.val(),f={nodeName:d.nodeName.toLowerCase()};e.customError=!!c.data(d,"customvalidationMessage");if(e.customError)e.valid=!1;a.each(s,function(a,d){if(d(b,g,f))e[a]=!0,e.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",e.valid?"false":"true");d=b=null;return e}}},
"prop");c.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(b){a(this).getShadowFocusElement().attr("aria-required",!!b+"")},initAttr:!a.browser.msie||7<c.browserVersion});c.reflectProperties(["input"],["pattern"]);if(!("maxLength"in i.createElement("textarea"))){var o=function(){var b,d=0,e=a([]),c=1E9,f=function(){var a=e.prop("value"),b=a.length;b>d&&b>c&&(b=Math.max(d,c),e.prop("value",a.substr(0,b)));d=b},h=function(){clearTimeout(b);e.unbind(".maxlengthconstraint")};
return function(q,m){h();if(-1<m)c=m,d=a.prop(q,"value").length,e=a(q),e.on({"keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint":function(){setTimeout(f,0)},"keyup.maxlengthconstraint":f,"blur.maxlengthconstraint":h}),b=setInterval(f,200)}}();o.update=function(b,d){a(b).is(":focus")&&(d||(d=a.prop(b,"maxlength")),o(b,d))};a(i).on("focusin",function(b){var d;"TEXTAREA"==b.target.nodeName&&-1<(d=a.prop(b.target,"maxlength"))&&o(b.target,d)});
c.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a);o.update(this)},get:function(){var a=this.getAttribute("maxlength");return null==a?void 0:a}},prop:{set:function(a){if("number"==typeof a||a&&a==1*a){if(0>a)throw"INDEX_SIZE_ERR";a=parseInt(a,10);this.setAttribute("maxlength",a);o.update(this,a)}else this.setAttribute("maxlength","0"),o.update(this,0)},get:function(){var a=this.getAttribute("maxlength");return("number"==typeof a||a&&a==1*a)&&
0<=a?parseInt(a,10):-1}}});c.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(b){a.prop(this,"maxlength",b)},get:function(){return a.prop(this,"maxlength")}}})}var D={submit:1,button:1,image:1},k={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},
{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(b){var d="form"+(b.propName||b.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),e="form"+b.name,c=b.name,f="click.webshimssubmittermutate"+c,h=function(){if("form"in this&&D[this.type]){var h=a.prop(this,"form");if(h){var f=a.attr(this,e);if(null!=f&&(!b.limitedTo||f.toLowerCase()===a.prop(this,d))){var j=a.attr(h,c);a.attr(h,c,f);setTimeout(function(){if(null!=j)a.attr(h,c,j);else try{a(h).removeAttr(c)}catch(b){h.removeAttribute(c)}},
9)}}}};switch(b.proptype){case "url":var q=i.createElement("form");k[d]={prop:{set:function(b){a.attr(this,e,b)},get:function(){var b=a.attr(this,e);if(null==b)return"";q.setAttribute("action",b);return q.action}}};break;case "boolean":k[d]={prop:{set:function(b){b?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":k[d]={prop:{set:function(b){a.attr(this,e,b)},get:function(){var d=a.attr(this,
e);return!d||(d=d.toLowerCase())&&!b.limitedTo[d]?b.defaultProp:d}}};break;default:k[d]={prop:{set:function(b){a.attr(this,e,b)},get:function(){var b=a.attr(this,e);return null!=b?b:""}}}}k[e]||(k[e]={});k[e].attr={set:function(b){k[e].attr._supset.call(this,b);a(this).unbind(f).on(f,h)},get:function(){return k[e].attr._supget.call(this)}};k[e].initAttr=!0;k[e].removeAttr={value:function(){a(this).unbind(f);k[e].removeAttr._supvalue.call(this)}}});c.defineNodeNamesProperties(["input","button"],k);
!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")?c.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}}):c.bugs.bustedValidity&&(c.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){c.data(this,"bustedNoValidate",""+a)},get:function(){var a=c.data(this,"bustedNoValidate");return null==a?void 0:a}},removeAttr:{value:function(){c.data(this,
"bustedNoValidate",null)}}}),a.each(["rangeUnderflow","rangeOverflow","stepMismatch"],function(a,d){s[d]=function(a){return(a[0].validity||{})[d]||!1}}));c.defineNodeNameProperty("form","noValidate",{prop:{set:function(b){b?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}});a.browser.webkit&&Modernizr.inputtypes.date&&function(){var b={updateInput:1,input:1},d={date:1,time:1,"datetime-local":1},e={focusout:1,blur:1},g=
{updateInput:1,change:1},f=function(a){var d,c=!0,f=a.prop("value"),j=f,l=function(d){if(a){var e=a.prop("value");e!==f&&(f=e,(!d||!b[d.type])&&a.trigger("input"));d&&g[d.type]&&(j=e);!c&&e!==j&&a.trigger("change")}},z,u=function(b){clearInterval(d);setTimeout(function(){b&&e[b.type]&&(c=!1);a&&(a.unbind("focusout blur",u).unbind("input change updateInput",l),l());a=null},1)};clearInterval(d);d=setInterval(l,160);clearTimeout(z);z=setTimeout(l,9);a.off({"focusout blur":u,"input change updateInput":l}).on({"focusout blur":u,
"input updateInput change":l})};if(a.event.customEvent)a.event.customEvent.updateInput=!0;(function(){var b=function(b){var d=1,e,c;if("date"==b.type&&(p||!a(b).is(":focus")))if((c=b.value)&&10>c.length&&(c=c.split("-"))&&3==c.length){for(;3>d;d++)if(1==c[d].length)c[d]="0"+c[d];else if(2!=c[d].length){e=!0;break}if(!e)return c=c.join("-"),a.prop(b,"value",c),c}},d,e,f,j;d=c.defineNodeNameProperty("input","checkValidity",{prop:{value:function(){b(this);return d.prop._supvalue.apply(this,arguments)}}});
e=c.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){a("input",this).each(function(){b(this)});return e.prop._supvalue.apply(this,arguments)}}});f=c.defineNodeNameProperty("input","value",{prop:{set:function(){return f.prop._supset.apply(this,arguments)},get:function(){return b(this)||f.prop._supget.apply(this,arguments)}}});j=c.defineNodeNameProperty("input","validity",{prop:{writeable:!1,get:function(){b(this);return j.prop._supget.apply(this,arguments)}}});a(i).on("change",
function(a){isChangeSubmit=!0;b(a.target);isChangeSubmit=!1})})();a(i).on("focusin",function(b){b.target&&d[b.target.type]&&!b.target.readOnly&&!b.target.disabled&&f(a(b.target))})}();c.addReady(function(b,d){var c;a("form",b).add(d.filter("form")).bind("invalid",a.noop);try{if(b==i&&!("form"in(i.activeElement||{})))(c=a("input[autofocus], select[autofocus], textarea[autofocus]",b).eq(0).getShadowFocusElement()[0])&&c.offsetHeight&&c.offsetWidth&&c.focus()}catch(g){}});(!Modernizr.formattribute||
!Modernizr.fieldsetdisabled)&&function(){(function(b,d){a.prop=function(c,e,g){var j;if(c&&1==c.nodeType&&g===d&&a.nodeName(c,"form")&&c.id){j=i.getElementsByName(e);if(!j||!j.length)j=i.getElementById(e);if(j&&(j=a(j).filter(function(){return a.prop(this,"form")==c}).get(),j.length))return 1==j.length?j[0]:j}return b.apply(this,arguments)}})(a.prop,void 0);var b=function(b){var d=a.data(b,"webshimsAddedElements");d&&(d.remove(),a.removeData(b,"webshimsAddedElements"))},d=/\r?\n/g,e=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
g=/^(?:select|textarea)/i;Modernizr.formattribute||(c.defineNodeNamesProperty(["input","textarea","select","button","fieldset"],"form",{prop:{get:function(){var b=c.contentAttr(this,"form");b&&(b=i.getElementById(b))&&!a.nodeName(b,"form")&&(b=null);return b||this.form},writeable:!1}}),c.defineNodeNamesProperty(["form"],"elements",{prop:{get:function(){var b=this.id,d=a.makeArray(this.elements);b&&(d=a(d).add('input[form="'+b+'"], select[form="'+b+'"], textarea[form="'+b+'"], button[form="'+b+'"], fieldset[form="'+
b+'"]').not(".webshims-visual-hide > *").get());return d},writeable:!1}}),a(function(){var d=function(a){a.stopPropagation()};a(i).on("submit",function(d){if(!d.isDefaultPrevented()){var c=d.target;if(d=c.id)b(c),d=a('input[form="'+d+'"], select[form="'+d+'"], textarea[form="'+d+'"]').filter(function(){return!this.disabled&&this.name&&this.form!=c}).clone(),d.length&&(a.data(c,"webshimsAddedElements",a('<div class="webshims-visual-hide" />').append(d).appendTo(c)),setTimeout(function(){b(c)},9)),
d=null}});a(i).on("click",function(b){if(!b.isDefaultPrevented()&&a(b.target).is('input[type="submit"][form], button[form], input[type="button"][form], input[type="image"][form], input[type="reset"][form]')){var c=a.prop(b.target,"form"),e=b.target.form,g;c&&c!=e&&(g=a(b.target).clone().removeAttr("form").addClass("webshims-visual-hide").on("click",d).appendTo(c),e&&b.preventDefault(),y(c),g.trigger("click"),setTimeout(function(){g.remove();g=null},9))}})}));Modernizr.fieldsetdisabled||c.defineNodeNamesProperty(["fieldset"],
"elements",{prop:{get:function(){return a("input, select, textarea, button, fieldset",this).get()||[]},writeable:!1}});a.fn.serializeArray=function(){return this.map(function(){var b=a.prop(this,"elements");return b?a.makeArray(b):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||g.test(this.nodeName)||e.test(this.type))}).map(function(b,c){var e=a(this).val();return null==e?null:a.isArray(e)?a.map(e,function(a){return{name:c.name,value:a.replace(d,"\r\n")}}):{name:c.name,
value:e.replace(d,"\r\n")}}).get()}}();try{i.querySelector(":checked")}catch(E){(function(){var b={radio:1,checkbox:1},d=function(){var b=this.options||[],d,c,e;for(d=0,c=b.length;d<c;d++)e=a(b[d]),e[a.prop(b[d],"selected")?"addClass":"removeClass"]("prop-checked")},e=function(){var b=a.prop(this,"checked")?"addClass":"removeClass";if(-1==(this.className||"").indexOf("prop-checked")==("addClass"==b))if(a(this)[b]("prop-checked"),b=this.parentNode)b.className=b.className};c.onNodeNamesPropertyModify("select",
"value",d);c.onNodeNamesPropertyModify("select","selectedIndex",d);c.onNodeNamesPropertyModify("option","selected",function(){a(this).closest("select").each(d)});c.onNodeNamesPropertyModify("input","checked",function(d,f){var h=this.type;"radio"==h&&f?c.modules["form-core"].getGroupElements(this).each(e):b[h]&&a(this).each(e)});a(i).on("change",function(g){if(b[g.target.type])if("radio"==g.target.type)c.modules["form-core"].getGroupElements(g.target).each(e);else a(g.target)[a.prop(g.target,"checked")?
"addClass":"removeClass"]("prop-checked");else"select"==g.target.nodeName.toLowerCase()&&a(g.target).each(d)});c.addReady(function(d,c){a("option, input",d).add(c.filter("option, input")).each(function(){var d;b[this.type]?d="checked":"option"==this.nodeName.toLowerCase()&&(d="selected");if(d)a(this)[a.prop(this,d)?"addClass":"removeClass"]("prop-checked")})})})()}(function(){Modernizr.textareaPlaceholder=!!("placeholder"in a("<textarea />")[0]);var b=a.browser.webkit&&Modernizr.textareaPlaceholder&&
535>c.browserVersion;if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder||b){var d="over"==c.cfg.forms.placeholderType,e=c.cfg.forms.responsivePlaceholder,g=["textarea"];Modernizr.input.placeholder||g.push("input");var f=function(a){try{if(a.setSelectionRange)return a.setSelectionRange(0,0),!0;if(a.createTextRange){var b=a.createTextRange();b.collapse(!0);b.moveEnd("character",0);b.moveStart("character",0);b.select();return!0}}catch(d){}},h=function(b,c,e,g){!1===e&&(e=a.prop(b,"value"));
if(!d&&"password"!=b.type){if(!e&&g&&f(b)){var h=setTimeout(function(){f(b)},9);a(b).off(".placeholderremove").on({"keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove":function(d){if(!d||!(17==d.keyCode||16==d.keyCode))b.value=a.prop(b,"value"),c.box.removeClass("placeholder-visible"),clearTimeout(h),a(b).unbind(".placeholderremove")},"mousedown.placeholderremove drag.placeholderremove select.placeholderremove":function(){f(b);clearTimeout(h);h=setTimeout(function(){f(b)},
9)},"blur.placeholderremove":function(){clearTimeout(h);a(b).unbind(".placeholderremove")}});return}b.value=e}else if(!e&&g){a(b).off(".placeholderremove").on({"keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove":function(d){if(!d||!(17==d.keyCode||16==d.keyCode))c.box.removeClass("placeholder-visible"),a(b).unbind(".placeholderremove")},"blur.placeholderremove":function(){a(b).unbind(".placeholderremove")}});return}c.box.removeClass("placeholder-visible")},
i=function(b,c,e,f,g){if(!f&&(f=a.data(b,"placeHolder"),!f))return;a(b).unbind(".placeholderremove");if("focus"==g||!g&&a(b).is(":focus"))("password"==b.type||d||a(b).hasClass("placeholder-visible"))&&h(b,f,"",!0);else if(!1===c&&(c=a.prop(b,"value")),c)h(b,f,c);else if(!1===e&&(e=a.attr(b,"placeholder")||""),e&&!c){c=f;!1===e&&(e=a.prop(b,"placeholder"));if(!d&&"password"!=b.type)b.value=e;c.box.addClass("placeholder-visible")}else h(b,f,c)},m=function(b){var b=a(b),d=b.prop("id"),c=!(!b.prop("title")&&
!b.attr("aria-labelledby"));!c&&d&&(c=!!a('label[for="'+d+'"]',b[0].form)[0]);c||(d||(d=a.webshims.getID(b)),c=!!a("label #"+d)[0]);return a(c?'<span class="placeholder-text"></span>':'<label for="'+d+'" class="placeholder-text"></label>')},t=function(){var b={text:1,search:1,url:1,email:1,password:1,tel:1,number:1};return{create:function(b){var c=a.data(b,"placeHolder"),f;if(c)return c;c=a.data(b,"placeHolder",{});a(b).on("focus.placeholder blur.placeholder",function(a){i(this,!1,!1,c,a.type);c.box["focus"==
a.type?"addClass":"removeClass"]("placeholder-focused")});if(f=a.prop(b,"form"))a(f).on("reset.placeholder",function(a){setTimeout(function(){i(b,!1,!1,c,a.type)},0)});if("password"==b.type||d)c.text=m(b),c.box=e||a(b).is(".responsive-width")||-1!=(b.currentStyle||{width:""}).width.indexOf("%")?c.text:a(b).wrap('<span class="placeholder-box placeholder-box-'+(b.nodeName||"").toLowerCase()+" placeholder-box-"+a.css(b,"float")+'" />').parent(),c.text.insertAfter(b).on("mousedown.placeholder",function(){i(this,
!1,!1,c,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1}),a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(d,e){var f=a.css(b,e);c.text.css(e)!=f&&c.text.css(e,f)}),a.each(["Left","Top"],function(d,e){var f=(parseInt(a.css(b,"padding"+e),10)||0)+Math.max(parseInt(a.css(b,"margin"+e),10)||0,0)+(parseInt(a.css(b,"border"+e+"Width"),10)||0);c.text.css("padding"+e,f)}),a(b).on("updateshadowdom",function(){var d,e;((e=b.offsetWidth)||(d=b.offsetHeight))&&c.text.css({width:e,
height:d}).css(a(b).position())}).triggerHandler("updateshadowdom");else{var g=function(d){a(b).hasClass("placeholder-visible")&&(h(b,c,""),d&&"submit"==d.type&&setTimeout(function(){d.isDefaultPrevented()&&i(b,!1,!1,c)},9))};a(v).on("beforeunload",g);c.box=a(b);f&&a(f).submit(g)}return c},update:function(d,e){var f=(a.attr(d,"type")||a.prop(d,"type")||"").toLowerCase();!b[f]&&!a.nodeName(d,"textarea")?(c.error('placeholder not allowed on input[type="'+f+'"]'),"date"==f&&c.error('but you can use data-placeholder for input[type="date"]')):
(f=t.create(d),f.text&&f.text.text(e),i(d,!1,e,f))}}}();a.webshims.publicMethods={pHolder:t};g.forEach(function(a){c.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){b?(c.data(this,"textareaPlaceholder",a),this.placeholder=""):c.contentAttr(this,"placeholder",a);t.update(this,a)},get:function(){return(b?c.data(this,"textareaPlaceholder"):"")||c.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});g.forEach(function(d){var e={},f;["attr","prop"].forEach(function(d){e[d]={set:function(e){var g;
b&&(g=c.data(this,"textareaPlaceholder"));g||(g=c.contentAttr(this,"placeholder"));a.removeData(this,"cachedValidity");var h=f[d]._supset.call(this,e);g&&"value"in this&&i(this,e,g);return h},get:function(){return a(this).hasClass("placeholder-visible")?"":f[d]._supget.call(this)}}});f=c.defineNodeNameProperty(d,"value",e)})}})();(function(){if(!("value"in i.createElement("output"))){c.defineNodeNameProperty("output","value",{prop:{set:function(d){var c=a.data(this,"outputShim");c||(c=b(this));c(d)},
get:function(){return c.contentAttr(this,"value")||a(this).text()||""}}});c.onNodeNamesPropertyModify("input","value",function(b,c,g){"removeAttr"!=g&&(c=a.data(this,"outputShim"))&&c(b)});var b=function(b){if(!b.getAttribute("aria-live")){var b=a(b),e=(b.text()||"").trim(),g=b.attr("id"),f=b.attr("for"),h=a('<input class="output-shim" type="text" disabled name="'+(b.attr("name")||"")+'" value="'+e+'" style="display: none !important;" />').insertAfter(b),k=h[0].form||i,m=function(a){h[0].value=a;
a=h[0].value;b.text(a);c.contentAttr(b[0],"value",a)};b[0].defaultValue=e;c.contentAttr(b[0],"value",e);b.attr({"aria-live":"polite"});g&&(h.attr("id",g),b.attr("aria-labelledby",c.getID(a('label[for="'+g+'"]',k))));f&&(g=c.getID(b),f.split(" ").forEach(function(a){(a=i.getElementById(a))&&a.setAttribute("aria-controls",g)}));b.data("outputShim",m);h.data("outputShim",m);return m}};c.addReady(function(d,c){a("output",d).add(c.filter("output")).each(function(){b(this)})});(function(){var b={updateInput:1,
input:1},e={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},g=function(a){var e,g=a.prop("value"),i=function(e){if(a){var h=a.prop("value");h!==g&&(g=h,(!e||!b[e.type])&&c.triggerInlineForm&&c.triggerInlineForm(a[0],"input"))}},k,j=function(){clearTimeout(k);k=setTimeout(i,9)},l=function(){a.unbind("focusout",l).unbind("keyup keypress keydown paste cut",j).unbind("input change updateInput",i);clearInterval(e);setTimeout(function(){i();a=null},1)};clearInterval(e);e=setInterval(i,
99);j();a.on({"keyup keypress keydown paste cut":j,focusout:l,"input updateInput change":i})};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(i).on("focusin",function(b){b.target&&b.target.type&&!b.target.readOnly&&!b.target.disabled&&"input"==(b.target.nodeName||"").toLowerCase()&&!e[b.target.type]&&g(a(b.target))})})()}})()});
