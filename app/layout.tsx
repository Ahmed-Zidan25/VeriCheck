import type { Metadata } from 'next'
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

import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
