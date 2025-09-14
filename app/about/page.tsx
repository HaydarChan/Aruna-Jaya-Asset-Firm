import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Target, Heart, Award, Users, TrendingUp, Shield, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
  {/* Background image */}
  <img
    src="/dawn.png"
    alt="Dawn"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
  {/* Optional overlay for better text contrast */}
  <div className="absolute inset-0 bg-black/40 z-10" />
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
    <div className="text-center space-y-8">
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg text-balance">
        From Dawn to <span className="text-yellow-400">Victory</span>
      </h1>
      <p className="text-xl text-white max-w-3xl mx-auto text-pretty drop-shadow">
        Aruna Jaya Capital embodies the Sanskrit meaning of dawn (अरुण) and victory, representing new
        beginnings and positive energy in capital market investment and management. Created to fulfill the
        requirements of MB0413 Capital Market.
      </p>
    </div>
  </div>
</section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-border text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  To illuminate the path of capital market understanding like the dawn (Aruna), bringing new insights
                  and positive energy to investment philosophy and portfolio development strategies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl text-foreground">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  To achieve victory (Jaya) in capital market education by demonstrating comprehensive investment
                  approaches that bring growth, prosperity, and understanding to the field of capital management.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl text-foreground">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Collaborative excellence, shared responsibility, and innovative thinking guide our approach. We
                  believe in equal contribution from all team members in developing comprehensive capital market
                  strategies.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Our Philosophy</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  The name Aruna (अरुण) comes from Sanskrit, meaning the light of dawn or sunrise, symbolizing new
                  beginnings and positive energy. Combined with Jaya, which means victory, the name reflects our
                  aspiration to bring growth, prosperity, and success in capital market understanding.
                </p>
                <p>
                  Our investment philosophy centers on illuminating new opportunities like the dawn brings light to
                  darkness. We believe in comprehensive market analysis, strategic portfolio development, and
                  collaborative decision-making processes.
                </p>
                <p>
                  This approach was developed to demonstrate excellence in capital market concepts and fulfill the
                  academic requirements of MB0413 Capital Market, showcasing how theoretical knowledge translates into
                  practical investment strategies.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Award, label: "Sanskrit Origin", value: "अरुण" },
                    { icon: Users, label: "Team Approach", value: "Equal" },
                    { icon: TrendingUp, label: "Focus Area", value: "Growth" },
                    { icon: Shield, label: "Philosophy", value: "Victory" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-background/50 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Investment Philosophy</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              How we develop our portfolio strategies and approach capital market opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Dawn Analysis",
                description:
                  "Like dawn reveals the landscape, we illuminate market opportunities through comprehensive analysis.",
              },
              {
                icon: TrendingUp,
                title: "Growth Focus",
                description:
                  "Our portfolio development emphasizes sustainable growth and long-term value creation strategies.",
              },
              {
                icon: Zap,
                title: "Innovation Approach",
                description:
                  "We embrace new methodologies and analytical tools to enhance portfolio performance insights.",
              },
              {
                icon: Users,
                title: "Collaborative Strategy",
                description:
                  "Equal responsibility among team members ensures comprehensive evaluation of all investment decisions.",
              },
            ].map((principle, index) => (
              <Card key={index} className="border-border text-center hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Core Principles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              The fundamental beliefs that guide our investment philosophy and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Risk Management",
                description: "Capital preservation is our first priority in every investment decision.",
              },
              {
                icon: TrendingUp,
                title: "Long-term Focus",
                description: "We build portfolios designed to compound wealth over decades, not quarters.",
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "Embracing new technologies and strategies to enhance client outcomes.",
              },
              {
                icon: Users,
                title: "Client Partnership",
                description: "Your success is our success. We align our interests with yours completely.",
              },
            ].map((principle, index) => (
              <Card key={index} className="border-border text-center hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
