"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Jalan Ganesha 10", "Bandung, 40132", "Indonesia"],
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+62 11 111111"],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@ajcapital.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM WIB", "Saturday - Sunday: Closed"],
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
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Visit our office or reach out to learn more about Aruna Jaya Capital.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{info.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Location</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Located in Bandung, West Java, Indonesia. We welcome visitors during business hours.
            </p>
          </div>

          <Card className="border-border overflow-hidden">
            <div className="h-96 flex items-center justify-center relative">
              <img
                src="/itb.png"
                alt="ITB Location"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="absolute inset-0 bg-black/40 z-10" />
              <div className="text-center relative z-20">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Aruna Jaya Capital</h3>
                <p className="text-white text-lg">
                  Jalan Ganesha 10
                  <br />
                  Bandung, 40132
                  <br />
                  Indonesia
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
