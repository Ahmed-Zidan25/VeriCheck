'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [logoPosition, setLogoPosition] = useState({ x: 0, y: 0, scale: 1, opacity: 1 })
  const heroLogoRef = useRef<HTMLDivElement>(null)
  const navLogoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(scrollPercent)

      // Calculate logo animation
      const heroSection = document.getElementById('hero-section')
      if (heroSection && navLogoRef.current) {
        const heroHeight = heroSection.offsetHeight
        const scrollInHero = Math.min(Math.max(scrollTop, 0), heroHeight)
        const progress = scrollInHero / heroHeight

        // Calculate position from hero logo to nav logo
        if (heroLogoRef.current) {
          const heroRect = heroLogoRef.current.getBoundingClientRect()
          const navRect = navLogoRef.current.getBoundingClientRect()

          // Smooth transition: start from hero position, end at nav position
          const startX = heroRect.left
          const startY = heroRect.top
          const endX = navRect.left
          const endY = navRect.top

          const currentX = startX + (endX - startX) * progress
          const currentY = startY + (endY - startY) * progress

          // Scale from hero size to nav size
          const startScale = 1
          const endScale = 0.6
          const currentScale = startScale + (endScale - startScale) * progress

          // Fade out as it reaches the nav
          const currentOpacity = Math.max(1 - progress * 0.3, 0.7)

          setLogoPosition({
            x: currentX - startX,
            y: currentY - startY,
            scale: currentScale,
            opacity: currentOpacity,
          })
        }
      }

      setIsScrolled(scrollTop > 50)
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
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-vericheck-blue to-vericheck-lime z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-vericheck-navy/95 shadow-lg backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between h-20">
          {/* Logo - Always in Nav */}
          <div className="flex items-center gap-2" ref={navLogoRef}>
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-vericheck-blue to-vericheck-lime rounded-lg flex items-center justify-center font-bold text-white text-sm group-hover:shadow-[0_0_20px_rgba(0,114,206,0.6)]"
                whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0,114,206,0.8)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                V
              </motion.div>
              <motion.span
                className="font-bold text-white hidden sm:inline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                VeriCheck
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-vericheck-lime hover:bg-vericheck-lime/90 text-vericheck-navy font-semibold">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-vericheck-navy/95 backdrop-blur-md border-t border-white/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-white/80 hover:text-white transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full bg-vericheck-lime hover:bg-vericheck-lime/90 text-vericheck-navy font-semibold">
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Flying Logo in Hero - This will animate upward as you scroll */}
      <div
        ref={heroLogoRef}
        className="fixed pointer-events-none z-30"
        style={{
          transform: `translate(${logoPosition.x}px, ${logoPosition.y}px) scale(${logoPosition.scale})`,
          opacity: logoPosition.opacity,
          transformOrigin: 'top left',
          transition: 'all 0.1s ease-out',
        }}
      >
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-vericheck-blue to-vericheck-lime rounded-2xl flex items-center justify-center font-bold text-white text-2xl shadow-xl"
          whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,114,206,0.8)' }}
        >
          V
        </motion.div>
      </div>
    </>
  )
}
