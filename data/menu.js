var PublicNav = {
  'zh-cn': {
    page: 'all',
    name: '猎豹移动',
    data: [
      {
        displayName: '关于公司',
        target: '_self',
        linkTo: '/zh-cn/company/',
        active: 'company',
        gaTag: 'brandnew.nav.company',
        subNavs: [
          {subNavName: '使命与愿景',  subNavLink: 'Company_Vision'  },
          {subNavName: '公司简介',    subNavLink: 'Company_Intro'   },
          {subNavName: '发展历程',    subNavLink: 'Company_History' },
          {subNavName: '管理团队',    subNavLink: 'Company_Leaders' },
          {subNavName: '企业文化',    subNavLink: 'Company_Culture' },
          {subNavName: '员工福利',    subNavLink: 'Company_Welfare' }
        ]
      },
      {
        displayName: '产品服务',
        target: '_self',
        linkTo: '/zh-cn/product/',
        active: 'product',
        gaTag: 'brandnew.nav.product',
        subNavs: [
          {subNavName: '移动端',      subNavLink: 'Product_MobileApps'},
          {subNavName: 'PC端',        subNavLink: 'Product_forPC'     },
          {subNavName: '人工智能',    subNavLink: 'Product_AI'        },
          {subNavName: '大数据',      subNavLink: 'Product_bigData'   },
          {subNavName: '商业',        subNavLink: 'Product_Business'  },
          {subNavName: '硬件',        subNavLink: 'Product_Hardware'  }
        ]
      },
      {
        displayName: '投资者关系',
        target: '_blank',
        linkTo: 'http://ir.cmcm.com/',
        active: '',
        gaTag: 'brandnew.nav.ir',
        subNavs: [
          {
            subNavName: '季度业绩',
            subNavLink: 'http://ir.cmcm.com/index.php?s=123',
            outlink: true
          },
          {
            subNavName: '投资者新闻',
            subNavLink: 'http://ir.cmcm.com/index.php?s=43',
            outlink: true
          }
        ]
      },
      {
        displayName: '招 聘',
        target: '_blank',
        linkTo: 'http://hr.cmcm.com/',
        active: '',
        gaTag: 'brandnew.nav.hr',
        subNavs: [
          {
            subNavName: '社会招聘',
            subNavLink: 'http://hr.cmcm.com/social',
            outlink: true
          },
          {
            subNavName: '校园招聘',
            subNavLink: 'http://hr.cmcm.com/campus',
            outlink: true
          }
        ]
      },
      {
        displayName: '联 系',
        target: '_self',
        linkTo: '/zh-cn/contact/',
        active: 'contact',
        gaTag: 'brandnew.nav.contact',
        subNavs: [
          {subNavName: '媒体联系',    subNavLink: 'Contact_Media'       },
          {subNavName: '社交媒体',    subNavLink: 'Contact_Social'      },
          {subNavName: '业务联系',    subNavLink: 'Contact_Business'    },
          {subNavName: '全球办公室',  subNavLink: 'Contact_GlobalOffice'},
          {subNavName: '客户联系',    subNavLink: 'Contact_Customer'    }
        ]
      }
    ]
  },
  'en-us': {
    page: 'all',
    name: 'Cheetah Mobile',
    data: [
      {
        displayName: 'About Us',
        target: '_self',
        linkTo: '/en-us/company/',
        active: 'company',
        gaTag: 'brandnew.nav.company',
        subNavs: [
          {subNavName: 'Mission',     subNavLink: 'Company_Vision'  },
          {subNavName: 'Company',     subNavLink: 'Company_Intro'   },
          {subNavName: 'History',     subNavLink: 'Company_History' },
          {subNavName: 'Executives',  subNavLink: 'Company_Leaders' },
          {subNavName: 'Culture',     subNavLink: 'Company_Culture' },
          {subNavName: 'Benefits',    subNavLink: 'Company_Welfare' }
        ]
      },
      {
        displayName: 'Products',
        target: '_self',
        linkTo: '/en-us/product/',
        active: 'product',
        gaTag: 'brandnew.nav.product',
        subNavs: [
          {subNavName: 'Mobile',      subNavLink: 'Product_MobileApps'},
          {subNavName: 'PC',          subNavLink: 'Product_forPC'     },
          {subNavName: 'AI',          subNavLink: 'Product_AI'        },
          {subNavName: 'Big Data',    subNavLink: 'Product_bigData'   },
          {subNavName: 'Commercial',  subNavLink: 'Product_Business'  }
        ]
      },
      {
        displayName: 'Investors',
        target: '_blank',
        linkTo: 'http://ir.cmcm.com/',
        active: '',
        gaTag: 'brandnew.nav.ir',
        subNavs: [
          {
            subNavName: 'Quarter performance',
            subNavLink: 'http://ir.cmcm.com/index.php?s=123',
            outlink: true
          },
          {
            subNavName: 'Investors news',
            subNavLink: 'http://ir.cmcm.com/index.php?s=43',
            outlink: true
          }
        ]
      },
      {
        displayName: 'Careers',
        target: '_blank',
        linkTo: 'http://hr.cmcm.com/',
        active: '',
        gaTag: 'brandnew.nav.hr',
        subNavs: [
          {
            subNavName: 'Social recruitment',
            subNavLink: 'http://hr.cmcm.com/social',
            outlink: true
          },
          {
            subNavName: 'Campus recruitment',
            subNavLink: 'http://hr.cmcm.com/campus',
            outlink: true
          }
        ]
      },
      {
        displayName: 'Contact Us',
        target: '_self',
        linkTo: '/en-us/contact/',
        active: 'contact',
        gaTag: 'brandnew.nav.contact',
        subNavs: [
          {subNavName: 'Media',           subNavLink: 'Contact_Media'       },
          {subNavName: 'Social Media',    subNavLink: 'Contact_Social'      },
          {subNavName: 'Business',        subNavLink: 'Contact_Business'    },
          {subNavName: 'Offices',         subNavLink: 'Contact_GlobalOffice'},
          {subNavName: 'Customer Support',subNavLink: 'Contact_Customer'    }
        ]
      }
    ]
  },
  'es-es': {},
  'fr-fr': {},
  'pt-pt': {},
  'ru-ru': {},
  'ja-jp': {},
  'ko-kr': {},
  'zh-tw': {}
}
