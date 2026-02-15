'use client'

import { motion } from 'framer-motion'
import { MapPin, Zap, Users } from 'lucide-react'

const advantages = [
  {
    icon: MapPin,
    title: 'Nationwide Coverage',
    description:
      'Strategic presence across Egypt with rapid response teams in all major industrial hubs and ports.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description:
      'Quick inspection scheduling and reporting. Same-day inspections available for urgent requirements.',
  },
  {
    icon: Users,
    title: 'Local Expertise',
    description:
      'Deep understanding of Egyptian regulations, customs procedures, and regional business practices.',
  },
]

export default function EgyptAdvantage() {
  return (
    <section className="py-20 bg-vericheck-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-vericheck-white mb-4 text-pretty">
            Egypt Advantage
          </h2>
          <p className="text-lg text-vericheck-grey max-w-2xl mx-auto leading-relaxed">
            Why leading companies choose VeriCheck for Egyptian inspections
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-vericheck-blue/20 to-vericheck-lime/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card Content */}
                <div className="relative p-8 border-2 border-vericheck-blue/30 rounded-xl group-hover:border-vericheck-lime/50 transition-colors duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-4 inline-block p-3 bg-vericheck-lime rounded-lg"
                  >
                    <Icon className="w-6 h-6 text-vericheck-navy" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-vericheck-white mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-vericheck-grey leading-relaxed">
                    {advantage.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-vericheck-lime to-vericheck-blue rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 bg-gradient-to-r from-vericheck-blue to-vericheck-lime/20 rounded-xl text-center border border-vericheck-lime/30"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-vericheck-white mb-4">
            Ready to work with Egypt's most trusted inspection partner?
          </h3>
          <p className="text-vericheck-grey mb-8 text-lg max-w-2xl mx-auto">
            Get in touch today to discuss your inspection needs and receive a customized quote
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
            className="px-10 py-3 bg-vericheck-lime hover:bg-vericheck-lime/90 text-vericheck-navy font-bold rounded-lg transition-colors text-base"
          >
            Request a Quote Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
