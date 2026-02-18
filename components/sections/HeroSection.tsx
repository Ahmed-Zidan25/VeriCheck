'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

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
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-vericheck-navy"
    >
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {isMounted && !videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
            className="object-cover w-full h-full opacity-60"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 bg-vericheck-navy" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-vericheck-navy/70 via-transparent to-vericheck-navy" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Precision in <span className="text-vericheck-lime">Inspection</span>
              <br />
              Trust in Quality
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
              Leading technical inspection and quality control services across Egypt.
              Helping businesses ensure safety, compliance, and excellence.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-vericheck-lime hover:bg-white text-vericheck-navy font-bold px-8 py-6 text-lg rounded-full w-full sm:w-auto transition-all duration-300">
              Explore Our Services
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-vericheck-navy font-bold px-8 py-6 text-lg rounded-full w-full sm:w-auto transition-all duration-300">
              Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Analytics/Trust Indicators */}
        <motion.div
          className="mt-12 md:mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto pb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              className="text-center space-y-1 backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/20 hover:border-vericheck-lime/50 transition-all"
              variants={itemVariants}
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
    </section>
  )
}