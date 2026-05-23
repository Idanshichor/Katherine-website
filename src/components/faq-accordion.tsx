"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Para quién NO es esto?",
    a: "Si estás empezando desde cero o si buscas un coach motivacional, no soy yo. Trabajo con founders que ya tienen un negocio en marcha y necesitan estructura, no inspiración.",
  },
  {
    q: "¿Cuánto tiempo tarda en verse resultados?",
    a: "La claridad llega en la primera sesión. Los resultados medibles, en 60 a 90 días. Pero esto no es magia: depende de qué tan rápido implementas.",
  },
  {
    q: "¿En qué idioma trabajas?",
    a: "Actualmente en español. Estoy expandiendo a inglés pronto para clientes bilingües.",
  },
  {
    q: "¿Trabajas con cualquier industria?",
    a: "Trabajo mejor con negocios de servicios, productos digitales y D2C. Si tu negocio es muy técnico o regulado (salud, legal), hablémoslo antes.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`border-b border-gray-200 ${i === 0 ? "border-t" : ""}`}>
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between py-7 text-left group cursor-pointer"
            >
              <span
                className={`font-heading italic text-xl md:text-2xl transition-colors ${
                  isOpen ? "text-[var(--color-brand-gold)]" : "text-[var(--color-brand-black)] group-hover:text-[var(--color-brand-gold)]"
                }`}
              >
                {faq.q}
              </span>
              <span
                className={`ml-6 shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-lg transition-all duration-300 ${
                  isOpen
                    ? "border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] rotate-45"
                    : "border-gray-300 text-gray-400 rotate-0"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-[300px] opacity-100 pb-8" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-500 font-light text-base leading-relaxed pl-0 md:pl-1 max-w-2xl">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
