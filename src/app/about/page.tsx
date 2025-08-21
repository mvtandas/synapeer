
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Target, Zap, Award } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About - Synapeer Technologies Inc.",
  description: "At Synapeer, we blend cutting-edge AI technology, advanced marketing strategies, and data-driven consulting to help businesses scale and innovate.",
}

const values = [
  {
    title: "Innovation",
    description: "We stay at the forefront of technology and marketing trends to deliver cutting-edge solutions.",
    icon: Zap
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from strategy to execution.",
    icon: Award
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients to understand their unique needs and goals.",
    icon: Users
  },
  {
    title: "Results",
    description: "We focus on delivering measurable outcomes that drive real business growth.",
    icon: Target
  }
]

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    bio: "10+ years in digital marketing and AI technology",
    avatar: "/avatars/john.jpg"
  },
  {
    name: "Sarah Johnson",
    role: "Head of Marketing",
    bio: "Expert in performance marketing and analytics",
    avatar: "/avatars/sarah.jpg"
  },
  {
    name: "Mike Chen",
    role: "AI Lead",
    bio: "Specialist in machine learning and AI applications",
    avatar: "/avatars/mike.jpg"
  }
]

const partners = [
  "Google", "Meta", "Amazon", "Microsoft", "Adobe", "HubSpot"
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          {/* Floating elements */}
          {[...Array(12)].map((_, i) => (
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
            About Us
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Hello, we are Synapeer
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-white/80 leading-relaxed">
            A consultancy specializing in digital marketing and development, where innovation meets results.
          </p>
          
          {/* Decorative line */}
          <div className="w-32 h-1 bg-gradient-to-r from-white via-white/60 to-white/20 mx-auto mb-8 rounded-full"></div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105">
              <Link href="/consultancy">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-black/5 text-black text-sm font-medium rounded-full mb-6 animate-fade-in border border-black/10">
              <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
              Our Mission
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Our Mission
            </h2>
            <p className="text-xl text-black/70 leading-relaxed mb-8">
              At Synapeer, we blend cutting-edge AI technology, advanced marketing strategies, and data-driven consulting to help businesses scale and innovate. We don&apos;t just execute campaigns — we build future-proof strategies that drive long-term success.
            </p>
            <p className="text-xl text-black/70 leading-relaxed">
              Our team combines deep expertise in performance marketing, SEO, analytics, and AI development to deliver comprehensive solutions that address the unique challenges of modern businesses.
            </p>
            
            {/* Decorative line */}
            <div className="w-32 h-1 bg-gradient-to-r from-black via-black/60 to-black/20 mx-auto mt-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Our Values
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
            
            {/* Decorative line */}
            <div className="w-32 h-1 bg-gradient-to-r from-black via-black/60 to-black/20 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group animate-fade-in-up"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <Card className="h-full bg-white border border-black/10 hover:border-black/30 hover:shadow-xl transition-all duration-500 group-hover:scale-105 overflow-hidden">
                  {/* Card background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto group-hover:bg-black/10 transition-all duration-300 group-hover:scale-110 border border-black/10">
                        <value.icon className="h-8 w-8 text-black group-hover:text-black/80 transition-colors duration-300" />
                      </div>
                      <div className="absolute inset-0 w-16 h-16 bg-black/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardTitle className="text-xl text-black group-hover:text-black/80 transition-colors duration-300">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base text-black/70 group-hover:text-black/80 transition-colors duration-300">{value.description}</CardDescription>
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

      {/* Team Section */}
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
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-black/5 text-black text-sm font-medium rounded-full mb-6 animate-fade-in border border-black/10">
              <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
              Our Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Our Leadership Team
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
              Meet the experts behind our success
            </p>
            
            {/* Decorative line */}
            <div className="w-32 h-1 bg-gradient-to-r from-black via-black/60 to-black/20 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group animate-fade-in-up"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <Card className="h-full bg-white border border-black/10 hover:border-black/30 hover:shadow-xl transition-all duration-500 group-hover:scale-105 overflow-hidden">
                  {/* Card background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="relative mb-6">
                      <Avatar className="w-24 h-24 mx-auto border-4 border-black/10 group-hover:border-black/20 transition-all duration-300 group-hover:scale-110">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="bg-black/5 text-black font-bold text-xl">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="absolute inset-0 w-24 h-24 bg-black/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardTitle className="text-xl text-black group-hover:text-black/80 transition-colors duration-300">{member.name}</CardTitle>
                    <CardDescription className="text-base font-semibold text-black/70 group-hover:text-black/80 transition-colors duration-300">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-black/70 group-hover:text-black/80 transition-colors duration-300">{member.bio}</p>
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

      {/* Partners Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-black/5 text-black text-sm font-medium rounded-full mb-6 animate-fade-in border border-black/10">
              <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
              Our Partners
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Our Partners
            </h2>
            <p className="text-xl text-black/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              We work with industry-leading platforms and technologies
            </p>
            
            {/* Decorative line */}
            <div className="w-32 h-1 bg-gradient-to-r from-black via-black/60 to-black/20 mx-auto mb-12 rounded-full"></div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {partners.map((partner, index) => (
                <div
                  key={partner}
                  className="text-2xl font-bold text-black/60 hover:text-black transition-colors duration-300 animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {partner}
                </div>
              ))}
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
            Ready to Work Together?
          </h2>
          <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss how we can help your business grow and succeed in the digital age.
          </p>
          
          {/* Decorative line */}
          <div className="w-32 h-1 bg-gradient-to-r from-black via-black/60 to-black/20 mx-auto mb-8 rounded-full"></div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black text-white hover:bg-black/80 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-black/20 hover:border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105">
              <Link href="/consultancy">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
