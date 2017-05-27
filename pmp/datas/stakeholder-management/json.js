var Project_Stakeholder_Management = {
id: 13,
datas: {
    "pmp-131": {
      name: '13.1 识别干系人',
      engname: '',
      knowledge: '项目干系人管理 <b>Project Stakeholder Management</b>',
      processGroup: '启动过程组 <b>Initiating Process Group</b>',
      keyNotes: [
        {text: ''},
        {text: ''}
      ],
      inputs: [
        {text: '项目章程'},
        {text: '采购文件'},
        {text: '事业环境因素和组织过程资产'}
      ],
      tools: [
        {text: '干系人分析'},
        {text: '专家判断'},
        {text: '会议'}
      ],
      outputs: [
        {text: '干系人登记册'}
      ]
    }, // One process

    "pmp-132": {
      name: '13.2 规划干系人管理',
      engname: '',
      knowledge: '项目干系人管理 <b>Project Stakeholder Management</b>',
      processGroup: '规划过程组 <b>Planning Process Group</b>',
      keyNotes: [
        {text: ''},
        {text: ''},
        {text: ''}
      ],
      inputs: [
        {text: '项目管理计划'},
        {text: '干系人登记册', ext: [{text: '13.1 识别干系人的输出'}]},
        {text: '事业环境因素和组织过程资产'}
      ],
      tools: [
        {text: '专家判断'},
        {text: '会议'},
        {text: '分析技术'}
      ],
      outputs: [
        {text: '干系人管理计划'},
        {text: '项目文件更新'},
      ],
    }, // One process

    "pmp-133": {
      name: '13.3 管理干系人参与',
      engname: '',
      knowledge: '项目干系人管理 <b>Project Stakeholder Management</b>',
      processGroup: '执行过程组 <b>Executing Process Group</b>',
      keyNotes: [
        {text: ''},
        {text: ''},
        {text: ''},
        {text: ''}
      ],
      inputs: [
        {text: '干系人管理计划', ext: [{text: '13.2 规划干系人管理的输出'}]},
        {text: '沟通管理计划'},
        {text: '变更日志'},
        {text: '事业环境因素和组织过程资产'}
      ],
      tools: [
        {text: '沟通方法'},
        {text: '人际关系技能'},
        {text: '管理技能'}
      ],
      outputs: [
        {text: '问题日志'},
        {text: '变更请求'},
        {text: '项目管理计划更新'},
        {text: '项目文件更新'},
        {text: '组织过程资产更新'}
      ],
    }, // One process

    "pmp-134": {
      name: '13.4 控制干系人参与',
      engname: '',
      knowledge: '项目干系人管理 <b>Project Stakeholder Management</b>',
      processGroup: '监控过程组 <b>Monitoring and Controlling Process Group</b>',
      keyNotes: [
        {text: ''},
        {text: ''}
      ],
      inputs: [
        {text: '项目管理计划'},
        {text: '问题日志'},
        {text: '工作绩效数据'},
        {text: '项目文件'},
        {text: '事业环境因素和组织过程资产'}
      ],
      tools: [
        {text: '信息管理系统'},
        {text: '专家判断'},
        {text: '会议'}
      ],
      outputs: [
        {text: '工作绩效信息'},
        {text: '变更请求'},
        {text: '项目管理计划更新'},
        {text: '项目文件更新'},
        {text: '组织过程资产更新'}
      ],
    } // One process

} // End of datas
};
