/*
  Script of Cheetah official website.
  Author: Alexandra
  Latest modified: 2017-11-13 17:38
*/

(function(win, doc, $) {
	var CMCMWebsite = {
    _win: $(win) || $(window),
		_doc: $(doc) || $(document),
    _body: $('body'),
    page: null,
    lang: 'en-us',
    curr: 'index',
    clsn: 'active',
		init: function(pageObj) {
      var me = this;
      me.page = pageObj;
      me.DetectLanguage();
      me.DetectCurrentPage();
      me.DealWithDatas();
      me.RenderPublicModules();
      me.RenderIndexPage();
      me.RenderSubPages();
      /* After rendering, bind events: */
      me.AutoWidth();
      me.BindAllEvents();
      me.BindScrolling();
    },

    DetectLanguage: function() {
      var me = this;
      var curLang = me._body.attr('data-lang');
      if (curLang && curLang.length > 0) me.lang = curLang;
    },
    DetectCurrentPage: function() {
      var me = this;
      var cr = me._body.attr('data-subpage');
      if (typeof cr != 'undefined') me.curr = cr;
    },
    DealWithDatas: function() {
      var me = this;
      if (typeof PublicNav != 'undefined') me.publicNav = PublicNav[me.lang];
      if (typeof IntrosToIndex != 'undefined') me.introsToIndex = IntrosToIndex[me.lang];
      if (typeof CompanyInfoList != 'undefined') me.companyInfoList = CompanyInfoList[me.lang];
      if (typeof ProductList != 'undefined') me.productList = ProductList[me.lang];
      if (typeof ContactList != 'undefined') me.contactList = ContactList[me.lang];
      if (typeof PublicFooter != 'undefined') me.publicFooter = PublicFooter[me.lang];
    },

    /* Output paragraph by paragraph from an array: */
    ArrayOutput: function(array, htmlTag, htmlCloseTag) {
      if (array.length < 1 || !array) return;
      var result = '';
      if (!htmlTag) htmlTag = '<span>';
      if (!htmlCloseTag) htmlCloseTag = '</span>';
      array.map(function(text){
        result += (htmlTag + text + htmlCloseTag);
      });
      return result;
    },
    
    /* Render top bar to the first screen for all pages: */
    RenderTopBar: function(pubNav) {
      var me = this;
      var name = pubNav.name;
      var cnCls = (me.lang == 'zh-cn')?(me.clsn):('');
      var enCls = (me.lang == 'en-us')?(me.clsn):('');
      var _html = '<div class="top-bar" id="CMCM_TopBar">\
                    <div class="manage-width clearfix">\
                      <h1 class="top-logo has-trans">\
                        <a class="has-trans" href="/'+ me.lang +'/">'+ name +'</a>\
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
      me.page.firstScreen.prepend(_html);
      me.page.topBar = $('#CMCM_TopBar');
      me.page.topNav = $('#CMCM_TopNav');
      me.page.topBurger = $('#CMCM_TopBurger');
    },

    /* Render public navigator in all pages: */
    RenderPublicNav: function(navData) {
      var me = this;
      navData.map(function(item, index){
        var _name = item.displayName,
            _target = item.target,
            _linkTo = item.linkTo,
            _active = item.active,
            _gaTags = item.gaTag,
            _subNvs = item.subNavs,
            _actCls = (_active == me.curr)?(me.clsn):(''),
            _subNavHtml = '';
        _subNvs.map(function(subNav){
          var _subNavName = subNav.subNavName,
              _subNavHash = subNav.subNavLink,
              _subLinkTo = (subNav.outlink)?(subNav.subNavLink):(_linkTo + '#' + _subNavHash);
          _subNavHtml += '<a class="one-sub has-trans" href="'+_subLinkTo+'" target="'+_target+'">'+_subNavName+'</a>';
        });
        var _html = '<li class="top-nav-li has-trans CMCM_TopNavLi">\
                      <a class="top-nav-a has-trans '+_actCls+'" href="'+_linkTo+'" target="'+_target+'" onclick="ga(\'send\', \'event\', \''+_gaTags+'\', \'click\');">'+_name+'<s class="has-trans"></s><b class="has-trans"></b></a>\
                      <div class="top-nav-sub">'+_subNavHtml+'</div>\
                     </li>';
        $(_html).insertBefore('#CMCM_TopLangSwitch');
      });
      me.page.topNavLi = $('.CMCM_TopNavLi');
    },

    /* Index first screen slider: */
    SwiperInit: function() {
      new Swiper('.billboard-swiper-container', {
        pagination:'.billboard-swiper-pagination',
        paginationClickable:true,
        spaceBetween:0,
        centeredSlides:true,
        autoplay:0,
        autoplayDisableOnInteraction:false
      });
      new Swiper('.news-swiper-container', {
        pagination:'.news-swiper-pagination',
        paginationClickable:true,
        spaceBetween:0,
        centeredSlides:true,
        autoplay:5000,
        autoplayDisableOnInteraction:false
      });
    },

    /* Render AI content on index: */
    RenderAIContentOnIndex: function(proList) {
      var me = this, threeBubbles = '', ifHide = '';
          ai = proList.category.ai.categoryData.ai,
          cateName = ai.name,
          cateDesc = me.ArrayOutput(ai.desc),
          aiProductShown = ai.data[1],
          aiProName = aiProductShown.name,
          aiProDesc = me.ArrayOutput(aiProductShown.descForIndex),
          aiProTags = aiProductShown.tags,
          aiProLink = aiProductShown.link,
          aiProTarg = aiProductShown.target;
      if (me.lang != 'zh-cn') ifHide = 'hide';
      aiProTags.map(function(tag, i){
        threeBubbles += '<div class="ai-chips abs ai-bubbles ai-bubble-'+ (i+1) +' has-trans has-anim">\
                          <span class="ai-bbl-top has-trans"><b>'+ tag.num +'</b>'+ tag.adj +'</span>\
                          <span class="ai-bbl-mid has-trans">'+ tag.noun +'</span>\
                          <span class="ai-bbl-btm has-trans '+ ifHide +'">'+ tag.sentence +'</span>\
                         </div><!-- bubble '+ (i+1) +' -->';
      }); //End map
      var _rightHtm = '<div class="ai-right-content">\
                        <div class="ai-chips abs ai-wave has-anim"></div>\
                        <div class="ai-chips abs ai-voice-box has-anim">'+ threeBubbles +'</div>\
                      </div><!-- ai right -->';
      var _leftHtml = '<div class="ai-left-content">\
                        <h3 class="app-name has-anim">\
                          <a class="app-namelink has-trans" href="'+ aiProLink +'" target="'+ aiProTarg +'">'+ aiProName +'</a>\
                        </h3>\
                        <div class="app-desc has-anim">'+ aiProDesc +'</div>\
                      </div><!-- ai left -->';
      me.page.inxAIContainer.append(_leftHtml).append(_rightHtm);
    },

    /* Render recommanded apps on index page: */
    RenderToolsOnIndex: function(proList) {
      var me = this;
      var ToolsData = proList.category.mobileApps.categoryData.tool.data;
      ToolsData.map(function(tData, i){
        var _priority = tData.priority,
            _descForIndex = me.ArrayOutput(tData.descForIndex),
            // _descForIndex = tData.descForIndex[0],
            _target = tData.target,
            _name = tData.name,
            _icon = tData.icon,
            _star = tData.star,
            _tags = tData.tags,
            _link = tData.link,
            _pict = tData.pict,
            _proportion = 'proportion-100',
            _ifShowPict = 'display:none;',
            _ifDisplayOnIndex = 'display:none;',
            _tagContent = '',
            _ifHasBorderRight = '';
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
        }; // End switch
        if (_tags.length > 0) {
          for (var j = 0; j < _tags.length; j++) {
            if (_tags[j].length > 1) _tagContent += ('<a class="has-trans">' + _tags[j] + '</a>');
          }
        }; // End of dealing with tags
        if (i == 1 || i == 3 || i == 4) _ifHasBorderRight = 'has-right-border';
        if (_descForIndex && _descForIndex.length > 1) _ifDisplayOnIndex = 'display:block;';
        var _toolUnit = '<div class="tool-unit '+ _proportion +' rel '+ _ifHasBorderRight +'" style="'+ _ifDisplayOnIndex +'">\
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
                              <div class="app-desc has-anim">'+ _descForIndex +'</div>\
                              <div class="tool-rank clearfix has-anim CMCM_Rank" data="'+ _star +'"></div>\
                              <div class="tool-tags clearfix has-anim">'+ _tagContent +'</div>\
                            </div><!-- End of tool-info -->\
                          </div><!-- End of tool-inner -->\
                        </div><!-- End of tool-unit -->';
        me.page.inxToolsContainer.append(_toolUnit);      
      });
    },

    /* Render app rank stars, must after tools being rendered: */
    RenderStarsForAppRank: function() {
      $('.CMCM_Rank').each(function(index, ele){
        var item = $(ele),
            rank = item.attr('data'),
            text = '<b>' + rank + '</b>',
            fullStars = Math.floor(rank),
            fullStarHTML = '<s class="full-star"></s>',
            halfStarHTML = '<s class="half-star"></s>';
        if (rank == 0 || rank == '0') return;
        for (var i = 1; i <= fullStars; i++) {item.append(fullStarHTML);}
        if (rank > fullStars) {item.append(halfStarHTML);}
        item.append(text);       
      });
    },

    /* Render slogans on index billboard: */
    RenderSlogansOnIndex: function(intros) {
      var me = this;
      me.page.inxSloganEle.html(me.ArrayOutput(intros.slogan));
      me.page.inxSubSloganEle.html(intros.subslogan);
    },

    /* Render product category introductions on index: */
    RenderCategoryIntrosOnIndex: function(proList) {
      var me = this;
      var categoriesCollect = proList.category.mobileApps.categoryData,
          cateForIndex_Tool = categoriesCollect.tool,
          cateForIndex_Socl = categoriesCollect.socl,
          cateForIndex_Game = categoriesCollect.game,
          cateForIndex_News = categoriesCollect.news,
          cateForIndex_ai = proList.category.ai.categoryData.ai,
          cateForIndex_all = [cateForIndex_ai, cateForIndex_Tool, cateForIndex_Socl, cateForIndex_Game, cateForIndex_News];
      cateForIndex_all.map(function(Obj){
        $('#CMCM_Section_' + Obj.hash).find('.CMCM_SecTitle').html(Obj.name);
        $('#CMCM_Section_' + Obj.hash).find('.CMCM_SecDescr').html(me.ArrayOutput(Obj.desc));
      });
    },
    
    /* Render live.me on index, in a particular style: */
    RenderLiveMeOnIndex: function(proList) {
      var me = this;
      var livemeData = proList.category.mobileApps.categoryData.socl.data[0];
      var _name = livemeData.name,
          _icon = livemeData.icon,
          _descForIndex = me.ArrayOutput(livemeData.descForIndex),
          // _descForIndex = livemeData.descForIndex[0],
          _tags = livemeData.tags,
          _link = livemeData.link,
          _target = livemeData.target,
          _earth1 = _tags[0].split('|')[0],
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
                    <div class="app-desc has-anim">'+ _descForIndex +'</div>\
                    <ul class="live-datas has-anim clearfix">\
                      <li class="live-data">\
                        <strong class="earth">'+ _earth1 +'</strong>\
                        <b>'+ _earth2 +'</b><s class="line"></s>\
                      </li>\
                      <li class="live-data">\
                        <strong class="tongue">'+ _tongu1 +'</strong>\
                        <b>'+ _tongu2 +'</b><s class="line"></s>\
                      </li>\
                      <li class="live-data">\
                        <strong class="award">'+ _award1 +'</strong>\
                        <b>'+ _award2 +'</b>\
                      </li>\
                    </ul>\
                  </div><!-- live info -->';
      me.page.inxLivemeTextContainer.html(_html);
    },
    
    /* Render games on index: */
    RenderGamesOnIndex: function(proList) {
      var me = this, pg = me.page;
      var GamesData = proList.category.mobileApps.categoryData.game.data;
      var ptData = GamesData[0], rsData = GamesData[1],
          dlData = GamesData[2], gjsData = GamesData[3],
          ptHtml = '<h4>'+ ptData.name +'</h4>' + me.ArrayOutput(ptData.descForIndex, '<p>', '</p>'),
          rsHtml = '<h4>'+ rsData.name +'</h4>' + me.ArrayOutput(rsData.descForIndex, '<p>', '</p>'),
          dlHtml = '<h4>'+ dlData.name +'</h4>' + me.ArrayOutput(dlData.descForIndex, '<p>', '</p>'),
          gjsHtml = '<h4>'+ gjsData.name +'</h4>' + me.ArrayOutput(gjsData.descForIndex, '<p>', '</p>');
      if (window.innerWidth > 768) {/* Full area as hotzone for desktop */
        pg.inxGamesPTCont.html(ptHtml).parent().attr('href', ptData.link).attr('target', ptData.target);
        pg.inxGamesRSCont.html(rsHtml).parent().attr('href', rsData.link).attr('target', rsData.target);
        pg.inxGamesDLCont.html(dlHtml).parent().attr('href', dlData.link).attr('target', dlData.target);
        pg.inxGamesGJSCont.html(gjsHtml).parent().attr('href', gjsData.link).attr('target', gjsData.target);
      } else {/* Only popping area as hotzone for mobile */
        pg.inxGamesPTCont.html(ptHtml).click(function(){window.open(ptData.link, ptData.target)});
        pg.inxGamesRSCont.html(rsHtml).click(function(){window.open(rsData.link, rsData.target)});
        pg.inxGamesDLCont.html(dlHtml).click(function(){window.open(dlData.link, dlData.target)});
        pg.inxGamesGJSCont.html(gjsHtml).click(function(){window.open(gjsData.link, gjsData.target)});
      }
      pg.inxGamesGJSName.html(gjsData.name);
    },
    
    /* Render news republic on index: */
    RenderNROnIndex: function(proList) {
      var me = this;
      var newsData = proList.category.mobileApps.categoryData.news.data[0];
      var newsHtml = '<a class="app-icon has-trans CMCM_AutoWidthSibling" href="'+ newsData.link +'" target="'+ newsData.target +'">\
                        <img class="has-anim" src="'+ newsData.icon +'" alt="'+ newsData.name +'" />\
                      </a>\
                      <div class="news-info CMCM_AutoWidth" data-padding="10">\
                        <h3 class="app-name has-anim">\
                          <a class="app-namelink has-trans has-anim" href="'+ newsData.link +'" target="'+ newsData.target +'">'+ newsData.name +'</a>\
                        </h3>' + me.ArrayOutput(newsData.descForIndex, '<div class="app-desc has-anim">', '</div>') +'\
                      </div>';
      me.page.inxNRContainer.html(newsHtml);
    },

    /* Render public modules like top nav and footer: */
    RenderPublicModules: function() {
      var me = this;
      me.RenderTopBar(me.publicNav);
      me.RenderPublicNav(me.publicNav.data);
      me.RenderPublicFooter(me.publicFooter);
    },

    /* Render index page, including slogan, intros, ai, tool, liveme, games, nr: */
    RenderIndexPage: function() {
      var me = this;
      if (me.curr != 'index') return;
      me.SwiperInit();
      me.RenderSlogansOnIndex(me.introsToIndex);
      me.RenderAIContentOnIndex(me.productList);
      me.RenderToolsOnIndex(me.productList);
      me.RenderStarsForAppRank();
      me.RenderCategoryIntrosOnIndex(me.productList);
      me.RenderLiveMeOnIndex(me.productList);
      me.RenderGamesOnIndex(me.productList);
      me.RenderNROnIndex(me.productList);
    },

    /* Render sub page, including left menu and main contents: */
    RenderSubPages: function() {
      var me = this, dataList = null;
      if (me.curr == 'company') {
        dataList = me.companyInfoList;
        me.RenderCompanyMission(dataList);
        me.RenderCompanyIntros(dataList);
        me.RenderCompanyHistory(dataList);
        me.RenderCompanyLeaders(dataList);
        me.RenderCompanyCulture(dataList);
        me.RenderCompanyWelfare(dataList);
      } else if (me.curr == 'contact') {
        dataList = me.contactList;
        me.RenderContactInfosToContactPage(dataList);
      } else if (me.curr == 'product') {
        dataList = me.productList;
        me.RenderAllProductsToProductPage(dataList);
      } else {
        return;
      }
      me.RenderSubPageMenu(dataList);
      me.AdjustLeftMenuPositions();
    },

    /* Render left menu in sub pages: */
    RenderSubPageMenu: function(dataList) {
      var me = this;
      var menuItems = dataList.category,
          menuContainer = $('#CMCM_SubPageMenu_' + me.curr),
          anchorHead = '<b id="CMCM_SubMenuHeadAnchor"></b>',
          anchorBott = '<b id="CMCM_SubMenuBottomAnchor"></b>';
          _cateHtml = '';
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
          // if (_cateData.unfold) {_ifUnfold = me.clsn;}
          _subHtml = ('<div class="category-details CMCM_SubMenuDetails '+ _ifUnfold +'">' + _subHtml + '</div><!-- details -->');
        }
        _cateHtml += '<div class="category-unit">\
                        <a class="category-name has-trans CMCM_SubMenuItem '+ _ifUnfold +'" href="#'+ _cateHref +'">'+ _cateName +'</a>\
                        '+ _subHtml +'\
                      </div><!-- category unit -->';
      } // End for-in
      menuContainer.append(anchorHead).append(_cateHtml).append(anchorBott);
      me.page.subMenuItems = $('.CMCM_SubMenuItem');
      me.page.subMenuSubAs = $('.CMCM_SMD_A');
    },
    
    /* Render company mission & vision: */
    RenderCompanyMission: function(comInfoList) {
      var me = this;
      var mission = comInfoList.category.missionVisions;
      var _name = mission.categoryName,
          _hash = mission.categoryLink,
          _data = mission.categoryData,
          _csan = _data.classAnchor,
          _slog = _data.slogan,
          _desc = _data.descrp,
          _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                    <h2 class="category-title">'+ _name +'</h2>\
                    <div class="one-app-introduction clearfix">\
                      <h1 class="cmcm-slogan">'+ _slog +'</h1>\
                      <p class="under-slogan">'+ _desc +'</p>\
                    </div><!-- one app introduction -->\
                   </div><!-- category container of mission and visions -->';
      me.page.companyContainer.append(_html);
    },
    
    /* Render company introductions: */
    RenderCompanyIntros: function(comInfoList) {
      var me = this;
      var intro = comInfoList.category.introduction;
      var _name = intro.categoryName,
          _hash = intro.categoryLink,
          _data = intro.categoryData,
          _csan = _data.classAnchor,
          _arry = _data.introTexts,
          _imge = _data.introImage,
          _text = me.ArrayOutput(_arry, '<p class="company-intros">', '</p>'),
          _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                     <h2 class="category-title">'+ _name +'</h2>\
                     <div class="one-app-introduction clearfix">\
                       <img class="company-view" src="'+ _imge +'" alt="'+ _name +'" />\
                       '+ _text +'</div><!-- one app introduction -->\
                   </div><!-- category container of company intro -->';
      me.page.companyContainer.append(_html);
    },
    
    /* Render company history: */
    RenderCompanyHistory: function(comInfoList) {
      var me = this;
      var devHistory = comInfoList.category.devHistory;
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
                        <span>'+ month +'</span><b>'+ _events[month] +'</b>\
                      </div><!-- item -->';
        } // End for-in
        allHistories += '<div class="history-one-year clearfix">\
                            <h3 class="year-number">'+ _year +'</h3>'+ _evtHtm +'<s>Dots</s>\
                         </div><!-- history-one-year -->';
      }); // End map
      var _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                     <h2 class="category-title">'+ _name +'</h2>\
                     <div class="one-app-introduction clearfix">'+ allHistories +'</div>\
                   </div><!-- category container of history -->';
      me.page.companyContainer.append(_html);
    },
    
    /* Render company executives: */
    RenderCompanyLeaders: function(comInfoList) {
      var me = this;
      var leaders = comInfoList.category.leaderTeam;
      var _name = leaders.categoryName,
          _hash = leaders.categoryLink,
          _data = leaders.categoryData,
          _csan = _data.classAnchor,
          _detl = _data.leaderDetails,
          _allLeaders = '';
      _detl.map(function(leader, i){
        var _leaderName = leader.name,
            _leaderTitle = leader.title,
            _leaderIntro = me.ArrayOutput(leader.detail, '<p>', '</p>'),
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
      }); // End map
      var _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                      <h2 class="category-title">'+ _name +'</h2>'+ _allLeaders +'\
                   </div><!-- category container of executive team -->';
      me.page.companyContainer.append(_html);
    },

    /* Render company culture & values: */
    RenderCompanyCulture: function(comInfoList) {
      var me = this;
      var culture = comInfoList.category.corCulture;
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
      }); // End map
      var _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                    <h2 class="category-title">'+ _name +'</h2>\
                    <div class="one-app-introduction clearfix">\
                      <div class="values-container rel">\
                        <ul class="values-display clearfix">'+ _vHtm +'</ul>\
                        <ul class="values-descrs">'+ _vDes +'</ul>\
                      </div>\
                    </div>\
                  </div><!-- category container of culture -->';
      me.page.companyContainer.append(_html);
      me.page.cultureValues = $('.CMCM_ValueItem');
      me.page.cultureValDescr = $('.CMCM_ValueDescr');
    },
    
    /* Render company employers benefits: */
    RenderCompanyWelfare: function(comInfoList) {
      var me = this;
      var welfare = comInfoList.category.empWelfare;
      var _name = welfare.categoryName,
          _hash = welfare.categoryLink,
          _data = welfare.categoryData,
          _csan = _data.classAnchor,
          _arry = _data.welfareIntros,
          _imgs = _data.welfareImages,
          _text = me.ArrayOutput(_arry, '<p class="welfare-para">', '</p>'),
          _pics = '';
      _imgs.map(function(item, i){
        var _src = item.image,
            _des = item.descr,
            _lay = '';
        if (i%2 > 0) _lay = 'right';
        _pics += '<div class="welfare-item '+ _lay +'">\
                    <img src="'+ _src +'" alt="'+ _des +'" /><p>'+ _des +'</p>\
                  </div>';
      }); // End map
      var _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                    <h2 class="category-title">'+ _name +'</h2>\
                    <div class="one-app-introduction clearfix">\
                      '+ _text +'<div class="welfare-imgs clearfix">'+ _pics +'</div>\
                    </div><!-- one app introduction -->\
                   </div><!-- category container of welfare -->';
      me.page.companyContainer.append(_html);
    },
    
    /* Render all products to product list page: */
    RenderAllProductsToProductPage: function(proList) {
      var me = this, _html ='';
      var categories = proList.category;
      for (var cate in categories) { // Traverse big category like 'mobileApps'
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
                  _appdescForProd = me.ArrayOutput(app.descForProd, '<p>', '</p>'),
                  _appLink = app.link,
                  _appTarget = app.target,
                  _ifHide = '';
              if (!_appdescForProd) _ifHide = 'hide';
              _allAppsInThisSubCate += '<div class="one-app-introduction clearfix '+ _ifHide +'">\
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
            }); // End map
            /* NOTE: One unit area in page is based on one sub cate, not big cate. */
            _html += '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                        <h2 class="category-title">'+ _name +'</h2>\
                        '+ _allAppsInThisSubCate +'\
                      </div><!-- end of category container -->';
          } // End if
        } // End traverse of sub category
      } // End for-in traverse
      me.page.productContainer.html(_html);
    },
    
    /* Render contact infos on contact page: */
    RenderContactInfosToContactPage: function(contactList) {
      var me = this, _html ='';
      var categories = contactList.category;
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
          } // End if
          _data.datas.map(function(detail, i){
            var _detailTitle = detail.title,
                _detailTexts = me.ArrayOutput(detail.details, '<p>', '</p>');
            _details += '<div class="contact-info"><p class="cont-top-para">'+ _detailTitle +'</p>'+ _detailTexts +'</div><!-- contact info -->';
          });
        }
        _html += '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                    <h2 class="category-title">'+ _name +'</h2>\
                    <div class="one-app-introduction clearfix">'+ _details +'</div>\
                  </div><!-- category container -->';
      }
      me.page.contactContainer.html(_html);
    },
    
    /* Render public footer for all pages: */
    RenderPublicFooter: function(pubFooter) {
      var me = this,
          outLinksArray = pubFooter.data.outLinks,
          copyrightObj = pubFooter.data.copyRight;
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
      me.page.footerContainer.append(ftLHtml).append(ftRHtml);
      me.RenderFooterLinks(outLinksArray);
    },
    
    /* Render footer links in footer area: */
    RenderFooterLinks: function(outlinks) {
      var me = this, outLinksHtml = '';
      var footRightContainer = $('#CMCM_FooterRight');
      var columnDataForFooter = function(jsonData) {
        if (typeof jsonData != 'undefined') {
          var footerColumnTitle = jsonData.name,
              footerColumnLink = jsonData.link,
              footerColumnItems = jsonData.category,
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
      var col_company = columnDataForFooter(me.companyInfoList);
      var col_product = columnDataForFooter(me.productList);
      var col_contact = columnDataForFooter(me.contactList);
      /* Fetch outer links for footer, like ir and hr: */
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
      footRightContainer
        .append(col_company)
        .append(col_product)
        .append(outLinksHtml)
        .append(col_contact);
    },

    /* Add animations to elements with class 'has-anim': */
    AddAnimateToElement: function(_top) {
      var elements = $('.has-anim');
      var animCls = 'animated';
      elements.map(function(i, ele){
        var _offsetTop = $(ele).offset().top;
        if (_top >= _offsetTop - 700) {
          $(ele).addClass(animCls);
        }
      });
    },

    /* Adjust left menu's position for every time refreshing: */
    AdjustLeftMenuPositions: function() {
      var me = this,
          cateContainers = $('.CMCM_CategoryContainer'),
          _sclTop = document.body.scrollTop || document.documentElement.scrollTop;
      for (var i = 0; i < cateContainers.length; i++) {
        var item = $(cateContainers[i]);
        var itemTop = item.offset().top;
        var itemId = '#' + item.attr('id');
        var targetA = $('a[href="'+ itemId +'"]');
        if (_sclTop <= itemTop) {
          me.page.subPageMenu.find('a').removeClass('active');
          targetA.addClass('active');
          $('html, body').animate({
            scrollTop: (_sclTop <= 100) ? (_sclTop) : (itemTop - 50)
          }, 800);
          break;
        }
      };// End for
    },

    /* Scrolling event: */
    BindScrolling: function() {
      var me = this,
          cateContainers = $('.CMCM_CategoryContainer'),
          scrollLimit = 380;
      me._win.scroll(function(){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        me.AddAnimateToElement(scrollTop);
        if (scrollTop >= scrollLimit) {
          me.page.topBar.addClass('fixed');
        } else {
          me.page.topBar.removeClass('fixed');
        }
        if (scrollTop >= 54) {
          me.page.subPageMenu.addClass('fixed').css('top', scrollTop + 54);
        } else {
          me.page.subPageMenu.removeClass('fixed');
        }
        /* Highlight the current content's menu: */
        cateContainers.map(function(index, item){
          if ( $(this).offset().top < (scrollTop + 100) ) {
            var targetA = $('a[href="#'+ this.id +'"]');
            me.page.subPageMenu.find('a').removeClass(me.clsn);
            targetA.addClass(me.clsn);
            if (targetA.hasClass('CMCM_SMD_A')) {
              targetA.parent().parent().find('.CMCM_SubMenuItem').addClass(me.clsn);
            }
          } else if (scrollTop < 100) {
            $('a[href="#'+ this.id +'"]').removeClass(me.clsn);
            if (index == 0) $('a[href="#'+ item.id +'"]').addClass(me.clsn);
          } else {
            $('a[href="#'+ this.id +'"]').removeClass(me.clsn);;
          }
        }); // End map
        /* In sub pages, make left menu sticky when scrolling to the bottom: */
        if (me.curr != 'index') {
          var subPageCtBottomTop = me.page.subPageCtBottom.offset().top - 3,
              subMenuAncHeadTop = me.page.subPageMenuHead.offset().top,
              subMenuAncFootTop = me.page.subPageMenuFoot.offset().top;
          if (subMenuAncFootTop >= subPageCtBottomTop) {
            me.page.subPageMenu.addClass('sticky');
            me.page.subPageMenu.css('top', scrollTop)
            if (scrollTop <= subMenuAncHeadTop) {
              me.page.subPageMenu.removeClass('sticky');
            }
          }
        }
      }); // End scroll
    },
    
    /* Adjust widths automatically in mobiles: */
    AutoWidth: function() {
      if (window.innerWidth > 768) return;
      var targetElement = $('.CMCM_AutoWidth');
      for (var i = 0; i < targetElement.length; i++) {
        var item = $(targetElement[i]),
            targetParents = item.parent(),
            targetSibling = targetParents.find('.CMCM_AutoWidthSibling'),
            parentWidth = targetParents.width(),
            siblingWidth = targetSibling.width(),
            paddings = item.attr('data-padding');
        if (!paddings) paddings = 0;
        var finalWidth = parentWidth - siblingWidth - paddings;
        item.width(finalWidth);
      }
    },

    /* After renderings, bind events to elements: */
    BindAllEvents: function() {
      var me = this;
      me.page.topNavLi.mouseenter(function(){
        var _i = $(this);
        _i.find('.top-nav-sub').addClass(me.clsn);
        _i.find('b').addClass(me.clsn);
      });
      me.page.topNavLi.mouseleave(function(){
        var _i = $(this);
        _i.find('.top-nav-sub').removeClass(me.clsn);
        _i.find('b').removeClass(me.clsn);
      });
      /* Unfold burger nav on mobiles: */
      me.page.topBurger.click(function(){
        var cls = 'unfold';
        if ( !me.page.topNav.hasClass(cls) ) {
          me.page.topNav.addClass(cls);
        } else {
          me.page.topNav.removeClass(cls);
        }
      });
      /* Hover game units to display descriptions: */
      if (me.curr == 'index') {
        me.page.inxGameUnits.mouseenter(function(){
          $(this).find('.CMCM_GameIntros').addClass(me.clsn);
        });
        me.page.inxGameUnits.mouseleave(function(){
          $(this).find('.CMCM_GameIntros').removeClass(me.clsn);
        });
      }
      /* Hover culture values: */
      if (me.curr == 'company') {
        me.page.cultureValues.mouseenter(function(){
          var _i = $(this), token = _i.attr('data');
          var _descr = $('.vd-'+ token);
          _i.addClass(me.clsn);
          me.page.cultureValDescr.removeClass(me.clsn);
          _descr.addClass(me.clsn);
        });
        me.page.cultureValues.mouseleave(function(){
          $(this).removeClass(me.clsn);
          me.page.cultureValDescr.removeClass(me.clsn);
        });
      }
      /* Click menus on the left of sub pages: */
      if (me.curr != 'index') {
        me.page.subMenuItems.click(function(){
          var _i = $(this);
          me.page.subMenuItems.removeClass(me.clsn);
          _i.addClass(me.clsn);
          me.page.subMenuSubAs.removeClass(me.clsn);
          $(_i.parent().find('.CMCM_SMD_A')[0]).addClass(me.clsn);
        });
        /* Click submenus on the left of sub pages: */
        me.page.subMenuSubAs.click(function(){
          var _i = $(this);
          var myFth = _i.parent();
          var myMenu = myFth.parent().find('.CMCM_SubMenuItem');
          var menuBtns = $('.CMCM_SubMenuItem');
          if ( !_i.hasClass(me.clsn) ) {
            me.page.subMenuItems.removeClass(me.clsn);
            me.page.subMenuSubAs.removeClass(me.clsn);
            myMenu.addClass(me.clsn);
            _i.addClass(me.clsn);
          }
        });
      }
      /* ==== Make scrolling smooth ==== */
      // Select all links with hashes except those actually linking to nothing
      $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        var target = $(this.hash);
        var topValue = target.offset().top - 70;
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: topValue
          }, 800, function() { //Callback, must change focus!
            $(target).focus();
          });
        }
      });
    },

  };
	win.CMCMWebsite = CMCMWebsite;
})(window, document, jQuery);
/* Make things work: */
(function($) {
  var realPage = {
    firstScreen: $('#CMCM_FirstScreen'),
    inxAIContainer: $('#CMCM_AIContainer'),
    inxToolsContainer: $('#CMCM_ToolsContainer'),
    inxSloganEle: $('#CMCM_Slogan'),
    inxSubSloganEle: $('#CMCM_SubSlogan'),
    inxLivemeTextContainer: $('#CMCM_LiveMeTexts'),
    inxGameUnits: $('.CMCM_GameUnit'),
    inxGamesPTCont: $('#CMCM_GameOfPT'),
    inxGamesRSCont: $('#CMCM_GameOfRS'),
    inxGamesDLCont: $('#CMCM_GameOfDL'),
    inxGamesGJSCont: $('#CMCM_GameOfGJS'),
    inxGamesGJSName: $('#GJSName'),
    inxNRContainer: $('#CMCM_NR'),
    companyContainer: $('#CMCM_CompanyContents'),
    productContainer: $('#CMCM_ProductsContents'),
    contactContainer: $('#CMCM_ContactContents'),
    subPageMenu: $('.CMCM_SubMenus'),
    footerContainer: $('#CMCM_Footer'),
    subPageCtBottom: $('#CMCM_SubPageContentBottom'),
    subPageMenuHead: $('#CMCM_SubMenuHeadAnchor'),
    subPageMenuFoot: $('#CMCM_SubMenuBottomAnchor'),

  };
  CMCMWebsite.init(realPage);
})(jQuery);
/* ============================================================== */
/* ============================================================== */
