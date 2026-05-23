import Link from "next/link";

export default function LogosPage() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)] text-[var(--color-brand-black)] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <Link href="/" className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-[var(--color-brand-pink)] transition-colors mb-6 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="font-heading italic text-4xl md:text-5xl text-[var(--color-brand-black)]">Logo Explorations</h1>
          <p className="font-body text-gray-500 mt-4 max-w-2xl">
            A collection of 72 typography-based logo concepts, carefully categorized by structure. Inspired by your favorites: the clean pink dots, modern splits, and structured boxes.
          </p>
        </div>

        {/* SECTION: KATHERINE 360 */}
        <div className="mb-24">
          <h2 className="font-heading text-3xl italic font-bold mb-8 text-[var(--color-brand-black)] border-b-2 border-[var(--color-brand-gold)] pb-2 inline-block">Katherine 360</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
{/* Concept 1: The Editorial Stack */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">01</span>
            <div className="flex flex-col items-center">
              <span className="font-heading text-4xl tracking-tight uppercase">Katherine</span>
              <span className="font-script text-5xl -mt-4 text-[var(--color-brand-pink)]">360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Editorial Stack</p>
          </div>

          

{/* Concept 2: The Signature */}
          <div className="bg-[var(--color-brand-pink-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">02</span>
            <div className="flex items-baseline gap-2">
              <span className="font-script text-5xl capitalize">Katherine</span>
              <span className="font-body text-lg font-bold tracking-widest">360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Signature</p>
          </div>

          

{/* Concept 5: The Magazine Masthead */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">05</span>
            <div className="text-center">
              <div className="font-heading text-5xl tracking-tighter uppercase mb-1">
                K<span className="text-3xl">T</span>
              </div>
              <div className="w-full h-[1px] bg-[var(--color-brand-pink)] mb-1" />
              <div className="font-body text-[8px] font-bold uppercase tracking-[0.4em] text-gray-400">
                Tres Sesenta
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Masthead</p>
          </div>

          

{/* Concept 6: The Golden Thread */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-gold)]">06</span>
            <div className="relative">
              <span className="font-heading text-4xl italic">Katherine</span>
              <span className="absolute -top-4 -right-8 font-script text-4xl text-[var(--color-brand-gold)]">360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Golden Thread</p>
          </div>

          

{/* Concept 11: The Overlap */}
          <div className="bg-[var(--color-brand-black)] text-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] shadow-elevated relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-500">11</span>
            <div className="relative flex items-center justify-center">
              <span className="font-heading text-7xl font-black text-white/10 tracking-tighter absolute">360</span>
              <span className="font-script text-4xl text-[var(--color-brand-gold)] z-10 capitalize">Katherine</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Overlap</p>
          </div>

          

{/* Concept 13: The Minimal Serif */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">13</span>
            <div className="font-heading text-lg lowercase tracking-[0.5em] text-gray-800">
              katherine <span className="text-[var(--color-brand-pink)] font-bold">360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Minimal Lowercase</p>
          </div>

          

{/* Concept 15: The Modern Split */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">15</span>
            <div className="flex items-center">
              <span className="font-body text-xl font-black uppercase tracking-[0.2em]">KATHERINE</span>
              <span className="mx-3 text-[var(--color-brand-pink)] font-light text-2xl">|</span>
              <span className="font-script text-3xl mt-1">360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Bar Split</p>
          </div>

          

{/* Concept 16: The Intersect */}
          <div className="bg-[var(--color-brand-pink)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-black)] opacity-50">16</span>
            <div className="flex flex-col items-center">
              <div className="flex text-5xl font-heading italic">
                <span>K</span>
                <span className="-ml-3 opacity-80">T</span>
              </div>
              <span className="font-body text-xs font-bold tracking-[0.4em] uppercase mt-2 text-white">Three Sixty</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">The Intersect</p>
          </div>

          

{/* Concept 18: The Gold Dot */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">18</span>
            <div className="flex items-center gap-2">
              <span className="font-body text-lg font-light tracking-[0.2em] uppercase">Katherine</span>
              <span className="text-[var(--color-brand-gold)] text-xs">●</span>
              <span className="font-body text-lg font-bold tracking-widest">360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Gold Dot</p>
          </div>

          

{/* Concept 20: The Outline */}
          <div className="bg-[var(--color-brand-pink-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">20</span>
            <div className="relative">
              <span className="font-heading text-4xl uppercase tracking-widest text-transparent" style={{ WebkitTextStroke: '1px var(--color-brand-black)' }}>KATHERINE</span>
              <span className="absolute -bottom-3 right-0 font-script text-3xl text-[var(--color-brand-black)]">360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Outline</p>
          </div>

          

{/* Concept 21: The Staggered */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">21</span>
            <div className="flex flex-col text-left">
              <span className="font-heading text-2xl uppercase tracking-[0.3em]">Katherine</span>
              <div className="flex items-center justify-end w-full mt-1">
                <div className="w-8 h-[1px] bg-[var(--color-brand-gold)] mr-2" />
                <span className="font-script text-3xl">360</span>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Staggered</p>
          </div>

          

{/* Concept 22: The Script Focus */}
          <div className="bg-[var(--color-brand-gold-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-gold)]">22</span>
            <div className="flex flex-col items-center">
              <span className="font-script text-6xl capitalize mb-2">Katherine</span>
              <span className="font-body text-[9px] font-black uppercase tracking-[0.5em] text-[var(--color-brand-black)]">Tres Sesenta</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Script Focus</p>
          </div>

          

          {/* Concept 63: The Current Evolution */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-pink)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">63</span>
            <div className="font-heading text-3xl md:text-4xl uppercase tracking-widest text-[var(--color-brand-black)] flex items-baseline">
              KATHERINE<span className="text-[var(--color-brand-pink)] font-bold text-5xl leading-none mx-2">.</span><span className="italic font-light">360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Current Evolution</p>
          </div>

          {/* Concept 64: The Solid Box Split */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">64</span>
            <div className="flex flex-col items-center">
              <span className="font-body text-4xl font-black uppercase tracking-[0.2em] mb-2">KATHERINE</span>
              <div className="bg-[var(--color-brand-black)] text-white px-6 py-2">
                <span className="font-heading italic text-2xl tracking-widest">360</span>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Solid Box Split</p>
          </div>

          {/* Concept 71: The Bordered Outline */}
          <div className="bg-[var(--color-brand-black)] text-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-600">71</span>
            <div className="border border-[var(--color-brand-gold)] px-8 py-6 flex flex-col items-center gap-2">
              <span className="font-body text-2xl uppercase tracking-[0.3em] font-light">Katherine</span>
              <span className="font-script text-4xl text-[var(--color-brand-gold)] capitalize">360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Bordered Outline</p>
          </div>

          </div>
        </div>

        {/* SECTION: KATHERINE ESTRATEGIAS 360 */}
        <div className="mb-24">
          <h2 className="font-heading text-3xl italic font-bold mb-8 text-[var(--color-brand-black)] border-b-2 border-[var(--color-brand-gold)] pb-2 inline-block">Katherine Estrategias 360</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
{/* Concept 23: The Book Spine */}
          <div className="bg-white rounded-[2rem] p-10 flex items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">23</span>
            <div className="flex items-center gap-4">
              <div className="font-heading text-xl uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 text-[var(--color-brand-gold)] border-l border-[var(--color-brand-gold)] pl-2">Velasquez</div>
              <div className="flex flex-col">
                <span className="font-heading text-4xl italic">Katherine</span>
                <span className="font-body text-[8px] font-black uppercase tracking-[0.4em]">Estrategias 360</span>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Book Spine</p>
          </div>

          

{/* Concept 24: The Split Serif */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">24</span>
            <div className="relative flex flex-col">
              <span className="font-heading text-4xl uppercase tracking-widest ml-4">Katherine</span>
              <span className="font-heading text-4xl uppercase tracking-widest mr-4 text-gray-400">Velasquez</span>
              <span className="font-script text-3xl text-[var(--color-brand-pink)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-6 whitespace-nowrap bg-white/80 px-2 rounded-full">Estrategias 360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Split Serif</p>
          </div>

          

{/* Concept 25: The Minimal Box */}
          <div className="bg-[var(--color-brand-black)] text-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] shadow-elevated relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-500">25</span>
            <div className="border border-[var(--color-brand-gold)] p-6 flex flex-col items-center min-w-[200px]">
              <span className="font-heading text-xl uppercase tracking-widest mb-4">KT Velasquez</span>
              <div className="w-full h-[1px] bg-white/20 mb-4" />
              <span className="font-script text-2xl text-[var(--color-brand-gold)]">Estrategias 360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Minimal Box</p>
          </div>

          

{/* Concept 26: The Bracket */}
          <div className="bg-[var(--color-brand-pink-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">26</span>
            <div className="flex flex-col items-center">
              <div className="flex items-center text-[var(--color-brand-black)]">
                <span className="font-body text-5xl font-light mr-3">[</span>
                <span className="font-heading text-3xl italic font-bold">KT</span>
                <span className="font-body text-5xl font-light ml-3">]</span>
              </div>
              <span className="font-body text-[9px] font-black uppercase tracking-[0.4em] mt-2 text-gray-600">Estrategias 360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Bracket</p>
          </div>

          

{/* Concept 27: The Golden Initial */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">27</span>
            <div className="relative flex items-center">
              <span className="font-heading text-7xl text-[var(--color-brand-gold)] opacity-40 italic">K</span>
              <div className="flex flex-col -ml-6 z-10 mt-4">
                <span className="font-heading text-2xl uppercase tracking-widest bg-white pr-2">Velasquez</span>
                <span className="font-script text-xl -mt-1 text-[var(--color-brand-pink)]">Estrategias 360</span>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Golden Initial</p>
          </div>

          

{/* Concept 28: The Monogram Frame */}
          <div className="bg-[var(--color-brand-gold-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-gold)]">28</span>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 border-2 border-[var(--color-brand-black)] rotate-45 flex items-center justify-center">
                <span className="font-heading text-2xl italic -rotate-45 ml-1">KV</span>
              </div>
              <div className="flex flex-col">
                <span className="font-body text-sm font-black uppercase tracking-widest">Estrategias</span>
                <span className="font-script text-3xl -mt-2">360</span>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Diamond Frame</p>
          </div>

          

{/* Concept 29: The High Contrast */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">29</span>
            <div className="flex flex-col items-center">
              <div className="flex items-baseline">
                <span className="font-body text-6xl font-thin tracking-tighter">KT</span>
                <span className="font-heading text-3xl font-black italic ml-2">Velasquez</span>
              </div>
              <span className="font-body text-[10px] font-bold uppercase tracking-[0.5em] text-[var(--color-brand-gold)] mt-2">Estrategias 360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The High Contrast</p>
          </div>

          

{/* Concept 30: The Underline */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">30</span>
            <div className="flex flex-col items-center">
              <span className="font-heading text-2xl uppercase tracking-[0.2em] border-b-2 border-[var(--color-brand-pink)] pb-2 mb-2">Katherine Velasquez</span>
              <span className="font-script text-2xl">Estrategias 360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Underline</p>
          </div>

          

{/* Concept 31: The Initial Drop */}
          <div className="bg-[var(--color-brand-pink-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">31</span>
            <div className="flex items-start gap-3">
              <span className="font-heading text-6xl italic leading-none pt-1">K.</span>
              <div className="flex flex-col">
                <span className="font-heading text-xl uppercase tracking-widest">Velasquez</span>
                <span className="font-body text-[9px] font-bold uppercase tracking-[0.4em] text-gray-500 mt-1">Estrategias 360</span>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Initial Drop</p>
          </div>

          

{/* Concept 32: The Classic Duo */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">32</span>
            <div className="text-center">
              <div className="font-body text-sm font-black uppercase tracking-[0.4em] text-[var(--color-brand-black)] mb-2">Katherine Velasquez</div>
              <div className="font-heading text-2xl italic text-[var(--color-brand-gold)] lowercase tracking-wide">estrategias 360</div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Classic Duo</p>
          </div>

          

{/* Concept 33: The Quote */}
          <div className="bg-[var(--color-brand-black)] text-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] shadow-elevated relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-500">33</span>
            <div className="flex flex-col items-center text-center">
              <span className="font-heading text-6xl text-[var(--color-brand-pink)] opacity-50 leading-none h-6">“</span>
              <span className="font-script text-4xl capitalize my-2">Estrategias 360</span>
              <span className="font-body text-[8px] font-bold uppercase tracking-[0.3em] text-gray-400">By Katherine Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Quote</p>
          </div>

          

{/* Concept 34: The Floating Script */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-gold)]">34</span>
            <div className="relative mt-8">
              <span className="absolute -top-10 -right-6 font-script text-3xl text-[var(--color-brand-pink)] -rotate-6">Estrategias 360</span>
              <span className="font-heading text-2xl uppercase tracking-widest font-bold">Katherine Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Floating Script</p>
          </div>

          

{/* Concept 35: The Ampersand Vibe */}
          <div className="bg-[var(--color-brand-gold-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-gold)]">35</span>
            <div className="flex flex-col items-center text-center">
              <span className="font-heading text-3xl uppercase tracking-widest">KV</span>
              <span className="font-script text-3xl text-gray-400 -my-2">&amp;</span>
              <span className="font-body text-xs font-bold uppercase tracking-[0.3em]">Estrategias 360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Ampersand</p>
          </div>

          

{/* Concept 36: The Double Line */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">36</span>
            <div className="w-full flex flex-col items-center border-y-2 border-[var(--color-brand-black)] py-4">
              <span className="font-heading text-xl uppercase tracking-[0.4em] mb-1 text-center">Katherine Velasquez</span>
              <span className="font-script text-xl text-[var(--color-brand-gold)]">Estrategias 360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Double Line</p>
          </div>

          

{/* Concept 37: The Slash */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">37</span>
            <div className="flex items-center text-2xl font-heading">
              <span className="uppercase tracking-widest font-bold">KT</span>
              <span className="mx-3 text-[var(--color-brand-pink)] font-light">/</span>
              <span className="italic">Estrategias 360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Slash</p>
          </div>

          

{/* Concept 38: The Typographic Knot */}
          <div className="bg-[var(--color-brand-pink-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">38</span>
            <div className="flex flex-col items-center">
              <div className="flex text-6xl font-heading mb-4">
                <span className="italic">K</span>
                <span className="-ml-4 font-script text-[var(--color-brand-black)] opacity-60 mt-2">V</span>
              </div>
              <div className="bg-[var(--color-brand-black)] text-white px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest">
                Estrategias 360
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Knot</p>
          </div>

          

{/* Concept 39: The Typewriter */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">39</span>
            <div className="flex flex-col text-left border-l-4 border-[var(--color-brand-pink)] pl-4">
              <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">Founder /</span>
              <span className="font-heading text-xl md:text-2xl uppercase tracking-widest mb-2">Katherine Velasquez</span>
              <span className="font-script text-2xl text-[var(--color-brand-gold)]">Estrategias 360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Typewriter</p>
          </div>

          

{/* Concept 40: The Offset Grid */}
          <div className="bg-[var(--color-brand-black)] text-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-600">40</span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 items-center">
              <span className="text-right font-heading text-xl uppercase tracking-widest">KT</span>
              <span className="text-left font-script text-2xl text-[var(--color-brand-pink)]">Estrategias</span>
              <span className="text-right font-script text-2xl text-[var(--color-brand-gold)]">Velasquez</span>
              <span className="text-left font-heading text-xl uppercase tracking-widest">360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Offset Grid</p>
          </div>

          

{/* Concept 41: The Minimalist Dot */}
          <div className="bg-[var(--color-brand-gold-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-gold)]">41</span>
            <div className="flex flex-col items-center text-center">
              <span className="font-body text-2xl font-light tracking-[0.3em] uppercase">K.V.</span>
              <span className="text-[var(--color-brand-black)] text-[8px] my-2">●</span>
              <span className="font-body text-xs font-bold uppercase tracking-[0.2em]">Estrategias 360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Minimalist Dot</p>
          </div>

          

{/* Concept 42: The Modern Block */}
          <div className="bg-[var(--color-brand-pink)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-black)] opacity-50">42</span>
            <div className="w-full h-full flex flex-col justify-end items-end text-right">
              <span className="font-heading text-xl uppercase tracking-widest text-white mb-1">Katherine Velasquez</span>
              <span className="font-script text-3xl text-[var(--color-brand-black)]">Estrategias 360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">The Modern Block</p>
          </div>

          

          {/* Concept 65: The Dot Bar Split */}
          <div className="bg-[var(--color-brand-black)] text-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-600">65</span>
            <div className="flex items-center">
              <span className="font-heading text-3xl md:text-4xl italic tracking-widest">Katherine<span className="text-[var(--color-brand-pink)] not-italic font-black ml-1">.</span></span>
              <div className="w-[1px] h-10 bg-[var(--color-brand-gold)] mx-4 md:mx-6" />
              <span className="font-script text-3xl md:text-4xl text-[var(--color-brand-gold)] capitalize">Estrategias 360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Dot Bar Split</p>
          </div>

          </div>
        </div>

        {/* SECTION: KATHERINE VELASQUEZ */}
        <div className="mb-24">
          <h2 className="font-heading text-3xl italic font-bold mb-8 text-[var(--color-brand-black)] border-b-2 border-[var(--color-brand-gold)] pb-2 inline-block">Katherine Velasquez</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
{/* Concept 9: The Oversized Accent */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group overflow-hidden">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">09</span>
            <div className="relative flex items-center justify-center w-full h-full">
              <span className="font-script text-[8rem] text-[var(--color-brand-gold)] opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none">K</span>
              <span className="font-heading text-4xl tracking-widest uppercase z-10">360</span>
              <span className="absolute bottom-10 font-body text-[8px] uppercase tracking-[0.5em] text-gray-500 z-10">Katherine Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Oversized Accent</p>
          </div>

          

          {/* Concept 68: The Thin Line Serif */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-pink-light)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">68</span>
            <div className="flex flex-col md:flex-row items-center gap-4 text-center">
              <span className="font-heading text-3xl font-bold uppercase tracking-widest">Katherine</span>
              <div className="w-12 md:w-[1px] h-[1px] md:h-12 bg-[var(--color-brand-pink)]" />
              <span className="font-body text-sm uppercase tracking-[0.3em] font-light">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Thin Line Serif</p>
          </div>

          {/* Concept 69: The Double Stacked Dot */}
          <div className="bg-[var(--color-brand-pink-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">69</span>
            <div className="flex flex-col text-left border-l-2 border-[var(--color-brand-pink)] pl-4">
              <span className="font-heading text-2xl md:text-3xl lowercase tracking-widest font-bold text-[var(--color-brand-black)]">katherine<span className="text-[var(--color-brand-pink)] text-4xl leading-none">.</span></span>
              <span className="font-heading text-2xl md:text-3xl lowercase tracking-widest font-bold text-gray-500">velasquez<span className="text-[var(--color-brand-pink)] text-4xl leading-none">.</span></span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Double Stacked Dot</p>
          </div>

          </div>
        </div>

        {/* SECTION: KT 360 */}
        <div className="mb-24">
          <h2 className="font-heading text-3xl italic font-bold mb-8 text-[var(--color-brand-black)] border-b-2 border-[var(--color-brand-gold)] pb-2 inline-block">KT 360</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
{/* Concept 3: The Minimalist KT */}
          <div className="bg-[var(--color-brand-gold-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-gold)]">03</span>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-[1.5px] border-[var(--color-brand-black)] flex items-center justify-center">
                <span className="font-heading text-xl italic">KT</span>
              </div>
              <span className="font-body text-sm font-bold tracking-[0.3em]">360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Minimalist Ring</p>
          </div>

          

{/* Concept 4: The Bold Contrast */}
          <div className="bg-[var(--color-brand-black)] text-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] shadow-elevated relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-600">04</span>
            <div className="flex items-center">
              <span className="font-heading text-3xl font-black tracking-widest uppercase">K</span>
              <span className="font-script text-5xl text-[var(--color-brand-gold)] -ml-2">360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Bold Contrast</p>
          </div>

          

{/* Concept 7: The Structured Box */}
          <div className="bg-[var(--color-brand-pink-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">07</span>
            <div className="border-[2px] border-[var(--color-brand-black)] p-4 flex flex-col items-center">
              <span className="font-body text-2xl font-black uppercase tracking-widest">KT</span>
              <span className="font-script text-3xl -mt-2">360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Structured Box</p>
          </div>

          

{/* Concept 8: The Soft Sans */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">08</span>
            <div className="flex items-center gap-1">
              <span className="font-body text-2xl font-light tracking-widest uppercase text-gray-400">KT</span>
              <span className="font-body text-2xl font-black tracking-widest text-[var(--color-brand-black)]">360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Modern Sans</p>
          </div>

          

{/* Concept 10: The Pill */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">10</span>
            <div className="border-[1.5px] border-[var(--color-brand-black)] rounded-full px-6 py-3 flex items-center gap-4">
              <span className="font-heading italic text-xl">KT</span>
              <div className="w-[1px] h-4 bg-[var(--color-brand-black)] opacity-30" />
              <span className="font-body text-sm font-bold tracking-widest">360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Pill</p>
          </div>

          

{/* Concept 12: The Vertical Stack */}
          <div className="bg-[var(--color-brand-pink-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">12</span>
            <div className="flex flex-col items-center leading-none">
              <span className="font-heading text-4xl italic">K</span>
              <div className="h-4 w-[1px] bg-[var(--color-brand-black)] my-2" />
              <span className="font-body text-sm font-black tracking-widest">360</span>
              <div className="h-4 w-[1px] bg-[var(--color-brand-black)] my-2" />
              <span className="font-heading text-4xl italic">V</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Vertical Stack</p>
          </div>

          

{/* Concept 14: The Degree */}
          <div className="bg-[var(--color-brand-gold-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-gold)]">14</span>
            <div className="flex items-start">
              <span className="font-heading text-6xl uppercase tracking-tighter">KT</span>
              <span className="font-body text-xl font-bold tracking-widest mt-1 ml-1 text-[var(--color-brand-black)]">360&deg;</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Degree</p>
          </div>

          

{/* Concept 19: The Monoline */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">19</span>
            <div className="flex items-center w-full px-8">
              <span className="font-heading text-2xl italic mr-4">KT</span>
              <div className="flex-grow h-[1px] bg-[var(--color-brand-black)]" />
              <span className="font-body text-xs font-bold tracking-widest ml-4">360</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Monoline</p>
          </div>

          

          {/* Concept 66: The Pink Dot Box */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">66</span>
            <div className="flex items-center gap-4">
              <div className="bg-[var(--color-brand-pink)] w-16 h-16 flex items-center justify-center rounded-sm">
                <span className="font-body text-2xl font-black text-white">KT</span>
              </div>
              <span className="font-heading text-4xl italic font-bold">360<span className="text-[var(--color-brand-pink)] not-italic">.</span></span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Pink Dot Box</p>
          </div>

          {/* Concept 70: The Bracketed Dot */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">70</span>
            <div className="flex items-center gap-4 text-[var(--color-brand-black)]">
              <span className="font-body text-6xl font-thin text-gray-400">[</span>
              <div className="flex flex-col items-center pt-2">
                <span className="font-heading text-4xl font-black italic tracking-widest">KT</span>
                <span className="font-body text-sm font-bold uppercase tracking-[0.2em] mt-1">360<span className="text-[var(--color-brand-pink)] text-2xl leading-none">.</span></span>
              </div>
              <span className="font-body text-6xl font-thin text-gray-400">]</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Bracketed Dot</p>
          </div>

          </div>
        </div>

        {/* SECTION: KT VELASQUEZ */}
        <div className="mb-24">
          <h2 className="font-heading text-3xl italic font-bold mb-8 text-[var(--color-brand-black)] border-b-2 border-[var(--color-brand-gold)] pb-2 inline-block">KT Velasquez</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
{/* Concept 17: The Editorial Serif */}
          <div className="bg-[var(--color-brand-black)] text-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-600">17</span>
            <div className="flex items-end">
              <span className="font-heading text-7xl italic leading-none">K</span>
              <div className="flex flex-col ml-2 mb-1">
                <span className="font-body text-[8px] uppercase tracking-widest text-gray-400">Velasquez</span>
                <span className="font-body text-sm font-bold text-[var(--color-brand-gold)]">360</span>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Editorial Serif</p>
          </div>

          

{/* Concept 43: The Lowercase Spaced */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">43</span>
            <div className="font-heading text-xl lowercase tracking-[0.4em] text-[var(--color-brand-black)]">
              k.t. velasquez
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Lowercase Spaced</p>
          </div>

          

{/* Concept 44: The Massive Sans */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">44</span>
            <div className="flex flex-col items-center leading-none">
              <span className="font-body text-7xl font-black tracking-tighter text-[var(--color-brand-black)]">KT</span>
              <span className="font-heading text-xs uppercase tracking-[0.5em] text-gray-500 mt-2 ml-2">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Massive Sans</p>
          </div>

          

{/* Concept 45: The Script Combo */}
          <div className="bg-[var(--color-brand-pink-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">45</span>
            <div className="flex items-center gap-3">
              <span className="font-script text-5xl text-[var(--color-brand-pink)] lowercase">kt</span>
              <span className="font-heading text-2xl uppercase tracking-widest">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Script Combo</p>
          </div>

          

{/* Concept 46: The Split Italic */}
          <div className="bg-[var(--color-brand-black)] text-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-600">46</span>
            <div className="flex flex-col items-center">
              <span className="font-heading text-5xl italic tracking-[0.2em] mb-2 text-[var(--color-brand-gold)]">K T</span>
              <div className="w-8 h-[1px] bg-white/30 mb-2" />
              <span className="font-body text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Split Italic</p>
          </div>

          

{/* Concept 47: The Pink Dot */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">47</span>
            <div className="font-body text-xl font-bold tracking-widest uppercase">
              K<span className="text-[var(--color-brand-pink)]">.</span>T<span className="text-[var(--color-brand-pink)]">.</span> Velasquez
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Pink Dot</p>
          </div>

          

{/* Concept 48: The Bracketed */}
          <div className="bg-[var(--color-brand-gold-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-gold)]">48</span>
            <div className="flex items-center text-2xl">
              <span className="font-body font-light text-gray-400 mr-2">[</span>
              <span className="font-heading italic font-bold lowercase tracking-widest text-[var(--color-brand-black)]">kt</span>
              <span className="font-body font-light text-gray-400 ml-2 mr-3">]</span>
              <span className="font-body text-sm font-black uppercase tracking-[0.3em]">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Bracketed</p>
          </div>

          

{/* Concept 49: The Em Dash */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">49</span>
            <div className="font-heading text-2xl uppercase tracking-widest">
              <span className="font-bold">KT</span>
              <span className="text-[var(--color-brand-gold)] font-light mx-4">—</span>
              <span className="italic">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Em Dash</p>
          </div>

          

{/* Concept 50: The Shadow Monogram */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group overflow-hidden">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">50</span>
            <div className="relative flex items-center justify-center w-full h-full">
              <span className="font-heading text-[10rem] text-[var(--color-brand-gold)] opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none italic font-black">KT</span>
              <span className="font-script text-5xl z-10 text-[var(--color-brand-black)] capitalize -rotate-6">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Shadow Monogram</p>
          </div>

          

{/* Concept 51: The Slash Lowercase */}
          <div className="bg-[var(--color-brand-pink)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-black)] opacity-50">51</span>
            <div className="flex items-center text-white text-3xl font-heading lowercase tracking-widest">
              <span>k</span>
              <span className="font-body font-light opacity-50 mx-2">/</span>
              <span>t</span>
              <span className="ml-4 font-bold">velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-[var(--color-brand-black)] opacity-50 group-hover:opacity-100 transition-opacity">The Slash Lowercase</p>
          </div>

          

{/* Concept 52: The Script Stack */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">52</span>
            <div className="flex flex-col items-center">
              <div className="flex font-script text-5xl text-[var(--color-brand-gold)] -mb-2">
                <span>K</span>
                <span className="ml-1 mt-4">T</span>
              </div>
              <span className="font-heading text-sm uppercase tracking-[0.4em] font-bold">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Script Stack</p>
          </div>

          

{/* Concept 53: The Stroke */}
          <div className="bg-[var(--color-brand-black)] text-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-600">53</span>
            <div className="flex flex-col items-center">
              <span className="font-body text-6xl font-black tracking-tighter text-transparent" style={{ WebkitTextStroke: '1px white' }}>KT</span>
              <span className="font-heading text-xl italic tracking-widest mt-2 text-[var(--color-brand-gold)]">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Stroke</p>
          </div>

          

{/* Concept 54: The Bold Point */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">54</span>
            <div className="flex items-baseline">
              <span className="font-heading text-3xl font-black lowercase tracking-widest">kt.</span>
              <span className="font-body text-xl font-light lowercase tracking-widest ml-3 text-gray-400">velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Bold Point</p>
          </div>

          

{/* Concept 55: The Interpunct */}
          <div className="bg-[var(--color-brand-pink-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">55</span>
            <div className="font-heading text-2xl uppercase tracking-[0.3em]">
              K<span className="mx-2 text-[var(--color-brand-pink)]">·</span>T Velasquez
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Interpunct</p>
          </div>

          

{/* Concept 56: The Drop Cap */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">56</span>
            <div className="flex items-start">
              <span className="font-heading text-7xl font-black italic text-[var(--color-brand-gold)] leading-none mr-2 pt-2">K</span>
              <div className="flex flex-col pt-3">
                <span className="font-body text-xl font-black uppercase tracking-widest">T Velasquez</span>
                <span className="font-body text-[8px] uppercase tracking-[0.4em] text-gray-400 mt-1">Estrategia</span>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Drop Cap</p>
          </div>

          

{/* Concept 57: The Stamp Ring */}
          <div className="bg-[var(--color-brand-gold-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-gold)]">57</span>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-[var(--color-brand-black)] flex items-center justify-center p-1">
                <div className="w-full h-full rounded-full border border-[var(--color-brand-black)] flex items-center justify-center bg-white">
                  <span className="font-heading text-xl italic font-bold">KT</span>
                </div>
              </div>
              <span className="font-body text-lg font-black uppercase tracking-[0.2em]">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Stamp Ring</p>
          </div>

          

{/* Concept 58: The Vertical Divider */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">58</span>
            <div className="flex items-center gap-6">
              <div className="flex flex-col text-right font-heading text-xl uppercase tracking-widest font-bold">
                <span>K</span>
                <span>T</span>
              </div>
              <div className="w-[1px] h-12 bg-[var(--color-brand-pink)]" />
              <span className="font-script text-4xl capitalize text-gray-600">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Vertical Divider</p>
          </div>

          

{/* Concept 59: The Staircase */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">59</span>
            <div className="flex flex-col font-heading text-2xl uppercase tracking-widest">
              <span className="italic ml-0">K</span>
              <span className="font-bold text-[var(--color-brand-gold)] ml-6 my-1">T</span>
              <span className="ml-12 font-body text-xs text-gray-500 font-bold">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Staircase</p>
          </div>

          

{/* Concept 60: The Underscore */}
          <div className="bg-[var(--color-brand-black)] text-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-600">60</span>
            <div className="font-body text-xl font-bold tracking-[0.2em] lowercase flex items-center">
              <span>kt</span>
              <span className="text-[var(--color-brand-pink)] mx-1">_</span>
              <span className="font-light">velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Underscore</p>
          </div>

          

{/* Concept 61: The Gold Serif */}
          <div className="bg-[var(--color-brand-pink-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">61</span>
            <div className="flex items-end gap-3 border-b border-[var(--color-brand-black)] pb-2 px-4">
              <span className="font-heading text-4xl italic text-[var(--color-brand-gold)]">KT</span>
              <span className="font-script text-3xl text-[var(--color-brand-black)] -mb-1">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Base Line</p>
          </div>

          

          {/* Concept 67: The Massive Serif Dots */}
          <div className="bg-[var(--color-brand-gold-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-gold)]">67</span>
            <div className="flex flex-col items-center">
              <span className="font-heading text-6xl italic leading-none">K<span className="text-[var(--color-brand-pink)] font-black">.</span>T<span className="text-[var(--color-brand-pink)] font-black">.</span></span>
              <span className="font-body text-sm font-bold uppercase tracking-[0.4em] mt-2">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Massive Serif Dots</p>
          </div>

          {/* Concept 72: The Bold Sans Pink Dot */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">72</span>
            <div className="flex items-baseline">
              <span className="font-body text-3xl font-black lowercase tracking-widest">kt<span className="text-[var(--color-brand-pink)] text-4xl leading-none">.</span></span>
              <span className="font-body text-xl font-light lowercase tracking-widest ml-3 text-gray-500">velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Bold Sans Pink Dot</p>
          </div>

          {/* Concept 73: The Massive Sans Pink Dot */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">73</span>
            <div className="flex flex-col items-center leading-none text-center">
              <span className="font-body text-7xl font-black tracking-tighter text-[var(--color-brand-black)] inline-block">KT<span className="text-[var(--color-brand-pink)]">.</span></span>
              <span className="font-heading text-xs uppercase tracking-[0.5em] text-gray-500 mt-2 block w-full text-center">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Massive Sans Pink Dot</p>
          </div>

          {/* Concept 74: The Bold Sans + Script Velasquez */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">74</span>
            <div className="flex items-baseline">
              <span className="font-body text-3xl font-black lowercase tracking-widest">kt<span className="text-[var(--color-brand-pink)] text-4xl leading-none">.</span></span>
              <span className="font-script text-4xl ml-3 text-gray-500 capitalize">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Script Velasquez</p>
          </div>

          {/* Concept 75: The Massive Sans + Script Velasquez */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">75</span>
            <div className="flex flex-col items-center leading-none text-center">
              <span className="font-body text-7xl font-black tracking-tighter text-[var(--color-brand-black)] inline-block">KT<span className="text-[var(--color-brand-pink)]">.</span></span>
              <span className="font-script text-3xl text-gray-500 mt-2 block w-full text-center capitalize">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Massive Sans + Script Velasquez</p>
          </div>

          {/* Concept 76: The Bold Sans + Round Serif */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">76</span>
            <div className="flex items-baseline">
              <span className="font-body text-3xl font-black lowercase tracking-widest">kt<span className="text-[var(--color-brand-pink)] text-4xl leading-none">.</span></span>
              <span className="font-heading text-2xl italic lowercase ml-3 text-gray-500">velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Round Serif Velasquez</p>
          </div>

          {/* Concept 77: The Massive Sans + Round Serif */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">77</span>
            <div className="flex flex-col items-center leading-none text-center">
              <span className="font-body text-7xl font-black tracking-tighter text-[var(--color-brand-black)] inline-block">KT<span className="text-[var(--color-brand-pink)]">.</span></span>
              <span className="font-heading text-xl italic lowercase text-gray-500 mt-2 block w-full text-center tracking-[0.2em]">velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Massive Sans + Round Serif</p>
          </div>

          {/* Concept 78: The Pink Dot Box Velasquez */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">78</span>
            <div className="flex items-center gap-4">
              <div className="bg-[var(--color-brand-pink)] w-16 h-16 flex items-center justify-center rounded-sm shrink-0">
                <span className="font-body text-2xl font-black text-white">KT</span>
              </div>
              <span className="font-heading text-3xl italic font-bold">Velasquez<span className="text-[var(--color-brand-pink)] not-italic">.</span></span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Pink Dot Box Velasquez</p>
          </div>

          {/* Concept 79: The Pill Mark Stack */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">79</span>
            <div className="flex flex-col items-center">
              {/* Abstract Mark */}
              <div className="flex flex-col items-center gap-[3px] mb-6">
                <div className="w-8 h-3 rounded-full bg-[var(--color-brand-gold)] transform translate-x-3"></div>
                <div className="w-14 h-3 rounded-full bg-[var(--color-brand-black)]"></div>
                <div className="w-8 h-3 rounded-full bg-[var(--color-brand-gold)] transform -translate-x-3"></div>
              </div>
              <span className="font-body text-6xl font-black tracking-tighter text-[var(--color-brand-black)] lowercase leading-none mb-3">kt</span>
              <span className="font-body text-xs lowercase tracking-[0.4em] text-gray-500 font-medium ml-1">velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Pill Mark Stack</p>
          </div>

          {/* Concept 80: The Minimalist Offset Stack */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">80</span>
            <div className="flex flex-col items-center">
              {/* Abstract Mark */}
              <div className="flex items-center gap-1 mb-5">
                <div className="w-4 h-4 rounded-full bg-[var(--color-brand-pink)]"></div>
                <div className="w-4 h-4 rounded-full bg-[var(--color-brand-gold)] transform translate-y-3"></div>
                <div className="w-4 h-4 rounded-full bg-[var(--color-brand-black)]"></div>
              </div>
              <span className="font-body text-6xl font-black tracking-tight text-[var(--color-brand-black)] uppercase leading-none mb-3">KT.</span>
              <span className="font-body text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold ml-1">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Minimalist Offset Stack</p>
          </div>

          {/* Concept 81: The Split Geometric Stack */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">81</span>
            <div className="flex flex-col items-center">
              {/* Abstract Mark */}
              <div className="flex mb-6 relative w-12 h-12">
                <div className="absolute left-0 top-0 w-6 h-12 bg-[var(--color-brand-gold)] rounded-l-full"></div>
                <div className="absolute right-0 top-0 w-6 h-12 bg-[var(--color-brand-pink)] rounded-r-full transform translate-y-3"></div>
              </div>
              <span className="font-body text-5xl font-black tracking-tighter text-[var(--color-brand-black)] lowercase leading-none mb-2">kt.</span>
              <span className="font-body text-xs uppercase tracking-[0.3em] text-gray-500 font-medium ml-1">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Split Geometric Stack</p>
          </div>

          {/* Concept 82: The Bold Arch Stack */}
          <div className="bg-[var(--color-brand-black)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-800 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-600">82</span>
            <div className="flex flex-col items-center">
              {/* Abstract Mark */}
              <div className="w-12 h-6 border-t-[6px] border-l-[6px] border-r-[6px] border-[var(--color-brand-gold)] rounded-t-full mb-6"></div>
              <span className="font-body text-5xl font-black tracking-widest text-white uppercase leading-none mb-3">KT</span>
              <span className="font-body text-[9px] uppercase tracking-[0.6em] text-gray-400 font-bold ml-1">Velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Bold Arch Stack</p>
          </div>

          {/* Concept 83: The Grid Icon Stack */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">83</span>
            <div className="flex flex-col items-center">
              {/* Abstract Mark */}
              <div className="grid grid-cols-2 gap-[2px] mb-6">
                <div className="w-5 h-5 bg-[var(--color-brand-pink)] rounded-tl-full"></div>
                <div className="w-5 h-5 bg-[var(--color-brand-gold)] rounded-tr-full"></div>
                <div className="w-5 h-5 bg-[var(--color-brand-gold)] rounded-bl-full"></div>
                <div className="w-5 h-5 bg-[var(--color-brand-black)] rounded-br-full"></div>
              </div>
              <span className="font-body text-6xl font-black tracking-tighter text-[var(--color-brand-black)] lowercase leading-none mb-3">kt</span>
              <span className="font-body text-xs lowercase tracking-[0.5em] text-gray-400 font-medium ml-1">velasquez</span>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Grid Icon Stack</p>
          </div>

          {/* Concept 84: The Interlocking Orbit (Creative Above/Below) */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group overflow-hidden">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">84</span>
            <div className="flex flex-col items-center gap-6 relative z-10">
              <div className="relative w-16 h-8">
                <div className="absolute top-0 left-0 w-12 h-12 border-[3px] border-[var(--color-brand-gold)] rounded-full translate-x-2 -translate-y-4"></div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-[var(--color-brand-pink)] rounded-full mix-blend-multiply -translate-x-2"></div>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-body text-4xl font-black lowercase tracking-widest">kt<span className="text-[var(--color-brand-pink)]">.</span></span>
                <span className="font-body text-2xl font-light lowercase tracking-widest text-gray-500">velasquez</span>
              </div>
              <div className="w-12 h-[2px] bg-[var(--color-brand-black)] translate-x-6"></div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Interlocking Orbit</p>
          </div>

          {/* Concept 85: The Structural Arch (Creative Above) */}
          <div className="bg-[var(--color-brand-black)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] relative group overflow-hidden">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-600">85</span>
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-full flex justify-center mb-2">
                <div className="w-32 h-16 border-t-[3px] border-l-[3px] border-r-[3px] border-[var(--color-brand-gold)] rounded-t-full relative">
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-[var(--color-brand-pink)]"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-white"></div>
                </div>
              </div>
              <div className="flex items-baseline text-white z-10">
                <span className="font-body text-2xl font-black uppercase tracking-[0.2em]">KT<span className="text-[var(--color-brand-pink)] mx-1">.</span></span>
                <span className="font-body text-xl font-light uppercase tracking-[0.4em] text-gray-300">Velasquez</span>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Structural Arch</p>
          </div>

          {/* Concept 86: The Staggered Wave (Creative Above & Below) */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">86</span>
            <div className="flex flex-col items-center">
              <div className="flex gap-2 mb-4 w-full justify-start pl-8 opacity-60">
                <div className="w-12 h-[3px] rounded-full bg-[var(--color-brand-gold)]"></div>
                <div className="w-4 h-[3px] rounded-full bg-[var(--color-brand-pink)]"></div>
              </div>
              <div className="flex items-center">
                <span className="font-body text-4xl font-black lowercase tracking-tighter">kt<span className="text-[var(--color-brand-pink)] text-5xl leading-none">.</span></span>
                <span className="font-heading text-3xl italic lowercase tracking-widest text-gray-500 ml-2">velasquez</span>
              </div>
              <div className="flex gap-2 mt-4 w-full justify-end pr-8 opacity-60">
                <div className="w-4 h-[3px] rounded-full bg-[var(--color-brand-black)]"></div>
                <div className="w-16 h-[3px] rounded-full bg-[var(--color-brand-gold)]"></div>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Staggered Wave</p>
          </div>

          {/* Concept 87: The Lens Flare (Creative Above) */}
          <div className="bg-[var(--color-brand-gold-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group overflow-hidden">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-gold)]">87</span>
            <div className="flex flex-col items-center">
              <div className="relative mb-8 w-full flex justify-center">
                <div className="w-24 h-24 border border-[var(--color-brand-black)] opacity-20 rounded-full absolute -top-12 -left-4"></div>
                <div className="w-16 h-16 bg-[var(--color-brand-cream)] rounded-full absolute -top-4 -left-0 mix-blend-overlay"></div>
                <div className="w-6 h-6 bg-[var(--color-brand-pink)] rounded-full relative z-10 shadow-sm mt-4"></div>
              </div>
              <div className="flex items-baseline bg-white/60 backdrop-blur-md px-6 py-2 rounded-full shadow-sm z-20">
                <span className="font-body text-2xl font-black lowercase tracking-[0.2em] text-[var(--color-brand-black)]">kt</span>
                <span className="text-[var(--color-brand-pink)] text-2xl font-black mx-1">.</span>
                <span className="font-body text-sm font-bold uppercase tracking-[0.3em] text-gray-600">Velasquez</span>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Lens Flare</p>
          </div>

          {/* Concept 88: The Precision Frame (Creative Above & Below) */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">88</span>
            <div className="flex flex-col items-center relative">
              <div className="absolute -top-6 w-full flex justify-between px-4">
                <div className="w-2 h-2 bg-[var(--color-brand-gold)] rounded-sm"></div>
                <div className="w-8 h-[2px] bg-gray-300 mt-1"></div>
                <div className="w-2 h-2 bg-[var(--color-brand-pink)] rounded-sm"></div>
              </div>
              
              <div className="flex items-center gap-1 border-y border-gray-100 py-4 px-8 my-4">
                <span className="font-body text-3xl font-black uppercase tracking-widest">KT<span className="text-[var(--color-brand-pink)] ml-1">.</span></span>
                <span className="font-heading text-xl italic text-gray-400 lowercase tracking-widest ml-2">velasquez</span>
              </div>

              <div className="absolute -bottom-6 w-full flex justify-between px-4">
                <div className="w-2 h-2 bg-[var(--color-brand-black)] rounded-sm"></div>
                <div className="w-16 h-[2px] bg-gray-300 mt-1"></div>
                <div className="w-2 h-2 bg-gray-200 rounded-sm"></div>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Precision Frame</p>
          </div>

          {/* Concept 89: The Geometric Slice (Creative Above) */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">89</span>
            <div className="flex flex-col items-center">
              <div className="flex w-16 h-16 relative overflow-hidden rounded-full mb-6 transform -rotate-12">
                <div className="absolute left-0 top-0 w-8 h-16 bg-[var(--color-brand-black)]"></div>
                <div className="absolute right-0 top-0 w-8 h-16 bg-[var(--color-brand-pink)] transform translate-y-4"></div>
              </div>
              <div className="flex items-baseline">
                <span className="font-body text-4xl font-black lowercase tracking-tighter">kt</span>
                <span className="w-3 h-3 bg-[var(--color-brand-gold)] rounded-full mx-2 self-center"></span>
                <span className="font-body text-xl font-light uppercase tracking-[0.4em] text-gray-600">Velasquez</span>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Geometric Slice</p>
          </div>

          {/* Concept 90: The Asymmetric Pulse (Creative Above & Below) */}
          <div className="bg-[var(--color-brand-pink-light)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-white shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">90</span>
            <div className="flex flex-col items-center w-full">
              <div className="w-full flex justify-start mb-4 pl-4">
                <div className="w-24 h-12 bg-white rounded-t-full rounded-bl-full flex items-center justify-center shadow-sm">
                  <div className="w-4 h-4 bg-[var(--color-brand-pink)] rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center text-[var(--color-brand-black)] bg-white/50 px-6 py-3 rounded-xl backdrop-blur-md z-10 shadow-sm">
                <span className="font-body text-2xl font-black uppercase tracking-[0.3em]">KT.</span>
                <span className="font-script text-4xl capitalize ml-2 -mt-2">Velasquez</span>
              </div>
              <div className="w-full flex justify-end mt-4 pr-4">
                <div className="w-12 h-12 bg-[var(--color-brand-gold)] rounded-b-full rounded-tl-full shadow-sm"></div>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">The Asymmetric Pulse</p>
          </div>

          {/* Concept 91: The Connected Circuit (Creative Above) */}
          <div className="bg-[var(--color-brand-black)] text-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-600">91</span>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full border-[3px] border-[var(--color-brand-gold)]"></div>
                  <div className="w-16 h-[2px] bg-white/20 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--color-brand-pink)] rounded-full shadow-[0_0_12px_var(--color-brand-pink)]"></div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[var(--color-brand-gold)]"></div>
                </div>
                <div className="w-[2px] h-8 bg-white/20"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-body text-4xl font-bold lowercase tracking-widest text-white">kt.</span>
                <span className="font-body text-xl font-light uppercase tracking-[0.5em] text-gray-400">Velasquez</span>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Connected Circuit</p>
          </div>

          {/* Concept 92: The Floating Discs (Creative Above & Below) */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">92</span>
            <div className="flex flex-col items-center relative">
              <div className="absolute -top-12 -left-8 w-16 h-16 rounded-full bg-[var(--color-brand-cream)] border border-[var(--color-brand-gold-light)] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[var(--color-brand-pink)] mix-blend-multiply translate-x-3 translate-y-2"></div>
              </div>
              
              <div className="flex items-baseline relative z-10 bg-white/80 py-2 px-4 backdrop-blur-sm rounded-lg mt-4 border border-gray-50 shadow-sm">
                <span className="font-body text-4xl font-black uppercase tracking-tighter">KT<span className="text-[var(--color-brand-pink)] text-5xl leading-none">.</span></span>
                <span className="font-heading text-2xl italic lowercase tracking-widest text-gray-500 ml-3">velasquez</span>
              </div>

              <div className="absolute -bottom-8 -right-4 w-8 h-8 rounded-full bg-[var(--color-brand-gold)] mix-blend-multiply"></div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Floating Discs</p>
          </div>

          {/* Concept 93: The Golden Section (Creative Above) */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">93</span>
            <div className="flex flex-col w-full px-8">
              <div className="flex gap-1 mb-4 h-12">
                <div className="w-1/4 h-full bg-[var(--color-brand-gold)] rounded-tl-xl rounded-bl-sm"></div>
                <div className="w-2/4 h-full bg-[var(--color-brand-black)] rounded-t-sm"></div>
                <div className="w-1/4 h-full bg-[var(--color-brand-pink)] rounded-tr-xl rounded-br-sm"></div>
              </div>
              <div className="flex items-center justify-between w-full border-t-[3px] border-[var(--color-brand-black)] pt-4">
                <span className="font-body text-3xl font-black uppercase tracking-widest">KT<span className="text-[var(--color-brand-pink)] ml-1">.</span></span>
                <span className="font-body text-[10px] uppercase tracking-[0.5em] text-gray-500 font-bold">Velasquez</span>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Golden Section</p>
          </div>

          {/* Concept 94: The Venn Triangle */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-gray-100 shadow-soft relative group overflow-hidden">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">94</span>
            <div className="flex flex-col items-center gap-6 relative z-10">
              <div className="relative w-24 h-24 mb-2">
                {/* Top Black Circle */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-[var(--color-brand-black)] rounded-full mix-blend-multiply opacity-90 shadow-sm"></div>
                {/* Bottom Left Gold Circle */}
                <div className="absolute bottom-0 left-1 w-14 h-14 bg-[var(--color-brand-gold)] rounded-full mix-blend-multiply opacity-90 shadow-sm"></div>
                {/* Bottom Right Pink Circle */}
                <div className="absolute bottom-0 right-1 w-14 h-14 bg-[var(--color-brand-pink)] rounded-full mix-blend-multiply opacity-90 shadow-sm"></div>
              </div>
              <div className="flex items-baseline gap-1 bg-white/50 backdrop-blur-sm px-4 py-1 rounded-lg">
                <span className="font-body text-4xl font-black lowercase tracking-widest text-[var(--color-brand-black)]">kt<span className="text-[var(--color-brand-pink)]">.</span></span>
                <span className="font-body text-xl font-light lowercase tracking-[0.4em] text-gray-500">velasquez</span>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Venn Triangle</p>
          </div>

          {/* Concept 95: The Uneven Sector */}
          <div className="bg-[var(--color-brand-cream)] rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[300px] border border-[var(--color-brand-gold-light)] shadow-soft relative group">
            <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-300">95</span>
            <div className="flex flex-col items-center">
              <div 
                className="w-20 h-20 rounded-full mb-8 shadow-md transform -rotate-12 border-[6px] border-white"
                style={{
                  background: 'conic-gradient(var(--color-brand-black) 0deg 150deg, var(--color-brand-pink) 150deg 240deg, var(--color-brand-gold) 240deg 360deg)'
                }}
              ></div>
              <div className="flex items-baseline bg-white px-6 py-2 rounded-full shadow-sm">
                <span className="font-body text-3xl font-black lowercase tracking-tighter text-[var(--color-brand-black)]">kt</span>
                <span className="font-body text-xl font-black uppercase mx-2 text-[var(--color-brand-pink)]">.</span>
                <span className="font-body text-lg font-bold uppercase tracking-[0.4em] text-[var(--color-brand-black)]">Velasquez</span>
              </div>
            </div>
            <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">The Uneven Sector</p>
          </div>

          </div>
        </div>

      </div>
    </div>
  );
}
