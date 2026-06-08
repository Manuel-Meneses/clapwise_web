"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, CreditCard, HeadphonesIcon, CheckCheck, Phone, Video, MoreVertical, Info, ChevronLeft } from "lucide-react"

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

  // Generador de estrellas fugaces (meteoros)
  const meteors = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 2 + 3}s`,
  }))

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
        .font-manrope { font-family: 'Manrope', sans-serif; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        /* Animación para la lluvia de estrellas sobre fondo blanco */
        @keyframes meteor {
          0% { transform: rotate(215deg) translateX(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: rotate(215deg) translateX(-800px); opacity: 0; }
        }
        .meteor-shower {
          position: absolute;
          width: 2px;
          height: 60px;
          background: linear-gradient(to bottom, rgba(156, 163, 175, 0.4), transparent);
          animation: meteor linear infinite;
          border-radius: 999px;
        }
      `}} />

      <section className="py-24 bg-white relative overflow-hidden font-manrope text-gray-800">
        
        {/* Lluvia de estrellas sutil (Meteors) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
          {meteors.map((meteor) => (
            <div
              key={meteor.id}
              className="meteor-shower"
              style={{
                top: meteor.top,
                left: meteor.left,
                animationDelay: meteor.delay,
                animationDuration: meteor.duration,
              }}
            />
          ))}
        </div>

        {/* Resplandor sutil central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-100/40 to-purple-100/40 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* Cabecera */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gray-900">
              Siente la diferencia de un <span className="text-[#427AA1]">vendedor real.</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Humanizamos la automatización. Tus clientes interactúan con un experto que conoce tu stock, cierra ventas al instante y sabe cuándo pedir ayuda.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12">

            {/* ==========================================
                CAJA 1: PROACTIVIDAD COMERCIAL (WHATSAPP)
                ========================================== */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-3xl flex flex-col overflow-hidden relative group hover:shadow-md transition-shadow duration-300">
              
              <div className="p-6 md:p-8 flex flex-col z-10">
                <div className="mb-6 relative">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Proactividad Comercial</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    El agente no se queda esperando. Identifica intenciones de compra claras, genera los links de pago al instante y cierra la venta antes de que el cliente se enfríe.
                  </p>
                </div>
              </div>

              {/* Interfaz Simulada de WhatsApp */}
              <div className="mt-auto bg-[#EFEAE2] border-t border-gray-200 flex-1 flex flex-col relative overflow-hidden h-64">
                {/* Cabecera de WhatsApp */}
                <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between shadow-sm z-10">
                  <div className="flex items-center gap-3">
                    <ChevronLeft className="w-5 h-5" />
                    <img src="https://i.pravatar.cc/150?u=a042581f4e29" alt="Cliente" className="w-8 h-8 rounded-full" />
                    <div>
                      <p className="text-sm font-semibold leading-none">Martín (Cliente)</p>
                      <p className="text-[10px] text-white/80 mt-1">en línea</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white/90">
                    <Video className="w-5 h-5" />
                    <Phone className="w-4 h-4" />
                    <MoreVertical className="w-5 h-5" />
                  </div>
                </div>

                {/* Área de Chat WhatsApp */}
                <div className="p-4 flex flex-col gap-3 overflow-y-auto scrollbar-hide">
                  {/* Mensaje Usuario (Entrante) */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white text-gray-900 text-sm py-2 px-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] relative">
                      ¡Me encanta el modelo de las zapatillas! ¿Cómo hago para comprarlas?
                      <span className="text-[10px] text-gray-400 float-right mt-2 ml-3">10:42</span>
                    </div>
                  </motion.div>

                  {/* Mensaje Bot (Saliente) */}
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1 }}
                    className="flex justify-end"
                  >
                    <div className="bg-[#D9FDD3] text-gray-900 text-sm py-2 px-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] relative">
                      ¡Excelente elección Martín! 🚀 Acá te dejo el link con el carrito ya armado para que asegures tu par.
                      <div className="mt-2 text-xs bg-white/60 p-2 rounded text-center font-semibold text-[#075E54]">
                        🔗 Pagar con MercadoPago
                      </div>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[10px] text-gray-500">10:42</span>
                        <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* ==========================================
                CAJA 2: TRANSICIÓN A HUMANOS (INSTAGRAM)
                ========================================== */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-3xl flex flex-col overflow-hidden relative group hover:shadow-md transition-shadow duration-300">
              
              <div className="p-6 md:p-8 flex flex-col z-10">
                <div className="mb-6 relative">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Transición Transparente</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Si un cliente requiere soporte especial, un cambio por garantía o hace una consulta atípica, el agente se detiene automáticamente y avisa a tu equipo sin fricciones.
                  </p>
                </div>
              </div>

              {/* Interfaz Simulada de Instagram */}
              <div className="mt-auto bg-white border-t border-gray-200 flex-1 flex flex-col relative overflow-hidden h-64">
                {/* Cabecera de Instagram */}
                <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between shadow-sm z-10">
                  <div className="flex items-center gap-3">
                    <ChevronLeft className="w-6 h-6 text-gray-900" />
                    <img src="https://i.pravatar.cc/150?u=4" alt="Usuario" className="w-8 h-8 rounded-full" />
                    <div>
                      <p className="text-sm font-bold text-gray-900 leading-none">sofi.martinez</p>
                      <p className="text-xs text-gray-500 mt-0.5">ClapWise Bot</p>
                    </div>
                  </div>
                  <Info className="w-6 h-6 text-gray-900" />
                </div>

                {/* Área de Chat Instagram */}
                <div className="p-4 flex flex-col gap-4 overflow-y-auto scrollbar-hide">
                  <div className="text-center text-[10px] text-gray-400 my-1">Hoy 15:30</div>
                  
                  {/* Mensaje Usuario (Gris - Otro Usuario) */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                    className="flex justify-start items-end gap-2"
                  >
                    <img src="https://i.pravatar.cc/150?u=4" alt="Usuario" className="w-6 h-6 rounded-full mb-1" />
                    <div className="bg-[#EFEFEF] text-black text-sm py-2.5 px-4 rounded-3xl max-w-[75%]">
                      Hola, el producto llegó bien pero me queda chico. ¿Cómo es el proceso de cambio?
                    </div>
                  </motion.div>

                  {/* Mensaje Bot (Degradado - Nosotros) */}
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1.5 }}
                    className="flex justify-end"
                  >
                    <div className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white text-sm py-2.5 px-4 rounded-3xl max-w-[80%]">
                      Entiendo Sofi. Para gestiones de cambio te voy a transferir con un asesor humano para darte una solución. ¡Un momento por favor! 🧑‍💻
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

          </div>

          {/* ==========================================
              BANNER WIDGET INTERACTIVO
              ========================================== */}
          <div className="w-full bg-white border border-gray-200 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-xl relative overflow-hidden">
            
            <div className="flex-1 z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
                Interactuá con tu <br className="hidden lg:block"/> futuro vendedor.
              </h3>
              <p className="text-gray-600 mb-8 max-w-md text-lg leading-relaxed">
                Tocá alguna de las opciones en el widget y mirá cómo ClapWise responde en tiempo real. Imaginá esto mismo, pero conectado al stock de tu negocio.
              </p>
              <Button size="lg" className="h-14 px-8 text-base bg-[#00324D] text-white hover:bg-[#427AA1] font-bold rounded-xl shadow-md transition-all hover:-translate-y-1">
                Ver planes de integración
              </Button>
            </div>

            {/* Widget Interactivo */}
            <div className="w-full lg:w-[420px] h-[450px] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10">
              
              <div className="bg-[#00324D] px-5 py-4 flex items-center gap-4 shadow-sm z-10">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-[#00324D] rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Agente ClapWise</h4>
                  <p className="text-xs text-blue-200 font-medium mt-0.5">En línea</p>
                </div>
              </div>

              <div className="flex-1 bg-gray-50/80 p-5 overflow-y-auto flex flex-col gap-5 scrollbar-hide">
                <AnimatePresence>
                  {widgetMessages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`text-sm md:text-base px-4 py-3 max-w-[85%] leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-[#00324D] text-white rounded-2xl rounded-tr-sm shadow-sm' 
                          : 'bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-tl-sm shadow-sm'
                      }`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div 
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>

              <div className="bg-white border-t border-gray-100 p-4">
                {showOptions ? (
                  <div className="flex flex-col gap-2.5">
                    <button 
                      onClick={() => handleUserClick("¿Cómo evitan equivocarse con el stock?", "Usamos arquitectura híbrida. Cada vez que pregunto algo, verifico tu base de datos en tiempo real. Cero alucinaciones.")}
                      className="text-sm bg-gray-50 hover:bg-[#f0f7ff] text-gray-700 hover:text-[#00324D] border border-gray-200 hover:border-blue-200 py-3 px-4 rounded-xl text-left transition-all font-semibold shadow-sm"
                    >
                      ¿Cómo evitan equivocarse con el stock?
                    </button>
                    <button 
                      onClick={() => handleUserClick("¿Tengo que armar un Excel complicado?", "¡Para nada! Me pasás tu catálogo en un PDF, o listas desordenadas por WhatsApp y yo lo ordeno y vectorizo solo.")}
                      className="text-sm bg-gray-50 hover:bg-[#f0f7ff] text-gray-700 hover:text-[#00324D] border border-gray-200 hover:border-blue-200 py-3 px-4 rounded-xl text-left transition-all font-semibold shadow-sm"
                    >
                      ¿Tengo que armar un Excel complicado?
                    </button>
                  </div>
                ) : (
                  <div className="h-[114px] flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-400 animate-pulse flex items-center gap-2">
                      <Bot className="w-4 h-4" /> Generando respuesta...
                    </span>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}