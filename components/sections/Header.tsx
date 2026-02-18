"use client";

import { useEffect, useState } from "react";
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

  // Close mobile menu on resize to desktop (prevents weird states)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false); // lg breakpoint
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
   <header className="fixed top-0 left-0 w-full z-50 bg-vericheck-navy border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          {/* If you have a logo image component, place it here */}
          <span className="text-white font-bold text-xl whitespace-nowrap">
            VeriCheck
          </span>
        </Link>

        {/* Desktop Navigation (ONLY lg+) */}
        <nav className="hidden lg:flex items-center ml-auto gap-6 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex-shrink-0 whitespace-nowrap text-white text-sm font-semibold hover:text-vericheck-lime transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#quote"
            className="flex-shrink-0 bg-vericheck-lime hover:bg-white text-vericheck-navy font-semibold px-6 py-2 rounded-lg transition-colors"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Toggle (ONLY <lg) */}
        <button
          type="button"
          className="lg:hidden ml-auto text-white"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (ONLY <lg) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden bg-vericheck-navy/95 border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-base font-medium hover:text-vericheck-lime transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="#quote"
                onClick={() => setIsOpen(false)}
                className="bg-vericheck-lime hover:bg-white text-vericheck-navy font-semibold px-5 py-3 rounded-lg text-center transition-colors"
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
