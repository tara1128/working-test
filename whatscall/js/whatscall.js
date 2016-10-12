/*
  whatscall.js
  Latest modified: 2016-10-11 18:19
*/

(function(){ 

  /* Cache variables for elements: */
  var heading = $('#wtcHeading');
  var vdBtn = $('#wtcVdBtn');
  var vdhrt = $('#wtcVdHeart');
  var video = $('#wtcVideo');
  var trulyFree = $('#wtcTrulyFree');
  var callCredits = $('#wtcCallCredits');
  var noInternet = $('#wtcNoInternet');
  var harassment = $('#wtcHarassment');
  var secPics = $('.wtcSecPics'); 


  function adjustForMobiles() {
    /* Adjust the first screen height to be full-screen: */
    var win_width = $(window).width();
    var win_height = $(window).height();
    if( win_width < 769 ){
      heading.css('height', (win_height+101) + 'px' );
    }
    /* Adjust height of sec pics for mobiles: */
    for(var i = 0; i < secPics.length; i++){
      var _pic = $(secPics[i]);
      var _width = _pic.width();
      _pic.height( _width );
    };
  };


  adjustForMobiles();
  scaleWithProportion( '.tf-dialog', 470, 270, true );
  scaleWithProportion( '.credits-roll', 412, 412, true );
  scaleWithProportion( '.hara-man', 320, 319, true );


  /* Scale with proportion: */
  function scaleWithProportion( clsName, width, height, scaleBg ) {
    var items = $(clsName);
    for(var j = 0; j < items.length; j++){
      var _item = $(items[j]);
      var _prop = parseFloat( (width/height).toFixed(2) );
      var _newW = _item.width();
      var _newH = _newW / _prop;
      _item.height( _newH );
      if( scaleBg ){
        _item.css('background-size', _newW + 'px ' + _newH + 'px' );
      }
    }
  };

  /* Animation of video button hover: */
  vdBtn.mouseenter(function(){
  });

  /* Listen ScrollBar: */
  $(window).scroll(function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var clitWidth = document.body.clientWidth;
    if( scrollTop > 245 ){
      trulyFree.addClass('active');
    }
    if( scrollTop > 745 ){
      callCredits.addClass('active');
    }
    if( scrollTop > 1145 ){
      noInternet.addClass('active');
    }
    if( scrollTop > 1645 ){
      harassment.addClass('active');
    }
  });




})();

