webshims.register("track-ui",function(e,t){"use strict";function n(e,t){var n=!0,a=0,i=e.length;if(i!=t.length)n=!1;else for(;i>a;a++)if(e[a]!=t[a]){n=!1;break}return n}var a=t.cfg.track,i={subtitles:1,captions:1,descriptions:1},r=t.mediaelement,o=function(){return!a.override&&Modernizr.track},s={update:function(a,i){a.activeCues.length?n(a.displayedActiveCues,a.activeCues)||(a.displayedActiveCues=a.activeCues,a.trackDisplay||(a.trackDisplay=e('<div class="cue-display"><span class="description-cues" aria-live="assertive" /></div>').insertAfter(i),this.addEvents(a,i),t.docObserve()),a.hasDirtyTrackDisplay&&i.triggerHandler("forceupdatetrackdisplay"),this.showCues(a)):this.hide(a)},showCues:function(t){var n=e('<span class="cue-wrapper" />');e.each(t.displayedActiveCues,function(a,i){var r=i.id?'id="cue-id-'+i.id+'"':"",o=e('<span class="cue-line"><span '+r+' class="cue" /></span>').find("span").html(i.getCueAsHTML()).end();"descriptions"==i.track.kind?setTimeout(function(){e("span.description-cues",t.trackDisplay).html(o)},0):n.prepend(o)}),e("span.cue-wrapper",t.trackDisplay).remove(),t.trackDisplay.append(n)},addEvents:function(e,t){if(a.positionDisplay){var n,i=function(n){if(e.displayedActiveCues.length||n===!0){e.trackDisplay.css({display:"none"});var a=t.getShadowElement();a.offsetParent();var i=a.innerHeight(),r=a.innerWidth(),o=a.position();e.trackDisplay.css({left:o.left,width:r,height:i-45,top:o.top,display:"block"}),e.trackDisplay.css("fontSize",Math.max(Math.round(i/30),7)),e.hasDirtyTrackDisplay=!1}else e.hasDirtyTrackDisplay=!0},r=function(){clearTimeout(n),n=setTimeout(i,0)},o=function(){i(!0)};t.on("playerdimensionchange mediaelementapichange updatetrackdisplay updatemediaelementdimensions swfstageresize",r),t.on("forceupdatetrackdisplay",o).onWSOff("updateshadowdom",r),o()}},hide:function(t){t.trackDisplay&&t.displayedActiveCues.length&&(t.displayedActiveCues=[],e("span.cue-wrapper",t.trackDisplay).remove(),e("span.description-cues",t.trackDisplay).empty())}};if(e.extend(e.event.customEvent,{updatetrackdisplay:!0,forceupdatetrackdisplay:!0}),r.trackDisplay=s,!r.createCueList){var u={getCueById:function(e){for(var t=null,n=0,a=this.length;a>n;n++)if(this[n].id===e){t=this[n];break}return t}};r.createCueList=function(){return e.extend([],u)}}r.getActiveCue=function(t,n,o,s){t._lastFoundCue||(t._lastFoundCue={index:0,time:0}),!Modernizr.track||a.override||t._shimActiveCues||(t._shimActiveCues=r.createCueList());for(var u,l,c=0;t.shimActiveCues.length>c;c++)l=t.shimActiveCues[c],l.startTime>o||o>l.endTime?(t.shimActiveCues.splice(c,1),c--,l.pauseOnExit&&e(n).pause(),e(t).triggerHandler("cuechange"),e(l).triggerHandler("exit")):"showing"==t.mode&&i[t.kind]&&-1==e.inArray(l,s.activeCues)&&s.activeCues.push(l);for(u=t.cues.length,c=o>t._lastFoundCue.time?t._lastFoundCue.index:0;u>c&&(l=t.cues[c],o>=l.startTime&&l.endTime>=o&&-1==e.inArray(l,t.shimActiveCues)&&(t.shimActiveCues.push(l),"showing"==t.mode&&i[t.kind]&&s.activeCues.push(l),e(t).triggerHandler("cuechange"),e(l).triggerHandler("enter"),t._lastFoundCue.time=o,t._lastFoundCue.index=c),!(l.startTime>o));c++);},o()&&function(){var n,a=function(t){setTimeout(function(){n=!0,e(t).triggerHandler("updatetrackdisplay"),n=!1},9)},i=function(i,r,s){var u,l="_sup"+s,c={prop:{}};c.prop[s]=function(){return!n&&o()&&a(e(this).closest("audio, video")),u.prop[l].apply(this,arguments)},u=t.defineNodeNameProperty(i,r,c)};i("track","track","get"),["audio","video"].forEach(function(e){i(e,"textTracks","get"),i("nodeName","addTextTrack","value")})}(),t.addReady(function(n,a){e("video, audio",n).add(a.filter("video, audio")).filter(function(){return t.implement(this,"trackui")}).each(function(){var n,a,i,u=e(this),l=function(){var e,i;if(a&&n||(a=u.prop("textTracks"),n=t.data(u[0],"mediaelementBase")||t.data(u[0],"mediaelementBase",{}),n.displayedActiveCues||(n.displayedActiveCues=[])),a&&(i=u.prop("currentTime"),i||0===i)){n.activeCues=[];for(var o=0,l=a.length;l>o;o++)e=a[o],"disabled"!=e.mode&&e.cues&&e.cues.length&&r.getActiveCue(e,u,i,n);s.update(n,u)}},c=function(e){clearTimeout(i),e&&"timeupdate"==e.type?(l(),setTimeout(c,90)):i=setTimeout(l,9)},p=function(){u.off(".trackview").on("play.trackview timeupdate.trackview updatetrackdisplay.trackview",c)};o()?u.on("mediaelementapichange trackapichange",function(){!o()||u.is(".nonnative-api-active")?p():(a=u.prop("textTracks"),n=t.data(u[0],"mediaelementBase")||t.data(u[0],"mediaelementBase",{}),e.each(a,function(e,t){t._shimActiveCues&&delete t._shimActiveCues}),s.hide(n),u.unbind(".trackview"))}):p()})})});