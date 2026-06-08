"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowRight, Database, Code2, ShieldCheck, Activity, FileSpreadsheet,
  MessageCircle, Instagram, Globe,
  Send, ImageIcon, Camera, Mic, Plus, CheckCheck, Phone, Info, Video, ArrowLeft,
  Wifi, Battery, Signal, CheckCircle2,
  BrainCircuit,
  SlidersHorizontal,
  MapPin,
  Navigation
} from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const LOGOS = {
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  gemini: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
  langgraph: "https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain_logo.png",
}

const PHASES = [
  { id: "entropia", title: "Limpieza de Talles", logo: LOGOS.python, color: "text-blue-600", border: "border-blue-500" },
  { id: "tensores", title: "Comprensión de Moda", logo: LOGOS.gemini, color: "text-purple-600", border: "border-purple-500" },
  { id: "db", title: "Stock Anti-Quiebres", logo: LOGOS.supabase, color: "text-emerald-600", border: "border-emerald-500" },
  { id: "langgraph", title: "Agente Vendedor", logo: LOGOS.langgraph, color: "text-orange-600", border: "border-orange-500" }
]

// ==========================================
// COMPONENTES CANVAS (RENDERIZADO NATIVO 2D)
// ==========================================

const WormholeCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: any[] = []
    
    const init = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      for (let i = 0; i < 150; i++) {
        particles.push({
          angle: Math.random() * Math.PI * 2,
          radius: Math.random() * canvas.width,
          speed: 1 + Math.random() * 3,
          size: Math.random() * 2 + 1
        })
      }
    }

    const draw = () => {
      ctx.fillStyle = "rgba(248, 250, 252, 0.2)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      const cx = canvas.width / 2
      const cy = canvas.height / 2

      ctx.beginPath()
      ctx.arc(cx, cy, 20, 0, Math.PI * 2)
      ctx.fillStyle = "#0f172a"
      ctx.fill()

      ctx.strokeStyle = "rgba(66, 122, 161, 0.1)" // Adaptado al color ClapWise
      ctx.lineWidth = 1
      for (let r = 40; r < canvas.width; r += 40) {
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.stroke()
      }

      particles.forEach(p => {
        p.radius -= p.speed
        p.angle += 0.05
        
        if (p.radius < 20) {
          p.radius = canvas.width
          p.angle = Math.random() * Math.PI * 2
        }

        const x = cx + Math.cos(p.angle) * p.radius
        const y = cy + Math.sin(p.angle) * p.radius

        ctx.beginPath()
        ctx.arc(x, y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(66, 122, 161, ${p.radius / canvas.width})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    init()
    draw()
    window.addEventListener("resize", init)
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", init)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full rounded-2xl" />
}

const TensorNetworkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let nodes: any[] = []
    
    const init = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      for (let i = 0; i < 60; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          radius: Math.random() * 3 + 1,
          color: Math.random() > 0.5 ? "#192832" : "#427AA1" // Adaptado a paleta ClapWise
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      nodes.forEach(node => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(66, 122, 161, ${1 - dist / 100})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    init()
    draw()
    window.addEventListener("resize", init)
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", init)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full rounded-2xl" />
}

export default function ComoFuncionaPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [activeChannel, setActiveChannel] = useState<'whatsapp' | 'instagram' | 'web'>('whatsapp')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const CHATS = {
    whatsapp: [
      { sender: 'user', text: 'Che, tenés el buzo over en negro talle L?' },
      { sender: 'bot', text: '¡Hola! 👋 Sí, me queda el último en stock 🔥. Sale $25.000. ¿Te lo separo y te paso el link de pago?' },
      { sender: 'user', text: 'Dale de una, pasame' },
      { sender: 'bot', text: '¡Excelente! Acá tenés el link para abonar: pagos.clapwise.com/buzo. Apenas pagues me avisa y preparo el paquete 📦🚀' }
    ],
    instagram: [
      { sender: 'user', text: 'Precio de las zapas de la historia?? talle 40' },
      { sender: 'bot', text: '¡Qué onda! 😎 Son las Sneakers Urban. En 40 me quedan en blanco y en gris. Salen $65.000.' },
      { sender: 'user', text: 'Uh me re sirven en blanco, hacen envíos a Nueva Córdoba?' },
      { sender: 'bot', text: 'Obvio 🛵. A Nueva Córdoba llega hoy. Te dejo el link para pedirlas: link.clapwise.com/zapas 👟' }
    ],
    web: [
      { sender: 'user', text: 'Tienen cambio si no me va el talle?' },
      { sender: 'bot', text: '¡Hola! Sí, tenés 30 días para cambios gratis en cualquier sucursal o por correo ♻️.' },
      { sender: 'user', text: 'Joya, tienen stock del Jean Mom en 42?' },
      { sender: 'bot', text: 'Bancame que me fijo... 🔎 Sí, tenemos 3 unidades disponibles del Jean Mom en 42. ¿Te ayudo con algo más?' }
    ]
  }

  // Variantes de animación para la lista tipo "Checklist"
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } }
  }

  return (
    // Forzamos la tipografía Manrope en toda la página
    <main className="min-h-screen bg-[#F8FAFC] selection:bg-[#427AA1]/20 font-['Manrope',sans-serif] text-[#192832]">
      <Header />

      {/* ==========================================
          2. EL AGENTE EN ACCIÓN (Canales)
          ========================================== */}
      <section className="py-24 px-6 bg-white border-y border-gray-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#192832] mb-6 leading-tight">
                El bot se pone la 10 <br/> en todos tus canales.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Olvídate de clavar el visto. Mientras tú armas paquetes o descansas, el agente atiende, asesora humanamente y envía links de pago exactos las 24 horas del día.
              </p>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => setActiveChannel('whatsapp')}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all border-2 ${activeChannel === 'whatsapp' ? 'border-[#25D366] bg-[#25D366]/5 shadow-sm scale-[1.02]' : 'border-transparent hover:bg-gray-50'}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${activeChannel === 'whatsapp' ? 'bg-[#25D366] text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className={`font-bold ${activeChannel === 'whatsapp' ? 'text-[#25D366]' : 'text-gray-700'}`}>WhatsApp</h4>
                    <p className="text-sm text-gray-500">Cierre de ventas directo.</p>
                  </div>
                </button>

                <button 
                  onClick={() => setActiveChannel('instagram')}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all border-2 ${activeChannel === 'instagram' ? 'border-[#E1306C] bg-[#E1306C]/5 shadow-sm scale-[1.02]' : 'border-transparent hover:bg-gray-50'}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${activeChannel === 'instagram' ? 'bg-gradient-to-tr from-[#F56040] to-[#E1306C] text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className={`font-bold ${activeChannel === 'instagram' ? 'text-[#E1306C]' : 'text-gray-700'}`}>Instagram DMs</h4>
                    <p className="text-sm text-gray-500">Respuestas a historias y posts.</p>
                  </div>
                </button>

                <button 
                  onClick={() => setActiveChannel('web')}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all border-2 ${activeChannel === 'web' ? 'border-[#427AA1] bg-[#427AA1]/5 shadow-sm scale-[1.02]' : 'border-transparent hover:bg-gray-50'}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${activeChannel === 'web' ? 'bg-[#427AA1] text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className={`font-bold ${activeChannel === 'web' ? 'text-[#427AA1]' : 'text-gray-700'}`}>Web Chat</h4>
                    <p className="text-sm text-gray-500">Soporte y dudas de envíos.</p>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Celular Mockup Interactivo */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="relative w-[320px] h-[640px] bg-[#192832] rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-900"
            >
              <div className="w-full h-full bg-gray-50 rounded-[2rem] overflow-hidden flex flex-col relative shadow-inner">
                
                <div className={`w-full h-6 px-5 flex justify-between items-center text-[10px] font-bold z-20 absolute top-0 left-0 transition-colors duration-300
                  ${activeChannel === 'instagram' || activeChannel === 'web' ? 'text-gray-800' : 'text-white'}`}>
                  <span>14:23</span>
                  <div className="flex gap-1.5 items-center">
                    <Signal className="w-3 h-3" />
                    <Wifi className="w-3 h-3" />
                    <Battery className="w-3 h-3" />
                  </div>
                </div>

                <div className={`pt-8 pb-3 px-4 flex items-center gap-3 shadow-sm z-10 transition-colors duration-300
                  ${activeChannel === 'whatsapp' ? 'bg-[#075E54] text-white' : 
                    activeChannel === 'instagram' ? 'bg-white text-gray-900 border-b border-gray-200' : 
                    'bg-white text-gray-900 border-b border-gray-200'}`
                }>
                  <div className="flex items-center gap-2 flex-1">
                    <ArrowLeft className={`w-5 h-5 ${activeChannel === 'whatsapp' ? 'text-white' : 'text-gray-900'}`} />
                    <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden shrink-0 border-2 border-white/20">
                      <img src="/logo-clapwise.png" alt="Tienda" className="w-full h-full object-cover bg-[#192832] p-1" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold leading-tight tracking-tight">
                        {activeChannel === 'instagram' ? 'tienda.oficial' : 'Tienda Oficial'}
                      </span>
                      <span className={`text-[10px] font-semibold ${activeChannel === 'whatsapp' ? 'text-white/80' : 'text-gray-500'}`}>
                        {activeChannel === 'instagram' ? 'Respuestas automáticas' : 'en línea'}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {activeChannel === 'whatsapp' && (
                      <>
                        <Video className="w-4 h-4 text-white" />
                        <Phone className="w-4 h-4 text-white" />
                      </>
                    )}
                    {activeChannel === 'instagram' && <Info className="w-6 h-6 text-gray-900" />}
                  </div>
                </div>

                <div className={`flex-1 p-4 flex flex-col gap-4 overflow-y-auto relative transition-colors duration-300
                  ${activeChannel === 'whatsapp' ? 'bg-[#E5DDD5]' : 'bg-white'}`}>
                  
                  {activeChannel === 'whatsapp' && (
                    <div className="absolute inset-0 opacity-[0.06] bg-[url('https://i.pinimg.com/originals/85/ec/df/85ecdf1c3611ecc9b7fa85282d9526e0.jpg')] bg-repeat" />
                  )}

                  <div className="w-full flex justify-center relative z-10 mt-2">
                    <span className={`text-[10px] px-3 py-1 font-bold rounded-lg shadow-sm tracking-wide
                      ${activeChannel === 'whatsapp' ? 'bg-[#E1F2FB] text-gray-600' : 'text-gray-400 bg-gray-50'}`}>
                      HOY
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeChannel}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-3 relative z-10 pb-4"
                    >
                      {CHATS[activeChannel].map((msg, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, scale: 0.9, x: msg.sender === 'user' ? 10 : -10 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          transition={{ delay: i * 0.3, type: "spring", stiffness: 200 }}
                          className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`flex max-w-[88%] gap-2 items-end ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            
                            {msg.sender === 'bot' && activeChannel !== 'whatsapp' && (
                              <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 shadow-sm border border-gray-100">
                                <img src="/logo-clapwise.png" alt="Bot" className="w-full h-full object-cover bg-[#192832] p-1" />
                              </div>
                            )}

                            {msg.sender === 'user' && activeChannel !== 'whatsapp' && (
                              <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 shadow-sm border border-gray-100">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="User" className="w-full h-full object-cover" />
                              </div>
                            )}

                            <div className={`relative px-3 py-2 flex flex-col gap-1
                              ${activeChannel === 'whatsapp' ? 'rounded-2xl shadow-sm' : 'rounded-[1.2rem]'}
                              ${msg.sender === 'user' 
                                ? activeChannel === 'whatsapp' ? 'bg-[#DCF8C6] text-gray-800 rounded-tr-none' : 
                                  activeChannel === 'instagram' ? 'bg-[#3797F0] text-white' : 
                                  'bg-[#427AA1] text-white rounded-br-sm'
                                : activeChannel === 'whatsapp' ? 'bg-white text-gray-800 rounded-tl-none' : 
                                  activeChannel === 'instagram' ? 'bg-gray-100 text-gray-900 border border-gray-200/60' : 
                                  'bg-white border border-gray-200 text-gray-800 rounded-bl-sm shadow-sm'
                              }
                            `}>
                              <span className="text-[13px] leading-snug font-medium">{msg.text}</span>
                              
                              <div className={`flex justify-end items-center gap-1 text-[9px] font-bold
                                ${msg.sender === 'user' && activeChannel !== 'whatsapp' ? 'text-white/80' : 'text-gray-400'}`}>
                                <span>{14 + Math.floor(i/2)}:{23 + i}</span>
                                {msg.sender === 'user' && activeChannel === 'whatsapp' && (
                                  <CheckCheck className="w-[14px] h-[14px] text-[#34B7F1]" />
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="bg-gray-50 border-t border-gray-200 px-3 py-2 flex items-center gap-3 z-10 pb-6 transition-colors duration-300">
                  {activeChannel === 'whatsapp' ? (
                    <>
                      <Plus className="w-6 h-6 text-[#007AFF] shrink-0" />
                      <div className="flex-1 h-8 bg-white rounded-full border border-gray-300 px-3 flex items-center shadow-sm">
                        <span className="text-[13px] text-gray-400 font-medium pt-0.5">Mensaje</span>
                      </div>
                      <Camera className="w-5 h-5 text-[#007AFF] shrink-0" />
                      <Mic className="w-5 h-5 text-[#007AFF] shrink-0" />
                    </>
                  ) : activeChannel === 'instagram' ? (
                    <>
                      <div className="w-8 h-8 rounded-full bg-[#3797F0] flex items-center justify-center shrink-0 shadow-sm">
                        <Camera className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 h-9 bg-white rounded-full border border-gray-200 px-4 flex items-center shadow-sm">
                        <span className="text-[13px] font-medium text-gray-400">Mensaje...</span>
                      </div>
                      <ImageIcon className="w-6 h-6 text-gray-800 shrink-0" />
                    </>
                  ) : (
                    <>
                      <div className="flex-1 h-10 bg-white rounded-xl border border-gray-200 px-3 flex items-center shadow-sm">
                        <span className="text-[13px] font-medium text-gray-400">Escribe aquí...</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#427AA1] flex items-center justify-center text-white shrink-0 shadow-sm">
                        <Send className="w-4 h-4 ml-1" />
                      </div>
                    </>
                  )}
                </div>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full z-20 opacity-80" />
              </div>
            </motion.div>
          </div> 
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 px-6 relative bg-[#F3F4F6] font-['Manrope',sans-serif]">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Manrope',sans-serif] text-4xl md:text-5xl font-bold mb-6 text-[#192832] tracking-tight"
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

      {/* ==========================================
          3. PIPELINE TÉCNICO (Transparencia Comercial)
          ========================================== */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#192832] tracking-tight">El Pipeline del Retail</h2>
            <p className="text-gray-500 mt-4 text-lg font-medium">Cómo convertimos tu lista de precios desordenada en ventas cerradas reales.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {PHASES.map((phase, index) => (
              <button
                key={phase.id}
                onClick={() => setActiveTab(index)}
                className={`flex-1 flex items-center justify-center md:justify-start gap-3 px-5 py-4 rounded-2xl transition-all duration-300 font-bold text-sm
                  ${activeTab === index 
                    ? `bg-white shadow-md border-2 ${phase.border} scale-[1.02] z-10` 
                    : "bg-transparent text-gray-500 border-2 border-transparent hover:bg-gray-100"}
                `}
              >
                <img src={phase.logo} alt={phase.title} className={`w-5 h-5 transition-all ${activeTab === index ? "" : "grayscale opacity-50"}`} />
                <span className={activeTab === index ? "text-gray-900" : ""}>{phase.title}</span>
              </button>
            ))}
          </div>

          <div className="w-full bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 min-h-[500px] md:min-h-[550px] relative flex items-center justify-center">
            
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center p-6 md:p-12 z-10"
              >
                {activeTab === 0 && (
                  <div className="w-full flex flex-col md:flex-row items-center gap-12 max-w-5xl">
                    <div className="w-full md:w-1/3 bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-lg">
                      <h3 className="text-2xl font-extrabold text-[#192832] mb-4">El Filtro de Talles</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-medium">
                        Los proveedores envían listas caóticas. Nuestro pipeline comprime esos datos: extrae prendas, talles, colores y precios, descartando la basura para armar un catálogo inmaculado.
                      </p>
                    </div>
                    
                    <div className="w-full md:w-2/3 h-[400px] relative bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-inner">
                      <WormholeCanvas />
                      <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-8">
                        <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-red-200 text-xs font-bold text-red-700 shadow-xl -rotate-6">
                          "campera inflable negra L 45mil quedan 3"
                        </div>
                        <div className="bg-[#192832]/95 backdrop-blur-md p-5 rounded-2xl border border-gray-700 text-sm font-mono text-blue-300 shadow-2xl">
                          <span className="text-gray-400">{"{"}</span><br/>
                          &nbsp;<span className="text-blue-300">"prenda"</span>: <span className="text-emerald-400">"campera_inflable"</span>,<br/>
                          &nbsp;<span className="text-blue-300">"talle"</span>: <span className="text-emerald-400">"L"</span>,<br/>
                          &nbsp;<span className="text-blue-300">"stock"</span>: <span className="text-orange-400">3</span><br/>
                          <span className="text-gray-400">{"}"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="w-full flex flex-col md:flex-row items-center gap-12 max-w-5xl">
                    <div className="w-full md:w-1/3 bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-lg">
                      <h3 className="text-2xl font-extrabold text-[#192832] mb-4">La Jerga de la Moda</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-medium">
                        ¿Tus clientes piden "zapas", "llantas" o "sneakers"? La vectorización convierte palabras en coordenadas espaciales. Entendemos la intención de compra sin importar cómo hablen.
                      </p>
                    </div>
                    
                    <div className="w-full md:w-2/3 h-[400px] relative bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-inner">
                      <TensorNetworkCanvas />
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-gray-200 p-5 rounded-3xl shadow-2xl text-center flex gap-4 items-center">
                        <div className="text-[11px] font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">"ZAPAS"</div>
                        <div className="text-[11px] font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">"SNEAKERS"</div>
                        <ArrowRight className="w-5 h-5 text-[#427AA1]" />
                        <div className="font-mono text-[13px] text-white font-bold bg-[#427AA1] px-4 py-2 rounded-xl shadow-md">
                          Match: zapatilla_deportiva
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="w-full flex flex-col md:flex-row items-center gap-12 max-w-5xl">
                    <div className="w-full md:w-1/3 bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-lg z-20">
                      <h3 className="text-2xl font-extrabold text-[#192832] mb-4">Stock Anti-Quiebres</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-medium">
                        El peor error de un bot es vender ropa agotada. Aislamos la IA de tu inventario. Las consultas van a nuestra base de datos relacional; si el stock es cero, la venta se bloquea.
                      </p>
                    </div>
                    
                    <div className="w-full md:w-2/3 h-[400px] flex items-center justify-center gap-8 relative">
                      <div className="w-52 bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden opacity-80">
                        <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 text-xs font-bold text-gray-600 flex items-center gap-2">
                          <FileSpreadsheet className="w-4 h-4 text-green-600"/> inv_invierno.csv
                        </div>
                        <div className="p-4 font-mono text-[11px] text-gray-500 space-y-3 font-semibold">
                          <div className="border-b border-gray-100 pb-2 flex justify-between"><span>Buzo Over L</span><span>$25k</span></div>
                          <div className="border-b border-gray-100 pb-2 flex justify-between text-red-600 bg-red-50/50 -mx-4 px-4 pt-1"><span>Jean Mom 40</span><span>Agotado</span></div>
                        </div>
                      </div>

                      <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                        <ArrowRight className="w-10 h-10 text-emerald-500 shrink-0 drop-shadow-md" />
                      </motion.div>

                      <div className="w-64 bg-[#192832] border border-emerald-500/40 rounded-2xl shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[9px] font-bold px-3 py-1.5 rounded-bl-xl shadow-sm">DB SYNC</div>
                        <div className="bg-gray-900 border-b border-gray-800 px-4 py-3 text-xs font-bold text-emerald-400 flex items-center gap-2">
                          <Database className="w-4 h-4"/> public.stock
                        </div>
                        <div className="p-5 space-y-4 font-mono text-xs text-gray-300">
                          <div className="border-b border-gray-800 pb-2 flex justify-between items-center">
                            <span className="font-semibold">buzo_L</span><span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold border border-emerald-500/30">Stock: 5</span>
                          </div>
                          <div className="border-b border-gray-800 pb-2 flex justify-between items-center">
                            <span className="text-gray-500">jean_40</span><span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-bold border border-red-500/30">BLOCK (0)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  <div className="w-full flex flex-col md:flex-row items-center gap-12 max-w-5xl">
                    <div className="w-full md:w-1/3 bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-lg z-20">
                      <h3 className="text-2xl font-extrabold text-[#192832] mb-4">El Vendedor Digital</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-medium">
                        Construimos grafos de estado. El agente entiende perfectamente cuándo el cliente está dudando ("¿tienen abrigos?") y cuándo está a un paso de pagar ("pasame el link").
                      </p>
                    </div>
                    
                    <div className="w-full md:w-2/3 h-[400px] relative flex items-center justify-center">
                      <div className="relative w-[550px] h-[300px]">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 550 300">
                          <path d="M 120 150 L 200 150" fill="none" stroke="#e5e7eb" strokeWidth="3" strokeDasharray="6 6" />
                          <motion.circle r="4" fill="#427AA1" animate={{ cx: [120, 200] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} cy="150" />
                          
                          <path d="M 380 150 L 410 150 L 410 65 L 430 65" fill="none" stroke="#427AA1" strokeWidth="3" strokeLinejoin="round" />
                          <path d="M 380 150 L 430 150" fill="none" stroke="#e5e7eb" strokeWidth="3" strokeLinejoin="round" />
                          <path d="M 380 150 L 410 150 L 410 235 L 430 235" fill="none" stroke="#e5e7eb" strokeWidth="3" strokeLinejoin="round" />

                          <motion.circle r="4" fill="#427AA1" animate={{ offsetDistance: ["0%", "100%"] }} transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.5 }} style={{ offsetPath: "path('M 380 150 L 410 150 L 410 65 L 430 65')" }} />
                        </svg>

                        <div className="absolute left-[0px] top-[125px] w-[120px] h-[50px] bg-white border border-gray-200 rounded-xl shadow-md flex flex-col justify-center items-center">
                          <div className="flex items-center gap-1 text-[10px] font-bold text-gray-500 mb-1">
                            <MessageCircle className="w-3 h-3 text-[#25D366]" /> WhatsApp
                          </div>
                          <span className="text-[9px] italic text-gray-400 font-medium">"Quiero la negra M"</span>
                        </div>

                        <div className="absolute left-[200px] top-[110px] w-[180px] h-[80px] bg-white border-2 border-[#427AA1] rounded-2xl shadow-xl flex flex-col justify-center items-center">
                          <img src={LOGOS.langgraph} alt="LangGraph" className="w-6 h-6 mb-2 grayscale opacity-80" />
                          <span className="text-[11px] font-extrabold text-[#192832] tracking-wider uppercase">Motor IA</span>
                          <span className="text-[9px] font-medium text-[#427AA1] mt-1 bg-[#427AA1]/10 px-2 py-0.5 rounded-full">Procesando intención</span>
                        </div>

                        <div className="absolute left-[430px] top-[40px] w-[150px] h-[50px] bg-[#427AA1]/10 border-2 border-[#427AA1] rounded-xl shadow-md flex items-center justify-between px-4">
                          <span className="text-[10px] font-bold text-[#192832] font-mono">cerrar_venta()</span>
                          <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2.5 h-2.5 bg-[#427AA1] rounded-full shadow-[0_0_8px_rgba(66,122,161,0.5)]" />
                        </div>

                        <div className="absolute left-[430px] top-[125px] w-[150px] h-[50px] bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col justify-center px-4 opacity-50">
                          <span className="text-[10px] font-bold text-gray-400 font-mono">consultar_talles()</span>
                        </div>

                        <div className="absolute left-[430px] top-[210px] w-[150px] h-[50px] bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col justify-center px-4 opacity-50">
                          <span className="text-[10px] font-bold text-gray-400 font-mono">asistencia_humana()</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}