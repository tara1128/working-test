/*
  Script of Cheetah Ads.
  Author: Alexandra
  Date: 2017-02-28 17:25
*/

// (function(){


  /* Bind click events to nav anchors
  NavAnchors.click(function(e){
    var me = $(this);
    var id = me.data('id');
    var targetSection = $('#' + id);
    e.preventDefault();
    NavList.removeClass('showing');
    $('html,body').animate({scrollTop:targetSection.offset().top}, 400);
  });

  /* Burger-style navs on mobiles only:
})();
// ============ */


(function(win, doc, jquery) {
  var frameScroll = {
		_doc: $(doc) || $(document),
    _bdy: $('body'),
    _dur: 700, /* Duration of easing animate */
    _len: 0, /* Length of frames, valued on first loading */
    _tmo: null, /* Timeout for scrolling */
    _obj: null, /* Instance of page obj */
    _frm: null, /* Frames of page */
    isWeiXin: false, /* Check if in Weixin */
    offsetArr: [], /* OuterHeight of every frames */
    initNum: 0,
    init: function(pageObj) {
      document.ontouchmove = function(e){
        e.preventDefault(); /* Make IOS not to scroll the whole page when touch-moves */
      }
      var me = this;
      me._obj = pageObj;
      me._frm = me._obj.Frames;
      me._len = me._frm.length;
      me.fitPage(me._obj);
      me.addEvent(me._obj);
      me.addTouch(me._obj);
      me._obj.SideMenus.eq(0).addClass(pageObj.activeCls);
      me.isWeiXin = me._obj.UA.indexOf('micromessenger') != -1;
      $(win).resize(function(event){
        me.offsetArr = [];
        me.fitPage(me._obj);
				event.preventDefault();
      })
    },
    fitPage: function(obj) {
      var me = this;
      var winHeight = $(win).height();
      var sloganTop = parseInt( Math.floor(winHeight/3.48) );
      me._bdy.css('height', winHeight + 'px');
      obj.Wrapper.css('height', winHeight * me._len + 'px');
      for ( var _i = 0; _i < me._len; _i++ ) {
        me._frm.eq(_i).css('height', winHeight + 'px');
        me.offsetArr.push( me._frm.eq(_i).outerHeight() );
      };
      obj.Slogan.css('padding-top', sloganTop + 'px');
    },
    addEvent: function(obj) {
      var me = this;
      var isMouseWheel = false;
      var showBurCls = obj.navBurgerCls;
      var contBtn = obj.ContactBtns;
      var burgBtn = obj.NavBurger;
      var burgLst = obj.NavList;
      clearTimeout(me._tmo);
      me._doc.mousewheel(function(e, delta) {
        if (isMouseWheel) return;
        isMouseWheel = true;
        if (delta > 0) {
          me.pageMoving(obj, 1);
        } else {
          me.pageMoving(obj, 0);
        }
        me._tmo = setTimeout(function() {
          isMouseWheel = false;
        }, 1600);
      });
      contBtn.click(function(e) {
        if (me.isWeiXin) {
          e.preventDefault();
          alert('Please send an email to ads@cmcm.com');
        } else {
          // Pop out the form!
        }
      });
      /* Burger menu style shows on mobiles only */
      burgBtn.click(function(){
        if (burgLst.hasClass(showBurCls)) {
          burgLst.removeClass(showBurCls);
        } else {
          burgLst.addClass(showBurCls);
        }
      });

    },
    pageMoving: function(obj, up) {
      var me = this;
      if (up) {
				if (me.initNum == 0) return;
				me.initNum--;
				me.animateTop(obj);
      } else {
        if (me.initNum == me._len) return;
        me.initNum++;
        me.animateTop(obj);
      }
    },
    addTouch: function(obj) {
      var me = this;
      var wrap = obj.Wrapper.get(0);
      var startX, startY, deltaX, deltaY;
      if( !wrap.addEventListener ) return;
      wrap.addEventListener('touchstart', function(e) {
        var touch = e.touches[0];
        startX = touch.pageX;
        startY = touch.pageY;
      }, false);
      wrap.addEventListener('touchmove', function(e){
        var touch = e.touches[0];
        deltaX = touch.pageX - startX;
        deltaY = touch.pageY - startY;
      }, false);
      wrap.addEventListener('touchend', function(e){
        if (deltaY && Math.abs(deltaY) > 50) {
          if (deltaY > 0) {
            me.pageMoving(obj, 1);
          } else {
            me.pageMoving(obj, 0);
          }
        }
      }, false);
    },
    animateTop: function(obj) {
      var me = this;
      var _n = me.initNum;
      var cl = obj.activeCls;
      var fl = obj.topBarFloatCls;
      var hl = obj.hideClassname;
      me._frm.removeClass(cl);
      $(me._frm[_n]).addClass(cl);
      obj.SideMenus.removeClass(cl);
      obj.SideMenus.eq(_n).addClass(cl);
      obj.Wrapper.animate({
        top: '-'+parseInt(me.offsetArr[0])*(_n)+'px'
      }, {
        easing: 'easeInQuart',
        duration: me._dur
      });

      if( _n != 0 ){
        obj.TopBar.addClass(fl);
        obj.StartBtn.removeClass(hl);
      }else{
        obj.TopBar.removeClass(fl);
        obj.StartBtn.addClass(hl);
      }
    },

  };
  win.frameScroll = frameScroll;
})(window, document, jQuery);

(function($){
  frameScroll.init({
    version: 2.0,
    Wrapper: $('#C_Wrapper'),
    Frames: $('.C_Frame'),
    SideMenus: $('#C_SideMenus a'),
    Billboard: $('#C_Billboard'),
    Slogan: $('#C_Slogan'),
    TopBar: $('#C_TopBar'),
    NavBurger: $('#C_NavBurger'),
    NavList: $('#C_Navs'),
    StartBtn: $('#C_StartBtn'),
    NavAnchors: $('.C_NavAnchors'),
    ContactBtns: $('.C_ContactBtn'),
    UA: navigator.userAgent.toLowerCase(),
    navBurgerCls: 'showing',
    activeCls: 'active',
    topBarFloatCls: 'float',
    hideClassname: 'hide'
  });
})(jQuery);

