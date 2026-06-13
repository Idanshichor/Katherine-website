"use client";

import Image from "next/image";
import { Web3Form } from "./web3-form";
import { useLanguage } from "@/context/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[var(--color-brand-black)] text-white py-32 px-6 md:px-16 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
        <div>
          <Image 
            src="/images/KT_White_Logo.webp" 
            alt="Katherine Velasquez Logo" 
            width={180} 
            height={70} 
            className="h-12 w-auto object-contain mb-6"
          />
          <p className="text-gray-400 max-w-sm mb-12 font-light leading-relaxed">
            {t("footer.tagline")}
          </p>
          <div className="flex gap-8">
            <a href="https://linkedin.com/in/katherinevelasquezgarcia" target="_blank" className="text-sm font-semibold tracking-widest uppercase text-[var(--color-brand-pink)] hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-body font-semibold text-xs tracking-widest uppercase text-gray-400 mb-8">{t("footer.newsletter")}</h3>
          <Web3Form subject="Nuevo Suscriptor - Newsletter (Footer)" className="flex flex-col gap-6" variant="footer" />
        </div>
      </div>
    </footer>
  );
}
