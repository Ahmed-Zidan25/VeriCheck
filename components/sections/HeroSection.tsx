'use client'

import { useState, useEffect } from 'react'
// ... other imports

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // ... (keep variants and trustIndicators)

  return (
    <section id="hero-section" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-vericheck-navy">
      <div className=\"absolute inset-0 z-0\">
        {/* Only render video related logic if mounted to prevent Prerender errors */}
        {isMounted && !videoError ? (
           <video
             autoPlay
             loop
             muted
             playsInline
             onError={() => setVideoError(true)}
             className="object-cover w-full h-full opacity-60"
           >
             <source src="/videos/hero-bg.mp4" type="video/mp4" />
           </video>
        ) : (
          <div className="absolute inset-0 bg-vericheck-navy" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-vericheck-navy/70 via-transparent to-vericheck-navy" />
      </div>
      
      {/* Rest of your content... */}
    </section>
  )
}