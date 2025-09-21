'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Portfolio from "../../public/portfolio.jpg"
import { Button } from "@/components/ui/button"
import { Clock, FileBarChart2, Bell, ArrowRight } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={Portfolio}
            alt="Analysts reviewing portfolio performance and market data"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-white/90 border border-white/20">
              <Clock className="h-4 w-4" />
              <span className="text-sm tracking-wide">Coming Soon</span>
            </div>

            <h1 className="font-italiana text-4xl md:text-6xl text-white text-balance drop-shadow-lg">
              Portfolio <span className="text-primary">Reports</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-pretty drop-shadow">
              Access comprehensive portfolio analysis and strategy write-ups prepared by our research team—soon to be
              published here.
            </p>

          </div>
        </div>
      </section>

      {/* Placeholder / Coming Soon Section */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-italiana text-3xl md:text-4xl text-foreground mb-3">What to Expect</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We’re finalizing layouts and QA for the first release. Here’s a preview of sections that will appear.
            </p>
          </div>

          {/* Skeleton grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Monthly Portfolio Letter", desc: "Performance, attribution, and positioning changes." },
              { title: "Holdings Snapshot", desc: "Top positions with thesis summaries and risk notes." },
              { title: "Market Outlook", desc: "Macro signals and sector-level opportunities." },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border/50 bg-background/60 p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <FileBarChart2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-italiana text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>

                {/* Skeleton lines */}
                <div className="space-y-3">
                  <div className="h-3 w-full rounded bg-muted animate-pulse" />
                  <div className="h-3 w-11/12 rounded bg-muted animate-pulse" />
                  <div className="h-3 w-9/12 rounded bg-muted animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              First publication target: <span className="text-foreground font-medium">Coming Soon</span>.  
              For inquiries or early access, contact our team.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}