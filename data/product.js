var ProductList = {
  'zh-cn': {
    page: 'any',
    name: '产品服务',
    link: '/cm/zh-cn/product/',
    category: {
      mobileApps: {
        categoryName: '移动端',
        categoryLink: 'Product_MobileApps',
        categoryData: {
          onMenu: true, /* To show sub categories on menu, make it true. */
          unfold: true, /* To unfold sub categories by default, make it true. */
          tool: {
            name: '工具',
            hash: 'Product_Tools',
            anch: 'category-of-tool',
            desc: ['覆盖PC、移动端，构建安全、清理、图片编辑等多元化的产品矩阵；', '高居Google Play同品类榜首，开创猎豹移动出海浪潮'],
            data: [
              {
                priority: '100',
                name: '猎豹清理大师',
                slog: '清理所有不快',
                icon: '/dist/images/brandnew-logo-clean-master-103.png',
                descForIndex: ['全球第一大安卓优化软件。首创业界领先的“云端+人工智能”深度清理系统，清理量较同类产品高30%以上；率先支持清理微信小程序垃圾。云端防毒体系多次被安全权威机构AV-Test评测为全球第一，100个国家Google Play工具榜排名第一'],
                descForProd: ['全球第一大安卓优化软件。首创业界领先的“云端+人工智能”深度清理系统，清理量较同类产品高于30%；率先支持清理微信小程序垃圾。云端防毒体系多次被权威机构AV-Test评为全球第一，100个国家Google Play工具榜NO.1。'],
                star: 4.7,
                tags: ['全球下载量近30亿', '国内应用市场评分同类最高'],
                link: 'http://cn.cmcm.com/cleanmaster/?f=www',
                target: '_blank',
                pict: '/dist/images/brandnew-tool-cm.png'
              },
            
              {
                priority: '50',
                name: '猎豹安全大师',
                slog: '',
                icon: '/dist/images/brandnew-logo-security-103.png',
                descForIndex: ['全球领先的手机安全应用，获红点设计大奖。具有智能检测、病毒查杀、应用锁、拍下入侵者等功能，全面保护用户的手机安全及隐私'],
                descForProd: ['全球领先的手机安全应用。具有智能检测、病毒查杀、应用锁、拍下入侵者等功能，内建AV TEST评测最佳病毒引擎，全面保护手机安全。', 'Google Play下载超过5亿次，30个国家安全工具类应用排行榜排名第一，评分高达4.7。'],
                star: 0,
                tags: ['Google Play全球下载超过5亿', 'AV TEST评测最佳病毒引擎'],
                link: 'http://cn.cmcm.com/cm-security/?f=cmcn',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '50',
                name: '猎豹3D桌面',
                slog: '',
                icon: '/dist/images/brandnew-logo-launcher-103.png',
                descForIndex: ['全球安卓平台最受欢迎的个性化手机桌面产品，提供海量主题，深度个性化定制。覆盖200多个国家和地区，Google Play总下载量近2亿'],
                descForProd: ['全球安卓平台最受欢迎的个性化手机桌面产品。提供海量主题、深度个性化定制、并搭载智能锁屏功能，全方位保障隐私与安全。', '覆盖全球200多个国家和地区， Google Play 94个国家个性化榜单排名第一，总下载量近2亿。'],
                star: 0,
                tags: ['94个国家排名第一'],
                link: 'http://www.cmcm.com/zh-cn/cm-launcher/?f=cmcn',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '33',
                name: 'Cheetah Keyboard',
                slog: '',
                icon: '/dist/images/brandnew-logo-kb-103.png',
                descForIndex: ['业界首款引入深度学习模型的第三方输入法，Google Play50个国家个性化榜单排名第一'],
                descForProd: ['业界首款引入深度学习模型的第三方输入法。具有智能预测、自动更正、学习用户习惯等功能。融入NLP技术和机器学习算法到其中，更强预测、更高准确率。', '覆盖140多个国家和地区，为Google Play评分最高的第三方输入法。'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=panda.keyboard.emoji.theme&hl=en',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '33',
                name: 'PhotoGrid',
                slog: '',
                icon: '/dist/images/brandnew-logo-photogrid-103.png',
                descForIndex: ['相片组合编辑、视频拼贴、修图滤镜神器，2016年Google Play年度最佳App'],
                descForProd: ['时下必备的相片组合编辑、视频拼贴、修图滤镜神器。内含海量素材，更利用机器学习、脸部辨识技术，推出Twinkle功能，令照片产生特殊的动态效果。', '安卓和iOS双平台共5.5亿下载量，2016年Google Play年度最佳App之一。'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/zh-cn/photo-grid/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '33',
                name: '猎豹浏览器',
                slog: '',
                icon: '/dist/images/brandnew-logo-browser-103.png',
                descForIndex: ['极致轻巧的安全浏览器。曾在8个国家App Store工具榜排名第一，Google Play总下载量近1亿'],
                descForProd: ['更轻巧、更快速、更安全的新一代手机浏览器。同时，它还是国内最早做内容探索的浏览器。', '曾在8个国家App Store工具榜排名第一，Google Play总下载量近 1亿，是海外用户量最大的第三方浏览器。'],
                star: 0,
                tags: ['', ''],
                link: 'http://m.liebao.cn/?f=cmcn',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '',
                name: '金山电池医生',
                slog: '',
                icon: '/dist/images/brandnew-logo-bd-103.png',
                descForIndex: [],
                descForProd: ['全球最专业的电池保养和电量管理软件，能轻松延长手机续航时间；科学用电、延长电池寿命。', '覆盖全球200多个国家和地区，曾在Google Play 26个国家工具榜高居第一，在133个国家App Store工具榜排名第一，Google Play下载量超 1亿。'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/zh-cn/battery-doctor/',
                target: '_blank',
                pict: ''
              },
            ]
          },
          socl: {
            name: '社交',
            hash: 'Product_Social',
            anch: 'category-of-social',
            desc: ['跨越文化壁垒，连接全球用户；', '布局海外直播市场，建立内容生态体系'],
            data: [
              {
                priority: '',
                name: 'Live.me',
                slog: '',
                icon: '/dist/images/brandnew-logo-liveme-103.png',
                descForIndex: ['风靡全球的直播类社交应用，将中国的直播打赏模式复制到海外，已经成为全球年轻人最喜爱的社交产品之一。目前已在85个国家和地区发行，覆盖7种不同语言。在全球42个国家Google Play社交畅销榜排行NO.1。继工具产品之后，Live.me成为猎豹移动出海的新标杆'],
                descForProd: ['一款风靡全球的直播类社交应用。将中国的直播打赏模式复制到海外，吸引了众多明星及大牌网红入驻，已经成为美国轻人最喜爱的社交产品之一。', '覆盖85个国家，8种语言，位列Google Play美国社交产品畅销榜NO.1。'],
                star: 0,
                tags: ['85个市场|覆盖多元文化', '7种语言|融合本地需求', '42个国家|登顶社交畅销榜'],
                link: 'http://www.liveme.com/',
                target: '_blank',
                pict: ''
              },
            ]
          },
          game: {
            name: '游戏',
            hash: 'Product_Games',
            anch: 'category-of-game',
            desc: ['猎豹移动手游产品在全球月活跃用户超过1亿，', '是iOS和Google Play月度手游下载榜Top10上榜最频繁的国内厂商'],
            data: [          
              {
                priority: '50-100',
                name: '钢琴块2',
                slog: '',
                icon: '/dist/images/brandnew-logo-pt2-103.png',
                descForIndex: ['风靡全球、坐拥9亿玩家的音乐类轻游戏；全新的滑块玩法、丰富的赛制模式。iOS中国游戏免费下载榜Top5，2016年iOS和Google Play音乐休闲游戏榜全球下载量Top1'],
                descForProd: ['一款风靡全球、坐拥9亿玩家的音乐类轻游戏；推出全新滑块玩法、开启大师赛制，带给你绝佳的视听双体验。', 'iOS中国区游戏免费下载榜Top 5，158个国家免费游戏榜TOP1，2016年iOS和Google Play双平台音乐休闲游戏类下载量Top1。'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/zh-cn/piano-tiles/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '50-50',
                name: '滚动的天空',
                slog: '',
                icon: '/dist/images/brandnew-logo-rs-103.png',
                descForIndex: ['挑战速度和反应力极限的轻游戏；3D立体视觉，多样的游戏场景。141个市场App Store游戏下载榜前十，iOS中国游戏免费下载榜Top5，Google Play2016最佳游戏之一'],
                descForProd: ['一款挑战速度和反应力极限的轻游戏；具有3D立体感的超炫视觉和丰富多样的游戏场景。', '现累计下载已超2.4亿，141个海外市场App Store游戏下载榜前十，65个国家的总榜前十，iOS中国游戏免费下载榜Top 5，Google Play2016最佳游戏。'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=com.turbochilli.rollingsky',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '25-50',
                name: '跳舞的线',
                slog: '',
                icon: '/dist/images/brandnew-game-bg-dl-icon.png',
                descForIndex: ['音乐类轻游戏，特色原创音轨，伴你冲破重重关卡；Google Play2017最佳游戏，评分高达4.8'],
                descForProd: ['原创音乐节奏类轻游戏。特色原创音轨，伴你冲破重重关卡，探索无限未知。', 'Apple Store和Google Play双平台评分4.8，权威游戏媒体及分发平台TapTap 9.7分，iOS中国区游戏免费下载榜Top5，美国等115个国家音乐游戏榜排名第一。'],
                star: 0,
                tags: [],
                link: 'http://board.cmcm.com/dl/transfer.html',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '25-50',
                name: '弓箭手大作战',
                slog: '',
                icon: '/dist/images/brandnew-game-bg-gjs-icon.png',
                descForIndex: ['真人对战IO游戏，用弓箭征服世界；获2016阿里巴巴新晋热门游戏奖，TapTap最佳玩法提名'],
                descForProd: ['一款全新玩法的真人对战io游戏，丰富的像素人偶风格可供选择，带你用弓箭征服世界。', '位居18个国家App Store动作类游戏下载榜Top 5，2017年1月，获台湾、波兰动作类游戏第一名，2017年6月获中国动作类游戏第二名。'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=com.cmcm.arrowio',
                target: '_blank',
                pict: ''
              },

              {
                priority: '',
                name: '深海水族馆',
                slog: '',
                icon: '/dist/images/brandnew-logo-shszg-103.png',
                descForIndex: [],
                descForProd: ['一款风靡全球的养鱼游戏，在游戏中收集成百上千的鱼儿，让身心得到彻底放松与治愈。2016年10月由猎豹移动独家代理发行，获得iOS与Google Play双平台2016年最佳独立游戏荣誉。'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=com.idleif.abyssrium',
                target: '_blank',
                pict: ''
              },

              {
                priority: '',
                name: '点点冲刺',
                slog: '',
                icon: '/dist/images/brandnew-logo-ddcc-103.png',
                descForIndex: [],
                descForProd: ['一款考验反应能力的奔跑类街机手游。画风极具简约风格，玩法操作简单，潜移默化的提升用户反应能力和手速。', '曾在多个国家获得Google Play游戏下载榜第一名，超过千次获得Google Play编辑推荐。'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=com.secondarm.taptapdash',
                target: '_blank',
                pict: ''
              },

            ]
          },
          news: {
            name: '新闻',
            hash: 'Product_News',
            anch: 'category-of-news',
            desc: ['运用人工智能技术，', '为全球用户精准推送“千人千面”的新闻内容'],
            data: [          
              {
                priority: '',
                name: 'News Republic',
                slog: '',
                icon: '/dist/images/brandnew-logo-nr-103.png',
                descForIndex: ['一款搭载个性化推荐技术的新闻聚合应用，通过人工智能技术的运用，为全球用户精准推送“千人千面”的新闻内容。覆盖43个国家，47种语言 ，拥有全球近3000家优质媒体版权，曾经在60个国家Google Play新闻杂志应用下载榜单中荣登第一'],
                descForProd: ['一款搭载个性化推荐技术的新闻聚合应用，通过AI技术，为全球用户精准推送“千人千面”的新闻内容。', '覆盖43个国家，拥有全球近3000家优质媒体版权，曾经在60个国家Google Play新闻杂志应用下载榜单中荣登第一。'],
                star: 0,
                tags: [],
                link: 'http://www.news-republic.com/',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      pc: {
        categoryName: 'PC端',
        categoryLink: 'Product_forPC',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          pc: {/* When no sub category, using the same name & hash as its father!*/
            name: 'PC端',
            hash: 'Product_forPC',
            anch: 'category-of-pc',
            desc: '',
            data: [
              {
                priority: '',
                name: '猎豹安全浏览器',
                slog: '',
                icon: '/dist/images/brandnew-logo-browser-103.png',
                descForIndex: [],
                descForProd: ['国内首款双核安全浏览器，基于Chromium内核超过100项改进，启动速度提升30%；智能防卡死，全面兼容HTML5，充满艺术气息的视觉方案；首创BIPS云安全体系，拦截恶意网址，全面拦截来自 Web 安全威胁。'],
                star: 0,
                tags: [],
                link: 'https://www.liebao.cn',
                target: '_blank',
                pict: ''
              },
              {
                priority: '',
                name: '金山毒霸',
                slog: '',
                icon: '/dist/images/brandnew-logo-duba-103.png',
                descForIndex: [],
                descForProd: ['集杀毒、系统管理为一体的安全软件。18年专业积累、20次通过VB100认证（国内安全软件中通过此认证次数最多）、多次通过AV-Comparatives、AV-Test认证，独创蓝芯引擎，与云安全无缝结合，使用微特征识别技术通杀未知木马。'],
                star: 0,
                tags: [],
                link: 'http://www.duba.net',
                target: '_blank',
                pict: ''
              },
              {
                priority: '',
                name: '驱动精灵',
                slog: '',
                icon: '/dist/images/brandnew-logo-qdjl-103.png',
                descForIndex: [],
                descForProd: ['2012年收购，中国首创的、第一大电脑驱动程序管理软件，基于十余年的专业数据积累，硬件设备识别率高达98.3%，其中网卡的识别率高达99.9%，位列行业翘楚，为数亿用户解决各种电脑驱动问题、系统故障，实为装机必备。'],
                star: 0,
                tags: [],
                link: 'http://www.drivergenius.com',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      ai: {
        categoryName: '人工智能',
        categoryLink: 'Product_AI',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          ai: {/* When no sub category, using the same name & hash as its father!*/
            name: '人工智能',
            hash: 'Product_AI',
            anch: 'category-of-ai',
            desc: '',
            data: [
              {
                priority: '',
                name: '猎户星空',
                slog: '',
                icon: '/dist/images/brandnew-logo-orion-200.png',
                descForIndex: [],
                descForProd: ['猎豹移动构建AI技术平台，为产品赋能，完善了工具产品矩阵，也为内容产品带来增长。', '旗下的猎户星空在智能语音交互系统、图像识别、视觉导航等技术上领跑行业。', '2017年在微软百万名人识别赛（LFW）中夺得第一。'],
                star: 0,
                tags: [],
                link: 'http://ainirobot.com/',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      bigData: {
        categoryName: '大数据',
        categoryLink: 'Product_bigData',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          bigData: {
            name: '大数据',
            hash: 'Product_bigData',
            anch: 'category-of-bigdata',
            desc: '',
            data: [
              {
                priority: '',
                name: '猎豹大数据',
                slog: '',
                icon: '/dist/images/brandnew-logo-bigdata-138.png',
                descForIndex: [],
                descForProd: ['以旗下产品海量数据为基础，覆盖200多个国家地区、6亿用户，提供安卓App各项指标，洞察用户画像。', '旗下拥有移动互联网研究机构猎豹全球智库。定期发布移动互联网研究、咨询报告。'],
                star: 0,
                tags: [],
                link: 'http://cn.data.cmcm.com/',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      business: {
        categoryName: '商业',
        categoryLink: 'Product_Business',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          business: {/* When no sub category, using the same name & hash as its father!*/
            name: '商业',
            hash: 'Product_Business',
            anch: 'category-of-business',
            desc: '',
            data: [
              {
                priority: '',
                name: '猎豹智趣营销',
                slog: '',
                icon: '/dist/images/brandnew-logo-zhiqu.png',
                descForIndex: [],
                descForProd: ['全新升级的商业品牌，基于全球近6亿月活用户，涵盖移动及PC端业务，凭借大数据及人工智能等先进技术，为广告主提供更加精准、智能、个性化的服务。', '让广告不再打扰、而是打动用户；让智趣未来，迎面而来。'],
                star: 0,
                tags: [],
                link: 'http://ads.cmcm.com/',
                target: '_blank',
                pict: ''
              },
            ] 
          }
        }
      },
      hardware: {
        categoryName: '硬件',
        categoryLink: 'Product_Hardware',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          hardware: {/* When no sub category, using the same name & hash as its father!*/
            name: '硬件',
            hash: 'Product_Hardware',
            anch: 'category-of-hardware',
            desc: '',
            data: [
              {
                priority: '',
                name: '豹米净化器',
                slog: '',
                icon: '/dist/images/brandnew-logo-baomi-200.png',
                descForIndex: [],
                descForProd: ['猎豹移动旗下硬件产品，针对不同消费人群做出适合各使用场景的净化器。', '选材极其苛刻，其最高滤网等级达到H14级；智能的一键操作以及激光探头配合数显，令其在业内独树一帜。并在硬件和智能交互上领跑行业。'],
                star: 0,
                tags: [],
                link: 'https://www.baomi.com/',
                target: '_blank',
                pict: ''
              }
            ] 
          }
        }
      }
    } // category
  },
  'en-us': {
    page: 'any',
    name: 'Products',
    link: '/cm/en-us/product/',
    category: {
      mobileApps: {
        categoryName: 'Mobile Apps',
        categoryLink: 'Product_MobileApps',
        categoryData: {
          onMenu: true, /* To show sub categories on menu, make it true. */
          unfold: true, /* To unfold sub categories by default, make it true. */
          tool: {
            name: 'Utility',
            hash: 'Product_Tools',
            anch: 'category-of-tool',
            desc: ['Cheetah Mobile\'s diversified utility matrix includes some of the world\'s leading security,', 'junk cleaning, photo editing, personalization and safe browser software'],
            data: [
              {
                priority: '100',
                name: 'Clean Master',
                slog: '',
                icon: '/dist/images/brandnew-logo-clean-master-103.png',
                descForIndex: ['Clean Master is the #1 Android phone optimization software in the world. Its industry leading "cloud + AI" deep cleaning system removes 30% more junk than other apps. Named best antivirus software for Android by independent IT-security institute AV-TEST multiple times. Top ranked tool app on Google Play in 100 countries.'],
                descForProd: ['Clean Master is the #1 Android phone optimization software in the world. Its industry leading "cloud + AI" deep cleaning system removes 30% more junk than other apps. Named best antivirus software for Android by independent IT-security institute AV-TEST multiple times. Top ranked tool app on Google Play in 100 countries.'],
                star: 4.7,
                tags: ['全球下载量近30亿', '国内应用市场评分同类最高'],
                link: 'http://www.cmcm.com/en-us/clean-master/',
                target: '_blank',
                pict: '/dist/images/brandnew-tool-cm.png'
              },
            
              {
                priority: '50',
                name: 'Security Master',
                slog: '',
                icon: '/dist/images/brandnew-logo-security-103.png',
                descForIndex: ['Security Master is the world’s leading mobile security app. It offers comprehensive protection, including intelligent threat detection, the world\'s highest rated antivirus system by AV-TEST, app lock and intruder selfies.'],
                descForProd: ['Security Master is the world’s leading mobile security app. It offers comprehensive protection, including intelligent threat detection, the world\'s highest rated antivirus system by AV-TEST, app lock and intruder selfies. Over 500 million downloads on Google Play. #1 on the security app rankings in 30 countries, with an average score of 4.7 out of 5.'],
                star: 0,
                tags: ['Google Play全球下载超过5亿', 'AV TEST评测最佳病毒引擎'],
                link: 'http://www.cmcm.com/en-us/cm-security/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '50',
                name: 'CM Launcher',
                slog: '',
                icon: '/dist/images/brandnew-logo-launcher-103.png',
                descForIndex: ['The world\'s most popular smartphone personalization app for Android, CM Launcher offers a large number of themes, in-depth customization options and smart lock-screen functionality, providing comprehensive protection for privacy and safety.'],
                descForProd: ['The world\'s most popular smartphone personalization app for Android, CM Launcher offers a large number of themes, in-depth customization options and smart lock-screen functionality, providing comprehensive protection for privacy and safety. Covering more than 200 countries and regions, it has been ranked first in the personalization category of the Google Play store in 94 countries with nearly 200 million total downloads'],
                star: 0,
                tags: ['94个国家排名第一'],
                link: 'http://www.cmcm.com/en-us/cm-launcher/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '33',
                name: 'Cheetah Keyboard',
                slog: '',
                icon: '/dist/images/brandnew-logo-kb-103.png',
                descForIndex: ['Cheetah Keyboard is the industry\'s first third-party input app to incorporate deep learning technology, with features such as smart prediction, automatic correction and user modeling. Cheetah Keyboard integrates NLP technology and machine learning algorithms in order to provide stronger predictions and greater accuracy'],
                descForProd: ['Cheetah Keyboard is the industry\'s first third-party input app to incorporate deep learning technology, with features such as smart prediction, automatic correction and user modeling. Cheetah Keyboard integrates NLP technology and machine learning algorithms in order to provide stronger predictions and greater accuracy', 'Covers more than 140 countries and regions. Highest rated third-party input method on Google Play.'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=panda.keyboard.emoji.theme&hl=en',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '33',
                name: 'PhotoGrid',
                slog: '',
                icon: '/dist/images/brandnew-logo-photogrid-103.png',
                descForIndex: ['PhotoGrid is a must-have photo editor and picture & video collage maker. Its huge selection of editing tools, facial recognition technology, twinkle functions and machine learning capabilities allow users to elevate their photos with dynamic special effects'],
                descForProd: ['PhotoGrid is a must-have photo editor and picture & video collage maker. Its huge selection of editing tools, facial recognition technology, twinkle functions and machine learning capabilities allow users to elevate their photos with dynamic special effects', 'Downloaded a combined total of 550 million times on Android and iOS. Named one of Google Play’s Best Apps of 2016.'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/en-us/photo-grid/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '33',
                name: 'CM Browser',
                slog: '',
                icon: '/dist/images/brandnew-logo-browser-103.png',
                descForIndex: ['CM Browser represents a new generation of mobile phone browser that\'s lighter, faster and more secure.'],
                descForProd: ['CM Browser represents a new generation of mobile phone browser that\'s lighter, faster and more secure.', '#1 on the App Store tool rankings in 8 countries. Nearly 100 million downloads on Google Play.'],
                star: 0,
                tags: ['', ''],
                link: 'http://m.liebao.cn/?f=cmcn',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '',
                name: 'Battery Doctor',
                slog: '',
                icon: '/dist/images/brandnew-logo-bd-103.png',
                descForIndex: [],
                descForProd: ['The world\'s most professional battery maintenance and power management software, Battery Doctor helps users extend battery life with smart power usage. Covers more than 200 countries and regions. #1 on the Google Play tool app rankings in 26 countries. #1 on the App Store tool rankings in 133 countries. Over 100 million downloads on Google Play.'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/en-us/battery-doctor/',
                target: '_blank',
                pict: ''
              },
            ]
          },
          socl: {
            name: 'Social',
            hash: 'Product_Social',
            anch: 'category-of-social',
            desc: ['Crossing cultural barriers, connecting global users', 'leading the global live broadcasting market'],
            data: [
              {
                priority: '',
                name: 'Live.me',
                slog: '',
                icon: '/dist/images/brandnew-logo-liveme-103.png',
                descForIndex: ['After launching in April 2016, Cheetah\'s live broadcasting social app Live.me quickly rose to the top of the app rankings. It has attracted a large number of celebrities and influencers, and has become one of the most popular social apps among young U.S. users today.'],
                descForProd: ['After launching in April 2016, Cheetah\'s live broadcasting social app Live.me quickly rose to the top of the app rankings. It has attracted a large number of celebrities and influencers, and has become one of the most popular social apps among young U.S. users today.', 'Available in 7 languages across 85 countries and regions. Ranked #1 on Google Play’s best-selling US social app rankings.'],
                star: 0,
                tags: ['85个市场|覆盖多元文化', '7种语言|融合本地需求', '42个国家|登顶社交畅销榜'],
                link: 'http://www.liveme.com/',
                target: '_blank',
                pict: ''
              },
            ]
          },
          game: {
            name: 'Games',
            hash: 'Product_Games',
            anch: 'category-of-game',
            desc: ['With combined MAUs surpassing 1 billion globally', 'Cheetah Games is one of the largest casual game developers in the world'],
            data: [          
              {
                priority: '50-100',
                name: 'Piano Tiles 2',
                slog: '',
                icon: '/dist/images/brandnew-logo-pt2-103.png',
                descForIndex: ['Piano Tiles 2 is a music-based casual game and global phenomenon downloaded nearly 900 million times. With newly launched swipe-tile gameplay and racing modes, Piano Tiles brings you the perfect dual audio-visual experience'],
                descForProd: ['Piano Tiles 2 is a music-based casual game and global phenomenon downloaded nearly 900 million times. With newly launched swipe-tile gameplay and racing modes, Piano Tiles brings you the perfect dual audio-visual experience', 'Ranked in the Top 5 of the iOS free download game rankings in China. #1 on the free download game rankings in 158 countries. Most downloaded music-based casual game on App Store and Google Play in 2016.'],
                star: 0,
                tags: [],
                link: 'http://www.cmcm.com/en-us/piano-tiles/',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '50-50',
                name: 'Rolling Sky',
                slog: '',
                icon: '/dist/images/brandnew-logo-rs-103.png',
                descForIndex: ['Rolling Sky is a fast-paced casual game that challenges the limits of your speed and reaction time with stunning 3D visuals.'],
                descForProd: ['Rolling Sky is a fast-paced casual game that challenges the limits of your speed and reaction time with stunning 3D visuals.', 'Over 240 million total downloads. Top 10 in game downloads in 141 countries. Top 10 in overall downloads in 65 countries. Top 5 on the App Store\'s free download game rankings in China. One of Google Play\'s Best Games of the Year in 2016.'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=com.turbochilli.rollingsky',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '25-50',
                name: 'Dancing Line',
                slog: '',
                icon: '/dist/images/brandnew-game-bg-dl-icon.png',
                descForIndex: ['Dancing Line is a rhythm-based casual game featuring original music to help you break through each level while exploring the infinite unknown'],
                descForProd: ['Dancing Line is a rhythm-based casual game featuring original music to help you break through each level while exploring the infinite unknown', 'Rated 4.8 out of 5 in both the App Store and Google Play. Rated 9.7 out of 10 by top gaming media and mobile distribution platform Tap Tap. Top 5 on the App Store\'s free download game rankings in China. #1 on the music-based game rankings in 115 countries, including the U.S.'],
                star: 0,
                tags: [],
                link: 'http://board.cmcm.com/dl/transfer.html',
                target: '_blank',
                pict: ''
              },
            
              {
                priority: '25-50',
                name: 'Arrow.io',
                slog: '',
                icon: '/dist/images/brandnew-game-bg-gjs-icon.png',
                descForIndex: ['Arrow.io is an exciting online multiplayer game with a rich line of characters to choose from as you conquer the world with your bow and arrows.'],
                descForProd: ['Arrow.io is an exciting online multiplayer game with a rich line of characters to choose from as you conquer the world with your bow and arrows', 'Ranked in the Top 5 on the App Store\'s action game download rankings in 18 countries. Named the best action game in Taiwan and Poland in January 2017. Named the #2 action game in China in June 2017.'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=com.cmcm.arrowio',
                target: '_blank',
                pict: ''
              },

              {
                priority: '',
                name: 'Tap Tap Fish',
                slog: '',
                icon: '/dist/images/brandnew-logo-shszg-103.png',
                descForIndex: [],
                descForProd: ['Tap Tap fish is a relaxing yet addictive casual game in which players build an aquarium ecosystem and collect thousands of fish. Cheetah Mobile become the exclusive publisher of Tap Tap Fish in October 2016.', 'Named as the Best Independent Game of 2016 on both the App Store and Google Play.'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=com.idleif.abyssrium',
                target: '_blank',
                pict: ''
              },

              {
                priority: '',
                name: 'Tap Tap Dash',
                slog: '',
                icon: '/dist/images/brandnew-logo-ddcc-103.png',
                descForIndex: [],
                descForProd: ['Tap Tap dash is a fast-paced casual game featuring a simple style and easy gameplay that trains users\' reaction speed and reflexes.', 'Ranked No. 1 on the Google Play game download ranking in numerous countries. Recommended by Google Play editors.'],
                star: 0,
                tags: [],
                link: 'https://play.google.com/store/apps/details?id=com.secondarm.taptapdash',
                target: '_blank',
                pict: ''
              },

            ]
          },
          news: {
            name: 'News Republic',
            hash: 'Product_News',
            anch: 'category-of-news',
            desc: ['Precisely recommending news content', 'with artificial intelligence technology'],
            data: [          
              {
                priority: '',
                name: 'News Republic',
                slog: '',
                icon: '/dist/images/brandnew-logo-nr-103.png',
                descForIndex: ['News Republic is a leading news aggregation app featuring personalized recommendation technology powered by artificial intelligence. Covers 43 countries, with nearly 3,000 high-quality global media copyrights. Previously #1 on Google Play\'s news & magazine application download rankings in 60 countries.'],
                descForProd: ['News Republic is a leading news aggregation app featuring personalized recommendation technology powered by artificial intelligence. Covers 43 countries, with nearly 3,000 high-quality global media copyrights. Previously #1 on Google Play\'s news & magazine application download rankings in 60 countries.'],
                star: 0,
                tags: [],
                link: 'http://www.news-republic.com/',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      pc: {
        categoryName: 'PC Products',
        categoryLink: 'Product_forPC',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          pc: {/* When no sub category, using the same name & hash as its father!*/
            name: 'PC端',
            hash: 'Product_forPC',
            anch: 'category-of-pc',
            desc: '',
            data: [
              {
                priority: '',
                name: 'CM Browser',
                slog: '',
                icon: '/dist/images/brandnew-logo-browser-103.png',
                descForIndex: [],
                descForProd: ['CM Browser is the first dual-core security browser in China. It features more than 100 improvements based on Chromium architecture, including 30% higher activation speed, HTML5 compatibility, and artistic visual solutions. With the first ever BIPS cloud security system, CM Browser intercepts malicious websites and protects users from online security threats.'],
                star: 0,
                tags: [],
                link: 'https://www.liebao.cn',
                target: '_blank',
                pict: ''
              },
              {
                priority: '',
                name: 'Duba Anti-Virus (Only available in China)',
                slog: '',
                icon: '/dist/images/brandnew-logo-duba-103.png',
                descForIndex: [],
                descForProd: ['Duba Anti-Virus is security software that combines both antivirus and system management capabilities. With 18 years of development, it has been certified 20 times by VB100 (more than any other security software in China), as well as by AV-Comparatives and AV-TEST multiple years in a row. Powered by Cheetah Mobile\'s custom blue-core engine, Duba Anti-Virus seamlessly integrates with cloud security while using micro-feature recognition technology to kill unknown trojans.'],
                star: 0,
                tags: [],
                link: 'http://www.duba.net',
                target: '_blank',
                pict: ''
              },
              {
                priority: '',
                name: 'Driver Genius',
                slog: '',
                icon: '/dist/images/brandnew-logo-qdjl-103.png',
                descForIndex: [],
                descForProd: ['Acquired in 2012, DriverGenius is China\'s #1 domestically-developed device driver software. Based on more than 10 years of data, DriverGenius boasts a device recognition rate of 98.3%, including a network adapter card recognition rate of 99.9%. As an essential piece device installation software, DriverGenius has resolved device driver issues and system malfunctions for more than 100 million users.'],
                star: 0,
                tags: [],
                link: 'http://www.drivergenius.com',
                target: '_blank',
                pict: ''
              },
              {
                priority: '',
                name: 'Clean Master for PC',
                slog: '',
                icon: '/dist/images/brandnew-logo-clean-master-103.png',
                descForIndex: [],
                descForProd: ['Clean Master for PC takes the tried-and-true mobile cleaning utility software and brings it to the desktop so that Windows users can clean their system of junk files and improve the overall performance of their PCs. The Standard version, which is absolutely free, also offers privacy protection so that users can lock out intruders and easily remove browsing records. A low-cost Premium version is available as well, giving users peace of mind with the ability to recover accidentally deleted files or re-formatted hard drives and memory cards.'],
                star: 0,
                tags: [],
                link: '',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      ai: {
        categoryName: 'AI Business',
        categoryLink: 'Product_AI',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          ai: {/* When no sub category, using the same name & hash as its father!*/
            name: 'Artificial Intelligence',
            hash: 'Product_AI',
            anch: 'category-of-ai',
            desc: '',
            data: [
              {
                priority: '',
                name: 'Artificial Intelligence',
                slog: '',
                icon: '/dist/images/brandnew-logo-orion-200.png',
                descForIndex: [],
                descForProd: ['Cheetah Mobile has built an AI technology platform to power its full line of products, upgrade its utility product matrix and contribute to the growth of its content apps.', 'Cheetah Mobile\'s subsidiary OrionStar is a leader in the industry with cutting-edge technologies such as voice IO, facial recognition and visual navigation.', 'OrionStar won first place at the 2017 MS-Celeb-1M (LFW) challenge, a world renowned facial recognition competition.'],
                star: 0,
                tags: [],
                link: 'http://ainirobot.com/',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      bigData: {
        categoryName: 'Big Data Products',
        categoryLink: 'Product_bigData',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          bigData: {
            name: 'Big Data Products',
            hash: 'Product_bigData',
            anch: 'category-of-bigdata',
            desc: '',
            data: [
              {
                priority: '',
                name: 'Cheetah Data',
                slog: '',
                icon: '/dist/images/brandnew-logo-bigdata-138.png',
                descForIndex: [],
                descForProd: ['Cheetah Data is a global mobile big data analysis platform. Based on the huge amount of data accumulated through Cheetah Mobile\'s product matrix, Cheetah Data provides indices including active penetration rate, growth rate, retention rate, user intelligence and so on. It surveys every change in the Android market to help app developers, investors and marketers make decisions. Cheetah Data owns mobile internet-focused research institution Cheetah Lab.', 'Cheetah Data also owns and operates Cheetah Lab, its mobile internet-focused research institute, which releases global internet research reports and analysis on a regular basis.'],
                star: 0,
                tags: [],
                link: 'http://cn.data.cmcm.com/',
                target: '_blank',
                pict: ''
              }
            ]
          }
        }
      },
      business: {
        categoryName: 'Commercial Products',
        categoryLink: 'Product_Business',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          business: {/* When no sub category, using the same name & hash as its father!*/
            name: 'Commercial Products',
            hash: 'Product_Business',
            anch: 'category-of-business',
            desc: '',
            data: [
              {
                priority: '',
                name: 'Cheetah Ads',
                slog: '',
                icon: '/dist/images/brandnew-logo-zhiqu.png',
                descForIndex: [],
                descForProd: ['Cheetah Ads is Cheetah Mobile\'s self-operated ad platform offering a wide range of ad formats, from high-performing display and native ads, to beautiful, full-screen vertical video. Cheetah Ads offers diverse, global reach with over 600 million users from 200+ countries and regions across Cheetah Mobile\'s owned and operated inventory, including Clean Master, CM Security, Cheetah Keyboard, Live.me and News Republic. Enhanced by Cheetah Mobile\'s artificial intelligence and big data capabilities, Cheetah Ads helps brands reach the right audience, at the right time, in the right format throughout the entire purchase cycle.'],
                star: 0,
                tags: [],
                link: 'http://ads.cmcm.com/',
                target: '_blank',
                pict: ''
              },
            ] 
          }
        }
      },
      hardware: {
        categoryName: 'Hardware',
        categoryLink: 'Product_Hardware',
        categoryData: {
          onMenu: false, /* NOT to show sub categories on menu, make it false. */
          hardware: {/* When no sub category, using the same name & hash as its father!*/
            name: '硬件',
            hash: 'Product_Hardware',
            anch: 'category-of-hardware',
            desc: '',
            data: [
              {
                priority: '',
                name: '豹米净化器',
                slog: '',
                icon: '/dist/images/brandnew-logo-baomi-200.png',
                descForIndex: [],
                descForProd: ['猎豹移动旗下硬件产品，针对不同消费人群做出适合各使用场景的净化器。', '选材极其苛刻，其最高滤网等级达到H14级；智能的一键操作以及激光探头配合数显，令其在业内独树一帜。并在硬件和智能交互上领跑行业。'],
                star: 0,
                tags: [],
                link: 'https://www.baomi.com/',
                target: '_blank',
                pict: ''
              }
            ] 
          }
        }
      }
    } // category
  },
  'es-es': {},
  'fr-fr': {},
  'pt-pt': {},
  'ru-ru': {},
  'ja-jp': {},
  'ko-kr': {},
  'zh-tw': {},
}
