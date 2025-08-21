"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SITE } from "@/content/site"

export function CTABanner() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container text-center">
        <h2
          className="text-3xl lg:text-4xl font-bold mb-4"
        >
          Let&apos;s build the future together!
        </h2>
        <p
          className="text-lg mb-8 max-w-2xl mx-auto"
        >
          Ready to transform your digital presence and drive measurable growth? 
          Let&apos;s discuss your goals and create a strategy that delivers results.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" variant="secondary">
            <Link href={SITE.ctas.primary.href}>
              {SITE.ctas.primary.label}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            <Link href={SITE.ctas.secondary.href}>
              {SITE.ctas.secondary.label}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
