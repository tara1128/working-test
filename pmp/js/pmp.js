/*
  Script for PMP Techniques
  Author: Alexandra Wang
  Latest modified: 2017-05-08 18:04
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
      'P_D_6': Project_Time_Management,
      'P_D_7': Project_Cost_Management
    },
    init: function(pageObj) {
      var me = this;
      me.page = pageObj;
      if (me.processData) me.bindProcessEvent(me);
      me.bindPopCloseEvent(me);
    },

    bindPopCloseEvent: function(me) {
      var _pop = me.page.popMask;
      var _cls = me.page.popClose;
      _cls.click(function(){
        if ( _pop.hasClass(me._actCls) ) {
          _pop.removeClass(me._actCls).html('');
          _cls.removeClass(me._actCls);
        }
      });
    },

    bindProcessEvent: function(me) {
      var processes = me.page.process;
      processes.click(function(){
        var _prc = $(this);
        var _pid = me._prefix + _prc.attr('data-id'); //'pmp-041'
        var _tid = _prc.attr('data-target'); //'P_D_4'
        var prcDatas = me.processData[_tid].datas;
        var _pop = me.page.popMask;
        var _cls = me.page.popClose;
        if ( !_pop.hasClass(me._actCls) ) {
          if (prcDatas[_pid]) me.renderProcessDetail(me, _pop, _cls, prcDatas[_pid]);
        } else {
          _pop.removeClass(me._actCls).html('');
          _cls.removeClass(me._actCls);
        }
      });
    },

    renderProcessDetail: function(me, pop, cls, data) {
      pop.height(me._doc.height());
      cls.addClass(me._actCls);
      var tmpl = '<div class="detail-wrapper">\
                    <h1 class="detail-title">'+ data.name +'</h1>\
                    <h2 class="detail-subtitle">'+ data.engname +'</h2>\
                    <div class="detail-infos has-trans">\
                      <span class="detail-kl">知识领域：'+ data.knowledge +' &nbsp;|&nbsp; </span>\
                      <span class="detail-gp">过程组：'+ data.processGroup +'</span>\
                    </div>\
                    <div class="detail-notes">\
                      <h3>考试要点：</h3>\
                      <ul class="detail-notes-content clearfix" id="D_KeyNotes"></ul>\
                    </div>\
                    <div class="detail-input">\
                      <h4>输入：</h4>\
                      <ul class="detail-input-content clearfix" id="D_Input"></ul>\
                    </div>\
                    <div class="detail-tools">\
                      <h4>工具：</h4>\
                      <ul class="detail-input-content clearfix" id="D_Tools"></ul>\
                    </div>\
                    <div class="detail-output">\
                      <h4>输出：</h4>\
                      <ul class="detail-input-content clearfix" id="D_Output"></ul>\
                    </div>\
                  </div>';
      pop.addClass(me._actCls).html( tmpl );
      var keyNotes = data.keyNotes,
          inputs = data.inputs,
          tools = data.tools,
          outputs = data.outputs;
      if (keyNotes) me.renderListItems(keyNotes, $('#D_KeyNotes'));
      if (inputs) me.renderListItems(inputs, $('#D_Input'));
      if (tools) me.renderListItems(tools, $('#D_Tools'));
      if (outputs) me.renderListItems(outputs, $('#D_Output'));
    },

    renderListItems: function(dataArray, container) {
      var itemsTmpl = '';
      for (var i = 0; i < dataArray.length; i++) {
        if (dataArray[i].ext) {
          if (dataArray[i].ext instanceof Array) {
            var extArray = dataArray[i].ext;
            var intoDialog = '';
            extArray.map(function(v, i) {
              intoDialog += '<span class="dialog-text">'+ v.text + '</span>';
            });
            itemsTmpl += '<li class="one-item clearfix has-trans"><span class="item-text">'+ dataArray[i].text +'</span> | <a class="item-extend has-trans D_HasDetailDialog" href="javascript:;">Detail</a><div class="dialog-bubble has-trans D_Dialog">'+ intoDialog +'<s class="D_CloseDialog has-trans">Close</s></div></li>';
          } else { 
            itemsTmpl += '<li class="one-item clearfix has-trans"><span class="item-text">'+ dataArray[i].text +'</span> | <a class="item-extend has-trans" href="javascript:;" data-id="'+ dataArray[i].ext +'">Detail</a></li>';
          }
        } else {
          itemsTmpl += '<li class="one-item clearfix has-trans"><span class="item-text">'+ dataArray[i].text +'</span></li>';
        }
      }
      container.html( itemsTmpl );
      this.bindDetailDialogEvents(this);
    },

    bindDetailDialogEvents: function(me) {
      var detailBtn = $('.D_HasDetailDialog');
      var detailClsBtn = $('.D_CloseDialog');
      detailBtn.click(function(){
        $(this).parent().find('.D_Dialog').addClass(me._actCls);
      });
      detailClsBtn.click(function() {
        $(this).parent().removeClass(me._actCls);
      });
    },

  };
	win.PMPTech = PMPTech;
})(window, document, jQuery);

/* Make it work: */
(function($) {
  var PMPInstance = {
    process: $('.P_Process'),
    popMask: $('#P_PopMask'),
    popClose: $('#P_PopClose')
  };

  PMPTech.init(PMPInstance);
})(jQuery);
