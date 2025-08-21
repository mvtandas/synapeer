"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

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
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Digital Marketing */}
      <div
        className="relative bg-gray-900 text-white flex items-center justify-center p-8 lg:p-16"
      >
        <div className="max-w-md space-y-6 text-center lg:text-left">
          <h1
            className="text-4xl lg:text-5xl font-bold leading-tight"
          >
            {leftTitle}
          </h1>
          <p
            className="text-lg text-gray-300 leading-relaxed"
          >
            {leftSubtext}
          </p>
          <div
          >
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href={leftCtaHref}>
                {leftCtaLabel}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side - AI Applications */}
      <div
        className="relative bg-white text-gray-900 flex items-center justify-center p-8 lg:p-16"
      >
        <div className="max-w-md space-y-6 text-center lg:text-left">
          <h1
            className="text-4xl lg:text-5xl font-bold leading-tight"
          >
            {rightTitle}
          </h1>
          <p
            className="text-lg text-gray-600 leading-relaxed"
          >
            {rightSubtext}
          </p>
          <div
          >
            <Button asChild size="lg" variant="outline">
              <Link href={rightCtaHref}>
                {rightCtaLabel}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
