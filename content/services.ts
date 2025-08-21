import { 
  BarChart3, 
  Search, 
  TrendingUp, 
  FileText, 
  ShoppingCart, 
  Camera 
} from "lucide-react"

export const services = [
  {
    title: "Performance Marketing & Media Planning",
    description: "Multi-channel paid strategies across Google, Meta, DV360, LinkedIn, TikTok; flighting, budgeting, and creative testing frameworks.",
    icon: BarChart3,
    bullets: [
      "Multi-channel paid advertising strategies",
      "Google Ads, Meta Ads, DV360, LinkedIn, TikTok",
      "Campaign planning and budget optimization",
      "Creative testing and performance analysis",
      "Real-time optimization and scaling"
    ],
    href: "/consultancy"
  },
  {
    title: "SEO & ASO",
    description: "Technical audits, content strategy, link acquisition, mobile app listing optimization.",
    icon: Search,
    bullets: [
      "Technical SEO audits and optimization",
      "Content strategy and keyword research",
      "Link building and outreach campaigns",
      "Mobile app store optimization (ASO)",
      "Local SEO and Google My Business"
    ],
    href: "/consultancy"
  },
  {
    title: "Product Analytics & Data",
    description: "Measurement architecture, event taxonomy, dashboards, attribution (GA4, GTM, Pixels, BI).",
    icon: TrendingUp,
    bullets: [
      "GA4 implementation and configuration",
      "Google Tag Manager setup",
      "Custom event tracking and attribution",
      "Data visualization and reporting",
      "Business intelligence dashboards"
    ],
    href: "/consultancy"
  },
  {
    title: "Reporting & Automation",
    description: "BI pipelines, automated performance reporting, alerts.",
    icon: FileText,
    bullets: [
      "Automated reporting systems",
      "Custom dashboard creation",
      "Performance alerts and notifications",
      "Data pipeline optimization",
      "ROI tracking and analysis"
    ],
    href: "/consultancy"
  },
  {
    title: "Marketplace Marketing",
    description: "Amazon Advertising & DSP, marketplace SEO, catalog optimization.",
    icon: ShoppingCart,
    bullets: [
      "Amazon Advertising campaigns",
      "Amazon DSP programmatic advertising",
      "Marketplace SEO optimization",
      "Product catalog optimization",
      "Competitive analysis and positioning"
    ],
    href: "/consultancy"
  },
  {
    title: "AI Food Photography",
    description: "Professional food photography powered by AI technology.",
    icon: Camera,
    bullets: [
      "AI-powered food styling",
      "Professional lighting and composition",
      "High-resolution image delivery",
      "Consistent brand aesthetics",
      "Fast turnaround times"
    ],
    href: "/ai/food-photography"
  }
]
