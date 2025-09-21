'use client'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { TrendingUp, Shield, Users, Zap, Send } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion()

  const fadeInUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6 } },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const slideInImg = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        className="relative py-24 lg:py-32 bg-gradient-to-br from-background to-muted/30"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={stagger()}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center space-y-12" variants={stagger(0.15)}>
            <div className="space-y-6">
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-italiana text-foreground leading-tight"
                variants={fadeInUp}
              >
                Guiding Your Capital Towards
                <br />
                <motion.span className="text-primary inline-block" variants={scaleIn}>
                  Sustainable Growth
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-dm-sans font-light leading-relaxed"
                variants={fadeInUp}
              >
                Aruna Jaya Capital is an asset management firm built on deep research, disciplined market analysis, and a long-term, victory-oriented investing philosophy.
              </motion.p>
            </div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={fadeIn}>
              <motion.div whileHover={{ scale: prefersReducedMotion ? 1 : 1.04 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-dm-sans font-medium transition-all duration-300"
                >
                  Explore Our Portfolio <Send />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* What We Do — At a Glance (replacing Investment Philosophy & Criteria) */}
      <motion.section
        className="py-24 bg-muted/20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger()}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={stagger(0.1)}>
            <motion.h2
              className="text-4xl md:text-5xl font-italiana text-foreground mb-6"
              variants={fadeInUp}
            >
              What We Do — At a Glance
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto font-dm-sans font-light leading-relaxed"
              variants={fadeInUp}
            >
              A clear, repeatable workflow from discovery to reporting. Learn the full
              philosophy on our{" "}
              <a href="/about" className="text-primary underline underline-offset-4">
                About
              </a>{" "}
              page.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Research",
                description:
                  "Bottom-up sector coverage and idea generation backed by data and primary sources.",
              },
              {
                icon: TrendingUp,
                title: "Portfolio Build",
                description:
                  "Sizing by conviction and risk; staged entries and exits to improve average price.",
              },
              {
                icon: Shield,
                title: "Risk Controls",
                description:
                  "Pre-defined downside, diversification, liquidity checks, and post-mortems for every trade.",
              },
              {
                icon: Users,
                title: "Reporting",
                description:
                  "Transparent ‘what we own & why’, KPI tracking, and periodic letters to stakeholders.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: prefersReducedMotion ? 0 : -4 }}
              >
                <motion.div
                  className="h-full bg-background rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                  variants={scaleIn}
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5"
                    initial={false}
                    whileHover={{ scale: prefersReducedMotion ? 1 : 1.06 }}
                  >
                    <item.icon className="h-7 w-7 text-primary" />
                  </motion.div>
                  <motion.h3
                    className="text-xl font-italiana text-foreground mb-3"
                    variants={fadeInUp}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="text-muted-foreground leading-relaxed font-dm-sans font-light"
                    variants={fadeInUp}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mini-CTA row */}
          <motion.div
            className="mt-14 flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <a href="/about">
              <Button
                size="lg"
                className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-dm-sans font-medium transition-all duration-300"
              >
                Learn Our Philosophy <Send className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer px-8 py-3 rounded-full font-dm-sans font-medium transition-all duration-300"
              >
                View Portfolio
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="py-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger()}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div className="space-y-12" variants={stagger(0.1)}>
              <motion.div variants={fadeInUp}>
                <h2 className="text-4xl md:text-5xl font-italiana text-foreground mb-6">
                  Why Choose
                  <br />
                  <span className="text-primary">Aruna Jaya Capital?</span>
                </h2>
              </motion.div>

              <motion.div className="space-y-8" variants={stagger(0.15)}>
                {[
                  {
                    icon: Zap,
                    title: "Aruna — First Light",
                    description:
                      "We surface opportunities early and act with clarity—like the dawn that reveals the path ahead.",
                  },
                  {
                    icon: Shield,
                    title: "Jaya — Discipline to Win",
                    description:
                      "Repeatable process from research to post-trade review. Protect first, compound next, chase noise never.",
                  },
                  {
                    icon: Users,
                    title: "Analyst-Driven Coverage",
                    description:
                      "Each analyst owns specific sectors to ensure depth, accountability, and transparent ‘what we own and why.’",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-6"
                    variants={fadeInUp}
                    whileHover={{ x: prefersReducedMotion ? 0 : 3 }}
                  >
                    <motion.div
                      className="bg-primary/10 p-3 rounded-xl flex-shrink-0"
                      whileHover={{ rotate: prefersReducedMotion ? 0 : 2, scale: prefersReducedMotion ? 1 : 1.05 }}
                    >
                      <feature.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-italiana text-foreground mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed font-dm-sans font-light">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="relative" variants={slideInImg}>
              <motion.div className="rounded-3xl overflow-hidden shadow-2xl" variants={scaleIn}>
                <motion.img
                  src="/financial-market-analysis-chart.jpg"
                  alt="Aruna Jaya Capital — disciplined market analysis with price, volume, and fundamentals"
                  className="w-full h-[500px] object-cover"
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-24 bg-primary/5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={stagger(0.05)}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div className="space-y-8" variants={stagger(0.12)}>
            <motion.h2 className="text-4xl md:text-5xl font-italiana text-foreground" variants={fadeInUp}>
              Ready to Compound
              <br />
              <span className="text-primary">With Discipline</span>
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto font-dm-sans font-light leading-relaxed"
              variants={fadeInUp}
            >
              Get a tailored strategy—from discovery to execution—aligned with your risk profile and long-term goals.
            </motion.p>

            <motion.div
              className="pt-4"
              variants={fadeIn}
              whileHover={{ y: prefersReducedMotion ? 0 : -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-dm-sans font-medium transition-all duration-300"
              >
                Request Consultation <Send />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
