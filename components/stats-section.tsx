"use client"
import { useEffect, useState } from "react"

// Hook modificado para aceptar prefijos y sufijos (ej: "<" y "s" o "%")
function useCountUp(end: number, duration = 2000, prefix = "", suffix = "") {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Función de easing (suavizado al final)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, hasStarted])

  return { value: `${prefix}${count}${suffix}`, start: () => setHasStarted(true), hasStarted }
}

export default function IntegrationSection() {
  const [isVisible, setIsVisible] = useState(false)

  // Configuramos los contadores según tus requerimientos
  const responseTime = useCountUp(5, 2500, ">", "s")
  const syncPercentage = useCountUp(100, 2500, "", "%")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          responseTime.start()
          syncPercentage.start()
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById("integration-stats")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [isVisible, responseTime, syncPercentage])

  // Palabras flotantes sobre la imagen
  const floatingWords = [
    { text: "Conexión API", top: "15%", left: "60%", delay: "0s" },
    { text: "Lectura de Stock", top: "30%", left: "35%", delay: "1s" },
    { text: "Atención al Cliente", top: "50%", left: "15%", delay: "0.5s" },
    { text: "Manejo de Objeciones", top: "65%", left: "40%", delay: "2s" },
    { text: "Optimización", top: "80%", left: "25%", delay: "1.5s" },
    { text: "Crecimiento", top: "85%", left: "65%", delay: "0.8s" },
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');
        
        .font-manrope {
          font-family: 'Manrope', sans-serif;
        }

        @keyframes floatText {
          0% { transform: translateY(0px); opacity: 0.8; }
          50% { transform: translateY(-10px); opacity: 1; text-shadow: 0 0 8px rgba(255,255,255,0.5); }
          100% { transform: translateY(0px); opacity: 0.8; }
        }

        .animate-float {
          animation: floatText 4s ease-in-out infinite;
        }
      `}} />

      <section className="py-24 px-6 bg-[#f9fafb] font-manrope text-gray-800">
        <div className="max-w-6xl mx-auto">
          
          {/* Título Principal Centrado */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Integración invisible.<br />
              Cero dolores de cabeza.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Columna Izquierda: Imagen + Letras Flotantes */}
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-lg bg-gray-200">
              {/* Aquí colocas la ruta de tu imagen real */}
              <img 
                src="/safari.jpg" 
                alt="Representación del sistema" 
                className="w-full h-full object-cover"
              />
              
              {/* Capa superpuesta para las palabras flotantes */}
              <div className="absolute inset-0 pointer-events-none">
                {floatingWords.map((word, idx) => (
                  <span 
                    key={idx}
                    className="absolute font-mono text-sm md:text-base text-white/90 animate-float tracking-wider drop-shadow-md"
                    style={{ 
                      top: word.top, 
                      left: word.left, 
                      animationDelay: word.delay 
                    }}
                  >
                    {word.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Columna Derecha: Contenido y Estadísticas */}
            <div className="flex flex-col justify-center">
              
              {/* Etiqueta */}
              <div className="mb-6">
                <span className="inline-block bg-white border border-gray-100 text-gray-700 px-4 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                  Despliegue Rápido
                </span>
              </div>

              {/* Textos */}
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                De tu web a WhatsApp<br />
                en menos de 48 horas.
              </h3>
              
              <div className="text-gray-600 space-y-5 mb-10 text-base md:text-lg">
                <p>
                  Diseñamos nuestra infraestructura para que no tengas que migrar de plataforma ni enseñarle a tu equipo a usar software complejo. Nos conectamos directamente al backend de tu tienda (Tiendanube, Shopify o WooCommerce).
                </p>
                <p>
                  Vos seguís gestionando tu negocio como siempre. El agente absorbe tus políticas de envío, métodos de pago y lee el catálogo en tiempo real. Nosotros nos encargamos de los servidores; vos solo de despachar las ventas.
                </p>
              </div>

              {/* Componentes de Estadísticas */}
              <div id="integration-stats" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Caja Estadística 1 */}
                <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {responseTime.value}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    Tiempo de respuesta
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    El cliente no espera,<br />la venta no se enfría.
                  </p>
                </div>

                {/* Caja Estadística 2 */}
                <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {syncPercentage.value}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    Sincronizado al catálogo
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Precios y stock<br />actualizados al milisegundo.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}