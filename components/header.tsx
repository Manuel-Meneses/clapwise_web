"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, ArrowUpRight } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsOpen(false)
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3" : "py-5"}`}>
      <div
        className={`max-w-6xl mx-auto transition-all duration-300 ${
          isScrolled
            ? "bg-[#F3F4F6]/85 backdrop-blur-xl border border-[#4C4B4B]/15 shadow-sm rounded-full px-6 py-2.5 mx-4 lg:mx-auto"
            : "bg-transparent px-6 py-2"
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* IDENTIDAD VISUAL (TU LOGO SVG) */}
          <a href="/" className="flex items-center cursor-pointer transition-transform hover:scale-105 duration-300">
            <Image 
              src="/logo_web.svg" 
              alt="ClapWise Logo" 
              width={240} 
              height={60} 
              className="w-auto h-12 md:h-16" // h-8 en móviles, h-10 en escritorio
              priority
            />
          </a>

          {/* NAVEGACIÓN CENTRAL */}
<nav className="hidden md:flex items-center gap-10">
  {['El Agente', 'Infraestructura', 'Precios'].map((item) => {
    const isAgent = item === 'El Agente';
    
    if (isAgent) {
      return (
        <a
          key={item}
          href="/como-funciona" // URL de la nueva página dedicada
          className="text-sm font-medium text-[#4C4B4B] hover:text-[#427AA1] transition-colors cursor-pointer"
        >
          {item}
        </a>
      );
    }

    // El resto de los links siguen con su comportamiento de smooth scroll
    const targetId = item.toLowerCase().replace(' ', '-');
    return (
      <a
        key={item}
        href={`#${targetId}`}
        onClick={(e) => handleSmoothScroll(e, targetId)}
        className="text-sm font-medium text-[#4C4B4B] hover:text-[#427AA1] transition-colors cursor-pointer"
      >
        {item}
      </a>
    );
  })}
</nav>          {/* LLAMADO A LA ACCIÓN PRINCIPAL */}
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

          {/* BOTÓN MENÚ MÓVIL */}
          <button
            className="md:hidden text-[#192832] transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>

        {/* MENÚ MÓVIL DESPLEGABLE */}
        {isOpen && (
          <nav className="md:hidden mt-5 pb-5 flex flex-col gap-5 border-t border-[#4C4B4B]/10 pt-5">
            {['El Agente', 'Infraestructura', 'Precios'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => handleSmoothScroll(e, item.toLowerCase().replace(' ', '-'))}
                className="text-base font-medium text-[#4C4B4B] hover:text-[#427AA1] transition-colors cursor-pointer px-2"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-[#4C4B4B]/10 flex justify-center">
              <button className="relative flex items-center justify-center gap-2 bg-[#427AA1] text-white rounded-full pl-6 pr-2 py-2 w-full transition-all duration-300 group hover:bg-[#00324D]">
                <span className="text-sm font-semibold tracking-wide">Iniciar Prueba (7 Días)</span>
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-[#427AA1] transition-colors" />
                </span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}