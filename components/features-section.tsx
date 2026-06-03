"use client"

import { MapPin, Mic, BrainCircuit, SlidersHorizontal, Navigation } from "lucide-react"
import { motion } from "framer-motion"

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 px-6 relative bg-[#F3F4F6]">
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
            
            {/* Animación de Forma de Onda (Waveform dinámica a color) */}
            <div className="mt-8 flex items-center gap-1.5 h-16 bg-[#F3F4F6] p-4 rounded-full w-fit border border-[#D1D5DB]/50 group-hover:bg-[#427AA1]/5 transition-colors shadow-inner">
              <div className="w-8 h-8 bg-[#427AA1] rounded-full flex items-center justify-center mr-2 shrink-0">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1" />
              </div>
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    height: ["20%", "100%", "20%"],
                    backgroundColor: ["#00324D", "#ec4899", "#f97316", "#14b8a6", "#00324D"]
                  }}
                  transition={{
                    height: {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.2,
                      delay: i * 0.08,
                      ease: "easeInOut"
                    },
                    backgroundColor: {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 4,
                      delay: i * 0.1,
                      ease: "linear"
                    }
                  }}
                  className="w-1.5 rounded-full"
                />
              ))}
              <span className="text-xs font-bold text-[#4C4B4B] ml-2">0:12</span>
            </div>
          </motion.div>

          {/* BENTO ITEM 2: Hiper-Localización (Radar / Mapa Interactivo) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#00324D] rounded-3xl p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
          >
            {/* Fondo Interactivo tipo Radar/Mapa */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              {/* Grilla estilo mapa digital */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* Efecto de barrido de radar */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute top-[40%] left-1/2 w-[500px] h-[500px] -ml-[250px] -mt-[250px] rounded-full opacity-30 pointer-events-none"
                style={{
                  background: "conic-gradient(from 0deg, transparent 70%, rgba(66, 122, 161, 0.2) 80%, rgba(66, 122, 161, 0.9) 100%)",
                }}
              />

              {/* Punto Interactivo 1: Nueva Córdoba */}
              <div className="absolute top-[30%] left-[30%] group/pin cursor-pointer z-20">
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="w-2.5 h-2.5 bg-red-400 rounded-full relative z-10" />
                <motion.div animate={{ scale: [1, 3], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }} className="absolute inset-0 bg-red-400 rounded-full" />
                {/* Tooltip Hover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-xl opacity-0 group-hover/pin:opacity-100 transition-all transform translate-y-2 group-hover/pin:translate-y-0 pointer-events-none shadow-xl w-max">
                  <p className="text-white font-bold text-xs">Nueva Córdoba</p>
                  <p className="text-white/70 text-[10px] flex items-center gap-1 mt-1"><Navigation className="w-3 h-3" /> Envío: $1.500</p>
                </div>
              </div>

              {/* Punto Interactivo 2: Cerro */}
              <div className="absolute top-[60%] left-[65%] group/pin cursor-pointer z-20">
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="w-2.5 h-2.5 bg-teal-400 rounded-full relative z-10" />
                <motion.div animate={{ scale: [1, 3], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }} className="absolute inset-0 bg-teal-400 rounded-full" />
                {/* Tooltip Hover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-xl opacity-0 group-hover/pin:opacity-100 transition-all transform translate-y-2 group-hover/pin:translate-y-0 pointer-events-none shadow-xl w-max">
                  <p className="text-white font-bold text-xs">Cerro de las Rosas</p>
                  <p className="text-white/70 text-[10px] flex items-center gap-1 mt-1"><Navigation className="w-3 h-3" /> Envío: $2.500</p>
                </div>
              </div>

              {/* Degradado para integrar con el texto inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00324D] via-[#00324D]/40 to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 pointer-events-none h-full flex flex-col justify-end">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl mb-4 shadow-lg w-fit border border-white/20">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Logística Barrial</h3>
              <p className="text-white/70 text-sm font-medium">
                Calcula envíos exactos en milisegundos reconociendo barrios, zonas y cadeterías locales.
              </p>
            </div>
          </motion.div>

          {/* BENTO ITEM 3: Adaptación de Tono (CAMALEÓN SEMÁNTICO) */}
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

            {/* Micro-interacción de Slider que cambia de color dinámicamente */}
            <div className="space-y-4 bg-[#F3F4F6] p-4 rounded-2xl border border-[#D1D5DB]/50">
              <div className="flex justify-between text-xs font-bold text-[#4C4B4B]">
                <span>Rígido</span>
                <span className="text-[#EAB308]">Empático</span>
              </div>
              <div className="h-2 w-full bg-[#D1D5DB] rounded-full overflow-hidden">
                <motion.div 
                  animate={{ 
                    width: ["20%", "95%", "40%", "85%", "20%"],
                    backgroundColor: ["#427AA1", "#EAB308", "#6BA4C7", "#F59E0B", "#427AA1"]
                  }}
                  transition={{ 
                    duration: 8.5, 
                    repeat: Number.POSITIVE_INFINITY, 
                    ease: "easeInOut" 
                  }}
                  className="h-full rounded-full"
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
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
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