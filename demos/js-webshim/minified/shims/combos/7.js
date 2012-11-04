jQuery.webshims.register("form-native-extend",function(c,e,i,o,v,g){i=i.Modernizr;v=i.inputtypes;if(i.formvalidation&&!e.bugs.bustedValidity){var k=e.inputTypes,f={};e.addInputType=function(a,b){k[a]=b};e.addValidityRule=function(a,b){f[a]=b};e.addValidityRule("typeMismatch",function(a,b,c,e){if(""===b)return!1;e=e.typeMismatch;if(!("type"in c))c.type=(a[0].getAttribute("type")||"").toLowerCase();k[c.type]&&k[c.type].mismatch&&(e=k[c.type].mismatch(b,a));return e});var l=g.overrideMessages,s=!v.number||
!v.time||!v.range||l,r="customError,typeMismatch,rangeUnderflow,rangeOverflow,stepMismatch,tooLong,patternMismatch,valueMissing,valid".split(","),g=l?["value","checked"]:["value"],h=[],n=function(a,b){if(a){var e=(a.getAttribute&&a.getAttribute("type")||a.type||"").toLowerCase();if(l||k[e])l&&!b&&"radio"==e&&a.name?c(o.getElementsByName(a.name)).each(function(){c.prop(this,"validity")}):c.prop(a,"validity")}},p={};["input","textarea","select"].forEach(function(a){var b=e.defineNodeNameProperty(a,
"setCustomValidity",{prop:{value:function(j){var j=j+"",w="input"==a?c(this).getNativeElement()[0]:this;b.prop._supvalue.call(w,j);e.bugs.validationMessage&&e.data(w,"customvalidationMessage",j);s&&(e.data(w,"hasCustomError",!!j),n(w))}}});p[a]=b.prop._supvalue});if(s||l)g.push("min"),g.push("max"),g.push("step"),h.push("input");l&&(g.push("required"),g.push("pattern"),h.push("select"),h.push("textarea"));if(s){var t;h.forEach(function(a){var b=e.defineNodeNameProperty(a,"validity",{prop:{get:function(){if(!t){var j=
"input"==a?c(this).getNativeElement()[0]:this,w=b.prop._supget.call(j);if(!w)return w;var m={};r.forEach(function(a){m[a]=w[a]});if(!c.prop(j,"willValidate"))return m;t=!0;var g=c(j),x={type:(j.getAttribute&&j.getAttribute("type")||"").toLowerCase(),nodeName:(j.nodeName||"").toLowerCase()},h=g.val(),z=!!e.data(j,"hasCustomError"),y;t=!1;m.customError=z;if(m.valid&&m.customError)m.valid=!1;else if(!m.valid){var i=!0;c.each(m,function(a,d){if(d)return i=!1});if(i)m.valid=!0}c.each(f,function(b,c){m[b]=
c(g,h,x,m);if(m[b]&&(m.valid||!y)&&(l||k[x.type]&&k[x.type].mismatch))p[a].call(j,e.createValidationMessage(j,b)),m.valid=!1,y=!0});m.valid?(p[a].call(j,""),e.data(j,"hasCustomError",!1)):l&&!y&&!z&&c.each(m,function(b,c){if("valid"!==b&&c)return p[a].call(j,e.createValidationMessage(j,b)),!1});return m}},writeable:!1}})});g.forEach(function(a){e.onNodeNamesPropertyModify(h,a,function(){n(this)})});if(o.addEventListener){var u,a=function(a){if("form"in a.target){var b=a.target.form;clearTimeout(u);
n(a.target);b&&l&&c("input",b).each(function(){"password"==this.type&&n(this)})}};o.addEventListener("change",a,!0);l&&(o.addEventListener("blur",a,!0),o.addEventListener("keydown",function(d){13==d.keyCode&&a(d)},!0));o.addEventListener("input",function(a){clearTimeout(u);u=setTimeout(function(){n(a.target)},290)},!0)}var b=h.join(",");e.addReady(function(a,q){c(b,a).add(q.filter(b)).each(function(){c.prop(this,"validity")})});l&&e.ready("DOM form-message",function(){e.activeLang({register:"form-core",
callback:function(){c("input, select, textarea").getNativeElement().each(function(){if(!e.data(this,"hasCustomError")){var a=this,b=c.prop(a,"validity")||{valid:!0},j;b.valid||(j=(a.nodeName||"").toLowerCase(),c.each(b,function(b,c){if("valid"!==b&&c)return p[j].call(a,e.createValidationMessage(a,b)),!1}))}})}})})}e.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return e.inputTypes[a]?a:this.type}}})}});
jQuery.webshims.register("form-number-date-api",function(c,e){var i,o,v,g;if(!e.getStep)e.getStep=function(a,b){var d=c.attr(a,"step");if("any"===d)return d;b=b||r(a);if(!f[b]||!f[b].step)return d;d=i.asNumber(d);return(!isNaN(d)&&0<d?d:f[b].step)*f[b].stepScaleFactor};if(!e.addMinMaxNumberToCache)e.addMinMaxNumberToCache=function(a,b,d){a+"AsNumber"in d||(d[a+"AsNumber"]=f[d.type].asNumber(b.attr(a)),isNaN(d[a+"AsNumber"])&&a+"Default"in f[d.type]&&(d[a+"AsNumber"]=f[d.type][a+"Default"]))};var k=
parseInt("NaN",10),f=e.inputTypes,l=function(a){return"number"==typeof a||a&&a==1*a},s=function(a){return c('<input type="'+a+'" />').prop("type")===a},r=function(a){return(a.getAttribute("type")||"").toLowerCase()},h=e.addMinMaxNumberToCache,n=function(a,b){for(var a=""+a,b=b-a.length,d=0;d<b;d++)a="0"+a;return a},p=e.bugs.bustedValidity;e.addValidityRule("stepMismatch",function(a,b,d,c){if(""===b)return!1;if(!("type"in d))d.type=r(a[0]);if("date"==d.type)return!1;c=(c||{}).stepMismatch;if(f[d.type]&&
f[d.type].step){if(!("step"in d))d.step=e.getStep(a[0],d.type);if("any"==d.step)return!1;if(!("valueAsNumber"in d))d.valueAsNumber=f[d.type].asNumber(b);if(isNaN(d.valueAsNumber))return!1;h("min",a,d);a=d.minAsNumber;isNaN(a)&&(a=f[d.type].stepBase||0);c=Math.abs((d.valueAsNumber-a)%d.step);c=!(1.0E-7>=c||1.0E-7>=Math.abs(c-d.step))}return c});[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(a){e.addValidityRule(a.name,function(b,d,c,e){e=
(e||{})[a.name]||!1;if(""===d)return e;if(!("type"in c))c.type=r(b[0]);if(f[c.type]&&f[c.type].asNumber){if(!("valueAsNumber"in c))c.valueAsNumber=f[c.type].asNumber(d);if(isNaN(c.valueAsNumber))return!1;h(a.attr,b,c);if(isNaN(c[a.attr+"AsNumber"]))return e;e=c[a.attr+"AsNumber"]*a.factor<c.valueAsNumber*a.factor-1.0E-7}return e})});e.reflectProperties(["input"],["max","min","step"]);var t=e.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var a=r(this),a=f[a]&&f[a].asNumber?f[a].asNumber(c.prop(this,
"value")):t.prop._supget&&t.prop._supget.apply(this,arguments);null==a&&(a=k);return a},set:function(a){var b=r(this);f[b]&&f[b].numberToString?isNaN(a)?c.prop(this,"value",""):(b=f[b].numberToString(a),!1!==b?c.prop(this,"value",b):e.warn("INVALID_STATE_ERR: DOM Exception 11")):t.prop._supset&&t.prop._supset.apply(this,arguments)}}}),u=e.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var a=r(this);return f[a]&&f[a].asDate&&!f[a].noAsDate?f[a].asDate(c.prop(this,"value")):u.prop._supget&&
u.prop._supget.call(this)||null},set:function(a){var b=r(this);if(f[b]&&f[b].dateToString&&!f[b].noAsDate){if(null===a)return c.prop(this,"value",""),"";b=f[b].dateToString(a);if(!1!==b)return c.prop(this,"value",b),b;e.warn("INVALID_STATE_ERR: DOM Exception 11")}else return u.prop._supset&&u.prop._supset.apply(this,arguments)||null}}});i={mismatch:function(a){return!l(a)},step:1,stepScaleFactor:1,asNumber:function(a){return l(a)?1*a:k},numberToString:function(a){return l(a)?a:!1}};o={minDefault:0,
maxDefault:100};v={mismatch:function(a){if(!a||!a.split||!/\d$/.test(a))return!0;var b=a.split(/\u002D/);if(3!==b.length)return!0;var d=!1;c.each(b,function(a,b){if(!(l(b)||b&&b=="0"+1*b))return d=!0,!1});if(d)return d;if(4!==b[0].length||2!=b[1].length||12<b[1]||2!=b[2].length||33<b[2])d=!0;return a!==this.dateToString(this.asDate(a,!0))},step:1,stepScaleFactor:864E5,asDate:function(a,b){return!b&&this.mismatch(a)?null:new Date(this.asNumber(a,!0))},asNumber:function(a,b){var d=k;if(b||!this.mismatch(a))a=
a.split(/\u002D/),d=Date.UTC(a[0],a[1]-1,a[2]);return d},numberToString:function(a){return l(a)?this.dateToString(new Date(1*a)):!1},dateToString:function(a){return a&&a.getFullYear?a.getUTCFullYear()+"-"+n(a.getUTCMonth()+1,2)+"-"+n(a.getUTCDate(),2):!1}};g={mismatch:function(a,b){if(!a||!a.split||!/\d$/.test(a))return!0;a=a.split(/\u003A/);if(2>a.length||3<a.length)return!0;var d=!1,e;a[2]&&(a[2]=a[2].split(/\u002E/),e=parseInt(a[2][1],10),a[2]=a[2][0]);c.each(a,function(a,b){if(!(l(b)||b&&b=="0"+
1*b)||2!==b.length)return d=!0,!1});if(d||23<a[0]||0>a[0]||59<a[1]||0>a[1]||a[2]&&(59<a[2]||0>a[2])||e&&isNaN(e))return!0;e&&(100>e?e*=100:10>e&&(e*=10));return!0===b?[a,e]:!1},step:60,stepBase:0,stepScaleFactor:1E3,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?null:a},asNumber:function(a){var b=k,a=this.mismatch(a,!0);!0!==a&&(b=Date.UTC("1970",0,1,a[0][0],a[0][1],a[0][2]||0),a[1]&&(b+=a[1]));return b},dateToString:function(a){if(a&&a.getUTCHours){var b=n(a.getUTCHours(),2)+":"+
n(a.getUTCMinutes(),2),d=a.getSeconds();"0"!=d&&(b+=":"+n(d,2));d=a.getUTCMilliseconds();"0"!=d&&(b+="."+n(d,3));return b}return!1}};if(p||!s("range")||!s("time"))o=c.extend({},i,o),g=c.extend({},v,g);(p||!s("number"))&&e.addInputType("number",i);(p||!s("range"))&&e.addInputType("range",o);(p||!s("date"))&&e.addInputType("date",v);(p||!s("time"))&&e.addInputType("time",g)});
jQuery.webshims.register("form-number-date-ui",function(c,e,i,o,v,g){var k=e.triggerInlineForm,i=Modernizr.inputtypes,f=function(){var a={"padding-box":"innerWidth","border-box":"outerWidth","content-box":"width"},b=Modernizr.prefixed&&Modernizr.prefixed("boxSizing");c.browser.msie&&8>e.browserVersion&&(b=!1);return function(d,c){var e,f,g;f="width";b&&(f=a[d.css(b)]||f);e=d[f]();f="width"==f;if(e){var h=parseInt(c.css("marginLeft"),10)||0,x=c.outerWidth();(g=parseInt(d.css("marginRight"),10)||0)&&
d.css("marginRight",0);h<=-1*x?(c.css("marginRight",Math.floor(Math.abs(x+h-0.1)+g)),d.css("paddingRight",(parseInt(d.css("paddingRight"),10)||0)+Math.abs(h)),f&&d.css("width",Math.floor(e+h))):(c.css("marginRight",g),d.css("width",Math.floor(e-h-x-0.2)))}}}(),l={},s=c([]),r,h=function(a,b){c("input",a).add(b.filter("input")).each(function(){var a=c.prop(this,"type");if(h[a]&&!e.data(this,"shadowData"))h[a](c(this))})},n=function(a,b){if(g.lazyDate){var d=c.data(a[0],"setDateLazyTimer");d&&clearTimeout(d);
c.data(a[0],"setDateLazyTimer",setTimeout(function(){a.datepicker("setDate",b);c.removeData(a[0],"setDateLazyTimer");a=null},0))}else a.datepicker("setDate",b)},p={tabindex:1,tabIndex:1,title:1,"aria-required":1,"aria-invalid":1};if(!g.copyAttrs)g.copyAttrs={};e.extendUNDEFProp(g.copyAttrs,p);var t=function(a){return g.calculateWidth?{css:{marginRight:a.css("marginRight"),marginLeft:a.css("marginLeft")},outerWidth:a.outerWidth()}:{}};h.common=function(a,b,d){if(Modernizr.formvalidation)a.on("firstinvalid",
function(b){if(e.fromSubmit||!r)a.off("invalid.replacedwidgetbubble").on("invalid.replacedwidgetbubble",function(d){!b.isInvalidUIPrevented()&&!d.isDefaultPrevented()&&(e.validityAlert.showFor(b.target),b.preventDefault(),d.preventDefault());a.off("invalid.replacedwidgetbubble")})});var q,j,f=c("input, span.ui-slider-handle",b),h=a[0].attributes;for(q in g.copyAttrs)if((j=h[q])&&j.specified)p[q]&&f[0]?f.attr(q,j.nodeValue):b[0].setAttribute(q,j.nodeValue);q=(q=a.attr("id"))?c('label[for="'+q+'"]',
a[0].form):s;b.addClass(a[0].className);e.addShadowDom(a,b,{data:d||{},shadowFocusElement:c("input.input-datetime-local-date, span.ui-slider-handle",b)[0],shadowChilds:f});a.after(b);if(a[0].form)c(a[0].form).on("reset",function(b){b.originalEvent&&!b.isDefaultPrevented()&&setTimeout(function(){a.prop("value",a.prop("value"))},0)});q[0]&&(b.getShadowFocusElement().attr("aria-labelledby",e.getID(q)),q.on("click",function(){a.getShadowFocusElement().focus();return!1}))};Modernizr.formvalidation&&["input",
"form"].forEach(function(a){var b=e.defineNodeNameProperty(a,"checkValidity",{prop:{value:function(){r=!0;var a=b.prop._supvalue.apply(this,arguments);r=!1;return a}}})});if(!i.date||g.replaceUI){var u=function(a,b,d,f){var j,h,m=function(){i.dpDiv.unbind("mousedown.webshimsmousedownhandler");h=j=!1},i=b.on({focusin:function(){m();i.dpDiv.unbind("mousedown.webshimsmousedownhandler").bind("mousedown.webshimsmousedownhandler",function(){j=!0})},"focusout blur":function(a){j&&(h=!0,a.stopImmediatePropagation())}}).datepicker(c.extend({onClose:function(){h&&
b.not(":focus")?(m(),b.trigger("focusout"),b.triggerHandler("blur")):m()}},l,g.datepicker,a.data("datepicker"))).on("change",d).data("datepicker");i.dpDiv.addClass("input-date-datepicker-control");f&&e.triggerDomUpdate(f[0]);"disabled,min,max,value,step,data-placeholder".split(",").forEach(function(b){var d=a.attr(b);d&&a.attr(b,d)});return i};h.date=function(a){if(c.fn.datepicker){var b=c('<input class="input-date" type="text" />'),d;this.common(a,b,h.date.attrs);d=u(a,b,function(d){h.date.blockAttr=
!0;var e;if(g.lazyDate){var f=c.data(b[0],"setDateLazyTimer");f&&(clearTimeout(f),c.removeData(b[0],"setDateLazyTimer"))}try{e=(e=c.datepicker.parseDate(b.datepicker("option","dateFormat"),b.prop("value")))?c.datepicker.formatDate("yy-mm-dd",e):b.prop("value")}catch(i){e=b.prop("value")}a.prop("value",e);h.date.blockAttr=!1;d.stopImmediatePropagation();k(a[0],"input");k(a[0],"change")});c(a).on("updateshadowdom",function(){if(d.trigger[0]&&(a.css({display:""}),a[0].offsetWidth||a[0].offsetHeight)){var c=
t(a);c.css&&(b.css(c.css),c.outerWidth&&b.outerWidth(c.outerWidth),f(b,d.trigger))}a.css({display:"none"})}).triggerHandler("updateshadowdom");d.trigger[0]&&setTimeout(function(){e.ready("WINDOWLOAD",function(){c(a).triggerHandler("updateshadowdom")})},9)}};h.date.attrs={disabled:function(a,b,d){c.prop(b,"disabled",!!d)},min:function(a,b,d){try{d=c.datepicker.parseDate("yy-mm-dd",d)}catch(e){d=!1}d&&c(b).datepicker("option","minDate",d)},max:function(a,b,d){try{d=c.datepicker.parseDate("yy-mm-dd",
d)}catch(e){d=!1}d&&c(b).datepicker("option","maxDate",d)},"data-placeholder":function(a,b,d){a=(d||"").split("-");3==a.length&&(d=c(b).datepicker("option","dateFormat").replace("yy",a[0]).replace("mm",a[1]).replace("dd",a[2]));c.prop(b,"placeholder",d)},value:function(a,b,d){if(!h.date.blockAttr){try{var e=c.datepicker.parseDate("yy-mm-dd",d)}catch(f){e=!1}e?n(c(b),e):c.prop(b,"value",d)}}}}if(!i.range||g.replaceUI)h.range=function(a){if(c.fn.slider){var b=c('<span class="input-range"><span class="ui-slider-handle" role="slider" tabindex="0" /></span>');
this.common(a,b,h.range.attrs);a.on("updateshadowdom",function(){a.css({display:""});if(a[0].offsetWidth||a[0].offsetHeight){var d=t(a);d.css&&(b.css(d.css),d.outerWidth&&b.outerWidth(d.outerWidth))}a.css({display:"none"})}).triggerHandler("updateshadowdom");b.slider(c.extend(!0,{},g.slider,a.data("slider"))).on({slide:function(b,c){if(b.originalEvent)h.range.blockAttr=!0,a.prop("value",c.value),h.range.blockAttr=!1,k(a[0],"input")},slidechange:function(b){b.originalEvent&&k(a[0],"change")}});["disabled",
"min","max","step","value"].forEach(function(b){var e=a.prop(b),f;"value"==b&&!e&&(f=a.getShadowElement())&&(e=(c(f).slider("option","max")-c(f).slider("option","min"))/2);null!=e&&a.prop(b,e)})}},h.range.attrs={disabled:function(a,b,d){d=!!d;c(b).slider("option","disabled",d);c("span",b).attr({"aria-disabled":d+"",tabindex:d?"-1":"0"})},min:function(a,b,d){d=d?1*d||0:0;c(b).slider("option","min",d);c("span",b).attr({"aria-valuemin":d})},max:function(a,b,d){d=d||0===d?1*d||100:100;c(b).slider("option",
"max",d);c("span",b).attr({"aria-valuemax":d})},value:function(a,b,d){d=c(a).prop("valueAsNumber");isNaN(d)||(h.range.blockAttr||c(b).slider("option","value",d),c("span",b).attr({"aria-valuenow":d,"aria-valuetext":d}))},step:function(a,b,d){d=d&&c.trim(d)?1*d||1:1;c(b).slider("option","step",d)}};if(g.replaceUI||!Modernizr.inputtypes.date||!Modernizr.inputtypes.range)i=function(){e.data(this,"hasShadow")&&c.prop(this,"value",c.prop(this,"value"))},e.onNodeNamesPropertyModify("input","valueAsNumber",
i),e.onNodeNamesPropertyModify("input","valueAsDate",i);c.each("disabled,min,max,value,step,data-placeholder".split(","),function(a,b){e.onNodeNamesPropertyModify("input",b,function(a){var c=e.data(this,"shadowData");if(c&&c.data&&c.data[b]&&c.nativeElement===this)c.data[b](this,c.shadowElement,a)})});if(!g.availabeLangs)g.availabeLangs="af ar ar-DZ az bg bs ca cs da de el en-AU en-GB en-NZ eo es et eu fa fi fo fr fr-CH gl he hr hu hy id is it ja ko kz lt lv ml ms nl no pl pt-BR rm ro ru sk sl sq sr sr-SR sv ta th tr uk vi zh-CN zh-HK zh-TW".split(" ");
i=function(){c.datepicker&&(e.activeLang({langObj:c.datepicker.regional,module:"form-number-date-ui",callback:function(a){a=c.extend({},l,a,g.datepicker);a.dateFormat&&g.datepicker.dateFormat!=a.dateFormat&&c("input.hasDatepicker").filter(".input-date, .input-datetime-local-date").datepicker("option","dateFormat",a.dateFormat).getNativeElement().filter("[data-placeholder]").attr("data-placeholder",function(a,c){return c});c.datepicker.setDefaults(a)}}),c(o).unbind("jquery-uiReady.langchange input-widgetsReady.langchange"))};
c(o).on("jquery-uiReady.langchange input-widgetsReady.langchange",i);i();(function(){var a=function(){var a={};return function(b){return b in a?a[b]:a[b]=c('<input type="'+b+'" />')[0].type===b}}();if(!a("number")||!a("time")){var b=e.cfg["forms-ext"],d=e.inputTypes,h={number:"0123456789.",time:"0123456789:."},g=function(a,b,f){f=f||{};if(!("type"in f))f.type=c.prop(a,"type");if(!("step"in f))f.step=e.getStep(a,f.type);if(!("valueAsNumber"in f))f.valueAsNumber=d[f.type].asNumber(c.prop(a,"value"));
var h="any"==f.step?d[f.type].step*d[f.type].stepScaleFactor:f.step;e.addMinMaxNumberToCache("min",c(a),f);e.addMinMaxNumberToCache("max",c(a),f);if(isNaN(f.valueAsNumber))f.valueAsNumber=d[f.type].stepBase||0;if("any"!==f.step&&(a=Math.round(1E7*((f.valueAsNumber-(f.minAsnumber||0))%f.step))/1E7)&&Math.abs(a)!=f.step)f.valueAsNumber-=a;a=f.valueAsNumber+h*b;return a=!isNaN(f.minAsNumber)&&a<f.minAsNumber?f.valueAsNumber*b<f.minAsNumber?f.minAsNumber:isNaN(f.maxAsNumber)?f.valueAsNumber:f.maxAsNumber:
!isNaN(f.maxAsNumber)&&a>f.maxAsNumber?f.valueAsNumber*b>f.maxAsNumber?f.maxAsNumber:isNaN(f.minAsNumber)?f.valueAsNumber:f.minAsNumber:Math.round(1E7*a)/1E7};e.modules["form-number-date-ui"].getNextStep=g;if(b.stepArrows){var i={set:function(){var a=e.data(this,"step-controls");if(a)a[this.disabled||this.readonly?"addClass":"removeClass"]("disabled-step-control")}};e.onNodeNamesPropertyModify("input","disabled",i);e.onNodeNamesPropertyModify("input","readonly",c.extend({},i))}var m={38:1,40:-1},
l=function(a,b){function e(){var b=c.prop(a,"value");b==h&&b!=i&&"string"==typeof b&&k(a,"change");i=b}var f=!1,h,i;(function(){i=c(a).on({"change.stepcontrol focus.stepcontrol":function(b){if(!f||"focus"!=b.type)i=c.prop(a,"value")},"blur.stepcontrol":function(){f||setTimeout(function(){!f&&!c(a).is(":focus")&&e();h=!1},9)}}).prop("value")})();return{triggerChange:e,step:function(e){!c.prop(a,"disabled")&&!a.readOnly&&e&&(h=d[b].numberToString(g(a,e,{type:b})),c.prop(a,"value",h),k(a,"input"))},
setFocus:function(){f=!0;setTimeout(function(){f=!1},18);setTimeout(function(){if(!c(a).is(":focus"))try{a.focus()}catch(b){}},1)}}};e.addReady(function(g,i){b.stepArrows&&c("input",g).add(i.filter("input")).each(function(){var g=c.prop(this,"type");if(d[g]&&d[g].asNumber&&b.stepArrows&&!(!0!==b.stepArrows&&!b.stepArrows[g]||a(g)||c(i).hasClass("has-step-controls"))){var i=this,j=l(i,g),k=c('<span class="step-controls" unselectable="on"><span class="step-up" /><span class="step-down" /></span>').insertAfter(i).on({"selectstart dragstart":function(){return!1},
"mousedown mousepress":function(a){c(a.target).hasClass("step-controls")||j.step(c(a.target).hasClass("step-up")?1:-1);j.setFocus();return!1},"mousepressstart mousepressend":function(a){"mousepressend"==a.type&&j.triggerChange();c(a.target)["mousepressstart"==a.type?"addClass":"removeClass"]("mousepress-ui")}}),o=function(a,b){if(b)return j.step(b),!1},n=c(i).addClass("has-step-controls").attr({readonly:i.readOnly,disabled:i.disabled,autocomplete:"off",role:"spinbutton"}).on("keyup",function(a){(a=
m[a.keyCode])&&j.triggerChange(a)}).on(c.browser.msie?"keydown":"keypress",function(a){if(a=m[a.keyCode])return j.step(a),!1});if(h[g])n.on("keypress",function(){var a=h[g];return function(b){var c=String.fromCharCode(null==b.charCode?b.keyCode:b.charCode);return b.ctrlKey||b.metaKey||" ">c||-1<a.indexOf(c)}}());n.on({focus:function(){n.add(k).off(".mwhellwebshims").on("mousewheel.mwhellwebshims",o)},blur:function(){c(i).add(k).off(".mwhellwebshims")}});e.data(i,"step-controls",k);if(b.calculateWidth){var p;
n.on("updateshadowdom",function(){if(!p&&(i.offsetWidth||i.offsetHeight))p=!0,f(n,k),k.css("marginTop",(n.outerHeight()-k.outerHeight())/2)}).triggerHandler("updateshadowdom")}}})})}})();e.addReady(function(a,b){c(o).on("jquery-uiReady.initinputui input-widgetsReady.initinputui",function(){if(c.datepicker||c.fn.slider){if(c.datepicker&&!l.dateFormat)l.dateFormat=c.datepicker._defaults.dateFormat;h(a,b)}c.datepicker&&c.fn.slider?c(o).unbind(".initinputui"):e.modules["input-widgets"].src||e.warn('jQuery UI Widget factory is already included, but not datepicker or slider. configure src of $.webshims.modules["input-widgets"].src')})})});
