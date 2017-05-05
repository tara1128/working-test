/*
  Base functionality for AlexReader!
  Author: Alexandra Wang
  Latest modified: 2017-04-28 17:37
*/

(function(starter, ender){

  var List = $('#List');
  var Image = $('#curPage');
  var token = $('#token');
  var rotateBtn = $('#Rotate');
  var curPageBtn = $('#BtnShowCurrent');
  var total = ender - starter + 1;
  var numPerGroup = 10;
  var groups = parseInt( total/numPerGroup );

  var makeSeries = function(starter, ender) {
    var _s = starter; 
    List.html('');
    if (groups) {
      for (var g = 0; g <= groups; g++) {
        var _itemsInOneGroup = '';
        for (var _i = _s; _i < (_s+numPerGroup); _i++) {
          if (_i > ender) break;
          _itemsInOneGroup += '<div class="navs nav-'+ _i +'" data="'+ _i +'">Page '+ _i +'</div>';
        }
        List.append('<div class="group group-'+ g +'"><h3 class="group-name">Page '+ _s +' - '+( (_s+numPerGroup-1>ender)?(ender):(_s+numPerGroup-1) )+'</h3><div class="group-box">'+ _itemsInOneGroup +'</div></div>');
        _s = _s + numPerGroup;
      }
    } else {
      for(var i = starter; i <= ender; i++) {
        List.append('<div class="navs nav-'+ i +'" data="'+ i +'">Page '+ i +'</div>');
      }
    }
  };

  var focusOnePage = function(p) {
    Image.attr('src', 'PMPNotes/p' + p + '.jpg');
    $('.navs').removeClass('active');
    $('.nav-' + p).addClass('active');
    token.html(p);
    curPageBtn.html(p);
  };

  var bindClick = function() {
    var navLis = List.find('.navs');
    var groups = List.find('.group');
    var pageBtns = $('.pagebtn');
    navLis.click(function(e){
      e.stopPropagation();
      var _p = $(this).attr('data');
      focusOnePage(_p);
    });
    groups.click(function(){
      var _box = $(this).find('.group-box');
      var _cls = 'unfold';
      if (!_box.hasClass(_cls)) {
        _box.addClass(_cls);
      } else {
        _box.removeClass(_cls);
      }
    });
    pageBtns.click(function(){
      var direction = parseInt( $(this).attr('data-type') );
      var curpage = parseInt( curPageBtn.html() );
      console.log(direction, curpage);
      curpage = curpage + direction;
      if (curpage < starter) {
        focusOnePage(starter);
        curpage = starter;
      } else if (curpage > ender) {
        focusOnePage(ender);
        curpage = ender;
      } else {
        focusOnePage(curpage);
      }
    });
    rotateBtn.click(function(){
      var cls = 'rotated';
      if( !Image.hasClass(cls) ) {
        Image.addClass(cls);
      } else {
        Image.removeClass(cls);
      }
    });
  };

  var init = function() {
    makeSeries(starter, ender);
    focusOnePage(starter);
    bindClick();
  };

  init();

})(5, 108);
