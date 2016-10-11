/* 
  JS for Pegasi
  Latest modified: 2016-10-11 17:24
*/

(function(){

  /* Detect devices, hide login for IOS & Android: */
  var UA = window.navigator.userAgent,
      isAndroid = (/Android|HTC/i.test(UA)),
      isIPhone = !isAndroid && /iPod|iPhone/i.test(UA),
      isWindowsPhone = /Windows Phone/i.test(UA);
  var logins = $('#pegLoginArea');

  if( isAndroid || isIPhone || isWindowsPhone ) {
    logins.hide();
  }else{
    logins.show();
  }

  /* Initial plugin of Skrollr: */
  skrollr.init({
    smoothScrolling: true,
    smoothScrollingDuration: 0,
    mobileDeceleration: 0,
    mobileCheck: function() {
      return false;
    },
    forceHeight: false
  });

  function random(min,max){
    return Math.floor(Math.random()*(max-min)+min);
  };

  $('#pegSeeMore').click(function(){
    $('body').animate({scrollTop: 750}, 400);
  });

  $('#pegPartnerIcons').delegate('a', 'mouseenter', function(){
    $(this).addClass('colored');
  }).delegate('a', 'mouseleave', function(){
    $(this).removeClass('colored');
  });

  $('#pegFourTag').delegate('s', 'mouseenter', function(){
    var ranDeg = random(20, 60);
    $(this).css('transform', 'rotate('+ ranDeg +'deg)');
  }).delegate('s', 'mouseleave', function(){
    $(this).css('transform', 'rotate(0deg)');
  });

  $('.pegMakeWhirl').mouseenter(function(){
    var icon = $(this).parent().find('s');
    icon.addClass('whirl');
  }).mouseleave(function(){
    var icon = $(this).parent().find('s');
    icon.removeClass('whirl');
  });

})();
