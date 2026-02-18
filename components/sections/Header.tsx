"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-bold text-xl whitespace-nowrap"
        >
          VeriCheck
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center ml-auto gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex-shrink-0 whitespace-nowrap text-white text-sm font-semibold hover:text-lime-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#quote"
            className="flex-shrink-0 bg-lime-500 hover:bg-lime-400 text-black font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden ml-auto text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-base font-medium hover:text-lime-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="#quote"
                onClick={() => setIsOpen(false)}
                className="bg-lime-500 hover:bg-lime-400 text-black font-semibold px-5 py-3 rounded-lg text-center transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
