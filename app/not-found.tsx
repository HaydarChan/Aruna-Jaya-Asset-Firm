'use client'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, TrendingUp } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"

export default function NotFound() {
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

  const stagger = (delay = 0) => ({
    hidden: {},
    show: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.12,
      },
    },
  })

  // Floating animation for background elements
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <motion.section
        className="flex-1 flex items-center justify-center py-16 relative overflow-hidden"
        initial="hidden"
        animate="show"
        variants={stagger(0.1)}
      >
        {/* Background Elements */}
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute top-20 left-16 w-16 h-16 rounded-full bg-primary/5 backdrop-blur-sm"
              variants={floatingVariants}
              animate="animate"
            />
            <motion.div
              className="absolute top-32 right-20 w-12 h-12 rotate-45 bg-primary/10 backdrop-blur-sm"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '1s' }}
            />
            <motion.div
              className="absolute bottom-32 left-32 w-20 h-20 rounded-full bg-primary/8 backdrop-blur-sm"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '2s' }}
            />
            <motion.div
              className="absolute bottom-20 right-16 w-8 h-8 rounded-full bg-primary/15 backdrop-blur-sm"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '3s' }}
            />
          </>
        )}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div className="space-y-12" variants={stagger(0.15)}>
            {/* 404 Number */}
            <motion.div variants={scaleIn}>
              <motion.h1 
                className="text-8xl md:text-9xl font-italiana text-primary/20 leading-none"
                whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                404
              </motion.h1>
            </motion.div>

            {/* Main Content */}
            <motion.div className="space-y-6" variants={stagger(0.1)}>
              <motion.h2 
                className="text-3xl md:text-4xl font-italiana text-foreground"
                variants={fadeInUp}
              >
                Portfolio Not Found
              </motion.h2>
              
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl mx-auto font-dm-sans font-light leading-relaxed"
                variants={fadeInUp}
              >
                It seems the investment opportunity you're looking for has moved to a different market. 
                Let's redirect your capital to more promising ventures.
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeIn}
            >
              <motion.div 
                whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/">
                  <Button
                    size="lg"
                    className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-dm-sans font-medium transition-all duration-300"
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Return to Portfolio
                  </Button>
                </Link>
              </motion.div>

              <motion.div 
                whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="cursor-pointer px-8 py-3 rounded-full font-dm-sans font-medium transition-all duration-300"
                  >
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Explore Our Strategy
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Helpful Links */}
            <motion.div 
              className="pt-8 border-t border-border/50"
              variants={fadeInUp}
            >
              <p className="text-sm text-muted-foreground mb-4 font-dm-sans">
                Looking for something specific? Try these popular sections:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact" },
                  { href: "/research", label: "Research" },
                ].map((link, index) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ y: prefersReducedMotion ? 0 : -2 }}
                    variants={fadeInUp}
                  >
                    <Link 
                      href={link.href}
                      className="text-primary hover:text-primary/80 font-dm-sans text-sm underline underline-offset-4 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}