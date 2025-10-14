import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BeforeAfter } from "@/components/before-after"
import { Upload, Sparkles, Zap, Download, Camera, Users, ShoppingCart, Package } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "AI Food Photography - Professional Food Photography Powered by AI",
  description: "Transform ordinary food images into stunning, restaurant-quality photos with our AI-powered food photography service.",
}

const howItWorks = [
  {
    step: 1,
    title: "Share Your Photos",
    description: "Send us your product shots — or let our team capture them for you.",
    icon: Upload
  },
  {
    step: 2,
    title: "Define Your Photography Style",
    description: "Tell us how you want your dishes to appear.",
    icon: Sparkles
  },
  {
    step: 3,
    title: "AI-Enhanced Creation",
    description: "We generate new, high-quality food images, then apply professional lighting, color correction for natural results.",
    icon: Zap
  },
  {
    step: 4,
    title: "Delivery",
    description: "Receive high-resolution, ready-to-use images",
    icon: Download
  }
]

const useCases = [
  {
    title: "Restaurants",
    description: "Professional menu photography that showcases your dishes in the best light",
    icon: Camera
  },
  {
    title: "Food Brands",
    description: "Product photography that drives sales and builds brand recognition",
    icon: Package
  },
  {
    title: "Delivery Apps",
    description: "High-quality images that increase order conversion rates",
    icon: ShoppingCart
  },
  {
    title: "E-commerce",
    description: "Stunning product photos that boost online sales",
    icon: Users
  }
]

const benefits = [
  "Faster turnaround times compared to traditional photography",
  "Lower costs without compromising quality",
  "Consistent brand aesthetics across all images",
  "No need for expensive equipment or studio space",
  "Scalable solution for high-volume needs",
  "Professional results every time"
]

export default function AIFoodPhotographyPage() {
  return (
    <>
      {/* Hero Section */}
              <section className="py-20 bg-gradient-to-br from-deep-tech-blue via-charcoal-black to-deep-tech-blue text-white relative overflow-hidden">
        <div className="container text-center">
          <div
            
            
            
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            AI Food Photography
          </div>
          <p
            
            
            
            className="text-xl lg:text-2xl max-w-3xl mx-auto mb-8"
          >
            From appetizing menus to scroll-stopping social posts, our AI creates images that sell.
          </p>
          <div
            
            
            
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-bold-teal to-deep-tech-blue hover:from-bold-teal/90 hover:to-deep-tech-blue/90 text-white shadow-lg">
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-deep-tech-blue">
              <Link href="#demo">
                View Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Before/After Demo */}
      <section id="demo" className="py-20">
        <div className="container">
          <div
            
            
            
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              See the Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Drag the slider to see how our AI transforms ordinary food photos into professional-quality images
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <BeforeAfter
              beforeSrc="/silsara/2.jpeg"
              afterSrc="/silsara/1.jpeg"
              alt="AI food photography transformation - Professional enhancement"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-teal-50 relative overflow-hidden">
        <div className="container">
          <div
            
            
            
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From Plate to Perfection in 4 Simple Steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step) => (
              <div
                key={step.step}
                
                
                
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-bold-teal/10 to-deep-tech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-bold-teal/20">
                  <step.icon className="h-8 w-8 text-deep-tech-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
        <div className="container">
          <div
            
            
            
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Perfect For
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re a restaurant, food brand, or e-commerce business, our AI food photography delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                
                
                
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-bold-teal/10 to-deep-tech-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4 border border-bold-teal/20">
                      <useCase.icon className="h-6 w-6 text-deep-tech-blue" />
                    </div>
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{useCase.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-slate-50 relative overflow-hidden">
        <div className="container">
          <div
            
            
            
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose AI Food Photography?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the benefits of AI-powered food photography
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                
                
                
                className="flex items-start space-x-3"
              >
                                 <div className="w-2 h-2 bg-gradient-to-r from-bold-teal to-deep-tech-blue rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See the Difference */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              See the Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three before and after examples of our AI-enhanced photography
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            <BeforeAfter
              beforeSrc="/silsara/2.jpeg"
              afterSrc="/silsara/1.jpeg"
              alt="Food photography transformation - Enhanced lighting and composition"
            />
            <BeforeAfter
              beforeSrc="/silsara/4.png"
              afterSrc="/silsara/3.jpeg"
              alt="Food photography transformation - Professional color correction"
            />
            <BeforeAfter
              beforeSrc="/silsara/6.png"
              afterSrc="/silsara/5.jpeg"
              alt="Food photography transformation - AI-powered enhancement"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
              <section className="py-20 bg-gradient-to-br from-deep-tech-blue via-charcoal-black to-deep-tech-blue text-white relative overflow-hidden">
        <div className="container text-center">
          <div
            
            
            
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Food Photography?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with AI-powered food photography and see the difference it makes for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-bold-teal to-deep-tech-blue hover:from-bold-teal/90 hover:to-deep-tech-blue/90 text-white shadow-lg">
                <Link href="/contact">
                  Get Started Today
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-deep-tech-blue">
                <Link href="/contact">
                  Request Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
