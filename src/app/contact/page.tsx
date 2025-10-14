import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getFloatingElements } from "@/lib/deterministic-random"
import { Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export function generateMetadata() {
  return {
    title: "Contact - Get in Touch with Synapeer",
    description: "Ready to transform your digital presence? Contact us to discuss your project goals and discover how we can help your business grow.",
  }
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-deep-tech-blue via-charcoal-black to-deep-tech-blue text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          {/* Floating elements */}
          {getFloatingElements(10).map((item, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${item.left}%`,
                top: `${item.top}%`,
                animationDelay: `${item.delay}s`,
                animationDuration: `${item.duration}s`
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
            Contact Us
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Get in Touch
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-white/80 leading-relaxed">
            Ready to transform your digital presence? Let&apos;s discuss your project goals and discover how we can help your business grow.
          </p>
          
          {/* Decorative line */}
          <div className="w-32 h-1 bg-gradient-to-r from-white via-white/60 to-white/20 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-teal-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating elements */}
          {getFloatingElements(6).map((item, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-black/15 rounded-full animate-float"
              style={{
                left: `${item.left}%`,
                top: `${item.top}%`,
                animationDelay: `${item.delay}s`,
                animationDuration: `${item.duration}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-black/5 text-black text-sm font-medium rounded-full mb-6 animate-fade-in border border-black/10">
                  <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
                  Send Message
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">Send us a Message</h2>
                <p className="text-black/70 leading-relaxed">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                
                {/* Decorative line */}
                <div className="w-24 h-1 bg-gradient-to-r from-black via-black/60 to-black/20 mt-6 rounded-full"></div>
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '200ms'}}>
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-black/5 text-black text-sm font-medium rounded-full mb-6 animate-fade-in border border-black/10">
                  <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
                  Contact Info
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">Contact Information</h2>
                <p className="text-black/70 leading-relaxed mb-8">
                  Get in touch with us through any of these channels.
                </p>
                
                {/* Decorative line */}
                <div className="w-24 h-1 bg-gradient-to-r from-black via-black/60 to-black/20 mb-8 rounded-full"></div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    description: "info@synapeer.com",
                    delay: 0
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    description: "30 N Gould St, Sheridan, WY",
                    delay: 100
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    description: "Monday - Sunday: 9:00 AM - 5:00 PM EST",
                    delay: 200
                  }
                ].map((contact) => (
                  <div
                    key={contact.title}
                    className="group animate-fade-in-up"
                    style={{
                      animationDelay: `${contact.delay}ms`
                    }}
                  >
                    <Card className="bg-white border border-black/10 hover:border-black/30 hover:shadow-xl transition-all duration-500 group-hover:scale-105 overflow-hidden">
                      {/* Card background effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <CardHeader className="relative z-10">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <div className="p-3 bg-black/5 rounded-xl group-hover:bg-black/10 transition-all duration-300 group-hover:scale-110 border border-black/10">
                              <contact.icon className="h-6 w-6 text-black group-hover:text-black/80 transition-colors duration-300" />
                            </div>
                            <div className="absolute inset-0 bg-black/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <div>
                            <CardTitle className="text-lg text-black group-hover:text-black/80 transition-colors duration-300">{contact.title}</CardTitle>
                            <CardDescription className="text-black/70 group-hover:text-black/80 transition-colors duration-300 whitespace-pre-line">{contact.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      
                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-black/10 via-black/5 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-black to-black/60 group-hover:w-full transition-all duration-500"></div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Calendly Section - Full Width */}
          <div className="mt-16 animate-fade-in-up" style={{animationDelay: '400ms'}}>
            <div className="text-center mb-8">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-black">Schedule a Call</h3>
              <p className="text-xl text-black/70 leading-relaxed">
                Prefer to schedule a meeting? Book a time that works for you.
              </p>
            </div>
            <div className="bg-black/5 rounded-2xl p-16 text-center border border-black/10 hover:border-black/20 transition-all duration-300 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-black/2 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">

                <Button asChild className="bg-gradient-to-r from-deep-tech-blue to-bold-teal hover:from-deep-tech-blue/90 hover:to-bold-teal/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-10 py-4 text-xl">
                  <Link href="#calendly">
                    Schedule a Strategy Call
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating elements */}
          {getFloatingElements(4).map((item, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-black/15 rounded-full animate-float"
              style={{
                left: `${item.left}%`,
                top: `${item.top}%`,
                animationDelay: `${item.delay}s`,
                animationDuration: `${item.duration}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-black/5 text-black text-sm font-medium rounded-full mb-6 animate-fade-in border border-black/10">
              <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
              FAQ
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">Frequently Asked Questions</h2>
            <p className="text-xl text-black/70 leading-relaxed">
              Common questions about our services and process
            </p>
            
            {/* Decorative line */}
            <div className="w-32 h-1 bg-gradient-to-r from-black via-black/60 to-black/20 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What services do you offer?",
                answer: "We offer comprehensive digital marketing services including performance marketing, SEO, analytics, and AI-powered solutions like food photography."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Yes! We work with businesses of all sizes, from startups to enterprise companies."
              },
              {
                question: "What is your pricing structure?",
                answer: "Our pricing is customized based on your specific needs and project scope. Contact us for a detailed quote."
              }
            ].map((faq, index) => (
              <div
                key={faq.question}
                className="group animate-fade-in-up"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <Card className="bg-white border border-black/10 hover:border-black/30 hover:shadow-xl transition-all duration-500 group-hover:scale-105 overflow-hidden">
                  {/* Card background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-lg text-black group-hover:text-black/80 transition-colors duration-300">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-black/70 group-hover:text-black/80 transition-colors duration-300 leading-relaxed">{faq.answer}</p>
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
    </>
  )
}
