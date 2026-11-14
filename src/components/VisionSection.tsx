import React from 'react';
import { 
  Compass, 
  Workflow, 
  Cpu, 
  FileSpreadsheet, 
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

export const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-20 md:py-28 relative overflow-hidden bg-white border-t border-slate-200">
      
      {/* Decorative marble background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 pointer-events-none opacity-40">
        <div className="absolute -top-12 left-1/3 w-80 h-80 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute -bottom-12 right-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4 text-blue-600" />
            <span>Filosofía & Hoja de Ruta</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-6">
            La Visión más allá del código
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            "Las grandes soluciones no nacen escribiendo código de inmediato. Nacen de entender la profundidad 
            de un problema, descomponer su complejidad y modelar la arquitectura adecuada."
          </p>
        </div>

        {/* 4 Pillars Grid (Sculpted Marble Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          
          <div className="marble-card p-8 rounded-3xl border border-slate-200/90 relative group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 mb-5 group-hover:scale-105 transition-transform">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
              1. Modelado Funcional & Dominio Primero
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              La causa #1 del software fallido o costoso es la falta de claridad en los requerimientos.
              Mi formación y vocación como Analista Funcional me permite levantar especificaciones precisas,
              estructurar diagramas de flujo y modelar esquemas DER sólidos antes de codear.
            </p>
          </div>

          <div className="marble-card p-8 rounded-3xl border border-slate-200/90 relative group">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 mb-5 group-hover:scale-105 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
              2. Persistencia Políglota con Propósito
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Entiendo que las arquitecturas modernas no son monolíticas ni monocromáticas. Utilizo bases de
              datos de grafos (Neo4j) para semántica y relaciones complejas, NoSQL (Cassandra) para volumen 
              masivo de eventos, Redis para latencia ultrabaja y SQL relacional para transaccionalidad ACID.
            </p>
          </div>

          <div className="marble-card p-8 rounded-3xl border border-slate-200/90 relative group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-700 mb-5 group-hover:scale-105 transition-transform">
              <Workflow className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
              3. El Traductor Negocio ↔ Ingeniería
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Soy el perfil que conecta al Director de Negocio o Product Owner con los desarrolladores.
              Traduzco objetivos comerciales y regulaciones complejas a requerimientos técnicos que el equipo
              de ingeniería puede implementar sin ambigüedades ni fricción.
            </p>
          </div>

          <div className="marble-card p-8 rounded-3xl border border-slate-200/90 relative group">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 mb-5 group-hover:scale-105 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
              4. Evolución hacia Sistemas Complejos
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Mis proyectos actuales son la base de un roadmap ambicioso. Trabajo activamente en profundizar
              patrones de Domain-Driven Design (DDD), arquitecturas guiadas por eventos (Event-Driven) y 
              orquestación de microservicios con resiliencia empresarial.
            </p>
          </div>

        </div>

        {/* Roadmap / Complexity Milestone Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 p-8 sm:p-10 text-white shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                Roadmap de Especialización Técnica
              </span>
              <h3 className="text-2xl font-bold font-display mt-1">
                La Ruta hacia la Arquitectura de Software
              </h3>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-blue-800/80 border border-blue-400/30 text-xs font-semibold text-blue-200 w-fit">
              Hacia Fin de Año
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
            Este espacio albergará mis nuevos proyectos de alta complejidad: motores de cálculo distribuido,
            sistemas de orquestación de eventos y plataformas analíticas empresariales con cobertura integral
            de pruebas unitarias y de integración.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Domain-Driven Design (DDD)</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Event-Driven Architecture</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Microservicios & Observabilidad</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
