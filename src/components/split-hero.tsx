"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

interface SplitHeroProps {
  leftTitle: string
  leftSubtext: string
  leftCtaLabel: string
  leftCtaHref: string
  rightTitle: string
  rightSubtext: string
  rightCtaLabel: string
  rightCtaHref: string
}

interface AnimatedDot {
  left: string
  top: string
  animationDelay: string
  animationDuration: string
}

interface Sparkle {
  left: string
  top: string
  animationDelay: string
  animationDuration: string
}

export function SplitHero({
  leftTitle,
  leftSubtext,
  leftCtaLabel,
  leftCtaHref,
  rightTitle,
  rightSubtext,
  rightCtaLabel,
  rightCtaHref,
}: SplitHeroProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [leftDots, setLeftDots] = useState<AnimatedDot[]>([])
  const [rightDots, setRightDots] = useState<AnimatedDot[]>([])
  const [leftSparkles, setLeftSparkles] = useState<Sparkle[]>([])
  const [rightSparkles, setRightSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    setIsVisible(true)
    
    // Generate random dots for left side
    const leftDotsData = [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 2}s`
    }))
    setLeftDots(leftDotsData)
    
    // Generate random dots for right side
    const rightDotsData = [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 2}s`
    }))
    setRightDots(rightDotsData)
    
    // Generate random sparkles for left side
    const leftSparklesData = [...Array(8)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      animationDuration: `${1.5 + Math.random() * 1}s`
    }))
    setLeftSparkles(leftSparklesData)
    
    // Generate random sparkles for right side
    const rightSparklesData = [...Array(8)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      animationDuration: `${1.5 + Math.random() * 1}s`
    }))
    setRightSparkles(rightSparklesData)
  }, [])

  return (
    <section className="relative min-h-screen lg:h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left Side - Digital Marketing */}
        <div className="relative bg-gradient-to-br from-deep-tech-blue via-charcoal-black to-deep-tech-blue text-white flex items-center justify-center overflow-hidden min-h-[50vh] lg:min-h-full">
          {/* Animated Background for Left Side */}
          <div className="absolute inset-0">
            {/* Morphing shapes */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 animate-morph"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/3 animate-morph" style={{animationDelay: '2s'}}></div>
            
            {/* Floating geometric shapes with enhanced effects */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full animate-float-3d">
              <div className="absolute inset-2 border border-white/5 rounded-full animate-pulse-glow"></div>
            </div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-white/20 rounded-lg animate-float-slow">
              <div className="absolute inset-1 border border-white/10 rounded-lg animate-orbit"></div>
            </div>
            <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-white/15 rotate-45 animate-float-fast">
              <div className="absolute inset-1 border border-white/8 rotate-45 animate-sparkle"></div>
            </div>
            
            {/* Enhanced floating elements */}
            <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-white/5 rounded-full animate-breath">
              <div className="absolute inset-0 bg-white/10 rounded-full animate-ripple"></div>
            </div>
            <div className="absolute bottom-1/3 right-1/2 w-12 h-12 border border-white/10 rotate-12 animate-rotate-slow">
              <div className="absolute inset-0 border border-white/5 rotate-12 animate-pulse-slow"></div>
            </div>
            
            {/* Orbiting elements */}
            <div className="absolute top-1/6 left-1/6 w-6 h-6 bg-white/8 rounded-full animate-orbit"></div>
            <div className="absolute bottom-1/6 left-1/6 w-4 h-4 bg-white/6 rounded-full animate-orbit" style={{animationDelay: '3s'}}></div>
            
            {/* Moving lines with shimmer effect */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-white/20 to-transparent animate-pulse" style={{animationDelay: '1s'}}>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-transparent animate-shimmer"></div>
            </div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" style={{animationDelay: '2s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
            
            {/* Wave effects */}
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent animate-slide-wave"></div>
            <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-white/15 to-transparent animate-slide-wave" style={{animationDelay: '1.5s'}}></div>
            
            {/* Gradient overlay with enhanced depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-deep-tech-blue/50 via-charcoal-black/60 to-deep-tech-blue/50 opacity-90"></div>
            
            {/* Enhanced animated dots grid */}
            <div className="absolute inset-0 opacity-20">
              {leftDots.map((dot, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    left: dot.left,
                    top: dot.top,
                    animationDelay: dot.animationDelay,
                    animationDuration: dot.animationDuration
                  }}
                ></div>
              ))}
            </div>
            
            {/* Sparkle effects */}
            {leftSparkles.map((sparkle, i) => (
              <div
                key={`sparkle-${i}`}
                className="absolute w-2 h-2 bg-white/30 rounded-full animate-sparkle"
                style={{
                  left: sparkle.left,
                  top: sparkle.top,
                  animationDelay: sparkle.animationDelay,
                  animationDuration: sparkle.animationDuration
                }}
              ></div>
            ))}
            
            {/* Enhanced wave effect */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/3 to-transparent animate-wave"></div>
          </div>
          
          <div className="relative z-10 w-full py-16 lg:py-0">
            <div className="container">
              <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <div className="space-y-4">
                <h1 className={`text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight tracking-tight transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {leftTitle}
                </h1>
                <p className={`text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {leftSubtext}
                </p>
              </div>
              <div className={`pt-4 transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <Button asChild size="lg" className="bg-gradient-to-r from-bold-teal to-white hover:from-bold-teal/90 hover:to-white/90 text-deep-tech-blue px-6 lg:px-8 py-3 text-base lg:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-bounce">
                  <Link href={leftCtaHref}>
                    {leftCtaLabel}
                  </Link>
                </Button>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - AI Applications */}
        <div className="relative bg-gradient-to-br from-white via-blue-50 to-teal-50 text-charcoal-black flex items-center justify-center overflow-hidden min-h-[50vh] lg:min-h-full">
          {/* Animated Background for Right Side */}
          <div className="absolute inset-0">
            {/* Morphing shapes */}
            <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-black/3 animate-morph"></div>
            <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-black/2 animate-morph" style={{animationDelay: '1.5s'}}></div>
            
            {/* Floating geometric shapes with enhanced effects */}
            <div className="absolute top-1/3 right-1/3 w-28 h-28 border border-black/10 rounded-full animate-float-3d">
              <div className="absolute inset-2 border border-black/5 rounded-full animate-pulse-glow"></div>
            </div>
            <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border border-black/20 rounded-lg animate-float">
              <div className="absolute inset-1 border border-black/10 rounded-lg animate-orbit"></div>
            </div>
            <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-black/15 rotate-45 animate-float-fast">
              <div className="absolute inset-1 border border-black/8 rotate-45 animate-sparkle"></div>
            </div>
            
            {/* Enhanced floating elements */}
            <div className="absolute top-1/4 left-1/2 w-6 h-6 bg-black/5 rounded-full animate-breath">
              <div className="absolute inset-0 bg-black/10 rounded-full animate-ripple"></div>
            </div>
            <div className="absolute bottom-1/2 left-1/3 w-10 h-10 border border-black/10 rotate-12 animate-rotate-slow">
              <div className="absolute inset-0 border border-black/5 rotate-12 animate-pulse-slow"></div>
            </div>
            <div className="absolute top-3/4 left-1/4 w-4 h-4 bg-black/10 rounded-full animate-bounce-slow">
              <div className="absolute inset-0 bg-black/5 rounded-full animate-sparkle"></div>
            </div>
            
            {/* Orbiting elements */}
            <div className="absolute top-1/6 right-1/6 w-5 h-5 bg-black/8 rounded-full animate-orbit"></div>
            <div className="absolute bottom-1/6 right-1/6 w-3 h-3 bg-black/6 rounded-full animate-orbit" style={{animationDelay: '2.5s'}}></div>
            
            {/* Moving lines with shimmer effect */}
            <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-black/20 to-transparent animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/40 to-transparent animate-shimmer"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/20 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-transparent animate-shimmer"></div>
            </div>
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent animate-pulse" style={{animationDelay: '2.5s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-transparent animate-shimmer"></div>
            </div>
            
            {/* Wave effects */}
            <div className="absolute top-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-black/15 to-transparent animate-slide-wave"></div>
            <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/15 to-transparent animate-slide-wave" style={{animationDelay: '1s'}}></div>
            
            {/* Gradient overlay with enhanced depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-50/60 to-teal-50/80 opacity-90"></div>
            
            {/* Enhanced animated dots grid */}
            <div className="absolute inset-0 opacity-20">
              {rightDots.map((dot, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-black rounded-full animate-pulse"
                  style={{
                    left: dot.left,
                    top: dot.top,
                    animationDelay: dot.animationDelay,
                    animationDuration: dot.animationDuration
                  }}
                ></div>
              ))}
            </div>
            
            {/* Sparkle effects */}
            {rightSparkles.map((sparkle, i) => (
              <div
                key={`sparkle-${i}`}
                className="absolute w-2 h-2 bg-black/30 rounded-full animate-sparkle"
                style={{
                  left: sparkle.left,
                  top: sparkle.top,
                  animationDelay: sparkle.animationDelay,
                  animationDuration: sparkle.animationDuration
                }}
              ></div>
            ))}
            
            {/* Enhanced wave effect */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/3 to-transparent animate-wave"></div>
            
            {/* Additional decorative elements with 3D effects */}
            <div className="absolute top-1/6 right-1/6 w-16 h-16 border border-black/5 rounded-full animate-pulse-slow">
              <div className="absolute inset-2 border border-black/3 rounded-full animate-rotate-3d"></div>
            </div>
            <div className="absolute bottom-1/6 right-1/6 w-8 h-8 bg-black/5 rounded-full animate-float">
              <div className="absolute inset-0 bg-black/8 rounded-full animate-breath"></div>
            </div>
          </div>
          
          <div className="relative z-10 w-full py-16 lg:py-0">
            <div className="container">
              <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 ease-out delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <div className="space-y-4">
                <h1 className={`text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight tracking-tight transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {rightTitle}
                </h1>
                <p className={`text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {rightSubtext}
                </p>
              </div>
              <div className={`pt-4 transition-all duration-700 delay-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <Button asChild size="lg" variant="outline" className="border-2 border-deep-tech-blue text-deep-tech-blue hover:bg-gradient-to-r hover:from-deep-tech-blue hover:to-bold-teal hover:text-white px-6 lg:px-8 py-3 text-base lg:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-bounce">
                  <Link href={rightCtaHref}>
                    {rightCtaLabel}
                  </Link>
                </Button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
