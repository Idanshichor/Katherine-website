import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import { Button } from "@/components/ui/button";
import { FloatingIcons, FloatingAccents } from "@/components/floating-icons";
import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)] text-[var(--color-brand-black)]">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <FloatingIcons />

        {/* Giant watermark typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-black text-[25vw] leading-none text-[var(--color-brand-pink)]/[0.03] pointer-events-none select-none hidden lg:block" aria-hidden="true">
          360°
        </div>

        {/* Decorative elements scattered around */}
        <div className="absolute top-28 left-12 w-48 h-48 rounded-full border-2 border-[var(--color-brand-pink)]/15 hidden lg:block" />
        <div className="absolute top-28 left-12 w-48 h-48 rounded-full border border-[var(--color-brand-purple)]/10 scale-125 hidden lg:block" />
        <div className="absolute bottom-16 right-28 w-28 h-28 rounded-full bg-[var(--color-brand-purple)]/8 hidden lg:block" />
        <div className="absolute bottom-40 left-1/3 w-3 h-3 rounded-full bg-[var(--color-brand-pink)] hidden lg:block" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[var(--color-brand-purple)] hidden lg:block" />
        <div className="absolute top-40 right-[45%] w-4 h-4 rounded-full bg-[var(--color-brand-pink)]/30 hidden lg:block" />
        {/* Dots grid pattern */}
        <div className="absolute bottom-28 left-8 grid grid-cols-4 gap-2.5 opacity-15 hidden lg:grid">
          {Array.from({ length: 16 }).map((_, i) => (<div key={`hero-dot-${i}`} className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-purple)]" />))}
        </div>
        {/* Vertical accent line */}
        <div className="absolute left-[7%] top-[20%] w-[3px] h-40 bg-gradient-to-b from-[var(--color-brand-pink)] to-transparent rounded-full hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[var(--color-brand-pink-light)] border border-[var(--color-brand-pink)]/10 w-max">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-pink)] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-pink)]">KT Impulso Empresarial</span>
            </div>
            <h1 className="font-heading text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.92] tracking-tight">
              <span className="italic font-medium">Estrategia</span><br />
              <span className="gradient-text font-black not-italic relative">
                360°
                {/* Small decorative circle next to 360 */}
                <span className="absolute -right-6 top-0 w-5 h-5 rounded-full border-2 border-[var(--color-brand-purple)] hidden lg:inline-block" />
              </span><br />
              <span className="italic font-medium text-gray-400">que Impulsa.</span>
            </h1>
            <p className="font-body text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-md mt-2">
              Especialista en Gestión de Proyectos uniendo la lógica de la Ingeniería Civil con la ejecución del Marketing Digital.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button size="lg" variant="primary">Explorar Servicios</Button>
              <Button size="lg" variant="outline">Conoce a Katherine</Button>
            </div>
            {/* Horizontal colored strip */}
            <div className="flex items-center gap-3 mt-8">
              <div className="w-12 h-1 rounded-full bg-[var(--color-brand-pink)]" />
              <div className="w-8 h-1 rounded-full bg-[var(--color-brand-purple)]" />
              <div className="w-4 h-1 rounded-full bg-gray-300" />
            </div>
          </div>

          <div className="relative h-[550px] md:h-[700px] w-full hidden lg:block">
            {/* Multiple layered decorative shapes */}
            <div className="absolute -top-10 -right-10 w-full h-full rounded-[2.5rem] bg-[var(--color-brand-pink)]/10 rotate-3" />
            <div className="absolute -bottom-6 -left-6 w-full h-full rounded-[2.5rem] border-2 border-[var(--color-brand-purple)]/15 -rotate-2" />
            {/* Photo */}
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-elevated z-10">
              <Image src="/images/_O1A9988.jpg" alt="Katherine Velasquez Garcia" fill className="object-cover object-top" priority />
            </div>
            {/* Bottom-left badge */}
            <div className="absolute -bottom-6 -left-10 bg-white p-5 rounded-2xl shadow-elevated z-20 border border-gray-50">
              <p className="font-heading italic text-lg text-[var(--color-brand-purple)]">Project Manager</p>
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400 mt-1">PMP Candidate</p>
            </div>
            {/* Top-right pink circle */}
            <div className="absolute top-6 -right-5 w-16 h-16 rounded-full bg-[var(--color-brand-pink)] z-20 flex items-center justify-center shadow-elevated">
              <span className="text-white font-bold text-lg">✦</span>
            </div>
            {/* Small purple circle accent */}
            <div className="absolute top-1/3 -left-8 w-10 h-10 rounded-full bg-[var(--color-brand-purple)] z-20 flex items-center justify-center">
              <span className="text-white text-xs font-bold">KT</span>
            </div>
            {/* Dots below photo */}
            <div className="absolute -bottom-14 right-12 flex gap-2 z-20">
              <div className="w-2 h-2 rounded-full bg-[var(--color-brand-pink)]" />
              <div className="w-2 h-2 rounded-full bg-[var(--color-brand-purple)]" />
              <div className="w-2 h-2 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* CLIENT LOGOS — thin bar with individual logos */}
      <section className="py-4 px-6 md:px-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-6 md:gap-10">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 shrink-0 hidden md:block">Confían en Katherine</p>
          <div className="w-[1px] h-5 bg-gray-200 hidden md:block" />
          {[
            { src: "/images/logo-bound-travel.png", alt: "Bound to Travel" },
            { src: "/images/logo-mango-creative.png", alt: "Mango Creative" },
            { src: "/images/logo-roma-studio.png", alt: "ROMA STUDIO" },
            { src: "/images/logo-lightu.png", alt: "LightU" },
          ].map((logo) => (
            <Image key={logo.alt} src={logo.src} alt={logo.alt} width={80} height={40} className="object-contain grayscale opacity-40 hover:opacity-90 hover:grayscale-0 transition-all h-8 w-auto" />
          ))}
          <span className="font-heading italic text-sm text-gray-300 tracking-wide">BioChange</span>
        </div>
      </section>

      {/* QUIÉN SOY — with floating accents + decorative elements */}
      <ScrollReveal>
        <section className="py-32 px-6 md:px-16 relative overflow-hidden">
          <FloatingAccents />
          {/* Decorative dots grid */}
          <div className="absolute top-20 right-20 grid grid-cols-5 gap-3 opacity-20 hidden lg:grid">
            {Array.from({ length: 25 }).map((_, i) => (<div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-purple)]" />))}
          </div>
          <div className="absolute bottom-32 left-16 w-48 h-48 rounded-full border border-[var(--color-brand-pink)]/20 hidden lg:block" />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-elevated">
              <Image src="/images/_O1A0036.jpg" alt="Katherine Velasquez" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              {/* Overlapping color accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[var(--color-brand-purple)]/30 blur-xl" />
            </div>

            <div className="flex flex-col gap-8">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-purple)]">Quién Soy</p>
              <h2 className="font-heading italic text-5xl md:text-6xl leading-[1.1]">
                De la Ingeniería Civil al <span className="not-italic font-black text-[var(--color-brand-pink)]">Mundo Digital</span>
              </h2>
              <p className="text-gray-500 font-light text-lg leading-relaxed">
                Con una formación en Ingeniería Civil y dos Másters en Marketing Digital y Comunicación,
                Katherine combina pensamiento analítico con creatividad estratégica para impulsar empresas
                hacia el crecimiento internacional.
              </p>
              {/* Stats — editorial inline style */}
              <div className="flex items-baseline gap-8 mt-6 flex-wrap">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-5xl font-black gradient-text">5+</span>
                  <span className="text-gray-400 text-sm font-light">años de experiencia</span>
                </div>
                <div className="w-[1px] h-8 bg-gray-200 hidden md:block" />
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-5xl font-black text-[var(--color-brand-purple)]">4</span>
                  <span className="text-gray-400 text-sm font-light">continentes</span>
                </div>
                <div className="w-[1px] h-8 bg-gray-200 hidden md:block" />
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-5xl font-black text-[var(--color-brand-pink)]">86%</span>
                  <span className="text-gray-400 text-sm font-light">GA4</span>
                </div>
              </div>
              <Button variant="secondary" className="w-max mt-6">Leer Mi Historia</Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* COMPETENCY — Editorial magazine layout */}
      <ScrollReveal>
        <section className="py-32 px-6 md:px-16 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[var(--color-brand-pink)]/5 hidden lg:block" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-[var(--color-brand-purple)]/10 hidden lg:block" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20">
              <h2 className="font-heading italic text-5xl md:text-7xl leading-tight">
                Matriz de <span className="not-italic font-black gradient-text">Competencias</span>
              </h2>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-16 h-[2px] bg-[var(--color-brand-pink)]" />
                <p className="text-gray-400 font-light text-lg">Lo que Katherine aporta a cada proyecto</p>
              </div>
            </div>

            {/* Editorial layout — alternating text + image rows */}
            <div className="space-y-24">

              {/* Row 1: Operations */}
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-heading text-8xl font-black text-[var(--color-brand-pink)]/10">01</span>
                    <div className="w-12 h-[2px] bg-[var(--color-brand-pink)]" />
                  </div>
                  <h3 className="font-heading italic text-4xl md:text-5xl mb-6">Operaciones & Sistemas</h3>
                  <p className="text-gray-500 font-light text-lg leading-relaxed mb-6 max-w-xl">
                    Implementación de Business Operating Systems (BOS). Logística internacional USA–Colombia. 
                    Control de inventario. Estrategia de expansión a Norteamérica, LATAM, Europa y Medio Oriente.
                  </p>
                  <p className="text-sm text-gray-400 italic">Systems Architecture · Supply Chain · Scaling · Project Management</p>
                </div>
                <div className="lg:col-span-5 relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-elevated">
                  <Image src="/images/_O1A9885.jpg" alt="Katherine" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-purple)]/40 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="font-heading italic text-2xl text-white">Katherine V.</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/60 mt-1">360° Strategy</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-6">
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                <span className="text-[var(--color-brand-pink)] text-xl">✦</span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </div>

              {/* Row 2: Digital Marketing — reversed */}
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 relative h-[350px] rounded-[2.5rem] overflow-hidden lg:order-1 order-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-pink)] to-[var(--color-brand-purple)] flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-heading font-black text-8xl text-white/20">86%</p>
                      <p className="text-white/60 text-sm mt-2 tracking-widest uppercase">GA4 Certified</p>
                    </div>
                    <div className="absolute top-8 left-8 w-20 h-20 rounded-full border border-white/15" />
                    <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/10" />
                  </div>
                </div>
                <div className="lg:col-span-7 lg:order-2 order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-heading text-8xl font-black text-[var(--color-brand-purple)]/10">02</span>
                    <div className="w-12 h-[2px] bg-[var(--color-brand-purple)]" />
                  </div>
                  <h3 className="font-heading italic text-4xl md:text-5xl mb-6">Digital Marketing & Ventas</h3>
                  <p className="text-gray-500 font-light text-lg leading-relaxed mb-6 max-w-xl">
                    Full-funnel business strategy y crecimiento comercial. SEO, SEM, Web Analytics.
                    UX Writing & Microcopy. Content Strategy bilingual (EN/ES).
                  </p>
                  <p className="text-sm text-gray-400 italic">SEO/SEM · UX Writing · Content Strategy · GA4 · Full-Funnel</p>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-6">
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                <span className="text-[var(--color-brand-purple)] text-xl">✦</span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </div>

              {/* Row 3: Technical & Leadership */}
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-heading text-8xl font-black text-gray-100">03</span>
                    <div className="w-12 h-[2px] bg-gray-300" />
                  </div>
                  <h3 className="font-heading italic text-4xl md:text-5xl mb-6">Habilidades Técnicas & Liderazgo</h3>
                  <p className="text-gray-500 font-light text-lg leading-relaxed mb-6 max-w-xl">
                    Resolución analítica de problemas con fundación en Ingeniería Civil. 
                    Liderazgo de equipos multidisciplinarios. Supervisión de experiencias web y diseño UX. 
                    Adaptabilidad multicultural en 4 continentes.
                  </p>
                  <p className="text-sm text-gray-400 italic">Civil Engineering · Team Leadership · UX Supervision · Multicultural Adaptability</p>
                </div>
                <div className="lg:col-span-5 relative h-[350px] rounded-[2.5rem] overflow-hidden shadow-soft border-2 border-gray-100 bg-[var(--color-brand-cream)] flex items-center justify-center">
                  <div className="text-center relative z-10">
                    <p className="font-heading italic text-6xl text-gray-200">PMP</p>
                    <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-400 mt-3">Candidata Oficial</p>
                    <div className="mt-6 flex gap-3 justify-center">
                      <span className="px-4 py-1.5 text-xs rounded-full bg-[var(--color-brand-pink-light)] text-[var(--color-brand-pink)] font-semibold">Español — Nativo</span>
                      <span className="px-4 py-1.5 text-xs rounded-full bg-[var(--color-brand-purple-light)] text-[var(--color-brand-purple)] font-semibold">English — Pro</span>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-[var(--color-brand-pink)]/5" />
                  <div className="absolute bottom-8 left-8 w-20 h-20 rounded-full border border-[var(--color-brand-purple)]/10" />
                </div>
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* PROJECTS */}
      <ScrollReveal>
        <section className="py-32 px-6 md:px-16 bg-white relative overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-2 border-[var(--color-brand-pink)]/15 hidden lg:block" />
          <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-[var(--color-brand-purple)]/5 hidden lg:block" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-purple)] mb-4">Portafolio</p>
                <h2 className="font-heading italic text-5xl md:text-6xl">Proyectos <span className="not-italic font-black gradient-text">Destacados</span></h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="group">
                <div className="relative h-[350px] rounded-[2rem] overflow-hidden mb-6 shadow-soft group-hover:shadow-elevated transition-all">
                  <Image src="/images/_O1A9861.jpg" alt="Bound to Travel" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-pink)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--color-brand-pink)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand-pink)] mb-2">Operaciones Globales</p>
                <h3 className="font-heading italic text-2xl mb-2">Bound to Travel</h3>
                <p className="text-gray-500 font-light text-sm">Expansión a 4 continentes. Logística, sistemas operativos y crecimiento.</p>
              </div>

              <div className="group">
                <div className="relative h-[350px] rounded-[2rem] overflow-hidden mb-6 shadow-soft group-hover:shadow-elevated transition-all bg-gradient-to-br from-[var(--color-brand-purple)] to-[var(--color-brand-pink)] flex items-center justify-center">
                  <div className="absolute top-6 left-6 w-20 h-20 rounded-full border border-white/20" />
                  <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white/10" />
                  <p className="font-heading italic text-7xl text-white/30 group-hover:text-white/50 transition-colors">MC</p>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand-purple)] mb-2">Gestión Digital</p>
                <h3 className="font-heading italic text-2xl mb-2">Mango Creative Studio</h3>
                <p className="text-gray-500 font-light text-sm">Project management del sitio web BioChange. Equipos de diseño y desarrollo.</p>
              </div>

              <div className="group">
                <div className="relative h-[350px] rounded-[2rem] overflow-hidden mb-6 shadow-soft group-hover:shadow-elevated transition-all bg-[var(--color-brand-cream)] border-2 border-gray-100 flex items-center justify-center">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-pink)]/5 rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--color-brand-purple)]/5 rounded-tr-full" />
                  <p className="font-heading italic text-7xl text-gray-200 group-hover:gradient-text transition-colors">KPJ</p>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">E-commerce & Supply Chain</p>
                <h3 className="font-heading italic text-2xl mb-2">Katherine Piercing Jewelry</h3>
                <p className="text-gray-500 font-light text-sm">Cadena de suministro internacional USA–Colombia.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CERTIFICATIONS + CTA */}
      <ScrollReveal>
        <section className="py-32 px-6 md:px-16 relative overflow-hidden">
          <FloatingAccents />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full border border-gray-200/30 hidden lg:block" />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="relative h-[650px] rounded-[2.5rem] overflow-hidden shadow-elevated hidden lg:block">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[2.5rem] border-2 border-[var(--color-brand-purple)]/10 z-0" />
              <Image src="/images/_O1A9951.jpg" alt="Katherine" fill className="object-cover relative z-10 rounded-[2.5rem]" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent z-20" />
            </div>

            <div className="flex flex-col gap-8">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-pink)] mb-2">Formación</p>
              <h2 className="font-heading italic text-4xl md:text-5xl mb-4">Certificaciones & <span className="not-italic font-black gradient-text">Educación</span></h2>

              <div className="space-y-4">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[var(--color-brand-purple)] rounded-l-2xl" />
                  <h3 className="font-heading italic text-xl mb-2 pl-4">Máster en Marketing Digital</h3>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 pl-4">IMF Smart Education</p>
                  <span className="inline-block mt-3 ml-4 px-4 py-1.5 bg-[var(--color-brand-purple)] text-white text-xs font-bold rounded-full">GA4 — 86%</span>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[var(--color-brand-pink)] rounded-l-2xl" />
                  <h3 className="font-heading italic text-xl mb-2 pl-4">Máster en Comunicación Digital</h3>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 pl-4">U. Católica de Ávila</p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gray-300 rounded-l-2xl" />
                  <h3 className="font-heading italic text-xl mb-2 pl-4">Ingeniería Civil</h3>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 pl-4">Universidad de Medellín</p>
                </div>
              </div>

              <div className="flex gap-4 mt-2">
                <span className="px-5 py-2 rounded-full bg-[var(--color-brand-black)] text-white text-xs font-bold uppercase tracking-widest">Español — Nativo</span>
                <span className="px-5 py-2 rounded-full border border-gray-300 text-xs font-bold uppercase tracking-widest">English — Professional</span>
              </div>

              {/* CTA with decorative elements */}
              <div className="mt-6 p-10 rounded-[2rem] bg-gradient-to-r from-[var(--color-brand-pink)] to-[var(--color-brand-purple)] text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-1/3" />
                <div className="relative z-10">
                  <h3 className="font-heading italic text-3xl mb-4">¿Lista para impulsar tu negocio?</h3>
                  <p className="text-white/80 font-light mb-8">Agenda una consulta estratégica gratuita.</p>
                  <button className="bg-white text-[var(--color-brand-black)] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:shadow-elevated hover:-translate-y-1 transition-all">
                    Agendar Consulta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
}
