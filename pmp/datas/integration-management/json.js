var Project_Integration_Management = {
id: 4,
datas: {
    "pmp-041": {
      name: '制定项目章程',
      engname: 'Develop Project Charter',
      knowledge: '项目整合管理',
      processGroup: '启动过程组',
      keyNotes: [
        {text: '明确定义项目开始和项目边界，正式启动项目'},
        {text: '项目经理获授权使用组织资源'},
        {text: '在项目的执行组织与需求组织之间建立伙伴关系'},
        {text: '项目章程由发起项目的实体（高层）来批准', ext: '4-key-01'},
        {text: '确认项目符合组织战略和日常运营的需要'},
      ],
      inputs: [
        {text: 'Project Statement of Work, SOW', ext: '4-inp-01'},
        {text: 'Business Case'},
        {text: 'Contract'},
        {text: 'Enterprise Environmental Factors', ext: 'global-01'},
        {text: 'Organizational Process Assets', ext: 'global-02'},
      ],
      tools: [
        {text: '专家判断'},
        {text: '引导技术'}
      ],
      outputs: [
        {text: 'Project Charter', ext: '4-out-01'}
      ]
    }, // One process

    "pmp-042": {
      name: '制定项目管理计划',
      engname: 'Develop Project Management Plan',
      knowledge: '项目整合管理',
      processGroup: '规划过程组'
    }, // One process

    "pmp-043": {
      name: '指导与管理项目执行',
      engname: 'Direct and Manage Project Work',
      knowledge: 'Project Integration Management',
      processGroup: 'Executing Group'
    } // One process

} // End of datas
};
