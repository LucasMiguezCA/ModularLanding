import React from 'react';
import { ModularLogo } from './ModularLogo';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-600 marble-vein-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <ModularLogo className="w-9 h-9" />
          <div>
            <div className="flex items-center gap-2 font-display font-extrabold text-slate-900 text-lg">
              <span>Modular Systems</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                Studio
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Digitalización PyMEs & Servicios Informáticos con Sentido Humano. Fundado por Lucas Miguez.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/LucasMiguezCA"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-500 hover:text-blue-700 hover:bg-blue-50 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
};
