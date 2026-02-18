"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Header (always visible, always blue) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-vericheck-navy border-b border-white/10 shadow-md vc-no-mirror">
      <nav className="hidden md:flex items-center gap-8 leading-none">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-vericheck-blue to-vericheck-lime rounded-lg flex items-center justify-center font-bold text-white text-sm"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(0,114,206,0.8)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                V
              </motion.div>

              <span className="font-bold text-white hidden sm:inline">
                VeriCheck
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
  key={link.label}
  href={link.href}
  className="text-white/90 hover:text-white transition-colors text-sm font-medium"
>
  <span className="block leading-none whitespace-nowrap overflow-hidden text-ellipsis">
    {link.label}
  </span>
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
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-vericheck-navy border-t border-white/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-white/90 hover:text-white transition-colors font-medium"
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
    </>
  );
}
