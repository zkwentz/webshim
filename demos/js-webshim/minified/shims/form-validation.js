webshims.register("form-validation",function(e,t,n,i,a,r){var o="webkitURL"in n,s=o&&Modernizr.formvalidation&&!t.bugs.bustedValidity,u=s&&parseFloat((navigator.userAgent.match(/Safari\/([\d\.]+)/)||["","999999"])[1],10),l="user-error",c="user-success",p={checkbox:1,radio:1},d=e([]),f=function(t){t=e(t);var n,a,r=d;return"radio"==t[0].type&&(a=t.prop("form"),n=t[0].name,r=n?a?e(a).jProp(n):e(i.getElementsByName(n)).filter(function(){return!e.prop(this,"form")}):t,r=r.filter('[type="radio"]')),r},h=function(t,n){var i;return e.each(t,function(t,r){return r?(i="customError"==t?e.prop(n,"validationMessage"):t,!1):a}),i},m=function(e){var t;try{t=i.activeElement.name===e}catch(n){}return t},v={radio:1,checkbox:1,"select-one":1,"select-multiple":1,file:1,date:1,month:1,week:1,text:1},g={time:1,date:1,month:1,datetime:1,week:1,"datetime-local":1},y=function(t){var n,i,a,r;if(t.target&&(n=e(t.target).getNativeElement()[0],a=e(n).getShadowElement(),"submit"!=n.type&&e.prop(n,"willValidate")&&("change"!=t.type||v[r=a.prop("type")]))){i=e.data(n,"webshimsswitchvalidityclass");var o=function(){if(r||(r=a.prop("type")),!(s&&("change"==t.type||537.36>u)&&g[r]&&e(t.target).is(":focus")||"focusout"==t.type&&"radio"==n.type&&m(n.name))){var i,o,d,v,y,b=e.prop(n,"validity");e(n).trigger("refreshCustomValidityRules"),b.valid?a.hasClass(c)||(i=c,o=l,v="changedvaliditystate",d="changedvalid",p[n.type]&&n.checked&&f(n).not(n).removeClass(o).addClass(i).removeAttr("aria-invalid"),a.removeAttr("aria-invalid"),e.removeData(n,"webshimsinvalidcause")):(y=h(b,n),e.data(n,"webshimsinvalidcause")!=y&&(e.data(n,"webshimsinvalidcause",y),v="changedvaliditystate"),a.hasClass(l)||(i=l,o=c,p[n.type]&&!n.checked&&f(n).not(n).removeClass(o).addClass(i).attr("aria-invalid","true"),a.attr("aria-invalid","true"),d="changedinvalid")),i&&(a.addClass(i).removeClass(o),setTimeout(function(){e(n).trigger(d)},0)),v&&setTimeout(function(){e(n).trigger(v)},0),e.removeData(n,"webshimsswitchvalidityclass")}};i&&clearTimeout(i),"refreshvalidityui"==t.type?o():e.data(n,"webshimsswitchvalidityclass",setTimeout(o,9))}};e(i.body).on(r.validityUIEvents||"focusout change refreshvalidityui invalid",y).on("reset resetvalui",function(t){var n=e(t.target);"reset"==t.type&&(n=n.filter("form").jProp("elements")),n.filter(".user-error, .user-success").removeAttr("aria-invalid").removeClass("user-error").removeClass("user-success").getNativeElement().each(function(){e.removeData(this,"webshimsinvalidcause")}).trigger("resetvalidityui")});var b=function(){t.scrollRoot=o||"BackCompat"==i.compatMode?e(i.body):e(i.documentElement)},w=Modernizr.boxSizing||Modernizr["display-table"]||e.support.getSetAttribute?"minWidth":"width",T="transitionDelay"in i.documentElement.style;b(),t.ready("DOM",b),t.getRelOffset=function(t,n){t=e(t);var i,a=e(n).offset();return e.swap(e(t)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){i=t.offset()}),a.top-=i.top,a.left-=i.left,a},e.extend(t.wsPopover,{isInElement:function(t,n){return t==n||e.contains(t,n)},show:function(t){var a=e.Event("wspopoverbeforeshow");if(this.element.trigger(a),!a.isDefaultPrevented()&&!this.isVisible){this.isVisible=!0,t=e(t||this.options.prepareFor).getNativeElement();var r=this,o=e(t).getShadowElement();this.clear(),this.element.removeClass("ws-po-visible").css("display","none"),this.prepareFor(t,o),this.position(o),r.timers.show=setTimeout(function(){r.element.css("display",""),r.timers.show=setTimeout(function(){r.element.addClass("ws-po-visible").trigger("wspopovershow")},9)},9),e(i).on("focusin"+this.eventns+" mousedown"+this.eventns,function(e){!r.options.hideOnBlur||r.stopBlur||r.isInElement(r.lastElement[0]||i.body,e.target)||r.isInElement(t[0]||i.body,e.target)||r.isInElement(r.element[0],e.target)||r.hide()}),e(n).on("resize"+this.eventns+" pospopover"+this.eventns,function(){clearTimeout(r.timers.repos),r.timers.repos=setTimeout(function(){r.position(o)},900)})}},prepareFor:function(t,n){var i,a=e.extend({},this.options,e(t.prop("form")||[]).data("wspopover")||{},t.data("wspopover")),r=this,o={};this.lastElement=e(t).getShadowFocusElement(),this.prepared&&this.options.prepareFor||("element"==a.appendTo?this.element.insertAfter(t):this.element.appendTo(a.appendTo)),this.element.attr({"data-class":t.prop("className"),"data-id":t.prop("id")}),o[w]=a.constrainWidth?n.outerWidth():"",this.element.css(o),a.hideOnBlur&&(i=function(e){r.stopBlur?e.stopImmediatePropagation():r.hide()},r.timers.bindBlur=setTimeout(function(){r.lastElement.off(r.eventns).on("focusout"+r.eventns+" blur"+r.eventns,i),r.lastElement.getNativeElement().off(r.eventns)},10)),!this.prepared&&e.fn.bgIframe&&this.element.bgIframe(),this.prepared=!0},clear:function(){e(n).off(this.eventns),e(i).off(this.eventns),this.element.off("transitionend"+this.eventns),this.stopBlur=!1,e.each(this.timers,function(e,t){clearTimeout(t)})},hide:function(){var t=e.Event("wspopoverbeforehide");if(this.element.trigger(t),!t.isDefaultPrevented()&&this.isVisible){this.isVisible=!1;var i=this,a=function(t){t&&"transitionend"==t.type&&(t=t.originalEvent)&&t.target==i.element[0]&&"hidden"==i.element.css("visibility")||(i.element.off("transitionend"+i.eventns).css("display","none").attr({"data-id":"","data-class":"",hidden:"hidden"}),clearTimeout(i.timers.forcehide),e(n).off("resize"+i.eventns))};this.clear(),this.element.removeClass("ws-po-visible").trigger("wspopoverhide"),e(n).on("resize"+this.eventns,a),T&&this.element.off("transitionend"+this.eventns).on("transitionend"+this.eventns,a),i.timers.forcehide=setTimeout(a,T?600:40)}},position:function(e){var n=t.getRelOffset(this.element.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0}).removeAttr("hidden"),e);n.top+=e.outerHeight(),this.element.css({marginTop:"",marginLeft:"",marginRight:"",marginBottom:""}).css(n)}}),t.validityAlert=function(){var i=t.objectCreate(t.wsPopover,{},r.messagePopover),a=i.hide.bind(i);return i.element.addClass("validity-alert").attr({role:"alert"}),e.extend(i,{hideDelay:5e3,showFor:function(t,n,i,r){t=e(t).getNativeElement(),this.clear(),this.hide(),r||(this.getMessage(t,n),this.show(t),this.hideDelay&&(this.timers.delayedHide=setTimeout(a,this.hideDelay))),i||this.setFocus(t)},setFocus:function(i){var a,r=e(i).getShadowFocusElement(),o=t.scrollRoot.scrollTop(),s=r.offset().top-30;o>s&&(t.scrollRoot.animate({scrollTop:s-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(o-s)),80)}),a=!0);try{r[0].focus()}catch(u){}a&&(t.scrollRoot.scrollTop(o),setTimeout(function(){t.scrollRoot.scrollTop(o)},0)),e(n).triggerHandler("pospopover"+this.eventns)},getMessage:function(e,t){t||(t=e.getErrorMessage()),t?i.contentElement.text(t):this.hide()}}),i}();var x={slide:{show:"slideDown",hide:"slideUp"},fade:{show:"fadeIn",hide:"fadeOut"}};x[r.iVal.fx]||(r.iVal.fx="slide"),t.errorbox={create:function(t,n){n||(n=this.getFieldWrapper(t));var i=e("div.ws-errorbox",n);return i.length||(i=e('<div class="ws-errorbox" hidden="hidden">'),n.append(i)),n.data("errorbox",i),i},getFieldWrapper:function(n){var i;return r.iVal.fieldWrapper&&(i="function"==typeof r.iVal.fieldWrapper?r.iVal.fieldWrapper.apply(this,arguments):e(n).parent().closest(r.iVal.fieldWrapper),i.length||(i=!1,t.error("could not find fieldwrapper: "+r.iVal.fieldWrapper))),i||(i=e(n).parent().closest(":not(span, label, em, strong, b, mark, p)")),i},get:function(t,n){n||(n=this.getFieldWrapper(t));var i=n.data("errorbox");return i?"string"==typeof i&&(i=e("#"+i),e.data(t,"errorbox",i)):i=this.create(t,n),i},addSuccess:function(t,n){var i=e.prop(t,"type"),a=function(){var a=p[i]?e.prop(t,"checked"):e(t).val();n[a?"addClass":"removeClass"]("ws-success")},r=v[i]?"change":"blur";e(t).off(".recheckvalid").on(r+".recheckinvalid",a),a()},hideError:function(t,n){var i=this.getFieldWrapper(t),a=i.data("errorbox");return a&&a.jquery&&(i.removeClass("ws-invalid"),a.message="",e(t).filter("input").off(".recheckinvalid"),a.slideUp(function(){e(this).attr({hidden:"hidden"})})),n||this.addSuccess(t,i),i},recheckInvalidInput:function(t){if(r.iVal.recheckDelay&&r.iVal.recheckDelay>90){var n,i=function(){y({type:"input",target:t})};e(t).filter('input:not([type="checkbox"], [type="radio"])').off(".recheckinvalid").on("input.recheckinvalid",function(){clearTimeout(n),n=setTimeout(i,r.iVal.recheckDelay)})}},showError:function(t,n){var i=this.getFieldWrapper(t),a=this.get(t,i);return a.message!=n&&(a.stop(!0,!0).html("<p>"+n+"</p>"),a.message=n,i.addClass("ws-invalid").removeClass("ws-success"),a.is("[hidden]")&&(this.recheckInvalidInput(t),a.css({display:"none"}).removeAttr("hidden")[x[r.iVal.fx].show]())),i.removeClass("ws-success"),e(t).off(".recheckvalid"),i},reset:function(e){this.hideError(e,!0).removeClass("ws-success")},toggle:function(t){var n=e(t).getErrorMessage();n?this.showError(t,n):this.hideError(t,n)}},e(i.body).on({changedvaliditystate:function(n){if(r.iVal.sel){var i=e(n.target).jProp("form");i.is(r.iVal.sel)&&t.errorbox.toggle(n.target)}},resetvalidityui:function(n){if(r.iVal.sel){var i=e(n.target).jProp("form");i.is(r.iVal.sel)&&t.errorbox.reset(n.target)}},firstinvalid:function(n){if(r.iVal.sel&&r.iVal.handleBubble){var i=e(n.target).jProp("form");i.is(r.iVal.sel)&&(n.preventDefault(),"none"!=r.iVal.handleBubble&&t.validityAlert.showFor(n.target,!1,!1,"hide"==r.iVal.handleBubble))}},submit:function(t){return r.iVal.sel&&e(t.target).is(r.iVal.sel)&&e.prop(t.target,"noValidate")&&!e(t.target).checkValidity()?!1:a}}),t.modules["form-core"].getGroupElements=f,s&&540>u&&function(){var t=/^(?:textarea|input)$/i,a=!1;i.addEventListener("contextmenu",function(e){t.test(e.target.nodeName||"")&&(a=e.target.form)&&setTimeout(function(){a=!1},1)},!1),e(n).on("invalid",function(e){e.originalEvent&&a&&a==e.target.form&&(e.wrongWebkitInvalid=!0,e.stopImmediatePropagation())})}()});