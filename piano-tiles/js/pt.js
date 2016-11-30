/*
  Author: Yang Gang
  Latest modified: 2016-11-30 16:05
*/
(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        factory(jQuery);
    }
}(function ($) {
    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;
    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }
    var special = $.event.special.mousewheel = {
        version: '3.1.12',
        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },
        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },
        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },
        getPageHeight: function(elem) {
            return $(elem).height();
        },
        settings: {
            adjustOldDeltas: true,
            normalizeOffset: true
        }
    };
    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },
        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });
    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';
        if ('detail'      in orgEvent){deltaY = orgEvent.detail * -1;}
        if ('wheelDelta'  in orgEvent){deltaY = orgEvent.wheelDelta;}
        if ('wheelDeltaY' in orgEvent){deltaY = orgEvent.wheelDeltaY;}
        if ('wheelDeltaX' in orgEvent){deltaX = orgEvent.wheelDeltaX * -1;}
        if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }
        delta = deltaY === 0 ? deltaX : deltaY;
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }
        if ( deltaY === 0 && deltaX === 0 ) { return; }
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );
        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        event.deltaMode = 0;
        args.unshift(event, delta, deltaX, deltaY);
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
        return ($.event.dispatch || $.event.handle).apply(this, args);
    }
    function nullLowestDelta() {
        lowestDelta = null;
    }
    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }
}));
;(function(win, doc, $, undefined) {
	var CMmousewheel = {
		_doc: $(doc) || $(document),
		pageTimeout: null,
		initNum: 0,
		allHeight: 0,
		offsetArr: [],
    cdAudios: document.getElementsByTagName('audio'),
    cdRotateInterval: {},
    cdAngleContainer: [],
		init: function(pageObj) {
      document.ontouchmove = function(e){ e.preventDefault();} /* Make IOS not to scroll the whole page when touch-moves */
			var father = this;
			if (typeof pageObj == 'object' && typeof pageObj != 'undefined') {
				father.initDom(pageObj);
				father.addEvent(pageObj);
				father.curWebClick(pageObj);
				father.curPageTouch(pageObj);
				father.clickNext(pageObj);
        father.clickToPlayVideo(pageObj);
				father.keyEvent(pageObj);
				father.addMousemove(pageObj);
				$(win).on('resize', function(event) {
          father.adjustRightDown();
          father.adjustRightBtns(pageObj);
					event.preventDefault();
					father.initDom(pageObj);
				});
			}
		},
		addMousemove: function(obj){
			var ismove = false;
			var getpageY;
			obj.musicMain.on({
				mousedown: function(e){
					e.preventDefault();
					ismove = true;
					getpageY = e.pageY-parseInt($(this).css("top"));
				},
				mousemove: function(e){
					var moveHeight = parseInt(($(win).height() / 2) - $(win).height());
					$(this).css({ cursor: 'move'});
					if(ismove){
						var y = e.pageY - getpageY;
						if(y >= 0 || y <= moveHeight){
							return false;
						}else{
							$(this).css({"top": y + 'px'});
						}
					}
				},
				mouseup: function(){
					ismove = false;
				}
			});
		},
		addEvent: function(obj) {
			var self = this;
			var isMousewheel = false;
      var curWinWidth = $(win).width();
			clearTimeout(self.pageTimeout);
			this._doc.mousewheel(function(e,delta) {
				if(isMousewheel == true) return false;
        isMousewheel = true;
				if(delta > 0){
					self.mainRun(obj,'up');
				}else{
					self.mainRun(obj,'down');
				}
				self.pageTimeout = setTimeout(function() {
					isMousewheel = false;
				}, 1600);// Less time would make Chrome on OS X scroll multi times
			});
      if( typeof self.cdAudios.item(0).canPlayType == 'undefined') {
        return; // when browser does't support audio.
      }
      var CDTriggers = obj.cdTriggers;
      for( var _i = 0; _i < CDTriggers.length; _i++ ){
        self.cdAngleContainer.push({ cdIndex: $(CDTriggers[_i]).attr('data'), currentDeg: 0 });//Stored every CD's index and rotate deg.
        self.cdRotateInterval[ 'CD_' + _i ] = null;//Object stored every CD's interval.
      };
			CDTriggers.on('click',function(e){ // Click CD
				e.preventDefault();
        var me = $(this);
        self.playOneCD( obj, me );
        e.stopPropagation();
			});
      /* CD bars display on mobiles only: */
      var CDBars = obj.cdBars;
      var switchCDs = function(index) {
        CDBars.removeClass('active');
        $(CDBars[index]).addClass('active');
        if(index == 0){ /* Switch to CD 1: */
          obj.cdObjA.css('margin-left', '-140px');
          obj.cdObjB.css('margin-left', (curWinWidth + 50) + 'px');
          obj.cdObjC.css('margin-left', (curWinWidth + 370) + 'px');
        }else if(index == 1){ /* Switch to CD 2: */
          obj.cdObjA.css('margin-left', '-' + (curWinWidth + 280) + 'px');
          obj.cdObjB.css('margin-left', '-140px');
          obj.cdObjC.css('margin-left', (curWinWidth + 50) + 'px');
        }else{ /* Switch to CD 3: */
          obj.cdObjA.css('margin-left', '-' + (curWinWidth + 540) + 'px');
          obj.cdObjB.css('margin-left', '-' + (curWinWidth + 280) + 'px');
          obj.cdObjC.css('margin-left', '-140px');
        }
      };
      if( curWinWidth < 769 ){
        CDBars.on('click', function(e){
          var me = $(this);
          var index = me.attr('data');
          switchCDs(index);
          e.stopPropagation();
        });
        if( !obj.musicMain.get(0).addEventListener ){return;}
        obj.musicMain.get(0).addEventListener('touchstart', function(e){
          var touch = e.touches[0];
          obj.cdTouchStartX = touch.pageX;
        },false);
        obj.musicMain.get(0).addEventListener('touchmove', function(e){
          var touch = e.touches[0];
          obj.cdTouchDeltaX = touch.pageX - obj.cdTouchStartX;
        }, false);
        obj.musicMain.get(0).addEventListener('touchend', function(e){
          if( !obj.cdTouchDeltaX ) { return; }/* When just clicking, no delta.  */
          if( Math.abs(obj.cdTouchDeltaX) < 50 ) { return; }
          if( obj.cdTouchDeltaX < 0 ){ /* Make it scroll to left */
            if( !!$(CDBars[CDBars.length-1]).hasClass('active') ){ // Already displaying the last one
              return;
            }else{
              for( var _l = 0; _l < CDBars.length; _l++ ){
                if( !!$(CDBars[_l]).hasClass('active') ){
                  switchCDs( _l + 1 );
                  obj.cdTouchStartX = 0;
                  obj.cdTouchDeltaX = 0;
                  break;
                }
              }
            }
          }else{ /* Scroll to right */
            if( !!$(CDBars[0]).hasClass('active') ){ // Already displaying the first one
              return;
            }else{
              for( var _r = 0; _r < CDBars.length; _r++ ){
                if( !!$(CDBars[_r]).hasClass('active') ){
                  switchCDs( _r - 1 );
                  obj.cdTouchStartX = 0;
                  obj.cdTouchDeltaX = 0;
                  break;
                }
              }
            }
          }
        }, false);
      }
		},
    playOneCD: function(obj, cdTrigger) {
      var self = this;
      var curWinWidth = $(win).width();
      var thisCD = cdTrigger.parent();
      var index = cdTrigger.attr('data');
      var thisAudio = thisCD.find('audio').get(0);
      var accessaries = thisCD.find('s.accessary');
      var rotateStuff = thisCD.find('.cdRotate');
      if( !thisAudio.paused ){
        rotateStuff.removeClass('playing');
        clearInterval( self.cdRotateInterval[ 'CD_' + index ] );
        thisAudio.pause();
        accessaries.fadeOut(200);
      }else{
        self.cdRotateInterval[ 'CD_' + index ] = setInterval(function(){
          self.cdAngleContainer[index].currentDeg += 3;
          rotateStuff.css('transform', 'rotate(' + self.cdAngleContainer[index].currentDeg + 'deg)');
        }, 500); //Rotate 3deg in 500ms
        rotateStuff.addClass('playing');
        thisAudio.play();
        accessaries.fadeIn(200);
        self.pauseCDs(obj, index);
      }
      if( curWinWidth > 768 ){ // On PC:
        if(index == 0){ /* Playing CD 1: */
          obj.musicMain.animate({top: '5%', left: '-4%'}, obj.animateTime);
        }else if(index == 1){ /* Playing CD 2: */
          obj.musicMain.animate({top: '-10%', left: '6%'}, obj.animateTime);
        }else{ /* Playing CD 3: */
          obj.musicMain.animate({top: '-28%', left: '8%'}, obj.animateTime);
        }
      }
    },
    pauseCDs: function(obj, i) { // Pause CDs except item(i). Pause all CDs when i is -1.
      var self = this;
      var cdTrgs = obj.cdTriggers;
      for(var _o = 0; _o < cdTrgs.length; _o++ ){
        var _audioWrap = $(cdTrgs[_o]).parent(),
            _audioItem = _audioWrap.find('audio').get(0),
            _audioAccs = _audioWrap.find('s.accessary'),
            _audioRota = _audioWrap.find('.cdRotate');
        if( i < 0 || (i > -1 && _o != i) ) { // Pause all the CDs || pause the CDs which are not i
          clearInterval( self.cdRotateInterval[ 'CD_' + _o ] );
          _audioRota.css('transform', 'rotate(' + self.cdAngleContainer[_o].currentDeg + 'deg)').removeClass('playing');
          _audioItem.pause();
          _audioAccs.fadeOut(200);
        }
      }
    },
		keyEvent: function(obj){
			var self = this;
			$(win).on('keyup',function(e){
				var e = e || window.event;
				var getCode = (e.keyCode) || (e.which) || (e.charCode);
				if(getCode === 38){
					self.mainRun(obj,'up');
				}
				if(getCode === 40){
					self.mainRun(obj,'down');
				}
			});
		},
		mainRun: function(obj,isdown) {
			var self = this;
      var curWinWidth = $(win).width();
      var vdElement = obj.videoElm.get(0);
			if (isdown == 'down') {
				if (self.initNum == obj.pageDiv.length) return;
				self.initNum++;
				self.animateTop(obj);
			}else{
				if (self.initNum == 0) return;
				self.initNum--;
				self.animateTop(obj);
			}
      if( self.initNum != 2 ){ // Shut down audios
        if( typeof self.cdAudios[0].canPlayType != 'undefined' ){
          self.pauseCDs(obj, -1);
        }
      }else{ // When sliding to the CD page, place 3CD to the right positions on mobile
        if( curWinWidth < 769 ){
          obj.cdObjA.css('margin-left', '-140px');
          obj.cdObjB.css('margin-left', (curWinWidth + 50) + 'px');
          obj.cdObjC.css('margin-left', (curWinWidth + 370) + 'px');
          /* Display CD bars in the right status: */
          var CDBars = obj.cdBars;
          CDBars.removeClass('active');
          $(CDBars[0]).addClass('active');
        }
      }
      if( self.initNum != 1 && (typeof vdElement.canPlayType != 'undefined') ){ // Shut down videos
        obj.vdPlayBtn.removeClass('paused').removeClass('replay').addClass('play').fadeIn(200);
        vdElement.pause();
      }
      if( self.initNum == 5 ){ // Show footer-wrap
        obj.publicFooter.addClass('shown');
      }else{ // Hide footer-wrap
        obj.publicFooter.removeClass('shown');
      }
      self.adjustRightDown();
			mainRunClear = setTimeout(function(){
				obj.pageDiv.removeClass('pt-active');
				obj.pageDiv.eq(self.initNum).addClass('pt-active');
				if(self.initNum == self.offsetArr.length){
					obj.pageDiv.eq(self.initNum - 1).addClass('pt-active');
				}
			},obj.animateTime);
      if( self.initNum > 0 ){
        obj.publicHeader.addClass('foldUp');
      }else{
        obj.publicHeader.removeClass('foldUp');
      }
			return self.initNum;
		},
		animateTop: function(obj){
			var self = this;
			var ptVfooter = obj.ptVfooter;
			var animateSetOut;
			clearTimeout(animateSetOut);
			if(self.initNum == self.offsetArr.length){ // When showing half-screen pianist foot part:
				var _topValue = parseInt(self.offsetArr[0]) * (self.initNum - 1) + ptVfooter.outerHeight();
				obj.wrapDiv.animate({ top: '-' + _topValue + 'px'}, {
          easing: 'easeInQuart',
          duration: obj.animateTime
			 	});
				ptVfooter.animate({bottom: '0'},{
          easing: 'easeInQuart',
          duration: obj.animateTime
			 	});
			 	animateSetOut = setTimeout(function(){
			 		ptVfooter.addClass('pt-active');
			 	},obj.animateTime);
			}else{ // When showing full-screen parts:
				ptVfooter.animate({bottom: '-' + ptVfooter.outerHeight() + 'px'},{
          easing: 'easeInQuart',
          duration: obj.animateTime
			 	});
				obj.wrapDiv.animate({ top: '-' + parseInt(self.offsetArr[0]) * (self.initNum) + 'px' },{
          easing: 'easeInQuart',
          duration: obj.animateTime
			 	});
			 	animateSetOut = setTimeout(function(){
			 		ptVfooter.removeClass('pt-active');
			 	},obj.animateTime);
			}
			self.activeWeb(obj,self.initNum);
		},
    adjustBgPicture: function(obj) { /* Added adjustment for background picture suitable in full screen. */
			var curWinHeight = $(win).height();
			var curWinWidth = $(win).width();
      var proportion = 1.68; // The value of w/h for pt-mabg.jpg */
      if( curWinWidth/curWinHeight < proportion ) {
        obj.ptBody.css("background-size", "auto 100%");
      }else{
        obj.ptBody.css("background-size", "100% auto");
      }
    },
    adjustRightDown: function() { /* Added adjustment of rightDown for small-height screens. */
			var self = this;
			var curWinHeight = $(win).height();
      var maxLimitWinHeightForRightDown = 678;
      var minLimitWinHeightForRightDown = 546;
      var rdTop;
      if( self.initNum == 0 ) {
        rdTop = "-160px";
      }else if( curWinHeight < minLimitWinHeightForRightDown ) {
        rdTop = "-95px";
      }else if( curWinHeight < maxLimitWinHeightForRightDown ) {
        rdTop = "20px";
      }else{
        rdTop = "80px";
      }
      $('#ptRightDown').css({opacity: 1, top: rdTop});
    },
    
    formatURL: function() {
      var arr = window.location.search.substring(1).split("&");
      var res = {};
      $.each(arr, function( index, value ){
        var xObj = value.split("=");
        res[ xObj[0] ] = xObj[1];
      });
      return res;
    },

		initDom: function(obj) {
			var self = this;
			var curWinHeight = $(win).height();
      self.adjustBgPicture(obj);
			self.allHeight = 0;
			self.offsetArr = [];
			var initTop = '';
			var ptVfooter = obj.ptVfooter;
			$('body,html').eq(0).css({ width: '100%', height: curWinHeight + 'px', overflow: 'hidden' });
			obj.pageDiv.eq(0).addClass('pt-active');
			for(var g = 0; g < obj.pageDiv.length; g++){
				obj.pageDiv.eq(g).show().css({ height: curWinHeight + 'px', top: g * curWinHeight + 'px'});
				self.offsetArr.push(obj.pageDiv.eq(g).outerHeight());
				self.allHeight += parseInt(obj.pageDiv.eq(g).outerHeight());
			}
			if(self.initNum == self.offsetArr.length){
				initTop = parseInt(self.offsetArr[0]) * (self.offsetArr.length - 1) + ptVfooter.outerHeight();
				ptVfooter.css({bottom: '0px'});
				setTimeout(function(){
			 		ptVfooter.addClass('pt-active');
			 	},obj.animateTime);
			}else{
				initTop = parseInt(self.offsetArr[self.initNum]) * self.initNum;
				ptVfooter.css({bottom: '-' + ptVfooter.outerHeight() + 'px'});
				setTimeout(function(){
			 		ptVfooter.removeClass('pt-active');
			 	},obj.animateTime);
			}
			obj.wrapDiv.css({width:'100%',position:'absolute',height:self.allHeight+'px',top:'-'+initTop+'px',overflow:'overflow'});

      /* 判断URL参数，使用不同下载链接，f=roman */
      var url_param = self.formatURL();
      if( url_param && url_param['f'] == 'roman' ){
        obj.downloadLinkToGoogle = 'https://app.appsflyer.com/com.cmplay.tiles2?pid=roman&c=roman';
        obj.downloadLinkToApple = 'https://app.appsflyer.com/id1027688889?pid=roman&c=roman';
        $('.pt-rd-android').attr('href', 'https://app.appsflyer.com/com.cmplay.tiles2?pid=roman&c=roman');
        $('.pt-rd-ios').attr('href', 'https://app.appsflyer.com/id1027688889?pid=roman&c=roman');
      }else{
        obj.downloadLinkToGoogle = 'https://play.google.com/store/apps/details?id=com.cmplay.tiles2';
        obj.downloadLinkToApple = 'https://itunes.apple.com/us/app/piano-tiles-2-dont-tap-white/id1027688889?mt=8';
      }
		},
    adjustRightBtns: function(obj) {
      if( IsAndroid || IsIOS || IsWindowsPhone ){
        obj.curPages.parent().hide();
      }else{
        obj.curPages.parent().show();
      }
    },
		activeWeb: function(obj,items) {
      var self = this;
			var curWinWidth = $(win).width();
			if(typeof obj.curPages == 'undefined') return;
			if(items != obj.pageDiv.length){
				obj.curPages.removeClass(obj.curPagesClassName);
				obj.curPages.eq(items).addClass(obj.curPagesClassName);
			}
      self.adjustRightBtns(obj);
		},
		curWebClick: function(obj,items){
			var self = this;
      var playbtn = obj.vdPlayBtn;
      var video = obj.videoElm;
      var vdDom = video.get(0);
			if(typeof obj.curPages == 'undefined') return;
			obj.curPages.on('click', function() {
				self.initNum = $(this).index() - 1;
				self.mainRun(obj,'down');
			});
		},
    curPageTouch: function(obj, items) {
      var self = this;
      var wrap = obj.wrapDiv.get(0);
      var startX, startY, deltaX, deltaY;
      if( !wrap.addEventListener ){ return; }
      wrap.addEventListener('touchstart', function(e){
        var touch = e.touches[0];
        startX = touch.pageX;
        startY = touch.pageY;
      },false);
      wrap.addEventListener('touchmove', function(e){
        var touch = e.touches[0];
        deltaX = touch.pageX - startX;
        deltaY = touch.pageY - startY;
      }, false);
      wrap.addEventListener('touchend', function(e){
        if( self.initNum == 2 && Math.abs(deltaX) > 100 ){/* CD page listen scroll event horizontal */
          deltaX = 0;
          return;
        }
        if( deltaY && Math.abs(deltaY) > 50 ){
          if( deltaY > 0 ){
            self.mainRun(obj, 'up');
          }else{
            self.mainRun(obj, 'down');
          }
          deltaY = 0;
        }
      }, false);
    },
    clickToPlayVideo: function(obj) {
      var self = this;
      var vdWrp = obj.vdWrapper;
      var playbtn = obj.vdPlayBtn;
      var video = obj.videoElm;
      var vdDom = video.get(0);
      var bgImg = obj.vdBgImg;
      if(typeof playbtn == 'undefined' || typeof video == 'undefined') return;
      if(typeof vdDom.canPlayType == 'undefined') { // When browser doesn't support video.
        bgImg.show();
        playbtn.hide();
        return;
      }
      var makeBtnIntoPlay = function(){return playbtn.removeClass('paused').removeClass('replay').addClass('play');}
      var makeBtnIntoPause = function(){return playbtn.removeClass('play').removeClass('replay').addClass('paused');}
      var makeBtnIntoReplay = function(){return playbtn.removeClass('play').removeClass('paused').addClass('replay');}
      playbtn.on('click', function(){
        if( vdDom.paused ) {
          vdDom.play();
          makeBtnIntoPause();
        }else{
          vdDom.pause();
          makeBtnIntoPlay();
        }
      });
      vdWrp.on('mouseenter', function(e){
        if( !vdDom.paused ){ // when playing
          makeBtnIntoPause().fadeIn(200);
        }else if( !vdDom.ended ){ // when paused but not ended
          makeBtnIntoPlay().fadeIn(200);
        }else{ // when ended
          makeBtnIntoReplay().fadeIn(200);
        }
      });
      vdWrp.on('mouseleave', function(e){
        if( !vdDom.paused ){ // when playing
          playbtn.fadeOut(200);
        }else if( !vdDom.ended ){ // when paused but not ended
          makeBtnIntoPlay().fadeIn(200);
        }else{ // when ended
          makeBtnIntoReplay().fadeIn(200);
        }
      });
      vdDom.addEventListener('ended', function(){
        makeBtnIntoReplay().fadeIn(200);
      });
    },
		clickNext: function(obj) {
			var self = this;
			if (typeof obj.clickNext == 'undefined') return;
			obj.clickNext.on('click', function(e) {
				self.initNum++;
				self.mainRun(obj, 'down');
			});
		}
	};
	win.CMmousewheel = CMmousewheel;
})(window, document, jQuery);
/* CMCM canvas ======> */
;(function(win, doc, $, undefined) {
  if( IsAndroid || IsIOS || IsWindowsPhone ){ return; }/* No floating blocks on mobiles */
	var canvas = document.getElementById("myCanvas");
	var setCanvasfor;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
  if ( canvas.getContext ) {
    var context = canvas.getContext("2d");
  } else {
    return; // When browser doesn't support canvas.
  }
	var maxWidth = canvas.width;
	var maxHeight = canvas.height;
	var colors = ["#fff", "#9db6f9", "#fff", "#9db6f9", "#9db6f9", "#fff", "#9db6f9"];
	;(function() {
	    var lastTime = 0;
	    var vendors = ['webkit', 'moz', 'ms', 'o'];
	    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
	                                      window[vendors[x] + 'CancelRequestAnimationFrame'];
	    }
	    if (!window.requestAnimationFrame) {
	        window.requestAnimationFrame = function(callback, element) {
	            var currTime = new Date().getTime();
	            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
	            var id = window.setTimeout(function() {
	                callback(currTime + timeToCall);
	            }, timeToCall);
	            lastTime = currTime + timeToCall;
	            return id;
	        };
	    }
	    if (!window.cancelAnimationFrame) {
	        window.cancelAnimationFrame = function(id) {
	            clearTimeout(id);
	        };
	    }
	})();
	function random(min,max){
		return Math.floor(Math.random()*(max-min)+min);
	};
	function cmCanvas(){
		this.a = true;
		this.b = true;
		this.r = random(80,240);
		this.ballColor = {color: colors[Math.floor(Math.random() * colors.length)]}
		this.vx = random(0,maxWidth);
		this.vy = random(0,maxHeight);
		this.isopacity = random(2,5);
		this.issize = random(45,130);
		this.ispeed = random(1,2);
		this.ispeed2 = random(1,1);
    this.skewAngle = Math.random().toFixed(2);
	};
	cmCanvas.prototype.canvasMain = function(){
		var self = this;
		context.beginPath();
		if (this.a) {
			this.vx += this.ispeed;
			if (this.vx > maxWidth-this.r) {
				this.a = false;
			}
		} else {
			this.vx -= this.ispeed;
			if (this.vx <= this.r) {
				this.a = true;
			}
		}
		if (this.b) {
			this.vy += this.ispeed2;
			if (this.vy >= maxHeight-this.r) {
				this.b = false;
			}
		} else {
			this.vy -= this.ispeed2;
			if (this.vy < this.r) {
				this.b = true;
			}
		}
    //context.setTransform(1, this.skewAngle, 0, 1, 0, 0);
		context.fillStyle = this.ballColor.color;
		context.fillRect(this.vx, this.vy, this.issize,this.issize);
		context.globalAlpha = this.isopacity / 10;
		context.fill();
	};
	var Aball=[];
	for(var i = 0; i < colors.length; i++){
		Aball[i] = new cmCanvas();
	}
	function forCanvas(){
		context.clearRect(0,0,canvas.width,canvas.height);
		for(var i = 0; i < colors.length; i++){
			Aball[i].canvasMain();
		}
		setCanvasfor = window.requestAnimationFrame(forCanvas);
	};
	cancelAnimationFrame(setCanvasfor);
	setCanvasfor = requestAnimationFrame(forCanvas);
})(window, document, jQuery);

