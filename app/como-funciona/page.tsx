"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowRight, Database, Code2, ShieldCheck, Activity, FileSpreadsheet, Shirt,
  MessageCircle, Instagram, Globe, Smartphone,
  Send,
  ImageIcon,
  Camera,
  Mic,
  Plus,
  CheckCheck,
  Phone,
  Info,
  Video,
  ArrowLeft,
  Wifi,
  Battery,
  Signal
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

      ctx.strokeStyle = "rgba(59, 130, 246, 0.1)"
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
        ctx.fillStyle = `rgba(59, 130, 246, ${p.radius / canvas.width})`
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
          color: Math.random() > 0.5 ? "#9333ea" : "#0ea5e9"
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
            ctx.strokeStyle = `rgba(147, 51, 234, ${1 - dist / 100})`
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

  // Chats de ejemplo para la nueva sección
  const CHATS = {
    whatsapp: [
      { sender: 'user', text: 'Che, tenés el buzo over en negro talle L?' },
      { sender: 'bot', text: '¡Hola! 👋 Sí, me queda el último en stock 🔥. Sale $25.000. ¿Te lo separo y te paso el link de pago?' },
      { sender: 'user', text: 'Dale de una, pasame' },
      { sender: 'bot', text: '¡Excelente! Acá tenés el link directo para abonar: pagos.clapwise.com/buzo-negro. Apenas pagues me avisa y te preparo el paquete 📦🚀' }
    ],
    instagram: [
      { sender: 'user', text: 'Precio de las zapas de la historia?? talle 40' },
      { sender: 'bot', text: '¡Qué onda! 😎 Son las Sneakers Urban. En talle 40 me quedan en blanco y en gris. Salen $65.000.' },
      { sender: 'user', text: 'Uh me re sirven en blanco, hacen envíos a Nueva Córdoba?' },
      { sender: 'bot', text: 'Obvio 🛵. A Nueva Córdoba llega en el día si confirmamos ahora. Te dejo el link para pedirlas: link.clapwise.com/zapas 👟' }
    ],
    web: [
      { sender: 'user', text: 'Tienen cambio si no me va el talle?' },
      { sender: 'bot', text: '¡Hola! Sí, tenés 30 días para cambios gratis en cualquier sucursal o por correo ♻️.' },
      { sender: 'user', text: 'Joya, tienen stock del Jean Mom en 42?' },
      { sender: 'bot', text: 'Bancame que me fijo... 🔎 Sí, tenemos 3 unidades disponibles del Jean Mom Clásico en 42. ¿Te ayudo con algo más?' }
    ]
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] selection:bg-[#427AA1]/20 font-sans text-slate-900">
      <Header />

      {/* ==========================================
          1. HERO SECTION (TEXTO IZQ / IMAGEN DER)
          ========================================== */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight text-slate-900 mb-6 leading-[1.1]"
            >
              Ventas automáticas. <br />
              <span className="text-[#427AA1]">Stock perfecto.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 font-medium leading-relaxed"
            >
              Sabemos que gestionar talles, colores y variantes es un infierno. Descubrí cómo ClapWise procesa tu catálogo caótico y lo transforma en un vendedor que jamás ofrece prendas que no tenés.
            </motion.p>
          </div>

          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000&auto=format&fit=crop" 
                alt="Tienda de Indumentaria Minimalista" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00324D]/30 to-transparent mix-blend-overlay" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ==========================================
          NUEVA SECCIÓN: EL AGENTE EN ACCIÓN (Día a Día)
          ========================================== */}
      <section className="py-24 px-6 bg-white border-y border-slate-200 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Textos y Controles */}
          <div className="w-full lg:w-1/2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-slate-900 mb-6 leading-tight">
                El bot se pone la 10 <br/> en todos tus canales.
              </h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Olvidate de clavar el visto. Mientras vos armás paquetes, reponés stock o simplemente dormís, el agente atiende, asesora y manda links de pago las 24 horas del día.
              </p>

              {/* Botones de Selección */}
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => setActiveChannel('whatsapp')}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all border-2 ${activeChannel === 'whatsapp' ? 'border-[#25D366] bg-[#25D366]/5 shadow-sm' : 'border-transparent hover:bg-slate-50'}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${activeChannel === 'whatsapp' ? 'bg-[#25D366] text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className={`font-bold ${activeChannel === 'whatsapp' ? 'text-[#25D366]' : 'text-slate-700'}`}>WhatsApp</h4>
                    <p className="text-xs text-slate-500">Cierre de ventas directo.</p>
                  </div>
                </button>

                <button 
                  onClick={() => setActiveChannel('instagram')}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all border-2 ${activeChannel === 'instagram' ? 'border-[#E1306C] bg-[#E1306C]/5 shadow-sm' : 'border-transparent hover:bg-slate-50'}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${activeChannel === 'instagram' ? 'bg-gradient-to-tr from-[#F56040] to-[#E1306C] text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className={`font-bold ${activeChannel === 'instagram' ? 'text-[#E1306C]' : 'text-slate-700'}`}>Instagram DMs</h4>
                    <p className="text-xs text-slate-500">Respuestas a historias y posts.</p>
                  </div>
                </button>

                <button 
                  onClick={() => setActiveChannel('web')}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all border-2 ${activeChannel === 'web' ? 'border-[#427AA1] bg-[#427AA1]/5 shadow-sm' : 'border-transparent hover:bg-slate-50'}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${activeChannel === 'web' ? 'bg-[#427AA1] text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className={`font-bold ${activeChannel === 'web' ? 'text-[#427AA1]' : 'text-slate-700'}`}>Web Chat</h4>
                    <p className="text-xs text-slate-500">Soporte y dudas de envíos.</p>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Celular / Interfaz Mockup */}
         <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="relative w-[320px] h-[640px] bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-slate-800"
            >
              {/* Pantalla del celular */}
              <div className="w-full h-full bg-slate-50 rounded-[2rem] overflow-hidden flex flex-col relative shadow-inner">
                
                {/* iOS Status Bar Simulado */}
                <div className={`w-full h-6 px-5 flex justify-between items-center text-[10px] font-medium z-20 absolute top-0 left-0
                  ${activeChannel === 'instagram' || activeChannel === 'web' ? 'text-slate-800' : 'text-white'}`}>
                  <span>14:23</span>
                  <div className="flex gap-1.5 items-center">
                    <Signal className="w-3 h-3" />
                    <Wifi className="w-3 h-3" />
                    <Battery className="w-3 h-3" />
                  </div>
                </div>

                {/* Header del Chat Nativo */}
                <div className={`pt-8 pb-3 px-4 flex items-center gap-3 shadow-sm z-10 transition-colors duration-300
                  ${activeChannel === 'whatsapp' ? 'bg-[#075E54] text-white' : 
                    activeChannel === 'instagram' ? 'bg-white text-slate-900 border-b border-slate-200' : 
                    'bg-white text-slate-900 border-b border-slate-200'}`
                }>
                  <div className="flex items-center gap-2 flex-1">
                    <ArrowLeft className={`w-5 h-5 ${activeChannel === 'whatsapp' ? 'text-white' : 'text-slate-900'}`} />
                    <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden shrink-0 border-2 border-white/20">
                      {/* Avatar de la tienda en el header */}
                      <img src="/logo-clapwise.png" alt="Tienda" className="w-full h-full object-cover bg-[#192832] p-1" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold leading-tight tracking-tight">
                        {activeChannel === 'instagram' ? 'tienda.oficial' : 'Tienda Oficial'}
                      </span>
                      <span className={`text-[10px] ${activeChannel === 'whatsapp' ? 'text-white/80' : 'text-slate-500'}`}>
                        {activeChannel === 'instagram' ? 'Respuestas automáticas' : 'en línea'}
                      </span>
                    </div>
                  </div>
                  {/* Iconos derechos del header */}
                  <div className="flex gap-4">
                    {activeChannel === 'whatsapp' && (
                      <>
                        <Video className="w-4 h-4 text-white" />
                        <Phone className="w-4 h-4 text-white" />
                      </>
                    )}
                    {activeChannel === 'instagram' && <Info className="w-6 h-6 text-slate-900" />}
                  </div>
                </div>

                {/* Área de Mensajes */}
                <div className={`flex-1 p-4 flex flex-col gap-4 overflow-y-auto relative
                  ${activeChannel === 'whatsapp' ? 'bg-[#E5DDD5]' : 'bg-white'}`}>
                  
                  {/* Patrón de WhatsApp (Wallpaper) */}
                  {activeChannel === 'whatsapp' && (
                    <div className="absolute inset-0 opacity-[0.06] bg-[url('https://i.pinimg.com/originals/85/ec/df/85ecdf1c3611ecc9b7fa85282d9526e0.jpg')] bg-repeat" />
                  )}

                  {/* Etiqueta de Fecha */}
                  <div className="w-full flex justify-center relative z-10 mt-2">
                    <span className={`text-[10px] px-3 py-1 font-medium rounded-lg shadow-sm
                      ${activeChannel === 'whatsapp' ? 'bg-[#E1F2FB] text-slate-600' : 'text-slate-400'}`}>
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
                          transition={{ delay: i * 0.4 }}
                          className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`flex max-w-[88%] gap-2 items-end ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            
                            {/* Avatar del Bot (Visible en IG y Web) */}
                            {msg.sender === 'bot' && activeChannel !== 'whatsapp' && (
                              <div className="w-6 h-6 rounded-full overflow-hidden shrink-0">
                                <img src="/logo-clapwise.png" alt="Bot" className="w-full h-full object-cover bg-[#192832] p-1" />
                              </div>
                            )}

                            {/* Avatar del Cliente (Visible en IG y Web) */}
                            {msg.sender === 'user' && activeChannel !== 'whatsapp' && (
                              <div className="w-6 h-6 rounded-full overflow-hidden shrink-0">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="User" className="w-full h-full object-cover" />
                              </div>
                            )}

                            {/* Burbuja de Mensaje */}
                            <div className={`relative px-3 py-2 flex flex-col gap-0.5
                              ${activeChannel === 'whatsapp' ? 'rounded-2xl shadow-sm' : 'rounded-[1.2rem]'}
                              ${msg.sender === 'user' 
                                ? activeChannel === 'whatsapp' ? 'bg-[#DCF8C6] text-slate-800 rounded-tr-none' : 
                                  activeChannel === 'instagram' ? 'bg-[#3797F0] text-white' : 
                                  'bg-[#427AA1] text-white rounded-br-sm'
                                : activeChannel === 'whatsapp' ? 'bg-white text-slate-800 rounded-tl-none' : 
                                  activeChannel === 'instagram' ? 'bg-[#EFEFEF] text-slate-900 border border-slate-200/60' : 
                                  'bg-white border border-slate-200 text-slate-800 rounded-bl-sm shadow-sm'
                              }
                            `}>
                              <span className="text-[13px] leading-snug">{msg.text}</span>
                              
                              {/* Timestamp y Tildes */}
                              <div className={`flex justify-end items-center gap-1 text-[9px]
                                ${msg.sender === 'user' && activeChannel !== 'whatsapp' ? 'text-white/80' : 'text-slate-400'}`}>
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

                {/* Input de Chat Falso Simulado por App */}
                <div className="bg-slate-50 border-t border-slate-200 px-3 py-2 flex items-center gap-3 z-10 pb-6">
                  {activeChannel === 'whatsapp' ? (
                    <>
                      <Plus className="w-6 h-6 text-[#007AFF] shrink-0" />
                      <div className="flex-1 h-8 bg-white rounded-full border border-slate-300 px-3 flex items-center shadow-sm">
                        <span className="text-[13px] text-slate-400 pt-0.5">Mensaje</span>
                      </div>
                      <Camera className="w-5 h-5 text-[#007AFF] shrink-0" />
                      <Mic className="w-5 h-5 text-[#007AFF] shrink-0" />
                    </>
                  ) : activeChannel === 'instagram' ? (
                    <>
                      <div className="w-8 h-8 rounded-full bg-[#3797F0] flex items-center justify-center shrink-0">
                        <Camera className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 h-9 bg-slate-100 rounded-full border border-slate-200 px-4 flex items-center">
                        <span className="text-[13px] text-slate-400">Mensaje...</span>
                      </div>
                      <ImageIcon className="w-6 h-6 text-slate-800 shrink-0" />
                    </>
                  ) : (
                    <>
                      <div className="flex-1 h-10 bg-white rounded-xl border border-slate-200 px-3 flex items-center shadow-sm">
                        <span className="text-[13px] text-slate-400">Escribe aquí...</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#427AA1] flex items-center justify-center text-white shrink-0 shadow-sm">
                        <Send className="w-4 h-4" />
                      </div>
                    </>
                  )}
                </div>

                {/* Home Indicator de iOS (Barra inferior) */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-slate-800 rounded-full z-20" />

              </div>
            </motion.div>
          </div> 

        </div>
      </section>

      {/* ==========================================
          2. INTERACTIVE SLIDESHOW (PIPELINE TÉCNICO)
          ========================================== */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900">El Pipeline del Retail</h2>
            <p className="text-slate-500 mt-2">Cómo convertimos tu lista de precios desordenada en ventas cerradas.</p>
          </div>

          {/* TAB BAR */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {PHASES.map((phase, index) => (
              <button
                key={phase.id}
                onClick={() => setActiveTab(index)}
                className={`flex-1 flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 font-semibold text-sm
                  ${activeTab === index 
                    ? `bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-2 ${phase.border} scale-[1.02] z-10` 
                    : "bg-transparent text-slate-500 border-2 border-transparent hover:bg-slate-100/50"}
                `}
              >
                <img src={phase.logo} alt={phase.title} className={`w-5 h-5 ${activeTab === index ? "" : "grayscale opacity-50"}`} />
                <span className={activeTab === index ? "text-slate-900" : ""}>{phase.title}</span>
              </button>
            ))}
          </div>

          {/* MAIN CANVAS VIEWPORT */}
          <div className="w-full bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-200 min-h-[500px] md:min-h-[550px] relative flex items-center justify-center">
            
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center p-6 md:p-12 z-10"
              >

                {/* SLIDES (Mismo contenido adaptado a Ropa que te envié en el prompt anterior) */}
                
                {/* SLIDE 0: ENTROPÍA */}
                {activeTab === 0 && (
                  <div className="w-full flex flex-col md:flex-row items-center gap-12 max-w-5xl">
                    <div className="w-full md:w-1/3 bg-white/80 backdrop-blur p-6 rounded-2xl border border-slate-100 shadow-sm">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">El Filtro de Talles</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Los proveedores envían listas caóticas. Nuestro script de Python comprime esos datos: extrae prendas, talles, colores y precios, descartando lo que no sirve para armar un catálogo estructurado.
                      </p>
                    </div>
                    
                    <div className="w-full md:w-2/3 h-[400px] relative bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-inner">
                      <WormholeCanvas />
                      <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-8">
                        <div className="bg-white/90 backdrop-blur p-3 rounded-xl border border-red-200 text-[10px] font-mono text-red-700 shadow-lg -rotate-6">
                          "campera inflable negra L 45mil quedan 3"
                        </div>
                        <div className="bg-slate-900/95 backdrop-blur p-4 rounded-xl border border-slate-700 text-xs font-mono text-blue-300 shadow-2xl">
                          <span className="text-slate-500">{"{"}</span><br/>
                          &nbsp;<span className="text-blue-400">"prenda"</span>: <span className="text-green-400">"campera_inflable"</span>,<br/>
                          &nbsp;<span className="text-blue-400">"talle"</span>: <span className="text-green-400">"L"</span>,<br/>
                          &nbsp;<span className="text-blue-400">"stock"</span>: <span className="text-orange-400">3</span><br/>
                          <span className="text-slate-500">{"}"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SLIDE 1: TENSORES */}
                {activeTab === 1 && (
                  <div className="w-full flex flex-col md:flex-row items-center gap-12 max-w-5xl">
                    <div className="w-full md:w-1/3 bg-white/80 backdrop-blur p-6 rounded-2xl border border-slate-100 shadow-sm">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">La Jerga de la Moda</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        ¿Tus clientes piden "zapas", "llantas" o "sneakers"? La vectorización convierte palabras en coordenadas espaciales. La IA entiende la intención de compra sin importar cómo lo escriban.
                      </p>
                    </div>
                    
                    <div className="w-full md:w-2/3 h-[400px] relative bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-inner">
                      <TensorNetworkCanvas />
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur border border-slate-200 p-4 rounded-2xl shadow-xl text-center flex gap-4 items-center">
                        <div className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">"ZAPAS"</div>
                        <div className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">"SNEAKERS"</div>
                        <ArrowRight className="w-4 h-4 text-purple-500" />
                        <div className="font-mono text-xs text-purple-700 font-bold bg-purple-100 px-2 py-1 rounded border border-purple-200">
                          Match: zapatilla_deportiva
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SLIDE 2: DATABASE */}
                {activeTab === 2 && (
                  <div className="w-full flex flex-col md:flex-row items-center gap-12 max-w-5xl">
                    <div className="w-full md:w-1/3 bg-white/80 backdrop-blur p-6 rounded-2xl border border-slate-100 shadow-sm">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Stock Inquebrantable</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        El peor error de un bot es vender una prenda agotada. Aislamos la IA de tu inventario. Las consultas van a PostgreSQL. Si el talle 42 tiene stock 0, se bloquea la transacción.
                      </p>
                    </div>
                    
                    <div className="w-full md:w-2/3 h-[350px] flex items-center justify-center gap-6">
                      <div className="w-48 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden opacity-70">
                        <div className="bg-slate-100 border-b border-slate-200 px-3 py-2 text-[10px] font-bold text-slate-600 flex items-center gap-2">
                          <FileSpreadsheet className="w-3 h-3"/> inv_invierno.csv
                        </div>
                        <div className="p-3 font-mono text-[9px] text-slate-500 space-y-2">
                          <div className="border-b border-slate-100 pb-1 flex justify-between"><span>Buzo Over L</span><span>$25k</span></div>
                          <div className="border-b border-slate-100 pb-1 flex justify-between text-red-500 bg-red-50"><span>Jean Mom 40</span><span>Agotado</span></div>
                        </div>
                      </div>

                      <ArrowRight className="w-8 h-8 text-emerald-500 shrink-0" />

                      <div className="w-56 bg-slate-900 border border-emerald-500/30 rounded-xl shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[8px] font-bold px-2 py-1 rounded-bl-lg">ACID SYNC</div>
                        <div className="bg-slate-800 border-b border-slate-700 px-3 py-2 text-[10px] font-bold text-emerald-400 flex items-center gap-2">
                          <Database className="w-3 h-3"/> public.indumentaria
                        </div>
                        <div className="p-4 space-y-3 font-mono text-[10px] text-slate-300">
                          <div className="border-b border-slate-700 pb-1 flex justify-between items-center">
                            <span>buzo_over_L</span><span className="bg-emerald-900/50 text-emerald-400 px-1 rounded">Stock: 5</span>
                          </div>
                          <div className="border-b border-slate-700 pb-1 flex justify-between items-center">
                            <span className="text-slate-500">jean_mom_40</span><span className="bg-red-900/50 text-red-400 px-1 rounded font-bold">BLOCK (0)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SLIDE 3: LANGGRAPH */}
                {activeTab === 3 && (
                  <div className="w-full flex flex-col md:flex-row items-center gap-12 max-w-5xl">
                    <div className="w-full md:w-1/3 bg-white/80 backdrop-blur p-6 rounded-2xl border border-slate-100 shadow-sm z-20">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">El Vendedor Digital</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Construimos grafos de estado. El agente entiende cuando el cliente está averiguando ("tenés camperas?") y cuándo está cerrando la compra ("pasame link de la negra M").
                      </p>
                    </div>
                    
                    <div className="w-full md:w-2/3 h-[350px] relative flex items-center justify-center">
                      <div className="relative w-[550px] h-[300px]">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 550 300">
                          <path d="M 120 150 L 200 150" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                          <motion.circle r="3" fill="#3b82f6" animate={{ cx: [120, 200] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} cy="150" />
                          
                          <path d="M 360 150 L 390 150 L 390 65 L 410 65" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M 360 150 L 410 150" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M 360 150 L 390 150 L 390 235 L 410 235" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinejoin="round" />

                          <motion.circle r="3" fill="#3b82f6" animate={{ offsetDistance: ["0%", "100%"] }} transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.5 }} style={{ offsetPath: "path('M 360 150 L 390 150 L 390 65 L 410 65')" }} />
                        </svg>

                        <div className="absolute left-[20px] top-[125px] w-[100px] h-[50px] bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col justify-center items-center">
                          <div className="flex items-center gap-1 text-[9px] font-bold text-slate-500 mb-1">
                            <ShieldCheck className="w-3 h-3 text-emerald-500" /> WhatsApp
                          </div>
                          <span className="text-[8px] italic text-slate-400">"Quiero la negra M"</span>
                        </div>

                        <div className="absolute left-[200px] top-[110px] w-[160px] h-[80px] bg-white border-2 border-blue-500 rounded-xl shadow-lg flex flex-col justify-center items-center">
                          <img src={LOGOS.langgraph} alt="LangGraph" className="w-5 h-5 mb-2 grayscale" />
                          <span className="text-[10px] font-bold text-blue-700 tracking-wide uppercase">ReAct Agent</span>
                          <span className="text-[8px] text-slate-400 mt-1">Detectando intención...</span>
                        </div>

                        <div className="absolute left-[410px] top-[40px] w-[140px] h-[50px] bg-blue-50 border-2 border-blue-400 rounded-lg shadow-md flex items-center justify-between px-3">
                          <span className="text-[9px] font-bold text-blue-700 font-mono">consultar_talles()</span>
                          <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2 h-2 bg-blue-500 rounded-full" />
                        </div>

                        <div className="absolute left-[410px] top-[125px] w-[140px] h-[50px] bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col justify-center px-3 opacity-60">
                          <span className="text-[9px] font-bold text-slate-500 font-mono">generar_link_pago()</span>
                        </div>

                        <div className="absolute left-[410px] top-[210px] w-[140px] h-[50px] bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col justify-center px-3 opacity-60">
                          <span className="text-[9px] font-bold text-slate-500 font-mono">asistencia_humana()</span>
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

      {/* ==========================================
          3. CTA FINAL (VOICEFLOW ENTERPRISE STYLE)
          ========================================== */}
      <section className="bg-[#18181b] pt-24 border-t border-slate-200 relative overflow-hidden flex flex-col">
        
        <div className="max-w-7xl mx-auto px-6 w-full mb-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="text-[#FF5C35] font-semibold text-sm tracking-wide mb-4 block">
              E-commerce Autónomo
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 tracking-tight">
              Diseñado para escalar tu tienda de ropa
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl leading-relaxed">
              ClapWise ayuda a marcas de indumentaria a despachar pedidos 24/7 de forma segura, resolviendo las consultas de stock, talles y envíos por WhatsApp e Instagram.
            </p>
            <a href="https://calendly.com/TU-ENLACE-REAL" target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="bg-[#3B82F6] hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition-colors flex items-center gap-2">
                Agendar integración con tu tienda <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </motion.div>
        </div>

        <div className="border-t border-white/10 relative bg-[#13151A] flex-1">
          
          <div className="absolute inset-x-0 top-0 h-48 overflow-hidden pointer-events-none opacity-20">
            <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,300 C300,100 700,100 1000,300" fill="none" stroke="#94a3b8" strokeWidth="1" />
              <path d="M-200,300 C200,50 800,50 1200,300" fill="none" stroke="#94a3b8" strokeWidth="1" />
              <path d="M200,300 C500,0 900,0 1300,300" fill="none" stroke="#94a3b8" strokeWidth="1" />
              <path d="M400,300 C700,-50 1100,-50 1500,300" fill="none" stroke="#94a3b8" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 border-x border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 lg:p-10 hover:bg-white/[0.02] transition-colors"
              >
                <h4 className="text-white font-bold text-sm mb-3">Protección de reputación</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Aislamos al agente. Tu negocio nunca más ofrecerá descuentos inventados ni confirmará prendas agotadas.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 lg:p-10 hover:bg-white/[0.02] transition-colors"
              >
                <h4 className="text-white font-bold text-sm mb-3">Ingesta de PDFs y Excels</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  ¿Tu proveedor te manda un PDF desordenado? Lo subís a ClapWise y en segundos está estructurado para vender.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
                className="p-8 lg:p-10 hover:bg-white/[0.02] transition-colors"
              >
                <h4 className="text-white font-bold text-sm mb-3">Ventas Omnicanal</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Un solo cerebro centralizado. El mismo agente atiende tus DMs de Instagram y tus mensajes de WhatsApp al instante.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
                className="p-8 lg:p-10 hover:bg-white/[0.02] transition-colors"
              >
                <h4 className="text-white font-bold text-sm mb-3">Derivación humana</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  El agente sabe cuándo retirarse. Si un cliente hace una queja compleja, pausa la automatización y te avisa.
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}