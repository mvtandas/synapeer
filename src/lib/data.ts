// Site data
export const SITE = {
  name: "Synapeer Technologies Inc.",
  tagline: "Where Marketing and AI Converge.",
  primaryCta: { 
    label: "Book a Strategy Call", 
    href: "/contact#calendly" 
  }, 
  secondaryCta: { 
    label: "Get a Free Audit", 
    href: "/contact" 
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Consultancy", href: "/consultancy" },
    { label: "AI Powered", href: "/ai" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]
}

export const SERVICES = [
  {
    title: "Performance Marketing & Media Planning",
    description: "Scale globally with precision-targeted campaigns across DV360, Amazon DSP, and more.",
    icon: "BarChart3",
    bullets: [
      "Multi-channel paid advertising strategies",
      "Google Ads, Meta Ads, DV360, LinkedIn, TikTok",
      "Campaign planning and budget optimization",
      "Creative testing and performance analysis",
      "Real-time optimization and scaling"
    ],
    href: "/consultancy",
    order: 1
  },
  {
    title: "SEO & ASO & GEO",
    description: "Climb search rankings and app stores with strategies designed to convert.",
    icon: "Search",
    bullets: [
      "Technical SEO audits and optimization",
      "Content strategy and keyword research",
      "Link building and outreach campaigns",
      "Mobile app store optimization (ASO)",
      "Generative Engine Optimization",
      "Local SEO and Google My Business"
    ],
    href: "/consultancy",
    order: 2
  },
  {
    title: "Product Analytics & Data",
    description: "Turn complex data into actionable insights for growth.",
    icon: "TrendingUp",
    bullets: [
      "GA4 implementation and configuration",
      "Google Tag Manager setup",
      "Custom event tracking and attribution",
      "Data visualization and reporting",
      "Business intelligence dashboards"
    ],
    href: "/consultancy",
    order: 3
  },
  {
    title: "Reporting & Automation",
    description: "Save time and maximize ROI with automated workflows.",
    icon: "FileText",
    bullets: [
      "Automated reporting systems",
      "Custom dashboard creation",
      "Performance alerts and notifications",
      "Data pipeline optimization",
      "ROI tracking and analysis"
    ],
    href: "/consultancy",
    order: 4
  },
  {
    title: "Marketplace Marketing",
    description: "Dominate Amazon, Etsy, and global marketplaces with AI-enhanced optimization.",
    icon: "ShoppingCart",
    bullets: [
      "Amazon Advertising campaigns",
      "Amazon DSP programmatic advertising",
      "Marketplace SEO optimization",
      "Product catalog optimization",
      "Competitive analysis and positioning"
    ],
    href: "/consultancy",
    order: 5
  },
  {
    title: "AI Photography",
    description: "Professional photography powered by AI technology.",
    icon: "Camera",
    bullets: [
      "AI-powered product design",
      "Professional lighting and composition",
      "High-resolution image delivery",
      "Consistent brand aesthetics",
      "Fast turnaround times"
    ],
    href: "/ai/food-photography",
    order: 6
  }
]

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description: "We begin with an in-depth consultation to understand your business goals, industry challenges, and target audience. This phase includes market research, competitor analysis, and strategic planning to ensure a data-driven approach.",
    icon: "Search"
  },
  {
    step: 2,
    title: "Custom Solution Development",
    description: "Based on the insights gathered, we develop a tailored strategy aligned with your specific needs. Whether it's SEO, performance marketing, AI automation, or e-commerce optimization, we build a roadmap that ensures success.",
    icon: "Settings"
  },
  {
    step: 3,
    title: "Implementation & Execution",
    description: "Our team brings the strategy to life by executing targeted campaigns, optimizing digital touchpoints, and integrating AI-driven solutions. We leverage industry best practices and cutting-edge technologies to maximize results.",
    icon: "Play"
  },
  {
    step: 4,
    title: "Data Analytics & Optimization",
    description: "We continuously monitor and analyze performance metrics, user behavior, and engagement rates. Our iterative approach allows us to refine strategies in real time, ensuring continuous improvement and optimization.",
    icon: "TrendingUp"
  },
  {
    step: 5,
    title: "Scaling & Long-Term Growth",
    description: "Once we achieve measurable success, we shift focus to scalability and sustainability. Whether expanding AI applications, refining marketing efforts, or enhancing e-commerce operations, we ensure long-term digital growth.",
    icon: "ArrowUp"
  }
]
