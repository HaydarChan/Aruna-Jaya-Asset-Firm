import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Shield, Users, BarChart3, Target, Award, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/vid.mp4" type="video/mp4" />
          {/* Optionally add a fallback image */}
          Your browser does not support the video tag.
        </video>
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance drop-shadow-lg">
              Empowering Your Investments
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto text-pretty drop-shadow">
              Professional capital market services with expert guidance, innovative strategies, and proven results for
              your financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="outline"
                className="border-white-600 text-white hover:bg-red-600/10 bg-transparent"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "$2.5B+", label: "Assets Under Management" },
              { value: "500+", label: "Active Clients" },
              { value: "15+", label: "Years Experience" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Comprehensive Financial Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From investment advisory to portfolio management, we provide end-to-end solutions for your financial
              goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Investment Advisory",
                description:
                  "Expert guidance on market opportunities and investment strategies tailored to your risk profile.",
              },
              {
                icon: Shield,
                title: "Risk Management",
                description: "Comprehensive risk assessment and mitigation strategies to protect your investments.",
              },
              {
                icon: BarChart3,
                title: "Portfolio Management",
                description: "Active portfolio management with regular rebalancing and performance optimization.",
              },
              {
                icon: Target,
                title: "Financial Planning",
                description: "Long-term financial planning to help you achieve your wealth accumulation goals.",
              },
              {
                icon: Award,
                title: "Market Research",
                description: "In-depth market analysis and research reports to inform your investment decisions.",
              },
              {
                icon: Users,
                title: "Wealth Management",
                description: "Personalized wealth management services for high-net-worth individuals and families.",
              },
            ].map((service, index) => (
              <Card key={index} className="border-border hover:border-primary/20 transition-colors group">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Stock Criteria</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our systematic approach to evaluating investment opportunities based on fundamental analysis and market
              dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Robust Financial Performance",
                description:
                  "Strong revenue growth, healthy profit margins, and consistent earnings that demonstrate sustainable business models.",
              },
              {
                icon: Shield,
                title: "Positive Market Sentiments",
                description:
                  "Favorable market outlook, investor confidence, and positive analyst coverage supporting long-term growth potential.",
              },
            ].map((service, index) => (
              <Card key={index} className="border-border hover:border-primary/20 transition-colors group">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Why Choose Aruna Jaya Capital?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "Dawn of New Opportunities",
                    description: "Like Aruna (dawn), we illuminate new investment possibilities and market insights.",
                  },
                  {
                    icon: Shield,
                    title: "Victory-Oriented Approach",
                    description:
                      "Jaya (victory) guides our commitment to achieving positive outcomes in capital markets.",
                  },
                  {
                    icon: Users,
                    title: "Collaborative Excellence",
                    description:
                      "Our team shares equal responsibility in developing comprehensive investment strategies.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/financial-market-analysis-chart.jpg"
                  alt="Capital Market Analysis - Financial charts and market data visualization"
                  className="w-full h-96 object-cover"
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Start Your Investment Journey Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Get personalized investment advice from our expert team and take control of your financial future.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
