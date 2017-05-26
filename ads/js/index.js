/*
  Script of Cheetah Ads.
  Author: Alexandra
  Date: 2017-05-26 19:15
*/
var popForm = [
      '<form action="" id="form1" method="post" class="wpcf7-form" novalidate="novalidate">',
        '<input type="hidden" name="secret" value="1489487096">',
        '<input type="hidden" name="form_name" value="ads-form">',
        '<p>Your Name (Required)<br>',
          '<span class="wpcf7-form-control-wrap name">',
            '<input type="text" name="data[name]" id="name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false">',
          '</span>',
        '</p>',
        '<p>Your Email (Required)<br>',
          '<span class="wpcf7-form-control-wrap email">',
            '<input type="email" name="data[email]" id="email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false">',
          '</span>',
        '</p>',
        '<p>Company<br>',
          '<span class="wpcf7-form-control-wrap company">',
            '<input type="text" name="data[company]" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false">',
          '</span>',
        '</p>',
        '<p>Title<br>',
          '<span class="wpcf7-form-control-wrap title">',
            '<input type="text" name="data[title]" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false">',
          '</span>',
        '</p>',
        '<p>Phone<br>',
          '<span class="wpcf7-form-control-wrap phone">',
            '<input type="text" name="data[phone]" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false">',
          '</span>',
        '</p>',
        '<p>Location<br>',
          '<span class="wpcf7-form-control-wrap location">',
            '<select name="data[location]" class="wpcf7-form-control wpcf7-select" aria-invalid="false">',
              '<option value="">---</option>',
              '<option value="US">US</option>',
              '<option value="Europe">Europe</option>',
              '<option value="Asia">Asia</option>',
              '<option value="Other">Other</option>',
            '</select>',
          '</span>',
        '</p>',
        '<p>Interest<br>',
          '<span class="wpcf7-form-control-wrap interest">',
            '<input id="interest1" type="checkbox" name="data[interest][]" value="Brand Awareness"><label for="interest1">Brand Awareness</label>',
            '<input id="interest2" type="checkbox" name="data[interest][]" value="Performance"><label for="interest2">Performance</label>',
            '<input id="interest3" type="checkbox" name="data[interest][]" value="NA"><label for="interest3">NA</label>',
          '</span>',
        '</p>',
        '<p class="mmsg"></p>',
        '<p>',
          '<input type="button" value="Send" class="wpcf7-form-control wpcf7-submit" onclick="formsend()">',
        '</p>',
        '<div class="wpcf7-response-output wpcf7-display-none"></div>',
      '</form>'].join('');

