"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from "framer-motion"
import { ArrowUpRight, ArrowRight } from "lucide-react"

// --- SISTEMA ORBITAL ---
// Definimos 3 anillos con distintas inclinaciones 3D, velocidades y direcciones
const orbitalRings = [
  {
    id: "outer",
    size: "w-[340px] h-[340px] sm:w-[550px] sm:h-[550px] md:w-[750px] md:h-[750px]",
    rotateX: 75,
    rotateY: -15,
    duration: 45,
    reverse: false,
    stars: [
      { angle: 0, size: 4, pulseDuration: 2.5, color: "#fffce6", glow: "rgba(255, 215, 0, 0.6)" },
      { angle: 135, size: 2.5, pulseDuration: 1.8, color: "#ffffff", glow: "rgba(255, 255, 255, 0.8)" },
      { angle: 270, size: 3.5, pulseDuration: 2.2, color: "#ffea8c", glow: "rgba(255, 215, 0, 0.5)" },
    ]
  },
  {
    id: "middle",
    size: "w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px]",
    rotateX: 65,
    rotateY: 20,
    duration: 30,
    reverse: true, // Gira en sentido contrario para dar contraste
    stars: [
      { angle: 45, size: 3, pulseDuration: 1.9, color: "#ffffff", glow: "rgba(255, 255, 255, 0.7)" },
      { angle: 180, size: 4.5, pulseDuration: 2.8, color: "#fffce6", glow: "rgba(255, 215, 0, 0.6)" },
      { angle: 315, size: 2, pulseDuration: 2.0, color: "#ffffff", glow: "rgba(255, 255, 255, 0.5)" },
    ]
  },
  {
    id: "inner",
    size: "w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[340px] md:h-[340px]",
    rotateX: 80,
    rotateY: -10,
    duration: 20,
    reverse: false,
    stars: [
      { angle: 90, size: 3.5, pulseDuration: 1.7, color: "#ffea8c", glow: "rgba(255, 215, 0, 0.6)" },
      { angle: 225, size: 2.5, pulseDuration: 2.3, color: "#ffffff", glow: "rgba(255, 255, 255, 0.8)" },
    ]
  }
]

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })

  // --- ANIMACIÓN DE SCROLL MINIMALISTA ---
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const ringScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const ringOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const ringY = useTransform(scrollYProgress, [0, 1], [0, 50])

  // --- INTERACTIVIDAD DEL RATÓN (Tilt 3D Suave) ---
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [8, -8]), { stiffness: 100, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-8, 8]), { stiffness: 100, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    mouseX.set((clientX / innerWidth) * 2 - 1)
    mouseY.set((clientY / innerHeight) * 2 - 1)
  }

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("header-theme", { 
      detail: { theme: isInView ? "dark" : "light" } 
    }))
  }, [isInView])

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[120vh] bg-[#020205] font-['Manrope'] overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Fondo Espacial Oscuro */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a0b14_0%,_#000000_100%)] z-0" />

        {/* CONTENEDOR 3D GLOBAL */}
        <motion.div 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-full max-w-5xl aspect-square md:aspect-video flex items-center justify-center z-10"
        >
          
          {/* --- 1. EL TEXTO PRINCIPAL --- */}
          <motion.div 
            style={{ y: textY, opacity: textOpacity, transform: "translateZ(0px)", transformStyle: "preserve-3d" }}
            className="absolute flex flex-col items-center text-center px-4 z-10 pointer-events-auto"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-[1] mb-6 text-white tracking-tight">
              Tu mejor vendedor <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#427AA1] to-[#80B5D8]">
                no duerme.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              La infraestructura de IA determinista para E-commerce. <br className="hidden md:block" />
              <strong className="text-white font-medium">Garantizado: 0% alucinaciones de stock o precios.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a href="#demo" className="group flex items-center bg-[#427AA1] text-white rounded-full pl-6 pr-2 py-2 transition-all hover:bg-[#316285]">
                <span className="text-sm font-semibold tracking-wide mr-4">Escribir al Agente</span>
                <span className="w-8 h-8 bg-white text-[#427AA1] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
              <a href="#docs" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors px-6 py-3">
                <span className="text-sm font-medium">Ver arquitectura</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* --- 2. EL SISTEMA ORBITAL MULTICAPA --- */}
          <motion.div 
            style={{ 
              scale: ringScale, 
              opacity: ringOpacity, 
              y: ringY,
              transformStyle: "preserve-3d" 
            }}
            className="absolute flex items-center justify-center pointer-events-none"
          >
            {orbitalRings.map((ring) => (
              <div 
                key={ring.id}
                className={`absolute border border-white/10 rounded-full ${ring.size}`}
                style={{ 
                  transform: `rotateX(${ring.rotateX}deg) rotateY(${ring.rotateY}deg)`, 
                  transformStyle: "preserve-3d" 
                }}
              >
                {/* Rotación continua del anillo */}
                <motion.div 
                  animate={{ rotateZ: ring.reverse ? -360 : 360 }}
                  transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full relative"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  
                  {ring.stars.map((star, index) => {
                    // Calculamos la posición paramétrica
                    const x = 50 + Math.cos((star.angle * Math.PI) / 180) * 50
                    const y = 50 + Math.sin((star.angle * Math.PI) / 180) * 50

                    return (
                      <div 
                        key={index}
                        className="absolute"
                        style={{ 
                          top: `${y}%`, 
                          left: `${x}%`,
                          transform: "translate(-50%, -50%)",
                          transformStyle: "preserve-3d"
                        }}
                      >
                        {/* HALO EXTERIOR PULSANTE (Vida y energía) */}
                        <motion.div 
                          animate={{ 
                            scale: [1, 2.4, 1], 
                            opacity: [0.1, 0.7, 0.1] 
                          }}
                          transition={{ 
                            duration: star.pulseDuration, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: index * 0.3 // Desfase para que no palpiten todas a la vez
                          }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[4px]"
                          style={{
                            width: `${star.size * 3.5}px`,
                            height: `${star.size * 3.5}px`,
                            backgroundColor: star.color,
                            boxShadow: `0 0 ${star.size * 6}px 2px ${star.glow}`
                          }}
                        />
                        
                        {/* NÚCLEO INTERNO SÓLIDO (Estructura de la estrella) */}
                        <div 
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white z-10 shadow-sm"
                          style={{ 
                            width: `${star.size}px`, 
                            height: `${star.size}px` 
                          }}
                        />
                      </div>
                    )
                  })}

                </motion.div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}