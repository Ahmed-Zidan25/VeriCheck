'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Facebook, Linkedin, MessageCircle, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { label: 'Pre-Shipment Inspection', href: '#services' },
      { label: 'Factory Audits', href: '#services' },
      { label: 'Lab Testing', href: '#services' },
      { label: 'Loading Supervision', href: '#services' },
    ],
    Industries: [
      { label: 'Textiles', href: '#industries' },
      { label: 'Marble Facade Quality', href: '#industries' },
      { label: 'Cookware Quality', href: '#industries' },
      { label: 'Food & Beverage Porcelain', href: '#industries' },
    ],
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Vision & Mission', href: '#VisionMission' },
      { label: 'Contact', href: '#contact' },
      
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/veri-check/', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/veri-check/', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/201003539052', label: 'WhatsApp' },
  ]

  return (
    <footer className="bg-vericheck-navy text-vericheck-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
  <div className="relative w-40 h-12"> {/* Adjust width and height based on your logo's aspect ratio */}
    <Image 
      src="/images/Untitled-design.svg" 
      alt="VeriCheck Logo" 
      fill
      className="object-contain brightness-0 invert" // Use invert if you are placing it on a dark footer
      priority
    />
  </div>
</div>
            <p className="text-vericheck-grey text-sm mb-6 leading-relaxed">
              Egypt's leading inspection and quality control services. Precision in every detail, trust in every check.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, color: '#76BC21' }}
                    className="text-vericheck-grey hover:text-vericheck-lime transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-vericheck-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-vericheck-grey hover:text-vericheck-lime transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-vericheck-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex gap-3 text-vericheck-grey hover:text-vericheck-lime transition-colors">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <span className="text-sm">+201091852883</span>
              </div>
              <div className="flex gap-3 text-vericheck-grey hover:text-vericheck-lime transition-colors">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <span className="text-sm">contact@veri-check.co</span>
              </div>
              <div className="flex gap-3 text-vericheck-grey hover:text-vericheck-lime transition-colors">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span className="text-sm">Cairo, Egypt</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-vericheck-blue/20 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-vericheck-grey text-sm text-center md:text-left">
            © {currentYear} VeriCheck. All rights reserved. Precision in Every Detail.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-vericheck-grey hover:text-vericheck-lime transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-vericheck-grey hover:text-vericheck-lime transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-vericheck-grey hover:text-vericheck-lime transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
