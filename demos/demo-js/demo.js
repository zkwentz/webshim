/*! 2013-05-05 */
(function(e){var t=function(e,t){var n=e.data("mousepresstimer");n&&clearTimeout(n),t&&e.unbind("mouseup.mousepressext mouseleave.mousepressext"),e=null};e.event.special.mousepress={setup:function(){e(this).bind("mousedown.mousepressext",function(n){var i=e(this),o=function(s){var a=0;t(i),i.data("mousepresstimer",setInterval(function(){e.event.special.mousepress.handler(i[0],n),a++,a>3&&s>45&&o(s-40)},s))},s=e(n.target).trigger("mousepressstart",[n]);t(i),i.data("mousepresstimer",setTimeout(function(){o(180)},200)),i.bind("mouseup.mousepressext mouseleave.mousepressext",function(e){t(i,!0),s.trigger("mousepressend",[e]),i=null,s=null})})},teardown:function(){t(e(this).unbind(".mousepressext"),!0)},handler:function(t,n){return e.event.dispatch.call(t,{type:"mousepress",target:n.target,pageX:n.pageX,pageY:n.pageY})}}})(jQuery),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var o,s=t||window.event,a=[].slice.call(arguments,1),r=0,u=0,l=0,c=0,h=0;return t=e.event.fix(s),t.type="mousewheel",s.wheelDelta&&(r=s.wheelDelta),s.detail&&(r=-1*s.detail),s.deltaY&&(l=-1*s.deltaY,r=l),s.deltaX&&(u=s.deltaX,r=-1*u),void 0!==s.wheelDeltaY&&(l=s.wheelDeltaY),void 0!==s.wheelDeltaX&&(u=-1*s.wheelDeltaX),c=Math.abs(r),(!n||n>c)&&(n=c),h=Math.max(Math.abs(l),Math.abs(u)),(!i||i>h)&&(i=h),o=r>0?"floor":"ceil",r=Math[o](r/n),u=Math[o](u/i),l=Math[o](l/i),a.unshift(t,r,u,l),(e.event.dispatch||e.event.handle).apply(this,a)}var n,i,o=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],s="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"];if(e.event.fixHooks)for(var a=o.length;a;)e.event.fixHooks[o[--a]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=s.length;e;)this.addEventListener(s[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=s.length;e;)this.removeEventListener(s[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}),function(e){function t(){this===o.elem&&(o.pos=[-260,-260],o.elem=!1,s=3)}var n,i,o={pos:[-260,-260]},s=3,a=document,r=a.documentElement,u=a.body;u||e(function(){u=a.body}),e.event.special.mwheelIntent={setup:function(){var n=e(this).bind("mousewheel",e.event.special.mwheelIntent.handler);return this!==a&&this!==r&&this!==u&&n.bind("mouseleave",t),n=null,!0},teardown:function(){return e(this).unbind("mousewheel",e.event.special.mwheelIntent.handler).unbind("mouseleave",t),!0},handler:function(t){var a=[t.clientX,t.clientY];return this===o.elem||Math.abs(o.pos[0]-a[0])>s||Math.abs(o.pos[1]-a[1])>s?(o.elem=this,o.pos=a,s=250,clearTimeout(i),i=setTimeout(function(){s=10},200),clearTimeout(n),n=setTimeout(function(){s=3},1500),t=e.extend({},t,{type:"mwheelIntent"}),(e.event.dispatch||e.event.handle).apply(this,arguments)):void 0}},e.fn.extend({mwheelIntent:function(e){return e?this.bind("mwheelIntent",e):this.trigger("mwheelIntent")},unmwheelIntent:function(e){return this.unbind("mwheelIntent",e)}}),e(function(){u=a.body,e(a).bind("mwheelIntent.mwheelIntentDefault",e.noop)})}(jQuery),function($){$.webshims.ready("DOM",function(){window.console||(window.console={log:$.noop}),window.ActiveXObject||$("code.run-once").each(function(){var elem=this;$("<button>run example</button>").insertAfter(elem).click(function(){return eval(elem.innerHTML.replace(/&gt;/g,">").replace(/&lt;/g,"<")),this.disabled=!0,!1})}),$("div.feature-example").each(function(){var e=$("div.hidden-explanation",this).hide();$("button",this).bind("click",function(){return $("#placeholder").attr("placeholder",$("#placeholder-text").val()),e.slideDown(),!1})}),function(){var e=(location.hash||"").replace(/^#/,"");$("div.accordion").each(function(){var t,n=$("h3.button",this),i=n.next().hide(),o=e?n.filter('[id="'+e+'"]'):0,s=function(){t.offset().top<$(window).scrollTop()&&setTimeout(function(){t.prev("h3").get(0).scrollIntoView(!0)},1)};n.on("click",function(){var e=i.eq(n.index(this));return e[0]!=t[0]&&(t.slideUp(),t=e.slideDown(s)),!1}),o&&o[0]&&(o=n.index(o[0]),setTimeout(s,9)),t=i.eq(o).show(),$(window).bind("hashchange",function(){e=(location.hash||"").replace(/^#/,""),o=n.filter('[id="'+e+'"]'),o[0]&&o.triggerHandler("click")})})}()})}(jQuery),function(e){var t,n=/\/\/<([A-Za-z]+)/,i=/\/\/>/,o={data:null,init:function(t){e.webshims.ready("DOM es5",function(){e(t).each(function(){o.getData(this.getAttribute("data-polyfillpath"));var t=function(t){e("#"+t).prop("checked",!0).prop("disabled",!0)},n=function(t){e("#"+t).prop("disabled",!1)},i=this;e("fieldset.config",this).delegate("input[data-dependent]","click cfginit",function(){e.attr(this,"data-dependent").split(" ").forEach(e.prop(this,"checked")?t:n)}),e(this).delegate('input[type="checkbox"]',"click cfginit",function(){var t,n=e("a.modernizr-builder",i),o=n.data("base");return function(){clearTimeout(t),t=setTimeout(function(){var t=[],s="";e("input[data-mod]:checked",i).each(function(){e.merge(t,(e(this).data("mod")||"").split(" "))}),s=t.length?"-"+t.join("-"):"",e("code.modernizr-output",i).html(s),n.attr("href",o+s)},0)}}()).find("input[data-dependent]").trigger("cfginit"),e(this).bind("submit",function(){var t=[],n=[];e("fieldset.config input:not(:disabled)[id]",this).each(function(){var i=e.prop(this,"id");e.prop(this,"checked")?t.push(i):e.merge(n,e(this).data("features")||[i])}),o.buildScript(t,n,e('textarea[name="js_code"]',this))})})})},getData:function(t){e.ajax(t,{dataType:"text",success:function(e){o.data=e}})},getRemoveCombos:function(t){var n=[],i=[];return e.each(t,function(t,n){e.merge(i,e.webshims.features[n])}),e.each(e.webshims.c,function(t,o){e.each(o,function(o,s){return-1!==e.inArray(s,i)?(n.push(t),!1):void 0})}),n},buildScript:function(s,a,r){var u=[],l=o.getRemoveCombos(a),c=o.data.replace(/\t/g,"").split(/[\n\r]/g);c.forEach(function(o){var a;t?t=!i.exec(o):o&&(a=n.exec(o))&&-1===e.inArray(a[1],s)?a&&(t=!0):(l.length&&-1!=o.indexOf("removeCombos")&&(o=o.replace(/\/\/>removeCombos</,"removeCombos = removeCombos.concat(["+l.join(",")+"]);")),u.push(o))}),e(r).val(u.join("\n"))}};o.init("form[data-polyfillpath]")}(jQuery);