'use client'

import { motion } from 'framer-motion'
import { Clipboard, Target, CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/ui/card'

const content = {
  vision: {
    icon: Target,
    title: 'Our Vision',
    points: [
      'Establish a trusted third-party inspection hub in Egypt',
      'Serve international markets across Africa, Asia, and Europe',
      'Deliver transparent and professional quality control',
      'Expand regional and international presence step-by-step',
      'Build trust through consistency and integrity',
      'Focus on delivering measurable results for every client'
    ],
  },
  mission: {
    icon: Clipboard,
    title: 'Our Mission',
    points: [
      'Helping importers and exporters reduce shipment risks before goods leave the factory',
      'Delivering accurate, clear, and professional inspection reports within 24 hours',
      'Applying international standards such as AQL (ISO 2859-1)',
      'Building long-term partnerships based on transparency, integrity, and consistent performance',
      'Expanding our network step by step to better serve regional and international markets.',
    ],
  },
}

export default function VisionMission() {
  return (
    <section id="about" className="py-24 bg-vericheck-grey/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-vericheck-navy mb-4">
            Our Vision & Mission
          </h2>
          <div className="h-1.5 w-20 bg-vericheck-lime mx-auto rounded-full" />
        </motion.div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-8 border-none shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300">
              <div className="mb-6 inline-flex p-4 bg-vericheck-blue/10 rounded-2xl">
                <content.vision.icon className="w-8 h-8 text-vericheck-blue" />
              </div>
              <h3 className="text-2xl font-bold text-vericheck-navy mb-4">
                {content.vision.title}
              </h3>
              <ul className="space-y-4">
                {content.vision.points.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-vericheck-blue shrink-0 mt-1" />
                    <span className="text-vericheck-navy/80 leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-8 border-none shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300">
              <div className="mb-6 inline-flex p-4 bg-vericheck-lime/10 rounded-2xl">
                <content.mission.icon className="w-8 h-8 text-vericheck-lime" />
              </div>
              <h3 className="text-2xl font-bold text-vericheck-navy mb-4">
                {content.mission.title}
              </h3>
              <ul className="space-y-4">
                {content.mission.points.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-vericheck-lime shrink-0 mt-1" />
                    <span className="text-vericheck-navy/80 leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}