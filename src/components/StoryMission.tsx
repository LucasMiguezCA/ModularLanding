import React from 'react';
import { Heart, Compass, ShieldCheck, Sparkles, Users, Award, BookOpen } from 'lucide-react';
import { MarbleVeins } from './MarbleVeins';

export const StoryMission: React.FC = () => {
  return (
    <section id="historia" className="py-24 md:py-36 relative overflow-hidden nero-marble-overlay text-white border-t border-slate-800 scroll-mt-24">
      
      {/* Living Marble Veins with Asynchronous Single-Line Gold Pulse (Dark) */}
      <MarbleVeins dark={true} />

      {/* Classical Serif Watermark in White/Gold Translucency */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-center w-full max-w-7xl opacity-[0.045] overflow-hidden z-0">
        <span className="font-serif text-[10rem] sm:text-[16rem] md:text-[20rem] font-bold text-white block leading-none">
          VOCACION
        </span>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/40 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
            <Heart className="w-4 h-4 text-amber-400 fill-amber-400/20" />
            <span className="text-amber-300">Historia & Manifiesto</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-display mb-6">
            La Historia detrás de esta Iniciativa
          </h2>

          <p className="editorial-italic text-2xl sm:text-3xl text-slate-100 leading-relaxed max-w-3xl mx-auto font-normal">
            "No avanzo por el dinero, sino por el impacto en la{' '}
            <span className="underline decoration-amber-400 decoration-1 underline-offset-6 text-amber-300 font-semibold">
              calidad de vida
            </span>{' '}
            de las personas. La tecnología debe ser un remanso de orden y crecimiento, no un lujo inalcanzable."
          </p>
        </div>

        {/* Narrative Monolith: Inverted Dark Marble Slab (Nero Marquina & Gold) */}
        <div className="nero-slab p-8 sm:p-14 rounded-3xl space-y-7 text-slate-200 leading-relaxed text-base sm:text-lg font-normal mb-14">
          
          <div className="flex items-center gap-3 text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
            <BookOpen className="w-4 h-4" />
            <span>Capítulo 1 · 10 Años de Aprendizaje & Realidad Laboral</span>
          </div>

          <p>
            Estudio programación desde hace <strong className="text-white font-semibold">10 años</strong> y llevo{' '}
            <strong className="text-white font-semibold">4 años trabajando formalmente</strong> como desarrollador Fullstack
            en proyectos que van desde grandes marcas de calzado comercial hasta sistemas navales y entidades sanitarias públicas.
          </p>

          <p>
            En este camino me encontré con una paradoja injusta: las consultoras de software tradicionales 
            suelen cobrar sumas exorbitantes por sistemas enlatados, llenos de funcionalidades que nadie utiliza, 
            dejando a las <strong className="text-amber-300 font-semibold">Pequeñas y Medianas Empresas (PyMEs)</strong> en una situación
            de desamparo tecnológico: atrapadas en planillas de cálculo que se rompen y jornadas laborales desgastantes.
          </p>

          {/* Highlighted Banner with Gold Accents */}
          <div className="p-7 rounded-2xl bg-gradient-to-r from-amber-500/15 via-blue-900/20 to-slate-900/60 border-l-4 border-amber-400 my-8 border-y border-r border-amber-400/20">
            <h3 className="font-display font-bold text-white text-lg mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300">Nuestra Misión Presente: Digitalización con Sentido Humano</span>
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Brindar soluciones de digitalización y servicios informáticos a PyMEs de manera <strong className="text-amber-300">simple, 
              sólida y sumamente económica</strong>. No buscamos inventar sistemas innecesarios: creamos la herramienta exacta que 
              ordena las ventas, el stock y la administración, devolviéndole tiempo de descanso y tranquilidad al dueño y a su equipo.
            </p>
          </div>

          <p>
            Al combinar mi formación técnica con mi vocación por el{' '}
            <span className="editorial-italic text-xl text-amber-300 font-semibold">
              Análisis Funcional
            </span>, 
            mi trabajo no empieza escribiendo código. Empieza escuchando: entender la rutina de tu empresa, dónde se generan 
            los cuellos de botella y qué solución real te va a transformar el día a día.
          </p>

        </div>

        {/* The Long-Term Horizon (Humanitarian Vision Card) */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-amber-400/30">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/90 border border-amber-400/30 text-xs font-semibold text-amber-300 mb-4">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>El Horizonte a Futuro</span>
            </div>
            
            <h3 className="text-2xl sm:text-4xl font-extrabold font-display mb-4 tracking-tight text-white">
              Hacia el Impacto Humanitario & el Empleo
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              El objetivo de consolidar este proyecto con PyMEs es forjar la base de un propósito superior: 
              desarrollar plataformas tecnológicas y programas orientados a la <strong className="text-amber-300">ayuda humanitaria</strong>, 
              atacando el principal desafío de nuestra época: la generación de oportunidades de empleo digno y la inclusión de sectores vulnerables 
              mediante la capacitación y herramientas digitales.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-200">Enfoque en las Personas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-200">Sistemas Éticos y Transparentes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-200">Compromiso Social Permanente</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
