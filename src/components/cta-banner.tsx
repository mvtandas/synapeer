"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SITE } from "@/content/site"

export function CTABanner() {
  return (
    <section className="py-20 bg-white">
      <div className="container text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-black">
          Let&apos;s build the future together!
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-black/70 leading-relaxed">
          Ready to transform your digital presence and drive measurable growth? 
          Let&apos;s discuss your goals and create a strategy that delivers results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-black text-white hover:bg-black/80 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Link href={SITE.ctas.primary.href}>
              {SITE.ctas.primary.label}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105">
            <Link href={SITE.ctas.secondary.href}>
              {SITE.ctas.secondary.label}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
