'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image' // Added Image component
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
      setIsScrolled(scrollTop > 100)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(scrollPercent)

      const heroSection = document.getElementById('hero-section')
      if (heroSection && navLogoRef.current) {
        const heroHeight = heroSection.offsetHeight
        const scrollInHero = Math.min(Math.max(scrollTop, 0), heroHeight)
        const progress = scrollInHero / heroHeight

        if (heroLogoRef.current) {
          const heroRect = heroLogoRef.current.getBoundingClientRect()
          const navRect = navLogoRef.current.getBoundingClientRect()

          const startX = heroRect.left
          const startY = heroRect.top
          const endX = navRect.left
          const endY = navRect.top

          const currentX = startX + (endX - startX) * progress
          const currentY = startY + (endY - startY) * progress

          const startScale = 1
          const endScale = 0.3 // Reduced scale to fit the nav bar better
          const currentScale = startScale + (endScale - startScale) * progress

          const currentOpacity = Math.max(1 - progress, 0) // Fade out completely when it hits nav

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
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-vericheck-blue to-vericheck-lime z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-vericheck-navy/95 shadow-lg backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between h-20">
          {/* Logo - Nav Version */}
          <div className="flex items-center" ref={navLogoRef}>
  <Link href="/" className="flex items-center transition-transform hover:scale-105">
    {/* The container needs relative positioning for 'fill' to work. 
        Adjust w-48 and h-14 to match your logo's actual proportions.
    */}
    <div className="relative w-40 h-12 sm:w-48 sm:h-14">
      <Image 
        src="/images/logo.jpg" // Added leading slash for public folder
        alt="VeriCheck Logo" 
        fill
        priority
        className={`object-contain transition-all duration-300 ${
          isScrolled ? 'brightness-100' : 'brightness-0 invert'
        }`} 
      />
    </div>
  </Link>
</div>



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

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

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

      {/* Flying Logo in Hero */}
     {/*  <div
        ref={heroLogoRef}
        className="fixed pointer-events-none z-30"
        style={{
          transform: `translate(${logoPosition.x}px, ${logoPosition.y}px) scale(${logoPosition.scale})`,
          opacity: logoPosition.opacity,
          transformOrigin: 'top left',
          transition: 'all 0.1s ease-out',
        }}
      >
         <div className="relative w-64 h-32">
          <Image 
            src="images/logo.png" 
            alt="VeriCheck Hero Logo" 
            fill 
            className="object-contain" 
            priority
          />
        </div> 
      </div> */}
    </>
  )
}