/*
  Script for PMP Techniques
  Author: Alexandra Wang
  Latest modified: 2017-05-05 19:10
*/
;(function(win, doc, $) {
	var PMPTech = {
		_doc: $(doc) || $(document),
    _body: $('body'),
    _userAgent: '',
    _isWeiXin: false,
    _isAndroid: false,
    _isIOS: false,
    _prefix: 'pmp-',
    _actCls: 'active',
    page: null,
    processData: {
      'P_D_4': Project_Integration_Management,
      'P_D_5': Project_Scope_Management,
      'P_D_6': Project_Time_Management
    },
    init: function(pageObj) {
      var me = this;
      me.page = pageObj;
      if (me.processData) me.bindProcessEvent(me);
    },

    bindProcessEvent: function(me) {
      var processes = me.page.process;
      processes.click(function(){
        var _prc = $(this);
        var _pid = me._prefix + _prc.attr('data-id'); //'041'
        var _tid = _prc.attr('data-target'); //'P_D_4'
        var _con = $('#' + _tid); // Container for details
        var prcDatas = me.processData[_tid].datas;
        console.log('Clicking ... ', prcDatas);
        _con.addClass(me._actCls);
      });
    }





  };
	win.PMPTech = PMPTech;
})(window, document, jQuery);

/* Make it work: */
(function($) {
  var PMPInstance = {
    process: $('.P_Process')
  };

  PMPTech.init(PMPInstance);
})(jQuery);
