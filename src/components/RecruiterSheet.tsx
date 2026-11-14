import React, { useState } from 'react';
import { 
  Check, 
  Copy, 
  Briefcase, 
  Sparkles, 
  UserCheck, 
  FileText
} from 'lucide-react';

export const RecruiterSheet: React.FC = () => {
  const [copiedHeadline, setCopiedHeadline] = useState(false);
  const [copiedAbout, setCopiedAbout] = useState(false);

  const linkedinHeadline = "Fundador en Modular Systems | Desarrollador Fullstack SSR & Analista Funcional | React · Node.js · Neo4j · SQL";
  
  const linkedinAbout = `Fundador y Líder Técnico en Modular Systems. Desarrollador Fullstack Semi-Senior con 4 años de experiencia laboral en producción formal y más de una década en el mundo del desarrollo de software.

En Modular Systems brindamos soluciones de digitalización y servicios informáticos accesibles para PyMEs, con el objetivo de eliminar el caos operativo y mejorar la calidad de vida laboral.

A lo largo de mi trayectoria he diseñado e implementado soluciones que van desde sistemas comerciales y modelado DER para retail (Grimoldi), hasta arquitecturas de datos multi-modelo con bases de datos de grafos (Neo4j), NoSQL masivo (Cassandra) y memoria en tiempo real (Redis), así como sistemas de gestión institucional de alta normativa (Armada Argentina / DGED).

Capacidades clave:
• Relevamiento funcional, especificación formal de requerimientos y modelado DER.
• Desarrollo Fullstack moderno (React, TypeScript, Node.js, Express, Vue.js).
• Arquitecturas de persistencia políglota (PostgreSQL, Neo4j, Cassandra, Redis).
• Comunicación fluida y puente entre áreas de negocio, clientes y equipos de ingeniería.

Conocé más sobre nuestra propuesta y explorá el tablero interactivo de proyectos en nuestra web.`;

  const copyToClipboard = (text: string, type: 'headline' | 'about') => {
    navigator.clipboard.writeText(text);
    if (type === 'headline') {
      setCopiedHeadline(true);
      setTimeout(() => setCopiedHeadline(false), 2000);
    } else {
      setCopiedAbout(true);
      setTimeout(() => setCopiedAbout(false), 2000);
    }
  };

  return (
    <section id="recruiter" className="py-20 md:py-28 bg-slate-50/80 border-t border-slate-200/80 marble-vein-overlay scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Ficha Profesional & Perfil SSR</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            Ficha Profesional del Fundador
          </h2>
          <p className="text-sm text-slate-600">
            Datos estructurados de Lucas Miguez para selección técnica o sinergias comerciales.
          </p>
        </div>

        {/* Quick Facts Grid */}
        <div className="marble-slab p-6 sm:p-8 rounded-3xl mb-8">
          <h3 className="text-lg font-bold text-slate-900 font-display mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <span>Lucas Miguez — Trayectoria en Síntesis</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Rol & Especialidad
              </span>
              <p className="text-sm font-semibold text-slate-800">
                Fundador Modular Systems · Fullstack SSR & Analista Funcional
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Años de Experiencia
              </span>
              <p className="text-sm font-semibold text-slate-800">
                4 años en producción formal + 10 años en tecnología
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Ubicación & Modalidad
              </span>
              <p className="text-sm font-semibold text-slate-800">
                Argentina — Remoto / Híbrido
              </p>
            </div>

            <div className="sm:col-span-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Stack Principal
              </span>
              <p className="text-sm text-slate-700 font-medium">
                React, TypeScript, Node.js, Express, Vue.js, PostgreSQL / SQL, Neo4j (Grafos), Cassandra, Redis, Tailwind CSS.
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Habilidades Clave
              </span>
              <p className="text-sm text-slate-700 font-medium">
                Modelado DER, Relevamiento Funcional, Digitalización PyMEs.
              </p>
            </div>
          </div>
        </div>

        {/* LinkedIn Kit (Suggested headline & summary) */}
        <div className="space-y-6">
          
          {/* Suggested Headline */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Titular Sugerido para LinkedIn (Headline)
              </span>
              <button
                onClick={() => copyToClipboard(linkedinHeadline, 'headline')}
                className="text-xs font-semibold text-slate-600 hover:text-blue-700 flex items-center gap-1 p-1 rounded-md hover:bg-slate-100 transition-colors"
              >
                {copiedHeadline ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-sm font-medium text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-100 font-mono text-xs sm:text-sm">
              {linkedinHeadline}
            </p>
          </div>

          {/* Suggested About Section */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                Extracto Sugerido para el "Acerca de" de LinkedIn
              </span>
              <button
                onClick={() => copyToClipboard(linkedinAbout, 'about')}
                className="text-xs font-semibold text-slate-600 hover:text-blue-700 flex items-center gap-1 p-1 rounded-md hover:bg-slate-100 transition-colors"
              >
                {copiedAbout ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar texto</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 whitespace-pre-line leading-relaxed font-sans">
              {linkedinAbout}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
