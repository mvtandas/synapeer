import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Synapeer Technologies Inc. - Where Marketing and AI Converge",
    template: "%s - Synapeer"
  },
  description: "We craft data-driven marketing strategies with expertise in Performance Marketing, SEO, Product Analytics, Amazon Advertising, and Programmatic Advertising to help businesses maximize growth.",
  keywords: ["digital marketing", "AI", "performance marketing", "SEO", "analytics", "Amazon advertising"],
  authors: [{ name: "Synapeer Technologies Inc." }],
  creator: "Synapeer Technologies Inc.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://synapeer.com",
    title: "Synapeer Technologies Inc. - Where Marketing and AI Converge",
    description: "We craft data-driven marketing strategies with expertise in Performance Marketing, SEO, Product Analytics, Amazon Advertising, and Programmatic Advertising to help businesses maximize growth.",
    siteName: "Synapeer Technologies Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synapeer Technologies Inc. - Where Marketing and AI Converge",
    description: "We craft data-driven marketing strategies with expertise in Performance Marketing, SEO, Product Analytics, Amazon Advertising, and Programmatic Advertising to help businesses maximize growth.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
