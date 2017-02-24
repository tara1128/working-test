/*
  whatscall.js
  Latest modified: 2017-02-23 19:04
*/

(function(){ 

  /* Cache variables for elements: */
  var heading = $('#wtcHeading');
  var vdBtn = $('#wtcVdBtn');
  var vdHrt = $('#wtcVdHeart');
  var video = $('#wtcVideo');
  var trulyFree = $('#wtcTrulyFree');
  var callCredits = $('#wtcCallCredits');
  var noInternet = $('#wtcNoInternet');
  var harassment = $('#wtcHarassment');
  var theWrap = $('#wrap');

  adjustForMobiles();
  renderFooterButtons();

  function adjustForMobiles() {
    var win_width = $(window).width();
    var win_height = $(window).height();
    if( win_width < 769 ){
      /* Adjust the first screen height to be full-screen: */
      heading.css('height', (win_height+101) + 'px' );
      /* Some pics needs to be scaled down on mobiles: */
      scaleWithProportion( '.tf-dialog', 470, 270, true );
      scaleWithProportion( '.credits-roll', 412, 412, true );
      scaleWithProportion( '.woman', 270, 320, true );
      scaleWithProportion( '.wifi', 160, 160, true );
      scaleWithProportion( '.hara-man', 320, 319, true );
      scaleWithProportion( '.hara-txt', 412, 108 );
      scaleWithProportion( '.hara-warn', 257, 67, true );
      scaleWithProportion( '.wtcSecPics', 470, 470, true, 1.45 );
      scaleWithProportion( '.credits-roll', 470, 470, true );
    }
  };

  /* Scale with proportion: */
  function scaleWithProportion( clsName, width, height, scaleBg, newProp ) {
    var items = $(clsName);
    for(var j = 0; j < items.length; j++){
      var _item = $(items[j]);
      var _prop = parseFloat( (width/height).toFixed(2) );
      var _newW = _item.width();
      var _newH = (newProp)?(_newW/newProp):(_newW/_prop);
      _item.height( _newH );
      if( scaleBg ){
        _item.css('background-size', _newW + 'px ' + _newH + 'px' );
      }
    }
  };

  /* Render download buttons on footer: */
  function renderFooterButtons() {
    $('.gp-dl').remove();
    var wrapHeight = theWrap.height();
    var footerInner = $('.footer-inner');
    var btnToGoogle = '<a class="wtc-dl-btn to-google" href="http://whatscall.cmcm.com/sho/promo?utm_source=6037" target="_blank"><s class="wtc-dl-icon-g wtc-has-sprites"></s></a>';
    var btnToApple = '<a class="wtc-dl-btn to-apple" href="http://whatscall.cmcm.com/sho/promo?utm_source=6037" target="_blank"><s class="wtc-dl-icon-a wtc-has-sprites"></s></a>';
    footerInner.append( btnToGoogle ).append( btnToApple );
    if( IsAndroid ){
      theWrap.height( wrapHeight - 101 );
      $('#btnInAndroid').show();
      $('#btnInIOS').hide();
    }else if( IsIOS ){
      theWrap.height( wrapHeight - 101 );
      $('#btnInAndroid').hide();
      $('#btnInIOS').show();
    }else{
      $('#btnInAndroid').hide();
      $('#btnInIOS').hide();
      heading.find('.to-google').attr('href', 'https://play.google.com/store/apps/details?id=com.cmcm.whatscall');
      heading.find('.to-apple').attr('href', 'https://itunes.apple.com/app/whatscall-mian-fei-bo-da-quan/id1137062559');
      footerInner.find('.to-google').attr('href', 'https://play.google.com/store/apps/details?id=com.cmcm.whatscall');
      footerInner.find('.to-apple').attr('href', 'https://itunes.apple.com/app/whatscall-mian-fei-bo-da-quan/id1137062559');
    }
  };

  /* Animation of video button hover: */
  vdBtn.mouseenter(function(){
    vdHrt.addClass('slide-out');
  });
  vdBtn.mouseleave(function(){
    vdHrt.removeClass('slide-out');
  });

  /* Listen ScrollBar: */
  $(window).scroll(function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var clitWidth = document.body.clientWidth;
    var clitHeight = document.body.clientHeight;
    if( clitWidth < 768 ){ /* On mobile devices: */
      if( scrollTop > 220 ){
        trulyFree.addClass('active');
      }
      if( scrollTop > 440 ){
        callCredits.addClass('active');
      }
      if( scrollTop > 660 ){
        noInternet.addClass('active');
      }
      if( scrollTop > 1100 ){
        harassment.addClass('active');
      }

    }else{ /* On desktop devices: */
      if( clitHeight > 820 || scrollTop > 250 ){
        trulyFree.addClass('active');
      }
      if( scrollTop > 500 ){
        callCredits.addClass('active');
      }
      if( scrollTop > 1000 ){
        noInternet.addClass('active');
      }
      if( scrollTop > 1700 ){
        harassment.addClass('active');
      }
    }
  });


})();
