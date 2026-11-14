import React, { useState, useMemo } from 'react';
import type { Project } from '../data/projects';
import { PROJECTS } from '../data/projects';
import type { PerspectiveMode } from './PerspectiveToggle';
import { PerspectiveToggle } from './PerspectiveToggle';
import { ProjectCard } from './ProjectCard';
import { Search, SlidersHorizontal } from 'lucide-react';

interface ProjectsBoardProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsBoard: React.FC<ProjectsBoardProps> = ({ onSelectProject }) => {
  const [mode, setMode] = useState<PerspectiveMode>('functional');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'flagship', label: 'Flagship & Retail' },
    { id: 'data', label: 'Ingeniería de Datos & Grafos' },
    { id: 'institutional', label: 'Sector Institucional / Gov' },
    { id: 'tools', label: 'Herramientas & Ideación' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      const matchesCategory = selectedCategory === 'all' || proj.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesQuery = 
        proj.title.toLowerCase().includes(q) ||
        proj.subtitle.toLowerCase().includes(q) ||
        proj.tech.stack.some(s => s.toLowerCase().includes(q)) ||
        proj.functional.clientOrDomain.toLowerCase().includes(q) ||
        proj.functional.businessProblem.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="tablero" className="py-16 md:py-24 border-t border-slate-200/80 bg-slate-50/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Casos de Estudio & Arquitectura</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Catálogo Curado de Proyectos
          </h2>
          <p className="text-base text-slate-600">
            Alterná entre la mirada de negocio y la técnica para entender cómo transformo requerimientos
            en soluciones estables de software.
          </p>
        </div>

        {/* Dual-View Perspective Switcher */}
        <PerspectiveToggle currentMode={mode} onChangeMode={setMode} />

        {/* Filtering & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por tecnología, dominio o palabra clave..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all placeholder:text-slate-400"
            />
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-6 px-1">
          <span>
            Mostrando <strong className="text-slate-900">{filteredProjects.length}</strong> proyectos curados
          </span>
          <span className="hidden sm:inline">
            Modo activo: <strong className="text-blue-700 capitalize">{mode === 'functional' ? 'Funcional / Negocio' : 'Técnico / Código'}</strong>
          </span>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                mode={mode}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        ) : (
          <div className="marble-card text-center py-16 px-4 rounded-3xl border border-dashed border-slate-300">
            <p className="text-slate-500 text-sm">
              No se encontraron proyectos para la búsqueda <strong className="text-slate-700">"{searchQuery}"</strong>.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 text-xs font-semibold text-blue-600 hover:underline"
            >
              Restablecer filtros
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
