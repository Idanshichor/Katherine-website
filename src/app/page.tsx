import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import { Button } from "@/components/ui/button";
import { FloatingIcons, FloatingAccents } from "@/components/floating-icons";
import { ScrollReveal } from "@/components/scroll-reveal";
import FaqAccordion from "@/components/faq-accordion";
import Image from "next/image";
import { Web3Form } from "@/components/web3-form";

export default function Page() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)] text-[var(--color-brand-black)]">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-start pt-32 pb-6 md:justify-center md:pt-24 md:pb-0 overflow-hidden bg-white">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0 bg-black">
          <Image src="/images/KT_Hero.webp" alt="Katherine Velasquez Background" fill className="object-cover object-[82%_40%] md:object-[75%_center]" priority unoptimized />
          {/* Mobile dark gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent md:hidden" />
        </div>

        {/* max-w-[1400px] instead of max-w-7xl to push text further left */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center flex-1 md:flex-none">
          <div className="flex flex-col text-center md:text-left z-20 h-full md:h-auto justify-between md:justify-center md:gap-6">

            {/* Top Text Group */}
            <p className="font-heading text-2xl md:text-3xl text-[var(--color-brand-cream)] mb-2 md:mb-0">
              <span className="italic">Consultoría Estratégica</span><br />
              <span className="font-body not-italic uppercase tracking-[0.2em] text-sm md:text-base font-medium">360</span>
            </p>

            {/* Bottom Text Group - pushed down on mobile */}
            <div className="flex flex-col gap-6 mt-auto md:mt-0 pt-16 md:pt-0 md:pb-0">
              
              <h1 className="order-1 font-heading text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-[var(--color-brand-cream)] mt-4 md:mt-0">
                <span className="block">Katherine</span>
                <span className="block">Velasquez</span>
              </h1>

              <div className="order-3 md:order-2 font-script text-2xl md:text-[2.25rem] lg:text-[2.75rem] text-[var(--color-brand-gold)] max-w-[500px] leading-tight text-center md:text-left mx-auto md:mx-0 md:-ml-2 mt-2 md:mt-4">
                Dirección estratégica para marcas y negocios con visión de futuro.
              </div>

              <div className="order-4 md:order-3 flex justify-center md:justify-start max-w-[480px] mx-auto md:mx-0">
                <p className="font-body text-[var(--color-brand-cream)] text-sm font-medium leading-relaxed text-center md:text-left">
                  Integro estructura de negocio, estrategia digital y mentalidad ejecutiva para escalar con claridad, sin dejar tu bienestar en el camino.
                </p>
              </div>
              
              <div className="order-2 md:order-4 flex justify-center md:justify-start max-w-[480px] mx-auto md:mx-0">
                <a href="https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29" target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-gold)] border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[var(--color-brand-gold-light)] transition-colors shadow-none cursor-pointer text-center inline-block">
                  Hablemos de tu proyecto
                </a>
              </div>

            </div>

          </div>
          <div className="hidden md:block"></div>
        </div>
      </section>

      {/* SCRIPT BANNER */}
      <section className="py-32 px-6 md:px-16 bg-[var(--color-brand-pink)] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] leading-tight text-[var(--color-brand-black)]">
            <span className="font-script text-7xl md:text-8xl lg:text-[8rem] block -mb-8 md:-mb-12 text-[var(--color-brand-black)]">para quienes</span>
            están construyendo<br />
            algo <span className="italic font-bold">real.</span>
          </h2>
          <p className="font-body text-[var(--color-brand-black)] mt-12 text-sm md:text-base font-medium max-w-2xl mx-auto">
            Startups, empresas y líderes que construyen su marca personal que ya pasaron la etapa de improvisar y hoy buscan claridad, estructura y un plan de expansión sostenible.
          </p>
        </div>
      </section>

      <Marquee />

      {/* CLIENT LOGOS */}
      <section className="py-24 px-6 md:px-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-12 md:gap-20">
          <p className="text-base font-black uppercase tracking-[0.3em] text-[var(--color-brand-black)] shrink-0 hidden md:block">Confían en Katherine</p>
          <div className="w-[1px] h-16 bg-gray-200 hidden md:block" />
          {[
            { src: "/images/BioChange_logo.png", alt: "BioChange", href: "https://biochange.life/" },
            { src: "/images/logo-roma-studio.webp", alt: "Roma Studio Creativo", href: "https://romastudiocreativo.es/" },
            { src: "/images/logo-bound-travel-updated.png", alt: "Bound To Travel", href: "https://www.boundtotravel.com/", scale: "scale-150" },
            { src: "/images/logo-aev.png", alt: "AevArk", href: "https://www.aevark.com/", scale: "scale-110" },
            { src: "/images/logo-lightu-v2.png", alt: "Light U", href: "https://www.lightu.es/" },
          ].map((logo) => (
            <a key={logo.alt} href={logo.href} target="_blank" rel="noopener noreferrer" className="block hover:-translate-y-1 transition-transform">
              <Image src={logo.src} alt={logo.alt} width={240} height={120} className={`object-contain grayscale opacity-40 hover:opacity-90 hover:grayscale-0 transition-all h-28 w-auto ${logo.scale || ""}`} />
            </a>
          ))}
        </div>
      </section>

      {/* QUIÉN SOY — redesigned as the "Let me guess" editorial block */}
      <ScrollReveal>
        <section id="quien-soy" className="py-32 px-6 md:px-16 bg-[var(--color-brand-gold-light)] relative overflow-hidden">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

            <div className="flex flex-col gap-8 order-2 lg:order-1 text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-black)]">El diagnóstico común</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[var(--color-brand-black)]">
                Tu negocio o marca está creciendo, pero te quedas preguntándote <span className="italic font-bold">¿qué sigue?</span>
              </h2>
              <p className="text-[var(--color-brand-black)] font-medium text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                Has construido tracción y tienes la validación del mercado, pero el día a día se siente reactivo. Falta alineación entre tus operaciones, tu comunicación y tu propia energía como líder.
                <br /><br />
                Soy la estratega a la que llamas cuando estás listo para dejar de adivinar y diseñar un plan claro de crecimiento.
              </p>
              <div className="flex justify-center lg:justify-start mt-4">
                <a href="https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29" target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-gold)] border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[var(--color-brand-gold-light)] transition-colors cursor-pointer text-center inline-block">
                  Conversar con Katherine
                </a>
              </div>
            </div>

            <div className="relative h-[450px] md:h-[600px] w-full p-6 lg:order-2 order-1 flex justify-center">
              {/* Thin gold border frame behind photo */}
              <div className="absolute inset-0 border border-[var(--color-brand-gold)] top-10 bottom-0 left-0 right-10 z-0 hidden lg:block" />

              <div className="relative w-full h-full z-10">
                <Image src="/images/KTSecondPhoto.webp" alt="Katherine Velasquez" fill sizes="(max-width: 768px) 100vw, 50vw" quality={90} className="object-cover object-[center_40%] border-4 border-white shadow-soft" />
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ABOUT PREVIEW */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-16 bg-[var(--color-brand-pink-light)]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-black)] mb-6">Hola, soy Katherine</p>
            <p className="font-body text-[var(--color-brand-black)] text-base md:text-lg leading-relaxed mb-10 text-left md:text-center">
              Soy Ingeniera Civil con doble maestría en Marketing y Comunicación Digital. Tras fundar mis propias empresas y asesorar proyectos en el ecosistema corporativo y de startups, entendí que un negocio no escala solo con buen marketing o mejores procesos.<br /><br />
              El verdadero crecimiento ocurre en la intersección de tres áreas: la <span className="font-bold">estructura del negocio</span>, la <span className="font-bold">estrategia de comunicación</span> y la <span className="font-bold">mentalidad del líder</span>. A esto lo llamo mi enfoque <span className="font-script text-3xl">360.</span> Ayudo a fundadores y marcas maduras a operar con sistema, claridad y dirección.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* MI MÉTODO 360 */}
      <ScrollReveal>
        <section id="metodologia" className="py-32 px-6 md:px-16 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h2 className="font-heading italic text-5xl md:text-7xl leading-tight text-[var(--color-brand-black)] mb-6">
              El Ecosistema <span className="not-italic font-black text-[var(--color-brand-gold)] font-script text-6xl">360</span>
            </h2>
            <p className="font-body text-gray-500 font-medium text-lg md:text-xl mb-20 max-w-2xl mx-auto">
              Con pilares interconectados. Una ejecución sólida.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
              {/* Pillar 1 */}
              <div>
                <p className="font-heading text-6xl text-[var(--color-brand-gold)] opacity-30 mb-4 font-black">01</p>
                <h3 className="font-heading text-2xl mb-4 italic font-bold">Estructura de Negocio</h3>
                <p className="font-body text-sm leading-relaxed text-gray-600">Optimizamos tus operaciones, flujos de trabajo y modelos de negocio. Si el motor interno no es eficiente, la tracción externa rompe la empresa.</p>
              </div>
              {/* Pillar 2 */}
              <div>
                <p className="font-heading text-6xl text-[var(--color-brand-gold)] opacity-30 mb-4 font-black">02</p>
                <h3 className="font-heading text-2xl mb-4 italic font-bold">Estrategia & Social Media</h3>
                <p className="font-body text-sm leading-relaxed text-gray-600">Creamos una narrativa de marca y una estrategia digital que no solo busque &quot;likes&quot;, sino que posicione tu autoridad, atraiga clientes ideales y convierta.</p>
              </div>
              {/* Pillar 3 */}
              <div>
                <p className="font-heading text-6xl text-[var(--color-brand-gold)] opacity-30 mb-4 font-black">03</p>
                <h3 className="font-heading text-2xl mb-4 italic font-bold">Mentalidad Ejecutiva</h3>
                <p className="font-body text-sm leading-relaxed text-gray-600">El cuello de botella de un negocio suele ser la mente de quien lo lidera. Trabajamos en la toma de decisiones, el enfoque estratégico y la resiliencia para sostener el crecimiento.</p>
              </div>
              {/* Pillar 4 */}
              <div>
                <p className="font-heading text-6xl text-[var(--color-brand-gold)] opacity-30 mb-4 font-black">04</p>
                <h3 className="font-heading text-2xl mb-4 italic font-bold">Ejecución & Medición</h3>
                <p className="font-body text-sm leading-relaxed text-gray-600">Implementamos con metodologías claras, medimos con datos reales y ajustamos. La estrategia sin ejecución es solo teoría.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SERVICIOS */}
      <ScrollReveal>
        <section id="servicios" className="py-32 px-6 md:px-16 bg-[var(--color-brand-gold-light)] relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="font-heading italic text-5xl md:text-6xl text-[var(--color-brand-black)] mb-6">Soluciones Estratégicas</h2>
              <p className="font-body text-[var(--color-brand-black)] font-medium text-lg">Estructura y claridad diseñadas para tu etapa actual.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Tier 1 - Standard */}
              <div className="bg-white p-10 rounded-[2rem] shadow-soft border border-white mt-0 lg:mt-8 mb-0 lg:-mb-8 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <h3 className="font-heading italic text-3xl mb-2 text-center text-[var(--color-brand-black)]">Mentoría de Marca Personal 360</h3>
                <p className="text-center font-bold text-sm uppercase tracking-widest text-gray-400 mb-6">Posicionamiento y autoridad para líderes</p>
                <p className="font-body text-sm text-gray-600 mb-8 leading-relaxed text-center">
                  Diseñado y personalizado para profesionales y fundadores que quieren empaquetar su conocimiento, dominar su nicho y construir una marca personal influyente con una estrategia de contenidos clara y una mentalidad inquebrantable.
                </p>
                <ul className="space-y-3 mb-10 text-sm font-medium text-gray-700">
                  <li className="flex gap-2 items-start"><span>✦</span> <span>Definición de pilares de posicionamiento.</span></li>
                  <li className="flex gap-2 items-start font-bold text-[var(--color-brand-black)]"><span>✦</span> <span>Auditoría de diferenciación y análisis de brechas en el mercado.</span></li>
                  <li className="flex gap-2 items-start"><span>✦</span> <span>Estrategia integral de Social Media y contenidos.</span></li>
                  <li className="flex gap-2 items-start"><span>✦</span> <span>Formación en <em className="italic">UX Writing</em> y narrativa de autoridad.</span></li>
                  <li className="flex gap-2 items-start"><span>✦</span> <span>Trabajo de enfoque y mentalidad.</span></li>
                  <li className="flex gap-2 items-start"><span>✦</span> <span>Plan de acción personalizado a tu ritmo.</span></li>
                </ul>
                <div className="flex justify-center mt-auto">
                  <a href="https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-8 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] w-full hover:bg-[var(--color-brand-black)] hover:text-white transition-colors cursor-pointer text-center block">
                    Potenciar mi marca
                  </a>
                </div>
              </div>

              {/* Tier 2 - Featured (Center) */}
              <div className="bg-white p-10 rounded-[2rem] shadow-elevated border-2 border-[var(--color-brand-gold)] relative flex flex-col z-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-brand-black)] text-white text-[10px] font-bold tracking-widest uppercase py-1 px-4 rounded-full">
                  Destacado
                </div>
                <h3 className="font-heading italic text-3xl mb-1 text-center text-[var(--color-brand-black)]">Consultoría 1:1 Premium (Empresas y Startups)</h3>
                <p className="text-center font-bold text-sm uppercase tracking-widest text-[var(--color-brand-gold)] mb-6">Dirección y optimización de negocio</p>
                <p className="font-body text-sm text-gray-600 mb-8 leading-relaxed text-center">
                  Un diagnóstico profundo y acompañamiento estratégico personalizado para startups y empresas constituidas. Alineamos tus objetivos comerciales con tu operación y tu presencia digital.
                </p>
                <ul className="space-y-3 mb-10 text-sm font-medium text-gray-700">
                  <li className="flex gap-2 items-start"><span>✦</span> <span>Diagnóstico profundo de operaciones actuales.</span></li>
                  <li className="flex gap-2 items-start"><span>✦</span> <span>Plan estratégico de expansión a 90 días.</span></li>
                  <li className="flex gap-2 items-start"><span>✦</span> <span>Alineación de Mkt / Ventas / Operaciones.</span></li>
                  <li className="flex gap-2 items-start"><span>✦</span> <span>Auditoría analítica</span></li>
                  <li className="flex gap-2 items-start"><span>✦</span> <span>Acompañamiento en toma de decisiones.</span></li>
                  <li className="flex gap-2 items-start"><span>✦</span> <span>Soporte y acceso directo vía WhatsApp.</span></li>
                </ul>
                <div className="flex justify-center mt-auto">
                  <a href="https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29" target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-gold)] border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-8 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] w-full hover:bg-[var(--color-brand-gold-light)] transition-colors cursor-pointer text-center block">
                    Solicitar sesión de diagnóstico
                  </a>
                </div>
              </div>

              {/* Tier 3 */}
              <div className="bg-white p-10 rounded-[2rem] shadow-soft border border-white mt-0 lg:mt-8 mb-0 lg:-mb-8 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <h3 className="font-heading italic text-3xl mb-2 text-center text-[var(--color-brand-black)]">Talleres e In-Company</h3>
                <p className="text-center font-bold text-sm uppercase tracking-widest text-gray-400 mb-6">Capacitación estratégica para equipos</p>
                <p className="font-body text-sm text-gray-600 mb-8 leading-relaxed text-center">
                  Sesiones intensivas y workshops para alinear a tu equipo de trabajo bajo el Ecosistema 360.
                </p>
                <ul className="space-y-3 mb-10 text-sm font-medium text-gray-700">
                  <li className="flex gap-2 items-start"><span>✦</span> <span>Workshops intensivos (presenciales u online).</span></li>
                  <li className="flex gap-2 items-start"><span>✦</span> <span>Capacitación práctica en analítica digital.</span></li>
                  <li className="flex gap-2 items-start"><span>✦</span> <span>Implementación del Ecosistema 360.</span></li>
                  <li className="flex gap-2 items-start"><span>✦</span> <span>Optimización y agilidad en procesos internos.</span></li>
                  <li className="flex gap-2 items-start"><span>✦</span> <span>Alineación e integración del equipo de trabajo.</span></li>
                  <li className="flex gap-2 items-start"><span>✦</span> <span>Material práctico y playbooks de ejecución.</span></li>
                </ul>
                <div className="flex justify-center mt-auto">
                  <a href="https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-8 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] w-full hover:bg-[var(--color-brand-black)] hover:text-white transition-colors cursor-pointer text-center block">
                    Consultar disponibilidad
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* NEWSLETTER SECTION */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-16 bg-[var(--color-brand-cream)]">
          <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 rounded-[2rem] border border-[var(--color-brand-gold-light)] shadow-elevated text-center flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-brand-gold)] mb-4">Recibe el Newsletter 360</p>
            <h2 className="font-heading italic text-4xl text-[var(--color-brand-black)] mb-6">Estrategia Directo a tu Bandeja</h2>
            <p className="font-body text-[var(--color-brand-black)] mb-10 leading-relaxed max-w-lg mx-auto">
              Ideas semanales sobre optimización de negocios, analítica y estrategia digital para fundadores. Sin rodeos.
            </p>
            <Web3Form subject="Nuevo Suscriptor - Newsletter (Sección Principal)" className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto w-full" variant="main" />
          </div>
        </section>
      </ScrollReveal>

      {/* PODCAST SECTION */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-16 bg-[var(--color-brand-pink-light)]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Podcast Image */}
            <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elevated">
              <Image src="/images/KT_Podcast.webp" alt="KT Podcast" fill className="object-cover" />
            </div>

            {/* Podcast Content */}
            <div className="flex flex-col text-center md:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-brand-black)] mb-4 opacity-70">Próximamente</p>
              <h2 className="font-heading italic text-5xl md:text-6xl text-[var(--color-brand-black)] mb-6">Estrategia 360:<br />El Podcast</h2>
              <p className="font-body text-base text-[var(--color-brand-black)] font-medium mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
                Conversaciones honestas, análisis de negocio y herramientas de crecimiento personal para líderes que prefieren la sustancia por encima del <em className="italic">hype</em>. <strong className="font-bold">A través de historias reales de líderes reales</strong>, descubrimos el camino detrás del éxito y la mentalidad necesaria para sostenerlo.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="bg-transparent border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-colors cursor-pointer opacity-70 hover:bg-[var(--color-brand-black)] hover:text-white">
                  Disponible Pronto
                </button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* TESTIMONIALS */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-16 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-heading italic text-3xl md:text-4xl text-[var(--color-brand-black)] mb-16">
              Lo que dicen las que ya están construyendo con claridad
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: "I had an excellent experience working with Katherine on design and marketing. I highly recommend her for her creativity and flexibility.",
                  name: "Hilit Hochman",
                  role: "Marketing VP, BioChange"
                },
                {
                  text: "Trabajar con Katherine ha sido una experiencia absolutamente increíble. Su metodología, sus estrategias y su mentalidad empresarial son de otro nivel. Gracias a su dirección estratégica, nos ha ayudado a escalar y superar los $250,000 en ventas. Si de verdad hablas en serio sobre hacer crecer tu negocio, Katherine es la estratega que necesitas a tu lado.",
                  name: "Idan Shichor",
                  role: "CEO, Bound to Travel"
                },
                {
                  text: "Ha sido una experiencia muy linda y enriquecedora. Desde el primer momento he sentido un acompañamiento muy personalizado, siempre con atención, paciencia y compromiso. Es una persona muy dedicada, apasionada por lo que hace y realmente se preocupa por brindar lo mejor en cada detalle. Me he sentido escuchada, apoyada y muy satisfecha con todo el proceso. Sin duda, recomiendo totalmente su trabajo por la calidad humana y profesional que transmite.",
                  name: "Yulieth Mattos",
                  role: "Emprendedora"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-[var(--color-brand-cream)] p-10 rounded-[2rem] border border-[var(--color-brand-gold-light)] shadow-soft text-left flex flex-col">
                  <div className="text-[var(--color-brand-gold)] font-heading text-4xl mb-4 leading-none">"</div>
                  <p className="font-body text-gray-600 leading-relaxed mb-8 flex-grow">
                    {testimonial.text}
                  </p>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-[10px] text-[var(--color-brand-black)]">{testimonial.name}</p>
                    <p className="text-[10px] text-gray-500 mt-1">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section className="py-32 px-6 md:px-16 bg-[var(--color-brand-gold-light)]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading italic text-4xl md:text-6xl text-[var(--color-brand-black)]">
                Preguntas <span className="font-script text-5xl md:text-7xl">antes de empezar</span>
              </h2>
            </div>
            <FaqAccordion />
          </div>
        </section>
      </ScrollReveal>

      {/* FINAL CTA */}
      <ScrollReveal>
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <div id="contacto" className="p-14 md:p-20 bg-[var(--color-brand-pink-light)] border-2 border-[var(--color-brand-gold)] text-[var(--color-brand-black)] text-center relative overflow-hidden shadow-none rounded-[2rem]">
              <div className="relative z-10">
                <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-4 text-[var(--color-brand-black)]">
                  Deja de improvisar el próximo <span className="italic font-script text-5xl md:text-7xl text-[var(--color-brand-black)]">paso</span> de tu negocio
                </h3>
                <p className="font-body font-medium mb-10 text-base md:text-lg max-w-xl mx-auto text-[var(--color-brand-black)]">
                  Agenda una sesión estratégica de 30 minutos. Analizaremos dónde está tu negocio hoy y definiremos la hoja de ruta para tu enfoque 360.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29" target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-gold)] text-[var(--color-brand-black)] border-2 border-[var(--color-brand-black)] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[var(--color-brand-gold-light)] transition-colors cursor-pointer text-center inline-block">
                    Programar mi sesión
                  </a>
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
