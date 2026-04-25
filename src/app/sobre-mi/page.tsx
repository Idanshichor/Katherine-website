"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";
import { motion } from "framer-motion";

/* ───── Floating Hearts Component ───── */
function FloatingHearts() {
  const hearts = Array.from({ length: 30 });
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((_, i) => {
        const size = 14 + Math.random() * 30;
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 8 + Math.random() * 14;
        const opacity = 0.1 + Math.random() * 0.18;
        return (
          <motion.div
            key={i}
            className="absolute text-[var(--color-brand-pink)]"
            style={{ left: `${left}%`, bottom: "-40px", fontSize: size }}
            animate={{
              y: [0, -1200],
              x: [0, Math.sin(i) * 60, Math.cos(i) * -40, 0],
              rotate: [0, 360],
              opacity: [0, opacity, opacity, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ♥
          </motion.div>
        );
      })}
    </div>
  );
}

/* ───── Sparkle Component ───── */
function Sparkles() {
  const sparkles = Array.from({ length: 20 });
  return (
    <>
      {sparkles.map((_, i) => {
        const top = 10 + Math.random() * 80;
        const left = 5 + Math.random() * 90;
        const delay = Math.random() * 5;
        const size = 8 + Math.random() * 16;
        return (
          <motion.span
            key={i}
            className="absolute text-[var(--color-brand-pink)] pointer-events-none z-0"
            style={{ top: `${top}%`, left: `${left}%`, fontSize: size }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.2, 0.5],
              rotate: [0, 180],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.span>
        );
      })}
    </>
  );
}

export default function SobreMi() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)] text-[var(--color-brand-black)] pt-24 relative">
      <FloatingHearts />
      <Navbar />

      {/* ═══ HERO — "Te amo, creo en ti" ═══ */}
      <section className="pt-16 pb-10 px-6 md:px-16 max-w-6xl mx-auto text-center relative overflow-hidden">
        <Sparkles />

        {/* Decorative rings */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-[var(--color-brand-pink)]/15 hidden lg:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-16 w-20 h-20 rounded-full border border-[var(--color-brand-purple)]/15 hidden lg:block"
          animate={{ rotate: -360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 right-8 w-4 h-4 rounded-full bg-[var(--color-brand-pink)]/20"
          animate={{ y: [-10, 10, -10], scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10"
        >
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-brand-pink)] mb-8">Katherine & Idan</p>
          <h1 className="font-heading italic text-6xl md:text-8xl lg:text-9xl leading-[0.95] mb-8 relative">
            Te amo, creo en <span className="not-italic font-black gradient-text">ti</span>
          </h1>
          <motion.div
            className="flex items-center justify-center gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="w-12 h-[1px] bg-[var(--color-brand-pink)]" />
            <span className="text-[var(--color-brand-pink)] text-2xl">♥</span>
            <div className="w-12 h-[1px] bg-[var(--color-brand-pink)]" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ FULL-WIDTH PHOTO — _O1A9704 ═══ */}
      <ScrollReveal>
        <div className="px-6 md:px-16 max-w-7xl mx-auto relative">

          {/* Left-side floating hearts */}
          <motion.div
            className="absolute -left-4 md:-left-8 top-1/4 text-[var(--color-brand-pink)] text-5xl pointer-events-none z-20"
            animate={{ y: [-10, 10, -10], scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            ♥
          </motion.div>
          <motion.div
            className="absolute -left-2 md:left-4 top-2/3 text-[var(--color-brand-pink)] text-3xl pointer-events-none z-20"
            animate={{ y: [5, -15, 5], rotate: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            ♥
          </motion.div>
          <motion.div
            className="absolute left-8 md:left-16 -top-6 text-[var(--color-brand-pink)] text-2xl pointer-events-none z-20"
            animate={{ y: [-5, 8, -5], scale: [0.8, 1.3, 0.8], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ✦
          </motion.div>

          {/* Right-side floating hearts */}
          <motion.div
            className="absolute -right-4 md:-right-8 top-1/3 text-[var(--color-brand-pink)] text-5xl pointer-events-none z-20"
            animate={{ y: [8, -12, 8], scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3.5, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
          >
            ♥
          </motion.div>
          <motion.div
            className="absolute -right-2 md:right-4 top-3/4 text-[var(--color-brand-pink)] text-3xl pointer-events-none z-20"
            animate={{ y: [-8, 12, -8], rotate: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4.5, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ♥
          </motion.div>
          <motion.div
            className="absolute right-8 md:right-16 -bottom-6 text-[var(--color-brand-purple)] text-2xl pointer-events-none z-20"
            animate={{ y: [5, -10, 5], scale: [0.8, 1.3, 0.8], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 3, delay: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ✦
          </motion.div>

          <div className="relative aspect-[3/2] w-full rounded-[2.5rem] overflow-hidden shadow-elevated">
            <Image
              src="/images/_O1A9704.jpg"
              alt="Katherine y Idan — Partners in life and strategy"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-pink)]/15 to-transparent" />

            {/* Floating heart overlays inside the photo */}
            <motion.div
              className="absolute bottom-8 right-8 text-white/40 text-6xl z-10"
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ♥
            </motion.div>
            <motion.div
              className="absolute top-8 left-8 text-white/30 text-4xl z-10"
              animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.5, 0.25] }}
              transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ♥
            </motion.div>
          </div>
        </div>
      </ScrollReveal>

      <div className="py-20" />

      <Footer />
    </div>
  );
}
