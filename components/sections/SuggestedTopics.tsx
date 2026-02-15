'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface Topic {
  id: string
  title: string
  image: string
  description: string
  href: string
}

const topics: Topic[] = [
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    image: '/images/textiles.jpg',
    description: 'Quality assurance for fabrics, garments, and textile products',
    href: '#textiles'
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    image: '/images/oil-gas.jpg',
    description: 'Pipeline and equipment inspection services',
    href: '#oil-gas'
  },
  {
    id: 'food',
    title: 'Food & Agriculture',
    image: '/images/food-agriculture.jpg',
    description: 'Food safety and agricultural product inspection',
    href: '#food'
  },
  {
    id: 'electronics',
    title: 'Electronics & Manufacturing',
    image: '/images/electronics.jpg',
    description: 'Component testing and manufacturing quality control',
    href: '#electronics'
  },
  {
    id: 'construction',
    title: 'Construction & Materials',
    image: '/images/construction.jpg',
    description: 'Building materials and structural inspection',
    href: '#construction'
  },
  {
    id: 'pharma',
    title: 'Pharmaceuticals & Chemicals',
    image: '/images/pharmaceuticals.jpg',
    description: 'Pharmaceutical and chemical product certification',
    href: '#pharma'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export default function SuggestedTopics() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-vericheck-blue font-semibold text-sm uppercase tracking-wider mb-2">
            Suggested topics
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-vericheck-navy mb-4 text-balance">
            Expertise for Every Industry
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            From textiles to pharmaceuticals, VeriCheck delivers precision inspection across all major industries
          </p>
        </motion.div>

        {/* Topics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {topics.map((topic) => (
            <motion.a
              key={topic.id}
              href={topic.href}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer block"
            >
              {/* Background Image */}
              <div className="relative w-full h-80 bg-gray-200 overflow-hidden">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-vericheck-navy via-vericheck-navy/40 to-transparent group-hover:from-vericheck-navy/90 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-vericheck-lime transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-100 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {topic.description}
                </p>
                <div className="flex items-center gap-2 text-vericheck-lime opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm font-semibold">Learn more</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-r from-vericheck-navy/5 to-vericheck-blue/5 rounded-2xl border border-vericheck-blue/10"
        >
          <h3 className="text-2xl font-bold text-vericheck-navy mb-4">
            Don't see your industry?
          </h3>
          <p className="text-gray-700 mb-6">
            VeriCheck provides comprehensive inspection and quality control services across virtually every industry. 
            Our expert team can develop customized solutions for your specific sector's requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-vericheck-blue hover:bg-vericheck-navy text-white rounded-lg font-semibold transition-colors"
          >
            Get a Custom Solution
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
