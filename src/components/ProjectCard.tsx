import React from 'react';
import type { Project } from '../data/projects';
import type { PerspectiveMode } from './PerspectiveToggle';
import { GithubIcon } from './Icons';
import { 
  ArrowUpRight, 
  Database, 
  CheckCircle, 
  Building2
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  mode: PerspectiveMode;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, mode, onSelect }) => {
  return (
    <div className="marble-slab rounded-3xl p-7 flex flex-col justify-between relative group overflow-hidden">
      
      {/* Subtle top sapphire crystalline accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.accentColor}`} />

      {/* Card Header */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 uppercase tracking-wider">
            {project.categoryLabel}
          </span>
          <div className="flex items-center gap-1.5">
            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
              project.status === 'Completado' 
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                : project.status === 'En Producción'
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'bg-amber-50 text-amber-700 border border-amber-200'
            }`}>
              {project.status}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors tracking-tight font-display">
          {project.title}
        </h3>
        <p className="text-xs text-slate-500 font-medium mt-1 mb-5 line-clamp-1">
          {project.subtitle}
        </p>

        {/* Dynamic Body based on Mode */}
        {mode === 'functional' ? (
          <div className="space-y-4 mb-6 text-sm">
            {/* Domain */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70">
              <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{project.functional.clientOrDomain}</span>
            </div>

            {/* Problem */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                El Problema de Negocio
              </span>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                {project.functional.businessProblem}
              </p>
            </div>

            {/* Key Requirements Sample */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                Requerimientos Clave Satisfechos
              </span>
              <ul className="space-y-1.5">
                {project.functional.keyRequirements.slice(0, 2).map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-4 mb-6 text-sm">
            {/* Architecture description */}
            <div className="text-xs text-slate-600 bg-slate-50/80 p-3 rounded-xl border border-slate-200/70 leading-relaxed">
              <span className="font-bold text-slate-800 block mb-0.5">Arquitectura:</span>
              <span className="line-clamp-2">{project.tech.architecture}</span>
            </div>

            {/* Database badge if exists */}
            {project.tech.database && (
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <Database className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span className="line-clamp-1 text-slate-600">{project.tech.database}</span>
              </div>
            )}

            {/* Stack Tags */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Stack Tecnológico
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.stack.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-blue-50/90 text-blue-800 border border-blue-200/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Card Footer Actions */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
        <button
          onClick={() => onSelect(project)}
          className="text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1 group/btn"
        >
          <span>{mode === 'functional' ? 'Ver Ficha de Negocio & DER' : 'Ver Ficha Arquitectónica'}</span>
          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>

        <div className="flex items-center gap-1">
          {project.tech.githubUrl && (
            <a
              href={project.tech.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              title="Ver en GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
};
