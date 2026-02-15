'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface Industry {
  id: string
  name: string
  image: string
  description: string
  shortDescription: string
  stats: Array<{ label: string; value: string }>
}

const industries: Industry[] = [
  {
    id: 'textiles',
    name: 'Textiles & Apparel',
    image: '/images/textiles.jpg',
    shortDescription: 'Fabric quality and garment compliance',
    description:
      'Comprehensive quality control for fabric production, garment manufacturing, and apparel exports with international standards compliance.',
    stats: [
      { label: 'Annual Inspections', value: '2,500+' },
      { label: 'Quality Standards', value: '15+' },
      { label: 'Compliance Rate', value: '99.2%' },
    ],
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    image: '/images/oil-gas.jpg',
    shortDescription: 'Pipeline and equipment excellence',
    description:
      'Specialized inspection services for petroleum products, equipment, and infrastructure with API standards and regulatory compliance.',
    stats: [
      { label: 'Certified Inspectors', value: '45+' },
      { label: 'Standards Covered', value: '12+' },
      { label: 'Client Retention', value: '94%' },
    ],
  },
  {
    id: 'food',
    name: 'Food & Agriculture',
    image: '/images/food-agriculture.jpg',
    shortDescription: 'Safety from farm to table',
    description:
      'Rigorous testing and inspection of agricultural commodities and food products with HACCP certification and international food safety compliance.',
    stats: [
      { label: 'Containers Inspected', value: '5,000+' },
      { label: 'Safety Standards', value: '20+' },
      { label: 'Traceability', value: '100%' },
    ],
  },
  {
    id: 'electronics',
    name: 'Consumer Electronics',
    image: '/images/electronics.jpg',
    shortDescription: 'Advanced component testing',
    description:
      'Advanced testing for electronic components, consumer devices, and digital products with functional testing and electrical safety expertise.',
    stats: [
      { label: 'Products Tested', value: '1,000+' },
      { label: 'Test Protocols', value: '30+' },
      { label: 'Defect Detection', value: '99.8%' },
    ],
  },
  {
    id: 'construction',
    name: 'Construction & Materials',
    image: '/images/construction.jpg',
    shortDescription: 'Building materials certification',
    description:
      'Comprehensive inspection of construction materials, concrete, steel, and structural components with quality assurance and compliance verification.',
    stats: [
      { label: 'Materials Tested', value: '3,000+' },
      { label: 'Building Standards', value: '10+' },
      { label: 'Safety Verification', value: '100%' },
    ],
  },
  {
    id: 'pharma',
    name: 'Pharmaceuticals & Chemicals',
    image: '/images/pharmaceuticals.jpg',
    shortDescription: 'Lab-certified excellence',
    description:
      'Pharmaceutical and chemical product inspection with laboratory testing, quality assurance, and regulatory compliance for global markets.',
    stats: [
      { label: 'Lab Tests', value: '2,000+' },
      { label: 'Regulatory Standards', value: '25+' },
      { label: 'Certification Rate', value: '98.9%' },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function IndustryVerticals() {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-vericheck-blue font-semibold text-sm uppercase tracking-wider mb-2">
            Industries we serve
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-vericheck-navy mb-4 text-balance">
            Expert Inspections Across All Sectors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Deep expertise across multiple industries with specialized knowledge, certified inspectors, and proven compliance records
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-96 bg-gray-200"
            >
              {/* Background Image */}
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-vericheck-navy via-vericheck-navy/30 to-transparent group-hover:from-vericheck-navy/95 group-hover:via-vericheck-navy/50 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Title always visible */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-vericheck-lime transition-colors duration-300">
                  {industry.name}
                </h3>

                {/* Hidden on hover */}
                <p className="text-gray-100 text-sm opacity-100 group-hover:opacity-0 transition-opacity duration-300 line-clamp-2">
                  {industry.shortDescription}
                </p>

                {/* Revealed on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gray-100 text-sm mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="flex items-center gap-2 text-vericheck-lime font-semibold">
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Industry Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="p-6 bg-gradient-to-br from-vericheck-navy/5 to-vericheck-blue/5 rounded-xl border border-vericheck-blue/10">
            <div className="text-4xl font-bold text-vericheck-blue mb-2">10K+</div>
            <div className="text-vericheck-navy font-semibold">Inspections Completed</div>
            <p className="text-sm text-gray-600 mt-2">Across all industry sectors</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-vericheck-lime/10 to-vericheck-lime/5 rounded-xl border border-vericheck-lime/20">
            <div className="text-4xl font-bold text-vericheck-lime mb-2">99%+</div>
            <div className="text-vericheck-navy font-semibold">Compliance Rate</div>
            <p className="text-sm text-gray-600 mt-2">International standards adherence</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-vericheck-blue/5 to-vericheck-navy/5 rounded-xl border border-vericheck-navy/10">
            <div className="text-4xl font-bold text-vericheck-navy mb-2">50+</div>
            <div className="text-vericheck-navy font-semibold">Industry Sectors</div>
            <p className="text-sm text-gray-600 mt-2">Expert coverage across markets</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 md:p-12 bg-gradient-to-r from-vericheck-navy to-vericheck-blue rounded-2xl text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Ready for Industry-Specific Solutions?</h3>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Get a customized inspection quote tailored to your specific industry requirements and compliance standards.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-vericheck-lime hover:bg-vericheck-lime/90 text-vericheck-navy rounded-lg font-bold transition-colors"
          >
            Get Your Custom Quote
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
