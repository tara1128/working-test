var Project_Integration_Management = {
id: 4,
datas: [
  {
    "pmp-041": {
      name: 'Develop Project Charter',
      knowledge: 'Project Integration Management',
      processGroup: 'Initiating Group',
      keyNotes: [
        {note: '明确定义项目开始和项目边界，正式启动项目'},
        {note: '项目经理获授权使用组织资源'},
        {note: '在项目的执行组织与需求组织之间建立伙伴关系'},
        {note: '项目章程由发起项目的实体（高层）来批准', ext: '4-key-01'},
        {note: '确认项目符合组织战略和日常运营的需要'},
      ],
      inputs: [
        {name: 'Project Statement of Work, SOW', ext: '4-inp-01'},
        {name: 'Business Case'},
        {name: 'Contract'},
        {name: 'Enterprise Environmental Factors', ext: 'global-01'},
        {name: 'Organizational Process Assets', ext: 'global-02'},
      ],
      tools: [
        {name: '专家判断'},
        {name: '引导技术'}
      ],
      outputs: [
        {name: 'Project Charter', ext: '4-out-01'}
      ]
    }
  }, // One process

  {
    "pmp-042": {
      name: 'Develop Project Management Plan',
      knowledge: 'Project Integration Management',
      processGroup: 'Planning Group'
    }
  }, // One process

  {
    "pmp-043": {
      name: 'Direct and Manage Project Work',
      knowledge: 'Project Integration Management',
      processGroup: 'Executing Group'
    }
  } // One process

]
};
