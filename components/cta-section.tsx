"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

  export default function CTASection() {
  const [isMounted, setIsMounted] = useState(false)
  
  // Estados para el Widget Interactivo
  const [widgetMessages, setWidgetMessages] = useState([
    { role: "bot", text: "¡Hola! Soy el agente de prueba de ClapWise. ¿Qué te gustaría saber sobre nuestro sistema?" }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [showOptions, setShowOptions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Auto-scroll del widget
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [widgetMessages, isTyping])

  if (!isMounted) return null

  // Función para manejar la interacción del visitante con el widget
  const handleUserClick = (text: string, response: string) => {
    setShowOptions(false)
    setWidgetMessages(prev => [...prev, { role: "user", text }])
    setIsTyping(true)
    
    setTimeout(() => {
      setIsTyping(false)
      setWidgetMessages(prev => [...prev, { role: "bot", text: response }])
      
      setTimeout(() => setShowOptions(true), 1500)
    }, 1500)
  }

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Fondo con brillo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#427AA1]/10 to-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Cabecera */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-foreground">
            Siente la diferencia de un <span className="text-[#427AA1]">vendedor real.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Humanizamos la automatización. Tus clientes sienten que hablan con un experto que conoce tu stock a la perfección, sin importar la hora.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-6">

          {/* ==========================================
              CAJA 1: VENTAS A LAS 4 AM (Con Mini Banner)
              ========================================== */}
          <div className="bg-secondary/20 border border-border/50 backdrop-blur-sm rounded-3xl flex flex-col overflow-hidden relative group">
            
            {/* Mini Banner: Ciudad de Noche */}
            <div className="w-full h-32 sm:h-40 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop" 
                alt="Ciudad de noche" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
              />
              {/* Degradado para que se funda con la tarjeta */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            </div>

            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 flex flex-col justify-between flex-1">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">Ventas a las 04:00 AM</h3>
                <p className="text-sm text-muted-foreground">Capturá a los noctámbulos. ClapWise cierra ventas con link de pago mientras vos descansás.</p>
              </div>

              {/* Chat Animado */}
              <div className="flex flex-col gap-4 mt-auto">
                {/* Usuario */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                  className="flex items-end gap-2 self-end"
                >
                  <div className="bg-muted text-foreground text-xs p-3 rounded-2xl rounded-br-sm shadow-sm max-w-[220px]">
                    Acabo de realizar el pago con la tarjeta por la campera, ¡gracias!
                  </div>
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Usuario" className="w-6 h-6 rounded-full object-cover" />
                </motion.div>

                {/* Bot */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 }}
                  className="flex items-end gap-2 self-start"
                >
                  <div className="w-6 h-6 rounded-full bg-[#427AA1] flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="bg-[#427AA1] text-white text-xs p-3 rounded-2xl rounded-bl-sm shadow-sm max-w-[220px]">
                    ¡Pago confirmado Martín! 🎉 Tu pedido ya está separado y se despacha hoy mismo a las 09:00 AM.
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* ==========================================
              CAJA 2: EL VENDEDOR NATO (Con Mini Banner)
              ========================================== */}
          <div className="bg-secondary/20 border border-border/50 backdrop-blur-sm rounded-3xl flex flex-col overflow-hidden relative group">
            
            {/* Mini Banner: Nieve/Montaña */}
            <div className="w-full h-32 sm:h-40 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1478265409131-1f65c88f965c?q=80&w=800&auto=format&fit=crop" 
                alt="Paisaje de nieve en Bariloche" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
              />
              {/* Degradado para que se funda con la tarjeta */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            </div>

            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 flex flex-col justify-between flex-1">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">Vendedor Consultivo</h3>
                <p className="text-sm text-muted-foreground">Genera empatía, entiende el contexto (como el frío de la Patagonia) y aplica urgencia de venta.</p>
              </div>

              {/* Chat Animado */}
              <div className="flex flex-col gap-4 mt-auto">
                {/* Usuario */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                  className="flex items-end gap-2 self-end"
                >
                  <div className="bg-muted text-foreground text-xs p-3 rounded-2xl rounded-br-sm shadow-sm max-w-[220px]">
                    Busco algo para la nieve, me voy a Bariloche la semana que viene.
                  </div>
                  <img src="https://i.pravatar.cc/150?u=4" alt="Usuaria" className="w-6 h-6 rounded-full object-cover" />
                </motion.div>

                {/* Bot */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.5 }}
                  className="flex items-end gap-2 self-start"
                >
                  <div className="w-6 h-6 rounded-full bg-[#427AA1] flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="bg-[#427AA1] text-white text-xs p-3 rounded-2xl rounded-bl-sm shadow-sm max-w-[220px]">
                    ¡Qué lindo viaje Sofi! 🏔️ Para el frío allá te recomiendo el modelo Alpine. Es térmica. <strong className="font-bold">Me queda la última en talle M</strong>, ¿te paso el link para asegurarla?
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

        </div>

        {/* ==========================================
            BANNER WIDGET INTERACTIVO (TEMA CLARO)
            ========================================== */}
        <div className="w-full bg-[#F8FAFC] border border-gray-200 rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-xl relative overflow-hidden">
          
          {/* Lado Izquierdo: Textos y CTA */}
          <div className="flex-1 z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Interactuá con tu <br className="hidden md:block"/> futuro vendedor.
            </h3>
            <p className="text-gray-600 mb-8 max-w-md text-base leading-relaxed">
              Tocá alguna de las opciones en el widget y mirá cómo ClapWise responde en tiempo real. Imaginá esto mismo, pero conectado al stock de tu negocio.
            </p>
            <Button size="lg" className="h-12 px-8 bg-[#00324D] text-white hover:bg-[#427AA1] font-semibold rounded-xl shadow-lg transition-all hover:scale-105">
              Ver planes de integración
            </Button>
          </div>

          {/* Lado Derecho: El Widget Interactivo */}
          <div className="w-full lg:w-[400px] h-[400px] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10">
            
            {/* Header Widget */}
            <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3 shadow-sm z-10">
              <div className="relative">
                <div className="w-10 h-10 bg-[#427AA1] rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Agente ClapWise</h4>
                <p className="text-[11px] text-green-600 font-medium">En línea</p>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-gray-50 p-4 overflow-y-auto flex flex-col gap-4 scrollbar-hide">
              <AnimatePresence>
                {widgetMessages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`text-sm px-4 py-2.5 max-w-[85%] ${
                      msg.role === 'user' 
                        ? 'bg-[#00324D] text-white rounded-2xl rounded-tr-sm shadow-sm' 
                        : 'bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-tl-sm shadow-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                
                {/* Animación Escribiendo */}
                {isTyping && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Opciones Interactivas (Input Area) */}
            <div className="bg-white border-t border-gray-100 p-3">
              {showOptions ? (
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => handleUserClick("¿Cómo evitan equivocarse con el stock?", "Usamos arquitectura híbrida. Cada vez que pregunto algo, verifico tu base de datos mediante álgebra relacional. Cero alucinaciones.")}
                    className="text-xs bg-blue-50 hover:bg-blue-100 text-[#00324D] border border-blue-100 py-2 px-3 rounded-lg text-left transition-colors font-medium"
                  >
                    ¿Cómo evitan equivocarse con el stock?
                  </button>
                  <button 
                    onClick={() => handleUserClick("¿Tengo que armar un Excel complicado?", "¡Para nada! Me pasás tu catálogo en un PDF, o listas desordenadas por WhatsApp y yo lo ordeno y vectorizo solo.")}
                    className="text-xs bg-blue-50 hover:bg-blue-100 text-[#00324D] border border-blue-100 py-2 px-3 rounded-lg text-left transition-colors font-medium"
                  >
                    ¿Tengo que armar un Excel complicado?
                  </button>
                </div>
              ) : (
                <div className="h-[76px] flex items-center justify-center">
                  <span className="text-xs text-gray-400 animate-pulse">Esperando respuesta...</span>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}