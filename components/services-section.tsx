"use client";

import dynamic from "next/dynamic";

// IMPORTACIÓN DINÁMICA: Le decimos a Next.js que apague el SSR para este componente
const HumanoidCanvas = dynamic(
  () => import("@/components/humanoid-particles").then((mod) => mod.HumanoidCanvas),
  { 
    ssr: false,
    loading: () => (
      // Un loader elegante mientras el motor 3D arranca
      <div className="w-full h-[900px] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
      </div>
    )
  }
);

export default function FeatureSection() {
  return (
    <section className="w-full bg-[#F3F4F6] py-24 px-6 md:px-12 lg:px-24 font-['Manrope',sans-serif] overflow-hidden">
      
      {/* Título Central */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
          Infraestructura IA que <br className="hidden md:block" /> 
          cierra ventas mientras <br className="hidden md:block" /> 
          tu equipo descansa.
        </h2>
      </div>

      {/* Grilla Principal */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* Columna Izquierda: Tarjetas */}
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-3">
            <span className="bg-white w-fit px-4 py-1.5 rounded-full text-sm font-semibold text-gray-800 shadow-sm">
              100% Determinista
            </span>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Olvidate de los bots que inventan precios o dan respuestas enlatadas. Nuestro sistema sigue reglas comerciales estrictas para cuidar la reputación de tu marca con precisión matemática.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="bg-white w-fit px-4 py-1.5 rounded-full text-sm font-semibold text-gray-800 shadow-sm">
              Sincronización de Stock
            </span>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              El agente conoce tu inventario en tiempo real. Asesora sobre talles, variantes y disponibilidad exacta leyendo directamente el catálogo público de tu tienda web.
            </p>
          </div>
        </div>

        {/* Columna Central: Canvas 3D Interactivo */}
        <div className="relative w-full pt-10 flex justify-center items-center">
           <HumanoidCanvas />
        </div>

        {/* Columna Derecha: Tarjetas */}
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-3">
            <span className="bg-white w-fit px-4 py-1.5 rounded-full text-sm font-semibold text-gray-800 shadow-sm">
              Ventas a las 4 AM
            </span>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Capturá a los clientes nocturnos. El sistema atiende, responde objeciones y guía al usuario hacia el checkout cuando el tráfico sigue llegando pero no hay humanos para responder.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="bg-white w-fit px-4 py-1.5 rounded-full text-sm font-semibold text-gray-800 shadow-sm">
              Empatía Humana
            </span>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Interacciones naturales y fluidas por WhatsApp. Entiende el contexto y brinda un trato cálido que convierte consultas frías de Instagram en clientes fidelizados.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}