import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--color-brand-cream)]/80 backdrop-blur-xl border-b border-gray-200 h-24 flex items-center justify-between px-6 md:px-16 transition-all duration-300">
      <Link href="/" className="flex flex-col">
        <span className="font-heading font-black text-3xl tracking-tight leading-none text-[var(--color-brand-black)]">
          KT<span className="text-[var(--color-brand-pink)]">.</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold mt-1">Impulso Empresarial</span>
      </Link>
      <div className="hidden md:flex items-center gap-12 text-sm font-semibold tracking-widest uppercase text-gray-600">
        <Link href="/" className="hover:text-[var(--color-brand-pink)] transition-colors">Inicio</Link>
        <Link href="/sobre-mi" className="hover:text-[var(--color-brand-purple)] transition-colors">Sobre Mí</Link>
      </div>
      <Button variant="outline" className="hidden md:inline-flex rounded-full">
        Contacto
      </Button>
    </nav>
  );
}
