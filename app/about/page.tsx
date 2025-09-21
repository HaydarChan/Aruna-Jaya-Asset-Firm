"use client"
import { motion, useReducedMotion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Shield, Zap } from "lucide-react"
import Image from "next/image"
import Capital from "../../public/capital.jpg"


export default function AboutPage() {
  const prefersReducedMotion = useReducedMotion()

  const fadeInUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  }

  const slideIn = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 36 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  const stagger = (delay = 0) => ({
    hidden: {},
    show: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.12,
      },
    },
  })

  const teamMembers = [
    {
      name: "Jeremy Nico Estrada Sitorus",
      role: "Capital Market Analyst",
      specialization: "Financial, Energy",
      bio: "Jeremy covers financials and energy with a focus on earnings quality, capital allocation, and commodity-linked cycles.",
      image: "/Foto jeco.JPG",
    },
    {
      name: "Aisyah Ittaqi",
      role: "Capital Market Analyst",
      specialization: "Basic Industry, Health",
      bio: "Aisyah tracks basic industry and healthcare, mapping structural demand, input costs, and regulatory impacts.",
      image: "/professional-asian-businesswoman-headshot.jpg",
    },
    {
      name: "Nindya Qurrota 'Aini",
      role: "Capital Market Analyst",
      specialization: "Financial, Infrastructure",
      bio: "Nindya connects macro signals to equity positioning through cycle staging and liquidity conditions.",
      image: "/Foto Nindya.jpg",
    },
    {
      name: "Nataliana Alma",
      role: "Capital Market Analyst",
      specialization: "Technology, Energy",
      bio: "Nataliana focuses on materials and property, evaluating supply-demand, balance sheets, and valuation dispersion.",
      image: "/foto lily.jpg",
    },
    {
      name: "Atqiya Haydar",
      role: "Capital Market Analyst",
      specialization: "Properties, Telecommunications",
      bio: "Shabrina analyzes property and telecom, monitoring pricing power, tenancy metrics, and spectrum/infra cycles.",
      image: "/foto qiya.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero (concise) */}
      <motion.section
        className="relative py-16 lg:py-24 overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={stagger()}
      >
        {/* Background image */}
        <motion.div className="absolute inset-0 z-0" variants={fadeIn}>
          <Image
            src={Capital}
            alt="Capital"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-black/40 z-10"
          variants={fadeIn}
        />
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.h1
            className="font-italiana text-3xl md:text-5xl text-white drop-shadow-lg"
            variants={fadeInUp}
          >
            Aruna Jaya Capital — A New Day, A New Beginning
          </motion.h1>
          <motion.p
            className="text-white/90 max-w-3xl mx-auto text-lg"
            variants={fadeInUp}
          >
            We aspire to bring growth, prosperity, trustworthiness, and stability. At AJ Capital, we turn opportunities
            into sustainable growth through a disciplined approach to public markets.
          </motion.p>
        </div>
      </motion.section>

      {/* Investment Philosophy (only) */}
      <motion.section
        className="py-16 bg-card"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={stagger()}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" variants={stagger(0.08)}>
            <motion.h2
              className="font-italiana text-2xl md:text-4xl text-foreground mb-3"
              variants={fadeInUp}
            >
              Our Investment Philosophy
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              A strict dual-pillar framework:{" "}
              <span className="text-foreground font-medium">proven financial health</span> and{" "}
              <span className="text-foreground font-medium">positive catalysts</span> that create momentum for growth.
              The best investments are born from solid numbers and compelling narratives.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Proven Financial Health",
                desc:
                  "Quality balance sheets, resilient cash flows, healthy margins, and prudent capital allocation as the base case.",
              },
              {
                icon: TrendingUp,
                title: "Positive Catalysts",
                desc:
                  "Earnings inflections, product cycles, regulatory changes, or market structure shifts that accelerate fundamentals.",
              },
              {
                icon: Zap,
                title: "Disciplined Execution",
                desc:
                  "Sizing aligned to risk, staged entries/exits, and continuous review to protect first and compound next.",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: prefersReducedMotion ? 0 : -4 }}
              >
                <motion.div
                  className="h-full border border-border/50 rounded-2xl bg-background text-center"
                  variants={scaleIn}
                >
                  <Card className="border-0 shadow-none">
                    <CardHeader>
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3"
                        whileHover={{ scale: prefersReducedMotion ? 1 : 1.06 }}
                      >
                        <p.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <CardTitle className="text-lg font-italiana">{p.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                        {p.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team (only) */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={stagger()}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" variants={stagger(0.08)}>
            <motion.h2
              className="font-italiana text-2xl md:text-4xl text-foreground mb-3"
              variants={fadeInUp}
            >
              Meet Our <span className="text-primary">Team</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Analyst-driven coverage with clear accountability over sectors—so you always know what we own and why.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((m, i) => (
              <motion.div
                key={i}
                variants={slideIn}
                whileHover={{ y: prefersReducedMotion ? 0 : -3 }}
              >
                <Card className="border-border hover:border-primary/20 transition-colors h-full">
                  <CardHeader className="text-center">
                    <motion.div
                      className="relative mx-auto mb-5"
                      initial={false}
                      whileHover={{ scale: prefersReducedMotion ? 1 : 1.03 }}
                    >
                      <img
                        src={m.image || "/placeholder.svg"}
                        alt={`${m.name} headshot`}
                        className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-primary/10"
                      />
                    </motion.div>
                    <CardTitle className="text-lg font-italiana">{m.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{m.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-center">
                    <motion.div className="text-sm text-muted-foreground" variants={fadeIn}>
                      <strong>Specialization:</strong> {m.specialization}
                    </motion.div>
                    <motion.p
                      className="text-sm text-muted-foreground leading-relaxed"
                      variants={fadeInUp}
                    >
                      {m.bio}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
