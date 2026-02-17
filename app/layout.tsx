/* import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VeriCheck - Precision Inspection & Quality Control',
  description: 'Leading inspection and quality control services across Egypt. Precision in every detail, trust in every check.',
  generator: 'v0.app',
  metadataBase: new URL('https://veri-check.co'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: true,
  },
  openGraph: {
    title: 'VeriCheck - Precision Inspection & Quality Control',
    description: 'Leading inspection and quality control services across Egypt',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
} */



import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Header from '@/components/Header' // Import your fixed Header

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VeriCheck - Precision Inspection & Quality Control',
  description: 'Leading inspection and quality control services across Egypt. Precision in every detail, trust in every check.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <Header /> 
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}