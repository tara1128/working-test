var Project_Integration_Management = {
id: 4,
datas: {
    "pmp-041": {
      name: '4.1 制定项目章程',
      engname: 'Develop Project Charter',
      knowledge: '项目整合管理 <b>Project Integration Management</b>',
      processGroup: '启动过程组 <b>Initiating Process Group</b>',
      keyNotes: [
        {text: '批准项目启动的正式文件，授权项目经理可使用组织资源'},
        {text: '明确定义项目开始，和项目边界，确立项目的正式地位以及高层对项目的支持'},
        {text: '项目章程在项目的执行组织和需求组织（例如客户）之间建立伙伴关系'},
        {text: '项目章程批准，标志着项目正式启动'},
        {text: '项目章程由高层来批准，即发起项目的实体'},
        {text: '项目由项目以外的实体来启动，如发起人、PMO'},
        {text: '项目可能因内部经营需要或外部影响而启动，因此需要编制需求分析、可行性研究、商业论证等'},
        {text: '通过编制项目章程，来确认项目符合组织战略和日常运营需要'}
      ],
      inputs: [
        {text: '项目工作说明书', ext: [
          {text: 'SOW：Project Statement of Work，对项目所需交付的产品或服务的叙述性说明'},
          {text: '内部项目，SOW由项目启动者或发起人提供'},
          {text: '外部项目。SOW由客户提供（招标文件或合同的一部分）'},
          {text: 'SOW需要涉及：'},
          {text: '1. 业务需要（为什么做？市场需求、技术进步、法律要求、政府法规）'},
          {text: '2. 产品范围描述（提供什么？产品特征）'},
          {text: '3. 战略计划（采取什么战略）'},
          {text: '例题：这个项目要做一个什么产品，看什么文件？答：项目工作说明书'}
        ]},
        {text: '商业论证', ext: [
          {text: 'Business Case，从商业角度提供信息，决定项目是否值得投资'},
          {text: '高层常以此文件为决策依据'},
          {text: '在多阶段的项目中，对商业论证定期审核，确保项目实现商业利益'},
          {text: '项目经理负责确保项目有效满足商业论证中规定的组织目的和干系人需求'},
          {text: '例题：项目做了一部分，发起人犹豫是否继续做下去。作为项目经理，要查看哪个文件？答案：商业论证（从商业角度提供信息、决定项目是否值得投资）'}
        ]},
        {text: '协议（也叫合同）'},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: '专家判断', ext: [
          {text: 'Expert Judgment，具有专业知识或专业培训经历的小组或个人'},
          {text: '渠道来源：组织内的其他部门、顾问、干系人、客户、发起人、专业与技术协会、行业协会、主题专家（Subject matter experts）、PMO'}
        ]},
        {text: '引导技术', ext: [
          {text: 'Facilitation Techniques，引导者用适当技术，帮助促进一群人达成协议，关注共同目标'},
          {text: '常见有：头脑风暴、冲突处理、问题解决、会议管理等'}
        ]}
      ],
      outputs: [
        {text: '项目章程', ext: [
          {text: '项目章程，又称“项目批准书”，内容有：'},
          {text: '1. 项目目的（purpose）或批准项目的原因（宏观目的）'},
          {text: '2. 可测量的项目目标（objectives）和相关的成功标准（宏观目的细化为可测量的目标4.2）'},
          {text: '3. 高层级需求（high-level requirements，宏观需求 5.2）'},
          {text: '4. 假设条件和制约因素（假设是未来的不确定、制约是现存的限制）'},
          {text: '5. 发起人或其他批准项目章程的人员姓名和职权'},
          {text: '6. 委派的项目经理及其职责和职权'},
          {text: '7. 高层级项目描述和边界定义（宏观范围5.1、5.3）'},
          {text: '8. 高层级风险（11.1）'},
          {text: '9. 总体里程碑进度计划（6.1）'},
          {text: '10. 总体预算（7.1）'},
          {text: '11. 干系人清单（13.1）'},
          {text: '12. 项目审批要求（项目结束时找谁签字，谁来核定项目是否结束）'},
          {text: '例题：一个项目做了三个月，你去接手，首先做什么？答：制定项目章程（把之前的项目章程即授权之前的项目经理的章程，要过户，授权给你！）'}
        ]}
      ]
    }, // One process

    "pmp-042": {
      name: '4.2 制定项目管理计划',
      engname: 'Develop Project Management Plan',
      knowledge: '项目整合管理 <b>Project Integration Management</b>',
      processGroup: '规划过程组 <b>Planning Process Group</b>',
      keyNotes: [
        {text: '定义、准备和协调所有子计划（13个）并整合为一份综合的项目管理计划'},
        {text: '生成一份核心文件，作为所有项目工作的依据'},
        {text: '确定项目执行、监控、收尾的方式，内容会因项目复杂程度和所属领域不同而异'},
        {text: '项目管理计划相当于项目经理和发起人之间的协议，规定了完工的标准'},
        {text: '发起人以“项目章程”委派项目经理，而项目经理以“项目管理计划”为表态和承诺'},
        {text: '项目管理计划应该现实、可以实现、被干系人批准（批准后的计划叫做“基准 Baseline”）'},
        {text: '项目管理计划是一个方向，有13个子计划和3个基准。而项目文件是文档，用来记录信息，项目的可交付成果除了产品、计划外，都是项目文件'}
      ],
      inputs: [
        {text: '项目章程', ext: [{text: '4.1 制定项目章程的输出'}]},
        {text: '其他过程的输出', ext: [
          {text: '例如“规划范围管理”输出《范围管理计划》和《需求管理计划》、“规划进度管理”输出《进度管理计划》'},
          {text: '要想到项目是渐进明细的，随着其余管理计划的出炉，项目管理计划会被不断更新'}
        ]},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: '专家判断'},
        {text: '引导技术', ext: [
          {text: 'Facilitation Techniques，项目经理引导一群人达成协议，关注共同目标'}
        ]}
      ],
      outputs: [
        {text: '项目管理计划', ext: [
          {text: '注：“计划”批准之后，才叫“基准 Baseline”'},
          {text: '基准有三个方面：范围、进度、成本'},
          {text: '基准不能随便更改，必须提出变更请求、并经过实施整体变更控制过程批准后才能变更'},
          {text: '绩效测量基准Performance Measurement Baseline，PMB，也叫整体基准，包括应急储备，不包括管理储备。是范围-进度-成本的综合计划，用来与项目执行情况相比，以测量和管理绩效！'},
          {text: '在“挣值管理”中，PV的总和就是绩效测量基准PMB，也叫成本基准Cost Baseline、完工预算BAC（Budget at Completion）'},
          {text: '例：作为项目经理，在完成项目管理计划之后做什么？答：要获得批准'}
        ]}
      ]
    }, // One process

    "pmp-043": {
      name: '4.3 指导与管理项目工作',
      engname: 'Direct and Manage Project Work',
      knowledge: '项目整合管理 <b>Project Integration Management</b>',
      processGroup: '执行过程组 <b>Executing Process Group</b>',
      keyNotes: [
        {text: '为实现项目目标，领导和执行项目管理计划中所确定的工作，实施已批准的变更'},
        {text: '对项目工作提供全面管理'},
        {text: '管理项目内的各种技术接口、组织接口（接口interface：两部件的结合部位，界面点。接口管理也叫整合管理）'},
        {text: '项目经理还应管理所有计划外的活动，并确定合适的行动方案'}
      ],
      inputs: [
        {text: '项目管理计划', ext: [{text: '4.2 制定项目管理计划的输出'}]},
        {text: '批准的变更请求'},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: '专家判断'},
        {text: '项目管理信息系统', ext: [{text: '对信息收集、发布的一套系统'}]},
        {text: '会议Meetings', ext: [
          {text: '邀请相关干系人参与'},
          {text: '会前做好准备：会议的议程、目的、目标、期限'},
          {text: '会后形成书面的会议纪要、行动方案，并保存'},
          {text: '面对面的会议最好，虚拟会议也可以'},
          {text: '会议类型：交换信息、头脑风暴、方案评估、方案设计、制定决策'},
          {text: 'Kickoff Meeting 启动会、开工会：是一个务虚的会议，在启动阶段召开，但是属于规划过程组的一个活动。团队成员见面、确立职责、设定目标、审查计划与状态、介绍项目风险及对策等。'}
        ]}
      ],
      outputs: [
        {text: '可交付成果', ext: [
          {text: '交给客户的产品，通常意义上的“可交付成果”'},
          {text: '项目的可交付成果除了产品、计划外，都是项目文件'}
        ]},
        {text: '工作绩效数据', ext: [
          {text: 'Work Performance Data，从正在执行的活动中获得的原始观察数据，包括：'},
          {text: ''},
          {text: ''},
          {text: '工作的成绩和效益。绩效数据是原始测量值，绩效信息是经过分析后得出的内容'}
        ]},
        {text: '变更请求', ext: [
          {text: '想变更基准，必须提交变更请求，并经过实施整体变更控制过程的批准才能变更'},
          {text: '变更批准后一定会导致项目计划和文件的更新'}
        ]},
        {text: '项目管理计划更新'},
        {text: '项目文件更新'}
      ]
    }, // One process

    "pmp-044": {
      name: '4.4 监控项目工作',
      engname: '',
      knowledge: 'Project Integration Management',
      processGroup: '监控过程组 <b>Monitoring and Controlling Process Group</b>',
      keyNotes: [
        {text: ''},
        {text: ''},
        {text: ''},
        {text: ''}
      ],
      inputs: [
        {text: ''},
        {text: ''},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: ''},
        {text: ''}
      ],
      outputs: [
        {text: '', ext: []},
        {text: ''},
        {text: ''}
      ]
    }, // One process

    "pmp-045": {
      name: '4.5 实施整体变更控制',
      engname: '',
      knowledge: 'Project Integration Management',
      processGroup: '监控过程组 <b>Monitoring and Controlling Process Group</b>',
      keyNotes: [
        {text: ''},
        {text: ''},
        {text: ''},
        {text: ''}
      ],
      inputs: [
        {text: ''},
        {text: ''},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: ''},
        {text: ''}
      ],
      outputs: [
        {text: '', ext: []},
        {text: ''},
        {text: ''}
      ]
    }, // One process

    "pmp-046": {
      name: '4.6 结束项目或阶段',
      engname: '',
      knowledge: 'Project Integration Management',
      processGroup: '收尾过程组 <b>Closing Process Group</b>',
      keyNotes: [
        {text: ''},
        {text: ''},
        {text: ''},
        {text: ''}
      ],
      inputs: [
        {text: ''},
        {text: ''},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: ''},
        {text: ''}
      ],
      outputs: [
        {text: '', ext: []},
        {text: ''},
        {text: ''}
      ]
    } // One process
} // End of datas
};
