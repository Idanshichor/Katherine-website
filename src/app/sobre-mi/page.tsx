"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useLanguage } from "@/context/language-context";
import Link from "next/link";

export default function AboutPage() {
  const { language, t } = useLanguage();

  // Travel destinations list for Chapter 6 route visual
  const destinations = [
    { es: "Medellín", en: "Medellín" },
    { es: "Madrid", en: "Madrid" },
    { es: "India", en: "India" },
    { es: "Vietnam", en: "Vietnam" },
    { es: "Tailandia", en: "Thailand" },
    { es: "Israel", en: "Israel" },
    { es: "Italia", en: "Italy" },
    { es: "EE.UU.", en: "USA" }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)] text-[var(--color-brand-black)] overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-white">
        {/* Abstract design elements to set a premium editorial mood */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[var(--color-brand-pink-light)] opacity-35 blur-3xl z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[var(--color-brand-gold-light)] opacity-25 blur-3xl z-0" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-black)] mb-6 bg-[var(--color-brand-pink-light)] w-max px-4 py-1.5 rounded-full mx-auto block shadow-soft">
            {t("aboutPage.heroTag")}
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[var(--color-brand-black)] mb-8">
            {t("aboutPage.heroTitlePart1")}<br />
            <span className="italic font-bold text-[var(--color-brand-pink)]">{t("aboutPage.heroTitlePart2")}</span>
          </h1>
          <p className="font-body text-gray-600 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto font-medium">
            {t("aboutPage.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* CHAPTER 1: RAÍCES E INDEPENDENCIA */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-16 bg-[var(--color-brand-cream)]">
          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12 items-center">
            
            {/* Year / Chapter Marker */}
            <div className="md:col-span-2 flex flex-row md:flex-col gap-4 items-baseline md:items-start">
              <span className="font-heading text-8xl font-black text-[var(--color-brand-gold)] opacity-30 select-none leading-none">01</span>
              <div>
                <h2 className="font-heading italic text-2xl md:text-3xl text-[var(--color-brand-black)] leading-tight">
                  {t("aboutPage.ch1Title")}
                </h2>
                <div className="w-12 h-[2px] bg-[var(--color-brand-gold)] mt-4 hidden md:block" />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium">
                {t("aboutPage.ch1Text")}
              </p>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* CHAPTER 2: LA MARATÓN ACADÉMICA */}
      <ScrollReveal>
        <section className="py-28 px-6 md:px-16 bg-white">
          <div className="max-w-5xl mx-auto">
            
            <div className="grid md:grid-cols-5 gap-12 items-start mb-16">
              {/* Year / Chapter Marker */}
              <div className="md:col-span-2 flex flex-row md:flex-col gap-4 items-baseline md:items-start lg:sticky lg:top-36">
                <span className="font-heading text-8xl font-black text-[var(--color-brand-pink)] opacity-30 select-none leading-none">02</span>
                <div>
                  <h2 className="font-heading italic text-2xl md:text-3xl text-[var(--color-brand-black)] leading-tight">
                    {t("aboutPage.ch2Title")}
                  </h2>
                  <div className="w-12 h-[2px] bg-[var(--color-brand-pink)] mt-4 hidden md:block" />
                </div>
              </div>

              {/* Text */}
              <div className="md:col-span-3 space-y-6">
                <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium">
                  {t("aboutPage.ch2Text1")}
                </p>
              </div>
            </div>

            {/* VISUAL FEATURE: The Marathon Schedule (Interactive day-night split grid) */}
            <div className="bg-[var(--color-brand-cream)] rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-soft max-w-4xl mx-auto mb-16">
              <h3 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 text-center">
                {language === "es" ? "DIARIO DE UNA MARATÓN (3 AÑOS EN SIMULTÁNEO)" : "DIARY OF A MARATHON (3 YEARS SIMULTANEOUSLY)"}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Day */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                  <span className="w-10 h-10 rounded-full bg-[var(--color-brand-gold-light)] text-[var(--color-brand-gold)] flex items-center justify-center font-bold text-sm mb-4">☀</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">{language === "es" ? "Mañana y Tarde" : "Morning & Afternoon"}</span>
                  <h4 className="font-heading font-bold text-base text-[var(--color-brand-black)] mb-2">{language === "es" ? "Ingeniería Civil" : "Civil Engineering"}</h4>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">{language === "es" ? "Estudiando riesgos de precipitación y estructuras." : "Studying rainfall runoff risk and structure modeling."}</p>
                </div>

                {/* Afternoon */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                  <span className="w-10 h-10 rounded-full bg-[var(--color-brand-pink-light)] text-[var(--color-brand-pink)] flex items-center justify-center font-bold text-sm mb-4">✦</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">{language === "es" ? "Aplicación Directa" : "Direct Application"}</span>
                  <h4 className="font-heading font-bold text-base text-[var(--color-brand-black)] mb-2">{language === "es" ? "MBA & Negocios" : "MBA & Businesses"}</h4>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">{language === "es" ? "Estudiando y aplicando cada clase a mi tattoo studio y rock shop." : "Studying and immediately applying MBA logic to my store and studio."}</p>
                </div>

                {/* Night */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                  <span className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm mb-4">☽</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">{language === "es" ? "Noche" : "Nighttime"}</span>
                  <h4 className="font-heading font-bold text-base text-[var(--color-brand-black)] mb-2">{language === "es" ? "Bailarina Profesional" : "Professional Dancer"}</h4>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">{language === "es" ? "Trabajando en escenarios para financiar mis metas independientes." : "Working on stages to fund my independent financial goals."}</p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium border-l-4 border-l-[var(--color-brand-gold)] pl-6">
                {t("aboutPage.ch2Text2")}
              </p>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* CHAPTER 3: EL CHOQUE Y LA QUIEBRA (Immersive Dark-Mode Banner) */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-16 bg-[var(--color-brand-black)] text-white rounded-[3.5rem] mx-4 md:mx-8 my-8 relative overflow-hidden shadow-2xl border border-gray-900">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-brand-pink)]/5 blur-3xl z-0 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto relative z-10 grid md:grid-cols-5 gap-12 items-center">
            
            {/* Title / Chapter */}
            <div className="md:col-span-2 flex flex-row md:flex-col gap-4 items-baseline md:items-start">
              <span className="font-heading text-8xl font-black text-[var(--color-brand-pink)] opacity-20 select-none leading-none">03</span>
              <div>
                <h2 className="font-heading italic text-2xl md:text-3xl text-white leading-tight">
                  {t("aboutPage.ch3Title")}
                </h2>
                <div className="w-12 h-[2px] bg-[var(--color-brand-pink)] mt-4 hidden md:block" />
              </div>
            </div>

            {/* Text & Climax Quote */}
            <div className="md:col-span-3 space-y-8">
              <p className="font-body text-base md:text-lg leading-relaxed text-gray-300 font-medium">
                {t("aboutPage.ch3Text")}
              </p>
              
              <div className="w-full h-[1px] bg-gray-800" />
              
              <h3 className="font-heading italic text-3xl md:text-4xl lg:text-5xl text-[var(--color-brand-pink)] leading-[1.1] tracking-tight font-bold">
                &ldquo;{t("aboutPage.ch3Callout")}&rdquo;
              </h3>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* CHAPTER 4: RESILIENCIA DESDE CERO */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-16 bg-white">
          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12 items-center">
            
            {/* Year / Chapter Marker */}
            <div className="md:col-span-2 flex flex-row md:flex-col gap-4 items-baseline md:items-start">
              <span className="font-heading text-8xl font-black text-[var(--color-brand-gold)] opacity-30 select-none leading-none">04</span>
              <div>
                <h2 className="font-heading italic text-2xl md:text-3xl text-[var(--color-brand-black)] leading-tight">
                  {t("aboutPage.ch4Title")}
                </h2>
                <div className="w-12 h-[2px] bg-[var(--color-brand-gold)] mt-4 hidden md:block" />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium bg-[var(--color-brand-pink-light)]/20 p-8 rounded-[2rem] border border-[var(--color-brand-pink-light)]/40">
                {t("aboutPage.ch4Text")}
              </p>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* CHAPTER 5: EMIGRAR DE GOLPE & GESTIÓN DE RIESGO */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-16 bg-[var(--color-brand-cream)]">
          <div className="max-w-4xl mx-auto">
            
            <div className="grid md:grid-cols-5 gap-12 items-start mb-16">
              {/* Year / Chapter Marker */}
              <div className="md:col-span-2 flex flex-row md:flex-col gap-4 items-baseline md:items-start lg:sticky lg:top-36">
                <span className="font-heading text-8xl font-black text-[var(--color-brand-pink)] opacity-30 select-none leading-none">05</span>
                <div>
                  <h2 className="font-heading italic text-2xl md:text-3xl text-[var(--color-brand-black)] leading-tight">
                    {t("aboutPage.ch5Title")}
                  </h2>
                  <div className="w-12 h-[2px] bg-[var(--color-brand-pink)] mt-4 hidden md:block" />
                </div>
              </div>

              {/* Text */}
              <div className="md:col-span-3">
                <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium">
                  {t("aboutPage.ch5Text")}
                </p>
              </div>
            </div>

            {/* FEATURED QUOTE FRAME (Risk management statement) */}
            <div className="max-w-3xl mx-auto border-2 border-[var(--color-brand-gold)] bg-white rounded-[2.5rem] p-8 md:p-12 relative shadow-soft text-center my-8">
              <span className="absolute -top-6 left-12 font-heading text-7xl text-[var(--color-brand-gold)] leading-none select-none">&ldquo;</span>
              <p className="font-heading italic text-2xl md:text-3xl text-[var(--color-brand-black)] leading-relaxed relative z-10 px-4 md:px-8">
                {t("aboutPage.ch5Quote")}
              </p>
              <span className="absolute -bottom-12 right-12 font-heading text-7xl text-[var(--color-brand-gold)] leading-none select-none">&rdquo;</span>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* CHAPTER 6: LAS CHOCOAVENTURAS Y MANGO CREATIVE */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-16 bg-white">
          <div className="max-w-5xl mx-auto">
            
            <div className="grid md:grid-cols-5 gap-12 items-start mb-16">
              {/* Year / Chapter Marker */}
              <div className="md:col-span-2 flex flex-row md:flex-col gap-4 items-baseline md:items-start lg:sticky lg:top-36">
                <span className="font-heading text-8xl font-black text-[var(--color-brand-gold)] opacity-30 select-none leading-none">06</span>
                <div>
                  <h2 className="font-heading italic text-2xl md:text-3xl text-[var(--color-brand-black)] leading-tight">
                    {t("aboutPage.ch6Title")}
                  </h2>
                  <div className="w-12 h-[2px] bg-[var(--color-brand-gold)] mt-4 hidden md:block" />
                </div>
              </div>

              {/* Multi-paragraph content */}
              <div className="md:col-span-3 space-y-8">
                <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium">
                  {t("aboutPage.ch6Text1")}
                </p>
                <div className="w-12 h-[1px] bg-gray-200" />
                <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium">
                  {t("aboutPage.ch6Text2")}
                </p>
                <div className="w-12 h-[1px] bg-gray-200" />
                <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium">
                  {t("aboutPage.ch6Text3")}
                </p>
              </div>
            </div>

            {/* VISUAL ROUTE: Emigration timeline map line */}
            <div className="bg-[var(--color-brand-cream)] rounded-2xl p-6 overflow-x-auto max-w-4xl mx-auto shadow-sm border border-gray-50 mt-12">
              <div className="flex items-center justify-between min-w-[650px] px-4 py-2">
                {destinations.map((dest, i) => (
                  <div key={i} className="flex items-center gap-2 group">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-[var(--color-brand-gold)] text-white flex items-center justify-center text-[10px] font-bold shadow-soft">
                        {i + 1}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-gray-500 mt-2 font-body">
                        {language === "es" ? dest.es : dest.en}
                      </span>
                    </div>
                    {i < destinations.length - 1 && (
                      <div className="w-10 md:w-16 h-[2px] bg-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* CHAPTER 7: LA PREGUNTA DE LOS VIAJEROS */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-16 bg-[var(--color-brand-pink-light)]/30">
          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12 items-center">
            
            {/* Year / Chapter Marker */}
            <div className="md:col-span-2 flex flex-row md:flex-col gap-4 items-baseline md:items-start">
              <span className="font-heading text-8xl font-black text-[var(--color-brand-pink)] opacity-30 select-none leading-none">07</span>
              <div>
                <h2 className="font-heading italic text-2xl md:text-3xl text-[var(--color-brand-black)] leading-tight">
                  {t("aboutPage.ch7Title")}
                </h2>
                <div className="w-12 h-[2px] bg-[var(--color-brand-pink)] mt-4 hidden md:block" />
              </div>
            </div>

            {/* Messenger-style dialogue block & description */}
            <div className="md:col-span-3 space-y-8">
              <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium">
                {t("aboutPage.ch7Text1")}
              </p>

              {/* Dialogue Box */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-soft border border-white/80 max-w-md relative border-l-4 border-l-[var(--color-brand-gold)]">
                <span className="absolute -top-3 left-6 text-xs font-bold uppercase tracking-wider text-gray-400 bg-[var(--color-brand-cream)] px-2 py-0.5 rounded-full border border-gray-100">
                  {language === "es" ? "Pregunta Típica" : "Typical Question"}
                </span>
                <p className="font-heading italic text-lg md:text-xl text-[var(--color-brand-black)] leading-relaxed mt-2">
                  {t("aboutPage.ch7Dialog")}
                </p>
              </div>

              <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium">
                {t("aboutPage.ch7Text2")}
              </p>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* CHAPTER 8: NACE ESTRATEGIA 360 */}
      <ScrollReveal>
        <section className="py-28 px-6 md:px-16 bg-white relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-heading text-8xl font-black text-[var(--color-brand-gold)] opacity-20 select-none leading-none block mb-6">08</span>
            
            <h2 className="font-heading italic text-3xl md:text-5xl text-[var(--color-brand-black)] mb-10">
              {t("aboutPage.ch8Title")}
            </h2>
            
            {/* Climax Container Card */}
            <div className="bg-[var(--color-brand-cream)] border-2 border-[var(--color-brand-gold)] rounded-[3rem] p-10 md:p-14 shadow-soft max-w-3xl mx-auto space-y-8">
              <p className="font-body text-lg md:text-xl leading-relaxed text-gray-800 font-bold max-w-xl mx-auto">
                {t("aboutPage.ch8Text1")}
              </p>
              
              <div className="w-20 h-[2px] bg-[var(--color-brand-pink)] mx-auto" />
              
              <p className="font-body text-base md:text-lg leading-relaxed text-gray-600 font-medium max-w-2xl mx-auto">
                {t("aboutPage.ch8Text2")}
              </p>

              <div className="pt-4">
                <span className="text-xl md:text-2xl font-heading font-black uppercase tracking-[0.2em] text-[var(--color-brand-black)] border-b-2 border-b-[var(--color-brand-gold)] pb-2">
                  {t("aboutPage.ch8Text3")}
                </span>
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* CALL TO ACTION: PERSONAL COFFEE CHAT */}
      <ScrollReveal>
        <section className="py-28 px-6 md:px-16 bg-[var(--color-brand-cream)] relative overflow-hidden">
          <div className="absolute top-1/2 -left-24 w-60 h-60 rounded-full bg-[var(--color-brand-pink-light)] opacity-40 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 -right-24 w-80 h-80 rounded-full bg-[var(--color-brand-gold-light)] opacity-35 blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10 text-center">
            
            <h2 className="font-heading italic text-4xl md:text-6xl text-[var(--color-brand-black)] mb-8">
              {t("aboutPage.ctaTitle")}
            </h2>

            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-elevated border border-gray-100 space-y-8 text-left">
              <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium">
                {t("aboutPage.ctaText1")}
              </p>
              
              <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium border-l-4 border-l-[var(--color-brand-pink)] pl-6 italic">
                {t("aboutPage.ctaText2")}
              </p>

              <div className="pt-6">
                <Link 
                  href="https://wa.me/573216154870?text=Hola%20Kathe%2C%20le%C3%AD%20tu%20historia%20en%20sobre-mi%20y%20me%20encantar%C3%ADa%20que%20nos%20tomemos%20un%20caf%C3%A9%20para%20hablar%20de%20negocios%20%3A%29" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full bg-[var(--color-brand-gold)] border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[var(--color-brand-gold-light)] transition-colors shadow-none text-center cursor-pointer font-body"
                >
                  {t("aboutPage.ctaButton")}
                </Link>
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
}
