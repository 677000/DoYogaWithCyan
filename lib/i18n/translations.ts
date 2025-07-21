export type Locale = "zh" | "en"

export const translations = {
  zh: {
    // 导航
    nav: {
      home: "首页",
      about: "关于我们", // todo
      news: "最新消息", //
      course: "课程介绍", // 瑜伽、垫上普拉提、私人课程（私教、精品小团课）、呼吸、冥想。。。10min/15min/30min/45min/60min）、
      scheduler: "课程表", // 线上课-课程表、线下课-课程表、
      booking: "预约体验",
      showcase: "成为会员",
      contact: "联系我们",
    },
    // 首页
    home: {
      hero: {
        title: "青松瑜伽STUDIO",
        description: "透过瑜伽，带你体验最美好的当下 & 享受与身体对话的快乐",
        cta1: "联系我",
        cta2: "了解更多",
      },
      features: {
        title: "DoYogaWithSasa",
        subtitle: "我们的课程特色",
        description: "发自内心地热爱，承载对生命和健康的热情、对自然的敬畏、结合瑜伽、中医、养生，致力于帮助您在健康生活中找到平衡和快乐。",
        items: [
          {
            title: "呼吸模式重建",
            description: "我们的设计团队将为您创建独特而专业的设计方案。",
          },
          {
            title: "体式练习和脊柱排列",
            description: "关键问题48小时远程诊断，解决您的任何问题。",
          },
          {
            title: "冥想疗愈",
            description: "数据合规性保障，提供证书，具备技术专利。",
          },
        ],
      },
      individual: {
        title: "Cyan的数智服务",
        subtitle: "Cyan的数智工具能做什么",
        description: "智能的数字化工具，帮助进行分析和复杂的决策。建设中。。。",
        items: [
          {
            title: "市场分析",
            description: "建设中。。。",
          },
          {
            title: "公司分析",
            description: "建设中。。。",
          },
          {
            title: "产品分析",
            description: "建设中。。。",
          },
          {
            title: "预算预估计算器",
            description: "免费试用。请放心，不会涉及任何隐私数据的收集和滥用。如有需要，请联系Cyan。建设中。。。"
          },
          {
            title: "寻找公司关键决策人",
            description: "根据公司的网址，寻找公司关键决策人。同时提供公司产品和服务，公司规模，发展历程，合作伙伴等数据。建设中。。。"
          },
          {
            title: "AI tools",
            description: "建设中。。。"
          }
        ],
      },
      cta: {
        title: "准备好开始了吗？",
        description: "联系我们Blackboxcv，开始您的项目。我们期待与您合作！",
        button: "立即联系",
      },
    },
    // 关于我
    about: {
      hero: {
        title: "关于我们",
        subtitle: "将瑜伽带去千万人的生活中，让瑜伽成为一种生活方式",
        description: "让瑜伽走进你的生活，让你走进你自己，让你与人与自然有更多链接，带你体验瑜伽的魅力。",
        identity: {
          sale: '你的线上大健康生活顾问',
          engineer: '你的线下传统瑜伽老师 ',
          hobby: '你的亚健康和压力及专注力等问题的疏导者',
        },
        cta1: "联系我们",
        cta2: "了解更多",
      },
      features: {
        title: "特色服务",
        subtitle: "我能为您做什么",
        description: "工业测量光学设备供应商 & 数字化服务顾问",
        items: [
          {
            title: "转型故事",
            description: "详细讲述他的职业转型故事，突出技术背景如何助力现在的外贸工作。",
          },
          {
            title: "我的价值观",
            description: "比如对精准数据的重视，增强信任感。",
          },
          {
            title: "我的经验和成就",
            description: "分时间线展示项目经验和成就，比如帮助客户降低成本、缩短周期等。",
          },
        ],
      },
      cta: {
        title: "准备好开始了吗？",
        description: "联系我们，开始您的项目。我们期待与您合作！",
        button: "立即联系",
      },
    },
    // About Blackboxcv
    blackboxcv: {
      hero: {
        title: "关于非白",
        subtitle: "全球领先的3D扫描解决方案提供商。",
        description1: "非白科技（Blackboxcv）成立于 2015 年，坐落于美丽的城市杭州，紧邻阿里巴巴集团。该公司是全球领先的 3D 机器视觉系统开发商，具有从光学到底层算法的全栈独立开发能力。同时，它是一家国家级高新技术企业，拥有 120 多项专利和软件著作权，其中包括 20 多项发明专利。我们拥有来自微软亚洲研究院和浙江大学 CAD 团队的优秀技术人员。我们是目前中国唯一一家具有全栈独立研发能力的制造商。",
        description2: "我们专注于 3D 扫描仪和 3D 系统的研发、生产和销售。我们的产品广泛应用于工业制造领域，如汽车、航空航天、交通、机械制造、金属制造、军工制造、教育科研和医疗保健等数字应用行业。我们致力于为客户提供满足他们需求的 3D 扫描仪。",
        cta1: "Contact Us",
        cta2: "Learn More",
      },
      features: {
        title: "Featured Services",
        subtitle: "What We Can Do For You",
        description: "We provide comprehensive services to help you achieve your business goals.",
        items: [
          {
            title: "Professional Design",
            description: "Our design team will create unique and professional design solutions for you.",
          },
          {
            title: "Technical Support",
            description: "We provide 24/7 technical support to solve any of your problems.",
          },
          {
            title: "Custom Solutions",
            description: "We provide tailored solutions based on your specific needs.",
          },
        ],
      },
      cta: {
        title: "Ready to Get Started?",
        description: "Contact us to start your project. We look forward to working with you!",
        button: "Contact Now",
      },
    },
    // 新闻页面
    news: {
      title: "最新消息",
      description: "了解我们的最新动态、行业新闻和重要公告。",
      noPosts: 'empty...',
      readMore: "阅读更多",
      categories: "分类",
      recentPosts: "最近文章",
      searchPlaceholder: "搜索新闻...",
    },
    // 课程介绍
    course: {
      title: "课程介绍",
      description: "探索我们提供的全方位产品和服务解决方案。",
      viewDetails: "查看详情",
      categories: {
        all: "全部", // 可按品类检索，也可按时长检索10min/15min/30min/45min/60min）、
        yoga: "瑜伽",
        pilates: "垫上普拉提",
        breath: "呼吸",
        meditation: "冥想",
        individual: "私人课程", // 私教、精品小团课）
      },
    },
    scheduler: {
      title: "课程表",
      description: "探索Cyan提供的技术赋能包，实现数据驱动选型决策。",
      categories: {
        online: "线上课表",
        offline: "线下课表",
        articles: "产品分析",
        // 可以发布技术文章、行业分析、资源等，体现专业知识和行业洞察。增强专业形象。
        // guides: "技术文章/行业分析",
        resources: "预算粗估计算器",
      },
      searchPlaceholder: "集成AI...",
      viewResource: "查看资源",
    },
    booking: {
      title: "预约体验",
      description: "获取教程、指南和资源，帮助您提升技能和知识。",
      categories: {
        tutorials: "培训课程",
        technology: "技术文章",
        articles: "行业分析",
        resources: "资源平台",
      },
      searchPlaceholder: "搜索学习资源...",
      viewResource: "查看资源",
    },
    // 成果展示
    showcase: {
      title: "成果展示，建设中。。。",
      description: "浏览我完成的数字化项目和数字化驱动产品。",
      viewCase: "查看案例",
      categories: {
        all: "全部",
        webDevelopment: "网站开发",
        mobileApps: "移动应用",
        design: "设计项目",
        consulting: "咨询项目",
      },
      clientSays: "客户评价",
    },
    // 联系页面
    contact: {
      title: "联系我",
      // 联系方式页面除了基本表单，可以加入即时聊天工具，或预约系统，方便客户直接联系。同时展示合作的认证、合作伙伴标志，增强可信度
      description: "请填写表单，信息会通过邮件形式发送给Cyan，Cyan将在每天的固定时间读取邮件并尽快回复您。",
      info: {
        title: "联系方式",
        phone: "+86 187 9798 3328",
        blackboxEmail: "cyan@blackboxcv.com",
        individualEmail: "liaosarong@gmail.com",
        WeChat: "Withadeafear",
        LinkedIn: {
          href: "https://www.linkedin.com/in/cyan-liao-9373b2217/"
        },
        WhatsApp: {
          href: "https://api.whatsapp.com/send?phone=+8618797983328&text=Hello"
        },
        address: "浙江省杭州市余杭区五常街道，靠近阿里巴巴总部",
      },
      form: {
        title: "发送消息",
        description: "填写下面的表单与我们取得联系。",
        name: "姓名",
        email: "邮箱",
        message: "消息",
        submit: "发送消息",
        namePlaceholder: "请输入您的姓名",
        emailPlaceholder: "请输入您的邮箱",
        messagePlaceholder: "请输入您的消息",
      },
    },
    // 页脚
    footer: {
      copyright: "保留所有权利",
      privacyPolicy: "隐私政策",
      termsOfService: "服务条款",
    },
    // 通用
    common: {
      loading: "加载中...",
      error: "出错了",
      retry: "重试",
      search: "搜索",
      filter: "筛选",
      sort: "排序",
      language: "语言",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About US",
      news: "News",
      course: "Course Introduction",
      scheduler: "Class Schedule",
      booking: "Book an experience",
      showcase: "Be a member",
      contact: "Contact US",
    },
    // Home page
    home: {
      hero: {
        title: "Welcome to Cyan's 3D Digital Space",
        description: "We provide professional services and solutions to meet your various needs.",
        cta1: "Contact Us",
        cta2: "Learn More",
      },
      features: {
        title: "Services form Blackboxcv",
        subtitle: "What We Can Do For You",
        description: "Powerful metrology technology products help solve complex measurement challenges within the industry.",
        items: [
          {
            title: "Scenario-based solutions to meet your various needs",
            description: "Our design team will create unique and professional design solutions for you.",
          },
          {
            title: "Full-cycle technical response",
            description: "Critical issues can be remotely diagnosed within 48 hours to solve any of your problems. ",
          },
          {
            title: "Compliance Assurance",
            description: "Ensure data compliance, provide certificates, and possess technical patents. ",
          },
        ],
      },
      individual: {
        title: "Services from Cyan",
        subtitle: "What can Cyan's digital intelligence tools do?",
        description: "Intelligent digital tools that help with analysis and complex decision-making. Under construction... ",
        items: [
          {
            title: "Market analysis",
            description: "Developing...",
          },
          {
            title: "Company Analysis",
            description: "Developing...",
          },
          {
            title: "Product Analysis",
            description: "Developing...",
          },
          {
            title: "Budget Estimation Calculator",
            description: "Free trial. Please rest assured that there will be no collection or abuse of any privacy data. If you have any needs, please contact Cyan. Developing..."
          },
          {
            title: "Looking for key persons",
            description: "Developing..."
          },
          {
            title: "AI tools",
            description: "Developing..."
          },
        ],
      },
      cta: {
        title: "Ready to Get Started?",
        description: "Contact us to start your project. We look forward to working with you!",
        button: "Contact Now",
      },
    },
    // About page
    about: {
      hero: {
        title: "About me",
        subtitle: "Providing 3d scanners and services for manufacturing parteners to meet your various needs.",
        // description: "I am a programmer with a computer science background and a 3D scanning solutions consultant for Blackboxcv. In fact, sales is not my specialty or even my field, but I believe that the only value of sales is to help customers solve their deep practical needs and put the products that best match their needs in front of customers for them to choose. I was born and grew up in a small southern Chinese city. I love challenges and learning new things, especially languages and their associated cultures. I enjoy collaborating with people from diverse backgrounds and engage in activities like traveling, reading, yoga, and other sports. During college, I studied Information Management and Information Systems, covering both management and computer science courses. I interned at a software firm, handling coding iterations. After graduating in 2019, I joined a manufacturing company, leading its digitalization projects, including factory data dashboards, the official website, mini - program - based sales query systems, and permission management systems. In 2020, seeking greater challenges, I prepared to join Alibaba. I spent a year self - studying technology in my spare time. In 2021, I became a Web front - end engineer at Alibaba, where I mastered new technologies like React and Node.js. I also learned about efficient work, time and task management, teamwork, and large - system design. I participated in numerous large - scale projects and built complex systems from scratch, such as the store system serving tens of millions of users and Alibaba's internal talent service management system. In 2024, I left Alibaba for more freedom and new challenges. Now, I'm a marketing consultant at Blackboxcv. I'm excited to be part of this innovative team. Our team's technology has been refined over the years, winning many R & D and innovation honors, with multiple patents. I aim to connect more manufacturing companies with us. Blackboxcv offers measurement solutions like 3D scanner equipment and customized digital services. I can also assist corporate decision - makers and individuals in achieving digital efficiency, through website development, consulting, and marketing strategy formulation. ",
        description: "I am a programmer with a computer science background and a 3D scanning solutions consultant for Blackboxcv.I was born and grew up in a small southern Chinese city. I love challenges and learning new things, especially languages and their associated cultures. I enjoy collaborating with people from diverse backgrounds and engage in activities like traveling, reading, yoga, and other sports.I'm excited to be part of this innovative team. Our team's technology has been refined over the years, winning many R & D and innovation honors, with multiple patents. I aim to connect more manufacturing companies with us. Blackboxcv offers measurement solutions like 3D scanner equipment and customized digital services. I can also assist corporate decision - makers and individuals in achieving digital efficiency, through consulting, and marketing strategy formulation(developing...) We look forward to joining hands with you to jointly create business value. ",
        // 工业测量光学设备供应商 & 数字化服务顾问
        identity: {
          sale: '3D Scanner Consultant at Blackboxcv: we provide 3D scanners and services for manufacturing partners',
          engineer: 'Web Engineer: Strong in rationality and logical thinking, good at teamwork, tenacious and patient, and with a strong sense of innovation. ',
          hobby: 'Yoga & nature: Doing yoga and getting close to nature are the states that I truly enjoy, which help me enter a state of meditation.',
        },
        cta1: "Contact Us",
        cta2: "Learn More",
      },
      features: {
        title: "Featured Services",
        subtitle: "What Can I Do For You",
        description: "We provide comprehensive services to help you achieve your business goals.",
        items: [
          {
            title: "Professional Design",
            description: "Our design team will create unique and professional design solutions for you.",
          },
          {
            title: "Technical Support",
            description: "We provide 24/7 technical support to solve any of your problems.",
          },
          {
            title: "Custom Solutions",
            description: "We provide tailored solutions based on your specific needs.",
          },
        ],
      },
      cta: {
        title: "Ready to Get Started?",
        description: "Contact us to start your project. We look forward to working with you!",
        button: "Contact Now",
      },
    },
    // About Blackboxcv
    blackboxcv: {
      hero: {
        title: "About Blackboxcv",
        subtitle: "The world-leading provider of 3D scanning solutions.",
        description1: "Blackboxcv was established in 2015, and is located in the beautiful city Hangzhou, near Alibaba Group. The company is a world-leading developer of 3D machine vision system with an independent capacity of full stack development from optics to underlying algorithms. Also, it is a national-level high-tech enterprise with 120+ patents and software copyrights, including 20+ invention patents. We have favorable technical personnel from the Microsoft Research Asia and the CAD team of Zhejiang University. We are currently the only Chinese manufacturer with full-stack independent RND.",
        description2: "We specialize in the RND, production, and sales of 3D scanners and 3D systems. Our products are widely applied in the industrial manufacturing sector, such as digital application industries including automotive, aerospace, transportation, machinery manufacturing, metal manufacturing, military manufacturing, education and scientific research, and healthcare. We are committed to providing customers with 3D scanners that meet their needs.",
        // I am a programmer with a computer science background and a 3D scanning solutions consultant for Blackboxcv.I was born and grew up in a small southern Chinese city. I love challenges and learning new things, especially languages and their associated cultures. I enjoy collaborating with people from diverse backgrounds and engage in activities like traveling, reading, yoga, and other sports.I'm excited to be part of this innovative team. Our team's technology has been refined over the years, winning many R & D and innovation honors, with multiple patents. I aim to connect more manufacturing companies with us. Blackboxcv offers measurement solutions like 3D scanner equipment and customized digital services. I can also assist corporate decision - makers and individuals in achieving digital efficiency, through consulting, and marketing strategy formulation(developing...) We look forward to joining hands with you to jointly create business value. ",
        cta1: "Contact Us",
        cta2: "Learn More",
      },
      features: {
        title: "Featured Services",
        subtitle: "What We Can Do For You",
        description: "We provide comprehensive services to help you achieve your business goals.",
        items: [
          {
            title: "Professional Design",
            description: "Our design team will create unique and professional design solutions for you.",
          },
          {
            title: "Technical Support",
            description: "We provide 24/7 technical support to solve any of your problems.",
          },
          {
            title: "Custom Solutions",
            description: "We provide tailored solutions based on your specific needs.",
          },
        ],
      },
      cta: {
        title: "Ready to Get Started?",
        description: "Contact us to start your project. We look forward to working with you!",
        button: "Contact Now",
      },
    },
    // Contact page
    contact: {
      title: "Contact Me",
      description:
        "We would love to hear from you. Please fill out the form and we will get back to you as soon as possible.",
      info: {
        title: "Contact Information",
        phone: "+86 187 9798 3328",
        blackboxEmail: "cyan@blackboxcv.com",
        individualEmail: "liaosarong@gmail.com",
        WeChat: "Withadeafear",
        LinkedIn: {
          href: "https://www.linkedin.com/in/cyan-liao-9373b2217/"
        },
        WhatsApp: {
          href: "https://api.whatsapp.com/send?phone=+8618797983328&text=Hello"
        },
        address: "Wuchang Sub-district, Yuhang District, Hangzhou City, Zhejiang Province, near the headquarters of Alibaba",
      },
      form: {
        title: "Send a Message",
        description: "Fill out the form below to get in touch with us.",
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message",
        namePlaceholder: "Enter your name",
        emailPlaceholder: "Enter your email",
        messagePlaceholder: "Enter your message",
      },
    },
    // News page
    news: {
      title: "News-developing...",
      description: "Stay updated with our latest news, industry updates, and important announcements.",
      readMore: "Read More",
      noPosts: 'Empty...',
      categories: "Categories",
      recentPosts: "Recent Posts",
      searchPlaceholder: "Search news...",
    },
    // 课程介绍
    course: {
      title: "Course Introduction",
      description: "Explore our comprehensive range of products and service solutions.",
      viewDetails: "View Details",
      categories: {
        all: "All", // 可按品类检索，也可按时长检索10min/15min/30min/45min/60min）、
        yoga: "Yoga",
        pilates: "Pilates",
        breath: "Breathing",
        meditation: "Meditation",
        individual: "Individual", // 私教、精品小团课）
      },
    },
    scheduler: {
      title: "课程表",
      description: "探索Cyan提供的技术赋能包，实现数据驱动选型决策。",
      categories: {
        online: "市场分析",
        offline: "公司分析",
        articles: "产品分析",
        // 可以发布技术文章、行业分析、资源等，体现专业知识和行业洞察。增强专业形象。
        // guides: "技术文章/行业分析",
        resources: "预算粗估计算器",
      },
      searchPlaceholder: "AI问答...",
      viewResource: "查看资源",
    },
    booking: {
      title: "Booking an experience",
      description: "Access tutorials, guides, and resources to help you improve your skills and knowledge.",
      categories: {
        tutorials: "Tutorials",
        guides: "Guides",
        resources: "Resources",
      },
      searchPlaceholder: "Search learning resources...",
      viewResource: "View Resource",
    },
    // Showcase
    showcase: {
      title: "Showcase-developing...",
      description: "Browse our completed projects and client success stories.",
      viewCase: "View Case",
      categories: {
        all: "All",
        webDevelopment: "Web Development",
        mobileApps: "Mobile Apps",
        design: "Design Projects",
        consulting: "Consulting Projects",
      },
      clientSays: "What Our Clients Say",
    },
    // Footer
    footer: {
      copyright: "All rights reserved",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
    },
    // Common
    common: {
      loading: "Loading...",
      error: "An error occurred",
      retry: "Retry",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      language: "Language",
    },
  },
}

