var Project_Scope_Management = {
id: 5,
datas: {
    "pmp-051": {
      name: '5.1 规划范围管理',
      engname: 'Plan Scope Management',
      knowledge: '项目范围管理 <b>Project Scope Management</b>',
      processGroup: '规划过程组 <b>Planning Process Group</b>',
      keyNotes: [
        {text: '范围：项目所提供的产品、服务或成果的总和'},
        {text: '产品范围：指可交付成果，某产品、服务或成果所具有的特性和功能；根据产品需求来衡量产品范围是否完成'},
        {text: '项目范围：为交付成果而必须完成的工作，有时也包括产品范围；根据项目管理计划来衡量项目范围是否完成'},
        {text: '顺序：先确定需求（干系人要什么）、再确定产品范围（提供什么可满足需求）、然后确定项目范围（做什么工作）'},
        {text: '规划范围管理，是创建范围管理计划，为管理范围提供指南，有助于降低“范围蔓延”的风险'}
      ],
      inputs: [
        {text: '项目管理计划'},
        {text: '项目章程'},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: '专家判断'},
        {text: '会议'}
      ],
      outputs: [
        {text: '范围管理计划', ext: [
          {text: 'Scope Management Plan，子计划，对下列工作的管理过程作出规定：'},
          {text: '1. 制定详细的项目范围说明书'},
          {text: '2. 根据范围说明书创建WBS'},
          {text: '3. 维护和批准WBS'},
          {text: '4. 正式验收已完成的项目可交付成果'},
          {text: '5. 处理对范围说明书的变更'}
        ]},
        {text: '需求管理计划', ext: [
          {text: 'Requirements Management Plan，子计划，描述如何分析、记录、管理需求'},
          {text: '项目经理为项目选择最有效的阶段间关系，并记录在需求管理计划中'},
          {text: '需求管理计划的内容包括：'},
          {text: '1. 如何规划、跟踪和汇报各种需求活动'},
          {text: '2. 配置管理活动'},
          {text: '3. 需求排序过程'},
          {text: '4. 产品测量指标及使用这些指标的理由'},
          {text: '5. 需求跟踪结构'}
        ]},
      ]
    }, // One process

    "pmp-052": {
      name: '5.2 收集需求',
      engname: 'Collect Requirements',
      knowledge: '项目范围管理 <b>Project Scope Management</b>',
      processGroup: '规划过程组 <b>Planning Process Group</b>',
      keyNotes: [
        {text: '需求：根据特定协议或强制性规范，项目必须满足的条件或能力，产品、服务、成果必须具备的条件或能力，包括干系人的已量化并记录下来的需要（needs）、期望（expectations）'},
        {text: '为实现项目目标而确定、记录和管理干系人的需求'},
        {text: '为定义和管理项目范围（包括产品范围）而奠定基础'},
        {text: '让干系人积极参与需求的发掘和分解工作，促进项目成功'}
      ],
      inputs: [
        {text: '范围管理计划', ext: [{text: '5.1 规划范围管理的输出'}]},
        {text: '需求管理计划', ext: [{text: '5.1 规划范围管理的输出'}]},
        {text: '干系人管理计划', ext: [{text: '需求是干系人的需求，因此需要干系人管理计划'}]},
        {text: '项目章程', ext: [{text: '含有项目目标'}]},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: '访谈', ext: [
          {text: 'Interviews，与干系人直接交谈，常用“一对一”方式，也可有多个被访者或访问者'},
          {text: '访谈有经验的项目参与者、发起人或高管、主题专家，有助于识别和定义所需产品可交付成果的特征和功能'}
        ]},
        {text: '焦点小组', ext: [
          {text: 'Focus Groups，把预先选定的干系人和主题专家集中一起，了解其对产品的期望和态度'},
          {text: '一位主持人引导大家互动式讨论，比一对一的访谈更热烈'},
          {text: '即：聚焦某一话题、主持人引导、8-12人组成、互动式讨论'}
        ]},
        {text: '引导式研讨会', ext: [
          {text: 'Facilitated Workshops，跨职能的（Cross-Functional）干系人集中讨论，快速定义需求、协调干系人差异'},
          {text: '群体互动、有助于建立信任、促进关系、改善沟通、达成一致'},
          {text: '引导式研讨会有三种类型：'},
          {text: '1. 联合应用开发（Joint Application Development，JAD）：业务主题专家和开发团队集中一起，改进软件开发过程，针对软件开发行业'},
          {text: '2. 质量功能展开（Quality Function Deployment，QFD）：针对制造行业，收集需求、将需求分类排序、设置目标，将需求转化为项目技术要求（例如：客户要求笔记本电脑速度快，转化为技术要求即：酷睿双核2.5GHZ，内存4G……）'},
          {text: '3. 用户故事（User Stories）：对所需功能的简短文字描述，产生于需求研讨会，描述哪个干系人将从功能中受益（角色），他需要实现什么（目标），以及他将获得的收益（动机）。用户故事在敏捷方法中广泛使用。'}
        ]},
        {text: '群体创新技术', ext: [
          {text: 'Group Creativity Techniques，组织群体活动来识别需求，包括'},
          {text: '1. 头脑风暴Brainstorming，通用的数据收集和创意激发技术，一组成员或专家，人人平等，自由畅谈，没有对错，禁止批评，延迟评判，追求数量，集思广益'},
          {text: '2. 名义小组Nominal Group Techniques（考点）：用于促进头脑风暴、通过投票排列最有用的创意。名义上的意思是小组成员事先不沟通，独立思考，每人发表自己的意见，再整体投票，优先排序'},
          {text: '3. 思维导图Mind Mapping，也叫概念导图Idea Mapping：从头脑风暴中获得的创意，用简图联系起来，反应创意之间的共性和差异，引导新的创意；是大脑放射性思维的外部表现，是有效的思维图形工具（发明人Tony Buzan是国际奥委会运动心理专家）'},
          {text: '4. 亲和图Affinity Diagram：按创意之间的亲和性（自然关系），直观的做逻辑分类（日本人发明的）'},
          {text: '5. 多标准决策分析MultiCriteria decision analysis：借助决策矩阵，建立多种标准，对多方案做评估'}
        ]},
        {text: '群体决策技术', ext: [
          {text: 'Group Decision Making Techniques，对多个未来行动方案做评估，可用来开发需求、对需求做归类和优先排序'},
          {text: '达成群体决策的4个方法：'},
          {text: '1. 每个人都同意：德尔菲技术（Delphi Technique 必考）'},
          {text: '2. 大多数：50%以上的人同意'},
          {text: '3. 相对多数：几组人数当中相对人数最多的'},
          {text: '4. 独裁，一个人说了算'},
          {text: '附：Delphi Technique：又称专家会议预测法，是主观预测的方法，专家之间不见面，以匿名形式回答问卷，答卷只交给主持人即项目经理，理论上专家意见100%达成一致即为最终结论'}
        ]},
        {text: '问卷调查', ext: [
          {text: 'Questionnaires and Surveys：设计书面问题，向众多受访者收集信息'},
          {text: '注：Delphi Technique也是问卷形式，与问卷调查不同在于：问卷调查对象是大众，人数众多'},
          {text: '问卷调查适用于：受众多样化、需要快速完成调查、受访者地理位置分散、适合开展统计分析'}
        ]},
        {text: '观察', ext: [
          {text: 'Observations：针对产品使用者不愿说的需求'},
          {text: '也叫“工作跟踪 Job Shadowing”'},
          {text: '也可由“参与观察者 Participant Observer”来进行，需实际执行一个流程，以此体验并挖掘需求（用户体验）'}
        ]},
        {text: '原型法', ext: [
          {text: 'Prototypes，即做Demo，做出产品模型，征求反馈意见'},
          {text: '做出的产品原型是有形的实物，干系人可以体验'},
          {text: '原型会重复经过制作、试用、反馈、修改的过程，符合渐进明细'},
          {text: '多次重复后，从原型中获得足够完整的需求，再进入设计和制造阶段'},
          {text: '故事板Storyboarding，是一种原型技术，用图像展示导航路径，可用于电影、广告、教学设计、敏捷的软件开发项目、网页展示等'}
        ]},
        {text: '标杆对照', ext: [
          {text: 'Benchmarking，也译作“基准”：将实际或计划的做法，与其他可比组织的做法（标杆）进行比较，来识别最佳实践，形成改进意见，为绩效考核提供依据'},
          {text: '标杆可以来自组织的内部或外部，同一或不同领域'},
          {text: '例如开发某个产品，可以参考类似产品的做法，或与之相比较'}
        ]},
        {text: '系统交互图', ext: [
          {text: 'Context Diagrams，用产品范围的可视化描绘，显示出业务系统与人、与其他系统之间的交互方式'},
          {text: '系统交互图显示了业务系统的输入、输入提供者、输出、输出接收者'}
        ]},
        {text: '文件分析', ext: [
          {text: 'Document Analysis，通过分析现有文档，来识别需求，挖掘需求'}
        ]}
      ],
      outputs: [
        {text: '需求文件', ext: [
          {text: 'Requirements Documentation，描述各种单一需求将如何满足项目的业务需求'},
          {text: '需求渐进明细、逐步细化（《项目章程》中的需求是宏观的、高层次需求，这里的需求是进一步的细化）'},
          {text: '需求文件里包括了：业务需求、干系人需求、解决方案需求、项目需求、过渡需求、与需求相关的假设条件、依赖关系、制约因素'},
          {text: '注：《项目章程》中有一个内容是“可测量的项目目标”，而在需求文件中进一步将目标细化为“可跟踪的业务目标”。'}
        ]},
        {text: '需求跟踪矩阵', ext: [
          {text: 'Requirements Traceability Matrix，也叫需求追溯矩阵'},
          {text: '把产品需求从其来源连接到能满足需求的可交付成果的一种表格'},
          {text: '把每个需求与项目目标相连，确保每个需求都有商业价值'},
          {text: '【考点】在整个项目生命周期中跟踪需求，确保需求文件中批准的每个需求都在项目结束时交付'},
          {text: '为管理产品范围变更，提供框架'}
        ]}
      ],
    }, // One process

    "pmp-053": {
      name: '5.3 定义范围',
      engname: 'Define Scope',
      knowledge: '项目范围管理 <b>Project Scope Management</b>',
      processGroup: '规划过程组 <b>Planning Process Group</b>',
      keyNotes: [
        {text: '制定项目和产品的详细范围'},
        {text: '明确所收集的需求，哪些包含在项目范围内，哪些排除在项目范围外，明确项目边界'}
      ],
      inputs: [
        {text: '范围管理计划', ext: [{text: '5.1 规划范围管理的输出'}]},
        {text: '项目章程'},
        {text: '需求文件', ext: [{text: '5.2 收集需求的输出'}]},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: '专家判断'},
        {text: '产品分析', ext: [
          {text: 'Product Analysis，把高层级的产品描述（4.1项目章程中的内容）转变为有形的可交付成果，包括：'},
          {text: '产品分解、需求分析、系统分析、系统工程、价值工程（Value Engineering）、价值分析（Value Analysis）'},
          {text: '相同点（价值工程&价值分析）：公式V = F/C （Function除以Cost），Cost越低，价值越高，都是对项目的范围（功能）和成本做分析，在保持项目范围（功能）的前提下，降低成本'},
          {text: '不同点：价值工程是在产品开发设计阶段就进行价值与成本的革新；价值分析是在产品量产后再做详细的价值分析来降低成本或提高价值'}
        ]},
        {text: '备选方案生成', ext: [
          {text: 'Alternatives Generation，制定尽可能多的潜在可选方案，识别执行项目工作的不同方法'},
          {text: '以下方法可以用来生成备选方案：'},
          {text: '1. 头脑风暴Brainstorming'},
          {text: '2. 横向思维Lateral Thinking，通过明显不合逻辑的方式寻求解决问题的方法'},
          {text: '3. 备选方案分析 Analysis of Alternatives'}
        ]},
        {text: '引导式研讨会', ext: [
          {text: 'Facilitated Workshops，跨职能的（Cross-Functional）干系人集中讨论，快速定义需求、协调干系人差异'},
          {text: '群体互动、有助于建立信任、促进关系、改善沟通、达成一致'},
          {text: '引导式研讨会有三种类型：'},
          {text: '1. 联合应用开发（Joint Application Development，JAD）：业务主题专家和开发团队集中一起，改进软件开发过程，针对软件开发行业'},
          {text: '2. 质量功能展开（Quality Function Deployment，QFD）：针对制造行业，收集需求、将需求分类排序、设置目标，将需求转化为项目技术要求（例如：客户要求笔记本电脑速度快，转化为技术要求即：酷睿双核2.5GHZ，内存4G……）'},
          {text: '3. 用户故事（User Stories）：对所需功能的简短文字描述，产生于需求研讨会，描述哪个干系人将从功能中受益（角色），他需要实现什么（目标），以及他将获得的收益（动机）。用户故事在敏捷方法中广泛使用。'}
        ]}
      ],
      outputs: [
        {text: '项目范围说明书', ext: [
          {text: 'Scope Statement，描写项目的范围，既包含产品范围，也包含项目范围（注意“项目的范围”与“项目范围”是不一样的）'},
          {text: '对项目范围、可交付成果、假设条件、制约因素的描述，记录了整个范围，包括项目范围和产品范围'},
          {text: '详细描述可交付成果，以及需要开展的工作'},
          {text: '表明干系人对项目范围所达成的共识，可明确指出哪些范围不属于本项目的范围！'},
          {text: '注：SOW工作说明书，是客户或发起人提供，最早描写范围的，根据SOW来确定高层级范围，写在项目章程里；而根据《项目章程》和《需求文件》来确定详细的范围，才叫范围说明书'},
          {text: '重要的事情再说一遍：《项目范围说明书》包含了项目范围和产品范围，所以是描写“项目的范围”的文件，不是描写“项目范围”的文件！'}
        ]},
        {text: '项目文件更新'}
      ],
    }, // One process

    "pmp-054": {
      name: '5.4 创建工作分解结构WBS',
      engname: 'Create Work Breakdown Structure',
      knowledge: '项目范围管理 <b>Project Scope Management</b>',
      processGroup: '规划过程组 <b>Planning Process Group</b>',
      keyNotes: [
        {text: '其实是可交付成果（deliverable）的分解结构，是以可交付成果（deliverable）为分解对象'},
        {text: '注：为什么WBS是以“可交付成果”为分解对象？答：因为可交付成果是独特的（Unique）、可核实的（Verifiable），可方便验收的。'},
        {text: '“工作分解结构”中的“工作”不是指活动本身，而是指工作产品或可交付成果'},
        {text: '把可交付成果和项目工作层级分解为小的、易于管理的组成部分'},
        {text: '对所要交付的内容提供一个结构化视图'},
        {text: 'WBS组织并定义项目的总范围，代表着经过批准的当前项目范围说明书所规定的工作'}
      ],
      inputs: [
        {text: '范围管理计划', ext: [{text: '5.1 规划范围管理的输出'}]},
        {text: '项目范围说明书', ext: [{text: '5.3 定义范围的输出'}]},
        {text: '需求文件', ext: [{text: '5.2 收集需求的输出'}]},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: '分解（自上而下）Decomposition', ext: [
          {text: '项目下分为“阶段”，整个项目为第一层，“阶段”为第二层，再往下分，每个阶段分出多个可交付成果'},
          {text: '工作包Work Packages是WBS的最底层，工作包不是工作，而是一个可交付成果（例如装修房间，一个灯泡是一个可交付成果，而安装调试灯泡，才是工作；可以把“灯泡”这个可交付成果，向下分解为“安装灯泡”和“调试灯泡”这两个活动，成本和时间的估算其实都是针对活动的！），可以对其进行成本估算和管理（第七章）、持续时间估算和管理（第六章）'},
          {text: '工作包（可交付）由一个人或团队去负责，如果是两个人负责，再往下分'},
          {text: '注：“项目管理”也要包含在WBS中；工作外包出去后，也要包含在WBS中'},
          {text: '账户编码Code of Accounts，唯一标识WBS每个组成部分的编号系统，有层级的，例如1.1，2.3.1，2.3.2，2.3.3……'},
          {text: '不同的可交付成果可以分解到不同的层次'},
          {text: '创建WBS可以帮助建立团队Team Buy-in，培养团队默契度和凝聚力'},
          {text: '滚动式规划Rolling Wave Planning：渐进明细的规划方式，对于近期工作，可以在WBS的低层次上详细规划；对于远期工作无法分解，需要等待制定细节'},
          {text: '100% Rule，即100%规则，把WBS的底层所有工作逐层向上汇总，确保无遗漏、无多余，下层之和刚好等于上层；在每个工作包中，活动之和也应等于该工作包所需的全部工作'}
        ]},
        {text: '专家判断'}
      ],
      outputs: [
        {text: '范围基准', ext: [
          {text: '经过批准的范围说明书（输入）、工作分解结构、工作分解结构词典'},
          {text: '其中的工作分解结构WBS包括：'},
          {text: '1. 控制账户Control Accounts：一种宏观层次的管理控制点，把范围、预算、成本、进度加以整合，与挣值相比较，衡量绩效。（用钱可以衡量范围、进度、成本，所以叫控制账户）'},
          {text: '2. 规划包：在控制账户之下，工作内容已知，详细活动未知。规划包再往下分解，即工作包！'},
          {text: '工作分解结构词典WBS Dictionary，即WBS的文字说明书，详细描述可交付成果、活动、进度，包括：账户编码标识、工作描述、假设条件和制约因素、负责的组织、进度里程碑、相关的进度活动、所需资源、成本估算、质量要求、验收标准、技术参考文献、协议信息'},
        ]},
        {text: '项目文件更新'}
      ],
    }, // One process

    "pmp-055": {
      name: '5.5 确认范围',
      engname: 'Validate Scope',
      knowledge: '项目范围管理 <b>Project Scope Management</b>',
      processGroup: '监控过程组 <b>Monitoring and Controlling Process Group</b>',
      keyNotes: [
        {text: '确认范围，也叫核实范围，是正式验收项目已完成的可交付成果'},
        {text: '使验收过程具有客观性，同时通过验收每个可交付成果，提高最终产品、服务或可交付成果获得验收的可能性'},
        {text: '由客户或发起人审查从“控制质量”过程中输出的核实的可交付成果（即在本过程之前，先经过一个“控制质量”的过程，来确保可交付成果是符合要求的），确认这些可交付成果圆满完成并通过正式验收。'},
        {text: '先做“控制质量”，自己的质量团队来做，确定成果符合要求！（关注的是成果的正确性以及是否满足质量要求（Meeting the quality requirements））'},
        {text: '再做“确认范围”，由发起人或客户来做，即正式验收成果！（关注的是成果的验收Acceptance）'},
        {text: '两者都用了同一个工具：检查Inspection。（“控制质量”和“确认范围”也可以同时进行）'},
      ],
      inputs: [
        {text: '项目管理计划'},
        {text: '需求文件', ext: [{text: '5.2 收集需求的输出'}]},
        {text: '需求跟踪矩阵', ext: [{text: '5.2 收集需求的输出'}]},
        {text: '核实的可交付成果'},
        {text: '工作绩效数据'},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: '检查Inspection'},
        {text: '群体决策技术'}
      ],
      outputs: [
        {text: '验收的可交付成果', ext: [
          {text: 'Accepted Deliverables，符合验收标准的可交付成果，客户或发起人签字批准并给出正式文件证明正式验收'}
        ]},
        {text: '变更请求', ext: [
          {text: '未通过验收的可交付成果，及其未通过验收的原因，记录在案，提出变更请求，进行缺陷补救'}
        ]},
        {text: '工作绩效信息'},
        {text: '项目文件更新'}
      ],
    }, // One process

    "pmp-056": {
      name: '5.6 控制范围',
      engname: 'Control Scope',
      knowledge: '项目范围管理 <b>Project Scope Management</b>',
      processGroup: '监控过程组 <b>Monitoring and Controlling Process Group</b>',
      keyNotes: [
        {text: ''},
      ],
      inputs: [
        {text: ''},
      ],
      tools: [
        {text: ''},
      ],
      outputs: [
        {text: ''},
      ],
    } // One process
} // End of datas
};
