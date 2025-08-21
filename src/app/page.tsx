"use client"

import { SplitHero } from "@/components/split-hero"
import { ServiceCard } from "@/components/service-card"
import { ProcessSteps } from "@/components/process-steps"
import { CTABanner } from "@/components/cta-banner"
import { services } from "@/content/services"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <SplitHero
        leftTitle="Performance Marketing That Delivers Measurable Growth"
        leftSubtext="Focused on KPIs, campaign efficiency, and global media execution."
        leftCtaLabel="Explore Marketing Services"
        leftCtaHref="/consultancy"
        rightTitle="AI-Powered Innovation for the Future"
        rightSubtext="Starting with professional food photography, expanding into scalable AI tools."
        rightCtaLabel="Discover AI Solutions"
        rightCtaHref="/ai"
      />

      {/* About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle grid pattern */}
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

        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-black/5 text-black text-sm font-medium rounded-full mb-6 animate-fade-in border border-black/10">
              <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
              About Us
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-black">
              About Synapeer – &ldquo;Where Marketing and AI Converge.&rdquo;
            </h2>
            <p className="text-lg text-black/70 leading-relaxed">
              We craft data-driven marketing strategies with expertise in Performance Marketing, SEO, Product Analytics, Amazon Advertising, and Programmatic Advertising to help businesses maximize growth.
            </p>
            
            {/* Decorative line */}
            <div className="w-24 h-1 bg-gradient-to-r from-black to-black/40 mx-auto mt-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-black/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-black/5 text-black text-sm font-medium rounded-full mb-6 animate-fade-in border border-black/10">
              <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
              Our Expertise
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Our Services
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing and AI solutions to drive your business forward with measurable results
            </p>
            
            {/* Decorative line */}
            <div className="w-24 h-1 bg-gradient-to-r from-black to-black/40 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group animate-fade-in-up h-full flex"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Campaigns Managed", icon: "📊" },
              { number: "98%", label: "Client Satisfaction", icon: "★" },
              { number: "3x", label: "Average ROI", icon: "📈" },
              { number: "24/7", label: "Support Available", icon: "⚡" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group animate-fade-in-up"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="relative">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 text-black">
                    {stat.icon}
                  </div>
                  <div className="absolute inset-0 bg-black/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-black mb-2 group-hover:text-black/70 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-black/60 group-hover:text-black/80 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating elements */}
          {[...Array(3)].map((_, i) => (
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
          <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-black">Ready to Transform Your Business?</h3>
          <p className="text-lg text-black/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how our comprehensive services can drive your growth and achieve your business objectives.
          </p>
          
          {/* Decorative line */}
          <div className="w-24 h-1 bg-gradient-to-r from-black to-black/40 mx-auto mb-8 rounded-full"></div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black hover:bg-black/80 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Get Started Today
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-black/20 hover:border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105">
              <Link href="/consultancy">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-black/5 text-black text-sm font-medium rounded-full mb-6 animate-fade-in border border-black/10">
              <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
              Trusted Partners
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-black">Trusted by Industry Leaders</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="text-2xl font-bold text-black/60 hover:text-black transition-colors duration-300">Google</div>
              <div className="text-2xl font-bold text-black/60 hover:text-black transition-colors duration-300">Meta</div>
              <div className="text-2xl font-bold text-black/60 hover:text-black transition-colors duration-300">DV360</div>
              <div className="text-2xl font-bold text-black/60 hover:text-black transition-colors duration-300">Amazon DSP</div>
              <div className="text-2xl font-bold text-black/60 hover:text-black transition-colors duration-300">LinkedIn</div>
              <div className="text-2xl font-bold text-black/60 hover:text-black transition-colors duration-300">TikTok</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating elements */}
          {[...Array(5)].map((_, i) => (
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
              Why Choose Us
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-black">
              Why Choose Synapeer?
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
              We combine proven expertise with cutting-edge technology to deliver exceptional results
            </p>
            
            {/* Decorative line */}
            <div className="w-24 h-1 bg-gradient-to-r from-black to-black/40 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Proven Expertise",
                description: "With years of experience in AI-driven marketing, e-commerce optimization, and digital transformation, we drive real results for businesses of all sizes."
              },
              {
                title: "Data-Driven Strategies",
                description: "Every strategy we develop is backed by real-time analytics, predictive insights, and industry-leading research to maximize success."
              },
              {
                title: "Personalized Approach",
                description: "We don't believe in one-size-fits-all strategies. Our team works closely with you to craft tailored solutions based on your unique goals and challenges."
              },
              {
                title: "Proven ROI & Growth",
                description: "We focus on delivering measurable results, ensuring increased brand visibility, higher engagement, and improved conversion rates."
              }
            ].map((prop, index) => (
              <div
                key={prop.title}
                className="text-center group animate-fade-in-up"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto group-hover:bg-black/10 transition-all duration-300 group-hover:scale-110">
                    <div className="w-8 h-8 bg-black rounded-full"></div>
                  </div>
                  <div className="absolute inset-0 w-16 h-16 bg-black/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black group-hover:text-black/80 transition-colors duration-300">{prop.title}</h3>
                <p className="text-black/70 leading-relaxed group-hover:text-black/80 transition-colors duration-300">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CTABanner />
    </>
  )
}
