"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight, Calendar } from "lucide-react"
import { Button } from "./ui/button"

// URLs de los logos reales (Podés cambiarlos por rutas locales como "/logos/python.svg" luego)
const LOGOS = {
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  gemini: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
  whatsapp: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  instagram: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
  shopify: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
}

export default function PricingSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <section id="precios" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* ==========================================
            1. STACK TECNOLÓGICO (MINIMALISTA)
            ========================================== */}
        <div className="mb-24 text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Infraestructura construida e integrada
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Canales */}
            <img src={LOGOS.whatsapp} alt="WhatsApp" className="h-8 md:h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />
            <img src={LOGOS.instagram} alt="Instagram" className="h-7 md:h-9 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />
            <img src={LOGOS.shopify} alt="Shopify" className="h-7 md:h-9 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />
            
            {/* Separador Visual */}
            <div className="w-px h-8 bg-gray-200 mx-2 hidden md:block"></div>
            
            {/* Motor (Capa A y Capa B) */}
            <img src={LOGOS.supabase} alt="Supabase" className="h-7 md:h-9 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />
            <img src={LOGOS.python} alt="Python" className="h-8 md:h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />
            <img src={LOGOS.gemini} alt="Gemini" className="h-7 md:h-9 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />
          </div>
        </div>

        {/* ==========================================
            2. CABECERA DE PRECIOS
            ========================================== */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-[#192832]">
            Inversión clara. <br/> <span className="text-[#427AA1]">Retorno inmediato.</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Modelo de suscripción híbrido. Pagás una única vez por la integración de tu base de datos, y luego una suscripción mensual fija[cite: 6].
          </p>
        </div>

        {/* ==========================================
            3. TARJETAS DE PRECIOS
            ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          
          {/* PLAN STARTER */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group relative"
          >
            {/* ESPACIO PARA FOTO STARTER */}
            <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" 
                alt="Plan Starter - Cafeterías y Negocios Locales" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>

            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Starter</h3>
              <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                Para negocios locales con catálogos concisos que buscan automatizar la atención y agendar turnos.
              </p>

              {/* Bloque de Precios */}
              <div className="mb-6 space-y-2">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-extrabold text-[#00324D]">$30</span>
                  <span className="text-sm text-gray-500 font-medium mb-1">USD / mes</span>
                </div>
                <div className="inline-block bg-blue-50 text-[#427AA1] text-xs font-semibold px-2 py-1 rounded">
                  + Setup único de $50 USD
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {['Catálogos de hasta 100 productos', 'Setup automatizado desde Excel', 'Agendamiento de turnos', 'Respuestas a preguntas frecuentes'].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                    <Check className="w-5 h-5 text-[#427AA1] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Integración Calendario / Meet */}
              <a href="https://calendly.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full h-12 bg-white text-[#00324D] border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" /> Agendar reunión por Meet
                </Button>
              </a>
            </div>
          </motion.div>

          {/* PLAN PRO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#00324D] rounded-3xl border border-[#427AA1]/30 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group relative"
          >
            {/* ESPACIO PARA FOTO PRO */}
            <div className="w-full aspect-[4/3] bg-gray-900 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop" 
                alt="Plan Pro - Ecommerce y Ropa" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
              />
            </div>

            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Plan Pro</h3>
              <p className="text-sm text-white/60 mb-6 pb-6 border-b border-white/10">
                Infraestructura completa para catálogos dinámicos y control estricto de stock en tiempo real.
              </p>

              {/* Bloque de Precios */}
              <div className="mb-6 space-y-2">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-extrabold text-white">$90</span>
                  <span className="text-sm text-white/60 font-medium mb-1">USD / mes</span>
                </div>
                <div className="inline-block bg-[#427AA1]/20 border border-[#427AA1]/50 text-blue-200 text-xs font-semibold px-2 py-1 rounded">
                  + Setup único de $150 USD
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {['Inventario de hasta 5.000 productos', 'Búsqueda vectorial HNSW en vivo', 'Prevención de sobreventas (ACID)', 'Soporte prioritario y orquestación'].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/80 font-medium">
                    <Check className="w-5 h-5 text-[#427AA1] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Integración Calendario / Meet */}
              <a href="https://calendly.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full h-12 bg-[#427AA1] text-white hover:bg-blue-600 font-bold rounded-xl border-none transition-all shadow-[0_0_20px_rgba(66,122,161,0.3)] flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" /> Agendar demostración
                </Button>
              </a>
            </div>
          </motion.div>

        </div>

        {/* ==========================================
            4. CTA MINIMALISTA Y FUNCIONAL
            ========================================== */}
        <div className="max-w-3xl mx-auto text-center border-t border-gray-100 pt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Tenés un caso de uso particular?</h3>
          <p className="text-gray-500 mb-8">
            Podemos armar flujos personalizados para mayoristas, integraciones con ERPs específicos o tiendas de altísimo volumen.
          </p>
          <a href="https://calendly.com/tu-usuario" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 h-12 px-6 text-[#427AA1] font-semibold hover:bg-blue-50 rounded-full transition-colors group">
              Agendar llamada técnica de evaluación <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </div>

      </div>
    </section>
  )
}