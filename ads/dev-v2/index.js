/*
  Script of Cheetah Ads.
  Author: Alexandra
  Date: 2017-03-03 17:56
  Add pop up form for testing...
*/

(function(){

  /* Elements */
  var Billboard = $('#C_Billboard');
  var Slogan = $('#C_Slogan');
  var TopBar = $('#C_TopBar');
  var NavBurger = $('#C_NavBurger');
  var NavList = $('#C_Navs');
  var StartBtn = $('#C_StartBtn');
  var NavAnchors = $('.C_NavAnchors');
  var ContactBtns = $('.C_ContactBtn');
  var PopUpWin = $('#C_PopWin');

  /* Largest height for the first screen */
  // var largestHeight = 1080;

  /* Check if in WeiXin */
  var ua = navigator.userAgent.toLowerCase();
  var isWeiXin = ua.indexOf('micromessenger') != -1;
  // if (isWeiXin) {
    ContactBtns.click(function(e){
      // e.preventDefault();
      PopUpWin.fadeIn(200);
      // alert('Please send an email to ads@cmcm.com'); 
    })
  // }
  
  /* Make first screen fit for your screen */
  // var avlHeight = (window.screen.availHeight > largestHeight)?(largestHeight):(window.screen.availHeight);
  var avlHeight = window.screen.availHeight;
  var sloganTop = parseInt( Math.floor(avlHeight/3.68) );
  Billboard.height(avlHeight);
  Slogan.css('padding-top', sloganTop + 'px');
  
  /* Bind window scrolling events */
  $(window).scroll(function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop; //浏览器滚动条的top位置
    if( scrollTop >= 700 ){
      TopBar.addClass('float');
      StartBtn.removeClass('hide');
    }else{
      TopBar.removeClass('float');
      StartBtn.addClass('hide');
    }   
  });

  /* Bind click events to nav anchors */
  NavAnchors.click(function(e){
    var me = $(this);
    var id = me.data('id');
    var targetSection = $('#' + id);
    e.preventDefault();
    NavList.removeClass('showing');
    $('html,body').animate({scrollTop:targetSection.offset().top}, 400);
  });

  /* Burger-style navs on mobiles only: */
  NavBurger.click(function(){
    if (NavList.hasClass('showing')) {
      NavList.removeClass('showing');
    } else {
      NavList.addClass('showing');
    }
  });



  
})();
