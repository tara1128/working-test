var Project_Communications_Management = {
id: 10,
datas: {
    "pmp-101": {
      name: '10.1 规划沟通管理',
      engname: 'Plan Communications Management',
      knowledge: '项目沟通管理 <b>Project Communications Management</b>',
      processGroup: '规划过程组 <b>Planning Process Group</b>',
      keyNotes: [
        {text: ''},
        {text: ''},
        {text: ''},
        {text: ''},
        {text: ''}
      ],
      inputs: [
        {text: '项目管理计划'},
        {text: '干系人登记册'},
        {text: '事业环境因素和组织过程资产'}
      ],
      tools: [
        {text: '沟通需求分析'},
        {text: '沟通技术'},
        {text: '沟通模型'},
        {text: '沟通方法'},
        {text: '会议'}
      ],
      outputs: [
        {text: '沟通管理计划', ext: [
          {text: ''},
          {text: ''},
          {text: ''},
          {text: ''},
          {text: ''},
          {text: ''}
        ]},
        {text: '项目文件更新'},
      ]
    }, // One process

    "pmp-102": {
      name: '10.2 管理沟通',
      engname: 'Manage Communications',
      knowledge: '项目沟通管理 <b>Project Communications Management</b>',
      processGroup: '执行过程组 <b>Executing Process Group</b>',
      keyNotes: [
        {text: ''},
        {text: ''},
        {text: ''},
        {text: ''}
      ],
      inputs: [
        {text: '沟通管理计划', ext: [{text: '10.1 规划沟通管理的输出'}]},
        {text: '工作绩效报告'},
        {text: '事业环境因素和组织过程资产'}
      ],
      tools: [
        {text: '沟通技术'},
        {text: '沟通模型'},
        {text: '沟通方法'},
        {text: '信息管理系统'},
        {text: '报告绩效'}
      ],
      outputs: [
        {text: '项目沟通'},
        {text: '项目管理计划更新'},
        {text: '项目文件更新'},
        {text: '组织过程资产更新'}
      ],
    }, // One process

    "pmp-103": {
      name: '10.3 控制沟通',
      engname: 'Control Communications',
      knowledge: '项目沟通管理 <b>Project Communications Management</b>',
      processGroup: '监控过程组 <b>Monitoring and Controlling Process Group</b>',
      keyNotes: [
        {text: ''},
        {text: ''},
        {text: ''},
        {text: ''}
      ],
      inputs: [
        {text: '项目管理计划'},
        {text: '项目沟通'},
        {text: '问题日志'},
        {text: '工作绩效数据'},
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
