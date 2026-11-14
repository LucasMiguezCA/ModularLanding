import React from 'react';
import { Code2, Briefcase, Info } from 'lucide-react';

export type PerspectiveMode = 'tech' | 'functional';

interface PerspectiveToggleProps {
  currentMode: PerspectiveMode;
  onChangeMode: (mode: PerspectiveMode) => void;
}

export const PerspectiveToggle: React.FC<PerspectiveToggleProps> = ({ currentMode, onChangeMode }) => {
  return (
    <div className="w-full max-w-3xl mx-auto mb-10">
      {/* Switch Container styled like sculpted marble */}
      <div className="p-1.5 rounded-2xl bg-slate-200/70 border border-slate-300/80 shadow-inner flex flex-col sm:flex-row items-center gap-1.5">
        
        <button
          onClick={() => onChangeMode('functional')}
          className={`w-full sm:flex-1 py-3 px-5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2.5 ${
            currentMode === 'functional'
              ? 'bg-white text-blue-900 shadow-md shadow-slate-300/60 border border-blue-100 ring-1 ring-blue-500/20'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <div className={`p-1 rounded-md ${currentMode === 'functional' ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-500'}`}>
            <Briefcase className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="leading-tight">Perspectiva Funcional</div>
            <div className="text-[11px] font-normal text-slate-500">Para RRHH, Product Managers & Negocio</div>
          </div>
        </button>

        <button
          onClick={() => onChangeMode('tech')}
          className={`w-full sm:flex-1 py-3 px-5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2.5 ${
            currentMode === 'tech'
              ? 'bg-white text-blue-900 shadow-md shadow-slate-300/60 border border-blue-100 ring-1 ring-blue-500/20'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <div className={`p-1 rounded-md ${currentMode === 'tech' ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-500'}`}>
            <Code2 className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="leading-tight">Perspectiva Técnica</div>
            <div className="text-[11px] font-normal text-slate-500">Para Tech Leads, Arquitectos & Devs</div>
          </div>
        </button>

      </div>

      {/* Explanatory micro-banner */}
      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
        <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
        <span>
          {currentMode === 'functional' 
            ? 'Mostrando problema de negocio, alcance, requerimientos y valor aportado.' 
            : 'Mostrando stacks, arquitecturas, diseño de base de datos y repositorios.'}
        </span>
      </div>
    </div>
  );
};
