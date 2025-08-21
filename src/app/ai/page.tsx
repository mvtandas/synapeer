import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "AI Applications - AI-Powered Innovation",
  description: "We develop AI-powered applications that enhance digital experiences, automate workflows, and create intelligent solutions for businesses and individuals.",
}

const aiTools = [
  {
    title: "AI Food Photography",
    description: "Professional food photography powered by AI technology. Transform ordinary food images into stunning, restaurant-quality photos.",
    icon: Camera,
    features: [
      "AI-powered food styling",
      "Professional lighting and composition",
      "High-resolution image delivery",
      "Consistent brand aesthetics",
      "Fast turnaround times"
    ],
    href: "/ai/food-photography",
    status: "Available Now"
  },
  {
    title: "AI Content Generation",
    description: "Automated content creation for marketing campaigns, social media, and product descriptions.",
    icon: Sparkles,
    features: [
      "Marketing copy generation",
      "Social media content",
      "Product descriptions",
      "SEO-optimized content",
      "Brand voice consistency"
    ],
    href: "#",
    status: "Coming Soon"
  },
  {
    title: "AI Analytics Dashboard",
    description: "Intelligent analytics and insights powered by machine learning algorithms.",
    icon: Zap,
    features: [
      "Predictive analytics",
      "Real-time insights",
      "Automated reporting",
      "Custom dashboards",
      "Performance optimization"
    ],
    href: "#",
    status: "Coming Soon"
  }
]

export default function AIPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          {/* Floating elements */}
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${5 + Math.random() * 4}s`
              }}
            ></div>
          ))}
          
          {/* Large decorative circles */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-3/4 left-1/3 w-16 h-16 border border-white/5 rounded-full animate-pulse-slow" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-full mb-6 animate-fade-in border border-white/20">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            AI Innovation
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            AI-Powered Innovation
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-white/80 leading-relaxed">
            We develop AI-powered applications that enhance digital experiences, automate workflows, and create intelligent solutions for businesses and individuals.
          </p>
          
          {/* Decorative line */}
          <div className="w-32 h-1 bg-gradient-to-r from-white via-white/60 to-white/20 mx-auto mb-8 rounded-full"></div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link href="/ai/food-photography">
                Try AI Food Photography
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Discuss AI Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          {/* Floating elements */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-black/15 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-black/5 text-black text-sm font-medium rounded-full mb-6 animate-fade-in border border-black/10">
              <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
              Our Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Our AI Solutions
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge AI applications designed to streamline your workflow and enhance your digital presence
            </p>
            
            {/* Decorative line */}
            <div className="w-32 h-1 bg-gradient-to-r from-black via-black/60 to-black/20 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTools.map((tool, index) => (
              <div
                key={tool.title}
                className="group animate-fade-in-up"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <Card className="h-full bg-white border border-black/10 hover:border-black/30 hover:shadow-xl transition-all duration-500 group-hover:scale-105 overflow-hidden">
                  {/* Card background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="p-3 bg-black/5 rounded-xl group-hover:bg-black/10 transition-all duration-300 group-hover:scale-110 border border-black/10">
                            <tool.icon className="h-6 w-6 text-black group-hover:text-black/80 transition-colors duration-300" />
                          </div>
                          <div className="absolute inset-0 bg-black/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <CardTitle className="text-xl text-black group-hover:text-black/80 transition-colors duration-300">{tool.title}</CardTitle>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        tool.status === "Available Now" 
                          ? "bg-black text-white" 
                          : "bg-black/10 text-black/70"
                      }`}>
                        {tool.status}
                      </span>
                    </div>
                    <CardDescription className="text-base text-black/70 group-hover:text-black/80 transition-colors duration-300">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-6">
                    <ul className="space-y-3">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3 group/item">
                          <div className="relative mt-2 flex-shrink-0">
                            <div className="w-2 h-2 bg-black rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                            <div className="absolute inset-0 w-2 h-2 bg-black/30 rounded-full animate-ping"></div>
                          </div>
                          <span className="text-sm text-black/70 group-hover/item:text-black/90 transition-colors duration-300 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {tool.status === "Available Now" ? (
                      <Button asChild className="w-full bg-black text-white hover:bg-black/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <Link href={tool.href}>
                          Learn More
                        </Link>
                      </Button>
                    ) : (
                      <Button asChild className="w-full border-2 border-black/20 text-black/50 hover:border-black/40 hover:text-black/70 transition-all duration-300" variant="outline" disabled>
                        <Link href={tool.href}>
                          Coming Soon
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-black/10 via-black/5 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-black to-black/60 group-hover:w-full transition-all duration-500"></div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating elements */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-black/15 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-black/5 text-black text-sm font-medium rounded-full mb-6 animate-fade-in border border-black/10">
              <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
              Future Plans
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              AI Innovation Roadmap
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
              We&apos;re constantly developing new AI solutions to meet evolving business needs
            </p>
            
            {/* Decorative line */}
            <div className="w-32 h-1 bg-gradient-to-r from-black via-black/60 to-black/20 mx-auto mt-8 rounded-full"></div>
          </div>
          
          <div className="bg-white border border-black/10 rounded-2xl p-8 max-w-4xl mx-auto shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-black/2 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <p className="text-black/70 leading-relaxed text-lg">
                Our roadmap includes advanced AI tools for content creation, customer service automation, 
                predictive analytics, and more. Stay tuned for updates as we continue to push the boundaries 
                of what&apos;s possible with artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating elements */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-black/15 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-black/5 text-black text-sm font-medium rounded-full mb-6 animate-fade-in border border-black/10">
            <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
            Get Started
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
            Ready to Experience AI Innovation?
          </h2>
          <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how our AI solutions can transform your business and streamline your operations.
          </p>
          
          {/* Decorative line */}
          <div className="w-32 h-1 bg-gradient-to-r from-black via-black/60 to-black/20 mx-auto mb-8 rounded-full"></div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black text-white hover:bg-black/80 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link href="/ai/food-photography">
                Try AI Food Photography
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-black/20 hover:border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Discuss AI Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
