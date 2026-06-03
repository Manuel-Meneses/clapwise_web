"use client"

import { MapPin, Mic, BrainCircuit, SlidersHorizontal } from "lucide-react"
import { motion } from "framer-motion"

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 px-6 relative bg-[#F3F4F6]">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#192832] tracking-tight"
          >
            Inteligencia <span className="text-[#427AA1]">nativa y local.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#4C4B4B] leading-relaxed font-medium"
          >
            Tus clientes odian hablar con robots rígidos. ClapWise analiza el contexto, entiende los modismos de cada ciudad y vende como el mejor vendedor de tu sucursal.
          </motion.p>
        </div>

        {/* BENTO BOX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          
          {/* BENTO ITEM 1: Notas de Voz (Col-span-2) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-white rounded-3xl p-8 border border-[#D1D5DB]/60 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#427AA1]/10 rounded-2xl flex items-center justify-center mb-6">
                <Mic className="w-6 h-6 text-[#427AA1]" />
              </div>
              <h3 className="text-2xl font-bold text-[#192832] mb-3">Audios Humanos en Tiempo Real</h3>
              <p className="text-[#4C4B4B] font-medium max-w-md">
                Genera notas de voz clonando acentos y tonos locales. Convierte interacciones frías en charlas de confianza que triplican la tasa de cierre.
              </p>
            </div>
            
            {/* Animación de Forma de Onda (Waveform) */}
            <div className="mt-8 flex items-center gap-1.5 h-16 bg-[#F3F4F6] p-4 rounded-full w-fit border border-[#D1D5DB]/50 group-hover:bg-[#427AA1]/5 transition-colors">
              <div className="w-8 h-8 bg-[#427AA1] rounded-full flex items-center justify-center mr-2">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1" />
              </div>
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: ["20%", "100%", "20%"] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.2,
                    delay: i * 0.08,
                    ease: "easeInOut"
                  }}
                  className="w-1.5 bg-[#00324D] rounded-full"
                />
              ))}
              <span className="text-xs font-bold text-[#4C4B4B] ml-2">0:12</span>
            </div>
          </motion.div>

          {/* BENTO ITEM 2: Hiper-Localización (Radar) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#00324D] rounded-3xl p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Efecto Radar de Fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none">
              <motion.div 
                animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeOut" }}
                className="absolute inset-0 bg-[#427AA1] rounded-full"
              />
              <motion.div 
                animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 1, ease: "easeOut" }}
                className="absolute inset-0 bg-[#427AA1] rounded-full"
              />
            </div>

            <div className="relative z-10 text-center flex flex-col items-center mt-4">
              <div className="bg-white p-3 rounded-full mb-4 shadow-lg relative">
                <MapPin className="w-6 h-6 text-[#00324D]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono px-3 py-1 rounded-full mb-8">
                Target: Nueva Córdoba
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">Logística Barrial</h3>
              <p className="text-white/70 text-sm font-medium">
                Calcula envíos exactos en milisegundos reconociendo barrios, zonas y cadeterías locales.
              </p>
            </div>
          </motion.div>

          {/* BENTO ITEM 3: Adaptación de Tono */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-[#D1D5DB]/60 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 bg-[#192832]/5 rounded-2xl flex items-center justify-center mb-6">
                <SlidersHorizontal className="w-6 h-6 text-[#192832]" />
              </div>
              <h3 className="text-xl font-bold text-[#192832] mb-3">Camaleón Semántico</h3>
              <p className="text-[#4C4B4B] text-sm font-medium mb-8">
                Adapta el tono de la conversación en tiempo real. Si el cliente es formal, responde con protocolo. Si usa modismos, espejea su energía.
              </p>
            </div>

            {/* Micro-interacción de Slider */}
            <div className="space-y-4 bg-[#F3F4F6] p-4 rounded-2xl border border-[#D1D5DB]/50">
              <div className="flex justify-between text-xs font-bold text-[#4C4B4B]">
                <span>Rígido</span>
                <span className="text-[#427AA1]">Empático</span>
              </div>
              <div className="h-2 w-full bg-[#D1D5DB] rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "20%" }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  className="h-full bg-[#427AA1] rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* BENTO ITEM 4: Memoria de Contexto (Col-span-2) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bg-[#192832] rounded-3xl p-8 shadow-xl flex flex-col justify-center relative overflow-hidden"
          >
            {/* Patrón de fondo geométrico */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10 grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <BrainCircuit className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Memoria Transaccional</h3>
                <p className="text-white/70 font-medium">
                  El agente recuerda compras de hace meses. Construye relaciones a largo plazo saludando al cliente por su nombre y sugiriendo complementos perfectos para lo que ya tiene en su placard.
                </p>
              </div>

              {/* Simulación de Hilos de memoria */}
              <div className="bg-[#00324D]/50 border border-white/10 rounded-2xl p-5 space-y-3 font-mono text-xs">
                <div className="flex items-center gap-3 text-white/50">
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  [03/05/25] Compra: Jean Cargo (Talle 40)
                </div>
                <div className="flex items-center gap-3 text-white/50">
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  [12/08/25] Consulta: Envíos al interior
                </div>
                <div className="w-px h-6 bg-emerald-500/50 ml-1 animate-pulse" />
                <div className="flex items-center gap-3 text-emerald-400 font-bold bg-emerald-400/10 p-2 rounded-lg border border-emerald-400/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  [HOY] Ofrecer: Remera Oversize M (Match Jean)
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}