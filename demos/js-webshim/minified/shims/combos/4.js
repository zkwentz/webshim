(function(a){var c=window.Modernizr,g=a.webshims,h=g.bugs,i=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input type="date" required="" name="a" /><input type="submit" /></form>'),n=function(){if(i[0].querySelector)try{h.findRequired=!i[0].querySelector("select:required")}catch(a){h.findRequired=!1}};h.findRequired=!1;h.validationMessage=!1;h.valueAsNumberSet=!1;g.capturingEventPrevented=function(e){if(!e._isPolyfilled){var c=e.isDefaultPrevented,
d=e.preventDefault;e.preventDefault=function(){clearTimeout(a.data(e.target,e.type+"DefaultPrevented"));a.data(e.target,e.type+"DefaultPrevented",setTimeout(function(){a.removeData(e.target,e.type+"DefaultPrevented")},30));return d.apply(this,arguments)};e.isDefaultPrevented=function(){return!(!c.apply(this,arguments)&&!a.data(e.target,e.type+"DefaultPrevented"))};e._isPolyfilled=!0}};if(!c.formvalidation||h.bustedValidity)n();else if(g.capturingEvents(["input"]),g.capturingEvents(["invalid"],!0),
c.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var d=a("input",i).eq(0),o,k=function(a){g.loader.loadList(["dom-extend"]);g.ready("dom-extend",a)},l=function(e){var j=["form-extend","form-message","form-native-fix"];e&&(e.preventDefault(),e.stopImmediatePropagation());clearTimeout(o);setTimeout(function(){i&&(i.remove(),i=d=null)},9);if(!c.bugfreeformvalidation)g.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),g.modules["form-extend"].test=a.noop;g.isReady("form-number-date-api")&&
j.push("form-number-date-api");g.reTest(j);if(d)try{d.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&k(function(){g.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(e){!e&&this&&a.prop(this,"value",a.prop(this,"value"))}});g.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(e){if(!e&&this)e=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(e)}})})}catch(m){}(a.browser.opera||window.testGoodWithFix)&&
k(function(){var e=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(c){var d=g.defineNodeNameProperty(c,"checkValidity",{prop:{value:function(){g.fromSubmit||a(this).bind("invalid.checkvalidity",e);g.fromCheckValidity=!0;var b=d.prop._supvalue.apply(this,arguments);g.fromSubmit||a(this).unbind("invalid.checkvalidity",e);g.fromCheckValidity=!1;return b}}})})})};i.appendTo("head");if(window.opera||window.testGoodWithFix){n();h.validationMessage=!d.prop("validationMessage");
if((c.inputtypes||{}).date){try{d.prop("valueAsNumber",0)}catch(m){}h.valueAsNumberSet="1970-01-01"!=d.prop("value")}d.prop("value","")}i.bind("submit",function(a){c.bugfreeformvalidation=!1;l(a)});o=setTimeout(function(){i&&i.triggerHandler("submit")},9);a("input, select",i).bind("invalid",l).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click");a.browser.webkit&&c.bugfreeformvalidation&&!g.bugs.bustedValidity&&function(){var e=/^(?:textarea|input)$/i,
c=!1;document.addEventListener("contextmenu",function(a){e.test(a.target.nodeName||"")&&(c=a.target.form)&&setTimeout(function(){c=!1},1)},!1);a(window).bind("invalid",function(a){if(a.originalEvent&&c&&c==a.target.form)a.wrongWebkitInvalid=!0,a.stopImmediatePropagation()})}()}})(jQuery);
jQuery.webshims.register("form-core",function(a,c,g,h,i,n){var d={radio:1},o={checkbox:1,radio:1},k=a([]),l=c.bugs,m=function(b){var b=a(b),f,e;f=k;if(d[b[0].type])e=b.prop("form"),f=(f=b[0].name)?e?a(e[f]):a(h.getElementsByName(f)).filter(function(){return!a.prop(this,"form")}):b,f=f.filter('[type="radio"]');return f},e=c.getContentValidationMessage=function(b,f,e){var c=a(b).data("errormessage")||b.getAttribute("x-moz-errormessage")||"";e&&c[e]&&(c=c[e]);"object"==typeof c&&(f=f||a.prop(b,"validity")||
{valid:1},f.valid||a.each(f,function(a,b){if(b&&"valid"!=a&&c[a])return c=c[a],!1}));if("object"==typeof c)c=c.defaultMessage;return c||""},j={number:1,range:1,date:1};a.extend(a.expr[":"],{"valid-element":function(b){return!(!a.prop(b,"willValidate")||!(a.prop(b,"validity")||{valid:1}).valid)},"invalid-element":function(b){return!(!a.prop(b,"willValidate")||(a.prop(b,"validity")||{valid:1}).valid)},"required-element":function(b){return!(!a.prop(b,"willValidate")||!a.prop(b,"required"))},"optional-element":function(b){return!!(a.prop(b,
"willValidate")&&!1===a.prop(b,"required"))},"in-range":function(b){if(!j[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||b.rangeOverflow||b.rangeUnderflow)},"out-of-range":function(b){if(!j[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||!b.rangeOverflow&&!b.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(b){a.expr[":"][b]=a.expr.filters[b+"-element"]});a.expr[":"].focus=function(a){try{var f=
a.ownerDocument;return a===f.activeElement&&(!f.hasFocus||f.hasFocus())}catch(c){}return!1};var p=a.event.customEvent||{};(l.bustedValidity||l.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var b=a.find,f=a.find.matchesSelector,c=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,e=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,f=function(f){var d=arguments,d=a.call(d,1,d.length);d.unshift(f.replace(c,e));return b.apply(this,
d)},d;for(d in b)b.hasOwnProperty(d)&&(f[d]=b[d]);return f}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",h.documentElement))a.find.matchesSelector=function(a,b){b=b.replace(c,e);return f.call(this,a,b)}}();var q=a.prop,r={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,f,c){var e=q.apply(this,arguments);if(b&&"form"in b&&r[f]&&c!==i&&a(b).hasClass("form-ui-invalid")&&(a.prop(b,"validity")||{valid:1}).valid)a(b).getShadowElement().removeClass("form-ui-invalid"),
"checked"==f&&c&&m(b).not(b).removeClass("form-ui-invalid").removeAttr("aria-invalid");return e};var s=function(b,f){var c;a.each(b,function(b,e){if(e)return c="customError"==b?a.prop(f,"validationMessage"):b,!1});return c};a(h).bind(n.validityUIEvents||"focusout change refreshvalidityui",function(b){var f,c;if(b.target&&(f=a(b.target).getNativeElement()[0],"submit"!=f.type&&a.prop(f,"willValidate"))){c=a.data(f,"webshimsswitchvalidityclass");var e=function(){var c=a.prop(f,"validity"),e=a(f).getShadowElement(),
d,k,g,h;a(f).trigger("refreshCustomValidityRules");c.valid?e.hasClass("form-ui-valid")||(d="form-ui-valid",k="form-ui-invalid",h="changedvaliditystate",g="changedvalid",o[f.type]&&f.checked&&m(f).not(f).removeClass(k).addClass(d).removeAttr("aria-invalid"),a.removeData(f,"webshimsinvalidcause")):(c=s(c,f),a.data(f,"webshimsinvalidcause")!=c&&(a.data(f,"webshimsinvalidcause",c),h="changedvaliditystate"),e.hasClass("form-ui-invalid")||(d="form-ui-invalid",k="form-ui-valid",o[f.type]&&!f.checked&&m(f).not(f).removeClass(k).addClass(d),
g="changedinvalid"));d&&(e.addClass(d).removeClass(k),setTimeout(function(){a(f).trigger(g)},0));h&&setTimeout(function(){a(f).trigger(h)},0);a.removeData(b.target,"webshimsswitchvalidityclass")};c&&clearTimeout(c);"refreshvalidityui"==b.type?e():a.data(b.target,"webshimsswitchvalidityclass",setTimeout(e,9))}});p.changedvaliditystate=!0;p.refreshCustomValidityRules=!0;p.changedvalid=!0;p.changedinvalid=!0;p.refreshvalidityui=!0;c.triggerInlineForm=function(b,f){a(b).trigger(f)};c.modules["form-core"].getGroupElements=
m;l=function(){c.scrollRoot=a.browser.webkit||"BackCompat"==h.compatMode?a(h.body):a(h.documentElement)};l();c.ready("DOM",l);c.getRelOffset=function(b,f){var b=a(b),c=a(f).offset(),e;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){e=b.offset()});c.top-=e.top;c.left-=e.left;return c};c.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",f,d=!1,k=!1,m,j={hideDelay:5E3,showFor:function(b,c,e,h){j._create();var b=a(b),i=
a(b).getShadowElement(),l=j.getOffsetFromBody(i);j.clear();h?this.hide():(this.getMessage(b,c),this.position(i,l),f.css({fontSize:b.css("fontSize"),fontFamily:b.css("fontFamily")}),this.show(),this.hideDelay&&(d=setTimeout(m,this.hideDelay)),a(g).bind("resize.validityalert",function(){clearTimeout(k);k=setTimeout(function(){j.position(i)},9)}));e||this.setFocus(i,l)},getOffsetFromBody:function(a){return c.getRelOffset(f,a)},setFocus:function(e,d){var k=a(e).getShadowFocusElement(),g=c.scrollRoot.scrollTop(),
j=(d||k.offset()).top-30,i;c.getID&&"label"==b&&f.attr("for",c.getID(k));g>j&&(c.scrollRoot.animate({scrollTop:j-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(g-j)),80)}),i=!0);try{k[0].focus()}catch(l){}i&&(c.scrollRoot.scrollTop(g),setTimeout(function(){c.scrollRoot.scrollTop(g)},0));setTimeout(function(){a(h).bind("focusout.validityalert",m)},10)},getMessage:function(b,c){c||(c=e(b[0])||b.prop("validationMessage"));c?a("span.va-box",f).text(c):this.hide()},position:function(b,c){c=c?a.extend({},
c):j.getOffsetFromBody(b);c.top+=b.outerHeight();f.css(c)},show:function(){"none"===f.css("display")&&f.css({opacity:0}).show();f.addClass("va-visible").fadeTo(400,1)},hide:function(){f.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(d);a(h).unbind(".validityalert");a(g).unbind(".validityalert");f.stop().removeAttr("for")},_create:function(){if(!f)f=j.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
b+">").css({position:"absolute",display:"none"}),c.ready("DOM",function(){f.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&f.bgIframe()})}};m=a.proxy(j,"hide");return j}();(function(){var b,c=[],e;a(h).bind("invalid",function(d){if(!d.wrongWebkitInvalid){var k=a(d.target),g=k.getShadowElement();g.hasClass("form-ui-invalid")||(g.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(d.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=d.isDefaultPrevented,g=a.Event("firstinvalidsystem"),a(h).triggerHandler(g,{element:d.target,form:d.target.form,isInvalidUIPrevented:d.isDefaultPrevented}),k.trigger(b);b&&b.isDefaultPrevented()&&d.preventDefault();c.push(d.target);d.extraData="fix";clearTimeout(e);e=setTimeout(function(){var e={type:"lastinvalid",cancelable:!1,invalidlist:a(c)};b=!1;c=[];a(d.target).trigger(e,e)},9);g=k=null}})})();a.fn.getErrorMessage=function(){var b="",
c=this[0];c&&(b=e(c)||a.prop(c,"customValidationMessage")||a.prop(c,"validationMessage"));return b};n.replaceValidationUI&&c.ready("DOM forms",function(){a(h).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,c,g,h,i,n){var d=c.validityMessages,g=n.overrideMessages||n.customMessages?["customValidationMessage"]:[];d.en=a.extend(!0,{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},d.en||d["en-US"]||{});["select","radio"].forEach(function(a){d.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){d.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date",
"time","datetime-local"].forEach(function(a){d.en.rangeOverflow[a]="Value must be at or before {%max}."});d["en-US"]=d["en-US"]||d.en;d[""]=d[""]||d["en-US"];d.de=a.extend(!0,{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}},d.de||{});["select","radio"].forEach(function(a){d.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){d.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){d.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});
var o=d[""];c.createValidationMessage=function(d,g){var h=o[g];h&&"string"!==typeof h&&(h=h[a.prop(d,"type")]||h[(d.nodeName||"").toLowerCase()]||h.defaultMessage);h&&"value,min,max,title,maxlength,label".split(",").forEach(function(e){if(-1!==h.indexOf("{%"+e)){var j=("label"==e?a.trim(a('label[for="'+d.id+'"]',d.form).text()).replace(/\*$|:$/,""):a.attr(d,e))||"";"patternMismatch"==g&&"title"==e&&!j&&c.error("no title for patternMismatch provided. Always add a title attribute.");h=h.replace("{%"+
e+"}",j);"value"==e&&(h=h.replace("{%valueLen}",j.length))}});return h||""};(c.bugs.validationMessage||!Modernizr.formvalidation||c.bugs.bustedValidity)&&g.push("validationMessage");c.activeLang({langObj:d,module:"form-core",callback:function(a){o=a}});g.forEach(function(d){c.defineNodeNamesProperty(["fieldset","output","button"],d,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(g){var h=c.defineNodeNameProperty(g,d,{prop:{get:function(){var e=this,d="";if(!a.prop(e,
"willValidate"))return d;var g=a.prop(e,"validity")||{valid:1};if(g.valid||(d=c.getContentValidationMessage(e,g)))return d;if(g.customError&&e.nodeName&&(d=Modernizr.formvalidation&&!c.bugs.bustedValidity&&h.prop._supget?h.prop._supget.call(e):c.data(e,"customvalidationMessage")))return d;a.each(g,function(a,g){if("valid"!=a&&g&&(d=c.createValidationMessage(e,a)))return!1});return d||""},writeable:!1}})})})});
