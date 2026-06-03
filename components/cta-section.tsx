"use client"

import { ArrowRight, Moon, Zap, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const roiCards = [
  {
    title: "Ventas a las 04:15 AM",
    description: "Mientras tu competencia duerme, ClapWise cerró 3 ventas asuntivas por $145.000 sin intervención humana.",
    icon: Moon,
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
    metric: "+32%",
    metricLabel: "Facturación Nocturna"
  },
  {
    title: "Picos de Tráfico (HotSale)",
    description: "Atendió 450 consultas simultáneas durante una campaña agresiva. Cero tiempo de espera, cero ventas perdidas.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    metric: "0s",
    metricLabel: "Tiempo de Respuesta"
  },
  {
    title: "Retorno Inmediato",
    description: "El costo total de la infraestructura se cubrió únicamente con los carritos recuperados durante el primer fin de semana.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    metric: "14x",
    metricLabel: "ROI Promedio"
  }
]

export function CTASection() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 border-t border-[#D1D5DB]/30">
      <div className="max-w-6xl mx-auto">
        
        {/* TÍTULO PRINCIPAL MINIMALISTA */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-[#192832] mb-6 tracking-tight"
          >
            Rentabilidad ininterrumpida.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#4C4B4B] text-lg max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Casos reales de tiendas que transformaron su WhatsApp en un canal de ingresos autónomo.
          </motion.p>
        </div>

        {/* TARJETAS LIMPIAS Y BLANCAS */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-32">
          {roiCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-[#D1D5DB]/60 p-5 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group"
            >
              {/* Imagen interna */}
              <div className="w-full h-40 rounded-2xl overflow-hidden mb-6 relative bg-[#F3F4F6]">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-3 left-3 bg-white p-2 rounded-xl shadow-sm">
                  <card.icon className="w-5 h-5 text-[#192832]" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#192832] mb-3">{card.title}</h3>
              <p className="text-[#4C4B4B] text-sm font-medium leading-relaxed mb-8 flex-1">
                {card.description}
              </p>

              {/* Métrica Desnuda (Sin cajas) */}
              <div className="pt-4 border-t border-[#D1D5DB]/40 flex items-baseline gap-3 mt-auto">
                <p className="text-3xl font-extrabold text-[#427AA1]">{card.metric}</p>
                <p className="text-xs font-bold text-[#192832] uppercase tracking-wider">{card.metricLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LLAMADO A LA ACCIÓN FINAL SUTIL */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#192832] mb-6 tracking-tight text-balance">
            Tu competencia ya está automatizando.
          </h2>
          <p className="text-[#4C4B4B] text-base md:text-lg font-medium mb-10 leading-relaxed">
            Implementamos el agente en tu E-commerce en menos de 48 horas. Sin fricción, sin contratos ocultos y con 7 días de prueba sin cargo.
          </p>
          
          {/* Botón Minimalista */}
          <button className="inline-flex items-center justify-center gap-2 bg-[#192832] text-white rounded-full px-8 py-3.5 text-sm md:text-base font-medium transition-all hover:bg-[#427AA1] hover:shadow-md">
            Iniciar Prueba (7 Días)
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  )
}