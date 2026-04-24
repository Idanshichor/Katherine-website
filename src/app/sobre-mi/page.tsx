import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";

export default function SobreMi() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)] text-[var(--color-brand-black)] pt-24">
      <Navbar />

      {/* ═══ HERO — About Intro ═══ */}
      <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-brand-purple)] mb-6">Sobre Katherine</p>
        <h1 className="font-heading italic text-6xl md:text-8xl leading-[1.05] mb-8">
          De la Ingeniería <br />
          al <span className="not-italic font-black gradient-text">Impulso Digital</span>
        </h1>
        <p className="text-gray-500 font-light text-lg max-w-2xl mx-auto leading-relaxed">
          KT Impulso Empresarial nace de la convergencia entre el pensamiento analítico 
          de la ingeniería civil y la agilidad de los negocios digitales a escala global.
        </p>
      </section>

      {/* ═══ FULL-WIDTH PHOTO BREAK ═══ */}
      <ScrollReveal>
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <div className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-elevated">
            <Image
              src="/images/_O1A9951.jpg"
              alt="Katherine Velasquez Garcia — Full Portrait"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-pink)]/10 to-transparent"></div>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══ TIMELINE ═══ */}
      <ScrollReveal>
        <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">

          {/* Left Column: Experience Timeline */}
          <div className="lg:col-span-7 space-y-24">
            <div>
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

            {/* Education */}
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
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32 lg:self-start">

            {/* Photo with Idan — Editorial */}
            <div className="relative group">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-brand-pink)] opacity-10 blob z-0"></div>
              <div className="relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden shadow-elevated">
                <Image
                  src="/images/_O1A9704.jpg"
                  alt="Katherine y Idan"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                />
              </div>
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-elevated -mt-12 relative z-10 mx-6 text-center">
                <p className="font-heading italic text-lg text-gray-800">Katherine & Idan</p>
                <p className="text-[10px] tracking-[0.3em] font-bold text-gray-400 uppercase mt-2">Socios en la Vida y Estrategia</p>
              </div>
            </div>

            {/* PMP Goal Card */}
            <div className="bg-gradient-to-br from-[var(--color-brand-pink)] to-[var(--color-brand-purple)] p-10 rounded-2xl text-white text-center shadow-elevated">
              <p className="text-[10px] tracking-[0.3em] font-bold text-white/60 uppercase mb-4">Meta Profesional</p>
              <p className="font-heading italic text-3xl leading-relaxed">
                Candidata Oficial <span className="not-italic font-black">PMP</span>
              </p>
              <p className="text-white/70 text-sm mt-4 font-light">Project Management Professional</p>
            </div>

            {/* Languages */}
            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-50">
              <p className="text-[10px] tracking-[0.2em] font-bold text-gray-400 uppercase mb-6">Idiomas</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Español</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-brand-pink-light)] text-[var(--color-brand-pink)] font-bold">Nativo</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-gray-100"><div className="h-full w-full rounded-full bg-[var(--color-brand-pink)]"></div></div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-semibold">English</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-brand-purple-light)] text-[var(--color-brand-purple)] font-bold">Professional</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-gray-100"><div className="h-full w-[85%] rounded-full bg-[var(--color-brand-purple)]"></div></div>
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
}
