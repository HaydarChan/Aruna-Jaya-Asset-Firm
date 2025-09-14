import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Jeremy Nico Estrada Sitorus",
      role: "Capital Market Analyst",
      specialization: "Financial, Energy",
      bio: "Jeremy specializes in financial markets and energy sector investments, providing in-depth analysis of equity performance and energy market trends to support informed decision-making.",
      image: "/jeremy.png",
    },
    {
      name: "Aisyah Ittaqi",
      role: "Capital Market Analyst",
      specialization: "Basic Industry, Health",
      bio: "Aisyah focuses on the basic industry and healthcare sectors, identifying growth opportunities and assessing market dynamics to optimize portfolio strategies.",
      image: "/professional-asian-businesswoman-headshot.jpg",
    },
    {
      name: "Nindya Qurrota 'Aini",
      role: "Capital Market Analyst",
      specialization: "Market Analysis, Economic Forecasting",
      bio: "Nindya is an expert in market analysis and economic forecasting, delivering insights into macroeconomic trends and their impact on capital market movements.",
      image: "/professional-hispanic-businessman-headshot.jpg",
    },
    {
      name: "Nataliana Alma",
      role: "Capital Market Analyst",
      specialization: "Basic materials, Properties",
      bio: "Nataliana has extensive knowledge in basic materials and property investments, evaluating sector performance and identifying long-term value opportunities.",
      image: "/professional-businesswoman-headshot.png",
    },
    {
      name: "Shabrina Maharani",
      role: "Capital Market Analyst",
      specialization: "Properties, Telecommunications",
      bio: "Shabrina focuses on the property and telecommunications sectors, analyzing market shifts and investment prospects to deliver strategic recommendations.",
      image: "/shabrina.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
              Meet the Professionals Behind <span className="text-primary">Your Success</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our team combines decades of Wall Street experience with innovative thinking to deliver exceptional
              results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border hover:border-primary/20 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary/10 group-hover:border-primary/20 transition-colors"
                    />
                  </div>
                  <CardTitle className="text-xl text-foreground">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      <strong>Specialization:</strong> {member.specialization}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
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
