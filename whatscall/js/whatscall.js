/*
  whatscall.js
  Latest modified: 2016-10-10 19:04
*/

(function(){ 

  /* Initial Skroolr: */

  /* Cache variables for elements: */
  var vdBtn = $('#wtcVdBtn');
  var vdhrt = $('#wtcVdHeart');
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
    console.log('Scrolling: top =', scrollTop );
    if( scrollTop > 400 ){
      trulyFree.addClass('active');
    }
    if( scrollTop > 1100 ){
      callCredits.addClass('active');
    }
    if( scrollTop > 1800 ){
      noInternet.addClass('active');
    }
    if( scrollTop > 2500 ){
      harassment.addClass('active');
    }
  });




})();

