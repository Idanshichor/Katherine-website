"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";
import { motion } from "framer-motion";

/* ───── Floating Hearts Component ───── */
function FloatingHearts() {
  const hearts = Array.from({ length: 18 });
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((_, i) => {
        const size = 12 + Math.random() * 24;
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = 10 + Math.random() * 12;
        const opacity = 0.08 + Math.random() * 0.12;
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
  const sparkles = Array.from({ length: 12 });
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
      <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto text-center relative overflow-hidden">
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
            <span className="block">&ldquo;Te amo,</span>
            <span className="block mt-2">
              creo en <span className="not-italic font-black gradient-text">ti</span>&rdquo;
            </span>
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
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <div className="relative aspect-[3/2] w-full rounded-[2.5rem] overflow-hidden shadow-elevated">
            <Image
              src="/images/_O1A9704.jpg"
              alt="Katherine y Idan — Partners in life and strategy"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-pink)]/15 to-transparent" />

            {/* Floating heart overlay */}
            <motion.div
              className="absolute bottom-8 right-8 text-white/40 text-6xl z-10"
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ♥
            </motion.div>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══ TIMELINE — Full width, no sidebar ═══ */}
      <ScrollReveal>
        <section className="py-32 px-6 md:px-16 max-w-5xl mx-auto relative">

          {/* Floating love accents */}
          <motion.div
            className="absolute top-20 right-0 text-[var(--color-brand-pink)]/10 text-[200px] font-heading italic pointer-events-none hidden lg:block"
            animate={{ opacity: [0.03, 0.08, 0.03] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            ♥
          </motion.div>

          {/* Experience Timeline */}
          <div className="mb-24">
            <h2 className="font-heading font-bold text-4xl mb-16 flex items-center gap-6">
              <span className="w-16 h-[2px] bg-[var(--color-brand-pink)]"></span> Experiencia Profesional
            </h2>
            <div className="space-y-14 pl-6 border-l-2 border-gray-100 ml-2">

              <div className="relative group">
                <div className="absolute w-4 h-4 bg-[var(--color-brand-pink)] rounded-full -left-[31px] top-1 shadow-soft group-hover:scale-125 transition-transform"></div>
                <span className="text-xs tracking-[0.2em] text-[var(--color-brand-pink)] uppercase font-bold">2025 – Presente</span>
                <h3 className="font-heading italic text-2xl md:text-3xl mt-3 mb-2">Operations & Strategy Project Manager</h3>
                <p className="font-semibold text-sm text-[var(--color-brand-purple)]">Bound to Travel</p>
                <p className="text-xs text-gray-400 mb-3">California, USA — Remoto/Global</p>
                <p className="text-gray-500 font-light leading-relaxed">Directing global operations and leading expansion from North America into LATAM, Europe, and the Middle East. Implementing Business Operating Systems and managing international supply chain.</p>
              </div>

              <div className="relative group">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[29px] top-2 group-hover:bg-[var(--color-brand-purple)] transition-colors"></div>
                <span className="text-xs tracking-[0.2em] text-gray-400 uppercase font-bold">Mar 2025 – Jul 2025</span>
                <h3 className="font-heading italic text-2xl md:text-3xl mt-3 mb-2">UX Content Writer</h3>
                <p className="font-semibold text-sm text-[var(--color-brand-purple)]">LightU</p>
                <p className="text-xs text-gray-400 mb-3">Madrid, España — Remoto</p>
                <p className="text-gray-500 font-light leading-relaxed">Collaborating with designers and developers on microcopy, messaging, and navigation to enhance user experience across the platform.</p>
              </div>

              <div className="relative group">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[29px] top-2 group-hover:bg-[var(--color-brand-purple)] transition-colors"></div>
                <span className="text-xs tracking-[0.2em] text-gray-400 uppercase font-bold">Ene 2024 – 2025</span>
                <h3 className="font-heading italic text-2xl md:text-3xl mt-3 mb-2">Digital Project Manager</h3>
                <p className="font-semibold text-sm text-[var(--color-brand-purple)]">Mango Creative Studio</p>
                <p className="text-gray-500 font-light leading-relaxed">Managing digital assets and web design projects, specifically the BioChange website. Coordinating between design, development, and stakeholders.</p>
              </div>

              <div className="relative group">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[29px] top-2 group-hover:bg-[var(--color-brand-purple)] transition-colors"></div>
                <span className="text-xs tracking-[0.2em] text-gray-400 uppercase font-bold">2019 – 2023</span>
                <h3 className="font-heading italic text-2xl md:text-3xl mt-3 mb-2">Operations & Supply Chain Lead</h3>
                <p className="font-semibold text-sm text-[var(--color-brand-purple)]">Katherine Piercing Jewelry</p>
                <p className="text-xs text-gray-400 mb-3">Medellín, Colombia</p>
                <p className="text-gray-500 font-light leading-relaxed">Managed international supply chain between USA and Colombia. Inventory control, commercial strategy, and complete business operations.</p>
              </div>

            </div>
          </div>

          {/* Education — compact inline */}
          <div>
            <h2 className="font-heading font-bold text-4xl mb-12 flex items-center gap-6">
              <span className="w-16 h-[2px] bg-[var(--color-brand-purple)]"></span> Educación
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-50">
                <h3 className="font-heading italic text-xl mb-3">Máster en Marketing Digital</h3>
                <p className="text-[10px] tracking-[0.2em] font-bold text-gray-400 uppercase mb-4">IMF Smart Education</p>
                <p className="text-gray-500 font-light text-sm mb-4">SEO/SEM, Web Analytics, Web Design</p>
                <span className="inline-block px-4 py-1.5 bg-[var(--color-brand-purple)] text-white font-bold text-xs rounded-full">GA4 — 86%</span>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-50">
                <h3 className="font-heading italic text-xl mb-3">Máster en Comunicación Digital</h3>
                <p className="text-[10px] tracking-[0.2em] font-bold text-gray-400 uppercase mb-4">U. Católica de Ávila</p>
                <p className="text-gray-500 font-light text-sm">Content Writing, Blogging, Content Creation</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-50 sm:col-span-2">
                <h3 className="font-heading italic text-xl mb-3">Ingeniería Civil</h3>
                <p className="text-[10px] tracking-[0.2em] font-bold text-gray-400 uppercase mb-4">Universidad de Medellín</p>
                <p className="text-gray-500 font-light text-sm">Base analítica para resolución de problemas y pensamiento sistemático</p>
              </div>
            </div>
          </div>

        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
}
