/*
  Script of Cheetah official website.
  Author: Alexandra
  Latest modified: 2017-11-09 18:39
*/

(function(){

  /* Detect lang of current page: */
  var LANG = $('body').attr('data-lang');
  var defaultLang = 'en-us';
  if ( !LANG || LANG.length < 1 ) LANG = defaultLang;

  /* A global function: */
    var arrayOutput = function( array, htmlTag, htmlCloseTag ) {
      if (array.length < 1 || !array) return;
      var result = '';
      if (!htmlTag) htmlTag = '<span>';
      if (!htmlCloseTag) htmlCloseTag = '</span>';
      array.map(function(text){
        result += (htmlTag + text + htmlCloseTag);
      });
      return result;
    };

  /* Render top bar to the first screen for all pages: */
  function RenderTopBar() {
    if (typeof PublicNav != 'undefined') {
      var firstScreen = $('#CMCM_FirstScreen');
      var PubNavWithLang = PublicNav[LANG];
      var navData = PubNavWithLang.data;
      var name = PubNavWithLang.name;
      var cnCls = '', enCls = '';
      switch (LANG) {
        case 'zh-cn':
          cnCls = 'active';
          break;
        case 'en-us':
          cnCls = 'active';
          break;
      };
      var html = '<div class="top-bar" id="CMCM_TopBar">\
                    <div class="manage-width clearfix">\
                      <h1 class="top-logo has-trans">\
                        <a class="has-trans" href="/zh-cn/">'+ name +'</a>\
                      </h1>\
                      <div class="top-burger" id="CMCM_TopBurger"></div>\
                      <ul class="top-nav" id="CMCM_TopNav">\
                        <li class="top-nav-li has-trans top-langs" id="CMCM_TopLangSwitch">\
                          <div class="langs clearfix">\
                            <a class="lang-a has-trans '+ cnCls +'" href="/zh-cn/">简<s class="has-trans">&nbsp;</s></a>\
                            <a class="lang-a strip"> | </a>\
                            <a class="lang-a has-trans '+ enCls +'" href="/en-us/">EN<s class="has-trans">&nbsp;</s></a>\
                          </div>\
                        </li>\
                      </ul>\
                    </div><!-- End of manage-width -->\
                  </div><!-- End of topbar -->';
      firstScreen.prepend(html);
      RenderPublicNav(navData);
    }
  };
  RenderTopBar();

  /* Render public navigator in all pages: */
  function RenderPublicNav(navData) {
    navData.map(function( item, index ){
      var _name = item.displayName,
          _target = item.target,
          _linkTo = item.linkTo,
          _active = item.active,
          _gaTags = item.gaTag,
          _subNvs = item.subNavs;
      var current = $('body').attr('data-subpage');
      var activeCls = (_active == current)?('active'):('');
      var _subNavHtml = '';
      _subNvs.map(function(subNav){
        var _subNavName = subNav.subNavName,
            _subNavHash = subNav.subNavLink;
        var _subLinkTo = (subNav.outlink)?(subNav.subNavLink):(_linkTo + '#' + _subNavHash);
        _subNavHtml += '<a class="one-sub has-trans" href="'+ _subLinkTo +'" target="'+ _target +'">'+ _subNavName +'</a>';
      });
      var _html = '<li class="top-nav-li has-trans CMCM_TopNavLi">\
                      <a class="top-nav-a has-trans '+ activeCls +'" href="'+ _linkTo +'" target="'+ _target +'" onclick="ga(\'send\', \'event\', \'' + _gaTags + '\', \'click\');">'+ _name +'<s class="has-trans"></s><b class="has-trans"></b></a>\
                      <div class="top-nav-sub">'+ _subNavHtml +'</div>\
                   </li>';
      $(_html).insertBefore('#CMCM_TopLangSwitch');
    });
    $('.CMCM_TopNavLi').mouseenter(function(){
      var me = $(this);
      me.find('.top-nav-sub').addClass('active');
      me.find('b').addClass('active');
    });
    $('.CMCM_TopNavLi').mouseleave(function(){
      var me = $(this);
      me.find('.top-nav-sub').removeClass('active');
      me.find('b').removeClass('active');
    });
  };


  /* Render [Tool] apps on index: */
  function RenderToolsOnIndex() {
    if (typeof ProductList != 'undefined') {
      var prodListWithLang = ProductList[LANG];
      var ToolsData = prodListWithLang.category.mobileApps.categoryData.tool.data;
      var container = $('#CMCM_ToolsContainer');
      for (var i = 0; i < ToolsData.length; i++) {
        var _priority = ToolsData[i].priority,
            _descForIndex = ToolsData[i].descForIndex[0],
            _target = ToolsData[i].target,
            _name = ToolsData[i].name,
            _icon = ToolsData[i].icon,
            _star = ToolsData[i].star,
            _tags = ToolsData[i].tags,
            _link = ToolsData[i].link,
            _pict = ToolsData[i].pict;/* Big pic for the first tool */
        var _proportion = 'proportion-100';
        var _ifShowPict = 'display:none;';
        var _ifDisplayOnIndex = 'display:none;';
        var _tagContent = '';
        var _ifHasBorderRight = '';
        switch (_priority) {
          case '100':
            _proportion = 'proportion-100';
            _ifShowPict = 'display:block;';
            break;
          case '50':
            _proportion = 'proportion-50';
            break;
          case '33':
            _proportion = 'proportion-33';
            break;
        };
        if (_tags.length > 0) {
          for (var j = 0; j < _tags.length; j++) {
            if (_tags[j].length > 1) _tagContent += ('<a class="has-trans">' + _tags[j] + '</a>');
          }
        };
        if (i == 1 || i == 3 || i == 4) _ifHasBorderRight = 'has-right-border';
        if (_descForIndex && _descForIndex.length > 1) _ifDisplayOnIndex = 'display:block;';
        var ToolUnit = '<div class="tool-unit '+ _proportion +' rel '+ _ifHasBorderRight +'" style="'+ _ifDisplayOnIndex +'">\
                          <div class="tool-inner clearfix">\
                            <div class="big-pic abs has-anim" style="'+ _ifShowPict +'">\
                              <img src="'+ _pict + '" alt="'+ _name +'" />\
                            </div>\
                            <a class="app-icon has-trans CMCM_AutoWidthSibling" href="'+ _link +'" target="'+ _target +'">\
                              <img class="has-anim" src="'+ _icon +'" alt="'+ _name +'" />\
                            </a>\
                            <div class="tool-info CMCM_AutoWidth" data-padding="10">\
                              <h3 class="app-name has-anim">\
                                <a class="app-namelink has-trans" href="'+ _link +'" target="'+ _target +'">'+ _name +'</a>\
                              </h3>\
                              <p class="app-desc has-anim">'+ _descForIndex +'</p>\
                              <div class="tool-rank clearfix has-anim CMCM_Rank" data="'+ _star +'"></div>\
                              <div class="tool-tags clearfix has-anim">'+ _tagContent +'</div>\
                            </div><!-- End of tool-info -->\
                          </div><!-- End of tool-inner -->\
                        </div><!-- End of tool-unit -->';
        container.append( ToolUnit );
      }
      RenderStarsForAppRank();
    }
  };

  /* Render games on index: */
  function RenderGamesOnIndex() {
    if (typeof ProductList != 'undefined') {
      var prodListWithLang = ProductList[LANG];
      var GamesData = prodListWithLang.category.mobileApps.categoryData.game.data;
      var ptData = GamesData[0], rsData = GamesData[1],
          dlData = GamesData[2], gjsData = GamesData[3];
      var ptCont = $('#CMCM_GameOfPT'), rsCont = $('#CMCM_GameOfRS'),
          dlCont = $('#CMCM_GameOfDL'), gjsCont = $('#CMCM_GameOfGJS');
      var ptHtml = '<h4>'+ ptData.name +'</h4>' + arrayOutput(ptData.descForIndex, '<p>', '</p>');
      var rsHtml = '<h4>'+ rsData.name +'</h4>' + arrayOutput(rsData.descForIndex, '<p>', '</p>');
      var dlHtml = '<h4>'+ dlData.name +'</h4>' + arrayOutput(dlData.descForIndex, '<p>', '</p>');
      var gjsHtml = '<h4>'+ gjsData.name +'</h4>' + arrayOutput(gjsData.descForIndex, '<p>', '</p>');
      if (window.innerWidth > 768) {/* Full area being hotzone for desktop */
        ptCont.html(ptHtml).parent().attr('href', ptData.link).attr('target', ptData.target);
        rsCont.html(rsHtml).parent().attr('href', rsData.link).attr('target', rsData.target);
        dlCont.html(dlHtml).parent().attr('href', dlData.link).attr('target', dlData.target);
        gjsCont.html(gjsHtml).parent().attr('href', gjsData.link).attr('target', gjsData.target);
      } else {/* Only slider area being hotzone for mobile */
        ptCont.html(ptHtml).click(function(){window.open(ptData.link, ptData.target)});
        rsCont.html(rsHtml).click(function(){window.open(rsData.link, rsData.target)});
        dlCont.html(dlHtml).click(function(){window.open(dlData.link, dlData.target)});
        gjsCont.html(gjsHtml).click(function(){window.open(gjsData.link, gjsData.target)});
      }
      $('#GJSName').html( gjsData.name );
    }
  };

  /* Render news republic on index: */
  function RenderNROnIndex() {
    if (typeof ProductList != 'undefined') {
      var prodListWithLang = ProductList[LANG];
      var nrContainer = $('#CMCM_NR');
      var newsData = prodListWithLang.category.mobileApps.categoryData.news.data[0];
      var newsHtml = '<a class="app-icon has-trans CMCM_AutoWidthSibling" href="'+ newsData.link +'" target="'+ newsData.target +'">\
                        <img class="has-anim" src="'+ newsData.icon +'" alt="'+ newsData.name +'" />\
                      </a>\
                      <div class="news-info CMCM_AutoWidth" data-padding="10">\
                        <h3 class="app-name has-anim">\
                          <a class="app-namelink has-trans has-anim" href="'+ newsData.link +'" target="'+ newsData.target +'">'+ newsData.name +'</a>\
                        </h3>' + arrayOutput(newsData.descForIndex, '<p class="app-desc has-anim">', '</p>') +'\
                      </div>';
      nrContainer.html(newsHtml);
    }
  };


  /* Render product category introductions on index: */
  function RenderProductCategoryOnIndex() {
    if (typeof ProductList != 'undefined') {
      var prodListWithLang = ProductList[LANG];
      var categoriesCollect = prodListWithLang.category.mobileApps.categoryData;
      var cateForIndex_Tool = categoriesCollect.tool;
      var cateForIndex_Socl = categoriesCollect.socl;
      var cateForIndex_Game = categoriesCollect.game;
      var cateForIndex_News = categoriesCollect.news;
      var cateForIndex_all = [cateForIndex_Tool, cateForIndex_Socl, cateForIndex_Game, cateForIndex_News];
      cateForIndex_all.map(function(Obj){
        $('#CMCM_Section_' + Obj.hash).find('.CMCM_SecTitle').html(Obj.name);
        $('#CMCM_Section_' + Obj.hash).find('.CMCM_SecDescr').html(arrayOutput(Obj.desc));
      });
    }
  };

  /* Render general infos like slogan and section titles on index: */
  function RenderSlogansOnIndex() {
    if (typeof IntrosToIndex != 'undefined') {
      var introsWithLang = IntrosToIndex[LANG];
      var bigSlogan = arrayOutput( introsWithLang.slogan );
      var subSlogan = introsWithLang.subslogan;
      $('#CMCM_Slogan').html(bigSlogan);
      $('#CMCM_SubSlogan').html(subSlogan);
    }
  };

  RenderSlogansOnIndex();
  RenderToolsOnIndex();
  RenderLiveMeOnIndex();
  RenderGamesOnIndex();
  RenderNROnIndex();
  RenderProductCategoryOnIndex();

  /* Render live.me on index, in a particular style: */
  function RenderLiveMeOnIndex() {
    if (typeof ProductList != 'undefined') {
      var prodListWithLang = ProductList[LANG];
      var livemeTextContainer = $('#CMCM_LiveMeTexts');
      var livemeData = prodListWithLang.category.mobileApps.categoryData.socl.data[0];
      var _name = livemeData.name,
          _icon = livemeData.icon,
          _descForIndex = livemeData.descForIndex[0],
          _tags = livemeData.tags,
          _link = livemeData.link,
          _target = livemeData.target;
      var _earth1 = _tags[0].split('|')[0],
          _earth2 = _tags[0].split('|')[1],
          _tongu1 = _tags[1].split('|')[0],
          _tongu2 = _tags[1].split('|')[1],
          _award1 = _tags[2].split('|')[0],
          _award2 = _tags[2].split('|')[1],
          _html = '<a class="app-icon has-trans CMCM_AutoWidthSibling" href="'+ _link +'" target="'+ _target +'">\
                    <img class="has-anim" src="'+ _icon +'" alt="'+ _name +'" />\
                  </a>\
                  <div class="live-info CMCM_AutoWidth" data-padding="10">\
                    <h3 class="app-name has-anim">\
                      <a class="app-namelink has-trans" href="'+ _link +'" target="'+ _target +'">'+ _name +'</a>\
                    </h3>\
                    <p class="app-desc has-anim">'+ _descForIndex +'</p>\
                    <ul class="live-datas has-anim clearfix">\
                      <li class="live-data">\
                        <strong class="earth">'+ _earth1 +'</strong>\
                        <b>'+ _earth2 +'</b>\
                        <s class="line"></s>\
                      </li>\
                      <li class="live-data">\
                        <strong class="tongue">'+ _tongu1 +'</strong>\
                        <b>'+ _tongu2 +'</b>\
                        <s class="line"></s>\
                      </li>\
                      <li class="live-data">\
                        <strong class="award">'+ _award1 +'</strong>\
                        <b>'+ _award2 +'</b>\
                      </li>\
                    </ul>\
                  </div><!-- live info -->';
      livemeTextContainer.html(_html);
    }
  };
  

  /* Render stars for app ranks, must after tools being rendered: */
  function RenderStarsForAppRank() {
    var ranks = $('.CMCM_Rank');
    ranks.each(function(index, ele){
      var item = $(ele);
      var rank = item.attr('data');
      if (rank == 0 || rank == '0') return;
      var text = '<b>' + rank + '</b>';
      var fullStars = Math.floor(rank);
      var fullStarHTML = '<s class="full-star"></s>';
      var halfStarHTML = '<s class="half-star"></s>';
      for (var i = 1; i <= fullStars; i++) {item.append(fullStarHTML);}
      if (rank > fullStars) {item.append(halfStarHTML);}
      item.append(text);
    });
  };

  /* Hover game units to display descriptions: */
  $('.CMCM_GameUnit').mouseenter(function(){
    $(this).find('.CMCM_GameIntros').addClass('active');
  });
  $('.CMCM_GameUnit').mouseleave(function(){
    $(this).find('.CMCM_GameIntros').removeClass('active');
  });
  
  /* Initialize Swiper: */
  var billboardSwiper = new Swiper('.billboard-swiper-container', {
      pagination: '.billboard-swiper-pagination',
      paginationClickable: true,
      spaceBetween: 0,
      centeredSlides: true,
      autoplay:0,
      autoplayDisableOnInteraction: false
  });
  var NewsSwiper = new Swiper('.news-swiper-container', {
      pagination: '.news-swiper-pagination',
      paginationClickable: true,
      spaceBetween: 0,
      centeredSlides: true,
      autoplay:5000,
      autoplayDisableOnInteraction: false
  });


  /* Unfold burger nav on mobiles: */
  $('#CMCM_TopBurger').click(function(){
    var nav = $('#CMCM_TopNav');
    var cls = 'unfold';
    if ( !nav.hasClass(cls) ) {
      nav.addClass(cls);
    } else {
      nav.removeClass(cls);
    }
  });

  /* Render left menu for sub pages: */
  function RenderSubPageMenu() {
    var currentPage = $('body').attr('data-subpage');
    if (typeof CompanyInfoList != 'undefined' && (currentPage == 'company')) {
      var dataList = CompanyInfoList;
    } else if (typeof ProductList != 'undefined' && (currentPage == 'product')) {
      var dataList = ProductList;
    } else if (typeof ContactList != 'undefined' && (currentPage == 'contact')) {
      var dataList = ContactList;
    } else {
      return;
    }
    var dataListWithLang = dataList[LANG];
    var menuItems = dataListWithLang.category;
    var menuContainer = $('#CMCM_SubPageMenu_' + currentPage);
    var _cateHtml = '';
    for (var item in menuItems) {
      var _cateName = menuItems[item].categoryName,
          _cateHref = menuItems[item].categoryLink,
          _cateData = menuItems[item].categoryData,
          _subHtml = '',
          _ifUnfold = '';
      if (_cateData.onMenu) { /* If sub-menus displayed beneath this menu */
        for (var __subCate in _cateData) {
          if (_cateData[__subCate].name) {
            var __name = _cateData[__subCate].name,
                __hash = _cateData[__subCate].hash;
            _subHtml += '<a class="category-detail-one has-trans CMCM_SMD_A " href="#'+ __hash +'">'+ __name +'</a>';
          }
        }
        // if (_cateData.unfold) {_ifUnfold = 'active';}
        _subHtml = ('<div class="category-details CMCM_SubMenuDetails '+ _ifUnfold +'">' + _subHtml + '</div><!-- details -->');
      }
      _cateHtml += '<div class="category-unit">\
                      <a class="category-name has-trans CMCM_SubMenuItem '+ _ifUnfold +'" href="#'+ _cateHref +'">'+ _cateName +'</a>\
                      '+ _subHtml +'\
                    </div><!-- category unit -->';
    }
    var anchorHead = '<b id="CMCM_SubMenuHeadAnchor"></b>'
    var anchorBott = '<b id="CMCM_SubMenuBottomAnchor"></b>'
    menuContainer.append(anchorHead).append(_cateHtml).append(anchorBott);
  };
  RenderSubPageMenu();


  /* Render company mission & vision: */
  function RenderCompanyMission() {
    if (typeof CompanyInfoList != 'undefined') {
      var companyInfosWithLang = CompanyInfoList[LANG];
      var container = $('#CMCM_CompanyContents');
      var mission = companyInfosWithLang.category.missionVisions;
      var _name = mission.categoryName,
          _hash = mission.categoryLink,
          _data = mission.categoryData,
          _csan = _data.classAnchor,
          _slog = _data.slogan,
          _desc = _data.descrp;
      var _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                    <h2 class="category-title">'+ _name +'</h2>\
                    <div class="one-app-introduction clearfix">\
                      <h1 class="cmcm-slogan">'+ _slog +'</h1>\
                      <p class="under-slogan">'+ _desc +'</p>\
                    </div><!-- one app introduction -->\
                   </div><!-- category container of mission and visions -->';
      container.append(_html);
    }
  };
  /* Render company introductions: */
  function RenderCompanyIntros() {
    if (typeof CompanyInfoList != 'undefined') {
      var companyInfosWithLang = CompanyInfoList[LANG];
      var container = $('#CMCM_CompanyContents');
      var intro = companyInfosWithLang.category.introduction;
      var _name = intro.categoryName,
          _hash = intro.categoryLink,
          _data = intro.categoryData,
          _csan = _data.classAnchor,
          _arry = _data.introTexts,
          _imge = _data.introImage;
      var _text = arrayOutput(_arry, '<p class="company-intros">', '</p>');
      var _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                     <h2 class="category-title">'+ _name +'</h2>\
                     <div class="one-app-introduction clearfix">\
                       <img class="company-view" src="'+ _imge +'" alt="'+ _name +'" />\
                       '+ _text +'</div><!-- one app introduction -->\
                   </div><!-- category container of company intro -->';
      container.append(_html);
    }
  };
  /* Render company history: */
  function RenderCompanyHistory() {
    if (typeof CompanyInfoList != 'undefined') {
      var companyInfosWithLang = CompanyInfoList[LANG];
      var container = $('#CMCM_CompanyContents');
      var devHistory = companyInfosWithLang.category.devHistory;
      var _name = devHistory.categoryName,
          _hash = devHistory.categoryLink,
          _data = devHistory.categoryData,
          _csan = _data.classAnchor,
          _historyArray = _data.companyHistory,
          allHistories = '';
      _historyArray.map(function(oneYearEvents){
        var _year = oneYearEvents.year;
        var _events = oneYearEvents.events;
        var _evtHtm = '';
        for (var month in _events) {
          _evtHtm += '<div class="history-item clearfix">\
                        <span>'+ month +'</span>\
                        <b>'+ _events[month] +'</b>\
                      </div><!-- item -->';
        }
        allHistories += '<div class="history-one-year clearfix">\
                            <h3 class="year-number">'+ _year +'</h3>'+ _evtHtm +'<s>Dots</s>\
                         </div><!-- history-one-year -->';
      });
      var _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                     <h2 class="category-title">'+ _name +'</h2>\
                     <div class="one-app-introduction clearfix">'+ allHistories +'</div>\
                   </div><!-- category container of history -->';
      container.append(_html);
    }
  };
  /* Render company culture & values: */
  function RenderCompanyCulture() {
    if (typeof CompanyInfoList != 'undefined') {
      var companyInfosWithLang = CompanyInfoList[LANG];
      var container = $('#CMCM_CompanyContents');
      var culture = companyInfosWithLang.category.corCulture;
      var _name = culture.categoryName,
          _hash = culture.categoryLink,
          _data = culture.categoryData,
          _csan = _data.classAnchor,
          _cult = _data.cultureValues,
          _vHtm = '',
          _vDes = '';
      _cult.map(function(value, i){
        var _clsn = value.valueClassName,
            _icon = value.valueIcon,
            _text = value.valueText,
            _cute = value.valueCute,
            _desc = value.valueDesc;
        _vHtm += '<li class="value-item '+ _clsn +' has-trans CMCM_ValueItem" data="'+ _clsn +'">\
                    <div class="value-icon">\
                      <img class="has-trans" src="'+ _icon +'" alt="'+ _text +'" />\
                    </div>\
                    <img class="value-cute has-trans" src="'+ _cute +'" alt="'+ _text +'" />\
                    <span class="value-text has-trans">'+ _text +'</span>\
                    <span class="v-des-in-mob has-trans CMCM_ValInMob">'+ _desc +'</span>\
                  </li><!-- one value item -->';
        _vDes += '<li class="value-descr has-trans CMCM_ValueDescr vd-'+ _clsn +'">\
                    <span>'+ _desc +'</span>\
                    <s class="dot1 has-trans">&nbsp;</s>\
                    <s class="dot2 has-trans">&nbsp;</s>\
                    <s class="dot3 has-trans">&nbsp;</s>\
                  </li>';
      });
      /* render here */
      var _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                    <h2 class="category-title">'+ _name +'</h2>\
                    <div class="one-app-introduction clearfix">\
                      <div class="values-container rel">\
                        <ul class="values-display clearfix">'+ _vHtm +'</ul>\
                        <ul class="values-descrs">'+ _vDes +'</ul>\
                      </div>\
                    </div>\
                  </div><!-- category container of culture -->';
      container.append(_html);
      /* Hover values:*/
      $('.CMCM_ValueItem').mouseenter(function(){
        var me = $(this), descrs = $('.CMCM_ValueDescr');
        var token = me.attr('data');
        var descr = $('.vd-'+ token);
        me.addClass('active');
        descrs.removeClass('active');
        descr.addClass('active');
      });
      $('.CMCM_ValueItem').mouseleave(function(){
        var me = $(this), descrs = $('.CMCM_ValueDescr');
        me.removeClass('active');
        descrs.removeClass('active');
      });
    }
  };
  /* Render company employers benefits: */
  function RenderCompanyWelfare() {
    if (typeof CompanyInfoList != 'undefined') {
      var companyInfosWithLang = CompanyInfoList[LANG];
      var container = $('#CMCM_CompanyContents');
      var welfare = companyInfosWithLang.category.empWelfare;
      var _name = welfare.categoryName,
          _hash = welfare.categoryLink,
          _data = welfare.categoryData,
          _csan = _data.classAnchor,
          _arry = _data.welfareIntros,
          _imgs = _data.welfareImages,
          _text = arrayOutput(_arry, '<p class="welfare-para">', '</p>'),
          _pics = '';
      _imgs.map(function(item, i){
        var _src = item.image,
            _des = item.descr,
            _lay = '';
        if (i%2 > 0) _lay = 'right';
        _pics += '<div class="welfare-item '+ _lay +'">\
                    <img src="'+ _src +'" alt="'+ _des +'" /><p>'+ _des +'</p>\
                  </div>';
      });
      var _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                    <h2 class="category-title">'+ _name +'</h2>\
                    <div class="one-app-introduction clearfix">\
                      '+ _text +'<div class="welfare-imgs clearfix">'+ _pics +'</div>\
                    </div><!-- one app introduction -->\
                   </div><!-- category container of welfare -->';
      container.append(_html);
    }
  };
  /* Render company executive team leaders: */
  function RenderCompanyLeaders() {
    if (typeof CompanyInfoList != 'undefined') {
      var companyInfosWithLang = CompanyInfoList[LANG];
      var container = $('#CMCM_CompanyContents');
      var leaders = companyInfosWithLang.category.leaderTeam;
      var _name = leaders.categoryName,
          _hash = leaders.categoryLink,
          _data = leaders.categoryData,
          _csan = _data.classAnchor,
          _detl = _data.leaderDetails,
          _allLeaders = '';
      _detl.map(function(leader, i){
        var _leaderName = leader.name,
            _leaderTitle = leader.title,
            _leaderIntro = arrayOutput(leader.detail, '<p>', '</p>'),
            _leaderAvatar = leader.avatar,
            _isReverse = (i % 2 > 0) ? 'reverse' : '';
        _allLeaders += '<div class="one-app-introduction clearfix '+ _isReverse +'">\
                          <div class="leader-pic">\
                            <img src="'+ _leaderAvatar +'" alt="'+ _leaderName +'" />\
                            <div class="leader-inf-in-mobile-only">\
                              <h2>'+ _leaderName +'</h2><h3>'+ _leaderTitle +'</h3>\
                            </div>\
                          </div>\
                          <div class="leader-inf">\
                            <h2>'+ _leaderName +'</h2><h3>'+ _leaderTitle +'</h3>'+ _leaderIntro +'\
                          </div>\
                        </div><!-- one app introduction -->';
      });
      var _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                      <h2 class="category-title">'+ _name +'</h2>'+ _allLeaders +'\
                   </div><!-- category container of executive team -->';
      container.append(_html);
    }
  };
  /* Company page must be rendered as the sequence of designs, like: */
  RenderCompanyMission();
  RenderCompanyIntros();
  RenderCompanyHistory();
  RenderCompanyLeaders();
  RenderCompanyCulture();
  RenderCompanyWelfare();
  

  /* Render all products to the product list page: */
  function RenderAllProductsToListPage() {
    if (typeof ProductList != 'undefined') {
      var prodListWithLang = ProductList[LANG];
      var container = $('#CMCM_ProductsContents');
      var categories = prodListWithLang.category;
      var _html ='';
      for (var cate in categories) {// Traverse big category like 'mobileApps'
        var _oneCate = categories[cate],
            // _cateName = _oneCate.categoryName,
            // _cateHash = _oneCate.categoryLink,
            _cateData = _oneCate.categoryData;
        for (var sub in _cateData) { // Sub category like 'tool' or 'news'
          var _oneSubCate = _cateData[sub];
          if (_oneSubCate.name) {
            var _name = _oneSubCate.name,
                _hash = _oneSubCate.hash,
                _csan = _oneSubCate.anch,
                _apps = _oneSubCate.data,
                _allAppsInThisSubCate = '';
            _apps.map(function(app, i){
              var _appName = app.name,
                  _appIcon = app.icon,
                  _appdescForProd = arrayOutput(app.descForProd, '<p>', '</p>'),
                  _appLink = app.link,
                  _appTarget = app.target;
              _allAppsInThisSubCate += '<div class="one-app-introduction clearfix">\
                                          <div class="sub-appicon">\
                                            <a class="sub-prod-icon-a has-trans" href="'+ _appLink +'" target="'+ _appTarget +'">\
                                              <img src="'+ _appIcon +'" alt="'+ _appName +'" />\
                                            </a>\
                                          </div>\
                                          <div class="sub-appinfo">\
                                            <h3 class="clearfix">\
                                              <a class="has-trans" href="'+ _appLink +'" target="'+ _appTarget +'">'+ _appName +'</a>\
                                            </h3>\
                                            '+ _appdescForProd +'\
                                          </div><!-- appinfo -->\
                                        </div><!-- one app introduction -->';
            });
            /* NOTE: One unit area in page is based on one sub cate, not big cate. */
            _html += '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                        <h2 class="category-title">'+ _name +'</h2>\
                        '+ _allAppsInThisSubCate +'\
                      </div><!-- end of category container -->';
          } // End if
        }
      }
      container.html(_html);
    }
  };
  /* Render product page: */
  RenderAllProductsToListPage();



  /* Render contact infos on contact page: */
  function RenderContactInfosToContactPage() {
    if (typeof ContactList != 'undefined') {
      var contactInfosWithLang = ContactList[LANG];
      var container = $('#CMCM_ContactContents');
      var categories = contactInfosWithLang.category;
      var _html ='';
      for (var cate in categories) {
        var _oneCate = categories[cate],
            _name = _oneCate.categoryName,
            _hash = _oneCate.categoryLink,
            _data = _oneCate.categoryData,
            _csan = _data.classAnchor,
            _details = '';
        if (_hash == 'Contact_Social') {/* Render this category specifically */
          _details = '<div class="contact-info socl-media clearfix">\
                        <div class="socl-media-left">\
                          <h3 class="socl-media-tlt">'+ _data.wechatTitle +'</h3>\
                          <img src="'+ _data.wechat2dUrl +'" alt="'+ _data.wechatTitle +'" />\
                        </div>\
                        <div class="socl-media-right">\
                          <h3 class="socl-media-tlt">'+ _data.othersTitle +'</h3>\
                          <div class="socl-media-group">\
                            <a class="socl-media-item has-trans '+ _data.facebook.clsName +'" href="'+ _data.facebook.siteUrl +'" target="_blank">'+ _data.facebook.descTxt +'</a>\
                            <a class="socl-media-item has-trans '+ _data.twitter.clsName +'" href="'+ _data.twitter.siteUrl +'" target="_blank">'+ _data.twitter.descTxt +'</a>\
                            <a class="socl-media-item has-trans '+ _data.weibo.clsName +'" href="'+ _data.weibo.siteUrl +'" target="_blank">'+ _data.weibo.descTxt +'</a>\
                            <a class="socl-media-item has-trans '+ _data.linkedin.clsName +'" href="'+ _data.linkedin.siteUrl +'" target="_blank">'+ _data.linkedin.descTxt +'</a>\
                          </div>\
                        </div>\
                      </div><!-- contact info -->';
        } else {
          if (_hash == 'Contact_GlobalOffice') {/* Insert a map image for global offices: */
            var _globalLocations = '', _globalLocNum = 14;
            for (var g = 0; g < _globalLocNum; g++) {
              _globalLocations += '<s class="global-loc has-trans has-anim loc-'+ g +'"></s>';
            }
            _details = '<div class="contact-info global-map">\
                          <img src="/dist/images/global-offices.png" alt="Global Offices" />\
                          '+ _globalLocations +'\
                        </div><!-- contact info, global map -->';
          }
          _data.datas.map(function(detail, i){
            var _detailTitle = detail.title,
                _detailTexts = arrayOutput(detail.details, '<p>', '</p>');
            _details += '<div class="contact-info"><p class="cont-top-para">'+ _detailTitle +'</p>'+ _detailTexts +'</div><!-- contact info -->';
          });
        }

        _html += '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                    <h2 class="category-title">'+ _name +'</h2>\
                    <div class="one-app-introduction clearfix">'+ _details +'</div>\
                  </div><!-- category container -->';
      }
      container.html(_html);
    }
  };
  RenderContactInfosToContactPage();



  /* Click menus on the left of sub pages: */
  $('.CMCM_SubMenuItem').click(function(){
    var me = $(this);
    var us = $('.CMCM_SubMenuItem');
    var subMenuBtns = $('.CMCM_SMD_A');
    var cls = 'active';
    us.removeClass(cls);
    me.addClass(cls);
    subMenuBtns.removeClass(cls);
    $(me.parent().find('.CMCM_SMD_A')[0]).addClass(cls);
  });
  /* Click submenus on the left of sub pages: */
  $('.CMCM_SMD_A').click(function(){
    var cls = 'active';
    var me = $(this);
    var us = $('.CMCM_SMD_A');
    var myFth = me.parent();
    var myMenu = myFth.parent().find('.CMCM_SubMenuItem');
    var menuBtns = $('.CMCM_SubMenuItem');
    if ( !me.hasClass(cls) ) {
      menuBtns.removeClass(cls);
      us.removeClass(cls);
      myMenu.addClass(cls);
      me.addClass(cls);
    }
  });



  RenderPublicFooter();

  /* Render public footer: */
  function RenderPublicFooter() {
    if (typeof PublicFooter != 'undefined') {
      var ftDataWithLang = PublicFooter[LANG];
      var outLinksArray = ftDataWithLang.data.outLinks;
      var copyrightObj = ftDataWithLang.data.copyRight;
      var footerContainer = $('#CMCM_Footer');
      var ftRHtml = '<div class="footer-right clearfix rel">\
                      <div id="CMCM_FooterRight"></div>\
                      <div class="bottom-right abs clearfix">\
                        <ul class="clearfix">\
                          <li><a class="has-trans" href="'+ copyrightObj.pvyLink +'">'+ copyrightObj.privacy +'</a></li>\
                          <li><a class="has-trans" href="'+ copyrightObj.tosLink +'">'+ copyrightObj.tos +'</a></li>\
                          <li class="copyright"><span>'+ copyrightObj.cptext +'</span></li>\
                          <li class="switch-langs"><a class="has-trans">'+ copyrightObj.curLang +'</a></li>\
                        </ul>\
                      </div><!-- bottom right of copyright -->\
                    </div><!-- footer right -->';
      var ftLHtml = '<div class="footer-left">\
                        <h4 class="footer-logo"><a class="has-trans" href="'+ copyrightObj.curHome +'">Cheetah Mobile</a></h4>\
                        <div class="social-sharings clearfix">\
                          <a class="social-icon fb has-trans" href="https://www.facebook.com/cmcmglobal/" target="_blank">Facebook</a>\
                          <a class="social-icon tw has-trans" href="https://twitter.com/CheetahMobile" target="_blank">Twitter</a>\
                          <a class="social-icon wb has-trans" href="http://weibo.com/u/5096795969?topnav=1&wvr=6&topsug=1" target="_blank">Weibo</a>\
                          <a class="social-icon li has-trans" href="https://www.linkedin.com/company/3214653/" target="_blank">LinkIn</a>\
                        </div>\
                     </div><!-- footer left -->';
      footerContainer.append(ftLHtml).append(ftRHtml);
      RenderFooterLinks(outLinksArray);
    }
  };

  /* Render footer links of basic infos, like company, product etc. */
  function RenderFooterLinks( outlinks ) {
    var footRightContainer = $('#CMCM_FooterRight');
    var columnDataForFooter = function( jsonData ) {
      if (typeof jsonData != 'undefined') {
        var jsonWithLang = jsonData[LANG];
        var footerColumnTitle = jsonWithLang.name,
            footerColumnLink = jsonWithLang.link,
            footerColumnItems = jsonWithLang.category,
            colLinksHtml = '';
        for (var p in footerColumnItems) {
          var _linkName = footerColumnItems[p].categoryName,
              _linkHash = footerColumnItems[p].categoryLink;
          colLinksHtml += '<a href="'+ footerColumnLink + '#'+ _linkHash +'">'+ _linkName +'</a>';
        }
        var oneCol = '<div class="ft-column">\
                        <h4 class="column-title clearfix">\
                          <a href="'+ footerColumnLink +'">'+ footerColumnTitle +'</a>\
                        </h4>\
                        <div class="column-links clearfix">'+ colLinksHtml +'</div>\
                      </div><!-- column -->';
        return oneCol;
      } else {
        return '';
      }
    };
    /* Fetch company, product, contact infos for footer: */
    var col_company = columnDataForFooter(CompanyInfoList);
    var col_product = columnDataForFooter(ProductList);
    var col_contact = columnDataForFooter(ContactList);
    footRightContainer.append(col_company).append(col_product);
    /* Fetch other infos for footer, like ir and hr: */
    var outLinksHtml = '';
    outlinks.map(function(link, i){
      var _name = link.linkName,
          _url = link.linkUrl,
          _subs = link.sublink,
          _sublinkHtml = '';
      _subs.map(function(lnk, i){
        var _n = lnk.name, _u = lnk.url;
        _sublinkHtml += '<a href="'+ _u +'" target="_blank">'+ _n +'</a>';
      });
      outLinksHtml += '<div class="ft-column">\
                        <h4 class="column-title clearfix">\
                          <a href="'+ _url +'" target="_blank">'+ _name +'</a>\
                        </h4>\
                        <div class="column-links clearfix">'+ _sublinkHtml +'</div>\
                       </div><!-- column -->';
    });
    footRightContainer.append(outLinksHtml);
    footRightContainer.append(col_contact);
  };

  


  /* Adjust left menu's position for every time refreshing: */
  function AdjustLeftMenuPositions() {
    var _sclTop = document.body.scrollTop || document.documentElement.scrollTop;
    var cateContainers = $('.CMCM_CategoryContainer');
    for (var i = 0; i < cateContainers.length; i++) {
      var item = $(cateContainers[i]);
      var itemTop = item.offset().top;
      var itemId = '#' + item.attr('id');
      var targetA = $('a[href="'+ itemId +'"]');
      if (_sclTop <= itemTop) {
        $('.CMCM_SubMenus').find('a').removeClass('active');
        targetA.addClass('active');
        $('html, body').animate({
          scrollTop: (_sclTop <= 100) ? (_sclTop) : (itemTop - 50)
        }, 800);
        break;
      }
    };
  };
  AdjustLeftMenuPositions();



  /* ========== Scrolling: ========== */
  $(window).scroll(function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var topBar = $('#CMCM_TopBar');
    var subMen = $('.CMCM_SubMenus');
    var cateContainers = $('.CMCM_CategoryContainer');
    var subMenuAncHeadTop = $('#CMCM_SubMenuHeadAnchor').offset().top;
    var subMenuAncBottTop = $('#CMCM_SubMenuBottomAnchor').offset().top;
    var anchorCounterpartTop = $('#CMCM_AnchorCounterpart').offset().top - 3;
    var scrlTopLmt = 380;
    if (scrollTop >= scrlTopLmt) {
      topBar.addClass('fixed');
    } else {
      topBar.removeClass('fixed');
    }
    if (scrollTop >= 54) {
      subMen.addClass('fixed');
    } else {
      subMen.removeClass('fixed');
    }
    /* Highlight the current content's menu: */
    cateContainers.map(function(index, item){
      if ( $(this).offset().top < (scrollTop + 100) ) {
        var targetA = $('a[href="#'+ this.id +'"]');
        subMen.find('a').removeClass('active');
        targetA.addClass('active');
        if (targetA.hasClass('CMCM_SMD_A')) {
          targetA.parent().parent().find('.CMCM_SubMenuItem').addClass('active');
        }
      } else if (scrollTop < 100) {
        $('a[href="#'+ this.id +'"]').removeClass('active');;
        if (index == 0) {
          $('a[href="#'+ item.id +'"]').addClass('active');
        }
      } else {
        $('a[href="#'+ this.id +'"]').removeClass('active');;
      }
    });

    /*
    console.log('anchorCounterpartTop: ', anchorCounterpartTop);
    console.log('Scrolling', scrollTop, subMenuAncHeadTop, subMenuAncBottTop);
    if (subMenuAncBottTop >= anchorCounterpartTop) {
      subMen.addClass('sticky');
    }
    */
    AddAnimateToElement(scrollTop);
  });

  function AddAnimateToElement( _top ) {
    var elements = $('.has-anim');
    var animCls = 'animated';
    elements.map(function(i, ele){
      var _offsetTop = $(ele).offset().top;
      if (_top >= _offsetTop - 700) {
        $(ele).addClass(animCls);
      }
    });
  };


  /* Adjust widths automatically in mobiles: */
  function autoWidth() {
    if (window.innerWidth > 768) return;
    var targetElement = $('.CMCM_AutoWidth');
    for (var i = 0; i < targetElement.length; i++) {
      var me = $(targetElement[i]);
      var targetParents = me.parent();
      var targetSibling = targetParents.find('.CMCM_AutoWidthSibling');
      var parentWidth = targetParents.width();
      var siblingWidth = targetSibling.width();
      var paddings = me.attr('data-padding');
      if (!paddings) { paddings = 0; }
      var finalWidth = parentWidth - siblingWidth - paddings;
      me.width( finalWidth );
    }
  };
  autoWidth();


  /* ==== Make scrolling smooth ==== */
  // Select all links with hashes
  // And remove links that don't actually link to anything
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    var target = $(this.hash);
    var topValue = target.offset().top - 70;
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: topValue
      }, 1000, function() { //Callback, must change focus!
        var $target = $(target);
        $target.focus();
      });
    }
  });

  
})();