;(function(win, doc, $) {
	var AdsPage = {
		_doc: $(doc) || $(document),
    _body: $('body'),
    avlHeight: win.screen.availHeight,
    ua: '',
    isWeiXin: false,
    isAndroid: false,
    isIOS: false,
    maxVHeight: 800,
    mediaMaxWidth: 868,
    switchInterval: null,
    switchIndex:0,
    page: null,
    lang: 'en-us',
    isUsingForm: false, // If using form, make it true
		init: function(pageObj) {
      var me = this;
      me.page = pageObj;
      me.detectLanguage();
      me.renderPubNav();
      me.renderPubFooter();
      me.initDom();
      me.bindEvents();
      me.resetEvents();
      me.decideUA();
      me.renderStories();
      $(win).on('resize', function(event) {
        me.avlHeight = win.screen.availHeight;
        me.initDom();
        event.preventDefault();
      });
      if (typeof EventJson != 'undefined') {me.renderList(EventJson.data, EventJson.type);}
      if (typeof InsightJson != 'undefined') {me.renderList(InsightJson.data, InsightJson.type);}
    },

    decideUA: function() {
      var me = this;
      var pg = me.page;
      me.ua = navigator.userAgent.toLowerCase();
      me.isWeiXin = ( me.ua.indexOf('micromessenger') != -1 );
      me.isAndroid = ( /Android|HTC/i.test(me.ua) );
      me.isIOS = (!me.isAndroid) && (/iPod|iPhone/i.test(me.ua));
      if ( me.isAndroid || me.isIOS ) {
        pg.topVideo.attr('controls', 'controls');
      }
    },
    
    detectLanguage: function() {
      var me = this;
      var _lang = $('body').attr('data-lang');
      if (_lang) {
        me.lang = _lang;
      }
    },

    initDom: function() {
      var me = this;
      me.avlHeight = (win.screen.availHeight > me.maxVHeight)?(me.maxVHeight):(win.screen.availHeight); // Not more than 800
      me.adjustBillboard();
      me.adjustSlogan();
      me.adjustVideoMask();
      me.adjustPlmTxtItems();
      me.page.containerOfList.css('min-height', ( window.innerHeight - 393 ) + 'px');
      if ( ($(win).width() + 15) <= me.mediaMaxWidth) {
        me.adjustStoryBallsForMobile();
      } else {
        me.resetStoryBallsFromMobile();
      }
    },

    navDataPerLang: function() {
      var data_en_us = {
        logo: {text: 'Cheetah Ads'},
        navs: [
          {
            liClassName: 'nav-item',
            aClassName: 'nav-a',
            hrefURL: '/insights',
            text: 'Insights',
            id: '',
            hasS: true
          },
          {
            liClassName: 'nav-item',
            aClassName: 'nav-a',
            hrefURL: '/event',
            text: 'Events',
            id: '',
            hasS: true
          },
          {
            liClassName: 'nav-item',
            aClassName: 'nav-a',
            hrefURL: 'http://publishers.cmcm.com/',
            text: 'Cheetah for Publishers',
            id: '',
            hasS: true
          },
          {
            liClassName: 'nav-item hide get-started',
            aClassName: 'nav-a A_ContactBtn has-trans',
            hrefURL: 'mailto:ads@cmcm.com',
            text: 'Contact Us',
            id: 'A_StartBtn',
            hasS: false
          },
          {
            liClassName: 'nav-item has-login',
            aClassName: 'nav-a has-border has-trans',
            hrefURL: 'https://ori.cmcm.com/login/',
            text: 'Log in',
            id: '',
            hasS: false
          }
        ]
      };
      var data_zh_tw = {
        logo: {text: '猎豹广告平台'},
        navs: [
          {
            liClassName: 'nav-item',
            aClassName: 'nav-a',
            hrefURL: '/zh-tw/insight/',
            text: 'Insights',
            id: '',
            hasS: true
          },
          {
            liClassName: 'nav-item',
            aClassName: 'nav-a',
            hrefURL: '/zh-tw/event/',
            text: 'Events',
            id: '',
            hasS: true
          },
          {
            liClassName: 'nav-item',
            aClassName: 'nav-a',
            hrefURL: '/zh-tw/about/',
            text: '關於Cheetah Ads',
            id: '',
            hasS: true
          },
          {
            liClassName: 'nav-item',
            aClassName: 'nav-a A_ContactBtn has-trans',
            hrefURL: 'mailto:Ann.chen@ileopard.com',
            text: '聯繫我們',
            id: '',
            hasS: true
          }
        ]
      };
      return {'en-us': data_en_us, 'zh-tw': data_zh_tw};
    },

    renderPubNav: function() {
      var me = this;
      var pg = me.page;
      var _D = me.navDataPerLang();
      var data = _D[me.lang];
      var navList = (data.navs)?(data.navs):(_D['en-us'].navs);
      var navHtml = '';
      navList.map(function(item, i) {
        var decoration = (item.hasS)?('block'):('none');
        navHtml += '<li class="'+ item.liClassName +'" id="'+ item.id +'">\
                     <a class="'+ item.aClassName +'" href="'+ item.hrefURL +'">'+ item.text +'<s class="has-trans" style="display:'+ decoration +'"></s></a>\
                    </li>';
      });
      var _html =
      '<div class="container clearfix has-trans">\
          <a class="the-logo has-trans" title="'+ data.logo.text +'">Cheetah Ads</a>\
          <a class="the-burger for-mobile-only has-trans" id="A_NavBurger" href="javascript:;">\
            <span class="bar1 has-trans">&nbsp;</span>\
            <span class="bar2 has-trans">&nbsp;</span>\
            <span class="bar3 has-trans">&nbsp;</span>\
          </a><!-- burger -->\
          <ul class="navs has-trans clearfix" id="A_Navs">'+ navHtml +'</ul>\
        </div>';
      pg.topBar.html(_html);
      /* Can bind only after rendering elements: */
      pg.navBurger = $('#A_NavBurger');
      pg.navList = $('#A_Navs');
      pg.startBtn = $('#A_StartBtn');
      pg.contactBtn = $('.A_ContactBtn');
    },

    footDataPerLang: function() {
      var foot_en_us = {
        currentLang: 'English',
        indexLink: '/',
        aboutText: 'About Us',
        aboutLink: 'http://www.cmcm.com/en-us/about/',
        policyText: 'Privacy Policy',
        policyLink: '/privacy'
      };
      var foot_zh_tw = {
        currentLang: '繁體中文',
        indexLink: '/zh-tw/',
        aboutText: '關於我們',
        aboutLink: '/zh-tw/about/',
        policyText: '隱私協議',
        policyLink: '/zh-tw/privacy/'
      };
      return {'en-us': foot_en_us, 'zh-tw': foot_zh_tw};
    },
    
    renderPubFooter: function() {
      var me = this;
      var pg = me.page;
      var data = me.footDataPerLang()[me.lang];
      var footHtml = 
        '<div class="foot-link-group with-socials clearfix has-trans">\
          <a class="ft-link has-trans facebook" href="https://www.facebook.com/CheetahAds">Facebook</a>\
          <a class="ft-link has-trans twitter" href="https://twitter.com/CheetahAds">Twitter</a>\
          <a class="ft-link has-trans linkedin" href="https://www.linkedin.com/company-beta/1140191/">LinkedIn</a>\
        </div>\
        <div class="foot-link-group with-txts rel clearfix has-trans">\
          <a class="ft-txt ft-normal-txt" href="'+ data.aboutLink +'" target="_blank">'+ data.aboutText +'</a>\
          <a class="ft-txt ft-seperate">&nbsp;|&nbsp;</a>\
          <a class="ft-txt ft-normal-txt" href="'+ data.policyLink +'">'+ data.policyText +'</a>\
          <a class="ft-txt ft-seperate">&nbsp;|&nbsp;</a>\
          <a class="ft-txt ft-copyright">Cheetah Mobile © 2017 ·</a>\
          <a class="ft-txt ft-lang" id="A_switchLang" href="javascript:;">'+ data.currentLang +'</a>\
          <div class="langs-list has-trans" id="A_langsList">\
            <a class="select-lang has-trans" href="/zh-tw/">繁體中文</a>\
            <a class="select-lang has-trans last" href="/">English</a>\
          </div>\
        </div>';
      pg.footerContainer.html( footHtml );
      /* Can bind only after rendering elements: */
      pg.langsList = $('#A_langsList');
      pg.switchLangBtn = $('#A_switchLang');
    },

    resetEvents: function() {
      var me = this;
      var pg = me.page;
      pg.theLists.find('li').remove();
    },
    
    popHTML: function(inner) {
      var html = '<div class="pop-mask has-trans" id="A_PopWrap"><div class="pop-container has-trans"><div class="pop-close has-trans" id="A_PopCloseBtn">Close</div>' + inner + '</div></div>';
      return html;
    },

    renderList: function(data, type) {
      var me = this;
      var len = data.length;
      if (!len) return;
      for (var i = 0; i < len; i++) {
        var item = data[i];
        var style = item.type; //'normal' or 'simple'
        var list = $('#A_DatasOf_' + type + ' #A_UL_' + style).get(0);
        if (!list) return;
        list.innerHTML += me.listItemTemplate(style, item);
      };
      $('.A_MeetUs').click(function(evt){
        me.popUpForm(evt);
      });
      $('.A_ShareBtns').click(function(evt){
        evt.stopPropagation();
        $('.A_Shares').removeClass('sharing').fadeOut(200);
        var share = $(this).parent().parent().find('.A_Shares');
        var sbtns = share.find('a.at-share-btn');
        var shareWidth = 38*sbtns.length; /* 38 based on icon styles you choose */
        share.addClass('sharing').css('width', shareWidth+'px').fadeIn(200);
      });
      me._body.click(function(){
        var shares = $('.A_Shares');
        if (shares.hasClass('sharing')) {
          shares.removeClass('sharing').fadeOut(200);
        }
      });
    },

    listItemTemplate: function(style, item) {
      var nameLimit = 80;
      var infoLimit = 120;
      if (style == 'normal') {
        var ifHasLogo = (item.logo)?(''):('none');
        var ifHasLoca = (item.loca)?(''):('none');
        var infoShows = (item.info.length > infoLimit)?(item.info.substr(0,infoLimit) + '...'):(item.info);
        var nameShows = (item.name.length > nameLimit)?(item.name.substr(0,nameLimit) + '...'):(item.name);
        var tmpl = '<li class="one-normal has-trans">\
                      <div class="normal-top">\
                        <img class="normal-img" src="'+ item.imag +'" alt="'+ item.name +'" />\
                        <div class="normal-mask has-trans '+ ifHasLogo +'"></div>\
                        <img class="normal-logo has-trans '+ ifHasLogo +'" src="'+ item.logo +'" alt="'+ item.name +'" />\
                      </div>\
                      <div class="normal-bottom">\
                        <span class="normal-category">'+ item.category +'</span>\
                        <a class="normal-name has-trans" href="'+ item.link +'">'+ nameShows +'</a>\
                        <p class="normal-para">'+ infoShows +'</p>\
                        <span class="normal-time-loc">'+ item.time +' <b class="normal-sep '+ ifHasLoca +'">|</b> '+ item.loca +'</span>\
                        <a class="normal-share-btn A_ShareBtns has-trans">share</a>\
                      </div>\
                      <div class="addthis_inline_share_toolbox A_Shares custom-share" style="display:none;" data-title="'+ item.name +'" data-url="'+ item.link +'"></div>\
                      <a class="normal-meetus A_MeetUs has-trans" href="mailto:ads@cmcm.com">Meet Us</a>\
                    </li>';
      } else { // Else is 'simple' only, temporarily.
        var tmpl = '<li class="one-simple clearfix">\
                      <span class="simple-time">'+ item.time +'</span>\
                      <h3 class="simple-name">'+ item.name +'</h3>\
                      <span class="simple-loc">'+ item.loca +'</span>\
                      <a class="simple-more has-trans" href="'+ item.link +'">More Info</a>\
                    </li>';
      }
      return tmpl;
    },

    adjustPlmTxtItems: function() {
      var me = this;
      var pg = me.page;
      var plmBoxWidth = pg.plmTxtBox.width();
      var plmItemWidth = Math.floor( (plmBoxWidth - 20)/3 ) - 40;
      if ( ($(win).width() + 15) <= me.mediaMaxWidth) {
        pg.plmItems.css('width', plmItemWidth + 'px');
      } else {
        pg.plmItems.css('width', 'auto');
      }
    },

    resetStoryBallsFromMobile: function() {
      var me = this;
      var pg = me.page;
      pg.storyBall.css('width', '180px');
      pg.theSBalls.css({
        'width': '115px',
        'height': '115px',
        'border-radius': '115px'
      });
    },

    adjustStoryBallsForMobile: function() {
      var me = this;
      var pg = me.page;
      var ballContWidth = $(pg.storyCont[0]).width();
      var storyUnitWidth = parseInt( Math.floor(ballContWidth/3.2) );
      var sBallWidth = parseInt( Math.floor(storyUnitWidth * 0.78) );
      sBallWidth = (sBallWidth > 100)?(100):(sBallWidth);
      pg.storyBall.css('width', storyUnitWidth + 'px');
      pg.theSBalls.css({
        'width': sBallWidth + 'px',
        'height': sBallWidth + 'px',
        'border-radius': sBallWidth + 'px'
      });
    },

    popUpToShare: function(evt) {
    },

    popUpForm: function(evt) {
      var me = this;
      if (me.isUsingForm) {
        evt.preventDefault();
        var pg = me.page;
        me._body.append(me.popHTML(popForm));
        if (me.isWeiXin) {
          pg.topVideo.hide();
        }
        pg.popCloseBtn = $('#A_PopCloseBtn');
        pg.popCloseBtn.click(function() {
          $(this).parent().parent().remove();
          pg.topVideo.show();
        });
      } else { // Send email instead of using form:
        if (me.isWeiXin) {
          evt.preventDefault();
          alert('Please send an email to ads@cmcm.com.');
        }
      }
    },
    
    bindEvents: function() {
      var me = this;
      var pg = me.page;
      /* Scroll for top bar: */
      $(win).scroll(function(){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if( scrollTop >= me.maxVHeight ){
          pg.topBar.addClass('float');
          pg.startBtn.removeClass('hide');
        }else{
          pg.topBar.removeClass('float');
          pg.startBtn.addClass('hide');
        }
      });
      /* Burger clicks for menu on mobiles: */
      pg.navBurger.click(function() {
        if (pg.navList.hasClass('showing')) {
          pg.navList.removeClass('showing');
        } else {
          /* Calculate its height before shown: */
          var lis = pg.navList.find('li');
          var oneLiHeight = 46;
          var listHeight = oneLiHeight * lis.length;
          pg.navList.css('height', listHeight + 'px').addClass('showing');
        }
      });
      /* Contact button pops the form: */
      pg.contactBtn.click(function(evt) {
        me.popUpForm(evt);
      });
      /* Placement video switch: */
      pg.plmItems.click(function() {
        var _me = $(this);
        var token = _me.attr('data-id');
        var _vd = $('#A_PlmV_' + token);
        pg.plmItems.removeClass('active');
        _me.addClass('active');
        pg.plmVideos.hide();
        _vd.show();
        /* Note: In Weixin, all videos are z-index TOP! */
      });
      /* On detail page of insights, bind sharebtn click event */
      if (pg.detailShareBtn.length > 0) {
        pg.detailShareBtn.click(function(evt){
          evt.stopPropagation();
          pg.detailSharePanel.addClass('sharing').fadeIn(200);
        });
        me._body.click(function(){
          if (pg.detailSharePanel.hasClass('sharing')) {
            pg.detailSharePanel.removeClass('sharing').fadeOut(200);
          }
        });
      }
      /* Bind click to choose other languages: */
      pg.switchLangBtn.click(function(){
        if (!pg.langsList.hasClass('showlang')) {
          pg.langsList.addClass('showlang');
        } else {
          pg.langsList.removeClass('showlang');
        }
      });
    },

    renderStories: function() {
      var me = this;
      var pg = me.page;
      var stories = pg.storyItem;
      var storyLen = stories.length;
      var tabWidths = 0;
      /* First to render tabs according to length of stories: */
      for (var i = 0; i < storyLen; i++) {
        if (i == 0) {
          pg.storyTabBox.append( '<a class="A_StoryTabs has-trans active" data-index="'+ i +'"></a>' );
        } else {
          pg.storyTabBox.append( '<a class="A_StoryTabs has-trans" data-index="'+ i +'"></a>' );
        }
        tabWidths += 70; // Width of one tab, including margin.
      }
      /* Second to calculate widths: */
      pg.storyList.css('width', storyLen * 100 + '%' );
      stories.css('width', parseInt( Math.floor(100/storyLen) ) + '%' );
      pg.storyTabBox.width( tabWidths );
      pg.storyTabs = $('.A_StoryTabs');
      me.switchInterval = setInterval(function(){
        pg.storyTabs.removeClass('active');
        $(pg.storyTabs[me.switchIndex]).addClass('active');
        pg.storyList.css('left', '-' + me.switchIndex * 100 + '%' );
        me.switchIndex += 1;
        if (me.switchIndex >= storyLen ) {
          me.switchIndex = 0;
        }
      }, 10000);
      pg.storyTabs.click(function() {
        clearInterval( me.switchInterval );
        me.switchIndex = $(this).attr('data-index');
        pg.storyTabs.removeClass('active');
        $(this).addClass('active');
        pg.storyList.css('left', '-' + me.switchIndex * 100 + '%' );
      });
    },

    adjustBillboard: function() {
      var me = this;
      var pg = me.page;
      pg.billboard.height(me.avlHeight);
    },

    adjustSlogan: function() {
      var me = this;
      var pg = me.page;
      var sloganTop = parseInt( Math.floor(me.avlHeight/3.68) );
      pg.slogan.css('padding-top', sloganTop + 'px');
    },

    adjustVideoMask: function() {
      var me = this;
      var pg = me.page;
      var proportion = 720/1280;
      pg.vdMask.width( me.avlHeight * proportion + 20 );
      pg.topVideo.width( me.avlHeight * proportion );
    },


  };

	win.AdsPage = AdsPage;
})(window, document, jQuery);

