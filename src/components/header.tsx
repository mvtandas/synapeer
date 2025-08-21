"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { SITE } from "@/content/site"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

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
        <Link href="/" className="flex items-center space-x-2">
          <img 
            src="/logo.png" 
            alt="Synapeer Logo" 
            className="h-16 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {SITE.nav.map((item) => (
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
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild className={cn(
            "transition-all duration-300",
            "bg-primary text-primary-foreground hover:bg-primary/90"
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
              {SITE.nav.map((item) => (
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
              ))}
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
