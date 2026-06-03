"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowRight, Database, Code2, ShieldCheck, Activity, FileSpreadsheet
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
  { id: "entropia", title: "Filtro de Entropía", logo: LOGOS.python, color: "text-blue-600", border: "border-blue-500" },
  { id: "tensores", title: "Tensores Semánticos", logo: LOGOS.gemini, color: "text-purple-600", border: "border-purple-500" },
  { id: "db", title: "Verdad Relacional", logo: LOGOS.supabase, color: "text-emerald-600", border: "border-emerald-500" },
  { id: "langgraph", title: "Orquestación ReAct", logo: LOGOS.langgraph, color: "text-orange-600", border: "border-orange-500" }
]

// ==========================================
// COMPONENTES CANVAS (RENDERIZADO NATIVO 2D)
// ==========================================

// 1. Puente de Einstein-Rosen (Entropía)
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

// 2. Red Neuronal (Tensores)
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

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <main className="min-h-screen bg-[#F8FAFC] selection:bg-[#427AA1]/20 font-sans text-slate-900">
      <Header />

      {/* ==========================================
          1. HERO SECTION (TEXTO IZQ / IMAGEN DER)
          ========================================== */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 max-w-7xl mx-auto border-b border-slate-200">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
            >
              Orquestación pura. <br />
              <span className="text-[#427AA1]">Cero alucinaciones.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 font-medium leading-relaxed"
            >
              Explorá el pipeline de datos detrás de ClapWise. Diseñamos un flujo donde la matemática estricta aísla al modelo de lenguaje para garantizar precisión absoluta en cada venta.
            </motion.p>
          </div>

          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <img 
                src="/waves.jpg" 
                alt="Paisaje Elegante Minimalista" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00324D]/20 to-transparent mix-blend-overlay" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ==========================================
          2. INTERACTIVE SLIDESHOW (VOICEFLOW STYLE)
          ========================================== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-slate-900">El Pipeline de Datos</h2>
            <p className="text-slate-500 mt-2">Cómo convertimos un Excel desordenado en un agente autónomo.</p>
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
            
            {/* Grilla de puntos estilo Canvas */}
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

                {/* SLIDE 0: ENTROPÍA */}
                {activeTab === 0 && (
                  <div className="w-full flex flex-col md:flex-row items-center gap-12 max-w-5xl">
                    <div className="w-full md:w-1/3 bg-white/80 backdrop-blur p-6 rounded-2xl border border-slate-100 shadow-sm">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">El Demonio de Maxwell</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Al igual que la gravedad curva el tejido del espacio-tiempo, nuestro script de Python atrae y comprime datos caóticos. Extrae el nombre, precio y stock, devolviendo una estructura JSON pura y de baja entropía.
                      </p>
                    </div>
                    
                    <div className="w-full md:w-2/3 h-[400px] relative bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-inner">
                      <WormholeCanvas />
                      
                      {/* Flujo Visual */}
                      <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-8">
                        <div className="bg-white/90 backdrop-blur p-3 rounded-xl border border-red-200 text-[10px] font-mono text-red-700 shadow-lg -rotate-6">
                          "zapas nike rotas t40 $12mil"
                        </div>
                        <div className="bg-slate-900/95 backdrop-blur p-4 rounded-xl border border-slate-700 text-xs font-mono text-blue-300 shadow-2xl">
                          <span className="text-slate-500">{"{"}</span><br/>
                          &nbsp;<span className="text-blue-400">"nombre"</span>: <span className="text-green-400">"zapatilla_nike"</span>,<br/>
                          &nbsp;<span className="text-blue-400">"stock"</span>: <span className="text-orange-400">0</span><br/>
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
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Vectorización Espacial</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Traducimos descripciones a coordenadas matemáticas en un espacio de 768 dimensiones. Así el sistema entiende que "Zapatilla" y "Deportiva" conforman un clúster matemático de alta densidad.
                      </p>
                    </div>
                    
                    <div className="w-full md:w-2/3 h-[400px] relative bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-inner">
                      <TensorNetworkCanvas />
                      
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur border border-slate-200 p-4 rounded-2xl shadow-xl text-center">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Tensor Generado</div>
                        <div className="font-mono text-xs md:text-sm text-purple-700">
                          [0.142, -0.891, 0.334, ... 0.99]
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SLIDE 2: DATABASE */}
                {activeTab === 2 && (
                  <div className="w-full flex flex-col md:flex-row items-center gap-12 max-w-5xl">
                    <div className="w-full md:w-1/3 bg-white/80 backdrop-blur p-6 rounded-2xl border border-slate-100 shadow-sm">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Verdad Relacional</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Aislamos la IA del inventario. La consulta se resuelve de forma determinista en PostgreSQL. Si el stock indica 0, es matemáticamente imposible que el bot ofrezca el producto.
                      </p>
                    </div>
                    
                    <div className="w-full md:w-2/3 h-[350px] flex items-center justify-center gap-6">
                      
                      {/* Antes (Excel) */}
                      <div className="w-48 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden opacity-70">
                        <div className="bg-slate-100 border-b border-slate-200 px-3 py-2 text-[10px] font-bold text-slate-600 flex items-center gap-2">
                          <FileSpreadsheet className="w-3 h-3"/> inventario.csv
                        </div>
                        <div className="p-3 font-mono text-[9px] text-slate-500 space-y-2">
                          <div className="border-b border-slate-100 pb-1 flex justify-between"><span>Remera Azul</span><span>$15.000</span></div>
                          <div className="border-b border-slate-100 pb-1 flex justify-between text-red-500 bg-red-50"><span>Jean roto</span><span>???</span></div>
                        </div>
                      </div>

                      <ArrowRight className="w-8 h-8 text-emerald-500 shrink-0" />

                      {/* Después (Supabase) */}
                      <div className="w-56 bg-slate-900 border border-emerald-500/30 rounded-xl shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[8px] font-bold px-2 py-1 rounded-bl-lg">ACID SYNC</div>
                        <div className="bg-slate-800 border-b border-slate-700 px-3 py-2 text-[10px] font-bold text-emerald-400 flex items-center gap-2">
                          <Database className="w-3 h-3"/> public.productos
                        </div>
                        <div className="p-4 space-y-3 font-mono text-[10px] text-slate-300">
                          <div className="border-b border-slate-700 pb-1 flex justify-between items-center">
                            <span>remera_azul</span><span className="bg-emerald-900/50 text-emerald-400 px-1 rounded">Stock: 5</span>
                          </div>
                          <div className="border-b border-slate-700 pb-1 flex justify-between items-center">
                            <span className="text-slate-500">jean</span><span className="bg-red-900/50 text-red-400 px-1 rounded font-bold">BLOCK (0)</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* SLIDE 3: LANGGRAPH (DIAGRAMA ORTOGONAL LIMPIO) */}
                {activeTab === 3 && (
                  <div className="w-full flex flex-col md:flex-row items-center gap-12 max-w-5xl">
                    <div className="w-full md:w-1/3 bg-white/80 backdrop-blur p-6 rounded-2xl border border-slate-100 shadow-sm z-20">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Enrutamiento ReAct</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        No usamos un chat lineal. Construimos grafos de estado. El agente "piensa", blinda la intención del usuario y decide con qué herramienta de base de datos interactuar para cerrar la venta.
                      </p>
                    </div>
                    
                    {/* Lienzo de Nodos Fijo y Perfecto */}
                    <div className="w-full md:w-2/3 h-[350px] relative flex items-center justify-center">
                      
                      {/* Contenedor de medidas absolutas para que las líneas SVG jamás se rompan */}
                      <div className="relative w-[550px] h-[300px]">
                        
                        {/* Conectores Ortogonales SVG */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 550 300">
                          {/* Input to Router */}
                          <path d="M 120 150 L 200 150" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                          <motion.circle r="3" fill="#3b82f6" animate={{ cx: [120, 200] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} cy="150" />
                          
                          {/* Router to Tools (Routing Ortogonal) */}
                          <path d="M 360 150 L 390 150 L 390 65 L 410 65" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M 360 150 L 410 150" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M 360 150 L 390 150 L 390 235 L 410 235" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinejoin="round" />

                          {/* Partícula activa */}
                          <motion.circle r="3" fill="#3b82f6" animate={{ offsetDistance: ["0%", "100%"] }} transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.5 }} style={{ offsetPath: "path('M 360 150 L 410 150')" }} />
                        </svg>

                        {/* Nodo 1: Input */}
                        <div className="absolute left-[20px] top-[125px] w-[100px] h-[50px] bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col justify-center items-center">
                          <div className="flex items-center gap-1 text-[9px] font-bold text-slate-500 mb-1">
                            <ShieldCheck className="w-3 h-3 text-emerald-500" /> Input User
                          </div>
                        </div>

                        {/* Nodo 2: Router */}
                        <div className="absolute left-[200px] top-[110px] w-[160px] h-[80px] bg-white border-2 border-blue-500 rounded-xl shadow-lg flex flex-col justify-center items-center">
                          <img src={LOGOS.langgraph} alt="LangGraph" className="w-5 h-5 mb-2 grayscale" />
                          <span className="text-[10px] font-bold text-blue-700 tracking-wide uppercase">ReAct Agent Router</span>
                          <span className="text-[8px] text-slate-400 mt-1">Evaluando intención...</span>
                        </div>

                        {/* Nodo 3: Tool Top */}
                        <div className="absolute left-[410px] top-[40px] w-[140px] h-[50px] bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col justify-center px-3 opacity-60">
                          <span className="text-[9px] font-bold text-slate-500 font-mono">1. asistencia_humana()</span>
                        </div>

                        {/* Nodo 4: Tool Mid (Active) */}
                        <div className="absolute left-[410px] top-[125px] w-[140px] h-[50px] bg-blue-50 border-2 border-blue-400 rounded-lg shadow-md flex items-center justify-between px-3">
                          <span className="text-[9px] font-bold text-blue-700 font-mono">2. consultar_db()</span>
                          <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2 h-2 bg-blue-500 rounded-full" />
                        </div>

                        {/* Nodo 5: Tool Bot */}
                        <div className="absolute left-[410px] top-[210px] w-[140px] h-[50px] bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col justify-center px-3 opacity-60">
                          <span className="text-[9px] font-bold text-slate-500 font-mono">3. generar_link()</span>
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
        
        {/* Upper part: Header CTA */}
        <div className="max-w-7xl mx-auto px-6 w-full mb-16 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6  tracking-tight">
              Diseñado para precisión y escala comercial
            </h2>
            <p className="text-slate-400 text-lg  mb-8 max-w-2xl leading-relaxed">
              ClapWise ayuda a negocios y equipos de e-commerce a construir, desplegar y gestionar agentes de IA conversacionales de forma segura, determinista y a gran escala.
            </p>
            <a href="https://calendly.com/TU-ENLACE-REAL" target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="bg-[#F3F4F6] text-[#18181b] hover:bg-[#427AA1] font-medium px-6 py-3 rounded-full transition-colors flex items-center gap-2">
                Agendar evaluación técnica <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>

        {/* Lower part: Feature Grid with faint waves */}
        <div className="border-t border-white/10 relative bg-[#13151A] flex-1">
          
          {/* Faint Background Waves (SVG) */}
          <div className="absolute inset-x-0 top-0 h-48 overflow-hidden pointer-events-none opacity-20">
            <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,300 C300,100 700,100 1000,300" fill="none" stroke="#94a3b8" strokeWidth="1" />
              <path d="M-200,300 C200,50 800,50 1200,300" fill="none" stroke="#94a3b8" strokeWidth="1" />
              <path d="M200,300 C500,0 900,0 1300,300" fill="none" stroke="#94a3b8" strokeWidth="1" />
              <path d="M400,300 C700,-50 1100,-50 1500,300" fill="none" stroke="#94a3b8" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 border-x border-white/10">
            {/* Grid structure matching the image: 4 columns, separated by thin borders */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              
              {/* Feature 1 */}
              <div className="p-8 lg:p-10 hover:bg-white/[0.02] transition-colors">
                <h4 className="text-white font-bold text-sm mb-3">Protección de marca</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Aislamos al agente de prompts maliciosos. Construí un ecosistema donde tu reputación y tus precios están 100% blindados de forma centralizada.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="p-8 lg:p-10 hover:bg-white/[0.02] transition-colors">
                <h4 className="text-white font-bold text-sm mb-3">Despliegue inmediato</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Acelerá tu salida al mercado. Ingesta automatizada de catálogos caóticos para escalar eficientemente hacia nuevos casos de uso.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="p-8 lg:p-10 hover:bg-white/[0.02] transition-colors">
                <h4 className="text-white font-bold text-sm mb-3">Agnóstico y modular</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Apostá por la IA, no por un único proveedor. Adaptamos los LLMs a la tecnología que mejor funcione para el volumen de tu negocio.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-8 lg:p-10 hover:bg-white/[0.02] transition-colors">
                <h4 className="text-white font-bold text-sm mb-3">Orquestación auditable</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  No es una caja negra. Monitoreá cada decisión del agente gracias a nuestro diseño de grafos de estado con guardrails estrictos.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section> 

      <Footer />
    </main>
  )
}