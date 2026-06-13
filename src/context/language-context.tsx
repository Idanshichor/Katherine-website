"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "@/app/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (path: string) => any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to Spanish initially
  const [language, setLanguageState] = useState<Language>("es");

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-lang", lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  // Run on mount to detect language settings
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Detect from URL parameters (?lang=en or ?lang=es)
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get("lang");
    
    if (langParam === "en" || langParam === "es") {
      setLanguage(langParam as Language);
      return;
    }

    // 2. Detect from localStorage cached preference
    const cachedLang = localStorage.getItem("preferred-lang");
    if (cachedLang === "en" || cachedLang === "es") {
      setLanguageState(cachedLang as Language);
      return;
    }

    // 3. Detect from browser default language settings
    const browserLang = navigator.language;
    if (browserLang.startsWith("en")) {
      setLanguageState("en");
    } else {
      setLanguageState("es");
    }
  }, []);

  // Safe nested key translation resolver
  const t = (path: string): any => {
    const keys = path.split(".");
    let current: any = translations[language];

    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to Spanish dictionary if key is missing in English
        let fallback: any = translations["es"];
        for (const fKey of keys) {
          if (fallback && fallback[fKey] !== undefined) {
            fallback = fallback[fKey];
          } else {
            return path; // Return path if both fail
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
