"use client";

import dynamic from "next/dynamic";
import { HelpCircle } from "lucide-react";

// Importación dinámica para apagar el SSR en el motor 3D
const FaqGraphCanvas = dynamic(
  () => import("@/components/faq-graph").then((mod) => mod.FaqGraphCanvas),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-[#427AA1] rounded-full animate-spin"></div>
      </div>
    )
  }
);

export function FAQSection() {
  return (
    // Se fuerza la fuente Manrope en todo el contenedor
    <section className="py-16 md:py-24 bg-[#F3F4F6] relative overflow-hidden font-['Manrope',sans-serif]">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col">
        
        {/* Cabecera Minimalista */}
        <div className="mb-8 md:mb-12 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#192832] mb-4">
            Preguntas <span className="text-[#427AA1]">frecuentes.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl text-center">
            Transparencia técnica y comercial. Explora nuestro ecosistema neuronal para entender cómo opera la infraestructura de ClapWise.
          </p>
        </div>

        {/* El Grafo Interactivo 3D (Reemplazo del Acordeón) */}
        <div className="w-full relative rounded-3xl overflow-hidden shadow-xl backdrop-blur-sm">
          {/* Un gradiente sutil de fondo para dar profundidad */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#427AA1]/5 -z-10" />
          
          <FaqGraphCanvas />
        </div>

      </div>
    </section>
  );
}