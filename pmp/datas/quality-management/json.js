var Project_Quality_Management = {
id: 8,
datas: {
    "pmp-081": {
      name: '8.1 规划质量管理',
      engname: 'Plan Quality Management',
      knowledge: '项目质量管理 <b>Project Quality Management</b>',
      processGroup: '规划过程组 <b>Planning Process Group</b>',
      keyNotes: [
        {text: '质量quality和等级grade：质量低（内在特性不满足要求）一定是问题！等级低不一定是问题！'},
        {text: '精确Precision：测量值之间非常接近，数据离散度小，但未必准确。准确Accuracy：测量值非常接近实际值，但未必精确。项目要确定适当的准确和精确度。'},
        {text: '戴明环Deming：PDCA循环（Plan计划 - Do执行 - Check检查 - Action行动）即持续改进，舍瓦特（Shewhart）发明，Deming博士改进并发扬光大'},
        {text: '戴明管理14原则：讲义184页。考题形式：哪句话是戴明博士说的？'},
        {text: 'Juran朱兰理论核心：管理就是不断改进工作、质量就是适于使用（Fitness for use，主观）。朱兰认为解决问题应排出优先级顺序，使用Pareto分析法，即80%的故障都是由20%的问题导致的，应着力于解决这些关键问题'},
        {text: 'Crosby提出，第一次就把事情做对是最经济的（Doing the Thing Right the First Time）；零缺陷；质量是免费的Quality is Free（第一次就把质量做好付出的代价，远比质量不合格返工付出的代价低得多）；质量就是符合要求（Conformance to Requirements，客观）'},
        {text: '田口玄一提出，质量是设计出来而不是检查出来的，提倡用统计技术做质量管理，提出实验设计的方法。'},
        {text: 'Six Sigma：一个西格玛是一个标准偏差，即实际值对平均值的偏离程度。六个西格玛的合格率是99.99966%。考题例：估算项目最早完工日期是3月1日，现客户希望保守一点，有99.99%概率完工，你查阅历史档案发现此类项目的标准偏差为4天，则向客户报上的最早完工日期应该为哪一天？解答：一个西格玛是4天，客户要求概率99.99%，即6个西格玛，4*6=24天，3月1日加上24天，即3月25日。'},
        {text: '全面质量管理Total Quality Management（TQM）：用工作质量促进过程质量，从而保证产品质量；全员、全方位、全过程。是由朱兰和费根鲍姆提出的。没有特别说明时，默认都是实施了全面质量管理。（注：实施了全面质量管理后，预防成本是最多的！）'},
        {text: '失效模式与影响分析Failure Mode and Effect Analysis：在制造行业用得多，分析产品每个部件的每种可能失效模式，以及对可靠性的影响。对每种可能的失效，要估计其对整个系统的影响。为降低失效的概率而需要采取行动，属于事前行为。'},
        {text: '客户声音Voice of the Customer：在产品开发的每阶段，把客户需求转换为适当的技术要求来实现，即质量功能展开QFD，见讲义81-82页'},
        {text: '零库存Just In Time，JIT，也叫准时制，丰田公司提出，当仓库没有库存时，会降低成本，意味着发出的货都是正品，是零缺陷'},
        {text: '项目管理与质量管理共同观点：1 质量是让客户满意；2 预防胜于检查；3 持续改进；4 管理层的责任；5 质量成本。下面详细解释：'},
        {text: '—— 1、客户满意Customer satisfaction：满足客户期望（了解要求、评估要求、定义要求、管理要求）；符合要求；适合使用（产品或服务必须满足实际需求）。'},
        {text: '—— 2、预防胜于检查Preventions over Inspection：质量应该被规划和设计、并在项目的管理过程或在成果的生产过程中被建造出来，而不是被检查出来；预防错误的成本比检查出错误后纠正的成本低得多！'},
        {text: '—— 3、持续改进Continuous Improvement：不断改进所有过程的质量！PDCA环是质量改进的基础。全面质量管理、六西格玛和精益六西格玛，既能改进项目的管理过程，也能改进项目的产品质量。Kaizen就是改善、持续改进；过程改进模型有：Malcolm Baldrige（多用于制造行业）、CMM/CMMI（Capability Maturity Model/CMM Integration能力成熟度集成模型，多用于IT行业，衡量软件企业的过程水平）、OPM3（Organizational Project Management Maturity Model，组织级项目管理成熟度模型，PMI开发） '},
        {text: '—— 4、管理层的责任Management Responsibility：85%的质量问题由体系原因造成，15%由岗位原因造成。即管理层承担85%的责任，员工承担15%的责任（戴明提出）。考题例：项目的一个缺陷导致成本损失1万元，员工需承担多少？解：10000*15%=1500元'},
        {text: '—— 5、质量成本Cost of Quality：在整个产品的生命周期中（不是项目的生命周期！）、与质量相关的所有努力的总成本！具体有：'},
        {text: '—— ——预防成本Prevention Cost：预防不符合要求'},
        {text: '—— ——评价成本Appraisal Cost：评价是否符合要求'},
        {text: '—— ——失败成本Failure Cost：未达要求，也叫缺陷成本、劣质成本（内部失败成本Internal：项目内部发现；外部失败成本External：客户发现的……）'},
        {text: '—— ——质量成本是【一致性工作】和【非一致性工作】的总成本：'},
        {text: '—— ——一致性工作：为预防出错做的附加努力，尚未出现缺陷！预防成本（生产合格产品）包括：培训、流程文档化、设备、正确的做事时间。评价成本（评定质量）包括：测试、破坏性测试导致的损失、检查。【一致性成本是在项目期间用于防止失败的费用】'},
        {text: '—— ——非一致性工作：为纠正已出现的错误做的附加努力，缺陷已出现！内部失败成本（项目内部发现）包括：返工Rework、废品。外部失败成本（客户发现）包括：责任、报修、业务流失。【非一致性成本是在项目期间和项目完成后，用于处理失败的费用】'},
        {text: '实施全面质量管理（TQM）后，预防成本为最大，各质量成本的占比为：预防成本70%、评估成本15%、内部缺陷成本10%、外部缺陷成本5%。总质量成本占项目价值百分比3-5%。'},
        {text: '8.1 规划质量管理，是识别项目及其可交付成果的质量要求或标准，书面描述项目如何证明符合质量要求。即确定项目的质量标准，以及如何管理质量。'},
        {text: '规划质量管理，需要参考组织的质量政策Quality Policy，体现在输入的“组织过程资产”中'}
      ],
      inputs: [
        {text: '1. 项目管理计划', ext: [{text: '4.2 制定项目管理计划的输出'}]},
        {text: '2. 干系人登记册'},
        {text: '3. 风险登记册'},
        {text: '4. 需求文件', ext: [{text: '5.2 收集需求的输出'}]},
        {text: '5. 事业环境因素'},
        {text: '6. 组织过程资产', cusWidth: 480, ext: [{
          {text: '规划质量管理，需要参考组织的《质量政策》，这是管理层颁布的组织质量工作方向，项目照搬执行！'},
          {text: '当组织没有质量政策，或项目涉及多个组织，则项目管理团队为项目制定质量政策'},
          {text: '项目管理团队要确保干系人完全了解项目所使用的质量政策！'},
          {text: '考题例：项目团队成员对质量政策理解不一致，找谁？答：找领导（质量政策由高层颁布）'},
        }]}
      ],
      tools: [
        {text: '1. 成本效益分析', cusWidth: 420, ext: [
          {text: 'Cost-Benefit Analysis：权衡质量成本和质量效益，即质量标准不宜太低或太高！'},
          {text: '达到质量要求的主要效益：减少返工、提高生产率、降低成本、提升干系人满意度、提升赢利能力'},
          {text: '要对每个质量活动进行商业论证，比较其可能成本与预期效益'}
        ]},
        {text: '2. 质量成本', cusWidth: 200, ext: [{text: '一致性、非一致性'}]},
        {text: '3. 七种质量工具(7QC)', cusWidth: 600, ext: [
          {text: '1. 因果图Cause-and-effect diagrams, fishbone diagrams：直观显示因果、用于查找原因'},
          {text: '2. 流程图Flow Charting：也叫过程图，一或多个输入转化为一或多个输出所需的步骤顺序和可能分支'},
          {text: '3. 核查表Checksheets：也叫计数表，收集数据的查对清单，例如签到表。收集属性数据较方便'},
          {text: '4. 直方图Histogram：垂直的柱状图，一个柱子代表一个问题属性，柱子高度代表问题发生次数（频率），可以直观找到最大原因，即最普遍原因。但对于其余的原因的情况就不清楚了，所以需要将柱子们按照频率，即高度的大小来排列，由此可得到帕累托图'}, 
          {text: '5. 帕累托图Pareto Chart：按频率发生排序的特殊直方图，目的是为了有重点的采取纠正措施。要先处理导致最多缺陷的原因，可节省时间和金钱。（帕累托法则：少数重要原因常造成大多数问题或缺陷；八二原则即80%的问题是由20%的原因导致）'},
          {text: '6. 控制图Control Charts：确定一个过程是否稳定，是否具有可预测的绩效。制定规格上限和下限，反映可允许的最大值和最小值，根据统计原则控制上下限，发现需要采取纠正措施的检查点，目的是维持有效过程的自然稳定。控制上下限（UCL，Upper Control Limit和LCL，Lower Control Limit）通常设在离过程均值+/-3个西格玛的位置（注：控制上下限是针对过程的，规格上下限是针对结果的；超出控制上下限是“过程失控”，但结果也许可以接受）'},
          {text: '—— 过程失控的条件（满足一个就失控）：1. 超出控制界限；2. 在控制界限内但连续7个点落在均值的一侧'},
          {text: '—— 没有界限的控制图，叫“趋势图”：显示随时间推移的过程趋势'},
          {text: '7. 散点图Scatter Diagram：也叫相关图，显示两个变量之间的关系。数据点越接近某斜线，两变量的关系越密切。例如正相关、曲线相关等。'}
        ]},
        {text: '4. 标杆对照'},
        {text: '5. 实验设计DOE', ext: [
          {text: 'Design of Experiments，田口玄一发明，是一种统计方法，用来识别哪些因素会对正在开发的流程或正在生产的产品的特定变量产生影响（203页）'},
        ]},
        {text: '6. 统计抽样Statistical Smapling', ext: [
          {text: '选择部分样本用于检查，常用于破坏性测试'},
          {text: ' - 系统抽样：有规律的抽样，例如：每隔50台做一个检查'},
          {text: ' - 分类抽样：先分类别，在某个类别中抽样'},
          {text: ' - 随机抽样Random Sampling：总体中的每个个体都有均等机会被抽中'}
        ]},
        {text: '7. 其他质量规划工具', ext: [
          {text: '头脑风暴法'},
          {text: '力场分析Force field analysis，见讲义331页'},
          {text: '名义小组技术：小组成员不沟通，每个人发表自己的意见，然后整体投票，投票结果优先排序。见讲义84页'},
        ]},
        {text: '8. 会议'}
      ],
      outputs: [
        {text: '1. 质量管理计划'},
        {text: '2. 过程改进计划'},
        {text: '3. 质量测量指标'},
        {text: '4. 质量核对单'},
        {text: '5. 项目文件更新'}
      ]
    }, // One process

    "pmp-082": {
      name: '8.2 实施质量保证',
      engname: '',
      knowledge: '项目质量管理 <b>Project Quality Management</b>',
      processGroup: '执行过程组 <b>Executing Process Group</b>',
      keyNotes: [
        {text: ''},
        {text: ''},
        {text: ''},
        {text: ''}
      ],
      inputs: [
        {text: '', ext: [{text: ''}]},
        {text: '', ext: [{text: ''}]},
        {text: '', ext: [{text: ''}]},
        {text: '', ext: [{text: ''}]},
        {text: '事业环境因素和组织过程资产'}
      ],
      tools: [
        {text: '', ext: [
          {text: ''},
          {text: ''}
        ]},
        {text: '', ext: [
          {text: ''},
          {text: ''},
          {text: ''}
        ]},
        {text: '', ext: [
          {text: ''},
          {text: ''}
        ]}
      ],
      outputs: [
        {text: '', ext: [
          {text: ''},
          {text: ''},
          {text: ''},
          {text: ''}
        ]},
        {text: '', ext: [
          {text: ''},
          {text: ''},
          {text: ''},
          {text: ''},
          {text: ''}
        ]}
      ],
    }, // One process

    "pmp-083": {
      name: '8.3 控制质量',
      engname: '',
      knowledge: '项目质量管理 <b>Project Quality Management</b>',
      processGroup: '监控过程组 <b>Monitoring and Controlling Process Group</b>',
      keyNotes: [
        {text: ''},
        {text: ''},
        {text: ''},
        {text: ''}
      ],
      inputs: [
        {text: ''},
        {text: '', ext: [{text: ''}]},
        {text: '', ext: [{text: ''}]},
        {text: '事业环境因素和组织过程资产'}
      ],
      tools: [
        {text: ''},
        {text: '', ext: [
          {text: ''},
          {text: ''},
          {text: ''},
          {text: ''}
        ]},
        {text: '', ext: [
          {text: ''},
          {text: ''},
          {text: ''}
        ]}
      ],
      outputs: [
        {text: '', ext: [
          {text: ''},
          {text: ''},
          {text: ''},
          {text: ''},
          {text: ''},
          {text: ''}
        ]},
        {text: ''}
      ],
    } // One process

} // End of datas
};
