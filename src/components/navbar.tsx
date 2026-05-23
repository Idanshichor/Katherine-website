"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--color-brand-cream)]/90 backdrop-blur-xl border-b border-gray-200 h-20 md:h-24 flex items-center justify-between px-6 md:px-16 transition-all duration-300">
      <Link href="/" className="flex items-center shrink-0 z-50">
        <Image
          src="/images/KT_LOGO.webp"
          alt="Katherine Velasquez Logo"
          width={350}
          height={120}
          className="h-12 md:h-16 lg:h-20 w-auto object-contain"
          priority
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 lg:gap-12 text-sm font-semibold tracking-widest uppercase text-gray-600">
        <Link href="/" className="hover:text-[var(--color-brand-pink)] transition-colors">Inicio</Link>
        <Link href="/#quien-soy" className="hover:text-[var(--color-brand-purple)] transition-colors">Quién Soy</Link>
        <Link href="/#metodologia" className="hover:text-[var(--color-brand-pink)] transition-colors">Metodología</Link>
        <Link href="/#servicios" className="hover:text-[var(--color-brand-purple)] transition-colors">Servicios</Link>
      </div>

      {/* Contact Button (Desktop) */}
      <Link href="https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29" target="_blank" rel="noopener noreferrer" className="hidden md:block">
        <Button variant="outline" className="rounded-full shrink-0">
          Contacto
        </Button>
      </Link>

      {/* Mobile Hamburger Toggle */}
      <button 
        className="md:hidden z-50 text-[var(--color-brand-black)] p-2 -mr-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--color-brand-cream)] flex flex-col pt-12 px-6 pb-6 shadow-xl border-t border-gray-100 md:hidden overflow-y-auto" style={{ height: "calc(100vh - 5rem)" }}>
          <div className="flex flex-col gap-8 text-lg font-semibold tracking-widest uppercase text-[var(--color-brand-black)] text-center mb-12">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link>
            <Link href="/#quien-soy" onClick={() => setIsMobileMenuOpen(false)}>Quién Soy</Link>
            <Link href="/#metodologia" onClick={() => setIsMobileMenuOpen(false)}>Metodología</Link>
            <Link href="/#servicios" onClick={() => setIsMobileMenuOpen(false)}>Servicios</Link>
          </div>
          
          <div className="mt-auto mb-10 flex justify-center">
            <Link href="https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
              <Button variant="outline" className="rounded-full w-full py-6 text-base tracking-widest border-2">
                Contacto
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
