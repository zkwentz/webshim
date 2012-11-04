jQuery.webshims.register("form-native-extend",function(a,b,d,f,n,l){d=d.Modernizr;n=d.inputtypes;if(d.formvalidation&&!b.bugs.bustedValidity){var g=b.inputTypes,o={};b.addInputType=function(a,e){g[a]=e};b.addValidityRule=function(a,e){o[a]=e};b.addValidityRule("typeMismatch",function(a,e,b,i){if(""===e)return!1;i=i.typeMismatch;if(!("type"in b))b.type=(a[0].getAttribute("type")||"").toLowerCase();g[b.type]&&g[b.type].mismatch&&(i=g[b.type].mismatch(e,a));return i});var e=l.overrideMessages,j=!n.number||
!n.time||!n.range||e,i="customError,typeMismatch,rangeUnderflow,rangeOverflow,stepMismatch,tooLong,patternMismatch,valueMissing,valid".split(","),l=e?["value","checked"]:["value"],h=[],k=function(b,i){if(b){var s=(b.getAttribute&&b.getAttribute("type")||b.type||"").toLowerCase();if(e||g[s])e&&!i&&"radio"==s&&b.name?a(f.getElementsByName(b.name)).each(function(){a.prop(this,"validity")}):a.prop(b,"validity")}},q={};["input","textarea","select"].forEach(function(e){var i=b.defineNodeNameProperty(e,
"setCustomValidity",{prop:{value:function(g){var g=g+"",f="input"==e?a(this).getNativeElement()[0]:this;i.prop._supvalue.call(f,g);b.bugs.validationMessage&&b.data(f,"customvalidationMessage",g);j&&(b.data(f,"hasCustomError",!!g),k(f))}}});q[e]=i.prop._supvalue});if(j||e)l.push("min"),l.push("max"),l.push("step"),h.push("input");e&&(l.push("required"),l.push("pattern"),h.push("select"),h.push("textarea"));if(j){var p;h.forEach(function(f){var h=b.defineNodeNameProperty(f,"validity",{prop:{get:function(){if(!p){var d=
"input"==f?a(this).getNativeElement()[0]:this,j=h.prop._supget.call(d);if(!j)return j;var c={};i.forEach(function(a){c[a]=j[a]});if(!a.prop(d,"willValidate"))return c;p=!0;var m=a(d),w={type:(d.getAttribute&&d.getAttribute("type")||"").toLowerCase(),nodeName:(d.nodeName||"").toLowerCase()},C=m.val(),y=!!b.data(d,"hasCustomError"),x;p=!1;c.customError=y;if(c.valid&&c.customError)c.valid=!1;else if(!c.valid){var z=!0;a.each(c,function(a,c){if(c)return z=!1});if(z)c.valid=!0}a.each(o,function(a,i){c[a]=
i(m,C,w,c);if(c[a]&&(c.valid||!x)&&(e||g[w.type]&&g[w.type].mismatch))q[f].call(d,b.createValidationMessage(d,a)),c.valid=!1,x=!0});c.valid?(q[f].call(d,""),b.data(d,"hasCustomError",!1)):e&&!x&&!y&&a.each(c,function(a,c){if("valid"!==a&&c)return q[f].call(d,b.createValidationMessage(d,a)),!1});return c}},writeable:!1}})});l.forEach(function(a){b.onNodeNamesPropertyModify(h,a,function(){k(this)})});if(f.addEventListener){var r,u=function(b){if("form"in b.target){var i=b.target.form;clearTimeout(r);
k(b.target);i&&e&&a("input",i).each(function(){"password"==this.type&&k(this)})}};f.addEventListener("change",u,!0);e&&(f.addEventListener("blur",u,!0),f.addEventListener("keydown",function(a){13==a.keyCode&&u(a)},!0));f.addEventListener("input",function(a){clearTimeout(r);r=setTimeout(function(){k(a.target)},290)},!0)}var v=h.join(",");b.addReady(function(b,e){a(v,b).add(e.filter(v)).each(function(){a.prop(this,"validity")})});e&&b.ready("DOM form-message",function(){b.activeLang({register:"form-core",
callback:function(){a("input, select, textarea").getNativeElement().each(function(){if(!b.data(this,"hasCustomError")){var e=this,i=a.prop(e,"validity")||{valid:!0},d;i.valid||(d=(e.nodeName||"").toLowerCase(),a.each(i,function(a,c){if("valid"!==a&&c)return q[d].call(e,b.createValidationMessage(e,a)),!1}))}})}})})}b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}})}});
(function(a){var b=window.Modernizr,d=a.webshims,f=d.bugs,n=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input required="" name="a" /></form>'),l=function(){if(n[0].querySelector)try{f.findRequired=!n[0].querySelector("select:required")}catch(a){f.findRequired=!1}},g=a("input",n).eq(0),o=function(a){d.loader.loadList(["dom-extend"]);d.ready("dom-extend",a)};f.findRequired=!1;f.validationMessage=!1;d.capturingEventPrevented=function(b){if(!b._isPolyfilled){var d=
b.isDefaultPrevented,i=b.preventDefault;b.preventDefault=function(){clearTimeout(a.data(b.target,b.type+"DefaultPrevented"));a.data(b.target,b.type+"DefaultPrevented",setTimeout(function(){a.removeData(b.target,b.type+"DefaultPrevented")},30));return i.apply(this,arguments)};b.isDefaultPrevented=function(){return!(!d.apply(this,arguments)&&!a.data(b.target,b.type+"DefaultPrevented"))};b._isPolyfilled=!0}};if(!b.formvalidation||f.bustedValidity)l();else{d.capturingEvents(["input"]);d.capturingEvents(["invalid"],
!0);if(window.opera||window.testGoodWithFix)n.appendTo("head"),l(),f.validationMessage=!g.prop("validationMessage"),d.reTest(["form-native-extend","form-message"]),n.remove(),a(function(){o(function(){var b=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(f){var i=d.defineNodeNameProperty(f,"checkValidity",{prop:{value:function(){if(!d.fromSubmit)a(this).on("invalid.checkvalidity",b);d.fromCheckValidity=!0;var f=i.prop._supvalue.apply(this,arguments);d.fromSubmit||
a(this).unbind("invalid.checkvalidity",b);d.fromCheckValidity=!1;return f}}})})})});a.browser.webkit&&!d.bugs.bustedValidity&&function(){var b=/^(?:textarea|input)$/i,d=!1;document.addEventListener("contextmenu",function(a){b.test(a.target.nodeName||"")&&(d=a.target.form)&&setTimeout(function(){d=!1},1)},!1);a(window).on("invalid",function(a){if(a.originalEvent&&d&&d==a.target.form)a.wrongWebkitInvalid=!0,a.stopImmediatePropagation()})}()}})(jQuery);
jQuery.webshims.register("form-core",function(a,b,d,f,n,l){var g={radio:1},o={checkbox:1,radio:1},e=a([]),j=b.bugs,i=function(c){var c=a(c),b,d;b=e;if(g[c[0].type])d=c.prop("form"),b=(b=c[0].name)?d?a(d[b]):a(f.getElementsByName(b)).filter(function(){return!a.prop(this,"form")}):c,b=b.filter('[type="radio"]');return b},h=b.getContentValidationMessage=function(c,b,e){var d=a(c).data("errormessage")||c.getAttribute("x-moz-errormessage")||"";e&&d[e]&&(d=d[e]);"object"==typeof d&&(b=b||a.prop(c,"validity")||
{valid:1},b.valid||a.each(b,function(a,c){if(c&&"valid"!=a&&d[a])return d=d[a],!1}));if("object"==typeof d)d=d.defaultMessage;return d||""},k={number:1,range:1,date:1},q=function(c){var b=!1;a(a.prop(c,"elements")).each(function(){if(b=a(this).is(":invalid"))return!1});return b};a.extend(a.expr[":"],{"valid-element":function(c){return a.nodeName(c,"form")?!q(c):!(!a.prop(c,"willValidate")||!r(c))},"invalid-element":function(c){return a.nodeName(c,"form")?q(c):!(!a.prop(c,"willValidate")||r(c))},"required-element":function(c){return!(!a.prop(c,
"willValidate")||!a.prop(c,"required"))},"user-error":function(c){return a.prop(c,"willValidate")&&a(c).hasClass("user-error")},"optional-element":function(c){return!!(a.prop(c,"willValidate")&&!1===a.prop(c,"required"))},"in-range":function(c){if(!k[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||c.rangeOverflow||c.rangeUnderflow)},"out-of-range":function(c){if(!k[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||!c.rangeOverflow&&
!c.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(c){a.expr[":"][c]=a.expr.filters[c+"-element"]});a.expr[":"].focus=function(a){try{var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())}catch(d){}return!1};var p=a.event.customEvent||{},r=function(c){return(a.prop(c,"validity")||{valid:1}).valid};(j.bustedValidity||j.findRequired)&&function(){var c=a.find,b=a.find.matchesSelector,d=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,
e=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,b=function(b){var m=arguments,m=a.call(m,1,m.length);m.unshift(b.replace(d,e));return c.apply(this,m)},m;for(m in c)c.hasOwnProperty(m)&&(b[m]=c[m]);return b}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",f.documentElement))a.find.matchesSelector=function(a,c){c=c.replace(d,e);return b.call(this,a,c)}}();var u=a.prop,v={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(c,b,d){var e=
u.apply(this,arguments);c&&"form"in c&&v[b]&&d!==n&&a(c).hasClass(s)&&r(c)&&(a(c).getShadowElement().removeClass(t),"checked"==b&&d&&i(c).not(c).removeClass(t).removeAttr("aria-invalid"));return e};var A=function(c,b){var d;a.each(c,function(c,e){if(e)return d="customError"==c?a.prop(b,"validationMessage"):c,!1});return d},B=function(a){var b;try{b=f.activeElement.name===a}catch(d){}return b},s="user-error",t="user-error form-ui-invalid";a(f).on(l.validityUIEvents||"focusout change refreshvalidityui",
function(c){var b,d;if(c.target&&(b=a(c.target).getNativeElement()[0],"submit"!=b.type&&a.prop(b,"willValidate"))){d=a.data(b,"webshimsswitchvalidityclass");var e=function(){if(!("focusout"==c.type&&"radio"==b.type&&B(b.name))){var d=a.prop(b,"validity"),e=a(b).getShadowElement(),f,g,h,k;a(b).trigger("refreshCustomValidityRules");d.valid?e.hasClass("user-success")||(f="user-success form-ui-valid",g=t,k="changedvaliditystate",h="changedvalid",o[b.type]&&b.checked&&i(b).not(b).removeClass(g).addClass(f).removeAttr("aria-invalid"),
a.removeData(b,"webshimsinvalidcause")):(d=A(d,b),a.data(b,"webshimsinvalidcause")!=d&&(a.data(b,"webshimsinvalidcause",d),k="changedvaliditystate"),e.hasClass(s)||(f=t,g="user-success form-ui-valid",o[b.type]&&!b.checked&&i(b).not(b).removeClass(g).addClass(f),h="changedinvalid"));f&&(e.addClass(f).removeClass(g),setTimeout(function(){a(b).trigger(h)},0));k&&setTimeout(function(){a(b).trigger(k)},0);a.removeData(c.target,"webshimsswitchvalidityclass")}};d&&clearTimeout(d);"refreshvalidityui"==c.type?
e():a.data(b,"webshimsswitchvalidityclass",setTimeout(e,9))}});p.changedvaliditystate=!0;p.refreshCustomValidityRules=!0;p.changedvalid=!0;p.changedinvalid=!0;p.refreshvalidityui=!0;b.triggerInlineForm=function(b,d){a(b).trigger(d)};b.modules["form-core"].getGroupElements=i;j=function(){b.scrollRoot=a.browser.webkit||"BackCompat"==f.compatMode?a(f.body):a(f.documentElement)};j();b.ready("DOM",j);b.getRelOffset=function(b,d){var b=a(b),e=a(d).offset(),f;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",
left:0,top:0},function(){f=b.offset()});e.top-=f.top;e.left-=f.left;return e};b.validityAlert=function(){var c=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",e,i=!1,g=!1,k,j={hideDelay:5E3,showFor:function(b,c,e,f){j._create();var b=a(b),h=a(b).getShadowElement(),m=j.getOffsetFromBody(h);j.clear();f?this.hide():(this.getMessage(b,c),this.position(h,m),this.show(),this.hideDelay&&(i=setTimeout(k,this.hideDelay)),a(d).on("resize.validityalert",function(){clearTimeout(g);g=setTimeout(function(){j.position(h)},
9)}));e||this.setFocus(h,m)},getOffsetFromBody:function(a){return b.getRelOffset(e,a)},setFocus:function(d,i){var g=a(d).getShadowFocusElement(),h=b.scrollRoot.scrollTop(),j=(i||g.offset()).top-30,l;b.getID&&"label"==c&&e.attr("for",b.getID(g));h>j&&(b.scrollRoot.animate({scrollTop:j-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(h-j)),80)}),l=!0);try{g[0].focus()}catch(n){}l&&(b.scrollRoot.scrollTop(h),setTimeout(function(){b.scrollRoot.scrollTop(h)},0));setTimeout(function(){a(f).on("focusout.validityalert",
k)},10)},getMessage:function(b,c){c||(c=h(b[0])||b.prop("validationMessage"));c?a("span.va-box",e).text(c):this.hide()},position:function(b,c){c=c?a.extend({},c):j.getOffsetFromBody(b);c.top+=b.outerHeight();e.css(c)},show:function(){"none"===e.css("display")&&e.css({opacity:0}).show();e.addClass("va-visible").fadeTo(400,1)},hide:function(){e.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(i);a(f).unbind(".validityalert");a(d).unbind(".validityalert");e.stop().removeAttr("for")},
_create:function(){if(!e)e=j.errorBubble=a("<"+c+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+c+">").css({position:"absolute",display:"none"}),b.ready("DOM",function(){e.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&e.bgIframe()})}};k=a.proxy(j,"hide");return j}();(function(){var b,e=[],d;a(f).on("invalid",function(g){if(!g.wrongWebkitInvalid){var i=
a(g.target),h=i.getShadowElement();h.hasClass(s)||(h.addClass(t).removeClass("user-success form-ui-valid"),setTimeout(function(){a(g.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=g.isDefaultPrevented,h=a.Event("firstinvalidsystem"),a(f).triggerHandler(h,{element:g.target,form:g.target.form,isInvalidUIPrevented:g.isDefaultPrevented}),i.trigger(b);b&&b.isDefaultPrevented()&&g.preventDefault();e.push(g.target);g.extraData=
"fix";clearTimeout(d);d=setTimeout(function(){var d={type:"lastinvalid",cancelable:!1,invalidlist:a(e)};b=!1;e=[];a(g.target).trigger(d,d)},9);h=i=null}})})();a.fn.getErrorMessage=function(){var b="",d=this[0];d&&(b=h(d)||a.prop(d,"customValidationMessage")||a.prop(d,"validationMessage"));return b};l.replaceValidationUI&&b.ready("DOM forms",function(){a(f).on("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,b,d,f,n,l){var g=b.validityMessages,d=l.overrideMessages||l.customMessages?["customValidationMessage"]:[];g.en=a.extend(!0,{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},g.en||g["en-US"]||{});["select","radio"].forEach(function(a){g.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){g.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date",
"time","datetime-local"].forEach(function(a){g.en.rangeOverflow[a]="Value must be at or before {%max}."});g["en-US"]=g["en-US"]||g.en;g[""]=g[""]||g["en-US"];g.de=a.extend(!0,{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}},g.de||{});["select","radio"].forEach(function(a){g.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){g.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){g.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});
var o=g[""];b.createValidationMessage=function(d,g){var f=o[g];f&&"string"!==typeof f&&(f=f[a.prop(d,"type")]||f[(d.nodeName||"").toLowerCase()]||f.defaultMessage);f&&"value,min,max,title,maxlength,label".split(",").forEach(function(h){if(-1!==f.indexOf("{%"+h)){var k=("label"==h?a.trim(a('label[for="'+d.id+'"]',d.form).text()).replace(/\*$|:$/,""):a.attr(d,h))||"";"patternMismatch"==g&&"title"==h&&!k&&b.error("no title for patternMismatch provided. Always add a title attribute.");f=f.replace("{%"+
h+"}",k);"value"==h&&(f=f.replace("{%valueLen}",k.length))}});return f||""};(b.bugs.validationMessage||!Modernizr.formvalidation||b.bugs.bustedValidity)&&d.push("validationMessage");b.activeLang({langObj:g,module:"form-core",callback:function(a){o=a}});d.forEach(function(d){b.defineNodeNamesProperty(["fieldset","output","button"],d,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(f){var g=b.defineNodeNameProperty(f,d,{prop:{get:function(){var d=this,e="";if(!a.prop(d,
"willValidate"))return e;var f=a.prop(d,"validity")||{valid:1};if(f.valid||(e=b.getContentValidationMessage(d,f)))return e;if(f.customError&&d.nodeName&&(e=Modernizr.formvalidation&&!b.bugs.bustedValidity&&g.prop._supget?g.prop._supget.call(d):b.data(d,"customvalidationMessage")))return e;a.each(f,function(a,f){if("valid"!=a&&f&&(e=b.createValidationMessage(d,a)))return!1});return e||""},writeable:!1}})})})});
