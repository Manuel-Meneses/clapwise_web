"use client"

import { useEffect, useState } from "react"
import { AnimatedText } from "./animated-text"
import { ArrowUpRight, ArrowRight } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  // Animación de entrada inicial suave (nativa de la plantilla)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    // Reducimos el padding superior e inferior, y quitamos el min-h-screen estricto para que todo encuadre mejor
    <section className="pt-28 md:pt-36 pb-12 px-6 flex flex-col items-center justify-center relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* 1. TEXTOS Y LLAMADOS A LA ACCIÓN */}
        <div className="text-center mb-12 w-full max-w-4xl">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            
            {/* Título más proporcionado y legible */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] mb-6 text-balance text-foreground tracking-tight">
              <AnimatedText text="Tu mejor vendedor" delay={0.1} /> <br />
              <span className="text-primary font-bold">
                <AnimatedText text="no duerme." delay={0.4} />
              </span>
            </h1>

            {/* Subtítulo expandido, atacando puntos de dolor específicos */}
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-sans">
              La infraestructura de IA determinista para E-commerce. Actúa como un vendedor consultivo que atiende dudas, recomienda talles exactos y ejecuta cierres de venta. <br className="hidden md:block" />
              <strong className="text-foreground font-semibold">Garantizado: 0% alucinaciones de stock o precios.</strong>
            </p>

            {/* BOTONES CON PALETA DE COLORES CLAPWISE */}
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              
              {/* Botón Principal (Fondo Azul Claro, Hover a Azul Oscuro) */}
                <a href="#precios" className="relative flex items-center justify-center gap-0 bg-[#427AA1] text-white rounded-full pl-6 pr-1.5 py-1.5 transition-all duration-300 group overflow-hidden hover:bg-[#00324D] hover:shadow-lg">
                  <span className="text-sm font-semibold pr-4 tracking-wide">Escribir 'Hola' al Agente</span>
                  <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
                    <ArrowUpRight className="w-4 h-4 text-[#427AA1] group-hover:text-[#00324D] transition-colors" />
                  </span>
              </a>
              
              {/* Botón Secundario Animado (Borde Gris, Hover rellena con Azul Oscuro) */}
              <a href="#infraestructura" className="relative flex items-center justify-center gap-0 border border-[#4C4B4B]/30 bg-white rounded-full pl-6 pr-1.5 py-1.5 transition-all duration-300 group overflow-hidden">
                <span className="absolute inset-0 bg-[#00324D] rounded-full scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300" />
                <span className="text-sm font-medium text-[#192832] group-hover:text-white pr-4 relative z-10 transition-colors duration-300">
                  Ver arquitectura
                </span>
                <span className="w-9 h-9 rounded-full bg-[#F3F4F6] group-hover:bg-transparent flex items-center justify-center relative z-10 transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#192832] group-hover:opacity-0 absolute transition-opacity duration-300" />
                  <ArrowUpRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </span>
              </a>

            </div> 
          </div>
        </div>

        {/* 2. VIDEO DEMOSTRACIÓN (Encuadre reducido y apaisado) */}
        <div className={`w-full max-w-5xl will-change-transform transition-all duration-[1500ms] ease-out delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}>
          
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-secondary rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-border/60">
            
            {/* Overlay para darle un efecto más integrado */}
            <div className="absolute inset-0 border border-black/10 rounded-2xl z-10 pointer-events-none" />
            
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover relative z-0" 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/af7687fd-f2ad-4f2a-96f0-b56fa7d3769c-08wERpo5U1sktxs1vcRsJW9ueslNZv.mp4" 
            />
          </div>
          
        </div>

      </div>
    </section>
  )
}