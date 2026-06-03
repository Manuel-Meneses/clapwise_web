"use client"

import { useState, useEffect, useRef } from "react"
import { Database, MessageCircle, ShoppingBag, CreditCard, CheckCircle2, Zap } from "lucide-react"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Usamos el Intersection Observer nativo de la plantilla para que aparezca al scrollear
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    // Fondo blanco puro para contrastar fuertemente con el Hero y Features
    <section id="infraestructura" className="py-24 md:py-32 px-6 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#192832] mb-6 tracking-tight">
            No adivinamos. <span className="text-[#427AA1]">Leemos tu inventario.</span>
          </h2>
          <p className="text-lg text-[#4C4B4B] font-medium max-w-2xl mx-auto leading-relaxed">
            Decisiones probabilísticas basadas en datos estrictamente relacionales. El agente consulta el stock en tiempo real antes de ofrecer un producto.
          </p>
        </div>

        {/* DEMOSTRACIÓN UNDER THE HOOD (SPLIT SCREEN) */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch mb-24">
          
          {/* Lado Izquierdo: Mockup de WhatsApp */}
          <div className={`bg-[#F3F4F6] rounded-3xl p-6 md:p-10 border border-[#D1D5DB]/50 flex flex-col transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="flex items-center gap-3 mb-8 border-b border-[#D1D5DB] pb-4">
              <div className="bg-[#25D366] p-2 rounded-full">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-[#192832] font-bold">Cliente Potencial</h3>
                <p className="text-xs text-[#4C4B4B] font-medium">En línea</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* Burbuja Cliente */}
              <div className="bg-white text-[#4C4B4B] p-4 rounded-2xl rounded-tr-sm self-end max-w-[85%] shadow-sm border border-[#D1D5DB]/30 font-medium">
                ¡Hola! ¿Tienen este buzo oversize en talle L?
              </div>
              {/* Burbuja Bot (ClapWise) */}
              <div className="bg-[#427AA1]/10 text-[#192832] p-4 rounded-2xl rounded-tl-sm self-start max-w-[90%] border border-[#427AA1]/20 font-medium relative">
                <span className="absolute -top-3 -left-2 bg-[#427AA1] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Zap className="w-3 h-3" /> IA
                </span>
                ¡Hola! Sí, nos queda <strong>la última unidad en stock</strong>. ¿Querés que te lo separe y te paso el link de pago para asegurarlo?
              </div>
            </div>
          </div>

          {/* Lado Derecho: Terminal de Comandos */}
          <div className={`bg-[#00324D] rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            {/* Botones de ventana */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            <div className="font-mono text-sm md:text-base space-y-4">
              <div className="text-white/50">
                <span className="text-[#427AA1]">~</span>/clapwise/engine$ intercept_message
              </div>
              <div className="text-emerald-400">
                &gt; INTENT_DETECTED: Check_Stock
              </div>
              <div className="text-white/80">
                <span className="text-yellow-400">QUERYING DB:</span> SELECT stock FROM variantes WHERE producto='buzo_oversize' AND talle='L'
              </div>
              <div className="border-l-2 border-[#427AA1] pl-4 my-2 text-white/90">
                <p>RESULT: 1 unidad disponible.</p>
                <p>STATUS: Low_Stock_Alert</p>
              </div>
              <div className="text-emerald-400">
                &gt; EXECUTING_PROTOCOL: <span className="text-white">Scarcity_Close()</span>
              </div>
              <div className="text-[#427AA1] animate-pulse pt-2">
                Generating response...
              </div>
            </div>
          </div>
        </div>

        {/* ECOSISTEMA E INTEGRACIONES */}
        <div className={`pt-12 border-t border-[#D1D5DB]/40 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-8">
            <h3 className="text-[#192832] font-bold text-xl mb-2">Despliegue en menos de 48 horas.</h3>
            <p className="text-[#4C4B4B] font-medium text-sm">Sin cambiar tu flujo de trabajo ni tu software actual.</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {/* Usamos iconos de Lucide como placeholders limpios de los logos */}
            <div className="flex items-center gap-2 text-[#4C4B4B] hover:text-[#25D366] transition-colors grayscale hover:grayscale-0 cursor-pointer">
              <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
              <span className="font-bold text-lg md:text-xl tracking-tight">WhatsApp</span>
            </div>
            <div className="flex items-center gap-2 text-[#4C4B4B] hover:text-[#000000] transition-colors grayscale hover:grayscale-0 cursor-pointer">
              <ShoppingBag className="w-6 h-6 md:w-8 md:h-8" />
              <span className="font-bold text-lg md:text-xl tracking-tight">Tiendanube</span>
            </div>
            <div className="flex items-center gap-2 text-[#4C4B4B] hover:text-[#009EE3] transition-colors grayscale hover:grayscale-0 cursor-pointer">
              <CreditCard className="w-6 h-6 md:w-8 md:h-8" />
              <span className="font-bold text-lg md:text-xl tracking-tight">MercadoPago</span>
            </div>
            <div className="flex items-center gap-2 text-[#4C4B4B] hover:text-[#3ECF8E] transition-colors grayscale hover:grayscale-0 cursor-pointer">
              <Database className="w-6 h-6 md:w-8 md:h-8" />
              <span className="font-bold text-lg md:text-xl tracking-tight">Supabase</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}