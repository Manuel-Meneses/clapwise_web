"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Check, Calendar, ArrowRight } from "lucide-react"
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
    <section id="precios" className="py-16 md:py-24 bg-white relative overflow-hidden">
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
            2. CABECERA DE SOLUCIONES
            ========================================== */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-[#192832]">
            Soluciones a medida. <br/> <span className="text-[#427AA1]">Resultados reales.</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Analizamos las necesidades de tu negocio, integramos tu base de datos y diseñamos una infraestructura conversacional escalable.
          </p>
        </div>

        {/* ==========================================
            3. TARJETA UNIFICADA (SERVICIO INTEGRAL)
            ========================================== */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#00324D] rounded-3xl border border-[#427AA1]/30 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row group"
          >
            {/* ESPACIO PARA FOTO (Lado izquierdo en desktop) */}
            <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto bg-gray-900 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop" 
                alt="Infraestructura y Soluciones" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
              />
            </div>

            {/* CONTENIDO (Lado derecho en desktop) */}
            <div className="p-8 md:p-12 flex flex-col flex-1 justify-center relative">
              <h3 className="text-3xl font-bold text-white mb-4">Servicio Integral</h3>
              <p className="text-white/70 mb-8 text-lg border-b border-white/10 pb-8">
                Desde negocios locales con catálogos concisos hasta tiendas de alto volumen con estricto control de stock en tiempo real. Construimos lo que tu negocio realmente necesita.
              </p>

              {/* Lista unificada de características */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5 mb-10 flex-1">
                {[
                  'Catálogos dinámicos escalables', 
                  'Setup automatizado (Excel/ERP)', 
                  'Búsqueda vectorial HNSW en vivo', 
                  'Prevención de sobreventas (ACID)',
                  'Agendamiento de turnos',
                  'Soporte prioritario y orquestación'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/90 font-medium">
                    <Check className="w-5 h-5 text-[#427AA1] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Botón de Agendamiento Principal */}
              <div className="mt-auto">
                <a href="https://calendly.com/clapwise/30min" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                  <Button className="w-full sm:w-auto h-14 px-8 bg-[#427AA1] text-white hover:bg-blue-600 font-bold rounded-xl border-none transition-all shadow-[0_0_20px_rgba(66,122,161,0.3)] flex items-center justify-center gap-3 text-base">
                    <Calendar className="w-5 h-5" /> Agendar evaluación técnica por Meet
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ==========================================
            4. CTA SECUNDARIO (OPCIONAL)
            ========================================== */}
        <div className="max-w-3xl mx-auto text-center border-t border-gray-100 pt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-2">¿Dudas antes de la reunión?</h3>
          <p className="text-gray-500 mb-6">
            Prepará tu lista de requerimientos, integraciones específicas o volúmenes de tienda para que podamos asesorarte con precisión.
          </p>
          <a href="https://calendly.com/clapwise/30min" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 text-[#427AA1] font-semibold hover:text-blue-800 transition-colors group">
              Ir al calendario <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </div>

      </div>
    </section>
  )
}