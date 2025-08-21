"use client"

import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  bullets: string[]
  href: string
}

export function ServiceCard({ title, description, icon: Icon, bullets, href }: ServiceCardProps) {
  return (
    <div className="group relative h-full">
      {/* Enhanced hover background effect */}
      <div className="absolute inset-0 bg-black/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      {/* Card with improved black and white styling */}
      <Card className="relative h-full bg-white backdrop-blur-sm border border-black/10 hover:border-black/30 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 overflow-hidden">
        {/* Enhanced animated border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/5 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
        
        {/* Improved shimmer effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer rounded-xl"></div>
        
        <CardHeader className="relative z-10 pb-6">
          <div className="flex items-start space-x-4">
            {/* Enhanced icon container with better contrast */}
            <div className="relative">
              <div className="p-4 bg-black/5 rounded-xl group-hover:bg-black/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 border border-black/10">
                <Icon className="h-7 w-7 text-black group-hover:text-black/80 transition-colors duration-300" />
              </div>
              {/* Enhanced icon glow effect */}
              <div className="absolute inset-0 bg-black/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="flex-1 min-w-0">
              <CardTitle className="text-xl font-bold text-black group-hover:text-black/80 transition-colors duration-300 leading-tight">
                {title}
              </CardTitle>
            </div>
          </div>
          
          <CardDescription className="text-base text-black/70 leading-relaxed mt-4 group-hover:text-black/80 transition-colors duration-300">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="relative z-10 space-y-6">
          {/* Enhanced bullet points with better contrast */}
          <ul className="space-y-3">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start space-x-3 group/item">
                <div className="relative mt-2 flex-shrink-0">
                  <div className="w-2 h-2 bg-black rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-black/30 rounded-full animate-ping"></div>
                </div>
                <span className="text-sm text-black/70 group-hover/item:text-black/90 transition-colors duration-300 leading-relaxed">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
        
        {/* Enhanced corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-black/10 via-black/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-black to-black/60 group-hover:w-full transition-all duration-500"></div>
      </Card>
    </div>
  )
}
