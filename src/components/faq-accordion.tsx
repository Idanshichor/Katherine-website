"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Por qué una ingeniera civil hace marketing digital?",
    a: "Porque trabajé suficientes proyectos de construcción para entender que sin sistemas, los planes más brillantes se caen. El marketing funciona igual: sin procesos, datos limpios y operaciones detrás, la mejor estrategia se desvanece. La ingeniería me dio el método. El marketing me dio el lenguaje.",
  },
  {
    q: "¿Con qué tipo de empresas trabajas?",
    a: "Empresas en transición. Normalmente entre $1M y $20M en facturación, con producto validado pero operaciones improvisadas. Si ya tienes equipo de marketing pero los resultados no escalan, probablemente puedo ayudar. Si todavía estás validando producto, no soy tu mejor opción.",
  },
  {
    q: "¿En qué mercados e idiomas trabajas?",
    a: "Español nativo, inglés profesional. He gestionado proyectos en USA, Colombia, Europa y Medio Oriente. La adaptación cultural no es un extra, es parte del trabajo.",
  },
  {
    q: "¿Trabajas como freelance, fraccional o full-time?",
    a: "Proyectos fraccionales de 3 a 12 meses. Entro como Project Manager o Strategy Lead, construyo el sistema, entreno al equipo y salgo. No me quedo más tiempo del necesario.",
  },
  {
    q: "¿Qué herramientas usas?",
    a: "GA4, Looker, Ahrefs, Notion, Asana, HubSpot, Figma, Webflow. Pero las herramientas son lo último que decido. Primero el diagnóstico, después el sistema, después la herramienta que lo soporta.",
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
                  isOpen ? "text-[var(--color-brand-pink)]" : "text-[var(--color-brand-black)] group-hover:text-[var(--color-brand-pink)]"
                }`}
              >
                {faq.q}
              </span>
              <span
                className={`ml-6 shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-lg transition-all duration-300 ${
                  isOpen
                    ? "border-[var(--color-brand-pink)] text-[var(--color-brand-pink)] rotate-45"
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
