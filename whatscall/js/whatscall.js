/*
  whatscall.js
  Latest modified: 2016-10-11 10:46
*/

(function(){ 

  /* Cache variables for elements: */
  var vdBtn = $('#wtcVdBtn');
  var vdhrt = $('#wtcVdHeart');
  var video = $('#wtcVideo');
  var trulyFree = $('#wtcTrulyFree');
  var callCredits = $('#wtcCallCredits');
  var noInternet = $('#wtcNoInternet');
  var harassment = $('#wtcHarassment');

  /* Animation of video button hover: */
  vdBtn.mouseenter(function(){
  });

  /* Listen ScrollBar: */
  $(window).scroll(function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var clitWidth = document.body.clientWidth;
    if( scrollTop > 380 ){
      trulyFree.addClass('active');
    }
    if( scrollTop > 980 ){
      callCredits.addClass('active');
    }
    if( scrollTop > 1500 ){
      noInternet.addClass('active');
    }
    if( scrollTop > 2100 ){
      harassment.addClass('active');
    }
  });




})();

