"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { SITE } from "@/content/site"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAiDropdownOpen, setIsAiDropdownOpen] = useState(false)
  const pathname = usePathname()

  const aiDropdownItems = [
    { label: "AI Food Photography", href: "/ai/food-photography", enabled: true },
    { label: "AI Content Generation", href: "/ai/content-generation", enabled: false },
    { label: "AI Analytics Dashboard", href: "/ai/analytics", enabled: false }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100) // 100px scroll sonrası container'lı
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b" 
        : "bg-white/95 backdrop-blur-sm border-b border-gray-200/50"
    )}>
      <div className={cn(
        "flex h-16 items-center justify-between transition-all duration-300",
        isScrolled ? "container" : "px-6 lg:px-12"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Synapeer Logo" 
            className="h-12 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {SITE.nav.map((item) => {
            if (item.label === "AI Powered") {
              return (
                <div 
                  key={item.href} 
                  className="relative"
                  onMouseEnter={() => setIsAiDropdownOpen(true)}
                  onMouseLeave={() => setIsAiDropdownOpen(false)}
                >
                  <Link
                    href="/ai"
                    className={cn(
                      "flex items-center space-x-1 text-sm font-medium transition-colors duration-300",
                      pathname.startsWith("/ai") 
                        ? "text-primary" 
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {isAiDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 w-56 z-50">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                        {aiDropdownItems.map((dropdownItem) => (
                          <div key={dropdownItem.href}>
                            {dropdownItem.enabled ? (
                              <Link
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                onClick={() => setIsAiDropdownOpen(false)}
                              >
                                {dropdownItem.label}
                              </Link>
                            ) : (
                              <span className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
                                {dropdownItem.label}
                                <span className="text-xs ml-2">(Coming Soon)</span>
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            }
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  pathname === item.href 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild className={cn(
            "transition-all duration-300",
            "bg-gradient-to-r from-deep-tech-blue to-bold-teal hover:from-deep-tech-blue/90 hover:to-bold-teal/90 text-white"
          )}>
            <Link href={SITE.ctas.primary.href}>
              {SITE.ctas.primary.label}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "md:hidden transition-colors duration-300",
            "text-foreground"
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              {SITE.nav.map((item) => {
                if (item.label === "AI Powered") {
                  return (
                    <div key={item.href} className="space-y-2">
                      <div className={cn(
                        "text-sm font-medium",
                        pathname.startsWith("/ai")
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}>
                        {item.label}
                      </div>
                      <div className="pl-4 space-y-2">
                        {aiDropdownItems.map((dropdownItem) => (
                          <div key={dropdownItem.href}>
                            {dropdownItem.enabled ? (
                              <Link
                                href={dropdownItem.href}
                                className="block text-sm text-gray-600 hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {dropdownItem.label}
                              </Link>
                            ) : (
                              <span className="block text-sm text-gray-400">
                                {dropdownItem.label}
                                <span className="text-xs ml-2">(Coming Soon)</span>
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                }
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
            <div className="pt-4 border-t">
              <Button asChild className="w-full">
                <Link href={SITE.ctas.primary.href}>
                  {SITE.ctas.primary.label}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
