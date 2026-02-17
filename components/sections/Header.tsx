'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50) // Adjust threshold if needed
      
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-vericheck-blue to-vericheck-lime z-[60]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-vericheck-navy shadow-lg backdrop-blur-md py-2' // Changed opacity to make it solid navy on scroll
            : 'bg-transparent py-4'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center transition-transform hover:scale-105">
              <div 
                className={`relative w-40 h-12 sm:w-48 sm:h-14 transition-all duration-300 ${
                  isScrolled ? 'bg-white p-2 rounded-lg' : 'bg-transparent p-0'
                }`}
              >
                <Image 
                  src="/images/Untitled-design.png" // Ensure this path is correct for your transparent logo
                  alt="VeriCheck Logo" 
                  fill
                  priority
                  className={`object-contain transition-opacity duration-300 ${
                    !isScrolled ? 'opacity-0' : 'opacity-100' // Make logo invisible when header is transparent
                  }`}
                />
              </div>
            </Link>
          </div> 

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-vericheck-lime transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-vericheck-lime hover:bg-vericheck-lime/90 text-vericheck-navy font-bold px-6">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-vericheck-navy border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-xl text-white/80 hover:text-vericheck-lime font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="w-full bg-vericheck-lime text-vericheck-navy font-bold py-6 text-lg">
                  Get Quote
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}