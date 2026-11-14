import React, { useState, useEffect } from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';
import { ModularLogo } from './ModularLogo';
import { GithubIcon, LinkedinIcon } from './Icons';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

interface NavLinkItem {
  id: string;
  title: string;
  shortTitle: string;
  highlight?: boolean;
}

const NAV_LINKS: NavLinkItem[] = [
  { id: 'propuesta', title: 'Soluciones PyMEs', shortTitle: 'Soluciones' },
  { id: 'tablero', title: 'Casos de Estudio', shortTitle: 'Casos' },
  { id: 'historia', title: 'Historia & Manifiesto', shortTitle: 'Historia', highlight: true },
  { id: 'recruiter', title: 'Ficha Profesional', shortTitle: 'Ficha' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 1. Auto-Hide: Appears smoothly after leaving initial viewport top (> 50px)
      if (scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // 2. Real-time Background Adaptive Detection
      // Checks whether the fixed header is currently floating above dark section (#historia)
      const historiaSection = document.getElementById('historia');
      if (historiaSection) {
        const rect = historiaSection.getBoundingClientRect();
        if (rect.top <= 85 && rect.bottom >= 85) {
          setIsDarkTheme(true);
        } else {
          setIsDarkTheme(false);
        }
      }

      // 3. Active Section Detection
      const allSections = ['hero', 'propuesta', 'tablero', 'historia', 'recruiter', 'contacto'];
      const viewportMid = scrollY + 200;
      for (const sectionId of allSections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 90;
          const height = el.offsetHeight;
          if (viewportMid >= top && viewportMid < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-out transform ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none'
      } ${
        isDarkTheme
          ? 'bg-[#070B12]/95 backdrop-blur-xl border-b border-amber-400/25 shadow-2xl shadow-black/80'
          : 'bg-white/92 backdrop-blur-xl border-b border-slate-200/90 shadow-sm shadow-slate-900/5'
      }`}
    >
      {/* Subtle Hairline Glint on Top for Luxury Atelier Polish */}
      <div 
        className={`absolute top-0 left-0 right-0 h-[1px] pointer-events-none transition-opacity duration-500 ${
          isDarkTheme
            ? 'opacity-80 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent'
            : 'opacity-40 bg-gradient-to-r from-transparent via-slate-300 to-transparent'
        }`}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand / Logo */}
        <div
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0"
          onClick={() => handleLinkClick('hero')}
        >
          {/* Emblem with Adaptive Stone Backing in Dark Mode */}
          <div
            className={`transition-all duration-300 rounded-xl p-0.5 ${
              isDarkTheme
                ? 'bg-gradient-to-b from-white via-slate-50 to-slate-100 shadow-md shadow-amber-400/10 ring-1 ring-amber-400/40'
                : 'bg-transparent'
            }`}
          >
            <ModularLogo className="w-7 h-7 sm:w-9 sm:h-9 group-hover:scale-105 transition-transform" />
          </div>

          <div>
            <div
              className={`font-display font-extrabold tracking-tight flex items-center gap-1.5 text-sm sm:text-base md:text-lg transition-colors duration-300 ${
                isDarkTheme ? 'text-white' : 'text-slate-900'
              }`}
            >
              <span className="hidden sm:inline">Modular Systems</span>
              <span className="sm:hidden">Modular</span>
              <span
                className={`text-[9px] font-sans font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full border transition-colors duration-300 hidden lg:inline-flex ${
                  isDarkTheme
                    ? 'bg-amber-950/70 text-amber-300 border-amber-500/40'
                    : 'bg-amber-50 text-amber-800 border-amber-200/80'
                }`}
              >
                Atelier
              </span>
            </div>
            
            <p
              className={`text-[10px] font-medium hidden 2xl:flex items-center gap-1.5 transition-colors duration-300 ${
                isDarkTheme ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              <span className="editorial-italic font-normal">Arquitectura de Software</span>
              <span className="text-amber-500/70">✦</span>
              <span className="font-mono tracking-tight">Lucas Miguez</span>
            </p>
          </div>
        </div>

        {/* Sophisticated Island Navigation: ALWAYS VISIBLE across all viewport sizes */}
        <nav 
          className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border transition-all duration-300 ${
            isDarkTheme
              ? 'bg-slate-900/85 border-amber-400/20 shadow-inner'
              : 'bg-slate-100/85 border-slate-200/90 shadow-xs'
          }`}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-[13px] font-medium tracking-wide transition-all duration-300 flex items-center gap-1 sm:gap-1.5 whitespace-nowrap cursor-pointer ${
                  isDarkTheme
                    ? isActive
                      ? 'text-amber-200 bg-amber-400/20 border border-amber-400/35 shadow-xs font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                    : isActive
                      ? 'text-blue-900 bg-white shadow-xs border border-slate-200/80 font-semibold'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/50'
                }`}
              >
                {link.highlight && (
                  <Sparkles
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                      isDarkTheme ? 'text-amber-400' : 'text-amber-500'
                    }`}
                  />
                )}
                {/* Full title on screens >= 640px, concise on smaller screens */}
                <span className="hidden md:inline">{link.title}</span>
                <span className="md:hidden">{link.shortTitle}</span>
                
                {isActive && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isDarkTheme ? 'bg-amber-400 shadow-sm shadow-amber-300' : 'bg-blue-600 shadow-sm shadow-blue-400'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Social Icons */}
        <div className="flex items-center gap-2 shrink-0">
          {/* GitHub Icon */}
          <a
            href="https://github.com/LucasMiguezCA"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-1.5 sm:p-2 rounded-xl transition-all duration-300 hidden xl:inline-flex ${
              isDarkTheme
                ? 'text-slate-400 hover:text-white hover:bg-white/10'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            }`}
            title="GitHub de Lucas Miguez"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-1.5 sm:p-2 rounded-xl transition-all duration-300 hidden xl:inline-flex ${
              isDarkTheme
                ? 'text-slate-400 hover:text-amber-300 hover:bg-white/10'
                : 'text-slate-500 hover:text-blue-700 hover:bg-blue-50/70'
            }`}
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* CTA: Diagnóstico PyME Button */}
          <button
            onClick={() => handleLinkClick('contacto')}
            className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
              isDarkTheme
                ? 'bg-gradient-to-r from-amber-500/20 via-slate-900 to-amber-600/25 text-amber-200 hover:text-white border border-amber-400/50 hover:border-amber-300 shadow-md shadow-amber-950/40 hover:shadow-amber-400/20'
                : 'bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white shadow-sm shadow-blue-600/30 hover:shadow-md hover:shadow-blue-600/40 border border-blue-400/30'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-sans hidden sm:inline">Diagnóstico PyME</span>
            <span className="font-sans sm:hidden">Contacto</span>
          </button>
        </div>
      </div>
    </header>
  );
};
