"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useLanguage } from "@/context/language-context";
import Image from "next/image";
import { useState } from "react";

export default function PodcastPage() {
  const { language, t } = useLanguage();
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  // Custom validation tracking for improved UX
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    social: false,
    story: false
  });

  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formStatus === "submitting" || formStatus === "success") return;

    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "7bd1aa94-7d33-4738-b627-5b9378af65d4");
    formData.append("subject", language === "es" ? "Nueva Solicitud de Invitada - Podcast (KT360)" : "New Guest Application - Podcast (KT360)");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      setFormStatus("error");
    }
  }

  // Podcast platforms logos config (Bright, colorful, and interactive)
  const platforms = [
    {
      name: "Spotify",
      url: "https://open.spotify.com",
      logoSvg: (
        <svg viewBox="0 0 130 32" className="h-8 w-auto fill-[#1DB954] transition-transform duration-300 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 0C6.27 0 0 6.27 0 14s6.27 14 14 14 14-6.27 14-14S21.73 0 14 0zm6.42 20.22c-.23.37-.73.49-1.1.26-2.95-1.8-6.66-2.2-11.03-1.2-.42.1-.84-.17-.94-.59s.17-.84.59-.94c4.8-1.1 8.9-.62 12.22 1.4.37.23.49.73.26 1.07zm1.71-3.8c-.29.47-.9.62-1.37.33-3.37-2.07-8.5-2.68-12.47-1.47-.53.16-1.09-.14-1.25-.67s.14-1.09.67-1.25c4.54-1.38 10.2-.69 14.1 1.7.47.28.62.9.32 1.36zm.14-3.93C17.7 9.8 11 9.58 7.15 10.75c-.71.21-1.45-.2-1.66-.91-.21-.71.2-.1.91-1.66 4.45-1.35 11.83-1.09 16.5 1.68.64.38.85 1.2.47 1.84s-1.2.85-1.84.47z" />
          <text x="36" y="21" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="18" letter-spacing="-0.03em" className="fill-[var(--color-brand-black)]">Spotify</text>
        </svg>
      )
    },
    {
      name: "Apple Podcasts",
      url: "https://podcasts.apple.com",
      logoSvg: (
        <svg viewBox="0 0 180 32" className="h-8 w-auto fill-[#872EC4] transition-transform duration-300 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="3" />
          <path d="M14 0C6.27 0 0 6.27 0 14s6.27 14 14 14 14-6.27 14-14S21.73 0 14 0zm0 24.5c-5.8 0-10.5-4.7-10.5-10.5S8.2 3.5 14 3.5 24.5 8.2 24.5 14 19.8 24.5 14 24.5z" opacity="0.3" />
          <path d="M14 6.5C9.86 6.5 6.5 9.86 6.5 14s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5S18.14 6.5 14 6.5zm0 11.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          <text x="36" y="20" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="15" letter-spacing="-0.02em" className="fill-[var(--color-brand-black)]">Apple Podcasts</text>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      logoSvg: (
        <svg viewBox="0 0 130 32" className="h-8 w-auto fill-[#FF0000] transition-transform duration-300 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.97 6.16a3.42 3.42 0 0 0-2.4-2.4C23.46 3.2 14.5 3.2 14.5 3.2s-8.96 0-11.07.56a3.42 3.42 0 0 0-2.4 2.4C.47 8.27.47 12.7.47 12.7s0 4.43.56 8.54a3.42 3.42 0 0 0 2.4 2.4c2.11.56 11.07.56 11.07.56s8.96 0 11.07-.56a3.42 3.42 0 0 0 2.4-2.4c.56-4.11.56-8.54.56-8.54s0-4.43-.56-8.54zM11.66 17.02V8.38l7.59 4.32-7.59 4.32z" />
          <text x="36" y="21" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="18" letter-spacing="-0.05em" className="fill-[var(--color-brand-black)]">YouTube</text>
        </svg>
      )
    },
    {
      name: "Amazon Music",
      url: "https://music.amazon.com",
      logoSvg: (
        <svg viewBox="0 0 160 32" className="h-8 w-auto fill-[#00A8E8] transition-transform duration-300 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 2C7.15 2 2 7.15 2 13.5S7.15 25 13.5 25s11.5-5.15 11.5-11.5S19.85 2 13.5 2zm5.9 14.6c-.3.4-.8.6-1.3.6h-2.1c-.8 0-1.5-.7-1.5-1.5v-3.5c0-.8.7-1.5 1.5-1.5h1.9c.5 0 1 .2 1.3.6l1.6 2c.3.4.3 1 0 1.4l-1.4 1.9z" />
          <text x="36" y="20" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="15" letter-spacing="-0.02em" className="fill-[var(--color-brand-black)]">amazon music</text>
        </svg>
      )
    },
    {
      name: "Podimo",
      url: "https://podimo.com",
      logoSvg: (
        <svg viewBox="0 0 120 32" className="h-8 w-auto fill-[#15D48B] transition-transform duration-300 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5H9v-7h2v7zm4 0h-2v-11h2v11z" />
          <text x="32" y="21" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="18" letter-spacing="-0.02em" className="fill-[var(--color-brand-black)]">podimo</text>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)] text-[var(--color-brand-black)]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          
          {/* Hero Content */}
          <div className="flex flex-col text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-black)] mb-4 bg-[var(--color-brand-pink-light)] w-max px-3 py-1 rounded-full mx-auto md:mx-0">
              {t("podcastPage.heroTag")}
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--color-brand-black)] mb-6">
              {t("podcastPage.heroTitlePart1")}<br />
              <span className="italic font-bold text-[var(--color-brand-pink)]">{t("podcastPage.heroTitlePart2")}</span>
            </h1>
            <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed font-medium max-w-xl mx-auto md:mx-0">
              {t("podcastPage.heroSubtitle")}
            </p>
          </div>

          {/* Hero Image / Podcast Art */}
          <div className="relative h-[350px] md:h-[450px] lg:h-[500px] w-full max-w-[450px] mx-auto flex justify-center">
            {/* Offset Gold Border Frame */}
            <div className="absolute inset-0 border border-[var(--color-brand-gold)] top-6 bottom-0 left-0 right-6 z-0 hidden md:block rounded-2xl" />
            
            <div className="relative w-full h-full z-10 rounded-[2rem] overflow-hidden shadow-elevated border-4 border-white">
              <Image 
                src="/images/KT_Podcast.webp" 
                alt="KT360 Podcast Artwork" 
                fill 
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover" 
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* FIX 1: PLATFORMS LOGO STRIP (Moved directly right after the Hero, logos in brand colors by default) */}
      <ScrollReveal>
        <section className="py-16 px-6 md:px-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            <div className="text-center md:text-left shrink-0">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--color-brand-black)] mb-1">
                {t("podcastPage.platformsTitle")}
              </p>
              <p className="font-body text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                {t("podcastPage.platformsSubtitle")}
              </p>
            </div>
            
            <div className="w-[1px] h-12 bg-gray-200 hidden md:block" />
            
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-12">
              {platforms.map((platform) => (
                <a 
                  key={platform.name} 
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover:-translate-y-1 hover:scale-102 transition-all duration-300 group opacity-90 hover:opacity-100"
                  title={platform.name}
                >
                  <div className="h-8 md:h-9 w-auto flex items-center">
                    {platform.logoSvg}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* MANIFESTO / INTRODUCTION BANNER (Fix 2: split quote for readability, highlighting specific cursive words) */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-16 bg-[var(--color-brand-pink-light)] text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-6 block">
              {t("podcastPage.manifestoTag")}
            </span>
            
            {/* Highly readable serif text with key cursive highlights */}
            <h2 className="font-heading italic text-3xl md:text-4xl lg:text-[2.65rem] text-[var(--color-brand-black)] mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
              &ldquo;{t("podcastPage.manifestoP1Part1")}
              <span className="font-script text-[var(--color-brand-black)] text-4xl md:text-5xl lg:text-6xl not-italic tracking-normal normal-case inline-block mx-1">
                {t("podcastPage.manifestoP1Highlight1")}
              </span>
              {t("podcastPage.manifestoP1Part2")}
              <span className="font-script text-[var(--color-brand-black)] text-4xl md:text-5xl lg:text-6xl not-italic tracking-normal normal-case inline-block mx-1">
                {t("podcastPage.manifestoP1Highlight2")}
              </span>
              {t("podcastPage.manifestoP1Part3")}
              <span className="font-script text-[var(--color-brand-black)] text-4xl md:text-5xl lg:text-6xl not-italic tracking-normal normal-case inline-block mx-1">
                {t("podcastPage.manifestoP1Highlight3")}
              </span>
              {t("podcastPage.manifestoP1Part4")}&rdquo;
            </h2>

            {/* Unified centered content layout */}
            <div className="max-w-2xl mx-auto text-left font-body text-base md:text-lg leading-relaxed text-gray-700 font-medium space-y-8 bg-white/60 backdrop-blur-md p-8 md:p-14 rounded-[2.5rem] border border-white/80 shadow-soft relative">
              <div className="absolute top-6 left-6 text-6xl text-[var(--color-brand-pink)] opacity-10 font-heading leading-none select-none">&ldquo;</div>
              <div className="absolute bottom-6 right-6 text-6xl text-[var(--color-brand-pink)] opacity-10 font-heading leading-none select-none">&rdquo;</div>
              
              <p className="relative z-10">
                {t("podcastPage.manifestoP2")}
              </p>
              
              <div className="w-16 h-[2px] bg-[var(--color-brand-gold)] mx-auto opacity-55 my-6" />
              
              <p className="relative z-10 text-center italic font-heading text-lg md:text-xl text-[var(--color-brand-black)] bg-[var(--color-brand-pink-light)]/40 p-6 rounded-2xl border border-[var(--color-brand-pink-light)]/50 leading-relaxed">
                {t("podcastPage.manifestoP3")}
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FIX 3: DISTINCT VALUES SECTION (2-column staggered split layout with sticky headers and left-border lift cards) */}
      <ScrollReveal>
        <section className="py-32 px-6 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
            
            {/* Left Column: Sticky Header details */}
            <div className="lg:col-span-2 lg:sticky lg:top-36 flex flex-col gap-6 text-center lg:text-left">
              <h2 className="font-heading italic text-4xl md:text-5xl text-[var(--color-brand-black)] leading-[1.1]">
                {t("podcastPage.valuesTitle")}
              </h2>
              <p className="font-body text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                {t("podcastPage.valuesSubtitle")}
              </p>
              <div className="w-20 h-[3px] bg-[var(--color-brand-pink)] mx-auto lg:mx-0 mt-2" />
            </div>

            {/* Right Column: Vertical stack of beautiful, interactive border cards */}
            <div className="lg:col-span-3 flex flex-col gap-8">
              {/* Card 1 */}
              <div className="bg-[var(--color-brand-cream)] p-8 md:p-10 rounded-[2rem] shadow-soft border border-gray-100 flex gap-6 items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-md border-l-4 border-l-[var(--color-brand-pink)] hover:border-l-[var(--color-brand-gold)]">
                <span className="font-heading text-4xl md:text-5xl text-[var(--color-brand-gold)] font-black select-none leading-none pt-1">01</span>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl mb-3 italic font-bold text-[var(--color-brand-black)]">
                    {t("podcastPage.value1Title")}
                  </h3>
                  <p className="font-body text-sm md:text-base leading-relaxed text-gray-600 font-medium">
                    {t("podcastPage.value1Desc")}
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[var(--color-brand-cream)] p-8 md:p-10 rounded-[2rem] shadow-soft border border-gray-100 flex gap-6 items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-md border-l-4 border-l-[var(--color-brand-pink)] hover:border-l-[var(--color-brand-gold)]">
                <span className="font-heading text-4xl md:text-5xl text-[var(--color-brand-gold)] font-black select-none leading-none pt-1">02</span>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl mb-3 italic font-bold text-[var(--color-brand-black)]">
                    {t("podcastPage.value2Title")}
                  </h3>
                  <p className="font-body text-sm md:text-base leading-relaxed text-gray-600 font-medium">
                    {t("podcastPage.value2Desc")}
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[var(--color-brand-cream)] p-8 md:p-10 rounded-[2rem] shadow-soft border border-gray-100 flex gap-6 items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-md border-l-4 border-l-[var(--color-brand-pink)] hover:border-l-[var(--color-brand-gold)]">
                <span className="font-heading text-4xl md:text-5xl text-[var(--color-brand-gold)] font-black select-none leading-none pt-1">03</span>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl mb-3 italic font-bold text-[var(--color-brand-black)]">
                    {t("podcastPage.value3Title")}
                  </h3>
                  <p className="font-body text-sm md:text-base leading-relaxed text-gray-600 font-medium">
                    {t("podcastPage.value3Desc")}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* CTA / GUEST APPLICATION FORM */}
      <ScrollReveal>
        <section className="py-28 px-6 md:px-16 bg-[var(--color-brand-cream)] relative overflow-hidden">
          {/* Subtle decorative elements matching website style */}
          <div className="absolute top-1/2 -left-20 w-44 h-44 rounded-full bg-[var(--color-brand-pink-light)] opacity-30 blur-2xl z-0" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-[var(--color-brand-gold-light)] opacity-40 blur-2xl z-0" />

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="font-heading italic text-3xl md:text-4xl lg:text-5xl text-[var(--color-brand-black)] mb-6 leading-tight">
                {t("podcastPage.ctaTitle")}
              </h2>
              <p className="font-body text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                {t("podcastPage.ctaSubtitle")}
              </p>
            </div>

            {/* Application Card */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-elevated border border-gray-100">
              {formStatus === "success" ? (
                <div className="text-center py-12 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#188038]/10 text-[#188038] flex items-center justify-center mb-6 text-3xl">
                    ✓
                  </div>
                  <h3 className="font-heading text-2xl italic font-bold mb-4">
                    {language === "es" ? "¡Gracias por postularte!" : "Thank you for applying!"}
                  </h3>
                  <p className="font-body text-sm text-gray-600 max-w-md font-medium">
                    {t("podcastPage.formSuccess")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="guest_name" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {t("podcastPage.formName")}
                    </label>
                    <input 
                      type="text" 
                      id="guest_name"
                      name="name" 
                      required 
                      onBlur={() => handleBlur("name")}
                      disabled={formStatus === "submitting"}
                      className={`px-6 py-4 rounded-xl border bg-gray-50 focus:outline-none focus:border-[var(--color-brand-gold)] w-full text-sm text-[var(--color-brand-black)] disabled:opacity-50 transition-colors
                        ${touched.name ? "invalid:border-[#d93025] invalid:bg-[#fce8e6] valid:border-[#188038]" : "border-gray-200"}`}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="guest_email" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {t("podcastPage.formEmail")}
                    </label>
                    <input 
                      type="email" 
                      id="guest_email"
                      name="email" 
                      required 
                      onBlur={() => handleBlur("email")}
                      disabled={formStatus === "submitting"}
                      className={`px-6 py-4 rounded-xl border bg-gray-50 focus:outline-none focus:border-[var(--color-brand-gold)] w-full text-sm text-[var(--color-brand-black)] disabled:opacity-50 transition-colors
                        ${touched.email ? "invalid:border-[#d93025] invalid:bg-[#fce8e6] valid:border-[#188038]" : "border-gray-200"}`}
                    />
                  </div>

                  {/* Social Media URL */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="guest_social" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {t("podcastPage.formSocial")}
                    </label>
                    <input 
                      type="text" 
                      id="guest_social"
                      name="social_media" 
                      required
                      onBlur={() => handleBlur("social")}
                      disabled={formStatus === "submitting"}
                      className={`px-6 py-4 rounded-xl border bg-gray-50 focus:outline-none focus:border-[var(--color-brand-gold)] w-full text-sm text-[var(--color-brand-black)] disabled:opacity-50 transition-colors
                        ${touched.social ? "invalid:border-[#d93025] invalid:bg-[#fce8e6] valid:border-[#188038]" : "border-gray-200"}`}
                    />
                  </div>

                  {/* Story / Topic text */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="guest_story" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {t("podcastPage.formStory")}
                    </label>
                    <textarea 
                      id="guest_story"
                      name="story" 
                      required 
                      rows={5}
                      onBlur={() => handleBlur("story")}
                      disabled={formStatus === "submitting"}
                      className={`px-6 py-4 rounded-xl border bg-gray-50 focus:outline-none focus:border-[var(--color-brand-gold)] w-full text-sm text-[var(--color-brand-black)] disabled:opacity-50 transition-colors resize-none
                        ${touched.story ? "invalid:border-[#d93025] invalid:bg-[#fce8e6] valid:border-[#188038]" : "border-gray-200"}`}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mt-4">
                    <button 
                      type="submit" 
                      disabled={formStatus === "submitting"} 
                      className="bg-[var(--color-brand-gold)] border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs w-full hover:bg-[var(--color-brand-gold-light)] transition-colors shadow-none cursor-pointer text-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus === "submitting" 
                        ? t("podcastPage.formSubmitting") 
                        : formStatus === "error" 
                        ? t("podcastPage.formError") 
                        : t("podcastPage.ctaButton")}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
}
