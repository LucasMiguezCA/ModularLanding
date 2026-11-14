import React, { useState } from 'react';
import type { Project } from '../data/projects';
import { GithubIcon } from './Icons';
import { 
  X, 
  CheckCircle2, 
  Cpu, 
  FileText, 
  Target, 
  Sparkles
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'functional' | 'tech'>('functional');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Strip */}
        <div className={`h-2 w-full bg-gradient-to-r ${project.accentColor}`} />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 flex items-start justify-between gap-4 bg-slate-50/50">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100/70 text-blue-800">
                {project.categoryLabel}
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-200/80 text-slate-700">
                {project.status}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {project.date}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              {project.title}
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Internal Tabs Switcher */}
        <div className="px-6 sm:px-8 border-b border-slate-100 flex gap-4 bg-white">
          <button
            onClick={() => setActiveTab('functional')}
            className={`py-3.5 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'functional'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Expediente Funcional & Negocio</span>
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`py-3.5 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'tech'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Ficha Técnica & Arquitectura</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {activeTab === 'functional' ? (
            <div className="space-y-6">
              
              {/* Domain & Value Proposition Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/70 to-indigo-50/40 border border-blue-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                  <Target className="w-4 h-4" />
                  <span>Propuesta de Valor & Solución</span>
                </div>
                <p className="text-base text-slate-800 font-medium leading-relaxed">
                  {project.functional.valueProposition}
                </p>
                <div className="mt-3 pt-3 border-t border-blue-200/60 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
                  <div>
                    <span className="font-semibold text-slate-900">Dominio:</span> {project.functional.clientOrDomain}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">User Persona:</span> {project.functional.userPersona}
                  </div>
                </div>
              </div>

              {/* Business Problem */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                  El Problema a Resolver (Pain Points)
                </h4>
                <p className="text-slate-700 leading-relaxed text-sm bg-slate-50 p-4 rounded-xl border border-slate-200/70">
                  {project.functional.businessProblem}
                </p>
              </div>

              {/* Key Requirements */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Requerimientos Funcionales Clave
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.functional.keyRequirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 font-medium leading-snug">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Entregables & Artefactos de Análisis
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.functional.deliverables.map((item, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      📄 {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            <div className="space-y-6">

              {/* Architecture Blueprint Card */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
                    <Cpu className="w-4 h-4" />
                    <span>Patrón de Arquitectura</span>
                  </div>
                  {project.tech.database && (
                    <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">
                      DB: {project.tech.database}
                    </span>
                  )}
                </div>
                <p className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed">
                  {project.tech.architecture}
                </p>
              </div>

              {/* Technical Highlights */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Decisiones de Diseño & Retos Técnicos
                </h4>
                <div className="space-y-2.5">
                  {project.tech.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack & Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                    Tecnologías & Librerías
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.stack.map((t, idx) => (
                      <span key={idx} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {project.tech.metrics && (
                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                      Métricas & Cumplimiento
                    </span>
                    <ul className="space-y-1.5">
                      {project.tech.metrics.map((m, idx) => (
                        <li key={idx} className="text-xs font-medium text-slate-700 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-4 mt-auto">
          <div className="text-xs text-slate-500 font-medium hidden sm:block">
            Expediente de ingeniería curado para evaluación técnica y de producto.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {project.tech.githubUrl && (
              <a
                href={project.tech.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Explorar Repositorio</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold border border-slate-300 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
