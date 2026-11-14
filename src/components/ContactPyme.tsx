import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, Sparkles, Building, User, Phone } from 'lucide-react';

export const ContactPyme: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    challenge: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Lucas! Vi tu portafolio y propuesta de digitalización para PyMEs. Me gustaría coordinar un diagnóstico inicial sin cargo para mi negocio.`
  );

  return (
    <section id="contacto" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden scroll-mt-24">
      
      {/* Decorative ambient lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-700/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Diagnóstico Inicial Sin Cargo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-4">
            Hablemos de tu negocio
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Sin compromisos ni presupuestos inflados. Una conversación de 20 minutos para entender tus procesos
            y ver cómo podemos simplificar el día a día de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Options (Col 5) */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
              <h3 className="text-lg font-bold font-display mb-2 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>Contacto Directo por WhatsApp</span>
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Si preferís una respuesta rápida sin llenar formularios, escribime directamente. Te respondo personalmente.
              </p>
              <a
                href={`https://wa.me/?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-700/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Abrir Chat de WhatsApp</span>
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/80">
              <h4 className="text-sm font-semibold text-slate-200 mb-2">
                ¿Qué pasa después de escribirnos?
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Coordinamos una videollamada corta o reunión para conocer tu caso.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Te entregamos un mapa claro de requerimientos y oportunidades de mejora.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Si decidís avanzar, te proponemos un esquema de costos sumamente accesible.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form (Col 7) */}
          <div className="md:col-span-7 bg-white text-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-200">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900">
                  ¡Mensaje recibido con éxito!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Muchas gracias por contactarte. En breve me estaré comunicando para coordinar el diagnóstico inicial.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-blue-600 hover:underline"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold font-display text-slate-900 mb-1">
                  Solicitar Diagnóstico para tu PyME
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Completá estos breves datos y te responderemos en el día.
                </p>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Tu Nombre Completo
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Martín González"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Nombre de la PyME / Negocio
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ej. Distribuidora Sur"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Teléfono / WhatsApp
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ej. +54 9 11 1234-5678"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    ¿Cuál es el mayor dolor o desorden operativo que tenés hoy?
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    placeholder="Ej. Tenemos problemas con el control de stock, tardamos mucho en mandar precios a clientes, o se pierden pedidos..."
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar y Coordinar Diagnóstico Gratuito</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
