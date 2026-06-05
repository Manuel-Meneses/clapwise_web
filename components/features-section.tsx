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

         {/* BENTO ITEM 2: Hiper-Localización (Radar sobre Google Maps Realista) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#050A0F] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col justify-between relative overflow-hidden group min-h-[350px] border border-slate-800"
          >
            {/* Fondo Interactivo: Google Maps Realista en Dark Mode */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-[#101418]">
              
              {/* Truco dev: iframe de Google Maps centrado en la ciudad con filtros CSS para Dark Mode */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27253.945893322194!2d-64.2045!3d-31.4116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                className="w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none select-none"
                style={{ 
                  filter: "invert(100%) hue-rotate(180deg) contrast(110%) brightness(80%) grayscale(20%)" 
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Overlay azul sutil para integrar el mapa a los colores de tu marca */}
              <div className="absolute inset-0 bg-[#00324D]/30 mix-blend-multiply pointer-events-none" />
              
              {/* Efecto de barrido de radar y anillos */}
              <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -ml-[200px] -mt-[200px] pointer-events-none">
                {/* Anillos de distancia fijos */}
                <div className="absolute inset-0 border border-[#427AA1]/20 rounded-full" />
                <div className="absolute inset-12 border border-[#427AA1]/15 rounded-full" />
                <div className="absolute inset-24 border border-[#427AA1]/10 rounded-full" />
                
                {/* Barrido cónico giratorio */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, transparent 75%, rgba(66, 122, 161, 0.1) 85%, rgba(66, 122, 161, 0.6) 100%)",
                  }}
                />
              </div>

              {/* Punto Interactivo 1: Nueva Córdoba */}
              <div className="absolute top-[55%] left-[55%] group/pin cursor-pointer z-20">
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="w-3 h-3 bg-[#3B82F6] rounded-full relative z-10 border-2 border-white shadow-[0_0_15px_#3B82F6]" />
                <motion.div animate={{ scale: [1, 2.5], opacity: [0.6, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }} className="absolute inset-0 bg-[#3B82F6] rounded-full" />
                
                {/* Tooltip Hover Estilo Mapa Nativo */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white/95 backdrop-blur-xl border border-slate-200 px-3 py-2 rounded-xl opacity-0 group-hover/pin:opacity-100 transition-all transform translate-y-2 group-hover/pin:translate-y-0 shadow-xl w-max">
                  {/* Flechita inferior del tooltip */}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-slate-200 rotate-45" />
                  <p className="text-slate-900 font-bold text-xs relative z-10">Nueva Córdoba</p>
                  <p className="text-slate-500 text-[10px] flex items-center gap-1 mt-0.5 relative z-10 font-medium">
                    <Navigation className="w-3 h-3 text-[#3B82F6]" /> Envío: $1.500
                  </p>
                </div>
              </div>

              {/* Punto Interactivo 2: Cerro de las Rosas */}
              <div className="absolute top-[35%] left-[30%] group/pin cursor-pointer z-20">
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="w-3 h-3 bg-[#E1306C] rounded-full relative z-10 border-2 border-white shadow-[0_0_15px_#E1306C]" />
                <motion.div animate={{ scale: [1, 2.5], opacity: [0.6, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }} className="absolute inset-0 bg-[#E1306C] rounded-full" />
                
                {/* Tooltip Hover Estilo Mapa Nativo */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white/95 backdrop-blur-xl border border-slate-200 px-3 py-2 rounded-xl opacity-0 group-hover/pin:opacity-100 transition-all transform translate-y-2 group-hover/pin:translate-y-0 shadow-xl w-max">
                  {/* Flechita inferior del tooltip */}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-slate-200 rotate-45" />
                  <p className="text-slate-900 font-bold text-xs relative z-10">Cerro de las Rosas</p>
                  <p className="text-slate-500 text-[10px] flex items-center gap-1 mt-0.5 relative z-10 font-medium">
                    <Navigation className="w-3 h-3 text-[#E1306C]" /> Envío: $2.500
                  </p>
                </div>
              </div>

              {/* Degradado oscuro para integrar el mapa con los textos */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050A0F] via-[#050A0F]/80 to-transparent pointer-events-none z-10" />
            </div>

            <div className="relative z-20 pointer-events-none h-full flex flex-col justify-end p-8">
              <div className="bg-[#1e293b]/80 backdrop-blur-md p-2.5 rounded-xl mb-4 shadow-lg w-fit border border-white/10">
                <MapPin className="w-5 h-5 text-[#427AA1]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Logística Barrial Nativa</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Reconocimiento geográfico preciso. El agente identifica barrios, zonas y distancias para cotizar el envío exacto junto con la compra.
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