"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useLanguage } from "@/context/language-context";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)] text-[var(--color-brand-black)] overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden bg-[var(--color-brand-pink-light)]">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[var(--color-brand-gold-light)] opacity-35 blur-3xl z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white opacity-25 blur-3xl z-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="flex flex-col text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-black)] mb-6 bg-white w-max px-4 py-1.5 rounded-full mx-auto md:mx-0 shadow-soft">
              {t("aboutPage.heroTag")}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[var(--color-brand-black)] mb-6">
              {t("aboutPage.heroTitlePart1")}<br />
              <span className="italic font-bold text-[var(--color-brand-pink)]">{t("aboutPage.heroTitlePart2")}</span>
            </h1>
            <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed font-medium max-w-xl mx-auto md:mx-0">
              {t("aboutPage.heroSubtitle")}
            </p>
          </div>

          {/* Right: Katherine Second Photo with offset frame */}
          <div className="relative h-[350px] md:h-[450px] lg:h-[500px] w-full max-w-[400px] mx-auto flex justify-center">
            {/* Offset Gold Border Frame */}
            <div className="absolute inset-0 border border-[var(--color-brand-gold)] top-6 bottom-0 left-0 right-6 z-0 hidden md:block rounded-2xl" />
            
            <div className="relative w-full h-full z-10 rounded-[2rem] overflow-hidden shadow-elevated border-4 border-white bg-white">
              <Image 
                src="/images/KTSecondPhoto.webp" 
                alt="Katherine Velasquez" 
                fill 
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-[center_35%]" 
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* CHAPTER 1: RAÍCES E INDEPENDENCIA (White Card style) */}
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-4 my-8">
          <div className="py-16 md:py-24 px-8 md:px-16 rounded-[3.5rem] bg-white border border-gray-100 shadow-soft relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10 grid md:grid-cols-5 gap-12 items-center">
              
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
          </div>
        </div>
      </ScrollReveal>

      {/* CHAPTER 2: LA MARATÓN ACADÉMICA (Warm Gold Light Card style) */}
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-4 my-8">
          <div className="py-16 md:py-24 px-8 md:px-16 rounded-[3.5rem] bg-[var(--color-brand-gold-light)] border border-[var(--color-brand-gold-light)] shadow-soft relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10 grid md:grid-cols-5 gap-12 items-center">
              
              {/* Year / Chapter Marker */}
              <div className="md:col-span-2 flex flex-row md:flex-col gap-4 items-baseline md:items-start">
                <span className="font-heading text-8xl font-black text-[var(--color-brand-pink)] opacity-35 select-none leading-none">02</span>
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
                <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium border-l-4 border-l-[var(--color-brand-pink)] pl-6">
                  {t("aboutPage.ch2Text2")}
                </p>
              </div>

            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* CHAPTER 3: EL CHOQUE Y LA QUIEBRA (Immersive Dark-Mode Card style) */}
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-4 my-8">
          <div className="py-16 md:py-24 px-8 md:px-16 rounded-[3.5rem] bg-[var(--color-brand-black)] text-white border border-gray-900 shadow-2xl relative overflow-hidden">
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
          </div>
        </div>
      </ScrollReveal>

      {/* CHAPTER 4: RESILIENCIA DESDE CERO (Soft Pink Light Card style) */}
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-4 my-8">
          <div className="py-16 md:py-24 px-8 md:px-16 rounded-[3.5rem] bg-[var(--color-brand-pink-light)] border border-[var(--color-brand-pink-light)] shadow-soft relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10 grid md:grid-cols-5 gap-12 items-center">
              
              {/* Year / Chapter Marker */}
              <div className="md:col-span-2 flex flex-row md:flex-col gap-4 items-baseline md:items-start">
                <span className="font-heading text-8xl font-black text-[var(--color-brand-gold)] opacity-35 select-none leading-none">04</span>
                <div>
                  <h2 className="font-heading italic text-2xl md:text-3xl text-[var(--color-brand-black)] leading-tight">
                    {t("aboutPage.ch4Title")}
                  </h2>
                  <div className="w-12 h-[2px] bg-[var(--color-brand-gold)] mt-4 hidden md:block" />
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-3">
                <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium bg-white p-8 rounded-[2rem] border border-white shadow-soft">
                  {t("aboutPage.ch4Text")}
                </p>
              </div>

            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* CHAPTER 5: EMIGRAR DE GOLPE & GESTIÓN DE RIESGO (White Card style) */}
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-4 my-8">
          <div className="py-16 md:py-24 px-8 md:px-16 rounded-[3.5rem] bg-white border border-gray-100 shadow-soft relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10 grid md:grid-cols-5 gap-12 items-center">
              
              {/* Year / Chapter Marker */}
              <div className="md:col-span-2 flex flex-row md:flex-col gap-4 items-baseline md:items-start">
                <span className="font-heading text-8xl font-black text-[var(--color-brand-pink)] opacity-30 select-none leading-none">05</span>
                <div>
                  <h2 className="font-heading italic text-2xl md:text-3xl text-[var(--color-brand-black)] leading-tight">
                    {t("aboutPage.ch5Title")}
                  </h2>
                  <div className="w-12 h-[2px] bg-[var(--color-brand-pink)] mt-4 hidden md:block" />
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-3 space-y-8">
                <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium">
                  {t("aboutPage.ch5Text")}
                </p>
                
                {/* Quote Block inside Card */}
                <div className="border-2 border-[var(--color-brand-gold)] bg-[var(--color-brand-cream)] rounded-[2.5rem] p-8 md:p-10 relative shadow-sm text-center">
                  <span className="absolute -top-4 left-8 font-heading text-6xl text-[var(--color-brand-gold)] leading-none select-none">&ldquo;</span>
                  <p className="font-heading italic text-xl md:text-2xl text-[var(--color-brand-black)] leading-relaxed relative z-10">
                    {t("aboutPage.ch5Quote")}
                  </p>
                  <span className="absolute -bottom-10 right-8 font-heading text-6xl text-[var(--color-brand-gold)] leading-none select-none">&rdquo;</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* CHAPTER 6: LAS CHOCOAVENTURAS Y MANGO CREATIVE (Warm Gold Light Card style) */}
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-4 my-8">
          <div className="py-16 md:py-24 px-8 md:px-16 rounded-[3.5rem] bg-[var(--color-brand-gold-light)] border border-[var(--color-brand-gold-light)] shadow-soft relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10 grid md:grid-cols-5 gap-12 items-center">
              
              {/* Year / Chapter Marker */}
              <div className="md:col-span-2 flex flex-row md:flex-col gap-4 items-baseline md:items-start">
                <span className="font-heading text-8xl font-black text-[var(--color-brand-gold)] opacity-35 select-none leading-none">06</span>
                <div>
                  <h2 className="font-heading italic text-2xl md:text-3xl text-[var(--color-brand-black)] leading-tight">
                    {t("aboutPage.ch6Title")}
                  </h2>
                  <div className="w-12 h-[2px] bg-[var(--color-brand-gold)] mt-4 hidden md:block" />
                </div>
              </div>

              {/* Multi-paragraph content */}
              <div className="md:col-span-3 space-y-6">
                <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium">
                  {t("aboutPage.ch6Text1")}
                </p>
                <div className="w-12 h-[1px] bg-gray-300 opacity-60" />
                <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium">
                  {t("aboutPage.ch6Text2")}
                </p>
                <div className="w-12 h-[1px] bg-gray-300 opacity-60" />
                <p className="font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium">
                  {t("aboutPage.ch6Text3")}
                </p>
              </div>

            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* CHAPTER 7: LA PREGUNTA DE LOS VIAJEROS (White Card style) */}
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-4 my-8">
          <div className="py-16 md:py-24 px-8 md:px-16 rounded-[3.5rem] bg-white border border-gray-100 shadow-soft relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10 grid md:grid-cols-5 gap-12 items-center">
              
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
                <div className="bg-[var(--color-brand-pink-light)]/40 rounded-3xl p-6 md:p-8 shadow-soft border border-[var(--color-brand-pink-light)]/60 max-w-md relative border-l-4 border-l-[var(--color-brand-gold)]">
                  <span className="absolute -top-3 left-6 text-xs font-bold uppercase tracking-wider text-gray-400 bg-white px-2 py-0.5 rounded-full border border-gray-100">
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
          </div>
        </div>
      </ScrollReveal>

      {/* CHAPTER 8: NACE ESTRATEGIA 360 (Soft Pink Light Card style) */}
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-4 my-8">
          <div className="py-16 md:py-24 px-8 md:px-16 rounded-[3.5rem] bg-[var(--color-brand-pink-light)] border border-[var(--color-brand-pink-light)] shadow-soft relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10 grid md:grid-cols-5 gap-12 items-center">
              
              {/* Year / Chapter Marker */}
              <div className="md:col-span-2 flex flex-row md:flex-col gap-4 items-baseline md:items-start">
                <span className="font-heading text-8xl font-black text-[var(--color-brand-gold)] opacity-25 select-none leading-none">08</span>
                <div>
                  <h2 className="font-heading italic text-2xl md:text-3xl text-[var(--color-brand-black)] leading-tight">
                    {t("aboutPage.ch8Title")}
                  </h2>
                  <div className="w-12 h-[2px] bg-[var(--color-brand-gold)] mt-4 hidden md:block" />
                </div>
              </div>

              {/* Climax Container Card inside Card */}
              <div className="md:col-span-3">
                <div className="bg-white border-2 border-[var(--color-brand-gold)] rounded-[2.5rem] p-8 md:p-10 shadow-soft space-y-6">
                  <p className="font-body text-base md:text-lg leading-relaxed text-gray-800 font-bold">
                    {t("aboutPage.ch8Text1")}
                  </p>
                  <div className="w-16 h-[2px] bg-[var(--color-brand-pink)]" />
                  <p className="font-body text-sm md:text-base leading-relaxed text-gray-600 font-medium">
                    {t("aboutPage.ch8Text2")}
                  </p>
                  <div className="pt-2">
                    <span className="text-lg font-heading font-black uppercase tracking-[0.2em] text-[var(--color-brand-black)] border-b-2 border-b-[var(--color-brand-gold)] pb-1">
                      {t("aboutPage.ch8Text3")}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* CALL TO ACTION: PERSONAL COFFEE CHAT */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-16 bg-[var(--color-brand-gold-light)] relative overflow-hidden">
          <div className="absolute top-1/2 -left-24 w-60 h-60 rounded-full bg-[var(--color-brand-pink-light)] opacity-40 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 -right-24 w-80 h-80 rounded-full bg-white opacity-35 blur-3xl pointer-events-none" />

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