/* Make things work: */
(function($) {

  var specificPage = {
    topBar: $('#A_TopBar'),
    // startBtn: $('#A_StartBtn'),
    // contactBtn: $('.A_ContactBtn'),
    // navBurger: $('#A_NavBurger'),
    // navList: $('#A_Navs'),
    footerContainer: $('#A_FooterContainer'),
    // switchLangBtn: $('#A_switchLang'),
    // langsList: $('#A_langsList'),
    popCloseBtn: null,
    billboard: $('#A_Billboard'),
    slogan: $('#A_Slogan'),
    topVideo: $('#A_Video'),
    allVideos: $('.A_ImVideo'),
    vdMask: $('#A_VdMask'),
    plmTxtBox: $('#A_PlmTextBox'),
    plmItems: $('.A_PlacementItem'),
    plmVideos: $('.A_PlmVideo'),
    storyList: $('#A_StoryList'),
    storyTabBox: $('#A_StoryTabBox'),
    storyItem: $('.A_SuccessStory'),
    storyCont: $('.A_StoryContents'),
    storyBall: $('.A_BallUnit'),
    theSBalls: $('.A_SBall'),
    theLists: $('.A_ListUL'),
    containerOfList: $('.A_ContainerOfList'),
    detailShareBtn: $('.A_DetailShareBtn'),
    detailSharePanel: $('.A_ShareDetail')
  }

  AdsPage.init(specificPage);
})(jQuery);

