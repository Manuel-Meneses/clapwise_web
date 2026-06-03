import Image from "next/image"

export function Footer() {
  return (
    <footer id="contacto" className="bg-[#F3F4F6] border-t border-[#D1D5DB]/50 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="mb-8">
          <Image 
            src="/logo_web.svg" 
            alt="ClapWise Logo" 
            width={240} 
            height={60} 
            className="w-auto h-12 md:h-14 grayscale-[50%] hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100" 
          />
        </div>
        
        <p className="text-[#192832] font-semibold tracking-wide mb-1 text-center">
          Ingeniería de Ventas Autónoma.
        </p>
        <p className="text-[#4C4B4B] text-sm mb-12 flex items-center gap-2">
          Construido con <span className="w-2 h-2 rounded-full bg-[#427AA1] animate-pulse" /> en Córdoba, Argentina.
        </p>

        <div className="w-full border-t border-[#D1D5DB]/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#4C4B4B] text-sm font-medium">
            © {new Date().getFullYear()} ClapWise. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="mailto:tu-email@clapwise.com" className="text-[#4C4B4B] hover:text-[#427AA1] text-sm font-bold transition-colors">
              Agendar Demo
            </a>
            <a href="mailto:soporte@clapwise.com" className="text-[#4C4B4B] hover:text-[#192832] text-sm font-medium transition-colors">
              Soporte Técnico
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}