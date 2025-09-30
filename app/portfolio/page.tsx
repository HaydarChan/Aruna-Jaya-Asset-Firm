'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PortfolioData } from "@/components/portfolio-data"
import { EmbeddedSheets } from "@/components/embedded-sheets"
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
              <FileBarChart2 className="h-4 w-4" />
              <span className="text-sm tracking-wide">Live Portfolio</span>
            </div>

            <h1 className="font-italiana text-4xl md:text-6xl text-white text-balance drop-shadow-lg">
              Portfolio <span className="text-primary">Dashboard</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-pretty drop-shadow">
              Real-time portfolio performance, holdings analysis, and team member allocations from our investment strategy.
            </p>

          </div>
        </div>
      </section>

      {/* Embedded Google Sheets Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-italiana text-3xl md:text-4xl text-foreground mb-3">Live Portfolio Data</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-time portfolio tracking and team performance data directly from our Google Sheets.
            </p>
          </div>

          <EmbeddedSheets 
            sheetUrl="https://docs.google.com/spreadsheets/d/1RWh7EP91z8F-V34piaL7iV4PNkZ02UNU0mZc2MCaQX4/edit?gid=855230315#gid=855230315"
            title="Aruna Jaya Capital Portfolio"
          />
        </div>
      </section>

      {/* Portfolio Data Section */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-italiana text-3xl md:text-4xl text-foreground mb-3">Portfolio Overview</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Current holdings, sector allocation, and team performance metrics from our investment strategy.
            </p>
          </div>

          <PortfolioData />
        </div>
      </section>

      <Footer />
    </div>
  )
}