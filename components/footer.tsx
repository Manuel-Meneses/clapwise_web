import { Instagram, Mail, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#192832] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
            <img src="/logo_blanco.svg" alt="Logo ClapWise" className="h-8 w-auto object-contain" /> 
              <span className="text-white text-xl font-bold tracking-tight">ClapWise</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
              Infraestructura de agentes de inteligencia artificial para E-commerce. Vendé 24/7 con precisión matemática y sin alucinaciones de stock.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>Córdoba, Argentina</span>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-white font-semibold mb-6">Plataforma</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#infraestructura" className="hover:text-[#427AA1] transition-colors">Arquitectura</a></li>
              <li><a href="#features" className="hover:text-[#427AA1] transition-colors">Características</a></li>
              <li><a href="#precios" className="hover:text-[#427AA1] transition-colors">Planes y Precios</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="mailto:clapwise@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" /> clapwise@gmail.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/clap.wise" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" /> @clap.wise
                </a>
              </li>
              <li className="pt-2">
                <a href="https://calendly.com/clapwise/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-[#00324D] bg-white rounded-lg hover:bg-gray-100 transition-colors">
                  Agendar reunión <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} ClapWise. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Términos de servicio</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}