/* switch */
;(function(win, doc, $, undefined) {
	function switchPlayers(){
		this.findLi = $('#ptPlayersList li');
		this._initNum = 0;
    this._numShow = 3; // Quantity of items shown at one time.
		this.prevs = $('.pt-prev');
		this.nexts = $('.pt-next');
		this.init();
	};
	switchPlayers.prototype = {
		init: function(){
      var me = this;
			this.bindEvent();
      this.confirmNumShow();
			$(win).on('resize', function(event) {
        me.confirmNumShow();
      });
		},
    confirmNumShow: function() {
      if( IsAndroid || IsIOS || IsWindowsPhone ){
        this._numShow = 1;
      }else{
        this._numShow = 3;
      }
    },
		_prev: function(){
			if(this._initNum > 0){
				this.nexts.show();
				this.prevs.show();
				this._initNum --;
				this.animateMain(this._initNum);
				if(this._initNum == 0){
					this.prevs.hide();
				}
			}
		},
		_next: function(){
			if(this._initNum < this.findLi.length - this._numShow){
				this.nexts.show();
				this.prevs.show();
				this._initNum ++;
				this.animateMain(this._initNum);
				if(this._initNum == this.findLi.length - this._numShow){
					this.nexts.hide();
				}
			}
		},
		animateMain: function(items){
			var ptPlayersList = $('#ptPlayersList');
			var getLiWidth = this.findLi.eq(0).outerWidth();
			ptPlayersList.animate({left: - items * (getLiWidth + 16) + 'px'},{
        easing: 'easeOutBack',
        duration: 900
		 	});
		},
		bindEvent: function(){
			var self = this;
			if(this._initNum == 0){
				self.prevs.hide();
			}
			this.prevs.on('click',function(){
				self._prev(self._initNum);
			});
			this.nexts.on('click',function(){
				self._next(self._initNum);
			});
		}
	}
	win.switchPlayers = switchPlayers;
	new win.switchPlayers();
})(window, document, jQuery);

