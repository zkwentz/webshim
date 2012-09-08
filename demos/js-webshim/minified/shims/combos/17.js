jQuery.webshims.register("dom-extend",function(a,g,i,m,o){var t=g.modules,j=/\s*,\s*/,r={},n={},q={},u={},f={},l=a.fn.val,y=function(c,b,d,h,w){return w?l.call(a(c)):l.call(a(c),d)};a.fn.val=function(c){var b=this[0];arguments.length&&null==c&&(c="");if(!arguments.length)return!b||1!==b.nodeType?l.call(this):a.prop(b,"value",c,"val",!0);if(a.isArray(c))return l.apply(this,arguments);var d=a.isFunction(c);return this.each(function(h){b=this;1===b.nodeType&&(d?(h=c.call(b,h,a.prop(b,"value",o,"val",
!0)),null==h&&(h=""),a.prop(b,"value",h,"val")):a.prop(b,"value",c,"val"))})};var x="_webshimsLib"+Math.round(1E3*Math.random()),B=function(c,b,d){c=c.jquery?c[0]:c;if(!c)return d||{};var h=a.data(c,x);d!==o&&(h||(h=a.data(c,x,{})),b&&(h[b]=d));return b?h&&h[b]:h};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(c){a.fn[c.name]=function(){return this.map(function(){var a=B(this,
"shadowData");return a&&a[c.prop]||this})}});["removeAttr","prop","attr"].forEach(function(c){r[c]=a[c];a[c]=function(b,d,h,w,e){var s="val"==w,v=!s?r[c]:y;if(!b||!n[d]||1!==b.nodeType||!s&&w&&"attr"==c&&a.attrFn[d])return v(b,d,h,w,e);var z=(b.nodeName||"").toLowerCase(),k=q[z],g="attr"==c&&(!1===h||null===h)?"removeAttr":c,l,i,j;k||(k=q["*"]);k&&(k=k[d]);k&&(l=k[g]);if(l){if("value"==d)i=l.isVal,l.isVal=s;if("removeAttr"===g)return l.value.call(b);if(h===o)return l.get?l.get.call(b):l.value;l.set&&
("attr"==c&&!0===h&&(h=d),j=l.set.call(b,h));if("value"==d)l.isVal=i}else j=v(b,d,h,w,e);if((h!==o||"removeAttr"===g)&&f[z]&&f[z][d]){var m;m="removeAttr"==g?!1:"prop"==g?!!h:!0;f[z][d].forEach(function(a){if(!a.only||(a.only="prop"==c)||"attr"==a.only&&"prop"!=c)a.call(b,h,m,s?"val":g,c)})}return j};u[c]=function(b,d,h){q[b]||(q[b]={});q[b][d]||(q[b][d]={});var w=q[b][d][c],e=function(a,b,z){return b&&b[a]?b[a]:z&&z[a]?z[a]:"prop"==c&&"value"==d?function(a){return h.isVal?y(this,d,a,!1,0===arguments.length):
r[c](this,d,a)}:"prop"==c&&"value"==a&&h.value.apply?function(a){var b=r[c](this,d);b&&b.apply&&(b=b.apply(this,arguments));return b}:function(a){return r[c](this,d,a)}};q[b][d][c]=h;if(h.value===o){if(!h.set)h.set=h.writeable?e("set",h,w):g.cfg.useStrict&&"prop"==d?function(){throw d+" is readonly on "+b;}:a.noop;if(!h.get)h.get=e("get",h,w)}["value","get","set"].forEach(function(a){h[a]&&(h["_sup"+a]=e(a,w))})}});var p=!a.browser.msie||8<parseInt(a.browser.version,10),e=function(){var a=g.getPrototypeOf(m.createElement("foobar")),
b=Object.prototype.hasOwnProperty;return function(d,h,e){var f=m.createElement(d),s=g.getPrototypeOf(f);if(p&&s&&a!==s&&(!f[h]||!b.call(f,h))){var v=f[h];e._supvalue=function(){return v&&v.apply?v.apply(this,arguments):v};s[h]=e.value}else e._supvalue=function(){var a=B(this,"propValue");return a&&a[h]&&a[h].apply?a[h].apply(this,arguments):a&&a[h]},k.extendValue(d,h,e.value);e.value._supvalue=e._supvalue}}(),k=function(){var c={};g.addReady(function(b,d){var s={},h=function(c){s[c]||(s[c]=a(b.getElementsByTagName(c)),
d[0]&&a.nodeName(d[0],c)&&(s[c]=s[c].add(d)))};a.each(c,function(a,c){h(a);!c||!c.forEach?g.warn("Error: with "+a+"-property. methods: "+c):c.forEach(function(c){s[a].each(c)})});s=null});var b,d=a([]),h=function(d,h){c[d]?c[d].push(h):c[d]=[h];a.isDOMReady&&(b||a(m.getElementsByTagName(d))).each(h)};return{createTmpCache:function(c){a.isDOMReady&&(b=b||a(m.getElementsByTagName(c)));return b||d},flushTmpCache:function(){b=null},content:function(c,b){h(c,function(){var c=a.attr(this,b);null!=c&&a.attr(this,
b,c)})},createElement:function(a,c){h(a,c)},extendValue:function(c,b,d){h(c,function(){a(this).each(function(){B(this,"propValue",{})[b]=this[b];this[b]=d})})}}}(),A=function(a,b){if(a.defaultValue===o)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}};if(!a.attr)a.attr={}};a.extend(g,{getID:function(){var c=(new Date).getTime();return function(b){var b=a(b),d=b.attr("id");d||(c++,d="ID-"+c,b.attr("id",d));
return d}}(),extendUNDEFProp:function(c,b){a.each(b,function(a,b){a in c||(c[a]=b)})},createPropDefault:A,data:B,moveToFirstEvent:function(){var c=a._data?"_data":"data";return function(b,d,h){if((b=(a[c](b,"events")||{})[d])&&1<b.length)d=b.pop(),h||(h="bind"),"bind"==h&&b.delegateCount?b.splice(b.delegateCount,0,d):b.unshift(d)}}(),addShadowDom:function(){var c,b,d,h,e={init:!1,start:function(){if(!this.init)this.init=!0,this.height=a(m).height(),this.width=a(m).width(),setInterval(function(){var c=
a(m).height(),b=a(m).width();if(c!=e.height||b!=e.width)e.height=c,e.width=b,h({type:"docresize"})},400)}};h=function(h){clearTimeout(c);c=setTimeout(function(){if("resize"==h.type){var c=a(i).width(),v=a(i).width();if(v==b&&c==d)return;b=v;d=c;e.height=a(m).height();e.width=a(m).width()}a.event.trigger("updateshadowdom")},40)};a(i).bind("resize",h);a.event.customEvent.updateshadowdom=!0;return function(c,b,d){d=d||{};c.jquery&&(c=c[0]);b.jquery&&(b=b[0]);var h=a.data(c,x)||a.data(c,x,{}),f=a.data(b,
x)||a.data(b,x,{}),k={};if(d.shadowFocusElement){if(d.shadowFocusElement){if(d.shadowFocusElement.jquery)d.shadowFocusElement=d.shadowFocusElement[0];k=a.data(d.shadowFocusElement,x)||a.data(d.shadowFocusElement,x,k)}}else d.shadowFocusElement=b;h.hasShadow=b;k.nativeElement=f.nativeElement=c;k.shadowData=f.shadowData=h.shadowData={nativeElement:c,shadowElement:b,shadowFocusElement:d.shadowFocusElement};d.shadowChilds&&d.shadowChilds.each(function(){B(this,"shadowData",f.shadowData)});if(d.data)k.shadowData.data=
f.shadowData.data=h.shadowData.data=d.data;d=null;e.start()}}(),propTypes:{standard:function(a){A(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){A(a);if(!a.prop)a.prop={set:function(b){b?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}},src:function(){var c=m.createElement("a");c.style.display="none";return function(b,d){A(b);if(!b.prop)b.prop=
{set:function(a){b.attr.set.call(this,a)},get:function(){var b=this.getAttribute(d),e;if(null==b)return"";c.setAttribute("href",b+"");if(!a.support.hrefNormalized){try{a(c).insertAfter(this),e=c.getAttribute("href",4)}catch(f){e=c.getAttribute("href",4)}a(c).detach()}return e||c.href}}}}(),enumarated:function(a){A(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var b=(a.attr.get.call(this)||"").toLowerCase();if(!b||-1==a.limitedTo.indexOf(b))b=a.defaultValue;return b}}}},
reflectProperties:function(c,b){"string"==typeof b&&(b=b.split(j));b.forEach(function(b){g.defineNodeNamesProperty(c,b,{prop:{set:function(c){a.attr(this,b,c)},get:function(){return a.attr(this,b)||""}}})})},defineNodeNameProperty:function(c,b,d){n[b]=!0;if(d.reflect)g.propTypes[d.propType||"standard"](d,b);["prop","attr","removeAttr"].forEach(function(h){var f=d[h];f&&(f="prop"===h?a.extend({writeable:!0},f):a.extend({},f,{writeable:!0}),u[h](c,b,f),"*"!=c&&g.cfg.extendNative&&"prop"==h&&f.value&&
a.isFunction(f.value)&&e(c,b,f),d[h]=f)});d.initAttr&&k.content(c,b);return d},defineNodeNameProperties:function(a,b,d,h){for(var e in b)!h&&b[e].initAttr&&k.createTmpCache(a),d&&(b[e][d]?g.log("override: "+a+"["+e+"] for "+d):(b[e][d]={},["value","set","get"].forEach(function(a){a in b[e]&&(b[e][d][a]=b[e][a],delete b[e][a])}))),b[e]=g.defineNodeNameProperty(a,e,b[e]);h||k.flushTmpCache();return b},createElement:function(c,b,d){var e;a.isFunction(b)&&(b={after:b});k.createTmpCache(c);b.before&&k.createElement(c,
b.before);d&&(e=g.defineNodeNameProperties(c,d,!1,!0));b.after&&k.createElement(c,b.after);k.flushTmpCache();return e},onNodeNamesPropertyModify:function(c,b,d,e){"string"==typeof c&&(c=c.split(j));a.isFunction(d)&&(d={set:d});c.forEach(function(a){f[a]||(f[a]={});"string"==typeof b&&(b=b.split(j));d.initAttr&&k.createTmpCache(a);b.forEach(function(b){f[a][b]||(f[a][b]=[],n[b]=!0);if(d.set){if(e)d.set.only=e;f[a][b].push(d.set)}d.initAttr&&k.content(a,b)});k.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,
b,d){d||(d={});if(a.isFunction(d))d.set=d;g.defineNodeNamesProperty(c,b,{attr:{set:function(a){this.setAttribute(b,a);d.set&&d.set.call(this,!0)},get:function(){return null==this.getAttribute(b)?o:b}},removeAttr:{value:function(){this.removeAttribute(b);d.set&&d.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:d.initAttr||!1})},contentAttr:function(a,b,d){if(a.nodeName){if(d===o)return a=a.attributes[b]||{},d=a.specified?a.value:null,null==d?o:d;"boolean"==typeof d?d?a.setAttribute(b,b):
a.removeAttribute(b):a.setAttribute(b,d)}},activeLang:function(){var c=[],b={},d,e,f=/:\/\/|^\.*\//,k=function(b,c,d){return c&&d&&-1!==a.inArray(c,d.availabeLangs||[])?(b.loading=!0,d=d.langSrc,f.test(d)||(d=g.cfg.basePath+d),g.loader.loadScript(d+c+".js",function(){b.langObj[c]?(b.loading=!1,v(b,!0)):a(function(){b.langObj[c]&&v(b,!0);b.loading=!1})}),!0):!1},s=function(a){b[a]&&b[a].forEach(function(a){a.callback()})},v=function(a,b){if(a.activeLang!=d&&a.activeLang!==e){var c=t[a.module].options;
if(a.langObj[d]||e&&a.langObj[e])a.activeLang=d,a.callback(a.langObj[d]||a.langObj[e],d),s(a.module);else if(!b&&!k(a,d,c)&&!k(a,e,c)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],d),s(a.module)}};return function(f){if("string"==typeof f&&f!==d)d=f,e=d.split("-")[0],d==e&&(e=!1),a.each(c,function(a,b){v(b)});else if("object"==typeof f)if(f.register)b[f.register]||(b[f.register]=[]),b[f.register].push(f),f.callback();else{if(!f.activeLang)f.activeLang="";c.push(f);v(f)}return d}}()});
a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,b){g[a]=function(a,c,e,f){"string"==typeof a&&(a=a.split(j));var s={};a.forEach(function(a){s[a]=g[b](a,c,e,f)});return s}});g.isReady("webshimLocalization",!0)});
(function(a,g){var i=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<i)&&(!a.browser.msie||12>i&&7<i)){var m={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},o=function(a,g){a.getAttribute("role")||a.setAttribute("role",g)};a.webshims.addReady(function(i,j){a.each(m,function(g,f){for(var l=a(g,i).add(j.filter(g)),m=0,n=l.length;m<n;m++)o(l[m],f)});if(i===g){var r=g.getElementsByTagName("header")[0],n=g.getElementsByTagName("footer"),q=n.length;
r&&!a(r).closest("section, article")[0]&&o(r,"banner");q&&(r=n[q-1],a(r).closest("section, article")[0]||o(r,"contentinfo"))}})}})(jQuery,document);
(function(a,g,i){var m=g.audio&&g.video,o=!1,t=i.cfg.mediaelement,j=i.bugs,r=function(){i.ready("mediaelement-swf",function(){if(!i.mediaelement.createSWF)i.modules["mediaelement-swf"].test=a.noop,i.reTest(["mediaelement-swf"],m)})},n;if(m){var q=document.createElement("video");g.videoBuffered="buffered"in q;o="loop"in q;i.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));g.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{f:"mediaelement",
test:g.videoBuffered,d:["dom-support"]}),i.reTest("mediaelement-native-fix"))}if(m&&!t.preferFlash){var u=function(f){var g=f.target.parentNode;!t.preferFlash&&(a(f.target).is("audio, video")||g&&a("source:last",g)[0]==f.target)&&i.ready("DOM mediaelement",function(){n&&r();i.ready("WINDOWLOAD mediaelement-swf",function(){setTimeout(function(){n&&!t.preferFlash&&i.mediaelement.createSWF&&!a(f.target).closest("audio, video").is(".nonnative-api-active")?(t.preferFlash=!0,document.removeEventListener("error",
u,!0),a("audio, video").mediaLoad(),i.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+f.target.src)):n||document.removeEventListener("error",u,!0)},20)})})};document.addEventListener("error",u,!0);a("audio, video").each(function(){this.error&&u({target:this})})}j.track=!1;g.track&&function(){if(!j.track)j.track="number"!=typeof a("<track />")[0].readyState;if(!j.track)try{new TextTrackCue(2,3,"")}catch(f){j.track=!0}var g=i.cfg.track,m=function(f){a(f.target).filter("track").each(n)},
n=function(){if(j.track||!g.override&&3==a.prop(this,"readyState"))g.override=!0,i.reTest("track"),document.removeEventListener("error",m,!0),this&&a.nodeName(this,"track")?i.error("track support was overwritten. Please check your vtt including your vtt mime-type"):i.info("track support was overwritten. due to bad browser support")},o=function(){document.addEventListener("error",m,!0);j.track?n():a("track").each(n)};g.override||(i.isReady("track")?o():a(o))}();i.register("mediaelement-core",function(a,
l,i,u,q){n=swfobject.hasFlashPlayerVersion("9.0.115");var p=l.mediaelement,e=function(b,c){var b=a(b),d={src:b.attr("src")||"",elem:b,srcProp:b.prop("src")};if(!d.src)return d;var e=b.attr("type");if(e)d.type=e,d.container=a.trim(e.split(";")[0]);else if(c||(c=b[0].nodeName.toLowerCase(),"source"==c&&(c=(b.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e=p.getTypeForSrc(d.src,c))d.type=e,d.container=e;if(e=b.attr("media"))d.media=e;return d},k=!n&&"postMessage"in i&&m,A=
function(){var b;return function(){!b&&k&&(b=!0,l.loader.loadScript("https://www.youtube.com/player_api"),a(function(){l.polyfill("mediaelement-yt")}))}}(),c=function(){n?r():A()};l.addPolyfill("mediaelement-yt",{test:!k,d:["dom-support"]});p.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv",
"f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};p.mimeTypes.source=a.extend({},p.mimeTypes.audio,p.mimeTypes.video);p.getTypeForSrc=function(b,c){if(-1!=b.indexOf("youtube.com/watch?")||
-1!=b.indexOf("youtube.com/v/"))return"video/youtube";var b=b.split("?")[0].split("."),b=b[b.length-1],d;a.each(p.mimeTypes[c],function(a,c){if(-1!==c.indexOf(b))return d=a,!1});return d};p.srces=function(b,c){b=a(b);if(c)b.removeAttr("src").removeAttr("type").find("source").remove(),a.isArray(c)||(c=[c]),c.forEach(function(a){var c=u.createElement("source");"string"==typeof a&&(a={src:a});c.setAttribute("src",a.src);a.type&&c.setAttribute("type",a.type);a.media&&c.setAttribute("media",a.media);b.append(c)});
else{var c=[],d=b[0].nodeName.toLowerCase(),h=e(b,d);h.src?c.push(h):a("source",b).each(function(){h=e(this,d);h.src&&c.push(h)});return c}};a.fn.loadMediaSrc=function(b,c){return this.each(function(){c!==q&&(a(this).removeAttr("poster"),c&&a.attr(this,"poster",c));p.srces(this,b);a(this).mediaLoad()})};p.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
p.canThirdPlaySrces=function(b,c){var d="";if(n||k)b=a(b),c=c||p.srces(b),a.each(c,function(a,b){if(b.container&&b.src&&(n&&-1!=p.swfMimeTypes.indexOf(b.container)||k&&"video/youtube"==b.container))return d=b,!1});return d};var b={};p.canNativePlaySrces=function(c,d){var e="";if(m){var c=a(c),h=(c[0].nodeName||"").toLowerCase();if(!b[h])return e;d=d||p.srces(c);a.each(d,function(a,d){if(d.type&&b[h].prop._supvalue.call(c[0],d.type))return e=d,!1})}return e};p.setError=function(b,c){c||(c="can't play sources");
a(b).pause().data("mediaerror",c);l.warn("mediaelementError: "+c);setTimeout(function(){a(b).data("mediaerror")&&a(b).trigger("mediaerror")},1)};var d=function(){var a;return function(b,e,h){l.ready(n?"mediaelement-swf":"mediaelement-yt",function(){p.createSWF?p.createSWF(b,e,h):a||(a=!0,c(),d(b,e,h))});!a&&k&&!p.createSWF&&A()}}(),h=function(a,b,c,e,k){c||!1!==c&&b&&"third"==b.isActive?(c=p.canThirdPlaySrces(a,e))?d(a,c,b):k?p.setError(a,!1):h(a,b,!1,e,!0):(c=p.canNativePlaySrces(a,e))?b&&"third"==
b.isActive&&p.setActive(a,"html5",b):k?(p.setError(a,!1),b&&"third"==b.isActive&&p.setActive(a,"html5",b)):h(a,b,!0,e,!0)},w=/^(?:embed|object|datalist)$/i,C=function(b,c){var d=l.data(b,"mediaelementBase")||l.data(b,"mediaelementBase",{}),e=p.srces(b),k=b.parentNode;clearTimeout(d.loadTimer);a.data(b,"mediaerror",!1);if(e.length&&k&&!(1!=k.nodeType||w.test(k.nodeName||"")))c=c||l.data(b,"mediaelement"),h(b,c,t.preferFlash||q,e)};a(u).bind("ended",function(b){var c=l.data(b.target,"mediaelement");
(!o||c&&"html5"!=c.isActive||a.prop(b.target,"loop"))&&setTimeout(function(){!a.prop(b.target,"paused")&&a.prop(b.target,"loop")&&a(b.target).prop("currentTime",0).play()},1)});o||l.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(c){var d=l.defineNodeNameProperty(c,"load",{prop:{value:function(){var a=l.data(this,"mediaelement");C(this,a);m&&(!a||"html5"==a.isActive)&&d.prop._supvalue&&d.prop._supvalue.apply(this,arguments)}}});b[c]=l.defineNodeNameProperty(c,
"canPlayType",{prop:{value:function(d){var e="";m&&b[c].prop._supvalue&&(e=b[c].prop._supvalue.call(this,d),"no"==e&&(e=""));!e&&n&&(d=a.trim((d||"").split(";")[0]),-1!=p.swfMimeTypes.indexOf(d)&&(e="maybe"));return e}}})});l.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=l.data(a,"mediaelementBase")||l.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){C(a);a=null},9)}});i=function(){l.addReady(function(b,c){a("video, audio",
b).add(c.filter("video, audio")).each(function(){a.browser.msie&&8<l.browserVersion&&a.prop(this,"paused")&&!a.prop(this,"readyState")&&a(this).is('audio[preload="none"][controls]:not([autoplay])')?a(this).prop("preload","metadata").mediaLoad():C(this);if(m){var b,c,d=this,e=function(){var b=a.prop(d,"buffered");if(b){for(var c="",e=0,h=b.length;e<h;e++)c+=b.end(e);return c}},h=function(){var b=e();b!=c&&(c=b,a(d).triggerHandler("progress"))};a(this).bind("play loadstart progress",function(a){"progress"==
a.type&&(c=e());clearTimeout(b);b=setTimeout(h,999)}).bind("emptied stalled mediaerror abort suspend",function(a){"emptied"==a.type&&(c=!1);clearTimeout(b)})}})})};g.track&&!j.track&&l.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}});m?(l.isReady("mediaelement-core",!0),i(),l.ready("WINDOWLOAD mediaelement",c)):l.ready("mediaelement-swf",i);a(function(){l.loader.loadList(["track-ui"])})})})(jQuery,Modernizr,jQuery.webshims);
(function(a){var g=window.Modernizr,i=a.webshims,m=i.bugs,o=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input type="date" required="" name="a" /><input type="submit" /></form>'),t=function(){if(o[0].querySelector)try{m.findRequired=!o[0].querySelector("select:required")}catch(a){m.findRequired=!1}};m.findRequired=!1;m.validationMessage=!1;m.valueAsNumberSet=!1;i.capturingEventPrevented=function(f){if(!f._isPolyfilled){var g=f.isDefaultPrevented,
i=f.preventDefault;f.preventDefault=function(){clearTimeout(a.data(f.target,f.type+"DefaultPrevented"));a.data(f.target,f.type+"DefaultPrevented",setTimeout(function(){a.removeData(f.target,f.type+"DefaultPrevented")},30));return i.apply(this,arguments)};f.isDefaultPrevented=function(){return!(!g.apply(this,arguments)&&!a.data(f.target,f.type+"DefaultPrevented"))};f._isPolyfilled=!0}};if(!g.formvalidation||m.bustedValidity)t();else if(i.capturingEvents(["input"]),i.capturingEvents(["invalid"],!0),
g.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var j=a("input",o).eq(0),r,n=function(a){i.loader.loadList(["dom-extend"]);i.ready("dom-extend",a)},q=function(f){var l=["form-extend","form-message","form-native-fix"];f&&(f.preventDefault(),f.stopImmediatePropagation());clearTimeout(r);setTimeout(function(){o&&(o.remove(),o=j=null)},9);if(!g.bugfreeformvalidation)i.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),i.modules["form-extend"].test=a.noop;i.isReady("form-number-date-api")&&
l.push("form-number-date-api");i.reTest(l);if(j)try{j.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&n(function(){i.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(f){!f&&this&&a.prop(this,"value",a.prop(this,"value"))}});i.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(f){if(!f&&this)f=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(f)}})})}catch(m){}(a.browser.opera||window.testGoodWithFix)&&
n(function(){var f=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(g){var l=i.defineNodeNameProperty(g,"checkValidity",{prop:{value:function(){i.fromSubmit||a(this).bind("invalid.checkvalidity",f);i.fromCheckValidity=!0;var e=l.prop._supvalue.apply(this,arguments);i.fromSubmit||a(this).unbind("invalid.checkvalidity",f);i.fromCheckValidity=!1;return e}}})})})};o.appendTo("head");if(window.opera||window.testGoodWithFix){t();m.validationMessage=!j.prop("validationMessage");
if((g.inputtypes||{}).date){try{j.prop("valueAsNumber",0)}catch(u){}m.valueAsNumberSet="1970-01-01"!=j.prop("value")}j.prop("value","")}o.bind("submit",function(a){g.bugfreeformvalidation=!1;q(a)});r=setTimeout(function(){o&&o.triggerHandler("submit")},9);a("input, select",o).bind("invalid",q).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click");a.browser.webkit&&g.bugfreeformvalidation&&!i.bugs.bustedValidity&&function(){var f=/^(?:textarea|input)$/i,
g=!1;document.addEventListener("contextmenu",function(a){f.test(a.target.nodeName||"")&&(g=a.target.form)&&setTimeout(function(){g=!1},1)},!1);a(window).bind("invalid",function(a){if(a.originalEvent&&g&&g==a.target.form)a.wrongWebkitInvalid=!0,a.stopImmediatePropagation()})}()}})(jQuery);
jQuery.webshims.register("form-core",function(a,g,i,m,o,t){var j={radio:1},r={checkbox:1,radio:1},n=a([]),q=g.bugs,u=function(e){var e=a(e),k,f;k=n;if(j[e[0].type])f=e.prop("form"),k=(k=e[0].name)?f?a(f[k]):a(m.getElementsByName(k)).filter(function(){return!a.prop(this,"form")}):e,k=k.filter('[type="radio"]');return k},f=g.getContentValidationMessage=function(e,k,f){var c=a(e).data("errormessage")||e.getAttribute("x-moz-errormessage")||"";f&&c[f]&&(c=c[f]);"object"==typeof c&&(k=k||a.prop(e,"validity")||
{valid:1},k.valid||a.each(k,function(a,d){if(d&&"valid"!=a&&c[a])return c=c[a],!1}));if("object"==typeof c)c=c.defaultMessage;return c||""},l={number:1,range:1,date:1};a.extend(a.expr[":"],{"valid-element":function(e){return!(!a.prop(e,"willValidate")||!(a.prop(e,"validity")||{valid:1}).valid)},"invalid-element":function(e){return!(!a.prop(e,"willValidate")||(a.prop(e,"validity")||{valid:1}).valid)},"required-element":function(e){return!(!a.prop(e,"willValidate")||!a.prop(e,"required"))},"optional-element":function(e){return!!(a.prop(e,
"willValidate")&&!1===a.prop(e,"required"))},"in-range":function(e){if(!l[a.prop(e,"type")]||!a.prop(e,"willValidate"))return!1;e=a.prop(e,"validity");return!(!e||e.rangeOverflow||e.rangeUnderflow)},"out-of-range":function(e){if(!l[a.prop(e,"type")]||!a.prop(e,"willValidate"))return!1;e=a.prop(e,"validity");return!(!e||!e.rangeOverflow&&!e.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(e){a.expr[":"][e]=a.expr.filters[e+"-element"]});a.expr[":"].focus=function(a){try{var k=
a.ownerDocument;return a===k.activeElement&&(!k.hasFocus||k.hasFocus())}catch(f){}return!1};var y=a.event.customEvent||{};(q.bustedValidity||q.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var e=a.find,f=a.find.matchesSelector,g=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,c=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,d=function(d){var h=arguments,h=a.call(h,1,h.length);h.unshift(d.replace(g,c));return e.apply(this,
h)},h;for(h in e)e.hasOwnProperty(h)&&(d[h]=e[h]);return d}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",m.documentElement))a.find.matchesSelector=function(a,d){d=d.replace(g,c);return f.call(this,a,d)}}();var x=a.prop,B={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(e,f,g){var c=x.apply(this,arguments);if(e&&"form"in e&&B[f]&&g!==o&&a(e).hasClass("form-ui-invalid")&&(a.prop(e,"validity")||{valid:1}).valid)a(e).getShadowElement().removeClass("form-ui-invalid"),
"checked"==f&&g&&u(e).not(e).removeClass("form-ui-invalid").removeAttr("aria-invalid");return c};var p=function(e,f){var g;a.each(e,function(c,b){if(b)return g="customError"==c?a.prop(f,"validationMessage"):c,!1});return g};a(m).bind(t.validityUIEvents||"focusout change refreshvalidityui",function(e){var f,g;if(e.target&&(f=a(e.target).getNativeElement()[0],"submit"!=f.type&&a.prop(f,"willValidate"))){g=a.data(f,"webshimsswitchvalidityclass");var c=function(){var b=a.prop(f,"validity"),c=a(f).getShadowElement(),
h,g,i,l;a(f).trigger("refreshCustomValidityRules");b.valid?c.hasClass("form-ui-valid")||(h="form-ui-valid",g="form-ui-invalid",l="changedvaliditystate",i="changedvalid",r[f.type]&&f.checked&&u(f).not(f).removeClass(g).addClass(h).removeAttr("aria-invalid"),a.removeData(f,"webshimsinvalidcause")):(b=p(b,f),a.data(f,"webshimsinvalidcause")!=b&&(a.data(f,"webshimsinvalidcause",b),l="changedvaliditystate"),c.hasClass("form-ui-invalid")||(h="form-ui-invalid",g="form-ui-valid",r[f.type]&&!f.checked&&u(f).not(f).removeClass(g).addClass(h),
i="changedinvalid"));h&&(c.addClass(h).removeClass(g),setTimeout(function(){a(f).trigger(i)},0));l&&setTimeout(function(){a(f).trigger(l)},0);a.removeData(e.target,"webshimsswitchvalidityclass")};g&&clearTimeout(g);"refreshvalidityui"==e.type?c():a.data(e.target,"webshimsswitchvalidityclass",setTimeout(c,9))}});y.changedvaliditystate=!0;y.refreshCustomValidityRules=!0;y.changedvalid=!0;y.changedinvalid=!0;y.refreshvalidityui=!0;g.triggerInlineForm=function(e,f){a(e).trigger(f)};g.modules["form-core"].getGroupElements=
u;q=function(){g.scrollRoot=a.browser.webkit||"BackCompat"==m.compatMode?a(m.body):a(m.documentElement)};q();g.ready("DOM",q);g.getRelOffset=function(e,f){var e=a(e),g=a(f).offset(),c;a.swap(a(e)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){c=e.offset()});g.top-=c.top;g.left-=c.left;return g};g.validityAlert=function(){var e=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",k,l=!1,c=!1,b,d={hideDelay:5E3,showFor:function(e,f,g,m){d._create();var e=a(e),n=
a(e).getShadowElement(),j=d.getOffsetFromBody(n);d.clear();m?this.hide():(this.getMessage(e,f),this.position(n,j),k.css({fontSize:e.css("fontSize"),fontFamily:e.css("fontFamily")}),this.show(),this.hideDelay&&(l=setTimeout(b,this.hideDelay)),a(i).bind("resize.validityalert",function(){clearTimeout(c);c=setTimeout(function(){d.position(n)},9)}));g||this.setFocus(n,j)},getOffsetFromBody:function(a){return g.getRelOffset(k,a)},setFocus:function(c,d){var f=a(c).getShadowFocusElement(),l=g.scrollRoot.scrollTop(),
i=(d||f.offset()).top-30,n;g.getID&&"label"==e&&k.attr("for",g.getID(f));l>i&&(g.scrollRoot.animate({scrollTop:i-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(l-i)),80)}),n=!0);try{f[0].focus()}catch(j){}n&&(g.scrollRoot.scrollTop(l),setTimeout(function(){g.scrollRoot.scrollTop(l)},0));setTimeout(function(){a(m).bind("focusout.validityalert",b)},10)},getMessage:function(b,c){c||(c=f(b[0])||b.prop("validationMessage"));c?a("span.va-box",k).text(c):this.hide()},position:function(b,c){c=c?a.extend({},
c):d.getOffsetFromBody(b);c.top+=b.outerHeight();k.css(c)},show:function(){"none"===k.css("display")&&k.css({opacity:0}).show();k.addClass("va-visible").fadeTo(400,1)},hide:function(){k.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(l);a(m).unbind(".validityalert");a(i).unbind(".validityalert");k.stop().removeAttr("for")},_create:function(){if(!k)k=d.errorBubble=a("<"+e+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
e+">").css({position:"absolute",display:"none"}),g.ready("DOM",function(){k.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&k.bgIframe()})}};b=a.proxy(d,"hide");return d}();(function(){var e,f=[],g;a(m).bind("invalid",function(c){if(!c.wrongWebkitInvalid){var b=a(c.target),d=b.getShadowElement();d.hasClass("form-ui-invalid")||(d.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(c.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!e)e=a.Event("firstinvalid"),e.isInvalidUIPrevented=c.isDefaultPrevented,d=a.Event("firstinvalidsystem"),a(m).triggerHandler(d,{element:c.target,form:c.target.form,isInvalidUIPrevented:c.isDefaultPrevented}),b.trigger(e);e&&e.isDefaultPrevented()&&c.preventDefault();f.push(c.target);c.extraData="fix";clearTimeout(g);g=setTimeout(function(){var b={type:"lastinvalid",cancelable:!1,invalidlist:a(f)};e=!1;f=[];a(c.target).trigger(b,b)},9);d=b=null}})})();a.fn.getErrorMessage=function(){var e="",
g=this[0];g&&(e=f(g)||a.prop(g,"customValidationMessage")||a.prop(g,"validationMessage"));return e};t.replaceValidationUI&&g.ready("DOM forms",function(){a(m).bind("firstinvalid",function(e){e.isInvalidUIPrevented()||(e.preventDefault(),a.webshims.validityAlert.showFor(e.target,a(e.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,g,i,m,o,t){var j=g.validityMessages,i=t.overrideMessages||t.customMessages?["customValidationMessage"]:[];j.en=a.extend(!0,{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},j.en||j["en-US"]||{});["select","radio"].forEach(function(a){j.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){j.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date",
"time","datetime-local"].forEach(function(a){j.en.rangeOverflow[a]="Value must be at or before {%max}."});j["en-US"]=j["en-US"]||j.en;j[""]=j[""]||j["en-US"];j.de=a.extend(!0,{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}},j.de||{});["select","radio"].forEach(function(a){j.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){j.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){j.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});
var r=j[""];g.createValidationMessage=function(i,m){var j=r[m];j&&"string"!==typeof j&&(j=j[a.prop(i,"type")]||j[(i.nodeName||"").toLowerCase()]||j.defaultMessage);j&&"value,min,max,title,maxlength,label".split(",").forEach(function(f){if(-1!==j.indexOf("{%"+f)){var l=("label"==f?a.trim(a('label[for="'+i.id+'"]',i.form).text()).replace(/\*$|:$/,""):a.attr(i,f))||"";"patternMismatch"==m&&"title"==f&&!l&&g.error("no title for patternMismatch provided. Always add a title attribute.");j=j.replace("{%"+
f+"}",l);"value"==f&&(j=j.replace("{%valueLen}",l.length))}});return j||""};(g.bugs.validationMessage||!Modernizr.formvalidation||g.bugs.bustedValidity)&&i.push("validationMessage");g.activeLang({langObj:j,module:"form-core",callback:function(a){r=a}});i.forEach(function(i){g.defineNodeNamesProperty(["fieldset","output","button"],i,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(j){var m=g.defineNodeNameProperty(j,i,{prop:{get:function(){var f=this,i="";if(!a.prop(f,
"willValidate"))return i;var j=a.prop(f,"validity")||{valid:1};if(j.valid||(i=g.getContentValidationMessage(f,j)))return i;if(j.customError&&f.nodeName&&(i=Modernizr.formvalidation&&!g.bugs.bustedValidity&&m.prop._supget?m.prop._supget.call(f):g.data(f,"customvalidationMessage")))return i;a.each(j,function(a,j){if("valid"!=a&&j&&(i=g.createValidationMessage(f,a)))return!1});return i||""},writeable:!1}})})})});
