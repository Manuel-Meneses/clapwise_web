import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Cabecera Minimalista */}
        <div className="mb-12 md:mb-16">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
            <HelpCircle className="w-6 h-6 text-[#427AA1]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight text-[#192832] mb-4">
            Preguntas <span className="text-[#427AA1]">frecuentes.</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Transparencia técnica y comercial sobre cómo opera nuestra infraestructura.
          </p>
        </div>

        {/* Acordeón de Preguntas (Basado en la Documentación Real) */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          
          <AccordionItem value="item-1" className="border border-gray-200 bg-gray-50/50 px-6 rounded-2xl data-[state=open]:bg-white data-[state=open]:shadow-md transition-all">
            <AccordionTrigger className="text-left font-semibold text-[#192832] hover:no-underline py-6">
              ¿El bot puede inventar precios o vender algo sin stock?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed pb-6">
              No. Utilizamos una arquitectura híbrida determinista. El cerebro probabilístico (la IA) está estrictamente separado de nuestra base de datos relacional. El agente está obligado a consultar el inventario en tiempo real antes de responder; si el stock llega a cero, la transacción se bloquea instantáneamente.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-gray-200 bg-gray-50/50 px-6 rounded-2xl data-[state=open]:bg-white data-[state=open]:shadow-md transition-all">
            <AccordionTrigger className="text-left font-semibold text-[#192832] hover:no-underline py-6">
              ¿Tengo que armar un Excel perfecto para empezar a usarlo?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed pb-6">
              Para nada, garantizamos "fricción cero". Podés enviarnos tu catálogo en un PDF, listas desordenadas o audios caóticos. Nuestro pipeline interno se encarga de limpiar, estructurar y vectorizar la información automáticamente para inyectarla en la base de datos.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-gray-200 bg-gray-50/50 px-6 rounded-2xl data-[state=open]:bg-white data-[state=open]:shadow-md transition-all">
            <AccordionTrigger className="text-left font-semibold text-[#192832] hover:no-underline py-6">
              ¿Cómo funciona el modelo de cobro?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed pb-6">
              Operamos con un modelo B2B SaaS híbrido. Cobramos un "Setup Fee" (costo de instalación) por única vez que cubre el trabajo de limpieza de datos y configuración inicial de la base de datos. Luego, solo pagás una suscripción mensual fija (MRR) por el mantenimiento y el servicio continuo de la IA.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-gray-200 bg-gray-50/50 px-6 rounded-2xl data-[state=open]:bg-white data-[state=open]:shadow-md transition-all">
            <AccordionTrigger className="text-left font-semibold text-[#192832] hover:no-underline py-6">
              ¿Mis clientes se van a dar cuenta de que hablan con un bot?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed pb-6">
              Entrenamos a los agentes para tener empatía comercial e hiper-localización. Se comunican con la jerga específica de tu negocio y tu región, replicando la experiencia de hablar con un vendedor humano en tu mostrador. Además, en casos de alta complejidad, la IA deriva la conversación a un operador humano sin perder el contexto.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  )
}