"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "@motionone/react"

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
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gray-900 text-white flex items-center justify-center p-8 lg:p-16"
      >
        <div className="max-w-md space-y-6 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold leading-tight"
          >
            {leftTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            {leftSubtext}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href={leftCtaHref}>
                {leftCtaLabel}
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - AI Applications */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white text-gray-900 flex items-center justify-center p-8 lg:p-16"
      >
        <div className="max-w-md space-y-6 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold leading-tight"
          >
            {rightTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            {rightSubtext}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button asChild size="lg" variant="outline">
              <Link href={rightCtaHref}>
                {rightCtaLabel}
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
