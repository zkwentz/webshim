document.createElement("canvas").getContext||function(){function e(){return this.context_||(this.context_=new l(this))}function t(e,t){var n=N.call(arguments,2);return function(){return e.apply(t,n.concat(N.call(arguments)))}}function n(e){var t=e.srcElement;switch(e.propertyName){case"width":t.style.width=t.attributes.width.nodeValue+"px",t.getContext().clearRect();break;case"height":t.style.height=t.attributes.height.nodeValue+"px",t.getContext().clearRect()}}function r(e){var t=e.srcElement;t.firstChild&&(t.firstChild.style.width=t.clientWidth+"px",t.firstChild.style.height=t.clientHeight+"px")}function a(){return[[1,0,0],[0,1,0],[0,0,1]]}function i(e,t){for(var n=a(),r=0;3>r;r++)for(var i=0;3>i;i++){for(var o=0,s=0;3>s;s++)o+=e[r][s]*t[s][i];n[r][i]=o}return n}function o(e,t){t.fillStyle=e.fillStyle,t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.lineWidth=e.lineWidth,t.miterLimit=e.miterLimit,t.shadowBlur=e.shadowBlur,t.shadowColor=e.shadowColor,t.shadowOffsetX=e.shadowOffsetX,t.shadowOffsetY=e.shadowOffsetY,t.strokeStyle=e.strokeStyle,t.globalAlpha=e.globalAlpha,t.arcScaleX_=e.arcScaleX_,t.arcScaleY_=e.arcScaleY_,t.lineScale_=e.lineScale_}function s(e){var t,n=1;if(e+="","rgb"==e.substring(0,3)){var r=e.indexOf("(",3),a=e.indexOf(")",r+1),i=e.substring(r+1,a).split(",");t="#";for(var o=0;3>o;o++)t+=k[Number(i[o])];4==i.length&&"a"==e.substr(3,1)&&(n=i[3])}else t=e;return{color:t,alpha:n}}function u(e){switch(e){case"butt":return"flat";case"round":return"round";case"square":default:return"square"}}function l(e){this.m_=a(),this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.strokeStyle="#000",this.fillStyle="#000",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this.miterLimit=1*T,this.globalAlpha=1,this.canvas=e;var t=e.ownerDocument.createElement("div");t.style.width=e.clientWidth+"px",t.style.height=e.clientHeight+"px",t.style.overflow="hidden",t.style.position="absolute",e.appendChild(t),this.element_=t,this.arcScaleX_=1,this.arcScaleY_=1,this.lineScale_=1}function c(e,t,n,r){e.currentPath_.push({type:"bezierCurveTo",cp1x:t.x,cp1y:t.y,cp2x:n.x,cp2y:n.y,x:r.x,y:r.y}),e.currentX_=r.x,e.currentY_=r.y}function p(e){for(var t=0;3>t;t++)for(var n=0;2>n;n++)if(!isFinite(e[t][n])||isNaN(e[t][n]))return!1;return!0}function d(e,t,n){if(p(t)&&(e.m_=t,n)){var r=t[0][0]*t[1][1]-t[0][1]*t[1][0];e.lineScale_=w(b(r))}}function f(e){this.type_=e,this.x0_=0,this.y0_=0,this.r0_=0,this.x1_=0,this.y1_=0,this.r1_=0,this.colors_=[]}function h(){}var m=Math,v=m.round,g=m.sin,y=m.cos,b=m.abs,w=m.sqrt,T=10,x=T/2,N=Array.prototype.slice,E={init:function(e){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var n=e||document;n.createElement("canvas"),n.attachEvent("onreadystatechange",t(this.init_,this,n))}},init_:function(e){if(e.namespaces.g_vml_||e.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML"),e.namespaces.g_o_||e.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML"),!e.styleSheets.ex_canvas_){var t=e.createStyleSheet();t.owningElement.id="ex_canvas_",t.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"}for(var n=e.getElementsByTagName("canvas"),r=0;n.length>r;r++)this.initElement(n[r])},initElement:function(t){if(!t.getContext){t.getContext=e,t.innerHTML="",t.attachEvent("onpropertychange",n),t.attachEvent("onresize",r);var a=t.attributes;a.width&&a.width.specified?t.style.width=a.width.nodeValue+"px":t.width=t.clientWidth,a.height&&a.height.specified?t.style.height=a.height.nodeValue+"px":t.height=t.clientHeight}return t}};E.init();for(var k=[],A=0;16>A;A++)for(var C=0;16>C;C++)k[16*A+C]=A.toString(16)+C.toString(16);var S=l.prototype;S.clearRect=function(){this.element_.innerHTML=""},S.beginPath=function(){this.currentPath_=[]},S.moveTo=function(e,t){var n=this.getCoords_(e,t);this.currentPath_.push({type:"moveTo",x:n.x,y:n.y}),this.currentX_=n.x,this.currentY_=n.y},S.lineTo=function(e,t){var n=this.getCoords_(e,t);this.currentPath_.push({type:"lineTo",x:n.x,y:n.y}),this.currentX_=n.x,this.currentY_=n.y},S.bezierCurveTo=function(e,t,n,r,a,i){var o=this.getCoords_(a,i),s=this.getCoords_(e,t),u=this.getCoords_(n,r);c(this,s,u,o)},S.quadraticCurveTo=function(e,t,n,r){var a=this.getCoords_(e,t),i=this.getCoords_(n,r),o={x:this.currentX_+2/3*(a.x-this.currentX_),y:this.currentY_+2/3*(a.y-this.currentY_)},s={x:o.x+(i.x-this.currentX_)/3,y:o.y+(i.y-this.currentY_)/3};c(this,o,s,i)},S.arc=function(e,t,n,r,a,i){n*=T;var o=i?"at":"wa",s=e+y(r)*n-x,u=t+g(r)*n-x,l=e+y(a)*n-x,c=t+g(a)*n-x;s!=l||i||(s+=.125);var p=this.getCoords_(e,t),d=this.getCoords_(s,u),f=this.getCoords_(l,c);this.currentPath_.push({type:o,x:p.x,y:p.y,radius:n,xStart:d.x,yStart:d.y,xEnd:f.x,yEnd:f.y})},S.rect=function(e,t,n,r){this.moveTo(e,t),this.lineTo(e+n,t),this.lineTo(e+n,t+r),this.lineTo(e,t+r),this.closePath()},S.strokeRect=function(e,t,n,r){var a=this.currentPath_;this.beginPath(),this.moveTo(e,t),this.lineTo(e+n,t),this.lineTo(e+n,t+r),this.lineTo(e,t+r),this.closePath(),this.stroke(),this.currentPath_=a},S.fillRect=function(e,t,n,r){var a=this.currentPath_;this.beginPath(),this.moveTo(e,t),this.lineTo(e+n,t),this.lineTo(e+n,t+r),this.lineTo(e,t+r),this.closePath(),this.fill(),this.currentPath_=a},S.createLinearGradient=function(e,t,n,r){var a=new f("gradient");return a.x0_=e,a.y0_=t,a.x1_=n,a.y1_=r,a},S.createRadialGradient=function(e,t,n,r,a,i){var o=new f("gradientradial");return o.x0_=e,o.y0_=t,o.r0_=n,o.x1_=r,o.y1_=a,o.r1_=i,o},S.drawImage=function(e){var t,n,r,a,i,o,s,u,l=e.runtimeStyle.width,c=e.runtimeStyle.height;e.runtimeStyle.width="auto",e.runtimeStyle.height="auto";var p=e.width,d=e.height;if(e.runtimeStyle.width=l,e.runtimeStyle.height=c,3==arguments.length)t=arguments[1],n=arguments[2],i=o=0,s=r=p,u=a=d;else if(5==arguments.length)t=arguments[1],n=arguments[2],r=arguments[3],a=arguments[4],i=o=0,s=p,u=d;else{if(9!=arguments.length)throw Error("Invalid number of arguments");i=arguments[1],o=arguments[2],s=arguments[3],u=arguments[4],t=arguments[5],n=arguments[6],r=arguments[7],a=arguments[8]}var f=this.getCoords_(t,n),h=[],g=10,y=10;if(h.push(" <g_vml_:group",' coordsize="',T*g,",",T*y,'"',' coordorigin="0,0"',' style="width:',g,"px;height:",y,"px;position:absolute;"),1!=this.m_[0][0]||this.m_[0][1]){var b=[];b.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",v(f.x/T),",","Dy=",v(f.y/T),"");var w=f,x=this.getCoords_(t+r,n),N=this.getCoords_(t,n+a),E=this.getCoords_(t+r,n+a);w.x=m.max(w.x,x.x,N.x,E.x),w.y=m.max(w.y,x.y,N.y,E.y),h.push("padding:0 ",v(w.x/T),"px ",v(w.y/T),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",b.join(""),", sizingmethod='clip');")}else h.push("top:",v(f.y/T),"px;left:",v(f.x/T),"px;");h.push(' ">','<g_vml_:image src="',e.src,'"',' style="width:',T*r,"px;"," height:",T*a,'px;"',' cropleft="',i/p,'"',' croptop="',o/d,'"',' cropright="',(p-i-s)/p,'"',' cropbottom="',(d-o-u)/d,'"'," />","</g_vml_:group>"),this.element_.insertAdjacentHTML("BeforeEnd",h.join(""))},S.stroke=function(e){var t=[],n=s(e?this.fillStyle:this.strokeStyle),r=n.color,a=n.alpha*this.globalAlpha,i=10,o=10;t.push("<g_vml_:shape",' filled="',!!e,'"',' style="position:absolute;width:',i,"px;height:",o,'px;"',' coordorigin="0 0" coordsize="',T*i," ",T*o,'"',' stroked="',!e,'"',' path="');for(var l={x:null,y:null},c={x:null,y:null},p=0;this.currentPath_.length>p;p++){var d,f=this.currentPath_[p];switch(f.type){case"moveTo":d=f,t.push(" m ",v(f.x),",",v(f.y));break;case"lineTo":t.push(" l ",v(f.x),",",v(f.y));break;case"close":t.push(" x "),f=null;break;case"bezierCurveTo":t.push(" c ",v(f.cp1x),",",v(f.cp1y),",",v(f.cp2x),",",v(f.cp2y),",",v(f.x),",",v(f.y));break;case"at":case"wa":t.push(" ",f.type," ",v(f.x-this.arcScaleX_*f.radius),",",v(f.y-this.arcScaleY_*f.radius)," ",v(f.x+this.arcScaleX_*f.radius),",",v(f.y+this.arcScaleY_*f.radius)," ",v(f.xStart),",",v(f.yStart)," ",v(f.xEnd),",",v(f.yEnd))}f&&((null==l.x||f.x<l.x)&&(l.x=f.x),(null==c.x||f.x>c.x)&&(c.x=f.x),(null==l.y||f.y<l.y)&&(l.y=f.y),(null==c.y||f.y>c.y)&&(c.y=f.y))}if(t.push(' ">'),e)if("object"==typeof this.fillStyle){var h=this.fillStyle,g=0,y={x:0,y:0},b=0,w=1;if("gradient"==h.type_){var x=h.x0_/this.arcScaleX_,N=h.y0_/this.arcScaleY_,E=h.x1_/this.arcScaleX_,k=h.y1_/this.arcScaleY_,A=this.getCoords_(x,N),C=this.getCoords_(E,k),S=C.x-A.x,_=C.y-A.y;g=180*Math.atan2(S,_)/Math.PI,0>g&&(g+=360),1e-6>g&&(g=0)}else{var A=this.getCoords_(h.x0_,h.y0_),D=c.x-l.x,M=c.y-l.y;y={x:(A.x-l.x)/D,y:(A.y-l.y)/M},D/=this.arcScaleX_*T,M/=this.arcScaleY_*T;var P=m.max(D,M);b=2*h.r0_/P,w=2*h.r1_/P-b}var O=h.colors_;O.sort(function(e,t){return e.offset-t.offset});for(var F=O.length,j=O[0].color,I=O[F-1].color,L=O[0].alpha*this.globalAlpha,W=O[F-1].alpha*this.globalAlpha,V=[],p=0;F>p;p++){var z=O[p];V.push(z.offset*w+b+" "+z.color)}t.push('<g_vml_:fill type="',h.type_,'"',' method="none" focus="100%"',' color="',j,'"',' color2="',I,'"',' colors="',V.join(","),'"',' opacity="',W,'"',' g_o_:opacity2="',L,'"',' angle="',g,'"',' focusposition="',y.x,",",y.y,'" />')}else t.push('<g_vml_:fill color="',r,'" opacity="',a,'" />');else{var R=this.lineScale_*this.lineWidth;1>R&&(a*=R),t.push("<g_vml_:stroke",' opacity="',a,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',u(this.lineCap),'"',' weight="',R,'px"',' color="',r,'" />')}t.push("</g_vml_:shape>"),this.element_.insertAdjacentHTML("beforeEnd",t.join(""))},S.fill=function(){this.stroke(!0)},S.closePath=function(){this.currentPath_.push({type:"close"})},S.getCoords_=function(e,t){var n=this.m_;return{x:T*(e*n[0][0]+t*n[1][0]+n[2][0])-x,y:T*(e*n[0][1]+t*n[1][1]+n[2][1])-x}},S.save=function(){var e={};o(this,e),this.aStack_.push(e),this.mStack_.push(this.m_),this.m_=i(a(),this.m_)},S.restore=function(){o(this.aStack_.pop(),this),this.m_=this.mStack_.pop()},S.translate=function(e,t){var n=[[1,0,0],[0,1,0],[e,t,1]];d(this,i(n,this.m_),!1)},S.rotate=function(e){var t=y(e),n=g(e),r=[[t,n,0],[-n,t,0],[0,0,1]];d(this,i(r,this.m_),!1)},S.scale=function(e,t){this.arcScaleX_*=e,this.arcScaleY_*=t;var n=[[e,0,0],[0,t,0],[0,0,1]];d(this,i(n,this.m_),!0)},S.transform=function(e,t,n,r,a,o){var s=[[e,t,0],[n,r,0],[a,o,1]];d(this,i(s,this.m_),!0)},S.setTransform=function(e,t,n,r,a,i){var o=[[e,t,0],[n,r,0],[a,i,1]];d(this,o,!0)},S.clip=function(){},S.arcTo=function(){},S.createPattern=function(){return new h},f.prototype.addColorStop=function(e,t){t=s(t),this.colors_.push({offset:e,color:t.color,alpha:t.alpha})},G_vmlCanvasManager=E,CanvasRenderingContext2D=l,CanvasGradient=f,CanvasPattern=h}();