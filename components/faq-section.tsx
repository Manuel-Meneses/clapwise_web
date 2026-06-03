"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "¿Puede el Agente 'alucinar' e inventar precios o descuentos?",
    answer: "Imposible. Utilizamos una arquitectura RAG (Retrieval-Augmented Generation) estrictamente determinista. El agente no 'inventa' respuestas comerciales; lee directamente tu base de datos y catálogo en tiempo real. Si no hay stock, no lo ofrece."
  },
  {
    question: "¿Qué pasa si el cliente pide hablar con un humano?",
    answer: "El sistema cuenta con un protocolo de 'Handover' automático. Si detecta frustración o una solicitud explícita de hablar con un humano, el agente pausa su intervención, etiqueta el chat y notifica a tu equipo de soporte instantáneamente."
  },
  {
    question: "¿Necesito un equipo técnico para implementarlo?",
    answer: "No. Vos solo nos das acceso de lectura a tu catálogo (Tiendanube/Shopify) y nosotros nos encargamos del 100% de la ingeniería, el entrenamiento del prompt comercial y el despliegue en WhatsApp. Listo en menos de 48 horas."
  },
  {
    question: "¿Cómo funciona la garantía de 'Riesgo Cero' de 7 días?",
    answer: "Te instalamos el agente y lo dejamos operar durante una semana entera sin cobrarte la suscripción. Vas a poder ver en vivo cómo recupera carritos y cierra ventas. Si el ROI no es evidente, lo desinstalamos y no pagás el mes."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // El primero abierto por defecto

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="w-12 h-12 bg-[#427AA1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-6 h-6 text-[#427AA1]" />
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl font-bold text-[#192832] mb-6 tracking-tight"
          >
            Preguntas <span className="text-[#427AA1]">frecuentes.</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-[#D1D5DB]/60 rounded-2xl overflow-hidden bg-[#F3F4F6]/50 hover:bg-[#F3F4F6] transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-[#192832] pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#427AA1] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-[#4C4B4B] font-medium leading-relaxed border-t border-[#D1D5DB]/30 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}