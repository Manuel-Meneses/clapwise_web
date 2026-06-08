"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Check, Calendar, ArrowRight, Sparkles, Orbit } from "lucide-react"
import { Button } from "@/components/ui/button"

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

  // Estrellas estáticas sutiles de fondo para el toque espacial limpio
  const stars = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
  }))

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
        .font-manrope { font-family: 'Manrope', sans-serif; }
        
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
        .star-blink {
          animation: pulse-soft 3s infinite ease-in-out;
        }
      `}} />

      <section id="precios" className="py-24 bg-white relative overflow-hidden font-manrope text-gray-800">
        
        {/* FONDO ESPACIAL MINIMALISTA (Estrellas finas sobre fondo blanco) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute bg-gray-300 rounded-full star-blink"
              style={{
                top: Math.min(star.top, 95), // evitar desborde
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Nebulosas ultra-tenues de color de la marca */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-[#427AA1]/10 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gradient-to-tl from-purple-50 via-transparent to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* ==========================================
              1. STACK TECNOLÓGICO (EL "ECOSISTEMA")
              ========================================== */}
          <div className="mb-24 text-center">
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 max-w-3xl mx-auto opacity-70">
              <img src={LOGOS.whatsapp} alt="WhatsApp" className="h-7 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              <img src={LOGOS.instagram} alt="Instagram" className="h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              <img src={LOGOS.shopify} alt="Shopify" className="h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              <div className="hidden md:block w-1.5 h-1.5 bg-gray-200 rounded-full" />
              <img src={LOGOS.supabase} alt="Supabase" className="h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              <img src={LOGOS.python} alt="Python" className="h-7 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              <img src={LOGOS.gemini} alt="Gemini" className="h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          </div>

          {/* ==========================================
              2. CABECERA COMERCIAL
              ========================================== */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-gray-900 leading-tight">
              Un sistema a tu medida. <br />
              <span className="text-[#427AA1]">Resultados reales.</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Nos encargamos de toda la configuración e integración. Tu negocio obtiene un clon comercial experto listo para vender en tus canales favoritos.
            </p>
          </div>

          {/* ==========================================
              3. TARJETA UNIFICADA (NÁUTICA CÓSMICA)
              ========================================== */}
          <div className="max-w-5xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#00324D] rounded-[2rem] border border-[#427AA1]/20 shadow-xl overflow-hidden flex flex-col md:flex-row group relative"
            >
              {/* Brillo espacial interno de la tarjeta */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

              {/* Lado Izquierdo: Imagen Conceptual Limpia */}
              <div className="w-full md:w-[40%] aspect-[4/3] md:aspect-auto bg-gray-900 relative overflow-hidden shrink-0">
                <img 
                  src="/jen.jpg" 
                  alt="Tecnología espacial y conexiones" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#00324D] via-[#00324D]/30 to-transparent" />
              </div>

              {/* Lado Derecho: Contenido de Venta Directa */}
              <div className="p-8 md:p-12 lg:p-14 flex flex-col flex-1 justify-between relative z-10">
                <div>
                  
                  <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
                    Implementación Integral
                  </h3>
                  
                  <p className="text-blue-100/70 mb-8 text-base md:text-lg leading-relaxed border-b border-white/10 pb-6">
                    Diseñamos la solución perfecta según el volumen de tus chats. Sin complicaciones técnicas para vos ni sistemas difíciles de entender.
                  </p>

                  {/* Lista Simplificada y Comercial */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
                    {[
                      'Tu catálogo siempre sincronizado', 
                      'Configuración inicial en pocos días', 
                      'Respuestas exactas sobre tu stock', 
                      'Cero riesgo de sobreventas',
                      'Agendamiento de turnos automático',
                      'Soporte técnico y mejoras continuas'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-white/90 font-medium">
                        <div className="w-5 h-5 rounded-full bg-[#427AA1]/20 border border-[#427AA1]/30 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#427AA1]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Acción Principal */}
                <div>
                  <a href="https://calendly.com/clapwise/30min" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                    <Button className="w-full sm:w-auto h-14 px-8 bg-[#427AA1] text-white hover:bg-blue-500 font-bold rounded-xl border-none transition-all shadow-[0_10px_25px_rgba(66,122,161,0.2)] flex items-center justify-center gap-3 text-base">
                      <Calendar className="w-5 h-5 text-blue-100" /> Agendar asesoría gratuita por Meet
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ==========================================
              4. CIERRE SECUNDARIO
              ========================================== */}
          <div className="max-w-2xl mx-auto text-center border-t border-gray-100 pt-12">
            <h4 className="text-lg font-bold text-gray-900 mb-2">¿Cómo funciona la llamada?</h4>
            <p className="text-gray-500 mb-5 text-sm md:text-base leading-relaxed">
              Analizamos tus canales actuales de atención, vemos si ClapWise se adapta a tus necesidades actuales y te mostramos una demostración en vivo.
            </p>
            <a href="https://calendly.com/clapwise/30min" target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2 text-[#427AA1] font-bold text-sm hover:text-blue-800 transition-colors group">
                Ver horarios disponibles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>

        </div>
      </section>
    </>
  )
}