/* obj worked */
;(function($,undefined){
	var pageObj = {
		animateTime: 700,
    ptBody: $('.bodyPT'),
		wrapDiv: $('#ptWrap'),
		pageDiv: $('.pt-content'),
		clickNext: $('.click-next'),
		curPages: $('#pt-cur a'),
    vdWrapper: $('#vdWrap'),
    vdPlayBtn: $('#vdPlayBtn'),
    videoElm: $('#Video'),
    vdBgImg: $('#vdBgImg'),
    musicMain: $('#ptMusicMain'),
		ptVfooter: $('#ptVfooter'),
    cdTriggers: $('.cdTrigger'),
    cdBars: $('.cdBars'),
    cdObjA: $('.pt-music-obja'),
    cdObjB: $('.pt-music-objb'),
    cdObjC: $('.pt-music-objc'),
		curPagesClassName: 'cur-pages',
    publicHeader: $('#header'),
    publicFooter: $('#footer-wrap'),
    downloadLinkToGoogle: 'https://play.google.com/store/apps/details?id=com.cmplay.tiles2',
    downloadLinkToApple: 'https://itunes.apple.com/us/app/piano-tiles-2-dont-tap-white/id1027688889?mt=8'
	}
	CMmousewheel.init(pageObj);
  // Click to pop dialog for downloading:
  var gaForAndroid = 'ga(\'send\',\'event\',\'piano-tiles\',\'click\',\'download-android\',1)';
  var gaForIOS = 'ga(\'send\',\'event\',\'piano-tiles\',\'click\',\'download-ios\',1)';
	var dialogHtml = '<span class="pt-down-qd clearfix">\
                      <a class="pt-open-gp" href="'+ pageObj.downloadLinkToGoogle +'" target="_blank" onClick="'+ gaForAndroid +'"></a>\
                      <a class="pt-open-as" href="'+ pageObj.downloadLinkToApple +'" target="_blank" onClick="'+ gaForIOS +'"></a>\
                    </span>';
	var popHTML = '<div class="pt-pop-mask popElements" id="popMask"></div>\
                 <div class="pt-pop-main popElements clearfix" id="popMain">\
                   <a class="pt-pop-close" id="popClose">×</a>\
                   <div class="cm-pop-content clearfix">' + dialogHtml + '</div>\
                 </div>';
	$('#ptDownLoadBtna, #ptDownLoadBtnb').on('click',function(){
    if( IsAndroid ) {
      ga('send','event','piano-tiles','click','download-android',1);
      location.href = pageObj.downloadLinkToGoogle;
    }else if( IsIOS ){
      ga('send','event','piano-tiles','click','download-ios',1);
      location.href = pageObj.downloadLinkToApple;
    }else{
      $('body').append(popHTML);
      var popMask = $('#popMask');
      var popMain = $('#popMain');
      var popClsBtn = $('#popClose');
      var popElems = $('.popElements');
      popMask.css('height', $(window).height() + 'px').addClass('popShow');
      popMain.css({marginTop: - popMain.outerHeight() / 2 + 'px'}).addClass('popShow');
      popClsBtn.on('click', function(){
        popElems.addClass('popClose');
        setTimeout(function() {
          popElems.remove();
        }, 500);
      });
    }
	});
})(jQuery);
