'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Clipboard,
  Building2,
  Microscope,
  Truck,
  Users,
  Briefcase,
} from 'lucide-react'
import { Card } from '@/components/ui/card'

const services = [
  {
    icon: Clipboard,
    title: 'Our Vision',
    description: 'To build a trusted and reliable third-party inspection company based in Egypt, serving clients across Africa, Asia, and Europe with transparent, accurate, and professional quality control services.
We aim to grow step by step, expanding our presence regionally and internationally while earning our clients’ trust through consistency, integrity, and measurable results..',
  },
  {
    icon: Building2,
    title: 'Our Mission',
    description: 'At VeriCheck Inspection Services, our mission is to provide reliable and independent third-party inspection services from Egypt to clients across Africa, Asia, and Europe.
We are committed to:
Helping importers and exporters reduce shipment risks before goods leave the factory
Delivering accurate, clear, and professional inspection reports within 24 hours
Applying international standards such as AQL (ISO 2859-1)
Building long-term partnerships based on transparency, integrity, and consistent performance
Expanding our network step by step to better serve regional and international markets.',
  },
  
]

export default function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(services.length).fill(false)
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute('data-index') || '0'
            )
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = containerRef.current?.querySelectorAll('[data-card]')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 bg-vericheck-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-vericheck-navy mb-4 text-pretty">
            Our Vision & Mission
          </h2>
          <p className="text-lg text-vericheck-navy/70 max-w-2xl mx-auto leading-relaxed">
            Comprehensive inspection and quality control solutions tailored to your industry needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          ref={containerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                data-card
                data-index={index}
                initial={{ opacity: 0, y: 30 }}
                animate={visibleCards[index] ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 border-2 border-vericheck-navy/10 hover:border-vericheck-lime hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-white">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mb-4 inline-block p-3 bg-gradient-to-br from-vericheck-blue to-vericheck-lime rounded-lg"
                  >
                    <Icon className="w-6 h-6 text-vericheck-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-vericheck-navy mb-3 group-hover:text-vericheck-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-vericheck-navy/70 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Animated Border Glow on Hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      boxShadow: `inset 0 0 0 2px rgba(118, 188, 33, 0.5)`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
