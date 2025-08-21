"use client"

import { processSteps } from "@/content/process"

export function ProcessSteps() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-black/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${5 + Math.random() * 4}s`
            }}
          ></div>
        ))}
        
        {/* Large decorative circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-black/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-black/5 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-black/5 text-black text-sm font-medium rounded-full mb-6 animate-fade-in border border-black/10">
            <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
            Our Methodology
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
            Our Process
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
            A proven methodology that delivers measurable results and sustainable growth
          </p>
          
          {/* Enhanced decorative line */}
          <div className="w-32 h-1 bg-gradient-to-r from-black via-black/60 to-black/20 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Main timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-black/20 via-black/40 to-black/20 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="relative group animate-fade-in-up"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Step card */}
                <div className="relative bg-white border border-black/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:border-black/30 overflow-hidden">
                  {/* Card background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Step number with enhanced design */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-black text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                      {step.step}
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-black/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Progress indicator */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-black/20 rounded-full overflow-hidden">
                      <div className="w-0 h-full bg-black group-hover:w-full transition-all duration-1000 ease-out"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4 text-black group-hover:text-black/80 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-black/70 leading-relaxed group-hover:text-black/80 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-black/10 via-black/5 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-black to-black/60 group-hover:w-full transition-all duration-500"></div>
                </div>
                
                {/* Enhanced connector for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-black/30 via-black/50 to-black/30 transform -translate-y-1/2 z-0 group-hover:from-black/50 group-hover:via-black/70 group-hover:to-black/50 transition-all duration-300" />
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "100%", label: "Success Rate", icon: "🎯" },
            { number: "24/7", label: "Support Available", icon: "⚡" },
            { number: "500+", label: "Projects Completed", icon: "🚀" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group animate-fade-in-up"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="relative mb-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="absolute inset-0 bg-black/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-black mb-2 group-hover:text-black/80 transition-colors duration-300">
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
  )
}
