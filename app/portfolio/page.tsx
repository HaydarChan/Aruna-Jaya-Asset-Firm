import { CardDescription } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Building2, Home, FileText, Download, ExternalLink } from "lucide-react"

export default function PortfolioPage() {
  const teamMembers = [
    {
      name: "Alexander Johnson",
      role: "Investment Analyst",
      experience: "8+ years",
      education: "MBA Finance, CFA Level II",
      specialization: "Strategic Planning, Market Analysis",
      bio: "Alexander specializes in strategic planning and market analysis, contributing equally to our investment committee decisions.",
      image: "/professional-business-executive-headshot.jpg",
    },
    {
      name: "Sarah Chen",
      role: "Portfolio Strategist",
      experience: "7+ years",
      education: "CFA, MS Financial Engineering",
      specialization: "Portfolio Management, Risk Assessment",
      bio: "Sarah focuses on portfolio optimization and risk management, sharing equal responsibility in strategic planning.",
      image: "/professional-asian-businesswoman-headshot.jpg",
    },
    {
      name: "Michael Rodriguez",
      role: "Market Research Specialist",
      experience: "6+ years",
      education: "PhD Economics, CFA Level I",
      specialization: "Market Analysis, Economic Forecasting",
      bio: "Michael conducts comprehensive market research and economic analysis, contributing equally to investment decisions.",
      image: "/professional-hispanic-businessman-headshot.jpg",
    },
    {
      name: "Emily Thompson",
      role: "Financial Planning Associate",
      experience: "5+ years",
      education: "CFP, BA Business Administration",
      specialization: "Wealth Planning, Financial Analysis",
      bio: "Emily develops comprehensive financial planning strategies, sharing equal responsibility in client advisory processes.",
      image: "/professional-businesswoman-headshot.png",
    },
    {
      name: "David Kim",
      role: "Technology & Analytics Specialist",
      experience: "6+ years",
      education: "MS Computer Science, Data Analytics",
      specialization: "Financial Technology, Quantitative Analysis",
      bio: "David develops analytical tools and technology solutions, contributing equally to our research capabilities.",
      image: "/professional-asian-businessman-headshot.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background image */}
        <img
          src="/document.png"
          alt="Document"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-balance drop-shadow-lg">
              Portfolio <span className="text-yellow-400">Reports</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto text-pretty drop-shadow">
              Access comprehensive portfolio analysis documents and investment strategy reports prepared by our research
              team.
            </p>
          </div>
        </div>
      </section>

      {/* No Document Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Documents Available</h2>
            <p className="text-muted-foreground">
              There are no portfolio reports available at this time. Please check back later.
            </p>
          </div>
        </div>
      </section>

      {/* Document Preview Section */}
      {/* kode di line */}

      {/* Available Reports */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Available Reports</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Browse our collection of portfolio analysis documents and investment research reports.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolioReports.map((report, index) => (
              <Card key={index} className="border-border hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{report.title}</CardTitle>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {report.type}
                    </Badge>
                    <p className="text-muted-foreground text-sm leading-relaxed">{report.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Reporting Period:</span>
                      <span className="font-medium text-foreground">{report.period}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Document Length:</span>
                      <span className="font-medium text-foreground">{report.pages}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border space-y-2">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Online
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
