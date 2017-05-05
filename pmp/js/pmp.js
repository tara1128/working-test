/*
  Script for PMP Techniques
  Author: Alexandra Wang
  Latest modified: 2017-05-05 16:43
*/
;(function(win, doc, $) {
	var PMPTech = {
		_doc: $(doc) || $(document),
    _body: $('body'),
    _userAgent: '',
    _isWeiXin: false,
    _isAndroid: false,
    _isIOS: false,
    page: null,
    init: function(pageObj) {
      var me = this;
      me.page = pageObj;
      me.initDom();
    },
    initDom: function() {
      console.log('PMPTech works !');
    },
  };
	win.PMPTech = PMPTech;
})(window, document, jQuery);

/* Make it work: */
(function($) {
  var PMPInstance = {
  };

  PMPTech.init(PMPInstance);
})(jQuery);
