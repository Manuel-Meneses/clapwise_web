"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Controla el fondo del header al scrollear
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Bloquea el scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const menuItems = ['El Agente', 'Infraestructura', 'Precios']

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm" : "bg-transparent"}`}>
      
      {/* BARRA SUPERIOR - DISEÑO ORIGINAL INTACTO */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between relative z-50">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/logo_web.svg" alt="ClapWise" className="h-16 w-auto object-contain" />
        </a>

        {/* NAVEGACIÓN CENTRAL (Diseño Original Exacto) */}
        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => {
            // Excepción para que "El Agente" vaya a la nueva página
            if (item === 'El Agente') {
              return (
                <a
                  key={item}
                  href="/como-funciona"
                  className="text-sm font-medium text-[#4C4B4B] hover:text-[#427AA1] transition-colors cursor-pointer"
                >
                  {item}
                </a>
              )
            }
            
            const targetId = item === 'Infraestructura' ? 'features' : item.toLowerCase().replace(' ', '-')
            return (
              <a
                key={item}
                href={`#${targetId}`}
                onClick={(e) => handleSmoothScroll(e, targetId)}
                className="text-sm font-medium text-[#4C4B4B] hover:text-[#427AA1] transition-colors cursor-pointer"
              >
                {item}
              </a>
            )
          })}
        </nav>

        {/* BOTÓN CTA ORIGINAL (Actualizado a tag <a> para el link a Calendly) */}
        <div className="hidden md:flex items-center gap-1">
          <a 
            href="https://calendly.com/clapwise/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-2 bg-[#427AA1] text-white rounded-full pl-5 pr-1.5 py-1.5 transition-all duration-300 group overflow-hidden hover:bg-[#00324D] hover:shadow-md"
          >
            <span className="text-sm font-semibold tracking-wide">Iniciar Prueba</span>
            <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
              <ArrowUpRight className="w-3.5 h-3.5 text-[#427AA1] group-hover:text-[#00324D] transition-colors" />
            </span>
          </a>
        </div>

        {/* BOTÓN MENÚ HAMBURGUESA MÓVIL */}
        <button 
          className="md:hidden relative p-2 text-[#192832]" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Alternar menú"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* OVERLAY MÓVIL REPARADO: Plano, rectangular, sin bordes circulares */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out md:hidden rounded-none ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            if (item === 'El Agente') {
              return (
                <a
                  key={item}
                  href="/como-funciona"
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-[#192832] py-4 border-b border-gray-100 flex justify-between items-center"
                >
                  {item}
                  <ArrowUpRight className="w-5 h-5 text-gray-300" />
                </a>
              )
            }
            const targetId = item.toLowerCase().replace(' ', '-')
            return (
              <a
                key={item}
                href={`#${targetId}`}
                onClick={(e) => handleSmoothScroll(e, targetId)}
                className="text-xl font-bold text-[#192832] py-4 border-b border-gray-100 flex justify-between items-center"
              >
                {item}
                <ArrowUpRight className="w-5 h-5 text-gray-300" />
              </a>
            )
          })}
        </nav>

        {/* CTA MÓVIL */}
        <div className="mt-8">
          <a 
            href="https://calendly.com/TU-ENLACE-REAL" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-[#427AA1] text-white rounded-lg py-4 font-semibold hover:bg-[#00324D] shadow-sm transition-all"
          >
            <span>Iniciar Prueba</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
      
    </header>
  )
}