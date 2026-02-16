'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HeroSection() {
  // State to track if the video fails to load
  const [videoError, setVideoError] = useState(false)

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
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-vericheck-navy pt-32"
    >
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoError(true)} // Switches to image if URL breaks
            className="w-full h-full object-cover"
          >
            <source 
              src="https://x2lrseajbmyxpyio.public.blob.vercel-storage.com/1164918_Man_Business_3840x2160.mp4" 
              type="video/mp4" 
            />
          </video>
        ) : (
          /* Fallback Placeholder Image - Only shows if video fails */
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/textiles.jpg')" }}
          />
        )}

        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <motion.div
          className="text-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight"
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
            VeriCheck is a leading Third Party Inspection Company in Egypt providing professional Pre Shipment Inspection and Quality Control.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center items-center"
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

        {/* Analytics/Trust Indicators */}
        <motion.div
          className="mt-6 md:mt-8 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto relative z-20 pb-20"
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

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center opacity-40">
          <div className="w-1 h-1.5 bg-vericheck-lime rounded-full mt-1.5" />
        </div>
      </motion.div>
    </section>
  )
}