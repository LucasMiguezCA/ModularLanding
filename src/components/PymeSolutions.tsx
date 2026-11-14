import React, { useState } from 'react';
import { 
  SearchCheck, 
  Layers, 
  HeartHandshake, 
  TrendingUp, 
  ArrowRight, 
  Sparkles,
  Calculator,
  CheckCircle2
} from 'lucide-react';
import { PYME_PILLARS } from '../data/projects';

interface PymeSolutionsProps {
  onContactClick: () => void;
  onExploreProjects: () => void;
}

export const PymeSolutions: React.FC<PymeSolutionsProps> = ({ onContactClick, onExploreProjects }) => {
  const [hoursLostWeekly, setHoursLostWeekly] = useState<number>(12);
  const [teamSize, setTeamSize] = useState<number>(3);

  const monthlyHoursSaved = Math.round(hoursLostWeekly * 4.3);

  return (
    <section id="propuesta" className="py-24 md:py-36 bg-white relative border-t border-slate-200 marble-vein-overlay scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sapphire-pill text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Soluciones PyMEs & Propuesta de Valor</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Digitalización concebida para la{' '}
            <span className="editorial-italic font-normal text-slate-950 underline decoration-amber-400/50 decoration-1 underline-offset-6">
              serenidad cotidiana.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Eliminamos el desorden operativo y las planillas manuales para que tu negocio funcione con armonía, 
            permitiéndote ganar tiempo de descanso y tranquilidad.
          </p>
        </div>

        {/* 4 Pillars Sculpted Slabs with Obsidian Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {PYME_PILLARS.map((pillar, idx) => (
            <div key={idx} className="marble-slab p-7 rounded-3xl flex flex-col justify-between relative group">
              <div className="sculpt-number absolute top-4 right-4 text-4xl">0{idx + 1}</div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 font-bold mb-5 group-hover:scale-105 transition-transform">
                  {idx === 0 && <SearchCheck className="w-6 h-6" />}
                  {idx === 1 && <Layers className="w-6 h-6" />}
                  {idx === 2 && <HeartHandshake className="w-6 h-6" />}
                  {idx === 3 && <TrendingUp className="w-6 h-6" />}
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-blue-100/70 text-blue-900 tracking-wide uppercase">
                  {pillar.badge}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-3 mb-1 font-display">
                  {pillar.title}
                </h3>
                <p className="editorial-italic text-sm text-amber-700 mb-3 font-semibold">
                  {pillar.tagline}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Feature: "Simulador de Alivio Operativo para tu PyME" */}
        <div className="marble-monolith rounded-3xl p-8 sm:p-14 mb-24 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Left Column: Interactive Sliders */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold">
                <Calculator className="w-3.5 h-3.5 text-amber-600" />
                <span>Simulador de Alivio Operativo</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                ¿Cuánto tiempo pierde hoy tu equipo en tareas manuales?
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Ajustá los valores para calcular las horas de vida laboral que podés recuperar eliminando el desorden de planillas y mensajes cruzados.
              </p>

              {/* Slider 1 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Horas perdidas por semana por persona:</span>
                  <span className="text-slate-900 font-mono text-sm font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">{hoursLostWeekly} horas/sem</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="30"
                  value={hoursLostWeekly}
                  onChange={(e) => setHoursLostWeekly(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              {/* Slider 2 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Personas dedicadas a administración / ventas / stock:</span>
                  <span className="text-slate-900 font-mono text-sm font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">{teamSize} personas</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>

            {/* Right Column: Visual Result Card (Statue Plaque) */}
            <div className="w-full lg:w-1/2 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between border border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-2">
                  Impacto Mensual Estimado con tu Sistema
                </span>
                
                <div className="text-4xl sm:text-5xl font-extrabold font-display text-white mb-1">
                  +{monthlyHoursSaved * teamSize} <span className="editorial-italic font-normal text-2xl text-amber-200">horas/mes</span>
                </div>
                <p className="text-xs text-slate-300 mb-6 font-normal">
                  Horas netas que tu equipo recupera para atender clientes, vender más y cerrar la jornada a horario.
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Eliminación del 95% de errores en precios y stock.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Información centralizada accesible desde cualquier teléfono.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Reducción inmediata de la ansiedad y el agotamiento operativo.</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onContactClick}
                className="mt-8 w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Hagamos este cálculo con tu negocio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Before vs After (Real Life Problem Transformation) */}
        <div className="marble-monolith p-8 sm:p-12 rounded-3xl mb-16">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mb-2">
              El Cambio Real en tu Rutina
            </h3>
            <p className="text-sm text-slate-600 font-normal">
              Transformamos la fricción diaria en fluidez y tranquilidad:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block mb-2">
                  Antes: Estrés de Stock
                </span>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  "El stock se lleva en un Excel que se rompe todo el tiempo. Nunca sabemos con certeza qué queda en depósito y vendemos mercadería que ya no está."
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                  Con Tu Solución Digital
                </span>
                <p className="editorial-italic text-sm text-blue-900 font-semibold">
                  Panel de stock en tiempo real accesible desde el celular con alertas tempranas de reposición.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block mb-2">
                  Antes: Caos en WhatsApp
                </span>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  "Horas respondiendo '¿cuánto sale este producto?' y mandando PDFs pesados que quedan desactualizados al día siguiente."
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                  Con Tu Solución Digital
                </span>
                <p className="editorial-italic text-sm text-blue-900 font-semibold">
                  Catálogo online interactivo B2B donde tus clientes ven precios vigentes y arman sus órdenes solos.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block mb-2">
                  Antes: Cierres Agotadores
                </span>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  "Jornadas interminables cruzando remitos en papel para saber cuánto se vendió y quién nos debe dinero."
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                  Con Tu Solución Digital
                </span>
                <p className="editorial-italic text-sm text-blue-900 font-semibold">
                  Tablero claro con saldos, cobros pendientes y estados de pedidos a un solo clic de distancia.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Action Bar */}
        <div className="text-center">
          <p className="text-sm font-semibold text-slate-700 mb-4">
            ¿Querés saber cómo se aplicaría esto exactamente a tu negocio?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onContactClick}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white font-semibold text-sm shadow-md shadow-blue-600/25 hover:shadow-lg transition-all flex items-center gap-2 border border-blue-400/30"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Solicitar Diagnóstico Sin Cargo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreProjects}
              className="px-7 py-3.5 rounded-xl carved-pill text-slate-800 font-semibold text-sm hover:border-amber-300 transition-colors"
            >
              Ver Casos Reales Desarrollados
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
