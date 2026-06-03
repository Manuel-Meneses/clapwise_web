"use client"

import { Check, Database, Bot, ArrowRight, Zap, Terminal } from "lucide-react"
import { motion } from "framer-motion"

export function PricingSection() {
  return (
    // Fondo oscuro para dar el peso visual de "Infraestructura Cloud"
    <section id="precios" className="py-24 md:py-32 px-6 bg-[#192832] relative overflow-hidden">
      
      {/* Grilla de fondo sutil para textura técnica */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4C4B4B10_1px,transparent_1px),linear-gradient(to_bottom,#4C4B4B10_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Escalabilidad <span className="text-[#427AA1]">predecible.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#F3F4F6]/70 font-medium leading-relaxed"
          >
            Modelo híbrido de infraestructura. Pagás un Setup único de despliegue y una suscripción mensual plana. Sin comisiones sorpresa por venta.
          </motion.p>
        </div>

        {/* EL CABALLO DE TROYA (Estrategia GTM) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 bg-gradient-to-r from-[#00324D] to-[#192832] rounded-3xl p-1 border border-[#427AA1]/30 relative overflow-hidden group"
        >
          {/* Brillo animado de fondo */}
          <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-[#427AA1]/20 to-transparent group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
          
          <div className="bg-[#192832]/90 backdrop-blur-xl rounded-[1.4rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-[#427AA1]/20 text-[#427AA1] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-[#427AA1]/30">
                <Terminal className="w-3.5 h-3.5" /> Demo Inmersiva
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">No nos creas. Dejá que el Agente te venda tu propio stock.</h3>
              <p className="text-[#F3F4F6]/70 font-medium max-w-xl">
                Extraemos los datos públicos de tu web, los vectorizamos en nuestra base de datos y te enviamos un WhatsApp para que intentes comprarle a tu propio E-commerce operado por ClapWise.
              </p>
            </div>
          </div>
        </motion.div>

        {/* MODELO DE NEGOCIO (Starter vs Pro) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* PLAN 1: STARTER */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10 hover:border-[#427AA1]/50 transition-colors flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Starter</h3>
                <p className="text-[#F3F4F6]/60 text-sm font-medium">Hasta 100 productos</p>
              </div>
              <div className="bg-white/10 p-3 rounded-2xl">
                <Bot className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-extrabold text-white tracking-tighter">$30</span>
              <span className="text-[#F3F4F6]/60 font-medium text-sm">USD / mes</span>
            </div>
            <div className="inline-block bg-white/5 border border-white/10 text-[#F3F4F6]/80 text-xs font-bold px-3 py-1.5 rounded-lg mb-8 w-fit">
              + $50 USD Setup (Pago único)
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
              {['Configuración del prompt base', 'Ingesta de datos hasta 100 SKUs', 'Recuperación de carritos activa', 'Manejo de objeciones estándar'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#427AA1]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#427AA1]" strokeWidth={3} />
                  </div>
                  <span className="text-[#F3F4F6]/80 font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-transparent border border-white/20 text-white rounded-xl py-4 font-bold hover:bg-white/10 transition-colors mt-auto">
              Seleccionar Starter
            </button>
          </motion.div>

          {/* PLAN 2: PRO (DESTACADO) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#00324D] rounded-3xl p-8 lg:p-10 border border-[#427AA1]/60 shadow-[0_0_40px_rgba(66,122,161,0.15)] flex flex-col relative"
          >
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#427AA1] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
              <Zap className="w-3 h-3 fill-current" /> Más Elegido
            </div>

            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">E-commerce Pro</h3>
                <p className="text-[#F3F4F6]/70 text-sm font-medium">Hasta 5.000 productos</p>
              </div>
              <div className="bg-[#427AA1]/20 p-3 rounded-2xl border border-[#427AA1]/30">
                <Database className="w-6 h-6 text-[#427AA1]" />
              </div>
            </div>
            
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-extrabold text-white tracking-tighter">$90</span>
              <span className="text-[#F3F4F6]/70 font-medium text-sm">USD / mes</span>
            </div>
            <div className="inline-block bg-[#427AA1]/20 border border-[#427AA1]/40 text-white text-xs font-bold px-3 py-1.5 rounded-lg mb-8 w-fit">
              + $150 USD Setup (Pago único)
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
              {[
                'Sincronización de stock en tiempo real', 
                'Protocolos de Upselling proactivos', 
                'Base de datos vectorial hasta 5000 SKUs', 
                'Campañas de Remarketing Quirúrgico',
                'Prioridad de ejecución (Baja latencia)'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#25D366]" strokeWidth={3} />
                  </div>
                  <span className="text-white font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-[#427AA1] text-white rounded-xl py-4 font-bold hover:bg-white hover:text-[#00324D] transition-all duration-300 mt-auto shadow-lg">
              Agendar despliegue Pro
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}