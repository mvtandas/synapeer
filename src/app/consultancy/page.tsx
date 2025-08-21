import { services } from "@/content/services"
import { Button } from "@/components/ui/button"

import Link from "next/link"

export const metadata = {
  title: "Consultancy - Digital Marketing Services",
  description: "Our expert-driven solutions help businesses scale, optimize, and stay ahead in the digital age.",
}

export default function ConsultancyPage() {
  const marketingServices = services.filter(service => service.href === "/consultancy")

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          {/* Floating elements */}
          {[...Array(8)].map((_, i) => (
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
        </div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-full mb-6 animate-fade-in border border-white/20">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Digital Marketing
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Digital Marketing Consultancy
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-white/80 leading-relaxed">
            Our expert-driven solutions help businesses scale, optimize, and stay ahead in the digital age.
          </p>
          
          {/* Decorative line */}
          <div className="w-32 h-1 bg-gradient-to-r from-white via-white/60 to-white/20 mx-auto mb-8 rounded-full"></div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Get Started Today
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Get a Free Audit
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
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
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-black/5 text-black text-sm font-medium rounded-full mb-6 animate-fade-in border border-black/10">
              <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Our Services
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
            
            {/* Decorative line */}
            <div className="w-32 h-1 bg-gradient-to-r from-black via-black/60 to-black/20 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="space-y-20">
            {marketingServices.map((service, index) => (
              <div
                key={service.title}
                className="group animate-fade-in-up"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="p-4 bg-black/5 rounded-xl group-hover:bg-black/10 transition-all duration-300 group-hover:scale-110 border border-black/10">
                          <service.icon className="h-8 w-8 text-black group-hover:text-black/80 transition-colors duration-300" />
                        </div>
                        <div className="absolute inset-0 bg-black/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="text-3xl font-bold text-black group-hover:text-black/80 transition-colors duration-300">{service.title}</h3>
                    </div>
                    <p className="text-lg text-black/70 leading-relaxed group-hover:text-black/80 transition-colors duration-300">{service.description}</p>
                    <ul className="space-y-3">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start space-x-3 group/item">
                          <div className="relative mt-2 flex-shrink-0">
                            <div className="w-2 h-2 bg-black rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                            <div className="absolute inset-0 w-2 h-2 bg-black/30 rounded-full animate-ping"></div>
                          </div>
                          <span className="text-black/70 group-hover/item:text-black/90 transition-colors duration-300 leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild size="lg" className="bg-black text-white hover:bg-black/80 px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <Link href="/contact">
                        Get Started
                      </Link>
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="bg-black/5 rounded-2xl h-80 flex items-center justify-center border border-black/10 group-hover:border-black/20 transition-all duration-300 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-black/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 text-center">
                        <div className="text-6xl mb-4 opacity-20">📊</div>
                        <p className="text-black/50 font-medium">Service Visualization</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                {/* Separator line */}
                {index < marketingServices.length - 1 && (
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-black/20 to-transparent mt-20"></div>
                )}
              </div>
            ))}
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
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss your goals and create a strategy that delivers measurable results.
          </p>
          
          {/* Decorative line */}
          <div className="w-32 h-1 bg-gradient-to-r from-black via-black/60 to-black/20 mx-auto mb-8 rounded-full"></div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black text-white hover:bg-black/80 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Schedule a Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-black/20 hover:border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Get a Free Audit
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
