'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
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
    { label: '50+', subtext: 'Industries Served' },
    { label: '10K+', subtext: 'Inspections Completed' },
    { label: '98%', subtext: 'Client Satisfaction' },
  ]

  return (
    <section
      id="hero-section"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-vericheck-navy pt-20"
    >
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Video Element */}
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

        {/* Dark Semi-Transparent Overlay (Scrim) */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
          aria-hidden="true"
        />

        {/* Additional subtle gradient for visual depth */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-vericheck-navy/40 to-transparent"
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
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight text-balance"
              variants={itemVariants}
            >
              VeriCheck
            </motion.h1>
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-vericheck-blue to-vericheck-lime mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <motion.p
              className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto text-balance leading-relaxed"
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
            VeriCheck is a leading Third Party Inspection Company in Egypt providing professional Pre Shipment Inspection, AQL Inspection (ISO 2859-1), and Quality Control Services to reduce shipment risks and ensure product compliance before export.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            variants={itemVariants}
          >
            <Link href="#contact">
              <Button className="bg-vericheck-lime hover:bg-vericheck-lime/90 text-vericheck-navy font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(118,188,33,0.4)]">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            {/* <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-bold text-lg px-8 py-6 rounded-lg backdrop-blur-sm"
            >
              <Play size={20} className="mr-2" />
              Watch Demo
            </Button> */}
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
          variants={containerVariants}
        >
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              className="text-center space-y-2 backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-vericheck-lime">
                {indicator.label}
              </div>
              <div className="text-xs sm:text-sm text-white/70">
                {indicator.subtext}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
