"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Mic, Brain, Workflow } from "lucide-react"

  export default function ServicesSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* CABECERA */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-foreground">
            Empatía e <span className="text-[#427AA1]">hiper-localización.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tu negocio no es genérico. El ecosistema entiende el contexto de tu ciudad, las zonas de envío y el tono de tus clientes.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* ==========================================
              CAJA 1: Radar Logística Barrial (Con Mapa)
              ========================================== */}
          <div className="col-span-1 md:col-span-2 bg-black border border-border/50 rounded-3xl overflow-hidden relative group min-h-[320px] flex flex-col justify-end p-6 md:p-8 shadow-lg">
            {/* Fondo de Mapa */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
                alt="Mapa logístico" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 ease-out grayscale"
              />
              {/* Overlay oscuro en degradado para garantizar contraste absoluto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/20">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Radar de Logística Barrial</h3>
              <p className="text-white/80 max-w-md text-sm md:text-base leading-relaxed">
                Entiende perfectamente si el envío es a Nueva Córdoba, Barrio General Paz o las afueras, calculando costos de cadetería y tiempos de entrega reales en segundos.
              </p>
            </div>
          </div>

          {/* ==========================================
              CAJA 2: Audios Humanos (Animación Colorida)
              ========================================== */}
          <div className="col-span-1 bg-secondary/20 border border-border/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden relative group shadow-lg">
            <div>
              <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                <Mic className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Audios Humanos en Tiempo Real</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Se comunica con la calidez y el acento de tu región. Hiperculturalidad que genera confianza inmediata.
              </p>
            </div>

            {/* Animación de Onda de Audio Colorida */}
            <div className="flex items-center gap-1.5 h-16 w-full justify-center bg-background/50 rounded-2xl p-4 border border-border/50">
              {[...Array(14)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    height: ["20%", "100%", "40%", "80%", "30%"],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatType: "mirror",
                    delay: i * 0.08,
                    ease: "easeInOut"
                  }}
                  className={`w-1.5 rounded-full ${
                    i % 3 === 0 ? "bg-gradient-to-t from-pink-500 to-rose-400" :
                    i % 3 === 1 ? "bg-gradient-to-t from-purple-500 to-indigo-400" :
                    "bg-gradient-to-t from-amber-400 to-orange-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ==========================================
              CAJA 3: Cerebro Probabilístico (Rosa)
              ========================================== */}
          <div className="col-span-1 bg-secondary/20 border border-border/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 flex flex-col transition-colors hover:bg-secondary/40 shadow-lg">
            <div className="w-10 h-10 bg-pink-500/10 rounded-full flex items-center justify-center mb-4 border border-pink-500/20">
              <Brain className="w-5 h-5 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Cerebro Lingüístico</h3>
            <p className="text-sm text-muted-foreground">
              Procesa mensajes con errores ortográficos, modismos y notas de voz largas, extrayendo la intención de compra sin fallar.
            </p>
          </div>

          {/* ==========================================
              CAJA 4: Orquestación Continua (Teal/Esmeralda)
              ========================================== */}
          <div className="col-span-1 md:col-span-2 bg-secondary/20 border border-border/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 transition-colors hover:bg-secondary/40 shadow-lg">
            <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0 border border-teal-500/20">
              <Workflow className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Orquestación Humano-IA</h3>
              <p className="text-sm text-muted-foreground max-w-lg leading-relaxed">
                Deriva conversaciones complejas a un agente humano de forma silenciosa, manteniendo el historial intacto para que la atención jamás tenga que empezar desde cero.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}