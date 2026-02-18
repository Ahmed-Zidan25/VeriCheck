'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-vericheck-navy text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* LOGO */}
          <div className="w-40 relative h-12">
            <Image 
              src="/images/Untitled-design.png" 
              alt="VeriCheck Logo" 
              fill
              className="brightness-0 invert object-contain"
            />
          </div>

          {/* COPYRIGHT */}
          <div className="text-sm text-white/60 order-3 md:order-2">
            © {new Date().getFullYear()} VeriCheck Egypt. All rights reserved.
          </div>

          {/* LINKS */}
          <div className="flex gap-6 text-sm font-medium order-2 md:order-3">
            <Link href="#services" className="hover:text-vericheck-lime transition-colors">Services</Link>
            <Link href="#contact" className="hover:text-vericheck-lime transition-colors">Contact</Link>
          </div>
          
        </div>
      </div>
    </footer>
  )
}