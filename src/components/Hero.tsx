import React from 'react';
import { Database, Compass, ArrowRight, ShieldCheck, HeartHandshake, Sparkles, Feather } from 'lucide-react';
import { ModularLogo } from './ModularLogo';
import { MarbleVeins } from './MarbleVeins';

interface HeroProps {
  onContactClick: () => void;
  onExploreProjects: () => void;
  onViewStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreProjects, onViewStory }) => {
  return (
    <section id="hero" className="relative pt-24 pb-24 md:pt-36 md:pb-36 overflow-hidden">
      
      {/* Living Marble Veins with Asynchronous Single-Line Gold Pulse */}
      <MarbleVeins dark={false} />

      {/* Classical Sculptural Watermark: MODULAR (Calibrated to fit 100% of viewport without truncation) */}
      <div className="absolute top-[44%] sm:top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-center w-full max-w-6xl opacity-[0.045] px-4 overflow-visible z-0">
        <span className="font-serif text-[3.8rem] sm:text-[6.2rem] md:text-[8.5rem] lg:text-[10.5rem] font-bold tracking-[0.14em] sm:tracking-[0.2em] text-slate-900 block leading-none whitespace-nowrap">
          MODULAR
        </span>
      </div>

      {/* Diffused Sapphire & Subtle Gold Warmth (Smooth radial glow without hard clipping) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 70% 45% at 50% 18%, rgba(219, 234, 254, 0.4) 0%, rgba(241, 245, 252, 0.15) 55%, transparent 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Top Sculpted Pill Badge with the Official Logo Emblem */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full carved-pill shadow-xs border border-slate-300/80">
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              <ModularLogo className="w-6 h-6" variant="emblem" />
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-800 flex items-center gap-2">
              <span className="font-display font-bold">Modular Systems</span>
              <span className="text-amber-600">✦</span>
              <span className="editorial-italic text-sm text-slate-700">Atelier de Software & Digitalización</span>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <span className="text-slate-500 text-xs font-mono hidden sm:inline">Lucas Miguez [SSR]</span>
            </span>
          </div>
        </div>

        {/* Main Headline with Refined Architectural & Editorial Typography */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 leading-[1.12] mb-8 font-display">
            La arquitectura de la{' '}
            <span className="block mt-1 font-normal">
              <span className="editorial-italic font-normal text-slate-950">
                serenidad operativa.
              </span>
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto mb-12">
            En un entorno saturado de software genérico e inaccesible, concebimos herramientas informáticas de{' '}
            <strong className="text-slate-900 font-semibold">sobria precisión</strong>. Diseñadas para eliminar el caos diario,
            devolverle el tiempo a quienes gestionan y elevar la{' '}
            <span className="editorial-italic font-semibold text-blue-900 text-xl sm:text-2xl">
              calidad de vida
            </span>{' '}
            de las pequeñas y medianas empresas.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 transition-all flex items-center justify-center gap-2.5 group border border-blue-400/30"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Solicitar Diagnóstico Sin Cargo</span>
              <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1 group-hover:text-white transition-all" />
            </button>
            <button
              onClick={onExploreProjects}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl carved-pill text-slate-800 hover:text-blue-700 font-semibold text-sm sm:text-base hover:border-amber-400/80 transition-all flex items-center justify-center gap-2"
            >
              <span>Explorar Casos de Estudio</span>
            </button>
            <button
              onClick={onViewStory}
              className="w-full sm:w-auto px-5 py-4 rounded-2xl text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors flex items-center justify-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-amber-600" />
              <span>Nuestra Razón de Ser</span>
            </button>
          </div>
        </div>

        {/* 4 Carved Marble Slabs (Trust Grid) with Obsidian & Gold Bevel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          
          <div className="marble-slab p-6 rounded-3xl relative overflow-hidden group">
            <div className="sculpt-number absolute top-3 right-4 text-5xl">01</div>
            <div className="w-12 h-12 rounded-2xl sapphire-pill flex items-center justify-center text-blue-700 mb-4 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-xl font-bold font-display text-slate-900 mb-0.5">4 Años</div>
            <div className="editorial-italic text-sm text-blue-800 mb-2 font-semibold">Producción Formal</div>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Software probado en grandes marcas (Grimoldi), armada naval y entidades sanitarias.
            </p>
          </div>

          <div className="marble-slab p-6 rounded-3xl relative overflow-hidden group">
            <div className="sculpt-number absolute top-3 right-4 text-5xl">02</div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 mb-4 group-hover:scale-105 transition-transform">
              <Feather className="w-6 h-6" />
            </div>
            <div className="text-xl font-bold font-display text-slate-900 mb-0.5">Sobriedad</div>
            <div className="editorial-italic text-sm text-amber-800 mb-2 font-semibold">Lo Esencial sin Ruido</div>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Sistemas diseñados con economía de elementos: únicamente los módulos que tu equipo usa a diario.
            </p>
          </div>

          <div className="marble-slab p-6 rounded-3xl relative overflow-hidden group">
            <div className="sculpt-number absolute top-3 right-4 text-5xl">03</div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 mb-4 group-hover:scale-105 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div className="text-xl font-bold font-display text-slate-900 mb-0.5">Humano</div>
            <div className="editorial-italic text-sm text-indigo-800 mb-2 font-semibold">Calidad de Vida</div>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              La tecnología como un acto de servicio para devolver tranquilidad, descanso y orden familiar.
            </p>
          </div>

          <div className="marble-slab p-6 rounded-3xl relative overflow-hidden group">
            <div className="sculpt-number absolute top-3 right-4 text-5xl">04</div>
            <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-800 mb-4 group-hover:scale-105 transition-transform">
              <Database className="w-6 h-6" />
            </div>
            <div className="text-xl font-bold font-display text-slate-900 mb-0.5">Rigor</div>
            <div className="editorial-italic text-sm text-slate-800 mb-2 font-semibold">Bases Multi-Modelo</div>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Dominio de SQL, Grafos semánticos (Neo4j), Cassandra NoSQL y Redis en memoria.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
