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
      setIsScrolled(scrollTop > 20) // Lower threshold for smoother transition
      
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
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-vericheck-blue to-vericheck-lime z-[60]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-vericheck-navy shadow-xl py-2'
            : 'bg-transparent py-6'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* LOGO FIX: White background container that is always visible */}
          <div className="flex items-center">
            <Link href="/" className="group">
              <div 
                className={`relative transition-all duration-300 flex items-center justify-center bg-white rounded-md shadow-md ${
                  isScrolled 
                  ? 'w-36 h-10 sm:w-40 sm:h-12 p-1' 
                  : 'w-44 h-14 sm:w-52 sm:h-16 p-2'
                }`}
              >
                <Image 
                  src="/images/Untitled-design.png" 
                  alt="VeriCheck Logo" 
                  fill
                  priority
                  className="object-contain p-1" // Inner padding so logo doesn't touch edges
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
                className="text-white hover:text-vericheck-lime transition-colors text-sm font-semibold tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-vericheck-lime hover:bg-white hover:text-vericheck-navy text-vericheck-navy font-bold px-6 transition-all">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-vericheck-navy border-t border-white/10"
            >
              <div className="px-6 py-8 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-2xl text-white font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="w-full bg-vericheck-lime text-vericheck-navy font-bold py-6 text-xl">
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