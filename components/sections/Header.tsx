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

  useEffect(() => {
    const handleScroll = () => {
      // Small threshold for a quick transition
      setIsScrolled(window.scrollY > 20)
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-vericheck-navy shadow-xl py-2' 
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* LOGO SECTION: Fixed white box to keep original colors */}
        <div className="flex-shrink-0">
          <Link href="/" className="block group">
            <div 
              className={`relative transition-all duration-300 flex items-center justify-center bg-white rounded-xl shadow-md overflow-hidden ${
                isScrolled 
                  ? 'w-32 h-10 sm:w-36 sm:h-12' 
                  : 'w-44 h-14 sm:w-52 sm:h-16'
              }`}
            >
              <Image 
                src="/images/logo.png" 
                alt="VeriCheck Logo" 
                fill
                priority
                className="object-contain p-2"
              />
            </div>
          </Link>
        </div>

        {/* DESKTOP NAVIGATION: Pushed to the right with gap */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/90 hover:text-vericheck-lime transition-colors text-sm font-bold tracking-wide whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          
          <Button className="bg-vericheck-lime hover:bg-white hover:text-vericheck-navy text-vericheck-navy font-bold px-8 transition-all duration-300">
            Get Quote
          </Button>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-white p-2 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-vericheck-navy border-t border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-10 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-2xl text-white font-semibold hover:text-vericheck-lime transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-vericheck-lime text-vericheck-navy font-bold py-7 text-xl rounded-xl">
                  Get Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}