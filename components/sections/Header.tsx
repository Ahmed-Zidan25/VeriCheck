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
      // Set the background to your specific RGB color
      style={{ backgroundColor: 'rgb(239, 243, 245)' }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b border-gray-200 ${
        isScrolled ? 'shadow-md py-2' : 'py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO - Original colors visible on light background */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div className={`relative transition-all duration-300 ${
                isScrolled ? 'w-32 h-10' : 'w-40 h-14 sm:w-52 sm:h-16'
              }`}>
              <Image 
                src="/images/Untitled-design.png" 
                alt="VeriCheck Logo" 
                fill 
                className="object-contain transition-all duration-300" 
                priority 
              />
            </div>
          </Link>
        </div>

        {/* NAVIGATION - Text changed to Navy for readability on light background */}
        <div className="hidden md:flex items-center ml-auto gap-8 lg:gap-12">
          <div className="flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-vericheck-navy hover:text-vericheck-lime transition-colors text-sm font-bold whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button className="bg-vericheck-navy hover:bg-vericheck-lime text-white font-bold px-6 transition-all">
            Get Quote
          </Button>
        </div>

        {/* MOBILE TOGGLE - Changed to Navy */}
        <button className="md:hidden text-vericheck-navy ml-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: 'rgb(239, 243, 245)' }}
            className="md:hidden border-t border-gray-200"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href} 
                  className="block text-xl text-vericheck-navy font-semibold" 
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}