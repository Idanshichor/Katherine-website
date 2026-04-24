export function Footer() {
  return (
    <footer className="bg-[var(--color-brand-black)] text-white py-32 px-6 md:px-16 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
        <div>
          <h2 className="font-heading italic text-5xl mb-6 text-[var(--color-brand-cream)]">
            KT Impulso <br/> Empresarial
          </h2>
          <p className="text-gray-400 max-w-sm mb-12 font-light leading-relaxed">
            Especialista en Estrategia 360° uniendo la lógica de la Ingeniería Civil con la ejecución del Marketing Digital.
          </p>
          <div className="flex gap-8">
            <a href="https://linkedin.com/in/katherinevelasquezgarcia" target="_blank" className="text-sm font-semibold tracking-widest uppercase text-[var(--color-brand-pink)] hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-body font-semibold text-xs tracking-widest uppercase text-gray-400 mb-8">Boletín Informativo</h3>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="Nombre" className="bg-transparent border-b border-gray-700 text-white px-0 py-3 w-full focus:outline-none focus:border-[var(--color-brand-pink)] transition-colors font-light text-base" />
              <input type="text" placeholder="Apellido" className="bg-transparent border-b border-gray-700 text-white px-0 py-3 w-full focus:outline-none focus:border-[var(--color-brand-pink)] transition-colors font-light text-base" />
            </div>
            <input type="email" placeholder="Correo Electrónico" className="bg-transparent border-b border-gray-700 text-white px-0 py-3 w-full focus:outline-none focus:border-[var(--color-brand-pink)] transition-colors font-light text-base" />
            <button className="bg-[var(--color-brand-pink)] text-white px-10 py-4 font-semibold uppercase tracking-widest hover:bg-[#E01E79] transition-colors w-max rounded-full mt-6 text-xs shadow-premium hover:-translate-y-1">
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
