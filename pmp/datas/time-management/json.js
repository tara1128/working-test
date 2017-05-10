var Project_Time_Management = {
id: 6,
datas: {
    "pmp-061": {
      name: '6.1 规划进度管理',
      engname: 'Plan Schedule Management',
      knowledge: '项目时间管理 <b>Project Time Management</b>',
      processGroup: '规划过程组 <b>Planning Process Group</b>',
      keyNotes: [
        {text: '为管理项目进度提供指南和方向，制定政策、程序和文档'},
      ],
      inputs: [
        {text: '项目管理计划', ext: ''},
        {text: '项目章程', ext: ''},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: '专家判断'},
        {text: '分析技术'},
        {text: '会议'}
      ],
      outputs: [
        {text: '进度管理计划', ext: [
          {text: '作为过程 6.2 - 6.6 的输入'}
        ]}
      ]
    }, // One process

    "pmp-062": {
      name: '6.2 定义活动',
      engname: 'Define Activity',
      knowledge: '项目时间管理 <b>Project Time Management</b>',
      processGroup: '规划过程组 <b>Planning Process Group</b>',
      keyNotes: [
        {text: '识别和记录具体的活动'},
        {text: '活动表示完成工作包所需的投入'},
        {text: '由负责工作包的团队成员来将工作包分解为活动'},
        {text: '创建WBS输出deliverable，定义活动输出activity，二者都是自上而下的分解'},
        {text: '创建WBS输出《范围基准》，定义活动将《范围基准》中的工作包分解为活动'}
      ],
      inputs: [
        {text: '进度管理计划', ext: ''},
        {text: '范围基准', ext: [
          {text: '因为要把范围基准中的工作包分解为活动，所以作为输入'},
          {text: '过程5.4创建WBS的一个输出就是范围基准'}
        ]},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: '分解', ext: [
          {text: '分解是把项目范围和可交付成果自上而下逐步分解为更小、更易于管理的部分'},
          {text: '创建WBS的分解是针对可交付成果，定义活动的分解是针对活动'}
        ]},
        {text: '滚动式规划', ext: [
          {text: '迭代式规划，详细规划近期、粗略规划远期，渐进明细'},  
          {text: '早期战略阶段，工作包分解到里程碑水平'},
          {text: '后期信息增多，工作包分解到具体的活动'}
        ]},
        {text: '专家判断'}
      ],
      outputs: [
        {text: '活动清单', ext: [
          {text: '包含项目所需的全部进度活动的综合清单'},
          {text: '活动是进度计划的组成部分，不是WBS的组成部分'}
        ]},
        {text: '活动属性', ext: [
          {text: '每项活动具有的多种属性，扩展对该活动的描述'},
          {text: '活动属性随时间演进'}
        ]},
        {text: '里程碑清单', ext: [
          {text: '里程碑是项目的重要时间点或事件，其持续时间为0，不是可交付成果'},
          {text: '里程碑清单是可交付成果'},
          {text: '里程碑清单里列出了所有里程碑，也指明了每个里程碑是强制性的还是选择性的'},
          {text: '例题：让团队成员查看整个项目的里程碑，应看哪个文件？答案是《里程碑清单》，如果没有这个选项，也可以选《WBS词典》（WBS词典包含进度里程碑）'}
        ]},
      ]
    }, // One process

    "pmp-063": {
      name: '6.3 排列活动顺序',
      engname: 'Sequence Activities',
      knowledge: '项目时间管理 <b>Project Time Management</b>',
      processGroup: '规划过程组 <b>Planning Process Group</b>',
      keyNotes: [
        {text: '识别和记录项目活动之间的逻辑关系'},
        {text: '定义工作之间的逻辑顺序，以便在既定的制约因素下获得较高效率'}
      ],
      inputs: [
        {text: '进度管理计划', ext: [{text: '过程6.1（规划进度管理）的输出'}]},
        {text: '活动清单', ext: [{text: '过程6.2（定义活动）的输出'}]},
        {text: '活动属性', ext: [{text: '过程6.2（定义活动）的输出'}]},
        {text: '里程碑清单', ext: [{text: '过程6.2（定义活动）的输出'}]},
        {text: '项目范围说明书', ext: ''},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: '紧前关系绘图法（PDM）', ext: [
          {text: 'PDM：Precedence Diagramming Method'},
          {text: '也叫“单代号网络图”（1958年发明）'},
          {text: 'AON：Activity-On-Node 活动节点表示法'},
          {text: '用方格或矩形（节点）表示活动'},
          {text: '用箭线表示依赖关系（逻辑关系）来连接各个节点'},
          {text: 'PDM的四种依赖关系：FS（紧后活动的开始取决于紧前活动的完成）、SS（紧后活动的开始取决于紧前活动的开始，即同时开始）、FF（紧后活动的完成取决于紧前活动的完成，即同时完成）、SF（紧后活动的完成取决于紧前活动的开始，较少见）'},
          {text: '这四种逻辑关系由什么来决定？答：“确定依赖关系”（工具2），具体解释为：两个活动之间为什么是FS，由强制性依赖来决定，比如有些活动之间，必须是活动A完成，才能开始活动B！'}
        ]},
        {text: '确定依赖关系', ext: [
          {text: '强制性依赖关系Mandatory Dependencies，也叫硬逻辑Hard Logic，法律或合同要求的，团队成员通常无法更改'},
          {text: '选择性依赖关系Discretionary Dependencies，也叫软逻辑Soft Logic、首选逻辑、优先逻辑，应该基于具体领域的最佳实践来确定，项目团队可以完全掌控'},
          {text: '外部依赖关系External Dependencies，项目与非项目活动之间的关系，不在项目团队的控制范围之内'},
          {text: '内部依赖关系Internal Dependencies，项目活动之间的紧前关系'}
        ]},
        {text: '箭线绘图法', ext: [
          {text: '也叫“双代号网络图”，PMBOK第五版去掉了但是考试还有'},
          {text: 'ADM, Arrow Diagramming Method，箭线（两个节点）表示一个活动，一个节点表示一个事件'},
          {text: '只能表示FS，要表示其它关系，用虚线，即“虚活动Dummy Activity”（只有双代号才有虚活动，虚活动的持续时间为0）'},
          {text: 'AOA, Activity-On-Arrow，活动箭线表示法'},
          {text: ''},
          {text: ''},
        ]},
        {text: '提前量与滞后量', ext: [
          {text: '滞后量Lag，也称等待时间、拖后时间'},
          {text: '相对于紧前活动，紧后活动需要推迟的时间量'},
          {text: 'Lag是不需要工作和资源的自然时间'},
          {text: 'Lag会使进度延长，在网络图中用+号表示'},
          {text: '提前量Lead，也称超前时间、重叠时间'},
          {text: '相对于紧前活动，紧后活动可以提前开始的时间量'},
          {text: 'Lead会使进度缩短，网路图中用-减号表示'}
        ]}
      ],
      outputs: [
        {text: '项目进度网络图', ext: [
          {text: '表示项目进度活动之间的逻辑关系，没有时间'},
          {text: '网络图必须是闭环的'},
          {text: '可以多个活动一起开始，画出一个状态点为起始点'},
          {text: '项目的非结束活动如果没有紧后活动，就造成网络断裂'},
          {text: '除了首尾两项，每个活动和每个里程碑都至少有一个紧前活动和一个紧后活动'}
        ]},
        {text: '项目文件更新', ext: ''}
      ]
    }, // One process

    "pmp-064": {
      name: '6.4 估算活动资源',
      engname: 'Estimate Activity Resources',
      knowledge: '项目时间管理 <b>Project Time Management</b>',
      processGroup: '规划过程组 <b>Planning Process Group</b>',
      keyNotes: [
        {text: '本过程只估算有形资源，时间作为资源在6.5中估算'},
        {text: '估算活动所需的材料、人员、设备、用品的种类和数量'},
        {text: '明确活动所需资源，为做出准确的成本和时间估算'}
      ],
      inputs: [
        {text: '进度管理计划', ext: [{text: '6.1 规划进度管理的输出'}]},
        {text: '活动清单', ext: [{text: '6.2 定义活动的输出'}]},
        {text: '活动属性', ext: [{text: '6.2 定义活动的输出'}]},
        {text: '资源日历', ext: [
          {text: '资源日历，Resource Calendar，每种资源的可用工作日或工作班次'},
          {text: '规定了在项目期间，每种资源何时可用、可用多久'},
          {text: '还需考虑更多的资源属性，如技能经验水平、来源地、可用时间'},
          {text: '例题：项目经理发现项目进度落后，分析后得知多位团队成员在休假，问项目经理如何避免这种问题？答：资源日历'},
          {text: '例题：在一个跨国项目中，当地的一个团队成员说，今天是他们当地的节假日，需要休假，但休假会导致项目进度落后，项目经理应如何避免这种问题？答：资源日历'}
        ]},
        {text: '风险登记册', ext: ''},
        {text: '活动成本估算', ext: ''},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: '专家判断'},
        {text: '备选方案分析'},
        {text: '发布的估算数据'},
        {text: '自下而上的估算', ext: [
          {text: 'Bottom-Up Estimating'},
          {text: '自下而上逐层汇总WBS组件的估算，汇总得到项目估算'},
          {text: '如果无法合理估算，应将工作进一步细分再估算，要求精确，所以此方法用时较长'},
          {text: '可以估算时间或成本'}
        ]},
        {text: '项目管理软件'}
      ],
      outputs: [
        {text: '活动资源需求', ext: [
          {text: '识别每项活动所需的资源类型与数量'},
        ]},
        {text: '资源分解结构RBS', ext: [
          {text: 'Resource Breakdown Structure'},
          {text: '按资源的类别和类型划分的资源层级结构'},
          {text: '资源类别（Category）：人力、材料、设备、用品'},
          {text: '资源类型（type）：技能水平、等级水平'},
          {text: 'RBS与资源日历的区别：RBS是所有资源按类型类别划分；资源日历是每一个资源的工作和非工作时间'},
          {text: '例题：每一个团队成员的工作时间、休假时间——资源日历'},
          {text: '例题：按工作年限或职级水平将团队成员作划分——RBS'},
        ]},
        {text: '项目文件更新', ext: ''}
      ]
    }, // One process

    "pmp-065": {
      name: '6.5 估算活动持续时间',
      engname: 'Estimate Activity Durations',
      knowledge: '项目时间管理 <b>Project Time Management</b>',
      processGroup: '规划过程组 <b>Planning Process Group</b>',
      keyNotes: [
        {text: '也叫做“估算任务工期”，根据资源估算结果，来估算每个活动所需工期（不含节假日）'},
        {text: '确定完成每个活动所需的时间量，为制定进度计划过程(6.6)提供输入'},
        {text: '由团队中最熟悉具体活动的小组或个人来估算'},
        {text: '估算出具体活动的工作量和需投入的资源量，就可估算出该活动的工期'}
      ],
      inputs: [
        {text: '进度管理计划', ext: [{text: '6.1 规划进度管理的输出'}]},
        {text: '活动清单', ext: [{text: '6.2 定义活动的输出'}]},
        {text: '活动属性', ext: [{text: '6.2 定义活动的输出'}]},
        {text: '活动资源需求', ext: [{text: '6.4 估算活动资源的输出'}]},
        {text: '资源日历', ext: [{text: '6.4 估算活动资源的输入也有资源日历'}]},
        {text: '项目范围说明书', ext: ''},
        {text: '风险登记册', ext: ''},
        {text: '资源分解结构RBS', ext: [{text: '6.4 估算活动资源的输出'}]},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: '专家判断'},
        {text: '类比估算', ext: [
          {text: 'Analogous Estimating，用相似活动的历史数据，估算当前活动的时间或成本'},
          {text: '在项目早期阶段，详细信息不足时使用'},
          {text: '是粗略的估算法，也是专家判断法，自上而下的（Up-Bottom Estimating）'},
          {text: '综合利用历史信息和专家判断，成本低、快、不精确'},
          {text: '类比估算何时最精确？1.活动在本质上类似；2.估算的人具备专业知识'}
        ]},
        {text: '参数估算', ext: [
          {text: 'Parametric Estimating，基于历史数据和项目参数，使用计算方法来估算成本或时间'},
          {text: '准确性取决于参数模型的成熟度和基础数据的可靠性'},
          {text: '与【类比估算】的异同点：都要参考历史数据；但类比估算只参考整体，参数估算要参考每个单位的信息，所以更准确'},
          {text: '例题：装修会议室，旁边会议室装修花了五万元，估算本会议室装修也花五万元——类比估算（只参考整体）'},
          {text: '例题：装修会议室，旁边会议室每平米花费200元，本会议室一共100平米，估算本会议室将花费200 * 100 = 20000 元——参数估算（考虑每单位）'},
          {text: '学习曲线Learning curves属于参数估算的一种，即随着产品数量增加，工人经验积累，生产每个单位产品所需的时间和成本会逐渐减少'},
        ]},
        {text: '三点估算', ext: [
          {text: 'Three-Point Estimates，用三种估值，考虑到估算的风险，提高准确性：'},
          {text: '最乐观时间（Optimistic）、最可能时间（Most likely）、最悲观时间（Pessimistic）'},
          {text: '源于PERT，Program Evaluation and Review Technique，计划评审技术（美国海军于1958年发明）；贝塔分布，考试默认'},
          {text: '三角分布，不考虑加权，无特别说明，不用这个，预期值 = (乐观时间 + 可能时间 + 悲观时间)/3'},
          {text: '每个活动的期望持续时间（Expected Duration）取决于加权平均值Mean = (乐观时间 + 4*可能时间 + 悲观时间)/6'},
          {text: '标准差Standard Deviation = (悲观时间 - 乐观时间)/6'},
          {text: '三点估算的正态分布图的形态：'},
          {text: '加权平均值在最中间，向左到负无穷的概率50%，向右到正无穷的概率50%'},
          {text: '加权平均值左右各加一个标准差，得到的两边界之间的概率为68.26%'},
          {text: '左右各加两个标准差，两边界之间的概率为95.46%'},
          {text: '左右各加三个标准差，概率99.73%'},
          {text: '解题思路：先算加权平均值Mean和标准差SD，再根据正态分布图的几个概率区间计算所需的值的概率'}
        ]},
        {text: '群体决策技术'},
        {text: '储备分析', ext: [
          {text: 'Reserve Analysis，承认进度风险，应对不确定，也叫：'},
          {text: '应急储备 contingency reserves'},
          {text: '时间储备 time reserves'},
          {text: '缓冲时间 buffers'},
          {text: '应急储备是包含在进度基准中的一段时间，应对已识别的风险，例如：上班路上怕堵车，就提前一段时间出门'},
          {text: '随着项目信息明确，可以动用、减少或取消应急储备'},
          {text: '应急储备与管理储备的区别：应急储备应对已知风险、有针对性；管理储备针对未知风险，也叫“管理层掌握的储备”，项目经理可以用，但要得到管理层的批准'},
          {text: '管理储备不包含在进度基准中，但也属于项目总持续时间的一部分'},
          {text: '使用管理储备，可能变更进度基准'}
        ]}
      ],
      outputs: [
        {text: '活动持续时间估算', ext: [
          {text: '对完成某活动所需时间的定量评估'},
          {text: '时间估算不包含滞后量Lag'},
          {text: '注：滞后量是讲两个活动之间的逻辑关系，单纯一个活动，无滞后量可言'},
          {text: '注：滞后量是不需要工作和资源的自然时间'},
        ]},
        {text: '项目文件更新', ext: ''}
      ]
    }, // One process

    "pmp-066": {
      name: '6.6 制定进度计划',
      engname: 'Develop Schedule',
      knowledge: '项目时间管理 <b>Project Time Management</b>',
      processGroup: '规划过程组 <b>Planning Process Group</b>',
      keyNotes: [
        {text: '分析活动顺序、持续时间、资源需求、进度制约因素，创建项目进度模型'}
      ],
      inputs: [
        {text: '进度管理计划', ext: [{text: '6.1 规划进度管理的输出'}]},
        {text: '活动清单', ext: [{text: '6.2 定义活动的输出'}]},
        {text: '活动属性', ext: [{text: '6.2 定义活动的输出'}]},
        {text: '项目进度网路图', ext: [{text: '6.3 排列活动顺序的输出'}]},
        {text: '活动资源需求', ext: [{text: '6.4 估算活动资源的输出'}]},
        {text: '资源日历', ext: [{text: '6.4 估算活动资源的输入也有资源日历'}]},
        {text: '活动持续时间估算', ext: [{text: '6.5 估算活动持续时间的输出'}]},
        {text: '项目范围说明书', ext: ''},
        {text: '风险登记册', ext: ''},
        {text: '项目人员分派', ext: ''},
        {text: '资源分解结构RBS', ext: [{text: '6.4 估算活动资源的输出'}]},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: '进度网络分析', ext: [
          {text: '计算项目中未完成部分的最早和最晚开始时间、最早和最晚完成时间，是创建项目进度模型的一种技术'},
          {text: '分析活动之间的逻辑关系，主要有四种方法：关键路径法、关键链法、资源优化技术、建模技术'},
        ]},
        {text: '关键路径法CPM', ext: [
          {text: 'Critical Path Method, 杜邦公司1956年发明'},
          {text: '项目分解为若干活动，用“单点估算”采用最可能时间（Most likely）作为活动持续时间，把所有活动按逻辑关系连接，得到从开始到完成的若干路径，所有路径中的持续时间最长的一条，为关键路径，它决定着项目的最短工期，其上的活动都为关键活动，关键活动不能有时差（机动时间），项目进度由关键活动决定，关键活动延误，项目就被延误！'},
          {text: '关键路径法不考虑资源限制，是理想状态的情况'},
          {text: '顺推分析Forward Pass Analysis，也叫“正向计算”，从左到右，计算最早开始时间ES和最早完成时间EF，标在七格图的上部：ES、DU、EF'},
          {text: '逆推分析Backward Pass Analysis，也叫“反向计算”，从右往左，计算最晚开始LS和最晚结束LF，标在七格图的下部：LS、时差Float、LF'},
          {text: '时差Slack或Float，公式：LS-ES或LF-EF'},
          {text: '实际中关键活动的时差小于0，即延期了，这时就要“进度压缩”'},
          {text: '总时差Total Slack：一个活动不影响整个项目进度的机动时间，总时差大于自由时差'},
          {text: '自由时差Free Slack：一个活动不影响后续活动最早开始的机动时间'}
        ]},
        {text: '关键链法', ext: [
          {text: 'Critical Chain Method，即资源约束型的关键路径法'},
          {text: '采用非保守计算，即用最乐观时间（Optimistic）作为活动的持续时间（关键路径法是用的最可能时间（Most likely），所以关键链法比关键路径法得到的进度计划时间短10%-25%'},
          {text: '因为用了最乐观时间估算，因而风险加大，所以要加缓冲：'},
          {text: '项目缓冲：放在关键链的末端，保证项目不因关键链的延误而延误'},
          {text: '接驳缓冲：放在非关键链和关键链的接合点，保证关键链不受非关延误的影响'},
          {text: '按照最晚开始LS和最晚完成LF来安排活动，因此没有时差，克服Parkinson定律'},
          {text: 'Parkinson定律：可今天做也可明天做的都放在明天做，也叫“懒惰定律”'}
        ]},
        {text: '资源优化技术', ext: [
          {text: '资源平衡技术Resource Leveling：当资源数量有限、只可在特定时间使用、或被过度分配时，使用资源平衡'},
          {text: '资源平衡作用于非关键路径（因此非关有时差，才有调整的空间）'},
          {text: '资源平衡可能会改变关键路径'},
          {text: '资源平衡可能导致工期延长，例如6个人做5天，改为5个人做6天'},
          {text: '资源平滑技术Resource Smoothing：只在时差内调整，不改变关键路径，不延迟工期'}
        ]},
        {text: '建模技术', ext: [
          {text: 'Modeling Techniques'},
          {text: '假设情景分析 What-If Scenario Analysis'},
          {text: '模拟 Simulation，常用三点估算其概率分布，最常用蒙特卡洛分析Monte Carlo analysis：首先确定每个活动的可能持续时间的概率分布，再计算整个项目的可能工期概率分布'},
          {text: 'Monte Carlo Analysis，多点估算，比三点估算（PERT）和单点估算（CPM）更准确'},
          {text: 'Monte Carlo Analysis 考虑了“路径汇聚”对项目进度的影响，更接近现实'},
          {text: '路径汇聚Path Convergence：在进度的某个节点上有数个并行的活动，此节点风险最高，这里并行的任何一个活动的延迟都可能导致项目延期'},
          {text: '例题：活动A、B、C并行汇聚于X点，三者全部完成后，活动D才能开始，ABC在5天内完成的概率都是50%，则D在第6天开始的概率是？答：50% * 50% * 50% = 12.5%'},
          {text: 'Monte Carlo Analysis 也可用于成本估算'},
        ]},
        {text: '提前量与滞后量'},
        {text: '进度压缩', ext: [
          {text: 'Schedule Compression，进度压缩的前提是不缩减项目范围！'},
          {text: '进度压缩所用于关键路径'},
          {text: '压缩后，关键路径可能发生变化，产生新的关键路径'},
          {text: '进度压缩两个方法：赶工（赶进度）& 快速跟进'},
          {text: '赶工Crashing，即常说的加班、加人、加资源，会导致成本增加，风险增加（压缩活动本身的时间，即计划3天做完的事赶在1天做完）'},
          {text: '快速跟进Fast Tracking，改变活动之间的逻辑关系，原本顺序执行的活动，改为并行，可能造成返工和风险增加。也会改变项目进度网络图（不压缩活动本身的时间）'},
        ]},
        {text: '进度计划编制工具'}
      ],
      outputs: [
        {text: '进度基准', ext: [
          {text: '被批准的进度模型，想变更必须经过正式的变更控制程序'},
          {text: '此基准用作与实际结果相比较的依据'}
        ]},
        {text: '项目进度计划', ext: [
          {text: '进度计划有三个类型：'},
          {text: '里程碑图：只标出主要的可交付成果和关键外部接口的计划开始和完成日期，一般用于向客户展示'},
          {text: '横道图（甘特图、二维横道图）：标识出每个活动的预期持续时间，日期在横轴、进度在纵轴，没有逻辑关系，用于向管理层汇报'},
          {text: '时标进度网络图（逻辑甘特图）：详细的进度计划，既有活动的持续时间，也有活动之间的逻辑关系，用于项目团队自己人看'}
        ]},
        {text: '进度数据', ext: [
          {text: '描述和控制进度计划的信息集合'},
          {text: '至少包括：进度里程碑、进度活动、活动属性、制约因素'}
        ]},
        {text: '项目日历', ext: [
          {text: '规定可以开展项目活动的工作日和班次'},
          {text: '把可用于项目活动的时间段和不可用的时间段区分开'},
          {text: '可能需要不止一个项目日历'},
        ]},
        {text: '项目管理计划更新', ext: ''},
        {text: '项目文件更新', ext: ''}
      ]
    }, // One process

    "pmp-067": {
      name: '6.7 控制进度',
      engname: 'Control Schedule',
      knowledge: '项目时间管理 <b>Project Time Management</b>',
      processGroup: '监控过程组 <b>Monitoring and Controlling Process Group</b>',
      keyNotes: [
        {text: '监督项目活动状态、更新项目进展、管理进度基准变更'},
        {text: '发现计划偏离，及时纠正和预防，降低风险'},
        {text: '项目时间管理的大部分工作都在控制进度中！'}
      ],
      inputs: [
        {text: '项目管理计划', ext: ''},
        {text: '项目进度计划', ext: [{text: '6.6 制定进度计划的输出'}]},
        {text: '工作绩效数据', ext: ''},
        {text: '项目日历', ext: [{text: '6.6 制定进度计划的输出'}]},
        {text: '进度数据', ext: [{text: '6.6 制定进度计划的输出'}]},
        {text: '事业环境因素和组织过程资产', ext: 'global-01'}
      ],
      tools: [
        {text: '绩效审查'},
        {text: '项目管理软件'},
        {text: '资源优化技术'},
        {text: '建模技术'},
        {text: '提前量与滞后量'},
        {text: '进度压缩'},
        {text: '进度计划编制工具'}
      ],
      outputs: [
        {text: '工作绩效信息', ext: ''},
        {text: '进度预测', ext: ''},
        {text: '变更请求', ext: ''},
        {text: '项目管理计划更新', ext: ''},
        {text: '项目文件更新', ext: ''},
        {text: '组织过程资产更新', ext: ''}
      ]
    } // One process
}, // End of datas

};
