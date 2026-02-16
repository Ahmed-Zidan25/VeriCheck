'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const trustIndicators = [
    { label: '20+', subtext: 'Industries Served' },
    { label: '10K+', subtext: 'Inspections Completed' },
    { label: '98%', subtext: 'Client Satisfaction' },
  ]

  return (
    <section
      id="hero-section"
      /* Increased pt-32 to provide breathing room under the fixed Header */
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-vericheck-navy pt-32"
    >
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/textiles.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight"
              variants={itemVariants}
            >
              VeriCheck
            </motion.h1>
            <motion.div
              className="h-1.5 w-20 bg-gradient-to-r from-vericheck-blue to-vericheck-lime mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <motion.p
              className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto font-medium"
              variants={itemVariants}
            >
              Precision in Every Detail, Trust in Every Check
            </motion.p>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            VeriCheck is a leading Third Party Inspection Company in Egypt providing professional Pre Shipment Inspection, AQL Inspection (ISO 2859-1), and Quality Control Services.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center items-center pt-4"
            variants={itemVariants}
          >
            <Link href="#contact">
              <Button className="bg-vericheck-lime hover:bg-vericheck-lime/90 text-vericheck-navy font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(118,188,33,0.4)]">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Indicators - Positioned to avoid clash with Scroll Indicator */}
        <motion.div
          className="mt-12 md:mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto relative z-20 pb-20"
          variants={containerVariants}
        >
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              className="text-center space-y-1 backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/20 hover:border-vericheck-lime/50 transition-all shadow-2xl"
              variants={itemVariants}
              whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <div className="text-xl sm:text-3xl font-extrabold text-vericheck-lime">
                {indicator.label}
              </div>
              <div className="text-[10px] sm:text-sm font-medium uppercase tracking-wider text-white/80">
                {indicator.subtext}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator - Positioned lower to avoid the statistics cards */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-vericheck-lime rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}