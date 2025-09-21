'use client'
import { motion, useReducedMotion } from "framer-motion"
import { TrendingUp, Zap, Shield } from "lucide-react"

export default function Loading() {
  const prefersReducedMotion = useReducedMotion()

  // Pulse animation for the main loader
  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  // Rotating animation for orbit
  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  }

  // Staggered animation for loading dots
  const dotVariants = {
    animate: (i) => ({
      y: [0, -20, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut",
      },
    }),
  }

  // Floating icons animation
  const iconFloatVariants = {
    animate: (delay) => ({
      y: [-5, 5, -5],
      x: [-2, 2, -2],
      rotate: [-2, 2, -2],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      },
    }),
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      {!prefersReducedMotion && (
        <>
          {/* Subtle background grid */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Floating background elements */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/5 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-primary/8 blur-lg"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        </>
      )}

      <div className="relative z-10 text-center space-y-8">
        {/* Main Logo/Icon Area */}
        <motion.div 
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Central pulse circle */}
          <motion.div
            className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center relative"
            variants={prefersReducedMotion ? {} : pulseVariants}
            animate={prefersReducedMotion ? "" : "animate"}
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center"
              variants={prefersReducedMotion ? {} : pulseVariants}
              animate={prefersReducedMotion ? "" : "animate"}
              style={{ animationDelay: '0.5s' }}
            >
              <TrendingUp className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>

          {/* Orbital ring with icons */}
          {!prefersReducedMotion && (
            <motion.div
              className="absolute inset-0 w-40 h-40 rounded-full border border-primary/20"
              variants={orbitVariants}
              animate="animate"
              style={{ margin: 'auto' }}
            >
              {/* Floating icons on the orbit */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: -360,
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <div className="w-6 h-6 rounded-full bg-primary/40 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-primary" />
                </div>
              </motion.div>
              
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                animate={{
                  rotate: -360,
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <div className="w-6 h-6 rounded-full bg-primary/40 flex items-center justify-center">
                  <Shield className="w-3 h-3 text-primary" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Company Name */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-2xl md:text-3xl font-italiana text-foreground">
            Aruna Jaya Capital
          </h1>
          <p className="text-sm text-muted-foreground font-dm-sans font-light">
            Preparing your investment portfolio
          </p>
        </motion.div>

        {/* Loading Dots */}
        <motion.div 
          className="flex items-center justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/60"
              variants={prefersReducedMotion ? {} : dotVariants}
              animate={prefersReducedMotion ? "" : "animate"}
              custom={i}
            />
          ))}
        </motion.div>

        {/* Loading Progress Text */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.p 
            className="text-xs text-muted-foreground font-dm-sans"
            animate={prefersReducedMotion ? {} : {
              opacity: [0.5, 1, 0.5],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            Analyzing market data...
          </motion.p>
        </motion.div>

        {/* Subtle progress bar */}
        <motion.div
          className="w-48 h-1 bg-muted rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-primary/60 rounded-full"
            animate={prefersReducedMotion ? {} : {
              x: ["-100%", "100%"],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            style={{ width: "30%" }}
          />
        </motion.div>
      </div>
    </div>
  )
}