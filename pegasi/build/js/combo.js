 /*! Javascript pegasi 2016-11-16 06:11:13 */!function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,M(),ot=this,r=r||{},ct=r.constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];vt=r.edgeStrategy||"set",lt={beforerender:r.beforerender,render:r.render},st=r.forceHeight!==!1,st&&(Ct=r.scale||1),ft=r.mobileDeceleration||x,pt=r.smoothScrolling!==!1,gt=r.smoothScrollingDuration||A,mt={targetTop:ot.getScrollTop()},It=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),It?(it=t.getElementById("skrollr-body"),it&&nt(),j(),kt(o,[y,S],[T])):kt(o,[y,b],[T]),ot.refresh(),yt(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==Ot||e!==zt)&&(Ot=t,zt=e,Pt=!0)});var i=R();return function l(){X(),i(l)}(),ot}var o,a,i=e.skrollr={get:function(){return ot},init:function(e){return ot||new n(e)},VERSION:"0.6.11"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",p="touchcancel",g="touchend",m="skrollable",d=m+"-before",v=m+"-between",h=m+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,A=200,E="start",F="end",C="center",D="bottom",H="___skrollable_id",V=/^\s+|\s+$/g,z=/^data(?:-(_\w+))?(?:-?(-?\d+))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,O=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,P=/^([a-z\-]+)\[(\w+)\]$/,q=/-([a-z])/g,I=function(e,t){return t.toUpperCase()},B=/[\-+]?[\d]*\.?[\d]+/g,_=/\{\?\}/g,G=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,L=/[a-z\-]+-gradient/g,N="",$="",M=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(N=n.match(e)||+n==n&&t[n].match(e))break;if(!N)return N=$="",r;N=N[0],"-"===N.slice(0,1)?($=N,N={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[N]):$="-"+N.toLowerCase()+"-"}},R=function(){var t=e.requestAnimationFrame||e[N.toLowerCase()+"RequestAnimationFrame"],r=At();return(It||!t)&&(t=function(t){var n=At()-r,o=s.max(0,1e3/60-n);e.setTimeout(function(){r=At(),t()},o)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,at=[],qt=0,e=t.getElementsByTagName("*")):e=[].concat(e),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=pt,f=vt;if(i.attributes){for(var u=0,p=i.attributes.length;p>u;u++){var g=i.attributes[u];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name){var d=g.name.match(z);if(null!==d){var v=d[1];v=v&&ct[v.substr(1)]||0;var h=(0|d[2])+v,y=d[3],T=d[4]||y,b={offset:h,props:g.value,element:i};s.push(b),y&&y!==E&&y!==F?(b.mode="relative",b.anchors=[y,T]):(b.mode="absolute",y===F?b.isEnd=!0:(b.frame=h*Ct,delete b.offset))}}else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var S,k,w;!a&&H in i?(w=i[H],S=at[w].styleAttr,k=at[w].classAttr):(w=i[H]=qt++,S=i.style.cssText,k=St(i)),at[w]={element:i,styleAttr:S,classAttr:k,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f},kt(i,[m],[])}}}for(Tt(),n=0,o=e.length;o>n;n++){var x=at[e[n][H]];x!==r&&(Z(x),K(x))}return ot},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=ot.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=At(),o=ot.getScrollTop();return ut={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:U[t.easing||k],done:t.done},ut.topDiff||(ut.done&&ut.done.call(ot,!1),ut=r),ot},n.prototype.stopAnimateTo=function(){ut&&ut.done&&ut.done.call(ot,!0),ut=r},n.prototype.isAnimatingTo=function(){return!!ut},n.prototype.setScrollTop=function(t,r){return r===!0&&(Ht=t,dt=!0),It?Bt=s.min(s.max(t,0),Ft):e.scrollTo(0,t),ot},n.prototype.getScrollTop=function(){return It?Bt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.on=function(e,t){return lt[e]=t,ot},n.prototype.off=function(e){return delete lt[e],ot};var j=function(){var t,n,i,l,c,m,d,v,h,y,T;yt(o,[f,u,p,g].join(" "),function(e){e.preventDefault();var o=e.changedTouches[0];switch(l=o.clientY,c=o.clientX,h=e.timeStamp,e.type){case f:t&&t.blur(),ot.stopAnimateTo(),t=e.target,n=m=l,i=c,v=h;break;case u:d=l-m,T=h-y,ot.setScrollTop(Bt-d,!0),m=l,y=h;break;default:case p:case g:var a=n-l,b=i-c,S=b*b+a*a;if(49>S)return t.focus(),t.click(),r;t=r;var k=d/T;k=s.max(s.min(k,3),-3);var w=s.abs(k/ft),x=k*w+.5*ft*w*w,A=ot.getScrollTop()-x,E=0;A>Ft?(E=(Ft-A)/x,A=Ft):0>A&&(E=-A/x,A=0),w*=1-E,ot.animateTo(A,{easing:"outCubic",duration:w})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},W=function(){var e,t,r,n,o,a,i,l,c;for(l=0,c=at.length;c>l;l++)for(e=at[l],t=e.element,r=e.anchorTarget,n=e.keyFrames,o=0,a=n.length;a>o;o++)i=n[o],"relative"===i.mode&&(rt(t),i.frame=ot.relativeToAbsolute(r,i.anchors[0],i.anchors[1])-i.offset,rt(t,!0)),st&&!i.isEnd&&i.frame>Ft&&(Ft=i.frame);for(Ft=s.max(Ft,bt()),l=0,c=at.length;c>l;l++){for(e=at[l],n=e.keyFrames,o=0,a=n.length;a>o;o++)i=n[o],i.isEnd&&(i.frame=Ft-i.offset);e.keyFrames.sort(Et)}},Y=function(e,t){for(var r=0,n=at.length;n>r;r++){var o,a,s=at[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,p=u[0].frame,g=u[u.length-1].frame,y=p>f,T=f>g,b=u[y?0:u.length-1];if(y||T){if(y&&-1===s.edge||T&&1===s.edge)continue;switch(kt(c,[y?d:h],[d,v,h]),s.edge=y?-1:1,s.edgeStrategy){case"reset":rt(c);continue;case"ease":f=b.frame;break;default:case"set":var S=b.props;for(o in S)l.call(S,o)&&(a=tt(S[o].value),i.setStyle(c,o,a));continue}}else 0!==s.edge&&(kt(c,[m,v],[d,h]),s.edge=0);for(var k=0,w=u.length-1;w>k;k++)if(f>=u[k].frame&&u[k+1].frame>=f){var x=u[k],A=u[k+1];for(o in x.props)if(l.call(x.props,o)){var E=(f-x.frame)/(A.frame-x.frame);E=x.props[o].easing(E),a=et(x.props[o].value,A.props[o].value,E),a=tt(a),i.setStyle(c,o,a)}break}}},X=function(){Pt&&(Pt=!1,Tt());var e,t,n=ot.getScrollTop(),o=At();if(ut)o>=ut.endTime?(n=ut.targetTop,e=ut.done,ut=r):(t=ut.easing((o-ut.startTime)/ut.duration),n=0|ut.startTop+t*ut.topDiff),ot.setScrollTop(n,!0);else if(!It){var a=mt.targetTop-n;a&&(mt={startTop:Ht,topDiff:n-Ht,targetTop:n,startTime:Vt,endTime:Vt+gt}),mt.endTime>=o&&(t=U.sqrt((o-mt.startTime)/gt),n=0|mt.startTop+t*mt.topDiff)}if(It&&it&&i.setStyle(it,"transform","translate(0, "+-Bt+"px) "+ht),dt||Ht!==n){Dt=n>=Ht?"down":"up",dt=!1;var l={curTop:n,lastTop:Ht,maxTop:Ft,direction:Dt},s=lt.beforerender&&lt.beforerender.call(ot,l);s!==!1&&(Y(n,ot.getScrollTop()),Ht=n,lt.render&&lt.render.call(ot,l)),e&&e.call(ot,!1)}Vt=o},Z=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=O.exec(l.props));)a=i[1],o=i[2],n=a.match(P),null!==n?(a=n[1],n=n[2]):n=k,o=o.indexOf("!")?J(o):[o.slice(1)],s[a]={value:o,easing:U[n]};l.props=s}},J=function(e){var t=[];return G.lastIndex=0,e=e.replace(G,function(e){return e.replace(B,function(e){return 100*(e/255)+"%"})}),$&&(L.lastIndex=0,e=e.replace(L,function(e){return $+e})),e=e.replace(B,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},K=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)Q(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)Q(e.keyFrames[t],n)},Q=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},et=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},tt=function(e){var t=1;return _.lastIndex=0,e[0].replace(_,function(){return e[t++]})},rt=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=at[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,kt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=St(n),n.style.cssText=r.styleAttr,kt(n,r.classAttr)))},nt=function(){ht="translateZ(0)",i.setStyle(it,"transform",ht);var e=c(it),t=e.getPropertyValue("transform"),r=e.getPropertyValue($+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(ht="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,I).replace("-",""),"zIndex"===t)n[t]=""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{N&&(n[N+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var ot,at,it,lt,st,ct,ft,ut,pt,gt,mt,dt,vt,ht,yt=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1}),n.call(this,t)};r=r.split(" ");for(var a=0,i=r.length;i>a;a++)t.addEventListener?t.addEventListener(r[a],n,!1):t.attachEvent("on"+r[a],o)},Tt=function(){var e=ot.getScrollTop();Ft=0,st&&!It&&(a.style.height="auto"),W(),st&&!It&&(a.style.height=Ft+o.clientHeight+"px"),It?ot.setScrollTop(s.min(ot.getScrollTop(),Ft)):ot.setScrollTop(e,!0),dt=!0},bt=function(){var e=it&&it.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},St=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},kt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=xt(i).replace(xt(o[l])," ");i=wt(i);for(var c=0,f=n.length;f>c;c++)-1===xt(i).indexOf(xt(n[c]))&&(i+=" "+n[c]);t[a]=wt(i)},wt=function(e){return e.replace(V,"")},xt=function(e){return" "+e+" "},At=Date.now||function(){return+new Date},Et=function(e,t){return e.frame-t.frame},Ft=0,Ct=1,Dt="down",Ht=-1,Vt=At(),zt=0,Ot=0,Pt=!1,qt=0,It=!1,Bt=0}(window,document),function(){function random(min,max){return Math.floor(Math.random()*(max-min)+min)}var UA=window.navigator.userAgent,isAndroid=/Android|HTC/i.test(UA),isIPhone=!isAndroid&&/iPod|iPhone/i.test(UA),isWindowsPhone=/Windows Phone/i.test(UA),logins=$("#pegLoginArea"),backToTop=$("#pegToTop");isAndroid||isIPhone||isWindowsPhone?(logins.hide(),$(window).scroll(function(){var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;scrollTop>3050?backToTop.show():backToTop.hide()})):logins.show(),skrollr.init({smoothScrolling:!0,smoothScrollingDuration:0,mobileDeceleration:0,mobileCheck:function(){return!1},forceHeight:!1}),backToTop.click(function(){window.scrollTo(0,0)}),$("#pegSeeMore").click(function(){$("body").animate({scrollTop:750},400)}),$("#pegPartnerIcons").delegate("a","mouseenter",function(){$(this).addClass("colored")}).delegate("a","mouseleave",function(){$(this).removeClass("colored")}),$("#pegFourTag").delegate("s","mouseenter",function(){var ranDeg=random(20,60);$(this).css("transform","rotate("+ranDeg+"deg)")}).delegate("s","mouseleave",function(){$(this).css("transform","rotate(0deg)")}),$(".pegMakeWhirl").mouseenter(function(){var icon=$(this).parent().find("s");icon.addClass("whirl")}).mouseleave(function(){var icon=$(this).parent().find("s");icon.removeClass("whirl")})}(); /*! 2010-2016 Cheetah Mobile all rights reserved. */