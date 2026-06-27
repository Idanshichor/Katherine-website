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

  // Podcast platforms config
  const platforms = [
    {
      name: "Spotify",
      color: "hover:border-[#1DB954]/50",
      textColor: "group-hover:text-[#1DB954]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 transition-colors text-gray-400 group-hover:text-[#1DB954]" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.894-.98-.336.075-.668-.135-.744-.47-.076-.336.135-.668.47-.743 3.856-.88 7.15-.506 9.822 1.13.295.178.387.563.206.856zm1.225-2.72c-.228.368-.713.49-1.08.262-2.716-1.67-6.85-2.15-10.05-1.18-.413.125-.85-.107-.975-.52-.125-.413.107-.85.52-.975 3.66-1.11 8.214-.57 11.323 1.34.368.228.49.713.262 1.08zm.107-2.82c-3.256-1.934-8.632-2.113-11.747-1.167-.5.15-1.023-.13-1.173-.63-.15-.5.13-1.023.63-1.173 3.62-1.098 9.55-.89 13.3 1.34.45.267.6.845.333 1.296-.267.45-.845.6-1.296.333z"/>
        </svg>
      ),
      url: "https://open.spotify.com"
    },
    {
      name: "Apple Podcasts",
      color: "hover:border-[#872EC4]/50",
      textColor: "group-hover:text-[#872EC4]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 transition-colors text-gray-400 group-hover:text-[#872EC4]" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.43c0 .55-.45 1-1 1s-1-.45-1-1v-4.86c0-.55.45-1 1-1s1 .45 1 1v4.86zm-1-6.86c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.85 4.86c0 .55-.45 1-1 1s-1-.45-1-1v-4.86c0-.55.45-1 1-1s1 .45 1 1v4.86zm1.65-2.43c0-3.03-2.47-5.5-5.5-5.5S6.5 8.97 6.5 12c0 1.25.42 2.4 1.13 3.33.33.44.25 1.07-.19 1.4-.44.33-1.07.25-1.4-.19C5.12 15.34 4.5 13.75 4.5 12c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5c0 1.75-.62 3.34-1.54 4.54-.33.44-.96.52-1.4.19-.44-.33-.52-.96-.19-1.4.71-.93 1.13-2.08 1.13-3.33zm-9.35 2.43c0 .55-.45 1-1 1s-1-.45-1-1v-4.86c0-.55.45-1 1-1s1 .45 1 1v4.86z"/>
        </svg>
      ),
      url: "https://podcasts.apple.com"
    },
    {
      name: "YouTube",
      color: "hover:border-[#FF0000]/50",
      textColor: "group-hover:text-[#FF0000]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 transition-colors text-gray-400 group-hover:text-[#FF0000]" fill="currentColor">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      url: "https://youtube.com"
    },
    {
      name: "Amazon Music",
      color: "hover:border-[#00A8E8]/50",
      textColor: "group-hover:text-[#00A8E8]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 transition-colors text-gray-400 group-hover:text-[#00A8E8]" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.29 14.29c-.39.39-1.02.39-1.41 0L12 14.41l-1.88 1.88c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 13l-1.88-1.88c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0L12 11.59l1.88-1.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 13l1.88 1.88c.38.39.38 1.03 0 1.41z"/>
        </svg>
      ),
      url: "https://music.amazon.com"
    },
    {
      name: "Podimo",
      color: "hover:border-[#15D48B]/50",
      textColor: "group-hover:text-[#15D48B]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 transition-colors text-gray-400 group-hover:text-[#15D48B]" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5h-2v-7h2v7zm4 0h-2v-11h2v11z"/>
        </svg>
      ),
      url: "https://podimo.com"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)] text-[var(--color-brand-black)]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          
          {/* Hero Content */}
          <div className="flex flex-col text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-black)] mb-4 bg-[var(--color-brand-pink-light)] w-max px-3 py-1 rounded-full mx-auto md:mx-0">
              {t("podcastPage.heroTag")}
            </span>
            <h1 className="font-heading italic text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--color-brand-black)] mb-6">
              {t("podcastPage.heroTitle")}
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

      {/* MANIFESTO / INTRODUCTION BANNER */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-16 bg-[var(--color-brand-pink-light)] text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-6 block">
              {t("podcastPage.manifestoTag")}
            </span>
            
            <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-[var(--color-brand-black)] mb-10 leading-snug max-w-3xl mx-auto">
              &ldquo;{t("podcastPage.manifestoP1")}&rdquo;
            </h2>

            <div className="grid md:grid-cols-2 gap-10 text-left font-body text-sm md:text-base leading-relaxed text-gray-700 font-medium">
              <p className="p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-soft">
                {t("podcastPage.manifestoP2")}
              </p>
              <p className="p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-soft flex items-center">
                {t("podcastPage.manifestoP3")}
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* VALUES SECTION */}
      <ScrollReveal>
        <section className="py-28 px-6 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-20 max-w-2xl mx-auto">
              <h2 className="font-heading italic text-4xl md:text-5xl text-[var(--color-brand-black)] mb-6">
                {t("podcastPage.valuesTitle")}
              </h2>
              <p className="font-body text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                {t("podcastPage.valuesSubtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-[var(--color-brand-cream)] p-10 rounded-[2rem] shadow-soft border border-gray-50 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative group">
                <span className="font-heading text-6xl text-[var(--color-brand-gold)] opacity-20 mb-6 font-black select-none block transition-opacity group-hover:opacity-40">01</span>
                <h3 className="font-heading text-xl mb-4 italic font-bold text-[var(--color-brand-black)]">
                  {t("podcastPage.value1Title")}
                </h3>
                <p className="font-body text-sm leading-relaxed text-gray-600 font-medium">
                  {t("podcastPage.value1Desc")}
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-[var(--color-brand-cream)] p-10 rounded-[2rem] shadow-soft border border-gray-50 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative group">
                <span className="font-heading text-6xl text-[var(--color-brand-pink)] opacity-20 mb-6 font-black select-none block transition-opacity group-hover:opacity-40">02</span>
                <h3 className="font-heading text-xl mb-4 italic font-bold text-[var(--color-brand-black)]">
                  {t("podcastPage.value2Title")}
                </h3>
                <p className="font-body text-sm leading-relaxed text-gray-600 font-medium">
                  {t("podcastPage.value2Desc")}
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-[var(--color-brand-cream)] p-10 rounded-[2rem] shadow-soft border border-gray-50 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative group">
                <span className="font-heading text-6xl text-[var(--color-brand-gold)] opacity-20 mb-6 font-black select-none block transition-opacity group-hover:opacity-40">03</span>
                <h3 className="font-heading text-xl mb-4 italic font-bold text-[var(--color-brand-black)]">
                  {t("podcastPage.value3Title")}
                </h3>
                <p className="font-body text-sm leading-relaxed text-gray-600 font-medium">
                  {t("podcastPage.value3Desc")}
                </p>
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* PLATFORMS STRIP */}
      <ScrollReveal>
        <section className="py-20 px-6 md:px-16 bg-[var(--color-brand-gold-light)] relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            
            <h2 className="font-heading italic text-3xl md:text-4xl text-[var(--color-brand-black)] mb-3">
              {t("podcastPage.platformsTitle")}
            </h2>
            <p className="font-body text-gray-600 text-xs md:text-sm font-semibold tracking-wider uppercase mb-12">
              {t("podcastPage.platformsSubtitle")}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
              {platforms.map((platform) => (
                <a 
                  key={platform.name} 
                  href={platform.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 bg-white px-6 py-4 rounded-full border border-transparent shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 ${platform.color}`}
                >
                  {platform.icon}
                  <span className={`font-body text-xs font-bold uppercase tracking-wider text-gray-500 transition-colors ${platform.textColor}`}>
                    {platform.name}
                  </span>
                </a>
              ))}
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* CTA / GUEST APPLICATION FORM */}
      <ScrollReveal>
        <section className="py-28 px-6 md:px-16 bg-white relative overflow-hidden">
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
            <div className="bg-[var(--color-brand-cream)] p-8 md:p-12 rounded-[2rem] shadow-elevated border border-gray-100">
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
